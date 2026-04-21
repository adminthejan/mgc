import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import {
  Car,
  ShoppingCart,
  CreditCard,
  Banknote,
  ShieldCheck,
  Wrench,
  Factory,
  Dice5,
  Package,
  Wine,
  HeartHandshake,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const Leaders = () => {
  const services = [
    {
      label: "Vehicles Import & Export",
      Icon: Car,
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
      description:
        "Global vehicle trading solutions with comprehensive import and export services across multiple markets.",
      gradient: "from-blue-500 via-cyan-500 to-teal-400",
    },
    {
      label: "Vehicle Buying & Selling",
      Icon: ShoppingCart,
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
      description:
        "Trusted marketplace for quality vehicles with transparent pricing and comprehensive support.",
      gradient: "from-purple-500 via-pink-500 to-rose-400",
    },
    {
      label: "Finance Solutions",
      Icon: CreditCard,
      image:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80",
      description:
        "Flexible financing options including deposits, loans, and credit card services tailored to your needs.",
      gradient: "from-amber-500 via-orange-500 to-red-400",
    },
    {
      label: "Online Banking",
      Icon: Banknote,
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      description:
        "Secure digital banking platform providing seamless financial transactions and account management.",
      gradient: "from-emerald-500 via-green-500 to-teal-400",
    },
    {
      label: "Government Defense Supply",
      Icon: ShieldCheck,
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
      description:
        "Authorized supplier of defense equipment to government agencies with full legal compliance.",
      gradient: "from-slate-600 via-gray-600 to-zinc-500",
    },
    {
      label: "Vehicle Repair & Conversion",
      Icon: Wrench,
      image:
        "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80",
      description:
        "Expert automotive services including repairs, modifications, and custom vehicle conversions.",
      gradient: "from-indigo-500 via-blue-500 to-sky-400",
    },
    {
      label: "Vehicle Assembling",
      Icon: Factory,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
      description:
        "State-of-the-art vehicle assembly facilities with precision engineering and quality control.",
      gradient: "from-violet-500 via-purple-500 to-fuchsia-400",
    },
    {
      label: "Casino Entertainment",
      Icon: Dice5,
      image:
        "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=800&q=80",
      description:
        "Premium gaming and entertainment experiences in a safe and regulated environment.",
      gradient: "from-red-500 via-rose-500 to-pink-400",
    },
    {
      label: "Steel & Billet Trading",
      Icon: Package,
      image:
        "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&q=80",
      description:
        "Industrial metal supply and distribution serving construction and manufacturing sectors.",
      gradient: "from-gray-600 via-slate-600 to-zinc-500",
    },
    {
      label: "Liquor Import & Export",
      Icon: Wine,
      image:
        "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
      description:
        "Premium spirits and beverage trading with global sourcing and distribution networks.",
      gradient: "from-purple-600 via-violet-600 to-indigo-500",
    },
    {
      label: "NGO Charity Organization",
      Icon: HeartHandshake,
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
      description:
        "Community-focused charitable initiatives supporting social welfare and development programs.",
      gradient: "from-pink-500 via-rose-500 to-red-400",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const itemsPerView = 3;

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      // update direction and index directly to avoid referencing handleNext inside the effect
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, services.length]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const getVisibleServices = () => {
    const visible = [];
    for (let i = 0; i < itemsPerView; i++) {
      visible.push(services[(currentIndex + i) % services.length]);
    }
    return visible;
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <section className="relative flex flex-col items-center pt-40 pb-16 overflow-hidden bg-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-[1300px] w-full px-4 text-center relative z-10">
        {/* Header with modern styling */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-3 mb-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
              Industry Leaders Since 1995
            </span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="main-topic-font text-3xl md:text-5xl font-black bg-linear-to-r from-sky-700 via-cyan-700 to-blue-600 bg-clip-text text-transparent leading-tight mb-6"
        >
          Leaders in the Industry
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-sm md:text-base text-gray-700 font-medium max-w-3xl mx-auto"
        >
          Model Group of Companies (Private) Limited (MGC) is a Sri Lankan‑owned
          company, delivering excellence across diverse sectors worldwide.
        </motion.p>

        {/* Carousel Container with glassmorphism */}
        <div
          className="relative mt-16 px-4 md:px-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 },
              }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {getVisibleServices().map((service, idx) => {
                const Icon = service.Icon;
                return (
                  <motion.div
                    key={`${service.label}-${idx}`}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="group relative rounded-3xl overflow-hidden backdrop-blur-sm bg-white/80 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500"
                  >
                    {/* Image Section with Overlay */}
                    <div className="relative h-56 overflow-hidden">
                      {/* Background Image */}
                      <img
                        src={service.image}
                        alt={service.label}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Gradient Overlay */}
                      <div
                        className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}
                      />

                      {/* Dark overlay for better text contrast */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/20 to-transparent" />

                      {/* Icon overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.6 }}
                          className="bg-white/20 backdrop-blur-md rounded-full p-6 border-2 border-white/40"
                        >
                          <Icon
                            className="w-16 h-16 text-white drop-shadow-2xl"
                            strokeWidth={1.5}
                          />
                        </motion.div>
                      </div>

                      {/* Corner accent */}
                      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/50 rounded-tr-lg" />
                      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/50 rounded-bl-lg" />
                    </div>

                    {/* Content Section with modern styling */}
                    <div className="p-7 text-left relative">
                      <div
                        className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-current to-transparent opacity-20"
                        style={{
                          color: service.gradient
                            .split(" ")[1]
                            .replace("via-", ""),
                        }}
                      />

                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                        {service.label}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                        {service.description}
                      </p>

                      {/* Hover effect line */}
                      <div className="mt-6 h-1 w-0 group-hover:w-full bg-linear-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500" />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Modern Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-linear-to-r from-sky-700 via-cyan-700 to-blue-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 backdrop-blur-sm border border-white/20"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-linear-to-r from-sky-700 via-cyan-700 to-blue-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 backdrop-blur-sm border border-white/20"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Modern Carousel Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {services.map((_, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`h-2 rounded-full transition-all duration-500 ${idx === currentIndex
                  ? "w-12 bg-linear-to-r from-sky-700 via-cyan-700 to-blue-600 shadow-lg"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Modern footer with badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-blue-50 to-purple-50 border border-blue-100"
        >
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-gray-700">
            Building trust through compliance, quality, and innovation
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Leaders;
