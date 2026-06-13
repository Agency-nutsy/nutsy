'use client';
import styles from './Bridal.module.css';

const packages = [
  {
    name: 'The Radiance Package',
    subtitle: 'Pre-Bridal Prep',
    price: 'Price on request',
    tag: 'Most Popular',
    duration: '30 days before wedding',
    items: [
      '4 Pre-bridal facials',
      'Full body D-Tan (2 sessions)',
      'Eyebrow shaping + threading',
      'Manicure + Pedicure (2 sessions)',
      'Full body waxing (2 sessions)',
    ],
    highlighted: false,
  },
  {
    name: 'The Golden Bride',
    subtitle: 'Complete Bridal',
    price: 'Price on request',
    tag: '⭐ Premium Pick',
    duration: '45-day complete package',
    items: [
      'Everything in Radiance Package',
      'Bridal Makeup (HD/Airbrush by Tanvi Jain)',
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
    price: 'Price on request',
    tag: 'Full Experience',
    duration: '60-day luxury journey',
    items: [
      'Everything in Golden Bride',
      'Keratin/Nanoplastia treatment',
      '6 Gold Facials',
      'Body Polishing (2 sessions)',
      'Groom Grooming Package',
      '1 Trial Makeup Session',
    ],
    highlighted: false,
  },
];

const features = [
  '🏆 Premium Professional Products Only',
  '🎨 Trial Session Included',
  '📸 Makeup Artist Portfolio Available',
  '💬 WhatsApp Consultation Free',
];

const portfolioImages = [
  { src: '/salon/bridal-makeup.png', caption: 'Bridal Makeup by Tanvi Jain' },
  { src: '/salon/hair-styling.png', caption: 'Bridal Hair Styling' },
  { src: '/salon/keratin-treatment.png', caption: 'Pre-Bridal Hair Treatment' },
  { src: '/salon/facial-treatment.png', caption: 'Pre-Bridal Gold Facial' },
  { src: '/salon/nail-art.png', caption: 'Bridal Nail Art' },
  { src: '/salon/reception-desk.jpg', caption: 'Studio Fix Salon' },
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
            From pre-bridal glow treatments to the final bridal look on your big day — Tanvi Jain and the Studio Fix team craft
            a complete bridal journey tailored to you.
          </p>
        </div>

        {/* Bridal Portfolio Grid */}
        <div className={styles.portfolioSection} data-aos="fade-up">
          <h3 className={styles.portfolioTitle}>✦ Our Bridal Work</h3>
          <div className={styles.portfolioGrid}>
            {portfolioImages.map((img, i) => (
              <div className={styles.portfolioItem} key={i}>
                <img
                  src={img.src}
                  alt={`${img.caption} at Studio Fix, Delhi`}
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

              <a
                href={`https://wa.me/917042044784?text=${encodeURIComponent(`Hi! I'm interested in the ${pkg.name} bridal package. Please share more details.`)}`}
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
            Tanvi is an amazing makeup artist. I booked her for my wedding makeup and she really lived upto to my expectations. I clearly mentioned that I wanted to look all natural in my wedding and she made sure to incorporate every little request that I had.
          </p>
          <p className={styles.quoteAuthor}>— Shweta Jain, Bride ⭐⭐⭐⭐⭐</p>
        </div>
      </div>
    </section>
  );
}
