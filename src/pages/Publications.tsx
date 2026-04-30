/*
 * Publications Page — "Deep Space Control" Design
 * Full list of publications with year grouping and venue info
 */

import { useState } from "react";

interface Publication {
  authors: string;
  title: string;
  venue: string;
  volume?: string;
  note?: string;
  type: string;
}

const publications: { year: string; items: Publication[] }[] = [
  {
    year: "2026",
    items: [
      {
        authors: "Sarbaz, M., Sun, W.",
        title: "Continuous Time Differential Dynamic Programming for Nonzero-Sum Differential Games",
        venue: "Journal of Optimization Theory and Applications",
        volume: "Vol. 209, No. 2, p. 39",
        type: "journal",
      },
    ],
  },
  {
    year: "2025",
    items: [
      {
        authors: "Sarbaz, M., Sun, W.",
        title: "Data-Driven Min-Max Differential Dynamic Programming for Nonlinear Systems",
        venue: "Journal of Guidance, Control, and Dynamics",
        volume: "Vol. 48, No. 11, pp. 2643–2653",
        type: "journal",
      },
      {
        authors: "Sarbaz, M., Sun, W.",
        title: "Distributed Min-Max Differential Dynamic Programming for Large-Scale Systems with Mismatched Interconnections",
        venue: "Journal of Nonlinear Dynamics",
        volume: "Vol. 113, No. 24, pp. 33517–33537",
        type: "journal",
      },
      {
        authors: "Sarbaz, M., Sun, W.",
        title: "Data-Driven Stochastic Game Theoretic Differential Dynamic Programming",
        venue: "International Journal of Robust and Nonlinear Control",
        volume: "Vol. 35, No. 13, pp. 5343–5354",
        type: "journal",
      },
      {
        authors: "Sun, W., Trafalis, T.",
        title: "Risk-Aware Controller Implementation for Risk-Sensitive Mean Field Games Through a Game-Theoretic Differential Dynamic Programming Approach",
        venue: "International Journal of Control",
        volume: "Vol. 98, No. 12, pp. 2967–2975",
        type: "journal",
      },
      {
        authors: "Sarbaz, M., Sun, W.",
        title: "Sliding mode observer-based min-max differential dynamic programming for output feedback differential games",
        venue: "International Journal of Control",
        volume: "Vol. 98, No. 11, pp. 2719–2734",
        type: "journal",
      },
      {
        authors: "Sun, W., Trafalis, T.",
        title: "H∞-Optimal Control via Game-Theoretic Differential Dynamic Programming and Gaussian Processes",
        venue: "Journal of Optimization Theory and Applications",
        volume: "Vol. 204, No. 40, p. 20",
        type: "journal",
      },

    ],
  },
  {
    year: "2024",
    items: [
      {
        authors: "Sarbaz, M., Sun, W.",
        title: "Min-Max Adaptive Dynamic Programming for Zero-Sum Differential Games",
        venue: "International Journal of Control",
        type: "journal",
      },
    ],
  },
  {
    year: "2023",
    items: [
      {
        authors: "Sun, W., Kleiber, J.",
        title: "Control Constrained Game Theoretic Differential Dynamic Programming",
        venue: "American Control Conference",
        type: "conference",
      },
      {
        authors: "Sun, W., Trafalis, T.",
        title: "Learning-Based Nonlinear H-infinity Control via Game-Theoretic Differential Dynamic Programming",
        venue: "American Control Conference",
        volume: "pp. 1283–1288",
        type: "conference",
      },
      {
        authors: "Ren, J., Yang, J., Wu, F., Sun, W., Xiao, X., Xia, J. C.",
        title: "Regional thermal environment changes: Integration of satellite data and land use/land cover",
        venue: "Iscience",
        volume: "Vol. 26, No. 2",
        type: "journal",
      },
    ],
  },
  {
    year: "2022",
    items: [
      {
        authors: "Sun, W., Metcalf, J. G.",
        title: "Concept and design of precise radar sensor for relative navigation in ocean environment",
        venue: "Radar Sensor Technology XXVI",
        type: "conference",
      },
    ],
  },
  {
    year: "2021",
    items: [
      {
        authors: "Marshall, J. A., Sun, W., L'Afflitto, A.",
        title: "A survey of guidance, navigation, and control systems for autonomous multi-rotor small unmanned aerial systems",
        venue: "Annual Reviews in Control",
        volume: "Vol. 52, pp. 390–427",
        type: "journal",
      },
    ],
  },
  {
    year: "2020",
    items: [
      {
        authors: "Siddique, Z., L'Afflitto, A., Sun, W., Lee, J., Fowler, S., Jones, W.",
        title: "Developing diverse workforce for Oklahoma Aerospace Industry-Collaboration Between a Two year and a Four year Institutions",
        venue: "Conference Proceedings",
        type: "conference",
      },
    ],
  },
  {
    year: "2019",
    items: [
      {
        authors: "Sun, W., Tsiotras, P., Yezzi, A. J.",
        title: "Multiplayer Pursuit-Evasion Games in Three-Dimensional Flow Fields",
        venue: "Dynamic Games and Applications",
        volume: "Vol. 9, No. 4, pp. 1188–1207",
        type: "journal",
      },
    ],
  },
  {
    year: "2023 (in press)",
    items: [
      {
        authors: "Hart, K., Zhang, Y., Metcalf, J. G., Sun, W.",
        title: "Basic algorithms and preliminary performance observations of radar-based SLAM",
        venue: "Radar Sensor Technology XXVII",
        note: "in press",
        type: "conference",
      },
    ],
  },
  {
    year: "Under Review",
    items: [
      {
        authors: "Li, T., Sun, W.",
        title: "MLP-SLAM: Multilayer Perceptron-Based Simultaneous Localization and Mapping With a Dynamic and Static Object Discriminator",
        venue: "IEEE Robotics and Automation Letters",
        note: "submitted",
        type: "journal",
      },
    ],
  },
];

const typeColors: Record<string, string> = {
  journal: "oklch(0.65 0.18 240)",
  conference: "oklch(0.60 0.16 160)",
  preprint: "oklch(0.75 0.15 60)",
};

const typeLabels: Record<string, string> = {
  journal: "Journal",
  conference: "Conference",
  preprint: "Preprint",
};

export default function Publications() {
  const [filter, setFilter] = useState<"all" | "journal" | "conference">("all");

  const filtered = publications.map((group) => ({
    ...group,
    items: group.items.filter((p) => filter === "all" || p.type === filter),
  })).filter((group) => group.items.length > 0);

  return (
    <div className="pt-16">
      {/* Page Header */}
      <section
        className="py-24"
        style={{ background: "oklch(0.13 0.03 240)" }}
      >
        <div className="container">
          <div className="section-label mb-3">Scholarly Output</div>
          <h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.97 0 0)" }}
          >
            Publications
          </h1>
          <p
            className="text-base max-w-2xl leading-relaxed"
            style={{ color: "oklch(0.70 0.02 240)" }}
          >
            Research contributions in game-theoretic control, differential dynamic programming, autonomous systems, 
            reinforcement learning, and multi-agent coordination published in peer-reviewed journals and conference proceedings.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section
        className="py-4 border-b sticky top-16 z-40"
        style={{
          background: "oklch(0.15 0.04 240 / 95%)",
          borderColor: "oklch(1 0 0 / 8%)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="container">
          <div className="flex gap-2">
            {(["all", "journal", "conference"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="text-xs px-4 py-1.5 rounded-full transition-all capitalize"
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  background: filter === f ? "oklch(0.42 0.18 20)" : "oklch(1 0 0 / 5%)",
                  color: filter === f ? "oklch(0.97 0 0)" : "oklch(0.65 0.02 240)",
                  border: `1px solid ${filter === f ? "oklch(0.42 0.18 20)" : "oklch(1 0 0 / 10%)"}`,
                }}
              >
                {f === "all" ? "All" : typeLabels[f]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-16">
        <div className="container">
          {filtered.length === 0 ? (
            <p className="text-center py-12" style={{ color: "oklch(0.55 0.02 240)" }}>
              No publications found for this filter.
            </p>
          ) : (
            <div className="space-y-12">
              {filtered.map((group) => (
                <div key={group.year}>
                  <div
                    className="flex items-center gap-4 mb-6"
                  >
                    <span
                      className="text-2xl font-bold"
                      style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.65 0.18 240)" }}
                    >
                      {group.year}
                    </span>
                    <div className="flex-1 glow-line" />
                  </div>
                  <div className="space-y-6">
                    {group.items.map((pub, i) => (
                      <div
                        key={i}
                        className="pub-item py-2"
                        style={{
                          borderLeftColor: typeColors[pub.type],
                        }}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <p
                              className="text-xs mb-1.5"
                              style={{ fontFamily: "'IBM Plex Mono', monospace", color: "oklch(0.55 0.02 240)" }}
                            >
                              {pub.authors}
                            </p>
                            <p
                              className="text-base font-semibold mb-1.5 leading-snug"
                              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.92 0.01 240)" }}
                            >
                              {pub.title}
                            </p>
                            <div className="flex flex-wrap items-center gap-2">
                              <span
                                className="text-sm"
                                style={{ color: typeColors[pub.type] }}
                              >
                                {pub.venue}
                              </span>
                              {pub.volume && (
                                <span
                                  className="text-xs"
                                  style={{ fontFamily: "'IBM Plex Mono', monospace", color: "oklch(0.55 0.02 240)" }}
                                >
                                  {pub.volume}
                                </span>
                              )}
                              {pub.note && (
                                <span
                                  className="text-xs px-2 py-0.5 rounded-full"
                                  style={{
                                    background: "oklch(0.75 0.15 60 / 15%)",
                                    border: "1px solid oklch(0.75 0.15 60 / 30%)",
                                    color: "oklch(0.75 0.15 60)",
                                    fontFamily: "'IBM Plex Mono', monospace",
                                  }}
                                >
                                  {pub.note}
                                </span>
                              )}
                            </div>
                          </div>
                          <span
                            className="text-xs px-2 py-0.5 rounded flex-shrink-0 mt-1"
                            style={{
                              fontFamily: "'IBM Plex Mono', monospace",
                              background: `${typeColors[pub.type].replace(")", " / 10%)")}`,
                              border: `1px solid ${typeColors[pub.type].replace(")", " / 25%)")}`,
                              color: typeColors[pub.type],
                            }}
                          >
                            {typeLabels[pub.type]}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Google Scholar Note */}
      <section
        className="py-10 border-t"
        style={{ borderColor: "oklch(1 0 0 / 6%)", background: "oklch(0.15 0.04 240)" }}
      >
        <div className="container text-center">
          <p className="text-sm" style={{ color: "oklch(0.60 0.02 240)" }}>
            For a complete and up-to-date list of publications and research, please refer to{" "}
            <a
              href="https://scholar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ color: "oklch(0.65 0.18 240)" }}
            >
              Google Scholar
            </a>{" "}
            or contact{" "}
            <a
              href="mailto:wsun@ou.edu"
              className="hover:underline"
              style={{ color: "oklch(0.65 0.18 240)" }}
            >
              wsun@ou.edu
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
