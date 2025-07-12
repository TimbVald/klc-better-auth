import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: "Mem's Auth | T3 Stack",
  description: "Mem's Auth | T3 Stack",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${geist.variable}`}>
      <body>
        <TRPCReactProvider>
          {children}
          
        </TRPCReactProvider>
        <Toaster />
      </body>
    </html>
  );
}
