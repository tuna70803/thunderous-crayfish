import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
      <Script id="load-service-worker">
        {`if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('/service-worker/default_worker.js');
        }`}
      </Script>
    </html>
  );
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thunderous Crayfish Bus",
  description: "내 버스는 언제오나?",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
  icons: {
    other: [
      {
        url: "/splash/iphonexr_splash.png",
        media:
          "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)",
        rel: "apple-touch-startup-image",
      },
      {
        url: "/splash/iphonexsmax_splash.png",
        media:
          "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)",
        rel: "apple-touch-startup-image",
      },
      {
        url: "/splash/ipad_splash.png",
        media:
          "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)",
        rel: "apple-touch-startup-image",
      },
      {
        url: "/splash/ipadpro2_splash.png",
        media:
          "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)",
        rel: "apple-touch-startup-image",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#444444",
};
