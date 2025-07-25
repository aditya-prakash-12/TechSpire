import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true }
  },
  { timestamps: true }
);

const ContactModel = mongoose.model("contacts", contactSchema);
export default ContactModel;
