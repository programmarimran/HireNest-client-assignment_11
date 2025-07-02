import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-50 py-12 px-4 md:px-10 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
        Contact Us
      </h1>

      {/* Contact Info */}
      <section className="grid md:grid-cols-2 gap-10 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-lg leading-relaxed mb-4">
            We're here to answer any questions you may have about HireNest.
            Reach out to us and we'll respond as soon as we can. Whether you’re
            a service provider, a customer, or a curious visitor — we’d love to
            hear from you!
          </p>
          <ul className="space-y-3 text-lg">
            <li>
              <strong>📍 Address:</strong> Dhaka, Bangladesh
            </li>
            <li>
              <strong>📧 Email:</strong> infosponsor2@gmail.com
            </li>
            <li>
              <strong>📞 Phone:</strong> +880-1715994657
            </li>
            <li>
              <strong>⏰ Working Hours:</strong> Sat - Thu | 10AM - 6PM
            </li>
          </ul>
        </div>

        {/* Google Map */}
        <div className="rounded overflow-hidden shadow-md">
          <iframe
            title="HireNest Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5132445678825!2d90.36650987533684!3d23.802950886332206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b704982e71%3A0xc205d44c2c3a070c!2sDhaka!5e0!3m2!1sen!2sbd!4v1700000000000"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Contact Form */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
        <form className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full bg-white dark:bg-gray-900 dark:text-white"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full bg-white dark:bg-gray-900 dark:text-white"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered w-full bg-white dark:bg-gray-900 dark:text-white"
            required
          />
          <textarea
            placeholder="Your Message"
            className="textarea textarea-bordered w-full min-h-[150px] bg-white dark:bg-gray-900 dark:text-white"
            required
          ></textarea>
          <button className="btn btn-primary bg-blue-600 border-none px-10">
            Send Message
          </button>
        </form>
      </section>

      {/* Social Media Links */}
      <section className="mb-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">Connect on Social Media</h2>
        <p className="text-lg mb-6">
          Stay updated and follow us on your favorite platforms.
        </p>
        <div className="flex justify-center gap-6 text-3xl text-blue-600 dark:text-blue-400">
          <a
            href="https://www.facebook.com/mdimran.hasan.79827803"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/md-imran-hasan-664907354/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/imranhasan72751"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://github.com/programmarimran"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <details className="bg-white dark:bg-gray-800 p-4 rounded shadow">
            <summary className="font-medium cursor-pointer text-gray-800 dark:text-gray-50">
              How do I hire a service provider?
            </summary>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              You can browse services, check ratings and availability, then book
              directly through the HireNest platform.
            </p>
          </details>
          <details className="bg-white dark:bg-gray-800 p-4 rounded shadow">
            <summary className="font-medium cursor-pointer text-gray-800 dark:text-gray-50">
              Can I cancel a booking?
            </summary>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Yes, cancellation policies vary by provider. Please check the
              booking page for details.
            </p>
          </details>
          <details className="bg-white dark:bg-gray-800 p-4 rounded shadow">
            <summary className="font-medium cursor-pointer text-gray-800 dark:text-gray-50">
              Is my personal information safe?
            </summary>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Absolutely. We use encryption and secure practices to keep your
              data protected.
            </p>
          </details>
        </div>
      </section>

      {/* Footer Credit */}
      <section className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10">
        Built with ❤️ by{" "}
        <strong className="text-primary">Md Imran Hasan</strong> — MERN Stack
        Developer.
      </section>
    </div>
  );
};

export default Contact;
