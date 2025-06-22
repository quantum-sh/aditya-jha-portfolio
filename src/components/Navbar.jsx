import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Experience", to: "/experience" },
  { name: "Projects", to: "/projects" },
  { name: "Contact", to: "/contact" },
  { name: "Vault", to: "/vault" },
  { name: "My Articles", to: "/articles" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-[#232326] text-[#b8ffb8] px-2 py-0 font-mono sticky top-0 z-50 border-b-2 border-[#444]">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        {/* Brand */}
        <Link
          to="/"
          className="flex items-center px-3 py-2 bg-[#18181a] rounded-t-md border-l border-t border-r border-[#444] font-bold text-[#b8ffb8] select-none"
        >
          <svg width="16" height="16" fill="none" className="mr-2">
            <rect width="16" height="16" rx="2" fill="#b8ffb8" />
            <text x="4" y="12" fontSize="10" fill="#232326">{'>'}</text>
          </svg>
          Home
        </Link>
        {/* Desktop Tabs */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.to}
              className={`px-4 py-2 rounded-t-md border-l border-t border-r border-[#444] font-semibold
                ${location.pathname === link.to ? "bg-black text-[#b8ffb8]" : "bg-[#232326] text-[#b8ffb8]"}
                ${link.name === "My Articles" ? "font-bold" : ""}
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <svg className="w-7 h-7 text-[#b8ffb8]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#232326] text-[#b8ffb8] px-2 pt-2 pb-4">
          <div className="flex flex-col items-center">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.to}
                className={`w-full py-3 font-semibold border-b border-[#444]
                  ${location.pathname === link.to ? "bg-black text-[#b8ffb8]" : "bg-[#232326] text-[#b8ffb8]"}
                  ${link.name === "My Articles" ? "font-bold" : ""}
                `}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;