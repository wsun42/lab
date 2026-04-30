/*
 * Home Page — "Deep Space Control" Design
 * Sections: Hero, About/PI, Research Overview, Recent Publications, News
 */

import { Link } from "wouter";
import { ArrowRight, Mail, BookOpen, Users, FlaskConical } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663499352709/bqf5pduKkx2fgbsy6kwVn6/hero_bg_c16840ac.png";
const PI_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663499352709/bqf5pduKkx2fgbsy6kwVn6/wei_sun_photo_e282fbc3.webp";
const LAB_ABSTRACT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663499352709/bqf5pduKkx2fgbsy6kwVn6/lab_abstract_0aad9fcb.png";

const researchAreas = [
  {
    icon: "⚙️",
    title: "Control Systems",
    description: "Design and analysis of feedback control systems for complex dynamical processes, with emphasis on stability and performance guarantees.",
  },
  {
    icon: "🎯",
    title: "Differential Games",
    description: "Multi-player pursuit-evasion games and adversarial control problems, developing optimal strategies under competitive scenarios.",
  },
  {
    icon: "🧠",
    title: "Reinforcement Learning",
    description: "Data-driven control policies using RL algorithms for autonomous decision-making in uncertain and dynamic environments.",
  },
  {
    icon: "📐",
    title: "Trajectory Optimization",
    description: "Optimal path planning and trajectory design for aerospace and autonomous systems under complex constraints.",
  },
  {
    icon: "🎲",
    title: "Stochastic Systems",
    description: "Control and estimation for stochastic dynamical systems, addressing uncertainty in modeling and environmental disturbances.",
  },
  {
    icon: "🔄",
    title: "Dynamic Programming",
    description: "Min-Max differential dynamic programming in continuous and discrete time formulations for robust optimal control.",
  },
];

const recentPubs = [
  {
    authors: "W. Sun, Y. Pan, E. A. Theodorou, and P. Tsiotras",
    title: "Min-Max Differential Dynamic Programming: Continuous and Discrete Time Formulations",
    venue: "Journal of Guidance, Control, and Dynamics",
    year: "2024",
  },
  {
    authors: "V. R. Makkapati, W. Sun, and P. Tsiotras",
    title: "Optimal Evading Strategies for Two-Pursuers/One-Evader Problems",
    venue: "AIAA Journal of Guidance, Control, and Dynamics",
    year: "2018",
    volume: "Vol. 41, No. 4, pp. 851–862",
  },
  {
    authors: "W. Sun, P. Tsiotras, T. Lolla, D. N. Subramani and P. F. J. Lermusiaux",
    title: "Multiple-Pursuer-One-Evader Pursuit Evasion Game in Dynamic Flow Fields",
    venue: "AIAA Journal of Guidance, Control, and Dynamics",
    year: "2017",
    volume: "Vol. 40, No. 7, pp. 1627–1637",
  },
];

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        style={{
          background: "oklch(0.13 0.03 240)",
        }}
      >
        {/* Hero background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${HERO_BG})`,
            opacity: 0.25,
          }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, oklch(0.13 0.03 240 / 90%) 0%, oklch(0.13 0.03 240 / 60%) 50%, oklch(0.13 0.03 240 / 85%) 100%)",
          }}
        />

        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="section-label mb-4 animate-fade-in-up">
              University of Oklahoma · AME Department
            </div>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up delay-100"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "oklch(0.97 0 0)",
              }}
            >
              Autonomous
              <br />
              <span style={{ color: "oklch(0.42 0.18 20)" }}>Decision</span> &
              <br />
              Control Lab
            </h1>
            <p
              className="text-lg leading-relaxed mb-8 max-w-2xl animate-fade-in-up delay-200"
              style={{ color: "oklch(0.75 0.02 240)" }}
            >
              Advancing the theory and application of control systems, differential games, 
              and reinforcement learning for autonomous decision-making in complex, uncertain environments.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <Link href="/research">
                <button
                  className="flex items-center gap-2 px-6 py-3 rounded font-semibold text-sm transition-all hover:scale-105"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    background: "oklch(0.42 0.18 20)",
                    color: "oklch(0.97 0 0)",
                    boxShadow: "0 4px 20px oklch(0.42 0.18 20 / 30%)",
                  }}
                >
                  Explore Research <ArrowRight size={16} />
                </button>
              </Link>
              <Link href="/publications">
                <button
                  className="flex items-center gap-2 px-6 py-3 rounded font-semibold text-sm transition-all hover:bg-white/10"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    border: "1px solid oklch(1 0 0 / 20%)",
                    color: "oklch(0.90 0.01 240)",
                  }}
                >
                  <BookOpen size={16} /> Publications
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom glow line */}
        <div className="absolute bottom-0 left-0 right-0 glow-line" />
      </section>

      {/* Stats Bar */}
      <section
        className="py-8 border-b"
        style={{
          background: "oklch(0.16 0.04 240)",
          borderColor: "oklch(1 0 0 / 8%)",
        }}
      >
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "6+", label: "Research Areas" },
              { value: "10+", label: "Publications" },
              { value: "2017", label: "Ph.D. Year" },
              { value: "OU", label: "Norman, Oklahoma" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-2xl font-bold mb-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.65 0.18 240)" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs tracking-wider uppercase"
                  style={{ fontFamily: "'IBM Plex Mono', monospace", color: "oklch(0.55 0.02 240)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About PI Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* PI Photo + Info */}
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div
                  className="w-48 h-48 rounded-lg overflow-hidden"
                  style={{
                    border: "2px solid oklch(0.42 0.18 20 / 40%)",
                    boxShadow: "0 8px 32px oklch(0 0 0 / 40%)",
                  }}
                >
                  <img
                    src={PI_PHOTO}
                    alt="Dr. Wei Sun"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div>
                <div className="section-label mb-2">Principal Investigator</div>
                <h2
                  className="text-2xl font-bold mb-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.97 0 0)" }}
                >
                  Dr. Wei Sun
                </h2>
                <p
                  className="text-sm mb-4"
                  style={{ color: "oklch(0.65 0.18 240)" }}
                >
                  Assistant Professor, AME · University of Oklahoma
                </p>
                <div className="space-y-2 text-sm" style={{ color: "oklch(0.70 0.02 240)" }}>
                  <p>Ph.D., Aerospace Engineering (2017) — Georgia Tech</p>
                  <p>M.S., Aerospace Engineering (2015) — Georgia Tech</p>
                  <p>M.S., Mathematics (2015) — Georgia Tech</p>
                  <p>B.S., Mathematics (2010) — Peking University</p>
                </div>
                <div className="flex gap-3 mt-5">
                  <a
                    href="mailto:wsun@ou.edu"
                    className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded transition-all hover:scale-105"
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      background: "oklch(0.42 0.18 20 / 20%)",
                      border: "1px solid oklch(0.42 0.18 20 / 40%)",
                      color: "oklch(0.85 0.05 20)",
                    }}
                  >
                    <Mail size={12} /> wsun@ou.edu
                  </a>
                </div>
              </div>
            </div>

            {/* Lab Description */}
            <div>
              <div className="section-label mb-3">About the Lab</div>
              <h2
                className="text-3xl font-bold mb-5"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.97 0 0)" }}
              >
                Autonomous Decision and Control Laboratory
              </h2>
              <div className="space-y-4 text-sm leading-relaxed" style={{ color: "oklch(0.72 0.02 240)" }}>
                <p>
                  The Autonomous Decision and Control Laboratory (ADCL) at the University of Oklahoma conducts 
                  fundamental and applied research at the intersection of control theory, game theory, and machine learning.
                </p>
                <p>
                  Our work focuses on developing rigorous mathematical frameworks for autonomous systems that must 
                  make optimal decisions under uncertainty, adversarial conditions, and complex environmental dynamics.
                </p>
                <p>
                  We are part of the School of Aerospace and Mechanical Engineering (AME) in the Gallogly College 
                  of Engineering, collaborating with researchers across aerospace, robotics, and applied mathematics.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-6">
                <Link href="/team">
                  <button
                    className="flex items-center gap-2 text-sm px-4 py-2 rounded transition-all hover:bg-white/5"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      border: "1px solid oklch(1 0 0 / 15%)",
                      color: "oklch(0.80 0.01 240)",
                    }}
                  >
                    <Users size={14} /> Meet the Team
                  </button>
                </Link>
                <Link href="/contact">
                  <button
                    className="flex items-center gap-2 text-sm px-4 py-2 rounded transition-all hover:bg-white/5"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      border: "1px solid oklch(1 0 0 / 15%)",
                      color: "oklch(0.80 0.01 240)",
                    }}
                  >
                    <FlaskConical size={14} /> Join the Lab
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="glow-line mx-8" />

      {/* Research Areas */}
      <section className="py-20">
        <div className="container">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="section-label mb-2">What We Do</div>
              <h2
                className="text-3xl font-bold"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.97 0 0)" }}
              >
                Research Areas
              </h2>
            </div>
            <Link href="/research">
              <span
                className="hidden sm:flex items-center gap-1 text-sm hover:gap-2 transition-all"
                style={{ color: "oklch(0.65 0.18 240)" }}
              >
                View all <ArrowRight size={14} />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {researchAreas.map((area, i) => (
              <div
                key={area.title}
                className="research-card p-6"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="text-2xl mb-3">{area.icon}</div>
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.92 0.01 240)" }}
                >
                  {area.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.62 0.02 240)" }}>
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-line mx-8" />

      {/* Recent Publications */}
      <section className="py-20">
        <div className="container">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="section-label mb-2">Latest Work</div>
              <h2
                className="text-3xl font-bold"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.97 0 0)" }}
              >
                Recent Publications
              </h2>
            </div>
            <Link href="/publications">
              <span
                className="hidden sm:flex items-center gap-1 text-sm hover:gap-2 transition-all"
                style={{ color: "oklch(0.65 0.18 240)" }}
              >
                All publications <ArrowRight size={14} />
              </span>
            </Link>
          </div>

          <div className="space-y-5">
            {recentPubs.map((pub, i) => (
              <div key={i} className="pub-item py-1">
                <p
                  className="text-xs mb-1"
                  style={{ fontFamily: "'IBM Plex Mono', monospace", color: "oklch(0.55 0.02 240)" }}
                >
                  {pub.authors} · {pub.year}
                </p>
                <p
                  className="text-base font-medium mb-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.90 0.01 240)" }}
                >
                  {pub.title}
                </p>
                <p className="text-sm" style={{ color: "oklch(0.65 0.18 240)" }}>
                  {pub.venue}{pub.volume ? `, ${pub.volume}` : ""}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "oklch(0.16 0.04 240)" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${LAB_ABSTRACT})` }}
        />
        <div className="container relative z-10 text-center">
          <div className="section-label mb-3">Join Us</div>
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.97 0 0)" }}
          >
            Interested in Joining the Lab?
          </h2>
          <p
            className="text-base max-w-xl mx-auto mb-8"
            style={{ color: "oklch(0.70 0.02 240)" }}
          >
            We are always looking for motivated Ph.D. students and postdoctoral researchers with strong backgrounds 
            in control theory, mathematics, or related fields.
          </p>
          <Link href="/contact">
            <button
              className="flex items-center gap-2 px-8 py-3 rounded font-semibold text-sm mx-auto transition-all hover:scale-105"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                background: "oklch(0.42 0.18 20)",
                color: "oklch(0.97 0 0)",
                boxShadow: "0 4px 20px oklch(0.42 0.18 20 / 30%)",
              }}
            >
              Get in Touch <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
