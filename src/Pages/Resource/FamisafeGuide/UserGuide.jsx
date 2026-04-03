import React, { useState } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { translations } from "../../../Data/translations";

export default function UserGuide() {

  const { language } = useLanguage();

  // ==================== CONTENT ====================
  const contzent =
    language === "en"
      ? translations.en.contzent
      : language === "am"
        ? translations.am.contzent
        : language === "om"
          ? translations.om.contzent
          : "";
   
           const [activeTab, setActiveTab] = useState(0);

  // ==================== UI ====================
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8">
      <div className="bg-[#FFFFFF] max-w-7xl mx-auto">

        {/* Header */}
        <div className="bg-[#E5E7E7] text-xl sm:text-3xl lg:text-3xl font-bold text-gray-800 py-12 text-center leading-snug rounded-lg">

          <h1 className="text-center font-extrabold">
            {contzent.titlle}
          </h1>

          <div className="p-6 space-y-4">
            <a
              href={contzent.pdfLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B5CF6] underline hover:text-[#7C3AED] text-md"
            >
              {language === "en" ? translations.en.OpensUserGuide : language === "am" ? translations.am.OpensUserGuide : language === "om" ? translations.om.OpensUserGuide : ""}
              
            </a>
          </div>

          <a
            href={contzent.pdfLink}
            download
            className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition text-sm font-medium"
          >
            {language === "en" ? translations.en.DownloadPDF : language === "am" ? translations.am.DownloadPDF : language === "om" ? translations.om.DownloadPDF : ""}
          </a>

        </div>

        <br />

        {/* Layout */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 ">
          {/* Sidebar */}
          <div className="w-full max-w-xs lg:w-72 bg-white border border-gray-200 rounded-xl p-4 sticky top-20 self-start mx-auto lg:mx-0">

            <ul className="space-y-3 text-base text-gray-800">

              {contzent.sidebar.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`p-3 rounded-lg cursor-pointer flex justify-between items-center transition-all
                    ${
                      activeTab === index
                        ? "bg-gradient-to-r from-purple-600 to-purple-400 text-white"
                        : "hover:bg-gray-200"
                    }`}
                >
                  {item} {index > 1 && <span>⌄</span>}
                </li>
              ))}

            </ul>

          </div>

          {/* Right Content */}
          <div className="flex-1 px-2 sm:px-6 py-16 w-full">

            {contzent.steps.map((step, idx) => (

              <div key={idx}>

                <h2 className="text-3xl font-bold text-gray-900 text-center">
                  {step.titlle}
                </h2>

                <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto text-center">
                  {step.description}
                </p>

                {step.sections.map((sec, sidx) => (

                  <div
                    key={sidx}
                    className={`mt-10 rounded-2xl p-8 max-w-3xl mx-auto ${sec.img
                      ? "bg-gray-50 shadow-sm"
                      : "bg-white shadow-md"
                      }`}
                  >

                    <h3 className="text-xl font-semibold mb-4">
                      {sec.stepTitlle}
                    </h3>

                    {sec.description && (
                      <p className="text-gray-600">
                        {sec.description}
                      </p>
                    )}

                    {sec.img && (
                      <img
                        src={sec.img}
                        alt={sec.stepTitlle}
                        className="w-full sm:w-3/4 md:w-1/2 h-auto rounded-lg shadow-md mx-auto"
                      />
                    )}

                  </div>

                ))}

                {/* App Stores */}
                {idx === 0 && (
                  <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:justify-center mt-6">

                    {contzent.appStores.map((store) => (

                      <a
                        key={store.name}
                        href={store.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-black text-white px-4 py-4 rounded-lg text-sm font-bold shadow-xl hover:opacity-90 transition min-w-[160px] justify-center"
                      >

                        <img
                          src={store.icon}
                          alt={store.name}
                          className="h-6 w-6 border-2 rounded-xl object-contain"
                        />

                        <span>{store.name}</span>

                      </a>

                    ))}

                  </div>
                )}

              </div>

            ))}

          </div>

        </div>

        <br />

      </div>
    </section>
  );
}