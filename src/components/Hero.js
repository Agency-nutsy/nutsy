'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  const statsRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counters = entry.target.querySelectorAll('[data-target]');
          counters.forEach(counter => {
            const target = parseFloat(counter.dataset.target);
            const isDecimal = target % 1 !== 0;
            const suffix = counter.dataset.suffix || '';
            const duration = 2000;
            const startTime = performance.now();

            const animate = (currentTime) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = eased * target;

              if (isDecimal) {
                counter.textContent = current.toFixed(1) + suffix;
              } else {
                counter.textContent = Math.floor(current) + suffix;
              }

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            requestAnimationFrame(animate);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [mounted]);

  return (
    <section id="home" className={styles.hero}>
      {/* Background layers */}
      <div className={styles.bgGlow}></div>
      <div className={styles.grain} aria-hidden="true">
        <svg width="100%" height="100%">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
        </svg>
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.grid}>
          {/* Left Column */}
          <div className={styles.left}>
            <div className={styles.locationLabel}>
              <span className={styles.goldLine}></span>
              {/* TEMPLATE: Replace with salon location */}
              ✦ YOUR CITY, YOUR STATE
            </div>

            <h1 className={styles.heading}>
              <span className={styles.line} style={{ animationDelay: '0.1s' }}>
                Discover Your
              </span>
              <span className={styles.line} style={{ animationDelay: '0.3s' }}>
                <em className={styles.goldItalic}>Signature</em> Style.
              </span>
            </h1>

            <p className={styles.subtitle}>
              {/* TEMPLATE: Replace with salon description */}
              Step into a realm of luxury and precision. We craft bespoke haircuts, luminous color, and radiant beauty treatments to reveal the most confident you.
            </p>

            <div className={styles.ctas}>
              <a
                href="https://wa.me/+91XXXXXXXXXX?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                Book on WhatsApp
              </a>
              <Link href="/services" className="btn-outline">
                View Services
              </Link>
            </div>

            {/* Trust Stats */}
            <div className={styles.stats} ref={statsRef}>
              <div className={styles.stat}>
                <span className="counter-value" data-target="4.9" data-suffix="">{mounted ? '0' : '4.9'}</span>
                <span className="counter-label">Google Rating</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.stat}>
                <span className="counter-value" data-target="100" data-suffix="+">{mounted ? '0' : '100+'}</span>
                <span className="counter-label">5-Star Reviews</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.stat}>
                <span className="counter-value" data-target="10" data-suffix="+">{mounted ? '0' : '10+'}</span>
                <span className="counter-label">Years Exp.</span>
              </div>
            </div>
          </div>

          {/* Right Column — Overlapping Floating Images */}
          <div className={styles.right}>
            <div className={styles.imageGrid}>
              <div className={styles.orb1}></div>
              <div className={styles.orb2}></div>
              
              <div className={`${styles.imgWrap} ${styles.imgMain}`}>
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80"
                  alt="Premium salon interior"
                  loading="eager"
                  decoding="async"
                />
              </div>
              
              <div className={`${styles.imgWrap} ${styles.imgTopRight}`}>
                <img
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400&q=80"
                  alt="Hair styling"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              
              <div className={`${styles.imgWrap} ${styles.imgBottomLeft}`}>
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80"
                  alt="Makeup"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Floating Badges */}
              <div className={styles.floatingBadge1}>
                <span className={styles.badgeIcon}>✨</span>
                <span>Premium Care</span>
              </div>
              
              <div className={styles.floatingBadge2}>
                <span className={styles.badgeIcon}>🏆</span>
                <span>Top Rated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
