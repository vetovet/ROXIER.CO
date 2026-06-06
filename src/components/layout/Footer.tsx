"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Instagram, Linkedin, Facebook, ArrowUp } from "lucide-react";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="border-t pt-14 pb-8" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg)" }}>
      <div
        className="h-px mb-14"
        style={{ background: "linear-gradient(90deg, transparent, #FF2E63, transparent)" }}
      />
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Logo size="md" />
            <p className="text-sm mt-5 mb-6 leading-relaxed" style={{ color: "var(--text2)" }}>
              Crecimiento digital impulsado por IA.
              <br />Diseño web · SEO · Meta Ads · Automatización
            </p>
            <div className="space-y-2.5">
              {[
                { icon: Phone, text: "871 512 5207", href: "tel:8715125207" },
                { icon: Phone, text: "871 351 5233", href: "tel:8713515233" },
                { icon: MessageCircle, text: "WhatsApp: 871 512 5207", href: "https://wa.me/528715125207" },
              ].map(({ icon: Icon, text, href }) => (
                <a key={href} href={href} className="flex items-center gap-2.5 text-sm transition-colors"
                  style={{ color: "var(--text2)" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#FF2E63"}
                  onMouseLeave={e => e.currentTarget.style.color = "var(--text2)"}>
                  <Icon size={14} style={{ color: "#FF2E63" }} />{text}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#FF2E63" }}>Navegación</p>
            <ul className="space-y-3">
              {["inicio", "servicios", "portafolio", "nosotros", "contacto"].map(l => (
                <li key={l}>
                  <a href={`#${l}`} onClick={e => { e.preventDefault(); go(`#${l}`); }}
                    className="text-sm font-medium capitalize transition-colors" style={{ color: "var(--text2)" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#FF2E63"}
                    onMouseLeave={e => e.currentTarget.style.color = "var(--text2)"}>
                    {l.charAt(0).toUpperCase() + l.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#FF2E63" }}>Síguenos</p>
            <div className="space-y-3">
              {[
                { icon: Instagram, label: "Instagram · @roxier.co", href: "https://instagram.com/roxier.co" },
                { icon: Linkedin, label: "LinkedIn · ROXIER Co.", href: "https://linkedin.com/company/roxier" },
                { icon: Facebook, label: "Facebook · ROXIER Co.", href: "https://facebook.com/roxier.co" },
              ].map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-medium transition-colors" style={{ color: "var(--text2)" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#FF2E63"}
                  onMouseLeave={e => e.currentTarget.style.color = "var(--text2)"}>
                  <Icon size={15} />{label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
          <p className="text-xs" style={{ color: "var(--text2)" }}>
            © {year} ROXIER Co. · Torreón, Coahuila · Todos los derechos reservados
          </p>
          <motion.button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="p-2 rounded-full border transition-all"
            style={{ borderColor: "var(--border)", color: "var(--text2)" }}
            whileHover={{ y: -2, borderColor: "#FF2E63", color: "#FF2E63" }}
            aria-label="Volver arriba">
            <ArrowUp size={15} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
