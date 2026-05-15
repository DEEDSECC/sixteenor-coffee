export default function Footer() {
  return (
    <footer className="footer" style={{ padding: '20px', textAlign: 'center', backgroundColor: '#1a1a1a', color: '#fff' }}>
      <p>© 2026 <strong>S!XTEENOR</strong></p>
      <div className="social-links">
        <a href="https://github.com/DEEDSECC/sixteenor-coffee" target="_blank" style={{ color: '#d4a373', marginRight: '10px' }}>GitHub</a>
        <a href="#" style={{ color: '#d4a373', marginRight: '10px' }}>LinkedIn</a>
        <a href="#" style={{ color: '#d4a373' }}>Instagram</a>
      </div>
    </footer>
  );
}