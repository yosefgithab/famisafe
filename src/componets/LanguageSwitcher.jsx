import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { IoLanguageSharp } from "react-icons/io5";

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  console.log(language, open)

  return (
    <div className="relative">
      <button
        aria-label="Change language"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-gray-600 hover:text-[#7A57EE]"
      >
        <IoLanguageSharp  size={20} />
        <span className="uppercase text-xs">{language}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg w-32">
          {["en", "am", "om"].map((lang) => (
            <button
              key={lang}
              onClick={() => {
                changeLanguage(lang);
                setOpen(false);
              }}
              className="w-full px-4 py-2 text-left hover:bg-gray-100"
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
