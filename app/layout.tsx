import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import MenuOverlay from "@/components/MenuOverlay";
import Preloader from "@/components/Preloader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AVS Vignesh — Full Stack Developer & Creative Technologist",
  description:
    "Portfolio of Amarapinni Venkata Sai Vignesh — Full-Stack Developer, DRDO Intern, and builder of scalable web applications and intelligent systems.",
  keywords: [
    "AVS Vignesh",
    "Full Stack Developer",
    "React Developer India",
    "DRDO Intern",
    "SRM Trichy",
    "Portfolio",
  ],
  authors: [{ name: "Amarapinni Venkata Sai Vignesh" }],
  openGraph: {
    title: "AVS Vignesh — Full Stack Developer",
    description:
      "Full-Stack Developer building scalable web apps, intelligent systems, and motion-driven digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable}`}>
      <body className="bg-bg text-ink font-sans antialiased">
        <Preloader />
        <SmoothScrollProvider>
          <CustomCursor />
          <Navbar />
          <MenuOverlay />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
