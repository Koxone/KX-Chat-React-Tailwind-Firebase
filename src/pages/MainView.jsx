import React, { useState, useEffect, useRef } from "react";
import Footer from "../components/nav/Footer";
import ChatListcontainer from "../components/containers/ChatListcontainer";
import MainHeader from "../components/header/MainHeader";
import UserSearchModal from "../components/modals/UserSearchModal";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

function MainView() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const inputRef = useRef();

  // Cargar usuarios una sola vez
  useEffect(() => {
    async function fetchUsers() {
      const col = collection(db, "users");
      const snap = await getDocs(col);
      setUsers(snap.docs.map((doc) => ({ uid: doc.id, ...doc.data() })));
    }
    fetchUsers();
  }, []);

  // Mostrar modal si hay texto
  useEffect(() => {
    setShowModal(search.trim() !== "");
  }, [search]);

  // Cerrar modal al hacer click fuera
  useEffect(() => {
    if (!showModal) return;
    const handler = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) setShowModal(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [showModal]);

  // Filtrar usuarios
const filtered = users.filter(
  (user) =>
    user.username &&
    user.username.toLowerCase() === search.toLowerCase()
);

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <div className="relative">
        <MainHeader
          search={search}
          setSearch={setSearch}
          inputRef={inputRef}
          onFocus={() => search && setShowModal(true)}
        />
        <UserSearchModal
          results={filtered}
          visible={showModal}
          inputRef={inputRef}
        />
      </div>
      <div className="flex-1 overflow-y-auto scroll-smooth pb-20">
        <ChatListcontainer />
      </div>
      <Footer />
    </div>
  );
}

export default MainView;
