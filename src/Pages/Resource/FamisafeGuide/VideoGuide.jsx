import React, { useRef } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { translations } from "../../../Data/translations";

export default function VideoGuide() {
  const { language } = useLanguage();
  const videos = language === "en" ? translations.en.videos : language === "am" ? translations.am.videos : language == "om" ? translations.om.videos : "";
  const videoos = language === "en" ? translations.en.videoos : language === "am" ? translations.am.videoos : language == "om" ? translations.om.videoos : "";
  const videooss = language === "en" ? translations.en.videooss : language === "am" ? translations.am.videooss : language == "om" ? translations.om.videooss : "";
  const videoList = language === "en" ? translations.en.videoList : language === "am" ? translations.am.videoList : language == "om" ? translations.om.videoList : "";


  const scrollRef = useRef(null);

  // Scroll function for mobile buttons
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300; // pixels to scroll per click
      scrollRef.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="w-full bg-gray-50 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Purple Banner */}
        <div className="border max-w-7x1 bg-[#8C5BDE] rounded-3xl py-14 px-6 sm:px-12 text-center shadow-lg">

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="https://famisafe.wondershare.com/images/images-2021/website-2021/video-channel.png"
              alt="FamiSafe Video"
              className="max-w-full h-auto w-[280px] sm:w-[350px] md:w-[450px]"
            />
          </div>1

          {/* Title */}
          <h2 className="mt-10 text-white text-2xl sm:text-3xl md:text-4xl font-bold">
            {language === "en"
              ? translations.en.FamiSafeBryuuandVideoChannel
              : language === "am"
                ? translations.am.FamiSafeBryuuandVideoChannel
                : language == "om" ? translations.om.FamiSafeBryuuandVideoChannel : ""}
          </h2>



          {/* Button */}
          <div className="mt-8 flex justify-center">
            <a
              href="https://famisafe.wondershare.com/main/sign-up"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 font-semibold text-white rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 hover:from-purple-600 hover:to-cyan-500 transition duration-300 shadow-md hover:shadow-xl"
            >

              {language === "en"
                ? translations.en.Vis98tHERE
                : language === "am"
                  ? translations.am.Vis98tHERE
                  : language == "om" ? translations.om.Vis98tHERE : ""}
            </a>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Desktop Layout */}
          <div className="flex flex-col lg:flex-row gap-4 mt-10 ">

            {/* ================= LEFT 40% ================= */}
            <a
              href="https://www.youtube.com/watch?v=qcV7v1DtAzI"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:w-[40%] w-full group"
            >
              <div className=" bg-white shadow-md hover:shadow-xl transition duration-300 w-full">

                {/* Image Wrapper with 16:9 ratio */}
                <div className="overflow-hidden aspect-video rounded-lg">
                  <img
                    src="https://img.youtube.com/vi/qcV7v1DtAzI/sddefault.jpg"
                    alt="Main Video"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Title Section */}
                <div className="bg-[#6C4EB6] p-5">
                  <h3 className="text-white text-base lg:text-lg font-semibold leading-relaxed">
                    {language === "en"
                      ? translations.en.BestP75arentalCont
                      : language === "am"
                        ? translations.am.MoniterProtect
                        : language == "om" ? translations.om.MoniterProtect : ""}
                  </h3>
                </div>

              </div>
            </a>

            {/* ================= RIGHT 50% ================= */}
            <div className="lg:w-[60%] w-full grid grid-cols-1 sm:grid-cols-2 gap-6 rounded-lg">

              {videoList.map((video, index) => (
                <a
                  key={index}
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="bg-white shadow-md hover:shadow-xl transition duration-300">

                    <div className="overflow-hidden aspect-video">
                      <img
                        src={video.img}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      />
                    </div>

                    <div className="p-4">
                      <h4 className="text-sm font-medium text-gray-800 group-hover:text-purple-600 transition">
                        {video.title}
                      </h4>
                    </div>

                  </div>
                </a>
              ))}

            </div>

          </div>
        </div>
        <br />
        <div className="bg-[#F4F1F5] rounded-lg max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Title */}
          <div className="flex items-center gap-3 mb-10">
            <h2 className="text-2xl font-semibold text-gray-800">
              How-to Videos
            </h2>
            <span className="text-purple-600 text-xl">›</span>
          </div>

          {/* Video Carousel / Horizontal Scroll */}
          <div className="relative">

            {/* Left Button */}
            <button
              onClick={() => scroll("back")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 sm:hidden"
            >
              ‹
            </button>

            {/* Right Button */}
            <button
              onClick={() => scroll("next")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 sm:hidden"
            >
              ›
            </button>

            {/* Scrollable Video Cards */}
            <div
              ref={scrollRef}
              className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-x-visible scroll-smooth"
            >
              {videos.map((video, index) => (
                <a
                  key={index}
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-shrink-0 w-80 md:w-auto"
                >
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden">

                    {/* Black Top Bar */}
                    <div className="h-6 bg-black"></div>

                    {/* Thumbnail */}
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={video.img}
                        alt={video.title}
                        className="
                        w-full h-full object-cover 
                        transition-transform duration-300
                        active:scale-105
                        md:group-hover:scale-105
                      "
                      />
                    </div>

                    {/* Black Bottom Bar */}
                    <div className="h-6 bg-black"></div>

                    {/* Title */}
                    <div className="p-5">
                      <h3 className="text-sm sm:text-base font-medium text-gray-800 group-hover:text-purple-600 transition leading-relaxed">
                        {video.title}
                      </h3>
                    </div>

                  </div>
                </a>
              ))}
            </div>

          </div>
        </div>
        <br />
        <br />

        <div className="bg-[#F4F1F5] rounded-lg max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Title */}
          <div className="flex items-center gap-3 mb-10">
            <h2 className="text-2xl font-semibold text-gray-800">
              {language === "en"
                ? translations.en.Influ76encerVideos
                : language === "am"
                  ? translations.am.Influ76encerVideos
                  : language == "om" ? translations.om.Influ76encerVideos : ""}
            </h2>
            <span className="text-purple-600 text-xl">›</span>
          </div>

          {/* Video Carousel / Horizontal Scroll */}
          <div className="relative">

            {/* Left Button */}
            <button
              onClick={() => scroll("back")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 sm:hidden"
            >
              ‹
            </button>

            {/* Right Button */}
            <button
              onClick={() => scroll("next")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 sm:hidden"
            >
              ›
            </button>

            {/* Scrollable Video Cards */}
            <div
              ref={scrollRef}
              className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-x-visible scroll-smooth"
            >
              {videoos.map((video, index) => (
                <a
                  key={index}
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-shrink-0 w-80 md:w-auto"
                >
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden">

                    {/* Black Top Bar */}
                    <div className="h-6 bg-black"></div>

                    {/* Thumbnail */}
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={video.img}
                        alt={video.title}
                        className="
                        w-full h-full object-cover 
                        transition-transform duration-300
                        active:scale-105
                        md:group-hover:scale-105
                      "
                      />
                    </div>

                    {/* Black Bottom Bar */}
                    <div className="h-6 bg-black"></div>

                    {/* Title */}
                    <div className="p-5">
                      <h3 className="text-sm sm:text-base font-medium text-gray-800 group-hover:text-purple-600 transition leading-relaxed">
                        {video.title}
                      </h3>
                    </div>

                  </div>
                </a>
              ))}
            </div>

          </div>
        </div>
        <br />
        <br />

        <div className="bg-[#F4F1F5] rounded-lg max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[900px]">

          {/* Section Title */}
          <div className="flex items-center gap-3 mb-10">
            <h2 className="text-2xl font-semibold text-gray-800">
              {language === "en"
                ? translations.en.TikTokV345ideos
                : language === "am"
                  ? translations.am.MoniterProtect
                  : language == "om" ? translations.om.MoniterProtect : ""}
            </h2>
            <span className="text-purple-600 text-xl">›</span>
          </div>

          {/* Video Carousel / Horizontal Scroll */}
          <div className="relative">

            {/* Left Button */}
            <button
              onClick={() => scroll("back")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 sm:hidden"
            >
              ‹
            </button>

            {/* Right Button */}
            <button
              onClick={() => scroll("next")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 sm:hidden"
            >
              ›
            </button>

            {/* Scrollable Video Cards */}
            <div
              ref={scrollRef}
              className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-x-visible scroll-smooth h-[700px]"
            >
              {videooss.map((video, index) => (
                <a
                  key={index}
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-shrink-0 w-80 md:w-auto"
                >
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden h-full">

                    {/* Black Top Bar */}
                    <div className="h-6 bg-black"></div>

                    {/* Bigger Thumbnail */}
                    <div className="h-[500px] overflow-hidden relative">
                      <img
                        src={video.img}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-300 active:scale-105 md:group-hover:scale-105"
                      />
                    </div>

                    {/* Black Bottom Bar */}
                    <div className="h-6 bg-black"></div>

                    {/* Title */}
                    <div className="p-5">
                      <h3 className="text-sm sm:text-base font-medium text-gray-800 group-hover:text-purple-600 transition leading-relaxed">
                        {video.title}
                      </h3>
                    </div>

                  </div>
                </a>
              ))}
            </div>

          </div>
        </div>
        <br />
        <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-r from-[#EFFFFA] via-[#F2F6FF] to-[#F6EEFF] px-6 py-16 md:px-12 md:py-20">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">

            {/* LEFT SIDE (Logo + Text) */}
            <div>

              {/* Logo + Brand */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8B5CF6]">
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
                  {language === "en"
                    ? translations.en.FamiSafe
                    : language === "am"
                      ? translations.am.FamiSafe
                      : language === "om"
                        ? translations.om.FamiSafe
                        : ""}
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl font-semibold text-black md:text-4xl max-w-xl">
                {language === "en"
                  ? translations.en.TheMostReliable
                  : language === "am"
                    ? translations.am.TheMostReliable
                    : language === "om"
                      ? translations.om.TheMostReliable
                      : ""}
              </h2>

            </div>

            {/* RIGHT SIDE (Buttons) */}
            <div className="flex flex-col sm:flex-row gap-4">

              <button
                className="rounded-full bg-[#8B5CF6] px-8 py-3 text-base font-semibold text-white transition hover:bg-[#7C3AED]"
              >
                {language === "en"
                  ? translations.en.TryitFrees
                  : language === "am"
                    ? translations.am.TryitFrees
                    : language === "om"
                      ? translations.om.TryitFrees
                      : ""}
              </button>

              <button
                className="rounded-full border-2 border-[#8B5CF6] px-8 py-3 text-base font-semibold text-[#8B5CF6] transition hover:bg-[#8B5CF6] hover:text-white"
              >
                {language === "en"
                  ? translations.en.BuyNow
                  : language === "am"
                    ? translations.am.BuyNow
                    : language === "om"
                      ? translations.om.BuyNow
                      : ""}
              </button>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}