import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      errs.email = "Valid email is required";
    if (!form.message.trim()) errs.message = "Message cannot be empty";
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: null });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) return setErrors(errs);

    setSubmitting(true);
    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus({ success: true, message: "Message sent successfully!" });
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus({ success: false, message: "Failed to send message." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 bg-white dark:bg-gray-900 px-4 sm:px-6"
      data-aos="fade-up"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-white mb-6 sm:mb-8">
        Get in Touch
      </h2>
      <div className="max-w-full sm:max-w-lg mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {["name", "email", "message"].map((field) => (
            <div key={field}>
              <label
                htmlFor={field}
                className="block text-gray-700 dark:text-gray-300 mb-1 capitalize text-sm sm:text-base"
              >
                {field}
              </label>
              {field !== "message" ? (
                <input
                  id={field}
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  className={`w-full border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800 dark:text-white text-sm sm:text-base ${
                    errors[field] ? "border-red-500" : "border-gray-300"
                  }`}
                />
              ) : (
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  className={`w-full border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800 dark:text-white text-sm sm:text-base ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                />
              )}
              {errors[field] && (
                <p className="text-red-500 text-xs sm:text-sm mt-1">
                  {errors[field]}
                </p>
              )}
            </div>
          ))}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 sm:py-3 rounded disabled:opacity-50 transition text-sm sm:text-base"
          >
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status && (
          <div
            className={`mt-6 p-4 rounded ${
              status.success
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            } text-center text-sm sm:text-base`}
          >
            {status.message}
          </div>
        )}
      </div>
    </section>
  );
}
