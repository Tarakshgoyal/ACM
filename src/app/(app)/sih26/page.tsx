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

const details = [
  { label: "Registration deadline", value: event.deadline, icon: CalendarDays },
  { label: "Internal hackathon", value: `${event.date} · ${event.time}`, icon: Clock3 },
  { label: "Venue", value: event.venue, icon: MapPin },
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

const process = [
  ["01", "Form your team", "Bring together six UPES students with complementary technical, design, research, and presentation skills."],
  ["02", "Choose a challenge", "Study the available problem statements and select a challenge your team understands deeply."],
  ["03", "Register your idea", "The team leader submits one accurate registration before the internal deadline."],
  ["04", "Build and present", "Develop a convincing solution, prototype, and pitch for the UPES internal evaluation."],
  ["05", "Represent UPES", "Shortlisted teams are guided through the official SIH submission process."],
];

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
  ["Problem statements", "Browse the SIH 2026 problem-statement reference used by the sample site.", "https://cgeccse.in/sih-statements", ChevronRight],
  ["Presentation format", "Download the SIH 2026 presentation template referenced by the sample site.", "https://cgeccse.in/SIH2026.pptx", Presentation],
  ["College SPOC guidelines", "Review the official institution-level participation guidelines.", "https://www.sih.gov.in/letters/Guidelines-College-SPOC.pdf", Download],
] as const;

const primaryButton =
  "inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-violet-500 to-cyan-400 px-6 py-3.5 text-sm font-bold text-white shadow-[0_0_35px_rgba(139,92,246,0.32)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(34,211,238,0.38)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300";

export default function Sih2026Page() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#03030a] text-white selection:bg-cyan-300 selection:text-slate-950">
      <video className="pointer-events-none fixed inset-0 z-0 h-full w-full object-cover opacity-30" src="/star_twinkling.mp4" autoPlay loop muted playsInline aria-hidden="true" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_18%_15%,rgba(126,34,206,0.28),transparent_34%),radial-gradient(circle_at_82%_28%,rgba(8,145,178,0.2),transparent_30%),linear-gradient(to_bottom,rgba(3,3,10,0.28),#03030a_88%)]" aria-hidden="true" />

      <div className="relative z-10">
        <section id="top" className="mx-auto flex min-h-screen max-w-7xl scroll-mt-24 flex-col justify-center px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200 backdrop-blur-md">
              <Sparkles className="h-4 w-4" aria-hidden="true" /> UPES Internal Selection Round
            </div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">UPES OPEN community presents</p>
            <h1 className="text-balance text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl">
              Smart India
              <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">Hackathon 2026</span>
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-balance text-base leading-8 text-slate-300 sm:text-lg">
              Turn a real challenge into a solution that matters. Build with your team, compete in the UPES internal round, and earn the opportunity to represent the university on the national stage.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer" className={primaryButton}>
                Register now <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#about" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
                Explore SIH <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <div className="mt-14 grid gap-4 text-left md:grid-cols-3">
              {details.map((detail) => {
                const Icon = detail.icon;
                return (
                  <article key={detail.label} className="group rounded-2xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.08]">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-purple-300/20 bg-purple-400/10 text-purple-200 group-hover:text-cyan-200"><Icon className="h-5 w-5" aria-hidden="true" /></div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{detail.label}</p>
                    <p className="mt-2 text-sm font-semibold leading-6">{detail.value}</p>
                  </article>
                );
              })}
            </div>
            <p className="mt-4 text-xs text-amber-200/70">Event information and contacts on this preview are temporary placeholders.</p>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 border-y border-white/10 bg-black/25 py-24 backdrop-blur-sm">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:px-8">
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">About the mission</p>
              <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl">Ideas engineered for real-world impact.</h2>
            </div>
            <div className="space-y-6 text-base leading-8 text-slate-300 sm:text-lg">
              <p>Smart India Hackathon is a nationwide innovation initiative that invites students to solve challenges faced by government, industry, and society. It connects academic learning with practical problem-solving, rapid prototyping, teamwork, and measurable impact.</p>
              <p>The UPES internal hackathon is the university&apos;s screening round. Teams present their ideas and prototypes to an evaluation panel, and the strongest eligible entries may be nominated for the official SIH process.</p>
              <div className="grid gap-4 pt-4 sm:grid-cols-3">
                {[["06", "Students per team"], ["01+", "Female member"], ["01", "Shared mission"]].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-5"><p className="text-3xl font-extrabold text-cyan-300">{value}</p><p className="mt-2 text-sm text-slate-400">{label}</p></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="themes" className="scroll-mt-24 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div><p className="text-sm font-bold uppercase tracking-[0.22em] text-purple-300">Innovation domains</p><h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Find your frontier.</h2></div>
              <p className="max-w-md text-sm leading-7 text-slate-400">Swipe or scroll through key SIH domains. Choose a problem where your team&apos;s knowledge can create meaningful change.</p>
            </div>
            <div className="-mx-4 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-6 sm:mx-0 sm:px-0">
              {themes.map(([title, description, Icon], index) => (
                <article key={title} className="group min-h-72 w-[82vw] max-w-[340px] flex-none snap-start overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.09] to-white/[0.025] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/30">
                  <div className="flex items-start justify-between"><div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/30 to-cyan-400/15 text-cyan-200"><Icon className="h-7 w-7" aria-hidden="true" /></div><span className="font-mono text-xs text-slate-500">{String(index + 1).padStart(2, "0")}</span></div>
                  <h3 className="mt-12 text-xl font-bold leading-7">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="timeline" className="scroll-mt-24 border-y border-white/10 bg-purple-950/10 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Process timeline</p><h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">From team formation to nomination.</h2></div>
            <ol className="relative mt-14 border-l border-purple-300/25 md:grid md:grid-cols-5 md:border-l-0 md:border-t">
              {process.map(([step, title, description]) => (
                <li key={step} className="relative pb-10 pl-8 last:pb-0 md:px-4 md:pb-0 md:pt-9">
                  <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-4 border-[#090617] bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.75)] md:-top-[9px] md:left-4" />
                  <p className="font-mono text-sm font-bold text-cyan-300">{step}</p><h3 className="mt-3 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="guidelines" className="scroll-mt-24 py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div><p className="text-sm font-bold uppercase tracking-[0.22em] text-purple-300">Eligibility & instructions</p><h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Build the right crew before liftoff.</h2><p className="mt-6 max-w-md text-base leading-7 text-slate-400">Read every requirement before the team leader submits. Final participation remains subject to UPES evaluation and official SIH rules.</p></div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {rules.map((rule) => <li key={rule} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"><CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-cyan-300" aria-hidden="true" /><span className="text-sm leading-6 text-slate-300">{rule}</span></li>)}
            </ul>
          </div>
        </section>

        <section id="resources" className="scroll-mt-24 border-y border-white/10 bg-black/25 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Mission resources</p><h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Everything your team needs.</h2></div>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {resources.map(([title, description, href, Icon]) => (
                <a key={title} href={href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.075] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-purple-400/10 text-purple-200 group-hover:text-cyan-200"><Icon className="h-5 w-5" aria-hidden="true" /></div>
                  <div className="min-w-0 flex-1"><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-400">{description}</p></div><ArrowRight className="h-5 w-5 flex-none text-slate-500 transition group-hover:translate-x-1 group-hover:text-cyan-300" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
            <div><p className="text-sm font-bold uppercase tracking-[0.22em] text-purple-300">Need guidance?</p><h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Talk to the coordinators.</h2><p className="mt-5 max-w-md text-sm leading-7 text-slate-400">These contacts are temporary preview details and must be replaced with confirmed UPES coordinators before launch.</p></div>
            <div className="grid gap-4 sm:grid-cols-2">
              {event.coordinators.map((coordinator) => (
                <article key={coordinator.email} className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.025] p-6 backdrop-blur-xl">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200"><Users className="h-6 w-6" aria-hidden="true" /></div>
                  <h3 className="text-xl font-bold">{coordinator.name}</h3><p className="mt-1 text-sm text-purple-300">{coordinator.role}</p>
                  <div className="mt-6 space-y-3 text-sm text-slate-300"><a href={`mailto:${coordinator.email}`} className="flex items-center gap-3 break-all transition hover:text-cyan-300"><Mail className="h-4 w-4 flex-none" aria-hidden="true" />{coordinator.email}</a><a href={`tel:${coordinator.phoneHref}`} className="flex items-center gap-3 transition hover:text-cyan-300"><Phone className="h-4 w-4" aria-hidden="true" />{coordinator.phone}</a></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-purple-900/70 via-violet-950/80 to-cyan-950/70 px-6 py-16 text-center shadow-[0_0_80px_rgba(88,28,135,0.24)] sm:px-12">
            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-purple-500/25 blur-3xl" /><div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
            <Rocket className="relative mx-auto h-10 w-10 text-cyan-200" aria-hidden="true" /><h2 className="relative mt-5 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">Your idea could be the next breakthrough.</h2><p className="relative mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">Assemble your team, choose a challenge worth solving, and begin the journey from a UPES classroom to the national stage.</p>
            <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer" className={`${primaryButton} relative mt-9`}>Start your registration <Trophy className="h-4 w-4" aria-hidden="true" /></a>
          </div>
        </section>

        <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-slate-500"><p>UPES OPEN community · Smart India Hackathon 2026</p><a href="#top" className="mt-2 inline-block text-slate-400 transition hover:text-cyan-300">Back to mission control ↑</a></footer>
      </div>
      <SihChatbot />
    </main>
  );
}
