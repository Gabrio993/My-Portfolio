import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import nodemailer from "nodemailer";

interface ContactFormData {
  name?: unknown;
  email?: unknown;
  message?: unknown;
}

export const handler: Handler = async (event: HandlerEvent, _context: HandlerContext) => {
  // Accetta solo POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  let data: ContactFormData;
  try {
    data = JSON.parse(event.body || "{}");
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Body JSON non valido" }),
    };
  }

  const { name, email, message } = data;

  // VALIDAZIONI BASE con controllo tipi
  if (typeof name !== "string" || name.trim().length < 2) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Nome non valido (minimo 2 caratteri)" }),
    };
  }

  // Validazione email semplice
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (typeof email !== "string" || !emailRegex.test(email)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Email non valida" }),
    };
  }

  if (typeof message !== "string" || message.trim().length < 5) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Messaggio non valido (minimo 5 caratteri)" }),
    };
  }

  // CREA TRASPORTER nodemailer (esempio con SMTP Gmail)
  // Sostituisci USER e PASS con variabili ambiente!
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`, // mittente con nome ed email dell'utente
    to: process.env.MY_EMAIL_RECEIVER, // tua email dove vuoi ricevere i messaggi
    replyTo: `${email}`,
    subject: `Nuovo messaggio dal sito da ${email}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Errore nell'invio email" }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Ciao ${name}, grazie per averci contattato!` }),
  };
};
