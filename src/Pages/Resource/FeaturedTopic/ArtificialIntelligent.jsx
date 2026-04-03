import React, { useState } from 'react'
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../Data/translations';
import { FaLocationDot } from 'react-icons/fa6';
import { IoIosTime } from 'react-icons/io';
import { AiTwotoneAlert } from 'react-icons/ai';
import { MdAppBlocking } from 'react-icons/md';

export default function ArtificialIntelligent() {
  const { language } = useLanguage();
  const [selected, setSelected] = useState(null);

  const levels = [
    { id: 1, label: "Low Risk", value: 63 },
    { id: 2, label: "Minimal Risk", value: 28 },
    { id: 3, label: "High Risk", value: 81 },
    { id: 4, label: "Unacceptable Risk", value: 42 },
  ];
  const cards = [
    {

      image: "https://famisafe.wondershare.com/images/images-2024/attitude/pic-attention1.png",
    },
    {
      image: "https://famisafe.wondershare.com/images/images-2024/attitude/pic-attention2.png",
    },
    {
      image: "https://famisafe.wondershare.com/images/images-2024/attitude/pic-attention3.png",
    },

  ];

  return (
    <section className="w-full overflow-hidden px-4 sm:px-6 lg:px-0 bg-white">
      <div className="max-w-7xl mx-auto">


        <div className="max-w-6xl bg-gradient-to-br from-[#F3EDFF] via-white to-[#D0F4EE] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">

            {/* Small Tag Image */}
            <div className="flex justify-center lg:justify-start mb-4">
              <img
                src="https://famisafe.wondershare.com/images/images-2024/attitude/icon-banner-tag.png"
                alt="Banner Tag"
                className="w-40 sm:w-52 md:w-60 drop-shadow-xl"
              />
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight
        bg-gradient-to-r from-purple-600 via-[#5FB0AE] to-[#04FCF8]
        bg-clip-text text-transparent">
              Share Your Attitude And Parenting Tips
            </h2>

            {/* Hashtags */}
            <div className="mt-8 flex flex-col items-center lg:items-start gap-4">

              {/* Top */}
              <p className="bg-white/70 backdrop-blur-md text-gray-700 
                      px-6 py-3 rounded-xl shadow-sm 
                      text-sm sm:text-base font-medium">
                #FamiSafebonusplan2024
              </p>

              {/* Bottom Two */}
              <div className="flex flex-col sm:flex-row gap-4">
                <p className="bg-white/70 backdrop-blur-md text-gray-700 
                        px-6 py-3 rounded-xl shadow-sm 
                        text-sm sm:text-base font-medium text-center">
                  #FamiSafebonusplan2024
                </p>

                <p className="bg-white/70 backdrop-blur-md text-gray-700 
                        px-6 py-3 rounded-xl shadow-sm 
                        text-sm sm:text-base font-medium text-center">
                  #FamiSafebonusplan2024
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href="https://famisafe.wondershare.com/main/sign-up"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center 
                     px-8 py-3 text-base sm:text-lg font-semibold 
                     text-white rounded-xl
                     bg-gradient-to-r from-purple-600 to-cyan-500
                     hover:from-purple-700 hover:to-cyan-600
                     transition-all duration-300 
                     shadow-md hover:shadow-xl">
                {language === "en"
                  ? translations.en.StartFreeTrial
                  : language === "am"
                    ? translations.am.StartFreeTrial
                    : language === "om"
                      ? translations.om.StartFreeTrial
                      : ""}
              </a>
            </div>

            {/* Contest Time */}
            <p className="mt-6 text-sm sm:text-base text-gray-600 text-center lg:text-left">
              Contest Time: May 24, 2024 – June 24, 2024 (UTC+8)
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="https://famisafe.wondershare.com/images/images-2024/attitude/pic-banner.png"
              alt="App Preview"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl drop-shadow-2xl"
            />
          </div>

        </div>

        <div className="max-w-4xl mx-auto text-center">

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                   font-bold text-gray-800 leading-tight">
            Every Parent Has A Preference! Tell Us Your Attitude!
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-600 text-base sm:text-lg md:text-xl 
                  leading-relaxed">
            The rapid advancement of technology, especially in Artificial Intelligence (AI),
            has permeated almost every aspect of modern life, including education.
            With tools like ChatGPT serving as educational aids, it’s important to take a look
            at how parents think and feel about such technologies and the impact they will have
            on their students.
          </p>

        </div>
        <br />

        <div className="bg-[#E9FCF8] rounded-2xl max-w-6xl mx-auto  px-6 sm:px-8 lg:px-12 py-10 sm:py-14 lg:py-16 shadow-sm ">

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight text-center">
            Every Parent Has A Preference! Tell Us Your Attitude!
          </h1>

          {/* Image */}
          <div className="mt-10">
            <img
              src="https://famisafe.wondershare.com/images/images-2024/attitude/pic-level.png"
              alt="Level Banner"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>
        <br />
        <br />
        <div className="bg-[#F5F0FF] rounded-2xl max-w-6xl mx-auto  px-6 sm:px-8 lg:px-12 py-10 sm:py-14 lg:py-16 shadow-sm ">

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight text-center">
            In Aspect Of Kid Education, Please Tell Us <br />
            Which Level Of Risks You Care Most?
          </h1>

          <div className="max-w-5xl mx-auto py-10 px-4 bg-white rounded-xl">
            {levels.map((level) => (
              <div
                key={level.id}
                className={`flex items-center justify-between border rounded-lg p-4 mb-4 cursor-pointer transition-colors ${selected === level.id ? "border-purple-600 bg-purple-50" : "border-gray-300 bg-white"
                  }`}
                onClick={() => setSelected(level.id)}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="risk"
                    checked={selected === level.id}
                    onChange={() => setSelected(level.id)}
                    className="w-5 h-5 text-purple-600 accent-purple-600"
                  />
                  <span className="font-semibold text-gray-800">{level.label}</span>
                </div>
                <span className="font-medium text-gray-500">{level.value}</span>
              </div>
            ))}

            <p className="text-center text-gray-600 mt-6">
              Let’s see how many parents standing with you!
            </p>
          </div>
        </div>
        <br />
        <br />


        <div className="bg-[#F5F0FF] rounded-2xl max-w-6xl mx-auto  px-6 sm:px-8 lg:px-12 py-10 sm:py-14 lg:py-16 shadow-sm ">

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight text-center">
            In Aspect Of Kid Education, Please Tell Us <br />
            Which Level Of Risks You Care Most?
          </h1>

          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`${card.color} text-white rounded-lg shadow-md p-6 flex flex-col justify-between min-h-[400px]`}
                >
                  {card.image && (
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-100 object-cover rounded mb-4"
                    />
                  )}
                  <h2 className="font-bold text-lg mb-4">{card.title}</h2>
                  <p className="text-sm">{card.description}</p>
                  <button className="mt-4 bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-200">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            {/* Description */}
            <p className="mt-6 text-gray-600 text-base sm:text-lg md:text-xl 
                  leading-relaxed">
              The rapid advancement of technology, especially in Artificial Intelligence (AI),
              has permeated almost every aspect of modern life, including education.
              With tools like ChatGPT serving as educational aids, it’s important to take a look
              at how parents think and feel about such technologies and the impact they will have
              on their students.
            </p>

          </div>
          <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-lg">
              {/* LEFT SIDE - IMAGE */}
              <div className="flex justify-center items-center bg-[#E0EFF8] rounded-lg">
                <div className="relative">
                  <img
                    src="https://famisafe.wondershare.com/images/images-2024/attitude/pic-phone.png" // replace with your image path
                    alt="FamiSafe Screen Viewer"
                    className="w-full max-w-sm rounded-xl shadow-xl"
                  />
                  {/* Optional overlay elements if you want to replicate exclamation icons etc. */}
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                    !
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE - FORM */}
              <div className="bg-purple-100 p-6 rounded-lg flex flex-col justify-between">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                  Your Solution
                </h2>

                <textarea
                  placeholder="Your Parenting Best Tip to Face the AI Challenge in Kid Education.(Characters should be 50 at least)"
                  className="w-full h-48 p-4 rounded-lg border border-gray-300 mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white"
                ></textarea>

                <input
                  type="email"
                  placeholder="Your Contact Email Address"
                  className="w-full p-3 rounded-lg border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white"
                />

                <button className="bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                  Submit Your Information
                </button>
              </div>
            </div>
          </div>

        </div>
        <br />
        <br />
        <div className="bg-gradient-to-r from-[#E2F8F5] via-[#A0C9C9] to-[#E8EEEE] rounded-2xl max-w-6xl mx-auto  px-6 sm:px-8 lg:px-12 py-10 sm:py-14 lg:py-16 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* LEFT SIDE - IMAGE */}
          <div className="flex justify-center items-center bg-[#E0EFF8] rounded-lg">
            <div className="relative">
              <img
                src="https://famisafe.wondershare.com/images/images-2024/attitude/pic-phone1.png" // replace with your image path
                alt="FamiSafe Screen Viewer"
                className="w-full max-w-sm rounded-xl shadow-xl"
              />
              {/* Optional overlay elements if you want to replicate exclamation icons etc. */}
              <div className="absolute top-4 left-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                !
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="p-6 rounded-lg flex flex-col gap-4 ">
            {/* Item with icon */}
            <div className="flex items-center gap-3 bg-[#93B2D4] rounded-lg ">
              {/* Icon */}
              <div className="text-purple-600 text-2xl h-20 w-10">
                <IoIosTime />
                
              </div>
              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Screen Time Balance</h3>
                <p className="text-gray-700 text-sm mt-1">
                  Control screen time kids spend online, prevent screen addiction, preserve family time,
                  and set up daily routines with smart schedules for kids.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3  bg-[#9CFEC8] rounded-lg">
              {/* Icon */}
              <div className="text-purple-600 text-2xl">
               <MdAppBlocking />
              </div>
              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Block App & Inappropriate Content</h3>
                <p className="text-gray-700 text-sm mt-1">
                  Limit usage on some specific apps or games, automatically filter potentially harmful content to prevent exposure to mature content, gambling, violence, and other threats.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-[#ffffff] rounded-lg">
              {/* Icon */}
              <div className="text-purple-600 text-2xl text-center">
                <FaLocationDot />
                
              </div>
              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Live Location & Geofences</h3>
                <p className="text-gray-700 text-sm mt-1">
                  View Kids' Real-Time Location and location history, receive an alert when the kids leave the set geofences.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-[#E6ECEB] rounded-lg">
              {/* Icon */}
              <div className="text-purple-600 text-2xl">
                <AiTwotoneAlert />
              </div>
              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800">SOS Alert Function</h3>
                <p className="text-gray-700 text-sm mt-1">
                  Reserve a Panic Button for Kids that instantly connects your child with you in case of an emergency. Know your child’s exact GPS location and receive a loud sound alert on your phone, even when it’s in silent mode.
                </p>
              </div>
            </div>
          </div>


        </div>

      </div>
    </section>
  )
}