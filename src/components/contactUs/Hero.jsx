import React from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const InfoItem = ({ title, children }) => (
  <div className="flex items-start gap-4 rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
    <div>
      <div className="text-sm font-semibold text-sky-800">{title}</div>
      <div className="mt-1 text-sm text-gray-600">{children}</div>
    </div>
  </div>
);

const Hero = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    console.log("Contact form submitted:", payload);
    alert("Thanks! We've received your message.");
    e.currentTarget.reset();
  };

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="mx-auto max-w-6xl px-6 pt-20 pb-6">
        <p className="text-[11px] uppercase tracking-[0.2em] text-sky-700/80 font-semibold">
          Get in touch
        </p>
        <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight bg-linear-to-r from-sky-700 via-cyan-700 to-blue-600 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="mt-3 max-w-2xl text-gray-600">
          We’d love to hear from you. Send us a message and our team will get
          back to you as soon as possible.
        </p>
      </header>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Contact Details */}
          <div className="lg:col-span-2 space-y-4">
            <InfoItem icon={Phone} title="Call us">
              +94 77 3 61 90 94
              <br />
              Mon–Fri, 9:00–17:30 (IST)
            </InfoItem>
            <InfoItem icon={Mail} title="Email">
              model@modelgroupof.com
            </InfoItem>
            <InfoItem icon={MapPin} title="Address">
              Model Group of Companies (Pvt) Ltd
              <br />
              G 213, Niwasipura, Kotugoda, Ja-Ela , Sri Lanka.
              <br/>
              502, Negambo road, Dadugama, Ja-Ela , Sri Lanka.
            </InfoItem>
            <InfoItem icon={Clock} title="Office Hours">
              Monday–Friday: 9:00–17:30
              <br />
              Saturday: 9:00–13:00
            </InfoItem>

            {/* Map teaser */}
            <div className="rounded-2xl border border-sky-100 bg-white p-4">
              <div className="rounded-xl bg-linear-to-br from-sky-100 via-cyan-100 to-blue-100 h-40 w-full" />
              <a
                href="https://maps.google.com/?q=Model Group of Companies Sri Lanka"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center text-sm font-medium text-sky-700 hover:underline"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-sky-100 bg-white/90 backdrop-blur p-6 md:p-8 shadow-sm"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-sky-900"
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-sky-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-sky-900"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-sky-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-sky-900"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-sky-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-sky-900"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-sky-400"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-sky-900"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-sky-400"
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between gap-3">
                <p className="text-xs text-gray-500">
                  By submitting, you agree to our privacy policy.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-sky-600 via-cyan-600 to-blue-600 px-5 py[11px] py-2.5 text-sm font-medium text-white hover:opacity-95 active:opacity-90"
                >
                  <Send className="h-4 w-4" /> Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Alt contacts */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
          <span className="mr-2 text-sky-800 font-medium">
            Other ways to reach us:
          </span>
          <a href="tel:+94773619094" className="hover:underline">
          +94 77 3 61 90 94
          </a>
          <span>•</span>
          <a href="mailto:model@modelgroupof.com" className="hover:underline">
          model@modelgroupof.com
          </a>
          <span>•</span>
          <a
            href="https://maps.google.com/?q=Model Group of Companies Sri Lanka"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            View map
          </a>
        </div>
      </section>
    </main>
  );
};

export default Hero;
