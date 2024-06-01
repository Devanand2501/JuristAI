import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

const MenuItem = ({ icon, color, label, content }) => (
  <div class="w-64 p-2">
    <div
      className="relative rounded-lg overflow-hidden p-5"
      style={{ backgroundColor: color }}
    >
      <div className="w-10 h-10 overflow-hidden bg-black rounded-full dark:bg-gray-600 flex items-center justify-center p-5">
        <FontAwesomeIcon icon={icon} />
      </div>

      <div className="p-2">
        {" "}
        <div class="text-white font-bold text-3xl">{label}</div>
        <div className="pt-2 text-aicontainer-text2">{content}</div>
      </div>
    </div>
  </div>
);
function Ai({ selectedChat }) {
  const menuItems = [
    {
      icon: faCog,
      color: "#2A5B60",
      label: "Help",
      content: "lorem is used for ai handling and i dont know what im typing ",
    },
    {
      icon: faCog,
      color: "#2A5B60",
      label: "Help",
      content: "lorem is used for ai handling and i dont know what im typing ",
    },
    {
      icon: faCog,
      color: "#2A5B60",
      label: "Help",
      content: "lorem is used for ai handling and i dont know what im typing ",
    },
    {
      icon: faCog,
      color: "#2A5B60",
      label: "Help",
      content: "lorem is used for ai handling and i dont know what im typing ",
    },
    {
      icon: faCog,
      color: "#2A5B60",
      label: "Help",
      content: "lorem is used for ai handling and i dont know what im typing ",
    },
    {
      icon: faCog,
      color: "#2A5B60",
      label: "Help",
      content: "lorem is used for ai handling and i dont know what im typing ",
    },
    {
      icon: faCog,
      color: "#2A5B60",
      label: "Help",
      content: "lorem is used for ai handling and i dont know what im typing ",
    },
    {
      icon: faCog,
      color: "#2A5B60",
      label: "Help",
      content: "lorem is used for ai handling and i dont know what im typing ",
    },
    {
      icon: faCog,
      color: "#2A5B60",
      label: "Help",
      content: "lorem is used for ai handling and i dont know what im typing ",
    },
    {
      icon: faCog,
      color: "#2A5B60",
      label: "Help",
      content: "lorem is used for ai handling and i dont know what im typing ",
    },
    {
      icon: faCog,
      color: "#2A5B60",
      label: "Help",
      content: "lorem is used for ai handling and i dont know what im typing ",
    },
    {
      icon: faCog,
      color: "#2A5B60",
      label: "Help",
      content: "lorem is used for ai handling and i dont know what im typing ",
    },
    {
      icon: faCog,
      color: "#2A5B60",
      label: "Help",
      content: "lorem is used for ai handling and i dont know what im typing ",
    },
    {
      icon: faCog,
      color: "#2A5B60",
      label: "Help",
      content: "lorem is used for ai handling and i dont know what im typing ",
    },
    {
      icon: faCog,
      color: "#2A5B60",
      label: "Help",
      content: "lorem is used for ai handling and i dont know what im typing ",
    },
    {
      icon: faCog,
      color: "#2A5B60",
      label: "Help",
      content: "lorem is used for ai handling and i dont know what im typing ",
    },
    {
      icon: faCog,
      color: "#2A5B60",
      label: "Help",
      content: "lorem is used for ai handling and i dont know what im typing ",
    },
    {
      icon: faCog,
      color: "#2A5B60",
      label: "Help",
      content: "lorem is used for ai handling and i dont know what im typing ",
    },
    {
      icon: faCog,
      color: "#2A5B60",
      label: "Help",
      content: "lorem is used for ai handling and i dont know what im typing ",
    },
  ];

  return (
    <div className="w-full h-screen  overflow-hidden bg-ai-custom text-white overflow-y-auto">
      {selectedChat ? (
        <div className="flex flex-col justify-center items-start pl-5 pt-10">
          <div className="bg-gray-200 p-4 rounded-lg">
            <div className="text-lg font-semibold">{selectedChat.label}</div>
          </div>
        </div>
      ) : (
        <div>
          <div
            className="absolute inset-x-0 -top-40 z-1 transform-gpu overflow-hidden blur-3xl sm:-top-80 "
            aria-hidden="true"
          ></div>
          <div className="flex text-white flex-col pl-5 pt-10">
            <div className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#E6B323] via-[#30B8BB] to-[#149EAC]">
              Hello, Team
            </div>
            <div className="text-golden text-aicontainer-text2 ">
              {" "}
              How can I help you today?
            </div>
          </div>
          <div class="flex flex-col justify-center items-start pl-5 pt-10">
            <div className="flex text-2xl text-black justify-start">
              Top Features
            </div>
            <div className="grid gap-x-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:gap-x-5 max-h-screen ">
              {menuItems.map((item, index) => (
                <MenuItem
                  icon={item.icon}
                  color={item.color}
                  label={item.label}
                  content={item.content}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      <div class="fixed bottom-0 flex items-center py-2 px-3 bg-gray-50 rounded-lg dark:bg-gray-700 w-[70vw]">
        <button
          type="button"
          class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
        >
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <button
          type="button"
          class="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
        >
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <input
          id="chat"
          rows="1"
          class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your message..."
        ></input>
        <button
          type="submit"
          class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
        >
          <svg
            class="w-6 h-6 rotate-90"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Ai;
