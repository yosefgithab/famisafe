import React, { useEffect, useState } from 'react'
import { useLanguage } from '../../../context/LanguageContext'
import { translations } from '../../../Data/translations';
import { TypeAnimation } from 'react-type-animation';

export default function AnnualReport() {
  const { language } = useLanguage();
  const reportData = language === "en" ? translations.en.reportData : language === "am" ? translations.am.reportData : language == "om" ? translations.om.reportData : "";
  const content = language === "en" ? translations.en.content : language === "am" ? translations.am.content : language == "om" ? translations.om.content : "";
  const sections = language === "en" ? translations.en.sections : language === "am" ? translations.am.sections : language == "om" ? translations.om.sections : "";
  
  const [active, setActive] = useState(null);
 

  const [] = useState("intro");

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = "intro";

      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop - 120;
          if (window.scrollY >= top) {
            current = section.id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };



  return (
    <section className="w-full px-4 sm:px-6 lg:px-0">
      <div className="w-full">
        <div className="bg-gradient-to-br from-[#9693FD] via-white to-[#E1DDFF] w-full px-6 sm:px-8 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">

            {/* Badge */}
            <div className="flex justify-center lg:justify-start items-center gap-3 mb-4 flex-wrap">
              <span className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-white">
                {(language === "en"
                  ? translations.en.FamiSafe
                  : language === "am"
                    ? translations.am.FamiSafe
                    : translations.om.FamiSafe)} V8.9
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight space-y-2">

              <span className="block bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400 bg-clip-text text-transparent">
                <TypeAnimation
                  sequence={[
                    language === "en"
                      ? translations.en.NextGen
                      : language === "am"
                        ? translations.am.NextGen
                        : translations.om.NextGen,
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </span>

              <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                <TypeAnimation
                  sequence={[
                    language === "en"
                      ? translations.en.ParentalControlApp
                      : language === "am"
                        ? translations.am.ParentalControlApp
                        : translations.om.ParentalControlApp,
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </span>

              <span className="block bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                <TypeAnimation
                  sequence={[
                    language === "en"
                      ? translations.en.PoweredbyAI
                      : language === "am"
                        ? translations.am.PoweredbyAI
                        : translations.om.PoweredbyAI,
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </span>

            </h1>

            {/* Description */}
            <p className="mt-6 text-gray-600 max-w-xl text-sm sm:text-base mx-auto lg:mx-0">
              {language === "en"
                ? translations.en.description
                : language === "am"
                  ? translations.am.description
                  : translations.om.description}
            </p>

            {/* Button */}
            <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href="https://famisafe.wondershare.com/main/sign-up"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 font-semibold text-white rounded-lg
          bg-gradient-to-r from-purple-500 to-cyan-400
          hover:from-purple-600 hover:to-cyan-500
          transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {language === "en"
                  ? translations.en.StartFreeTrial
                  : language === "am"
                    ? translations.am.StartFreeTrial
                    : translations.om.StartFreeTrial}
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src="https://famisafe.wondershare.com/images/images-2024/semi-annual-report/banner-part.png"
              alt="App Preview"
              className="w-full max-w-[260px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[480px] drop-shadow-2xl"
            />
          </div>

        </div>
        {/* table content */}

        {/* Overlay */}

        <div className="relative max-w-full mx-auto px-6 py-20 bg-[#8E6BC5] text-white rounded-[15px]" >

          {/* Title */}
          <h2 className="text-5xl font-bold mb-12">In this report</h2>

          <div className="grid md:grid-cols-2 gap-16">

            {reportData.map((item) => (
              <div key={item.id}>

                {/* Clickable title */}
                <div
                  onClick={() =>
                    setActive(active === item.id ? null : item.id)
                  }
                  className="flex items-center justify-between cursor-pointer group"
                >
                  <h3 className="text-xl font-semibold group-hover:text-cyan-300 transition">
                    {item.title}
                  </h3>

                  <span className="text-lg font-bold">{item.id}</span>
                </div>

                {/* dotted line */}
                <div className="border-b border-dashed border-white/40 my-2"></div>

                {/* Description */}
                {active === item.id && (
                  <div className="mt-4 text-gray-200 space-y-2">

                    {item.description && (
                      <p>{item.description}</p>
                    )}

                    {item.items && (
                      <ul className="list-disc ml-5 space-y-1">
                        {item.items.map((sub, i) => (
                          <li key={i}>{sub}</li>
                        ))}
                      </ul>
                    )}

                  </div>
                )}
              </div>
            ))}

          </div>
        </div>
        {/* text image */}
        <div className="bg-[#] max-w-full mx-auto flex flex-col md:flex-row items-center gap-10 rounded-[15px] py-22">

          {/* IMAGE */}
          <div className="order-1 md:order-2 w-full flex justify-center">
            <img
              src={content.image}
              alt={content.title}
              className="w-full max-w-md object-contain"
            />
          </div>

          {/* TEXT */}
          <div className="order-2 md:order-1 w-full ml-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 ">
              {content.title}
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8 ">
              {content.description}
            </p>

            <button className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-6 py-3 rounded-full font-medium shadow-md hover:opacity-90 transition">
              {content.buttonText}
            </button>
          </div>

        </div>
        {/* End text image */}
        {/* table contents and description */}
        <div className="flex">
          {/* ================= LEFT TOC ================= */}
          <div className="hidden md:flex flex-col w-35 h-screen sticky top-6 h-screen border-r bg-gray-100 p-6 rounded-lg ">

            {/* Header */}
            <div className="bg-purple-600 text-white text-center py-6 rounded-xl mb-6 font-semibold text-lg">
              Report Highlight
            </div>

            {/* Menu */}
            <div className="flex flex-col gap-2">
              {sections.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-3 py-3 border-b text-left transition-all duration-300
                    ${active === item.id
                      ? "bg-purple-600 text-white font-semibold rounded-xl"
                      : "text-gray-700"
                    }`}
                >
                  {/* Dot Indicator */}
                  <span
                    className={`w-2 h-2 rounded-full ${active === item.id ? "bg-orange-500" : "bg-transparent"
                      }`}
                  ></span>

                  {item.title}
                </button>
              ))}
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="flex-1">
            {sections.map((item) => (
              <section
                key={item.id}
                id={item.id}
                className="min-h-screen flex flex-col justify-start px-6 md:px-16 py-16"
              >
                {/* CONTENT GRID */}
                <div className="grid md:grid-cols-2 gap-10 items-center">

                  {/* TEXT */}
                  <div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-6">
                      {item.title}
                    </h1>

                    <p className="text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* IMAGE */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-xl shadow-md w-full"
                  />
                </div>
              </section>
            ))}
          </div>
        </div>


        {/* End table contents and description */}


      </div>

    </section>
  )
}
