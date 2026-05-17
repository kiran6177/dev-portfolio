import { NextResponse } from "next/server";
import { validateEmail } from "@/lib/validation";
import { sendContactEmail } from "@/lib/nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }

    if (!email) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    if (!validateEmail(email)) {
      return NextResponse.json({ error: "Email is invalid." }, { status: 400 });
    }

    if (!message) {
      return NextResponse.json({ error: "Message is required." }, { status: 400 });
    }

    const result = await sendContactEmail(name, email, message);

    if (!result?.success) {
      return NextResponse.json(
        { error: result?.error || "Email delivery failed." },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Contact message sent successfully." }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message || "Unable to process request." },
      { status: 500 }
    );
  }
}
