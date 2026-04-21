import React, { useMemo, useState } from "react";
import {
  Building2,
  Globe,
  MapPin,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  Search,
  X,
} from "lucide-react";
import mgcNgoIcon from "../assets/card/logo.jpg";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import bgImage from "../assets/card/bg.png";

import bank from "../assets/carousel/bank.jpg";
import bank2 from "../assets/carousel/bank2.jpg";
import bank4 from "../assets/carousel/bank4.jpg";
import bank5 from "../assets/carousel/bank5.jpg";
import bank6 from "../assets/carousel/bank6.jpg";
import bank7 from "../assets/carousel/bank7.jpg";
import bank8 from "../assets/carousel/bank8.jpg";
import bank9 from "../assets/carousel/bank9.jpg";
import bank11 from "../assets/carousel/bank11.jpg";
import bank12 from "../assets/carousel/bank12.jpg";
import bank13 from "../assets/carousel/bank13.jpg";
import bank14 from "../assets/carousel/bank14.jpg";
import bank15 from "../assets/carousel/bank15.jpg";
import bank16 from "../assets/carousel/bank16.jpg";
import bank17 from "../assets/carousel/bank17.jpg";
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
import kids from "../assets/carousel/kids.jpg";
import vehicle from "../assets/carousel/vehicle.jpg";
import casino from "../assets/carousel/casino.jpg";

import lottery from "../assets/carousel/lottery.jpg";
import lottery2 from "../assets/carousel/lottery2.jpg";
import lottery3 from "../assets/carousel/lottery3.jpeg";
import lottery5 from "../assets/carousel/lottery5.jpg";
import lottery6 from "../assets/carousel/lottery6.jpg";

import tobacco from "../assets/carousel/tobacco.jpg";
import ngo2 from "../assets/carousel/ngo2.jpg";
import ngo3 from "../assets/carousel/ngo3.jpg";
import ngo4 from "../assets/carousel/ngo4.jpg";

import unicef from "../assets/carousel/unicef.jpg";
import jp from "../assets/carousel/jp.jpg";

import stripe from "../assets/carousel/stripe.jpg";
import swiss from "../assets/carousel/swiss.jpg";
import casino2 from "../assets/carousel/casino2.jpg";
import casino3 from "../assets/carousel/casino3.jpg";


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
    title: "MGC GROUP NGO",
    description:
      "A non-profit organization dedicated to education, health, and community development initiatives across developing regions.",
    image: ngo,
    alt: "MGC GROUP NGO",
    link: "https://www.mgcgroupngo.com/",
  },
  {
    title: "MG GROUP NGO",
    description:
      "International NGO initiatives focused on education, healthcare, and social upliftment programs across regions.",
    image: ngo2,
    alt: "MG GROUP NGO",
    link: "https://modelgroupof.com/",
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
    image: kids,
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
    image: casino3,
    alt: "MGC CASINO USA",
    link: "https://modelgroupof.com/",
  },
  {
    title: "MG GROUP NGO UK , USA",
    description:
      "International NGO chapters in the UK and USA focused on health, education, and community upliftment.",
    image: ngo4,
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

const imageMap = slides.reduce((acc, slide) => {
  acc[slide.title] = slide.image;
  return acc;
}, {});

const Hero = () => {
  // --- DATA ---------------------------------------------------------------
  const companies = useMemo(
    () => {
      const base = [
        {
          name: "MGC GROUP NGO",
          website: "https://www.mgcgroupngo.com/",
          description:
            "Non‑profit initiatives focused on education, health, and community development through targeted social programs.",
        },
        {
          name: "BARCLAYS FINANCE LIMITED",
          website: "https://modelgroupof.com/",
          description:
            "Fixed deposits, lending, and secure financial solutions with flexible tenures and competitive returns.",
        },
        {
          name: "USA FINANCE LLP",
          website: "https://modelgroupof.com/",
          description:
            "Financial services for individuals and businesses, offering deposits, credit, and tailored advisory.",
        },
        {
          name: "MGC CASINO LIMITED",
          website: "https://modelgroupof.com/",
          description:
            "Premium entertainment and responsible gaming experiences across multiple venues.",
        },
        {
          name: "MODEL GROUP FINANCE LIMITED",
          website: "https://modelgroupof.com/",
          description:
            "Stable returns and financing solutions including deposits and loan facilities for diverse needs.",
        },
        {
          name: "MODEL GROUP OF COMPANIES LTD",
          website: "https://modelgroupof.com/",
          description:
            "Diversified group with interests across mobility, finance, and international trade.",
        },
        {
          name: "ABU DHABI BIG TIKAT",
          website: "https://modelgroupof.com/",
          description:
            "Raffle and prize draw platform focused on transparent, responsible participation.",
        },
        {
          name: "BARCLAYS GROUP OF COMPANIES LTD",
          website: "https://modelgroupof.com/",
          description:
            "Multi‑sector holding company with finance and services operations.",
        },
        {
          name: "CANADIN FINANCE",
          website: "https://modelgroupof.com/",
          description:
            "Savings, deposits, and lending services with customer‑centric policies.",
        },
        {
          name: "CASINO UK",
          website: "https://modelgroupof.com/",
          description:
            "Curated gaming and entertainment experiences in the UK market.",
        },
        {
          name: "CHASE FINANCE LLP",
          website: "https://modelgroupof.com/",
          description:
            "Financial products spanning deposits, credit lines, and business support.",
        },
        {
          name: "CITI FINANCE LIMITED",
          website: "https://modelgroupof.com/",
          description:
            "Deposit programs with flexible terms and accessible lending facilities.",
        },
        {
          name: "DUBAI BIG TIKAT",
          website: "https://modelgroupof.com/",
          description:
            "Large‑format raffle events offering compliant prize draws and promotions.",
        },
        {
          name: "DUTCH FINANCE",
          website: "https://modelgroupof.com/",
          description:
            "Traditional and digital finance services with an emphasis on security and returns.",
        },
        {
          name: "JP MORGAN FINANCE",
          website: "https://modelgroupof.com/",
          description:
            "Comprehensive financial services for retail and corporate clients.",
        },
        {
          name: "MGC BIG TIKAT",
          website: "https://modelgroupof.com/",
          description: "Prize draw and raffle experiences under the MGC brand.",
        },
        {
          name: "MGC U WIN LOTTERY LIMITED",
          website: "https://modelgroupof.com/",
          description:
            "Lottery and instant‑win experiences operated with a focus on fairness and compliance.",
        },
        {
          name: "MODEL GROUP OF COMPANIES",
          website: "https://modelgroupof.com/",
          description:
            "Global operations spanning exports, procurement, and strategic partnerships.",
        },
        {
          name: "MODEL GROUP OF COMPANIES LIMITED",
          website: "https://modelgroupof.com/",
          description:
            "International corporate group providing mobility, finance, and services.",
        },
        {
          name: "MODEL GROUP U WIN LOTTERY LIMITED",
          website: "https://modelgroupof.com/",
          description:
            "Lottery and sweepstake operations with responsible gaming practices.",
        },
        {
          name: "OCBC FINANCE LTD",
          website: "https://modelgroupof.com/",
          description:
            "Deposit and lending services with flexible tenure and competitive rates.",
        },
        {
          name: "PAYPAL FINANCE LLP",
          website: "https://modelgroupof.com/",
          description:
            "Digital‑first financial services, deposits, and payment solutions.",
        },
        {
          name: "S L TOBACCO",
          website: "https://modelgroupof.com/",
          description:
            "Tobacco products distribution and related trade services.",
        },
        {
          name: "STANDARD CHARTERED FINANCE LLP",
          website: "https://modelgroupof.com/",
          description:
            "Finance solutions including deposits and personal/business lending products.",
        },
        {
          name: "STARLING FINANCE LLP",
          website: "https://modelgroupof.com/",
          description:
            "Retail and SME finance offerings with modern, digital workflows.",
        },
        {
          name: "STRIPE FINANCE LIMITED",
          website: "https://modelgroupof.com/",
          description:
            "Technology‑driven finance services for individuals and merchants.",
        },
        {
          name: "SWISS FINANCE LTD",
          website: "https://modelgroupof.com/",
          description:
            "Private and retail finance services with a focus on stability and privacy.",
        },
        {
          name: "UNICEF NGO LIMITED",
          website: "https://modelgroupof.com/",
          description:
            "Non‑profit initiatives focused on children’s welfare, education, and health programs.",
        },
        {
          name: "UNITED NATIONS NGO LTD",
          website: "https://modelgroupof.com/",
          description:
            "International NGO programs covering development and humanitarian support.",
        },
        {
          name: "WELLS FARGO FINANCE LIMITED",
          website: "https://modelgroupof.com/",
          description:
            "Full‑suite finance services for consumers and enterprises.",
        },
        {
          name: "WISEBANK & FINANCE LIMITED",
          website: "https://modelgroupof.com/",
          description:
            "Banking and finance solutions with modern digital access and secure deposits.",
        },
        {
          name: "WORLD VISION NGO LTD",
          website: "https://modelgroupof.com/",
          description:
            "NGO initiatives delivering community development and disaster response programs.",
        },
      ];
      // List of companies to ensure are present
      const extraCompanies = [
        {
          name: "MG GROUP NGO",
          website: "https://modelgroupof.com/",
          description:
            "International NGO initiatives focused on education, healthcare, and social upliftment programs across regions.",
        },
        {
          name: "BANK USA",
          website: "https://modelgroupof.com/",
          description:
            "U.S.-based banking and finance services for retail, SME, and corporate customers.",
        },
        {
          name: "WISE BANK UK",
          website: "https://modelgroupof.com/",
          description:
            "UK-headquartered smart banking unit providing digital payments, deposits, and remittance services.",
        },
        {
          name: "MGC CASINO USA",
          website: "https://modelgroupof.com/",
          description:
            "U.S. division of MGC’s gaming and entertainment business, offering regulated casino experiences.",
        },
        {
          name: "MG GROUP NGO UK , USA",
          website: "https://modelgroupof.com/",
          description:
            "Cross-border NGO chapters operating in the UK and USA with community and child-welfare programs.",
        },
        {
          name: "MODEL GROUP FINANCE UK , USA",
          website: "https://modelgroupof.com/",
          description:
            "Regional finance operations serving both UK and U.S. markets with lending and investment products.",
        },
        {
          name: "MODEL GROUP INTERNATIONAL (PVT) LTD , SRI LANKA",
          website: "https://modelgroupof.com/",
          description:
            "Sri Lankan private limited entity coordinating Model Group’s South Asian projects and investments.",
        },
        {
          name: "MODEL GROUP OF COMPANIES LLC, USA",
          website: "https://modelgroupof.com/",
          description:
            "U.S.-registered entity overseeing Model Group’s American operations in finance, trade, and services.",
        },
        {
          name: "MODEL GROUP OF COMPANIES LLC, CANADA",
          website: "https://modelgroupof.com/",
          description:
            "Canadian branch for North American compliance, finance, and trading activities.",
        },
        {
          name: "MODEL GROUP OF COMPANIES LTD , UK",
          website: "https://modelgroupof.com/",
          description:
            "UK-registered limited company for European business development, banking, and mobility projects.",
        },
        {
          name: "MODEL USED AUTOMOBILE TRADING FOR EXPORT L.L.C , DUBAI",
          website: "https://modelgroupof.com/",
          description:
            "Dubai-based company specializing in sourcing and exporting used vehicles to global markets.",
        },
        {
          name: "MODEL GROUP COMPANIES LLC,GERMANY",
          website: "https://modelgroupof.com/",
          description:
            "German subsidiary focused on EU logistics, industry partnerships, and financial services.",
        },
        {
          name: "MODEL GROUP COMPANIES PVT,AUSTRALIA",
          website: "https://modelgroupof.com/",
          description:
            "Australia-based private company handling regional investment and trade operations.",
        },
        {
          name: "MODEL GROUP COMPANIES LLC, FINLAND",
          website: "https://modelgroupof.com/",
          description:
            "Nordic office responsible for green finance, technology collaboration, and EU partnerships.",
        },
        {
          name: "MODEL GROUP COMPANIES LLC,SPAIN",
          website: "https://modelgroupof.com/",
          description:
            "Spanish subsidiary supporting Mediterranean business and hospitality ventures.",
        },
        {
          name: "MODEL GROUP COMPANIES LLC,MIDDLE EAST",
          website: "https://modelgroupof.com/",
          description:
            "Regional coordination office for Middle East infrastructure, finance, and public-private projects.",
        },
        {
          name: "MODEL GROUP COMPANIES LTD,KENYA",
          website: "https://modelgroupof.com/",
          description:
            "East African unit working on finance, agriculture, and community development in Kenya.",
        },
        {
          name: "MODEL GROUP KOKSAI,JAPAN",
          website: "https://modelgroupof.com/",
          description:
            "Japan-based international (KOKSAI) arm enabling trade, technology exchange, and financial services.",
        },
      ];
      // Names already present
      const presentNames = new Set(base.map(c => c.name));
      // Only add those not present
      const missing = extraCompanies.filter(c => !presentNames.has(c.name));
      return [...base, ...missing];
    },
    []
  );

  const TYPE_ORDER = useMemo(
    () => ({
      Finance: 0,
      Trading: 1,
      Gaming: 2,
      "Non-Profit": 3,
      Corporation: 4,
    }),
    []
  );

  const getLocation = (full) => {
    if (!full) return "";
    const idx = full.lastIndexOf(",");
    if (idx === -1) return "";
    return full
      .slice(idx + 1)
      .replace(/\s+/g, " ")
      .trim();
  };

  const getCompanyType = (name) => {
    const nameLower = name.toLowerCase();
    if (nameLower.includes("bank") || nameLower.includes("finance"))
      return "Finance";
    if (nameLower.includes("ngo")) return "Non-Profit";
    if (nameLower.includes("casino")) return "Gaming";
    if (nameLower.includes("automobile") || nameLower.includes("trading"))
      return "Trading";
    return "Corporation";
  };

  const sortedCompanies = useMemo(() => {
    return [...companies].sort((a, b) => {
      const ta = getCompanyType(a.name);
      const tb = getCompanyType(b.name);
      const oa = TYPE_ORDER[ta] ?? 999;
      const ob = TYPE_ORDER[tb] ?? 999;
      if (oa !== ob) return oa - ob;
      return a.name.localeCompare(b.name);
    });
  }, [companies, TYPE_ORDER]);

  // --- NEW: UI STATE (search + filters) ----------------------------------
  const [query, setQuery] = useState("");
  const [activeType, setActiveType] = useState("All");
  const [activeLocation, setActiveLocation] = useState("All");

  const ALL_TYPES = [
    "All",
    "Finance",
    "Trading",
    "Gaming",
    "Non-Profit",
    "Corporation",
  ];

  const locations = useMemo(() => {
    const set = new Set(
      sortedCompanies.map((c) => getLocation(c.name) || "Global")
    );
    return ["All", ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, [sortedCompanies]);

  const filteredCompanies = useMemo(() => {
    return sortedCompanies.filter((c) => {
      const loc = getLocation(c.name) || "Global";
      const type = getCompanyType(c.name);
      const matchesType = activeType === "All" || type === activeType;
      const matchesLoc = activeLocation === "All" || loc === activeLocation;
      const matchesQuery = query
        ? c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.description.toLowerCase().includes(query.toLowerCase())
        : true;
      return matchesType && matchesLoc && matchesQuery;
    });
  }, [sortedCompanies, activeType, activeLocation, query]);

  // --- helpers ------------------------------------------------------------
  const getIcon = (type, size = "w-6 h-6", color = "text-white") => {
    switch (type) {
      case "Finance":
        return <Globe className={`${size} ${color}`} />;
      case "Non-Profit":
        return <Sparkles className={`${size} ${color}`} />;
      case "Gaming":
        return <ExternalLink className={`${size} ${color}`} />;
      case "Trading":
        return <ArrowUpRight className={`${size} ${color}`} />;
      default:
        return <Building2 className={`${size} ${color}`} />;
    }
  };

  const getTypeColors = (type) => {
    const colors = {
      Finance: {
        bg: "bg-blue-50",
        text: "text-blue-700",
        border: "border-blue-200",
        gradient: "from-blue-500 via-blue-600 to-cyan-600",
        icon: "bg-blue-500",
        glow: "shadow-blue-500/20",
      },
      "Non-Profit": {
        bg: "bg-emerald-50",
        text: "text-emerald-700",
        border: "border-emerald-200",
        gradient: "from-emerald-500 via-green-600 to-teal-600",
        icon: "bg-emerald-500",
        glow: "shadow-emerald-500/20",
      },
      Gaming: {
        bg: "bg-purple-50",
        text: "text-purple-700",
        border: "border-purple-200",
        gradient: "from-purple-500 via-fuchsia-600 to-pink-600",
        icon: "bg-purple-500",
        glow: "shadow-purple-500/20",
      },
      Trading: {
        bg: "bg-orange-50",
        text: "text-orange-700",
        border: "border-orange-200",
        gradient: "from-orange-500 via-amber-600 to-yellow-600",
        icon: "bg-orange-500",
        glow: "shadow-orange-500/20",
      },
      Corporation: {
        bg: "bg-indigo-50",
        text: "text-indigo-700",
        border: "border-indigo-200",
        gradient: "from-indigo-500 via-purple-600 to-violet-600",
        icon: "bg-indigo-500",
        glow: "shadow-indigo-500/20",
      },
    };
    return colors[type] || colors.Corporation;
  };

  const getDomain = (url = "") => {
    try {
      const u = new URL(url);
      return u.hostname.replace("www.", "");
    } catch {
      return url;
    }
  };

  // Make entire card clickable (open in new tab)
  const onCardClick = (url) => {
    if (!url) return;
    try {
      window.open(url, "_blank", "noopener,noreferrer");
    } catch {
      // fallback: set location if popup blocked
      window.location.href = url;
    }
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <style>
        {`
          @keyframes pulseGlow { 0%,100%{box-shadow:0 0 10px rgba(0,0,0,.06);} 50%{box-shadow:0 0 24px rgba(0,0,0,.12);} }
          .animate-pulse-glow{ animation:pulseGlow 1.6s ease-in-out infinite; }
        `}
      </style>
      <div className="max-w-[1300px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-indigo-500/10 to-purple-500/10 rounded-full">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-medium text-indigo-700">
              Global Presence
            </span>
          </div>
          <h1 className="main-topic-font text-3xl md:text-5xl font-black bg-linear-to-r from-sky-700 via-cyan-700 to-blue-600 bg-clip-text text-transparent leading-tight">
            Our Global Companies
          </h1>
          <p className="mt-2 text-sm md:text-base text-gray-700 font-medium max-w-3xl mx-auto">
            Discover our diverse portfolio of companies spanning across
            continents, delivering excellence worldwide
          </p>
        </motion.div>

        {/* NEW: Toolbar (search + filters) */}
        <div className="mb-10 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                aria-label="Search companies"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name or description..."
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-sm"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-md hover:bg-gray-100"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {ALL_TYPES.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setActiveType(t)}
                  className={`px-3 py-1.5 rounded-full text-sm border transition ${activeType === t
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                    }`}
                  aria-pressed={activeType === t}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <label className="text-sm text-gray-600">Location</label>
            <select
              aria-label="Filter by location"
              value={activeLocation}
              onChange={(e) => setActiveLocation(e.target.value)}
              className="px-3 py-2 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              {locations.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
            <span className="ml-auto text-sm text-gray-500">
              Showing <strong>{filteredCompanies.length}</strong> of{" "}
              {sortedCompanies.length}
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCompanies.map((c) => {
            const location = getLocation(c.name) || "Global";
            const type = getCompanyType(c.name);
            const colors = getTypeColors(type);
            const isNgo = c.name === "MGC GROUP NGO";

            return (
              <article
                key={c.name}
                className="group relative w-full h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                style={{
                  backgroundImage: `url(${imageMap[c.name] || bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                role="link"
                aria-label={`Open ${c.name} website`}
                tabIndex={0}
                onClick={() => onCardClick(c.website)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onCardClick(c.website);
                  }
                }}
              >
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/80 to-black/20"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  {/* Type badge */}
                  <div className="mb-3">
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}>
                      {type}
                    </span>
                  </div>

                  {/* Company Name */}
                  <h3 className="text-xl font-bold mb-2 leading-tight">
                    {c.name}
                  </h3>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-sm mb-3 opacity-90">
                    <MapPin className="w-4 h-4" />
                    <span>{location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed mb-4 opacity-90 line-clamp-2">
                    {c.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="text-xs opacity-75">
                      {getDomain(c.website)}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onCardClick(c.website);
                      }}
                      className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg ${colors.bg} ${colors.text} border ${colors.border} hover:opacity-90 transition-opacity`}
                      aria-label={`Visit ${c.name} website`}
                    >
                      Visit
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Icon in top right */}
                <div className="absolute top-4 right-4 p-2 bg-black/30 backdrop-blur-sm rounded-full">
                  {isNgo ? (
                    <img
                      src={mgcNgoIcon}
                      alt="MGC GROUP NGO"
                      className="w-6 h-6 object-contain"
                    />
                  ) : (
                    getIcon(type, "w-6 h-6", "text-white")
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Empty state */}
        {filteredCompanies.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600">No companies match your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
