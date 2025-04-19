import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const books = [
    { name: "Quran", path: "/quran", image: "/images/QuranImage.avif" },
    { name: "Bible", path: "/bible", image: "/images/BibleImage.jpg" },
    { name: "Geeta", path: "/geeta", image: "/images/GeetaImage.jpg" },
    { name: "Tanakh", path: "/tanakh", image: "/images/TanakhImage.jpg" },
  ];

  useEffect(() => {
    document.body.style.overflow = 'auto';
    document.body.style.scrollBehavior = 'smooth';
    
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.scrollBehavior = '';
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative bg-gray-900 text-white min-h-screen flex flex-col overflow-hidden">

      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <video 
          autoPlay 
          muted 
          loop 
          className="absolute w-full h-full object-cover"
        >
          <source src="/videos/153976-817104245.mp4" type="video/mp4" />
        </video>
      </div>


      <div className="relative z-10 flex-grow flex flex-col items-center justify-center">
        <header className="text-center py-16 w-full max-w-4xl mx-auto px-4">
          <h1 
            className={`text-5xl font-serif font-light mb-6 tracking-wider transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
          >
            Find Guidance from the Divine
          </h1>
          <p 
            className={`text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed text-gray-200 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '500ms' }}
          >
            Discover the wisdom and peace of sacred texts from various traditions,
            allowing your spirit to find harmony in timeless teachings.
          </p>
          
          <div 
            className={`w-24 h-1 bg-amber-300 mx-auto my-8 opacity-70 transition-all duration-1000 ${isLoaded ? 'opacity-70 scale-100' : 'opacity-0 scale-0'}`}
            style={{ transitionDelay: '800ms' }}
          ></div>
        </header>

        <div className="flex flex-wrap justify-center gap-12 px-6 pb-16 w-full max-w-5xl mx-auto">
          {books.map((book, index) => (
            <Link
              to={book.path}
              key={book.name}
              className="group flex flex-col items-center"
            >
              <div 
                className={`relative overflow-hidden rounded-full border-4 border-amber-100/20 shadow-lg shadow-amber-900/20 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                style={{ transitionDelay: `${1000 + index * 200}ms` }}
              >
                <img
                  src={book.image}
                  alt={book.name}
                  className="w-40 h-40 object-cover transition-all duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>
              <p 
                className={`mt-5 text-lg font-serif tracking-wide group-hover:text-amber-200 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${1200 + index * 200}ms` }}
              >
                {book.name}
              </p>
            </Link>
          ))}
        </div>

        <p 
          className={`italic text-center text-lg font-light max-w-2xl mx-auto text-gray-300 px-6 pb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '2000ms' }}
        >
          "In the realm of sacred wisdom, find not just knowledge but the illumination of your soul's path."
        </p>
      </div>

      <footer className="relative z-10 bg-black/80 text-gray-300 text-center py-5 backdrop-blur-sm">
        <p className="font-light text-sm">&copy; 2025 VerseVibes. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;