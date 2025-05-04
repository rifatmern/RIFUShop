"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "8801XXXXXXXXX"; // Replace with your number

  return (
    <a
      href={`https://wa.me/8801770560025?text=Hi%20Rifu,%20I%20am%20interested%20in%20your%20shop.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 left-5 z-[50] bg-[#fb2e38] text-white h-12 w-12 rounded-full flex items-center justify-center shadow-md hover:bg-green-600 transition-all duration-300"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
};

export default WhatsAppButton;
