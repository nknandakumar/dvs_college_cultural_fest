import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { events } from '../data.js';
import { CalendarDays, Timer, Users, ArrowLeft,ArrowBigRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '../../@/components/ui/badge';
import { Button } from '../../@/components/ui/button';

const Event = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the event based on the URL parameter
    const foundEvent = events.find(e => e.name.toLowerCase().replace(/\s+/g, '-') === id);
    
    if (foundEvent) {
      setEvent(foundEvent);
    }
    
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold mb-4">Event not found</h2>
        <Link to="/" className="text-purple-400 hover:text-purple-300 flex items-center gap-2">
          <ArrowLeft size={16} />
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-950/30 pt-20 pb-16 px-4">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-90"></div>
        {[...Array(6)].map((_, i) => (
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

      <div className="container max-w-5xl mx-auto">
        {/* Back button */}
        <Link
          to="/"
          className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-6 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Events
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl overflow-hidden shadow-2xl"
          >
            <img
              src={event.image}
              alt={event.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Details Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <Badge
                variant="outline"
                className="px-4 py-1.5 text-sm font-medium bg-purple-950/50 text-purple-200 border-purple-800 mb-3"
              >
                Cultural Event
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-white font-display">
                {event.name}
              </h1>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <CalendarDays className="h-6 w-6 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-md font-medium text-white">{event.date}</p>
                  <p className="text-gray-400">{event.time}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <  Timer className="h-6 w-6 text-purple-400 flex-shrink-0 mt-0.5" />
              
                <div>
                  <p className="text-md font-medium text-white">Duration</p>
                  <p className="text-gray-400">{event.duration}</p>
                </div>
              </div>
              
        
               
            <div className="flex items-start gap-4">
                <Users className="h-6 w-6 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-md font-medium text-white">Participation</p>
                  <p className="text-gray-400">{event.members}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="h-6 w-6 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-md font-medium text-white"> Event-Coordinator</p>
                 
                  {
                    event.eventCoordinator.map((n , index)=>{
                     return <p key={index} className="text-gray-400">{n}</p>
                    })
                  }
                </div>
              </div>
            </div>

            <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 p-6 rounded-xl bg-purple-900/20 border border-purple-700/30 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Rules & Guidelines</h3>
          <div className="space-y-3 text-gray-300">
     
             { event.rules.map((r,index)=>(
                 <p className='flex gap-2' key={index} > <ArrowBigRight /> {r}</p>
             ))} 
          </div>
        </motion.div>

            <div className="pt-6">
          <a href={event.link} target="_blank" rel="noopener noreferrer" >
          <Button className="w-full py-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/20">
                Register Now
              </Button>
          </a>
            </div>
          </motion.div>
        </div>

    
      </div>
    </div>
  );
};

export default Event;