import type { Metadata } from 'next';
import './globals.css';
import { Shell } from '@/components/SiteShell';

export const metadata: Metadata = {
  metadataBase: new URL('https://rizkijaelani039-dev.github.io/website-JPN/'),
  title: { default: 'CV. Jaya Prima Nusantara | Electrical, Renewable Energy & Telecom', template: '%s | CV. Jaya Prima Nusantara' },
  description: 'CV. Jaya Prima Nusantara menyediakan solusi Electrical, Renewable Energy & Telecom untuk kebutuhan bisnis, industri, komersial dan hunian.',
  alternates: { canonical: './' },
  openGraph: { type: 'website', locale: 'id_ID', siteName: 'CV. Jaya Prima Nusantara' },
  robots: { index: true, follow: true },
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="id"><body><Shell>{children}</Shell></body></html>}
