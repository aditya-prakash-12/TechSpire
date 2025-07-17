import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    event: { type: String, required: true },
    message: { type: String }
  },
  { timestamps: true }
);

const RegistrationModel = mongoose.model("registrations", registrationSchema);
export default RegistrationModel;
