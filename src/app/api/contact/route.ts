import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Contact from "@/models/Contact";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Connect to database
    await dbConnect();

    // Create new contact message
    const contact = await Contact.create({
      name,
      email,
      phone,
      subject,
      message,
      status: "new",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully!",
        data: contact,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Contact form error:", error);

    // Handle validation errors
    if (error.name === "ValidationError") {
      return NextResponse.json(
        { error: "Please check your input and try again." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
