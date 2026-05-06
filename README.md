# 🚀 AI App Generator

A dynamic AI-powered application builder that generates forms, tables, APIs, authentication flows, and dashboards using structured JSON configurations.

## 🌐 Live Demo

### Frontend

🔗 [https://ai-app-generator-yw6q.vercel.app](https://ai-app-generator-yw6q.vercel.app)

### Backend

🔗 [https://ai-app-generator-1-wzxt.onrender.com](https://ai-app-generator-1-wzxt.onrender.com)

### Project Demo Video

🔗 [https://www.loom.com/share/e9d8d4b1f73a4576a6126446d341bb18](https://www.loom.com/share/e9d8d4b1f73a4576a6126446d341bb18)

---

# 📌 Features

* ✅ Dynamic Form Rendering
* ✅ Dynamic Table Rendering
* ✅ JSON-based UI Configuration
* ✅ CSV Upload Support
* ✅ Authentication System
* ✅ Localization Support (English / Hindi)
* ✅ Reusable Component Architecture
* ✅ FastAPI Backend Integration
* ✅ React + Vite Frontend
* ✅ Context API State Management
* ✅ Dynamic API Handling

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Vite
* JavaScript
* Context API
* CSS

## Backend

* FastAPI
* Python

## Deployment

* Vercel (Frontend)
* Render (Backend)

---

# 📂 Project Structure

```bash
AI_APP_GENERATOR/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── core/
│   │   └── config.json
│   │
│   └── package.json
│
├── backend/
│   ├── main.py
│   ├── routes/
│   ├── models/
│   └── requirements.txt
│
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone <your-repo-url>
```

---

## 2️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

## 3️⃣ Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

Backend runs on:

```bash
http://127.0.0.1:8000
```

---

# 🔐 Authentication

The project supports configurable authentication.

Example:

```json
"auth": {
  "enabled": true
}
```

If authentication is enabled, users are redirected to the login page.

---

# 🌍 Localization Support

Supports multiple languages:

* English
* Hindi

Language switching is handled dynamically.

---

# 📄 Dynamic Configuration

The application UI is driven using a JSON configuration.

Example:

```json
{
  "entity": "users",
  "type": "form",
  "title": "User Form"
}
```

This makes the platform flexible and scalable.

---

# 📊 CSV Upload Feature

Users can upload CSV files dynamically for bulk data handling.

Features:

* CSV Parsing
* Dynamic Entity Mapping
* Data Rendering

---

# 🎯 Future Improvements

* AI-based Form Generation
* Role-based Authentication
* Database Integration
* Drag-and-Drop UI Builder
* Analytics Dashboard
* PDF/Excel Export
* LLM-based Suggestions

---

# 💡 Use Cases

* Admin Dashboards
* CRM Systems
* Inventory Management
* Dynamic Form Builders
* Internal Tools
* Data Collection Platforms

---

# 👩‍💻 Author

Tanvi Pandey

---

# ⭐ Conclusion

AI App Generator is a scalable and flexible platform that simplifies application development through configuration-driven architecture. It reduces repetitive coding and allows developers to build dynamic applications faster and more efficiently.
