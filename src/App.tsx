import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, Link, useNavigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import BookingPage from './components/BookingPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-[#f0f2f4] dark:border-gray-800 bg-white dark:bg-[#1A202C] px-6 lg:px-10 py-3 shadow-sm transition-colors duration-200">
      <div className="flex items-center gap-4 text-[#111318] dark:text-white cursor-pointer" onClick={() => navigate('/')}>
        <div className="size-8 flex items-center justify-center text-primary">
          <span className="material-symbols-outlined text-3xl">balance</span>
        </div>
        <h2 className="text-[#111318] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          Estudio Jurídico JRN
        </h2>
      </div>

      {/* Desktop Nav */}
      <div className="hidden lg:flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-9">
          <Link
            to="/"
            className={`text-sm font-medium leading-normal transition-colors ${isActive('/') ? 'text-primary font-bold' : 'text-[#111318] dark:text-gray-200 hover:text-primary dark:hover:text-primary'}`}
          >
            Inicio
          </Link>
          <Link
            to="/servicios"
            className={`text-sm font-medium leading-normal transition-colors ${isActive('/servicios') ? 'text-primary font-bold' : 'text-[#111318] dark:text-gray-200 hover:text-primary dark:hover:text-primary'}`}
          >
            Servicios
          </Link>
          <Link
            to="/contacto"
            className={`text-sm font-medium leading-normal transition-colors ${isActive('/contacto') ? 'text-primary font-bold' : 'text-[#111318] dark:text-gray-200 hover:text-primary dark:hover:text-primary'}`}
          >
            Contacto y Ubicación
          </Link>
        </nav>
        <button
          onClick={() => navigate('/reservar')}
          className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-blue-700 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em] shadow-md shadow-primary/20"
        >
          <span className="truncate">Reservar Cita</span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden p-2 text-gray-600 dark:text-gray-200"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span className="material-symbols-outlined">menu</span>
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-[#1A202C] border-b border-gray-200 dark:border-gray-800 shadow-lg py-4 px-6 flex flex-col gap-4 lg:hidden">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-[#111318] dark:text-white py-2">Inicio</Link>
          <Link to="/servicios" onClick={() => setIsMobileMenuOpen(false)} className="text-[#111318] dark:text-white py-2">Servicios</Link>
          <Link to="/contacto" onClick={() => setIsMobileMenuOpen(false)} className="text-[#111318] dark:text-white py-2">Contacto</Link>
          <button
            onClick={() => {
              navigate('/reservar');
              setIsMobileMenuOpen(false);
            }}
            className="w-full h-10 bg-primary text-white rounded-lg font-bold"
          >
            Reservar Cita
          </button>
        </div>
      )}
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#111318] dark:bg-[#0B0E14] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-3xl">balance</span>
              <h3 className="text-xl font-bold">Estudio Jurídico JRN</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Comprometidos con la excelencia legal y la defensa de sus derechos. Su tranquilidad es nuestra prioridad.
            </p>
            <div className="flex gap-4 mt-2">
              <a className="text-gray-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
              <a className="text-gray-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
            </div>
          </div>
          {/* Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-lg">Enlaces Rápidos</h4>
            <ul className="flex flex-col gap-2 text-gray-400 text-sm">
              <li><Link className="hover:text-white transition-colors" to="/">Inicio</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/servicios">Servicios</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/contacto">Contacto</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/reservar">Reservar Cita</Link></li>
            </ul>
          </div>
          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-lg">Servicios Legales</h4>
            <ul className="flex flex-col gap-2 text-gray-400 text-sm">
              <li><Link className="hover:text-white transition-colors" to="/servicios">Derecho Civil</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/servicios">Derecho Penal</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/servicios">Derecho Laboral</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/servicios">Derecho de Familia</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/servicios">Derecho Comercial</Link></li>
            </ul>
          </div>
          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-lg">Contacto</h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary shrink-0">location_on</span>
                <span>Av. Principal 1234, Of. 505,<br />Ciudad Empresarial, CP 1000</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary shrink-0">phone</span>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary shrink-0">mail</span>
                <span>contacto@estudiojrn.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2024 Estudio Jurídico JRN. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a className="hover:text-white transition-colors" href="#">Política de Privacidad</a>
            <a className="hover:text-white transition-colors" href="#">Términos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => (
  <a
    href="#"
    aria-label="Contactar por WhatsApp"
    className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center"
  >
    <svg className="size-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
    </svg>
  </a>
);

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/reservar" element={<BookingPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </HashRouter>
  );
}