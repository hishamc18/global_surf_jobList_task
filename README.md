---

```md
# 🌍 Global Surf Job Listing Task

This project is a full-stack job listing application built as part of a technical task. It includes job creation, fetching, deletion, and user authentication functionalities. The application is split into two parts: a **React frontend** and a **Node.js Express backend**.

---

## 🚀 Features Implemented

### ✅ Task Requirements
- Create a new job post  
- Fetch all job posts  
- Delete a job post  

### ✅ Bonus Features
- Loading states (with custom animation)
- Error handling and user feedback
- Modern folder structure
- Clean, readable, and well-commented code
- `.env` file included for API testing

### ✅ Additional Features (Implemented within task time)
- User registration and login
- JWT-based authentication with cookies
- Role-based deletion (only the creator can delete their job post)
- Responsive UI
- Job detail modal
- Drawer form to create jobs
- Navbar with logout dropdown
- Saved job form state using localStorage

---

## 🛠 Tech Stack

- **Frontend:** React, Redux Toolkit, Tailwind CSS  
- **Backend:** Node.js, Express  
- **Database:** MongoDB  
- **Auth:** JWT with HTTP-only cookies

---

## 📂 Project Structure

```

global\_surf\_jobList\_task/
├── client/         # Frontend (React)
│   └── ...
├── server/         # Backend (Node.js + Express)
│   └── ...
├── .env            # Environment variables for backend
└── README.md       # Project documentation

````

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/hishamc18/global_surf_jobList_task.git
cd global_surf_jobList_task
````

### 2. Install Dependencies

```bash
# For frontend
cd client
npm install

# For backend
cd ../server
npm install
```

### 3. Environment Setup

Create a `.env` file inside the `server/` folder with the following:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4. Run the Application

```bash
# Start backend
cd server
node server.js

# Start frontend
cd ../client
npm run dev
```

Frontend will run at `http://localhost:5173` and backend at `http://localhost:5000`.

---

## 📸 Preview

> Screenshots of the UI (if needed) can be added here

---

## 🙏 Acknowledgement

Thanks for the opportunity to work on this task. Feel free to test the functionalities and review the codebase.

```

---
