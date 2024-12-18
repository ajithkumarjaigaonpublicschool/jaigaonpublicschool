import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer2';
// import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: "Jaigaon Public School",
    template: "%s - Jaigaon Public School"
  },
  description: 'Nurturing minds, building futures in West Bengal since 2019',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <head>
        <link rel="icon" href="/logo-bg.png" sizes="any" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <Navbar />
        <main className=''>{children}</main>
        <Footer />
        {/* <Footer /> */}
      </body>
    </html>
  );
}