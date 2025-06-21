// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if we've scrolled enough to change appearance
      if (currentScrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Determine if navbar should be visible based on scroll direction
      if (currentScrollY > lastScrollY) {
        // Scrolling down - hide navbar
        setVisible(false);
      } else {
        // Scrolling up - show navbar
        setVisible(true);
      }
      
      // Update last scroll position
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "PRODUCTS", href: "#products" },
    { name: "TESTIMONIALS", href: "#testimonials" },
    { name: "FAQ'S", href: "#faq" },
    { name: "ABOUT US", href: "#about-us" },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full backdrop-blur-lg h-[60px] md:h-[125px] transition-all duration-300 ${
        scrolled ? "bg-background/80 shadow-md py-2 md:py-6" : "bg-white py-2 md:py-6"
      } ${visible ? "translate-y-0": "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Logo/>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className={`font-baloo text-xl font-bold hover:text-[#13C0FA] transition-colors duration-200 ${
                    pathname === link.href ? "text-[#13C0FA]" : "text-black"
                  }`}
                >
                  {link.name}
                </Link>
                <div 
                  className={`absolute -bottom-0 left-0 h-1.5 bg-[#FBB406] transform rotate-[-2deg] transition-all duration-300 origin-left rounded-full ${
                    pathname === link.href 
                      ? "w-full" 
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </div>
            ))}
            <Button
              className="bg-[#FBB406] hover:bg-[#13C0FA] text-white font-baloo text-2xl font-bold py-6 px-12 rounded-full transition-colors duration-200"
              onClick={() => window.location.href = "/signup"}
            >
              JOIN
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md font-extrabold text-black focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X size={30} strokeWidth={3} />
              ) : (
                <Menu size={30} strokeWidth={3} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-4 pb-5 space-y-2 sm:px-5 bg-white shadow-lg">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-4 py-3 font-baloo font-bold text-xl ${
                    pathname === link.href
                      ? "text-[#13C0FA] border-l-4 border-[#FBB406]"
                      : "text-black hover:text-[#13C0FA]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </div>
            ))}
            <Button
              className="w-full bg-[#FBB406] hover:bg-[#13C0FA] text-white font-baloo text-xl font-bold py-3 px-12 rounded-full transition-colors duration-200 mt-4"
              onClick={() => window.location.href = "/signup"}
            >
              JOIN
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}