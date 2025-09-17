import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Mountain, Menu, X } from "lucide-react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
    setIsMenuOpen(false); // Close menu on logout
  };

  const getDashboardLink = () => {
    if (!user) return null;
    return `/dashboard/${user.role}`;
  };

  const mainNavLinks = [
    { text: 'Home', href: '/' },
    { text: 'Properties', href: '/properties' },
    { text: 'Services', href: '/services' },
    { text: 'About Us', href: '/about' },
    { text: 'Contact', href: '/contact' },
  ];

  const navLinkClasses = "text-green-50 hover:text-yellow-200 font-medium transition-colors whitespace-nowrap";
  const mobileNavLinkClasses = "block py-3 px-4 text-lg text-green-800 hover:bg-green-50 rounded-md";

  return (
    <header className="shadow-lg sticky top-0 z-50 w-full" style={{backgroundColor: '#14746f'}}>
      <div className="container mx-auto px-4 lg:px-6 h-20 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="flex items-center justify-center w-10 h-10 bg-yellow-500 rounded-full shadow-md">
            <Mountain className="w-6 h-6 text-green-800" />
          </div>
          <span className="hidden sm:block text-2xl font-bold text-white">LandConnect</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 ml-auto">
          {mainNavLinks.map((link) => (
            <Link key={link.text} to={link.href} className={navLinkClasses}>
              {link.text}
            </Link>
          ))}
          {/* Vertical Separator */}
          <div className="border-l h-6 border-green-400"></div>
          {user ? (
            <div className="flex items-center gap-4">
              <Link to={getDashboardLink()} className={navLinkClasses}>
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-5 rounded-lg text-sm transition-colors shadow-md"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/login" className={navLinkClasses}>
                Login
              </Link>
              <Link to="/register">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-green-800 font-bold py-2 px-5 rounded-lg transition-all duration-300 shadow-md">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (with slide-in animation) */}
      <div
        className={`lg:hidden fixed top-20 right-0 h-[calc(100vh-80px)] w-full bg-green-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } overflow-y-auto`}
      >
        <nav className="flex flex-col p-6 space-y-4">
          {mainNavLinks.map((link) => (
            <Link key={link.text} to={link.href} onClick={() => setIsMenuOpen(false)} className={mobileNavLinkClasses}>
              {link.text}
            </Link>
          ))}
          <hr className="my-2 border-green-200" />
          {user ? (
            <>
              <Link to={getDashboardLink()} onClick={() => setIsMenuOpen(false)} className={mobileNavLinkClasses}>
                Dashboard
              </Link>
              {['seller', 'admin'].includes(user.role) && (
                <Link to="/create-property" onClick={() => setIsMenuOpen(false)} className={mobileNavLinkClasses}>
                  List Property
                </Link>
              )}
              <button
                onClick={handleLogout}
                className="w-full text-left bg-red-50 text-red-600 font-bold py-3 px-4 rounded-md mt-4"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setIsMenuOpen(false)} className={mobileNavLinkClasses}>
                Login
              </Link>
              <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 mt-2">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}