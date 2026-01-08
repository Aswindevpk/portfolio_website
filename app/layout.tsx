import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Aswin Dev | React & Next.js Developer",
    template: "%s | Aswin Dev - React & Next.js Developer",
  },
  description:
    "Experienced Full-Stack React and Next.js Developer building fast, scalable, and responsive web applications with modern technologies and clean, maintainable code.",
  keywords: [
    "Next.js Developer",
    "React Developer",
    "Full Stack Developer",
    "JavaScript",
    "Supabase",
  ],
  authors: [{ name: "Aswin Dev" }],
  creator: "Aswin Dev",
  metadataBase: new URL("https://aswindev.in"),
  openGraph: {
    title: "Aswin Dev | React & Next.js Developer",
    description:
      "Experienced Full-Stack React and Next.js Developer building fast, scalable, and responsive web applications with modern technologies and clean, maintainable code.",
    url: "https://aswindev.in",
    siteName: "Aswin Dev",
    images: [
      {
        url: "/og.webp",
        width: 1200,
        height: 630,
        alt: "Aswin Dev Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aswin Dev | React & Next.js Developer",
    description:
      "Experienced Full-Stack React and Next.js Developer building fast, scalable, and responsive web applications with modern technologies and clean, maintainable code.",
    images: ["/og.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon-v3.png", type: "image/png" },
      { url: "/favicon-v3.ico" },
    ],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <meta name="apple-mobile-web-app-title" content="Aswin" />
      <link rel="icon" href="/favicon-v3.ico" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased`}
      >
        <Navbar />
        {children}
        <Footer links={[]} />
      </body>
    </html>
  );
}
