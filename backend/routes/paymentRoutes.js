import express from "express";
import Payment from "../models/payment.js";
import QRCode from "qrcode";
import nodemailer from "nodemailer";

const router = express.Router();

// ✅ Enroll route (you already have this)
router.post("/enroll", async (req, res) => {
  try {
    const { username, email, mobileNumber } = req.body;

    const ref = "REF-" + Math.random().toString(36).substr(2, 9).toUpperCase();

    const payment = new Payment({
      username,
      email,
      mobileNumber,
      ref,
      amount: 209,
      status: "pending",
    });

    await payment.save();

    const qrImage = await QRCode.toDataURL(
      `upi://pay?pa=your-upi-id@upi&am=209&tn=${ref}`
    );

    res.json({ message: "Enrollment successful", qrImage, ref });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Confirm payment route
router.post("/confirm", async (req, res) => {
  try {
    const { ref } = req.body;

    const payment = await Payment.findOne({ ref });
    if (!payment) return res.status(404).json({ error: "Reference not found" });

    // Mark payment as successful
    payment.status = "success";
    await payment.save();

    // ✅ Send email with product link
    const testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: testAccount.user,
    pass: testAccount.pass,
  },
});

const info = await transporter.sendMail({
  from: '"Course App" <no-reply@course.com>',
  to: "ayansaifi2nd@example.com",
  subject: "Payment Received",
  text: "Thanks for your payment, your course is unlocked!",
});

    res.json({ message: "Payment confirmed and email sent" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
