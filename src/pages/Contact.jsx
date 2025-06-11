import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3c85mii",
        "template_v2af5qc",
        form.current,
        "cr_vNjJLGHpaXLBwq"
      )
      .then(
        () => {
          setIsSent(true);
          setError(null);
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setError("Something went wrong. Please try again.");
          setIsSent(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-900 text-yellow-300 rounded-xl border-b"
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-8 text-center text-yellow-400"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h2>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="grid grid-cols-1 gap-5 w-full max-w-3xl mx-auto"
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <input
            name="name"
            placeholder="Your Name"
            className="w-full p-4 border border-gray-700 rounded-xl bg-gray-800 text-yellow-300 placeholder-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="w-full p-4 border border-gray-700 rounded-xl bg-gray-800 text-yellow-300 placeholder-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-4 border border-gray-700 rounded-xl bg-gray-800 text-yellow-300 placeholder-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            rows="6"
            required
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-yellow-400 text-gray-900 font-semibold px-8 py-3 rounded-full hover:bg-yellow-300 transition duration-300 ease-in-out"
            >
              Send
            </button>
          </div>

          {isSent && (
            <p className="text-green-400 text-center font-medium">Message sent successfully!</p>
          )}
          {error && (
            <p className="text-red-400 text-center font-medium">{error}</p>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
}
