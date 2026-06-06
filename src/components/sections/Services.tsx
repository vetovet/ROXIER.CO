"use client";

import { motion } from "framer-motion";
import { Monitor, Search, Megaphone, Zap, BarChart3, ArrowRight } from "lucide-react";
import Reveal, { StaggerContainer, staggerItem } from "@/components/ui/Reveal";

const services = [
  {
    icon: Monitor,
    title: "Diseño Web",
    sub: "Sitios que cargan rápido y convierten.",
    description: "Creamos sitios web modernos, rápidos y optimizados. Diseño a medida que transmite tu marca y convierte visitantes en clientes reales.",
    features: ["Diseño personalizado", "Mobile first", "Ultra rápido", "SEO técnico incluido"],
  },
  {
    icon: Search,
    title: "SEO",
    sub: "Que te encuentren en Google.",
    description: "Posicionamos tu negocio en los primeros resultados de Google. SEO local, técnico y de contenido para que tus clientes te encuentren primero.",
    features: ["SEO local", "Google My Business", "Auditoría técnica", "Contenido optimizado"],
  },
  {
    icon: Megaphone,
    title: "Meta Ads",
    sub: "Campañas en Facebook e Instagram.",
    description: "Gestionamos campañas de publicidad pagada en Meta con estrategia, creatividad y optimización constante para maximizar tu inversión.",
    features: ["Facebook Ads", "Instagram Ads", "Retargeting", "Reportes semanales"],
  },
  {
    icon: Zap,
    title: "Automatización",
    sub: "Procesos con IA que ahorran horas.",
    description: "Automatizamos tareas repetitivas usando inteligencia artificial. Flujos de trabajo, chatbots y sistemas que trabajan por ti mientras duermes.",
    features: ["Chatbots IA", "Flujos automáticos", "CRM integrado", "Ahorra hasta 20h/semana"],
  },
  {
    icon: BarChart3,
    title: "Dashboards",
    sub: "Tus números claros y en tiempo real.",
    description: "Centralizamos todos tus datos de negocio en un dashboard visual y fácil de entender. Toma decisiones basadas en datos, no en suposiciones.",
    features: ["Tiempo real", "Métricas clave", "Integración multi-fuente", "Acceso móvil"],
  },
];

export default function Services() {
  const go = () => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="servicios" className="py-24 md:py-32" style={{ backgroundColor: "var(--bg2)" }}>
      <div className="max-w-screen-xl mx-auto px-6">
        <Reveal className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M2 2 L9 9 M16 2 L9 9 M9 9 L2 16 M9 9 L16 16"
                stroke="#FF2E63" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#FF2E63" }}>
              Qué hacemos
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4" style={{ color: "var(--text)" }}>
            Lo que hacemos
          </h2>
          <p className="text-base font-medium max-w-lg" style={{ color: "var(--text2)" }}>
            Soluciones digitales completas para hacer crecer tu negocio en línea.
          </p>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.title} variants={staggerItem}
                className="group relative p-7 rounded-2xl border overflow-hidden transition-all duration-300"
                style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
                whileHover={{ y: -5, borderColor: "rgba(255,46,99,0.35)" }}
                transition={{ duration: 0.28 }}>

                {/* Icon */}
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: "rgba(255,46,99,0.1)", border: "1px solid rgba(255,46,99,0.2)" }}>
                  <Icon size={20} style={{ color: "#FF2E63" }} />
                </div>

                <p className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: "#FF2E63" }}>
                  {s.sub}
                </p>
                <h3 className="text-xl font-extrabold mb-3" style={{ color: "var(--text)" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text2)" }}>{s.description}</p>

                <ul className="space-y-1.5 mb-5">
                  {s.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-xs font-medium" style={{ color: "var(--text2)" }}>
                      <span style={{ color: "#FF2E63", fontWeight: 900 }}>×</span> {f}
                    </li>
                  ))}
                </ul>

                <motion.button onClick={go}
                  className="inline-flex items-center gap-1.5 text-sm font-bold"
                  style={{ color: "#FF2E63" }} whileHover={{ x: 4 }} transition={{ duration: 0.18 }}>
                  Cotizar <ArrowRight size={13} />
                </motion.button>

                {/* Hover glow corner */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(circle at top right, rgba(255,46,99,0.08), transparent)" }} />
              </motion.div>
            );
          })}

          {/* CTA card */}
          <motion.div variants={staggerItem}
            className="p-7 rounded-2xl border flex flex-col items-center justify-center text-center"
            style={{ backgroundColor: "rgba(255,46,99,0.06)", borderColor: "rgba(255,46,99,0.2)" }}
            whileHover={{ scale: 1.02 }} transition={{ duration: 0.25 }}>
            <div className="mb-4">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M5 5L20 20M35 5L20 20M20 20L5 35M20 20L35 35"
                  stroke="#FF2E63" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-xl font-extrabold mb-3" style={{ color: "var(--text)" }}>¿Necesitas todo?</h3>
            <p className="text-sm mb-5" style={{ color: "var(--text2)" }}>
              Creamos paquetes completos a medida para tu negocio.
            </p>
            <motion.button onClick={go}
              className="px-6 py-3 rounded-full text-sm font-bold text-white"
              style={{ backgroundColor: "#FF2E63" }}
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              Habla con nosotros
            </motion.button>
          </motion.div>
        </StaggerContainer>
      </div>
    </section>
  );
}
