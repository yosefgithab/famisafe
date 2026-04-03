import {
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";
import { useLanguage } from "../../../context/LanguageContext";
import { translations } from "../../../Data/translations";
import { ArrowRight } from "lucide-react";

/* ================= SOCIAL LINKS (BRAND COLORS) ================= */
const socialLinks = [
  {
    name: "YouTube",
    icon: FaYoutube,
    url: "https://www.youtube.com/@FamiSafe",
    color: "bg-red-600 hover:bg-red-700",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/famisafe_app/",
    color:
      "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:opacity-90",
  },
  {
    name: "Facebook",
    icon: FaFacebookF,
    url: "https://www.facebook.com/FamiSafeApp/",
    color: "bg-blue-600 hover:bg-blue-700",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    url: "https://twitter.com/FamiSafe",
    color: "bg-sky-500 hover:bg-sky-600",
  },
  {
    name: "TikTok",
    icon: FaTiktok,
    url: "https://www.tiktok.com/@famisafe",
    color: "bg-black hover:bg-gray-900",
  },
];

/* ================= MAIN SECTION ================= */
export default function CommunitySection() {
  const { language } = useLanguage();
   const cardses = language === "en" ? translations.en.cardses : language === "am" ? translations.am.cardses : language== "om" ? translations.om.cardses: "";
  
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* TITLE */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
        {language === "en"
          ? translations.en.GrowTogether
          : language === "am"
            ? translations.am.GrowTogether
            : language== "om" ? translations.om.GrowTogether: ""}
      </h2>

      {/* ================= MOBILE SOCIAL ICONS ================= */}
      <div className="md:hidden flex justify-center gap-4 mb-8">
        {socialLinks.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            className={`w-11 h-11 rounded-full flex items-center justify-center text-white shadow-md transition ${item.color}`}
          >
            <item.icon size={20} />
          </a>
        ))}
      </div>

      {/* ================= MOBILE SLIDER ================= */}
      <div className="md:hidden">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4">
          {cardses
            .filter((item) => !item.social)
            .map((item, index) => (
              <div key={index} className="min-w-[85%] snap-center">
                <Card {...item} />
              </div>
            ))}
        </div>
      </div>

      {/* ================= DESKTOP GRID ================= */}
      <div className="hidden md:grid grid-cols-2 gap-6">
        {cardses.map((item, index) =>
          item.social ? (
            <SocialMediaCard key={index} />
          ) : (
            <Card key={index} {...item} />
          )
        )}
      </div>
    </section>
  );
}

/* ================= CARD ================= */
function Card({ title, desc, image, gradient, link }) {
  return (
    <div
      className={`
        rounded-3xl bg-gradient-to-br ${gradient} p-6
        flex flex-col
        md:flex-row md:items-center
        min-h-[280px]
      `}
    >
      {/* TEXT — 50% ON DESKTOP */}
      <div className="md:w-1/2 md:pr-6">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2">
          {title}
        </h3>

        <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed line-clamp-3">
          {desc}
        </p>

        <a
          href={link}
          aria-label={`Go to ${title}`}
          className="inline-flex w-9 h-9 rounded-full border border-black items-center justify-center hover:bg-black hover:text-white transition"
        >
          <ArrowRight size={18} />
        </a>
      </div>

      {/* IMAGE — 50% ON DESKTOP */}
      <div className="flex justify-end md:justify-center md:w-1/2 mt-4 md:mt-0">
        <img
          src={image}
          alt={title}
          className="
            w-60 h-60 object-contain
            sm:w-36 sm:h-36
            md:w-44 md:h-44
          "
        />
      </div>
    </div>
  );
}



/* ================= SOCIAL MEDIA CARD (DESKTOP) ================= */
function SocialMediaCard() {
  const { language } = useLanguage();
  return (
    <div className="rounded-3xl bg-gradient-to-br from-purple-100 to-indigo-200 p-6 min-h-[280px] flex flex-col justify-center">
      <h3 className="text-xl font-semibold text-center mb-6">
         {language === "en"
          ? translations.en.JoinUsonSocialMedia
          : language === "am"
              ? translations.am.JoinUsonSocialMedia
            : language== "om" ? translations.om.JoinUsonSocialMedia: ""}
      </h3>

      <div className="flex justify-center gap-4 flex-wrap">
        {socialLinks.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md transition transform hover:-translate-y-1 ${item.color}`}
          >
            <item.icon size={22} />
          </a>
        ))}
      </div>
    </div>
  );
}
