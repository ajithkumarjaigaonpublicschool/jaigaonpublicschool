import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer2';
// import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://jaigaonpublicschool.com'),
  title: {
    default: "Jaigaon Public School",
    template: "%s - Jaigaon Public School",
  },
  description: 'Nurturing minds, building futures in West Bengal since 2019',

  // Open Graph metadata
  openGraph: {
    title: 'Jaigaon Public School - Primary Education Excellence',
    description: 'Nurturing minds, building futures in West Bengal since 2019',
    url: 'https://jaigaonpublicschool.com',
    siteName: 'Jaigaon Public School',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Jaigaon Public School - Happy primary school children learning and playing',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },

  // Twitter card metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Jaigaon Public School - Primary Education Excellence',
    description: `Providing quality primary education from Nursery to Class 4 in Jaigaon, West Bengal. Building strong foundations for your child's future.`,
    images: [
      {
        url: '/og-image.webp',
        alt: 'Jaigaon Public School - Happy primary school children learning and playing',
        width: 1200,
        height: 630,
      },
    ],
  },

  // Additional metadata
  keywords: [
    'primary school',
    'nursery school',
    'kindergarten',
    'elementary education',
    'Jaigaon',
    'West Bengal',
    'early childhood education',
    'primary education',
    'class 1-4',
    'nursery admission',
    'best primary school Jaigaon',
  ],
  authors: [{ name: 'Jaigaon Public School' }],
  creator: 'Jaigaon Public School',
  publisher: 'Jaigaon Public School',
  formatDetection: {
    email: true, // Enabled for easy parent communication
    address: true, // Enabled for easy navigation to school
    telephone: true, // Enabled for quick parent contact
  },
  robots: {
    index: true,
    follow: true,
  },
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