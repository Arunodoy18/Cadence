import QRCode from 'qrcode';
import { APK_URL } from '@/lib/legal';

// Server-rendered QR so desktop visitors can scan it and download on their phone.
export async function QrCard() {
  const svg = await QRCode.toString(APK_URL, { type: 'svg', margin: 1, color: { dark: '#2A2320', light: '#FFFFFF' } });
  return (
    <div className="ld-qr">
      <div className="ld-qr-code" role="img" aria-label="QR code that downloads the Cadence APK" dangerouslySetInnerHTML={{ __html: svg }} />
      <div><b>On a computer?</b><span>Scan with your phone camera to download.</span></div>
    </div>
  );
}
