import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import JobOpening from "@/models/JobOpening";

// PUT - Update a job opening
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();

    const { id } = await params;
    const body = await request.json();

    const jobOpening = await JobOpening.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true, runValidators: true }
    );

    if (!jobOpening) {
      return NextResponse.json(
        { error: "Job opening not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Job opening updated successfully",
      jobOpening,
    });
  } catch (error: unknown) {
    console.error("Failed to update job opening:", error);

    if (error instanceof Error && error.name === "ValidationError") {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(
      { error: "Failed to update job opening" },
      { status: 500 }
    );
  }
}

// DELETE - Delete a job opening
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();

    const { id } = await params;

    const jobOpening = await JobOpening.findByIdAndDelete(id);

    if (!jobOpening) {
      return NextResponse.json(
        { error: "Job opening not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Job opening deleted successfully",
    });
  } catch (error) {
    console.error("Failed to delete job opening:", error);
    return NextResponse.json(
      { error: "Failed to delete job opening" },
      { status: 500 }
    );
  }
}
