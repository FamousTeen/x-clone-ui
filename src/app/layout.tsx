import "./globals.css";

import type { Metadata } from 'next'
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: 'Lama Dev X Clone',
  description: 'Next.js social media application project',
}

export default function AppLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
