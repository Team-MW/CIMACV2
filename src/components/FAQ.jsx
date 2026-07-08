'use client';

import React, { useState } from 'react';

export default function FAQ({ title = "Questions Fréquentes", items = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!items || items.length === 0) return null;

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-background)', padding: '60px 0' }}>
      <div className="container animate-fade-in" style={{ maxWidth: '800px' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', textAlign: 'center', color: 'var(--color-primary)' }}>
          {title}
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {items.map((item, index) => (
            <div 
              key={index} 
              className="glass"
              style={{ 
                borderRadius: 'var(--radius-md)', 
                overflow: 'hidden',
                border: '1px solid rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease'
              }}
            >
              <button 
                onClick={() => toggleOpen(index)}
                style={{ 
                  width: '100%', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  padding: '20px', 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: 'var(--color-primary)'
                }}
              >
                <span>{item.question}</span>
                <span style={{ 
                  transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                  fontSize: '1.5rem',
                  lineHeight: '1'
                }}>
                  +
                </span>
              </button>
              
              <div 
                style={{ 
                  maxHeight: openIndex === index ? '500px' : '0', 
                  overflow: 'hidden',
                  transition: 'max-height 0.4s ease, padding 0.4s ease',
                  padding: openIndex === index ? '0 20px 20px 20px' : '0 20px',
                  opacity: openIndex === index ? 1 : 0
                }}
              >
                <div style={{ color: 'var(--color-text)', lineHeight: '1.6' }}>
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
