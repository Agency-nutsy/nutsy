'use client';
import { useState, useRef, useCallback } from 'react';
import styles from './BeforeAfter.module.css';

/* TEMPLATE: Replace with actual before/after transformation images */
const transformations = [
  {
    before: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80',
    label: 'Bridal Transformation',
  },
  {
    before: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800&q=80',
    label: 'Balayage Colour',
  },
];

function Slider({ before, after, label }) {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const onMouseDown = () => { dragging.current = true; };
  const onMouseUp = () => { dragging.current = false; };
  const onMouseMove = (e) => { if (dragging.current) handleMove(e.clientX); };
  const onTouchMove = (e) => { handleMove(e.touches[0].clientX); };

  return (
    <div className={styles.sliderWrap}>
      {label && <p className={styles.sliderLabel}>{label}</p>}
      <div
        className="before-after-container"
        ref={containerRef}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
        onTouchStart={onMouseDown}
        onTouchEnd={onMouseUp}
      >
        {/* After image (full width, behind) */}
        <img src={after} alt="After transformation" style={{ zIndex: 1 }} />

        {/* Before image (clipped) */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: `${position}%`, height: '100%', overflow: 'hidden', zIndex: 2 }}>
          <img src={before} alt="Before transformation" style={{ width: containerRef.current ? containerRef.current.offsetWidth + 'px' : '100%', maxWidth: 'none', height: '100%', objectFit: 'cover' }} />
        </div>

        {/* Slider line */}
        <div className="before-after-slider" style={{ left: `${position}%`, zIndex: 3 }}>
          <div className="before-after-handle">⟺</div>
        </div>

        {/* Labels */}
        <span className="before-after-label before-after-label-before">Before</span>
        <span className="before-after-label before-after-label-after">After</span>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-label">REAL RESULTS</span>
          <h2 className="section-title">See the <span className="gold-text">Transformation</span></h2>
          <p className="section-subtitle">Drag the slider to see real before & after results from our salon.</p>
        </div>

        <div className={styles.grid} data-aos="fade-up">
          {transformations.map((t, i) => (
            <Slider key={i} before={t.before} after={t.after} label={t.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
