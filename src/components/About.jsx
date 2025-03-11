import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "../../@/components/ui/badge";
import { Flame, Sparkles, Users, Award, Clock, School } from "lucide-react";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const features = [
    { 
      icon: <Flame className="h-8 w-8 text-orange-500" />, 
      title: "10 Thrilling Events", 
      description: "From 🎵music and 💃dance to 🎨art and 🎭drama, experience a diverse range of cultural showcases." 
    },
    { 
        icon: <Award className="h-8 w-8 text-yellow-500" />, 
        title: "Prizes & Recognition", 
        description: "Showcase your 🧠talent and win 🥇awards and which class win most numbers of awards, DVS win 🏆Trophy." 
      },
    { 
      icon: <Users className="h-8 w-8 text-blue-500" />, 
      title: "Community Spirit", 
      description: "Connect with fellow students and foster friendships through collaborative performances." 
    },
  ];

  return (
    <section id="about" className="relative py-20 px-4 overflow-hidden bg-black" >
      {/* Subtle animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-black"></div>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-10"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5,
            }}
            style={{
              width: `${Math.random() * 400 + 200}px`,
              height: `${Math.random() * 400 + 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#4F46E5', '#8B5CF6', '#EC4899'][Math.floor(Math.random() * 3)],
            }}
          />
        ))}
      </div>

      <div className="container max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="relative z-10"
        >
          {/* Section title */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium bg-purple-950/50 text-purple-200 border-purple-800 mb-4">
              About The Event
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
              10 Days of Cultural Extravaganza
            </h2>
            
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Main content */}
          <div className=" gap-12">
            {/* Left column - Main description */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="prose border  border-neutral-500 prose-lg flex flex-col justify-center items-center rounded-2xl prose-invert ">
                <p className="text-xl text-center mt-[-15px] mb-4 z-20 inline-block  bg-black  text-purple-100">Join for a remarkable event from</p>
                <motion.div
                  className="flex mb-[-20px] justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full inline-flex items-center gap-2 shadow-lg shadow-purple-500/20">
                    <span className="text-white font-semibold">March 11<sup>th</sup> </span>
                  </div>
                </motion.div>
              </div>

              {/* Event highlights with counter */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 mb-8 gap-4">
                {[
                  { number: "10", label: "🎉Events", icon: <Award size={20} /> },
                  { number: "4", label: "Branches", icon: <Sparkles size={20} /> },
                  { number: "24", label: "Classes", icon: <School size={20} /> },
                  { number: "12", label: "Days", icon: <Clock size={20} /> }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-purple-900/20 border border-purple-700/30 p-4 rounded-xl text-center"
                  >
                    <div className="flex justify-center mb-2 text-purple-400">
                      {stat.icon}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-purple-200">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right column - Feature cards */}
            <motion.div variants={itemVariants} className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 30px -15px rgba(124, 58, 237, 0.5)" }}
                  className="flex bg-gradient-to-r from-purple-900/20 to-indigo-900/20 backdrop-blur-sm border border-purple-700/20 rounded-xl p-5 shadow-lg"
                >
                  <div className="flex-shrink-0 mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-white">{feature.title}</h3>
                    <p className="text-purple-200 mt-1">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
