import React, { useState } from 'react'
import { BsAndroid2, BsFillCloudFill } from 'react-icons/bs';
import { FaApple, FaWindows } from 'react-icons/fa';
import { SiGooglechrome } from 'react-icons/si';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../Data/translations';
import { HiOutlinePhotograph } from 'react-icons/hi';

export default function BlockPorn() {
  const { language } = useLanguage();
  const faq0s = language === "en" ? translations.en.faq0s : language === "am" ? translations.am.faq0s : language == "om" ? translations.om.faq0s : "";
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);


  };
  const feature54s = language === "en" ? translations.en.feature54s : language === "am" ? translations.am.feature54s : language == "om" ? translations.om.feature54s : "";
  const featuresv = language === "en" ? translations.en.featuresv : language === "am" ? translations.am.featuresv : language == "om" ? translations.om.featuresv : "";
  const featuredLogos = language === "en" ? translations.en.featuredLogos : language === "am" ? translations.am.featuredLogos : language == "om" ? translations.om.featuredLogos : "";
  const bloggs = language === "en" ? translations.en.bloggs : language === "am" ? translations.am.bloggs : language == "om" ? translations.om.bloggs : "";
  // Progress Bar Component
  const ProgressBar = ({ label, value, max, color }) => {
    const percentage = (value / max) * 100;

    return (
      <div className="flex items-center gap-6 mb-10 ml-4">
        <div className="w-24 font-semibold text-lg text-[#2d2a6e]">
          {label}
        </div>

        <div className="flex-1 relative">
          <div className="w-full h-3 bg-gray-200 rounded-full relative">
            <div
              className="h-3 rounded-full"
              style={{
                width: `${percentage}%`,
                backgroundColor: color,
              }}
            ></div>

            <div
              className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4 bg-white"
              style={{
                left: `calc(${percentage}% - 12px)`,
                borderColor: color,
              }}
            ></div>
          </div>
        </div>

        <div className="w-16 text-lg font-semibold text-[#2d2a6e]">
          {value}
        </div>
      </div>
    );
  };


  return (
    <section className="0w-full overflow-hidden px-4 sm:px-6 lg:px-">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative h-[85vh] w-full bg-center bg-cover bg-no-repeat flex items-center"
          style={{
            backgroundImage:
              "url('https://famisafe.wondershare.com/images/images-2020/screen-time/banner.jpg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="relative max-w-7xl mx-auto w-full px-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
            {/* LEFT CONTENT */}
            <div className="text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight text-white">
                {language === "en"
                  ? translations.en.SeeHowE987asilyYou
                  : language === "am"
                    ? translations.am.SeeHowE987asilyYou
                    : language == "om" ? translations.om.SeeHowE987asilyYou : ""}
              </h1>

              <p className="mt-4 text-white max-w-xl text-sm sm:text-base mx-auto lg:mx-0">
                {language === "en"
                  ? translations.en.Intodaywo98rldporno
                  : language === "am"
                    ? translations.am.Intodaywo98rldporno
                    : language == "om" ? translations.om.SeeHowE987asilyYou : ""}
              </p>

              {/* CTA Button */}
              <div className="mt-6 flex justify-center lg:justify-start">
                <a
                  href="https://famisafe.wondershare.com/main/sign-up"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 font-semibold text-white rounded-full  
                  bg-gradient-to-r from-purple-500 to-cyan-400 hover:from-purple-600 hover:to-cyan-500 transition-all
                  duration-300 shadow-md hover:shadow-lg"
                >
                  {language === "en"
                    ? translations.en.TryItFree
                    : language === "am"
                      ? translations.am.TryItFree
                      : language == "om" ? translations.om.SeeHowE987asilyYou : ""}
                </a>
              </div>

              {/* Platforms */}
              <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-white text-sm">
                <span className="mr-2">
                  {language === "en"
                    ? translations.en.Availableon
                    : language === "am"
                      ? translations.am.Availableon
                      : language == "om" ? translations.om.Availableon : ""}
                </span>

                <a
                  href="https://play.google.com/store/apps/details?id=com.wondershare.famisafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <BsAndroid2 className="text-2xl transition-all duration-300 
      group-hover:text-purple-600 
      group-hover:scale-110 
      group-hover:drop-shadow-lg" />
                </a>

                <a
                  href="https://apps.apple.com/us/app/famisafe-parental-control-app/id1385417904"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <FaApple className="text-2xl transition-all duration-300 
      group-hover:text-gray-300 
      group-hover:scale-110 
      group-hover:drop-shadow-lg" />
                </a>

                <div className="group cursor-pointer">
                  <FaWindows className="text-2xl transition-all duration-300 
      group-hover:text-blue-400 
      group-hover:scale-110 
      group-hover:drop-shadow-lg" />
                </div>

                <div className="group cursor-pointer">
                  <SiGooglechrome className="text-2xl transition-all duration-300 
      group-hover:text-yellow-400 
      group-hover:scale-110 
      group-hover:drop-shadow-lg" />
                </div>

                <a
                  href="https://famisafe.wondershare.com/main/sign-up"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <BsFillCloudFill className="text-2xl transition-all duration-300 
      group-hover:text-cyan-400 
      group-hover:scale-110 
      group-hover:drop-shadow-lg" />
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="bg-white py-10 sm:py-12 max-w-6xl mx-auto px-4 lg:px-6 
                flex flex-col items-center space-y-4">

          {/* Title */}
          <h3 className="text-xl sm:text-3xl lg:text-3xl font-bold text-gray-800 
                 text-center leading-snug">
            {language === "en"
              ? translations.en.Takease0987condtohe
              : language === "am"
                ? translations.am.Takease0987condtohe
                : language == "om" ? translations.om.Takease0987condtohe : ""}
          </h3>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed 
                max-w-3xl text-center">
            {language === "en"
              ? translations.en.Pornog987raphiwebsit
              : language === "am"
                ? translations.am.Pornog987raphiwebsit
                : language == "om" ? translations.om.Pornog987raphiwebsit : ""}
          </p>

        </div>
        {/*=============================== =======================================*/}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <img
              src="https://famisafe.wondershare.com/images/images-2020/block-porn/img1.png" // <-- replace with your image path
              alt="Adult content warning"
              className="max-w-md w-full"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full max-w-xl mx-auto">

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              {language === "en" ? translations.en.Pleases9087ubm : language === "am" ? translations.am.Pleases9087ubm : language === "om" ? translations.om.Pleases9087ubm : ""}
            </h2>

            {/* Textarea */}
            <textarea
              rows={6}
              placeholder={`1. Please separate each website by a comma.\n2. Avoid unrelated websites address or spelling mistakes.`}
              className="w-full border border-gray-300 rounded-md p-4 text-gray-700  focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-md px-4 py-3  focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <select
                className="border border-gray-300 rounded-md px-4 py-3 
                         focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option>I'm a parent {language === "en" ? translations.en.BuyNow : language === "am" ? translations.am.BuyNow : language === "om" ? translations.om.BuyNow : ""}</option>
                <option>I'm a Kind's {language === "en" ? translations.en.BuyNow : language === "am" ? translations.am.BuyNow : language === "om" ? translations.om.BuyNow : ""}</option>
                <option>Other{language === "en" ? translations.en.BuyNow : language === "am" ? translations.am.BuyNow : language === "om" ? translations.om.BuyNow : ""}</option>
              </select>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3 mt-6 text-sm text-gray-700">
              <input type="checkbox" className="mt-1 accent-purple-600" />
              <p>
                {language === "en" ? translations.en.Bysubmitt9087ingy433 : language === "am" ? translations.am.Bysubmitt9087ingy433 : language === "om" ? translations.om.Bysubmitt9087ingy433 : ""} {" "}
                <a href="#" className="text-red-600 underline">
                  EULA
                </a>{" "}
                &{" "}
                <a href="#" className="text-red-600 underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>

            {/* Button */}
            <div className="mt-8">
              <button
                className="w-full sm:w-auto px-12 py-4 rounded-full text-white font-semibold
                         bg-[#8C5BDE] hover:bg-purple-600 transition duration-300 shadow-md"
              >
                SUBMIT NOW
                {language === "en" ? translations.en.BuyNow : language === "am" ? translations.am.BuyNow : language === "om" ? translations.om.BuyNow : ""}
              </button>
            </div>

          </div>
        </div>
        {/*================================================== ==========================================*/}
        {/* Bottom text */}
        <div className="bg-white py-10 sm:py-12 max-w-6xl mx-auto px-4 lg:px-6 
                flex flex-col items-center space-y-4">

          {/* Title */}
          <h3 className="text-xl sm:text-3xl lg:text-3xl font-bold text-gray-800 
                 text-center leading-snug">
            {language === "en"
              ? translations.en.Doyoukno098whowyo
              : language === "am"
                ? translations.am.Doyoukno098whowyo
                : language == "om" ? translations.om.Doyoukno098whowyo : ""}
          </h3>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed 
                max-w-3xl text-center">
            {language === "en"
              ? translations.en.Pornogr908aphymayex
              : language === "am"
                ? translations.am.Pornogr908aphymayex
                : language == "om" ? translations.om.Pornogr908aphymayex : ""}
          </p>

        </div>
        {/* ============================================================ ====================================== */}
        <div className="max-w-7xl mx-auto min-h-screen bg-[#f5f4fb] py-20 px-6">
          <div className="py-10 sm:py-12 max-w-6xl mx-auto px-4 lg:px-6 
                flex flex-col items-center space-y-4">

            {/* Title */}
            <h3 className="text-xl sm:text-3xl lg:text-3xl font-bold text-gray-800 
                 text-center leading-snug">
              {language === "en"
                ? translations.en.FamiSafeBestAppto
                : language === "am"
                  ? translations.am.FamiSafeBestAppto
                  : translations.om.FamiSafeBestAppto}
            </h3>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed 
                max-w-3xl text-center">
              {language === "en"
                ? translations.en.FamiSafeestAppto
                : language === "am"
                  ? translations.am.FamiSfeBestAppto
                  : translations.om.FamiafeBestAppto}

              <br /><br />

              The growth of the internet has made digital communication easier than ever.
              However, it has also exposed children to malicious users who exploit online
              platforms for personal gain. Children are often the primary targets, making
              parental awareness and protection essential. The most common threats to
              personal safety include the following:
              {language === "en" ? translations.en.BuyNow : language === "am" ? translations.am.BuyNow : language === "om" ? translations.om.BuyNow : ""}
            </p>

          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* LEFT SIDE */}
            <div>
              <div className=" bg-white text-center md:text-left rounded-lg">
                <div className="flex justify-center md:justify-center mb-6 ml-8">
                  <div className="w-16 h-16 rounded-xl bg-white  flex items-center justify-center text-3xl">
                    <img src="https://famisafe.wondershare.com/images/images-2020/block-porn/icon1.png" alt="" />
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-[#2d2a6e] mb-6 ml-12">

                  {language === "en" ? translations.en.Adultsi09tes : language === "am" ? translations.am.Adultsi09tes : language === "om" ? translations.om.Adultsi09tes : ""}
                </h2>

                <p className="text-gray-600 leading-relaxed mb-12 ml-12">
                  {language === "en" ? translations.en.Pornographicsite : language === "am" ? translations.am.Pornographicsite : language === "om" ? translations.om.Pornographicsite : ""}
                </p>

                <h3 className="text-xl font-bold text-[#2d2a6e] mb-10 ml-12">
                  {language === "en" ? translations.en.Teens9898Mostvisi : language === "am" ? translations.am.Teens9898Mostvisi : language === "om" ? translations.om.Teens9898Mostvisi : ""}
                </h3>

                <ProgressBar
                  label="xv*****.com"
                  value={11204}
                  max={12000}
                  color="#7c5cc4"
                />
                <ProgressBar
                  label="ru****.com"
                  value={6900}
                  max={12000}
                  color="#2ec4a6"
                />
                <ProgressBar
                  label="por***.com"
                  value={4292}
                  max={12000}
                  color="#f4b740"
                />
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div>
              <div className="bg-white text-center md:text-left rounded-lg">
                <div className="flex justify-center md:justify-center mb-6">
                  <div className="w-16 h-16 rounded-xl bg-white  flex items-center justify-center text-3xl">
                    <img src="https://famisafe.wondershare.com/images/images-2020/block-porn/icon2.png" alt="" />
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-[#2d2a6e] mb-6 ml-12">
                  {language === "en" ? translations.en.Pornr098elate : language === "am" ? translations.am.Pornr098elate : language === "om" ? translations.om.Pornr098elate : ""}
                </h2>

                <p className="text-gray-600 leading-relaxed mb-12 ml-12">
                  {language === "en" ? translations.en.Textin098gisoneo : language === "am" ? translations.am.Textin098gisoneo : language === "om" ? translations.om.Textin098gisoneo : ""}
                </p>

                <h3 className="text-xl font-bold text-[#2d2a6e] mb-10 ml-12">
                  {language === "en" ? translations.en.Filthyw987ordsdete : language === "am" ? translations.am.Filthyw987ordsdete : language === "om" ? translations.om.Filthyw987ordsdete : ""}
                </h3>
                {/* Progress Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-8">

                  {/* LEFT COLUMN */}
                  <div className="space-y-8">
                    <ProgressBar
                      label="f**k"
                      value={9081}
                      max={10000}
                      color="#7c5cc4"
                    />

                    <ProgressBar
                      label="s*x"
                      value={3906}
                      max={10000}
                      color="#2ec4a6"
                    />
                    <ProgressBar
                      label="d**k"
                      value={1862}
                      max={10000}
                      color="#f4b740"
                    />
                  </div>

                  {/* RIGHT COLUMN */}
                  <div className="space-y-8">
                    <ProgressBar
                      label="s**y"
                      value={4257}
                      max={10000}
                      color="#7c5cc4"
                    />
                    <ProgressBar
                      label="pu**y"
                      value={3025}
                      max={10000}
                      color="#2ec4a6"
                    />
                    <ProgressBar
                      label="h**ny"
                      value={1216}
                      max={10000}
                      color="#f4b740"
                    />
                  </div>

                </div>

              </div>
            </div>
          </div>
          <div className="bg-white max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 rounded-lg">

            {/* LEFT SIDE */}
            <div className="flex-1">
              <div className="flex items-start gap-4">

                {/* Icon Box */}
                <div className="w-14 h-14 rounded-lg border-2 border-purple-300 flex items-center justify-center">
                  <HiOutlinePhotograph className="text-3xl text-purple-500" />
                </div>

                {/* Text Content */}
                <div>
                  <h2 className="text-3xl font-bold text-purple-900 mb-4">
                    {language === "en" ? translations.en.Pornpict987ures : language === "am" ? translations.am.Pornpict987ures : language === "om" ? translations.om.Pornpict987ures : ""}
                  </h2>

                  <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                    {language === "en" ? translations.en.Picture87sthatconta : language === "am" ? translations.am.Picture87sthatconta : language === "om" ? translations.om.Picture87sthatconta : ""}
                    <span className="text-purple-700 font-semibold">
                      {language === "en" ? translations.en.FamiSafe6578hasdetec : language === "am" ? translations.am.FamiSafe6578hasdetec : language === "om" ? translations.om.FamiSafe6578hasdetec : ""}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="flex-1 flex justify-center">
              <img
                src="https://famisafe.wondershare.com/images/images-2020/block-porn/img2.png"
                alt="Suspicious detection preview"
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div>

          </div>


          <div className="bg-[white] py-10 sm:py-12 max-w-6xl mx-auto px-4 lg:px-6 flex justify-center">
            <h3 className="text-xl sm:text-3xl lg:text-4xl  font-bold text-gray-800  text-center break-words leading-snug sm:leading-tight" >
              {language === "en" ? translations.en.Managesyour656ki : language === "am" ? translations.am.Managesyour656ki : language === "om" ? translations.om.Managesyour656ki : ""}
            </h3>
          </div>
          <div className=" py-10 sm:py-12 max-w-66xl mx-auto px-4 lg:px-6 flex justify-center">
            <p className="text-xl sm:text-sm lg:text-lg   text-gray-800  text-center break-words leading-snug sm:leading-tight " >
              {language === "en" ? translations.en.Electronic67devices : language === "am" ? translations.am.Electronic67devices : language === "om" ? translations.om.Electronic67devices : ""}

            </p>

          </div>
          {/* CTA BOX */}

          <div className="border-1 border-dashed border-purple-500 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start p-10 rounded-2xl bg-white">

            {/* LEFT IMAGE */}
            <div className="flex justify-center lg:justify-start mt-50">
              <img
                src="https://famisafe.wondershare.com/images/images-2020/parental-control/famisafe_box.png"
                alt="Product Box"
                className="w-80 lg:w-80 object-contain"
              />
            </div>

            {/* RIGHT TEXT */}
            <div className="lg:col-span-2">
              <ul className="space-y-6 text-gray-800 text-base leading-relaxed">
                {feature54s.map((item, index) => (
                  <li key={index}>
                    <strong>{item.title}:</strong> {item.description}
                  </li>
                ))}
              </ul>
              <h3 className="text-start text-lg font-semibold text-gray-800"> {language === "en" ? translations.en.TryItFree : language === "am" ? translations.am.TryItFree : language === "om" ? translations.om.TryItFree : ""}</h3>
              {/* Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start flex-wrap">
                <a
                  href="https://famisafe.wondershare.com/main/sign-up"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 font-semibold text-white rounded-full 
                     bg-gradient-to-r from-purple-500 to-cyan-400 
                     hover:from-purple-600 hover:to-cyan-500 
                     transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  {language === "en" ? translations.en.StartFreeTrial : language === "am" ? translations.am.StartFreeTrial : language == "om" ? translations.om.StartFreeTrial : ""}
                </a>

                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border 
                     border-purple-600 text-purple-600 font-semibold 
                     hover:bg-purple-600 hover:text-white 
                     transition-all duration-300"
                >
                  {language === "en" ? translations.en.BuyNow : language === "am" ? translations.am.BuyNow : language == "om" ? translations.om.BuyNow : ""}
                </a>
              </div>
              {/* Platforms */}
              <div className="mt-6 flex justify-center lg:justify-start items-center gap-4 text-gray-500 text-sm flex-wrap">
                <span className="whitespace-nowrap"></span>
                {language === "en" ? translations.en.Availableon : language === "am" ? translations.am.Availableon : language == "om" ? translations.om.Availableon : ""}

                <a
                  href="https://play.google.com/store/apps/details?id=com.wondershare.famisafe&referrer=adjust_reftag%3DcTizxem82FnCz%26utm_source%3DWebsite%26utm_campaign%3Dfamisafe.wondershare.com%26utm_content%3Dfamisafe-index-en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsAndroid2 className="text-2xl hover:text-purple-600 transition" />
                </a>

                <a
                  href="https://apps.apple.com/us/app/famisafe-parental-control-app/id1385417904"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaApple className="text-2xl hover:text-purple-600 transition" />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWindows className="text-2xl hover:text-purple-600 transition" />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGooglechrome className="text-2xl hover:text-purple-600 transition" />
                </a>

                <a
                  href="https://famisafe.wondershare.com/main/sign-up"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsFillCloudFill className="text-2xl hover:text-purple-600 transition" />
                </a>

              </div>
            </div>
          </div>
          <br />

          {/* Featured in */}
          <p className="text-gray-500 font-medium justify-center mb-8 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center  p-10  bg-white rounded-lg">Also featured in</p>

          <div className="flex flex-wrap justify-center gap-10 text-gray-300 font-semibold mb-20">
            {featuredLogos.map((logo, i) => (
              <span key={i} className="text-lg tracking-wide">
                {logo}
              </span>
            ))}
          </div>
          {/* End Featured in */}

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-10 
                border-1 border-dashed border-purple-500 
                 p-10 rounded-2xl bg-white">

            {featuresv.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex flex-col items-center text-center max-w-sm mx-auto">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center ${item.color}`}>
                    <Icon className="text-white w-6 h-6" />
                  </div>

                  <h3 className="mt-6 font-semibold text-lg">{item.title}</h3>

                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}

            {/* CENTER BUTTON */}
            <div className="md:col-span-3 flex justify-center mt-10">
              <a
                href="https://famisafe.wondershare.com/main/sign-up"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 font-semibold text-white rounded-full 
                 bg-purple-500 hover:bg-purple-600 
                 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {language === "en"
                  ? translations.en.StartFreeTrial
                  : language === "am"
                    ? translations.am.StartFreeTrial
                    : language === "om"
                      ? translations.om.StartFreeTrial
                      : ""}
              </a>
            </div>

          </div>
          {/* End Features grid */}


        </div>
        <div className='border max-w-7xl mx-auto min-h-screen bg-white py-20 px-6'>
          <div className="py-4 sm:py-12 max-w-6xl mx-auto px-4 lg:px-6 
                flex flex-col items-center space-y-4">

            {/* Title */}
            <h3 className="text-xl sm:text-3xl lg:text-3xl font-bold text-gray-800 
                 text-center leading-snug">
              {language === "en"
                ? translations.en.Howtoblockporn
                : language === "am"
                  ? translations.am.Howtoblockporn
                  : language === "om" ? translations.om.Howtoblockporn : ""}
            </h3>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed 
                max-w-3xl text-center">
              <br /><br />
              {language === "en"
                ? translations.en.GoogleSafeSearchaims
                : language === "am"
                  ? translations.am.GoogleSafeSearchaims
                  : language === "om" ? translations.om.GoogleSafeSearchaims : ""}



            </p>

          </div>

          {/* ================= FIRST SECTION ================= */}
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">

            {/* IMAGE */}
            <div className="flex-1 relative flex justify-center order-1 md:order-1">
              <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-100 rounded-full opacity-40 -z-10"></div>

              <img
                src="https://famisafe.wondershare.com/images/images-2020/block-porn/img3.png"
                alt="Turn on Google SafeSearch"
                className="w-full max-w-md md:max-w-xl"
              />
            </div>

            {/* TEXT */}
            <div className="flex-1 order-2 md:order-2">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 md:mb-8 leading-snug">
                {language === "en"
                  ? translations.en.TurnonGoogleSafeSearc
                  : language === "am"
                    ? translations.am.TurnonGoogleSafeSearc
                    : language === "om"
                      ? translations.om.TurnonGoogleSafeSearc
                      : ""}
              </h2>

              <ul className="space-y-4">
                {[
                  language === "en"
                    ? translations.en.Launchthebrowser
                    : language === "am"
                      ? translations.am.Launchthebrowser
                      : language === "om" ? translations.om.Launchthebrowser : "",

                  language === "en"
                    ? translations.en.Typeinwwwgoogle
                    : language === "am"
                      ? translations.am.Typeinwwwgoogle
                      : language === "om" ? translations.om.Typeinwwwgoogle : "",

                  language === "en"
                    ? translations.en.ClicktheSetting
                    : language === "am"
                      ? translations.am.ClicktheSetting
                      : language === "om" ? translations.om.ClicktheSetting : "",

                  language === "en"
                    ? translations.en.SelectSearcet
                    : language === "am"
                      ? translations.am.SelectSearcet
                      : language === "om" ? translations.om.SelectSearcet : "",

                  language === "en"
                    ? translations.en.Checktheboxin
                    : language === "am"
                      ? translations.am.Checktheboxin
                      : language === "om" ? translations.om.Checktheboxin : "",

                  language === "en"
                    ? translations.en.ClickSaveatthebo
                    : language === "am"
                      ? translations.am.ClickSaveatthebo
                      : language === "om" ? translations.om.ClickSaveatthebo : "",
                ].map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-500 text-white text-sm font-semibold shrink-0">
                      {index + 1}
                    </span>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      {step}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <br />

          {/* ================= SECOND SECTION ================= */}
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">

            {/* IMAGE (Mobile First) */}
            <div className="flex-1 relative flex justify-center order-1 md:order-2">
              <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-100 rounded-full opacity-40 -z-10"></div>

              <img
                src="https://famisafe.wondershare.com/images/images-2020/block-porn/img4.png"
                alt="Turn on Google SafeSearch"
                className="w-full max-w-md md:max-w-xl"
              />
            </div>

            {/* TEXT */}
            <div className="flex-1 order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 md:mb-8 leading-snug">
                Turn on Google SafeSearch in the Google app
                {language === "en" ? translations.en.BuyNow : language === "am" ? translations.am.BuyNow : language === "om" ? translations.om.BuyNow : ""}
              </h2>

              <ul className="space-y-4">
                {[
                  language === "en"
                    ? translations.en.OpenGoogleAppo
                    : language === "am"
                      ? translations.am.OpenGoogleAppo
                      : language === "om" ? translations.om.OpenGoogleAppo : "",

                  language === "en"
                    ? translations.en.Tapyourprofilepic
                    : language === "am"
                      ? translations.am.Tapyourprofilepic
                      : language === "om" ? translations.om.Tapyourprofilepic : "",

                  language === "en"
                    ? translations.en.TapGeneralandthen
                    : language === "am"
                      ? translations.am.TapGeneralandthen
                      : language === "om" ? translations.om.TapGeneralandthen : "",

                  language === "en"
                    ? translations.en.Scrolldowntofind
                    : language === "am"
                      ? translations.am.Scrolldowntofind
                      : language === "om" ? translations.om.Scrolldowntofind : "",

                  language === "en"
                    ? translations.en.TapHidexplicitres
                    : language === "am"
                      ? translations.am.TapHidexplicitres
                      : language === "om" ? translations.om.TapHidexplicitres : "",
                ].map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-500 text-white text-sm font-semibold shrink-0">
                      {index + 1}
                    </span>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      {step}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>



        <div className='max-w-7xl mx-auto min-h-screen bg-[#f5f4fb] py-20 px-6 rounded-lg'>
          <div className="py-4 sm:py-12 max-w-6xl mx-auto px-4 lg:px-6 
                flex flex-col items-center space-y-4">

            {/* Title */}
            <h3 className="text-xl sm:text-3xl lg:text-3xl font-bold text-gray-800 
                 text-center leading-snug">
              {language === "en"
                ? translations.en.Howtobl665ockporn
                : language === "am"
                  ? translations.am.Howtobl665ockporn
                  : translations.om.Howtobl665ockporn}
            </h3>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed 
                max-w-3xl text-center">
              {language === "en" ? translations.en.WhatisNSDNSstandsfo : language === "am" ? translations.am.WhatisNSDNSstandsfo : language === "om" ? translations.om.WhatisNSDNSstandsfo : ""}
            </p>

          </div>

          {/* ================= FIRST SECTION ================= */}
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">

            {/* IMAGE */}
            <div className="flex-1 relative flex justify-center order-1 md:order-1">
              <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-100 rounded-full opacity-40 -z-10"></div>

              <img
                src="https://famisafe.wondershare.com/images/images-2020/block-porn/img5.png"
                alt="Turn on Google SafeSearch"
                className="w-full max-w-md md:max-w-xl"
              />
            </div>

            {/* TEXT */}
            <div className="flex-1 order-2 md:order-2">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 md:mb-8 leading-snug">
                {language === "en" ? translations.en.ChangingDNStore : language === "am" ? translations.am.ChangingDNStore : language === "om" ? translations.om.ChangingDNStore : ""}
              </h2>

              <ul className="space-y-4">
                {[
                  language === "en"
                    ? translations.en.TurnonGoogleSaf
                    : language === "am"
                      ? translations.am.TurnonGoogleSaf
                      : language === "om" ? translations.om.TurnonGoogleSaf : "",

                  language === "en"
                    ? translations.en.Launchthebrowser
                    : language === "am"
                      ? translations.am.Launchthebrowser
                      : language === "om" ? translations.om.Launchthebrowser : "",

                  language === "en"
                    ? translations.en.SelectearchSettings
                    : language === "am"
                      ? translations.am.SelectearchSettings
                      : language === "om" ? translations.om.SelectearchSettings : "",

                  language === "en"
                    ? translations.en.Checktheboxinfront
                    : language === "am"
                      ? translations.am.Checktheboxinfront
                      : language === "om" ? translations.om.Checktheboxinfront : "",
                ].map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-500 text-white text-sm font-semibold shrink-0">
                      {index + 1}
                    </span>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      {step}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <br />

          {/* ================= SECOND SECTION ================= */}
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">

            {/* IMAGE (Mobile First) */}
            <div className="flex-1 relative flex justify-center order-1 md:order-2">
              <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-100 rounded-full opacity-40 -z-10"></div>

              <img
                src="https://famisafe.wondershare.com/images/images-2020/block-porn/img6.png"
                alt="Turn on Google SafeSearch"
                className="w-full max-w-md md:max-w-xl"
              />
            </div>

            {/* TEXT */}
            <div className="flex-1 order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 md:mb-8 leading-snug">
               
               {language === "en"
                    ? translations.en.ChangeiPhoneiPad
                    : language === "am"
                      ? translations.am.ChangeiPhoneiPad
                      : language === "om" ? translations.om.ChangeiPhoneiPad : ""}
              </h2>

              <ul className="space-y-4">
                {[
                  language === "en"
                    ? translations.en.OnyourkidiPhon
                    : language === "am"
                      ? translations.am.OnyourkidiPhon
                      : language === "om" ? translations.om.OnyourkidiPhon : "",

                  language === "en"
                    ? translations.en.ScrolltofindtheWi
                    : language === "am"
                      ? translations.am.ScrolltofindtheWi
                      : language === "om" ? translations.om.ScrolltofindtheWi : "",

                  language === "en"
                    ? translations.en.TapConfigureDNS
                    : language === "am"
                      ? translations.am.TapConfigureDNS
                      : language === "om" ? translations.om.TapConfigureDNS : "",

                  language === "en"
                    ? translations.en.Entertheoneyou
                    : language === "am"
                      ? translations.am.Entertheoneyou
                      : language === "om" ? translations.om.Entertheoneyou : "",

                  language === "en"
                    ? translations.en.NoteIfyourte
                    : language === "am"
                      ? translations.am.NoteIfyourte
                      : language === "om" ? translations.om.NoteIfyourte : "",
                ].map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-500 text-white text-sm font-semibold shrink-0">
                      {index + 1}
                    </span>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      {step}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ================= FIRST SECTION ================= */}
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">

            {/* IMAGE */}
            <div className="border flex-1 relative flex justify-center order-1 md:order-1">
              <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-100 rounded-full opacity-40 -z-10"></div>

              <img
                src="https://famisafe.wondershare.com/images/images-2020/block-porn/img7.png"
                alt="Turn on Google SafeSearch"
                className="w-full max-w-md md:max-w-xl"
              />
            </div>

            {/* TEXT */}
            <div className="flex-1 order-2 md:order-2">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 md:mb-8 leading-snug">
                {language === "en"
                    ? translations.en.Filterpornconte
                    : language === "am"
                      ? translations.am.Filterpornconte
                      : language === "om" ? translations.om.Filterpornconte : ""}
              </h2>
              <p>
                {language === "en"
                    ? translations.en.Therearethreewa
                    : language === "am"
                      ? translations.am.Therearethreewa
                      : language === "om" ? translations.om.Therearethreewa : ""}
              </p>
              <br />

              <ul className="space-y-4">
                {[
                  language === "en"
                    ? translations.en.OnthetargetWindows
                    : language === "am"
                      ? translations.am.OnthetargetWindows
                      : language === "om" ? translations.om.OnthetargetWindows : "",

                  language === "en"
                    ? translations.en.Youwillfindalis
                    : language === "am"
                      ? translations.am.Youwillfindalis
                      : language === "om" ? translations.om.Youwillfindalis : "",

                  language === "en"
                    ? translations.en.UnderThisconnec
                    : language === "am"
                      ? translations.am.UnderThisconnec
                      : language === "om" ? translations.om.UnderThisconnec : "",

                  language === "en"
                    ? translations.en.SelectUsethefollowi
                    : language === "am"
                      ? translations.am.SelectUsethefollowi
                      : language === "om" ? translations.om.SelectUsethefollowi : "",
                ].map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-500 text-white text-sm font-semibold shrink-0">
                      {index + 1}
                    </span>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      {step}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <br />

          {/* ================= SECOND SECTION ================= */}
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">

            {/* IMAGE (Mobile First) */}
            <div className="flex-1 relative flex justify-center order-1 md:order-2">
              <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-100 rounded-full opacity-40 -z-10"></div>

              <img
                src="https://famisafe.wondershare.com/images/images-2020/block-porn/img8.png"
                alt="Turn on Google SafeSearch"
                className="w-full max-w-md md:max-w-xl"
              />
            </div>

            {/* TEXT */}
            <div className="flex-1 order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 md:mb-8 leading-snug">
                {language === "en" ? translations.en.Change45MacDNStop : language === "am" ? translations.am.Change45MacDNStop : language === "om" ? translations.om.Change45MacDNStop : ""}
              </h2>
              <p>
               {language === "en" ? translations.en.Whenitomesto56han : language === "am" ? translations.am.Whenitomesto56han : language === "om" ? translations.om.Whenitomesto56han : ""}
              </p>

              <ul className="space-y-4">
                {[
                  language === "en"
                    ? translations.en.OnyourteenMa888ccli
                    : language === "am"
                      ? translations.am.OnyourteenMa888ccli
                      : language === "om" ? translations.om.OnyourteenMa888ccli : "",

                  language === "en"
                    ? translations.en.Alisy65tofnetworks
                    : language === "am"
                      ? translations.am.Alisy65tofnetworks
                      : language === "om" ? translations.om.Alisy65tofnetworks : "",

                  language === "en"
                    ? translations.en.Click55DNSaddthe
                    : language === "am"
                      ? translations.am.Click55DNSaddthe
                      : language === "om" ? translations.om.Click55DNSaddthe : "",

                  language === "en"
                    ? translations.en.Entert65rheIPaddress
                    : language === "am"
                      ? translations.am.Entert65rheIPaddress
                      : language === "om" ? translations.om.Entert65rheIPaddress : "",

                      language === "en"
                    ? translations.en.ickOKwh87yhenyoufin
                    : language === "am"
                      ? translations.am.ickOKwh87yhenyoufin
                      : language === "om" ? translations.om.ickOKwh87yhenyoufin : "",
                ].map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-500 text-white text-sm font-semibold shrink-0">
                      {index + 1}
                    </span>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      {step}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/*========================================*/}

        </div>

        <div className='border max-w-7xl mx-auto min-h-screen bg-white py-20 px-6'>
          <div className="py-4 sm:py-12 max-w-6xl mx-auto px-4 lg:px-6 
                flex flex-col items-center space-y-4">

            {/* Title */}
            <h3 className="text-xl sm:text-3xl lg:text-3xl font-bold text-gray-800 
                 text-center leading-snug">
              {language === "en"
                ? translations.en.Howtoblockpor54nony
                : language === "am"
                  ? translations.am.Howtoblockpor54nony
                  : language=== "om" ? translations.om.Howtoblockpor54nony: ""}
            </h3>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed 
                max-w-3xl text-center">

              <br /><br />
              {language === "en" ? translations.en.Contentfil45teringh : language === "am" ? translations.am.Contentfil45teringh : language === "om" ? translations.om.Contentfil45teringh : ""}
            </p>

          </div>

          {/* ================= FIRST SECTION ================= */}
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">

            {/* IMAGE */}
            <div className="flex-1 relative flex justify-center order-1 md:order-1">
              <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-100 rounded-full opacity-40 -z-10"></div>

              <img
                src="https://famisafe.wondershare.com/images/images-2020/block-porn/img9.png"
                alt="Turn on Google SafeSearch"
                className="w-full max-w-md md:max-w-xl"
              />
            </div>

            {/* TEXT */}
            <div className="flex-1 order-2 md:order-2">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 md:mb-8 leading-snug">
                {language === "en" ? translations.en.TurnonContentRest : language === "am" ? translations.am.TurnonContentRest : language === "om" ? translations.om.TurnonContentRest : ""}
              </h2>
              <br />
              <p>
                {language === "en" ? translations.en.Applehasintroducedt : language === "am" ? translations.am.Applehasintroducedt : language === "om" ? translations.om.Applehasintroducedt : ""}
              </p>

              <ul className="space-y-4">
                {[
                  language === "en"
                    ? translations.en.OnyourteeniOSd
                    : language === "am"
                      ? translations.am.OnyourteeniOSd
                      : language === "om" ? translations.om.OnyourteeniOSd : "",

                  language === "en"
                    ? translations.en.Setupaparentalpas
                    : language === "am"
                      ? translations.am.Setupaparentalpas
                      : language === "om" ? translations.om.Setupaparentalpas : "",

                  language === "en"
                    ? translations.en.TapContentPrivacyR
                    : language === "am"
                      ? translations.am.TapContentPrivacyR
                      : language === "om" ? translations.om.TapContentPrivacyR : "",

                  language === "en"
                    ? translations.en.Youcanfilterexplicitc
                    : language === "am"
                      ? translations.am.Youcanfilterexplicitc
                      : language === "om" ? translations.om.Youcanfilterexplicitc : "",
                ].map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-500 text-white text-sm font-semibold shrink-0">
                      {index + 1}
                    </span>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      {step}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <br />

          {/* ================= SECOND SECTION ================= */}
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">

            {/* IMAGE (Mobile First) */}
            <div className="flex-1 relative flex justify-center order-1 md:order-2">
              <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-100 rounded-full opacity-40 -z-10"></div>

              <img
                src="https://famisafe.wondershare.com/images/images-2020/block-porn/img10.png"
                alt="Turn on Google SafeSearch"
                className="w-full max-w-md md:max-w-xl"
              />
            </div>

            {/* TEXT */}
            <div className="flex-1 order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 md:mb-8 leading-snug">
                {language === "en" ? translations.en.UseMicroso23ftFamilySaf : language === "am" ? translations.am.UseMicroso23ftFamilySaf : language === "om" ? translations.om.UseMicroso23ftFamilySaf : ""}
              </h2>
              <br />
              <p>
                {language === "en" ? translations.en.MicrosoftF23amilySafe : language === "am" ? translations.am.MicrosoftF23amilySafe : language === "om" ? translations.om.MicrosoftF23amilySafe : ""}
                
              </p>
              <br />

              <ul className="space-y-4">
                {[
                  language === "en"
                    ? translations.en.OnyourkidW23indows
                    : language === "am"
                      ? translations.am.OnyourkidW23indows
                      : language === "om" ? translations.om.OnyourkidW23indows : "",

                  language === "en"
                    ? translations.en.ClickAddaF23amilyMe
                    : language === "am"
                      ? translations.am.ClickAddaF23amilyMe
                      : language === "om" ? translations.om.ClickAddaF23amilyMe : "",

                  language === "en"
                    ? translations.en.Enteryour23kidsMicro
                    : language === "am"
                      ? translations.am.Enteryour23kidsMicro
                      : language === "om" ? translations.om.Enteryour23kidsMicro : "",

                  language === "en"
                    ? translations.en.Afteryoup23rovideallt
                    : language === "am"
                      ? translations.am.Afteryoup23rovideallt
                      : language === "om" ? translations.om.Afteryoup23rovideallt : "",
                      language === "en"
                    ? translations.en.Underyou43rchildsa
                    : language === "am"
                      ? translations.am.Underyou43rchildsa
                      : language === "om" ? translations.om.Underyou43rchildsa : "",
                      language === "en"
                    ? translations.en.Turnonth34etoggleun
                    : language === "am"
                      ? translations.am.Turnonth34etoggleun
                      : language === "om" ? translations.om.Turnonth34etoggleun : "",
                ].map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-500 text-white text-sm font-semibold shrink-0">
                      {index + 1}
                    </span>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      {step}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ================= FIRST SECTION ================= */}
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">

            {/* IMAGE */}
            <div className="flex-1 relative flex justify-center order-1 md:order-1">
              <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-100 rounded-full opacity-40 -z-10"></div>

              <img
                src="https://famisafe.wondershare.com/images/images-2020/block-porn/img11.png"
                alt="Turn on Google SafeSearch"
                className="w-full max-w-md md:max-w-xl"
              />
            </div>

            {/* TEXT */}
            <div className="flex-1 order-2 md:order-2">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 md:mb-8 leading-snug">
                {language === "en" ? translations.en.UseScreen555TimeonM : language === "am" ? translations.am.UseScreen555TimeonM : language === "om" ? translations.om.UseScreen555TimeonM : ""}
              </h2>
              <br />
              <p>
                {language === "en" ? translations.en.Ifyourkid87sareusin : language === "am" ? translations.am.Ifyourkid87sareusin : language === "om" ? translations.om.Ifyourkid87sareusin : ""}
              </p>

              <ul className="space-y-4">
                {[
                  language === "en"
                    ? translations.en.Onyourkid000Maclo
                    : language === "am"
                      ? translations.am.Onyourkid000Maclo
                      : language === "om" ? translations.om.Onyourkid000Maclo : "",

                  language === "en"
                    ? translations.en.ChooseApple09menu
                    : language === "am"
                      ? translations.am.ChooseApple09menu
                      : language === "om" ? translations.om.ChooseApple09menu : "",

                  language === "en"
                    ? translations.en.Youwillrec6eiveap
                    : language === "am"
                      ? translations.am.Youwillrec6eiveap
                      : language === "om" ? translations.om.Youwillrec6eiveap : "",

                  language === "en"
                    ? translations.en.GotoConte76ntPri
                    : language === "am"
                      ? translations.am.GotoConte76ntPri
                      : language === "om" ? translations.om.GotoConte76ntPri : "",
                      

                  language === "en"
                    ? translations.en.Ifyouwantt456orest
                    : language === "am"
                      ? translations.am.Ifyouwantt456orest
                      : language === "om" ? translations.om.Ifyouwantt456orest : "",
                ].map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-500 text-white text-sm font-semibold shrink-0">
                      {index + 1}
                    </span>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      {step}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <br />

          {/* ================= SECOND SECTION ================= */}
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">

            {/* IMAGE (Mobile First) */}
            <div className="flex-1 relative flex justify-center order-1 md:order-2">
              <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-100 rounded-full opacity-40 -z-10"></div>

              <img
                src="https://famisafe.wondershare.com/images/images-2020/block-porn/img12.png"
                alt="Turn on Google SafeSearch"
                className="w-full max-w-md md:max-w-xl"
              />
            </div>

            {/* TEXT */}
            <div className="flex-1 order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 md:mb-8 leading-snug">
                {language === "en" ? translations.en.Setupparentalcontrol : language === "am" ? translations.am.Setupparentalcontrol : language === "om" ? translations.om.Setupparentalcontrol : ""}
              </h2>
              <br />
              <p>
                {language === "en" ? translations.en.Teenscanalsoaccesspo : language === "am" ? translations.am.Teenscanalsoaccesspo : language === "om" ? translations.om.Teenscanalsoaccesspo : ""}
              </p>

              <ul className="space-y-4">
                {[
                  language === "en"
                    ? translations.en.OnyourkidsAndroidd
                    : language === "am"
                      ? translations.am.OnyourkidsAndroidd
                      : language === "om" ? translations.om.OnyourkidsAndroidd : "",

                  language === "en"
                    ? translations.en.Tapenuonthetop
                    : language === "am"
                      ? translations.am.Tapenuonthetop
                      : language === "om" ? translations.om.Tapenuonthetop : "",

                  language === "en"
                    ? translations.en.TurnonarentalControl
                    : language === "am"
                      ? translations.am.TurnonarentalControl
                      : language === "om" ? translations.om.TurnonarentalControl : "",

                  language === "en"
                    ? translations.en.SetPINtopreve
                    : language === "am"
                      ? translations.am.SetPINtopreve
                      : language === "om" ? translations.om.SetPINtopreve : "",
                      

                  language === "en"
                    ? translations.en.Youwillbeableto
                    : language === "am"
                      ? translations.am.Youwillbeableto
                      : language === "om" ? translations.om.Youwillbeableto : "",
                      
                  language === "en"
                    ? translations.en.Taptheoneyouwoul
                    : language === "am"
                      ? translations.am.Taptheoneyouwoul
                      : language === "om" ? translations.om.Taptheoneyouwoul : "",
                ].map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-500 text-white text-sm font-semibold shrink-0">
                      {index + 1}
                    </span>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      {step}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>



        </div>

        {/* =================== FAQS =================== */}

        <div className="max-w-6xl mx-auto min-h-screen bg-[#f5f4fb] py-20 px-6 rounded-xl">

          {/* Title */}
          <h2 className=" mb-14 text-center text-3xl font-semibold text-gray-900">
            
            {language === "en" ? translations.en.FAQAboutBlock : language === "am" ? translations.am.FAQAboutBlock : language === "om" ? translations.om.FAQAboutBlock : ""}
          </h2>

          {/* FAQ Items */}
          <div className="divide-y divide-gray-200">
            {faq0s.map((faq, index) => (
              <div key={index} className="py-6">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between text-left "
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
        {/* =================== END FAQS =================== */}
        {/* =================== Screen Time Parental Control Blog =================== */}

        {/* Title */}
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-800 mb-14">
          Screen Time Parental Control Blog
          {language === "en" ? translations.en.BuyNow : language === "am" ? translations.am.BuyNow : language === "om" ? translations.om.BuyNow : ""}
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bloggs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                {/* Curved bottom */}
                <div className="absolute bottom-0 left-0 w-full h-10 bg-white rounded-t-[60%]" />
              </div>

              {/* Text */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                  {blog.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <br />

        {/* =================== END Screen Time Parental Control Blog =================== */}
        <div className=" mx-auto max-w-6xl rounded-3xl bg-gradient-to-r from-[#171718] via-[#060708] to-[#292430]  px-6py-16 md:px-12  md:py-20 text-center ">
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
            <span className="text-lg font-semibold text-white">
              {language === "en" ? translations.en.FamiSafe : language === "am" ? translations.am.FamiSafe : language === "om" ? translations.om.FamiSafe : ""}
            </span>
          </div>

          {/* Heading */}
          <h2 className="mb-10 text-3xl font-semibold text-white md:text-4xl">
            {language === "en" ? translations.en.TheMostReliable : language === "am" ? translations.am.TheMostReliable : language === "om" ? translations.om.TheMostReliable : ""}
          </h2>

          {/* Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              className="rounded-full bg-[#8B5CF6] px-8 py-3 text-base font-semibold text-white transition hover:bg-[#7C3AED]"
            >
              {language === "en" ? translations.en.TryitFrees : language === "am" ? translations.am.TryitFrees : language === "om" ? translations.om.TryitFrees : ""}
            </button>

            <button
              className=" rounded-full border-2 border-[#8B5CF6] px-8 py-3 text-base font-semibold text-[#8B5CF6] transition hover:bg-[#8B5CF6] hover:text-white " >
              {language === "en" ? translations.en.BuyNow : language === "am" ? translations.am.BuyNow : language === "om" ? translations.om.BuyNow : ""}
            </button>
          </div>
        </div>


        <br />
      </div>
    </section>
  );
}
