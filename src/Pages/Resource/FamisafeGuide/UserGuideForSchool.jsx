import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { translations } from "../../../Data/translations";

export default function UserGuideForSchool() {
  const { language } = useLanguage();

  /* ================= CONTENT / TEXT ================= */
   const heroContent = language === "en" ? translations.en.heroContent : language === "am" ? translations.am.heroContent : language== "om" ? translations.om.heroContent: "";   
   const introContent = language === "en" ? translations.en.introContent : language === "am" ? translations.am.introContent : language== "om" ? translations.om.introContent: "";
   const guideSections = language === "en" ? translations.en.guideSections : language === "am" ? translations.am.guideSections : language== "om" ? translations.om.guideSections: "";


 

  /* ================= JSX ================= */
  return (
    <section className="w-full bg-gray-50">

      {/* HERO */}
      <div className="border border-[#FFF2EE] bg-[#FFF2EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 flex flex-col-reverse lg:flex-row items-center gap-12">

          {/* LEFT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold leading-tight text-gray-900">
              {heroContent.title}
            </h1>

            <p className="mt-5 text-gray-600 max-w-xl mx-auto lg:mx-0">
              {language === "en"
                ? translations.en.MoniterProtect
                : language === "am"
                ? translations.am.MoniterProtect
                :language == "om" ? translations.om.MoniterProtect : ""}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://famisafe.wondershare.com/main/sign-up"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 font-semibold text-white rounded-lg
                bg-gradient-to-r from-purple-500 to-cyan-400
                hover:from-purple-600 hover:to-cyan-500
                transition shadow-md"
              >
                
                {language === "en" ? translations.en.StartFreeTrial : language === "am" ? translations.am.StartFreeTrial : language== "om" ?  translations.or.StartFreeTrial: ""}
              </a>

              <a
                href="#"
                className="px-6 py-3 rounded-lg border border-purple-600
                text-purple-600 font-semibold hover:bg-purple-600
                hover:text-white transition"
              >
                
                {language === "en" ? translations.en.BuyNow : language === "am" ? translations.am.BuyNow : language== "om" ?  translations.or.BuyNow: ""}
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={heroContent.image}
              alt="App Preview"
              className="w-full max-w-md lg:max-w-lg drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* INTRO */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            {introContent.title}
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {introContent.description}
          </p>

          <a
            href="https://famisafe.wondershare.com/main/sign-up"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 px-8 py-3 font-semibold text-white rounded-lg
            bg-gradient-to-r from-purple-500 to-cyan-400 hover:shadow-lg transition"
          >
            {introContent.button}
          </a>
        </div>

        {/* GUIDE SECTIONS */}
        {guideSections.map((section, index) => (
          <GuideSection
            key={index}
            title={section.title}
            description={section.description}
            steps={section.steps}
            image={section.image}
          />
        ))}
      </div>
    </section>
  );
}

/* ================= REUSABLE SECTION ================= */
function GuideSection({ title, description, steps, image }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 sm:p-10">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>

      {description && (
        <p className="text-gray-600 mb-6 max-w-2xl">{description}</p>
      )}

      <div className="space-y-5">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-600 text-white font-semibold">
              {index + 1}
            </div>
            <p className="text-gray-600">{step}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <img
          src={image}
          alt={title}
          className="w-full max-w-3xl mx-auto rounded-xl shadow-md"
        />
      </div>
    </div>
  );
}