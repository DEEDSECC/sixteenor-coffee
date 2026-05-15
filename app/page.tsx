export default function HomePage() {
  return (
    <div style={{ backgroundColor: '#0a0a0a', color: '#fff', minHeight: '85vh', fontFamily: 'sans-serif' }}>
      
      {/* HERO SECTION DENGAN FOTO DARI FOLDER PUBLIC */}
      <section style={{ 
  height: '30vh', 
  width: '100%',
  // Pastikan ada tanda / sebelum nama file
  backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/hero-bg.jpg")', 
  backgroundSize: 'cover', 
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  display: 'flex', 
  flexDirection: 'column', 
  justifyContent: 'center', 
  alignItems: 'center',
  textAlign: 'center',
  borderBottom: '3px solid #d4a373' 
}}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '15px', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
          Selamat Datang di S!XTEENOR Coffee
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#ddd', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
          Temukan ketenangan dalam setiap cangkir.
        </p>
      </section>

      {/* MENU TERLARIS SECTION */}
      <section style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#d4a373', letterSpacing: '3px', marginBottom: '50px', fontSize: '1.5rem', fontWeight: 'lighter' }}>
          MENU TERLARIS KAMI
        </h2>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '30px', 
          flexWrap: 'wrap',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          
          {/* Card 1 */}
          <div style={cardStyle}>
            <span style={categoryStyle}>COFFEE</span>
            <h3 style={{ margin: '15px 0', fontSize: '1.4rem' }}>Caramel Macchiato</h3>
            <p style={{ color: '#d4a373', fontSize: '1.1rem', fontWeight: 'bold' }}>Rp 35.000</p>
            <p style={{ fontSize: '0.9rem', color: '#aaa', marginTop: '15px', lineHeight: '1.6' }}>
              Espresso premium dengan sirup karamel dan susu lembut.
            </p>
          </div>

          {/* Card 2 */}
          <div style={cardStyle}>
            <span style={categoryStyle}>COFFEE</span>
            <h3 style={{ margin: '15px 0', fontSize: '1.4rem' }}>Americano</h3>
            <p style={{ color: '#d4a373', fontSize: '1.1rem', fontWeight: 'bold' }}>Rp 25.000</p>
            <p style={{ fontSize: '0.9rem', color: '#aaa', marginTop: '15px', lineHeight: '1.6' }}>
              Double shot espresso dengan air panas, aroma kuat dan murni.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}

// Objek styling agar tampilan tetap rapi di layar manapun
const cardStyle = {
  backgroundColor: '#111',
  border: '1px solid #222',
  borderRadius: '12px',
  padding: '40px 30px',
  width: '320px',
  textAlign: 'center' as const,
  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
  transition: '0.3s'
};

const categoryStyle = {
  fontSize: '0.75rem',
  color: '#d4a373',
  letterSpacing: '2px',
  borderBottom: '1px solid #d4a373',
  paddingBottom: '5px'
};