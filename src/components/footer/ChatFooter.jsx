// ChatFooter.jsx
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { auth, db } from "../../firebase/firebaseConfig";
import { getOrCreateChat } from "../../utils/getOrCreateChat";
import ChatSendButton from "../buttons/ChatSendButton";

function ChatFooter() {
  const [text, setText] = useState("");
  const { state } = useLocation();
  const otherUser = state?.user;

  const handleSend = async () => {
    if (!text.trim() || !otherUser) return;

    const currentUid = auth.currentUser.uid;
    const chatId = await getOrCreateChat(currentUid, otherUser.uid);

    // 1) añade mensaje
    await addDoc(collection(db, "chats", chatId, "messages"), {
      from: currentUid,
      text: text.trim(),
      createdAt: serverTimestamp(),
    });

    // 2) actualiza resumen del chat
    await updateDoc(doc(db, "chats", chatId), {
      lastMessage: text.trim(),
      updatedAt: serverTimestamp(),
    });

    setText("");
  };

  return (
    <div className="fixed bottom-0 h-20 inset-x-0 backdrop-blur-md bg-gray-800/60 border-t border-gray-700 shadow-[0_-2px_8px_rgba(0,0,0,0.45)]">
      <div className="mx-auto flex max-w-3xl items-center gap-4 px-6 py-3">
        <input
          className="flex-1 rounded-full bg-gray-700/70 px-4 py-2 text-base text-[var(--text-color-main)] placeholder-gray-400 outline-none"
          type="text"
          placeholder="Write a message…"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <ChatSendButton onClick={handleSend} disabled={!text.trim()} />
      </div>
    </div>
  );
}

export default ChatFooter;
