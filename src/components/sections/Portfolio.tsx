"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Reveal, { StaggerContainer, staggerItem } from "@/components/ui/Reveal";

const projects = [
  {
    id: 1,
    title: "Proyecto Próximamente",
    category: "Desarrollo Web",
    description: "Un proyecto de alto impacto en desarrollo. Diseño premium, carga ultrarrápida y conversiones optimizadas.",
    url: null as string | null,
    tags: ["Next.js", "Tailwind", "SEO"],
  },
  {
    id: 2,
    title: "AR Gas",
    category: "Landing Corporativa",
    description: "Presencia digital para empresa de instalación y certificación de redes de gas. Diseño orientado a generar confianza y captar clientes.",
    url: "https://argasesoriasenredesdegas.netlify.app/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    title: "Universal File Toolkit",
    category: "SaaS",
    description: "Herramienta web de utilidades para manejo y conversión de archivos. Interfaz intuitiva y procesamiento del lado del cliente.",
    url: "https://project-d2n06.vercel.app/",
    tags: ["React", "TypeScript", "Vercel"],
  },
];

export default function Portfolio() {
  return (
    <section id="portafolio" className="py-24 md:py-32" style={{ backgroundColor: "var(--bg)" }}>
      <div className="max-w-screen-xl mx-auto px-6">
        <Reveal className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M2 2 L9 9 M16 2 L9 9 M9 9 L2 16 M9 9 L16 16"
                stroke="#FF2E63" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#FF2E63" }}>Portafolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4" style={{ color: "var(--text)" }}>
            Nuestro trabajo
          </h2>
          <p className="text-base font-medium max-w-md" style={{ color: "var(--text2)" }}>
            Resultados reales para negocios reales.
          </p>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map(p => (
            <motion.article key={p.id} variants={staggerItem}
              className="group rounded-2xl border overflow-hidden"
              style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
              whileHover={{ y: -6, borderColor: "rgba(255,46,99,0.3)" }}
              transition={{ duration: 0.28 }}>

              {/* Thumbnail */}
              <div className="relative h-44 overflow-hidden flex items-center justify-center"
                style={{ backgroundColor: "var(--bg2)" }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" style={{ opacity: 0.15 }}>
                    <path d="M8 8L30 30M52 8L30 30M30 30L8 52M30 30L52 52"
                      stroke="#FF2E63" strokeWidth="6" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="relative z-10 text-3xl">{p.url ? "🌐" : "🚀"}</span>

                {p.url && (
                  <motion.div className="absolute inset-0 flex items-center justify-center"
                    style={{ backgroundColor: "rgba(255,46,99,0.9)" }}
                    initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.22 }}>
                    <a href={p.url} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-sm font-bold"
                      style={{ color: "#0E0E10" }}>
                      <ExternalLink size={14} /> Ver proyecto
                    </a>
                  </motion.div>
                )}

                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold"
                  style={{ backgroundColor: "rgba(14,14,16,0.8)", color: "var(--text2)" }}>
                  {p.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-extrabold mb-2" style={{ color: "var(--text)" }}>{p.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text2)" }}>{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full font-bold border"
                      style={{ borderColor: "var(--border)", color: "var(--text2)", backgroundColor: "var(--bg2)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-0.5 transition-all duration-300 group-hover:h-0.5"
                style={{ backgroundColor: "#FF2E63", transform: "scaleX(0)", transition: "transform 0.3s" }} />
            </motion.article>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
