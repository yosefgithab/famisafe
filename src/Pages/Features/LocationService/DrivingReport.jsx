
import React, { useEffect, useState } from 'react'
import { translations } from '../../../Data/translations';
import { useLanguage } from '../../../context/LanguageContext';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function DrivingReport() {
  const { language } = useLanguage();
  
  const steps = language === "en" ? translations.en.steps : language === "am" ? translations.am.steps : language == 'om' ? translations.om.steps : ""; 
  const postqs = language === "en" ? translations.en.postqs : language === "am" ? translations.am.postqs : language == 'om' ? translations.om.postqs : "";
  

  

  const [current, setCurrent] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const updateSlides = () => {
      setSlidesPerView(window.innerWidth >= 768 ? 3 : 1);
      setCurrent(0);
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const totalSlides = Math.ceil(postqs.length / slidesPerView);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const appStores = language === "en" ? translations.en.appStores : language === "am" ? translations.am.appStores : language == "om" ? translations.om.appStores : "";
  const platforms = language === "en" ? translations.en.platforms : language === "am" ? translations.am.platforms : language == 'om' ? translations.om.platforms : "";
  const tools = language === "en" ? translations.en.tools : language === "am" ? translations.am.tools : language == 'om' ? translations.om.tools : "";
  const faqam5s = language === "en" ? translations.en.faqam5s : language === "am" ? translations.am.faqam5s : language == 'om' ? translations.om.faqam5s : ""; 
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (

    <section className="w-full overflow-hidden px-4 sm:px-6 lg:px-0">
      <div className="max-w-7xl mx-auto">

        <div className="bg-gradient-to-r from-[#E9FCF9] to-[#E9FCF9] max-w-7xl mx-auto 
                    px-4 sm:px-6 lg:px-8 
                    grid grid-cols-1 lg:grid-cols-2 
                    gap-8 sm:gap-10 lg:gap-16 
                    items-center overflow-hidden rounded-lg py-16 sm:py-20">

          {/* LEFT CONTENT */}
          <div className="max-w-xl mx-auto text-center lg:text-left">
            <p className="text-purple-600 font-semibold mb-3 sm:mb-4">
              {language === "en" ? translations.en.FamiSafeNewFeature : language === "am" ? translations.am.FamiSafeNewFeature : language == 'om' ? translations.om.FamiSafeNewFeature : ""}
            </p>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight mb-4 sm:mb-6">
              <span className="text-gray-700 px-2 py-1 rounded-lg inline-block">
                {language === "en" ? translations.en.EncourageGoodD : language === "am" ? translations.am.EncourageGoodD : language == "om" ? translations.om.EncourageGoodD : ""}
              </span>
            </h1>

            <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 mb-6 sm:mb-10">
              {language === "en" ? translations.en.Receivedetaileddrivi : language === "am" ? translations.am.Receivedetaileddrivi : language == "om" ? translations.om.Receivedetaileddrivi : ""}
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-6 sm:mb-10">
              <a href="#try-free" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-[#7620D3B3] text-white 
                               px-8 sm:px-10 py-3 sm:py-4 
                               rounded-full font-semibold shadow-lg 
                               hover:bg-purple-700 transition">
                  {language === "en" ? translations.en.TryitFrees : language === "am" ? translations.am.TryitFrees : language == 'om' ? translations.om.TryitFrees : ""}
                </button>
              </a>

              <a href="#buy-now" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto border-2 border-purple-600 
                               text-purple-600 px-8 sm:px-10 py-3 sm:py-4 
                               rounded-full font-semibold hover:bg-purple-50 transition">
                  {language === "en" ? translations.en.BuyNow : language === "am" ? translations.am.BuyNow : language == 'om' ? translations.om.BuyNow : ""}
                </button>
              </a>
            </div>

            {/* PLATFORMS */}
            <div className="mb-6 sm:mb-10">
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                {language === "en" ? translations.en.Availableon : language === "am" ? translations.am.Availableon : language == 'om' ? translations.om.Availableon : ""}
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
                {platforms.map(({ name, icon: Icon, color, href }) => (
                  <a
                    key={name}
                    href={href}
                    className="group flex flex-col items-center text-[11px] sm:text-xs text-gray-700"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10  rounded-lg shadow 
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
              src="https://famisafe.wondershare.com/images/feature/2021/detect-text/parental-alerts.png"
              alt="FamiSafe Calls & Messages"
              className="w-full max-w-[280px] sm:max-w-[420px] lg:max-w-[680px]
                     h-auto object-contain select-none pointer-events-none"
            />
          </div>

        </div>
        <br />
        <br />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* TOP TEXT (ABOVE UI) */}
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-3xl font-extrabold text-gray-900 leading-tight max-w-3xl sm:max-w-4xl mx-auto">
              {language === "en" ? translations.en.CanIcheckifmydaugh : language === "am" ? translations.am.CanIcheckifmydaugh : language == 'om' ? translations.om.CanIcheckifmydaugh : ""}
            </h3>
          </div>

          {/* RESPONSIVE CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-12">

            {/* CARD 1 */}
            <div className="bg-[#FFF6E8] rounded-3xl
  px-4 sm:px-8
  py-6 sm:py-14 lg:py-10
  flex items-center justify-center text-center
  min-h-[120px] sm:min-h-[260px] lg:min-h-[200px]">
              <p className="text-sm sm:text-sm sm:text-xl text-gray-900 leading-relaxed max-w-xs">
                {language === "en" ? translations.en.Isthereawaytoge : language === "am" ? translations.am.Isthereawaytoge : language == 'om' ? translations.om.Isthereawaytoge : ""}
               
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#F5F0FF] rounded-3xl
  px-4 sm:px-8
  py-6 sm:py-14 lg:py-10
  flex items-center justify-center text-center
  min-h-[120px] sm:min-h-[260px] lg:min-h-[200px]">
              <p className="text-sm sm:text-lg lg:text-xl text-gray-900 leading-relaxed max-w-xs">
                {language === "en" ? translations.en.CanIcheckifmydaugh : language === "am" ? translations.am.CanIcheckifmydaugh : language == 'om' ? translations.om.CanIcheckifmydaugh : ""}
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-[#E9FBF6] rounded-3xl
  px-4 sm:px-8
  py-6 sm:py-14 lg:py-10
  flex items-center justify-center text-center
  min-h-[120px] sm:min-h-[260px] lg:min-h-[200px]">
              <p className="text-sm sm:text-lg lg:text-xl text-gray-900 leading-relaxed max-w-xs">
                {language === "en" ? translations.en.Isthereawaytoge : language === "am" ? translations.am.Isthereawaytoge : language == 'om' ? translations.om.Isthereawaytoge : ""}
                
              </p>
            </div>

          </div>
        </div>
        <br />
        <br />
        {/* TOP TEXT (ABOVE UI) */}
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-3xl font-extrabold text-gray-900 leading-tight max-w-3xl sm:max-w-4xl mx-auto">
            {language === "en" ? translations.en.HowFamiSafeHelpsYo : language === "am" ? translations.am.HowFamiSafeHelpsYo : language == 'om' ? translations.om.HowFamiSafeHelpsYo : ""}
          </h3>
        </div>
        <div className="border-2 border-[#F6F2F6] rounded-lg  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">


          {/* IMAGE */}
          <div className="flex-shrink-0 w-full lg:w-[53%] mt-2">
            <img
              src="https://famisafe.wondershare.com/images/feature/2023/detect-suspicious-text-1.png"
              alt="Social Media Monitoring"
              className="w-full max-h-[300px] lg:max-h-[550px] "
            />
          </div>


          {/* TEXT */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              {language== "en" ? translations.en.EscortTeenEachDrive: language== "am" ? translations.am.EscortTeenEachDrive : language == 'om' ? translations.om.EscortTeenEachDrive : ""}

            </h2>
            <p className="text-gray-700 text-base sm:text-lg mb-4">
              {language== "en" ? translations.en.Even43ify : language== "am" ? translations.am.Even43ify : language == 'om' ? translations.om.Even43ify : ""}
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 text-base sm:text-lg">
              <li> {language === "en" ? translations.en.Enabledrivesafetyto : language === "am" ? translations.am.Enabledrivesafetyto : language == 'om' ? translations.om.Enabledrivesafetyto : ""}</li>
              <li>{ language== "en" ? translations.en. Setuphighspeedt21: language== "am" ? translations.am. Setuphighspeedt21 : language == 'om' ? translations.om. Setuphighspeedt21 : "" } </li>
              <li>
                { language== "en" ? translations.en.Trackdrivingroutine : language== "am" ? translations.am.Trackdrivingroutine : language == 'om' ? translations.om.Trackdrivingroutine : "" }
              </li>
            </ul>
          </div>

        </div>
        <br />
        <br /><div className="border-2 border-[#F6F2F6] rounded-lg max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">

          {/* IMAGE */}
          <div className="flex-shrink-0 w-full lg:w-[53%] mt-2 order-1 lg:order-2">
            <img
              src="https://famisafe.wondershare.com/images/feature/2023/detect-suspicious-text-2.png"
              alt="Social Media Monitoring"
              className="w-full max-h-[300px] lg:max-h-[550px] object-cover rounded-3xl"
            />
          </div>

          {/* TEXT */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              {language== "en" ? translations.en. EncourageGoodDriv: language== "am" ? translations.am. EncourageGoodDriv : language == 'om' ? translations.om. EncourageGoodDriv : ""}
            </h2>
            <p className="text-gray-700 text-base sm:text-lg mb-4">
              {language== "en" ? translations.en.Agooddrivinghabit : language== "am" ? translations.am.Agooddrivinghabit : language == 'om' ? translations.om.Agooddrivinghabit : ""}
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 text-base sm:text-lg">
              <li> {language === "en" ? translations.en.Getadrivinghist : language === "am" ? translations.am.Getadrivinghist : language == 'om' ? translations.om.Getadrivinghist : ""}</li>
              <li>{ language== "en" ? translations.en. Highlightdangerousdri: language== "am" ? translations.am. Highlightdangerousdri : language == 'om' ? translations.om. Highlightdangerousdri : "" } </li>
              <li>
                { language== "en" ? translations.en.Checkdrivingdetailsli : language== "am" ? translations.am.Checkdrivingdetailsli : language == 'om' ? translations.om.Checkdrivingdetailsli : "" }
              </li>
            </ul>
          </div>

        </div>
        <br />
        <br />

        <div className="border-2 border-[#F6F2F6] rounded-lg  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">


          {/* IMAGE */}
          <div className="flex-shrink-0 w-full lg:w-[53%] mt-2">
            <img
              src="https://famisafe.wondershare.com/images/feature/2023/detect-suspicious-text-add-1.png"
              alt="Social Media Monitoring"
              className="w-full max-h-[300px] lg:max-h-[550px] "
            />
          </div>


          {/* TEXT */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              {language== "en" ? translations.en.GetBetterWithEachDrive : language== "am" ? translations.am.GetBetterWithEachDrive : language == 'om' ? translations.om.GetBetterWithEachDrive : ""}
            </h2>
            <p className="text-gray-700 text-base sm:text-lg mb-4">
              {language== "en" ? translations.en.Reviewweeklyrsummary5t : language== "am" ? translations.am.Reviewweeklyrsummary5t : language == 'om' ? translations.om.Reviewweeklyrsummary5t : ""}
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 text-base sm:text-lg">
              <li>{language== "en" ? translations.en.Viewrsummaryofth : language== "am" ? translations.am.Viewrsummaryofth : language == 'om' ? translations.om.Viewrsummaryofth : ""}</li>
              <li> {language== "en" ? translations.en.Comparethesummaryof : language== "am" ? translations.am.Comparethesummaryof : language == 'om' ? translations.om.Comparethesummaryof : ""}</li>
              <li>
                {language== "en" ? translations.en.Cancelthe : language== "am" ? translations.am.Cancelthe : language == 'om' ? translations.om.Cancelthe  : ""}
              </li>
            </ul>
          </div>

        </div>
        <br />
        <br />
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          {language === "en" ? translations.en.EasytoSta : language === "am" ? translations.am.EasytoSta : language == 'om' ? translations.om.EasytoSta : ""}
        </h2>


        <div className="rounded-xl bg-[#E9FCF9] relative ml-4 ">

          {/* STEPS */}
          <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-12 md:gap-24 min-h-[400px]">

            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center relative">

                {/* Icon circle */}
                <div className="relative bg-white rounded-full w-30 h-30 flex items-center justify-center shadow-md">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 bg-teal-400 w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.id}
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-4 font-semibold text-lg">{step.title}</h3>

                {/* Description */}
                <p className="mt-2 text-gray-700 text-sm sm:text-base max-w-xs text-center">
                  {step.description}
                </p>
                {/* Zigzag connector with projection motion + right arrow (desktop only) */}
                {index < steps.length - 1 && (
                  <svg
                    className="hidden md:block absolute top-6 right-[-12rem]"
                    width="220"
                    height="40"
                    viewBox="0 0 220 40"
                    fill="none"
                  >
                    {/* Arrow definition */}
                    <defs>
                      <marker
                        id="arrow"
                        markerWidth="10"
                        markerHeight="10"
                        refX="8"
                        refY="5"
                        orient="auto"
                      >
                        <path d="M0 0 L10 5 L0 10 Z" fill="#9CA3AF" />
                      </marker>
                    </defs>

                    {/* Zigzag path */}
                    <path
                      d="M0 20 L20 0 L40 40 L60 0 L80 40 L100 0 L120 40 L140 0 L160 40 L180 20"
                      stroke="#8F0AF4"
                      strokeWidth="2"
                      strokeDasharray="6 6"
                      fill="none"
                      markerEnd="url(#arrow)"
                    >
                      {/* Projection motion */}
                      <animate
                        attributeName="stroke-dashoffset"
                        from="0"
                        to="-24"
                        dur="1s"
                        repeatCount="indefinite"
                      />
                    </path>
                  </svg>
                )}

              </div>
            ))}

          </div>

          {/* PLATFORM DOWNLOADS — ALWAYS BOTTOM */}
          <div className="mt-1 py-12 text-center w-full">
            <p className="text-sm text-gray-600 mb-6">
              {language === "en"
                ? translations.en.DownloadFamiSafeon
                : language === "am"
                  ? translations.am.DownloadFamiSafeon
                  : translations.om.DownloadFamiSafeon}
            </p>
            {/* CTA Button */}
            <button className="mt-12 bg-purple-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-purple-600 transition mb-4">
              
              {language === "en"
                ? translations.en.TryItFree
                : language === "am"
                  ? translations.am.TryItFree
                  : translations.om.TryItFree}
            </button>


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

        </div>
        <br />
        <br />


        <div className=" max-w-7xl mx-auto">

          {/* TITLE */}
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black mb-14">
            {language === "en" ? translations.en.FindMoreParental : language === "am" ? translations.am.FindMoreParental :language== "om" ? translations.om.FindMoreParental: ""}
          </h2>

          {/* GRID */}
          <div className="border-2 border-[#D2CECE] rounded-2xl animate-borderGlow rounded-xl text-purple-600 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-14 gap-x-6 sm:gap-x-10">

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
        {/* Latest Post */}

        <div className="max-w-7xl mx-auto px-4 relative">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {language=== "en" ? translations.en.LatestPost : language=== "am" ? translations.am.LatestPost : language == 'om' ? translations.om.LatestPost : ""}
          </h2>

          {/* SLIDER */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="min-w-full grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                  {postqs
                    .slice(
                      slideIndex * slidesPerView,
                      slideIndex * slidesPerView + slidesPerView
                    )
                    .map((post, index) => (
                      <div key={index}>
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-[220px] object-cover rounded-2xl"
                        />
                        <div className="mt-4 space-y-3">
                          <h3 className="text-lg font-semibold">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {post.description}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>

            {/* ARROWS */}
            {totalSlides > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full"
                >
                  <FiChevronLeft size={22} />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full"
                >
                  <FiChevronRight size={22} />
                </button>
              </>
            )}
          </div>

          {/* DOTS */}
          {totalSlides > 1 && (
            <div className="flex justify-center gap-3 mt-8">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <span
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full cursor-pointer ${current === index
                    ? "bg-purple-600"
                    : "bg-purple-300"
                    }`}
                />
              ))}
            </div>
          )}
        </div>

        <br />
        <br />

        <div className="mx-auto max-w-4xl">

          {/* Title */}
          <h2 className="mb-14 text-center text-3xl font-semibold text-black">
            Related FAQ
          </h2>

          {/* FAQ Items */}
          <div className="divide-y divide-gray-200">
            {faqam5s.map((faq, index) => (
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
              {language === "en" ? translations.en.BuyNow : language === "am" ? translations.am.BuyNow : language== "om" ?translations.om.BuyNow: ""}
            </button>
          </div>
        </div>
        <br />

      </div>

    </section>
  )
}


