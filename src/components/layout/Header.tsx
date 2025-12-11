import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";


export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Business Opportunity", href: "/participate" },
    { label: "Calculator", href: "/calculator" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-lg`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:gap-3">
            <img src="/assets/av-financial-logo.webp" alt="AV Financial Logo" className="h-14 md:h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.href}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${isActive
                    ? "text-blue-600 font-semibold"
                    : "text-slate-900 hover:text-blue-600"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <Link to="/contact">
              <Button
                size="lg"
                className="px-6 py-2 bg-[#1a2957] text-white rounded-lg hover:bg-[#1a2959]"
              >
                Book Free Consultation
              </Button>
            </Link>
          </div>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-900 hover:text-blue-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-sm font-medium py-2 transition-colors ${isActive
                      ? "text-blue-600 font-semibold"
                      : "text-slate-900 hover:text-blue-600"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="px-6 py-2 bg-[#1a2957] text-white rounded-lg hover:bg-blue-700">
                  Book Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        )}

      </nav>
    </header>
  );
};