import { useLanguage } from "../../../context/LanguageContext";
import { translations } from "../../../Data/translations";

export default function FamiSafeHero() {
  const { language } = useLanguage();

  return (
    <section className="w-full bg-white pt-28 pb-12 px-4 sm:pt-32 lg:pt-36">
      {/* Hero Container */}
      <div className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-[#C9BBFF] via-[#D6CCFF] to-[#E9E5FF]">

        {/* Soft Blur Overlay */}
        <div className="absolute inset-0 backdrop-blur-[2px]" />

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 sm:px-12 lg:px-20 py-16 lg:py-20">

          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <img
              src="https://neveragain.allstatics.com/2019/assets/icon/logo/famisafe-square.svg"
              alt="FamiSafe"
              className="h-8 sm:h-9"
            />
          </div>

          {/* Title */}
          <h1 className="font-extrabold text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl leading-tight">
            {language === "en"
              ? translations.en.StartFamiSafeParentalControls
              : language === "am"
              ? translations.am.StartFamiSafeParentalControls
              : language === "om"
              ? translations.om.StartFamiSafeParentalControls
              : ""}
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-gray-800 text-sm sm:text-base md:text-lg max-w-2xl">
            {language === "en"
              ? translations.en.Trustedparents
              : language === "am"
              ? translations.am.Trustedparents
              : language === "om"
              ? translations.om.Trustedparents
              : ""}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">

            {/* Start Free Trial */}
            <a
              href="#"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#6B5CFF] to-[#3CB7FF] text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              {language === "en"
                ? translations.en.StartFreeTrial
                : language === "am"
                ? translations.am.StartFreeTrial
                : language === "om"
                ? translations.om.StartFreeTrial
                : ""}
            </a>

            {/* Buy Now */}
            <a
              href="#"
              className="px-8 py-3 rounded-xl bg-white text-[#6B5CFF] font-semibold shadow hover:bg-gray-50 transition"
            >
              {language === "en"
                ? translations.en.BuyNow
                : language === "am"
                ? translations.am.BuyNow
                : language === "om"
                ? translations.om.BuyNow
                : ""}
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}