import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, empresa, message } = await req.json();

  // =========================
  // VALIDACIONES BÁSICAS
  // =========================
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Nombre, email y mensaje son obligatorios." },
      { status: 400 },
    );
  }

  // =========================
  // VALIDACIÓN EMAIL
  // =========================
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "El correo ingresado no es válido." },
      { status: 400 },
    );
  }

  // =========================
  // TRANSPORTER
  // =========================
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Web Contacto" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `Nuevo mensaje de ${name}`,
      text: `
Nuevo mensaje desde la web

Nombre: ${name}
Email: ${email}
Empresa: ${empresa || "No especificada"}

Mensaje:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>📩 Nuevo mensaje desde la web</h2>

          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Empresa:</strong> ${empresa || "No especificada"}</p>

          <hr />

          <h3>Mensaje:</h3>
          <p>${message.replaceAll("\n", "<br/>")}</p>
        </div>
      `,
    });

    return NextResponse.json({ message: "Correo enviado con éxito ✅" });
  } catch (error) {
    console.error("Error al enviar correo:", error);

    return NextResponse.json(
      { error: "Error al enviar el mensaje." },
      { status: 500 },
    );
  }
}
