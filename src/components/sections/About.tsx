"use client";

import { motion } from "framer-motion";
import Reveal, { StaggerContainer, staggerItem } from "@/components/ui/Reveal";

const founders = [
  { name: "Paolo Texier", role: "Co-Founder & CEO", initials: "PT",
    bio: "Estratega digital con visión de negocio. Especialista en crecimiento de marcas y presencia digital con IA.",
    skills: ["Estrategia digital", "Growth", "IA aplicada"] },
  { name: "Carlos Gurrola", role: "Co-Founder & CTO", initials: "CG",
    bio: "Ingeniero de software especializado en arquitecturas modernas, automatización y productos digitales de alto rendimiento.",
    skills: ["Full Stack", "Automatización", "Arquitectura"] },
];

const stats = [
  { v: "2025", l: "Fundada" },
  { v: "5+", l: "Servicios activos" },
  { v: "IA", l: "Tecnología central" },
  { v: "MX", l: "Enfoque local" },
];

export default function About() {
  return (
    <section id="nosotros" className="py-24 md:py-32" style={{ backgroundColor: "var(--bg2)" }}>
      <div className="max-w-screen-xl mx-auto px-6">
        <Reveal className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M2 2 L9 9 M16 2 L9 9 M9 9 L2 16 M9 9 L16 16"
                stroke="#FF2E63" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#FF2E63" }}>Nosotros</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4" style={{ color: "var(--text)" }}>
            Hacemos crecer<br />tu marca con IA
          </h2>
          <p className="text-base font-medium max-w-xl" style={{ color: "var(--text2)" }}>
            ROXIER Co. es una agencia digital fundada en 2025 en Torreón, México.
            Combinamos diseño, tecnología e inteligencia artificial para impulsar el crecimiento de tu negocio en línea.
          </p>
        </Reveal>

        {/* Stats */}
        <Reveal className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map(s => (
              <div key={s.l} className="p-6 rounded-2xl border text-center"
                style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}>
                <div className="text-3xl font-extrabold mb-1" style={{ color: "#FF2E63" }}>{s.v}</div>
                <div className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--text2)" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Founders */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {founders.map(f => (
            <motion.div key={f.name} variants={staggerItem}
              className="p-8 rounded-2xl border"
              style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
              whileHover={{ y: -5, borderColor: "rgba(255,46,99,0.3)" }} transition={{ duration: 0.25 }}>

              {/* Avatar placeholder */}
              <div className="relative w-20 h-20 mb-5">
                <div className="w-full h-full rounded-2xl flex items-center justify-center text-2xl font-extrabold text-white"
                  style={{ backgroundColor: "#FF2E63" }}>
                  {f.initials}
                </div>
                <span className="absolute -bottom-2 left-0 px-2 py-0.5 rounded text-white whitespace-nowrap"
                  style={{ backgroundColor: "var(--bg2)", color: "var(--text2)", fontSize: "9px", fontWeight: 700, border: "1px solid var(--border)" }}>
                  Foto próximamente
                </span>
              </div>

              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#FF2E63" }}>{f.role}</p>
              <h3 className="text-xl font-extrabold mb-3" style={{ color: "var(--text)" }}>{f.name}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text2)" }}>{f.bio}</p>

              <div className="flex flex-wrap gap-2">
                {f.skills.map(s => (
                  <span key={s} className="text-xs px-2.5 py-1 rounded-full font-bold"
                    style={{ backgroundColor: "rgba(255,46,99,0.1)", color: "#FF2E63" }}>
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
