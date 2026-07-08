import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";
import FogBackground from "@/components/FogBackground";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moiz Islam — The Tarnished Developer",
  description:
    "Portfolio of Moiz Islam, a game and full-stack developer building web, mobile, and Unity projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ash text-bone font-sans">
        <LoadingScreen />
        <FogBackground />
        <CustomCursor />
        <ScrollProgressBar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
