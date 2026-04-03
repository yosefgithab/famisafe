import React, { useState } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { translations } from "../../../Data/translations";

export default function WhatIsNews() {
  const { language } = useLanguage();

  const [activeTab, setActiveTab] = useState("ios");

  /// TEXT CONTENT (Separated)
  const content = language === "en" ? translations.en.content : language === "am" ? translations.am.content : language== "om" ? translations.om.content: "";   
  

  const timeline = content.timelines[activeTab];

  return (
    <section className="w-full overflow-hidden px-4 sm:px-6 lg:px-0">
  <div className="max-w-7xl mx-auto">
    {/* Hero Section */}
    <div className="ml-4 sm:ml-12 mr-4 sm:mr-12 bg-[#ECF5FE] text-gray-800 h-[55vh] flex items-center justify-center rounded-2xl">
      <div className="text-center px-4 w-full sm:w-6xl max-w-4xl">
        <p>
          <span className="text-sm uppercase tracking-wide text-gray-800">
            {content.titleTop}
          </span>
        </p>

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-4 text-gray-800">
          {content.title}
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-800">
          {content.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-[#0989F9] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-[#4F46E5] transition">
            {content.tryBtn}
          </button>
          <button className="bg-transparent border border-[#0989F9] text-[#0989F9] font-semibold px-6 py-3 rounded-lg hover:bg-[#0989F9] hover:text-white transition">
            {content.buyBtn}
          </button>
        </div>
      </div>
    </div>

    {/* Timeline Section */}
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center sm:justify-center gap-4 border-b mb-8">
        <button
          className={`pb-2 text-lg font-medium ${
            activeTab === "ios"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("ios")}
        >
          {content.tabs.ios}
        </button>
        <button
          className={`pb-2 text-lg font-medium ${
            activeTab === "android"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("android")}
        >
          {content.tabs.android}
        </button>
      </div>

      {/* Timeline */}
      <div className="relative flex flex-col sm:flex-row justify-start">
        {/* Vertical line always left */}
        <div className="absolute left-0 top-0 h-full border-l-2 border-blue-400"></div>

        <div className="space-y-12 sm:space-y-22 pl-8 sm:pl-20">
          {timeline.map((yearItem) => (
            <div
              key={yearItem.year}
              className="flex flex-col sm:flex-row sm:items-start sm:space-x-12 justify-start"
            >
              {/* Year */}
              <div className="mb-4 sm:mb-0 flex flex-col items-center w-24 flex-shrink-0">
                <span className="text-blue-500 font-bold text-xl">
                  {yearItem.year}
                </span>
                <span className="text-blue-500 text-lg mt-1">^</span>
              </div>

              {/* Versions */}
              <div className="flex-1 space-y-6">
                {yearItem.versions.map((v) => (
                  <div key={v.version} className="pl-0 sm:pl-0">
                    <div className="font-bold text-lg">{v.version}</div>
                    <div className="text-gray-500 text-sm mb-2">{v.date}</div>
                    <ul className="list-disc list-inside text-gray-700">
                      {v.changes.map((change, idx) => (
                        <li key={idx}>{change}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
  );
}