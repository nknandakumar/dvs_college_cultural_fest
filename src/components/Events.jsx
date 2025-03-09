import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  CalendarDays,
  MapPin,
  Users,
  ArrowRight,
} from "lucide-react";
import { Badge } from "../../@/components/ui/badge";
import { Card } from "../../@/components/ui/card";
import { events } from "../data.js";

const Events = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

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
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      className="relative py-20 px-4 bg-gradient-to-b from-black to-purple-950/30"
      id="events"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-90"></div>
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            initial={{ opacity: 0.05 }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, Math.random() * 0.5 + 1, 1],
            }}
            transition={{
              duration: Math.random() * 30 + 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(79, 70, 229, 0.4) 0%, rgba(0, 0, 0, 0) 70%)`,
            }}
          />
        ))}
      </div>

      <div className="container max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="px-4 py-1.5 text-sm font-medium bg-purple-950/50 text-purple-200 border-purple-800 mb-4"
          >
            Event Lineup
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            Events
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            A diverse showcase of talents across art forms, with something for
            everyone to enjoy and participate in.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Events grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-xl overflow-hidden"
            >
              {/* Event card with no padding to make image flush with edges */}
              <Card className="h-full bg-transparent overflow-hidden relative p-0 border-0">
                {/* Image covering the entire top of the card with no gap */}
                <div className="relative">
                  <a href={event.link}>
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-54 object-cover object-down"
                    />
                  </a>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 bg-gradient-to-b from-purple-900/20 to-black/50 backdrop-blur-sm border border-purple-700/30 border-t-0 rounded-b-xl">
                  <h3 className="text-2xl font-bold text-white">
                    {event.name}
                  </h3>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3">
                      <CalendarDays className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-white">
                          {event.date}
                        </p>
                        <p className="text-xs text-gray-400">{event.time}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-300">{event.venue}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-300">{event.members}</p>
                    </div>
                  </div>

                  <a 
                    href={event.link} 
                    className="block w-full mt-4 py-3 px-4 bg-purple-900/50 hover:bg-purple-800 text-white rounded-lg border border-purple-700/50 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    Register for this Event
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Events;