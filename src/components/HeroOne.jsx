import React, { useState, useEffect } from "react";

import HeaderTwo from "../layout/HeaderTwo";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import bank from "../assets/carousel/bank.jpg";
import bank2 from "../assets/carousel/bank2.jpg";
import bank4 from "../assets/carousel/bank4.jpg";
import bank5 from "../assets/carousel/bank5.jpg";

import bank6 from "../assets/carousel/bank6.jpg";
import bank7 from "../assets/carousel/bank7.jpg";
import bank8 from "../assets/carousel/bank8.jpg";
import bank9 from "../assets/carousel/bank9.jpg";
// import bank10 from "../assets/carousel/bank10.jpg";
import bank11 from "../assets/carousel/bank11.jpg";
import bank12 from "../assets/carousel/bank12.jpg";

import bank13 from "../assets/carousel/bank13.jpg";
import bank14 from "../assets/carousel/bank14.jpg";
import bank15 from "../assets/carousel/bank15.jpg";
import bank16 from "../assets/carousel/bank16.jpg";
import bank17 from "../assets/carousel/bank17.jpg";
// import bank18 from "../assets/carousel/bank18.jpg";
// import bank19 from "../assets/carousel/bank19.jpg";
import bank20 from "../assets/carousel/bank20.jpg";
import bank21 from "../assets/carousel/bank21.jpg";
import bank22 from "../assets/carousel/bank22.jpg";
import bank23 from "../assets/carousel/bank23.jpg";
import bank24 from "../assets/carousel/bank24.jpg";
import bank25 from "../assets/carousel/bank25.jpg";
import bank26 from "../assets/carousel/bank26.jpg";
import bank27 from "../assets/carousel/bank27.jpg";
import bank28 from "../assets/carousel/bank28.jpg";
import bank29 from "../assets/carousel/bank29.jpg";
import bank30 from "../assets/carousel/bank30.jpg";
import bank31 from "../assets/carousel/bank31.jpg";
import bank32 from "../assets/carousel/bank32.jpg";
import bank33 from "../assets/carousel/bank33.jpg";
import bank34 from "../assets/carousel/bank34.jpg";
import bank35 from "../assets/carousel/bank35.jpg";

import ngo from "../assets/carousel/ngo.jpg";
import vehicle from "../assets/carousel/vehicle.jpg";
import casino from "../assets/carousel/casino.jpg";

import lottery from "../assets/carousel/lottery.jpg";
import lottery2 from "../assets/carousel/lottery2.jpg";
import lottery3 from "../assets/carousel/lottery3.jpeg";
// import lottery4 from "../assets/carousel/lottery4.jpg";
import lottery5 from "../assets/carousel/lottery5.jpg";
import lottery6 from "../assets/carousel/lottery6.jpg";

import tobacco from "../assets/carousel/tobacco.jpg";
import ngo2 from "../assets/carousel/ngo2.jpg";
import ngo3 from "../assets/carousel/ngo3.jpg";
import unicef from "../assets/carousel/unicef.jpg";
import jp from "../assets/carousel/jp.jpg";

import stripe from "../assets/carousel/stripe.jpg";
import swiss from "../assets/carousel/swiss.jpg";
import casino2 from "../assets/carousel/casino2.jpg";

const slides = [
  {
    title: "BARCLAYS FINANCE LIMITED",
    description:
      "A leading global finance and investment company specializing in personal loans, corporate banking, and asset management.",
    image: bank,
    alt: "BARCLAYS FINANCE LIMITED",
    link: "https://modelgroupof.com/",
  },
  {
    title: "USA FINANCE LLP",
    description:
      "A reputable American financial services firm providing investment solutions, wealth management, and lending services to individuals and businesses.",
    image: bank2,
    alt: "USA FINANCE LLP",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MGC CASINO LIMITED",
    description:
      "An international entertainment company offering luxury casino experiences and online gaming services worldwide.",
    image: casino,
    alt: "MGC CASINO LIMITED",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MODEL GROUP FINANCE LIMITED",
    description:
      "A diversified financial institution delivering tailored banking, investment, and insurance products to a global clientele.",
    image: bank4,
    alt: "MODEL GROUP FINANCE LIMITED",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MG GROUP NGO",
    description:
      "A non-profit organization dedicated to education, health, and community development initiatives across developing regions.",
    image: ngo,
    alt: "MG GROUP NGO",
    link: "https://www.mgcgroupngo.com/",
  },
  {
    title: "MODEL GROUP OF COMPANIES LTD",
    description:
      "A multinational conglomerate with interests in finance, real estate, energy, and technology sectors.",
    image: bank5,
    alt: "MODEL GROUP OF COMPANIES LTD",
    link: "https://modelgroupof.com/",
  },
  {
    title: "ABU DHABI BIG TIKAT",
    description:
      "A premier ticketing and event management company providing access to global entertainment and sports events.",
    image: lottery6,
    alt: "ABU DHABI BIG TIKAT",
    link: "https://modelgroupof.com/",
  },
  {
    title: "BARCLAYS GROUP OF COMPANIES LTD",
    description:
      "A diversified group offering banking, insurance, and investment solutions with a global reach.",
    image: bank6,
    alt: "BARCLAYS GROUP OF COMPANIES LTD",
    link: "https://modelgroupof.com/",
  },
  {
    title: "CANADIN FINANCE",
    description:
      "A Canadian-based financial services provider known for innovative banking, credit, and mortgage solutions.",
    image: bank7,
    alt: "CANADIN FINANCE",
    link: "https://modelgroupof.com/",
  },
  {
    title: "CASINO UK",
    description:
      "A top-tier casino brand in the United Kingdom, delivering premium in-person and online gaming experiences.",
    image: casino2,
    alt: "CASINO UK",
    link: "https://modelgroupof.com/",
  },
  {
    title: "CHASE FINANCE LLP",
    description:
      "A trusted financial partner offering a wide range of banking, lending, and investment services for individuals and enterprises.",
    image: bank8,
    alt: "CHASE FINANCE LLP",
    link: "https://modelgroupof.com/",
  },
  {
    title: "CITI FINANCE LIMITED",
    description:
      "A global financial powerhouse delivering commercial banking, consumer finance, and capital market solutions.",
    image: bank9,
    alt: "CITI FINANCE LIMITED",
    link: "https://modelgroupof.com/",
  },
  {
    title: "DUBAI BIG TIKAT",
    description:
      "A leading ticketing agency in Dubai, specializing in concerts, sports, and exclusive entertainment events.",
    image: lottery3,
    alt: "DUBAI BIG TIKAT",
    link: "https://modelgroupof.com/",
  },
  {
    title: "DUTCH FINANCE",
    description:
      "A Netherlands-based finance company known for transparent banking, investment, and international remittance services.",
    image: bank21,
    alt: "DUTCH FINANCE",
    link: "https://modelgroupof.com/",
  },
  {
    title: "JP MORGAN FINANCE",
    description:
      "A world-renowned provider of investment banking, asset management, and financial advisory services.",
    image: jp,
    alt: "JP MORGAN FINANCE",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MGC BIG TIKAT",
    description:
      "A global lottery and ticketing company offering high-value draws and instant-win opportunities.",
    image: lottery2,
    alt: "MGC BIG TIKAT",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MGC U WIN LOTTERY LIMITED",
    description:
      "A leading lottery operator providing secure, transparent, and exciting lottery experiences for participants worldwide.",
    image: lottery,
    alt: "MGC U WIN LOTTERY LIMITED",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MODEL GROUP OF COMPANIES",
    description:
      "An international business group with interests spanning finance, manufacturing, real estate, and technology.",
    image: bank11,
    alt: "MODEL GROUP OF COMPANIES",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MODEL GROUP OF COMPANIES LIMITED",
    description:
      "A global holding company managing investments and operations across multiple industries and regions.",
    image: bank12,
    alt: "MODEL GROUP OF COMPANIES LIMITED",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MODEL GROUP U WIN LOTTERY LIMITED",
    description:
      "A trusted lottery brand offering innovative games and life-changing prizes to customers worldwide.",
    image: lottery5,
    alt: "MODEL GROUP U WIN LOTTERY LIMITED",
    link: "https://modelgroupof.com/",
  },
  {
    title: "OCBC FINANCE LTD",
    description:
      "A well-established financial institution providing comprehensive banking, wealth management, and investment services.",
    image: bank13,
    alt: "OCBC FINANCE LTD",
    link: "https://modelgroupof.com/",
  },
  {
    title: "PAYPAL FINANCE LLP",
    description:
      "A global digital payments leader enabling secure, fast, and convenient financial transactions for businesses and consumers.",
    image: bank14,
    alt: "PAYPAL FINANCE LLP",
    link: "https://modelgroupof.com/",
  },
  {
    title: "S L TOBACCO",
    description:
      "A major producer and distributor of premium tobacco products with a commitment to quality and compliance.",
    image: tobacco,
    alt: "S L TOBACCO",
    link: "https://modelgroupof.com/",
  },
  {
    title: "STANDARD CHARTERED FINANCE LLP",
    description:
      "An international bank offering personal, commercial, and investment banking services across emerging markets.",
    image: bank15,
    alt: "STANDARD CHARTERED FINANCE LLP",
    link: "https://modelgroupof.com/",
  },
  {
    title: "STARLING FINANCE LLP",
    description:
      "A digital-first bank providing innovative mobile banking, payment, and lending solutions for modern consumers.",
    image: bank16,
    alt: "STARLING FINANCE LLP",
    link: "https://modelgroupof.com/",
  },
  {
    title: "STRIPE FINANCE LIMITED",
    description:
      "A technology-driven finance company delivering seamless payment processing and financial infrastructure for businesses.",
    image: stripe,
    alt: "STRIPE FINANCE LIMITED",
    link: "https://modelgroupof.com/",
  },
  {
    title: "SWISS FINANCE LTD",
    description:
      "A Swiss-based financial institution renowned for private banking, wealth management, and investment advisory services.",
    image: swiss,
    alt: "SWISS FINANCE LTD",
    link: "https://modelgroupof.com/",
  },
  {
    title: "UNICEF NGO LIMITED",
    description:
      "A humanitarian organization focused on improving the lives of children and families through education, health, and emergency relief.",
    image: unicef,
    alt: "UNICEF NGO LIMITED",
    link: "https://modelgroupof.com/",
  },
  {
    title: "UNITED NATIONS NGO LTD",
    description:
      "A global non-governmental organization working to promote peace, human rights, and sustainable development worldwide.",
    image: ngo2,
    alt: "UNITED NATIONS NGO LTD",
    link: "https://modelgroupof.com/",
  },
  {
    title: "WELLS FARGO FINANCE LIMITED",
    description:
      "A leading provider of banking, mortgage, and financial services with a strong presence across international markets.",
    image: bank17,
    alt: "WELLS FARGO FINANCE LIMITED",
    link: "https://modelgroupof.com/",
  },
  {
    title: "WISEBANK & FINANCE LIMITED",
    description:
      "A modern financial institution offering smart banking, digital wallets, and innovative lending products.",
    image: bank20,
    alt: "WISEBANK & FINANCE LIMITED",
    link: "https://modelgroupof.com/",
  },
  {
    title: "WORLD VISION NGO LTD",
    description:
      "A global humanitarian organization committed to tackling poverty and injustice by empowering children and communities.",
    image: ngo3,
    alt: "WORLD VISION NGO LTD",
    link: "https://modelgroupof.com/",
  },
  {
    title: "BANK USA",
    description:
      "A U.S.-based commercial bank providing retail, corporate, and international banking solutions.",
    image: bank22,
    alt: "BANK USA",
    link: "https://modelgroupof.com/",
  },
  {
    title: "WISE BANK UK",
    description:
      "A UK-headquartered digital-first bank offering cross-border payments, remittances, and smart finance products.",
    image: bank23,
    alt: "WISE BANK UK",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MGC CASINO USA",
    description:
      "The U.S. arm of MGC’s entertainment and gaming brand, offering premium casino and online experiences.",
    image: casino2,
    alt: "MGC CASINO USA",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MG GROUP NGO UK , USA",
    description:
      "International NGO chapters in the UK and USA focused on health, education, and community upliftment.",
    image: ngo2,
    alt: "MG GROUP NGO UK , USA",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MODEL GROUP FINANCE UK , USA",
    description:
      "Regional finance operations serving UK and U.S. clients with lending, treasury, and investment products.",
    image: bank24,
    alt: "MODEL GROUP FINANCE UK , USA",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MODEL GROUP INTERNATIONAL (PVT) LTD , SRI LANKA",
    description:
      "Sri Lankan private limited entity managing Model Group’s South Asian investments and project portfolios.",
    image: bank31,
    alt: "MODEL GROUP INTERNATIONAL (PVT) LTD , SRI LANKA",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MODEL GROUP OF COMPANIES LLC, USA",
    description:
      "U.S.-registered holding for the Model Group overseeing finance, real estate, and trading ventures.",
    image: bank25,
    alt: "MODEL GROUP OF COMPANIES LLC, USA",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MODEL GROUP OF COMPANIES LLC, CANADA",
    description:
      "Canadian subsidiary coordinating North American operations, compliance, and financial services.",
    image: bank26,
    alt: "MODEL GROUP OF COMPANIES LLC, CANADA",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MODEL GROUP OF COMPANIES LTD , UK",
    description:
      "UK-registered limited company facilitating European investments, banking, and technology projects.",
    image: bank27,
    alt: "MODEL GROUP OF COMPANIES LTD , UK",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MODEL USED AUTOMOBILE TRADING FOR EXPORT L.L.C , DUBAI",
    description:
      "Dubai-based trading arm specializing in sourcing and exporting used automobiles to global markets.",
    image: vehicle,
    alt: "MODEL USED AUTOMOBILE TRADING FOR EXPORT L.L.C , DUBAI",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MODEL GROUP COMPANIES LLC,GERMANY",
    description:
      "German-registered entity overseeing EU-focused finance, logistics, and industrial partnerships.",
    image: bank29,
    alt: "MODEL GROUP COMPANIES LLC,GERMANY",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MODEL GROUP COMPANIES PVT,AUSTRALIA",
    description:
      "Australian private company handling regional investment, property, and trade operations.",
    image: bank30,
    alt: "MODEL GROUP COMPANIES PVT,AUSTRALIA",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MODEL GROUP COMPANIES LLC, FINLAND",
    description:
      "Nordic branch focused on sustainable finance, green energy projects, and tech-sector collaborations.",
    image: bank28,
    alt: "MODEL GROUP COMPANIES LLC, FINLAND",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MODEL GROUP COMPANIES LLC,SPAIN",
    description:
      "Spanish subsidiary supporting EU and Mediterranean business development and hospitality ventures.",
    image: bank32,
    alt: "MODEL GROUP COMPANIES LLC,SPAIN",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MODEL GROUP COMPANIES LLC,MIDDLE EAST",
    description:
      "Regional coordination office for Middle East investments, infrastructure, and public-private partnerships.",
    image: bank33,
    alt: "MODEL GROUP COMPANIES LLC,MIDDLE EAST",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MODEL GROUP COMPANIES LTD,KENYA",
    description:
      "East African subsidiary driving finance, agriculture, and community development projects in Kenya.",
    image: bank34,
    alt: "MODEL GROUP COMPANIES LTD,KENYA",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MODEL GROUP KOKSAI,JAPAN",
    description:
      "Japan-based international business arm (KOKSAI) enabling trade, technology exchange, and financial services.",
    image: bank35,
    alt: "MODEL GROUP KOKSAI,JAPAN",
    link: "https://modelgroupof.com/",
  },
];

const AUTO_INTERVAL_MS = 2800; // auto move every 2.8s (faster progress bar and slide advance)

const HeroOne = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTO_INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const goTo = (i) => setIndex(i % slides.length);

  const slide = slides[index];

  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      aria-roledescription="carousel"
      aria-label="Company highlights carousel"
    >
      <HeaderTwo />

      {/* Background Image */}
      <motion.div
        key={slide.image}
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={slide.image}
          alt={slide.alt}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full px-6 md:px-12">
        <div className="max-w-4xl text-center text-white">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Featured Company
            </div>
            <h1 className="text-3xl md:text-5xl font-black leading-tight">
              {slide.title}
            </h1>
            <p className="text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              {slide.description}
            </p>
            <div className="flex flex-col text-sm sm:flex-row items-center justify-center gap-4 mt-8">
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-2">
        {slides.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-1 h-1 rounded-full transition-all ${
              index === i
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <motion.button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </motion.button>
      <motion.button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </motion.button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <motion.div
          key={index}
          className="h-full bg-white"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: AUTO_INTERVAL_MS / 1000, ease: "linear" }}
        />
      </div>
    </section>
  );
};

export default HeroOne;
