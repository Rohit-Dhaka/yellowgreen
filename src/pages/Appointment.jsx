
import { useState } from "react";
import { CalendarDays, CheckCircle2, Clock, UserRound } from "lucide-react";

const services = [
  "General Eye Checkup",
  "Cataract Consultation",
  "LASIK Consultation",
  "Retina Consultation",
  "Follow-up Visit",
];

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
];

const inputClass =
  "w-full rounded-xl border border-[#dce8ff] bg-white px-4 py-3 text-sm text-[#13284d] outline-none transition focus:border-[#2864f5] focus:ring-4 focus:ring-[#2864f5]/10";

export default function Appointment() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const today = new Date();
  const minDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect your backend/API here to save the appointment.
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#f0f4ff] px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#dce8ff] bg-white px-4 py-2 text-xs font-bold text-[#2864f5]">
            <CalendarDays size={16} />
            APPOINTMENT BOOKING
          </span>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-[#13284d] sm:text-4xl">
            Book Your Appointment
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Schedule your eye consultation at Dr. Sharma's Eye Care & Lasik Centre.
          </p>
        </div>

        <div className="rounded-3xl border border-[#dce8ff] bg-white p-5 shadow-[0_12px_45px_rgba(40,100,245,0.08)] sm:p-8">
          {submitted ? (
            <div className="py-8 text-center">
              <CheckCircle2
                size={52}
                className="mx-auto text-[#2864f5]"
              />

              <h2 className="mt-4 text-2xl font-bold text-[#13284d]">
                Request Submitted
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Your details are ready. The appointment has not been booked
                yet because a backend service is not connected.
              </p>

              <button
                type="button"
                onClick={() => {
                  setForm({
                    name: "",
                    phone: "",
                    service: "",
                    date: "",
                    time: "",
                  });
                  setSubmitted(false);
                }}
                className="mt-6 rounded-xl bg-[#2864f5] px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
              >
                Book Another Appointment
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-[#13284d]"
                >
                  Patient Name *
                </label>

                <div className="relative">
                  <UserRound
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={handleChange}
                    className={`${inputClass} pl-11`}
                    maxLength={100}
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-[#13284d]"
                >
                  Phone Number *
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  pattern="[0-9+() -]{8,20}"
                  title="Enter a valid phone number"
                  placeholder="Enter your phone number"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-semibold text-[#13284d]"
                >
                  Consultation Type *
                </label>

                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={inputClass}
                  required
                >
                  <option value="">Select a consultation</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="date"
                  className="mb-2 block text-sm font-semibold text-[#13284d]"
                >
                  Appointment Date *
                </label>

                <input
                  id="date"
                  name="date"
                  type="date"
                  min={minDate}
                  value={form.date}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      date: e.target.value,
                      time: "",
                    });
                    setSubmitted(false);
                  }}
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#13284d]">
                  <Clock size={17} className="text-[#2864f5]" />
                  Preferred Time *
                </label>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      disabled={!form.date}
                      onClick={() =>
                        setForm({ ...form, time })
                      }
                      aria-pressed={form.time === time}
                      className={`rounded-xl border px-3 py-3 text-sm font-semibold transition ${
                        form.time === time
                          ? "border-[#2864f5] bg-[#2864f5] text-white"
                          : "border-[#dce8ff] text-[#13284d] hover:border-[#2864f5] hover:bg-[#f0f4ff]"
                      } disabled:cursor-not-allowed disabled:opacity-40`}
                    >
                      {time}
                    </button>
                  ))}
                </div>

                <input
                  type="text"
                  name="time"
                  value={form.time}
                  required
                  readOnly
                  tabIndex={-1}
                  aria-label="Selected appointment time"
                  className="pointer-events-none absolute h-px w-px opacity-0"
                />

                <p className="mt-2 text-xs text-slate-500">
                  Select a date first. Your preferred time requires clinic confirmation.
                </p>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#2864f5] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                Request Appointment
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
