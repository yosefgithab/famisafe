import React, { useState } from 'react'
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../Data/translations';
import { BsAndroid2, BsFillCloudFill } from 'react-icons/bs';
import { FaApple, FaWindows } from 'react-icons/fa';
import { SiGooglechrome } from 'react-icons/si';
import { Check, Clock, MessageCircle, RefreshCcw, ShieldCheck, SlidersHorizontal, Zap } from 'lucide-react';

export default function InternetSafetyForkids() {
  const [activeTab, setActiveTab] = useState("14+");
  const { language } = useLanguage();
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);


  };


  const screenTimeDataz = {
    title: "",
    sections: [
      {
        heading: "",
        paragraphs: [
          "In the 21st century, keep your kids safe online can be especially challenging since smartphone access has become more prevalent. According to Pew Research Center, 95% of teens can access to a cellphone, and 45% of teens online almost constantly, 44% of teens go online several times a day. Even younger kids can get access to internet in large numbers. Based on a study from the Center for Cyber Safety and Education, more than 60% of fourth to eighth kids can be exposed to cellphones or tablets, almost 50% of them have a computer at home.",
          "All these statistics state that kids have more opportunities to explore and learn online. Meanwhile, more internet risks are coming on the way. Parents should have the internet safety talk and ways to control unwanted content as soon as kids are given a connected device.",
        ],
      },
    ],

    imageInfo: {
      src: "https://famisafe.wondershare.com/images/images-2020/internet-safety/chart1.png",
      title: "",
      description:
        "",
    },
  };
  const Insufficient = {
    title: "",
    sections: [
      {
        heading: "",
        paragraphs: [
          "In the 21st century, keep your kids safe online can be especially challenging since smartphone access has become more prevalent. According to Pew Research Center, 95% of teens can access to a cellphone, and 45% of teens online almost constantly, 44% of teens go online several times a day. Even younger kids can get access to internet in large numbers. Based on a study from the Center for Cyber Safety and Education, more than 60% of fourth to eighth kids can be exposed to cellphones or tablets, almost 50% of them have a computer at home.",
          "All these statistics state that kids have more opportunities to explore and learn online. Meanwhile, more internet risks are coming on the way. Parents should have the internet safety talk and ways to control unwanted content as soon as kids are given a connected device.",
        ],
      },
    ],

    imageInfo: {
      src: "https://famisafe.wondershare.com/images/images-2020/internet-safety/chart1.png",
      title: "",
      description:
        "",
    },
  };
  const PayAttention = {
    title: "",
    sections: [
      {
        heading: "",
        paragraphs: [
          "Social media plays a major role in your teen’s life, it’s where they can express themselves, connect with friends, and create and share new experiences. But it can also come with a whole host of issues (such as cyberbullying and predatory behaviors mentioned above). As a parent, it is important to stay on top of your teen’s social media use.",
          "According to NSPCC, Facebook, Snapchat, Instagram are the most used methods to groom children. Now the NSPCC is calling on Government and social networks to develop technology already at their disposal to prevent grooming and bring in grooming alerts for victims and moderators.",
        ],
      },
    ],

    imageInfo: {
      src: "https://famisafe.wondershare.com/images/images-2020/internet-safety/chart2.png",
      title: "",
      description:
        "",
    },
  };

  const cards = [
    {
      title: "Cyberstalking",
      desc: "Cyberstalking is crime carried out over internet or other electronic devices where the attacker stalk or harass an individual, group, or organization.",
    },
    {
      title: "Cyberbullying",
      desc: "Cyberbullying is bullying that takes place over digital devices including sending, or sharing harmful, negative, or mean content about someone.",
    },
    {
      title: "Online Predation",
      desc: "Online predation is the act of using online chat rooms or internet forums to engage an underage minor in inappropriate sexual relationships.",
    },
    {
      title: "Obscene/offensive Content",
      desc: "Forms of messages that contain offensive, distasteful, sexual, or explicit content that from various websites.",
    },
    {
      title: "Sextortion",
      desc: "Sextortion is a crime that occurs when someone forcing the victim to distribute their private material if not provide sexual images or video.",
    },
  ];
  const carrds = [
    {
      title: "Pushing",
      desc: "Phishing is a cybercrime that the scammers disguise as trustworthy sources try to get someone's sensitive information.",
    },
    {
      title: "Internet Sacams",
      desc: "Internet scams are schemes that someone using internet services or software to defraud or take advantage of victims, typically for financial gain.",
    },
    {
      title: "Malware",
      desc: "Malware, short for malicious software, is designed to get access to sensitive information such as passwords without the user's consent.",
    },
  ];

  const features = [
    {
      title: "Activity Report",
      description:
        "View the device usage in a timeline form. Check which application or website is used or visited at what time. Get to know what your teens are up to in real-time.",
    },
    {
      title: "Track & Limit Screen Time",
      description:
        "Track how much time teens spend on their Macs and set up a daily screen time usage limit to restrict their usage. Parents can also block the device remotely.",
    },
    {
      title: "Browser History Checking",
      description:
        "Know what teens are browsing or searching online to understand them better. Get the browser history simultaneously. You can also track browser records under incognito mode.",
    },
    {
      title: "Block & Filter Web Content",
      description:
        "Block or allow specific websites. Filter sites by 7+ inbuilt categories including Adults, Drugs, Gambling, Tobacco, Violence, and others.",
    },
    {
      title: "Flexible Schedule Setting",
      description:
        "Set up different schedules to block or allow certain apps for different occasions. Parents can choose to block games during study time.",
    },
    {
      title: "Overused or Inappropriate Applications Blocking",
      description:
        "Check which applications are used most or block inappropriate apps completely on Mac.",
    },
    {
      title: "Multiplatform Supported",
      description:
        "Android, iOS, Fire OS, macOS, and Windows platforms supported. Track children’s online behavior in one app.",
    },
  ];
  const featuresv = [
    {
      icon: Clock,
      color: "bg-purple-500",
      title: "24/7 All-Around Protection",
      desc: "FamiSafe runs on kid's devices all day round to protect kids from both real-life and online dangers.",
    },
    {
      icon: Zap,
      color: "bg-orange-500",
      title: "Timely Alerts",
      desc: "Whenever an issue is detected on kid's devices, parents will receive immediate notification on their end.",
    },
    {
      icon: ShieldCheck,
      color: "bg-emerald-400",
      title: "Privacy Protected",
      desc: "FamiSafe uses the RSA cryptosystem for secure data transmission. Your information is only viewable by you.",
    },
    {
      icon: RefreshCcw,
      color: "bg-teal-400",
      title: "Three-day Free Trial",
      desc: "A three-day free trial is provided for new users. Download and test the app first to see if it can meet your needs before you decide to make the purchase.",
    },
    {
      icon: SlidersHorizontal,
      color: "bg-yellow-400",
      title: "Flexible Subscription",
      desc: "With one FamiSafe account, you can protect up to 5 devices with the monthly plan, 10 devices with the quarterly and annual plan.",
    },
    {
      icon: MessageCircle,
      color: "bg-purple-500",
      title: "Live Chat Support",
      desc: "FamiSafe values our customers and makes a great effort to ensure a great customer experience. Our support is available via email, telephone, and live chat.",
    },
  ];
  const featuredLogos = [
    "TECH TIMES",
    "XDA",
    "AppAdvice",
    "Pocket-lint",
    "TweakTown",
    "techradar",
    "DIGITAL TRENDS",
  ];
  const faqs = language === "en" ? translations.en.faqs : language === "am" ? translations.am.faqs : language == "om" ? translations.om.faqs : "";

  const [openIndex, setOpenIndex] = useState(null);

  const TABS = [
    { id: "0-6", label: "0-6 years old" },
    { id: "7-10", label: "7-10 years old" },
    { id: "11-13", label: "11-13 years old" },
    { id: "14+", label: "14+ years old" },
  ];

  const CONTENT = {
    "14+": [
      {
        title: "Stay involved",
        desc:
          "Keep talking and stay interested in what they’re doing. Don’t be afraid to bring up challenging issues like sexting, pornography and cyberbullying.",
      },
      {
        title: "Don’t give in",
        desc:
          "Remind teens that they should stop following the wave, especially the bad ones, like sending inappropriate comments or images to other people.",
      },
      {
        title: "Keep their information private",
        desc:
          "Your child can set privacy settings on most social networking sites so that only close friends can search for them, tag them or share what they’ve posted.",
      },
      {
        title: "Stay safe on the move",
        desc:
          "Use safe settings on all mobile devices but be aware that if your child is accessing the internet using public WiFi, filters to block inappropriate content.",
      },
    ],
    "0-6": [],
    "7-10": [],
    "11-13": [],
  };
  const bloggs = [
    {
      id: 1,
      title: "Apps to limit screen time on Android and iOS.",
      image:
        "https://famisafe.wondershare.com/images/article/2018/09/free-apps-to-limit-screen-time-on-android-and-iphone-1.png",
      path: "/apps-to-limit-screen-time",

    },
    {
      id: 2,
      title: "How to Check Screen Time on iPhone?",
      image:
        "https://famisafe.wondershare.com/images/article/2018/09/how-to-check-screen-time-on-iphone.png",
      path: "/apps-to-limit-screen-time",
    },
    {
      id: 3,
      title: "8 Easy Tips to Reduce Screen time",
      image:
        "https://famisafe.wondershare.com/images/article/2018/09/Kids-timer-app-best-way-to-control-time-on-iphone-and-ipad-2.png",
      path: "/apps-to-limit-screen-time",
    },
    {
      id: 4,
      title: "AAP Recommended Screen Time",
      image:
        "https://famisafe.wondershare.com/images/article/2019/11/computer-screen-eye-strain-1.png",
      path: "/apps-to-limit-screen-time",
    },
  ];

  return (
    <section className="w-full overflow-hidden px-4 sm:px-6 lg:px-0">
      <div className="max-w-7xl mx-auto">

        <div
          className="relative h-[85vh] w-full bg-center bg-cover bg-no-repeat flex items-center"
          style={{
            backgroundImage:
              "url('https://famisafe.wondershare.com/images/images-2020/internet-safety/banner.png')",
          }}
        >
          {/* Overlay (optional for better text contrast) */}
          <div className="absolute inset-0 bg-white/0"></div>

          {/* Content */}
          <div className="relative max-w-7xl mx-auto w-full px-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

            {/* LEFT CONTENT */}
            <div className="text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight text-white">
                {language === "en"
                  ? translations.en.NextGen
                  : language === "am"
                    ? translations.am.NextGen
                    : translations.om.NextGen}
              </h1>

              <p className="mt-4 text-white max-w-xl text-sm sm:text-base mx-auto lg:mx-0">
                {language === "en"
                  ? translations.en.description
                  : language === "am"
                    ? translations.am.description
                    : translations.om.description}
              </p>

              {/* CTA Button */}
              <div className="mt-6 flex justify-center lg:justify-start">
                <a
                  href="https://famisafe.wondershare.com/main/sign-up"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 font-semibold text-white rounded-full 
                         bg-gradient-to-r from-purple-500 to-cyan-400
                         hover:from-purple-600 hover:to-cyan-500
                         transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  {language === "en"
                    ? translations.en.TryItFree
                    : language === "am"
                      ? translations.am.TryItFree
                      : translations.om.TryItFree}
                </a>
              </div>

              {/* Platforms */}
              <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-white text-sm">
                <span>
                  {language === "en"
                    ? translations.en.Availableon
                    : language === "am"
                      ? translations.am.Availableon
                      : translations.om.Availableon}
                </span>

                <a
                  href="https://play.google.com/store/apps/details?id=com.wondershare.famisafe"
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

                <FaWindows className="text-2xl hover:text-purple-600 transition cursor-pointer" />
                <SiGooglechrome className="text-2xl hover:text-purple-600 transition cursor-pointer" />

                <a
                  href="https://famisafe.wondershare.com/main/sign-up"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsFillCloudFill className="text-2xl hover:text-purple-600 transition" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[white] py-10 sm:py-12 max-w-6xl mx-auto px-4 lg:px-6 flex justify-center">
          <h3 className="text-xl sm:text-3xl lg:text-3xl  font-bold text-gray-800  text-center break-words leading-snug sm:leading-tight" >
            {language === "en" ? translations.en.FamiSafeBestAppto : language === "am" ? translations.am.FamiSafeBestAppto : language === "om" ? translations.om.FamiSafeBestAppto : ""}
          </h3>
        </div>


        {/* ==================== Manage screen time on Kindle Fire: ================*/}
        <h2 className="text-3xl font-semibold text-center text-indigo-900 mb-14">
          {screenTimeDataz.title}
        </h2>
        <div className="border-1 border-dashed border-purple-500 grid grid-cols-1 lg:grid-cols-5 gap-14 items-start ml-6 mr-6 p-10 rounded-2xl bg-white">


          {/* IMAGE – NOW LEFT */}
          <div className="lg:col-span-2 order-1 lg:order-1 flex flex-col items-center text-center">
            <img
              src={screenTimeDataz.imageInfo.src}
              alt={screenTimeDataz.imageInfo.title}
              className="w-full max-w-md object-contain"
            />

            <h4 className="mt-6 font-semibold text-lg text-indigo-900">
              {screenTimeDataz.imageInfo.title}
            </h4>

            <p className="bg-gray-100 mt-2 text-gray-600 text-sm leading-relaxed max-w-sm rounded-lg p-4">
              {screenTimeDataz.imageInfo.description}
            </p>
          </div>

          {/* TEXT – NOW RIGHT */}
          <div className="lg:col-span-3 order-2 lg:order-2 space-y-10 text-gray-800 leading-relaxed">
            {screenTimeDataz.sections.map((section, i) => (
              <div key={i}>
                <h3 className="font-semibold text-lg text-indigo-900 mb-3">
                  {section.heading}
                </h3>

                {section.paragraphs.map((p, idx) => (
                  <p key={idx} className="mb-4 last:mb-0">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

        </div>
        {/* ==================== End Manage screen time on Kindle Fire: ================*/}
        {/*====================== title===========*/}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 text-center">

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-4xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
            {language === "en"
              ? translations.en.FamiSafeBestAppto
              : language === "am"
                ? translations.am.FamiSafeBestAppto
                : language === "om"
                  ? translations.om.FamiSafeBestAppto
                  : ""}
          </h2>

          {/* Sub Heading */}
          <h3 className="mt-4 text-lg sm:text-2xl font-bold text-gray-700">
            {language === "en"
              ? translations.en.FamiSafeBestAppto
              : language === "am"
                ? translations.am.FamiSafeBestAppto
                : language === "om"
                  ? translations.om.FamiSafeBestAppto
                  : ""}
          </h3>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {language === "en"
              ? translations.en.FamiSafeestAppto
              : language === "am"
                ? translations.am.FamiSfeBestAppto
                : language === "om"
                  ? translations.om.FamiafeBestAppto
                  : ""}
            <br />
            The growth of the internet has made digital communication easier than ever.
            However, it has also exposed children to malicious users who exploit online
            platforms for personal gain. Children are often the primary targets, making
            parental awareness and protection essential. The most common threats to
            personal safety include the following:
          </p>

        </div>

        {/*==================== End title=================== */}

        {/*================== Internet gives the rise of threats to personal safety===== */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">

          {/* ===== Row 1 (3 Cards) ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.slice(0, 3).map((item, i) => (
              <div
                key={i}
                className="border-2 border-dashed border-purple-500 rounded-2xl p-6 sm:p-8 text-center
                   bg-white
                   transition-all duration-500 ease-out
                   hover:-translate-y-2 hover:shadow-xl
                   animate-fadeUp"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-purple-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* ===== Row 2 (2 Cards + Image) ===== */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-14 items-center">

            {/* 2 Cards */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {cards.slice(3, 5).map((item, i) => (
                <div
                  key={i}
                  className="border-2 border-dashed border-purple-500 rounded-2xl p-6 sm:p-8 text-center
                     bg-white
                     transition-all duration-500 ease-out
                     hover:-translate-y-2 hover:shadow-xl
                     animate-fadeUp"
                  style={{ animationDelay: `${(i + 3) * 150}ms` }}
                >
                  <h3 className="text-xl sm:text-2xl font-semibold text-purple-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="flex justify-center mt-10 lg:mt-0 animate-float">
              <img
                src="https://famisafe.wondershare.com/images/images-2020/internet-safety/tree.png"
                alt="Illustration"
                className="w-40 sm:w-52 lg:w-64"
              />
            </div>

          </div>
        </div>
        {/*================== Internet gives the rise of threats to personal safety ============ */}


        {/*====================== title===========*/}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 text-center">
          {/* Main Heading */}
          <h3 className="mt-4 text-lg sm:text-2xl font-bold text-gray-700">
            {language === "en"
              ? translations.en.FamiSafeBestAppto
              : language === "am"
                ? translations.am.FamiSafeBestAppto
                : language === "om"
                  ? translations.om.FamiSafeBestAppto
                  : ""}
          </h3>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            <br />
            Due to the convenience of internet and the popularity of social media, people leak their
            sensitive information, identity or passwords unconsciously. Unauthorized access and usage
            of private information may result in consequences such as identity theft, as well as theft
            of property. Common causes of information security breaches include:
          </p>

        </div>
        {/*==================== End title=================== */}


        {/*================== Internet gives the rise of threats to personal safety===== */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">

          {/* ===== Row 1 (3 Cards) ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {carrds.slice(0, 3).map((item, i) => (
              <div
                key={i}
                className="border-2 border-dashed border-purple-500 rounded-2xl p-6 sm:p-8 text-center
                   bg-white
                   transition-all duration-500 ease-out
                   hover:-translate-y-2 hover:shadow-xl
                   animate-fadeUp"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-purple-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/*================== Internet gives the rise of threats to personal safety ============ */}

        {/*====================== title===========*/}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 text-center">
          {/* Main Heading */}
          <h3 className="mt-4 text-lg sm:text-2xl font-bold text-gray-700">
            {language === "en"
              ? translations.en.FamiSafeBestAppto
              : language === "am"
                ? translations.am.FamiSafeBestAppto
                : language === "om"
                  ? translations.om.FamiSafeBestAppto
                  : ""}
          </h3>

        </div>
        {/*==================== End title=================== */}

        {/* ==================== Manage screen time on Kindle Fire: ================*/}
        <h2 className="text-3xl font-semibold text-center text-indigo-900 mb-14">
          {PayAttention.title}
        </h2>
        <div className="border-1 border-dashed border-purple-500 grid grid-cols-1 lg:grid-cols-5 gap-14 items-start ml-6 mr-6 p-10 rounded-2xl bg-white">


          {/* IMAGE – NOW LEFT */}
          <div className="lg:col-span-2 order-1 lg:order-1 flex flex-col items-center text-center">
            <img
              src={PayAttention.imageInfo.src}
              alt={PayAttention.imageInfo.title}
              className="w-full max-w-md object-contain"
            />

            <h4 className="mt-6 font-semibold text-lg text-indigo-900">
              {PayAttention.imageInfo.title}
            </h4>

            <p className="bg-gray-100 mt-2 text-gray-600 text-sm leading-relaxed max-w-sm rounded-lg p-4">
              {PayAttention.imageInfo.description}
            </p>
          </div>

          {/* TEXT – NOW RIGHT */}
          <div className="lg:col-span-3 order-2 lg:order-2 space-y-10 text-gray-800 leading-relaxed">
            {PayAttention.sections.map((section, i) => (
              <div key={i}>
                <h3 className="font-semibold text-lg text-indigo-900 mb-3">
                  {section.heading}
                </h3>

                {section.paragraphs.map((p, idx) => (
                  <p key={idx} className="mb-4 last:mb-0">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

        </div>
        {/* ==================== End Manage screen time on Kindle Fire: ================*/}

        {/*====================================== featured ============================*/}
        <div className="bg-[white] py-10 sm:py-12 max-w-6xl mx-auto px-4 lg:px-6 flex justify-center">
          <h3 className="text-xl sm:text-3xl lg:text-4xl  font-bold text-gray-800  text-center break-words leading-snug sm:leading-tight" >
            {/* {language === "en" ? translations.en.FamiSafeBestAppto : language === "am" ? translations.am.FamiSafeBestAppto : language === "om" ? translations.om.FamiSafeBestAppto : ""} */}
            Manages your kids' screen time by FamiSafe
          </h3>
        </div>
        <div className="py-10 sm:py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">

            <p className="  text-base sm:text-lg lg:text-xl text-gray-700 text-center leading-relaxed max-w-4xl animate-fade-up "
            >
              Electronic devices are too attractive to children. Without the guidance
              and proper management of their parents, children may stay online all day,
              which is not conducive to healthy growth and development. Children can
              access the internet through many different devices, and sometimes parents
              are not always with them. This is why you need a comprehensive app like
              <span className="font-semibold text-gray-900"> FamiSafe </span>
              to help manage your kids&apos; screen time effectively.
            </p>

          </div>
        </div>

        {/* CTA BOX */}

        <div className="border-1 border-dashed border-purple-500 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start ml-6 mr-6 p-10 rounded-2xl bg-white">

          {/* LEFT IMAGE */}
          <div className="flex justify-center lg:justify-start mt-50">
            <img
              src="https://famisafe.wondershare.com/images/images-2020/parental-control/famisafe_box.png"
              alt="Product Box"
              className="w-80 lg:w-80 object-contain"
            />
          </div>

          {/* RIGHT TEXT */}
          <div className="lg:col-span-2">
            <ul className="space-y-6 text-gray-800 text-base leading-relaxed">
              {features.map((item, index) => (
                <li key={index}>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>
            <h3 className="text-start text-lg font-semibold text-gray-800">Try for FREE now!</h3>
            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start flex-wrap">
              <a
                href="https://famisafe.wondershare.com/main/sign-up"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 font-semibold text-white rounded-full 
                             bg-gradient-to-r from-purple-500 to-cyan-400 
                             hover:from-purple-600 hover:to-cyan-500 
                             transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {language === "en" ? translations.en.StartFreeTrial : language === "am" ? translations.am.StartFreeTrial : language == "om" ? translations.om.StartFreeTrial : ""}
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border 
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
        </div>

        {/* Featured in */}
        <p className="text-gray-500 font-medium justify-center mb-8 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center ml-6 mr-6 p-10  bg-white">Also featured in</p>

        <div className="flex flex-wrap justify-center gap-10 text-gray-300 font-semibold mb-20">
          {featuredLogos.map((logo, i) => (
            <span key={i} className="text-lg tracking-wide">
              {logo}
            </span>
          ))}
        </div>
        {/* End Featured in */}

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-10 
                        border-1 border-dashed border-purple-500 
                        ml-6 mr-6 p-10 rounded-2xl bg-white">

          {featuresv.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex flex-col items-center text-center max-w-sm mx-auto">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${item.color}`}>
                  <Icon className="text-white w-6 h-6" />
                </div>

                <h3 className="mt-6 font-semibold text-lg">{item.title}</h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}

          {/* CENTER BUTTON */}
          <div className="md:col-span-3 flex justify-center mt-10">
            <a
              href="https://famisafe.wondershare.com/main/sign-up"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 font-semibold text-white rounded-full 
                         bg-purple-500 hover:bg-purple-600 
                         transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {language === "en"
                ? translations.en.StartFreeTrial
                : language === "am"
                  ? translations.am.StartFreeTrial
                  : language === "om"
                    ? translations.om.StartFreeTrial
                    : ""}
            </a>
          </div>

        </div>
        <br />
        <br />
        {/* End Features grid */}
        {/*====================================== End featured ============================*/}
        <div className="border border-dashed border-purple-500 bg-[#F8F6FF] py-14 rounded-2xl">

          {/* ====================== Title Section ====================== */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center mb-16">
            <h3 className="text-lg sm:text-2xl font-bold text-gray-800">
              {language === "en"
                ? translations.en.FamiSafeBestAppto
                : language === "am"
                  ? translations.am.FamiSafeBestAppto
                  : language === "om"
                    ? translations.om.FamiSafeBestAppto
                    : ""}
            </h3>

            <p className="mt-4 text-base sm:text-lg font-semibold text-gray-600">
              Number of Participants Recommending This Age
            </p>
          </div>

          {/* ====================== Section Title ====================== */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-center text-indigo-900 mb-12 px-4">
            {Insufficient.title}
          </h2>

          {/* ====================== Content Grid ====================== */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start bg-white/60 rounded-2xl p-6 sm:p-10">

              {/* ================= Image Section ================= */}
              <div className="lg:col-span-2 flex flex-col items-center text-center">
                <img
                  src={Insufficient.imageInfo.src}
                  alt={Insufficient.imageInfo.title}
                  className="w-full max-w-sm sm:max-w-md object-contain"
                />

                <h4 className="mt-6 font-semibold text-lg text-indigo-900">
                  {Insufficient.imageInfo.title}
                </h4>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed max-w-sm bg-gray-100 rounded-lg p-4">
                  {Insufficient.imageInfo.description}
                </p>
              </div>

              {/* ================= Text Section ================= */}
              <div className="lg:col-span-3 space-y-10 text-gray-700 leading-relaxed">
                {Insufficient.sections.map((section, i) => (
                  <div key={i}>
                    <h3 className="font-semibold text-lg text-indigo-900 mb-3">
                      {section.heading}
                    </h3>

                    {section.paragraphs.map((p, idx) => (
                      <p key={idx} className="mb-4 last:mb-0">
                        {p}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

            </div>
          </div>
          {/* ======================== Tabs ==================== */}
          <div className="bg-purple-50 rounded-full p-2 flex flex-wrap md:flex-nowrap justify-between mb-16">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
              flex-1 px-6 py-4 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300
              ${activeTab === tab.id
                    ? "bg-purple-600 text-white shadow-lg"
                    : "text-gray-800 hover:bg-white"
                  }
            `}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* ===== Cards ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {CONTENT[activeTab]?.map((item, i) => (
              <div
                key={i}
                className="border-2 border-dashed border-purple-500 rounded-2xl p-8 flex gap-6 items-start animate-fade"
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
                    <Check className="text-white" />
                  </div>
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

            {CONTENT[activeTab]?.length === 0 && (
              <p className="col-span-full text-center text-gray-500">
                Content coming soon for this age group.
              </p>
            )}
          </div>

        </div>
        {/*==== */}
        <br />
        <div className="mx-auto max-w-4xl">

          {/* Title */}
          <h2 className=" mb-14 text-center text-3xl font-semibold text-gray-900">
            FAQ about screen time management
          </h2>

          {/* FAQ Items */}
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
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
        {/* =================== END FAQS =================== */}

        {/* =================== Screen Time Parental Control Blog =================== */}
        <br />
        {/* Title */}
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-800 mb-14">
          Screen Time Parental Control Blog
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bloggs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                {/* Curved bottom */}
                <div className="absolute bottom-0 left-0 w-full h-10 bg-white rounded-t-[60%]" />
              </div>

              {/* Text */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                  {blog.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <br />
        {/* =================== END Screen Time Parental Control Blog =================== */}
        <div className=" mx-auto max-w-6xl rounded-3xl bg-gradient-to-r from-[#171718] via-[#060708] to-[#292430]  px-6py-16 md:px-12  md:py-20 text-center ">
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
            <span className="text-lg font-semibold text-white">
              {language === "en" ? translations.en.FamiSafe : language === "am" ? translations.am.FamiSafe : language === "om" ? translations.om.FamiSafe : ""}
            </span>
          </div>

          {/* Heading */}
          <h2 className="mb-10 text-3xl font-semibold text-white md:text-4xl">
            {language === "en" ? translations.en.TheMostReliable : language === "am" ? translations.am.TheMostReliable : language === "om" ? translations.om.TheMostReliable : ""}
          </h2>

          {/* Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              className="rounded-full bg-[#8B5CF6] px-8 py-3 text-base font-semibold text-white transition hover:bg-[#7C3AED]"
            >
              {language === "en" ? translations.en.TryitFrees : language === "am" ? translations.am.TryitFrees : language === "om" ? translations.om.TryitFrees : ""}
            </button>

            <button
              className=" rounded-full border-2 border-[#8B5CF6] px-8 py-3 text-base font-semibold text-[#8B5CF6] transition hover:bg-[#8B5CF6] hover:text-white " >
              {language === "en" ? translations.en.BuyNow : language === "am" ? translations.am.BuyNow : language === "om" ? translations.om.BuyNow : ""}
            </button>
          </div>
        </div>

        <br />
        <br />
      </div>
    </section>
  )
}
