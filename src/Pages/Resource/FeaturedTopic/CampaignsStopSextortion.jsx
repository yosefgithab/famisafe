import React, { useEffect, useState } from 'react'
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../Data/translations';
import { AiFillFrown } from 'react-icons/ai';

export default function CampaignsStopSextortion() {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState("facts");


  const sections = [
    { id: "facts", label: "Facts about Sextortion" },
    { id: "quiz", label: "Sextortion Quiz" },
    { id: "stop", label: "How to Stop Sextortion" },
    { id: "cases", label: "Real Cases" },
    { id: "resources", label: "Resources" },
  ];

  // Scroll Spy Effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          if (
            scrollPosition >= element.offsetTop &&
            scrollPosition < element.offsetTop + element.offsetHeight
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const questions = [
    {
      question: "How would you describe the bond between family members?",
      options: ["Very close", "Average", "Enemy"],
    },
    {
      question: "How often do you communicate openly with your parents?",
      options: ["Always", "Sometimes", "Never"],
    },
    {
      question: "Do you feel safe sharing personal problems with family?",
      options: ["Yes", "Not sure", "No"],
    },
    {
      question: "How does your family resolve conflicts?",
      options: ["Talk calmly", "Argue loudly", "Ignore issues"],
    },
    {
      question: "How supported do you feel by your family?",
      options: ["Very supported", "Somewhat supported", "Not supported"],
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleNext = () => { if (currentStep < questions.length - 1) setCurrentStep(currentStep + 1); };
  const handleBack = () => { if (currentStep > 0) setCurrentStep(currentStep - 1); };
  const handleOptionChange = (option) => setAnswers({ ...answers, [currentStep]: option });
  const handleSubmit = () => setShowModal(true);
  const handleRestart = () => { setShowModal(false); setCurrentStep(0); setAnswers({}); };
  const [activeTab, setActiveTab] = useState("kids");

  const [activetab, setActivetab] = useState("famisafe");
  const resourcesDataa = {
    famisafe: [
      {
        image:
          "https://famisafe.wondershare.com/images/images-2020/new/subject/banner-sexting.png",
        title: "Teen Sexting: Why It's Harmful?",
        description:
          "Teen sexting is on the rise. For most teens, it seems harmless, but the dangers are unpredictable and serious."
      },
      {
        image:
          "https://famisafe.wondershare.com/images/article/2022/slang/common-cyber-crimes-1.jpg",
        title: "Top 7 Most Common Cyber Crimes",
        description:
          "Learn how to protect your family from cyber criminals and prevent kids from committing cyber crimes."
      },
      {
        image:
          "https://famisafe.wondershare.com/images/article/2021/12/screen-time/online-privacy.png",
        title: "How to Protect Online Privacy?",
        description:
          "Privacy leaks can lead to serious consequences. Learn useful online protection methods."
      }
    ],

    authority: [
      {
        image:
          "https://famisafe.wondershare.com/images/images2022/stop-sextortion/ic3.png",
        title:
          "IC3 (Internet Crime Complaint Center): A central hub to receive, develop, and refer criminal complaints regarding internet crime.",
        linkText: "Go to IC3 >>"
      },
      {
        image:
          "https://famisafe.wondershare.com/images/images2022/stop-sextortion/fbi.png",
        title:
          "FBI (The Federal Bureau of Investigation): American users should locate FBI offices near them to get help.",
        linkText: "Go to FBI >>"
      },
      {
        image:
          "https://famisafe.wondershare.com/images/images2022/stop-sextortion/delhi.png",
        title:
          "Cyber Delhi: Cyber Crime Unit of Delhi Police: India users can make complaints here.",
        linkText: "Go to Cyber Delhi >>"
      },
      {
        image:
          "https://famisafe.wondershare.com/images/images2022/stop-sextortion/commissioner.png",
        title:
          "E-safety Commissioner: Australia's independent regulator for online safety.",
        linkText: "Go to E-safety Commissioner >>"
      }
    ],

    social: [
      {
        image:
          "https://famisafe.wondershare.com/images/images2022/stop-sextortion/facebook.png",
        title: "Facebook",
        description: "Once report sexting, Facebook will send a formal warning to the reported person."
      },
      {
        image:
          "https://famisafe.wondershare.com/images/images2022/stop-sextortion/twitter.png",
        title: "Tiwtter",
        description: "Learn how to report abusive behaviors in this Twitter official help center"
      },
      {
        image:
          "https://famisafe.wondershare.com/images/images2022/stop-sextortion/instagram.png",
        title: "Instagram",
        description: "Instagram is cooperating with connectsafely to fight abuse in Instagram."
      },

      {
        image:
          "https://famisafe.wondershare.com/images/images2022/stop-sextortion/kik.png",
        title: "Kiki",
        description: "With relatively sufficient resources in the help center, you can easily find guidance in Kik."
      },
      {
        image:
          "https://famisafe.wondershare.com/images/images2022/stop-sextortion/snapchat.png",
        title: "SnapChat",
        description: "Snapchat established this safety center for users to find help and report sexual abuse. Learn how to protect yourself in Snapchat here."
      },

      {
        image:
          "https://famisafe.wondershare.com/images/images2022/stop-sextortion/whatsapp.png",
        title: "WhatsApp",
        description: "As a huge chatting app that may breed countless sextortion, WhatsApp only provider with users very few help. First, know how to block a toxic user here."
      },

      {
        image:
          "https://famisafe.wondershare.com/images/images2022/stop-sextortion/discord.png",
        title: "Discord",
        description: "Discord is another place where sextortion may indulge. Learn how to stop toxic users and content go viral at Discord's safety center."
      },

      {
        image:
          "https://famisafe.wondershare.com/images/images2022/stop-sextortion/tiktok.png",
        title: "Tik Tok",
        description: "Tik Tok provides efficient content to guide users to avoid sexual assault. It still advises you to a police station as no concrete help you can find."
      },

      {
        image:
          "https://images.openai.com/static-rsc-3/1YdZ5wGrqY7gpWa4EgM4QU2UhRueyseNw2Xfh_u3qtTnqr8V6h9FRlF81vhX2ajq-5PPsEWI1NZ4YL_Qo_mSTFy1qpSPVrm7cN_C0zA22fQ?purpose=fullsize",
        title: "Telegram",
        description: "Telegram is a Dubai-based technology company that operates the cloud-based messaging platform of the same name."
      }

    ]
  };
  const currentDataa = resourcesDataa[activetab];
  const tabss = [
    { key: "famisafe", label: "FamiSafe" },
    { key: "authority", label: "Authority" },
    { key: "social", label: "Social Media" }
  ];

  // ===== ALL TEXT DATA INSIDE SAME COMPONENT =====
  const data = {
    kids: {
      image:
        "https://famisafe.wondershare.com/images/images2022/stop-sextortion/kids-img.png",
      leftCards: [
        { title: "Don’t pay", description: "Do not pay anything. Not a penny, not one more picture of yourself, not any other demands. Any compromise will only encourage the criminals to push further.And don’t pretend it’s not happening—they might send out your photos.What you should do, is collect the evidence of sextortion. Keep a full record, including the identity information, meaning profile and personal homepage URL of the blackmailer, screenshots of chatting history, especially the part of extortion...." },
        { title: "Don't swallow it alone", description: "Before doing anything, get help from trusted friends, and adults better. You will need someone to talk to and give rightful advice.Taking it alone brings too much pressure and it may crash you." }
      ],
      rightCard: {
        title: "Tend to authorities",
        description: "Sextortion is a serious crime and you should ask authorities to involve. First, get help from social media platforms, for they breed the most sextortion and thus often set up coping mechanisms. Usually, they will guide you to protect your privacy from further disclosure and give you emotional help Go to the social media help page. Then, tend to the local police with the collected information. Or get help from online authorities—FBI, IC3 are fighting cybercrimes including sextortion. If you locate in the USA, Australia, or India, here we collect some useful sites for you."
      }
    },

    parents: {
      image:
        "https://famisafe.wondershare.com/images/images2022/stop-sextortion/parents-img.png",
      leftCards: [
        {
          title: "Increase the family bond",
          description: "Spend more time with your kids. Don’t leave your kids with iPad—they are exposed to online dangers in that case, but spend quality time as much as you can. Quality time means spending time with your kids and showing your love and care to them.This will not only keep them busy and forget about cell phones, but also empower them mentally and emotionally. Never look down on the time you spend with kids, it makes them a better men."
        },
        { title: "Proper education", description: "online, even to people they thought they can trust. This includes their full name, address, phone number, school name, and other identifying information. Also, online sex education is necessary today, especially about sexting and pornography. Learn more workable online safety tips here." }
      ],
      rightCard: {
        title: "Use a monitoring app",
        description: "A parental control app can protect kids from most inappropriate texts, images, or videos as well as online predators. If you’re going to teach kids about responsible online behavior to avoid online dangers, better start with a parental control app. Here take FamiSafe as an example of how to stop sextortion. Feature 1: App blocker FamiSafe can stop most social media apps, from Snapchat to discord, which breed the most sexting and sextortion. That's how you put out the fire before it spreads. Feature 2: texts and pictures detection FamiSafe can warn you when it captures suspicious texts and pictures. Use FamiSafe to monitor WhatsApp, Skype, and SMS, as well as stop toxic texts and pictures flying. Feature 3: Customize suspicious words FamiSafe allows you to add any text you want to monitor. Add words that are related to sextortion, so you can stop the crime ASAP."
      }
    }
  };


  const currentData = data[activeTab] || { leftCards: [], rightCard: {}, image: "" };
  // ===== DATA =====






  return (
    <section className="w-full overflow-hidden px-4 sm:px-6 bg-[#3F3158]">
      <div className="max-w-7xl mx-auto">

        {/* HEADER SECTION */}
        <div className="border-1 text-[#06EFB9] rounded-lg  w-full min-h-[70vh] flex flex-col sm:flex-row items-center justify-center gap-8 py-12">
          {/* LEFT SIDE CONTENT */}
          <div className="flex-1 text-center sm:text-left text-white ml-4">
            <h1 className="text-xl sm:text-xl font-bold leading-snug">
              #FamiSafe Online Safety Campaign 2022
              {/* {language === "en"
                ? translations.en.NextGen
                : language === "am"
                  ? translations.am.NextGen
                  : translations.om.NextGen} */}
            </h1>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-snug">
              Stop Sextortion with #FamiSupport
              {/* {language === "en"
                ? translations.en.NextGen
                : language === "am"
                  ? translations.am.NextGen
                  : translations.om.NextGen} */}
            </h1>

            <p className="mt-4 text-sm sm:text-base">
              Average parents may not be familiar with sextortion, let alone imagine how commonly seen it is on social media platforms. Are your family members targeted by online predators? Now take our quiz to learn if such a crime threatens your family, and share your result to remind more people.
            </p>

            {/* CTA Button */}
            <div className="mt-6 flex justify-center sm:justify-start">
              <a
                href="https://famisafe.wondershare.com/main/sign-up"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2 font-semibold text-white rounded-full
                   bg-gradient-to-r from-purple-500 to-cyan-400 
                   hover:from-purple-600 hover:to-cyan-500 
                   transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
              >
                {language === "en"
                  ? translations.en.TryItFree
                  : language === "am"
                    ? translations.am.TryItFree
                    : translations.om.TryItFree}
              </a>
            </div>
          </div>
          <br />

          {/* RIGHT SIDE IMAGE */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://famisafe.wondershare.com/images/images2022/stop-sextortion/banner.png"
              alt="Banner"
              className="w-full max-w-xs sm:max-w-sm object-contain"
            />
          </div>
        </div>

        {/* MAIN CONTENT SECTION */}
        <div className="flex flex-col lg:flex-row w-full bg-[#4b3b63] text-white">

          {/* LEFT SIDEBAR - Desktop Only */}
          <aside className="hidden lg:block w-32 sticky top-20 text-center">
            <div className="bg-[#e9e6f2] text-gray-700 p-4 rounded-xl space-y-3">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`block p-3 rounded-lg transition ${activeSection === section.id
                    ? "bg-purple-600 text-white"
                    : "hover:bg-purple-200"
                    }`}
                >
                  {section.label}
                </a>
              ))}
            </div>
          </aside>

          {/* RIGHT CONTENT */}
          <main className="flex-1 lg:pl-8">

            {/* FACTS SECTION */}
            <section id="facts" className="py-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
                Facts about Sextortion
              </h2>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-[#3F3158] rounded-2xl shadow-lg overflow-hidden w-full sm:w-85">
                    <img
                      src={`https://famisafe.wondershare.com/images/images2022/stop-sextortion/sextortion-img${i}.png`}
                      className="w-full h-48 sm:h-56 object-cover"
                    />
                    <div className="p-4 text-center text-sm sm:text-base text-white">
                      {i === 1 && "60% increase in cases, 70% victims are minors."}
                      {i === 2 && "38% demand more photos, 29% sexual acts, 29% money."}
                      {i === 3 && "28% cases involved suicide attempts."}
                    </div>
                  </div>
                ))}
              </div>
              
            </section>
            <section id="facts" className="py-12">
              <div className="w-full min-h-[70vh] flex flex-col sm:flex-row items-center justify-center gap-8 py-12 ">
                {/* LEFT SIDE CONTENT */}
                <div className="flex-1 flex justify-center border-1 text-[#FB9608] rounded-lg">
                  <img
                    src="https://famisafe.wondershare.com/images/images2022/stop-sextortion/banner.png"
                    alt="Banner"
                    className="w-full max-w-xs sm:max-w-sm object-contain"
                  />
                </div>


                {/* RIGHT SIDE IMAGE */}


                <div className="flex-1 text-center sm:text-left text-white">
                  <h1 className="text-xl sm:text-2xl font-bold leading-snug">
                    #StopSextortion: The Facts about Sextortion that Parents Must Know. #FamiSupport
                  </h1>

                  <p className="mt-4 text-sm sm:text-base">
                    Do you know that Sextortion has become the fastest-growing and particularly dangerous crime against children? There's a 60% massive increase in sextortion cases, and 70% of the sextortion victims are minors. Watch this video with all of the latest facts and tactics of teen sextortion and learn how to support them with FamiSafe.
                  </p>


                </div>
              </div>
            </section>
            

            {/* QUIZ SECTION */}
            <section id="stop" className="py-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
                Quiz and Prize: How Close Can Sextortion Be?
              </h2>

              <div
                className="w-full flex flex-col items-center justify-start pt-8 px-2 sm:px-4 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    "url('https://famisafe.wondershare.com/images/images2022/stop-sextortion/splash-left.png')",
                }}
              >
                {/* STEP PROGRESS */}
                <div className="flex flex-wrap justify-center items-center mb-6 sm:mb-10 gap-2">
                  {questions.map((_, index) => (
                    <div key={index} className="flex items-center">
                      <div
                        className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full font-bold text-sm sm:text-base ${currentStep === index
                          ? "bg-white text-purple-700"
                          : "bg-white/30 text-white"
                          }`}
                      >
                        {index + 1}
                      </div>
                      {index !== questions.length - 1 && (
                        <div className="w-6 sm:w-16 h-1 bg-white/30"></div>
                      )}
                    </div>
                  ))}
                </div>

                {/* QUESTION CARD */}
                <div className="relative w-full max-w-xs sm:max-w-md bg-gray-100 rounded-3xl p-4 sm:p-8 shadow-xl">
                  <div className="absolute -top-4 left-4 sm:-top-5 sm:left-6 bg-purple-600 text-white px-3 py-1 rounded-t-xl rounded-br-xl text-sm sm:text-base font-semibold">
                    Question {currentStep + 1}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold mt-6 mb-4 sm:mb-6 text-black">
                    {questions[currentStep].question}
                  </h3>

                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-black">
                    {questions[currentStep].options.map((option, index) => (
                      <label key={index} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name={`question-${currentStep}`}
                          value={option}
                          checked={answers[currentStep] === option}
                          onChange={() => handleOptionChange(option)}
                          className="w-4 h-4 sm:w-5 sm:h-5 accent-purple-600"
                        />
                        <span
                          className={answers[currentStep] === option ? "text-purple-600 font-medium" : ""}
                        >
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-center mt-4 sm:mt-6 gap-3 sm:gap-0">
                    <button
                      onClick={handleBack}
                      disabled={currentStep === 0}
                      className={`font-semibold ${currentStep === 0
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-purple-600 hover:underline"
                        }`}
                    >
                      &lt;&lt; Back
                    </button>

                    {currentStep === questions.length - 1 ? (
                      <button
                        onClick={handleSubmit}
                        className="text-purple-600 font-semibold hover:underline"
                      >
                        Submit
                      </button>
                    ) : (
                      <button
                        onClick={handleNext}
                        className="text-purple-600 font-semibold hover:underline"
                      >
                        Next &gt;&gt;
                      </button>
                    )}
                  </div>
                </div>

                {/* MODAL */}
                {showModal && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4">
                    <div className="bg-white rounded-3xl p-4 sm:p-8 w-full max-w-xs sm:max-w-md text-center shadow-2xl relative">
                      <button
                        onClick={() => setShowModal(false)}
                        className="absolute top-2 sm:top-3 right-2 sm:right-3 text-gray-500 hover:text-black text-lg sm:text-xl"
                      >
                        ✕
                      </button>
                      <div className="flex justify-center mb-4 sm:mb-6">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-400 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl">
                          <AiFillFrown />
                        </div>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-green-600 mb-2 sm:mb-4">
                        Safe home!
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700">
                        Parents are the first most kids will turn to when facing online dangers.
                        To protect them from digital threats, parents must know what kids are doing online.
                      </p>
                      <button
                        onClick={handleRestart}
                        className="mt-4 sm:mt-6 bg-green-500 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-green-600 transition"
                      >
                        Restart Quiz
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* ADDITIONAL SECTIONS */}
            <section id="cases" className="py-12">
              <div className="border bg-white max-w-7xl mx-auto rounded-lg ">

                {/* ================= TITLE ================= */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
                  Learn with FamiSafe: How to Stop Sextortion
                </h2>

                {/* ================= TABS ================= */}
                <div className="flex justify-center items-start gap-6 md:gap-12 mb-14 px-4">

                  <button
                    onClick={() => setActiveTab("kids")}
                    className={`flex flex-col items-center text-center transition duration-300 ${activeTab === "kids"
                      ? "text-purple-600"
                      : "text-gray-500 hover:text-purple-500"
                      }`}
                  >
                    <img
                      src="https://famisafe.wondershare.com/images/images2022/stop-sextortion/kids.png"
                      alt="Kids Action"
                      className={`w-12 h-12 md:w-14 md:h-14 rounded-full mb-3 border-4 transition ${activeTab === "kids"
                        ? "border-purple-600"
                        : "border-transparent"
                        }`}
                    />
                    <span className="font-medium text-sm md:text-base leading-snug">
                      Workable Action for Kids
                    </span>
                  </button>

                  <button
                    onClick={() => setActiveTab("parents")}
                    className={`flex flex-col items-center text-center transition duration-300 ${activeTab === "parents"
                      ? "text-purple-600"
                      : "text-gray-500 hover:text-purple-500"
                      }`}
                  >
                    <img
                      src="https://famisafe.wondershare.com/images/images2022/stop-sextortion/parents.png"
                      alt="Parents Prevention"
                      className={`w-12 h-12 md:w-14 md:h-14 rounded-full mb-3 border-4 transition ${activeTab === "parents"
                        ? "border-purple-600"
                        : "border-transparent"
                        }`}
                    />
                    <span className="font-medium text-sm md:text-base leading-snug">
                      Prevention and Intervention for Parents
                    </span>
                  </button>

                </div>


                {/* ================= CONTENT ================= */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

                  {/* LEFT SIDE CARDS */}
                  <div className="space-y-6">
                    {currentData.leftCards.map((card, index) => (
                      <div
                        key={index}
                        className="bg-[#E9FCF9] p-6 rounded-2xl shadow-sm hover:shadow-md transition"
                      >
                        <h4 className="text-purple-600 font-semibold mb-2">
                          {card.title}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CENTER IMAGE */}
                  <img
                    key={activeTab}
                    src={currentData.image}
                    alt=""
                    className="hidden md:block rounded-3xl w-full max-w-sm shadow-lg transition-all duration-500"
                  />



                  {/* RIGHT SIDE CARD */}
                  <div>
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                      <h4 className="text-purple-600 font-semibold mb-3">
                        {currentData.rightCard.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {currentData.rightCard.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* ================= BUTTON ================= */}
                <div className="flex justify-center mt-16">
                  <button className="px-12 py-4 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition duration-300">
                    Try Free
                  </button>
                </div>

              </div>
            </section>

            <section id="resources" className="py-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Sextortion Real Cases</h2>

              <div className="w-full min-h-[70vh] flex flex-col sm:flex-row items-center justify-center gap-8 py-12">
                {/* LEFT SIDE CONTENT */}
                <div className="flex-1 text-center sm:text-left text-white">




                  {/* CTA Button */}
                  <div className="flex-1 flex justify-center">
                    <img
                      src="https://famisafe.wondershare.com/images/images2022/stop-sextortion/cases1.png"
                      alt="Banner"
                      className="w-full max-w-xs sm:max-w-sm object-contain"
                    />
                  </div>


                </div>

                {/* RIGHT SIDE IMAGE */}
                <div className="flex-1 flex justify-center">
                  <img
                    src="https://famisafe.wondershare.com/images/images2022/stop-sextortion/cases2.png"
                    alt="Banner"
                    className="w-full max-w-xs sm:max-w-sm object-contain"
                  />
                </div>
              </div>
            </section>

            <section id="resources" className="rounded-lg py-16 bg-[#f3eef9]">
              <div className="max-w-7xl mx-auto px-4 ">

                {/* ===== TITLE ===== */}
                <h2 className="text-4xl font-bold text-center mb-12 text-black">
                  Resources: Learn How to Stop Sextortion
                </h2>

                {/* ===== TABS ===== */}
                <div className="mb-14 overflow-x-auto">
                  <div className="flex md:justify-center gap-8 md:gap-12 w-max md:w-full px-2 md:px-0">
                    {tabss.map((tab) => (
                      <button
                        key={tab.key}
                        onClick={() => setActivetab(tab.key)}
                        className={`whitespace-nowrap text-sm md:text-sm font-bold pb-2  transition ${activetab === tab.key
                          ? "text-purple-600 border-purple-600"
                          : "text-gray-500 border-transparent hover:text-purple-500"
                          }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>


                {/* ===== CONTENT ===== */}
                <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-3 ">

                  {/* FamiSafe Tab */}
                  {activetab === "famisafe" &&
                    currentDataa.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-52 object-cover"
                        />
                        <div className="p-6">
                          <h3 className="text-purple-600 text-xl font-bold underline mb-4">
                            {item.title}
                          </h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}

                  {/* Authority Tab */}
                  {activetab === "authority" &&
                    currentDataa.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-3xl  p-8 shadow-md flex flex-col justify-between hover:shadow-xl transition"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-10 h-10 rounded-full  object-cover  "
                        />
                        <p className="font-semibold text-lg mb-6 text-center text-black">
                          {item.title}
                        </p>
                        <a
                          href="#"
                          className="text-purple-600 underline font-medium text-center"
                        >
                          {item.linkText}
                        </a>
                      </div>
                    ))}

                  {/* Social Media Tab */}
                  {activetab === "social" &&
                    currentDataa.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-3xl p-8 shadow-md text-center hover:shadow-xl transition"
                      >

                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-10 h-10 rounded-full  object-cover   "
                        />
                        <h3 className="text-xl font-semibold text-purple-600 mb-4">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    ))}

                </div>
              </div>
            </section>

            <section id="resources" className="py-12">
              
              {/* ================= FIRST SECTION ================= */}
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">

                {/* IMAGE */}
                <div className="flex-1 relative flex justify-center order-1 md:order-1">
                  <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-100 rounded-full opacity-40 -z-10"></div>

                  <img
                    src="https://famisafe.wondershare.com/images/images-2021/cyberbulling/detect_cyberbulling.png"
                    alt="Turn on Google SafeSearch"
                    className="w-full max-w-md md:max-w-xl"
                  />
                </div>

                {/* TEXT */}
                <div className="flex-1 order-2 md:order-2">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">FamiSafe: Detect Risky Content on Phone</h2>
                  <h2 className="text-xl md:text-2xl font-semibold text-purple-600 mb-6 md:mb-8 leading-snug">
                    24/7 detection for social media texts
                  </h2>
                  

                  <ul className="space-y-2 text-white text-sm">
                    {[
                      "Track risky messages, search history and kid's posts",
                      "Send instant alerts when potential issues are detected",
                      "Add self-defined suspicious keywords",
                      "Monitor 10+ main social media platforms, and more to add",
                      "*Enjoy a three-day free trial now!",
                    ].map((step, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-500 text-white text-sm font-semibold shrink-0">
                          {index + 1}
                        </span>
                        <p className="text-base md:text-lg text-white leading-relaxed">
                          {step}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </section>

          </main>
        </div>

      </div>
    </section>
  );
}








