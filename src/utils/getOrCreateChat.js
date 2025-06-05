import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export async function getOrCreateChat(currentUid, otherUid) {
  const chatId = currentUid > otherUid ? `${currentUid}_${otherUid}` : `${otherUid}_${currentUid}`;

  const chatRef = doc(db, "chats", chatId);
  const snap = await getDoc(chatRef);

  if (!snap.exists()) {
    await setDoc(chatRef, {
      participants: [currentUid, otherUid],
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      lastMessage: "",
    });
  }

  return chatId;
}
