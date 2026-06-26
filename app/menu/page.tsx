'use client'; // 1. WAJIB DI PALING ATAS agar bisa pakai Hooks di Next.js

import { useState, useEffect } from 'react'; // 2. Import hooks untuk mengambil API

export default function MenuPage() {
  // 3. Siapkan state untuk menampung data dari API Backend
  const [menuData, setMenuData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // 4. Proses Setting API Fetching
  useEffect(() => {
    // Sesuaikan URL ini dengan alamat API Ruby on Rails dari nomor 4 nanti
    const API_URL = 'http://localhost:3000/api/v1/products'; 

    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Gagal mengambil data menu');
        }
        return response.json();
      })
      .then((data) => {
        setMenuData(data); // Simpan data dari API ke state menuData
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error setting API:", error);
        setLoading(false);
      });
  }, []);

  // 5. Tampilan Loading saat menunggu data dari Backend
  if (loading) {
    return (
      <div style={{ backgroundColor: '#0a0a0a', color: '#fff', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3 style={{ color: '#d4a373' }}>Sedang Menyeduh Data Kopi...</h3>
      </div>
    );
  }

  // 6. Tampilan Utama (Gaya & UI dari temanmu tetap terjaga)
  return (
    <div style={{ backgroundColor: '#0a0a0a', color: '#fff', minHeight: '100vh', padding: '40px 20px' }}>
      <h1 style={{ textAlign: 'center', color: '#d4a373', letterSpacing: '2px', marginBottom: '40px' }}>
        MENU SIXTEENOR COFFEE
      </h1>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '25px',
        flexWrap: 'wrap',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {menuData.map((item: any) => (
          <div key={item.id} style={cardStyle}>
            <span style={categoryStyle}>{(item.category || 'COFFEE').toUpperCase()}</span>
            <h3 style={{ margin: '15px 0' }}>{item.name}</h3>
            <p style={{ color: '#d4a373', fontWeight: 'bold' }}>
              Rp {item.price?.toLocaleString('id-ID') || item.price}
            </p>
            <p style={{ fontSize: '0.85rem', color: '#aaa', marginTop: '10px' }}>
              {item.description || 'Kenikmatan kopi pilihan S!XTEENOR yang diproses dengan dedikasi'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- STYLE OBJECTS (Tetap dipertahankan sesuai desain temanmu) ---
const cardStyle = {
  backgroundColor: '#111',
  border: '1px solid #222',
  borderRadius: '12px',
  padding: '30px',
  width: '280px',
  textAlign: 'center' as const,
};

const categoryStyle = {
  fontSize: '0.7rem',
  color: '#d4a373',
  letterSpacing: '2px',
  borderBottom: '1px solid #d4a373',
  paddingBottom: '3px',
};