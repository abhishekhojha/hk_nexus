import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import JobApplication from "@/models/JobApplication";
import { uploadFileToGridFS } from "@/lib/gridfs";

// File validation constants
const ALLOWED_MIME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Extract form fields
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const position = formData.get("position") as string;
    const message = formData.get("message") as string;
    const resumeFile = formData.get("resume") as File;

    // Validate required fields
    if (!fullName || !email || !phone || !position || !resumeFile) {
      return NextResponse.json(
        { error: "All required fields must be provided" },
        { status: 400 }
      );
    }

    // Validate file type
    if (!ALLOWED_MIME_TYPES.includes(resumeFile.type)) {
      return NextResponse.json(
        {
          error:
            "Invalid file type. Please upload PDF, DOC, or DOCX files only.",
        },
        { status: 400 }
      );
    }

    // Validate file size
    if (resumeFile.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "File size exceeds 3MB limit." },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const arrayBuffer = await resumeFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Connect to database
    await dbConnect();

    // Upload resume to GridFS
    const resumeId = await uploadFileToGridFS(
      buffer,
      resumeFile.name,
      resumeFile.type
    );

    // Create job application
    const application = await JobApplication.create({
      fullName,
      email,
      phone,
      position,
      message: message || "",
      resumeId,
      resumeFilename: resumeFile.name,
      resumeMimeType: resumeFile.type,
      resumeSize: resumeFile.size,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully!",
        data: {
          id: application._id,
          fullName: application.fullName,
          position: application.position,
        },
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Job application error:", error);

    // Handle validation errors
    if (error.name === "ValidationError") {
      return NextResponse.json(
        { error: "Please check your input and try again." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to submit application. Please try again later." },
      { status: 500 }
    );
  }
}
