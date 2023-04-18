import { cookies } from "next/headers";
import "./globals.css";

export const metadata = {
  title:
    "Download Instagram Videos and Reels for Free - Instagram Video Downloader",
  description:
    "Download Instagram videos and reels for free with our easy-to-use Instagram downloader tool. Save Instagram videos and reels in high quality with our fast, reliable downloader",
  keywords:
    "Instagram downloader, Reels downloader, Instagram video downloader, Download Instagram videos, Save Instagram videos, Instagram reels downloader, Download Instagram reels, \
    Save Instagram reels, Video downloader for Instagram, Instagram video saver, Instagram reel saver, Instagram reel video downloader, Reels video saver, Instagram video download \
    app, Free Instagram downloader",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sessionCookies = cookies();
  const themeCookie = sessionCookies.get("theme");
  const currentTheme = themeCookie?.value ?? "light";

  return (
    <html lang="en" className={currentTheme}>
      <body className="overflow-x-hidden bg-white font-mono text-gray-900 dark:bg-gray-800 dark:text-slate-100">
        {children}
      </body>
    </html>
  );
}