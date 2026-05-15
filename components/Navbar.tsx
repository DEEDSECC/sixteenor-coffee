export default function Navbar() {
  return (
    <nav style={{ backgroundColor: '#000', padding: '15px', display: 'flex', justifyContent: 'center', gap: '30px' }}>
      <a href="/" style={navLink}>HOME</a>
      <a href="/menu" style={navLink}>MENU</a>
      <a href="/about" style={navLink}>OUR STORY</a>
    </nav>
  );
}

const navLink = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '0.8rem',
  fontWeight: 'bold',
  letterSpacing: '1px'
};