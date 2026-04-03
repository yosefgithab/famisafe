


import React from 'react'
import { translations } from '../../../Data/translations';
import { useLanguage } from '../../../context/LanguageContext';

export default function DesktopParentalControl() {
  const currentPage = 1;
  const totalPages = 5;
  const { language } = useLanguage();
      const DesktopParentalCo75 = language === "en" ? translations.en.DesktopParentalCo75 : language === "am" ? translations.am.DesktopParentalCo75 :language== "om" ? translations.om.DesktopParentalCo75: "";    
      const categories = language === "en" ? translations.en.categories : language === "am" ? translations.am.categories :language== "om" ? translations.om.categories: "";
          const DesktopParentalCon76 = language === "en" ? translations.en.DesktopParentalCon76 : language === "am" ? translations.am.DesktopParentalCon76 :language== "om" ? translations.om.DesktopParentalCon76: "";
  
  return (

    <section className="w-full overflow-hidden px-4 sm:px-6 lg:px-0">
      <div className="max-w-7xl mx-auto  mr-6 ml-6  mb-6">


        <div className=" bg-gradient-to-r from-[#FEDFCF] via-[#FBCEF8] to-[#CDFEFE] rounded-lg max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">

          {/* TOP TEXT (ABOVE UI) */}
          <div className="text-center mb-12 sm:mb-16">
            <br />
            <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-3xl font-extrabold text-gray-900 leading-tight max-w-3xl sm:max-w-4xl mx-auto">

              {language === "en" ? translations.en.DesktopParentalControl : language === "am" ? translations.am.DesktopParentalControl : language == "om" ? translations.om.DesktopParentalControl : ""}
            </h3>
            <br />

            <p
              className=" text-sm sm:text-base lg:text-lg text-gray-800 text-center leading-relaxed max-w-sm sm:max-w-3xl md:max-w-4xl mx-auto ">
              {language === "en"
                ? translations.en.Findoutinthistopial
                : language === "am"
                  ? translations.am.Findoutinthistopial
                  : language === "om"
                    ? translations.om.Findoutinthistopial
                    : ""}
            </p>
          </div>
          <br />

        </div>
        {/* =============== card ==============================*/}
        
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {DesktopParentalCo75.map((item, index) => (
          <div
            key={index}
            className="relative bg-white border rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            {/* HOT BADGE */}
            <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              HOT
            </span>

            {/* IMAGE */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-52 object-cover"
            />

            {/* CONTENT */}
            <div className="p-6 space-y-3">
              <h3 className="font-bold text-lg leading-snug text-gray-900">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 leading-6">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

      </div>

      {/* SECTION TITLE BELOW */}
      <h2 className="text-center text-3xl font-bold mt-16">
        {language === "en" ? translations.en.AllDetopPaental667Control : language === "am" ? translations.am.AllDetopPaental667Control : language === "om" ? translations.om.AllDetopPaental667Control: ""}
      </h2>
    </div>
    {/*========================= ==================================*/}
    
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

        {/* LEFT SIDEBAR */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="border rounded-xl overflow-hidden">
            {categories.map((cat, index) => (
              <div
                key={index}
                className={`px-6 py-4 font-semibold cursor-pointer
                ${index === 0
                    ? "bg-black text-white"
                    : index === 1
                    ? "bg-purple-50"
                    : "bg-white hover:bg-gray-50"
                  }`}
              >
                {cat}
              </div>
            ))}
          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <main className="lg:col-span-9 space-y-10">
          {DesktopParentalCon76.map((item, index) => (
            <article key={index} className="border-b pb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h2>

              <p className="text-gray-700 leading-7 mb-4">
                {item.desc}
              </p>

              <p className="text-sm text-gray-500">
                 {language === "en" ? translations.en.Postedby : language === "am" ? translations.am.Postedby : language === "om" ? translations.om.Postedby: ""}{" "}
                <span className="text-blue-600 cursor-pointer hover:underline">
                  {item.author}
                </span>{" "}
                | {item.date}
              </p>
            </article>
          ))}
        </main>

      </div>
    </div>
    {/*============================ pagination ======================= */}
    <div className="flex items-center justify-center gap-6 mt-12 text-base">
      
      {/* PREV */}
      <button
        disabled
        className="text-gray-300 cursor-not-allowed"
      >
         {language === "en" ? translations.en.Prev : language === "am" ? translations.am.Prev : language === "om" ? translations.om.Prev: ""}
      </button>

      {/* PAGE NUMBERS */}
      <div className="flex items-center gap-6">
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              className={`font-medium
                ${page === currentPage
                  ? "text-blue-600"
                  : "text-black hover:text-blue-600"
                }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* NEXT */}
      <button className="text-black hover:text-blue-600">
         {language === "en" ? translations.en.Next : language === "am" ? translations.am.Next : language === "om" ? translations.om.Next: ""}
      </button>
    </div>
      </div>
    </section>
  )
}

















