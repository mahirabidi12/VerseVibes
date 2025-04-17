import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-gray-900 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">VerseVibes</Link>
            <div className="space-x-4">
              <Link to="/quran" className="hover:underline">Quran</Link>
              <Link to="/bible" className="hover:underline">Bible</Link>
              <Link to="/geeta" className="hover:underline">Geeta</Link>
              <Link to="/tanakh" className="hover:underline">Tanakh</Link>
              <Link to="/review" className="hover:underline">Review</Link>
            </div>
          </div>
        </nav>
      );
}

export default Navbar