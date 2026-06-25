import { useState, useEffect } from "react";
import {
  Github, Linkedin, Mail, ExternalLink, ChevronDown,
  Code2, Globe, Database, Wrench, Cpu, TestTube, Star, GitFork,
  Facebook, Instagram,
} from "lucide-react";
import devLogo from "../imports/image-5.png";
import alexisPhoto from "../imports/Alexis.jpeg";


const NAV_LINKS = ["Sobre Mí", "Habilidades", "Proyectos", "Experiencia", "Contacto"];

const SKILLS = [
  {
    category: "Lenguajes",
    icon: <Code2 size={18} />,
    items: [
      { name: "JavaScript", level: "Básico" },
      { name: "HTML5", level: "Avanzado" },
      { name: "CSS3", level: "Avanzado" },
    ],
  },
  {
    category: "Frameworks",
    icon: <Globe size={18} />,
    items: [
      { name: "React", level: "Básico" },
      { name: "Next.js", level: "Básico" },
    ],
  },
  {
    category: "Herramientas",
    icon: <Wrench size={18} />,
    items: [
      { name: "Git", level: "Básico" },
      { name: "Vite", level: "Básico" },
      { name: "Figma", level: "Intermedio" },
      { name: "Vercel", level: "Básico" },
    ],
  },
];

const EXPERIENCE = [
  {
    role: "Lead Developer",
    company: "Proyecto educativo",
    period: "MAYO 2026 - JUNIO 2026",
    description:
      "Lider del proyecto de una app mobil llamada MathStack, una app para android que permite a los estudiantes universitarios, reforzar sus conocimientos matematicos, bajo la metodologia gamificacion."
  },
  {
    role: "Android Developer",
    company: "Proyectos educativo",
    period: "MARZO 2026",
    description:
      "Desarrollo de una app para android llamda Fianza santa fe, con la finalidad de poder gestionar fianzas personales de forma segura."
  },
  {
    role: "Android Developer y Desarrollador Api Rest",
    company: "Proyecto educativo",
    period: "ABRIL 2026",
    description:
      "Desarrollo de una app para android llamda Gestor de torneos, con la finalidad de poder gestionar torneos deportivos.",
  },
  {
    role: "Frontend Developer",
    company: "Proyecto educativo",
    period: "SEPTIEMBRE 2025 - DICIEMBRE 2025",
    description:
      "Proyecto académico donde aplicamos los conocimientos adquiridos en el curso de desarrollo frontend. Haciendo una app web, llamda Harmonet un sistema de contratacion de musicos para eventos.",
  },
];


function levelStyle(level: string) {
  if (level === "Básico") return "bg-red-700/30 text-red-400 border border-red-700/40";
  if (level === "Intermedio") return "bg-red-900/20 text-red-300/70 border border-red-900/40";
  return "bg-white/5 text-white/30 border border-white/10";
}

function SectionHeader({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="font-mono text-xs text-red-600/50 tracking-widest">{index}</span>
      <div className="h-px w-10 bg-white/[0.06]" />
      <h2 className="font-mono text-2xl font-bold text-white tracking-tight uppercase">{title}</h2>
    </div>
  );
}


function Nav({ active }: { active: string }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (label: string) => {
    const id = label.toLowerCase().replace(/\s/g, "-").normalize("NFD").replace(/[̀-ͯ]/g, "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#090909]/95 backdrop-blur border-b border-white/5" : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <img src={devLogo} alt="<DEV/>" className="h-7 w-auto" />
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className={`font-mono text-xs tracking-widest uppercase transition-colors duration-150 ${active === link ? "text-red-500" : "text-white/50 hover:text-white"
                  }`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <a href="#" className="text-white/40 hover:text-red-500 transition-colors"><Github size={18} /></a>
          <a href="#" className="text-white/40 hover:text-red-500 transition-colors"><Linkedin size={18} /></a>
          <a href="#" className="text-white/40 hover:text-red-500 transition-colors"><Facebook size={18} /></a>
          <a href="#" className="text-white/40 hover:text-red-500 transition-colors"><Instagram size={18} /></a>
        </div>
      </div>
    </nav>
  );
}


function SobreMi() {
  return (
    <section
      id="sobre-mi"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-20 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-red-700/8 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">

        <h2 className="font-mono font-black text-5xl md:text-7xl lg:text-8xl text-white uppercase tracking-tight mb-12 flex items-center gap-4">
          <span className="text-red-600 text-4xl md:text-6xl">·</span>
          SOBRE MÍ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <div className="flex flex-col gap-6">
            <p className="text-white/70 text-base leading-relaxed">
              Soy{" "}
              <strong className="text-red-600 font-semibold">Estudiante de Ingeniería en Tecnologia de la informacion e innovacion digital</strong>{" "}
              y Desarrollador Frontend con bases en diseño UX/UI e ilustración.
            </p>
            <p className="text-white/70 text-base leading-relaxed">
              He colaborado en proyectos académicos de gran valor, donde he podido aplicar mis conocimientos en desarrollo frontend.
            </p>
            <p className="text-white/70 text-base leading-relaxed">
              Mi enfoque combina la{" "}
              <strong className="text-red-600 font-semibold">resolución técnica de problemas</strong>{" "}
              con la creación de interfaces intuitivas y estéticas, buscando siempre el balance perfecto entre
              código limpio y una experiencia de usuario excepcional.
            </p>

            <p className="text-white/60 text-sm">
              Contacto: <a href="mailto:alexisgraciarojas@gmail.com" className="text-red-600 hover:underline">
                alexis.graciarojas@gmail.com
              </a>
              <br />
              instagram: <a href="https://instagram.com/alexis.g.rojas.94" className="text-red-600 hover:underline">
                @alexis.g.rojas.94
              </a>
              <br />
              Facebook: <a href="https://facebook.com/Alexis GR" className="text-red-600 hover:underline">
                /Alexis GR
              </a>
              <br />
              linkedin: <a href="https://www.linkedin.com/in/alexis-garcía-rojas-5ab7713aa?utm_source=share_via&utm_content=profile&utm_medium" className="text-red-600 hover:underline">
                /in/alexis-garcia-rojas
              </a>
              <br />
              Numero de contacto: <a href="tel:+52234567890" className="text-red-600 hover:underline">
                +52 (234) 567-890
              </a>
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-4">
              <button className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/20 hover:border-red-600/60 text-white/80 hover:text-white text-sm font-mono tracking-wide transition-all duration-200">
                <span className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
                Abierto a nuevas oportunidades
              </button>
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white text-sm font-mono tracking-wide transition-all duration-200 font-semibold">
                ¿Quieres ver mi CV?
              </button>
            </div>
          </div>

          <div className="relative flex items-center justify-center h-[420px] md:h-[480px]">
            <div
              className="absolute w-56 h-72 md:w-64 md:h-80 rounded-2xl border-2 border-red-600/70"
              style={{ transform: "rotate(-8deg) translate(-12px, 18px)", background: "#1a0a00" }}
            />
            <div
              className="absolute w-56 h-72 md:w-64 md:h-80 rounded-2xl border-2 border-red-600/50"
              style={{ transform: "rotate(-3deg) translate(-4px, 8px)", background: "#150800" }}
            />
            <div
              className="relative w-56 h-72 md:w-64 md:h-80 rounded-2xl border-2 border-red-600 overflow-hidden"
              style={{ transform: "rotate(2deg)" }}
            >
              <img
                src={alexisPhoto}
                alt="Alexis García — Frontend Developer"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
        <span className="font-mono text-[10px] tracking-widest">SCROLL</span>
        <ChevronDown size={14} className="animate-bounce" />
      </div>
    </section>
  );
}


function SkillCard({ category, icon, items }: (typeof SKILLS)[0]) {
  return (
    <div className="bg-[#111111] border border-white/[0.06] rounded-xl p-5 flex flex-col gap-4">
      <div className="flex items-center gap-2.5">
        <span className="text-red-500">{icon}</span>
        <h3 className="font-mono text-sm font-semibold text-white tracking-wider uppercase">{category}</h3>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex flex-col gap-1 bg-[#0d0d0d] border border-white/[0.05] rounded-lg px-3 py-2.5 hover:border-red-900/40 transition-colors duration-150"
          >
            <span className="font-mono text-xs text-white/80 font-medium truncate">{item.name}</span>
            <span className={`font-mono text-[10px] px-1.5 py-0.5 rounded self-start tracking-wider ${levelStyle(item.level)}`}>
              {item.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="habilidades" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-mono font-black text-4xl md:text-5xl text-white uppercase tracking-tight mb-14 flex items-center gap-4">
          <span className="text-red-600 text-3xl md:text-4xl">·</span>
          Habilidades
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.map((s) => <SkillCard key={s.category} {...s} />)}
        </div>
      </div>
    </section>
  );
}


function Experience() {
  return (
    <section id="experiencia" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono font-black text-4xl md:text-5xl text-white uppercase tracking-tight mb-14 flex items-center gap-4">
          <span className="text-red-600 text-3xl md:text-4xl">·</span>
          Experiencia
        </h2>
        <div className="flex flex-col">
          {EXPERIENCE.map((exp, i) => (
            <div key={exp.company} className="relative flex gap-8 pb-12 last:pb-0">
              {i < EXPERIENCE.length - 1 && (
                <div className="absolute left-[7px] top-4 bottom-0 w-px bg-white/[0.06]" />
              )}
              <div className="shrink-0 mt-1.5 w-3.5 h-3.5 rounded-full border-2 border-red-600 bg-[#090909]" />
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-mono text-sm font-semibold text-white">{exp.role}</h3>
                  <span className="font-mono text-xs text-red-500/80">{exp.company}</span>
                </div>
                <p className="font-mono text-[10px] text-white/30 tracking-widest uppercase">{exp.period}</p>
                <p className="text-white/45 text-sm leading-relaxed mt-1">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contacto" className="py-28 px-6 bg-[#0d0d0d]">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-mono font-black text-4xl md:text-5xl text-white uppercase tracking-tight mb-6 flex items-center gap-4">
          <span className="text-red-600 text-3xl md:text-4xl">·</span>
          Contacto
        </h2>
        <p className="text-white/40 text-sm leading-relaxed mb-10">
          ¿Tienes un proyecto en mente o quieres hablar sobre oportunidades? Escríbeme.
        </p>
        {sent ? (
          <div className="border border-red-700/40 bg-red-900/10 rounded-xl p-8 text-center">
            <p className="font-mono text-sm text-red-400 tracking-wider">¡Mensaje enviado correctamente!</p>
          </div>
        ) : (
          <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Nombre" required className="bg-[#111111] border border-white/[0.08] focus:border-red-700/60 outline-none rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 font-mono transition-colors" />
              <input type="email" placeholder="Email" required className="bg-[#111111] border border-white/[0.08] focus:border-red-700/60 outline-none rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 font-mono transition-colors" />
            </div>
            <input type="text" placeholder="Asunto" required className="bg-[#111111] border border-white/[0.08] focus:border-red-700/60 outline-none rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 font-mono transition-colors" />
            <textarea rows={5} placeholder="Mensaje" required className="bg-[#111111] border border-white/[0.08] focus:border-red-700/60 outline-none rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 font-mono transition-colors resize-none" />
            <button type="submit" className="font-mono text-xs tracking-widest uppercase px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white transition-colors duration-150 self-start font-semibold">
              Enviar Mensaje
            </button>
          </form>
        )}
        <div className="flex items-center gap-6 mt-12 pt-10 border-t border-white/[0.06]">
          <a href="mailto:alexisgraciarojas@gmail.com" className="flex items-center gap-2 text-white/30 hover:text-red-600 transition-colors text-sm font-mono">
            <Mail size={14} />alexisgraciarojas@gmail.com
          </a>
          <a href="#" className="text-white/30 hover:text-red-600 transition-colors"><Github size={16} /></a>
          <a href="#" className="text-white/30 hover:text-red-600 transition-colors"><Linkedin size={16} /></a>
          <a href="#" className="text-white/30 hover:text-red-600 transition-colors"><Facebook size={16} /></a>
          <a href="#" className="text-white/30 hover:text-red-600 transition-colors"><Instagram size={16} /></a>
        </div>
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <img src={devLogo} alt="<DEV/>" className="h-5 w-auto opacity-30" />
          <span className="font-mono text-xs text-white/20 tracking-widest">— Alexis García</span>
        </div>
        <span className="font-mono text-xs text-white/15">{new Date().getFullYear()} · Built with React</span>
      </div>
    </footer>
  );
}


export default function App() {
  const [activeSection, setActiveSection] = useState("Sobre Mí");

  useEffect(() => {
    const ids = ["sobre-mi", "habilidades", "proyectos", "experiencia", "contacto"];
    const observers: IntersectionObserver[] = [];
    ids.forEach((id, i) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(NAV_LINKS[i]); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="bg-[#090909] text-foreground min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Nav active={activeSection} />
      <SobreMi />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
