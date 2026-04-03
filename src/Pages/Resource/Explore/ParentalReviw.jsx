import { Star } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../Data/translations';

export default function ParentalReview() {
  const { language } = useLanguage();

  const awardImage = "https://famisafe.wondershare.com/images/images-2021/website-2021/medals-2021.png";
  const reviews =
    language === "en"
      ? translations.en.reviews
      : language === "am"
        ? translations.am.reviews
        : language === "om"
          ? translations.om.reviews
          : "";
  const reviewss =
    language === "en"
      ? translations.en.reviewss
      : language === "am"
        ? translations.am.reviewss
        : language === "om"
          ? translations.om.reviewss
          : "";
  const reviewsse =
    language === "en"
      ? translations.en.reviewsse
      : language === "am"
        ? translations.am.reviewsse
        : language === "om"
          ? translations.om.reviewsse
          : "";
  
  // google play review slider
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };
  // app store review slider
  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === reviews.length - 1 ? 0 : prev + 1
    );
  };




  // Facebook review slider
  const scrollRef = useRef(null);

  // Scroll left
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Scroll right
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };


  return (
    <section className="py-20 px-4">
      <div className=" bg-[#f0e6ff] max-w-7xl mx-auto text-center rounded-[40px]">
        <div className="">

          {/* Main Title */}
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            {language === "en" ? translations.en.UserReview : language === "am" ? translations.am.UserReview : language === "om" ? translations.om.UserReview : ""}
          </h2>

          {/* Subtitle */}
          <p className="text-md sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
           {language === "en" ? translations.en.Overtheyears : language === "am" ? translations.am.Overtheyears : language === "om" ? translations.om.Overtheyears : ""}
          </p>

          {/* Award Container */}
          <div className="mt-12 bg-white rounded-3xl shadow-md py-10 px-6 sm:px-8 ">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

              {/* Left Side Text */}
              <div className="text-center lg:text-left max-w-sm">
                <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 leading-snug">
                  {language === "en" ? translations.en.AwardedbyFamo : language === "am" ? translations.am.AwardedbyFamo : language === "om" ? translations.om.AwardedbyFamo : ""}
                </h3>
              </div>

              {/* Right Side Image */}
              <div className="flex justify-center lg:justify-end w-full lg:w-auto">
                <img
                  src={awardImage}
                  alt="National Parenting Center Award"
                  className="w-48 sm:w-64 md:w-80 lg:w-96 xl:w-[450px] object-contain"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
      <div>
        <br />
        <br />
        <div className="flex justify-center items-center py-8 px-4 bg-gray-50 rounded-[20px]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center leading-tight">
            {language === "en" ? translations.en.Whatouruserssay : language === "am" ? translations.am.Whatouruserssay : language === "om" ? translations.om.Whatouruserssay : ""}
          </h1>
        </div>

        <div className="bg-[#f0e6ff] max-w-7xl mx-auto rounded-[20px] p-6 lg:p-10 lg:grid lg:grid-cols-4 gap-10 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-6 mb-6 lg:mb-0">
            <img
              src="https://famisafe.wondershare.com/images/images-2021/website-2021/googleplay-icon.png"
              alt="App Store"
              className="w-24"
            />
            <h3 className="text-2xl font-semibold text-gray-800">
              {language === "en" ? translations.en.GooglePlayUserReview : language === "am" ? translations.am.GooglePlayUserReview : language === "om" ? translations.om.GooglePlayUserReview : ""}
            </h3>
            <div className="flex items-center gap-3">
              <span className="text-5xl font-bold text-gray-800">4.5</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <span className="text-gray-700 text-lg">{language === "en" ? translations.en.k208Ktotal : language === "am" ? translations.am.k208Ktotal : language === "om" ? translations.om.k208Ktotal : ""}</span>
            </div>
            <button className="border-2 border-purple-500 text-purple-600 px-8 py-3 rounded-full font-medium hover:bg-purple-500 hover:text-white transition">
              {language === "en" ? translations.en.COMMENTUS : language === "am" ? translations.am.COMMENTUS : language === "om" ? translations.om.COMMENTUS : ""}
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-3 relative">

            {/* MOBILE SLIDER */}
            <div className="lg:hidden overflow-hidden">
              <div
                className="flex transition-transform duration-300 gap-6"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="min-w-full bg-white p-6 rounded-lg shadow-sm"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-lg text-gray-800">
                          {review.name}
                        </h4>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex text-yellow-400 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {review.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Prev / Next Buttons */}
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-purple-500 text-white rounded-full p-2 shadow-lg"
              >
                &lt;
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-purple-500 text-white rounded-full p-2 shadow-lg"
              >
                &gt;
              </button>
            </div>

            {/* DESKTOP GRID */}
            <div className="hidden lg:grid grid-cols-3 gap-6">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800">
                        {review.name}
                      </h4>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {review.text}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
        <br />
        <br />

        <div className="bg-[#f0e6ff] max-w-7xl mx-auto rounded-[20px] p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-4 gap-10 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-6 ml-6 mt-6">
            <img
              src="https://famisafe.wondershare.com/images/images-2021/website-2021/applestore-icon.png"
              alt="App Store"
              className="w-24"
            />
            <h3 className="text-2xl font-semibold text-gray-800">
              {language === "en" ? translations.en.AppStoreUserReview : language === "am" ? translations.am.AppStoreUserReview : language === "om" ? translations.om.AppStoreUserReview : ""}
            </h3>
            <div className="flex items-center gap-3">
              <span className="text-5xl font-bold text-gray-800">4.5</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <span className="text-gray-700 text-lg">{language === "en" ? translations.en.k208Ktotal : language === "am" ? translations.am.k208Ktotal : language === "om" ? translations.om.k208Ktotal : ""}</span>
            </div>
            <button className="border-2 border-purple-500 text-purple-600 px-8 py-3 rounded-full font-medium hover:bg-purple-500 hover:text-white transition">
              {language === "en" ? translations.en.COMMENTUS : language === "am" ? translations.am.COMMENTUS : language === "om" ? translations.om.COMMENTUS : ""}
            </button>
          </div>

          {/* RIGHT SIDE REVIEW CARDS */}
          <div className="lg:col-span-3 relative mt-6 lg:mt-0">
            {/* MOBILE SLIDER */}
            <div className="lg:hidden overflow-hidden">
              <div
                className="flex transition-transform duration-300 gap-6"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {reviewss.map((review) => (
                  <div
                    key={review.id}
                    className="min-w-full bg-white p-6 rounded-lg shadow-sm"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-lg text-gray-800">
                          {review.name}
                        </h4>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                    </div>

                    <div className="flex text-yellow-400 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" />
                      ))}
                    </div>

                    <p className="text-gray-700 leading-relaxed text-sm">
                      {review.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Prev / Next Buttons */}
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-purple-500 text-white rounded-full p-2 shadow-lg"
              >
                &lt;
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-purple-500 text-white rounded-full p-2 shadow-lg"
              >
                &gt;
              </button>
            </div>

            {/* DESKTOP GRID */}
            <div className="hidden lg:grid grid-cols-3 gap-6">
              {reviewss.map((review) => (
                <div
                  key={review.id}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800">
                        {review.name}
                      </h4>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  </div>

                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed text-sm">
                    {review.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="bg-[#f0e6ff] max-w-7xl mx-auto rounded-[20px] p-4 lg:p-6 lg:grid lg:grid-cols-4 gap-6 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-6 ml-2 sm:ml-6 mt-6 lg:col-span-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              className="w-20"
            />
            <h3 className="text-2xl font-semibold text-gray-800">{language === "en" ? translations.en.FacebookCommunity : language === "am" ? translations.am.FacebookCommunity : language === "om" ? translations.om.FacebookCommunity : ""}</h3>

            <div className="flex items-center gap-3">
              <span className="text-4xl font-bold text-gray-800">{language === "en" ? translations.en.p25Kj : language === "am" ? translations.am.p25Kj : language === "om" ? translations.om.p25Kj : ""}</span>
              <span className="text-gray-600 text-lg">{language === "en" ? translations.en.PeopleLikeThis : language === "am" ? translations.am.PeopleLikeThis : language === "om" ? translations.om.PeopleLikeThis : ""}</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-4xl font-bold text-gray-800">{language === "en" ? translations.en.p30K : language === "am" ? translations.am.p30K : language === "om" ? translations.om.p30K : ""}</span>
              <span className="text-gray-600 text-lg">{language === "en" ? translations.en.Followers : language === "am" ? translations.am.Followers : language === "om" ? translations.om.Followers : ""}</span>
            </div>

            <button className="border-2 border-purple-500 text-purple-600 px-8 py-3 rounded-full font-medium hover:bg-purple-500 hover:text-white transition">
              {language === "en" ? translations.en.COMMENTUS : language === "am" ? translations.am.COMMENTUS : language === "om" ? translations.om.COMMENTUS : ""}
            </button>
          </div>

          {/* RIGHT SIDE REVIEW CARDS */}
          <div className="lg:col-span-3 mt-6 lg:mt-0 relative">

            {/* Buttons for mobile */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 shadow flex items-center justify-center z-10 lg:hidden"
            >
              &lt;
            </button>
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 shadow flex items-center justify-center z-10 lg:hidden"
            >
              &gt;
            </button>

            {/* Cards Container */}
            <div
              ref={scrollRef}
              className="flex lg:grid lg:grid-cols-3 gap-4 overflow-x-auto scroll-smooth py-2"
            >
              {reviewsse.map((review) => (
                <div
                  key={review.id}
                  className="bg-white p-6 rounded-lg shadow-sm min-w-[250px] flex-shrink-0 lg:min-w-auto"
                >
                  {/* Top Section */}
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800">{review.name}</h4>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed text-sm">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <br />
        <br />

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
  );
}