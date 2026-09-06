import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// POST /api/contact
export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    // Server-side validation (never trust the client alone)
    if (
      !name?.trim() ||
      !email?.trim() ||
      !subject?.trim() ||
      !message?.trim()
    ) {
      return NextResponse.json(
        { error: "Please fill in all fields." },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    // Make sure env vars are set
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD in .env.local");
      return NextResponse.json(
        { error: "Server email is not configured." },
        { status: 500 },
      );
    }

    // Gmail SMTP transporter
    // pool: true reuses the SMTP connection across requests instead of
    // opening a fresh TLS handshake every time — this is what was making
    // submissions feel slow. verify() was also removed since it added an
    // extra network round-trip before every send.
    const transporter = nodemailer.createTransport({
      service: "gmail",
      pool: true,
      maxConnections: 3,
      auth: {
        user: process.env.GMAIL_USER, // your sending gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // 16-char app password (NOT your normal password)
      },
    });

    const receiver =
      process.env.CONTACT_RECEIVER_EMAIL || "pantrix26@gmail.com";

    await transporter.sendMail({
      from: `"${name}" <${process.env.GMAIL_USER}>`, // must be your own gmail for Gmail SMTP
      replyTo: email, // so you can hit "reply" and it goes to the visitor
      to: receiver,
      subject: `[Contact Form] ${subject}`,
      text: `You received a new message from your website contact form.

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 },
    );
  }
}
