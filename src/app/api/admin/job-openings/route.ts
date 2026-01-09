import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import JobOpening from "@/models/JobOpening";

// GET - Fetch all job openings (including inactive) with pagination for admin
export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

    // Get total count
    const total = await JobOpening.countDocuments();

    // Get paginated job openings
    const jobOpenings = await JobOpening.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    // Calculate stats
    const now = new Date();
    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    const newThisMonth = await JobOpening.countDocuments({
      createdAt: { $gte: firstDayOfMonth },
    });

    const activeCount = await JobOpening.countDocuments({ isActive: true });

    return NextResponse.json({
      jobOpenings,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
      stats: {
        total,
        newThisMonth,
        active: activeCount,
        inactive: total - activeCount,
      },
    });
  } catch (error) {
    console.error("Failed to fetch job openings:", error);
    return NextResponse.json(
      { error: "Failed to fetch job openings" },
      { status: 500 }
    );
  }
}

// POST - Create a new job opening
export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();

    const jobOpening = await JobOpening.create(body);

    return NextResponse.json(
      { message: "Job opening created successfully", jobOpening },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Failed to create job opening:", error);

    if (error instanceof Error && error.name === "ValidationError") {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(
      { error: "Failed to create job opening" },
      { status: 500 }
    );
  }
}
