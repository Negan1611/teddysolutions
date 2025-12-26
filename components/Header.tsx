
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../types';
import { PHONE_NUMBER, SERVICES, ZALO_LINK } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trang chủ', path: AppRoute.HOME },
    { name: 'Dịch vụ', path: AppRoute.SERVICES, hasDropdown: true },
    { name: 'Dự án', path: AppRoute.PROJECTS },
    { name: 'Tin tức', path: AppRoute.NEWS },
    { name: 'Liên hệ', path: AppRoute.CONTACT },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-effect shadow-xl py-3' : 'bg-transparent py-6'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to={AppRoute.HOME} className="text-2xl md:text-3xl font-black text-gray-900 tracking-tighter">
              TEDDY<span className="text-blue-600">Solutions</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.path}
                className="relative group"
                onMouseEnter={() => link.hasDropdown && setIsDropdownOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsDropdownOpen(false)}
              >
                <Link
                  to={link.path}
                  className={`text-[13px] font-black uppercase tracking-widest transition-all hover:text-blue-600 flex items-center gap-1 py-2 ${isActive(link.path) ? 'text-blue-600' : 'text-gray-600'
                    }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <svg className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {link.hasDropdown && (
                  <div className={`absolute left-0 mt-0 pt-2 w-72 transition-all duration-300 ${isDropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 grid grid-cols-1 gap-2">
                      {SERVICES.map((s) => (
                        <Link
                          key={s.id}
                          to={`/dich-vu/${s.slug}`}
                          className="flex items-center gap-4 p-3 rounded-xl hover:bg-blue-50 transition-colors group/item"
                        >
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-[13px] font-black text-gray-900 leading-none mb-1">{s.title}</div>
                            <div className="text-[10px] text-gray-400 font-medium uppercase tracking-tighter">Xem giải pháp</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <a
              href={ZALO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-black hover:bg-blue-700 transition-all shadow-lg inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="white" />
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="currentColor" />
              </svg>
              Zalo
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-gray-100 text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-2xl h-screen animate-fade-in-down overflow-y-auto">
          <div className="px-6 py-10 space-y-6">
            {navLinks.map((link) => (
              <div key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => !link.hasDropdown && setIsOpen(false)}
                  className={`block text-2xl font-black uppercase tracking-tighter ${isActive(link.path) ? 'text-blue-600' : 'text-gray-900'
                    }`}
                >
                  {link.name}
                </Link>
                {link.hasDropdown && (
                  <div className="mt-4 ml-4 space-y-4 border-l-2 border-gray-100 pl-4">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.id}
                        to={`/dich-vu/${s.slug}`}
                        onClick={() => setIsOpen(false)}
                        className="block text-sm font-bold text-gray-500 hover:text-blue-600"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-10">
              <p className="text-gray-400 font-bold mb-4 uppercase text-xs">Liên hệ qua Zalo</p>
              <a href={ZALO_LINK} target="_blank" rel="noopener noreferrer" className="text-3xl font-black text-blue-600 underline inline-flex items-center gap-3">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill="white" />
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="currentColor" />
                </svg>
                {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
