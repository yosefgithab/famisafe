import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEllipsisH,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../Data/translations";

const linkClass =
  "hover:text-white transition-colors duration-200 block py-1";

function FooterSection({ title, links }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-800 md:border-none pb-4 md:pb-0">
      {/* HEADER */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-white font-semibold mb-2 md:cursor-default md:pointer-events-none"
      >
        {title}
        <ChevronDown
          className={`md:hidden transition-transform ${
            open ? "rotate-180" : ""
          }`}
          size={18}
        />
      </button>

      {/* LINKS */}
      <ul
        className={`space-y-1 overflow-hidden transition-all duration-300
        ${open ? "max-h-96" : "max-h-0"}
        md:max-h-full`}
      >
        {links.map((item, i) => (
          <li key={i}>
            <a href={item.href} className={linkClass}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const {language} = useLanguage();
  const footerContent = language === "en" ? translations.en.footerContent : language === "am" ? translations.am.footerContent : language == "om" ? translations.om.footerContent : "";
  return (
    <footer className="bg-black text-gray-400">
      {/* TOP */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-10 border-b border-gray-800">

        {/* BRAND */}
        <div>
          <img src="https://neveragain.allstatics.com/2019/assets/icon/logo/famisafe-square.svg" alt="Famisafe" className="h-8 w-8"/>
          <a href="#" className="text-white text-2xl font-semibold block mb-2">
            {footerContent.brand.name}
          </a>
          <p className="italic text-lg text-white mb-4">
            {footerContent.brand.slogan}
          </p>

          <div className="flex gap-4 text-xl">
            <a href="#" className={linkClass}><FaFacebookF /></a>
            <a href="#" className={linkClass}><FaInstagram /></a>
            <a href="#" className={linkClass}><FaXTwitter /></a>
            <a href="#" className={linkClass}><FaYoutube /></a>
            <a href="#" className={linkClass}><FaEllipsisH /></a>
          </div>
        </div>

        <FooterSection
          title={footerContent.sections.heroProducts.title}
          links={footerContent.sections.heroProducts.links}
        />

        <FooterSection
          title={footerContent.sections.wondershare.title}
          links={footerContent.sections.wondershare.links}
        />

        <FooterSection
          title={footerContent.sections.exploreAI.title}
          links={footerContent.sections.exploreAI.links}
        />

        <FooterSection
          title={footerContent.sections.helpCenter.title}
          links={footerContent.sections.helpCenter.links}
        />
      </div>

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm border-b border-gray-800">

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {footerContent.bottomLinks.map((item, i) => (
            <a key={i} href="#" className={linkClass}>
              {item}
            </a>
          ))}
        </div>

        <a href="#" className={linkClass}>
          🌐 {footerContent.language}
        </a>

      </div>

      <div className="text-center text-gray-500 text-sm py-4">
        {footerContent.copyright}
      </div>
    </footer>
  );
}
