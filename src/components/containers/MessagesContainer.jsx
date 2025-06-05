// MessagesContainer.jsx
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db, auth } from "../../firebase/firebaseConfig";
import MessageCardIn from "../cards/MessageCardIn";
import MessageCardOut from "../cards/MessageCardOut";
import { getOrCreateChat } from "../../utils/getOrCreateChat";

function MessagesContainer() {
  const { state } = useLocation();
  const otherUser = state?.user;
  const [messages, setMessages] = useState([]);
  const bottomRef = useRef(null);

  useEffect(() => {
    const currentUid = auth.currentUser?.uid;
    if (!currentUid || !otherUser) return;

    (async () => {
      const chatId = await getOrCreateChat(currentUid, otherUser.uid);
      const msgRef = collection(db, "chats", chatId, "messages");
      const q = query(msgRef, orderBy("createdAt", "asc"));

      const unsub = onSnapshot(q, (snap) => {
        const formatted = snap.docs.map((d) => ({
          id: d.id,
          ...d.data(),
        }));
        setMessages(formatted);
      });

      return () => unsub();
    })();
  }, [otherUser]);

  // Auto-scroll al último mensaje cuando llega uno nuevo
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const currentUid = auth.currentUser?.uid;

  return (
    <div className="flex-1 p-3 overflow-y-auto flex flex-col gap-3 pb-28 pt-28">
      {messages.map((msg) =>
        msg.from === currentUid ? (
          // Enviados → verde
          <MessageCardIn
            key={msg.id}
            text={msg.text}
            time={msg.createdAt?.toDate().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          />
        ) : (
          // Recibidos → gris
          <MessageCardOut
            key={msg.id}
            text={msg.text}
            time={msg.createdAt?.toDate().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          />
        )
      )}
      <div ref={bottomRef} />
    </div>
  );
}

export default MessagesContainer;
