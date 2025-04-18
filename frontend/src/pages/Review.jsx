import React, { useState, useEffect } from 'react';
import { User, Mail, Star, MessageSquare, Check, AlertCircle } from 'lucide-react';

function ReviewForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('');
  const [comments, setComments] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [showContent, setShowContent] = useState(false);
  const [activeStar, setActiveStar] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const validateForm = () => {
    if (!name || !email || !rating || !comments) {
      setError('Please fill in all fields.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);

      setTimeout(() => {
        setName('');
        setEmail('');
        setRating('');
        setComments('');
        setActiveStar(0);
        setSubmitted(false);
      }, 5000);
    }
  };

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
    setActiveStar(selectedRating);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100 p-6">
      <div className={`w-full max-w-2xl transition-all duration-700 ${showContent ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
        <div className="relative bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg p-8 md:p-10 rounded-2xl shadow-xl border border-white border-opacity-20">

          <div className="absolute -top-14 -right-14 w-28 h-28 bg-blue-500 bg-opacity-10 rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-purple-500 bg-opacity-10 rounded-full"></div>
          
          {submitted ? (
            <div className="text-center py-12 transition-all duration-500 animate-fadeIn">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <Check size={30} className="text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-green-600 mb-4">Thank you for your feedback!</h2>
              <p className="mt-4 text-lg text-gray-600">Your insights are invaluable to us and will help improve our services.</p>
              <div className="mt-8 w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full animate-progress"></div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">We Value Your Feedback</h2>
                <p className="text-gray-500 mt-2">Help us improve by sharing your experience</p>
              </div>

              {error && (
                <div className="flex items-center p-4 mb-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <AlertCircle size={20} className="text-red-500 mr-2" />
                  <p className="text-red-600">{error}</p>
                </div>
              )}

              <div className="space-y-6">
                <div className="relative">
                  <label htmlFor="name" className="absolute -top-2.5 left-4 inline-block bg-white px-1 text-sm font-medium text-gray-600">Full Name</label>
                  <div className="flex items-center">
                    <User size={18} className="text-gray-400 absolute left-3" />
                    <input
                      type="text"
                      id="name"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="email" className="absolute -top-2.5 left-4 inline-block bg-white px-1 text-sm font-medium text-gray-600">Email Address</label>
                  <div className="flex items-center">
                    <Mail size={18} className="text-gray-400 absolute left-3" />
                    <input
                      type="email"
                      id="email"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Your Rating</label>
                  <div className="flex items-center justify-center space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleStarClick(star)}
                        className={`p-2 rounded-full transition-all duration-200 hover:bg-yellow-50 focus:outline-none ${
                          activeStar >= star ? 'text-yellow-400 scale-110' : 'text-gray-300'
                        }`}
                      >
                        <Star
                          size={32}
                          fill={activeStar >= star ? 'currentColor' : 'none'}
                          className={activeStar >= star ? 'animate-pulse-once' : ''}
                        />
                      </button>
                    ))}
                    <input
                      type="hidden"
                      id="rating"
                      value={rating}
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="comments" className="absolute -top-2.5 left-4 inline-block bg-white px-1 text-sm font-medium text-gray-600">Your Comments</label>
                  <div className="flex">
                    <MessageSquare size={18} className="text-gray-400 absolute left-3 top-3" />
                    <textarea
                      id="comments"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      rows="4"
                      value={comments}
                      onChange={(e) => setComments(e.target.value)}
                      required
                    ></textarea>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-500/30 focus:outline-none focus:ring-4 focus:ring-blue-500 transition-all duration-300 transform hover:scale-[1.02]"
              >
                Submit Feedback
              </button>
            </form>
          )}
        </div>
        <div className="text-center mt-4 text-sm text-gray-500">
          We appreciate your time and honest feedback!
        </div>
      </div>
    </div>
  );
}


export default ReviewForm;