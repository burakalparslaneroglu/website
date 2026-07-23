import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Burak Eroğlu | Akademik Profil ve Ders Portalı",
  description: "Zaman serisi analizi, finansal ekonometri ve makroekonomi üzerine akademik profil ve ders kaynakları.",
  openGraph: {
    title: "Burak Eroğlu | Akademik Profil ve Ders Portalı",
    description: "Zaman serisi analizi, finansal ekonometri ve makroekonomi.",
    images: [{ url: "/og.png", width: 1680, height: 940 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
