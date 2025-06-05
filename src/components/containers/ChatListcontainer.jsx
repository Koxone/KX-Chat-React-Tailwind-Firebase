import React, { useEffect, useState } from "react";
import ChatCard from "../cards/ChatCard";

import { db, auth } from "../../firebase/firebaseConfig";
import { collection, query, where, orderBy, onSnapshot, doc, getDoc } from "firebase/firestore";

function ChatListcontainer() {
  const [chatUsers, setChatUsers] = useState([]);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (!currentUser) return;

    const chatsRef = collection(db, "chats");
    const chatsQuery = query(
      chatsRef,
      where("participants", "array-contains", currentUser.uid),
      orderBy("updatedAt", "desc")
    );

    const unsubscribe = onSnapshot(chatsQuery, async (snapshot) => {
      const chatUserPromises = snapshot.docs.map(async (chatDoc) => {
        const chatData = chatDoc.data();

        const otherUid = chatData.participants.find((uid) => uid !== currentUser.uid);

        const otherUserDoc = await getDoc(doc(db, "users", otherUid));
        const otherUserData = otherUserDoc.exists() ? otherUserDoc.data() : {};

        return {
          uid: otherUid,
          username: otherUserData.username || "Unknown",
          avatar: otherUserData.avatar || "/avatar/profile-pic-2.png",
          lastMessage: chatData.lastMessage || "",
          updatedAt: chatData.updatedAt,
        };
      });

      const users = await Promise.all(chatUserPromises);
      setChatUsers(users);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {chatUsers.length === 0 ? (
        <p className="text-center text-neutral-400 mt-4">No conversations yet</p>
      ) : (
        chatUsers.map((user) => <ChatCard key={user.uid} user={user} />)
      )}
    </div>
  );
}

export default ChatListcontainer;
