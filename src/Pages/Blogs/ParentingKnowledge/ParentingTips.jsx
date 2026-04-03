import React from 'react';
import { translations } from '../../../Data/translations';
import { useLanguage } from '../../../context/LanguageContext';
import { ArrowLeft, ChevronRight } from 'lucide-react';

export default function ParentingTips() {
  const { language } = useLanguage();

  // ===== Sidebar & Article Data =====
 const sidebarItems =
  language === "en"
    ? translations.en?.sidebarItems ?? []
    : language === "am"
    ? translations.am?.sidebarItems ?? []
    : language === "om"
    ? translations.om?.sidebarItems ?? []
    : [];

const articles =
  language === "en"
    ? translations.en?.articles ?? []
    : language === "am"
    ? translations.am?.articles ?? []
    : language === "om"
    ? translations.om?.articles ?? []
    : [];


  // ===== Components inside main section =====
  const SidebarItem = ({ title, url, target }) => (
    <li className="flex items-center justify-between px-4 py-3 text-gray-800 hover:bg-gray-50 cursor-pointer transition">
      <a href={url} target={target} rel="noopener noreferrer" className="flex-1">
        {title}
      </a>
      <ChevronRight size={18} className="text-gray-400" />
    </li>
  );

  const ArticleCard = ({ title, desc, author, date, avatar }) => (
    <article className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-4">{desc}</p>
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <img src={avatar} alt={author} className="w-6 h-6 rounded-full" />
        <span>{author}</span>
        <span>•</span>
        <span>{date}</span>
      </div>
    </article>
  );

  const MainContent = () => (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Sidebar */}
      <aside className="w-full md:w-80 bg-white border border-gray-200 rounded-lg overflow-hidden flex-shrink-0">
        <div className="bg-purple-600 text-white px-4 py-3 flex items-center gap-2">
          <ArrowLeft size={18} />
          <span className="font-medium">Back to All Topics</span>
        </div>
        <ul className="divide-y">
          {sidebarItems.map((item, index) => (
            <SidebarItem key={index} {...item} />
          ))}
        </ul>
      </aside>

      {/* Right Content */}
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </main>
    </div>
  );

  return (
    <section className="w-full overflow-hidden px-4 sm:px-6 lg:px-0">
      <div className="max-w-7xl w-full px-4">
        <div className="border border-gray-200 max-w-6xl w-full px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-semibold text-gray-800 mb-6">
            {language === "en" ? translations.en.ParentalAppRivew : language === "am" ? translations.am.ParentalAppRivew : language == "om" ? translations.om.ParentalAppRivew : ""}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {language === "en" ? translations.en.Parenting65is : language === "am" ? translations.am.Parenting65is : language == "om" ? translations.om.Parenting65is : ""}
          </p>
        </div>

        {/* App Store Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-20">
          <a
            href="https://apps.apple.com/us/app/famisafe-parental-control-app/id1385417904"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://famisafe.wondershare.com/images/btn_appstore.png"
              alt="Download on the App Store"
              className="h-12 cursor-pointer hover:opacity-90 transition"
            />
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.wondershare.famisafe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="h-12 cursor-pointer hover:opacity-90 transition"
            />
          </a>

          <a
            href="https://www.amazon.com/hz/mas/pagenotfound"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://famisafe.wondershare.com/cyberbullying/images/amazon-appstore.png"
              alt="Get it on Amazon Appstore"
              className="h-12 cursor-pointer hover:opacity-90 transition"
            />
          </a>
        </div>

        {/* Main Content */}
        <MainContent />
      </div>
        </div>
    </section>
  );
}





// import React from 'react'
// import { translations } from '../../../Data/translations';
// import { useLanguage } from '../../../context/LanguageContext';

// export default function ParentingTips() {
//   const currentPage = 1;
//   const totalPages = 5;
//   const { language } = useLanguage();
//   const TeenSlanghtge = language === "en" ? translations.en.TeenSlanghtge : language === "am" ? translations.am.TeenSlanghtge : language == "om" ? translations.om.TeenSlanghtge : "";
//   const categories = language === "en" ? translations.en.categories : language === "am" ? translations.am.categories : language == "om" ? translations.om.categories : "";
//   const TeenSlanglkwdes = language === "en" ? translations.en.TeenSlanglkwdes : language === "am" ? translations.am.TeenSlanglkwdes : language == "om" ? translations.om.TeenSlanglkwdes : "";

//   return (

//     <section className="w-full overflow-hidden px-4 sm:px-6 lg:px-0">
//       <div className="max-w-7xl mx-auto  mr-6 ml-6  mb-6">


//         <div className=" bg-gradient-to-r from-[#FEDFCF] via-[#FBCEF8] to-[#CDFEFE] rounded-lg max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">

//           {/* TOP TEXT (ABOVE UI) */}
//           <div className="text-center mb-12 sm:mb-16">
//             <br />
//             <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-3xl font-extrabold text-gray-900 leading-tight max-w-3xl sm:max-w-4xl mx-auto">

//               {language === "en" ? translations.en.TeenSlang : language === "am" ? translations.am.TeenSlang : language == "om" ? translations.om.TeenSlang : ""}
//             </h3>
//             <br />

//             <p
//               className=" text-sm sm:text-base lg:text-lg text-gray-800 text-center leading-relaxed max-w-sm sm:max-w-3xl md:max-w-4xl mx-auto ">
//               {language === "en"
//                 ? translations.en.Moreandmoreteen
//                 : language === "am"
//                   ? translations.am.Moreandmoreteen
//                   : language === "om"
//                     ? translations.om.Moreandmoreteen
//                     : ""}
//             </p>
//           </div>
//           <br />

//         </div>
//         {/* =============== card ==============================*/}

//         <div className="max-w-7xl mx-auto px-4 py-12">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

//             {TeenSlanghtge.map((item, index) => (
//               <div
//                 key={index}
//                 className="relative bg-white border rounded-xl overflow-hidden hover:shadow-lg transition"
//               >
//                 {/* HOT BADGE */}
//                 <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
//                   HOT
//                 </span>

//                 {/* IMAGE */}
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className="w-full h-52 object-cover"
//                 />

//                 {/* CONTENT */}
//                 <div className="p-6 space-y-3">
//                   <h3 className="font-bold text-lg leading-snug text-gray-900">
//                     {item.title}
//                   </h3>

//                   <p className="text-sm text-gray-600 leading-6">
//                     {item.desc}
//                   </p>
//                 </div>
//               </div>
//             ))}

//           </div>

//           {/* SECTION TITLE BELOW */}
//           <h2 className="text-center text-3xl font-bold mt-16">
//             {language === "en" ? translations.en.AllTeenSlang : language === "am" ? translations.am.AllTeenSlang : language === "om" ? translations.om.AllTeenSlang : ""}
//           </h2>
//         </div>
//         {/*========================= ==================================*/}

//         <div className="max-w-7xl mx-auto px-4 py-10">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

//             {/* LEFT SIDEBAR */}
//             <aside className="hidden lg:block lg:col-span-3">
//               <div className="border rounded-xl overflow-hidden">
//                 {categories.map((cat, index) => (
//                   <div
//                     key={index}
//                     className={`px-6 py-4 font-semibold cursor-pointer
//                 ${index === 0
//                         ? "bg-black text-white"
//                         : index === 1
//                           ? "bg-purple-50"
//                           : "bg-white hover:bg-gray-50"
//                       }`}
//                   >
//                     {cat}
//                   </div>
//                 ))}
//               </div>
//             </aside>

//             {/* RIGHT CONTENT */}
//             <main className="lg:col-span-9 space-y-10">
//               {TeenSlanglkwdes.map((item, index) => (
//                 <article key={index} className="border-b pb-8">
//                   <h2 className="text-xl font-bold text-gray-900 mb-3">
//                     {item.title}
//                   </h2>

//                   <p className="text-gray-700 leading-7 mb-4">
//                     {item.desc}
//                   </p>

//                   <p className="text-sm text-gray-500">
//                     {language === "en" ? translations.en.Postedby : language === "am" ? translations.am.Postedby : language === "om" ? translations.om.Postedby : ""}{" "}
//                     <span className="text-blue-600 cursor-pointer hover:underline">
//                       {item.author}
//                     </span>{" "}
//                     | {item.date}
//                   </p>
//                 </article>
//               ))}
//             </main>

//           </div>
//         </div>
//         {/*============================ pagination ======================= */}
//         <div className="flex items-center justify-center gap-6 mt-12 text-base">

//           {/* PREV */}
//           <button
//             disabled
//             className="text-gray-300 cursor-not-allowed"
//           >
//             {language === "en" ? translations.en.Prev : language === "am" ? translations.am.Prev : language === "om" ? translations.om.Prev : ""}
//           </button>

//           {/* PAGE NUMBERS */}
//           <div className="flex items-center gap-6">
//             {[...Array(totalPages)].map((_, index) => {
//               const page = index + 1;
//               return (
//                 <button
//                   key={page}
//                   className={`font-medium
//                 ${page === currentPage
//                       ? "text-blue-600"
//                       : "text-black hover:text-blue-600"
//                     }`}
//                 >
//                   {page}
//                 </button>
//               );
//             })}
//           </div>

//           {/* NEXT */}
//           <button className="text-black hover:text-blue-600">
//             {language === "en" ? translations.en.Next : language === "am" ? translations.am.Next : language === "om" ? translations.om.Next : ""}
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }



