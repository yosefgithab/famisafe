import React from 'react';

export default function MediaReview() {
  return (
    <section className="w-full overflow-hidden px-4 sm:px-6 lg:px-0">
      <div className='max-w-7xl mx-auto '>
        <div className="rounded-[15px] relative w-full h-[65vh] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://famisafe.wondershare.com/images/article-info/review-1.png')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0  bg-opacity-40"></div>

          {/* Content */}
          <div className="relative text-center px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Welcome to Our Platform
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-6">
              Discover amazing features, user reviews, and community support.
            </p>
          </div>
        </div>
         <br />
          {/* End section  */}
          <div className=" rounded-[15px] bg-black max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

            {/* LEFT SIDE (50%) */}
            <div className="space-y-6 ml-8">

              {/* Logo + Title */}
              <div className="flex items-center gap-4">
                <img
                  src="https://neveragain.allstatics.com/2019/assets/icon/logo/famisafe-square.svg"   // replace with your logo
                  alt="FamiSafe Logo"
                  className="w-16 h-16 rounded-2xl"
                />
                <div>
                  <h1 className="text-5xl font-bold text-white">FamiSafe</h1>
                </div>
              </div>

              {/* Small Subtitle */}
              <p className="text-lg text-gray-300 text-white">
                The Most reliable parental control app
              </p>

              {/* Big Heading */}
              <h2 className="text-4xl lg:text-5xl font-semibold leading-snug text-white">
                Love your kids, so keep them safe.
              </h2>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  className="h-14 cursor-pointer"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="h-14 cursor-pointer"
                />
              </div>
            </div>

            {/* RIGHT SIDE (50%) */}
            <div className="relative flex justify-center items-center">

              {/* Main Tablet Image */}
              <img
                src="https://famisafe.wondershare.com/images/solution/android-solution.png"   // replace with your main image
                alt="Tablet"
                className="w-[90%] max-w-xl"
              />
            </div>

          </div>

      </div>
    </section>
  );
}


