/*
 * Contact Page — "Deep Space Control" Design
 * Contact information, office location, and directions
 */

import { Mail, Phone, MapPin, Clock, ExternalLink } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "wsun@ou.edu",
    href: "mailto:wsun@ou.edu",
    color: "oklch(0.42 0.18 20)",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(405) 325-3713",
    href: "tel:+14053253713",
    color: "oklch(0.65 0.18 240)",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Felgar Hall, Room 237\n865 Asp Ave, Norman, OK 73019",
    href: "https://maps.google.com/?q=Felgar+Hall+University+of+Oklahoma",
    color: "oklch(0.60 0.16 160)",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Friday, 1:00 PM – 2:30 PM\nOr by appointment",
    color: "oklch(0.75 0.15 60)",
  },
];

const deptContact = {
  name: "School of Aerospace and Mechanical Engineering",
  address: "Felgar Hall, Rm. 212\n865 Asp Ave.\nNorman, OK 73019",
  phone: "(405) 325-5011",
  email: "ame@ou.edu",
};

export default function Contact() {
  return (
    <div className="pt-16">
      {/* Page Header */}
      <section
        className="py-24"
        style={{ background: "oklch(0.13 0.03 240)" }}
      >
        <div className="container">
          <div className="section-label mb-3">Get in Touch</div>
          <h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.97 0 0)" }}
          >
            Contact
          </h1>
          <p
            className="text-base max-w-2xl leading-relaxed"
            style={{ color: "oklch(0.70 0.02 240)" }}
          >
            Whether you are a prospective student, collaborator, or have questions about our research, 
            we welcome your inquiries.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="section-label mb-6">Dr. Wei Sun</div>
              <div className="space-y-5">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div
                      className="flex items-start gap-4 p-5 rounded-lg transition-all"
                      style={{
                        background: "oklch(0.18 0.04 240)",
                        border: "1px solid oklch(1 0 0 / 8%)",
                      }}
                    >
                      <div
                        className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: `${item.color.replace(")", " / 15%)")}` }}
                      >
                        <Icon size={16} style={{ color: item.color }} />
                      </div>
                      <div>
                        <p
                          className="text-xs mb-1 tracking-wider uppercase"
                          style={{ fontFamily: "'IBM Plex Mono', monospace", color: "oklch(0.50 0.02 240)" }}
                        >
                          {item.label}
                        </p>
                        <p
                          className="text-sm leading-relaxed whitespace-pre-line"
                          style={{ color: item.href ? item.color : "oklch(0.80 0.01 240)" }}
                        >
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="block hover:scale-[1.01] transition-transform"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>
            </div>

            {/* Department Info + Map */}
            <div>
              <div className="section-label mb-6">Department</div>
              <div
                className="p-6 rounded-lg mb-6"
                style={{
                  background: "oklch(0.18 0.04 240)",
                  border: "1px solid oklch(1 0 0 / 8%)",
                }}
              >
                <h3
                  className="text-base font-semibold mb-3"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.92 0.01 240)" }}
                >
                  {deptContact.name}
                </h3>
                <div className="space-y-2 text-sm" style={{ color: "oklch(0.65 0.02 240)" }}>
                  <p className="whitespace-pre-line">{deptContact.address}</p>
                  <p>📞 {deptContact.phone}</p>
                  <a
                    href={`mailto:${deptContact.email}`}
                    className="hover:underline"
                    style={{ color: "oklch(0.65 0.18 240)" }}
                  >
                    {deptContact.email}
                  </a>
                </div>
              </div>

              {/* Map embed placeholder */}
              <div
                className="rounded-lg overflow-hidden"
                style={{
                  border: "1px solid oklch(1 0 0 / 8%)",
                  height: "280px",
                  background: "oklch(0.16 0.04 240)",
                  position: "relative",
                }}
              >
                <iframe
                  title="ADCL Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3259.8!2d-97.4453!3d35.2059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b26f3b7c5c3b3d%3A0x3b3b3b3b3b3b3b3b!2sFelgar+Hall%2C+University+of+Oklahoma!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-3 text-right">
                <a
                  href="https://maps.google.com/?q=Felgar+Hall+University+of+Oklahoma+Norman+OK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs hover:underline"
                  style={{ fontFamily: "'IBM Plex Mono', monospace", color: "oklch(0.55 0.02 240)" }}
                >
                  Open in Google Maps <ExternalLink size={10} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prospective Students */}
      <section
        className="py-16 border-t"
        style={{ borderColor: "oklch(1 0 0 / 6%)", background: "oklch(0.15 0.04 240)" }}
      >
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="section-label mb-3">Prospective Students</div>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "oklch(0.97 0 0)" }}
            >
              Interested in Joining the Lab?
            </h2>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "oklch(0.68 0.02 240)" }}
            >
              If you are interested in pursuing a Ph.D. or postdoctoral research at the ADCL, 
              please send an email to Dr. Sun with the subject line "Prospective Student/Postdoc — [Your Name]". 
              Include your CV, transcripts, and a brief statement describing your research interests 
              and how they align with the lab's work.
            </p>
            <div
              className="p-5 rounded-lg text-left"
              style={{
                background: "oklch(0.18 0.04 240)",
                border: "1px solid oklch(0.65 0.18 240 / 20%)",
              }}
            >
              <p
                className="text-xs mb-2 tracking-wider uppercase"
                style={{ fontFamily: "'IBM Plex Mono', monospace", color: "oklch(0.65 0.18 240)" }}
              >
                Email Template
              </p>
              <p className="text-sm" style={{ color: "oklch(0.70 0.02 240)" }}>
                <strong style={{ color: "oklch(0.85 0.01 240)" }}>To:</strong> wsun@ou.edu<br />
                <strong style={{ color: "oklch(0.85 0.01 240)" }}>Subject:</strong> Prospective Ph.D. Student — [Your Name]<br />
                <strong style={{ color: "oklch(0.85 0.01 240)" }}>Attach:</strong> CV, Transcripts, Research Statement
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
