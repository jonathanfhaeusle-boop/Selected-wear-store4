import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Selected Wear",
  description: "Minimalist grey and white fashion store.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
