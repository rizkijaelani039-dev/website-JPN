import Link from 'next/link';
import { site } from '@/data/site';

export function Header(){return <header className="header"><Link href="/" className="brand">JPN<span>•</span></Link><nav><Link href="/layanan/">Services</Link><Link href="/proyek/">Projects</Link><Link href="/tentang/">About</Link><Link href="/knowledge/">Knowledge</Link><Link href="/kontak/">Contact</Link></nav><Link className="headerCta" href="/kontak/">Konsultasikan Proyek ↗</Link></header>}
export function Footer(){return <footer><div><strong>{site.name}</strong><p>Electrical, Renewable Energy & Telecom</p></div><div className="footerLinks"><Link href="/layanan/">Services</Link><Link href="/proyek/">Projects</Link><Link href="/knowledge/">Knowledge</Link><Link href="/kontak/">Contact</Link></div><div><p>{site.location}</p><a href={`mailto:${site.email}`}>{site.email}</a></div><small>© 2026 {site.name}. All rights reserved.</small></footer>}
export function WhatsAppButton(){return <a className="wa" href={site.whatsapp ? `https://wa.me/${site.whatsapp}` : '/kontak/'}>{site.whatsapp ? 'Konsultasi WhatsApp' : 'Konsultasi Sekarang'}</a>}
export function Shell({children}:{children:React.ReactNode}){return <><Header/><main>{children}</main><WhatsAppButton/><Footer/></>}
