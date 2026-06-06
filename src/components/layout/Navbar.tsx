"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
        className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
        style={{
          padding: scrolled ? "12px 0" : "20px 0",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          backgroundColor: scrolled ? "rgba(14,14,16,0.92)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
        }}
      >
        <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between">
          <a href="#inicio" onClick={e => { e.preventDefault(); go("#inicio"); }}>
            <Logo size="md" />
          </a>

          {/* Desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map(l => (
              <a key={l.href} href={l.href}
                onClick={e => { e.preventDefault(); go(l.href); }}
                className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                style={{ color: "var(--text2)" }}
                onMouseEnter={e => { e.currentTarget.style.color = "var(--primary)"; e.currentTarget.style.backgroundColor = "var(--primary-dim)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "var(--text2)"; e.currentTarget.style.backgroundColor = "transparent"; }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* CTA */}
            <motion.a href="#contacto"
              onClick={e => { e.preventDefault(); go("#contacto"); }}
              className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-all"
              style={{ backgroundColor: "var(--primary)", letterSpacing: "0.02em" }}
              whileHover={{ scale: 1.04, filter: "brightness(1.1)" }}
              whileTap={{ scale: 0.96 }}
            >
              Cotiza tu proyecto
            </motion.a>

            {/* Mobile toggle */}
            <button onClick={() => setOpen(!open)} className="lg:hidden p-2" style={{ color: "var(--text)" }} aria-label="Menú">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-x-0 top-16 z-40 border-b"
            style={{ backgroundColor: "rgba(14,14,16,0.97)", borderColor: "var(--border)", backdropFilter: "blur(20px)" }}
          >
            <nav className="max-w-screen-xl mx-auto px-6 py-5 flex flex-col gap-1">
              {links.map(l => (
                <a key={l.href} href={l.href}
                  onClick={e => { e.preventDefault(); go(l.href); }}
                  className="py-3 px-4 rounded-xl text-base font-medium transition-colors"
                  style={{ color: "var(--text2)" }}
                  onMouseEnter={e => { e.currentTarget.style.color = "var(--primary)"; e.currentTarget.style.backgroundColor = "var(--primary-dim)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "var(--text2)"; e.currentTarget.style.backgroundColor = "transparent"; }}
                >
                  {l.label}
                </a>
              ))}
              <a href="#contacto"
                onClick={e => { e.preventDefault(); go("#contacto"); }}
                className="mt-3 flex items-center justify-center py-3 rounded-full text-white text-sm font-bold"
                style={{ backgroundColor: "var(--primary)" }}
              >
                Cotiza tu proyecto
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
