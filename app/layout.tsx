import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar/Navbar";
import MainLayout from "@/components/Layout/MainLayout";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jet-brains",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "KIRAN BIJU P - FULL STACK ENGINEER",
  description:
    "Portfolio of Kiran Biju P, a full-stack engineer specializing in building scalable and reliable systems. Explore projects, skills, and experience in software engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "min-h-full min-w-screen antialiased font-sans",
        inter.variable,
        spaceGrotesk.variable,
        jetBrains.variable
      )}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
