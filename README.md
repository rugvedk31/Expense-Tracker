# 💰 Expense Tracker Backend

This repository showcases the **backend API** for an Expense Tracker app, built using **Node.js**, **Express.js**, and **MongoDB**. It handles all core backend features like user authentication, expense management, and secure API access.
---

## 🚀 Features

- User Registration & Login with JWT
- Secure Password Hashing using bcrypt
- Create, Read, Update, Delete (CRUD) APIs for Expense Tracking
- Middleware for Authentication
- MongoDB integration with Mongoose
- Environment variable support using dotenv
- Error handling and validation
- Postman collection included for easy API testing

---

## 🗂️ Project Structure

```

backend/
│
├── controllers/
│   ├── auth.controller.js
│   └── expense.controller.js
│
├── models/
│   ├── user.model.js
│   └── expense.model.js
│
├── routes/
│   ├── auth.routes.js
│   └── expense.routes.js
│
├── middleware/
│   └── auth.middleware.js
│
├── config/
│   └── db.js
│
├── .env
├── server.js
└── package.json

```

---

## 🧪 API Testing

All API routes have been tested using **Postman**.

````

APIs include:

- `POST /api/v1/user/register` – Register a new user
- `POST /api/v1/user/login` – Login and receive JWT token
- `POST /api/v1/expense/addExpense` – Add a new expense (auth required)
- `GET /api/v1/expense/getAll` – Get all expenses of the logged-in user
- `PUT /api/v1/expense/update/:id` – Update a specific expense
- `DELETE /api/v1/expense/remove/:id` – Delete a specific expense
- `PUT /api/v1/expense/:id/done` – Mark expense as done

---

## ⚙️ Setup Instructions

1. **Clone the Repository**

```bash
git clone https://github.com/rugvedk31/expense-tracker-backend.git
cd expense-tracker-backend
````

2. **Install Dependencies**

```bash
npm install
```

3. **Create a `.env` file**

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret
```

4. **Start the Server**

```bash
npm run dev
```

> The server should be running at `http://localhost:5000/`

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* dotenv
---
