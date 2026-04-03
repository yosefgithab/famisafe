import React, { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../Data/translations';

export default function FamilyStories() {
  const language = useLanguage();
  // States for each counter
  const [stories, setStories] = useState(0);
  const [scenarios, setScenarios] = useState(0);
  const [families, setFamilies] = useState(0);

  useEffect(() => {
    const duration = 2000; // total duration of the count in ms
    const intervalTime = 50; // how often to update in ms

    // Calculate increments
    const storiesIncrement = Math.ceil(50 / (duration / intervalTime));
    const scenariosIncrement = Math.ceil(14 / (duration / intervalTime));
    const familiesIncrement = Math.ceil(180000 / (duration / intervalTime));

    const interval = setInterval(() => {
      setStories(prev => (prev + storiesIncrement >= 50 ? 50 : prev + storiesIncrement));
      setScenarios(prev => (prev + scenariosIncrement >= 14 ? 14 : prev + scenariosIncrement));
      setFamilies(prev => (prev + familiesIncrement >= 180000 ? 180000 : prev + familiesIncrement));
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  // Helper to format numbers with commas
  const formatNumber = num => num.toLocaleString();
  /// Table of contents
  const tabs = [
    "All",
    "Social Media",
    "Location Tracking",
    "Screen Time Limit",
    "Apps Control",
    "Online Risks",
    "Alerts",
    "AI Safety",
  ];

  const allCards = [
    // Social Media (7)
    { id: 1, category: "Social Media", title: "How I Uncovered the Instagram Group That Was Destroying My Daughter's Confidence", author: "Natalie Harper — Mother · Ohio, U.S.", img: "https://famisafe.wondershare.com/images/user-story/harper-story.jpg" },
    { id: 2, category: "Social Media", title: "How I Stopped a Predator from Manipulating My Son Through Snapchat Messages", author: "David Williams — Father · California, U.S.", img: "https://famisafe.wondershare.com/images/user-story/williams-story.jpg" },
    { id: 3, category: "Social Media", title: "How I Discovered the Dangerous TikTok Content That Was Hurting My Daughter", author: "Sarah Caldwell — Mother · Texas, U.S.", img: "https://famisafe.wondershare.com/images/user-story/caldwell-story.jpg" },
    { id: 4, category: "Social Media", title: "How I Uncovered Drug Slang in My Son's WhatsApp Group Chat", author: "Michael Barrett — Father · Florida, U.S.", img: "https://famisafe.wondershare.com/images/user-story/barrett-story.jpg" },

    // Location Tracking (7)
    { id: 8, category: "Location Tracking", title: "How YouTube's Algorithm Exposed My Child to Violent Content", author: "Elena Ruiz — Mother · Nevada, U.S.", img: "https://famisafe.wondershare.com/images/user-story/collins-family.jpg" },
    { id: 9, category: "Location Tracking", title: "I Track My Son's Walk to School Every Day", author: "By Sam", img: "https://famisafe.wondershare.com/images/user-story/grant-family.jpg" },
    { id: 10, category: "Location Tracking", title: "Story 10", author: "By Laura", img: "https://famisafe.wondershare.com/images/user-story/hayes-family.jpg" },
    { id: 11, category: "Location Tracking", title: "Story 11", author: "By Chris", img: "https://famisafe.wondershare.com/images/user-story/keller-family.jpg" },

    // Screen Time Limit (7)
    { id: 15, category: "Screen Time Limit", title: "Story 15", author: "By Anna", img: "https://famisafe.wondershare.com/images/user-story/pemberton-story.jpg" },
    { id: 16, category: "Screen Time Limit", title: "Story 16", author: "By Kevin", img: "https://famisafe.wondershare.com/images/user-story/ashford-family.jpg" },
    { id: 17, category: "Screen Time Limit", title: "Story 17", author: "By Tom", img: "https://famisafe.wondershare.com/images/user-story/martinez-story.jpg" },

    // Apps Control (7)
    { id: 22, category: "Apps Control", title: "Story 22", author: "By James", img: "https://famisafe.wondershare.com/images/user-story/anders-story.jpg" },
    { id: 23, category: "Apps Control", title: "Story 23", author: "By Olivia", img: "https://famisafe.wondershare.com/images/user-story/schmidt-story.jpg" },
    { id: 24, category: "Apps Control", title: "Story 24", author: "By Noah", img: "https://famisafe.wondershare.com/images/user-story/gallagher-story.jpg" },
    { id: 25, category: "Apps Control", title: "Story 25", author: "By Mia", img: "https://famisafe.wondershare.com/images/user-story/vance-story.jpg" },


    // Online Risks (7)

    { id: 5, category: "Social Media", title: "Story 5", author: "By Sara", img: "https://famisafe.wondershare.com/images/user-story/ruiz-story.jpg" },
    { id: 6, category: "Social Media", title: "Story 6", author: "By Daniel", img: "https://famisafe.wondershare.com/images/user-story/johnson-and-son.jpg" },
    { id: 7, category: "Social Media", title: "Story 7", author: "By Emma", img: "https://famisafe.wondershare.com/images/user-story/carter-and-2-sons.jpg" },

    // Alerts (7)

    { id: 12, category: "Location Tracking", title: "Story 12", author: "By Mike", img: "https://famisafe.wondershare.com/images/user-story/donnelly-family.jpg" },
    { id: 13, category: "Location Tracking", title: "Story 13", author: "By Diana", img: "https://famisafe.wondershare.com/images/user-story/cartwright-story.jpg" },
    { id: 14, category: "Location Tracking", title: "Story 14", author: "By Peter", img: "https://famisafe.wondershare.com/images/user-story/fosbrook-story.jpg" },
    { id: 26, category: "Apps Control", title: "Story 26", author: "By Lucas", img: "https://famisafe.wondershare.com/images/user-story/moreno-family.jpg" },


    // AI Safety (8)

    { id: 18, category: "Screen Time Limit", title: "Story 18", author: "By Rose", img: "https://famisafe.wondershare.com/images/user-story/sullivan-story.jpg" },
    { id: 19, category: "Screen Time Limit", title: "Story 19", author: "By Mark", img: "https://famisafe.wondershare.com/images/user-story/park-story.jpg" },
    { id: 20, category: "Screen Time Limit", title: "Story 20", author: "By Paul", img: "https://famisafe.wondershare.com/images/user-story/peterson-story.jpg" },
    { id: 21, category: "Screen Time Limit", title: "Story 21", author: "By Linda", img: "https://famisafe.wondershare.com/images/user-story/davis-story.jpg" },
  ];


  const [activeTab, setActiveTab] = useState("All");

  // Refs for each category section
  const sectionRefs = useRef({});

  // Scroll listener for automatic tab activation
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // adjust offset

      for (const tab of tabs) {
        if (tab === "All") continue;
        const section = sectionRefs.current[tab];
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(tab);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter cards by active tab
  const filteredCards =
    activeTab === "All"
      ? allCards
      : allCards.filter((card) => card.category === activeTab);
  /// Timeline data slider

  const testimonials = [
    { id: 1, text: "Suspicious contact alerts helped us protect our daughter from online predators.", name: "Zoe Kim", role: "Mother · Phoenix, AZ", image: "https://randomuser.me/api/portraits/women/44.jpg" },
    { id: 2, text: "Finally, peace of mind when my kids walk to school.", name: "Maya Patel", role: "Mother · Austin, TX", image: "https://randomuser.me/api/portraits/women/68.jpg" },
    { id: 3, text: "Bedtime screen battles are finally over.", name: "Caleb Mitchell", role: "Father · Seattle, WA", image: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 4, text: "Location tracking gives us confidence.", name: "Daniel Lee", role: "Father · Denver, CO", image: "https://randomuser.me/api/portraits/men/45.jpg" },
    { id: 5, text: "We love how easy it is to manage screen time.", name: "Sophia Brown", role: "Mother · Miami, FL", image: "https://randomuser.me/api/portraits/women/12.jpg" },
    { id: 6, text: "A must-have app for modern parents.", name: "James Wilson", role: "Father · Chicago, IL", image: "https://randomuser.me/api/portraits/men/75.jpg" },
    { id: 7, text: "Our family communication improved.", name: "Emma Davis", role: "Mother · Dallas, TX", image: "https://randomuser.me/api/portraits/women/23.jpg" },
    { id: 8, text: "The alerts are very accurate and helpful.", name: "Michael Clark", role: "Father · Boston, MA", image: "https://randomuser.me/api/portraits/men/81.jpg" },
  ];
  const [current, setCurrent] = useState(0);

  const itemsPerSlide = typeof window !== "undefined" && window.innerWidth >= 768 ? 3 : 1;
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);
  function Card({ item }) {
    return (
      <div className="bg-white rounded-3xl p-8 shadow-md relative min-h-[320px] flex flex-col justify-between">
        <div className="absolute -top-4 left-6 w-10 h-10 bg-purple-100 rounded-full" />
        <p className="text-lg font-semibold text-gray-900 leading-relaxed mb-10">
          {item.text}
        </p>
        <div className="flex items-center gap-4">
          <img
            src={item.image}
            alt={item.name}
            className="w-14 h-14 rounded-xl object-cover"
          />
          <div>
            <h4 className="font-bold text-gray-900">{item.name}</h4>
            <p className="text-gray-500 text-sm">{item.role}</p>
          </div>
        </div>
      </div>
    );
  }
  // End timeline data slider





  return (
    <section className="w-full px-4 sm:px-6 lg:px-0">
      <div className='max-w-7xl mx-auto'>
        <div className="bg-gradient-to-b from-purple-200 to-purple-100 text-center py-16 px-4 rounded-[15px]">
          {/* Header */}
          <div className="bg-gradient-to-b from-purple-100 to-purple-200 max-w-2xl mx-auto space-y-4 rounded-lg">
            <p className="text[#7A57EE] font-medium text-lg">
              180,000+ Families Trust FamiSafe
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-black">
              Real Families, Real Stories
            </h2>
            <p className="text-gray-700 text-lg">
              See how families worldwide protect their children and build trust with FamiSafe
            </p>

            <button className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-400 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition">
              Start Your Story
            </button>
          </div>
          {/* End Header */}

          {/* Stats */}
          {/* Stats - Mobile Only Horizontal */}
          <div className="sm:hidden mt-12 overflow-x-auto">
            <div className="flex gap-8 w-max px-4">
              <div className="flex flex-col items-center">
                <p className="text-3xl font-bold text-[#7A57EE]">{stories}+</p>
                <p className="text-gray-700 mt-1">Real Stories</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-3xl font-bold text-[#7A57EE]">{scenarios}+</p>
                <p className="text-gray-700 mt-1">Safety Scenarios</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-3xl font-bold text-[#7A57EE]">{formatNumber(families)}+</p>
                <p className="text-gray-700 mt-1">Families Protected</p>
              </div>
            </div>
          </div>

          {/* Desktop Stats - Keep Original (Not Affected) */}
          <div className=" hidden sm:flex mt-12 r flex-col sm:flex-row justify-center gap-12 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-[#7A57EE]">{stories}+</p>
              <p className="text-gray-700 mt-1">Real Stories</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-[#7A57EE]">{scenarios}+</p>
              <p className="text-gray-700 mt-1">Safety Scenarios</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-[#7A57EE]">{formatNumber(families)}+</p>
              <p className="text-gray-700 mt-1">Families Protected</p>
            </div>
          </div>
          {/* End Stats */}


        </div>
        <br />


        {/* Tabs */}
        <div className="sticky top-14 z-40 bg-[#f0f0f0]">
          <div className="rounded-[15px] flex justify-center space-x-4 overflow-x-auto pb-2 border-b relative">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  if (tab !== "All" && sectionRefs.current[tab]) {
                    window.scrollTo({
                      top: sectionRefs.current[tab].offsetTop - 120,
                      behavior: "smooth",
                    });
                  }
                }}
                className={`relative whitespace-nowrap px-4 py-2 font-medium transition ${activeTab === tab
                  ? "text-purple-700"
                  : "text-gray-600 hover:text-purple-700"
                  }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute left-0 right-0 bottom-0 h-1 bg-purple-600 rounded-full transition-all duration-300"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Card sections */}
        <div className="mt-8 space-y-12">
          {tabs.map((tab) => {
            const cards =
              tab === "All" ? allCards : allCards.filter((c) => c.category === tab);
            if (cards.length === 0) return null;

            return (
              <div
                key={tab}
                data-tab={tab}
                ref={(el) => (sectionRefs.current[tab] = el)}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cards.map((card) => (
                    <div
                      key={card.id}
                      className="relative bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      <div className="relative group w-full">
                        {/* Responsive Full Image */}
                        <img
                          src={card.img}
                          alt={card.title}
                          className="w-full h-64 md:h-72 lg:h-80 xl:h-96 object-cover"
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-lg font-semibold transition-opacity duration-300">
                          {card.author}
                        </div>
                        {/* Category badge */}
                        <div className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-80">
                          {card.category}
                        </div>
                      </div>
                      {/* Card Content */}
                      <div className="p-4">
                        <h3 className="font-bold text-lg">{card.title}</h3>
                        <p className="text-gray-600 mt-1">{card.author}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        {/* End Tabs */}
        <br />
        <br />

        {/* Testimonials Slider */}



        <br />
        <br />
        <div className="max-w-7xl mx-auto px-4 bg-[#F8F6FF] rounded-3xl py-16">
          <div className="max-w-4xl mx-auto text-center py-20 px-4 ">
            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-6">
              What Parents Are Saying
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Real feedback from families who transformed their digital parenting with FamiSafe.
            </p>
          </div>

          {/* SLIDER */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700"
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="min-w-full grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                  {testimonials
                    .slice(
                      slideIndex * itemsPerSlide,
                      slideIndex * itemsPerSlide + itemsPerSlide
                    )
                    .map((item) => (
                      <Card key={item.id} item={item} />
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* DOTS (Desktop + Mobile) */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 ${current === index
                  ? "w-8 bg-purple-500"
                  : "w-2 bg-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>
        <br />

        <div className="bg-[#322163] mx-auto max-w-6xl rounded-3xl bg-gradient-to-r from-purple-700 to-indigo-700 px-6 py-16 md:px-12 md:py-20 text-white">
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

                <span className="text-lg font-semibold">
                  {translations?.[language]?.FamiSafe ?? "FamiSafe"}
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-semibold max-w-xl">
                {translations?.[language]?.TheMostReliable ?? "The Most Reliable"}
              </h2>
            </div>

            {/* RIGHT SIDE (Buttons) */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="rounded-full bg-[#8B5CF6] px-8 py-3 text-base font-semibold hover:bg-[#7C3AED] transition">
                {translations?.[language]?.TryitFrees ?? "Try it Free"}
              </button>

              <button className="rounded-full border-2 border-[#8B5CF6] px-8 py-3 text-base font-semibold text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white transition">
                {translations?.[language]?.BuyNow ?? "Buy Now"}
              </button>
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}



