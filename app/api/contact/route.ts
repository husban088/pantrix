import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Validate all fields
    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
      });
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email" }), {
        status: 400,
      });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.PANTRIX_EMAIL_USER,
        pass: process.env.PANTRIX_EMAIL_PASS,
      },
    });

    // Verify SMTP connection before sending
    await transporter.verify();

    await transporter.sendMail({
      from: `"Pantrix Contact" <${process.env.PANTRIX_EMAIL_USER}>`,
      to: process.env.PANTRIX_EMAIL_USER,
      replyTo: email,
      subject: `✦ New Message: ${subject} — from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <body style="font-family: Arial, sans-serif; background: #0a0a0a; color: #e5e5e5; padding: 32px;">
            <div style="max-width: 560px; margin: 0 auto; background: #111; border: 1px solid #2a2a2a; border-radius: 12px; padding: 32px;">
              <h2 style="color: #c9a84c; margin: 0 0 8px;">✦ New Contact Message</h2>
              <p style="color: #888; font-size: 13px; margin: 0 0 28px;">Pantrix Web Studio — Contact Form</p>
              <hr style="border: none; border-top: 1px solid #2a2a2a; margin-bottom: 24px;" />
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; color: #888; font-size: 13px; width: 90px;">Name</td>
                  <td style="padding: 10px 0; color: #e5e5e5; font-weight: 600;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #888; font-size: 13px;">Email</td>
                  <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #c9a84c;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #888; font-size: 13px;">Subject</td>
                  <td style="padding: 10px 0; color: #e5e5e5;">${subject}</td>
                </tr>
              </table>
              <hr style="border: none; border-top: 1px solid #2a2a2a; margin: 20px 0;" />
              <p style="color: #888; font-size: 13px; margin-bottom: 8px;">Message</p>
              <p style="color: #e5e5e5; line-height: 1.7; white-space: pre-wrap;">${message}</p>
              <hr style="border: none; border-top: 1px solid #2a2a2a; margin-top: 28px;" />
              <p style="color: #555; font-size: 12px; margin-top: 16px; text-align: center;">Pantrix Web Studio © 2025</p>
            </div>
          </body>
        </html>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("PANTRIX EMAIL ERROR:", error);
    return new Response(JSON.stringify({ error: "Email failed" }), {
      status: 500,
    });
  }
}
