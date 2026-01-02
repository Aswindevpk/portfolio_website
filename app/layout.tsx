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
    default: "Aswin Dev | React & Next.js Developer | Portfolio & Projects",
    template: "%s | Aswin Dev - React & Next.js Developer",
  },
  description:
    "Experienced Full-Stack Developer specializing in React, Next.js, and modern web technologies. I build fast, responsive, and scalable web applications with clean code and great user experiences. Let's create something amazing together!",
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
    title: "Aswin Dev | Full-Stack Developer",
    description: "Modern web apps with Next.js & React",
    url: "https://yourdomain.com",
    siteName: "Aswin Dev",
    images: [
      {
        url: "/og-image.png",
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
    title: "Aswin Dev",
    description: "Full-stack developer portfolio",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico?v=2",
    apple: "/apple-icon.png",
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
