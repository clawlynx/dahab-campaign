import React from "react";
import { NavLink } from "react-router-dom";
import { handleChatClick } from "../utils/whatsapp";

export default function SmallHeader({ setSmallBar }) {
  return (
    <div className="lg:hidden w-full bg-white py-5">
      <div className="flex flex-col gap-5 items-center">
        
        <button
          className="bg-btnGreen hover:bg-btnHover nav-link text-white rounded-lg px-4 py-2"
          onClick={handleChatClick}
        >
          Contact us
        </button>
      </div>
    </div>
  );
}
