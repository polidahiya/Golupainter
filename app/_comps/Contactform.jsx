import React from "react";

const ContactForm = () => {
  return (
    <section id="contact" className="py-12 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Contact Us
        </h2>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-theme"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-theme"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-theme"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-theme text-white py-2 rounded-md hover:bg-yellow-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
