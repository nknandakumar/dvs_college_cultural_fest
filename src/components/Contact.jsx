import React from "react";
import { Badge } from "../../@/components/ui/badge";

const Contact = () => {
  const coordinators = [
    { name: "Dr. Name", role: "Head Coordinator", mobile: "+91 98765 43210" },
    { name: "Prof. Name", role: "Event Supervisor", mobile: "+91 87654 32109" },
    { name: "Name", role: "Technical Lead", mobile: "+91 76543 21098" },
  ];

  return (
    <section id="contact" className="flex flex-col items-center bg-gradient-to-b  to-black from-purple-950/30 text-white p-8 rounded-lg pb-20  mx-auto md:p-12">
      <Badge
        variant="outline"
        className="px-4 py-1.5 text-sm font-medium bg-purple-950/50 text-purple-200 border-purple-800 mb-6"
      >
        Contact
      </Badge>
      <h2 className="text-3xl font-bold font-display my-8 mb-10 text-purple-400 text-center">
        FACULTY COORDINATORS
      </h2>
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {coordinators.map((coordinator, index) => (
          <div 
            key={index} 
            className="p-6  bg-gradient-to-r from-purple-900/20 to-indigo-900/20 backdrop-blur-sm border border-purple-700/20 rounded-2xl shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold text-yellow-400">{coordinator.name}</h3>
            <p className="text-gray-200">{coordinator.role}</p>
            <p className="text-gray-300 font-mono">{coordinator.mobile}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
