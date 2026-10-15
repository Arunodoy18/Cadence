import type { Metadata } from 'next';
import CadenceApp from '@/components/CadenceApp';
import Landing from '@/components/landing/Landing';

// One codebase, two front doors:
//  - the website (cadence.buildc3.tech) shows the landing page + APK download;
//  - the Android/iOS app bundle (built with CADENCE_NATIVE=1) contains the app itself.
const isNativeBuild = process.env.CADENCE_NATIVE === '1';

export const metadata: Metadata = isNativeBuild
  ? { title: 'Cadence' }
  : {
      title: 'Cadence — speak any language for real',
      description:
        'Free Android app to learn 35 languages by talking: live AI conversation, pronunciation scoring, real-world lessons and graded reading. Download the APK.',
      openGraph: {
        title: 'Cadence — speak any language for real',
        description: 'Live AI conversation in 35 languages, including Hindi, Marathi, Gujarati, Assamese, Malayalam and Kannada. Free for Android.',
        url: 'https://cadence.buildc3.tech',
        siteName: 'Cadence',
        type: 'website',
      },
    };

export default function Page() {
  return isNativeBuild ? <CadenceApp /> : <Landing />;
}
