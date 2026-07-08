import { Resend } from "resend";
import { profile } from "@/data/profile";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return Response.json({ error: "Missing required fields." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set.");
    return Response.json({ error: "Email service not configured." }, { status: 502 });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: profile.email,
      replyTo: email,
      subject: `Summon sign from ${name}`,
      text: `${message}\n\n— ${name} (${email})`,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Failed to send message." }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return Response.json({ error: "Failed to send message." }, { status: 502 });
  }
}
