"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white fixed w-full z-50 border-b border-gray-100 shadow-xs">
      <div className="flex items-center justify-between px-4 py-2">
        <Image
          src="/logo.jfif"
          className="h-16 w-16 md:h-20 md:w-20 rounded-full"
          alt="Hospital logo"
          width={75}
          height={75}
        />

        {/* Desktop Links (Hidden on small screens, shown on md screens and up) */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-black font-bold border-b-2 border-transparent pb-1 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Appointment Button (Hidden on small screens) */}
        <div className="hidden md:flex bg-cyan-400 rounded-xl justify-center hover:bg-cyan-300 transition">
          <button className="py-3 px-4 font-bold text-white cursor-pointer">
            Appointment
          </button>
        </div>

        {/* Mobile Toggle Button (Shown on small screens, hidden on md screens) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 p-2 focus:outline-hidden"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Only appears when isOpen is true) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-black font-bold text-lg hover:text-cyan-400 transition"
            >
              {link.label}
            </Link>
          ))}

          <div className="bg-cyan-400 rounded-xl text-center mt-2">
            <button className="py-3 w-full font-bold text-white">
              Appointment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;