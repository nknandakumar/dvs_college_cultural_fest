import React from "react";
import { events } from "../data.js";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../@/components/ui/table";
import { Badge } from "../../@/components/ui/badge.jsx";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center bg-gradient-to-b to-black from-purple-950/30 text-white p-6 rounded-lg pb-16 mx-auto md:p-12 w-full"
    >
        <Badge
        variant="outline"
        className="px-4 py-1.5 text-sm font-medium bg-purple-950/50 text-purple-200 border-purple-800 mb-6"
      >
        Contact
      </Badge>
      
      <h2 className="text-3xl font-bold font-display my-8 mb-10 text-purple-400 text-center">
        FACULTY & COORDINATORS
        <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-6 rounded-full"></div>
      </h2>
      
      <div className="w-full border font-main  max-w-4xl p-4 rounded-2xl shadow-lg overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
  <Table className="min-w-full ">
    <TableHeader>
      <TableRow className="font-display ">
        <TableHead className="px-4  py-2">Event Name</TableHead>
        <TableHead className="px-4 py-2">Coordinator Name</TableHead>
        <TableHead className="px-4 py-2">Contact Number</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {events.map((event, index) => (
        <TableRow key={index} className="hover:bg-gray-600 transition-all duration-200 rounded-lg">
          <TableCell className="px-4 py-2">{event.name}</TableCell>
          <TableCell className="px-4 py-2">{event.eventCoordinator[0]}</TableCell>
          <TableCell className="px-4 py-2">{event.eventCoordinator[2]}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</div>

    </section>
  );
};

export default Contact;
