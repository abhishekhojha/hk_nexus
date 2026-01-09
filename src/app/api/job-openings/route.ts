import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import JobOpening from "@/models/JobOpening";

// GET - Fetch active job openings with optional location filters
export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const city = searchParams.get("city");
    const state = searchParams.get("state");
    const country = searchParams.get("country");

    // Build query - only fetch active jobs for public API
    const query: Record<string, unknown> = { isActive: true };

    if (city && city !== "All Cities") {
      query.city = city;
    }
    if (state && state !== "All States") {
      query.state = state;
    }
    if (country && country !== "All Countries") {
      query.country = country;
    }

    const jobOpenings = await JobOpening.find(query)
      .sort({ createdAt: -1 })
      .lean();

    // Get unique locations for filter dropdowns
    const allActiveJobs = await JobOpening.find({ isActive: true })
      .select("city state country")
      .lean();

    const locations = {
      countries: [
        ...new Set(
          allActiveJobs.map((job: { country: string }) => job.country)
        ),
      ],
      states: [
        ...new Set(allActiveJobs.map((job: { state: string }) => job.state)),
      ],
      cities: [
        ...new Set(allActiveJobs.map((job: { city: string }) => job.city)),
      ],
    };

    return NextResponse.json({
      jobOpenings,
      locations,
    });
  } catch (error) {
    console.error("Failed to fetch job openings:", error);
    return NextResponse.json(
      { error: "Failed to fetch job openings" },
      { status: 500 }
    );
  }
}
