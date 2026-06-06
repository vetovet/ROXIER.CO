"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = ["Diseño web", "SEO", "Meta Ads", "Automatización", "Dashboards"];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="inicio" ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "var(--bg)" }}>

      {/* Giant X background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden>
        <svg width="700" height="700" viewBox="0 0 100 100" fill="none"
          style={{ opacity: 0.04 }}>
          <path d="M10 10 L90 90 M90 10 L10 90"
            stroke="#FF2E63" strokeWidth="12" strokeLinecap="round" />
        </svg>
      </div>

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,46,99,0.08) 0%, transparent 65%)" }} />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-8">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border"
            style={{ borderColor: "rgba(255,46,99,0.3)", color: "#FF2E63", backgroundColor: "rgba(255,46,99,0.08)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#FF2E63" }} />
            Agencia Digital · IA
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.12 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.0] mb-6 tracking-tight"
          style={{ color: "var(--text)" }}>
          Tu marca,<br />
          <span style={{ color: "#FF2E63" }}>lista para</span><br />
          vender en línea.
        </motion.h1>

        {/* Subheadline */}
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
          className="text-base md:text-lg font-medium max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--text2)" }}>
          Crecimiento digital impulsado por IA.<br />
          Hacemos crecer tu marca con tecnología y estrategia.
        </motion.p>

        {/* Services pills */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-10">
          {services.map((s, i) => (
            <motion.span key={s}
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.07 }}
              className="px-3 py-1.5 rounded-full text-xs font-bold border"
              style={{ borderColor: "var(--border2)", color: "var(--text2)", backgroundColor: "var(--surface)" }}>
              × {s}
            </motion.span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button onClick={() => go("#contacto")}
            className="flex items-center gap-2 px-7 py-4 rounded-full text-sm font-bold text-white"
            style={{ backgroundColor: "#FF2E63" }}
            whileHover={{ scale: 1.04, filter: "brightness(1.1)" }} whileTap={{ scale: 0.96 }}>
            Cotiza tu proyecto <ArrowRight size={16} />
          </motion.button>
          <motion.button onClick={() => go("#portafolio")}
            className="flex items-center gap-2 px-7 py-4 rounded-full text-sm font-bold border-2 transition-colors"
            style={{ borderColor: "var(--border2)", color: "var(--text)" }}
            whileHover={{ borderColor: "#FF2E63", color: "#FF2E63" }} whileTap={{ scale: 0.96 }}>
            Ver portafolio
          </motion.button>
        </motion.div>

      </motion.div>

      {/* Scroll indicator */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
        style={{ color: "var(--text2)" }}>
        <span className="text-xs font-bold uppercase tracking-widest">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 5L7 10L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Marquee strip */}
      <div className="absolute bottom-0 inset-x-0 overflow-hidden py-2 border-t" style={{ borderColor: "var(--border)" }}>
        <div className="flex whitespace-nowrap marquee gap-8">
          {[...Array(3)].map((_, i) =>
            services.map(s => (
              <span key={`${i}-${s}`} className="text-xs font-bold uppercase tracking-widest mx-6"
                style={{ color: i % 2 === 0 ? "#FF2E63" : "var(--text2)" }}>
                × {s}
              </span>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
