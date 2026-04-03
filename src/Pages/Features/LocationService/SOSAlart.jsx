import { useState } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { translations } from "../../../Data/translations";







export default function SOSAlart() {
    const { language } = useLanguage();
    const platforms = language === "en" ? translations.en.platforms : language === "am" ? translations.am.platforms : language == "om" ? translations.om.platforms : "";
    const tools = language === "en" ? translations.en.tools : language === "am" ? translations.am.tools : language == "om" ? translations.om.tools : "";
    const faqam3fs = language === "en" ? translations.en.faqam3fs : language === "am" ? translations.am.faqam3fs : language == "om" ? translations.om.faqam3fs : "";
      const appStores = language === "en" ? translations.en.appStores : language === "am" ? translations.am.appStores : language == "om" ? translations.om.appStores : "";
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);


    };

    return (
        <section className=" w-full overflow-hidden px-4 sm:px-6 lg:px-0 py-2">
            <div className="bg-gradient-to-r from-[#E9FCF9] to-[#FFF9EE] max-w-7xl mx-auto 
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
                            {language === "en" ? translations.en.SOSlert : language === "am" ? translations.am.SOSlert : language == "om" ? translations.om.SOSlert : ""}
                        </span>
                    </h1>

                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 mb-6 sm:mb-10">
                        {language === "en" ? translations.en.EmergencyhelpSOSa : language === "am" ? translations.am.EmergencyhelpSOSa : language == "om" ? translations.om.EmergencyhelpSOSa : ""}
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
                        src="https://famisafe.wondershare.com/images/fs6/sos/banner-1.png"
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
                    {language === "en" ? translations.en.ProtectourChild : language === "am" ? translations.am.ProtectourChild : language == "om" ? translations.om.ProtectourChild: ""}
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
                                ? translations.en.ForChildrenSendns
                                : language === "am"
                                    ? translations.am.ForChildrenSendns
                                    : language === "om"
                                        ? translations.om.ForChildrenSendns
                                        : ""}
                        </h2>

                        {/* <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 mb-5 sm:mb-6">
                            {language === "en" ? translations.en.GetRealTimeScreenshots : language === "am" ? translations.am.GetRealTimeScreenshots : translations.om.GetRealTimeScreenshots}
                        </p> */}

                        <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
                            <li>{language === "en" ? translations.en.Evenifyourphoneisons : language === "am" ? translations.am.Evenifyourphoneisons : language === "om"
                                ? translations.om.Evenifyourphoneisons
                                : ""}</li>
                            <li> {language === "en" ? translations.en.ClicktheSOSbuttontos : language === "am" ? translations.am.ClicktheSOSbuttontos : language === "om"
                                ? translations.om.ClicktheSOSbuttontos
                                : ""}</li>
                            <li>{language === "en" ? translations.en.Cancelthe : language === "am" ? translations.am.Cancelthe : language === "om"
                                ? translations.om.Cancelthe
                                : ""}</li>
                        </ul>

                    </div>
                </div>
            </div>

            <div className="bg-white py-20 max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">

                {/* LEFT TEXT CONTENT (2 columns) */}
                <div className="lg:col-span-2 order-2 lg:order-1 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
                    <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-gray-800">
                        <li>{language === "en" ? translations.en.FParents : language === "am" ? translations.am.FParents : language == "om" ? translations.om.FParents : ""}</li>
                    </h2>

                    <p className="text-gray-700 text-base sm:text-lg leading-7 mb-6">
                        {language === "en" ? translations.en.Allowingyoutoknowth : language === "am" ? translations.am.Allowingyoutoknowth : language == "om" ? translations.om.Allowingyoutoknowth : ""}
                    </p>

                    <ul className="list-disc list-inside space-y-0 text-gray-600 text-sm sm:text-base">
                        <li> {language === "en" ? translations.en.ReceiveemergencySO : language === "am" ? translations.am.ReceiveemergencySO : language == "om" ? translations.om.ReceiveemergencySO : ""}</li>
                        <li> {language === "en" ? translations.en.YoucanbtaithSOsig : language === "am" ? translations.am.YoucanbtaithSOsig : language == "om" ? translations.om.YoucanbtaithSOsig : ""}</li>
                        <li> {language === "en" ? translations.en.Topreventmisuseo : language === "am" ? translations.am.Topreventmisuseo : language == "om" ? translations.om.Topreventmisuseo : ""}</li>
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
                        {language === "en" ? translations.en.AvoidSituations : language === "am" ? translations.am.AvoidSituations : language == "om" ? translations.om.AvoidSituations : ""}
                    </h2>

                    <p className="text-gray-700 text-base sm:text-lg leading-4 mb-6">
                        {language === "en" ? translations.en.FamiSafeAlert : language === "am" ? translations.am.FamiSafeAlert : language == "om" ? translations.om.FamiSafeAlert : ""}
                    </p>

                    <ul className="list-disc list-inside space-y-0 text-gray-600 text-sm sm:text-basise">
                        <li>{language === "en" ? translations.en.Preventdange : language === "am" ? translations.am.Preventdange : language == "om" ? translations.om.Preventdange : ""}</li>
                        <li>{language === "en" ? translations.en.Improveparentchi : language === "am" ? translations.am.Improveparentchi : language == "om" ? translations.om.Improveparentchi : ""}</li>
                        <li>{language === "en" ? translations.en.Boosttrustbe : language === "am" ? translations.am.Boosttrustbe : language == "om" ? translations.om.Boosttrustbe : ""}</li>
                    </ul>
                </div>

            </div>


            <div className="bg-[#EFFFFB] max-w-7xl mx-auto py-16 lg:py-20 rounded-lg  ml-4">

                {/* TITLE */}
                <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-12">
                    {language === "en" ? translations.en.HowtoUseSOSAle : language === "am" ? translations.am.HowtoUseSOSAle : language == "om" ? translations.om.HowtoUseSOSAle : ""}
                </h2>

                {/* MAIN GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div className="ml-6 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                        <div className="space-y-6 text-gray-800">
                            <div>
                                <h4 className="font-bold">{language === "en" ? translations.en.StepInstaFamiSafe : language === "am" ? translations.am.StepInstaFamiSafe : language == "om" ? translations.om.StepInstaFamiSafe : ""}</h4>
                                <p className="text-sm text-gray-600">
                                    {language === "en" ? translations.en.DownloaamiSafeApp : language === "am" ? translations.am.DownloadamiSafeApp : language == "om" ? translations.om.DownloadamiSafeApp : ""}
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold"> {language === "en" ? translations.en.StepeaAccount : language === "am" ? translations.am.StepeaAccount : language == "om" ? translations.om.StepeaAccount : ""}</h4>
                                <p className="text-sm text-gray-600">
                                    {language === "en" ? translations.en.RegisterWonders : language === "am" ? translations.am.RegisterWonders : language == "om" ? translations.om.RegisterWonders : ""}
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold">{language === "en" ? translations.en.Step3ConnectKidDevice : language === "am" ? translations.am.Step3ConnectKidDevice : language == "om" ? translations.om.Step3ConnectKidDevice : ""}</h4>
                                <p className="text-sm text-gray-600">
                                    {language === "en" ? translations.en.Useyourkidphon : language === "am" ? translations.am.Useyourkidphon : language == "om" ? translations.om.Useyourkidphon : ""}
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

                {/* HORIZONTAL BUTTONS */}
            <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:justify-center">
              {appStores.map((store) => (
                <a
                  key={store.name}
                  href={store.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
        flex items-center gap-3
        bg-black text-white
        px-4 py-4
        rounded-lg
        text-sm font-bold
        shadow-xl
        hover:opacity-90 transition
        min-w-[160px]
        justify-center
      "
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

            </div>
            <br />
            <div className=" max-w-7xl mx-auto">

                {/* TITLE */}
                <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black mb-14">
                    {language === "en" ? translations.en.FindMoreParental : language === "am" ? translations.am.FindMoreParental : language== "om" ? translations.om.FindMoreParental: ""}
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
                    {language === "en" ? translations.en.MoreTipsaboutParentah : language === "am" ? translations.am.MoreTipsaboutParentah : language == "om" ? translations.om.MoreTipsaboutParentah : ""}
                </h2>

                {/* Content */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

                    {/* Left List */}
                    <ul className="space-y-5 text-base text-black md:text-lg">
                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-black"></span>
                            <a href="/best-screen-viewer-apps" className="hover:underline">
                                {language === "en"
                                    ? translations.en.TopGameSitesNotBloc
                                    : language === "am"
                                        ? translations.am.TopGameSitesNotBloc
                                        : language == "om"
                                            ? translations.om.TopGameSitesNotBloc
                                            : ""}
                            </a>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-black"></span>
                            <a href="/free-screen-share-app" className="hover:underline">
                                {language === "en"
                                    ? translations.en.ypasGoogleFamilyLin
                                    : language === "am"
                                        ? translations.am.ypasGoogleFamilyLin
                                        : language == "om"
                                            ? translations.om.ypasGoogleFamilyLin
                                            : ""}
                            </a>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-black"></span>
                            <a href="/bypass-google-family-link" className="hover:underline">
                                {language === "en"
                                    ? translations.en.EasyStepstInstalland
                                    : language === "am"
                                        ? translations.am.EasyStepstInstalland
                                        : language == "om"
                                            ? translations.om.EasyStepstInstalland
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
                                    ? translations.en.OmegleforKidsIsOmegle
                                    : language === "am"
                                        ? translations.am.OmegleforKidsIsOmegle
                                        : language == "om"
                                            ? translations.om.OmegleforKidsIsOmegle
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
                                    ? translations.en.FamilyLinkNotWorki
                                    : language === "am"
                                        ? translations.am.FamilyLinkNotWorki
                                        : language == "om"
                                            ? translations.om.FamilyLinkNotWorki
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
                    {faqam3fs.map((faq, index) => (
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
                    {language === "en" ? translations.en.TheMostReliable : language === "am" ? translations.am.TheMostReliable : language== "om" ? translations.om.TheMostReliable: ""}
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
                        {language === "en" ? translations.en.BuyNow : language === "am" ? translations.am.BuyNow :language== "om" ? translations.om.BuyNow: ""}
                    </button>
                </div>
            </div>
            <br />
        </section>
    )
}
