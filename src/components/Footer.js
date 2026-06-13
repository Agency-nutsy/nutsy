'use client';
import Link from 'next/link';
import styles from './Footer.module.css';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Our Team', href: '/team' },
  { label: 'Offers', href: '/offers' },
  { label: 'Contact', href: '/contact' },
];

const trustSignals = [
  { icon: '⭐', text: '4.4★ Google Rating' },
  { icon: '📝', text: '262+ Reviews' },
  { icon: '💇', text: 'Unisex Salon & Makeup' },
  { icon: '♿', text: 'Wheelchair Accessible' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Col 1 — Logo & About */}
          <div className={styles.col}>
            <Link href="/" className={styles.logo}>
              <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M24 4L20 8L16 6L18 10L14 12L18 14L24 42L30 14L34 12L30 10L32 6L28 8L24 4Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M24 12L20 28L24 42L28 28L24 12Z" fill="currentColor" fillOpacity="0.15"/>
                <circle cx="24" cy="4" r="1.5" fill="currentColor" opacity="0.8"/>
              </svg>
              <span>STUDIO FIX</span>
            </Link>
            <p className={styles.tagline}>Luxury Hair, Makeup & Beauty Redefined.</p>
            <p className={styles.blurb}>
              Delhi&apos;s trusted unisex salon by Tanvi Jain. Expert stylists, premium services,
              and a warm, welcoming space for everyone.
            </p>
            <div className={styles.socials}>
              <a href="https://www.instagram.com/studiofixdelhi/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialIcon}>📷</a>
              <a href="https://wa.me/917042044784" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={styles.socialIcon}>💬</a>
              <a href="https://maps.app.goo.gl/WP7A4nYDrUAq3Aa58" target="_blank" rel="noopener noreferrer" aria-label="Google Maps" className={styles.socialIcon}>📍</a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Trust Signals */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Why Choose Us</h4>
            <div className={styles.trustList}>
              {trustSignals.map((signal, i) => (
                <div className={styles.trustItem} key={i}>
                  <span className={styles.trustIcon}>{signal.icon}</span>
                  <span>{signal.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 4 — Contact */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact Info</h4>
            <div className={styles.contactInfo}>
              <p>📍 E-33, Amar Colony, 1st Floor, Above Dominos, Delhi 110024</p>
              <p><a href="tel:+917042044784">📞 +91 70420 44784</a></p>
              <p>🕐 10:30 AM – 9:00 PM (All Days)</p>
            </div>
            <a
              href="https://wa.me/917042044784?text=Hi%2C%20I%20want%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ marginTop: 'var(--space-4)', width: '100%', justifyContent: 'center' }}
            >
              Book on WhatsApp
            </a>
          </div>
        </div>

        <hr className="gold-line" style={{ margin: 'var(--space-10) 0 var(--space-6)' }} />

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Studio Fix by Tanvi Jain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
