
import { useState } from 'react';
import { translations } from '../../Data/translations'
import { useLanguage } from '../../context/LanguageContext';

export default function ScreenViwer() {
    const { language } = useLanguage();
    const platforms = language === "en" ? translations.en.platforms : language === "am" ? translations.am.platforms : language == "om" ? translations.om.platforms : "";
    const tools = language === "en" ? translations.en.tools : language === "am" ? translations.am.tools : language == "om" ? translations.om.tools : "";
    const faqsScreenviwer = language === "en" ? translations.en.faqsScreenviwer : language === "am" ? translations.am.faqsScreenviwer : language == "om" ? translations.om.faqsScreenviwer : "";
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);


    };

    return (
        <section className=" w-full overflow-hidden px-4 sm:px-6 lg:px-0 py-2">
            <div className="bg-gradient-to-r from-[#A899F3] to-[#D0C9FF] max-w-7xl mx-auto 
                                px-4 sm:px-6 lg:px-8 
                                grid grid-cols-1 lg:grid-cols-2 
                                gap-8 sm:gap-10 lg:gap-16 
                                items-center overflow-hidden rounded-lg py-16 sm:py-20">

                {/* LEFT CONTENT */}
                <div className="max-w-xl mx-auto text-center lg:text-left">
                    <p className="text-purple-600 font-semibold mb-3 sm:mb-4">
                        {language === "en" ? translations.en.FamiSafeNewFeature : language === "am" ? translations.am.FamiSafeNewFeature : language == "om" ? translations.om.FamiSafeNewFeature : ""}
                    </p>

                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight mb-4 sm:mb-6">
                        <span className="text-gray-700 px-2 py-1 rounded-lg inline-block">
                            {language === "en" ? translations.en.ScreenTimeControl : language === "am" ? translations.am.ScreenTimeControl : language == "om" ? translations.om.ScreenTimeControl : ""}
                        </span>
                    </h1>

                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 mb-6 sm:mb-10">
                        {language === "en" ? translations.en.Stopendlessscreen : language === "am" ? translations.am.Stopendlessscreen : language == "om" ? translations.om.Stopendlessscreen : ""}
                    </p>

                    {/* BUTTONS */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-6 sm:mb-10">
                        <a href="#try-free" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto bg-[#7620D3B3] text-white 
                                           px-8 sm:px-10 py-3 sm:py-4 
                                           rounded-lg font-semibold shadow-lg 
                                           hover:bg-purple-700 transition">
                                {language === "en" ? translations.en.TryitFrees : language === "am" ? translations.am.TryitFrees : language == "om" ? translations.om.TryitFrees : ""}
                            </button>
                        </a>

                        <a href="#buy-now" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto border-2 border-purple-600 
                                           text-purple-600 px-8 sm:px-10 py-3 sm:py-4 
                                           rounded-lg font-semibold hover:bg-purple-50 transition">
                                {language === "en" ? translations.en.BuyNow : language === "am" ? translations.am.BuyNow : language == "om" ? translations.om.BuyNow : ""}
                            </button>
                        </a>
                    </div>

                    {/* PLATFORMS */}
                    <div className="mb-6 sm:mb-10">
                        <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                            {language === "en" ? translations.en.Availableon : language === "am" ? translations.am.Availableon : language == "om" ? translations.om.Availableon : ""}
                        </p>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
                            {platforms.map(({ name, icon: Icon, color, href }) => (
                                <a
                                    key={name}
                                    href={href}
                                    className="group flex flex-col items-center text-[11px] sm:text-xs text-gray-700"
                                >
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-lg shadow 
                                            flex items-center justify-center mb-1 
                                            transition group-hover:scale-105">
                                        <Icon className={`${color} w-4 h-4 sm:w-5 sm:h-5`} />
                                    </div>
                                    <span className="group-hover:text-purple-600 transition">
                                        {name}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="w-full flex justify-center mt-6 sm:mt-10 lg:mt-0">
                    <img
                        src="https://famisafe.wondershare.com/images/fs6/screen-viewer/banner-1.png"
                        alt="FamiSafe Calls & Messages"
                        className="w-full max-w-[280px] sm:max-w-[420px] lg:max-w-[680px]
                                 h-auto object-contain select-none pointer-events-none"
                    />
                </div>

            </div>
            <br />
            <div className=" bg-white py-10 sm:py-12 max-w-6xl mx-auto px-4 lg:px-6 flex justify-center">
                <h3
                    className="
                  text-xl sm:text-3xl lg:text-4xl 
                  font-bold text-gray-800 
                  text-center
                  break-words
                  leading-snug sm:leading-tight
                "
                >
                    {language === "en" ? translations.en.KeepTrackofYour : language === "am" ? translations.am.KeepTrackofYour : language == "om" ? translations.om.KeepTrackofYour: ""}
                </h3>
            </div>
            <br />


            <div className="bg-white py-14 sm:py-16 lg:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-16 items-center">

                    {/* LEFT IMAGE */}
                    <div className="lg:col-span-1 flex justify-center lg:justify-start">
                        <div className="w-[160px] sm:w-[220px] md:w-[260px] lg:w-[320px]">
                            <img
                                src="https://famisafe.wondershare.com/images/fs6/screen-viewer/con1.png"
                                alt="Call & Messages"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* RIGHT TEXT */}
                    <div className="lg:col-span-2 text-center lg:text-left max-w-xl sm:max-w-2xl mx-auto lg:mx-0">

                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 sm:mb-6 text-gray-800 leading-tight">
                            {language === "en"
                                ? translations.en.GetRealTimeScreenshots
                                : language === "am"
                                    ? translations.am.GetRealTimeScreenshots
                                    : language === "om"
                                        ? translations.om.GetRealTimeScreenshots
                                        : ""}
                        </h2>

                        {/* <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 mb-5 sm:mb-6">
                            {language === "en" ? translations.en.GetRealTimeScreenshots : language === "am" ? translations.am.GetRealTimeScreenshots : translations.or.GetRealTimeScreenshots}
                        </p> */}

                        <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
                            <li>{language === "en" ? translations.en.FamiSafeScreenViewers : language === "am" ? translations.am.FamiSafeScreenViewers : language === "om"
                                ? translations.om.FamiSafeScreenViewers
                                : ""}</li>
                            <li> {language === "en" ? translations.en.Getinstantscreenshots : language === "am" ? translations.am.Getinstantscreenshots : language === "om"
                                ? translations.om.Getinstantscreenshots
                                : ""}</li>
                            <li>{language === "en" ? translations.en.Monitorchildrenbehavior : language === "am" ? translations.am.Monitorchildrenbehavior : language === "om"
                                ? translations.om.Monitorchildrenbehavior
                                : ""}</li>
                            <li>{language === "en" ? translations.en.Seizethemomentsand : language === "am" ? translations.am.Seizethemomentsand : language === "om"
                                ? translations.om.Seizethemomentsand
                                : ""}</li>
                        </ul>

                    </div>
                </div>
            </div>

            <div className="bg-white py-20 max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">

                {/* LEFT TEXT CONTENT (2 columns) */}
                <div className="lg:col-span-2 order-2 lg:order-1 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
                    <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-gray-800">
                        <li>{language === "en" ? translations.en.TakeScheduleTimedScreenshots : language === "am" ? translations.am.TakeScheduleTimedScreenshots : language == "om" ? translations.om.TakeScheduleTimedScreenshots : ""}</li>
                    </h2>

                    <p className="text-gray-700 text-base sm:text-lg leading-7 mb-6">
                        {language === "en" ? translations.en.Shareyourchildscreenconten : language === "am" ? translations.am.Shareyourchildscreenconten : language == "om" ? translations.om.Shareyourchildscreenconten : ""}
                    </p>

                    <ul className="list-disc list-inside space-y-0 text-gray-600 text-sm sm:text-base">
                        <li> {language === "en" ? translations.en.Thescreenshotscanalsoetaken : language === "am" ? translations.am.Thescreenshotscanalsoetaken : language == "om" ? translations.om.Thescreenshotscanalsoetaken : ""}</li>
                        <li> {language === "en" ? translations.en.Youcanselecttheintervalfor : language === "am" ? translations.am.Youcanselecttheintervalfor : language == "om" ? translations.om.Youcanselecttheintervalfor : ""}</li>
                        <li> {language === "en" ? translations.en.Analyzeyourchilddigital : language === "am" ? translations.am.Analyzeyourchilddigital : language == "om" ? translations.om.Analyzeyourchilddigital : ""}</li>
                    </ul>
                </div>

                {/* RIGHT IMAGE (1 column) */}
                <div className="lg:col-span-1 order-1 lg:order-2 relative flex justify-center lg:justify-end">
                    <div className="relative w-[260px] sm:w-[320px] lg:w-[380px]">
                        <img
                            src="https://famisafe.wondershare.com/images/fs6/screen-viewer/con2.png"
                            alt="Call & Messages"
                            className="w-full h-auto "
                        />
                    </div>
                </div>

            </div>

            <div className="bg-white py-20 max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">

                {/* LEFT IMAGE */}
                <div className="lg:col-span-1 relative flex justify-center lg:justify-start">
                    <div className="relative w-[180px] sm:w-[260px] lg:w-[320px]">
                        <img
                            src="https://famisafe.wondershare.com/images/fs6/screen-viewer/con3.png"
                            alt="Call & Messages"
                            className="w-full h-auto "
                        />
                    </div>
                </div>

                {/* RIGHT TEXT (WIDER) */}
                <div className="lg:col-span-2 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-gray-800">
                        {language === "en" ? translations.en.DetectExplicitandPornographic : language === "am" ? translations.am.DetectExplicitandPornographic : language == "om" ? translations.om.DetectExplicitandPornographic : ""}
                    </h2>

                    <p className="text-gray-700 text-base sm:text-lg leading-4 mb-6">
                        {language === "en" ? translations.en.FamiSafeScreenViewerafeguards : language === "am" ? translations.am.FamiSafeScreenViewerafeguards : language == "om" ? translations.om.FamiSafeScreenViewerafeguards : ""}
                    </p>

                    <ul className="list-disc list-inside space-y-0 text-gray-600 text-sm sm:text-basise">
                        <li>{language === "en" ? translations.en.Whendetectinginappropriate : language === "am" ? translations.am.Whendetectinginappropriate : language == "om" ? translations.om.Whendetectinginappropriate : ""}</li>
                        <li>{language === "en" ? translations.en.Byenablingthesuspicious : language === "am" ? translations.am.Byenablingthesuspicious : language == "om" ? translations.om.Byenablingthesuspicious : ""}</li>
                        <li>{language === "en" ? translations.en.Enhanceprotectionandensure : language === "am" ? translations.am.Enhanceprotectionandensure : language == "om" ? translations.om.Enhanceprotectionandensure : ""}</li>
                    </ul>
                </div>

            </div>


            <div className="bg-[#EFFFFB] max-w-7xl mx-auto py-16 lg:py-20 rounded-lg  ml-4">

                {/* TITLE */}
                <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-12">
                    {language === "en" ? translations.en.HowtoCaptureScreenshots : language === "am" ? translations.am.HowtoCaptureScreenshots : language == "om" ? translations.om.HowtoCaptureScreenshots : ""}
                </h2>

                {/* MAIN GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div className="ml-6 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                        <div className="space-y-6 text-gray-800">
                            <div>
                                <h4 className="font-bold">{language === "en" ? translations.en.Step1InstallFamiSafe : language === "am" ? translations.am.Step1InstallFamiSafe : language == "om" ? translations.om.Step1InstallFamiSafe : ""}</h4>
                                <p className="text-sm text-gray-600">
                                    {language === "en" ? translations.en.DownloadamiSafeApp : language === "am" ? translations.am.DownloadamiSafeApp : language == "om" ? translations.om.DownloadamiSafeApp : ""}
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold"> {language === "en" ? translations.en.Step2RegisternAccount : language === "am" ? translations.am.Step2RegisternAccount : language == "om" ? translations.om.Step2RegisternAccount : ""}</h4>
                                <p className="text-sm text-gray-600">
                                    {language === "en" ? translations.en.RegisteraWondershareIDfor : language === "am" ? translations.am.RegisteraWondershareIDfor : language == "om" ? translations.om.RegisteraWondershareIDfor : ""}
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold">{language === "en" ? translations.en.Step3ConnectKidDevice : language === "am" ? translations.am.Step3ConnectKidDevice : language == "om" ? translations.om.Step3ConnectKidDevice : ""}</h4>
                                <p className="text-sm text-gray-600">
                                    {language === "en" ? translations.en.Useyourkidphone : language === "am" ? translations.am.Useyourkidphone : language == "om" ? translations.om.Useyourkidphone : ""}
                                </p>
                            </div>
                        </div>

                        <a
                            href="#more-details"
                            className="inline-block mt-6 text-purple-600 font-medium hover:underline"
                        >
                            {language === "en" ? translations.en.ForMoreDetails : language === "am" ? translations.am.ForMoreDetails : language == "om" ? translations.om.ForMoreDetails : ""} &gt;&gt;
                        </a>

                        <div className="mt-8 ml-6">
                            <button className="bg-purple-600 hover:bg-purple-700 transition text-white px-8 py-4 rounded-full font-semibold shadow-lg">
                                {language === "en" ? translations.en.TryItFreeOnline : language === "am" ? translations.am.TryItFreeOnline : language == "om" ? translations.om.TryItFreeOnline : ""}
                            </button>
                        </div>
                    </div>

                    {/* RIGHT VISUAL */}
                    <div className=" relative flex justify-center">
                        <div className="flex items-center gap-6 scale-90 sm:scale-100">
                            <img
                                src="https://famisafe.wondershare.com/images/feature/famisafe-steps.png"
                                alt="FamiSafe App Screens"
                                className=" rounded-lg max-w-full h-auto object-contain"
                            />

                            {/* OPTIONAL RIVE ANIMATION */}
                            {/*
                                          <div className="absolute inset-0 pointer-events-none">
                                            <RiveComponent />
                                          </div>
                                          */}
                        </div>
                    </div>
                </div>

                {/* DOWNLOAD STORES */}
                <div className="mt-16 text-center">
                    <p className="text-sm text-gray-600 mb-6"> {language === "en" ? translations.en.DownloadFamiSafeon : language === "am" ? translations.am.DownloadFamiSafeon : language== "om" ? translations.om.DownloadFamiSafeon: ""}</p>

                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            "App Store",
                            "Google Play",
                            "Amazon Appstore",
                            "macOS",
                            "Windows",
                            "Chrome Store",
                        ].map((store) => (
                            <a
                                key={store}
                                href="#"
                                className="bg-black text-white px-4 py-2 rounded-md text-xs font-medium hover:opacity-80 transition"
                            >
                                {store}
                            </a>
                        ))}
                    </div>
                </div>

            </div>
            <br />
            <div className=" max-w-7xl mx-auto">

                {/* TITLE */}
                <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black mb-14">
                    {language === "en" ? translations.en.FindMoreParental : language === "am" ? translations.am.FindMoreParental : language== "om"  ? translations.om.FindMoreParental: ""}
                </h2>

                {/* GRID */}
                <div className="border-2 rounded-xl text-purple-600 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-14 gap-x-6 sm:gap-x-10">

                    {Array.isArray(tools) &&
                        tools.map((item, index) => {
                            const Icon = item?.icon;

                            return (
                                <a
                                    key={index}
                                    href="#"
                                    className="group flex flex-col items-center text-center transition"
                                >
                                    {/* ICON */}
                                    {Icon && (
                                        <div
                                            className="relative w-10 h-10 sm:w-10 sm:h-10 mb-4
                                                  flex items-center justify-center rounded-xl
                                                  bg-purple-100 group-hover:bg-purple-600
                                                  group-hover:scale-110 transition-all duration-300
                                                  shadow-sm group-hover:shadow-lg"
                                        >
                                            <Icon className="w-6 h-6 text-purple-600 group-hover:text-white transition" />
                                        </div>
                                    )}

                                    {/* TEXT */}
                                    <span className="text-sm sm:text-base font-medium text-gray-900 group-hover:text-purple-600 transition">
                                        {item?.title}
                                    </span>
                                </a>
                            );
                        })}


                </div>
            </div>
            <br />
            <br />


            <div className="border mx-auto max-w-6xl rounded-3xl bg-[#F6F1FF] px-6 py-14 md:px-16 md:py-20">

                {/* Title */}
                <h2 className="mb-12 text-center text-2xl font-semibold text-black md:text-3xl">
                    {language === "en" ? translations.en.MoreTipsabout : language === "am" ? translations.am.MoreTipsabout : language == "om" ? translations.om.MoreTipsabout : ""}
                </h2>

                {/* Content */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

                    {/* Left List */}
                    <ul className="space-y-5 text-base text-black md:text-lg">
                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-black"></span>
                            <a href="/best-screen-viewer-apps" className="hover:underline">
                                {language === "en"
                                    ? translations.en.BestScreen
                                    : language === "am"
                                        ? translations.am.BestScreen
                                        : language == "om"
                                            ? translations.om.BestScreen
                                            : ""}
                            </a>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-black"></span>
                            <a href="/free-screen-share-app" className="hover:underline">
                                {language === "en"
                                    ? translations.en.FreeScreeShare
                                    : language === "am"
                                        ? translations.am.FreeScreeShare
                                        : language == "om"
                                            ? translations.om.FreeScreeShare
                                            : ""}
                            </a>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-black"></span>
                            <a href="/bypass-google-family-link" className="hover:underline">
                                {language === "en"
                                    ? translations.en.QuickandEasyWays
                                    : language === "am"
                                        ? translations.am.QuickandEasyWays
                                        : language == "om"
                                            ? translations.om.QuickandEasyWays
                                            : ""}
                            </a>
                        </li>
                    </ul>

                    {/* Right List */}
                    <ul className="space-y-5 text-base text-black md:text-lg">
                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-black"></span>
                            <a href="/install-youtube-kids-amazon-fire" className="hover:underline">
                                {language === "en"
                                    ? translations.en.EasyStepstoInstall
                                    : language === "am"
                                        ? translations.am.EasyStepstoInstall
                                        : language == "om"
                                            ? translations.om.EasyStepstoInstall
                                            : ""}
                            </a>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-black"></span>
                            <a href="/private-screenshot-apps" className="hover:underline">
                                {language === "en"
                                    ? translations.en.Leading5Private
                                    : language === "am"
                                        ? translations.am.Leading5Private
                                        : language == "om"
                                            ? translations.om.Leading5Private
                                            : ""}
                            </a>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-black"></span>
                            <a href="/family-link-not-working" className="hover:underline">
                                {language === "en"
                                    ? translations.en.FamilyLinkNotWorking
                                    : language === "am"
                                        ? translations.am.FamilyLinkNotWorking
                                        : language == "om"
                                            ? translations.om.FamilyLinkNotWorking
                                            : ""}
                            </a>
                        </li>
                    </ul>

                </div>

            </div>
            <br />


            <div className="mx-auto max-w-4xl">

                {/* Title */}
                <h2 className="mb-14 text-center text-3xl font-semibold text-black">
                    Related FAQ
                </h2>

                {/* FAQ Items */}
                <div className="divide-y divide-gray-200">
                    {faqsScreenviwer.map((faq, index) => (
                        <div key={index} className="py-6">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex w-full items-center justify-between text-left"
                            >
                                <span className="text-lg font-medium text-black">
                                    {faq.question}
                                </span>

                                <span className="text-2xl font-light text-black">
                                    {openIndex === index ? "−" : "+"}
                                </span>
                            </button>

                            {openIndex === index && (
                                <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-600">
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

            </div>
            <br />

            <div
                className="
                      mx-auto
                      max-w-6xl
                      rounded-3xl
                      bg-gradient-to-r
                      from-[#EFFFFA]
                      via-[#F2F6FF]
                      to-[#F6EEFF]
                      px-6
                      py-16
                      md:px-12
                      md:py-20
                      text-center
                    ">
                {/* Logo + Brand */}
                <div className="mb-8 flex items-center justify-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8B5CF6]">
                        {/* Simple icon placeholder */}
                        <svg
                            width="26"
                            height="26"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="text-white"
                        >
                            <path
                                d="M12 12c2.5 0 4.5-2 4.5-4.5S14.5 3 12 3 7.5 5 7.5 7.5 9.5 12 12 12z"
                                fill="currentColor"
                            />
                            <path
                                d="M4 21c0-4 4-6 8-6s8 2 8 6"
                                stroke="currentColor"
                                strokeWidth="2"
                            />
                        </svg>
                    </div>
                    <span className="text-lg font-semibold text-black">
                        {language === "en" ? translations.en.FamiSafe : language === "am" ? translations.am.FamiSafe :language== "om" ? translations.om.FamiSafe: ""}
                    </span>
                </div>

                {/* Heading */}
                <h2 className="mb-10 text-3xl font-semibold text-black md:text-4xl">
                    {language === "en" ? translations.en.TheMostReliable : language === "am" ? translations.am.TheMostReliable :language== "om" ? translations.om.TheMostReliable: ""}
                </h2>

                {/* Buttons */}
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <button
                        className="
                          rounded-full
                          bg-[#8B5CF6]
                          px-8
                          py-3
                          text-base
                          font-semibold
                          text-white
                          transition
                          hover:bg-[#7C3AED]
                        "
                    >
                        {language === "en" ? translations.en.TryitFrees : language === "am" ? translations.am.TryitFrees : language== "om" ? translations.om.TryitFrees: ""}
                    </button>

                    <button
                        className="
                          rounded-full
                          border-2
                          border-[#8B5CF6]
                          px-8
                          py-3
                          text-base
                          font-semibold
                          text-[#8B5CF6]
                          transition
                          hover:bg-[#8B5CF6]
                          hover:text-white
                        "
                    >
                        {language === "en" ? translations.en.BuyNow : language === "am" ? translations.am.BuyNow : language== "om" ? translations.om.BuyNow: ""}
                    </button>
                </div>
            </div>
            <br />
        </section>
    )
}
