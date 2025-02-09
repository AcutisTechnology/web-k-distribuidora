import type { Metadata } from "next";
import { Montserrat, Syne } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

// Configuração da fonte Syne
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "K Distribuidora",
  description: "Beleza preimum, preço acessível.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${syne.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
