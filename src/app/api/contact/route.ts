import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactSchema } from "@/lib/validations";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ success: false, message: "Datos inválidos." }, { status: 400 });
    }

    const { nombre, empresa, correo, telefono, mensaje } = result.data;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"Roxier.co" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO || process.env.SMTP_USER,
      replyTo: correo,
      subject: `Nuevo contacto: ${nombre} — ${empresa}`,
      text: `Nombre: ${nombre}\nEmpresa: ${empresa}\nCorreo: ${correo}\nTeléfono: ${telefono}\n\n${mensaje}`,
    });

    return NextResponse.json({ success: true, message: "Mensaje enviado." });
  } catch {
    return NextResponse.json({ success: false, message: "Error al enviar." }, { status: 500 });
  }
}
