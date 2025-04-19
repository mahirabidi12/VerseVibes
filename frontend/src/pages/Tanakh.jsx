import React, { useState, useEffect } from 'react';
import { Scroll, Send, Star } from 'lucide-react';


function Tanakh() {
  const [concern, setConcern] = useState('');
  const [solution, setSolution] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowContent(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async () => {
    if (concern.trim()) {
      setIsLoading(true);
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/tanakh`, { 
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ concern }) 
        });
        const data = await response.json();
        setSolution(data);
      } catch (error) {
        console.error('Error fetching solution:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };
 
  return (
    <div className="relative min-h-screen overflow-hidden">

      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <video
          className="absolute w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/tanakhBackground.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>


      <div className={`relative z-20 p-6 transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto">

          <div className="mb-12 text-center">
            <div className="inline-block p-4 rounded-full bg-white bg-opacity-20 mb-4">
              <Scroll size={48} className="text-blue-300 animate-pulse" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-2 tracking-wide">Wisdom from the Tanakh</h1>
            <p className="text-blue-100 text-lg max-w-xl mx-auto">
              "The beginning of wisdom is the fear of Adonai, and knowledge of the Holy One is understanding." — Proverbs 9:10
            </p>
          </div>


          <div className="bg-white bg-opacity-15 backdrop-filter backdrop-blur-md rounded-xl shadow-2xl p-8 border border-white border-opacity-20 transition-all duration-500 hover:shadow-blue-300 hover:shadow-xl">
            <div className="mb-6">
              <label className="block text-white text-lg mb-3 font-medium">Share your concern:</label>
              <textarea
                className="w-full h-40 p-4 border-0 rounded-lg shadow-inner resize-none mb-4 bg-white bg-opacity-80 text-gray-800 focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                placeholder="What guidance do you seek from ancient wisdom?"
                value={concern}
                onChange={(e) => setConcern(e.target.value)}
              ></textarea>
              <button
                onClick={handleSubmit}
                disabled={isLoading || !concern.trim()}
                className="mt-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 shadow-lg hover:shadow-blue-500/50"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-r-2 border-white"></div>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Seek Wisdom
                  </>
                )}
              </button>
            </div>

            {solution && (
              <div className="mt-8 animate-fadeIn">
                <div className="p-6 bg-white bg-opacity-90 rounded-lg shadow-xl border-l-4 border-blue-400">
                  <div className="flex items-center mb-4">
                    <Star size={24} className="text-blue-500 mr-3 animate-star" />
                    <h3 className="text-2xl font-semibold text-blue-900">Ancient Guidance:</h3>
                  </div>
                  <p className="text-lg text-gray-800 leading-relaxed">{solution}</p>
                </div>
              </div>
            )}
          </div>


          <div className="mt-8 text-center text-white text-opacity-70 text-sm">
            "Trust in Adonai with all your heart; do not rely on your own understanding." — Proverbs 3:5
          </div>
        </div>
      </div>
    </div>
  );
}


export default Tanakh;