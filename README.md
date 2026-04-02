# 🚀 MERN Role-Based Content Management System

## 📌 Project Overview

This is a full-stack MERN application where users can view content and admins can perform full CRUD operations. The application implements authentication using JWT and role-based access control.

---

## 🎯 Features

### 👤 User (Guest or Logged-in User)

* View all content
* View single content
* Cannot create, update, or delete content

### 👨‍💻 Admin

* Create content
* Update content
* Delete content
* View all content

---

## 🔐 Authentication

* JWT-based authentication
* Secure login and registration system
* Token stored in localStorage
* Protected routes using middleware

---

## 🛡️ Role-Based Access Control (RBAC)

* Two roles: **user** and **admin**
* Admin has full access to content management
* User has read-only access
* Backend enforces access using middleware

---

## 🏗️ Tech Stack

### Frontend

* React.js
* Axios
* React Router

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Authentication & Security

* JWT (JSON Web Token)
* bcryptjs (password hashing)

---

## 📁 Project Structure

```
backend/
├── controllers/
├── models/
├── routes/
├── middlewares/
└── utils/

frontend/
├── components/
├── pages/
├── services/
└── App.jsx
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
```

Create a `.env` file:

```
JWT_SECRET=your_secret_key
```

Run server:

```
npm start
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm run dev
```

---

## 🔌 API Endpoints

### 🔐 Auth Routes

* `POST /api/auth/register` → Register user
* `POST /api/auth/login` → Login user

### 📄 Content Routes

* `GET /api/content` → Get all content (Public)
* `GET /api/content/:id` → Get single content (Public)
* `POST /api/content` → Create content (Admin only)
* `PUT /api/content/:id` → Update content (Admin only)
* `DELETE /api/content/:id` → Delete content (Admin only)

---

## 🧪 Testing

* APIs tested using Postman
* Authentication and role-based restrictions verified
* Edge cases handled (invalid token, unauthorized access)

---

## 💡 Key Learnings

* Implemented JWT authentication
* Role-based authorization (RBAC)
* Secure API design with middleware
* Full-stack integration (React + Node.js)

---

## 🚀 Future Improvements

* Add Protected Routes in frontend
* Add UI styling (CSS / Tailwind)
* Add pagination & search
* Add user profile management
* Improve security (role assignment restrictions)

---

## 👨‍💻 Author

**Gareeb Nawaz**
MERN Stack Developer

---

## ⭐ If you like this project

Give it a star ⭐ on GitHub
