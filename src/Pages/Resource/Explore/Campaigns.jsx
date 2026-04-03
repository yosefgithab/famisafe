import React, { useRef } from 'react'
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../Data/translations';

export default function Campaigns() {
  const { language } = useLanguage();
  const awardImage = "https://famisafe.wondershare.com/images/famisafe/stop-sextortion-campaign-banner.jpg";
  // histordy of the campaign
const awards = language === "en" ? translations.en.awards : language === "am" ? translations.am.awards : language== "om" ? translations.om.awards: ""; 
  

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="bg-[#f0e6ff] max-w-7xl mx-auto text-center rounded-[40px]">
        <div className="">

          {/* Main Title */}
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            {language === "en"
              ? translations.en.OurMarketingCampaigns
              : language === "am"
                ? translations.am.OurMarketingCampaigns
                : language == "om" ? translations.om.OurMarketingCampaigns : ""}

          </h2>

          {/* Subtitle */}
          <p className="text-md sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {language === "en"
              ? translations.en.Toraiseattentionandaware
              : language === "am"
                ? translations.am.Toraiseattentionandaware
                : language == "om" ? translations.om.Toraiseattentionandaware : ""}
          </p>

          {/* Award Container */}
          <div className="mt-12 bg-white rounded-3xl shadow-md py-10 px-6 sm:px-8 ">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

              {/* Left Side Text */}
              <div className="text-center lg:text-left max-w-sm bg-white">
                {/* Main Title */}
                <h3 className="text-2xl sm:text-3xl font-semibold text-white leading-snug mb-2 bg-[#8457CE] p-6 rounded-2xl">

                  {language === "en"
                    ? translations.en.AtTheMoment
                    : language === "am"
                      ? translations.am.AtTheMoment
                      : language == "om" ? translations.om.AtTheMoment : ""}
                </h3>

                {/* Subtitle */}
                <p className="text-gray-200 text-sm sm:text-base mb-4 text-gray-700">
                  {language === "en"
                    ? translations.en.Checkoutthelatestup
                    : language === "am"
                      ? translations.am.Checkoutthelatestup
                      : language == "om" ? translations.om.Checkoutthelatestup : ""}
                </p>

                {/* Button */}
                <button className="bg-purple-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-purple-700 transition">
                  {language === "en"
                    ? translations.en.LearnMore
                    : language === "am"
                      ? translations.am.LearnMore
                      : language == "om" ? translations.om.LearnMore : ""}
                </button>
              </div>

              {/* Right Side Image */}
              <div className=" flex justify-center lg:justify-end w-full lg:w-auto ">
                <img
                  src={awardImage}
                  alt="National Parenting Center Award"
                  className="w-full max-w-[600px] h-auto max-h-[500px] object-contain rounded-[40px]"
                />
              </div>

            </div>
          </div>

        </div>
        <br />
        {/* Main Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 ">
            {language === "en"
              ? translations.en.OurAchievements
              : language === "am"
                ? translations.am.OurAchievements
                : language == "om" ? translations.om.OurAchievements : ""}
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            {language === "en"
              ? translations.en.Overtheyearso
              : language === "am"
                ? translations.am.Overtheyearso
                : language == "om" ? translations.om.Overtheyearso : ""}
          </p>
        </div>


        <div className="relative max-w-7xl mx-auto px-4">

          {/* Back Button */}
          <button
            onClick={scrollLeft}
            className="lg:hidden absolute left-2 top-1/2 -translate-y-1/2 
               bg-purple-600 text-white w-10 h-10 
               rounded-full shadow-lg flex items-center 
               justify-center z-20"
          >
            &lt;
          </button>

          {/* Cards Container */}
          <div
            ref={scrollRef}
            className="
      flex overflow-x-auto scroll-smooth gap-4 py-4
      snap-x snap-mandatory
      lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible
    "
          >
            {awards.map((award) => (
              <div
                key={award.id}
                className="
          w-full min-w-full snap-start flex-shrink-0
          sm:min-w-[50%] 
          lg:min-w-0
          bg-white rounded-2xl shadow-lg 
          hover:shadow-2xl transition
        "
              >
                <img
                  src={award.image}
                  alt={award.subtitle}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {award.subtitle}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={scrollRight}
            className="lg:hidden absolute right-2 top-1/2 -translate-y-1/2 
               bg-purple-600 text-white w-10 h-10 
               rounded-full shadow-lg flex items-center 
               justify-center z-20"
          >
            &gt;
          </button>

        </div>

        <div className=" bg-[#322163] mx-auto max-w-6xl rounded-3xl bg-gradient-to-r px-6 py-16 md:px-12 md:py-20">

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

                <span className="text-lg font-semibold text-white">
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
              <h2 className="text-3xl font-semibold text-white md:text-4xl max-w-xl">
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
  )
}
