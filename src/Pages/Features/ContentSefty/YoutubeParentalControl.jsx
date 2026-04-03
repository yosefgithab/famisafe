import React from 'react'
import { translations } from '../../../Data/translations'
import { useLanguage } from '../../../context/LanguageContext';
import { ArrowRight, Link } from 'lucide-react';
import { BiSolidMessageRoundedDots } from 'react-icons/bi';


export default function YoutubeParentalControl() {

  const { language } = useLanguage();

  const youtubeParentalLinks = language == "en" ? translations.en.youtubeParentalLinks : language == "am" ? translations.am.youtubeParentalLinks : language == "om" ? translations.om.youtubeParentalLinks : ""
  const youtubeParentalCards = language == "en" ? translations.en.youtubeParentalCards : language == "am" ? translations.am.youtubeParentalCards : language == "om" ? translations.om.youtubeParentalCards : ""
  const restrictedModeContent = language == "en" ? translations.en.restrictedModeContent : language == "am" ? translations.am.restrictedModeContent : language == "om" ? translations.om.restrictedModeContent : ""
  const restrictedModeFamilyContent = language == "en" ? translations.en.restrictedModeFamilyContent : language == "am" ? translations.am.restrictedModeFamilyContent : language == "om" ? translations.om.restrictedModeFamilyContent : ""
  const restrictedModeFamilyContentt = language == "en" ? translations.en.restrictedModeFamilyContentt : language == "am" ? translations.am.restrictedModeFamilyContentt : language == "om" ? translations.om.restrictedModeFamilyContentt : ""
  const prosConsContent = language == "en" ? translations.en.prosConsContent : language == "am" ? translations.am.prosConsContent : language == "om" ? translations.om.prosConsContent : ""
  const prosConsContentts = language == "en" ? translations.en.prosConsContentts : language == "am" ? translations.am.prosConsContentts : language == "om" ? translations.om.prosConsContentts : ""
  const restrictedModeFamilyContenttt = language == "en" ? translations.en.restrictedModeFamilyContenttt : language == "am" ? translations.am.restrictedModeFamilyContenttt : language == "om" ? translations.om.restrictedModeFamilyContenttt : ""
  const guides = language == "en" ? translations.en.guides : language == "am" ? translations.am.guides : language == "om" ? translations.om.guides : ""


  const platforms = language === "en" ? translations.en.platforms : language === "am" ? translations.am.platforms : language == "om" ? translations.om.platforms : ""
  return (
    <section className="w-full overflow-hidden px-4 sm:px-6 lg:px-0 py-2">

      <div className="bg-gradient-to-r
                       from-[#F5EFFE]
                       via-[#F1F0F4]
                       to-[#FEF8ED] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  grid grid-cols-1 lg:grid-cols-2 
          gap-8 sm:gap-10 lg:gap-16 items-center overflow-hidden rounded-lg py-16 sm:py-20">

        {/* LEFT CONTENT */}
        <div className="max-w-xl mx-auto text-center lg:text-left">
          <p className="text-purple-600 font-semibold mb-3 sm:mb-4">
            {language === "en" ? translations.en.FamiSafeNewFeature : language === "am" ? translations.am.FamiSafeNewFeature : language == "om" ? translations.om.FamiSafeNewFeature : ""}
          </p>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight mb-4 sm:mb-6">
            <span className="text-gray-700 px-2 py-1 rounded-lg inline-block">
              {language === "en" ? translations.en.YouTubeParentalControl : language === "am" ? translations.am.YouTubeParentalControl : language == "om" ? translations.om.YouTubeParentalControl : ""}
            </span>
          </h1>

          <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 mb-6 sm:mb-10">
            {language === "en" ? translations.en.Herearethecompletel : language === "am" ? translations.am.Herearethecompletel : language == "om" ? translations.om.Herearethecompletel : ""}
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-6 sm:mb-10">
            <a href="#try-free" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-[#7620D3B3] text-white 
              px-8 sm:px-10 py-3 sm:py-4  rounded-lg font-semibold shadow-lg hover:bg-purple-700 transition">
                {language === "en" ? translations.en.TryitFrees : language === "am" ? translations.am.TryitFrees : language == "om" ? translations.om.TryitFrees : ""}
              </button>
            </a>

            <a href="#buy-now" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto border-2 border-purple-600 text-purple-600 px-8 sm:px-10 py-3 sm:py-4  rounded-lg font-semibold hover:bg-purple-50 transition">
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
                  <div className="w-9 h-9 sm:w-10 sm:h-10  rounded-lg shadow  flex items-center justify-center mb-1 transition group-hover:scale-105">
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
            className="w-full max-w-[280px] sm:max-w-[420px] lg:max-w-[680px] h-auto object-contain select-none pointer-events-none"
          />
        </div>
      </div>

      <br />
      <div className="bg-white py-10 sm:py-12 max-w-6xl mx-auto px-4 lg:px-6 flex justify-center">
        <h3
          className=" text-xl sm:text-3xl lg:text-4xl  font-bold text-gray-800  text-center break-words leading-snug sm:leading-tight"
        >
          {language === "en" ? translations.en.TableofContents : language === "am" ? translations.am.TableofContents : language == "om" ? translations.om.FamiSafeBestAppto : ""}
        </h3>
      </div>
      <br />

      {/*============================= Table content =================*/}

      <div className="max-w-6xl mx-auto bg-[#F6F1FF] rounded-2xl p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {youtubeParentalLinks && youtubeParentalLinks.length > 0 ? (
            youtubeParentalLinks.map((item, index) => (
              <a
                key={index}
                href={item.path}       // <-- changed from "to" to "href"
                title={item.title}     // tooltip
                className="group flex items-start gap-3 text-gray-900 font-medium hover:text-[#6B3DF4] transition"
              >
                <span className="mt-2 w-2 h-2 rounded-full bg-[#9608FC]"></span>
                <span className="group-hover:underline">
                  {item.title}
                </span>
              </a>
            ))
          ) : (
            <p>No links available</p>
          )}
        </div>
      </div>
      {/*============= Table content End =================*/}

      {/*=== What Parents Should Know About YouTube======= */}
      <br />
      <div className="bg-white py-10 sm:py-12 max-w-6xl mx-auto px-4 lg:px-6 flex justify-center">
        <h3
          className=" text-xl sm:text-3xl lg:text-4xl  font-bold text-gray-800  text-center break-words leading-snug sm:leading-tight"
        >
          {language === "en" ? translations.en.WhatParentsShould : language === "am" ? translations.am.WhatParentsShould : language == "om" ? translations.om.WhatParentsShould : ""}
        </h3>
      </div>
      <br />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-8 py-0">
        {youtubeParentalCards.map((card, index) => (
          <div
            key={index}
            className={`${card.bgColor} rounded-2xl p-6 md:p-8 flex flex-col gap-4`}
          >
            {/* Icon */}
            <div
              className={`${card.iconColor} w-12 h-12 flex items-center justify-center rounded-lg`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4 2v20l17-10L4 2z" />
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-lg md:text-xl font-bold">{card.title}</h3>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>

      {/*=== What Parents Should Know About YouTube end======= */}
      {/*=== Steps */}
      <br />
      <div className="bg-white py-10 sm:py-12 max-w-6xl mx-auto px-4 lg:px-6 flex justify-center">
        <h3
          className=" text-xl sm:text-3xl lg:text-4xl  font-bold text-gray-800  text-center break-words leading-snug sm:leading-tight"
        >

          {language === "en" ? translations.en.PartHowtoUseYouTubes : language === "am" ? translations.am.PartHowtoUseYouTubes : language == "om" ? translations.om.PartHowtoUseYouTubes : ""}
        </h3>
      </div>
      <div>
        <p className='text-sm sm:text-sl lg:text-lg  text-gray-800 text-center text-sm leading-relaxed px-6 ml-12 mr-12'>
          {language === "en" ? translations.en.IncorporatedbyGoogleYouTubeR : language === "am" ? translations.am.IncorporatedbyGoogleYouTubeR : language == "om" ? translations.om.IncorporatedbyGoogleYouTubeR : ""}
        </p>

      </div>
      <br />
      <br />
      <br />
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 items-center">

          {/* LEFT SIDE CARD (30%) */}
          <div className="lg:col-span-4">
            <div className="bg-[#f6f2ff] rounded-2xl p-8 shadow-sm">

              <h2 className="text-1xl font-bold text-gray-900 mb-6">
                {restrictedModeContent.browser.title}
              </h2>

              <ul className="space-y-0">
                {restrictedModeContent.browser.steps.map((step, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="w-4 h-4 flex items-center justify-center rounded-full bg-purple-600 text-white text-sm font-semibold">
                      {index + 1}
                    </span>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {step}
                    </p>
                  </li>
                ))}
              </ul>

              <h3 className="text-1xl font-bold text-gray-900 mt-10 mb-4">
                {restrictedModeContent.app.title}
              </h3>

              <ul className="space-y-0">
                {restrictedModeContent.app.steps.map((step, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="w-4 h-4 flex items-center justify-center rounded-full bg-purple-600 text-white text-sm font-semibold">
                      {index + 1}
                    </span>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {step}
                    </p>
                  </li>
                ))}
              </ul>

            </div>
          </div>

          {/* RIGHT SIDE IMAGE (70%) */}
          <div className="lg:col-span-6">
            <img
              src={restrictedModeContent.image.src}
              alt={restrictedModeContent.image.alt}
              className="w-full rounded-xl shadow-lg"
            />
          </div>

        </div>
      </div>
      {/* ========== card ======= */}
      <div className="max-w-7xl mx-auto px-4 space-y-12">

        {/* TOP INFO CARD */}
        <div className="bg-[#f5f0ff] rounded-xl p-8 flex flex-col sm:flex-row gap-6 items-start">

          {/* LEFT ICON */}
          <div className="shrink-0">
            <div className="w-14 h-14 rounded-full border-2 border-purple-600 flex items-center justify-center text-purple-600 text-4xl">
              <BiSolidMessageRoundedDots />
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {restrictedModeFamilyContent.infoCard.title}
            </h3>
            <p className="text-sm text-[#4C2370] leading-relaxed max-w-4xl">
              {restrictedModeFamilyContent.infoCard.description}
            </p>
          </div>
        </div>

        {/* PROS & CONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* PROS */}
          <div className="border border-dashed border-purple-400 rounded-xl p-8">
            <h4 className="text-lg font-bold text-gray-900 mb-4">
              {restrictedModeFamilyContent.pros.title}
            </h4>

            <ul className="list-disc list-inside space-y-3 text-sm [#4C2370] leading-relaxed">
              {restrictedModeFamilyContent.pros.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* CONS */}
          <div className="border-dashed border-purple-400 rounded-xl p-8">
            <h4 className="text-lg font-bold text-gray-900 mb-4">
              {restrictedModeFamilyContent.cons.title}
            </h4>

            <ul className="list-disc list-inside space-y-3 text-sm [#4C2370] leading-relaxed">
              {restrictedModeFamilyContent.cons.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
      {/*======== card End ======*/}
      {/*=== Steps */}

      <div className="bg-white py-10 sm:py-12 max-w-6xl mx-auto px-4 lg:px-6 flex justify-center">
        <h3
          className=" text-xl sm:text-3xl lg:text-4xl  font-bold text-gray-800  text-center break-words leading-snug sm:leading-tight"
        >
          {language === "en" ? translations.en.PartHowtoUseFamiSafe : language === "am" ? translations.am.PartHowtoUseFamiSafe : language == "om" ? translations.om.PartHowtoUseFamiSafe : ""}
        </h3>
      </div>
      <div>
        <p className='text-sm sm:text-sl lg:text-lg  text-gray-800 text-center text-sm leading-relaxed px-6 ml-12 mr-12'>
          {language === "en" ? translations.en.FamiSafeisawidelyused : language === "am" ? translations.am.FamiSafeisawidelyused : language == "om" ? translations.om.FamiSafeisawidelyused : ""}
        </p>

      </div>
      {/*step 2*/}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE – SINGLE IMAGE */}
          <div className="order-1 flex justify-center">
            <img
              src="https://famisafe.wondershare.com/images/images-2020/new/subject/con2-1.png" // replace with your image path
              alt="YouTube Parental Control"
              className="w-[320px] sm:w-[260px] lg:w-[520px]"
            />
          </div>

          {/* RIGHT SIDE – TEXT CARD */}
          <div className="order-2">
            <div className="
    bg-[#e9fbf6] rounded-3xl shadow-sm
    p-6 sm:p-8 lg:p-10
  ">

              <h2 className="
      font-bold text-gray-900 mb-3
      text-lg sm:text-xl lg:text-2xl
    ">
                {language === "en" ? translations.en.YouTubeParentalControl : language === "am" ? translations.am.YouTubeParentalControl : language == "om" ? translations.om.YouTubeParentalControl : ""}
              </h2>

              <p className="
      text-gray-700 leading-relaxed mb-4
      text-xs sm:text-sm
    ">
                {language === "en" ? translations.en.FamiSafeAndroidparental : language === "am" ? translations.am.FamiSafeAndroidparental : language == "om" ? translations.om.FamiSafeAndroidparental : ""}
              </p>

              <ul className="
      list-decimal list-inside space-y-2 mb-6
      text-xs sm:text-sm text-gray-800
    ">
                <li>
                  {language === "en" ? translations.en.RegisteraFamiSafeaccount : language === "am" ? translations.am.RegisteraFamiSafeaccount : language == "om" ? translations.om.RegisteraFamiSafeaccount : ""}{" "}
                  <span className="font-semibold"></span>.
                </li>
                <li>{language === "en" ? translations.en.InstallFamiSafeappboth : language === "am" ? translations.am.InstallFamiSafeappboth : language == "om" ? translations.om.InstallFamiSafeappboth : ""}</li>
                <li>{language === "en" ? translations.en.Connectkiddeviceand : language === "am" ? translations.am.Connectkiddeviceand : language == "om" ? translations.om.Connectkiddeviceand : ""}</li>
              </ul>

              <div className="flex justify-center sm:justify-start">
                <button
                  className="
      bg-purple-600 hover:bg-purple-700 transition text-white font-semibold
      rounded-full
      px-5 py-3 text-sm
      sm:px-6 sm:py-3
      lg:px-8 lg:py-4 lg:text-base
    "
                >
                  {language === "en" ? translations.en.tryFreeText : language === "am" ? translations.am.tryFreeText : language == "om" ? translations.om.tryFreeText : ""}
                </button>
              </div>


            </div>
          </div>


        </div>
      </div>
      {/* step 3 */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* IMAGE – TOP on mobile, RIGHT on desktop */}
          <div className="order-1 lg:order-2 flex justify-center">
            <img
              src="https://famisafe.wondershare.com/images/images-2020/new/subject/con2-1.png"
              alt="YouTube Parental Control iOS"
              className="w-[320px] sm:w-[300px] lg:w-[520px]"
            />
          </div>

          {/* TEXT CARD – BOTTOM on mobile, LEFT on desktop */}
          <div className="order-2 lg:order-1">
            <div
              className="
          bg-[#e9fbf6] rounded-3xl shadow-sm
          p-6 sm:p-8 lg:p-10
        "
            >
              <h2
                className="
            font-bold text-gray-900 mb-3
            text-lg sm:text-xl lg:text-2xl
          "
              >
                {language === "en" ? translations.en.YouTube22Parental : language === "am" ? translations.am.YouTube22Parental : language == "om" ? translations.om.YouTube22Parental : ""}
              </h2>

              <p
                className="
            text-gray-700 leading-relaxed mb-4
            text-xs sm:text-sm
          "
              >
                {language === "en" ? translations.en.FamiSafeiPhoneparental : language === "am" ? translations.am.FamiSafeiPhoneparental : language == "om" ? translations.om.FamiSafeiPhoneparental : ""}
              </p>

              <ul
                className="
            list-decimal list-inside space-y-2 mb-6
            text-xs sm:text-sm text-gray-800
          "
              >
                <li>
                  {language === "en" ? translations.en.RegisteraFamiSafeaccount : language === "am" ? translations.am.RegisteraFamiSafeaccount : language == "om" ? translations.om.RegisteraFamiSafeaccount : ""}
                  <span className="font-semibold"></span>.
                </li>
                <li>{language === "en" ? translations.en.InstallFamiSafeappbothon : language === "am" ? translations.am.InstallFamiSafeappbothon : language == "om" ? translations.om.InstallFamiSafeappbothon : ""}</li>
                <li>{language === "en" ? translations.en.Connectkidsdeviceand : language === "am" ? translations.am.Connectkidsdeviceand : language == "om" ? translations.om.Connectkidsdeviceand : ""}</li>
              </ul>

              {/* Button centered on mobile */}
              <div className="flex justify-center sm:justify-start">
                <button
                  className="
              bg-purple-600 hover:bg-purple-700 transition text-white font-semibold
              rounded-full
              px-5 py-3 text-sm
              sm:px-6 sm:py-3
              lg:px-8 lg:py-4 lg:text-base
            "
                >

                  {language === "en" ? translations.en.tryFreeText : language === "am" ? translations.am.tryFreeText : language == "om" ? translations.om.tryFreeText : ""}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ========== card ======= */}
      <div className="max-w-7xl mx-auto px-4 space-y-12">

        {/* TOP INFO CARD */}
        <div className="bg-[#f5f0ff] rounded-xl p-8 flex flex-col sm:flex-row gap-6 items-start">

          {/* LEFT ICON */}
          <div className="shrink-0">
            <div className="w-14 h-14 rounded-full border-2 border-purple-600 flex items-center justify-center text-purple-600 text-4xl">
              <BiSolidMessageRoundedDots />
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {restrictedModeFamilyContentt.infoCard.title}
            </h3>
            <p className="text-sm text-[#4C2370] leading-relaxed max-w-4xl">
              {restrictedModeFamilyContentt.infoCard.description}
            </p>
          </div>
        </div>

        {/* PROS & CONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* PROS */}
          <div className="border border-dashed border-purple-400 rounded-xl p-8">
            <h4 className="text-lg font-bold text-gray-900 mb-4">
              {restrictedModeFamilyContentt.pros.title}
            </h4>

            <ul className="list-disc list-inside space-y-3 text-sm [#4C2370] leading-relaxed">
              {restrictedModeFamilyContentt.pros.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* CONS */}
          <div className="border-dashed border-purple-400 rounded-xl p-8">
            <h4 className="text-lg font-bold text-gray-900 mb-4">
              {restrictedModeFamilyContentt.cons.title}
            </h4>

            <ul className="list-disc list-inside space-y-3 text-sm [#4C2370] leading-relaxed">
              {restrictedModeFamilyContentt.cons.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
      {/*======== card End ======*/}


      {/*=== Steps */}

      <div className="bg-white py-10 sm:py-12 max-w-6xl mx-auto px-4 lg:px-6 flex justify-center">
        <h3
          className=" text-xl sm:text-3xl lg:text-4xl  font-bold text-gray-800  text-center break-words leading-snug sm:leading-tight"
        >
          {language === "en" ? translations.en.PartHowtoUseGooglePlay : language === "am" ? translations.am.PartHowtoUseGooglePlay : language == "om" ? translations.om.PartHowtoUseGooglePlay : ""}
        </h3>
      </div>
      <div>
        <p className='text-sm sm:text-sl lg:text-lg  text-gray-800 text-center text-sm leading-relaxed px-6 ml-12 mr-12'>
          {language === "en" ? translations.en.Inhispartwewilllookat : language === "am" ? translations.am.Inhispartwewilllookat : language == "om" ? translations.om.Inhispartwewilllookat : ""}
        </p>

      </div>
      <br />
      <br />

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE IMAGE (50%) */}
          <div className="order-1 flex justify-center">
            <img
              src="https://famisafe.wondershare.com/images/images-2020/new/subject/youtube-parental-controls-google-play-setting.png"
              alt="Restricted Mode Guide"
              className="w-full max-w-xl rounded-xl shadow-lg"
            />
          </div>

          {/* RIGHT SIDE CARD (50%) */}
          <div className="order-2">
            <div className="bg-[#f6f2ff] rounded-2xl p-8 shadow-sm h-75">

              <h2 className="text-xl font-bold text-gray-900 mb-6">
                {language === "en" ? translations.en.How31tosetparental : language === "am" ? translations.am.How31tosetparental : language == "om" ? translations.om.How31tosetparental : ""}
              </h2>

              <ul className="space-y-2">
                <li className="flex gap-3">
                  <span className="w-4 h-4 flex items-center justify-center rounded-full bg-purple-600 text-white text-xs font-semibold">
                    1
                  </span>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {language === "en" ? translations.en.TaponAppsGamesAnd : language === "am" ? translations.am.TaponAppsGamesAnd : language == "om" ? translations.om.TaponAppsGamesAnd : ""}
                  </p>
                </li>

                <li className="flex gap-3">
                  <span className="w-4 h-4 flex items-center justify-center rounded-full bg-purple-600 text-white text-xs font-semibold">
                    2
                  </span>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {language === "en" ? translations.en.Selectyourpreferredrating : language === "am" ? translations.am.Selectyourpreferredrating : language == "om" ? translations.om.Selectyourpreferredrating : ""}
                  </p>
                </li>

                <li className="flex gap-3">
                  <span className="w-4 h-4 flex items-center justify-center rounded-full bg-purple-600 text-white text-xs font-semibold">
                    3
                  </span>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {language === "en" ? translations.en.Click76onSave : language === "am" ? translations.am.Click76onSave : language == "om" ? translations.om.Click76onSave : ""}
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="w-4 h-4 flex items-center justify-center rounded-full bg-purple-600 text-white text-xs font-semibold">
                    4
                  </span>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {language === "en" ? translations.en.Repeatthesameprocessfo : language === "am" ? translations.am.Repeatthesameprocessfo : language == "om" ? translations.om.Repeatthesameprocessfo : ""}
                  </p>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      <br />

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE CARD (50%) */}
          <div className="order-2 lg:order-1">
            <div className="bg-[#f6f2ff] rounded-2xl p-8 shadow-sm h-88">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                {language === "en" ? translations.en.How32tosetparental : language === "am" ? translations.am.How32tosetparental : language == "om" ? translations.om.How32tosetparental : ""}
              </h2>

              <ul className="space-y-2">
                <li className="flex gap-3">
                  <span className="w-4 h-4 flex items-center justify-center rounded-full bg-purple-600 text-white text-xs font-semibold">
                    1
                  </span>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {language === "en" ? translations.en.GowetoSettingsand : language === "am" ? translations.am.GowetoSettingsand : language == "om" ? translations.om.GowetoSettingsand : ""}
                    
                  </p>
                </li>

                <li className="flex gap-3">
                  <span className="w-4 h-4 flex items-center justify-center rounded-full bg-purple-600 text-white text-xs font-semibold">
                    2
                  </span>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {language === "en" ? translations.en.Clicke43onContent : language === "am" ? translations.am.Clicke43onContent : language == "om" ? translations.om.Clicke43onContent : ""}
                  </p>
                </li>

                <li className="flex gap-3">
                  <span className="w-4 h-4 flex items-center justify-center rounded-full bg-purple-600 text-white text-xs font-semibold">
                    3
                  </span>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {language === "en" ? translations.en.Go3wrrtoiTunes : language === "am" ? translations.am.Go3wrrtoiTunes : language == "om" ? translations.om.Go3wrrtoiTunes : ""}
                  </p>
                </li>

                <li className="flex gap-3">
                  <span className="w-4 h-4 flex items-center justify-center rounded-full bg-purple-600 text-white text-xs font-semibold">
                    4
                  </span>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {language === "en" ? translations.en.Setto45DontAllow : language === "am" ? translations.am.Setto45DontAllow : language == "om" ? translations.om.Setto45DontAllow : ""}
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="w-4 h-4 flex items-center justify-center rounded-full bg-purple-600 text-white text-xs font-semibold">
                    5
                  </span>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {language === "en" ? translations.en.Tap5rdgfonContent : language === "am" ? translations.am.Tap5rdgfonContent : language == "om" ? translations.om.Tap5rdgfonContent : ""}
                  </p>
                </li><li className="flex gap-3">
                  <span className="w-4 h-4 flex items-center justify-center rounded-full bg-purple-600 text-white text-xs font-semibold">
                    6
                  </span>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {language === "en" ? translations.en.TapkpoAppLimitsandc : language === "am" ? translations.am.TapkpoAppLimitsandc : language == "om" ? translations.om.TapkpoAppLimitsandc : ""}
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE (50%) */}
          <div className="order-1 lg:order-2 flex justify-center">
            <img
              src="https://famisafe.wondershare.com/images/images-2020/new/subject/youtube-parental-controls-ios-setting.png"
              alt="Restricted Mode Guide"
              className="w-full max-w-xl rounded-xl shadow-lg"
            />
          </div>

        </div>
      </div>
      <br />
      <br />

{/* ========== card ======= */}
<div className="max-w-7xl mx-auto px-4 space-y-12">

  {/* PROS & CONS */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

    {/* PROS */}
    <div className="border border-dashed border-purple-400 rounded-xl p-8">
      <h4 className="text-lg font-bold text-gray-900 mb-4">
        {prosConsContent.pros.title}
      </h4>

      <ul className="list-disc list-inside space-y-3 text-sm [#4C2370] leading-relaxed">
        {prosConsContent.pros.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>

    {/* CONS */}
    <div className="border border-dashed border-purple-400 rounded-xl p-8">
      <h4 className="text-lg font-bold text-gray-900 mb-4">
        {prosConsContent.cons.title}
      </h4>

      <ul className="list-disc list-inside space-y-3 text-sm [#4C2370] leading-relaxed">
        {prosConsContent.cons.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>

  </div>
</div>
{/*======== card End ======*/}

      {/*=== Steps */}

      <div className="bg-white py-10 sm:py-12 max-w-6xl mx-auto px-4 lg:px-6 flex justify-center">
        <h3
          className=" text-xl sm:text-3xl lg:text-4xl  font-bold text-gray-800  text-center break-words leading-snug sm:leading-tight"
        >
          {language === "en" ? translations.en.Part4TurnpoitoYouTubeKids : language === "am" ? translations.am.Part4TurnpoitoYouTubeKids : language== "om" ? translations.om.Part4TurnpoitoYouTubeKids: ""} 
        </h3>
      </div>
      <div>
        <p className='text-sm sm:text-sl lg:text-lg  text-gray-800 text-center text-sm leading-relaxed px-6 ml-12 mr-12'>
          {language === "en" ? translations.en.YouTubeKityudsisdesignated : language === "am" ? translations.am.YouTubeKityudsisdesignated : language == "om" ? translations.om.YouTubeKityudsisdesignated : ""}
        </p>

      </div>
      <br />
      <br />

      {/*step 2*/}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE – SINGLE IMAGE */}
          <div className="order-1 flex justify-center">
            <img
              src="https://famisafe.wondershare.com/images/images-2020/new/subject/youtube-kids-parental-comtrols.png" // replace with your image path
              alt="YouTube Parental Control"
              className="w-[320px] sm:w-[260px] lg:w-[520px]"
            />
          </div>

          {/* RIGHT SIDE – TEXT CARD */}
          <div className="order-2">
            <div className="
    bg-[#e9fbf6] rounded-3xl shadow-sm
    p-6 sm:p-8 lg:p-10
  ">

              <h2 className="
      font-bold text-gray-900 mb-3
      text-lg sm:text-xl lg:text-2xl
    ">
                {language === "en" ? translations.en.Howtosettyuparental : language === "am" ? translations.am.Howtosettyuparental : language == "om" ? translations.om.Howtosettyuparental : ""}
              </h2>

              <ul className="
      list-decimal list-inside space-y-2 mb-6
      text-xs sm:text-sm text-gray-800
    ">

                <li>{language === "en" ? translations.en.Intheapjhptapthe : language === "am" ? translations.am.Intheapjhptapthe : language == "om" ? translations.om.Intheapjhptapthe : ""}</li>
                <li> {language === "en" ? translations.en.Answeraslswimple : language === "am" ? translations.am.Answeraslswimple : language == "om" ? translations.om.Answeraslswimple : ""}</li>
                <li>{language === "en" ? translations.en.SelectSetting : language === "am" ? translations.am.SelectSetting : language == "om" ? translations.om.SelectSetting : ""}</li>
                <li>{language === "en" ? translations.en.SelectTimertoset : language === "am" ? translations.am.SelectTimertoset : language == "om" ? translations.om.SelectTimertoset : ""}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>


{/* ========== card ======= */}
<div className="max-w-7xl mx-auto px-4 space-y-12">

  {/* PROS & CONS */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

    {/* PROS */}
    <div className="border border-dashed border-purple-400 rounded-xl p-8">
      <h4 className="text-lg font-bold text-gray-900 mb-4">
        {prosConsContentts.pros.title}
      </h4>

      <ul className="list-disc list-inside space-y-3 text-sm [#4C2370] leading-relaxed">
        {prosConsContentts.pros.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>

    {/* CONS */}
    <div className="border border-dashed border-purple-400 rounded-xl p-8">
      <h4 className="text-lg font-bold text-gray-900 mb-4">
        {prosConsContentts.cons.title}
      </h4>

      <ul className="list-disc list-inside space-y-3 text-sm [#4C2370] leading-relaxed">
        {prosConsContentts.cons.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>

  </div>
</div>
{/*======== card End ======*/}
      {/*=== Steps */}

      <div className="bg-white py-10 sm:py-12 max-w-6xl mx-auto px-4 lg:px-6 flex justify-center">
        <h3
          className=" text-xl sm:text-3xl lg:text-4xl  font-bold text-gray-800  text-center break-words leading-snug sm:leading-tight"
        >
          {language === "en" ? translations.en.Part5eeseGoogl : language === "am" ? translations.am.Part5eeseGoogl : language == "om" ? translations.om.Part5eeseGoogl : ""}
          {/* {language === "en" ? translations.en.FamiSafeBestAppto : language === "am" ? translations.am.FamiSafeBestAppto : translations.om.FamiSafeBestAppto} */}
        </h3>
      </div>
      <div>
        <p className='text-sm sm:text-sl lg:text-lg  text-gray-800 text-center text-sm leading-relaxed px-6 ml-12 mr-12'>
          {language === "en" ? translations.en.GoogleSafeSearchisf : language === "am" ? translations.am.GoogleSafeSearchisf : language == "om" ? translations.om.GoogleSafeSearchisf : ""}
        </p>

      </div>
      <br />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE CARD (text inside card) */}
          <div className="order-2 lg:order-1">
            <div className="bg-[#f6f2ff] rounded-2xl p-6 lg:p-8 shadow-sm">
              <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-4">
                {language === "en" ? translations.en.TurnnGoeogle : language === "am" ? translations.am.TurnnGoeogle : language == "om" ? translations.om.TurnnGoeogle : ""}
              </h2>

              <ul className="space-y-2">
                <li className="flex gap-3">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-purple-600 text-white text-xs font-semibold">
                    1
                  </span>
                  <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                    {language === "en" ? translations.en.GotoSearrrchSettings : language === "am" ? translations.am.GotoSearrrchSettings : language == "om" ? translations.om.GotoSearrrchSettings : ""}
                  </p>
                </li>

                <li className="flex gap-3">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-purple-600 text-white text-xs font-semibold">
                    2
                  </span>
                  <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                    {language === "en" ? translations.en.FindSafrreSearchfilters : language === "am" ? translations.am.FindSafrreSearchfilters : language == "om" ? translations.om.FindSafrreSearchfilters : ""}
                  </p>
                </li>

                <li className="flex gap-3">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-purple-600 text-white text-xs font-semibold">
                    3
                  </span>
                  <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                    {language === "en" ? translations.en.Clickthrreboxnextto : language === "am" ? translations.am.Clickthrreboxnextto : language == "om" ? translations.om.Clickthrreboxnextto : ""}
                  </p>
                </li>

                <li className="flex gap-3">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-purple-600 text-white text-xs font-semibold">
                    4
                  </span>
                  <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                    {language === "en" ? translations.en.Scrolldorrtwnandclick : language === "am" ? translations.am.Scrolldorrtwnandclick : language == "om" ? translations.om.Scrolldorrtwnandclick : ""}
                   
                  </p>
                </li>
              </ul>

              <h2 className="text-lg lg:text-xl font-bold text-gray-900 mt-6 mb-4">
                {language === "en" ? translations.en.TurndronGoogle : language === "am" ? translations.am.TurndronGoogle : language == "om" ? translations.om.TurndronGoogle : ""}
              </h2>

              <ul className="space-y-2">
                <li className="flex gap-3">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-purple-600 text-white text-xs font-semibold">
                    1
                  </span>
                  <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                    {language === "en" ? translations.en.LaunchtheGoogleapp : language === "am" ? translations.am.LaunchtheGoogleapp : language == "om" ? translations.om.LaunchtheGoogleapp : ""}

                  </p>
                </li>

                <li className="flex gap-3">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-purple-600 text-white text-xs font-semibold">
                    2
                  </span>
                  <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                    {language === "en" ? translations.en.Taponthethreedot : language === "am" ? translations.am.Taponthethreedot : language == "om" ? translations.om.Taponthethreedot : ""}

                  </p>
                </li>

                <li className="flex gap-3">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-purple-600 text-white text-xs font-semibold">
                    3
                  </span>
                  <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                    {language === "en" ? translations.en.TapSettingsGeneral : language === "am" ? translations.am.TapSettingsGeneral : language == "om" ? translations.om.TapSettingsGeneral : ""}
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="order-1 lg:order-2 flex justify-center">
            <img
              src="https://famisafe.wondershare.com/images/images-2020/new/subject/youtube-parental-controls-google-safesearch.png"
              alt="Google SafeSearch Guide"
              className="w-full max-w-md lg:max-w-xl rounded-xl shadow-lg"
            />
          </div>

        </div>
      </div>

      <br />
      <br />

      {/* ========== card ======= */}
      <div className="max-w-7xl mx-auto px-4 space-y-12">

        {/* TOP INFO CARD */}
        <div className="bg-[#f5f0ff] rounded-xl p-8 flex flex-col sm:flex-row gap-6 items-start">

          {/* LEFT ICON */}
          <div className="shrink-0">
            <div className="w-14 h-14 rounded-full border-2 border-purple-600 flex items-center justify-center text-purple-600 text-4xl">
              <BiSolidMessageRoundedDots />
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {restrictedModeFamilyContenttt.infoCard.title}
            </h3>
            <p className="text-sm text-[#4C2370] leading-relaxed max-w-4xl">
              {restrictedModeFamilyContenttt.infoCard.description}
            </p>
          </div>
        </div>

        {/* PROS & CONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* PROS */}
          <div className="border border-dashed border-purple-400 rounded-xl p-8">
            <h4 className="text-lg font-bold text-gray-900 mb-4">
              {restrictedModeFamilyContenttt.pros.title}
            </h4>

            <ul className="list-disc list-inside space-y-3 text-sm [#4C2370] leading-relaxed">
              {restrictedModeFamilyContenttt.pros.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* CONS */}
          <div className="border-dashed border-purple-400 rounded-xl p-8">
            <h4 className="text-lg font-bold text-gray-900 mb-4">
              {restrictedModeFamilyContenttt.cons.title}
            </h4>

            <ul className="list-disc list-inside space-y-3 text-sm [#4C2370] leading-relaxed">
              {restrictedModeFamilyContenttt.cons.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
      {/*======== card End ======*/}
      {/*========== Title ========*/}
      <div className="bg-white py-10 sm:py-12 max-w-6xl mx-auto px-4 lg:px-6 flex justify-center">
        <h3
          className=" text-xl sm:text-3xl lg:text-4xl  font-bold text-gray-800  text-center break-words leading-snug sm:leading-tight"
        >
           {language === "en" ? translations.en.YouTubeParental87Cont : language === "am" ? translations.am.YouTubeParental87Cont : language== "om" ? translations.om.YouTubeParental87Cont: ""} 
        </h3>
      </div>
      {/*========== Title ========*/}
      {/*======= guide========*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ml-8 mr-8">
        {guides.map((item, index) => (
          <div
            key={index}
            className={`${item.bg} rounded-2xl p-8 min-h-[260px]
              flex flex-col justify-between
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-xl`}
          >
            {/* Title + Arrow */}
            <div className="flex items-start justify-between">
              <h3 className="text-2xl font-bold text-gray-900 leading-snug max-w-[85%]">
                {item.title}
              </h3>

              <ArrowRight
                className="w-6 h-6 text-[#6A5ACD]
                transition-transform duration-300
                group-hover:translate-x-1
                "

              />
            </div>

            {/* Description */}
            <p className="mt-6 text-base text-[#8B7BB8] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
      {/*=========== Guide End */}

      <br />
      <div
        className="
                       mx-auto
                       max-w-6xl
                       rounded-3xl
                       bg-gradient-to-r
                       from-[#EAFAFA]
                       via-[#C8E8E8]
                       to-[#C7B3FB]
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
                           rounded-lg
                            bg-gradient-to-r
                       from-[#427CF8]
                       via-[#6434DE]
                       to-[#10E7FADB]
                           px-8
                           py-3
                           text-base
                           font-semibold
                           text-white
                           transition
                           hover:bg-[#0B9DF8]
                         "
          >
            {language === "en" ? translations.en.TryitFrees : language === "am" ? translations.am.TryitFrees :language== "om" ? translations.om.TryitFrees: ""}
          </button>

          <button
            className="
                           rounded-lg
                           border-2
                           border-[#09D8F8]
                           px-8
                           py-3
                           text-base
                           font-semibold
                           text-white
                           transition
                           hover:bg-[#4409CB]
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










