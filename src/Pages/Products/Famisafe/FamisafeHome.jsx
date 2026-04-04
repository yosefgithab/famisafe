import { useState } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

import { useEffect } from "react";
import {
    FaApple,
    FaWindows,
} from "react-icons/fa";
import { translations } from "../../../Data/translations";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";
import { BsAndroid2, BsFillCloudFill } from "react-icons/bs";
import { SiGooglechrome } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
    const CARD_WIDTH = 380;
    const AUTO_DELAY = 4000; // 4 seconds
    const [current, setCurrent] = useState(0);
    const { language } = useLanguage();
    const tabData = language === "en" ? translations.en.tabData : language === "am" ? translations.am.tabData : language == "om" ? translations.om.tabData : "";


    const [activeIndex, setActiveIndex] = useState(0);
    const activeTab = tabData[activeIndex];
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    const prevSlide = () => {
        setActiveIndex((prev) => (prev === 0 ? tabData.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setActiveIndex((prev) => (prev === tabData.length - 1 ? 0 : prev + 1));
    };

    const slidess = language === "en" ? translations.en.slidess : language === "am" ? translations.am.slidess : language == "om" ? translations.om.slidess : "";
    const slides = language === "en" ? translations.en.slides : language === "am" ? translations.am.slides : language == "om" ? translations.om.slides : "";
    {/* Award logo and tittle */ }
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

    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);

    const prev = () =>
        setActive((p) => (p - 1 + slides.length) % slides.length);

    const next = () =>
        setActive((p) => (p + 1) % slides.length);

    // ✅ AUTO SLIDE
    useEffect(() => {
        if (paused) return;

        const timer = setInterval(() => {
            setActive((p) => (p + 1) % slides.length);
        }, AUTO_DELAY);

        return () => clearInterval(timer);
    }, [paused]);
    return (
        <div>
            {/* HERO SECTION */}
            <section
                id="download-area"
            // className="border pt-12 sm:pt-16 lg:pt-20 pb-14 sm:pb-16 bg-gradient-to-br from-purple-50 to-indigo-50 overflow-hidden"
            >
                <div className="bg-gradient-to-br from-[#9693FDFF] via-[#FEFEFEFF] to-[#E1DDFF] max-w-full mx-auto px-4 h-140 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div className="text-center lg:text-left">
                        <div className="flex justify-center lg:justify-start items-center gap-3 mb-3 flex-wrap">
                            <span className="text-sm font-medium text-gray-700"></span>
                            
                            <span className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-white">
                              {language === "en" ? translations.en.FamiSafe : language === "am" ? translations.am.FamiSafe : language == "om" ? translations.om.FamiSafe : ""}  V8.9
                            </span>
                        </div>

                        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight">

                            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400 bg-clip-text text-transparent">
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

                            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
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

                            <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                                <TypeAnimation
                                    sequence={[
                                        language === "en"
                                            ? translations.en.PoweredbyAI
                                            : language === "am"
                                                ? translations.am.PoweredbyAI
                                                :language== "om" ? translations.om.PoweredbyAI : "",
                                        2000,
                                    ]}
                                    speed={50}
                                    cursor={false}
                                    repeat={Infinity}
                                />
                            </span>

                        </h1>

                        <p className="mt-4 text-gray-600 max-w-xl text-sm sm:text-base mx-auto lg:mx-0">
                            {language === "en"
                                ? translations.en.description
                                : language === "am"
                                    ? translations.am.description
                                    :language== "om" ? translations.om.description : ""}
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
                                {language === "en" ? translations.en.StartFreeTrial : language === "am" ? translations.am.StartFreeTrial : language == "om" ? translations.om.StartFreeTrial : ""}
                            </a>

                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border 
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


                    {/* RIGHT IMAGE */}
                    <div className="relative flex justify-center lg:justify-end">

                        {/* Main Banner Image */}
                        <img
                            src="https://famisafe.wondershare.com/images/images-2025/new-index/banner-pc-img.png"
                            alt="App Preview"
                            className="
      w-full 
      max-w-[180px] xs:max-w-[220px] sm:max-w-[340px] md:max-w-[420px] xl:max-w-[520px] 
      drop-shadow-2xl
    "
                        />

                        {/* Overlay Agent Image */}
                        <img
                            src="https://famisafe.wondershare.com/images/images-2025/new-index/banner-pc-agent.png"
                            className="
      absolute 
      left-[30%] top-[60%] 
      w-[40%] 
      xs:left-[33%] xs:top-[62%] xs:w-[42%] 
      sm:left-[35%] sm:top-[65%] sm:w-[44%]
      opacity-90 
      drop-shadow-xl 
      z-20
      lg:left-45 lg:top-75 lg:w-[45%] 
    "
                        />
                    </div>

                </div>
                {/* Aoward and logo */}
                {/* Award and logo */}
                <div className="overflow-hidden relative py-6 bg-gray-50 mt-4">
                    <div
                        className="flex animate-marquee whitespace-nowrap gap-2 md:gap-6" // <-- small on mobile, larger on md+
                        style={{ animationDuration: "12s" }} // slide speed
                    >
                        {awards.concat(awards).map((award, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col items-center justify-center min-w-[180px] 
                   md:flex-col md:items-center md:justify-center"
                            >
                                <img
                                    src={award.image}
                                    alt={award.title}
                                    className="w-20 h-20 object-contain mb-2"
                                />
                                {/* Only show title and subtitle on medium screens and up */}
                                <span className="hidden md:block text-sm font-semibold text-gray-800 text-center">
                                    {award.title}
                                </span>
                                <span className="hidden md:block text-sm font-bold text-purple-600 text-center">
                                    {award.subtitle}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Tailwind marquee animation */}
                    <style>
                        {` @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } } .animate-marquee {display: flex; animation: marquee linear infinite;} @media (max-width: 768px) { .animate-marquee { animation-duration: 20s; } } `}
                    </style>
                </div>

            </section>




            {/* HERO TEXT SECTION */}
            <section className="text-center max-w-4xl mx-auto px-4 py-12 md:py-12">
                {/* TITLE */}
                <h1 className="text-2xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                    {language === "en"
                        ? translations.en.Subtitles
                        : language === "am"
                            ? translations.am.Subtitles
                            : language == "om" ? translations.om.Subtitles : ""}
                </h1>

                {/* SUB TITLE */}
                <p className="mt-3 md:mt-6 text-sm md:text-lg text-gray-600 leading-relaxed">
                    {language === "en"
                        ? translations.en.seetittle
                        : language === "am"
                            ? translations.am.seetittle
                            : language == "om" ? translations.om.seetittle : ""}
                </p>

                {/* TIP TEXT */}
                <p className="mt-4 md:mt-6 text-xs md:text-sm text-gray-500">
                    {language === "en"
                        ? "Quick tip: Start with a free trial and explore all features."
                        : language === "am"
                            ? "ፈጣን ምክር፡ በነፃ ሙከራ ጀምር እና ሁሉንም ባህሪያት ፈትሽ።"
                            : "Gorsa gabaabaa: Yaalii bilisaa jalqabiitii amaloota hunda qoradhu."}
                </p>


            </section>
            {/* HERO TEXT SECTION END */}


            {/* TABS SECTION */}
            <section className="py-8 bg-white mb-4">

                {/* TAB BUTTONS (DESKTOP ONLY) */}
                <div className=" hidden md:flex justify-center gap-6 mb-10 bg-gray-200 py-4 px-2 rounded-lg max-w-6xl mx-auto">
                    {tabData.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={` w-full px-8 py-4 rounded-lg font-semibold transition-all
          ${activeIndex === index
                                    ? "bg-purple-900 text-white shadow-md"
                                    : "bg-white text-gray-700 hover:bg-purple-100"
                                }`}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>

                {/* MOBILE CAROUSEL */}
                <div className=" md:hidden w-full  max-w-md px-6 py-2 bg-white rounded-2xl shadow-sm ">
                    <img
                        src={tabData[activeIndex].content}
                        alt="Watch Device Use"
                        className="
                              block
                              w-full
                              max-w-xs
                              h-[260px] 
                              mx-auto
                              md:max-w-6xl
                              md:h-auto 
                              px-2
                              rounded-xl
                              shadow-md
                              md:max-w-6xl
                              md:shadow-lg

                            "
                    />

                    {/* Navigation */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 ml-22  bg-purple-900 shadow-md rounded-full p-2"
                    >
                        <IoMdArrowDropleft className="text-white" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 mr-22 bg-purple-900  shadow-md rounded-full p-2"
                    >
                        <IoMdArrowDropright className="text-white" />
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-4">
                        {tabData.map((_, i) => (
                            <span
                                key={i}
                                className={`w-2.5 h-2.5 rounded-full ${activeIndex === i ? "bg-purple-600" : "bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* DESKTOP VIEW */}
                <div className="hidden md:block relative max-w-6xl mx-auto w-full ">
                    {console.log(tabData[activeIndex].content)}
                    <img
                        src={
                            tabData[activeIndex].content.startsWith("http")
                                ? tabData[activeIndex].content
                                : `https://${tabData[activeIndex].content}`
                        }
                        alt="Watch Device Use"
                        className="
                              block
                              w-full
                              max-w-xs
                              h-[260px] 
                              mx-auto
                              md:max-w-6xl
                              md:h-auto 
                              px-2
                              rounded-xl
                              shadow-md
                              md:max-w-6xl
                              md:shadow-lg

                            "
                    />

                    {/* Floating Cards */}
                    {tabData[activeIndex].cards.map((card, i) => (
                        <div
                            key={i}
                            className={`absolute ${card.position} bg-white rounded-xl shadow-lg p-4 w-64`}
                        >
                            <div className="flex gap-3">
                                <div className="text-purple-600 text-xl">{card.icon}</div>
                                <div>
                                    <h4 className="font-semibold text-sm">{card.title}</h4>
                                    <p className="text-xs text-gray-600 mt-1">{card.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>{/* Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">

                    {/* START FREE TRIAL (SHOW EVERYWHERE) */}
                    <a
                        href="https://famisafe.wondershare.com/main/sign-up"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
    inline-flex items-center justify-center
    px-10 py-2.5
    text-sm sm:text-base
    font-semibold text-white
    rounded-md
    bg-gradient-to-r from-purple-500 to-cyan-400
    hover:from-purple-600 hover:to-cyan-500
    transition-all duration-300
    shadow-sm hover:shadow-md mr-20
  "
                    >
                        {language === "en" ? translations.en.TryFree : language === "am" ? translations.am.TryFree : language == "om" ? translations.om.TryFree : ""}
                    </a>

                    {/* BUY NOW (HIDE ON MOBILE) */}
                    <a
                        href="#"
                        className="
    hidden sm:inline-flex
    items-center justify-center
    px-12 py-3
    rounded-lg
    border border-purple-600
    text-purple-600 font-semibold
    hover:bg-purple-600 hover:text-white
    transition-all duration-300
  "
                    >
                        {language === "en" ? translations.en.BuynNow : language === "am" ? translations.am.BuynNow : language == "om" ? translations.om.BuynNow : ""}
                    </a>


                </div>


            </section>
            {/* tabs section end */}

            {/*VerticalSlider.jsx*/}
            <div className="border sticky relative rounded-xl  max-w-6xl mx-auto flex flex-col lg:flex-row">
                {/* Left side: Text */}
                <div className="relative rounded-xl flex-1 relative z-10 w-full mt-[7rem] h-[15rem] lg:w-1/2  p-6 flex flex-col justify-center  text-center lg:text-left bg-[#E9E5FF]">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#7A57EE] ">
                        {slidess[current].title}
                    </h2>
                    <p className="body text-gray-700 text-lg mt-4">{slidess[current].text}</p>
                    {/* Vertical Dots (Desktop) */}
                    <div className="bg-white px-1 rounded-full hidden lg:flex absolute left-1 top-1/2 transform -translate-y-1/2 flex-col gap-3">
                        {slidess.map((_, index) => (
                            <button
                                key={index}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current ? "bg-purple-600 w-4 h-4" : "bg-gray-300"
                                    }`}
                                onClick={() => setCurrent(index)}
                            />
                        ))}
                    </div>
                </div>

                {/* Right side: Image */}
                <div className=" flex-1 absolute z-20 right-0 w-full lg:w-1/2 h-[22rem] lg:h-aut ">
                    <img
                        src={slidess[current].image}
                        alt={slidess[current].title}
                        className=" w-full h-full  object-cove rounded-xl lg:rounded-l-none lg:rounded-r-xl "
                    />
                    {/* Horizontal Dots (Mobile) */}
                    <div className="flex lg:hidden justify-center mt-4 gap-3">
                        {slidess.map((_, index) => (
                            <button
                                key={index}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current ? "bg-purple-600 w-4 h-4" : "bg-gray-300"
                                    }`}
                                onClick={() => setCurrent(index)}
                            />
                        ))}
                    </div>
                    {/* Mobile Text Overlay */}
                    {/* Mobile Text Card (FamiSafe Style) */}
                    <div className="absolute inset-x-0 bottom-0 px-3 lg:hidden">
                        <div className="bg-[#9283E4FF]/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                            <h2 className="text-lg font-bold text-[#F8F8F8FF]">
                                {slidess[current].title}
                            </h2>
                            <p className="text-sm text-[#F8F8F8FF] mt-2 leading-relaxed">
                                {slidess[current].text}
                            </p>
                        </div>
                    </div>
                    <a
                        href="https://famisafe.wondershare.com/main/sign-up"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
      inline-flex items-center justify-center ml-13 mt-3
      px-20  py-2.5 ml 
      text-sm sm:text-base
      font-semibold text-white
      rounded-md
      bg-gradient-to-r from-purple-500 to-cyan-400
      hover:from-purple-600 hover:to-cyan-500
      transition-all duration-300
      shadow-sm hover:shadow-md 
    "
                    >
                        {language === "en" ? translations.en.TryitFrees : language === "am" ? translations.am.TryitFrees : language == "om" ? translations.om.TryitFrees : ""}
                    </a>
                </div>
            </div>
            {/* HERO TEXT SECTION */}
            <section className="block w-full text-center px-4 py-6 sm:py-0 h-18 mt-39">
                <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-snug">
                    {language === "en"
                        ? translations.en.MoreParentalControlFeatures
                        : language === "am"
                            ? translations.am.MoreParentalControlFeatures
                            : language == "om" ? translations.om.MoreParentalControlFeatures : ""}
                </h1>
            </section>

            {/* hero text section end */}


            <div
                className=" border bg [F8F7FF] relative w-full max-w-8xl mx-auto py-12 overflow-hidden mt-0 "
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                {/* SLIDER TRACK */}
                <div
                    className="flex transition-transform duration-1000 ease-out"
                    style={{
                        transform: `translateX(calc(50% - ${CARD_WIDTH / 2}px - ${active * CARD_WIDTH}px))`,
                    }}
                >
                    {slides.map((slide, i) => (
                        <div key={i} className="min-w-[435px] px-0">
                            <div
                                className={`relative h-[440px] rounded-3xl shadow-xl
                bg-gradient-to-br from-purple-500 to-indigo-500
                transition-all duration-500 group
                ${i === active ? "scale-100 opacity-100" : "scale-90 opacity-40"}
              `}
                            >
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-100 transition rounded-3xl flex items-center justify-center">
                                    <div className="flex flex-col items-center justify-center space-y-2 px-6 text-center">
                                        <p className="text-white text-md font-semibold">
                                            {slide.title}
                                        </p>
                                        <p className="text-white text-sm">
                                            {slide.desc}
                                        </p>
                                    </div>

                                    <a href="">
                                        <MdOutlineKeyboardArrowRight className="text-xl bg-white rounded-xl p-1 mt-4" />
                                    </a>
                                </div>


                                <div className="p-8 h-full flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-2xl font-semibold text-white">
                                            {slide.title}
                                        </h3>
                                    </div>

                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="w-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ARROWS */}
                <button
                    onClick={prev}
                    className="absolute ml-128 mt-5 bg-purple-200 rounded-full p-1 z-10 hover:scale-110 transition"
                >
                    <ChevronLeft className="text-purple-500" />
                </button>

                <button
                    onClick={next}
                    className="absolute right-128 mt-5 bg-purple-200 rounded-full p-1 z-10 hover:scale-110 transition"
                >
                    <ChevronRight className="text-purple-500" />
                </button>

                {/* DOTS */}
                <div className="flex justify-center gap-2 mt-8">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className={`h-2 rounded-full transition-all duration-300
              ${i === active ? "w-8 bg-purple-600" : "w-2 bg-gray-300"}`}
                        />
                    ))}
                </div>
                {/* CTA BUTTONS */}
                <div className="flex justify-center items-center gap-4 mt-6">
                    <div className="flex justify-center items-center gap-4">
                        {/* START FREE TRIAL (SHOW EVERYWHERE) */}
                        <a
                            href="https://famisafe.wondershare.com/main/sign-up"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-20 py-2.5 text-sm sm:text-base font-semibold text-white rounded-md bg-gradient-to-r from-purple-500 to-cyan-400 hover:from-purple-600 hover:to-cyan-500 transition-all duration-300 shadow-sm hover:shadow-md mr-22
    "
                        >
                            {language === "en"
                                ? translations.en.StartFreeTrials
                                : language === "am"
                                    ? translations.am.StartFreeTrials
                                    : language == "om" ? translations.om.StartFreeTrials : ""}
                        </a>

                        {/* BUY NOW (DESKTOP ONLY) */}
                        <a
                            href="#"
                            className="hidden sm:inline-flex items-center justify-center px-6 py-3 rounded-lg border border-purple-600 text-purple-600 font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 "
                        >
                            {language === "en"
                                ? translations.en.BuyNow
                                : language === "am"
                                    ? translations.am.BuyNoww
                                    : language == "om" ? translations.om.BuyNoww : ""}
                        </a>

                    </div>

                </div>
                <section className="border w-full">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
                        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#E1E0FE] via-[#E1E0FE] to-[#8EEE73FF]">

                            <div className="
        grid grid-cols-1 lg:grid-cols-2 
        items-center 
        gap-6 lg:gap-10 
        px-4 sm:px-8 
        py-8 sm:py-14 lg:px-14
      ">

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
                                        <button className="
              w-full sm:w-auto
              rounded-xl border-2 border-gray-900
              px-6 sm:px-10 py-3
              font-semibold
              hover:bg-gray-900 hover:text-white
              transition
            ">
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
                                        className="
              w-full
              max-w-[260px] sm:max-w-md lg:max-w-lg
              drop-shadow-xl
              translate-y-4 sm:translate-y-0
            "
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                {/* real stories*/}
                <a href="StorySection"></a>
                {/* real stories end*/}

            </div>
        </div>

    );

}








