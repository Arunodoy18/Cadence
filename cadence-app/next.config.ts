import type { NextConfig } from "next";

// Two build modes:
//  - default: the backend API (deployed to Netlify). The native app calls it.
//  - CADENCE_NATIVE=1: a fully static export of the UI that gets bundled into
//    the Android/iOS app (see scripts/build-native.mjs, which sets this).
const isNative = process.env.CADENCE_NATIVE === "1";

const nextConfig: NextConfig = {
  turbopack: {},
  ...(isNative
    ? { output: "export" as const, images: { unoptimized: true }, trailingSlash: true }
    : {
        async headers() {
          return [
            {
              source: "/:path*",
              headers: [
                { key: "X-Content-Type-Options", value: "nosniff" },
                { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
                { key: "Permissions-Policy", value: "microphone=(self), camera=(), geolocation=()" },
                { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
              ],
            },
          ];
        },
      }),
};

export default nextConfig;
