// import React from "react";
// import { Link } from "react-router-dom";

// function Home() {
//   const books = [
//     { name: "Quran", path: "/quran", image: "/images/QuranImage.avif" },
//     { name: "Bible", path: "/bible", image: "/images/BibleImage.jpg" },
//     { name: "Geeta", path: "/geeta", image: "/images/GeetaImage.jpg" },
//     { name: "Tanakh", path: "/tanakh", image: "/images/TanakhImage.jpg" },
//   ];

//   return (
//     <div className="text-center py-10">
//       <h1 className="text-4xl font-bold mb-10">Find Guidance from the Divine</h1>
//       <div className="flex flex-wrap justify-center gap-10">
//         {books.map((book) => (
//           <Link
//             to={book.path}
//             key={book.name}
//             className="flex flex-col items-center"
//           >
//             <img
//               src={book.image}
//               alt={book.name}
//               className="w-32 h-32 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
//             />
//             <p className="mt-2 text-lg font-semibold">{book.name}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;






// import React from 'react';
// import { Link } from 'react-router-dom';

// function Home() {
//   const books = [
//     { name: "Quran", path: "/quran", image: "/images/QuranImage.avif" },
//     { name: "Bible", path: "/bible", image: "/images/BibleImage.jpg" },
//     { name: "Geeta", path: "/geeta", image: "/images/GeetaImage.jpg" },
//     { name: "Tanakh", path: "/tanakh", image: "/images/TanakhImage.jpg" },
//   ];

//   return (
//     <div className="relative bg-black text-white min-h-screen">
//       {/* Background Video */}
//       <video autoPlay muted loop className="absolute w-full h-full object-cover">
//         <source src="/videos/peaceful-background.mp4" type="video/mp4" />
//       </video>

//       {/* Main Content */}
//       <div className="relative z-10">
//         {/* Title Section */}
//         <header className="text-center py-20 bg-opacity-60 bg-black">
//           <h1 className="text-5xl font-bold mb-10 animate__animated animate__fadeIn animate__delay-1s">
//             Find Guidance from the Divine
//           </h1>
//           <p className="text-xl mb-12 animate__animated animate__fadeIn animate__delay-2s">
//             Discover the wisdom and peace of sacred texts from various traditions.
//           </p>
//         </header>

//         {/* Cards for Books */}
//         <div className="flex flex-wrap justify-center gap-10 px-6 pb-10 animate__animated animate__fadeIn animate__delay-3s">
//           {books.map((book) => (
//             <Link
//               to={book.path}
//               key={book.name}
//               className="flex flex-col items-center transform transition duration-500 ease-in-out hover:scale-105"
//             >
//               <img
//                 src={book.image}
//                 alt={book.name}
//                 className="w-40 h-40 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
//               />
//               <p className="mt-4 text-lg font-semibold">{book.name}</p>
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white text-center py-4 mt-12">
//         <p>&copy; 2025 VerseVibes. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default Home;



import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const books = [
    { name: "Quran", path: "/quran", image: "/images/QuranImage.avif" },
    { name: "Bible", path: "/bible", image: "/images/BibleImage.jpg" },
    { name: "Geeta", path: "/geeta", image: "/images/GeetaImage.jpg" },
    { name: "Tanakh", path: "/tanakh", image: "/images/TanakhImage.jpg" },
  ];

  return (
    <div className="relative bg-black text-white min-h-screen flex flex-col">

      <video autoPlay muted loop className="absolute w-full h-full object-cover">
        <source src="/videos/peaceful-background.mp4" type="video/mp4" />
      </video>


      <div className="relative z-10 flex-grow">

        <header className="text-center py-20 bg-opacity-60 bg-black">
          <h1 className="text-5xl font-bold mb-10 animate__animated animate__fadeIn animate__delay-1s">
            Find Guidance from the Divine
          </h1>
          <p className="text-xl mb-12 animate__animated animate__fadeIn animate__delay-2s">
            Discover the wisdom and peace of sacred texts from various traditions.
          </p>
        </header>


        <div className="flex flex-wrap justify-center gap-10 px-6 pb-10 animate__animated animate__fadeIn animate__delay-3s">
          {books.map((book) => (
            <Link
              to={book.path}
              key={book.name}
              className="flex flex-col items-center transform transition duration-500 ease-in-out hover:scale-105"
            >
              <img
                src={book.image}
                alt={book.name}
                className="w-40 h-40 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <p className="mt-4 text-lg font-semibold">{book.name}</p>
            </Link>
          ))}
        </div>
      </div>


      <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
        <p>&copy; 2025 VerseVibes. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
