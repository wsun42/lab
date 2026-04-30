/*
 * Research Page — "Deep Space Control" Design
 * Detailed research areas with descriptions and key topics
 */

const RESEARCH_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663499352709/bqf5pduKkx2fgbsy6kwVn6/research_bg_87056f89.png";

const researchProjects = [
  {
    id: "01",
    title: "Robust Adaptive Control & Vision-Based Navigation for Multi-Rotor Vehicles",
    subtitle: "Autonomous flight systems and swarm coordination",
    description: `Our research focuses on developing robust adaptive control and vision-based navigation systems for multi-rotor 
    aerial vehicles. We investigate tilt-rotor quadcopter designs, flight control under wind disturbances, and 
    autonomous navigation in GPS-denied environments. Applications include cooperative swarm control, tactical autonomy, 
    and autonomous landing and docking systems.`,
    topics: [
      "Robust adaptive control laws",
      "Vision-based SLAM and localization",
      "Tilt-rotor quadcopter control",
      "Wind field estimation and reconstruction",
      "Autonomous landing and docking systems",
      "Swarm coordination and multi-agent control",
    ],
    award: {
      title: "Robust Adaptive Control and Vision-Based Navigation System Design for Multi-Rotor Aerial Vehicles",
      pi: "Sun, W. (Principal Investigator)",
      collaborators: [],
      sponsor: "Virginia Tech, University",
      period: "February 22, 2023 - February 21, 2024",
    },
    color: "oklch(0.65 0.18 240)",
  },
  {
    id: "02",
    title: "REU Site: Unmanned Aerial Systems with Real-World Applications",
    subtitle: "Research experiences and workforce development in Oklahoma",
    description: `This Research Experiences for Undergraduates (REU) site provides comprehensive training in unmanned aerial 
    systems with real-world applications. The program integrates control theory, autonomous navigation, sensor systems, and 
    practical aerospace engineering. Participants gain hands-on experience with UAV design, testing, and deployment while 
    contributing to ongoing research in autonomous systems and control algorithms.`,
    topics: [
      "Undergraduate research in autonomous systems",
      "UAV design and development",
      "Real-world aerospace applications",
      "Hands-on control systems experience",
      "Sensor systems and integration",
      "Workforce development in Oklahoma",
    ],
    award: {
      title: "REU Site: Unmanned Aerial Systems with Real-World Applications in Oklahoma",
      pi: "Merchan-Merchan, W. (Principal Investigator)",
      collaborators: [
        "Sun, W. (Co-Principal Investigator)",
      ],
      sponsor: "National Science Foundation, Federal",
      period: "May 1, 2022 - April 30, 2025",
    },
    color: "oklch(0.60 0.16 160)",
  },
  {
    id: "03",
    title: "Game-Theoretic Differential Dynamic Programming",
    subtitle: "Multi-agent optimal control under adversarial conditions",
    description: `We develop game-theoretic formulations of differential dynamic programming (DDP) for solving 
    multi-agent optimal control problems. Our work extends classical DDP to adversarial and cooperative settings, 
    providing computationally efficient algorithms for both continuous and discrete-time systems. Recent advances 
    include learning-based approaches, stochastic formulations, and output feedback control.`,
    topics: [
      "Min-Max differential dynamic programming",
      "Learning-based game-theoretic DDP",
      "Stochastic game-theoretic control",
      "H∞-optimal control via game theory",
      "Sliding mode observer-based control",
      "Risk-sensitive mean field games",
    ],
    color: "oklch(0.55 0.14 280)",
  },
  {
    id: "04",
    title: "Reinforcement Learning for Control",
    subtitle: "Data-driven autonomous decision-making",
    description: `We apply and develop reinforcement learning algorithms for control of complex dynamical systems. 
    Our research bridges control theory with machine learning, developing safe RL approaches with stability guarantees, 
    learning-based H∞ control, and data-driven differential games. We focus on practical aerospace applications 
    with theoretical foundations.`,
    topics: [
      "Learning-based optimal control synthesis",
      "Data-driven differential games",
      "Gaussian process-based control",
      "Safe reinforcement learning with guarantees",
      "Multi-agent reinforcement learning",
      "Transfer learning for control applications",
    ],
    color: "oklch(0.75 0.15 60)",
  },
];

export default function Research() {
  return (
    <div className="pt-16">
      {/* Page Header */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: "oklch(0.13 0.03 240)" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${RESEARCH_BG})` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, oklch(0.13 0.03 240 / 70%) 0%, oklch(0.13 0.03 240 / 95%) 100%)",
          }}
        />
        <div className="container relative z-10">
          <div className="section-label mb-3">What We Investigate</div>
          <h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.97 0 0)" }}
          >
            Research
          </h1>
          <p
            className="text-base max-w-2xl leading-relaxed"
            style={{ color: "oklch(0.70 0.02 240)" }}
          >
            The ADCL investigates fundamental and applied problems in game-theoretic control, autonomous systems, 
            reinforcement learning, and multi-agent coordination. Our work spans theoretical foundations and 
            practical aerospace applications.
          </p>
        </div>
      </section>

      {/* Research Projects */}
      <section className="py-16">
        <div className="container">
          <div className="space-y-12">
            {researchProjects.map((project, i) => (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-12"
                style={{
                  borderBottom: i < researchProjects.length - 1
                    ? "1px solid oklch(1 0 0 / 6%)"
                    : "none",
                }}
              >
                {/* Number + Title */}
                <div className="lg:col-span-4">
                  <div
                    className="text-5xl font-bold mb-3 opacity-20"
                    style={{ fontFamily: "'IBM Plex Mono', monospace", color: project.color }}
                  >
                    {project.id}
                  </div>
                  <h2
                    className="text-xl font-bold mb-1"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.97 0 0)" }}
                  >
                    {project.title}
                  </h2>
                  <p
                    className="text-sm"
                    style={{ fontFamily: "'IBM Plex Mono', monospace", color: project.color }}
                  >
                    {project.subtitle}
                  </p>
                </div>

                {/* Description + Topics */}
                <div className="lg:col-span-8">
                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: "oklch(0.70 0.02 240)" }}
                  >
                    {project.description}
                  </p>
                  <div>
                    <p
                      className="text-xs mb-3 tracking-wider uppercase"
                      style={{ fontFamily: "'IBM Plex Mono', monospace", color: "oklch(0.50 0.02 240)" }}
                    >
                      Key Topics
                    </p>
                    <ul className="space-y-1.5">
                      {project.topics.map((topic) => (
                        <li
                          key={topic}
                          className="text-xs flex items-start gap-2"
                          style={{ color: "oklch(0.65 0.02 240)" }}
                        >
                          <span
                            style={{
                              color: project.color,
                              flexShrink: 0,
                              marginTop: "0.25rem",
                            }}
                          >
                            ●
                          </span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Award Information - Title Only */}
                  {project.award && (
                    <div
                      className="mt-6 p-4 rounded-lg"
                      style={{
                        background: "oklch(0.18 0.04 240)",
                        border: `1px solid oklch(from ${project.color} l c h / 0.3)`,
                      }}
                    >
                      <p
                        className="text-xs mb-2 tracking-wider uppercase"
                        style={{ fontFamily: "'IBM Plex Mono', monospace", color: project.color }}
                      >
                        Sponsored Research
                      </p>
                      <p
                        className="text-sm font-semibold"
                        style={{ color: "oklch(0.92 0.01 240)" }}
                      >
                        {project.award.title}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
