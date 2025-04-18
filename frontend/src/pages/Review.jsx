import React, { useState } from 'react';

function ReviewForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('');
  const [comments, setComments] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');


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
        setSubmitted(false);
      }, 5000); 
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-lg">
        {submitted ? (
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-green-600">Thank you for your response!</h2>
            <p className="mt-4 text-lg text-gray-700">Your words have value, and we will take them into consideration.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">We Value Your Feedback</h2>

            {error && <p className="text-red-600 text-center mb-4">{error}</p>}

            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="rating" className="block text-gray-700 font-semibold mb-2">Rating (1-5)</label>
              <input
                type="number"
                id="rating"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                min="1"
                max="5"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="comments" className="block text-gray-700 font-semibold mb-2">Comments</label>
              <textarea
                id="comments"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                rows="5"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 transition-colors duration-300"
            >
              Submit Review
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ReviewForm;
