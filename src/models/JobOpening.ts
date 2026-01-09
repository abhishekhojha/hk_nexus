import mongoose from "mongoose";

const JobOpeningSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a job title."],
      trim: true,
    },
    type: {
      type: String,
      required: [true, "Please provide a job type."],
      enum: ["Full-Time", "Part-Time", "Contract", "Internship"],
      default: "Full-Time",
    },
    workMode: {
      type: String,
      required: [true, "Please specify the work mode."],
      enum: ["On-site", "Work from Home", "Hybrid"],
      default: "On-site",
    },
    summary: {
      type: String,
      required: [true, "Please provide a job summary."],
      trim: true,
    },
    responsibilities: {
      type: [String],
      required: [true, "Please provide job responsibilities."],
      validate: {
        validator: (v: string[]) => v.length > 0,
        message: "At least one responsibility is required.",
      },
    },
    requirements: {
      type: [String],
      required: [true, "Please provide job requirements."],
      validate: {
        validator: (v: string[]) => v.length > 0,
        message: "At least one requirement is required.",
      },
    },
    city: {
      type: String,
      required: [true, "Please provide a city."],
      trim: true,
    },
    state: {
      type: String,
      required: [true, "Please provide a state."],
      trim: true,
    },
    country: {
      type: String,
      required: [true, "Please provide a country."],
      trim: true,
      default: "India",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.JobOpening ||
  mongoose.model("JobOpening", JobOpeningSchema);
