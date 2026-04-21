import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Crown, Users, Award, Globe } from "lucide-react";
import per1 from "../assets/per1.jpeg";
import per2 from "../assets/per2.jpeg";

const Directors = () => {
  const directors = [
    {
      name: "Mr. Roshan Awantha",
      title: "Chairman",
      image: per1,
      description:
        "Mr. Roshan Awantha is the visionary leader behind Model Group of Companies, known for strategic innovation and global expansion.",
      icon: Crown,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      glowColor: "shadow-blue-500/20",
      objectPosition: "top",
    },
    {
      name: "Mrs. Sunethra Thennakoon",
      title: "Director",
      image: per2,
      description:
        "Mrs. Sunethra Thennakoon oversees operations and corporate governance, ensuring excellence across all group entities.",
      icon: Users,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-700",
      glowColor: "shadow-emerald-500/20",
      objectPosition: "50% 20%",
    },
  ];

  return (
    <section className="relative pt-16 pb-40 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-indigo-500/10 to-purple-500/10 rounded-full mb-6">
            <Award className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-medium text-indigo-700">
              Leadership Team
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="main-topic-font text-3xl md:text-5xl font-black bg-linear-to-r from-sky-700 via-cyan-700 to-blue-600 bg-clip-text text-transparent leading-tight mb-6"
          >
            Our Directors
          </motion.h2>
          <p className="text-sm md:text-base text-gray-600 font-medium max-w-4xl mx-auto leading-relaxed">
            Established in 1995, Model Group of Companies (Private) Limited
            (MGC) is a 100% Sri Lankan-owned Company at the forefront of vehicle
            selling and conversion. We have expanded our operations to various
            countries including Dubai, UK, Japan, Canada, Kenya, USA, Germany,
            Australia, Ireland, Spain, Finland and Brazil.
          </p>
        </motion.div>

        {/* Directors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {directors.map((director, index) => {
            const IconComponent = director.icon;
            return (
              <motion.div
                key={director.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group relative"
              >
                <div className={`relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl ${director.glowColor} transition-all duration-500 border border-gray-100`}>
                  {/* Photo area — tall, not cropped */}
                  <div className="relative h-96 overflow-hidden">
                    <img
                      src={director.image}
                      alt={director.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      style={{ objectPosition: director.objectPosition }}
                    />
                    {/* Gradient overlay at bottom */}
                    <div className={`absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent`} />
                    {/* Title badge over image */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <div>
                        <h3 className="text-2xl font-extrabold text-white drop-shadow-lg">
                          {director.name}
                        </h3>
                        <span className={`inline-flex items-center gap-1.5 mt-1 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold border border-white/30`}>
                          <IconComponent className="w-3.5 h-3.5" />
                          {director.title}
                        </span>
                      </div>
                      <div className={`w-11 h-11 rounded-full bg-linear-to-br ${director.color} flex items-center justify-center shadow-lg shrink-0`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content below photo */}
                  <div className="p-6">
                    <div className={`w-12 h-1 rounded-full bg-linear-to-r ${director.color} mb-4`} />
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {director.description}
                    </p>
                  </div>

                  {/* Decorative corner */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-linear-to-bl ${director.color} opacity-10 rounded-bl-full`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 h-1 bg-linear-to-r from-blue-500 via-indigo-500 to-emerald-500 rounded-full max-w-md mx-auto origin-center"
        ></motion.div>
      </div>
    </section>
  );
};

export default Directors;
