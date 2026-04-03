import React from 'react'

export default function NoCyberbullying() {
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
      </div>
    </section>
  )
}
