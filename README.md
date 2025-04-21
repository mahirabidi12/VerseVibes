
# ✨ VerseVibes: Spiritual Wisdom, One Verse at a Time

> **AI** (used only for generating CSS styles)

**VerseVibes** is a full-fledged MERN stack application developed **entirely by me**, where users can choose a religious scripture and seek guidance based on its teachings. While this was intended to be a frontend-only project, I went the extra mile to build a full backend as well, hosted on **Render**, with the frontend deployed on **Vercel**.

---

⚠️ Note on Backend Response Time
This project uses Render for hosting the backend and Vercel for the frontend.
Since the backend is hosted on Render's free tier, the server may go to sleep after periods of inactivity. As a result, the first request may take 10–30 seconds to respond while the server wakes up.

## 📌 Description

**VerseVibes** is your personalized spiritual companion. Users can choose from various sacred texts and submit a personal issue or query. Based on their chosen religion, VerseVibes provides thoughtful responses rooted in the teachings of that scripture.

Whether you're curious, in need of comfort, or seeking direction—**VerseVibes** helps you find clarity through the verses that shaped civilizations.

---

## 🚀 Features

- 🔮 **Multi-Religious Selection** – Choose from Bhagavad Gita, Bible, Quran, and Tanakh
- 🧭 **Dynamic Routing** – Religion-based pages powered by React Router
- 📥 **Form Submission** – Review Form For Users
- ⚙️ **Real-time API Integration** – Backend APIs dynamically generate responses
- 🌐 **Responsive Design** – Works seamlessly on mobile and desktop
- 🧠 **React Context API** – Used for state management across components
- ♻️ **Reusable Components** – Clean and modular React architecture
- ✍️ **Form Validation** – Error handling and validations included

---

## 🧰 Tech Stack

### Frontend
- React.js (Functional Components + Hooks)
- React Router DOM
- React Context API
- Tailwind CSS (**AI-assisted for styling**)
- Vercel (Deployment)

### Backend
- Node.js + Express.js
- MongoDB (via Mongoose)
- Render (Backend Hosting)

### Tools
- Git & GitHub
- Postman (API Testing)
- dotenv (Environment Variables)

---

## 📂 Folder Structure (Frontend)


VerseVibes/
├── backend/
│   ├── controllers/
│   ├── node_modules/
│   ├── services/
│   ├── .env
│   ├── .gitignore
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── dist/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   ├── vercel.json
│   └── README.md
