import { NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactRequestBody {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequestBody;

    const { fullName, email, phone, message } = body;

    if (!fullName || !email || !phone || !message) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 },
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;
    const resendFromEmail = process.env.RESEND_FROM_EMAIL;

    if (!resendApiKey || !contactEmail || !resendFromEmail) {
      console.error("Missing env variables:", {
        hasResendApiKey: !!resendApiKey,
        hasContactEmail: !!contactEmail,
        hasResendFromEmail: !!resendFromEmail,
      });

      return NextResponse.json(
        { message: "Email service is not configured." },
        { status: 500 },
      );
    }

    const resend = new Resend(resendApiKey);

    const { error } = await resend.emails.send({
      from: resendFromEmail,
      to: [contactEmail],
      replyTo: email,
      subject: `New contact message from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New contact message</h2>

          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>

          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { message: error.message || "Failed to send message." },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "Message sent successfully." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { message: "Unexpected error." },
      { status: 500 },
    );
  }
}