export default function AboutPage() {
  return (
    <div style={{ backgroundColor: '#0a0a0a', color: '#fff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{ maxWidth: '800px', textAlign: 'center', border: '1px solid #d4a373', padding: '50px', borderRadius: '15px' }}>
        <h1 style={{ color: '#d4a373', marginBottom: '30px', letterSpacing: '5px' }}>OUR STORY</h1>
        <p style={{ lineHeight: '1.8', color: '#ccc', fontSize: '1.1rem' }}>
          Berdiri sejak 2026, <strong>S!XTEENOR Coffee</strong> bukan sekadar tempat minum kopi. 
          Kami adalah wadah bagi mereka yang mencari ketenangan di tengah hiruk pikuk dunia. 
          Setiap biji kopi yang kami sajikan dipilih dari petani lokal terbaik, dipanggang dengan presisi, 
          dan disajikan dengan atmosfer yang cinematic.
        </p>
        <p style={{ marginTop: '20px', color: '#d4a373', fontStyle: 'italic' }}>
          "Brewing peace in every cup."
        </p>
      </div>
    </div>
  );
}