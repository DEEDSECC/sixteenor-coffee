import { menuData } from "../../data/dummy";

export default function MenuPage() {
  return (
    <div style={{ backgroundColor: '#0a0a0a', color: '#fff', minHeight: '100vh', padding: '50px 20px' }}>
      <h1 style={{ textAlign: 'center', color: '#d4a373', letterSpacing: '3px', marginBottom: '50px' }}>DAFTAR MENU</h1>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '25px', 
        flexWrap: 'wrap',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {menuData.map((item) => (
          <div key={item.id} style={cardStyle}>
            <span style={categoryStyle}>{item.category.toUpperCase()}</span>
            <h3 style={{ margin: '15px 0' }}>{item.name}</h3>
            <p style={{ color: '#d4a373', fontWeight: 'bold' }}>Rp {item.price}</p>
            <p style={{ fontSize: '0.85rem', color: '#aaa', marginTop: '10px' }}>
              Kenikmatan kopi pilihan S!XTEENOR yang diproses dengan dedikasi tinggi.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

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
  paddingBottom: '3px'
};