# 🏫 School Directory Portal

A modern **Next.js + MySQL (Aiven Cloud)** based web application to manage schools.  
This project lets you **Add Schools** with images and details, and **View Schools** in a beautiful UI.

---

## 🚀 Features
- 🌟 **Next.js 13** (App Router / Pages based)  
- 🗄️ **MySQL (Aiven Cloud)** integration with SSL certificate  
- 📂 File upload support (school images)  
- 🎨 Modern UI with **Tailwind CSS + Glassmorphism**  
- 📝 Form validation using **react-hook-form**  
- 📋 Schools displayed in a **responsive card layout**  
- ⚡ Fast, responsive and mobile-friendly  

---


### Homepage
- Gradient background with two navigation buttons:
  - ➕ Add School
  - 📋 Show Schools

### Add School
- Form with validations (name, address, city, state, contact, email, image).  
- Gradient + glassmorphism styling.  
- Upload school image directly.

### Show Schools
- Beautiful school cards with:
  - 📍 Address
  - 📞 Contact
  - ✉️ Email  
- Hover effects & responsive grid layout.

---

## 🛠️ Tech Stack
- **Frontend:** Next.js, React, Tailwind CSS  
- **Backend:** Next.js API Routes  
- **Database:** MySQL (Aiven Cloud with SSL)  
- **Validation:** react-hook-form  
- **File Uploads:** Formidable  

---

## 📂 Project Structure
```
📦 school-directory
 ┣ 📂 pages
 ┃ ┣ 📂 api
 ┃ ┃ ┣ addSchool.js
 ┃ ┃ ┣ getSchools.js
 ┃ ┃ ┗ testDB.js
 ┃ ┣ index.js
 ┃ ┣ addSchool.jsx
 ┃ ┗ showSchools.jsx
 ┣ 📂 public
 ┃ ┗ 📂 schoolImages   # uploaded images
 ┣ 📂 lib
 ┃ ┗ db.js             # MySQL connection
 ┣ 📜 README.md
 ┣ 📜 package.json
 ┗ 📜 tailwind.config.js
```

---

## 👨‍💻 Author
- **Lakshya Maheshwari**  
🚀 Passionate about Web Dev, AI, and building real-world projects  

---

⭐ If you like this project, don’t forget to **star the repo**!

