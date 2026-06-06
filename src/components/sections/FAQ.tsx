"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const faqs = [
  { q: "¿Cuánto tarda un proyecto?", a: "Un sitio web informativo tarda entre 10 y 20 días hábiles. Una tienda en línea de 3 a 6 semanas. Siempre damos un estimado claro desde el inicio sin sorpresas." },
  { q: "¿Cuánto cuesta un sitio web?", a: "Cada proyecto es diferente. Un sitio profesional informativo comienza desde $8,000 MXN. E-commerce desde $18,000 MXN. Escríbenos para una propuesta sin compromiso." },
  { q: "¿Incluyen hosting y dominio?", a: "Sí. Gestionamos dominio, hosting y certificado SSL. Usamos Vercel y Netlify para máxima velocidad y disponibilidad." },
  { q: "¿Apareceré en Google?", a: "Todos nuestros sitios incluyen SEO técnico básico. Para resultados acelerados ofrecemos planes de SEO local y posicionamiento en Google Maps." },
  { q: "¿Qué incluye Meta Ads?", a: "Estrategia de campaña, creatividades, segmentación, optimización continua y reportes semanales de resultados. Todo gestionado por nosotros." },
  { q: "¿Dan soporte después del lanzamiento?", a: "Sí. Ofrecemos planes de mantenimiento mensual con actualizaciones, soporte prioritario y mejoras continuas." },
  { q: "¿Cómo empezamos?", a: "Escríbenos por WhatsApp o llena el formulario de contacto. Respondemos en menos de 24 horas y agendamos una llamada sin costo." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32" style={{ backgroundColor: "var(--bg)" }}>
      <div className="max-w-3xl mx-auto px-6">
        <Reveal className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M2 2 L9 9 M16 2 L9 9 M9 9 L2 16 M9 9 L16 16"
                stroke="#FF2E63" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#FF2E63" }}>FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: "var(--text)" }}>
            Preguntas frecuentes
          </h2>
        </Reveal>

        <Reveal>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-xl border overflow-hidden transition-colors duration-200"
                style={{ backgroundColor: "var(--surface)", borderColor: open === i ? "rgba(255,46,99,0.5)" : "var(--border)" }}>
                <button onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={open === i}>
                  <span className="text-base font-bold" style={{ color: open === i ? "#FF2E63" : "var(--text)" }}>{f.q}</span>
                  <motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.2 }}
                    className="text-xl font-bold flex-shrink-0" style={{ color: open === i ? "#FF2E63" : "var(--text2)" }}>
                    ×
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm font-medium leading-relaxed" style={{ color: "var(--text2)" }}>{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
