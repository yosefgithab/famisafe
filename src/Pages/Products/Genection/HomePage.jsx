import React, { useState } from "react";
import DownloadModal from "./DownloadModal";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      {/* OPEN MODAL BUTTON */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-8 py-3 bg-[#82DA40] text-white font-semibold rounded-lg hover:bg-[#7C3AED] transition"
      >
        Download App
      </button>

      {/* MODAL */}
      {isOpen && <DownloadModal onClose={() => setIsOpen(false)} />}
    </div>
  );
}
