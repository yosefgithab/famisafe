import React from 'react'
import { useLanguage } from '../../../context/LanguageContext'
import { translations } from '../../../Data/translations';
import { TypeAnimation } from 'react-type-animation';
import { BsAndroid2, BsClockFill, BsFillCloudFill, BsWindows } from 'react-icons/bs';
import { FaAngleLeft, FaAngleRight, FaCheck, FaRobot, FaWindows } from 'react-icons/fa';
import { SiGooglechrome } from 'react-icons/si';
import { MdPhoneIphone } from 'react-icons/md';
import { TiLocation, TiMessages } from 'react-icons/ti';
import { IoShieldCheckmark } from 'react-icons/io5';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GoCheckCircle } from 'react-icons/go';

export default function Homes() {
  const { language } = useLanguage();

  const awards = [
    {
      title: "The National Parenting Center",
      subtitle: "WINNER",
      image: "https://famisafe.wondershare.com/frontpage/icon-honour-1.png",
    },
    {
      title: "The National Parenting Center",
      subtitle: "WINNER",
      image: "https://famisafe.wondershare.com/frontpage/icon-honour-2.png",
    },
    {
      title: "Made For Mums Awards 2021",
      subtitle: "BRONZE",
      image: "https://famisafe.wondershare.com/frontpage/icon-honour-3.png",
    },
    {
      title: "Mom's Choice Awards",
      subtitle: "HONORING EXCELLENCE",
      image: "https://famisafe.wondershare.com/frontpage/icon-honour-5.png",
    },
    {
      title: "Parents’ Picks Awards 2024",
      subtitle: "WINNER",
      image: "https://famisafe.wondershare.com/frontpage/icon-honour-4.png",
    },
    {
      title: "The National Parenting Center",
      subtitle: "SEAL OF APPROVAL",
      image: "https://famisafe.wondershare.com/frontpage/icon-honour-7.png",
    },
  ];
  const features = [
    {
      mainTitle: "Screen Time Control",
      subtitle: "Set Limits for Your Kid Without Fights",
      description:
        "Build healthy digital habits with customizable screen time limits, schedules, and detailed usage reports.",
      button1: "Start Free Trial",
      button2: "Learn More",
      imageSrc: "https://famisafe.wondershare.com/images/images-2025/new-index/screen-time-usage-report-img.png",
      featureIcons: [
        { icon: <BsClockFill className="text-blue-500" />, title: "Dialy Limits" },
        { icon: <TiMessages className="text-blue-500" />, title: "usage Report" },
      ],
    },
    {
      mainTitle: "Location Tracking",
      subtitle: "Track Your Kid's Location Without Worry",
      description:
        "Know where your kids are with live GPS tracking, location history, and geofencing alerts.",
      button1: "Start Free Trial",
      button2: "Learn More",
      imageSrc: "https://famisafe.wondershare.com/images/images-2025/new-index/location-tracking-img.png",
      featureIcons: [
        { icon: <TiLocation className="text-blue-500" />, title: " Real time GPS " },
        { icon: <IoShieldCheckmark className="text-blue-500" />, title: "Safe Zoone" },
      ],
    },
  ];
  const featuress = [
    { id: 1, title: "Call & message", desc: "Monitor call logs and text messages to detect potential risks or inappropriate content.", image: "https://famisafe.wondershare.com/images/images-2025/new-index/calls-messages-bg.jpg", url: "https://famisafe.wondershare.com/main/sign-up" }, // ✅ URL for this card },
    { id: 2, title: "Scrren Time control", desc: "Set daily screen time limits and schedules to promote health digital habits..", image: "https://famisafe.wondershare.com/images/images-2025/new-index/screen-time-bg.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },
    { id: 3, title: "Screen Viewer", desc: "View your child's device screen in real-time or scheduled to monitor their activity..", image: "https://famisafe.wondershare.com/images/images-2025/new-index/screen-viewer-bg.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },
    { id: 4, title: "App Rules", desc: "Block or allow specific apps to prevent distractions and ensure appropriate usage..", image: "https://famisafe.wondershare.com/images/images-2025/new-index/app-rules-bg.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },
    { id: 5, title: "One Way Audio", desc: "Listen to the surroundings of your child's device to ensure their safety and privacy..", image: "https://famisafe.wondershare.com/images/images-2025/new-index/one-way-audio-bg.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },
    { id: 6, title: "Active Report", desc: "Receive detailed reports on your child's device usage and app activities..", image: "https://famisafe.wondershare.com/images/images-2025/new-index/activity-report-bg.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },
    { id: 7, title: "You Tube Parental control", desc: "Monitor and manage your child's YouTube watch history and block inappropriate content..", image: "https://famisafe.wondershare.com/images/images-2025/new-index/youtube-parental-control-bg.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },
    { id: 8, title: "Tik Toke History", desc: "Track your child's TikTok viewing history to ensure age-appropriate content and videos..", image: "https://famisafe.wondershare.com/images/images-2025/new-index/tiktok-history-bg.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },
    { id: 9, title: "Inappropriate Pictures", desc: "Detect and alert you to explicit images on your child's iPhone or Android device..", image: "https://famisafe.wondershare.com/images/images-2025/new-index/inappropriate-pictures-bg.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },
    { id: 10, title: "Social App Detection", desc: "Monitor 30+ social platforms and customize the suspicious words at  once..", image: "https://famisafe.wondershare.com/images/images-2025/new-index/social-app-detection-bg.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },
    { id: 11, title: "Web Filters", desc: "One-tap block access to inappropriate websites to ensure safe browsing. .", image: "https://famisafe.wondershare.com/images/images-2025/new-index/web-filter-bg.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },
    { id: 12, title: "Diriving Reports", desc: "Monitor and record your child's driving habits, including speed and driving routes.", image: "https://famisafe.wondershare.com/images/images-2025/new-index/driving-report-bg.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },
    { id: 13, title: "Location Tracking", desc: "Track your child’s location in real time, check history, and get alerts for safe zones.", image: "https://famisafe.wondershare.com/images/images-2025/new-index/location-tracking-bg.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },
    { id: 15, title: "SOS Alert", desc: "Allow your child to send instant emergency alerts with their location. .", image: "https://famisafe.wondershare.com/images/images-2025/new-index/sos-alert-bg.jpg" },
  ];
  const featureds = [
    "Manage screen time",
    "Sensitive image alerts",
    "Monitor web search history",
    "Monitor live location and view history",
    "Monitor social apps like WhatsApp, YouTube, etc.",
    "Monitor calls, messages & emails",
    "Monitor chat histories and app screenshots",
    "Monitor the ambient sound around kids",
    "Block websites and applications",
    "Create geofences and send SOS alerts",
  ];
  const awardds = [
    {

      image: "https://famisafe.wondershare.com/images/images-2025/new-index/techradar.svg",
    },
    {

      image: "https://famisafe.wondershare.com/images/images-2025/new-index/beebom.svg",
    },
    {
      image: "https://famisafe.wondershare.com/images/images-2025/new-index/safety-detectives.svg",
    },
    {

      image: "https://famisafe.wondershare.com/images/images-2025/new-index/muo.svg",
    },
    {

      image: "https://famisafe.wondershare.com/images/images-2025/new-index/techradar.svg",
    },
    {

      image: "https://famisafe.wondershare.com/images/images-2025/new-index/beebom.svg",
    },
    {
      image: "https://famisafe.wondershare.com/images/images-2025/new-index/safety-detectives.svg",
    },
    {

      image: "https://famisafe.wondershare.com/images/images-2025/new-index/muo.svg",
    },
  ];

  return (
    <section>
      <div className="bg-gradient-to-br from-[#E0F2FF] via-[#FEFEFEFF] to-[#D9EBFF] max-w-full mx-auto px-4 h-140 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">
          <div className="flex justify-center lg:justify-start items-center gap-3 mb-3 flex-wrap">
            <span className="text-sm font-medium text-gray-700"></span>

            <span className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-white">
              {language === "en" ? translations.en.FamiSafe : language === "am" ? translations.am.FamiSafe : language == "om" ? translations.om.FamiSafe : ""}  V8.9
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight">

            <span className="bg-gradient-to-r from-black via-blue to-teal-400 bg-clip-text text-transparent">
              <TypeAnimation
                sequence={[
                  language === "en"
                    ? translations.en.NextGen
                    : language === "am"
                      ? translations.am.NextGen
                      : language == "om" ? translations.om.NextGen : "",
                  2000,
                ]}
                speed={50}
                cursor={true}
                repeat={Infinity}
              />
            </span>

            <br />

            <span className="bg-gradient-to-r from-black via-blue to-blue-500 bg-clip-text text-transparent">
              <TypeAnimation
                sequence={[
                  language === "en"
                    ? translations.en.ParentalControlApp
                    : language === "am"
                      ? translations.am.ParentalControlApp
                      : language == "om" ? translations.om.ParentalControlApp : "",
                  2000,
                ]}
                speed={50}
                cursor={false}
                repeat={Infinity}
              />
            </span>

            <br />

            <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-blue bg-clip-text text-transparent">
              <TypeAnimation
                sequence={[
                  language === "en"
                    ? translations.en.PoweredbyAI
                    : language === "am"
                      ? translations.am.PoweredbyAI
                      : language == "om" ? translations.om.PoweredbyAI : "",
                  2000,
                ]}
                speed={50}
                cursor={false}
                repeat={Infinity}
              />
            </span>

          </h1>

          <p className="mt-4 text-black max-w-xl text-sm sm:text-base mx-auto lg:mx-0">
            {language === "en"
              ? translations.en.description
              : language === "am"
                ? translations.am.description
                : language == "om" ? translations.om.description : ""}
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start flex-wrap">
            <a
              href="https://famisafe.wondershare.com/main/sign-up"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-5 font-extrabold text-white rounded-[15px] 
                           bg-gradient-to-r from-blue-500 to-cyan-400 
                           hover:from-blue-600 hover:to-cyan-500 
                           transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {language === "en" ? translations.en.StartFreeTrial : language === "am" ? translations.am.StartFreeTrial : language == "om" ? translations.om.StartFreeTrial : ""}
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 rounded-[15px] border 
                           b-blue-600 text-black-600 font-extrabold 
                           hover:bg-blue-600 hover:text-white 
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
              <MdPhoneIphone className="text-2xl hover:text-purple-600 transition" />
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


        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end overflow-hidden lg:overflow-visible">

          {/* Main Banner Image */}
          <img
            src="https://famisafe.wondershare.com/images/images-2025/new-index/banner-pc-img.png"
            alt="App Preview"
            className="
      w-full 
      max-w-[200px] xs:max-w-[240px] sm:max-w-[320px] md:max-w-[400px] xl:max-w-[520px] 
      drop-shadow-2xl
    "
          />

          {/* Overlay Agent Image */}
          <img
            src="https://famisafe.wondershare.com/images/images-2025/new-index/banner-pc-agent.png"
            className="
      absolute 
      left-1/2 top-[60%]
      -translate-x-1/2 -translate-y-1/2
      w-[42%]

      xs:top-[62%] xs:w-[44%]
      sm:top-[65%] sm:w-[46%]
      md:top-[68%] md:w-[45%]

      opacity-90 
      drop-shadow-xl 
      z-20

      /* DESKTOP unchanged */
      lg:left-45 lg:top-75 lg:w-[45%] lg:translate-x-0 lg:translate-y-0
    "
          />
        </div>

      </div>
      {/* Award and logo */}
      <div className="overflow-hidden relative py-6 bg-white mt-4">
        <div
          className="flex animate-marquee whitespace-nowrap gap-1 md:gap-6" // 👈 smaller gap on mobile
          style={{ animationDuration: "12s" }}
        >
          {awards.concat(awards).map((award, idx) => (
            <div
              key={idx}
              className="
          flex flex-col items-center justify-center
          min-w-[25%]
          md:min-w-[180px]
        "
            >
              <img
                src={award.image}
                alt={award.title}
                className="
    w-12 h-12 
    md:w-20 md:h-20
    object-contain mb-2
    animate-spin-slow       /* 👈 mobile rotation */
    md:animate-none         /* 👈 disable on desktop */
  "
              />

              <span className="hidden md:block text-sm font-semibold text-gray-800 text-center">
                {award.title}
              </span>
              <span className="hidden md:block text-sm font-bold text-[#007AFF] text-center">
                {award.subtitle}
              </span>
            </div>
          ))}
        </div>

        {/* Custom animations */}
        <style>
          {`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }

      .animate-marquee {
        display: flex;
        animation: marquee linear infinite;
      }

      @media (max-width: 768px) {
        .animate-marquee {
          animation-duration: 20s;
        }
      }

      /* 👇 Slow 360° rotation */
      @keyframes spinSlow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      .animate-spin-slow {
        animation: spinSlow 8s linear infinite;
      }
    `}
        </style>
      </div>
      {/* End Awrd and logo */}

      {/* main title*/}

      <div className="flex justify-center items-center h-[22vh] md:h-[30vh] bg-white px-4">

        <h1
          className="
      text-2xl sm:text-3xl md:text-6xl
      font-extrabold text-center
      leading-snug md:leading-tight
      bg-gradient-to-r from-black via-blue-600 to-black
      bg-[length:200%_auto]
      bg-clip-text text-transparent
      animate-gradient
    "
        >
          <span className="block">Your Professional</span>
          <span className="block">Main Title</span>
        </h1>

        <style>
          {`
      @keyframes gradientMove {
        0% { background-position: 0% center; }
        50% { background-position: 100% center; }
        100% { background-position: 0% center; }
      }

      .animate-gradient {
        animation: gradientMove 6s linear infinite;
      }
    `}
        </style>

      </div>

      <div className="w-full px-4 md:px-6 py-2">
        <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-r from-[#a9c2db] via-[#b8cde2] to-[#d6e2ef] px-6 md:px-16 py-6 md:py-12 <!-- mobile: 6, desktop: 12 --> flex flex-col lg:flex-row items-center" >

          {/* IMAGE */}
          <div className="flex-1 flex flex-col items-center order-1 lg:order-2 mb-6 lg:mb-0">
            {/* Mobile-only heading above image */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black mb-4 text-center lg:hidden">
              Social Apps Detection
            </h1>

            <img
              src="https://famisafe.wondershare.com/images/images-2025/new-index/social-app-monitoring-img.png"
              alt="Hero"
              className="w-full max-w-[220px] sm:max-w-xs md:max-w-md lg:max-w-lg object-contain"
            />
          </div>

          {/* LEFT CONTENT */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1 mb-6 lg:mb-0">
            {/* Desktop heading (hidden on mobile) */}
            <h1 className="hidden lg:block text-2xl sm:text-3xl md:text-5xl font-bold text-black mb-4">
              Social Apps Detection
            </h1>

            {/* CARD */}
            <div className="bg-white/40 backdrop-blur-md rounded-2xl p-4 md:p-6 mb-4 md:mb-8 max-w-xl mx-auto lg:mx-0 shadow-sm">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-3 text-center lg:text-left">
                Catch Hidden Risks from Social Media
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5 text-center lg:text-left">
                AI scans 30+ apps like TikTok & Instagram to spot bullying,
                predators, and harmful content early.
              </p>

              {/* FEATURES */}
              <div className="flex justify-center gap-3 sm:gap-4">
                {/* AI */}
                <div className="flex flex-col items-center text-center bg-white/70 backdrop-blur-md px-4 py-3 rounded-xl shadow-sm w-[48%] sm:w-[180px]">
                  <div className="mb-2">
                    <FaRobot className="text-blue-600 text-lg" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-gray-800">AI-Detection</span>
                </div>

                {/* Apps */}
                <div className="flex flex-col items-center text-center bg-white/70 backdrop-blur-md px-4 py-3 rounded-xl shadow-sm w-[48%] sm:w-[180px]">
                  <div className="mb-2">
                    <BsWindows className="text-blue-600 text-lg" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-gray-800">Support 30+ Apps</span>
                </div>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="hidden sm:flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-5 rounded-xl font-extrabold text-white bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 shadow-lg hover:scale-105 transition">
                Start Free Trial
              </button>
              <button className="px-8 py-5 rounded-xl font-extrabold bg-white text-black shadow-sm hover:bg-gray-100 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*screen time and location tracking */}
      <div className="w-full px-4 md:px-8 py-8 md:py-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className=" bg-gradient-to-r from-[#A4CDF6] via-[#DFE4EA] to-[#E8F1FA] rounded-3xl p-6 md:p-8"
            >

              {/* ================= MOBILE ================= */}
              <div className=" lg:hidden flex flex-col items-center text-center">

                {/* Main title ABOVE image */}
                <h2 className="text-3xl font-bold mb-4">
                  {feature.mainTitle}
                </h2>

                {/* Image */}
                <img
                  src={feature.imageSrc}
                  alt={feature.mainTitle}
                  className="w-full max-w-xs object-contain mb-4"
                />
                <div className="bg-white/40 backdrop-blur-md rounded-2xl p-4 md:p-6 mb-4 md:mb-8 max-w-xl mx-auto lg:mx-0 shadow-sm">

                  {/* Subtitle + description */}
                  <h3 className=" text-xl font-semibold mb-2">
                    {feature.subtitle}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>

                  <div className="flex gap-4 flex-wrap justify-center">
                    {feature.featureIcons.map((f, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center bg-white/70 px-4 py-3 rounded-xl shadow-sm w-[45%] sm:w-32">
                        <div className="text-2xl mb-1">{f.icon}</div>
                        <span className="text-sm">{f.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ================= DESKTOP ================= */}
              <div className="hidden lg:flex flex-col items-center text-center justify-center">

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-2 ">
                  {feature.mainTitle}
                </h2>

                {/* Subtitle */}
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  {feature.subtitle}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 justify-center">
                  {feature.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-4 mb-4 justify-center">
                  <button className="px-6 py-3 rounded-xl font-extrabold text-black bg-gradient-to-r from-[#1684F1] via-[#F2F4F6] to-[#077FFF] shadow-lg hover:text-[#077FFF] transition h-18">
                    {feature.button1}
                  </button>
                  <button className="px-6 py-3 rounded-xl font-extrabold bg-white text-black shadow-sm hover:bg-[#1684F1]] transition">
                    {feature.button2}
                  </button>
                </div>

                {/* Image (desktop position unchanged) */}
                <div className="flex justify-center">
                  <img
                    src={feature.imageSrc}
                    alt={feature.mainTitle}
                    className="w-full max-w-md object-contain"
                  />
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
      {/* End main title*/}
      {/* Mobile-only CTA Button */}
      <div className="lg:hidden flex justify-center">
        <button
          className="
      px-20 py-4 rounded-[15px] font-extrabold text-white
      bg-gradient-to-r from-[#2D8FF0] via-[#B4D4F4] to-[#1482F7]
      shadow-md hover:shadow-lg active:scale-95
      transition duration-200
    "
        >
          Try Free Trial
        </button>
      </div>
      {/* End Mobile-only CTA Button */}
      {/* main title */}
      <div className="flex justify-center items-center h-[22vh] md:h-[30vh] bg-white px-4">

        <h1
          className="
      text-2xl sm:text-3xl md:text-6xl
      font-extrabold text-center
      leading-snug md:leading-tight
      bg-gradient-to-r from-black via-blue-600 to-black
      bg-[length:200%_auto]
      bg-clip-text text-transparent
      animate-gradient
    "
        >
          <span className="block">Explore More Parental</span>
          <span className="block">Control Features</span>
        </h1>

        <style>
          {`
      @keyframes gradientMove {
        0% { background-position: 0% center; }
        50% { background-position: 100% center; }
        100% { background-position: 0% center; }
      }

      .animate-gradient {
        animation: gradientMove 6s linear infinite;
      }
    `}
        </style>

      </div>

      {/* slide */}
      <div className="py-12  min-h-screen">
        <div className="max-w-7xl mx-auto px-4">

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
              renderBullet: (index, className) => {
                // Show max 5 bullets on desktop
                if (window.innerWidth >= 1024) {
                  const totalSlides = featuress.length;
                  const slidesPerView = 3;
                  const totalDots = Math.ceil(totalSlides / slidesPerView);
                  if (index >= totalDots) return "";
                }
                return `<span class="${className} custom-bullet"></span>`;
              },
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {featuress.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="rounded-3xl overflow-hidden relative h-full shadow-md h-[300px] group">
                  {/* FULL IMAGE */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {/* OVERLAY */}
                  <div className="absolute inset-0 flex items-end p-4">

                    <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 w-full shadow-md">
                      <h3 className="text-gray-900 font-bold text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {item.desc}
                      </p>
                      {/* Mobile only text */}
                      {/* Mobile-only button with URL */}
                      <a
                        href={item.url}   // ✅ link from item data
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 sm:hidden mx-auto block px-4 py-2  text-blue font-extrabold rounded-full border border-black-500 text-center hover:bg-white hover:text-blue-500 transition-colors duration-300"
                      >
                        Try it now
                      </a>

                    </div>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* CONTROLS */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="grid grid-cols-3 items-center">
              <div className="flex justify-end mr-24">
                <button className="prev-btn w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-blue-500 transition-colors duration-300"> <FaAngleLeft className="text-blue-500 hover:text-white transition-colors duration-300" /> </button>
              </div>
              <div className="custom-pagination w-full flex justify-center gap-4"></div>
              <div className="flex justify-start ml-24">
                <button className="next-btn w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-blue-500 transition-colors duration-300"> <FaAngleRight className="text-blue-500 hover:text-white transition-colors duration-300" /> </button>
              </div>
            </div>
          </div>

          <style >{`
  /* Pagination container */
.custom-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;           /* space between dots */
  width: 100%;
}

/* Normal dots */
.custom-pagination .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  border-radius: 50%;   /* circular dots */
  background: #423840;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

/* Active dot becomes rectangle */
.custom-pagination .swiper-pagination-bullet-active {
  width: 24px;           /* rectangular width */
  height: 6px;           /* rectangular height */
  border-radius: 3px;    /* small rounded corners */
  background: #3b82f6;
}

/* Mobile adjustments */
@media (max-width: 640px) {
  .custom-pagination {
    gap: 6px;
  }

  .custom-pagination .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
  }

  .custom-pagination .swiper-pagination-bullet-active {
    width: 20px;
    height: 5px;
  }
}

/* Fix slide height */
.swiper-slide {
  height: auto !important;
  display: flex;
}
`}</style>
          <div className="hidden sm:flex gap-12 justify-center py-8">
            {/* Active Start Free Trial */}
            <button className="px-12  bg-gradient-to-r from-blue-500 via-blue-200 to-blue-600 text-white font-extrabold rounded-[15px] border border-blue-500 text-center hover:bg-white hover:text-black transition-colors duration-300 ">
              Start Free Trial
            </button>

            {/* Secondary Try it now */}
            <button className="px-12 py-5  text-gray-700 font-extrabold rounded-[15px] border border-gray-900 text-center hover:bg-blue-500 hover:text-white transition-colors duration-300">
              Try it now
            </button>
          </div>

        </div>
      </div>
      {/* End slide */}

      {/* Choose Your Family Plan */}
      <div className="w-full min-h-screen bg-gradient-to-b from-blue-100 to-green-100 py-12 px-4 sm:py-16 sm:px-6 rounded-[15px]">
        {/* Main Title */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Choose <span className="text-blue-600">Your Family Plan</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-700 max-w-xl mx-auto text-sm sm:text-base">
            Trusted by millions, FamiSafe helps parents manage their kids' digital lives. Pick your plan now!
          </p>
        </div>

        {/* Large Card Container */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col lg:flex-row relative">

          {/* Left Side: Pricing Card (50%) */}
          <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center text-center lg:text-left gap-4 sm:gap-6">
            <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-4 sm:p-6 rounded-[15px] flex flex-col justify-center items-center text-center h-56 sm:h-60">
              <p className="text-blue-600 font-semibold text-lg sm:text-base">Yearly</p>
              <h3 className="text-3xl sm:text-4xl font-bold my-1 sm:my-2">
                $4.99 <span className="text-base font-normal">/mo</span>
              </h3>
              <p className="text-gray-500 mb-2 sm:mb-3 text-sm sm:text-base">$59.9 billed annually</p>
              <p className="text-blue-500 text-xs sm:text-sm mb-4 sm:mb-6">Unlock all premium features</p>
            </div>

            <button className="mt-3 sm:mt-4 w-36 sm:w-40 mx-auto bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-white font-semibold py-3 sm:py-4 px-5 sm:px-6 rounded-xl shadow-md hover:bg-orange-600 transition-colors duration-300">
              Buy Now
            </button>
          </div>

          {/* Right Side: Features List */}
          <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center mt-6 lg:mt-0">
            <ul className="space-y-2 sm:space-y-3">
              {featureds.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 sm:gap-4">
                  <GoCheckCircle className=" sm:w-5 sm:h-5  text-blue-500 flex-shrink-0 " />
                  <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Best Value Badge */}
          <div className="absolute top-0 right-0 bg-blue-600 text-white px-2 sm:px-3 py-1 rounded-bl-lg font-semibold text-xs sm:text-sm">
            Best Value
          </div>
        </div>
        {/* See all plans link */}
        <div className="flex justify-center">
          <a
            href="https://famisafe.wondershare.com/store/family.html"
            className="mt-4 sm:mt-6 text-blue-600 font-semibold text-sm sm:text-base hover:underline transition-all duration-300"
            target='-black'
          >
            See all plans &gt;&gt;
          </a>
        </div>
      </div>
      {/* End Choose Your Family Plan */}
      {/* //logo */}
      <div className="overflow-hidden relative py-6 bg-white mt-4">
        <div className="flex animate-marquee whitespace-nowrap gap-1 md:gap-6">
          {awardds.concat(awardds).map((award, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center min-w-[25%] md:min-w-[180px]"
            >
              <img
                src={award.image}
                alt={award.title}
                className="w-12 h-12 md:w-20 md:h-20 object-contain"
              />
            </div>
          ))}
        </div>

        <style>
          {`
      @keyframes marquee-left-to-right {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }

      .animate-marquee {
        display: flex;
        animation: marquee-left-to-right linear infinite;
        animation-duration: 12s; /* desktop speed */
      }

      @media (max-width: 768px) {
        .animate-marquee {
          animation-duration: 20s; /* slower on mobile */
        }
      }
    `}
        </style>
      </div>
      {/* slide2 */}
      <div className="w-full  bg-gradient-to-b from-blue-100 to-green-100 py-8 px-4 sm:py-16 sm:px-6 rounded-[15px]">
        {/* Main Title */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Choose <span className="text-blue-600">Your Family Plan</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-700 max-w-xl mx-auto text-sm sm:text-base">
            Trusted by millions, FamiSafe helps parents manage their kids' digital lives. Pick your plan now!
          </p>
        </div>
        {/* slide2 ui */}
        
      <div className=" ">
          <div className="max-w-7xl mx-auto px-4">

            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              navigation={{
                nextEl: ".next-btn",
                prevEl: ".prev-btn",
              }}
              pagination={{
                clickable: true,
                el: ".custom-pagination",
                renderBullet: (index, className) => {
                  // Show max 5 bullets on desktop
                  if (window.innerWidth >= 1024) {
                    const totalSlides = featuress.length;
                    const slidesPerView = 3;
                    const totalDots = Math.ceil(totalSlides / slidesPerView);
                    if (index >= totalDots) return "";
                  }
                  return `<span class="${className} custom-bullet"></span>`;
                },
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {featuress.map((item) => (
                <SwiperSlide key={item.id}>
  <div className="rounded-3xl overflow-hidden shadow-md h-[360px] sm:h-[400px] flex flex-col">

    {/* IMAGE (BIG - TOP) */}
    <div className="h-[70%]">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover"
      />
    </div>

    {/* TEXT (BOTTOM) */}
    <div className="h-[30%] p-4 bg-white flex flex-col justify-center">
      <h3 className="text-gray-900 font-bold text-lg mb-1">
        {item.title}
      </h3>

      <p className="text-gray-600 text-sm">
        {item.desc}
      </p>
    </div>

  </div>
</SwiperSlide>
              ))}
            </Swiper>

            {/* CONTROLS */}
            <div className="border mt-8 flex items-center justify-center gap-6">

  {/* PREV */}
  <button className="prev-btn w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-blue-500 transition">
    <FaAngleLeft className="text-blue-500 hover:text-white" />
  </button>

  {/* PAGINATION */}
  <div className="border custom-pagination flex items-center justify-center gap-2 min-h-[20px]"></div>

  {/* NEXT */}
  <button className="next-btn w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-blue-500 transition">
    <FaAngleRight className="text-blue-500 hover:text-white" />
  </button>

</div>

            <style >{`
  /* Pagination container */
.custom-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;           /* space between dots */
  width: 100%;
}

/* Normal dots */
.custom-pagination .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  border-radius: 50%;   /* circular dots */
  background: #21DC3A;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

/* Active dot becomes rectangle */
.custom-pagination .swiper-pagination-bullet-active {
  width: 24px;           /* rectangular width */
  height: 6px;           /* rectangular height */
  border-radius: 3px;    /* small rounded corners */
  background: #3b82f6;
}

/* Mobile adjustments */
@media (max-width: 640px) {
  .custom-pagination {
    gap: 6px;
  }

  .custom-pagination .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
  }

  .custom-pagination .swiper-pagination-bullet-active {
    width: 20px;
    height: 5px;
  }
}

/* Fix slide height */
.swiper-slide {
  height: auto !important;
  display: flex;
}
`}</style>

            <div className="hidden sm:flex gap-12 justify-center py-8">
              {/* Active Start Free Trial */}
              <button className="px-12  bg-gradient-to-r from-blue-500 via-blue-200 to-blue-600 text-white font-extrabold rounded-[15px] border border-blue-500 text-center hover:bg-white hover:text-black transition-colors duration-300 ">
                Start Free Trial
              </button>

              {/* Secondary Try it now */}
              <button className="px-12 py-5  text-gray-700 font-extrabold rounded-[15px] border border-gray-900 text-center hover:bg-blue-500 hover:text-white transition-colors duration-300">
                Try it now
              </button>
            </div>

          </div>
        </div>
        
      </div>

    </section>
  )
}
