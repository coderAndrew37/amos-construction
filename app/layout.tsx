import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import WhatsAppWidget from "./_components/FloatingWhatsapp";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import "./globals.css";
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
    default: "Amos & CO. | Premium Roofing & Construction Solutions Kenya",
    template: "%s | Amos & CO.",
  },
  description:
    "East Africa's leader in NCA-certified roofing, structural timber supply, and professional construction machinery hire.",
  keywords: [
    "Roofing Kenya",
    "Timber Supply Nairobi",
    "Machine Hire Kenya",
    "Amos & CO.",
    "PVC Ceilings",
  ],
  authors: [{ name: "Amos & CO." }],
  creator: "Amos & CO.",
  metadataBase: new URL("https://www.amosandco.co.ke"),
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://www.amosandco.co.ke",
    siteName: "Amos & CO.",
    title: "Amos & CO. | Quality You Can Build On",
    description:
      "NCA-certified roofing and construction materials provider in Kenya.",
    images: [
      {
        url: "/og-image.jpg", // Create this 1200x630 image for WhatsApp previews
        width: 1200,
        height: 630,
        alt: "Amos & CO. Construction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amos & CO.",
    description: "Premium Roofing & Construction Solutions",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <WhatsAppWidget />
        <Footer />
      </body>
    </html>
  );
}
