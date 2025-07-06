import React from "react";
import Navbar from "../Navbar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full h-max backdrop-blur-sm">
      <div className="sticky top-0 z-50 w-full h-2 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600" />
      
      <Navbar />
    </header>
  );
}