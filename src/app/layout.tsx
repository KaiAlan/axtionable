import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import InitialLoader from "@/components/loader";
import "./globals.css";
import LayoutContext from "@/components/layout-context";
import { LoadingProvider } from "@/components/loadingContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Axtionable",
  description: "Discover jobs like never before.",
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
        <LoadingProvider>
          <LayoutContext>
          {children}
          </LayoutContext>
        </LoadingProvider>
      </body>
    </html>
  );
}
