import { AppKitProvider } from '../context';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppKitProvider>
          {children}
        </AppKitProvider>
      </body>
    </html>
  );
}