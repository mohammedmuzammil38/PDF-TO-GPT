import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const dynamic = 'force-dynamic';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className="min-h-screen h-screen overflow-hiddeng flex 
      flex-col">
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
