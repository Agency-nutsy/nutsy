'use client';
import Link from 'next/link';
import styles from './About.module.css';

const features = [
  { icon: '🥇', text: "L'Oréal Professionnel Partner" },
  { icon: '🏳️‍🌈', text: 'LGBTQ+ Friendly Space' },
  { icon: '✂️', text: 'Expert Stylists Since 2014' },
  { icon: '⭐', text: '4.9 Stars — 126 Reviews' },
];

export default function About() {
  return (
    <section className={`section ${styles.about}`}>
      <div className={`container ${styles.grid}`}>
        {/* Left Column — Image Stack */}
        <div className={styles.imageStack} data-aos="fade-right">
          <div className={styles.img1}>
            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&q=80"
              alt="Professional hair styling in action at V Unisex Salon"
              width={600}
              height={450}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className={styles.img2}>
            <img
              src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=600&q=80"
              alt="Expert barber providing precision grooming services"
              width={600}
              height={450}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className={styles.floatingCard}>
            <span className={styles.floatingRating}>★ 4.9 / 5</span>
            <span className={styles.floatingText}>Based on 126 Google Reviews</span>
          </div>
        </div>

        {/* Right Column — Text */}
        <div className={styles.text} data-aos="fade-left">
          <span className="section-label">OUR STORY</span>
          <h2 className="section-title">Where <span className="gold-text">Craft</span> Meets Luxury</h2>
          <p className={styles.body}>
            V Unisex Salon was born from a single belief — that premium beauty care should be accessible
            to everyone in Delhi. Owned by the Manocha Brothers and nestled in the heart of Saket&apos;s Mini Market,
            our salon has grown into a trusted destination for men, women, and all who believe their appearance
            is worth investing in. Our stylists — led by the celebrated Faizan — bring years of expertise,
            precision, and passion to every service, every day.
          </p>
          <p className={styles.body}>
            We are a certified L&apos;Oréal Professionnel partner salon, which means every hair treatment uses only
            professional-grade products. Our space is clean, air-conditioned, relaxing, and — most importantly —
            completely welcoming to everyone, including our LGBTQ+ family.
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
