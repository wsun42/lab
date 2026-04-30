/*
 * Team Page — "Deep Space Control" Design
 * PI profile and team members with research areas
 */

import { Mail } from "lucide-react";

const PI_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663499352709/bqf5pduKkx2fgbsy6kwVn6/wei_sun_photo_e282fbc3.webp";

const pi = {
  name: "Dr. Wei Sun",
  title: "Assistant Professor",
  department: "School of Aerospace and Mechanical Engineering",
  university: "The University of Oklahoma",
  email: "wsun@ou.edu",
  phone: "(405) 325-3713",
  office: "Felgar Hall, Room 237",
  photo: PI_PHOTO,
  education: [
    "Ph.D., Aerospace Engineering (2017) — Georgia Institute of Technology",
    "M.S., Aerospace Engineering (2015) — Georgia Institute of Technology",
    "M.S., Mathematics (2015) — Georgia Institute of Technology",
    "B.S., Mathematics (2010) — Peking University, Beijing, China",
  ],
  experience: [
    "Postdoctoral Fellow, Autonomous Control Laboratory, University of Washington (2018)",
    "Postdoctoral Fellow, Dynamics and Control Systems Laboratory, Georgia Tech (2017)",
  ],
  memberships: [
    "Sigma Xi (2025–Present)",
    "Society for Industrial and Applied Mathematics (SIAM) (2016–Present)",
    "Institute of Electrical and Electronics Engineers (IEEE) (2016–Present)",
    "IEEE Control System Society Technical Committee on Aerospace Control (TCAC) (2018–Present)",
  ],
  awards: [
    "Vice President for Research and Partnerships Annual Award for Excellence in Research Grants (2024)",
    "Excellent Reviewer for the Journal of Guidance, Control, and Dynamics (2022)",
    "Student Travel Award, American Control Conference (2015)",
  ],
};

const phdStudents = [
  {
    name: "Mohammad Sarbaz",
    topic: "Learning-Based Min-Max Differential Dynamic Programming",
    status: "Active (September 2022–Present)",
  },
  {
    name: "Taozhe Li",
    topic: "Machine Learning Aided Visual SLAM",
    status: "Active (January 2023–Present)",
  },
  {
    name: "Abdullah Tasim",
    topic: "TBD",
    status: "Active (August 2025–Present)",
  },
];

const masterStudents = [
  {
    name: "Yu Cheng Cheng",
    topic: "Tilting-Rotor Quadcopter Control",
    status: "Active (August 2025–Present)",
    degree: "M.S. Non-thesis",
  },
  {
    name: "Evan Jackson",
    topic: "Additive Manufacturing and LiDAR Navigation for Semi-Autonomous Ground Vehicles",
    status: "Active (September 2025–Present)",
    degree: "M.S. Thesis",
  },
];

const graduatedStudents = [
  {
    name: "Rushmian Wadud",
    degree: "M.S.",
    topic: "DyOb-SLAM: Dynamic Object Tracking SLAM System",
    year: "2021",
  },
  {
    name: "Ethan To",
    degree: "M.S.",
    topic: "Radar-Centered Multi-Object Tracking With Moving Vehicle Platforms",
    year: "2025",
  },
];

const openings = [
  {
    type: "Ph.D. Students",
    description:
      "We are seeking motivated Ph.D. students with strong backgrounds in control theory, applied mathematics, or related fields. Candidates should have a solid foundation in differential equations, linear algebra, and optimization. Research areas include game-theoretic control, autonomous UAVs, reinforcement learning, and radar-based navigation.",
    requirements: [
      "B.S. or M.S. in Aerospace Engineering, Mechanical Engineering, Electrical Engineering, Mathematics, or related field",
      "Strong mathematical background (differential equations, linear algebra, optimization)",
      "Programming experience (MATLAB, Python, or C++)",
      "Interest in control theory, game theory, differential games, or machine learning",
    ],
  },
  {
    type: "Postdoctoral Researchers",
    description:
      "Postdoctoral positions may be available for candidates with a Ph.D. in control systems, applied mathematics, aerospace engineering, or a closely related field. We welcome applications from researchers interested in game-theoretic control, UAV systems, and learning-based control.",
    requirements: [
      "Ph.D. in control systems, applied mathematics, aerospace engineering, or related field",
      "Strong publication record in control theory or related areas",
      "Experience in differential games, differential dynamic programming, or reinforcement learning",
    ],
  },
];

export default function Team() {
  return (
    <div className="pt-16">
      {/* Page Header */}
      <section
        className="py-24"
        style={{ background: "oklch(0.13 0.03 240)" }}
      >
        <div className="container">
          <div className="section-label mb-3">The People</div>
          <h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.97 0 0)" }}
          >
            Team
          </h1>
          <p
            className="text-base max-w-2xl leading-relaxed"
            style={{ color: "oklch(0.70 0.02 240)" }}
          >
            The ADCL is led by Dr. Wei Sun and is home to graduate students and researchers 
            working on cutting-edge problems in control theory, autonomous systems, and game-theoretic control.
          </p>
        </div>
      </section>

      {/* PI Section */}
      <section className="py-16">
        <div className="container">
          <div className="section-label mb-6">Principal Investigator</div>
          <div
            className="rounded-lg p-8 grid grid-cols-1 lg:grid-cols-3 gap-10"
            style={{
              background: "oklch(0.18 0.04 240)",
              border: "1px solid oklch(1 0 0 / 8%)",
            }}
          >
            {/* Photo + Contact */}
            <div className="flex flex-col items-center lg:items-start gap-5">
              <div
                className="w-44 h-44 rounded-lg overflow-hidden flex-shrink-0"
                style={{
                  border: "2px solid oklch(0.42 0.18 20 / 50%)",
                  boxShadow: "0 8px 32px oklch(0 0 0 / 40%)",
                }}
              >
                <img
                  src={pi.photo}
                  alt={pi.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="text-center lg:text-left">
                <h2
                  className="text-xl font-bold mb-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.97 0 0)" }}
                >
                  {pi.name}
                </h2>
                <p className="text-sm mb-0.5" style={{ color: "oklch(0.65 0.18 240)" }}>
                  {pi.title}
                </p>
                <p className="text-xs" style={{ color: "oklch(0.60 0.02 240)" }}>
                  {pi.department}
                </p>
                <p className="text-xs" style={{ color: "oklch(0.60 0.02 240)" }}>
                  {pi.university}
                </p>
              </div>
              <div className="flex flex-col gap-2 text-sm w-full">
                <a
                  href={`mailto:${pi.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                  style={{ color: "oklch(0.65 0.02 240)" }}
                >
                  <Mail size={13} style={{ color: "oklch(0.42 0.18 20)" }} />
                  {pi.email}
                </a>
                <p className="text-xs" style={{ color: "oklch(0.55 0.02 240)" }}>
                  📞 {pi.phone}
                </p>
                <p className="text-xs" style={{ color: "oklch(0.55 0.02 240)" }}>
                  🏢 {pi.office}
                </p>
                <p className="text-xs" style={{ color: "oklch(0.55 0.02 240)" }}>
                  🕐 Office Hours: Fri 1:00–2:30pm
                </p>
              </div>
            </div>

            {/* Education + Experience */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3
                  className="text-xs font-semibold mb-3 tracking-widest uppercase"
                  style={{ fontFamily: "'IBM Plex Mono', monospace", color: "oklch(0.65 0.18 240)" }}
                >
                  Education
                </h3>
                <div className="space-y-2">
                  {pi.education.map((edu) => (
                    <p key={edu} className="text-sm leading-snug" style={{ color: "oklch(0.70 0.02 240)" }}>
                      {edu}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <h3
                  className="text-xs font-semibold mb-3 tracking-widest uppercase"
                  style={{ fontFamily: "'IBM Plex Mono', monospace", color: "oklch(0.65 0.18 240)" }}
                >
                  Experience
                </h3>
                <div className="space-y-2">
                  {pi.experience.map((exp) => (
                    <p key={exp} className="text-sm leading-snug" style={{ color: "oklch(0.70 0.02 240)" }}>
                      {exp}
                    </p>
                  ))}
                </div>

                <h3
                  className="text-xs font-semibold mb-3 mt-6 tracking-widest uppercase"
                  style={{ fontFamily: "'IBM Plex Mono', monospace", color: "oklch(0.65 0.18 240)" }}
                >
                  Awards & Honors
                </h3>
                <div className="space-y-2">
                  {pi.awards.map((award) => (
                    <p key={award} className="text-sm leading-snug" style={{ color: "oklch(0.70 0.02 240)" }}>
                      {award}
                    </p>
                  ))}
                </div>

                <h3
                  className="text-xs font-semibold mb-3 mt-6 tracking-widest uppercase"
                  style={{ fontFamily: "'IBM Plex Mono', monospace", color: "oklch(0.65 0.18 240)" }}
                >
                  Professional Memberships
                </h3>
                <div className="space-y-2">
                  {pi.memberships.map((m) => (
                    <p key={m} className="text-xs leading-snug" style={{ color: "oklch(0.70 0.02 240)" }}>
                      {m}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PhD Students */}
      <section
        className="py-16 border-t"
        style={{ borderColor: "oklch(1 0 0 / 6%)" }}
      >
        <div className="container">
          <div className="section-label mb-6">Current Students</div>
          
          {/* PhD Students Subsection */}
          <div className="mb-12">
            <h2
              className="text-xl font-semibold mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.92 0.01 240)" }}
            >
              Ph.D. Students
            </h2>
            <div className="space-y-4">
              {phdStudents.map((student) => (
                <div
                  key={student.name}
                  className="research-card p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3
                        className="text-base font-semibold mb-1"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.92 0.01 240)" }}
                      >
                        {student.name}
                      </h3>
                      <p className="text-sm leading-relaxed mb-2" style={{ color: "oklch(0.70 0.02 240)" }}>
                        <strong style={{ color: "oklch(0.85 0.01 240)" }}>Topic:</strong> {student.topic}
                      </p>
                      <p className="text-xs" style={{ color: "oklch(0.55 0.02 240)" }}>
                        {student.status}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Master Students Subsection */}
          <div>
            <h2
              className="text-xl font-semibold mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.92 0.01 240)" }}
            >
              Master's Students
            </h2>
            <div className="space-y-4">
              {masterStudents.map((student) => (
                <div
                  key={student.name}
                  className="research-card p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3
                        className="text-base font-semibold mb-1"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.92 0.01 240)" }}
                      >
                        {student.name}
                      </h3>
                      <p
                        className="text-xs mb-2"
                        style={{ fontFamily: "'IBM Plex Mono', monospace", color: "oklch(0.65 0.18 240)" }}
                      >
                        {student.degree}
                      </p>
                      <p className="text-sm leading-relaxed mb-2" style={{ color: "oklch(0.70 0.02 240)" }}>
                        <strong style={{ color: "oklch(0.85 0.01 240)" }}>Topic:</strong> {student.topic}
                      </p>
                      <p className="text-xs" style={{ color: "oklch(0.55 0.02 240)" }}>
                        {student.status}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Graduated Students */}
      <section
        className="py-16 border-t"
        style={{ borderColor: "oklch(1 0 0 / 6%)", background: "oklch(0.15 0.04 240)" }}
      >
        <div className="container">
          <div className="section-label mb-6">Graduated Students</div>
          <div className="space-y-4">
            {graduatedStudents.map((student) => (
              <div
                key={student.name}
                className="research-card p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3
                      className="text-base font-semibold mb-1"
                      style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.92 0.01 240)" }}
                    >
                      {student.name}
                    </h3>
                    <p
                      className="text-xs mb-2"
                      style={{ fontFamily: "'IBM Plex Mono', monospace", color: "oklch(0.65 0.18 240)" }}
                    >
                      {student.degree} · {student.year}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "oklch(0.70 0.02 240)" }}>
                      <strong style={{ color: "oklch(0.85 0.01 240)" }}>Thesis:</strong> {student.topic}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
