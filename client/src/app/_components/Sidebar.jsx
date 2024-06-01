"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUser, UserButton } from "@clerk/nextjs";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import {
  faBarsStaggered,
  faMessage,
  faQuestionCircle,
  faCog,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";

const MenuItem = ({ icon, label }) => (
  <div className="flex items-center p-2 hover:bg-gray-700 rounded-lg">
    <FontAwesomeIcon icon={icon} className="w-5" />
    <div className="ml-2">{label}</div>
  </div>
);

const ChatConvo = ({ icon, label, onClick }) => (
  <button
    className="flex items-center text-lg p-2 hover:bg-gray-700 rounded-lg w-full"
    onClick={onClick}
  >
    <FontAwesomeIcon icon={icon} className="w-5" />
    <div className="ml-2">{label}</div>
  </button>
);

function Sidebar({ onChatClick }) {
  const [collapsed, setCollapsed] = useState(false);
  const [chatConvos, setChatConvos] = useState([
    { icon: faMessage, label: "Chat Message 1" },
    { icon: faMessage, label: "Chat Message 2" },
    { icon: faMessage, label: "Chat Message 3" },
    { icon: faMessage, label: "Chat Message 4" },
    { icon: faMessage, label: "Chat Message 5" },
    { icon: faMessage, label: "Chat Message 6" },
  ]);
  const [userQuestion, setUserQuestion] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const { user, isSignedIn } = useUser();

  const addNewChat = () => {
    const newChat = {
      icon: faMessage,
      label: `New Chat ${chatConvos.length + 1}`,
    };
    setChatConvos([...chatConvos, newChat]);
  };

  const handleQuestionSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ msg: userQuestion }),
      });
      const data = await response.json();
      setApiResponse(data.answer);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth <= 1250);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`flex flex-col bg-sidebar-background text-white ${
          collapsed ? "w-20" : "w-64"
        } h-full overflow-hidden`}
      >
        <div className="flex justify-between items-center p-4">
          <FontAwesomeIcon
            icon={faBarsStaggered}
            className="text-3xl cursor-pointer"
            onClick={() => setCollapsed(!collapsed)}
          />
          {!collapsed && <div className="text-2xl">ChatGPT Clone</div>}
        </div>

        <div className="flex flex-col p-2 gap-2">
          <button
            className="flex items-center p-2 bg-gray-700 rounded-lg"
            onClick={addNewChat}
          >
            <FontAwesomeIcon icon={faPlusCircle} />
            {!collapsed && <div className="ml-2">New Chat</div>}
          </button>
        </div>

        <div className="flex flex-col flex-grow overflow-y-auto p-2 gap-2">
          <div className="text-sm text-gray-400">Recent</div>
          {chatConvos.map((item, index) => (
            <ChatConvo
              key={index}
              icon={item.icon}
              label={item.label}
              onClick={() => onChatClick(item)}
            />
          ))}
        </div>

        <div className="flex flex-col p-2 gap-2 border-t border-gray-700">
          {[
            { icon: faQuestionCircle, label: "Help" },
            { icon: faCog, label: "Settings" },
          ].map((item, index) => (
            <MenuItem key={index} icon={item.icon} label={item.label} />
          ))}
        </div>

        <div className="flex items-center p-4 border-t border-gray-700">
          <div className="w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600 flex items-center justify-center">
            {isSignedIn ? (
              <UserButton />
            ) : (
              <span className="font-medium text-gray-600 dark:text-gray-300">
                KG
              </span>
            )}
          </div>
          {!collapsed && (
            <div className="ml-2">
              {isSignedIn ? (
                `${user.firstName} ${user.lastName}`
              ) : (
                <Link href={"/sign-in"}>
                  <Button className="bg-transparent text-yellow-500 border border-yellow-500 hover:bg-yellow-500 hover:text-white font-bold py-2 px-4 rounded">
                    Log In
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-grow p-4">
        <div className="flex-grow overflow-y-auto p-4 bg-gray-800 rounded-lg">
          {/* Chat messages would be displayed here */}
          {apiResponse && (
            <div className="p-2 rounded-lg bg-gray-700 text-white">
              {apiResponse}
            </div>
          )}
        </div>
        <div className="flex items-center p-4 bg-gray-700 rounded-lg mt-4">
          <input
            type="text"
            placeholder="Type your question here..."
            value={userQuestion}
            onChange={(e) => setUserQuestion(e.target.value)}
            className="flex-grow p-2 rounded-lg bg-gray-600 text-white mr-4"
          />
          <button
            onClick={handleQuestionSubmit}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
