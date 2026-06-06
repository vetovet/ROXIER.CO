import { z } from "zod";

export const contactSchema = z.object({
  nombre: z.string().min(2, "Mínimo 2 caracteres").max(100),
  empresa: z.string().min(2, "Mínimo 2 caracteres").max(100),
  correo: z.string().email("Correo inválido"),
  telefono: z.string().min(10, "Mínimo 10 dígitos").max(15).regex(/^[\d\s\-+()]+$/, "Formato inválido"),
  mensaje: z.string().min(20, "Mínimo 20 caracteres").max(2000),
});

export type ContactFormData = z.infer<typeof contactSchema>;
