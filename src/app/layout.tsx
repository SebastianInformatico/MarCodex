import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MarCodex | Software para acuicultura y logística marítima",
  description:
    "Desarrollo de software, integración de datos y soluciones digitales para empresas acuícolas, marítimas y salmoneras del sur de Chile.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className={`${workSans.variable} font-display antialiased`}>{children}</body>
    </html>
  );
}
