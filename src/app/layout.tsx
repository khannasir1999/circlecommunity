import type { Metadata } from "next";
import "./global.css";
import { montserrat, dancing, playfair } from '@/src/lib/font';

export const metadata: Metadata = {
  title: "Circle Community",
  description: "Community platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className={`${montserrat.variable} ${dancing.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}