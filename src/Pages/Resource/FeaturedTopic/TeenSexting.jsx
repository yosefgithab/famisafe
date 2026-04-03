import React, { useState } from 'react'
import { translations } from '../../../Data/translations'
import { useLanguage } from '../../../context/LanguageContext';
import { AlertTriangle, Ban, HelpCircle, ShieldCheck, Smartphone } from 'lucide-react';

export default function TeenSexting() {
  const [activeTab, setActiveTab] = useState("why");

  const tabs = [
    {
      id: "why",
      title: "Why Do Teens Sext",
      icon: ShieldCheck,
      color: "bg-purple-500",
      content:
        "Teens may sext due to peer pressure, curiosity, relationships, or lack of awareness about consequences.",
    },
    {
      id: "danger",
      title: "The Dangers of Sexting",
      icon: AlertTriangle,
      color: "bg-teal-500",
      content:
        "Sexting can lead to blackmail, cyberbullying, mental stress, and permanent digital footprint issues.",
    },
    {
      id: "apps",
      title: "Apps Parents Must Know",
      icon: Smartphone,
      color: "bg-yellow-500",
      content:
        "Parents should monitor apps like Snapchat, Instagram, WhatsApp, and TikTok.",
    },
    {
      id: "deal",
      title: "Deal with Teen Sexting",
      icon: Ban,
      color: "bg-purple-400",
      content:
        "Stay calm, communicate openly, educate about digital safety, and seek professional help if needed.",
    },
    {
      id: "related",
      title: "Related Sexting Topics",
      icon: HelpCircle,
      color: "bg-orange-500",
      content:
        "Topics include online grooming, sextortion, digital consent, and cybercrime prevention.",
    },
  ];
  const activeContent = tabs.find((tab) => tab.id === activeTab);

  const { language } = useLanguage();
  return (
    <section className="w-full overflow-hidden px-4 sm:px-6 lg:px-0 bg-white">
      <div className="max-w-7xl mx-auto">


        <div className="max-w-7xl bg-gradient-to-br from-[#F3EDFF] via-white to-[#D0F4EE] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-4">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left ml-8">



            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight
            bg-gradient-to-r from-purple-600 via-[#5FB0AE] to-[#04FCF8]
            bg-clip-text text-transparent">
              Teen Sexting: What Should Parents Be Aware Of?
            </h2>

            {/* Hashtags */}
            <div className="mt-8 flex flex-col items-center lg:items-start gap-4">

              {/* Top */}
              <p className="bg-white/70 backdrop-blur-md text-gray-700 
                          px-6 py-3 rounded-xl shadow-sm 
                          text-sm sm:text-base font-medium">
                Teen sexting is on the rise. For most teens, it seems fun and harmless, but the dangers of sexting are also unpredictable. So, what should parents know and do for teen sexting?
              </p>

              {/* Bottom Two */}

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="https://famisafe.wondershare.com/images/images-2024/attitude/pic-banner.png"
              alt="App Preview"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl drop-shadow-2xl"
            />
          </div>

        </div>
        <div className="max-w-7xl mx-auto px-4">

          {/* TABS HEADER */}
          <div className="flex overflow-x-auto no-scrollbar gap-6 pb-4 border-b">

            {tabs.map((tab) => {
              const Icon = tab.icon;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 min-w-max px-4 py-3 rounded-full transition-all duration-300
                ${activeTab === tab.id
                      ? "bg-white shadow-md"
                      : "hover:bg-white/60"
                    }`}
                >
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full text-white ${tab.color}`}
                  >
                    <Icon size={18} />
                  </div>

                  <span
                    className={`font-medium whitespace-nowrap ${activeTab === tab.id
                        ? "text-black"
                        : "text-gray-600"
                      }`}
                  >
                    {tab.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* TAB CONTENT */}
          <div className="mt-8 bg-white p-8 rounded-2xl shadow-sm transition-all duration-300">
            <h2 className="text-2xl font-bold mb-4">
              {activeContent.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {activeContent.content}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
