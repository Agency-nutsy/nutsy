'use client';
import styles from './InstagramFeed.module.css';

/* TEMPLATE: Replace with actual salon Instagram images */
const posts = [
  { src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=80', alt: 'Salon interior shot' },
  { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80', alt: 'Makeup transformation' },
  { src: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400&q=80', alt: 'Hairstyling work' },
  { src: 'https://images.unsplash.com/photo-1620454955651-2e7d5a6c9e83?w=400&q=80', alt: 'Colour transformation' },
  { src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&q=80', alt: 'Facial treatment' },
  { src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80', alt: 'Bridal look' },
];

export default function InstagramFeed() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-label">FOLLOW US</span>
          {/* TEMPLATE: Replace with salon Instagram handle */}
          <h2 className="section-title">We&apos;re on <span className="gold-text">Instagram</span></h2>
          <p className="section-subtitle">Follow our page for the latest transformations, offers, and behind-the-scenes.</p>
        </div>

        <div className="insta-grid" data-aos="fade-up">
          {posts.map((post, i) => (
            <div className="insta-item" key={i}>
              <img
                src={post.src}
                alt={post.alt}
                width={400}
                height={400}
                loading="lazy"
                decoding="async"
              />
              <div className="insta-overlay">
                <span>📷</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaWrap} data-aos="fade-up">
          {/* TEMPLATE: Replace Instagram URL */}
          <a
            href="https://www.instagram.com/your_salon/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            📷 Follow @your_salon
          </a>
        </div>
      </div>
    </section>
  );
}
