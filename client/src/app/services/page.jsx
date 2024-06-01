"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "../_components/Sidebar";
import Ai from "../_components/Ai";

function Services() {
  const [selectedChat, setSelectedChat] = useState(null);

  const handleChatClick = (chat) => {
    console.log(chat);
    setSelectedChat(chat);
  };
  return (
    <div className="flex w-screen h-screen flex-row">
      <Sidebar onChatClick={handleChatClick} />

      <Ai selectedChat={selectedChat} />
    </div>
  );
}

export default Services;
