'use client';
import { useState } from 'react';
import styles from './Gallery.module.css';

const images = [
  { src: '/salon/reception-desk.jpg', alt: 'Studio Fix reception area with crystal chandelier and marble counter, Amar Colony Delhi', cat: 'Interior', caption: 'Reception & Welcome Area' },
  { src: '/salon/hero-interior.png', alt: 'Studio Fix interior with styling chairs and wash basins in Delhi', cat: 'Interior', caption: 'Styling & Wash Stations' },
  { src: '/salon/styling-stations.png', alt: 'Gold-framed mirrors and premium styling stations at Studio Fix', cat: 'Interior', caption: 'Premium Styling Stations' },
  { src: '/salon/interior-wide.png', alt: 'Elegant wide view of Studio Fix salon interior with arched decor', cat: 'Interior', caption: 'Salon Ambience' },
  { src: '/salon/bridal-makeup.png', alt: 'Bridal makeup session at Studio Fix by Tanvi Jain, Delhi', cat: 'Transformations', caption: 'Bridal Makeup by Tanvi Jain' },
  { src: '/salon/hair-styling.png', alt: 'Professional hair coloring and balayage at Studio Fix, Delhi', cat: 'Transformations', caption: 'Balayage Hair Colour' },
  { src: '/salon/keratin-treatment.png', alt: 'Keratin treatment results at Studio Fix salon, Delhi', cat: 'Transformations', caption: 'Keratin Smoothening' },
  { src: '/salon/facial-treatment.png', alt: 'Relaxing facial treatment at Studio Fix, Amar Colony Delhi', cat: 'Team at Work', caption: 'Gold Facial Treatment' },
  { src: '/salon/nail-art.png', alt: 'Nail art and nail extensions at Studio Fix, Delhi', cat: 'Team at Work', caption: 'Custom Nail Art Design' },
  { src: '/salon/pedicure-service.png', alt: 'Professional pedicure and foot spa at Studio Fix, Delhi', cat: 'Team at Work', caption: 'Luxury Pedicure & Foot Spa' },
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
