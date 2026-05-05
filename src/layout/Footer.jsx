import React, { useRef, useState, useEffect } from "react";
import { Mail, Phone, ChevronDown, MapPin, Globe, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BranchesList = ({ branches }) => {
  const listRef = useRef(null);
  const [canScrollDown, setCanScrollDown] = useState(false);

  const checkScroll = () => {
    const el = listRef.current;
    if (!el) return;
    setCanScrollDown(el.scrollTop + el.clientHeight < el.scrollHeight - 4);
  };

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    checkScroll();

    const resizeObserver = new ResizeObserver(() => {
      checkScroll();
    });

    resizeObserver.observe(el);
    window.addEventListener("resize", checkScroll);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", checkScroll);
    };
  }, [branches]);

  const scrollDown = () => {
    const el = listRef.current;
    if (!el) return;
    el.scrollBy({ top: Math.max(80, el.clientHeight * 0.45), behavior: "smooth" });
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-lg shadow-black/20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-linear-to-b from-cyan-400/12 to-transparent" />
      <ul
        ref={listRef}
        onScroll={checkScroll}
        className="max-h-60 space-y-2 overflow-y-auto px-4 py-4 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {branches.map((b, i) => (
          <li
            key={i}
            className="group flex items-start gap-2 rounded-2xl border border-white/5 bg-white/5 px-3 py-2.5 text-gray-400 transition-colors hover:border-cyan-400/20 hover:bg-white/8 hover:text-white"
          >
            <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 ring-1 ring-cyan-400/20">
              <MapPin className="h-3 w-3 text-cyan-400" />
            </span>
            <span className="text-xs leading-snug">{b}</span>
          </li>
        ))}
      </ul>
      <div className="min-h-[58px] border-t border-white/5 bg-slate-950/90 p-3">
        <button
          onClick={scrollDown}
          disabled={!canScrollDown}
          className={`flex w-full items-center justify-center gap-1.5 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 py-2 text-xs font-semibold text-cyan-100 transition-colors cursor-pointer ${canScrollDown ? "hover:bg-cyan-400/15" : "pointer-events-none opacity-0"}`}
          aria-hidden={!canScrollDown}
        >
          <ChevronDown className="h-3.5 w-3.5 animate-bounce" /> More
        </button>
      </div>
    </div>
  );
};

const Footer = () => {
  const navigate = useNavigate();

  const contacts = [
    { country: "Sri Lanka", number: "+94 77 3 61 90 94" },
    { country: "UK", number: "+44 73 62 01 84 94" },
    { country: "USA", number: "+1 51 67 48 88 94" },
    { country: "Australia", number: "+61 480 822 394" },
    { country: "Kenya", number: "+94 77 3 61 90 94" },
    { country: "Germany", number: "+94 77 3 61 90 94" },
    { country: "Spain", number: "+94 77 3 61 90 94" },
    { country: "Canada", number: "+1 22 66 39 57 94" },
    { country: "Dubai", number: "+97 15 05 61 90 94" },
    { country: "Japan", number: "+94 77 3 61 90 94" },
    { country: "Brazil", number: "+94 77 3 61 90 94" },
    { country: "Finland", number: "+94 77 3 61 90 94" },
    { country: "Ireland", number: "+94 77 3 61 90 94" },
    { country: "Austria", number: "+43 72 0 77 51 94" },
  ];

  const branches = [
    "MODEL GROUP OF COMPANIES (PVT) LTD, SRI LANKA",
    "MODEL GROUP OF COMPANIES LTD , UK",
    "MODEL GROUP OF COMPANIES LLC, USA",
    "MODEL GROUP OF COMPANIES LLC, CANADA",
    "MODEL GROUP FINANCE UK , USA",
    "MG GROUP NGO UK , USA",
    "MGC CASINO UK , USA",
    "MODEL USED AUTOMOBILE TRADING FOR EXPORT L.L.C , DUBAI",
    "MODEL GROUP INTERNATIONAL (PVT) LTD , SRI LANKA",
    "MODEL GROUP COMPANIES LLC, FINLAND",
    "MODEL GROUP COMPANIES LLC, SPAIN",
    "MODEL GROUP COMPANIES LLC, MIDDLE EAST",
    "MODEL GROUP COMPANIES PVT, AUSTRALIA",
    "MODEL GROUP COMPANIES LLC, GERMANY",
    "MODEL GROUP COMPANIES LTD, KENYA",
    "MODEL GROUP KOKSAI, JAPAN",
  ];

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Contact Us", path: "/contact" },
    { label: "Privacy Policy", path: "/privacy" },
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-gray-400">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_34%),radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_28%),linear-gradient(to_bottom,rgba(15,23,42,0.1),rgba(2,6,23,0.7))]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/60 to-transparent" />

      <div className="relative  max-w-[2500px] px-5 py-6 lg:px-6 lg:py-8">
        <div className="mb-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/10">
          <div className="grid gap-3 px-4 py-4 md:grid-cols-[1fr_auto] md:items-center md:px-5 md:py-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300/80">Corporate Network</p>
              <h2 className="mt-1.5 text-lg font-extrabold leading-tight tracking-tight text-white sm:text-xl">
                MODEL GROUP OF
                <span className="block bg-linear-to-r from-sky-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">COMPANIES</span>
              </h2>
              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-gray-400">
                Est. 1995 · 100% Sri Lankan-owned · Operating across 12+ countries in vehicles, finance, casino, steel, liquor & more.
              </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-2 md:justify-self-end md:text-right">
              <a
                href="mailto:model@modelgroupof.com"
                className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-xs font-medium text-cyan-200 transition-colors hover:bg-cyan-400/15"
              >
                <Mail className="h-3.5 w-3.5" />
                model@modelgroupof.com
              </a>
              <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/70 px-3 py-2 text-xs text-gray-300">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(74,222,128,0.6)]" />
                Established Presence
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-[0.95fr_1.05fr]">
          <section className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 shadow-lg shadow-black/10">
            <h2 className="text-lg font-extrabold leading-tight tracking-tight text-white sm:text-xl">
              MODEL GROUP OF
              <span className="block bg-linear-to-r from-sky-300 to-cyan-300 bg-clip-text text-transparent">COMPANIES</span>
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              Est. 1995 · 100% Sri Lankan-owned · Operating across 12+ countries in vehicles, finance, casino, steel, liquor & more.
            </p>
            <a href="mailto:model@modelgroupof.com" className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-colors hover:text-cyan-200">
              <Mail className="h-4 w-4" /> model@modelgroupof.com
            </a>
            <div className="mt-4 rounded-xl border border-white/5 bg-white/5 p-3">
              <p className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white">
                <Phone className="h-3.5 w-3.5 text-cyan-400" /> Call Us
              </p>
              <ul className="space-y-1.5">
                {contacts.map((c, i) => (
                  <li key={i} className="flex items-center justify-between gap-3 rounded-xl border border-white/5 bg-slate-950/50 px-3 py-1.5">
                    <span className="text-xs uppercase tracking-wide text-gray-500">{c.country}</span>
                    <a href={`tel:${c.number.replace(/\s/g, "")}`} className="text-xs font-mono text-gray-200 transition-colors hover:text-cyan-300">
                      {c.number}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <div className="grid gap-3">
            <section className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 shadow-lg shadow-black/10">
              <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-white">
                <span className="h-0.5 w-5 rounded-full bg-linear-to-r from-sky-400 to-cyan-300" />
                Quick Links
              </h3>
              <ul className="mt-3 space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => { navigate(link.path); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                      className="group flex w-full items-center gap-2 rounded-lg border border-white/5 bg-white/5 px-3 py-2.5 text-left text-sm text-gray-300 transition-colors hover:border-cyan-400/20 hover:bg-cyan-400/10 hover:text-white cursor-pointer"
                    >
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-cyan-400 transition-transform duration-200 group-hover:translate-x-0.5" />
                      <span>{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-4 rounded-xl border border-white/5 bg-slate-950/70 p-3">
                <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white">
                  <span className="h-0.5 w-5 rounded-full bg-linear-to-r from-sky-400 to-cyan-300" />
                  Bank Details
                </p>
                <a href="mailto:model@modelgroupof.com" className="mt-2 inline-flex text-xs text-cyan-300 transition-colors hover:text-cyan-200">
                  Request via email →
                </a>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {["Dubai", "UK", "Japan", "Canada", "Kenya", "USA", "Germany", "Australia"].map((c) => (
                  <span key={c} className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-gray-400">
                    <Globe className="h-2.5 w-2.5 text-cyan-400" />{c}
                  </span>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 shadow-lg shadow-black/10">
              <div className="flex items-center justify-between gap-3">
                <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-white">
                  <span className="h-0.5 w-5 rounded-full bg-linear-to-r from-sky-400 to-cyan-300" />
                  Our Global Branches
                </h3>
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-200">
                  Scroll
                </span>
              </div>
              <div className="mt-3">
                <BranchesList branches={branches} />
              </div>
            </section>
          </div>
        </div>

        <div className="mt-5 border-t border-white/10 pt-3">
          <div className="flex flex-col gap-2 text-[11px] text-gray-500 sm:flex-row sm:items-center sm:justify-between">
            <p>Copyright © 1995 – 2025 · <span className="text-gray-300 font-semibold">Model Group Of Companies</span> · All Rights Reserved.</p>
            <p>Design & Development by <span className="cursor-pointer font-medium text-cyan-300 transition-colors hover:text-cyan-200">Jaan Network</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
