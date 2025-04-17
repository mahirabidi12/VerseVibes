import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const books = [
    { name: "Quran", path: "/quran", image: "/images/QuranImage.avif" },
    { name: "Bible", path: "/bible", image: "/images/BibleImage.jpg" },
    { name: "Geeta", path: "/geeta", image: "/images/GeetaImage.jpg" },
    { name: "Tanakh", path: "/tanakh", image: "/images/TanakhImage.jpg" },
  ];

  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold mb-10">Find Guidance from the Divine</h1>
      <div className="flex flex-wrap justify-center gap-10">
        {books.map((book) => (
          <Link
            to={book.path}
            key={book.name}
            className="flex flex-col items-center"
          >
            <img
              src={book.image}
              alt={book.name}
              className="w-32 h-32 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <p className="mt-2 text-lg font-semibold">{book.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;