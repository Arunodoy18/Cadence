import React, { useRef, useEffect } from 'react';

interface AudioVisualizerProps {
  analyser: AnalyserNode | null;
  isRecording: boolean;
  color?: string;
}

export const AudioVisualizer: React.FC<AudioVisualizerProps> = ({ analyser, isRecording, color = '#2F8F83' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !analyser || !isRecording) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    let animationFrameId: number;

    const draw = () => {
      animationFrameId = requestAnimationFrame(draw);

      analyser.getByteFrequencyData(dataArray);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const barWidth = (canvas.width / bufferLength) * 2.5;
      let x = 0;

      // Draw mirrored from center for a cool symmetric effect
      const centerY = canvas.height / 2;

      for (let i = 0; i < bufferLength; i++) {
        // Smooth out the high frequencies which are usually just noise
        if (i > bufferLength * 0.75) continue;

        const value = dataArray[i];
        // Scale down the wave height slightly so it fits nicely
        const percent = value / 255;
        const barHeight = (canvas.height * percent * 0.8) + 2; // Min 2px height

        ctx.fillStyle = color;
        
        // Draw top half
        ctx.fillRect(x, centerY - (barHeight / 2), barWidth - 1, barHeight);

        x += barWidth;
      }
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [analyser, isRecording, color]);

  return (
    <div style={{ width: '100%', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {isRecording ? (
        <canvas ref={canvasRef} width={200} height={60} style={{ width: '200px', height: '60px' }} />
      ) : (
        <div style={{ width: '200px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '100%', height: '2px', background: '#E0D6C8', borderRadius: '1px' }}></div>
        </div>
      )}
    </div>
  );
};
