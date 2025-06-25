# 🚀 HireNest – Your Ultimate Service Marketplace
📁 **Category:** Service Marketplace  
🌐 **Live Website:** [https://hire-nest-by-imran.web.app/](https://hire-nest-by-imran.web.app/)  
📦 **Client Repo:** [GitHub - HireNest-client-assignment_11](https://github.com/programmarimran/HireNest-client-assignment_11)  
🛠️ **Server Repo:** [GitHub - HireNest-server-assignment_11](https://github.com/programmarimran/HireNest-server-assignment_11)  

---

## 📌 Overview

**HireNest** is a full-stack service marketplace web application where users can **offer** their services and **hire** others. It provides a secure, role-based environment with real-time service booking, dynamic dashboards, and a modern UI experience. This project is part of my portfolio and fulfills assignment criteria for a full-stack development course.

---

## 🖼️ Preview

![HireNest Preview](https://i.ibb.co/BVQr3GLY/Screenshot-2025-06-25-114535.png)

- [Others Section Screenshot](https://i.ibb.co/6VPDzBW/Screenshot-2025-06-25-115940.png)
- [Mobile View Screenshot](https://i.ibb.co/KpGP45dt/Screenshot-2025-06-25-120135.png)

---

## 🌟 Core Features

- 🧑‍💼 **Service Posting and Management**
  - Users can post their own services
  - Services can be edited or deleted anytime
  - A user-friendly dashboard to manage posted services

- 💼 **Service Booking System**
  - Users can book services posted by others
  - Service providers can view who booked their services
  - Booking status (e.g., Pending, Approved) can be updated by the provider

- 📋 **Role-Based Dashboards**
  - Separate interfaces for regular users and service providers
  - Easy access to manage and monitor activities

- 🌐 **Modern Navigation & Hero Banner**
  - Responsive and stylish navigation bar (navbar)
  - Engaging hero section on the homepage

- 📥 **Footer with Useful Links**
  - Clean and informative footer on every page
  - Includes contact info and important site links

- 🌙 **Dark/Light Theme Toggle**
  - Seamless theme switching using a toggle button

- 🎨 **Clean & Animated User Interface**
  - Smooth transitions and animations with AOS and Framer Motion
  - Visually appealing, modern layout and interactions

---

## 🧰 Tech Stack & Tools

| Category        | Tools / Libraries                                                  |
|-----------------|--------------------------------------------------------------------|
| Frontend        | React.js, React Router, Context API                                |
| Styling         | Tailwind CSS, DaisyUI                                              |
| Animations      | Framer Motion, AOS, Lottie                                         |
| Auth            | Firebase Authentication + JWT (HTTP-only Cookie)                  |
| HTTP Client     | Axios (`withCredentials` enabled)                                 |
| Notifications   | React Toastify, SweetAlert2                                        |
| UI Components   | Lucide Icons, React Icons, Swiper                                  |
| Build Tools     | Vite, ESLint                                                       |

---

## 📦 Project Dependencies

### ✅ Runtime Dependencies (for the app to run)

| Package                | Description                                  |
|------------------------|----------------------------------------------|
| `@react-pdf/renderer`  | To generate downloadable PDF invoices        |
| `@tailwindcss/vite`    | Tailwind integration with Vite               |
| `aos`                  | Animate On Scroll library                    |
| `axios`                | Promise-based HTTP client                    |
| `firebase`             | For authentication and backend integration   |
| `framer-motion`        | Animation library for React                  |
| `lottie-react`         | Render Lottie animations in React            |
| `lucide-react`         | Icon library used across the UI              |
| `motion`               | Motion utilities (also related to framer)    |
| `react`                | Core React library                           |
| `react-dom`            | React DOM rendering                          |
| `react-icons`          | Popular icons in React                       |
| `react-loading`        | Simple loading spinners                      |
| `react-router`         | Routing library for React                    |
| `react-toastify`       | Toast notification system                    |
| `sweetalert2`          | Pop-up alerts and modals                     |
| `swiper`               | Touch slider library                         |
| `tailwindcss`          | Utility-first CSS framework                  |

---

### 🛠️ Development Dependencies (for development only)

| Package                      | Purpose                                        |
|------------------------------|------------------------------------------------|
| `@eslint/js`                 | JavaScript linting rules                       |
| `@types/react`               | TypeScript types for React                     |
| `@types/react-dom`           | TypeScript types for React DOM                 |
| `@vitejs/plugin-react`       | React plugin for Vite                          |
| `daisyui`                    | Tailwind component library                     |
| `eslint`                     | JavaScript/React linting tool                  |
| `eslint-plugin-react-hooks`  | Best practices for React hooks                 |
| `eslint-plugin-react-refresh`| React fast refresh linting support             |
| `globals`                    | Shared global variables for ESLint             |
| `vite`                       | Next-generation frontend build tool            |

---

## 🛠️ Getting Started (Run Locally)

```bash
# 1. Clone the Repository & Go to Project Folder
git clone https://github.com/programmarimran/HireNest-client-assignment_11.git
cd HireNest-client-assignment_11

# 2. Install Dependencies
npm install

# 3. Create .env file and add the following
# (create a .env file manually and paste this)
VITE_api_url=https://your-server-api.com
VITE_FIREBASE_API_KEY=your-firebase-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-id
VITE_FIREBASE_APP_ID=your-app-id

# 4. Run the Development Server
npm run dev

# App will run at:
# http://localhost:5173
```

---

## 👨‍💻 Developer Information

| Detail         | Info                                                   |
|----------------|--------------------------------------------------------|
| 👨‍💻 Developer   | Md Imran Hasan                                         |
| 💼 Role         | React & MERN Stack Web Developer, JavaScript Enthusiast |
| 📬 Email        | programmarimran@gmail.com                              |
| 🌐 Portfolio    | Coming Soon                                            |
