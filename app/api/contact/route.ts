import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);

    if (!body) {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please provide name, email, and message." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey || apiKey === "re_your_api_key_here") {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json(
        {
          error:
            "Email service not configured. Please add RESEND_API_KEY to your .env.local file.",
        },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["thamalpathsathimantha3@gmail.com"],
      subject: `New Message: ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: 'Inter', system-ui, sans-serif; padding: 40px; color: #1a1a1a; max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 16px; border: 1px solid #f0f0f0;">
          <div style="margin-bottom: 32px; border-bottom: 2px solid #00f0ff; padding-bottom: 16px;">
            <h2 style="margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.025em; color: #030014;">
              New <span style="color: #00f0ff;">Portfolio</span> Inquiry
            </h2>
          </div>
          
          <div style="margin-bottom: 24px;">
            <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #888;">From</p>
            <p style="margin: 0; font-size: 16px; font-weight: 600; color: #030014;">${name} &lt;${email}&gt;</p>
          </div>
          
          <div style="background: #f8fafc; padding: 24px; border-radius: 12px; border: 1px solid #f1f5f9;">
            <p style="margin: 0 0 12px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #888;">Message</p>
            <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #f0f0f0; text-align: center;">
            <p style="margin: 0; font-size: 13px; color: #94a3b8;">
              Sent via your Developer Portfolio
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error("Critical API Error:", err);
    return NextResponse.json(
      { error: "Internal server error. Check terminal logs." },
      { status: 500 },
    );
  }
}
