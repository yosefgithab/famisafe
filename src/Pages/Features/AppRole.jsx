import React, { useEffect, useRef, useState } from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../Data/translations';

/* ================= CARD COMPONENT (FIRST) ================= */
function Card({ item }) {
    return (
        <div className="bg-white rounded-3xl shadow-sm p-8 flex flex-col h-full">
            <p className="text-[#7C3AED] font-semibold mb-2">{item.step}</p>

            <h3 className="text-xl font-bold text-black mb-4">
                {item.title}
            </h3>

            <p className="text-gray-600 leading-relaxed mb-8">
                {item.description}
            </p>

            <div
                className={`rounded-2xl ${item.bg} flex items-center justify-center h-[230px]`}
            >
                <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain"
                />
            </div>
        </div>
    );
}
/* ================= CARD COMPONENT (FIRST) End ================= */

/* ================= DESKTOP CARD ================= */
function TestimonialCard({ item }) {
    return (
        <div className="relative h-[420px] w-full rounded-3xl overflow-hidden shadow-md">
            {/* IMAGE */}

            <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* TEXT CONTENT */}
            {/* QUOTE ICON */}
            <span className="absolute top-6 left-6 text-2xl text-white/100 mt-20">
                <FaQuoteLeft />
            </span>
            <div className=" absolute bottom-0 p-8 text-white max-w-sm">
                <div className="border bg-[#8B6CF6] inline-block px-5 py-2 rounded-xl mb-12">
                    <p className="font-semibold">{item.name}</p>
                    <p className="bg-[#8A6CED] rounded-lg leading-relaxed text-sm sm:text-base mb-16  ">
                        {item.text}
                    </p>
                </div>


                {/* QUOTE ICON */}
                <span className="absolute top-6 left-8 text-2xl text-white/100 mt-55 ml-74">
                    <FaQuoteRight />
                </span>
            </div>


        </div>
    );
}

/* ================= MOBILE CARD ================= */
function MobileCard({ item }) {
    return (
        <div className="bg-[#F7F6FF] rounded-3xl overflow-hidden shadow-sm">
            <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
            />

            <div className="p-6 relative">
                <span className="text-5xl text-purple-400 absolute -top-6 left-4">
                    “
                </span>

                <p className="text-gray-700 leading-relaxed mb-4">
                    {item.text}
                </p>

                <h4 className="font-bold text-purple-700">
                    {item.name}
                </h4>
            </div>
        </div>
    );
}
/* =========== Testionial End ======== */

/* More Parental Control Features */
function FeatureCard({ item, isActive }) {
    return (
        <div
            className={`relative rounded-3xl overflow-hidden h-[420px] transition-all duration-500
      ${isActive
                    ? "bg-gradient-to-br from-purple-500 to-indigo-600 scale-105"
                    : "bg-[#f3f1ff]"
                }`}
        >
            <h3 className="absolute top-6 left-6 text-xl font-bold text-white z-10">
                {item.title}
            </h3>

            <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-contain p-10"
            />

            <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition flex items-center justify-center text-center px-6">
                <p className="text-white text-lg">{item.desc}</p>
            </div>
        </div>
    );
}


/* More Parental Control Features */

export default function AppRole() {
    const { language } = useLanguage();
    const [current, setCurrent] = useState(0);
    const [] = useState(1);
    // const slides = language === "en" ? translations.en.slides : language === "am" ? translations.am.slides : translations.om.slides;
    const platforms = language === "en" ? translations.en.platforms : language === "am" ? translations.am.platforms :language== "om" ? translations.om.platforms: "";
    const awards = language === "en" ? translations.en.awards : language === "am" ? translations.am.awards : language== "om" ? translations.om.awards: "";
    const faqds = language === "en" ? translations.en.faqds : language === "am" ? translations.am.faqds : language== "om" ? translations.om.faqds: "";
     const sliides = language === "en" ? translations.en.sliides : language === "am" ? translations.am.sliides :language== "om" ? translations.om.sliides: "";
     const tips = language === "en" ? translations.en.tips : language === "am" ? translations.am.tips :language== "om" ? translations.om.tips: "";
    const [openIndex, setOpenIndex] = useState(null);

    // data/slides.js
  


    {/* function Empower you tosuppervise */ }
    function CountUp({ end, suffix = "", duration = 2000 }) {
        const [count, setCount] = useState(0);

        useEffect(() => {
            let start = 0;
            let startTime = null;

            const animate = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);

                start = Math.floor(progress * end);
                setCount(start);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            requestAnimationFrame(animate);
        }, [end, duration]);

        return (
            <span className="text-4xl sm:text-5xl font-bold text-purple-600">
                {count}
                {suffix}
            </span>
        );
    }
    {/* function Empower you to supperise end*/ }

    {/*======crousal slide ======*/ }
    const featuresds = language === "en" ? translations.en.featuresds : language === "am" ? translations.am.featuresds :language== "om" ? translations.om.featuresds: "";
    const [transitionEnabled, setTransitionEnabled] = useState(true);
    const slideRef = useRef(null);

    const visibleSlides = window.innerWidth >= 1024 ? 3 : 1;

    // Clone first slides for infinite loop
    const slides = [...featuresds, ...featuresds.slice(0, visibleSlides)];

    // Auto rotate
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrent((prev) => prev + 1);
    };

    // Handle infinite loop jump
    useEffect(() => {
        if (current === slides.length - visibleSlides) {
            setTimeout(() => {
                setTransitionEnabled(false); // disable animation
                setCurrent(0); // jump to first slide
            }, 700); // match transition duration
        } else {
            setTransitionEnabled(true);
        }
    }, [current, slides.length, visibleSlides]);
    {/* ===== carousal slide end ===== */ }

    {/*=== HowToLimitScreenTime ====*/ }

    /* ================= AUTO SLIDE ================= */
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % STEPS.length);
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    // AUTO SLIDE (MOBILE ONLY)
    const STEPS = language === "en" ? translations.en.STEPS : language === "am" ? translations.am.STEPS : language== "om" ? translations.om.STEPS: "";

    /* ================= TESTIMONIALS DATA ================= */

    const [index, setIndex] = useState(0);

    /* ================= AUTO SLIDE ================= */
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        }, 4000);

        return () => clearInterval(timer);
    }, []);
    const TESTIMONIALS = language === "en" ? translations.en.TESTIMONIALS : language === "am" ? translations.am.TESTIMONIALS : language== "om" ? translations.om.TESTIMONIALS: "";

    {/*=== HowToLimitScreenTime end ====*/ }

    ///////////////////////

    const [visibleSlidess, setVisibleSlides] = useState(3);

    /* Responsive visible slides */
    useEffect(() => {
        const updateSlides = () => {
            if (window.innerWidth < 640) setVisibleSlides(1);
            else if (window.innerWidth < 1024) setVisibleSlides(2);
            else setVisibleSlides(3);
        };

        updateSlides();
        window.addEventListener("resize", updateSlides);
        return () => window.removeEventListener("resize", updateSlides);
    }, []);

    const maxIndex = sliides.length - visibleSlidess;

    const next = () => {
        setCurrent((c) => (c >= maxIndex ? maxIndex : c + 1));
    };

    const prev = () => {
        setCurrent((c) => (c > 0 ? c - 1 : 0));
    };
    


const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
};


    /////////////////////

    return (

        <section className="w-full overflow-hidden px-4 sm:px-6 lg:px-0">
            <div className="bg-gradient-to-r from-[#ADA4DA] to-[#EBEAF1] max-w-7xl mx-auto 
                        px-4 sm:px-6 lg:px-8 
                        grid grid-cols-1 lg:grid-cols-2 
                        gap-8 sm:gap-10 lg:gap-16 
                        items-center overflow-hidden rounded-lg py-16 sm:py-20">

                {/* LEFT CONTENT */}
                <div className="max-w-xl mx-auto text-center lg:text-left">
                    <p className="text-purple-600 font-semibold mb-3 sm:mb-4">
                        {language === "en" ? translations.en.FamiSafeNewFeature : language === "am" ? translations.am.FamiSafeNewFeature : language== "om" ? translations.om.FamiSafeNewFeature: ""}
                    </p>

                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight mb-4 sm:mb-6">
                        <span className="text-gray-700 px-2 py-1 rounded-lg inline-block">
                            {language === "en" ? translations.en.AppBlocker : language === "am" ? translations.am.AppBlocker : language== "om" ? translations.om.AppBlocker : ""}
                        </span>
                    </h1>

                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 mb-6 sm:mb-10">
                        {language === "en" ? translations.en.Instantlybockdistracting : language === "am" ? translations.am.Instantlybockdistracting : language === "om" ?  translations.om.Instantlybockdistracting: ""}
                    </p>

                    {/* BUTTONS */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-6 sm:mb-10">
                        <a href="#try-free" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto bg-[#7620D3B3] text-white 
                                   px-8 sm:px-10 py-3 sm:py-4 
                                   rounded-lg font-semibold shadow-lg 
                                   hover:bg-purple-700 transition">
                                {language === "en" ? translations.en.TryitFrees : language === "am" ? translations.am.TryitFrees :language== "om" ? translations.om.TryitFrees: ""}
                            </button>
                        </a>

                        <a href="#buy-now" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto border-2 border-purple-600 
                                   text-purple-600 px-8 sm:px-10 py-3 sm:py-4 
                                   rounded-lg font-semibold hover:bg-purple-50 transition">
                                {language === "en" ? translations.en.BuyNow : language === "am" ? translations.am.BuyNow :language== "om" ? translations.om.BuyNow: ""}
                            </button>
                        </a>
                    </div>

                    {/* PLATFORMS */}
                    <div className="mb-6 sm:mb-10">
                        <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                            {language === "en" ? translations.en.Availableon : language === "am" ? translations.am.Availableon :language== "om" ? translations.om.Availableon: ""}
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
                        src="https://famisafe.wondershare.com/images/images-2025/app-blocker/app-blocker-banner.png"
                        alt="FamiSafe Calls & Messages"
                        className="w-full max-w-[280px] sm:max-w-[420px] lg:max-w-[680px]
                         h-auto object-contain select-none pointer-events-none"
                    />
                </div>

            </div>
            {/* Aoward and logo */}
            <div className=" overflow-hidden relative  bg-gray-50 mt-2">
                <div className="flex animate-marquee whitespace-nowrap gap-2 sm:gap-4 md:gap-6 pointer-events-none">
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
                    {`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee {
        display: flex;
        animation: marquee 8s linear infinite;
      }
    `}
                </style>
            </div>

            {/* award end*/}
            <br />

            {/* function Empower you tosuppervise */}
            {/* Title */}
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
                    {/* Empower You to Supervise <br /> Kid&apos;s Screen Time */}
                    {language === "en" ? translations.en.EmpowerYoutoControl : language === "am" ? translations.am.EmpowerYoutoControl : language== "om" ? translations.om.EmpowerYoutoControl: ""}
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    {language === "en" ? translations.en.Leaveappdistractions : language === "am" ? translations.am.Leaveappdistractions : language== "om" ? translations.om.Leaveappdistractions: ""}
                </p>
            </div>

            {/* Stats Card */}
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-row justify-between items-center gap- bg-gradient-to-r from-purple-100 via-blue-100 to-cyan-100 rounded-2xl px-4 py-6 sm:px-6 sm:py-10 text-center">
                    {/* Countries */}
                    <div>
                        <CountUp end={200} suffix="+" />
                        <p className="mt-2 text-[#7A57EE] text-lg">{language === "en" ? translations.en.Countries : language === "am" ? translations.am.Countries :language== "om" ? translations.om.Countries: ""}</p>
                    </div>

                    {/* Users */}
                    <div>
                        <CountUp end={35} suffix="M+" />
                        <p className="mt-2 text-[#7A57EE] text-lg">{language === "en" ? translations.en.Users : language === "am" ? translations.am.Users :language== "om" ?  translations.om.Users: ""}</p>
                    </div>

                    {/* Families */}
                    <div>
                        <CountUp end={18} suffix="W+" />
                        <p className="mt-2 text-[#7A57EE]text-lg">{language === "en" ? translations.en.Families : language === "am" ? translations.am.Families : language== "om" ?  translations.om.Families: ""}</p>
                    </div>
                </div>
            </div>
            {/* function Empower you tosuppervise end */}

            <br />
            <div className="bg-[#F8F7FF]">

                {/*==== =====*/}
                <div className="max-w-7xl mx-auto h-[500px] sm:h-[500px] lg:h-[350px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div >
                        <h2 className=" ml-4 text-3xl sm:text-4xl lg:text-3xl font-bold text-[#7A57EE] mb-6">
                            {language === "en" ? translations.en.BlockAnyAppInstantly : language === "am" ? translations.am.BlockAnyAppInstantly :language== "om" ? translations.om.BlockAnyAppInstantly: ""}
                        </h2>

                        <p className="ml-4 text-gray-800 font-semibold mb-6">
                            {language === "en" ? translations.en.Takeinstantcontrolof : language === "am" ? translations.am.Takeinstantcontrolof :language== "om" ? translations.om.Takeinstantcontrolof: ""}
                        </p>

                        <ul className="ml-4 space-y-4 text-gray-700">
                            <li className="flex items-start gap-3">
                                <span className="mt-1 w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs">
                                    ✓
                                </span>
                                <span>
                                    {language === "en" ? translations.en.Onetapblockingfor : language === "am" ? translations.am.Onetapblockingfor :language== "om" ? translations.om.Onetapblockingfor: ""}
                                </span>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="mt-1 w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs">
                                    ✓
                                </span>
                                <span>
                                    {language === "en" ? translations.en.Blockindividualapps : language === "am" ? translations.am.Blockindividualapps :language== "om" ? translations.om.Blockindividualapps: ""}
                                </span>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="mt-1 w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs">
                                    ✓
                                </span>
                                <span>
                                    {language === "en" ? translations.en.SetappstoBlocked : language === "am" ? translations.am.SetappstoBlocked :language== "om" ? translations.om.SetappstoBlocked: ""}
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* RIGHT VISUAL */}
                    {/* Right side image */}
                    <div className=" p-4 flex justify-center">
                        <img
                            src="https://famisafe.wondershare.com/images/images-2025/app-blocker/instant-app-blocking.png"
                            alt="Screen time usage"
                            className="w-full h-full object-contain "
                        />
                    </div>

                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT VISUAL (Image on desktop, bottom on mobile) */}
                    <div className="order-2 lg:order-1 p-4 flex justify-center">
                        <img
                            src="https://famisafe.wondershare.com/images/images-2025/app-blocker/schedule-blocking-times.png"
                            alt="Screen time usage"
                            className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-full h-auto object-contain"
                        />
                    </div>

                    {/* RIGHT CONTENT (Text on desktop, top on mobile) */}
                    <div className="order-1 lg:order-2 py-4">
                        <h2 className="ml-4 text-3xl sm:text-4xl lg:text-4xl font-bold text-[#7A57EE] mb-6">
                            {language === "en" ? translations.en.ScheduleAppBlocking : language === "am" ? translations.am.ScheduleAppBlocking :language== "om" ? translations.om.ScheduleAppBlocking: ""}
                        </h2>

                        <p className="ml-4 text-gray-800 font-semibold mb-6 text-base sm:text-lg lg:text-lg">
                           {language === "en" ? translations.en.Createautomaticapp : language === "am" ? translations.am.Createautomaticapp :language== "om" ? translations.om.Createautomaticapp: ""}
                        </p>

                        <ul className="ml-4 space-y-4 text-gray-700 text-sm sm:text-base lg:text-base">
                            <li className="flex items-start gap-3">
                                <span className="mt-1 w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs">
                                    ✓
                                </span>
                                <span>
                                   {language === "en" ? translations.en.Autoblocappsduring : language === "am" ? translations.am.Autoblocappsduring :language== "om" ? translations.om.Autoblocappsduring: ""}
                                </span>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="mt-1 w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs">
                                    ✓
                                </span>
                                <span>
                                   {language === "en" ? translations.en.Applyifferentrules : language === "am" ? translations.am.Applyifferentrules :language== "om" ? translations.om.Applyifferentrules: ""}
                                </span>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="mt-1 w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs">
                                    ✓
                                </span>
                                <span>
                                    {language === "en" ? translations.en.Customizetheistf : language === "am" ? translations.am.Customizetheistf :language== "om" ? translations.om.Customizetheistf: ""}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto h-[500px] sm:h-[500px] lg:h-[350px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div >
                        <h2 className="  ml-4 text-3xl sm:text-4xl lg:text-3xl font-bold text-[#7A57EE] mb-6">
                            {language === "en" ? translations.en.SetAgeBasedFilters : language === "am" ? translations.am.SetAgeBasedFilters :language== "om" ? translations.om.SetAgeBasedFilters: ""}
                        </h2>

                        <p className="ml-4 text-gray-800 font-semibold mb-6">
                            {language === "en" ? translations.en.Protectkidsautomatically : language === "am" ? translations.am.Protectkidsautomatically :language== "om" ? translations.om.Protectkidsautomatically: ""}
                        </p>

                        <ul className="ml-4 space-y-4 text-gray-700">
                            <li className="flex items-start gap-3">
                                <span className="mt-1 w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs">
                                    ✓
                                </span>
                                <span>
                                    {language === "en" ? translations.en.Filterappsbyageratings : language === "am" ? translations.am.Filterappsbyageratings :language== "om" ? translations.om.Filterappsbyageratings: ""}
                                </span>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="mt-1 w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs">
                                    ✓
                                </span>
                                <span>
                                    {language === "en" ? translations.en.Autolocnewlydownloaded : language === "am" ? translations.am.Autolocnewlydownloaded :language== "om" ? translations.om.Autolocnewlydownloaded: ""}
                                </span>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="mt-1 w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs">
                                    ✓
                                </span>
                                <span>
                                    {language === "en" ? translations.en.Notifyhenkidsrequest : language === "am" ? translations.am.Notifyhenkidsrequest :language== "om" ? translations.om.Notifyhenkidsrequest: ""}
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* RIGHT VISUAL */}
                    {/* Right side image */}
                    <div className="p-4 flex justify-center">
                        <img
                            src="https://famisafe.wondershare.com/images/images-2025/app-blocker/age-based-app-filters.png"
                            alt="Screen time usage"
                            className="w-full h-full object-contain "
                        />
                    </div>

                </div>
                <br />
                <div className="flex justify-center items-center gap-4 mt-6 py-8">
                    <div className="flex justify-center items-center gap-4 w-full md:w-auto">

                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                        inline-flex items-center justify-center
                          px-6 py-2.5 text-sm
                         sm:px-10 sm:text-base
                          md:px-20
                           font-semibold text-white rounded-md
                           bg-gradient-to-r from-purple-500 to-cyan-400
                            hover:from-purple-600 hover:to-cyan-500
                            transition-all duration-300
                             shadow-sm hover:shadow-md
                            w-full sm:w-auto 
                            ">
                            {language === "en"
                                ? translations.en.ViewAllStories
                                : language === "am"
                                    ? translations.am.ViewAllStories
                                    : language== "om" ? translations.om.ViewAllStories: ""}
                        </a>
                    </div>
                </div>

            </div>
            {/*==== Crarousal slide ====*/}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0 mt-4 ">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10">
                    {language === "en"
                        ? translations.en.AppBlockingcenariosParents
                        : language === "am"
                            ? translations.am.AppBlockingcenariosParents
                            : language== "om" ? translations.om.AppBlockingcenariosParents: ""}
                </h2>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 h-[620px]">
                <div className=" relative h-full overflow-hidden py-8">
                    <div
                        ref={slideRef}
                        className={`flex gap-x-6 h-full ${transitionEnabled ? "transition-transform duration-700 ease-in-out" : ""
                            }`}
                        style={{
                            transform: `translateX(-${current * (100 / visibleSlides)}%)`,
                        }}
                    >
                        {slides.map((featuresds, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 h-full"
                                style={{
                                    width: window.innerWidth >= 1024 ? "32%" : "100%",
                                }}
                            >
                                <div className="relative h-full rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src={featuresds.img}
                                        alt={featuresds.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-4 left-1/2 -translate-x-1/2 text-center w-full px-4">
                                        <h3 className="text-white text-xl font-semibold drop-shadow-lg">
                                            {featuresds.title}
                                        </h3>
                                        <p className="text-white text-sm mt-1 drop-shadow-lg">
                                            {featuresds.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Dots */}
                    <div className=" absolute bottom-0  left-1/2 -translate-x-1/2 flex space-x-2 ">
                        {Array.from({ length: featuresds.length - visibleSlides + 1 }).map(
                            (_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrent(index)}
                                    className={`w-5 h-5 rounded-full ${current % featuresds.length === index
                                        ? "bg-purple-600"
                                        : "bg-gray-300"
                                        }`}
                                />
                            )
                        )}
                    </div>
                </div>
            </div>
            <br />
            {/*=== HowToLimitScreenTime ====*/}
            <div className=" bg-[#F8F7FF] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* TITLE */}
                <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-16">
                    {language === "en"
                        ? translations.en.HowtoBlockApps
                        : language === "am"
                            ? translations.am.HowtoBlockApps
                            : language== "om" ? translations.om.HowtoBlockApps: ""}
                </h2>

                {/* ================= DESKTOP GRID ================= */}
                <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-10">
                    {STEPS.map((item, index) => (
                        <Card key={index} item={item} />
                    ))}
                </div>

                {/* ================= MOBILE CAROUSEL ================= */}
                <div className="md:hidden overflow-hidden relative">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {STEPS.map((item, index) => (
                            <div key={index} className="min-w-full px-2">
                                <Card item={item} />
                            </div>
                        ))}
                    </div>

                    {/* DOTS */}
                    <div className="flex justify-center mt-6 gap-2">
                        {STEPS.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${current === index ? "bg-purple-600 w-6" : "bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* BUTTON */}
                <div className="flex justify-center mt-12">
                    <a
                        href="#"
                        className="inline-flex items-center justify-center
            px-6 py-2.5 sm:px-10 md:px-20
            font-semibold text-white rounded-md
            bg-gradient-to-r from-purple-500 to-cyan-400
            hover:from-purple-600 hover:to-cyan-500
            transition-all duration-300
            shadow-sm hover:shadow-md"
                    >
                        {language === "en"
                            ? translations.en.TryItFree
                            : language === "am"
                                ? translations.am.TryItFree
                                :language== "om" ? translations.om.TryItFree: ""}
                    </a>
                </div>
            </div>

            {/*=== HowToLimitScreenTime end ====*/}

            <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-16">
                {language === "en"
                    ? translations.en.WhatParentsAreSaying
                    : language === "am"
                        ? translations.am.WhatParentsAreSaying
                        :language== "om" ? translations.om.WhatParentsAreSaying: ""}
            </h2>

            {/* ================= SLIDER ================= */}
            <div className="relative max-w-6xl mx-auto overflow-hidden">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {TESTIMONIALS.map((item, i) => (
                        <div key={i} className="min-w-full px-4">
                            {/* MOBILE */}
                            <div className="block lg:hidden">
                                <MobileCard item={item} />
                            </div>

                            {/* DESKTOP */}
                            <div className="hidden lg:block">
                                <TestimonialCard item={item} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>



            {/* DOTS */}
            <div className="flex justify-center gap-3 mt-10">
                {TESTIMONIALS.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={` h-2.5 rounded-full transition-all ${index === i ? "w-8 bg-purple-600" : "w-2.5 bg-gray-300"
                            }`}
                    />
                ))}
            </div>

            {/* HERO TEXT SECTION */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">

                <h1 className="
      font-extrabold 
      text-gray-900 
      leading-tight
      text-2xl 
      sm:text-3xl 
      md:text-4xl 
      lg:text-5xl
    ">
                    {language === "en"
                        ? translations.en.MoreParentalControlFeatures
                        : language === "am"
                            ? translations.am.MoreParentalControlFeatures
                            : language== "om" ? translations.om.MoreParentalControlFeatures: ""}
                </h1>

                {/* Optional subtitle (recommended for standard UI) */}


            </div>

            {/* hero text section end */}


            {/* More Parental Control Features */}
            {/* SLIDER */}
            <div className="border overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${(current * 100) / visibleSlidess}%)`,
                    }}
                >
                    {sliides.map((item, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-1/2 lg:w-1/3 px-3 flex-shrink-0"
                        >
                            <FeatureCard
                                item={item}
                                isActive={index === current + Math.floor(visibleSlidess / 2)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* ARROWS */}
            {/* <button
        onClick={prev}
        disabled={current === 0}
        className="border absolute left-28 top-1/2 -translate-y-1/2 bg-black shadow-lg rounded-full p-3 disabled:opacity-30"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={next}
        disabled={current === maxIndex}
        className="absolute right-28 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 disabled:opacity-30"
      >
        <ChevronRight />
      </button> */}

            {/* DOTS */}
            <div className="flex justify-center mt-10 gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${current === index
                            ? "w-8 bg-purple-600"
                            : "w-2 bg-gray-300"
                            }`}
                    />
                ))}
            </div>
            {/* ====== More Parental Control Features end ============ */}
            <br />
            <br />

            {/* Container with gradient background */}
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-8">
                {/* Title */}
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
                    More Tips for Controlling Kid's Screen Time
                </h2>

                {/* Tips Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {tips.map((tip, index) => (
                        <a
                            key={index}
                            href={tip.link}
                            className="block bg-white rounded-lg p-4 shadow hover:bg-purple-50 hover:text-purple-700 transition-all duration-300"
                        >
                            <div className="flex items-center gap-2">
                                <span className="text-purple-600 font-bold">•</span>
                                <span className="text-gray-800 font-medium">{tip.text}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            {/* Container with gradient background end  */}
            <br />
            <br />

            <div className="mx-auto max-w-4xl">

                {/* Title */}
                <h2 className="mb-14 text-center text-3xl font-semibold text-black">
                    Related FAQ
                </h2>

                {/* FAQ Items */}
                <div className="divide-y divide-gray-200">
                    {faqds.map((faq, index) => (
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
                 from-[#C7B3FB]
                 via-[#6E19D7]
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
                    {language === "en" ? translations.en.TheMostReliable : language === "am" ? translations.am.TheMostReliable : language== "om" ? translations.om.TheMostReliable: ""}
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
                        {language === "en" ? translations.en.BuyNow : language === "am" ? translations.am.BuyNow :language== "om" ? translations.om.BuyNow: ""}
                    </button>
                </div>
            </div>
            <br />

        </section>
    )
}