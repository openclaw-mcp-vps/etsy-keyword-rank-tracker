import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Etsy Keyword Rank Tracker – Monitor Your Listing Rankings",
  description: "Track where your Etsy listings rank for important keywords. Get daily ranking checks, historical data, and email alerts when rankings change."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5dfec7e0-d68d-4511-8815-5e648a7c7af5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
