
import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import './globals.css';

const workSans = Work_Sans({ 
  subsets: ['latin'],
  variable: '--font-work-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MarCodex - Nuestra Historia',
  description: 'La historia de MarCodex, transformando la acuicultura del sur de Chile con precisión y autenticidad.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${workSans.variable} font-display antialiased`} style={{ fontFamily: 'var(--font-work-sans), "Work Sans", sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
