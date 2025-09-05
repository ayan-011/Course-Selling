import { useState } from "react";
import axios from "axios";

export default function PaymentModal({ open, onClose, course }) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [serverMsg, setServerMsg] = useState("");
  const [refId, setRefId] = useState(""); // store backend reference ID

  if (!open) return null;

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // Step 1: Create Enrollment
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setServerMsg("");
    setRefId("");

    try {
      const { data } = await axios.post("http://localhost:5000/api/enroll", {
        fullName: form.fullName,
        email: form.email,
        mobileNumber: form.mobileNumber,
      });

      setRefId(data.ref);
      setServerMsg(`Enrollment created. Reference ID: ${data.ref}`);
    } catch (err) {
      setServerMsg("Could not create enrollment. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // Step 2: Confirm Paid (after admin receives money)
  const confirmPaid = async () => {
    if (!refId) {
      setServerMsg("No enrollment reference found. Submit the form first.");
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`http://localhost:5000/api/enroll/${refId}/confirm`);
      setServerMsg("Payment confirmed! Check your email for the course link.");
    } catch (err) {
      setServerMsg("Could not confirm payment yet. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-xl p-6 
                      max-h-screen overflow-y-auto z-50">
        {/* Header */}
        <div className="flex items-start justify-between sticky top-0 bg-white pb-2">
          <h3 className="text-xl font-semibold">Enroll & Pay</h3>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded-lg border text-sm"
          >
            Close
          </button>
        </div>

        {/* Course Summary */}
        <div className="mt-4 bg-zinc-50 rounded-xl p-4">
          <p className="font-medium">{course?.title}</p>
          <p className="text-sm text-zinc-600">
            Amount:{" "}
            <span className="font-semibold">
              ₹{(course?.price ?? 20900) / 100} INR
            </span>
          </p>
        </div>

        {/* Form + QR */}
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {/* Left: Form */}
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm">Full name</label>
              <input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
                className="w-full mt-1 border rounded-lg px-3 py-2 outline-none focus:ring"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full mt-1 border rounded-lg px-3 py-2 outline-none focus:ring"
                placeholder="john@email.com"
              />
            </div>
            <div>
              <label className="text-sm">Mobile number</label>
              <input
                name="mobileNumber"
                value={form.mobileNumber}
                onChange={handleChange}
                required
                className="w-full mt-1 border rounded-lg px-3 py-2 outline-none focus:ring"
                placeholder="+91 98765 43210"
              />
            </div>

            <button
              disabled={submitting}
              className="w-full bg-black text-white rounded-lg py-2 disabled:opacity-60"
            >
              {submitting ? "Please wait..." : "Create Enrollment"}
            </button>
          </form>

          {/* Right: Static QR */}
          <div>
            <p className="text-sm text-zinc-600">Admin’s QR Code</p>
            <div className="mt-2 aspect-square w-full bg-zinc-100 rounded-xl flex items-center justify-center overflow-hidden">
              <img
                src="QR.jpg" // 👉 put your QR image here
                alt="Admin QR"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="mt-4 text-sm">
              <p className="font-medium">Pay with UPI</p>
              <ol className="list-decimal ml-4 mt-1 space-y-1 text-zinc-600">
                <li>Open any UPI app (GPay / PhonePe / Paytm).</li>
                <li>Scan the QR and pay the exact amount.</li>
                <li>
                  After paying, click{" "}
                  <span className="font-medium">“I have paid”</span>.
                </li>
              </ol>
              <button
                onClick={confirmPaid}
                disabled={submitting}
                className="mt-3 w-full border rounded-lg py-2"
              >
                I have paid
              </button>
            </div>
          </div>
        </div>

        {/* Message */}
        {serverMsg && (
          <div className="mt-4 text-sm bg-zinc-50 rounded-lg p-3">
            {serverMsg}
          </div>
        )}
      </div>
    </div>
  );
}
