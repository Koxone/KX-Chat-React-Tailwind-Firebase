import React from 'react';
import ChatCard from '../cards/ChatCard';

// Array de ejemplo, reemplaza esto con tu lista real de usuarios/chats
const chatUsers = [
  { uid: "1", username: "Mom", avatar: "/avatar/profile-pic-2.png" },
  { uid: "2", username: "Jenny", avatar: "/avatar/profile-pic-1.png" },
  // ...agrega más usuarios si tienes
];

function ChatListcontainer() {
  return (
    <div>
      {chatUsers.map(user => (
        <ChatCard key={user.uid} user={user} />
      ))}
    </div>
  );
}

export default ChatListcontainer;
