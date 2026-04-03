
import { useEffect, useState } from "react";
import { translations } from "../../../Data/translations";
import { useLanguage } from "../../../context/LanguageContext";



export default function StorySection() {
    const { language } = useLanguage();
    
    const stories = language === "en" ? translations.en.stories : language === "am" ? translations.am.stories : language== "om" ? translations.om.stories: "";

    
    {/*preview*/ }
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


    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % stories.length);
        }, 4000); // 4 seconds like FamiSafe

        return () => clearInterval(interval);
    }, [stories.length]);

    return (
        <section className=" mx-auto w-full max-w-8xl px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-0">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                  {language === "en"
                                ? translations.en.RealStoriesfromParents
                                : language === "am"
                                    ? translations.am.RealStoriesfromParents
                                    : language== "om" ? translations.om.RealStoriesfromParents: ""}
            </h2>

            {/* ================= DESKTOP ================= */}
            <div className="hidden md:flex gap-2 h-[330px]">
                {stories.map((story, index) => {
                    const isActive = activeIndex === index;

                    return (
                        <div
                            key={story.tid.id}
                            onMouseEnter={() => setActiveIndex(index)}
                            onClick={() => setActiveIndex(index)}
                            className={`relative cursor-pointer transition-all duration-500 ease-in-out
                rounded-3xl overflow-hidden
                ${isActive ? "flex-[5]" : "flex-[1]"}`}
                        >
                            <img
                                src={story.image}
                                alt={story.name}
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay */}
                            <div
                                className={`absolute inset-0 transition duration-500
                  ${isActive ? "bg-black/50" : "bg-black/25"}`}
                            />

                            {/* TOP NAME + ROLE */}
                            <div className="absolute top-0 left-0 right-0 p-6 text-white z-10">
                                <p className="font-semibold text-lg">{story.name}</p>
                                <p className="text-sm opacity-80">{story.role}</p>
                            </div>

                            {/* BOTTOM QUOTE */}
                            {/* QUOTE (BACKGROUND + ROUNDED) */}
                            <div
                                className={`absolute inset-x-0 bottom-6 px-6 transition-all duration-500
    ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
                            >
                                <div className="bg-black/50 text-white rounded-md p-4 shadow-md">
                                    <p className="text-sm leading-relaxed">
                                        “{story.quote}”
                                    </p>
                                </div>
                            </div>

                        </div>
                    );
                })}
            </div>

            {/* ================= MOBILE ================= */}
            <div className="md:hidden relative px-3">
                <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                    {stories.map((story, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <div
                                key={story.id}
                                className="min-w-full relative h-[260px] xs:h-[280px] sm:h-[320px]"
                                onClick={() => setActiveIndex(index)}
                            >
                                <img
                                    src={story.image}
                                    alt={story.name}
                                    className="w-full h-full object-cover rounded-2xl"
                                />

                                {/* Overlay */}
                                <div
                                    className={`absolute inset-0 rounded-2xl transition duration-500
              ${isActive ? "bg-black/50" : "bg-black/25"}`}
                                />

                                {/* TOP NAME + ROLE */}
                                <div className="absolute top-0 left-0 right-0 p-3 text-white z-10">
                                    <p className="font-semibold text-sm">{story.name}</p>
                                    <p className="text-[11px] opacity-80">{story.role}</p>
                                </div>

                                {/* QUOTE */}
                                <div
                                    className={`absolute inset-x-0 bottom-3 px-3 transition-all duration-500
              ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                                >
                                    <div className="bg-black/60 text-white rounded-lg p-3 shadow-md">
                                        <p className="text-xs leading-relaxed">
                                            “{story.quote}”
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* DOTS */}
                <div className="flex justify-center gap-2 mt-4">
                    {stories.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`w-2.5 h-2.5 rounded-full transition
          ${activeIndex === index ? "bg-purple-600 scale-110" : "bg-gray-300"}`}
                        />
                    ))}
                </div>
            </div>


            <div className="flex justify-center items-center gap-4 mt-6">
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
            <a href="ParentsReviews"></a>
        </section>
    );
}
