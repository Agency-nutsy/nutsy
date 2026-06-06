'use client';
import { useState, useEffect } from 'react';
import styles from './LoadingScreen.module.css';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Start the circle opening and fade out sequence after 2.2 seconds
    const timer = setTimeout(() => {
      setFading(true);
      // Remove component from DOM completely after transition finishes
      setTimeout(() => setLoading(false), 1200);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={`${styles.loaderWrap} ${fading ? styles.fadeOut : ''}`}>
      {/* The circle reveal mask background */}
      <div className={styles.circleReveal}></div>
      
      <div className={styles.content}>
        <div className={styles.iconWrap}>
          {/* Scissors SVG */}
          <svg className={styles.scissors} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
            <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
            <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
          </svg>
          
          {/* Glitters/Sparkles */}
          <span className={`${styles.glitter} ${styles.g1}`}>✨</span>
          <span className={`${styles.glitter} ${styles.g2}`}>✨</span>
          <span className={`${styles.glitter} ${styles.g3}`}>✨</span>
          <span className={`${styles.glitter} ${styles.g4}`}>✨</span>
        </div>
        
        {/* TEMPLATE: Replace with salon name */}
        <h1 className={styles.text}>Your Salon Name</h1>
        
        <div className={styles.progressWrap}>
          <div className={styles.progressBar}></div>
        </div>
      </div>
    </div>
  );
}
