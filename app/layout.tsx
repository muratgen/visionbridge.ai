import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VisionBridge.ai | AI Transformation, Advisory, and Engineering",
  description:
    "VisionBridge.ai helps enterprises and startups accelerate AI transformation, prototyping, engineering, and global growth.",
  openGraph: {
    title: "VisionBridge.ai | AI Transformation, Advisory, and Engineering",
    description:
      "VisionBridge.ai helps enterprises and startups accelerate AI transformation, prototyping, engineering, and global growth.",
    url: "https://visionbridge.ai",
    siteName: "VisionBridge.ai",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
