'use client';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading selama 2 detik
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: '#0a0a0a', display: 'flex', justifyContent: 'center',
      alignItems: 'center', zIndex: 9999
    }}>
      {/* Menggunakan properti CSS standard 'animation' */}
      <h1 style={{ 
        color: '#d4a373', 
        letterSpacing: '5px',
        animation: 'pulse 1.5s infinite' // <--- PERBAIKAN DI SINI
      }}>
        S!XTEENOR...
      </h1>
    </div>
  );
}