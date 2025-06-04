# KX-Chat – React + Firebase + Tailwind Chat App

KX-Chat is a modern and responsive real-time chat application built with React, Vite, Firebase Authentication, Firestore, and Tailwind CSS.

---

## 🚀 Features

- 🔐 Secure user authentication (email & password)
- 👤 Unique usernames per user
- 👥 List and search registered users by username (modal search)
- 💬 Ready for real-time 1-to-1 chat (user search and selection implemented)
- 📱 Responsive design with Tailwind CSS
- ☁️ Firebase Firestore for user data and messages

---

## 🛠️ Technologies Used

- **React** (Vite) – Frontend UI
- **Firebase** – Authentication, Firestore, Hosting
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

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open the app:**
   ```
   http://localhost:5173
   ```

---

## 🔐 Authentication

- Email & password signup/login
- Username required and stored in Firestore
- Auth-protected routes (users must be signed in to use the app)
- Logout from the app footer

---

## 👥 User Management

- On signup, a user document is created in Firestore `/users/{uid}` with fields: `email`, `username`, `createdAt`.
- All registered users can be fetched from Firestore for listing/searching.
- Users can be searched by username in real time with a floating modal below the search input.
- Only exact username matches are shown in search results.

---

## 📁 Folder Structure

```
KX-Chat-React-Tailwind-Firebase/
├── src/
│ ├── assets/ # Static images/icons
│ ├── components/
│ │ ├── auth/
│ │ │ ├── RequireAuth.jsx
│ │ │ └── UserList.jsx
│ │ ├── buttons/
│ │ │ ├── ChatSendButton.jsx
│ │ │ └── FooterButton.jsx
│ │ ├── cards/
│ │ │ ├── ChatCard.jsx
│ │ │ ├── MessageCardIn.jsx
│ │ │ └── MessageCardOut.jsx
│ │ ├── containers/
│ │ │ ├── ChatListcontainer.jsx
│ │ │ └── MessagesContainer.jsx
│ │ ├── footer/
│ │ │ └── ChatFooter.jsx
│ │ ├── header/
│ │ │ ├── ChatHeader.jsx
│ │ │ └── MainHeader.jsx
│ │ ├── inputs/
│ │ │ ├── AuthMailInput.jsx
│ │ │ ├── AuthPasswordInput.jsx
│ │ │ ├── AuthUserNameInput.jsx
│ │ │ └── SearchInput.jsx
│ │ ├── modals/
│ │ │ └── UserSearchModal.jsx
│ │ └── nav/
│ │ └── Footer.jsx
│ ├── context/
│ │ └── AuthContext.jsx
│ ├── firebase/
│ │ └── firebaseConfig.js
│ ├── pages/
│ │ ├── AuthLoginView.jsx
│ │ ├── ChatView.jsx
│ │ ├── MainView.jsx
│ │ └── SignUpView.jsx
│ ├── App.css
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── .firebaserc
├── .gitignore
├── eslint.config.js
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

3. **Initialize Firebase (if needed):**
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

6. **Your app will be live at:**
   ```
   https://your-project-name.web.app
   ```

---

## ✨ Credits

Developed with ❤️ by [Koxone](https://github.com/Koxone)

---

## 📄 License

This project is licensed under the MIT License.
