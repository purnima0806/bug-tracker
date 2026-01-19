# Bug Tracker System 🐞

A web-based Bug Tracker application developed using the MERN stack.  
This project is designed for students and small development teams to report, manage, and track software bugs in an organized and secure manner.

---

## 🚀 Features

- User authentication using JWT
- Create, view, update, and delete bug reports
- Bug status tracking (Open / In Progress / Resolved)
- Role-based access (Admin / User)
- Secure REST APIs
- Clean and responsive UI
- Separate frontend and backend architecture

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- JavaScript

### Backend
- Node.js
- Express.js
- JWT Authentication

### Database
- MongoDB (MongoDB Atlas)

---

## 📁 Project Structure
bug-tracker-system/
│
├── backend/
│   ├── config/
│   │   └── db.js                # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js    # Authentication logic
│   │   └── bugController.js     # Bug CRUD operations
│   ├── middleware/
│   │   └── authMiddleware.js    # JWT & role verification
│   ├── models/
│   │   ├── User.js              # User schema
│   │   └── Bug.js               # Bug schema
│   ├── routes/
│   │   ├── authRoutes.js        # Auth endpoints
│   │   └── bugRoutes.js         # Bug endpoints
│   ├── .env                     # Environment variables
│   ├── server.js                # Entry point
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   ├── pages/               # Application pages
│   │   ├── services/            # API calls
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── tailwind.config.js
│   └── package.json
│
├── README.md
└── .gitignore

