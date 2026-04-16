import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useLanguage } from '../../../context/LanguageContext'
import { translations } from '../../../Data/translations';
import { } from 'react-type-animation';
import { BsAndroid2, BsFillCloudFill, BsWindows } from 'react-icons/bs';
import { FaAngleLeft, FaAngleRight, FaBuilding, FaRobot, FaUsers, FaWindows } from 'react-icons/fa';
import { SiGooglechrome } from 'react-icons/si';
import { MdPhoneIphone } from 'react-icons/md';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GoCheckCircle } from 'react-icons/go';
import { CiBookmarkCheck } from 'react-icons/ci';
import { BiSolidHomeHeart } from 'react-icons/bi';
import CountUp from 'react-countup';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Homes() {
  const { language } = useLanguage();
 
  const imgRef = useRef(null);
  const agentRef = useRef(null);

  useLayoutEffect(() => {
    if (!imgRef.current || !agentRef.current) return;

    const ctx = gsap.context(() => {

      gsap.from(imgRef.current, {
        scale: 0.7,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 85%",
        },
      });

      gsap.from(agentRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 85%",
        },
      });

      gsap.to(agentRef.current, {
        y: "-=20",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(imgRef.current, {
        y: 40,
        scrollTrigger: {
          trigger: imgRef.current,
          scrub: true,
        },
      });

    });

    return () => ctx.revert();
  }, []);

  const iconMap = {
    FaBuilding: <FaBuilding className="text-blue-600 text-3xl" />,
    FaUsers: <FaUsers className="text-teal-500 text-3xl" />,
    BiSolidHomeHeart: <BiSolidHomeHeart className="text-orange-500 text-3xl" />,
    CiBookmarkCheck: <CiBookmarkCheck className="text-blue-600 text-3xl" />,
  };

  // const feaptures = language === "en" ? translations.en.feaptures : language === "am" ? translations.am.feaptures : language == "om" ? translations.om.feaptures : "";
  const feaxturess = language === "en" ? translations.en.feaxturess : language === "am" ? translations.am.feaxturess : language == "om" ? translations.om.feaxturess : "";
  const featureds = language === "en" ? translations.en.featureds : language === "am" ? translations.am.featureds : language == "om" ? translations.om.featureds : "";
  const featuresse = language === "en" ? translations.en.featuresse : language === "am" ? translations.am.featuresse : language == "om" ? translations.om.featuresse : "";
  const awardss = language === "en" ? translations.en.awardss : language === "am" ? translations.am.awardss : language == "om" ? translations.om.awardss : "";
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
  // count up animation num
  const daata = language === "en" ? translations.en.daata : language === "am" ? translations.am.daata : language == "om" ? translations.om.daata : "";
  const reviqews = language === "en" ? translations.en.reviqews : language === "am" ? translations.am.reviqews : language == "om" ? translations.om.reviqews : "";
  const feature6s = language === "en" ? translations.en.feature6s : language === "am" ? translations.am.feature6s : language == "om" ? translations.om.feature6s : "";



  // 2️⃣ Now initialize activeReview safely
  const [activeReview, setActiveReview] = useState(reviqews[0]);

  // 3️⃣ Animated feature bars state
  const [animatedValues, setAnimatedValues] = useState({});

  // Animate bars every time activeReview changes
  useEffect(() => {
    // Reset bars to 0 first
    const reset = Object.keys(activeReview.features).reduce((acc, key) => {
      acc[key] = 0;
      return acc;
    }, {});
    setAnimatedValues(reset);

    // Animate to actual values
    const timeout = setTimeout(() => {
      setAnimatedValues(activeReview.features);
    }, 50);

    return () => clearTimeout(timeout);
  }, [activeReview]);
  const socials = [
    {
      name: "YouTube",
      href: "https://youtube.com",
      img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg",
      bg: "#FF0000",
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg",
      bg: "#1877F2",
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg",
      gradient: true,
    },
    {
      name: "X",
      href: "https://x.com",
      img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg",
      bg: "#000000",
    },
    {
      name: "TikTok",
      href: "https://tiktok.com",
      img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tiktok.svg",
      bg: "#000000",
    },
  ];


  //popup

  const [visible, setVisible] = useState(true);
  const [minimized, setMinimized] = useState(false);

  // 👉 remember if user closed
  useEffect(() => {
    const closed = localStorage.getItem("popupClosed");
    if (closed) setVisible(false);
  }, []);
  {/* Close */ }
  // const handleClose = () => {
  //   setVisible(false);
  //   localStorage.setItem("popupClosed", "true");
  // };

  if (!visible) return null;

  return (
    <section>
      <div className="bg-gradient-to-br from-[#DCEFFE] via-[#FEFEFEFF] to-[#D6E8FF] 
                max-w-full mx-auto px-4 sm:px-6 lg:px-8 
                grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">
          <div className="flex justify-center lg:justify-start items-center gap-3 mb-3 flex-wrap">
            <span className="text-sm font-medium text-gray-700"></span>

            <span className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-white">
              {language === "en" ? translations.en.Wonde443rshareFa : language === "am" ? translations.am.Wonde443rshareFa : language == "om" ? translations.om.Wonde443rshareFa : ""}
            </span>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="animate-wordColor delay-0"> {language === "en" ? translations.en.AIPare456ntalControl : language === "am" ? translations.am.AIPare456ntalControl : language == "om" ? translations.om.AIPare456ntalControl : ""}  </span>{" "}
              <span className="animate-wordColor delay-3">{language === "en" ? translations.en.forSo765cial : language === "am" ? translations.am.forSo765cial : language == "om" ? translations.om.forSo765cial : ""}  </span>{" "}
              <span className="animate-wordColor delay-1">{language === "en" ? translations.en.MediaSa86fety : language === "am" ? translations.am.MediaSa86fety : language == "om" ? translations.om.MediaSa86fety : ""}  </span>{" "}
            </h2>
            <h2 className="mt-4 text-gray-700 text-lg sm:text-xl md:text-2xl font-extrabold max-w-xl mx-auto lg:mx-0 leading-relaxed">
              <span className="animate-wordColor delay-1">{language === "en" ? translations.en.Keepaney45eon3 : language === "am" ? translations.am.Keepaney45eon3 : language == "om" ? translations.om.Keepaney45eon3 : ""}  </span>{" "}
            </h2>
          </div>

          <p className="mt-4 text-black max-w-xl text-sm sm:text-base mx-auto lg:mx-0">
            {language === "en"
              ? translations.en.AIpowere645dprotectionfo
              : language === "am"
                ? translations.am.AIpowere645dprotectionfo
                : language == "om" ? translations.om.AIpowere645dprotectionfo : ""}
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
        <div className="relative flex justify-center items-center order-1 lg:order-2 overflow-hidden lg:overflow-visible mb-6 lg:mb-0">
 {/* MAIN IMAGE */}
    <img
      ref={imgRef}
      src="https://famisafe.wondershare.com/images/images-2025/new-index/banner-pc-img.png"
      alt="App Preview"
      className="
        w-full 
        max-w-[100%] 
        sm:max-w-[90%] 
        md:max-w-[420px] 
        xl:max-w-[520px] 
        h-auto 
        object-contain 
        drop-shadow-2xl
      "
    />

    {/* OVERLAY IMAGE */}
    <img
      ref={agentRef}
      src="https://famisafe.wondershare.com/images/images-2025/new-index/banner-pc-agent.png"
      className="
        absolute 
        w-[55%] 
        top-[65%] 
        left-1/2 
        -translate-x-1/2 
        -translate-y-1/2 
        opacity-90 
        drop-shadow-xl 
        z-20

        /* desktop only */
        lg:left-45 
        lg:top-75 
        lg:w-[45%] 
        lg:translate-x-0 
        lg:translate-y-0
      "
    />
          {/* <img
            ref={imgRef}
            src="https://famisafe.wondershare.com/images/images-2025/new-index/banner-pc-img.png"
            alt="App Preview"
            className="w-full max-w-[200px] xs:max-w-[240px] sm:max-w-[320px] md:max-w-[400px] xl:max-w-[520px] drop-shadow-2xl"
          />

          {/* Overlay Image *
          <img
            ref={agentRef}
            src="https://famisafe.wondershare.com/images/images-2025/new-index/banner-pc-agent.png"
            className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 w-[42%] opacity-90 drop-shadow-xl z-20 lg:left-45 lg:top-75 lg:w-[45%] lg:translate-x-0 lg:translate-y-0"
          /> */}
        </div>

      </div>
      <div>
        <>
          {/* 🔵 POPUP */}
          {!minimized && (
            <div className="hidden md:block fixed right-3 top-1/2 -translate-y-1/2 z-50 w-[200px] lg:w-[220px] animate-slideIn">
              <div className="relative rounded-2xl shadow-xl overflow-hidden bg-white">

                {/* Close */}
                {/* <button
              onClick={handleClose}
              className="absolute top-1 right-1 text-gray-500 hover:text-black z-10 text-xs"
            >
              ✕
            </button> */}

                {/* Minimize */}
                <button
                  onClick={() => setMinimized(true)}
                  className="absolute top-1 left-1 text-gray-500 hover:text-black z-10 text-xs"
                >
                  —
                </button>

                <img
                  src="https://famisafe.wondershare.com/images/images-2025/famisafe/index-modal-v9-new.png"
                  alt="offer"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          )}

          {/* 🟠 CHAT BUBBLE (when minimized) */}
          {minimized && (
            <div
              onClick={() => setMinimized(false)}
              className="hidden md:flex fixed right-4 bottom-6 z-50 w-14 h-14 bg-orange-500 rounded-full items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition"
            >
              🎁
            </div>
          )}

          {/* 🔥 Animation */}
          <style>
            {`
        @keyframes slideIn {
          from {
            transform: translateX(100%) translateY(-50%);
            opacity: 0;
          }
          to {
            transform: translateX(0) translateY(-50%);
            opacity: 1;
          }
        }

        .animate-slideIn {
          animation: slideIn 0.4s ease-out;
        }
      `}
          </style>
        </>

      </div>
      {/* Award and logo */}
      <div className="overflow-hidden relative py-6 bg-white mt-4">
        <div
          className="flex animate-marquee whitespace-nowrap gap-1 md:gap-6" // 👈 smaller gap on mobile
          style={{ animationDuration: "12s" }}
        >
          {awardss.concat(awardss).map((award, idx) => (
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
          <span className="block"> {language === "en" ? translations.en.YourProfessional : language === "am" ? translations.am.YourProfessional : language == "om" ? translations.om.YourProfessional : ""}  </span>
          <span className="block">  {language === "en" ? translations.en.MainTitle : language === "am" ? translations.am.MainTitle : language == "om" ? translations.om.MainTitle : ""}  </span>
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
        <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-br from-[#C6E1FF] via-[#DAECFF] to-[#C4E1FF] px-6 md:px-16 py-6 md:py-12 <!-- mobile: 6, desktop: 12 --> flex flex-col lg:flex-row items-center" >

          {/* IMAGE */}
          <div className="flex-1 flex flex-col items-center order-1 lg:order-2 mb-6 lg:mb-0">
            {/* Mobile-only heading above image */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black mb-4 text-center lg:hidden">
              {language === "en" ? translations.en.SocialAppsDetection : language === "am" ? translations.am.SocialAppsDetection : language == "om" ? translations.om.SocialAppsDetection : ""}
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
              {language === "en" ? translations.en.SocialAppsDetection : language === "am" ? translations.am.SocialAppsDetection : language == "om" ? translations.om.SocialAppsDetection : ""}
            </h1>

            {/* CARD */}
            <div className="bg-white/40 backdrop-blur-md rounded-2xl p-4 md:p-6 mb-4 md:mb-8 max-w-xl mx-auto lg:mx-0 shadow-sm">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-3 text-center lg:text-left">
                {language === "en" ? translations.en.CatchHiddenRisk : language === "am" ? translations.am.CatchHiddenRisk : language == "om" ? translations.om.CatchHiddenRisk : ""}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5 text-center lg:text-left">
                {language === "en" ? translations.en.AIscans30appsli : language === "am" ? translations.am.AIscans30appsli : language == "om" ? translations.om.AIscans30appsli : ""}
              </p>

              {/* FEATURES */}
              <div className="flex justify-center gap-3 sm:gap-4">
                {/* AI */}
                <div className="flex flex-col items-center text-center bg-white/70 backdrop-blur-md px-4 py-3 rounded-xl shadow-sm w-[48%] sm:w-[180px]">
                  <div className="mb-2">
                    <FaRobot className="text-blue-600 text-lg" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-gray-800"> {language === "en" ? translations.en.AIDetection : language === "am" ? translations.am.AIDetection : language == "om" ? translations.om.AIDetection : ""} </span>
                </div>

                {/* Apps */}
                <div className="flex flex-col items-center text-center bg-white/70 backdrop-blur-md px-4 py-3 rounded-xl shadow-sm w-[48%] sm:w-[180px]">
                  <div className="mb-2">
                    <BsWindows className="text-blue-600 text-lg" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-gray-800"> {language === "en" ? translations.en.Support30Apps : language === "am" ? translations.am.Support30Apps : language == "om" ? translations.om.Support30Apps : ""} </span>
                </div>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="hidden sm:flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-5 rounded-xl font-extrabold text-white bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 shadow-lg hover:scale-105 transition">
                {language === "en" ? translations.en.StartFreeTrial : language === "am" ? translations.am.StartFreeTrial : language == "om" ? translations.om.StartFreeTrial : ""}
              </button>
              <button className="px-8 py-5 rounded-xl font-extrabold bg-white text-black shadow-sm hover:bg-gray-100 transition">
                {language === "en" ? translations.en.LearnMore : language === "am" ? translations.am.LearnMore : language == "om" ? translations.om.LearnMore : ""}
              </button>
            </div>
          </div>
        </div>
      </div> 

      {/*screen time and location tracking */}
      <div className="w-full px-4 md:px-8 py-8 md:py-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          {feature6s.map((feature, idx) => (
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
                    {feature?.featureIcons?.map((f, i) => {
                      const Icon = f.icon; // assign the component
                      return (
                        <div
                          key={i}
                          className="flex flex-col items-center bg-white/70 px-4 py-3 rounded-xl shadow-sm w-[45%] sm:w-32"
                        >
                          <div className="text-2xl mb-1">
                            <Icon className="text-blue-500" /> {/* render as JSX */}
                          </div>
                          <span className="text-sm">{f.title}</span>
                        </div>
                      );
                    })}
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
          {language === "en" ? translations.en.StartFreeTrial : language === "am" ? translations.am.StartFreeTrial : language == "om" ? translations.om.StartFreeTrial : ""}
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
          <span className="block">{language === "en"
            ? translations.en.ExploreMoreParental
            : language === "am"
              ? translations.am.ExploreMoreParental
              : language == "om" ? translations.om.ExploreMoreParental : ""}</span>
          <span className="block"> {language === "en"
            ? translations.en.ControlFeatures
            : language === "am"
              ? translations.am.ControlFeatures
              : language == "om" ? translations.om.ControlFeatures : ""}</span>
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
                const totalSlides = feaxturess.length;
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
          {feaxturess.map((item) => (
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

                  <div className="border bg-white/90 backdrop-blur-md rounded-2xl p-4 w-full shadow-md 
                transform transition-all duration-500 ease-in-out
                hover:scale-105 hover:shadow-xl hover:-translate-y-2
                animate-fadeInUp">

                    <h3 className="text-gray-900 font-bold text-lg mb-1 transition-colors duration-300 hover:text-blue-500">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm transition-opacity duration-300 hover:opacity-80">
                      {item.desc}
                    </p>

                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 sm:hidden mx-auto block px-4 py-2 
               text-blue font-extrabold rounded-full 
               border border-black text-center
               transition-all duration-300
               hover:bg-blue-500 hover:text-white hover:scale-105"
                    >
                      {language === "en"
                        ? translations.en.StartFreeTrial
                        : language === "am"
                          ? translations.am.StartFreeTrial
                          : language == "om"
                            ? translations.om.StartFreeTrial
                            : ""}
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
              <button className="prev-btn w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-blue-500 transition-colors duration-300"> <FaAngleLeft className="text-blue-500 hover:text-white transition-colors duration-300 " /> </button>
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
      <br />
      {/* End slide */}

      {/* Choose Your Family Plan */}
      <div className=" w-full min-h-screen bg-gradient-to-b from-blue-100 to-green-100 py-12 px-4 sm:py-16 sm:px-6 rounded-[15px]">
        {/* Main Title */}

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="animate-wordColor delay-0">  {language === "en" ? translations.en.Your : language === "am" ? translations.am.Your : language == "om" ? translations.om.Your : ""}</span>{" "}
            <span className="animate-wordColor delay-1">  {language === "en" ? translations.en.Family : language === "am" ? translations.am.Family : language == "om" ? translations.om.Family : ""}</span>{" "}
            <span className="animate-wordColor delay-2">  {language === "en" ? translations.en.plan : language === "am" ? translations.am.plan : language == "om" ? translations.om.plan : ""}</span>{" "}
            <span className="animate-wordColor delay-3">  {language === "en" ? translations.en.Choose : language === "am" ? translations.am.Choose : language == "om" ? translations.om.Choose : ""}</span>
          </h2>
          <p className="text-gray-600 mt-4">
            {language === "en" ? translations.en.Trustedby47GGFmillions : language === "am" ? translations.am.Trustedby47GGFmillions : language == "om" ? translations.om.Trustedby47GGFmillions : ""}
          </p>
        </div>

        {/* Large Card Container */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col lg:flex-row relative">

          {/* Left Side: Pricing Card (50%) */}
          <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center text-center lg:text-left gap-4 sm:gap-6">
            <div className="border bg-gradient-to-br from-[#99CAFF] via-[#E5F1FF] to-[#99CAFF] p-4 sm:p-6 rounded-[15px] flex flex-col justify-center items-center text-center h-56 sm:h-60">
              <p className="text-blue-600 font-semibold text-lg sm:text-base"> {language === "en" ? translations.en.Yearly : language === "am" ? translations.am.Yearly : language == "om" ? translations.om.Yearly : ""}</p>
              <h3 className="text-3xl sm:text-4xl font-bold my-1 sm:my-2">
                ETB 2399 <span className="text-base font-normal">  {language === "en" ? translations.en.moNTH : language === "am" ? translations.am.moNTH : language == "om" ? translations.om.moNTH : ""}</span>
              </h3>
              <p className="text-gray-500 mb-2 sm:mb-3 text-sm sm:text-base"> {language === "en" ? translations.en.$59billedannually : language === "am" ? translations.am.$59billedannually : language == "om" ? translations.om.$59billedannually : ""}</p>
              <p className="text-blue-500 text-xs sm:text-sm mb-4 sm:mb-6"> {language === "en" ? translations.en.Unlockallpremiumeatures : language === "am" ? translations.am.Unlockallpremiumeatures : language == "om" ? translations.om.Unlockallpremiumeatures : ""}</p>
            </div>

            <button className="mt-3 sm:mt-4 w-36 sm:w-40 mx-auto bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-white font-semibold py-3 sm:py-4 px-5 sm:px-6 rounded-xl shadow-md hover:bg-orange-600 transition-colors duration-300">
              {language === "en" ? translations.en.BuynNow : language === "am" ? translations.am.BuynNow : language == "om" ? translations.om.BuynNow : ""}
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
            {language === "en" ? translations.en.BestVal988ue : language === "am" ? translations.am.BestVal988ue : language == "om" ? translations.om.BestVal988ue : ""}
          </div>
        </div>
        {/* See all plans link */}
        <div className="flex justify-center">
          <a
            href="https://famisafe.wondershare.com/store/family.html"
            className="mt-4 sm:mt-6 text-blue-600 font-semibold text-sm sm:text-base hover:underline transition-all duration-300"
            target='-black'
          >
            {language === "en" ? translations.en.Seeallpl232R34ans : language === "am" ? translations.am.Seeallpl232R34ans : language == "om" ? translations.om.Seeallpl232R34ans : ""} &gt;&gt;
          </a>
        </div>
      </div>
      {/* End Choose Your Family Plan */}
      {/* //logo */}
      <div className="border overflow-hidden relative py-6 bg-white mt-4">
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
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="animate-wordColor delay-0">  {language === "en" ? translations.en.Real : language === "am" ? translations.am.Real : language == "om" ? translations.om.Real : ""}</span>{" "}
            <span className="animate-wordColor delay-1">  {language === "en" ? translations.en.Families : language === "am" ? translations.am.Families : language == "om" ? translations.om.Families : ""}</span>{" "}
            <span className="animate-wordColor delay-2">  {language === "en" ? translations.en.Reals : language === "am" ? translations.am.Reals : language == "om" ? translations.om.Reals : ""}</span>{" "}
            <span className="animate-wordColor delay-3">  {language === "en" ? translations.en.Stories : language === "am" ? translations.am.Stories : language == "om" ? translations.om.Stories : ""}</span>
          </h2>
          <p className="text-gray-600 mt-4">
            {language === "en" ? translations.en.Explorerealtorie : language === "am" ? translations.am.Explorerealtorie : language == "om" ? translations.om.Explorerealtorie : ""}
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
                el: ".customm-pagination",
                renderBullet: (index, className) => {
                  // Show max 5 bullets on desktop
                  if (window.innerWidth >= 1024) {
                    const totalSlides = featuresse.length;
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
              {featuresse.map((item) => (
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
            <div className="  mt-8 flex items-center justify-center gap-2">

              {/* PREV */}
              <button className="prev-btn  w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-blue-500 transition">
                <FaAngleLeft className="text-blue-500 hover:text-white" />
              </button>

              {/* PAGINATION */}
              <div className=" customm-pagination flex items-center justify-center gap-2 min-h-[20px]"></div>

              {/* NEXT */}
              <button className="next-btn w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-blue-500 transition mr-4">
                <FaAngleRight className="text-blue-500 hover:text-white" />
              </button>

            </div>

            <style >{`
            /* Normal dots */
.customm-pagination .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #151A16;
  transition: all 0.3s ease;
  opacity: 1;
}

/* ✅ Active = rectangle */
.customm-pagination .swiper-pagination-bullet-active {
  width: 26px;          /* rectangle width */
  height: 8px;          /* rectangle height */
  border-radius: 6px;   /* soft rounded edges */
  background: #3b82f6;
}
            `}</style>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 justify-center py-6 sm:py-8">

              {/* Start Free Trial */}
              <button className="w-full sm:w-auto px-6 sm:px-12 py-3 sm:py-5 
  bg-gradient-to-r from-blue-500 via-blue-200 to-blue-600 
  text-white font-extrabold 
  rounded-[25px] sm:rounded-lg 
  border border-blue-500 text-center 
  hover:bg-white hover:text-black transition-colors duration-300">

                {language === "en" ? translations.en.StartFreeTrial : language === "am" ? translations.am.StartFreeTrial : language == "om" ? translations.om.StartFreeTrial : ""}
              </button>

              {/* Try it now */}
              <button className="w-full sm:w-auto px-6 sm:px-12 py-3 sm:py-5 
  text-gray-700 font-extrabold 
  rounded-[25px] sm:rounded-lg 
  border border-gray-900 text-center 
  hover:bg-blue-500 hover:text-white transition-colors duration-300">

                {language === "en" ? translations.en.viewallstries : language === "am" ? translations.am.viewallstries : language == "om" ? translations.om.viewallstries : ""}
              </button>

            </div>

          </div>
        </div>

      </div>

      {/* count up animation num */}
      <div className="w-full bg-[#FFFFFF] py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {daata.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} rounded-3xl flex flex-col items-center justify-center text-center py-10 md:py-12 shadow-sm hover:shadow-md transition`}
            >
              {/* Icon */}
              <div className="mb-4">{iconMap[item.icon]}</div>

              {/* Animated Number */}
              <h2 className="text-3xl md:text-5xl font-bold text-black">
                <CountUp
                  end={item.value}
                  duration={2}
                  suffix={item.suffix}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </h2>

              {/* Label */}
              <p className="mt-2 text-gray-600 text-sm md:text-base">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* tab image and decription */}
      <div className="max-w-7xl mx-auto bg-blue-50 py-8 px-6 md:px-20 rounded-[15px]">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="animate-wordColor delay-0">  {language === "en" ? translations.en.Real : language === "am" ? translations.am.Real : language == "om" ? translations.om.Real : ""}</span>{" "}
            <span className="animate-wordColor delay-1">  {language === "en" ? translations.en.Families : language === "am" ? translations.am.Families : language == "om" ? translations.om.Families : ""}</span>{" "}
            <span className="animate-wordColor delay-2">  {language === "en" ? translations.en.Reals : language === "am" ? translations.am.Reals : language == "om" ? translations.om.Reals : ""}</span>{" "}
            <span className="animate-wordColor delay-3">  {language === "en" ? translations.en.Stories : language === "am" ? translations.am.Stories : language == "om" ? translations.om.Stories : ""}</span>
          </h2>
          <p className="text-gray-600 mt-4">
            {language === "en" ? translations.en.Explorerealtorie : language === "am" ? translations.am.Explorerealtorie : language == "om" ? translations.om.Explorerealtorie : ""}
          </p>
        </div>

        {/* Reviews Section */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:gap-12 items-start mt-10">

          {/* Left Side: Images */}
          <div className="flex flex-col items-center md:items-start md:w-1/2">
            {/* Images Row */}
            <div className="flex gap-4 justify-center w-full mb-2">
              {reviqews.map((review) => (
                <div
                  key={review.id}
                  className={`rounded-lg overflow-hidden cursor-pointer border-3 ${activeReview.id === review.id
                    ? "border-blue-500 shadow-lg"
                    : "border-transparent"
                    } transform transition-transform duration-300 hover:rotate-3 hover:scale-105`}
                  onClick={() => setActiveReview(review)}
                >
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-20 h-20 object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Single Horizontal Line Below Images */}
            {/* <div className="h-1 w-15 bg-blue-500 rounded-full mt-1"></div> */}
            <br />

            {/* Score + Features Side by Side ONLY ON MOBILE */}
            <div className="flex flex-row gap-8 mb-6 w-full">
              {/* Score */}
              <div className="flex flex-col items-center md:items-start">
                <div className="text-4xl font-bold">
                  <CountUp end={activeReview.score} decimals={1} duration={1.5} />
                </div>
                <div className="text-gray-500">score</div>
                <div className="flex justify-center md:justify-start mt-1 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="flex-1 space-y-2">
                {Object.entries(activeReview.features).map(([key, value]) => (
                  <div key={key} className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-2 bg-blue-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${animatedValues[key] || 0}%` }}
                      ></div>
                    </div>
                    <div className="text-gray-600 w-24 text-sm">{key}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Review Description Card */}
          <div className="md:w-1/2 flex items-center justify-center mt-6 md:mt-0 order-last md:order-none">
            <div
              className="bg-gradient-to-br from-[#99CAFF] via-[#E5F1FF] to-[#99CAFF] p-6 rounded-xl shadow-md w-full max-w-md"

            >
              <p className="text-gray-800 mb-4">{activeReview.description}</p>
              <div className="font-semibold">{activeReview.name}</div>
              <div className="text-gray-400 text-sm">{activeReview.date}</div>
            </div>
          </div>
        </div>
      </div>
      <br />

      {/* Main Title    */}

      {/* Main Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="animate-wordColor delay-0">  {language === "en" ? translations.en.WorksGreat : language === "am" ? translations.am.WorksGreat : language == "om" ? translations.om.WorksGreat : ""}</span>{" "}
          <span className="animate-wordColor delay-3">  {language === "en" ? translations.en.withFamiSafe : language === "am" ? translations.am.withFamiSafe : language == "om" ? translations.om.withFamiSafe : ""}</span>
        </h2>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#E1E0FE] via-[#E1E0FE] to-[#8EEE73FF]">
          <div className=" grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-10  px-4 sm:px-8 py-8 sm:py-14 lg:px-14">

            {/* LEFT SIDE */}
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start">
                <img
                  src="assets/images/logo/geonection-horizontal-black.svg"
                  alt="Logo"
                  className="h-12 sm:h-16 w-auto"
                />
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight">
                {language === "en"
                  ? translations.en.SecuredSharing
                  : language === "am"
                    ? translations.am.SecuredSharing
                    : language == "om" ? translations.om.SecuredSharing : ""}
                <br /> {language === "en"
                  ? translations.en.SeeLovedOnesat
                  : language === "am"
                    ? translations.am.SeeLovedOnesat
                    : language == "om" ? translations.om.SeeLovedOnesat : ""}
                <br /> {language === "en"
                  ? translations.en.Hands
                  : language === "am"
                    ? translations.am.Hands
                    : language == "om" ? translations.om.Hands : ""}
              </h1>

              <p className="text-gray-600 max-w-md mx-auto lg:mx-0 text-sm sm:text-base md:text-lg">
                {language === "en"
                  ? translations.en.Geonectionprotects
                  : language === "am"
                    ? translations.am.Geonectionprotects
                    : language == "om" ? translations.om.Geonectionprotects : ""}
              </p>

              <div className="flex justify-center lg:justify-start">
                <button className=" w-full sm:w-auto rounded-xl border-2 border-gray-900 px-6 sm:px-10 py-3 font-semibold hover:bg-gray-900 hover:text-white transition ">
                  {language === "en"
                    ? translations.en.TryitFrees
                    : language === "am"
                      ? translations.am.TryitFrees
                      : language == "om" ? translations.om.TryitFrees : ""}
                </button>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative flex justify-center lg:justify-end">
              <img
                src="assets/images/hero/geonection-mobile.png"
                alt="Map preview"
                className=" w-full max-w-[260px] sm:max-w-md lg:max-w-lg drop-shadow-xl translate-y-4 sm:translate-y-0" />
            </div>

          </div>
        </div>
      </div><br />
      {/* Main Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="animate-wordColor delay-0">{language === "en"
            ? translations.en.JoinOur
            : language === "am"
              ? translations.am.JoinOur
              : language == "om" ? translations.om.JoinOur : ""}</span>{" "}
          <span className="animate-wordColor delay-2">
            {language === "en"
              ? translations.en.Community
              : language === "am"
                ? translations.am.Community
                : language == "om" ? translations.om.Community : ""}</span>{" "}
        </h2>
        <div className="w-full white py-10 flex justify-center">
          <div className="flex items-center gap-6">
            {socials.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 flex items-center justify-center rounded-[25px] transition transform hover:scale-110 ${item.gradient
                  ? "bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#515BD4]"
                  : ""
                  }`}
                style={!item.gradient ? { backgroundColor: item.bg } : {}}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-7 h-7 invert"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#CAE3FF] via-[#CAE3FF] to-[#D9EBFF] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center rounded-[15px]">
        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="animate-wordColor delay-0">{language === "en"
                ? translations.en.StartPro35tecting
                : language === "am"
                  ? translations.am.StartPro35tecting
                  : language == "om" ? translations.om.StartPro35tecting : ""}</span>{" "}
              <span className="animate-wordColor delay-2">
                {language === "en"
                  ? translations.en.Your32345FamilyToday
                  : language === "am"
                    ? translations.am.Your32345FamilyToday
                    : language == "om" ? translations.om.Your32345FamilyToday : ""}</span>{" "}
            </h2>
          </div>

          <p className="mt-4 text-black max-w-xl text-sm sm:text-base mx-auto lg:mx-0">
            {language === "en"
              ? translations.en.Join35millionfamil
              : language === "am"
                ? translations.am.Join35millionfamil
                : language === "om" ? translations.om.Join35millionfamil : ""}
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start flex-wrap">
            {/* Start Free Trial */}
            <a
              href="https://famisafe.wondershare.com/main/sign-up"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 sm:py-5 font-extrabold text-white rounded-[15px] 
               bg-gradient-to-r from-blue-500 via-blue-200 to-blue-600 
               hover:from-blue-600 hover:to-cyan-500 
               transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base
               w-full sm:w-auto lg:w-60"
            >
              {language === "en" ? translations.en.StartFreeTrial : language === "am" ? translations.am.StartFreeTrial : language == "om" ? translations.om.StartFreeTrial : ""}
            </a>

            {/* Buy Now */}
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 sm:py-4 rounded-[15px] border bg-white text-black font-extrabold 
               hover:bg-blue-600 hover:text-white 
               transition-all duration-300 text-sm sm:text-base
               w-full sm:w-auto lg:w-40"
            >
              {language === "en" ? translations.en.BuyNow : language === "am" ? translations.am.BuyNow : language == "om" ? translations.om.BuyNow : ""}
            </a>
          </div>
        </div>


        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-center overflow-hidden lg:overflow-visible mt-8 lg:mt-0 w-full">
          <img
            src="https://famisafe.wondershare.com/images/images-2025/new-index/footer-img-mobile.png"
            alt="App Preview"
            className=" w-full max-w-full lg:max-w-[500px] drop-shadow-2xl object-contain" />
        </div>
      </div>
      <br />
      <br />

    </section>
  )
}


