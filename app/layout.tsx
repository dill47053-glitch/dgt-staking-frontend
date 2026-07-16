import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Siguraduhin na ang path ng AppKitProvider ay tama (halimbawa: '../context')
import { AppKitProvider } from './context'; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital Gold Token",
  description: "DGT Web3 Staking Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Dito natin binabalot ang children para gumana ang wallet sa lahat ng pages */}
        <AppKitProvider>
          {children}
        </AppKitProvider>
      </body>
    </html>
  );
}