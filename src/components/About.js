'use client';
import Link from 'next/link';
import styles from './About.module.css';

const features = [
  { icon: '💇', text: 'Unisex Salon & Makeup Studio' },
  { icon: '♿', text: 'Wheelchair Accessible' },
  { icon: '💳', text: 'Cards & UPI Accepted' },
  { icon: '⭐', text: '4.4 Stars — 262 Reviews' },
];

export default function About() {
  return (
    <section className={`section ${styles.about}`}>
      <div className={`container ${styles.grid}`}>
        {/* Left Column — Image Stack */}
        <div className={styles.imageStack} data-aos="fade-right">
          <div className={styles.img1}>
            <img
              src="/interior/8.webp"
              alt="Studio Fix salon interior with styling chairs and wash basins in Amar Colony, Delhi"
              width={600}
              height={450}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className={styles.img2}>
            <img
              src="/interior/9.webp"
              alt="Elegant interior view of Studio Fix with arched mirrors and premium decor"
              width={600}
              height={450}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className={styles.floatingCard}>
            <span className={styles.floatingRating}>★ 4.4 / 5</span>
            <span className={styles.floatingText}>Based on 262 Google Reviews</span>
          </div>
        </div>

        {/* Right Column — Text */}
        <div className={styles.text} data-aos="fade-left">
          <span className="section-label">OUR STORY</span>
          <h2 className="section-title">Where <span className="gold-text">Craft</span> Meets Luxury</h2>
          <p className={styles.body}>
            Studio Fix by Tanvi Jain is a premium unisex salon and makeup studio nestled in the
            heart of Amar Colony, Delhi. Known for exceptional bridal makeup, expert hair makeovers,
            and meticulous attention to detail, Studio Fix has earned a loyal following of clients who
            trust us with their most important looks.
          </p>
          <p className={styles.body}>
            From stunning balayage and keratin treatments to relaxing facials and nail art, every
            service is delivered by our talented team — including David, Rajesh, and Gazal — in a
            warm, welcoming space designed for comfort and luxury. Rated 4.4★ on Google with 262
            reviews, our clients consistently praise our friendly team and professional results.
          </p>

          <div className={styles.features}>
            {features.map((f, i) => (
              <div className={styles.pill} key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <span className={styles.pillIcon}>{f.icon}</span>
                <span className={styles.pillText}>{f.text}</span>
              </div>
            ))}
          </div>

          <Link href="/team" className={styles.ctaLink}>
            Meet Our Team →
          </Link>
        </div>
      </div>
    </section>
  );
}
