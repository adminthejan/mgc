import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";

const HeaderTwo = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Companies");
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    "Companies",
    "About Us",
    "Contact Us",
    "Privacy Policy"
  ];

  const routeByItem = React.useMemo(() => ({
    "Companies": "/",
    "About Us": "/about",
    "Contact Us": "/contact",
    "Privacy Policy": "/privacy",
  }), []);

  useEffect(() => {
    const pathname = location.pathname;
    const match = Object.entries(routeByItem).find(([, path]) => path === pathname);
    if (match) setActiveTab(match[0]);
  }, [location.pathname, routeByItem]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-40 w-full ${isScrolled ? 'bg-white backdrop-blur-md border-b border-gray-200/50 shadow-sm' : 'bg-transparent'}`}>
      <div className="flex flex-col justify-center items-center px-6 lg:px-10 py-4 w-full">
        <div className="max-w-[1300px] w-full flex flex-row justify-between items-center">
          {/* Logo */}
          <div className="flex items-center bg-white p-2 rounded-lg">
            <img 
              src={logo} 
              alt="Company Logo"
              loading="lazy"
              className="h-8 w-auto cursor-pointer hover:opacity-80 transition-opacity duration-200" 
              onClick={() => navigate("/")}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-row items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item}
                aria-current={activeTab === item ? "page" : undefined}
                onClick={() => {
                  setActiveTab(item);
                  navigate(routeByItem[item] || "/");
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`relative px-3 py-1.5 text-xs uppercase font-extrabold transition-all cursor-pointer duration-200 rounded-lg group ${
                  activeTab === item
                    ? "bg-linear-to-r from-sky-500 via-cyan-500 to-blue-300 text-transparent bg-clip-text"
                    : isScrolled ? "text-gray-600 hover:text-gray-900" : "text-white hover:text-gray-200"
                }`}
              >
                {item}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-linear-to-r from-sky-500 via-cyan-500 to-blue-400 transition-all duration-300 ${
                    activeTab === item ? "w-12" : "w-0 group-hover:w-8"
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' : 'text-white hover:text-gray-200 hover:bg-white/10'}`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden w-full max-w-7xl mt-4 py-4 border-t border-gray-200 bg-white animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  aria-current={activeTab === item ? "page" : undefined}
                  onClick={() => {
                    setActiveTab(item);
                    setMobileMenuOpen(false);
                    navigate(routeByItem[item] || "/");
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`px-3 py-2 text-left text-xs uppercase font-extrabold rounded-lg transition-all duration-200 ${
                    activeTab === item
                      ? "bg-linear-to-r from-sky-700 via-cyan-700 to-blue-600 text-transparent bg-clip-text bg-indigo-50"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderTwo;