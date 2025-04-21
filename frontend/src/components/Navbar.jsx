import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          VerseVibes
        </Link>

        <div className="hidden md:flex space-x-4">
          <Link to="/quran" className="hover:underline">
            Quran
          </Link>
          <Link to="/bible" className="hover:underline">
            Bible
          </Link>
          <Link to="/geeta" className="hover:underline">
            Geeta
          </Link>
          <Link to="/tanakh" className="hover:underline">
            Tanakh
          </Link>
          <Link to="/review" className="hover:underline">
            Review
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-2">
          <div className="flex flex-col space-y-2 px-2 pt-2 pb-4">
            <Link
              to="/quran"
              className="hover:bg-gray-700 px-3 py-2 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Quran
            </Link>
            <Link
              to="/bible"
              className="hover:bg-gray-700 px-3 py-2 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Bible
            </Link>
            <Link
              to="/geeta"
              className="hover:bg-gray-700 px-3 py-2 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Geeta
            </Link>
            <Link
              to="/tanakh"
              className="hover:bg-gray-700 px-3 py-2 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Tanakh
            </Link>
            <Link
              to="/review"
              className="hover:bg-gray-700 px-3 py-2 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Review
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
