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

  useEffect(() => { checkScroll(); }, []);

  const scrollDown = () => {
    listRef.current?.scrollBy({ top: 80, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <ul ref={listRef} onScroll={checkScroll}
        className="space-y-1.5 max-h-44 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {branches.map((b, i) => (
          <li key={i} className="flex items-start gap-1.5 text-gray-400 hover:text-white transition-colors">
            <MapPin className="w-3 h-3 mt-0.5 shrink-0 text-cyan-500" />
            <span className="text-xs leading-snug">{b}</span>
          </li>
        ))}
      </ul>
      {canScrollDown && (
        <button onClick={scrollDown}
          className="mt-2 w-full flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors cursor-pointer text-white text-xs font-semibold"
        >
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" /> More
        </button>
      )}
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
    <footer className="relative bg-gray-950 text-gray-400 overflow-hidden">
      <div className="h-1 w-full bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-500" />

      <div className="max-w-[1200px] mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

          {/* COMPANY + CONTACT */}
          <div className="sm:col-span-2 xl:col-span-1">
            <h2 className="text-base font-extrabold text-white tracking-tight leading-tight">
              MODEL GROUP OF
              <span className="block bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">COMPANIES</span>
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-gray-500">
              Est. 1995 · 100% Sri Lankan-owned · Operating across 12+ countries in vehicles, finance, casino, steel, liquor & more.
            </p>
            <a href="mailto:model@modelgroupof.com"
              className="mt-3 inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
            >
              <Mail className="w-3.5 h-3.5" /> model@modelgroupof.com
            </a>
            <div className="mt-4">
              <p className="text-xs font-bold text-white uppercase tracking-widest mb-2 flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-500" /> Call Us
              </p>
              <ul className="space-y-1">
                {contacts.map((c, i) => (
                  <li key={i} className="flex items-center justify-between gap-2 group">
                    <span className="text-xs text-gray-500 w-16 shrink-0">{c.country}</span>
                    <a href={`tel:${c.number.replace(/\s/g, "")}`}
                      className="text-xs text-gray-300 group-hover:text-cyan-400 transition-colors font-mono"
                    >{c.number}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-gradient-to-r from-sky-500 to-cyan-400 rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => { navigate(link.path); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group cursor-pointer"
                  >
                    <ArrowRight className="w-3 h-3 text-cyan-500 -translate-x-1 group-hover:translate-x-0 transition-transform duration-200" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-xs font-bold text-white uppercase tracking-widest mb-1 flex items-center gap-2">
                <span className="w-5 h-0.5 bg-gradient-to-r from-sky-500 to-cyan-400 rounded-full" /> Bank Details
              </p>
              <a href="mailto:model@modelgroupof.com"
                className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Request via email →
              </a>
            </div>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {["Dubai","UK","Japan","Canada","Kenya","USA","Germany","Australia"].map((c) => (
                <span key={c} className="inline-flex items-center gap-1 rounded-full border border-gray-700 bg-gray-800/60 px-2 py-0.5 text-xs text-gray-400">
                  <Globe className="w-2.5 h-2.5 text-cyan-500" />{c}
                </span>
              ))}
            </div>
          </div>

          {/* BRANCHES */}
          <div className="xl:col-span-2">
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-gradient-to-r from-sky-500 to-cyan-400 rounded-full" />
              Our Global Branches
            </h3>
            <BranchesList branches={branches} />
          </div>

        </div>

        <div className="mt-8 pt-5 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600">
          <p>Copyright © 1995 – 2025 · <span className="text-gray-400 font-semibold">Model Group Of Companies</span> · All Rights Reserved.</p>
          <p>Design & Development by <span className="text-cyan-400 cursor-pointer hover:text-cyan-300 transition-colors font-medium">Jaan Network</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
