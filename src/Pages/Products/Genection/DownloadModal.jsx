import React from "react";

export default function DownloadModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >
      {/* MODAL BOX */}
      <div
        className="relative bg-[#D9F7C6] rounded-2xl w-full max-w-3xl p-6 sm:p-10 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE ICON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-3xl leading-none"
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* TITLE */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-10">
          Download Wondershare Geonection <br />
          APP for Free
        </h2>

        {/* QR CODES */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
          
          {/* ANDROID */}
          <div className="flex flex-col items-center gap-4">
            <img
              src="https://famisafe.wondershare.com/images/images2022/geonection/google-qrcode.png"
              alt="Android QR"
              className="w-40 h-40 bg-white p-3 rounded-lg shadow"
            />
            <img
              src="https://famisafe.wondershare.com/images/images2022/geonection/btn-google.svg"
              alt="Google Play"
              className="h-10 cursor-pointer"
            />
          </div>

          {/* IOS */}
          <div className="flex flex-col items-center gap-4">
            <img
              src="https://famisafe.wondershare.com/images/images2022/geonection/apple-qrcode.png"
              alt="iOS QR"
              className="w-40 h-40 bg-white p-3 rounded-lg shadow"
            />
            <img
              src="https://famisafe.wondershare.com/images/images2022/geonection/btn-apple.svg"
              alt="App Store"
              className="h-10 cursor-pointer"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
