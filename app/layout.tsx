import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Dito natin i-import ang AppKitProvider mula sa context folder
import { AppKitProvider } from '../context'; 

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
        <AppKitProvider>
          {children}
        </AppKitProvider>
      </body>
    </html>
  );
}