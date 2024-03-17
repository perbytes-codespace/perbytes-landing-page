import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const SyneFont = Inter({
  weight: ['100' , '200', '300', '500', '600', '400', '700'],
  subsets: ['latin'],
})

import './globals.css'
import { Header } from './components/header';
import { Footer } from './components/footer';

export const metadata: Metadata = {
  title: "Perbytes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={SyneFont.className}>
      <main className="bg-[#E6F0F3]">
          <Header />
        {children}
        <Footer />
        </main>
      </body>
    </html>
  );
}
