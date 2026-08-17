import type { Metadata } from "next";
import SihChatbot from "@/components/SihChatbot";
import {
  ArrowRight,
  Bot,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  CloudSun,
  Download,
  ExternalLink,
  GraduationCap,
  HeartPulse,
  Leaf,
  Mail,
  MapPin,
  Orbit,
  Phone,
  Presentation,
  Rocket,
  Route,
  Satellite,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Smart India Hackathon 2026 | UPES OPEN community",
  description:
    "Register for the UPES internal selection round for Smart India Hackathon 2026 and take your idea to the national stage.",
  openGraph: {
    title: "Smart India Hackathon 2026 | UPES OPEN community",
    description:
      "Build bold solutions, compete in the UPES internal round, and represent UPES at Smart India Hackathon 2026.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart India Hackathon 2026 | UPES OPEN community",
    description: "Build bold solutions and represent UPES at SIH 2026.",
  },
};

// Temporary launch content. Replace these values before publishing the event.
const event = {
  registrationUrl: "https://docs.google.com/forms/",
  deadline: "28 August 2026, 11:59 PM IST",
  date: "5 September 2026",
  time: "9:30 AM–5:00 PM",
  venue: "Seminar Hall, UPES Bidholi Campus",
  coordinators: [
    {
      name: "Dr. Aditi Sharma",
      role: "Faculty Coordinator",
      email: "sih.upes@example.com",
      phone: "+91 98765 43210",
      phoneHref: "+919876543210",
    },
    {
      name: "Arjun Mehta",
      role: "Student Coordinator",
      email: "student.sih@example.com",
      phone: "+91 98765 43211",
      phoneHref: "+919876543211",
    },
  ],
};

const detailColors = ["border-t-[#F26522]", "border-t-[#1B3764]", "border-t-[#2E7D32]"] as const;
const detailLabelColors = ["text-[#F26522]", "text-[#1B3764]", "text-[#2E7D32]"] as const;

const details = [
  { label: "Registration deadline", value: event.deadline, desc: "Team leader submits the entry", icon: CalendarDays },
  { label: "Internal hackathon", value: `${event.date}, ${event.time}`, desc: "Single-day evaluation round", icon: Clock3 },
  { label: "Venue", value: event.venue, desc: "Dehradun, Uttarakhand", icon: MapPin },
];

const themes = [
  ["Smart Automation", "Use AI and connected systems to make everyday processes smarter.", Bot],
  ["MedTech & HealthTech", "Build accessible technology for better care and healthier communities.", HeartPulse],
  ["Agriculture & Rural Development", "Strengthen farming, food systems, and rural livelihoods.", Leaf],
  ["Blockchain & Cybersecurity", "Create secure, trustworthy, and resilient digital infrastructure.", ShieldCheck],
  ["Robotics & Drones", "Design autonomous systems for safety, rescue, logistics, and industry.", Satellite],
  ["Clean & Green Technology", "Reimagine waste, sanitation, climate action, and sustainable living.", CloudSun],
  ["Smart Education", "Make learning more inclusive, flexible, engaging, and effective.", GraduationCap],
  ["Disaster Management", "Improve preparedness, response, recovery, and risk communication.", Route],
  ["Space Technology", "Explore systems and applications that advance space research and access.", Orbit],
] as const;

const processSteps = [
  ["01", "Form your team", "Bring together six UPES students with complementary technical, design, research, and presentation skills."],
  ["02", "Choose a challenge", "Study the available problem statements and select a challenge your team understands deeply."],
  ["03", "Register your idea", "The team leader submits one accurate registration before the internal deadline."],
  ["04", "Build and present", "Develop a convincing solution, prototype, and pitch for the UPES internal evaluation."],
  ["05", "Represent UPES", "Shortlisted teams are guided through the official SIH submission process."],
];

const stepDotColors = ["bg-[#F26522]", "bg-[#1B3764]", "bg-[#2E7D32]", "bg-[#F26522]", "bg-[#2E7D32]"] as const;

const rules = [
  "Each team must have exactly six students: one team leader and five members.",
  "Every participant must be a currently enrolled UPES student.",
  "At least one female student must be part of the team.",
  "Cross-branch and cross-year teams are permitted and encouraged.",
  "Only the team leader should submit the registration form.",
  "A team may register only once; duplicate or inaccurate entries may be rejected.",
  "Internal registration does not guarantee nomination to the national round.",
  "Software teams need suitable development skills; multidisciplinary hardware teams are encouraged.",
];

const resources = [
  ["Official SIH portal", "National announcements and official Smart India Hackathon updates.", "https://www.sih.gov.in/", ExternalLink],
  ["Problem statements", "Browse the SIH 2026 problem-statement reference used by the sample site.", "https://www.sih.gov.in/sih2025PS", ChevronRight],
  ["Presentation format", "Download the SIH 2026 presentation template referenced by the sample site.", "https://www.sih.gov.in/sih2025PS/img/SIH2025-Presentation-template.pptx", Presentation],
  ["College SPOC guidelines", "Review the official institution-level participation guidelines.", "https://www.sih.gov.in/letters/Guidelines-College-SPOC.pdf", Download],
] as const;

const statColors = ["border-t-[#F26522] text-[#F26522]", "border-t-[#1B3764] text-[#1B3764]", "border-t-[#2E7D32] text-[#2E7D32]"] as const;

export default function Sih2026Page() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#FDF8F3] text-[#1B3764] selection:bg-[#F26522]/20 selection:text-[#1B3764]">

      <div className="relative">
        {/* ── HERO ── */}
        <section id="top" className="relative mx-auto flex min-h-screen max-w-7xl scroll-mt-24 flex-col justify-center px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          {/* Subtle grid background */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "linear-gradient(#1B3764 1px, transparent 1px), linear-gradient(90deg, #1B3764 1px, transparent 1px)", backgroundSize: "80px 80px" }} aria-hidden="true" />

          <div className="relative mx-auto max-w-5xl text-center">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#1B3764]/15 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#1B3764]/70 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-[#F26522]" aria-hidden="true" /> UPES Internal Selection Round
            </div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#1B3764]/50">UPES OPEN community presents</p>
            <h1 className="text-balance text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl">
              Smart India
              <span className="block">
                <span className="text-[#F26522]">Hackathon </span>
                <span className="text-[#4A6741]">2026</span>
              </span>
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-balance text-base leading-8 text-[#1B3764]/60 sm:text-lg">
              Turn a real challenge into a solution that matters. Build with your team, compete in the UPES internal round, and earn the opportunity to represent the university on the national stage.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1B3764] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#142b52] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26522]">
                Register now <ArrowRight className="h-4 w-4 text-[#F26522]" aria-hidden="true" />
              </a>
              <a href="#about" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1B3764]/20 bg-white px-7 py-3.5 text-sm font-semibold text-[#1B3764] shadow-sm transition hover:-translate-y-1 hover:border-[#1B3764]/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3764]">
                Explore SIH <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            {/* Detail cards */}
            <div className="mt-14 grid gap-5 text-left md:grid-cols-3">
              {details.map((detail, i) => {
                const Icon = detail.icon;
                return (
                  <article key={detail.label} className={`group rounded-2xl border border-[#1B3764]/8 border-t-[3px] ${detailColors[i]} bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg`}>
                    <div className="mb-1 flex items-center gap-2">
                      <Icon className={`h-4 w-4 ${detailLabelColors[i]}`} aria-hidden="true" />
                      <p className={`text-xs font-bold uppercase tracking-[0.16em] ${detailLabelColors[i]}`}>{detail.label}</p>
                    </div>
                    <p className="mt-2 text-base font-bold leading-6 text-[#1B3764]">{detail.value}</p>
                    <p className="mt-1 text-sm text-[#1B3764]/50">{detail.desc}</p>
                  </article>
                );
              })}
            </div>
            <p className="mt-4 text-xs text-[#F26522]/60">Event information and contacts on this preview are temporary placeholders.</p>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="scroll-mt-24 border-y border-[#1B3764]/8 bg-[#F5F0EA] py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:px-8">
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-2">
                <span className="block h-[3px] w-8 rounded-full bg-[#F26522]" />
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#F26522]">About the mission</p>
              </div>
              <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-[#1B3764] sm:text-5xl">Ideas engineered for real-world impact.</h2>
            </div>
            <div className="space-y-6 text-base leading-8 text-[#1B3764]/65 sm:text-lg">
              <p>Smart India Hackathon is a nationwide innovation initiative that invites students to solve challenges faced by government, industry, and society. It connects academic learning with practical problem-solving, rapid prototyping, teamwork, and measurable impact.</p>
              <p>The UPES internal hackathon is the university&apos;s screening round. Teams present their ideas and prototypes to an evaluation panel, and the strongest eligible entries may be nominated for the official SIH process.</p>
              <div className="grid gap-4 pt-4 sm:grid-cols-3">
                {[["06", "Students per team"], ["01+", "Female member required"], ["01", "Shared mission"]].map(([value, label], i) => (
                  <div key={label} className={`rounded-2xl border border-[#1B3764]/8 border-t-[3px] ${statColors[i].split(" ")[0]} bg-white p-5 shadow-sm`}>
                    <p className={`text-3xl font-extrabold ${statColors[i].split(" ").slice(1).join(" ")}`}>{value}</p>
                    <p className="mt-2 text-sm text-[#1B3764]/50">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── THEMES ── */}
        <section id="themes" className="scroll-mt-24 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="block h-[3px] w-8 rounded-full bg-[#1B3764]" />
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#1B3764]">Innovation themes</p>
                </div>
                <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#1B3764] sm:text-5xl">Find your frontier.</h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-[#1B3764]/50">Swipe or scroll through key SIH themes. Choose a problem where your team&apos;s knowledge can create meaningful change.</p>
            </div>
            <div className="-mx-4 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-6 sm:mx-0 sm:px-0">
              {themes.map(([title, description, Icon], index) => (
                <article key={title} className="group min-h-72 w-[82vw] max-w-[340px] flex-none snap-start overflow-hidden rounded-3xl border border-[#1B3764]/8 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FDF8F3] text-[#1B3764]"><Icon className="h-7 w-7" aria-hidden="true" /></div>
                    <span className="font-mono text-xs text-[#1B3764]/30">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-12 text-xl font-bold leading-7 text-[#1B3764]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#1B3764]/50">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── TIMELINE ── */}
        <section id="timeline" className="scroll-mt-24 border-y border-[#1B3764]/8 bg-[#F5F0EA] py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold tracking-tight text-[#1B3764] sm:text-5xl">From team formation<br />to nomination.</h2>
            </div>
            <ol className="relative mt-14 md:grid md:grid-cols-5 md:gap-0">
              {/* Dashed connecting line (desktop only) */}
              <div className="pointer-events-none absolute left-[10%] right-[10%] top-[11px] hidden h-[2px] md:block" style={{ backgroundImage: "repeating-linear-gradient(90deg, #1B3764 0 6px, transparent 6px 14px)", opacity: 0.2 }} aria-hidden="true" />
              {processSteps.map(([step, title, description], i) => (
                <li key={step} className="relative pb-10 pl-10 last:pb-0 md:px-4 md:pb-0 md:pl-0 md:pt-12 md:text-left">
                  {/* Mobile vertical line */}
                  {i < processSteps.length - 1 && (
                    <div className="absolute left-[7px] top-[18px] h-full w-[2px] md:hidden" style={{ backgroundImage: "repeating-linear-gradient(180deg, #1B3764 0 4px, transparent 4px 10px)", opacity: 0.2 }} aria-hidden="true" />
                  )}
                  {/* Dot */}
                  <span className={`absolute left-0 top-0 h-4 w-4 rounded-full ${stepDotColors[i]} shadow-sm md:relative md:left-auto md:top-auto md:mb-5`} />
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#1B3764]/40">Step {step}</p>
                  <h3 className="mt-2 text-lg font-bold text-[#1B3764]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#1B3764]/50">{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── GUIDELINES ── */}
        <section id="guidelines" className="scroll-mt-24 py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="block h-[3px] w-8 rounded-full bg-[#2E7D32]" />
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#2E7D32]">Eligibility & instructions</p>
              </div>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#1B3764] sm:text-5xl">Build the right crew.</h2>
              <p className="mt-6 max-w-md text-base leading-7 text-[#1B3764]/50">Read every requirement before the team leader submits. Final participation remains subject to UPES evaluation and official SIH rules.</p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {rules.map((rule) => (
                <li key={rule} className="flex gap-4 rounded-2xl border border-[#1B3764]/8 bg-white p-5 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[#2E7D32]" aria-hidden="true" />
                  <span className="text-sm leading-6 text-[#1B3764]/70">{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── RESOURCES ── */}
        <section id="resources" className="scroll-mt-24 border-y border-[#1B3764]/8 bg-[#F5F0EA] py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="block h-[3px] w-8 rounded-full bg-[#F26522]" />
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#F26522]">Mission resources</p>
              </div>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#1B3764] sm:text-5xl">Everything your team needs.</h2>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {resources.map(([title, description, href, Icon]) => (
                <a key={title} href={href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 rounded-2xl border border-[#1B3764]/8 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26522]">
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-[#FDF8F3] text-[#1B3764] group-hover:text-[#F26522]"><Icon className="h-5 w-5" aria-hidden="true" /></div>
                  <div className="min-w-0 flex-1"><h3 className="font-bold text-[#1B3764]">{title}</h3><p className="mt-1 text-sm leading-6 text-[#1B3764]/50">{description}</p></div>
                  <ArrowRight className="h-5 w-5 flex-none text-[#1B3764]/30 transition group-hover:translate-x-1 group-hover:text-[#F26522]" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="scroll-mt-24 py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="block h-[3px] w-8 rounded-full bg-[#1B3764]" />
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#1B3764]">Need guidance?</p>
              </div>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#1B3764] sm:text-5xl">Talk to the coordinators.</h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-[#1B3764]/50">These contacts are temporary preview details and must be replaced with confirmed UPES coordinators before launch.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {event.coordinators.map((coordinator) => (
                <article key={coordinator.email} className="rounded-3xl border border-[#1B3764]/8 bg-white p-6 shadow-sm">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1B3764]/5 text-[#1B3764]"><Users className="h-6 w-6" aria-hidden="true" /></div>
                  <h3 className="text-xl font-bold text-[#1B3764]">{coordinator.name}</h3>
                  <p className="mt-1 text-sm text-[#F26522]">{coordinator.role}</p>
                  <div className="mt-6 space-y-3 text-sm text-[#1B3764]/60">
                    <a href={`mailto:${coordinator.email}`} className="flex items-center gap-3 break-all transition hover:text-[#F26522]"><Mail className="h-4 w-4 flex-none" aria-hidden="true" />{coordinator.email}</a>
                    <a href={`tel:${coordinator.phoneHref}`} className="flex items-center gap-3 transition hover:text-[#F26522]"><Phone className="h-4 w-4" aria-hidden="true" />{coordinator.phone}</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#F4C5A0]/40 via-[#FDF8F3] to-[#B8E6C8]/40 px-6 py-16 text-center sm:px-12">
            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#F4C5A0]/50 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-[#B8E6C8]/50 blur-3xl" />
            <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
              <Rocket className="h-6 w-6 text-[#F26522]" aria-hidden="true" />
            </div>
            <h2 className="relative mt-5 text-balance text-4xl font-extrabold tracking-tight text-[#1B3764] sm:text-5xl">Your idea could be the next breakthrough.</h2>
            <p className="relative mx-auto mt-5 max-w-2xl text-base leading-7 text-[#1B3764]/60">Assemble your team, choose a challenge worth solving, and begin the journey from a UPES classroom to the national stage.</p>
            <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer" className="relative mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-[#1B3764] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#142b52] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26522]">
              Start your registration <Trophy className="h-4 w-4 text-[#F26522]" aria-hidden="true" />
            </a>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="border-t border-[#1B3764]/8 px-4 py-8 text-center text-sm text-[#1B3764]/40">
          <p>UPES OPEN community · Smart India Hackathon 2026</p>
          <a href="#top" className="mt-2 inline-block text-[#1B3764]/40 transition hover:text-[#F26522]">Back to top ↑</a>
        </footer>
      </div>
      <SihChatbot />
    </main>
  );
}
