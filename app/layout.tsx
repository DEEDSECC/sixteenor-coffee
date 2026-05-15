import "./globals.css";
// import Navbar from "../components/Navbar.tsx";
// import Footer from "../components/Footer.tsx";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader"; // Import preloader baru

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        {/* Preloader akan muncul di atas semua konten saat website dimuat */}
        <Preloader /> 
        
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}