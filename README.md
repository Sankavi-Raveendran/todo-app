# Todo App — Full Stack Assessment

This project is a full-stack To-Do application consisting of:

- Backend: Node.js + Express + PostgreSQL
- Frontend: React (Vite)
- Database: PostgreSQL
- Dockerized using docker-compose

## Features

✔ Create tasks  
✔ Display most recent 5 tasks  
✔ Mark tasks as completed  
✔ Completed tasks disappear  
✔ Backend unit tests (Jest + Supertest)  
✔ Frontend unit tests (React Testing Library)  

---

## ⚙️ How to Run

### 1. Install Docker
Make sure Docker and docker-compose are installed.

### 2. Clone the repository
git clone 
cd todo-app

### 3. Start the app
docker-compose up --build

### 4. Access the app

- Backend API: http://localhost:4000/tasks  
- Frontend UI: http://localhost:5173  
- PostgreSQL DB: localhost:5432  

---

## Development Mode (Optional — Without Docker)
### Backend 
cd backend
npm install
npm run dev

### Frontend
cd frontend
npm install
npm run dev