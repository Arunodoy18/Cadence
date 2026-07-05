export class WavRecorder {
  private audioContext: AudioContext | null = null;
  private mediaStream: MediaStream | null = null;
  private processor: ScriptProcessorNode | null = null;
  private source: MediaStreamAudioSourceNode | null = null;
  public analyser: AnalyserNode | null = null;
  private audioChunks: Float32Array[] = [];
  private isRecording = false;

  async start() {
    this.mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
    this.audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)({
      sampleRate: 16000 // Force 16kHz for Azure
    });

    this.analyser = this.audioContext.createAnalyser();
    this.analyser.fftSize = 256;

    this.source = this.audioContext.createMediaStreamSource(this.mediaStream);
    
    // Use ScriptProcessor for capturing raw PCM data (4096 buffer size is safe across browsers)
    this.processor = this.audioContext.createScriptProcessor(4096, 1, 1);
    
    this.source.connect(this.analyser);
    this.analyser.connect(this.processor);
    this.processor.connect(this.audioContext.destination);

    this.audioChunks = [];
    this.isRecording = true;

    this.processor.onaudioprocess = (e) => {
      if (!this.isRecording) return;
      const channelData = e.inputBuffer.getChannelData(0);
      this.audioChunks.push(new Float32Array(channelData));
    };
  }

  stop(): Promise<Blob> {
    return new Promise((resolve) => {
      this.isRecording = false;

      if (this.processor) {
        this.processor.disconnect();
        this.processor.onaudioprocess = null;
      }
      if (this.analyser) this.analyser.disconnect();
      if (this.source) this.source.disconnect();
      if (this.mediaStream) {
        this.mediaStream.getTracks().forEach(t => t.stop());
      }
      if (this.audioContext) {
        this.audioContext.close();
      }

      // Concatenate all chunks
      const totalLength = this.audioChunks.reduce((acc, chunk) => acc + chunk.length, 0);
      const result = new Float32Array(totalLength);
      let offset = 0;
      for (const chunk of this.audioChunks) {
        result.set(chunk, offset);
        offset += chunk.length;
      }

      // Convert Float32 to 16-bit PCM
      const pcmData = this.floatTo16BitPCM(result);
      const wavData = this.encodeWAV(pcmData, 16000); // 16kHz

      resolve(new Blob([wavData], { type: 'audio/wav' }));
    });
  }

  private floatTo16BitPCM(input: Float32Array): Int16Array {
    const output = new Int16Array(input.length);
    for (let i = 0; i < input.length; i++) {
      const s = Math.max(-1, Math.min(1, input[i]));
      output[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
    }
    return output;
  }

  private encodeWAV(samples: Int16Array, sampleRate: number): ArrayBuffer {
    const buffer = new ArrayBuffer(44 + samples.byteLength);
    const view = new DataView(buffer);

    // RIFF chunk descriptor
    this.writeString(view, 0, 'RIFF');
    view.setUint32(4, 36 + samples.byteLength, true);
    this.writeString(view, 8, 'WAVE');

    // FMT sub-chunk
    this.writeString(view, 12, 'fmt ');
    view.setUint32(16, 16, true); // Subchunk1Size (16 for PCM)
    view.setUint16(20, 1, true); // AudioFormat (1 for PCM)
    view.setUint16(22, 1, true); // NumChannels (1 for Mono)
    view.setUint32(24, sampleRate, true); // SampleRate
    view.setUint32(28, sampleRate * 2, true); // ByteRate (SampleRate * NumChannels * BitsPerSample/8)
    view.setUint16(32, 2, true); // BlockAlign (NumChannels * BitsPerSample/8)
    view.setUint16(34, 16, true); // BitsPerSample

    // Data sub-chunk
    this.writeString(view, 36, 'data');
    view.setUint32(40, samples.byteLength, true);

    // Write PCM samples
    const length = samples.length;
    let offset = 44;
    for (let i = 0; i < length; i++) {
      view.setInt16(offset, samples[i], true);
      offset += 2;
    }

    return buffer;
  }

  private writeString(view: DataView, offset: number, string: string) {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  }
}
