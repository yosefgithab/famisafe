import React from 'react'
import { translations } from '../../../Data/translations'
import { useLanguage } from '../../../context/LanguageContext';

export default function BrowserHistory() {
  const { language } = useLanguage();
  return (
    <section className="w-full overflow-hidden px-4 sm:px-6 lg:px-0">
      <div className="max-w-7xl mx-auto  mr-6 ml-6  mb-6">


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">

          {/* TOP TEXT (ABOVE UI) */}
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-3xl font-extrabold text-gray-900 leading-tight max-w-3xl sm:max-w-4xl mx-auto">

              {language === "en" ? translations.en.KnowMoreAbou : language === "am" ? translations.am.KnowMoreAbou : language == "om" ? translations.or.KnowMoreAbou : ""}
            </h3>
          </div>
          <div className="px-4 sm:px-0">
            <p
              className=" text-sm sm:text-base lg:text-lg text-gray-800 text-center leading-relaxed max-w-sm sm:max-w-3xl md:max-w-4xl mx-auto ">
              {language === "en"
                ? translations.en.IncorporatedbyGoogleYouTubeR
                : language === "am"
                  ? translations.am.IncorporatedbyGoogleYouTubeR
                  : language === "om"
                    ? translations.or.IncorporatedbyGoogleYouTubeR
                    : ""}
            </p>
          </div>
          <br />
<div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* LEFT SIDEBAR – ALL TOPICS */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-24">
            <div className="bg-white rounded-xl shadow border">
              <h3 className="bg-purple-600 text-white font-semibold px-4 py-3 rounded-t-xl">
                ALL TOPICS
              </h3>
              <ul className="p-4 space-y-2 text-sm text-gray-700">
                {[
                  "How to see your YouTube history?",
                  "Put parental controls on YouTube",
                  "Delete TikTok Account without Phone Number",
                  "Ways to block YouTube channels",
                  "Ways to Get Someone's IP Address and Hide IP Address",
                  "A complete guide on YouTube parental control",
                  "Kids safe YouTube alternative",
                  "Top 5 TikTok Alternatives",
                  "Methods to restrict YouTube adult content",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-purple-600 cursor-pointer leading-6"
                  >
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* CENTER CONTENT – SCROLLABLE */}
        <main className="lg:col-span-6">
          <article className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Why Should Parents Check Browser History?
            </h1>

            <p className="text-gray-700 leading-7">
              Almost every child today has access to a computer, tablet, or smartphone
              with the Internet. As a parent, you should not only educate your child
              but also actively monitor online activities to ensure safety.
            </p>

            <p className="text-gray-700 leading-7">
              Checking browser history regularly helps identify suspicious websites,
              online threats, and inappropriate content before serious issues occur.
            </p>

            {/* TABLE OF CONTENT */}
            <div className="bg-gray-50 border rounded-xl p-6 mt-10">
              <h2 className="text-lg font-semibold mb-4">
                Table of the Content
              </h2>
              <ol className="list-decimal ml-5 space-y-2 text-purple-600">
                <li className="hover:underline cursor-pointer">
                  Why do we need to check a child's online browser history?
                </li>
                <li className="hover:underline cursor-pointer">
                  How to Check Browser History?
                </li>
                <li className="hover:underline cursor-pointer">
                  How does Web History Tracking Help?
                </li>
                <li className="hover:underline cursor-pointer">
                  How do I View Browser History on my Child’s Phone?
                </li>
                <li className="hover:underline cursor-pointer">
                  How to View Browser History Using Parental Control App
                </li>
              </ol>
            </div>

            {/* LONG CONTENT FOR SCROLL */}
            <div className="space-y-6">
              {[...Array(10)].map((_, i) => (
                <p key={i} className="text-gray-700 leading-7">
                  Children spend a significant amount of time online, making it
                  important for parents to stay informed about their digital habits.
                  Monitoring browser history provides visibility and early warnings.
                </p>
              ))}
            </div>
          </article>
        </main>

        {/* RIGHT SIDEBAR – PROMO CARD */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-24">
            <div className="bg-purple-50 rounded-xl p-6 border text-center">
              <h3 className="text-purple-700 font-bold text-lg mb-4">
                Most Reliable Parental Control App
              </h3>

              <img
                src="https://famisafe.wondershare.com/images/images-2025/famisafe/artcile-aside.png"
                alt="Parental Control"
                className="mx-auto mb-4"
              />

              <ul className="text-sm text-gray-700 space-y-3 text-left">
                <li>✔ Screen time & device management</li>
                <li>✔ Smart content filtering & blocking</li>
                <li>✔ Real-time location & geo-fencing</li>
              </ul>
            </div>
          </div>
        </aside>

      </div>
    </div>

        </div>
      </div>
    </section>
  )
}
