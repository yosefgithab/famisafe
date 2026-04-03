import { Check, ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { translations } from '../../../Data/translations'
import { useLanguage } from '../../../context/LanguageContext';
import { BsAndroid2 } from 'react-icons/bs';
import { FaApple } from 'react-icons/fa';

export default function Geonection() {
  
  const { language } = useLanguage();

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqas = language === "en" ? translations.en.faqas : language === "am" ? translations.am.faqas : language == 'om' ? translations.om.faqas : ""; const [openIndex, setOpenIndex] = useState(null);
  const features = [
    {
      id: 1,
      title: "Place",
      description:
        "Create your Places. Set locations like home, bar, or school and get notified when members enter or leave.",
      image: "https://famisafe.wondershare.com/images/images2022/geonection/s3-img5.png",
    },
    {
      id: 2,
      title: "Location History",
      description:
        "Track location history by timeline. See arrivals, departures, and last 30 days movement.",
      image: "https://famisafe.wondershare.com/images/images2022/geonection/s3-img6.png",
    },
    {
      id: 3,
      title: "Driving Report",
      description:
        "Detailed driving reports including route, speed, distance, and trip duration.",
      image: "https://famisafe.wondershare.com/images/images2022/geonection/s3-img3.png",
    },
    {
      id: 4,
      title: "Check in",
      description:
        "Check in to notify your circle that you've arrived safely.",
      image: "https://famisafe.wondershare.com/images/images2022/geonection/s3-img4.png",
    },
  ];

  const slides = [
    {
      id: 1,
      icon: "https://famisafe.wondershare.com/images/images2022/geonection/for-friends.svg",
      title: "For Friends",
      text: `Geonection is cool. My buddy Freddy installed it last week and showed us how to "Sign in" at Places. We agreed that whoever signs in the last in the next gathering pay for the bill! Yesterday we sat together and watched Freddy delayed by a traffic jam, march inch by inch on this app. It was so much fun.`,
    },
    {
      id: 2,
      icon: "https://famisafe.wondershare.com/images/images2022/geonection/for-family.svg",
      title: "For Family",
      text: " As a parent, it's quite natural to worry about kids from time to time. Honestly, I can get distracted by this several times at work. I installed Geonection for my younger son, and I enjoy those messages the app sends me: your kid just left home, your kid arrives at school. Call me controlling but it sets my mind at rest.",
    },
    {
      id: 3,
      icon: "https://famisafe.wondershare.com/images/images2022/geonection/for-couple.svg",
      title: "For Business",
      text:
        " You know about long-distance relationships. Doubt breeds. Every missed call can lead to a fight. It drives sensible people crazy. Now with Geonection, I know my boyfriend just left the office and is driving home at 65km/h; he knows that I'm home, and I wasn't answering phones because the battery is low. That is the companionship supporting me till the next date. ",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  /* -----------------------------
     AUTO SLIDE (ALL DEVICES)
  ----------------------------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev =>
        prev === features.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

  const steps = [
    {
      id: 1,
      title: "Install",
      description:
        "Search and download Geonection in App Store or Google Play",
      image: "https://famisafe.wondershare.com/images/images2022/geonection/step1.svg",
    },
    {
      id: 2,
      title: "Sign up",
      description:
        "Open the app, register and log in to your account, set the geographic location permissions",
      image: "https://famisafe.wondershare.com/images/images2022/geonection/step2.svg",
    },
    {
      id: 3,
      title: "Add circle",
      description:
        "Create and share circles of yourself, your family and friends",
      image: "https://famisafe.wondershare.com/images/images2022/geonection/step3.svg",
    },
  ];
  // slide2
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };
  return (
    <section className="w-full overflow-hidden px-4 sm:px-6 lg:px-0">
      <div className="max-w-7xl mx-auto  mr-6 ml-6  mb-6">

        {/* BACKGROUND IMAGE */}
        <div className="relative w-full min-h-screen overflow-hidden">

          {/* BACKGROUND IMAGE */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-xl"
            style={{
              backgroundImage:
                "url('https://famisafe.wondershare.com/images/images2022/geonection/bannner-bg.png')",
            }}
          ></div>

          {/* CONTENT */}
          <div className="relative z-10 max-w-6xl mx-auto min-h-screen flex items-center px-4 sm:px-6 lg:px-8">

            {/* CARD */}
            <div>

              {/* Logo + Brand */}
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="/assets/images/logo/Geoconection.png"
                  alt="Geonection"
                  className="w-12 h-12"
                />
                <span className="text-3xl font-bold text-gray-900">
                  Geonection
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
                Secured Location Sharing,
                <br />
                See Loved Ones at Hands
              </h1>

              {/* Features */}
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1 w-6 h-6 bg-black rounded-full"><Check /></span>
                  Create circles for family and friends to share live location
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1 w-6 h-6 bg-black rounded-full"><Check /></span>
                  Top-level location data security with end-to-end encryption
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1 w-6 h-6 bg-black rounded-full"><Check /></span>
                  View full driving report with every driving history
                </li>
              </ul>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mb-6">
                <a href="/QR-Code">
                  <button className="bg-green-400 hover:bg-green-500 text-black font-semibold px-6 py-3 rounded-lg transition">
                    Try It Free
                  </button>
                </a>

                <a href="#">
                  <button className="border-2 hover:bg-green-300 text-black font-semibold px-6 py-3 rounded-lg transition">
                    See Pricing
                  </button>
                </a>
              </div>

              {/* App Icons */}
              <div className="flex items-center gap-4 text-gray-600">
                <span>Available for:</span>
                <img src="/assets/images/icons/andrion.png" alt="Android" className="h-6" />
                <img src="/assets/images/icons/iphone.png" alt="iOS" className="h-6" />
              </div>

            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* TOP TEXT (ABOVE UI) */}
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-3xl font-extrabold text-gray-900 leading-tight max-w-3xl sm:max-w-4xl mx-auto">

              {language === "en" ? translations.en.KnowMoreAbou : language === "am" ? translations.am.KnowMoreAbou : language == "om" ? translations.or.KnowMoreAbou : ""}
            </h3>
          </div>
         <div className="px-4 sm:px-0">
  <p
    className="
      text-sm
      sm:text-base
      lg:text-lg
      text-gray-800
      text-center
      leading-relaxed
      max-w-sm
      sm:max-w-3xl
      md:max-w-4xl
      mx-auto
    "
  >
    {language === "en"
      ? translations.en.IncorporatedbyGoogleYouTubeR
      : language === "am"
      ? translations.am.IncorporatedbyGoogleYouTubeR
      : language === "om"
      ? translations.or.IncorporatedbyGoogleYouTubeR
      : ""}
  </p>
</div>

        </div>
        <div className="bg-[#EFFFFB] max-w-7xl mx-auto py-16 lg:py-20 rounded-lg">

          {/* TITLE */}
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-12">
            {language === "en" ? translations.en.HowtoViewKidsTik : language === "am" ? translations.am.HowtoViewKidsTik : language == "om" ? translations.or.HowtoViewKidsTik : ""}
          </h2>

          {/* MAIN GRID */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* RIGHT VISUAL - IMAGE */}
              <div className="relative flex justify-center order-1 lg:order-2">
                <div className="flex items-center gap-6 scale-90 sm:scale-100">
                  <img
                    src="https://famisafe.wondershare.com/images/images2022/geonection/s3-img1.png"
                    alt="FamiSafe App Screens"
                    className="rounded-lg max-w-full h-auto object-contain shadow-lg"
                  />
                </div>
              </div>

              {/* LEFT CONTENT - TEXT */}
              <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left order-2 lg:order-1 mt-6 lg:mt-0">
                <div>
                  <h4 className="font-bold text-xl sm:text-2xl mb-3">
                    {language === "en"
                      ? translations.en.Step1InstallFamiSafe
                      : language === "am"
                        ? translations.am.Step1InstallFamiSafe
                        : language === "om"
                          ? translations.or.Step1InstallFamiSafe
                          : ""}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {language === "en"
                      ? translations.en.DownloadFamiSafeApp
                      : language === "am"
                        ? translations.am.DownloadFamiSafeApp
                        : language === "om"
                          ? translations.or.DownloadFamiSafeApp
                          : ""}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* right image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* RIGHT VISUAL */}
            <div className=" relative flex justify-center">
              <div className="flex items-center gap-6 scale-90 sm:scale-100">
                <img
                  src="https://famisafe.wondershare.com/images/images2022/geonection/s3-img2.png"
                  alt="FamiSafe App Screens"
                  className=" rounded-lg max-w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* LEFT CONTENT */}
            <div className=" max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              <div className="ml-6 space-y-6 text-gray-800">
                <div>
                  <h4 className="font-bold">{language === "en" ? translations.en.Step1InstallFamiSafe : language === "am" ? translations.am.Step1InstallFamiSafe : language == "om" ? translations.or.Step1InstallFamiSafe : ""}</h4>
                  <p className="text-sm text-gray-600">
                    {language === "en" ? translations.en.DownloadFamiSafeApp : language === "am" ? translations.am.DownloadFamiSafeApp : language == "om" ? translations.or.DownloadFamiSafeApp : ""}
                  </p>
                </div>
              </div>
            </div>


          </div>
          <br className='' />
          <br />
          {/* slide text and image */}
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT – TEXT SLIDER */}
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6 text-center">
                More to Explore
              </h2>

              <div className="flex lg:block gap-4 overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-2">
                {features.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    className={`min-w-[85%] lg:min-w-0 snap-center cursor-pointer rounded-xl p-6 transition-all border
                  ${activeIndex === index
                        ? "bg-green-100 border-green-400"
                        : " border-transparent"
                      }`}
                  >
                    <h3 className="text-lg font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT – IMAGE SLIDER */}
            <div className="relative order-1 lg:order-2">
              <div className="relative w-full h-[220px] sm:h-[20px] lg:h-[300px] rounded-2xl overflow-hidden shadow-xl">
                {features.map((item, index) => (
                  <img
                    key={item.id}
                    src={item.image}
                    alt={item.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700
                  ${activeIndex === index
                        ? "opacity-100"
                        : "opacity-0"
                      }`}
                  />
                ))}
              </div>

              {/* DOTS – ALL DEVICES */}
              <div className="flex justify-center gap-2 mt-4">
                {features.map((_, index) => (
                  <span
                    key={index}
                    className={`w-2.5 h-2.5 rounded-full transition
                  ${activeIndex === index
                        ? "bg-green-500"
                        : "bg-gray-300"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        {/* ======== Steps ======= */}
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-16">
          Start Geonection
        </h2>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Dotted line */}
          <div className="hidden md:block absolute top-14 left-0 right-0">
            <svg
              viewBox="0 0 1200 120"
              className="w-full"
              fill="none"
            >
              <path
                d="M0 60 Q300 0 600 60 T1200 60"
                stroke="#93C5FD"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              <polygon
                points="1150,55 1200,60 1150,65"
                fill="#93C5FD"
              />
            </svg>
          </div>

          {steps.map((step) => (
            <div
              key={step.id}
              className="relative flex flex-col items-center text-center"
            >
              {/* Pin Image */}
              <div className="w-28 h-28 bg-blue-100 rounded-full flex items-center justify-center shadow-md">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-16 h-16 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-semibold">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-600 text-sm max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-16">
  <a
    href="https://play.google.com/store/apps/details?id=com.wondershare.geonection"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 bg-lime-400 px-8 py-4 rounded-lg font-semibold hover:bg-lime-500 transition"
  >
    <BsAndroid2 /> Try It Free
  </a>

  <a
    href="https://apps.apple.com/us/app/geonection-location-tracker/id1573543158"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 bg-lime-400 px-8 py-4 rounded-lg font-semibold hover:bg-lime-500 transition"
  >
    <FaApple /> Try It Free
  </a>
</div>
        <br />
        <br />
        {/*========= ========== */}
        <div className="border-2 border-[#D2E6EA] bg-[#F2FBFD] rounded-3xl p-10 md:p-16 relative text-center">
          {/* Top Title */}
          <h2 className="text-3xl font-bold mb-14">
            Geonection Can Be A Good Helper in Many Cases
          </h2>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2"
          >
            <ChevronLeft className="w-8 h-8 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2"
          >
            <ChevronRight className="w-8 h-8 text-gray-600" />
          </button>

          {/* Slide Content */}
          <div className="flex flex-col items-center max-w-3xl mx-auto">
            {/* Icon */}
            <div className="w-14 h-14 mb-6">
              <img
                src={slides[index].icon}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>

            {/* Subtitle */}
            <h3 className="font-semibold text-lg mb-4">
              {slides[index].title}
            </h3>

            {/* Text */}
            <p className="text-gray-700 leading-relaxed">
              {slides[index].text}
            </p>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`w-2.5 h-2.5 rounded-full transition ${i === index ? "bg-lime-400" : "bg-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-4xl">

          {/* Title */}
          <h2 className="mb-14 text-center text-3xl font-semibold text-black">
            Related FAQ
          </h2>

          {/* FAQ Items */}
          <div className="divide-y divide-gray-200">
            {faqas.map((faq, index) => (
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
          className="border-2 border-[#B7CBA6]
                      mx-auto
                      max-w-6xl
                      rounded-3xl
                      bg-gradient-to-r
                      from-[#F5FDEE]
                      px-6
                      py-16
                      md:px-12
                      md:py-20
                      text-center
                    ">
          {/* Logo + Brand */}
          <div className="mb-8 flex items-center justify-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#82DA40]">
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
              {language === "en" ? translations.en.FamiSafe : language === "am" ? translations.am.FamiSafe : translations.om.FamiSafe}
            </span>
          </div>

          {/* Heading */}
          <h2 className="mb-10 text-3xl font-semibold text-black md:text-4xl">
            {language === "en" ? translations.en.TheMostReliable : language === "am" ? translations.am.TheMostReliable : translations.om.TheMostReliable}
          </h2>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-16">
  <a
    href="/QR-Code"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 bg-lime-400 px-8 py-4 rounded-lg font-semibold hover:bg-lime-500 transition"
  >
    <BsAndroid2 /> Try It Free
  </a>
  </div>
        </div>
      </div>
    </section>
  )
}
