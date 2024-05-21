import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Projetão",
  description: "Criação de Diversos Templates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-Mont" >{children}</body>
    </html>
  );
}
