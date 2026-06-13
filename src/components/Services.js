'use client';
import { useState } from 'react';
import styles from './Services.module.css';

const categories = ['All', 'Hair', 'Skin & Face', 'Makeup', 'Nails', 'Body'];

const services = [
  // HAIR — confirmed from Google Maps & reviews
  { cat: 'Hair', icon: '✂️', name: 'Haircut & Styling', desc: 'Expert precision cut, blowdry and styling for men & women.', price: 'Price on request', duration: '~30–45 min' },
  { cat: 'Hair', icon: '🎨', name: 'Hair Colour (Global)', desc: 'Full head professional colour for a vibrant new look.', price: 'Price on request', duration: '1.5–2 hrs' },
  { cat: 'Hair', icon: '🌟', name: 'Babylights & Highlights', desc: 'Delicate babylights or bold highlights for dimensional colour.', price: 'Price on request', duration: '2–3 hrs' },
  { cat: 'Hair', icon: '✨', name: 'Balayage', desc: 'Hand-painted balayage for a natural sun-kissed finish.', price: 'Price on request', duration: '2–3 hrs' },
  { cat: 'Hair', icon: '💎', name: 'Keratin Treatment', desc: 'Frizz-free, smooth, shiny hair for 4–6 months.', price: 'Price on request', duration: '2.5–4 hrs' },
  { cat: 'Hair', icon: '💫', name: 'Nanoplastia', desc: 'Advanced organic hair smoothening treatment for lasting results.', price: 'Price on request', duration: '3–4 hrs' },
  { cat: 'Hair', icon: '💆', name: 'Hair Spa', desc: 'Deep conditioning, scalp massage, and steam treatment.', price: 'Price on request', duration: '~45 min' },

  // SKIN & FACE — confirmed from reviews
  { cat: 'Skin & Face', icon: '🧖', name: 'Facial', desc: 'Professional facial treatment for glowing, refreshed skin.', price: 'Price on request', duration: '~60 min' },
  { cat: 'Skin & Face', icon: '✨', name: 'Gold Facial', desc: 'Anti-ageing gold-infused treatment for radiant skin.', price: 'Price on request', duration: '~75 min' },
  { cat: 'Skin & Face', icon: '🧹', name: 'Cleanup', desc: 'Express face cleanup for instant freshness.', price: 'Price on request', duration: '~30 min' },

  // MAKEUP — confirmed from Google Maps
  { cat: 'Makeup', icon: '👰', name: 'Bridal Makeup', desc: 'Complete bridal look by Tanvi Jain including draping assistance.', price: 'Price on request', duration: '2–3 hrs' },
  { cat: 'Makeup', icon: '🎭', name: 'Party Makeup', desc: 'HD or Airbrush makeup for parties and special events.', price: 'Price on request', duration: '~60 min' },
  { cat: 'Makeup', icon: '💄', name: 'Engagement Makeup', desc: 'Elegant, photogenic makeup for your special day.', price: 'Price on request', duration: '~90 min' },

  // NAILS — confirmed from Google Maps
  { cat: 'Nails', icon: '💅', name: 'Nail Extensions', desc: 'Long-lasting nail extensions with custom shapes and designs.', price: 'Price on request', duration: '~60 min' },
  { cat: 'Nails', icon: '🎨', name: 'Nail Art', desc: 'Custom nail art designs, per nail or full set.', price: 'Price on request', duration: '~15 min/nail' },

  // BODY — confirmed from Google Maps & reviews
  { cat: 'Body', icon: '🦶', name: 'Pedicure & Foot Massage', desc: 'Luxurious foot spa, scrub, nail care, and relaxing massage.', price: 'Price on request', duration: '~40 min' },
  { cat: 'Body', icon: '💅', name: 'Manicure', desc: 'Nail shaping, cuticle care, hand massage, and polish.', price: 'Price on request', duration: '~30 min' },
];

export default function Services() {
  const [activeCat, setActiveCat] = useState('All');

  const filtered = activeCat === 'All' ? services : services.filter(s => s.cat === activeCat);

  return (
    <section id="services" className={`section ribbed-bg ${styles.services}`}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-label">WHAT WE OFFER</span>
          <h2 className="section-title">Our <span className="gold-text">Services</span></h2>
          <p className="section-subtitle">From everyday grooming to bridal transformations — we do it all.</p>
        </div>

        {/* Category Tabs */}
        <div className={styles.tabs} data-aos="fade-up" data-aos-delay="100">
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.tab} ${activeCat === cat ? styles.tabActive : ''}`}
              onClick={() => setActiveCat(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <div className={styles.grid}>
          {filtered.map((service, i) => (
            <div
              className={styles.card}
              key={`${service.name}-${i}`}
              data-aos="fade-up"
              data-aos-delay={Math.min(i * 50, 300)}
            >
              <div className={styles.cardIcon}>{service.icon}</div>
              <h3 className={styles.cardName}>{service.name}</h3>
              <p className={styles.cardDesc}>{service.desc}</p>
              <div className={styles.cardMeta}>
                <p className={styles.cardPrice}>{service.price}</p>
                <span className="service-duration">🕐 {service.duration}</span>
              </div>
              <a
                href={`https://wa.me/917042044784?text=${encodeURIComponent(`Hi! I'd like to book "${service.name}" at Studio Fix.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="service-book-btn"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                Book This
              </a>
              <div className={styles.cardLine}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
