import React from 'react'
import { translations } from '../../../Data/translations'
import { useLanguage } from '../../../context/LanguageContext';

export default function ForScholl() {
    const { language } = useLanguage();
    
    const cards = language === "en" ? translations.en.cards : language === "am" ? translations.am.cards : language== "om" ? translations.om.cards: "";
    
    const featuress = language === "en" ? translations.en.featuress : language === "am" ? translations.am.featuress : language== "om" ? translations.om.featuress: "";
    return (
        <section id="download-area"
        // className="border pt-12 sm:pt-16 lg:pt-20 pb-14 sm:pb-16 bg-gradient-to-br from-purple-50 to-indigo-50 overflow-hidden"
        >
            <div className="bg-[#FFF2EE] max-w-7xl mx-auto px-4 h-140 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                {/* LEFT CONTENT */}
                <div className="text-center lg:text-left">
                    <div className="flex justify-center lg:justify-start items-center gap-3 mb-3 flex-wrap">
                        <span className="text-sm font-medium text-gray-700"></span>

                    </div>

                    <h1 className="  text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight">
                        {language === "en" ? translations.en.FamiSafeKeeps : language === "am" ? translations.am.FamiSafeKeeps : language== "om" ? translations.or.FamiSafeKeeps: ""}

                    </h1>



                    <p className="mt-4 text-gray-600 max-w-xl text-sm sm:text-base mx-auto lg:mx-4">
                        {language === "en" ? translations.en.MoniterProtect : language === "am" ? translations.am.MoniterProtect : language== "om" ? translations.or.MoniterProtect: ""}
                    </p>

                    {/* Buttons */}
                    <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start flex-wrap">
                        <a
                            href="https://famisafe.wondershare.com/main/sign-up"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-3 font-semibold text-white rounded-lg 
                         bg-gradient-to-r from-purple-500 to-cyan-400 
                         hover:from-purple-600 hover:to-cyan-500 
                         transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                            {language === "en" ? translations.en.StartFreeTrial : language === "am" ? translations.am.StartFreeTrial : language== "om" ? translations.or.StartFreeTrial: ""}
                        </a>

                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border 
                         border-purple-600 text-purple-600 font-semibold 
                         hover:bg-purple-600 hover:text-white 
                         transition-all duration-300"
                        >
                            {language === "en" ? translations.en.BuyNow : language === "am" ? translations.am.BuyNow : language== "om" ? translations.or.BuyNow: ""}
                        </a>
                    </div>


                </div>

                {/* RIGHT IMAGE */}
                <div className="relative flex justify-center lg:justify-end">
                    <img
                        src="assets/images/hero/school-banner-pic-2021.png"
                        alt="App Preview"
                        className="w-full max-w-[260px] sm:max-w-[340px] md:max-w-[420px] xl:max-w-[520px] 
                       drop-shadow-2xl"
                    />
                </div>
            </div>
            <br />
            <br />
            {/* Title */}
            <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-900 mb-12">
                {language === "en" ? translations.en.Technologyinschool : language === "am" ? translations.am.Technologyinschool : language== "om" ?  translations.or.Technologyinschool: ""}
            </h2>

            {/* Grid */}
            <div className=" ml-12 mr-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`${card.bg} rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6`}
                    >
                        {/* Image */}
                        <img
                            src={card.img}
                            alt={card.title}
                            className="w-40 md:w-48 flex-shrink-0"
                        />

                        {/* Content */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {card.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                {card.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <br />
            <br /> <h2 className="text-center text-2xl md:text-3xl font-semibold mb-16">
                {language === "en" ? translations.en.FamiSafeprotectsall : language === "am" ? translations.am.FamiSafeprotectsall : language== "om" ? translations.or.FamiSafeprotectsall: ""}
            </h2>

            {/* ✅ MOBILE VIEW (EXACT FAMISAFE) */}
            <div className="space-y-14 md:hidden">
                {featuress.map((item, index) => (
                    <div key={index} className="text-center">
                        {/* Icon */}
                        <div
                            className={`${item.color} w-16 h-16 mx-auto rounded-full flex items-center justify-center shadow-lg mb-4`}
                        >
                            <item.icon className="text-white w-7 h-7" />
                        </div>

                        <h3 className="font-semibold text-lg mb-6">{item.title}</h3>

                        {/* Card */}
                        <div
                            className={`${item.cardBg} rounded-2xl p-6 mx-auto max-w-85 shadow-sm`}
                        >
                            <ul className="space-y-4 text-left">
                                {item.points.map((point, i) => (
                                    <li key={i} className="flex gap-4">
                                        <span
                                            className={`${item.pointColor} text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0`}
                                        >
                                            {i + 1}
                                        </span>
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            {point}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                ))}
            </div>

            {/* ✅ DESKTOP & TABLET (UNCHANGED) */}
            <div className="hidden md:block">
                {/* Icons */}
                <div className="grid grid-cols-3 gap-12 text-center mb-14">
                    {featuress.map((item, index) => (
                        <div key={index}>
                            <div
                                className={`${item.color} w-16 h-16 mx-auto rounded-full flex items-center justify-center shadow-lg mb-4`}
                            >
                                <item.icon className="text-white w-7 h-7" />
                            </div>
                            <h3 className="font-semibold">{item.title}</h3>
                        </div>
                    ))}
                </div>

                {/* Cards */}
                <div className="grid grid-cols-3 gap-6">
                    {featuress.map((item, index) => (
                        <div
                            key={index}
                            className={`${item.cardBg} rounded-2xl p-8`}
                        >
                            <ul className="space-y-4">
                                {item.points.map((point, i) => (
                                    <li key={i} className="flex gap-4">
                                        <span
                                            className={`${item.pointColor} text-white w-6 h-6 rounded-full flex items-center justify-center text-sm`}
                                        >
                                            {i + 1}
                                        </span>
                                        <p className="text-gray-700">{point}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <br />
            <br />


            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-14">
                {language === "en" ? translations.en.WhyisFamiSafe : language === "am" ? translations.am.WhyisFamiSafe :  language== "om" ? translations.or.WhyisFamiSafe: ""}
            </h2>

            {/* Content */}
            <div className="border-2 border-purple-300 grid
        grid-cols-1 
        md:grid-cols-2 
        gap-10 
        md:gap-14 
        items-center mr-8 ml-8 p-10 rounded-3xl">
                {/* LEFT – Illustration */}
                <div className="flex justify-center">
                    <img
                        src="assets/images/hero/school-banner-pic-2021.png"
                        alt="FamiSafe illustration"
                        className="w-full max-w-md md:max-w-lg"
                    />
                </div>

                {/* RIGHT – Text Content */}
                <div className="space-y-10">
                    {/* Item 1 */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">
                            {language === "en" ? translations.en.ScreenSupervision : language === "am" ? translations.am.ScreenSupervision : language== "om" ? translations.or.ScreenSupervision: ""}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {language === "en" ? translations.en.Asphoneortablet : language === "am" ? translations.am.Asphoneortablet : language== "om" ? translations.or.Asphoneortablet: ""}
                        </p>
                    </div>

                    <hr className="border-gray-200" />

                    {/* Item 2 */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">
                            {language === "en" ? translations.en.AppBlocker : language === "am" ? translations.am.AppBlocker : language== "om" ? translations.or.AppBlocker: ""}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {language === "en" ? translations.en.Studentsneedtofocus : language === "am" ? translations.am.Studentsneedtofocus : language== "om" ? translations.or.Studentsneedtofocus: ""}
                        </p>
                    </div>

                    <hr className="border-gray-200" />

                    {/* Item 3 */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">
                            {language === "en" ? translations.en.OnlineSafety : language === "am" ? translations.am.OnlineSafety : translations.or.OnlineSafety}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {language === "en" ? translations.en.Theonlineworld : language === "am" ? translations.am.Theonlineworld : translations.or.Theonlineworld}
                        </p>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <header className="w-full bg-[#342463]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between min-h-[140px] lg:min-h-[180px] py-20 gap-6">

                        {/* LEFT SIDE */}
                        <div className="flex flex-col gap-3 text-center lg:text-left">
                            {/* LOGO */}
                            <div className="flex items-center justify-center lg:justify-start gap-3">
                                <div className="w-10 h-10 rounded-xl bg-[#F3F1F4FF] flex items-center justify-center">
                                    <img
                                        src="https://neveragain.allstatics.com/2019/assets/icon/logo/famisafe-square.svg"   // change path if needed
                                        alt="User"
                                        className="w-10 h-10 object-contain"
                                    />
                                </div>

                                <span className="text-white font-semibold text-lg">
                                     {language === "en" ? translations.en.FamiSafe : language === "am" ? translations.am.FamiSafe : language== "om" ? translations.or.FamiSafe: ""}
                                </span>
                            </div>

                            {/* HEADLINE */}
                            <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                                {language === "en" ? translations.en.TheMostReliable : language === "am" ? translations.am.TheMostReliable : language== "om" ? translations.or.TheMostReliable: ""}
                            </h1>
                        </div>

                        {/* RIGHT SIDE BUTTONS */}
                        <div className="flex items-center gap-4">
                            {/* TRY IT FREE */}
                            <button className="px-7 py-3 rounded-full bg-[#8E6CE9] text-white font-semibold text-sm sm:text-base hover:bg-[#7a5bd6] transition">
                                 {language === "en" ? translations.en.TryitFrees : language === "am" ? translations.am.TryitFrees : language== "om" ? translations.or.TryitFrees: ""}
                            </button>

                            {/* BUY NOW */}
                            <button className="px-7 py-3 rounded-full border-2 border-white text-white font-semibold text-sm sm:text-base hover:bg-white hover:text-[#342463] transition">
                                 {language === "en" ? translations.en.BuyNow : language === "am" ? translations.am.BuyNow : language== "om" ? translations.or.BuyNow: ""}
                            </button>
                        </div>

                    </div>
                </div>
            </header>
        </section>
    )
}
