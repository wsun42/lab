/*
 * Footer — "Deep Space Control" Design
 * Dark navy footer with lab info, links, and OU affiliation
 */

import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="border-t mt-auto"
      style={{
        background: "oklch(0.10 0.03 240)",
        borderColor: "oklch(1 0 0 / 8%)",
      }}
    >
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Lab Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-8 h-8 rounded flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                style={{ background: "oklch(0.42 0.18 20)" }}
              >
                ADCL
              </div>
              <div>
                <div
                  className="text-sm font-semibold"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.92 0.01 240)" }}
                >
                  Autonomous Decision and Control Laboratory
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "oklch(0.60 0.02 240)" }}>
              Advancing the frontiers of control theory, differential games, and reinforcement learning at the University of Oklahoma.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-xs font-semibold mb-4 tracking-widest uppercase"
              style={{ fontFamily: "'IBM Plex Mono', monospace", color: "oklch(0.65 0.18 240)" }}
            >
              Navigation
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/research", label: "Research" },
                { href: "/publications", label: "Publications" },
                { href: "/team", label: "Team" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className="text-sm hover:text-white transition-colors"
                    style={{ color: "oklch(0.65 0.02 240)" }}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs font-semibold mb-4 tracking-widest uppercase"
              style={{ fontFamily: "'IBM Plex Mono', monospace", color: "oklch(0.65 0.18 240)" }}
            >
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: "oklch(0.42 0.18 20)" }} />
                <span className="text-sm leading-relaxed" style={{ color: "oklch(0.65 0.02 240)" }}>
                  Felgar Hall, Room 237<br />
                  865 Asp Ave, Norman, OK 73019
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="flex-shrink-0" style={{ color: "oklch(0.42 0.18 20)" }} />
                <a
                  href="mailto:wsun@ou.edu"
                  className="text-sm hover:text-white transition-colors"
                  style={{ color: "oklch(0.65 0.02 240)" }}
                >
                  wsun@ou.edu
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="flex-shrink-0" style={{ color: "oklch(0.42 0.18 20)" }} />
                <span className="text-sm" style={{ color: "oklch(0.65 0.02 240)" }}>
                  (405) 325-3713
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid oklch(1 0 0 / 6%)" }}
        >
          <p className="text-xs" style={{ color: "oklch(0.50 0.02 240)" }}>
            © {new Date().getFullYear()} Autonomous Decision and Control Laboratory · University of Oklahoma
          </p>
          <p className="text-xs" style={{ fontFamily: "'IBM Plex Mono', monospace", color: "oklch(0.45 0.02 240)" }}>
            School of Aerospace and Mechanical Engineering
          </p>
        </div>
      </div>
    </footer>
  );
}
