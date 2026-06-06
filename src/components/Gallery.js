'use client';
import { useState } from 'react';
import styles from './Gallery.module.css';

/* TEMPLATE: Replace with actual salon portfolio images and captions */
const images = [
  { src: 'https://images.unsplash.com/photo-1562322140-8baeacacf3df?w=600&q=80', alt: 'Salon styling chair with premium leather finish', cat: 'Interior', caption: 'Premium Styling Station' },
  { src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80', alt: 'Elegant salon interior with warm ambient lighting', cat: 'Interior', caption: 'Warm Ambient Interior' },
  { src: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&q=80', alt: 'Professional hairstyling in progress', cat: 'Transformations', caption: 'Balayage + Keratin Treatment' },
  { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80', alt: 'Professional makeup application for a client', cat: 'Transformations', caption: 'Bridal Makeup — Reception Look' },
  { src: 'https://images.unsplash.com/photo-1470259078422-826894b933aa?w=600&q=80', alt: 'Expert nail care and nail art session', cat: 'Team at Work', caption: 'Custom Nail Art Design' },
  { src: 'https://images.unsplash.com/photo-1620454955651-2e7d5a6c9e83?w=600&q=80', alt: 'Vibrant hair colour transformation', cat: 'Transformations', caption: 'Global Hair Colour — Copper Tones' },
  { src: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=600&q=80', alt: 'Skilled barber providing grooming services', cat: 'Team at Work', caption: "Men's Precision Cut & Styling" },
  { src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80', alt: 'Relaxing facial treatment experience', cat: 'Team at Work', caption: 'Gold Facial Treatment' },
  { src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80', alt: 'Spa massage bed in a serene setting', cat: 'Interior', caption: 'Spa & Wellness Area' },
  { src: 'https://images.unsplash.com/photo-1551772412-c2e5a70e9afd?w=600&q=80', alt: 'Body treatment and waxing service area', cat: 'Interior', caption: 'Body Treatment Room' },
  { src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80', alt: 'Stunning bridal makeup transformation', cat: 'Transformations', caption: 'Bridal Makeup — HD Airbrush' },
  { src: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&q=80', alt: 'Classic barber shop setup with professional tools', cat: 'Team at Work', caption: 'Classic Barber Setup' },
];

const tabs = ['All', 'Interior', 'Transformations', 'Team at Work'];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('All');
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });

  const filtered = activeTab === 'All' ? images : images.filter(img => img.cat === activeTab);

  const openLightbox = (i) => setLightbox({ open: true, index: i });
  const closeLightbox = () => setLightbox({ open: false, index: 0 });

  const navigate = (dir) => {
    setLightbox(prev => ({
      open: true,
      index: (prev.index + dir + filtered.length) % filtered.length,
    }));
  };

  return (
    <section id="gallery" className={`section ${styles.gallery}`}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          {/* TEMPLATE: Replace with salon name */}
          <span className="section-label">OUR PORTFOLIO</span>
          <h2 className="section-title">A Space Built for <span className="gold-text">Beauty</span></h2>
        </div>

        {/* Tabs */}
        <div className={styles.tabs} data-aos="fade-up" data-aos-delay="100">
          {tabs.map(tab => (
            <button
              key={tab}
              className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className={styles.masonry}>
          {filtered.map((img, i) => (
            <div
              className={styles.item}
              key={i}
              data-aos="fade-up"
              data-aos-delay={Math.min(i * 80, 400)}
              onClick={() => openLightbox(i)}
              role="button"
              tabIndex={0}
              aria-label={`View ${img.alt}`}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                loading="lazy"
                decoding="async"
              />
              <div className={styles.overlay}>
                <span className={styles.catLabel}>{img.cat}</span>
                {img.caption && <span className={styles.captionLabel}>{img.caption}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox with caption */}
      {lightbox.open && (
        <div
          className="lightbox-overlay active"
          onClick={closeLightbox}
          role="dialog"
          aria-label="Image lightbox"
        >
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">×</button>
          <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); navigate(-1); }} aria-label="Previous image">‹</button>
          <img
            src={filtered[lightbox.index]?.src}
            alt={filtered[lightbox.index]?.alt}
            onClick={(e) => e.stopPropagation()}
          />
          {filtered[lightbox.index]?.caption && (
            <p className="lightbox-caption" onClick={(e) => e.stopPropagation()}>
              {filtered[lightbox.index].caption}
            </p>
          )}
          <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); navigate(1); }} aria-label="Next image">›</button>
        </div>
      )}
    </section>
  );
}
