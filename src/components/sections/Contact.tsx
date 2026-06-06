"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Phone, MessageCircle, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errMsg, setErrMsg] = useState("");

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok && json.success) { setStatus("success"); reset(); }
      else { setStatus("error"); setErrMsg(json.message || "Error al enviar."); }
    } catch {
      setStatus("error");
      setErrMsg("Error de conexión. Intenta de nuevo.");
    }
  };

  const inp = (err: boolean) => cn(
    "w-full px-4 py-3.5 rounded-xl border text-sm font-medium transition-all outline-none",
    "bg-transparent placeholder:text-[var(--text2)]",
    err
      ? "border-red-400 focus:border-red-400"
      : "border-[var(--border)] focus:border-[#FF2E63]",
    "text-[var(--text)]"
  );

  return (
    <section id="contacto" className="py-24 md:py-32" style={{ backgroundColor: "var(--bg2)" }}>
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left */}
          <div>
            <Reveal>
              <div className="flex items-center gap-3 mb-5">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 2 L9 9 M16 2 L9 9 M9 9 L2 16 M9 9 L16 16"
                    stroke="#FF2E63" strokeWidth="3" strokeLinecap="round" />
                </svg>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#FF2E63" }}>Contacto</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5" style={{ color: "var(--text)" }}>
                Cotiza tu<br /><span style={{ color: "#FF2E63" }}>proyecto</span>
              </h2>
              <p className="text-base font-medium leading-relaxed mb-10" style={{ color: "var(--text2)" }}>
                Respondemos en menos de 24 horas. Sin compromisos, sin presiones. Solo una conversación honesta sobre cómo hacer crecer tu negocio.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-3">
                {[
                  { icon: Phone, label: "Teléfono", val: "871 512 5207", href: "tel:8715125207" },
                  { icon: Phone, label: "Teléfono alternativo", val: "871 351 5233", href: "tel:8713515233" },
                  { icon: MessageCircle, label: "WhatsApp", val: "871 512 5207", href: "https://wa.me/528715125207" },
                  { icon: MessageCircle, label: "WhatsApp alternativo", val: "871 351 5233", href: "https://wa.me/528713515233" },
                ].map(({ icon: Icon, label, val, href }) => (
                  <motion.a key={href} href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl border transition-all"
                    style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
                    whileHover={{ x: 4, borderColor: "rgba(255,46,99,0.4)" }}>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(255,46,99,0.1)" }}>
                      <Icon size={16} style={{ color: "#FF2E63" }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--text2)" }}>{label}</p>
                      <p className="text-sm font-bold" style={{ color: "var(--text)" }}>{val}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal direction="right">
            <div className="p-8 md:p-10 rounded-2xl border" style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}>
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div key="ok" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-10 gap-4">
                    <CheckCircle size={52} style={{ color: "#FF2E63" }} />
                    <h3 className="text-2xl font-extrabold" style={{ color: "var(--text)" }}>¡Mensaje enviado!</h3>
                    <p className="text-sm font-medium" style={{ color: "var(--text2)" }}>
                      Te contactaremos en menos de 24 horas.
                    </p>
                    <button onClick={() => setStatus("idle")} className="text-sm font-bold underline mt-2"
                      style={{ color: "var(--text2)" }}>
                      Enviar otro mensaje
                    </button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="Nombre" error={errors.nombre?.message}>
                        <input {...register("nombre")} placeholder="María García" className={inp(!!errors.nombre)} />
                      </Field>
                      <Field label="Empresa" error={errors.empresa?.message}>
                        <input {...register("empresa")} placeholder="Mi Empresa" className={inp(!!errors.empresa)} />
                      </Field>
                    </div>
                    <Field label="Correo electrónico" error={errors.correo?.message}>
                      <input {...register("correo")} type="email" placeholder="maria@empresa.com" className={inp(!!errors.correo)} />
                    </Field>
                    <Field label="Teléfono" error={errors.telefono?.message}>
                      <input {...register("telefono")} type="tel" placeholder="871 512 5207" className={inp(!!errors.telefono)} />
                    </Field>
                    <Field label="¿Qué necesitas?" error={errors.mensaje?.message}>
                      <textarea {...register("mensaje")} rows={4} placeholder="Cuéntanos sobre tu proyecto..."
                        className={inp(!!errors.mensaje) + " resize-none"} />
                    </Field>

                    {status === "error" && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="flex items-center gap-2 p-3 rounded-xl text-sm font-medium"
                        style={{ backgroundColor: "rgba(239,68,68,0.1)", color: "#ef4444" }}>
                        <AlertCircle size={15} />{errMsg}
                      </motion.div>
                    )}

                    <motion.button type="submit" disabled={status === "loading"}
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-full text-sm font-bold text-white disabled:opacity-60"
                      style={{ backgroundColor: "#FF2E63" }}
                      whileHover={{ filter: "brightness(1.1)" }} whileTap={{ scale: 0.97 }}>
                      {status === "loading"
                        ? <><Loader2 size={15} className="animate-spin" /> Enviando...</>
                        : <><Send size={15} /> Enviar mensaje</>}
                    </motion.button>
                    <p className="text-xs font-medium text-center" style={{ color: "var(--text2)" }}>
                      Respondemos en menos de 24 horas · Sin compromiso
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-bold" style={{ color: "var(--text2)" }}>{label}</label>
      {children}
      {error && <p className="text-xs font-medium" style={{ color: "#ef4444" }}>{error}</p>}
    </div>
  );
}
