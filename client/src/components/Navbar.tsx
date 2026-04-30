/*
 * Navbar — "Deep Space Control" Design
 * Fixed top navigation with logo, nav links, and mobile menu
 * Colors: Deep navy bg, crimson active, electric blue hover
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "oklch(0.13 0.03 240 / 95%)"
          : "oklch(0.13 0.03 240 / 80%)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid oklch(1 0 0 / 8%)" : "1px solid transparent",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 group">
              <div
                className="w-8 h-8 rounded flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                style={{ background: "oklch(0.42 0.18 20)" }}
              >
                ADCL
              </div>
              <div className="hidden sm:block">
                <div
                  className="text-sm font-semibold leading-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.92 0.01 240)" }}
                >
                  Autonomous Decision
                </div>
                <div
                  className="text-xs leading-tight"
                  style={{ fontFamily: "'IBM Plex Mono', monospace", color: "oklch(0.65 0.18 240)", letterSpacing: "0.05em" }}
                >
                  & Control Laboratory
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`nav-link px-4 py-2 rounded text-sm transition-colors ${
                    location === link.href ? "active" : ""
                  }`}
                  style={{
                    color: location === link.href
                      ? "oklch(0.97 0 0)"
                      : "oklch(0.75 0.01 240)",
                    background: location === link.href
                      ? "oklch(1 0 0 / 5%)"
                      : "transparent",
                  }}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: "oklch(0.80 0.01 240)" }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background: "oklch(0.15 0.04 240)",
            borderColor: "oklch(1 0 0 / 8%)",
          }}
        >
          <div className="container py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className="block px-4 py-2 rounded text-sm font-medium transition-colors"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: location === link.href
                      ? "oklch(0.97 0 0)"
                      : "oklch(0.75 0.01 240)",
                    background: location === link.href
                      ? "oklch(0.42 0.18 20 / 20%)"
                      : "transparent",
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
