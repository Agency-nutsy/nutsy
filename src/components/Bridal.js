'use client';
import styles from './Bridal.module.css';

/* TEMPLATE: Replace with actual bridal package details */
const packages = [
  {
    name: 'The Radiance Package',
    subtitle: 'Pre-Bridal Prep',
    price: '₹12,000',
    tag: 'Most Popular',
    duration: '30 days before wedding',
    items: [
      '4 Pre-bridal facials',
      'Full body D-Tan (2 sessions)',
      'Eyebrow shaping + threading (3 times)',
      'Manicure + Pedicure (2 sessions)',
      'Waxing (full body, 2 sessions)',
    ],
    highlighted: false,
  },
  {
    name: 'The Golden Bride',
    subtitle: 'Complete Bridal',
    price: '₹22,000',
    tag: '⭐ Premium Pick',
    duration: '45-day complete package',
    items: [
      'Everything in Radiance Package',
      'Bridal Makeup (HD Airbrush)',
      'Saree/Lehenga Draping',
      'Hair Styling (bridal updo or open style)',
      'Mehendi Function Makeup',
      'Sangeet/Cocktail Makeup',
      'Nail Art (bridal design)',
    ],
    highlighted: true,
  },
  {
    name: 'The Royal Experience',
    subtitle: 'Luxury All-Inclusive',
    price: '₹35,000',
    tag: 'Full Experience',
    duration: '60-day luxury journey',
    items: [
      'Everything in Golden Bride',
      'Keratin/Smoothening treatment',
      '6 Gold Facials',
      'Body Polishing (2 sessions)',
      'Groom Grooming Package',
      '1 Trial Makeup Session',
    ],
    highlighted: false,
  },
];

const features = [
  "🏆 L'Oréal Professionnel Products Only",
  '🎨 Trial Session Included',
  '📸 Makeup Artist Portfolio Available',
  '💬 WhatsApp Consultation Free',
];

/* TEMPLATE: Replace with actual bridal portfolio images */
const portfolioImages = [
  { src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80', caption: 'Traditional Bridal Look' },
  { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80', caption: 'Reception Makeup' },
  { src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80', caption: 'Mehendi Function' },
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', caption: 'Sangeet Night Look' },
  { src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80', caption: 'Pre-Bridal Spa' },
  { src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80', caption: 'Bridal Hair Styling' },
];

export default function Bridal() {
  return (
    <section id="bridal" className={`section ${styles.bridal}`}>
      <div className={styles.bgGlow}></div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <hr className="gold-line" style={{ marginBottom: 'var(--space-10)' }} />

        <div className="section-header" data-aos="fade-up">
          <span className="section-label">BRIDAL COLLECTION</span>
          <h2 className={styles.bridalTitle}>Bridal Beauty — Your Most <span className="gold-text">Precious</span> Day</h2>
          <p className="section-subtitle">
            From pre-bridal glow treatments to the final bridal look on your big day — our specialists craft
            a complete bridal journey tailored to you.
          </p>
        </div>

        {/* Bridal Portfolio Grid — NEW */}
        <div className={styles.portfolioSection} data-aos="fade-up">
          <h3 className={styles.portfolioTitle}>✦ Our Bridal Work</h3>
          <div className={styles.portfolioGrid}>
            {portfolioImages.map((img, i) => (
              <div className={styles.portfolioItem} key={i}>
                <img
                  src={img.src}
                  alt={img.caption}
                  width={600}
                  height={400}
                  loading="lazy"
                  decoding="async"
                />
                <div className={styles.portfolioOverlay}>
                  <span>{img.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Package Cards */}
        <div className={styles.grid}>
          {packages.map((pkg, i) => (
            <div
              className={`${styles.card} ${pkg.highlighted ? styles.cardHighlighted : ''}`}
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <div className={styles.cardTag}>{pkg.tag}</div>
              <h3 className={styles.cardName}>{pkg.name}</h3>
              <p className={styles.cardSubtitle}>{pkg.subtitle}</p>
              <p className={styles.cardPrice}>{pkg.price}</p>
              <p className={styles.cardDuration}>{pkg.duration}</p>

              <ul className={styles.cardList}>
                {pkg.items.map((item, j) => (
                  <li key={j} className={styles.cardItem}>
                    <span className={styles.check}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* TEMPLATE: Replace WhatsApp number */}
              <a
                href={`https://wa.me/+91XXXXXXXXXX?text=${encodeURIComponent(`Hi! I'm interested in the ${pkg.name} bridal package (${pkg.price}). Please share more details.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-gold ${styles.cardBtn}`}
              >
                Book Consultation →
              </a>
            </div>
          ))}
        </div>

        {/* Feature Strip */}
        <div className={styles.featureStrip} data-aos="fade-up">
          {features.map((f, i) => (
            <span className={styles.feature} key={i}>{f}</span>
          ))}
        </div>

        {/* Testimonial */}
        <div className={styles.testimonial} data-aos="fade-up">
          <div className={styles.quoteIcon}>&ldquo;</div>
          <p className={styles.quoteText}>
            {/* TEMPLATE: Replace with actual bridal testimonial */}
            My wedding day was perfect. The team made me feel like an absolute queen —
            the makeup lasted all day and night!
          </p>
          <p className={styles.quoteAuthor}>— Client Name, Bride ⭐⭐⭐⭐⭐</p>
        </div>
      </div>
    </section>
  );
}
