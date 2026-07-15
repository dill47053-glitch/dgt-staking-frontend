// Alisin ang import line dito

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Alisin ang <AppKitProvider> tag sa paligid ng children */}
        {children}
      </body>
    </html>
  );
}