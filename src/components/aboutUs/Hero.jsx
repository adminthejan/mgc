import React from "react";
import per1 from "../../assets/per1.jpeg";
import per2 from "../../assets/per2.jpeg";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  Car, ShoppingCart, CreditCard, Wrench, Factory,
  Dice5, Package, Wine, HeartHandshake, ShieldCheck,
  Globe, Award, Users, Target, Eye,
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: true },
});

const AboutUs = () => {
  const navigate = useNavigate();

  const verticals = [
    { icon: Car, label: "Vehicles Import & Export", color: "from-blue-500 to-cyan-500" },
    { icon: ShoppingCart, label: "Vehicle Buying & Selling", color: "from-cyan-500 to-teal-500" },
    { icon: Wrench, label: "Vehicle Repair & Conversion", color: "from-teal-500 to-emerald-500" },
    { icon: Factory, label: "Vehicle Assembling", color: "from-emerald-500 to-green-500" },
    { icon: CreditCard, label: "Finance, Loans & Banking", color: "from-violet-500 to-purple-500" },
    { icon: Dice5, label: "Casino Entertainment", color: "from-red-500 to-rose-500" },
    { icon: Package, label: "Steel & Billet Trading", color: "from-orange-500 to-amber-500" },
    { icon: Wine, label: "Liquor Import & Export", color: "from-pink-500 to-fuchsia-500" },
    { icon: ShieldCheck, label: "Weapon Supply (Govt.)", color: "from-slate-500 to-gray-600" },
    { icon: HeartHandshake, label: "NGO Charity Organisation", color: "from-sky-500 to-indigo-500" },
  ];

  const stats = [
    { value: "1995", label: "Year Founded", icon: Award },
    { value: "30+", label: "Years of Experience", icon: Target },
    { value: "12+", label: "Countries", icon: Globe },
    { value: "10+", label: "Business Verticals", icon: Users },
  ];

  const countries = ["Dubai", "UK", "Japan", "Canada", "Kenya", "USA", "Germany", "Australia", "Ireland", "Spain", "Finland", "Brazil"];

  return (
    <main className="min-h-screen text-gray-800 bg-gray-50">

      {/* ── HERO BANNER ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-900 via-cyan-900 to-slate-900 text-white">
        {/* decorative blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-sky-500/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 text-center">
          <motion.span {...fadeUp(0)} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-semibold text-cyan-200 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Established 1995 · 100% Sri Lankan-Owned
          </motion.span>

          <motion.h1 {...fadeUp(0.1)} className="main-topic-font text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
            Model Group of
            <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
              Companies (Pvt) Ltd
            </span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="mt-6 text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            A worldwide conglomerate spanning vehicles, finance, casino, steel trading, liquor, government weapon supply and NGO charity — delivering excellence across 12+ countries since 1995.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => navigate("/")} className="rounded-full bg-white text-sky-900 px-7 py-3 font-bold shadow-lg hover:bg-cyan-50 transition-colors cursor-pointer">
              Explore Our Services
            </button>
            <button onClick={() => navigate("/contact")} className="rounded-full border border-white/30 bg-white/10 backdrop-blur px-7 py-3 font-semibold text-white hover:bg-white/20 transition-colors cursor-pointer">
              Contact Us
            </button>
          </motion.div>

          {/* Country tags */}
          <motion.div {...fadeUp(0.4)} className="mt-10 flex flex-wrap justify-center gap-2">
            {countries.map((c) => (
              <span key={c} className="rounded-full border border-white/20 bg-white/10 backdrop-blur px-3 py-1 text-xs text-white/80 font-medium">
                {c}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.label} {...fadeUp(i * 0.1)}
                className="rounded-2xl bg-white border border-gray-100 shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-sky-600" />
                </div>
                <p className="text-2xl md:text-3xl font-extrabold text-sky-700">{s.value}</p>
                <p className="mt-1 text-xs text-gray-500 font-medium">{s.label}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <motion.div {...fadeUp(0)}>
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-600">Who We Are</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              A Global Leader <br />
              <span className="bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">Built From Sri Lanka</span>
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              <strong className="text-gray-900">Model Group of Companies (MGC)</strong> has established itself as a market leader since 1995. Originally focused on vehicle selling and conversion, MGC has grown into a true conglomerate with operations spanning <em>Dubai, UK, Japan, Canada, Kenya, USA, Germany, Australia, Ireland, Spain, Finland</em> and <em>Brazil</em>.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              With advanced facilities, ISO-compliant processes and a team of experienced professionals, MGC continues to set the benchmark for quality, compliance and customer trust across every industry it serves.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { title: "Quality", desc: "ISO-compliant processes across all verticals." },
                { title: "Innovation", desc: "Cutting-edge technology and modern practices." },
                { title: "Trust", desc: "30 years of transparent global partnerships." },
              ].map((v) => (
                <div key={v.title} className="rounded-xl bg-white border border-gray-100 shadow-sm p-4">
                  <p className="text-sm font-bold text-sky-700">{v.title}</p>
                  <p className="mt-1 text-xs text-gray-500 leading-snug">{v.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Vision & Mission */}
          <div className="flex flex-col gap-6">
            <motion.div {...fadeUp(0.1)} className="rounded-2xl bg-gradient-to-br from-sky-600 to-cyan-500 text-white p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold">Our Vision</h3>
              </div>
              <p className="text-white/90 leading-relaxed text-sm">
                To become the industry leader in vehicle selling and conversion, delivering high-quality vehicles that meet the evolving needs of customers worldwide.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.2)} className="rounded-2xl bg-white border border-gray-100 shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center">
                  <Target className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Our Mission</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "Deliver exceptional quality while providing value for money.",
                  "Constantly strive to meet the changing needs of our customers.",
                  "Foster employee teamwork, integrity and excellence.",
                  "Exceed customer expectations and maintain loyalty for a lifetime.",
                ].map((m, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    {m}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BUSINESS VERTICALS ── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-600">What We Do</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">Our Business Verticals</h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto text-sm">A diversified conglomerate operating across 10+ industries on a global scale.</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {verticals.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div key={v.label} {...fadeUp(i * 0.05)}
                  className="group rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 p-5 flex flex-col items-center text-center gap-3 cursor-default"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${v.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-xs font-semibold text-gray-700 leading-snug">{v.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <motion.div {...fadeUp(0)} className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-600">The People Behind MGC</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">Our Leadership</h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto text-sm">Visionary leaders steering MGC's global growth with integrity and dedication.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              img: per1,
              name: "Mr. Roshan Awantha",
              role: "Chairman",
              color: "from-sky-600 to-cyan-500",
              pos: "object-top",
              bio: "With over 30 years of leadership in the automotive industry, Roshan Awantha has steered MGC toward global recognition through dedication to quality, integrity, and innovation.",
            },
            {
              img: per2,
              name: "Mrs. Sunethra Thennakoon",
              role: "Director",
              color: "from-emerald-500 to-teal-500",
              pos: "50% 20%",
              bio: "Sunethra Thennakoon brings operational excellence and a people-first approach, fostering long-term growth and a culture of continuous improvement across all group entities.",
            },
          ].map((p, i) => (
            <motion.div key={p.name} {...fadeUp(i * 0.15)}
              className="group rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ objectPosition: p.pos }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-xl font-extrabold text-white">{p.name}</h3>
                  <span className={`inline-block mt-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${p.color} text-white text-xs font-bold shadow`}>
                    {p.role}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className={`w-10 h-1 rounded-full bg-gradient-to-r ${p.color} mb-4`} />
                <p className="text-gray-600 text-sm leading-relaxed">{p.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
};

export default AboutUs;
