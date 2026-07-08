'use client';
import { useState, useEffect, useRef } from 'react';

export default function Counter({ end, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    let observer;
    let startTimestamp = null;
    let animationFrame;
    let hasAnimated = false;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Fonction d'accélération (ease-out) pour ralentir vers la fin
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeOutQuart * end));
      
      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      }
    };

    const handleIntersect = (entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        hasAnimated = true;
        animationFrame = window.requestAnimationFrame(step);
      }
    };

    observer = new IntersectionObserver(handleIntersect, { threshold: 0.1 });
    
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, [end, duration]);

  return <span ref={elementRef}>{count}{suffix}</span>;
}
