# 🚀 Scheduler App 

A modern **appointment booking platform** where users can share their booking link and allow others to schedule meetings seamlessly.

🌐 **Live Demo:** [🔗 Scheduler App](https://scheduler-app-blue.vercel.app/)

---

# 📌 Overview

Scheduler App is a **full-stack web application** inspired by Calendly.  
It allows users to:

- 🔐 Sign in using Google Authentication  
- 🔗 Share a personalized booking link  
- 📅 Let others book available time slots  
- 📩 Receive booking confirmation emails  

---

# 🛠️ Tech Stack

### 🎨 Frontend
- ⚛️ Next.js 16 (App Router)  
- ⚛️ React.js  
- 🎨 Tailwind CSS (Responsive UI)  

### 🧠 Backend
- 🔌 Next.js API Routes  
- 🗄️ Prisma ORM  

### 🗃️ Database
- 🐘 PostgreSQL (Neon / Supabase / Local)  

### 🔐 Authentication
- 🔑 NextAuth.js (Google OAuth)  

### 📧 Email Service
- 📬 Resend API  

### 🚀 Deployment
- ▲ Vercel  

---

# ✨ Features

### 🔐 Authentication
- 🔑 Google Sign-In (NextAuth)  
- 🛡️ Secure session management  

### 📅 Booking System
- 🔗 Unique user booking link  
- 📆 Date selection  
- ⏳ Dynamic time slot availability  
- ❌ Prevent double booking  

### 📧 Email Confirmation
- 📩 Automated email sent after booking  

### 📊 Dashboard
- 🧾 View and share booking link  
- 📋 Copy-to-clipboard functionality  

### 📱 Responsive Design
- 📲 Fully mobile responsive UI  

---

# 🧑‍💻 How to Run Locally

## 1️⃣ Clone the Repository

```
git clone https://github.com/Sahil0p/Scheduler-app
cd Scheduler-app
```

## 2️⃣ Install Dependencies

```
npm install
```

## 3️⃣ Setup Environment Variables ⚙️

Create a `.env.local` file:

```env

DATABASE_URL=your_database_url

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

RESEND_API_KEY=your_resend_api_key

```

## 4️⃣ Setup Database
```
npx prisma generate
npx prisma migrate dev
```

## 5️⃣ Run the App

```
npm run dev
```

> 👉 Open: `http://localhost:3000`

---

# 🚀 How to Use
## 👤 User Flow
- Login using `Google`
- Go to `Dashboard`
- `Copy` your booking link
- Share with others

## 📅 Booking Flow
- Open booking link
- Select a date
- Choose available time slot
- Enter `name` & `email`
- Confirm booking
- Receive email confirmation 📩

---

# 🎯 Use Cases & Applications
- Freelancers scheduling client calls
- Interview scheduling platform
- Mentorship booking system
- Consulting appointment system
- Internal team meeting scheduler

---

# 🔮 Future Scope & Improvements
- 🔁 Calendar integrations (Google Calendar)
- ⏰ Timezone support
- 💳 Paid bookings (Stripe integration)
- 🔔 Email + SMS reminders
- 📊 Analytics dashboard
- 👥 Multi-user team support
- 🎨 Advanced UI customization
- 📆 Weekly availability settings

---

# 🧠 Learnings
- 🔐 Implemented full authentication flow using NextAuth  
- 🔌 Built REST APIs with Next.js App Router  
- 🗄️ Integrated Prisma with PostgreSQL  
- ⚔️ Handled real-world booking conflicts  
- 📩 Integrated email services (Resend)  

---

# ⭐ Support

If you like this project:

- ⭐ Star the repo  
- 🍴 Fork it  
- 📢 Share with others  

---

# 👨‍💻 Author

**Sahil Ahmed**

- 💼 MERN Stack Developer  
- 🚀 Passionate about building real-world applications  

