import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { translations } from "../../../Data/translations";
/* ---------------- STAR COMPONENT ---------------- */
const Stars = () => (
    <div className="flex gap-1 mt-1">
        {[...Array(5)].map((_, i) => (
            <svg
                key={i}
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.05 9.401c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
            </svg>
        ))}
    </div>
);

/* ---------------- DATA ---------------- */
const CountUp = ({ end, suffix = "", duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    let start = 0;
                    const increment = end / (duration / 16);

                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= end) {
                            setCount(end);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, 16);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [end, duration]);

    return (
        <span ref={ref}>
            {count.toLocaleString()}
            {suffix}
        </span>
    );
};


export default function ParentsReviews() {
    const { language } = useLanguage();

    const testimonials = language === "en" ? translations.en.testimonials : language === "am" ? translations.am.testimonials : language == "om" ? translations.om.testimonials : "";
    return (

        <section className="ml-6 bg-gradient-to-r from-purple-400 to-indigo-300 text-white rounded-lg mt-12 sm:mt-16 md:mt-20 rounded-lg mr-6">
            {/* ---------- HEADER ---------- */}
            <div className="max-w-xl mx-auto text-center px-4">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    {language === "en"
                        ? translations.en.WhatParentsAreSayingAboutFamiSafe
                        : language === "am"
                            ? translations.am.WhatParentsAreSayingAboutFamiSafe
                            : language == "om" ? translations.om.WhatParentsAreSayingAboutFamiSafe : ""}{" "}
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-base sm:text-lg">
                        {language === "en"
                            ? translations.en.FamiSafe
                            : language === "am"
                                ? translations.am.FamiSafe
                                : language == "om" ? translations.om.FamiSafe : ""}
                    </span>
                </h2>

                <p className="text-sm sm:text-base opacity-90 max-w-md mx-auto">
                    {language === "en"
                        ? translations.en.Realexperiences
                        : language === "am"
                            ? translations.am.Realexperiences
                            : language == "om" ? translations.om.Realexperiences : ""}
                </p>

                {/* ---------- STATS (COUNT UP) ---------- */}
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                        <p className="text-xl md:text-2xl font-bold">
                            <CountUp end={200} suffix="+" />
                        </p>
                        <p className="mt-1 text-sm opacity-90"> {language === "en"
                            ? translations.en.Countries
                            : language === "am"
                                ? translations.am.Countries
                                : language == "om" ? translations.om.Countries : ""}</p>
                    </div>

                    <div className="text-center">
                        <p className="text-xl md:text-2xl font-bold">
                            <CountUp end={35} suffix="M+" />
                        </p>
                        <p className="mt-1 text-sm opacity-90">  {language === "en"
                            ? translations.en.Users
                            : language === "am"
                                ? translations.am.Users
                                : language == "om" ? translations.om.Users : ""}</p>
                    </div>

                    <div className="text-center">
                        <p className="text-xl md:text-2xl font-bold">
                            <CountUp end={18} suffix="M+" />
                        </p>
                        <p className="mt-1 text-sm opacity-90">  {language === "en"
                            ? translations.en.Families
                            : language === "am"
                                ? translations.am.Families
                                : language == "om" ? translations.om.Families : ""}</p>
                    </div>

                    <div className="text-center">
                        <p className="text-xl md:text-2xl font-bold">
                            <CountUp end={15} suffix="M+" />
                        </p>
                        <p className="mt-1 text-sm opacity-90">  {language === "en"
                            ? translations.en.Subscribers
                            : language === "am"
                                ? translations.am.Subscribers
                                : language == "om" ? translations.om.Subscribers : ""}</p>
                    </div>
                </div>
            </div>

            {/* ---------- NON-STOP TESTIMONIAL SLIDER ---------- */}
            <div className="mt-10 relative overflow-hidden">
                <div className="flex gap-4 w-max animate-marquee px-2 sm:px-4 ">
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <div
                            key={`${t.id}-${i}`}
                            className="w-[220px] sm:w-[260px] bg-white text-gray-900 rounded-2xl p-4 shadow-md flex-shrink-0"
                        >
                            <div className="flex items-center gap-3">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold text-sm sm:text-base">
                                        {t.name}
                                    </p>
                                    <Stars />
                                </div>
                            </div>
                            <p className="mt-2 text-xs sm:text-sm leading-relaxed">
                                {t.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ---------- MARQUEE ANIMATION ---------- */}
            {/* <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
                @media (min-width: 640px) {
                    .animate-marquee {
                        animation-duration: 25s;
                    }
                }
            `}</style> */}
        </section>
    )
}
