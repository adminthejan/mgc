import React from 'react';

const Section = ({ title, children }) => (
  <section className="max-w-6xl mx-auto px-6 py-10 border-b border-sky-100/40 last:border-0">
    <h2 className="text-2xl font-semibold text-sky-700 mb-3">{title}</h2>
    <div className="space-y-3 text-gray-700 leading-relaxed text-sm md:text-base">
      {children}
    </div>
  </section>
);

const Hero = () => {
  return (
    <main className="min-h-screen text-gray-800">
      <header className="mx-auto max-w-6xl px-6 pt-14 pb-8">
        <p className="text-[11px] uppercase tracking-[0.2em] text-sky-700/80 font-semibold">Policy</p>
        <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-linear-to-r from-sky-700 via-cyan-700 to-blue-600 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p className="mt-3 max-w-3xl text-gray-600 text-sm md:text-base">
          This Privacy Policy explains how Model Group of Companies (Pvt) Ltd collects, uses, and protects your personal data when you interact with our website and services.
        </p>
      </header>

      <Section title="Who we are">
        <p>Our website address is: <a href="http://modelgroupof.com" className="text-sky-700 underline">http://modelgroupof.com</a>.</p>
      </Section>

      <Section title="Comments">
        <p>When visitors leave comments on the site, we collect the data shown in the comments form, along with the visitor’s IP address and browser user agent string to help spam detection.</p>
        <p>An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to check if you are using it. The Gravatar service privacy policy is available at <a href="https://automattic.com/privacy/" className="text-sky-700 underline">https://automattic.com/privacy/</a>. After approval of your comment, your profile picture is visible to the public alongside your comment.</p>
      </Section>

      <Section title="Media">
        <p>If you upload images to the website, avoid uploading images with embedded location data (EXIF GPS). Visitors can download and extract location data from images on the website.</p>
      </Section>

      <Section title="Cookies">
        <p>If you leave a comment, you may opt-in to saving your name, email address, and website in cookies for convenience. These cookies last for one year.</p>
        <p>If you visit our login page, we set a temporary cookie to check if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.</p>
        <p>When you log in, we set cookies to save your login info and screen display choices. Login cookies last two days, and screen option cookies last one year. If you select “Remember Me,” login persists for two weeks. Logging out removes these cookies.</p>
        <p>If you edit or publish an article, an additional cookie is saved in your browser containing the post ID of the edited article. It expires after one day.</p>
      </Section>

      <Section title="Embedded content from other websites">
        <p>Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves the same as if the visitor has visited the other website.</p>
        <p>These websites may collect data about you, use cookies, embed third-party tracking, and monitor your interaction with the embedded content, including tracking your interaction if you have an account and are logged in to that website.</p>
      </Section>

      <Section title="Who we share your data with">
        <p>If you request a password reset, your IP address will be included in the reset email.</p>
      </Section>

      <Section title="How long we retain your data">
        <p>If you leave a comment, the comment and its metadata are retained indefinitely so we can recognize and approve follow-up comments automatically instead of holding them in a moderation queue.</p>
        <p>For users that register on our site, we store the personal information they provide in their profile. All users can see, edit, or delete their personal info at any time (except username). Administrators can also view and edit that data.</p>
      </Section>

      <Section title="What rights you have over your data">
        <p>If you have an account on this site or have left comments, you can request to receive an exported file of your personal data, including any data you’ve provided. You can also request that we erase any personal data we hold about you, except data retained for administrative, legal, or security purposes.</p>
      </Section>

      <Section title="Where we send your data">
        <p>Visitor comments may be checked through an automated spam detection service.</p>
      </Section>
    </main>
  );
};

export default Hero;