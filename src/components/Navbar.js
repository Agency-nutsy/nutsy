'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Our Team', href: '/team' },
  { label: 'Offers', href: '/offers' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo */}
        {/* TEMPLATE: Replace salon name */}
        <Link href="/" className={styles.logo} aria-label="Salon Home">
          <svg className={styles.logoSvg} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M24 4L20 8L16 6L18 10L14 12L18 14L24 42L30 14L34 12L30 10L32 6L28 8L24 4Z" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinejoin="round"/>
            <path d="M24 12L20 28L24 42L28 28L24 12Z" fill="#d4af37" fillOpacity="0.15"/>
            <path d="M18 2L20 6M30 2L28 6M24 0L24 4" stroke="#d4af37" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
            <circle cx="24" cy="4" r="1.5" fill="#d4af37" opacity="0.8"/>
          </svg>
          {/* TEMPLATE: Replace with salon name */}
          <span className={styles.logoText}>YOUR SALON NAME</span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${isActive(link.href) ? styles.navLinkActive : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className={styles.actions}>
          <Link href="/contact" className={styles.bookBtn}>
            Book Now
          </Link>

          {/* Mobile Hamburger */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerActive : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Gold bottom line */}
      <div className={styles.goldLine}></div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileOverlay} ${menuOpen ? styles.mobileOverlayActive : ''}`}>
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.mobileLink} ${isActive(link.href) ? styles.mobileLinkActive : ''}`}
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className={styles.mobileBookBtn}>
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
