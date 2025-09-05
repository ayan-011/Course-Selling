import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  ref: { type: String, required: true },  // reference id
  amount: { type: Number, required: true, default: 209 }, // example price
  status: { type: String, default: "pending" }
});

const Payment = mongoose.model("Payment", paymentSchema);
export default Payment;
