import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name."],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please provide an email address."],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email address",
      ],
    },
    phone: {
      type: String,
      required: [true, "Please provide a phone number."],
      trim: true,
      match: [/^[\d\s\-\+\(\)]+$/, "Please provide a valid phone number"],
    },
    subject: {
      type: String,
      required: [true, "Please provide a subject."],
      trim: true,
    },
    message: {
      type: String,
      required: [true, "Please provide a message."],
    },
    status: {
      type: String,
      enum: ["new", "read", "replied"],
      default: "new",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Contact ||
  mongoose.model("Contact", ContactSchema);
