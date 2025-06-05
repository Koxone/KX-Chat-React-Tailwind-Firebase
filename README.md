# KX-Chat – React + Firebase + Tailwind Chat App

KX-Chat is a modern and responsive real-time chat application built with React, Vite, Firebase Authentication, Firestore, and Tailwind CSS. Users can now upload profile pictures via ImgBB during sign-up.

---

## 🚀 Features

- 🔐 Secure user authentication (email & password)
- 👤 Unique usernames per user
- 🖼️ Profile picture upload via ImgBB (image hosting)
- 👥 List and search registered users by username (real-time modal)
- 💬 Real-time 1-to-1 chat system (fully functional)
- 📱 Responsive design with Tailwind CSS
- ☁️ Firebase Firestore for user data and messages

---

## 🛠️ Technologies Used

- **React** (Vite) – Frontend UI
- **Firebase** – Authentication, Firestore, Hosting
- **ImgBB** – Profile image hosting
- **Tailwind CSS** – Utility-first CSS framework

---

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Koxone/KX-Chat-React-Tailwind-Firebase.git
   cd KX-Chat-React-Tailwind-Firebase
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Add your Firebase configuration:**
   - Create `src/firebase/firebaseConfig.js`:
   ```js
   import { initializeApp } from "firebase/app";
   import { getAuth } from "firebase/auth";
   import { getFirestore } from "firebase/firestore";

   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT.firebaseapp.com",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT.appspot.com",
     messagingSenderId: "YOUR_SENDER_ID",
     appId: "YOUR_APP_ID",
   };

   const app = initializeApp(firebaseConfig);
   export const auth = getAuth(app);
   export const db = getFirestore(app);
   ```

4. **Add ImgBB key to `.env.local`:**
   ```env
   VITE_IMGBB_KEY=YOUR_IMGBB_API_KEY
   ```

5. **Run the development server:**
   ```bash
   npm run dev
   ```

6. **Open the app:**
   ```
   http://localhost:5173
   ```

---

## 🔐 Authentication

- Email & password signup/login
- Username required and stored in Firestore
- Profile picture uploaded via ImgBB and saved to Firestore
- Auth-protected routes (users must be signed in to use the app)
- Logout from the app footer

---

## 👥 User Management

- On signup, a user document is created in Firestore `/users/{uid}` with fields: `email`, `username`, `avatar`, `createdAt`.
- All registered users can be fetched from Firestore for listing/searching.
- Users can be searched by username in real time with a floating modal below the search input.
- Exact username matches are shown in search results.

---

## 📁 Folder Structure

```
KX-Chat-React-Tailwind-Firebase/
├── src/
│ ├── assets/
│ ├── components/
│ │ ├── auth/
│ │ ├── buttons/
│ │ ├── cards/
│ │ ├── containers/
│ │ ├── footer/
│ │ ├── header/
│ │ ├── inputs/
│ │ ├── modals/
│ │ └── nav/
│ ├── context/
│ ├── firebase/
│ ├── pages/
│ ├── App.css
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── .firebaserc
├── .gitignore
├── firebase.json
├── firestore.indexes.json
├── firestore.rules
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🌐 Deployment with Firebase Hosting

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase:**
   ```bash
   firebase login
   ```

3. **Initialize Firebase:**
   ```bash
   firebase init
   ```
   - Select `Hosting` and `Firestore`
   - Set `dist` as the public directory (Vite build output)
   - Enable single-page app rewrite

4. **Build the app:**
   ```bash
   npm run build
   ```

5. **Deploy:**
   ```bash
   firebase deploy
   ```

6. **Live app URL:**
   ```
   https://your-project-name.web.app
   ```

---

## ✨ Credits

Developed with ❤️ by [Koxone](https://github.com/Koxone)

---

## 📄 License

This project is licensed under the MIT License.