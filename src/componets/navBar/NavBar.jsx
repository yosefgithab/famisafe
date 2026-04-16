import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Download } from "lucide-react";
import LanguageSwitcher from "../LanguageSwitcher";
import { translations } from "../../Data/translations";
import { useLanguage } from "../../context/LanguageContext";
import { RiCloudLine, RiShoppingCartLine } from "react-icons/ri";
import { GrDownload, GrFormDown } from "react-icons/gr";
import { BsArrowRightShort, BsSearch } from "react-icons/bs";
import { RxPerson } from "react-icons/rx";



export default function NavBar() {
  

  const [] = useState(0);
  const { language } = useLanguage();
  const [productOpen, setProductOpen] = useState(false);
  const [featureOpen, setFeatureOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const [resourceOpen, setResourceOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState({
    products: false,
    features: false,
    blog: false,
    resource: false,
  });

  const toggleMobileDropdown = (key) => {
    setMobileDropdown((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <header className="fixed w-full bg-white border-b sticky top-0 z-50 left-0 h-16 shadow-sm">
      <div className=" w-full flex items-center justify-between px-6 py- md:px-35">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2 text-xl font-bold text-gray-800 hover:opacity-90">
          <img
            src="https://famisafe.wondershare.com/static/images/a6x/login/ic32-logo.png"
            alt="FamiSafe Logo"
            className="w-9 h-9 rounded-lg object-contain"
          />
          <span> {language == "en"
            ? translations.en.FamiSafe
            : language == "am"
              ? translations.am.FamiSafe
              : language == "om"
                ? translations.om.FamiSafe
                : ""}</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-gray-600 font-medium">
          {/* Products */}
          <div
            className="relative py-4 group"
            onMouseEnter={() => setProductOpen(true)}
            onMouseLeave={() => setProductOpen(false)}
          >
            <button className="flex items-center gap-1 text-gray-700 hover:text-[#0075F6] transition duration-300">

              <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#0075F6] after:transition-all hover:after:w-full">
                {language == "en"
                  ? translations.en.Products
                  : language == "am"
                    ? translations.am.Products
                    : language == "om"
                      ? translations.om.Products
                      : ""}
              </span>

              <FontAwesomeIcon
                icon={faCaretDown}
                className={`text-sm transition-all duration-300 ${productOpen ? "rotate-180 text-[#0075F6]" : ""
                  }`}
              />

            </button>
          </div>

          {/* Features */}
          <div
            className="relative py-4 group"
            onMouseEnter={() => setFeatureOpen(true)}
            onMouseLeave={() => setFeatureOpen(false)}
          >
            <button className="flex items-center gap-1 text-gray-700">

              <span className="transition duration-200 group-hover:text-[#0075F6] group-hover:underline underline-offset-4">
                {language === "en"
                  ? translations.en.Features
                  : language === "am"
                    ? translations.am.Features
                    : language === "om"
                      ? translations.om.Features
                      : ""}
              </span>

              <FontAwesomeIcon
                icon={faCaretDown}
                className={`text-sm transition-all duration-300 group-hover:text-[#0075F6] ${featureOpen ? "rotate-180" : ""
                  }`}
              />

            </button>
          </div>

          {/* Blog */}
          <div
            className="relative py-4"
            onMouseEnter={() => setBlogOpen(true)}
            onMouseLeave={() => setBlogOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-[#0075F6]">

              {language === "en" ? translations.en.Blog : language === "am" ? translations.am.Blog : language == "om" ? translations.om.Blog : ""}
              <FontAwesomeIcon
                icon={faCaretDown}
                className={`text-sm transition-transform duration-300 ${blogOpen ? 'rotate-180' : ''}`}
              />
            </button>
          </div>

          {/* Resource */}
          <div
            className="relative py-4"
            onMouseEnter={() => setResourceOpen(true)}
            onMouseLeave={() => setResourceOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-[#0075F6]">

              {language === "en" ? translations.en.Resource : language === "am" ? translations.am.Resource : language == "om" ? translations.om.Resource : ""}
              <FontAwesomeIcon
                icon={faCaretDown}
                className={`text-sm transition-transform duration-300 ${resourceOpen ? 'rotate-180' : ''}`}
              />
            </button>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2">
            <a
              href="https://famisafe.wondershare.com/main/sign-up"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-3  text-black  font-medium"
            >
              {/* {language === "en" ? translations.en.TryItFree : language === "am" ? translations.am.TryItFree : language == "om" ? translations.om.TryItFree : ""} */}
              <GrDownload className="w-6 h-6"/>
            </a>

            <a
              href="/Price"
              className="py-2 px-3 rounded-full text-black font-semibold"
            >
              <RiShoppingCartLine className="w-6 h-6"/>
              {/* {language === "en" ? translations.en.Pricing : language === "am" ? translations.am.Pricing : language == "om" ? translations.om.Pricing : ""} */}
            </a>

            <a
              href="/Loginpage"
              className="py-2 px-3 rounded-full text-black font-semibold"
            >
              <RxPerson className="w-6 h-6"/>
              {/* {language === "en" ? translations.en.Pricing : language === "am" ? translations.am.Pricing : language == "om" ? translations.om.Pricing : ""} */}
            </a>

            <a
              href="/Search"
              aria-label="Search"
              className="flex items-center justify-center w-10 h-10 "
            >
              <BsSearch className="w-6 h-6" />
            </a>
            <div className="flex items-center mr-4">
              <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 bg-white hover:border-purple-500 hover:shadow-sm transition cursor-pointer">

                <span className="text-sm font-medium text-gray-700">

                </span>

                <LanguageSwitcher />

              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Right Section */}
        <div className="flex items-center gap-3 md:hidden">

          {/* Try Now Button */}
          <a
            href="https://famisafe.wondershare.com/main/sign-up"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs bg-[#006DFF] text-white px-3 py-1.5 rounded-full font-medium"
          >
            {language === "en"
              ? translations.en.TryItFree
              : language === "am"
                ? translations.am.TryItFree
                : language === "om"
                  ? translations.om.TryItFree
                  : ""}
          </a>


          {/* Language Switcher */}
          <div className="flex items-center justify-center border border-gray-300 rounded-full px-2 py-1 md:px-4 md:py-2 bg-white hover:border-purple-500 hover:shadow-sm transition cursor-pointer">
            <LanguageSwitcher />
          </div>

          {/* Hamburger Menu */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <GrFormDown
              className={`transition-transform duration-300 ${mobileMenu ? "rotate-180" : "rotate-0"
                }`}
            />
          </button>

        </div>
        {/* End Mobile Right Section */}
      </div>

      {/* Desktop Dropdown Panels */}
      {productOpen && (
        <div onMouseEnter={() => setProductOpen(true)} onMouseLeave={() => setProductOpen(false)} className=" absolute left-0 top-[3.5rem] w-full bg-white shadow-xl p-6 ">
          <DropdownProducts />
        </div>
      )}
      {/* Features */}
      {featureOpen && (
        <div onMouseEnter={() => setFeatureOpen(true)} onMouseLeave={() => setFeatureOpen(false)} className="absolute left-0 top-[3.5rem] w-full bg-white shadow-xl p-6">
          <FeaturesDropdown />
        </div>
      )}


      {blogOpen && (
        <div onMouseEnter={() => setBlogOpen(true)} onMouseLeave={() => setBlogOpen(false)} className="absolute left-0 top-[3.5rem] w-full bg-white shadow-xl p-6">
          <BlogDropdown />
        </div>
      )}

      {resourceOpen && (
        <div onMouseEnter={() => setResourceOpen(true)} onMouseLeave={() => setResourceOpen(false)} className="absolute left-0 top-[3.5rem] w-full bg-white shadow-xl p-6">
          <ResourceDropdown />
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-white border-t shadow-lg px-6 py-6 space-y-4">
          {/* Products */}
          <button
            className="w-full flex justify-between items-center py-3 border-b font-medium text-gray-800"
            onClick={() => toggleMobileDropdown("products")}
          >
            {language === "en" ? translations.en.Products : language === "am" ? translations.am.Products : language == "om" ? translations.om.Products : ""} <FontAwesomeIcon icon={faCaretDown} className={`transition-transform duration-300 ${mobileDropdown.products ? "rotate-180" : ""}`} />
          </button>
          {mobileDropdown.products && <DropdownProducts mobile />}

          {/* Features */}
          <button
            className="w-full flex justify-between items-center py-3 border-b font-medium text-gray-800"
            onClick={() => toggleMobileDropdown("features")}
          >
            {language === "en" ? translations.en.Features : language === "am" ? translations.am.Features : language == "om" ? translations.om.Features : ""} <FontAwesomeIcon icon={faCaretDown} className={`transition-transform duration-300 ${mobileDropdown.features ? "rotate-180" : ""}`} />
          </button>
          {mobileDropdown.features && <FeaturesDropdown mobile />}

          {/** Blog */}
          <button
            className="w-full flex justify-between items-center py-3 border-b font-medium text-gray-800"
            onClick={() => toggleMobileDropdown("blog")}
          >
            {language === "en" ? translations.en.Blog : language === "am" ? translations.am.Blog : language == "om" ? translations.om.Blog : ""} <FontAwesomeIcon icon={faCaretDown} className={`transition-transform duration-300 ${mobileDropdown.blog ? "rotate-180" : ""}`} />
          </button>
          {mobileDropdown.blog && <BlogDropdown mobile />}

          {/** Resource */}
          <button
            className="w-full flex justify-between items-center py-3 border-b font-medium text-gray-800"
            onClick={() => toggleMobileDropdown("resource")}
          >
            {language === "en" ? translations.en.Resource : language === "am" ? translations.am.Resource : language == "om" ? translations.om.Resource : ""} <FontAwesomeIcon icon={faCaretDown} className={`transition-transform duration-300 ${mobileDropdown.resource ? "rotate-180" : ""}`} />
          </button>
          {mobileDropdown.resource && <ResourceDropdown mobile />}
          {/* Mobile Pricing */}
          <a
            href="/Price"
            className="w-full flex justify-between items-center py-3 border-b font-medium text-gray-800 hover:text-[#0075F6]"
          >
            {language === "en"
              ? translations.en.Pricing
              : language === "am"
                ? translations.am.Pricing
                : language === "om"
                  ? translations.om.Pricing
                  : ""}
          </a>
          {/*End Mobile Pricing */}

          {/* Mobile Buttons */}
          <div className="pt-4 space-y-3">
            <a className="block text-center py-3 bg-[#0075F6] text-white rounded-full font-medium">

              {/* Mobile Text */}
              <span className="md:hidden">
                      {language === "en"
                  ? translations.en.download
                  : language === "am"
                    ? translations.am.download
                    : language === "om"
                      ? translations.om.download
                      : ""}
              </span>

              {/* Desktop Text */}
              <span className="hidden md:inline">
                {language === "en"
                  ? translations.en.TryItFree
                  : language === "am"
                    ? translations.am.TryItFree
                    : language === "om"
                      ? translations.om.TryItFree
                      : ""}
              </span>

            </a>
          </div>
        </div>
      )}
    </header>
  );
}

//DropdownProducts component (desktop + mobile)
function DropdownProducts({ mobile }) {
  const { language } = useLanguage(); // get current global language

  const cardss =
    language === "en"
      ? translations.en.cardss
      : language === "am"
        ? translations.am.cardss
        : language === "om"
          ? translations.om.cardss : "";

  return (
    <div className={`w-full ${mobile ? "bg-gray-50 p-4" : ""}`}>
      <div className={`grid gap-4 w-full ${mobile ? "grid-cols-1" : "grid-cols-1 md:grid-cols-3"}`}>
        {cardss.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#EEF6FF] rounded-3xl p-5 shadow-md flex items-center justify-between gap-4 hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <img src={item.img} alt={item.title} className="w-14 h-14 flex-shrink-0 " />
              <div className="flex flex-col">
                <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1 mb-3">{item.desc}</p>
                {item.primary ? (
                  <span className="bg-gradient-to-r from-[#0075F6] via-[#0075F6] to-blue-500 text-[#F1F2F5E8] text-center py-2 rounded-full font-semibold w-full md:w-max px-8">
                    Try It Free
                  </span>
                ) : (
                  <span className="border-2 border-[#0075F6]0 text-[#0075F6] text-center py-2 rounded-full font-semibold w-full md:w-max px-8">
                    Try It Free
                  </span>
                )}
              </div>
            </div><button
  type="button"
  onClick={() => navigate("/ForScholl")}
  className="border p-1 rounded-full border-[#0075F6] focus:ring-2 focus:ring-[#0076F6]"
  aria-label="Go to next page"
>
  <BsArrowRightShort
    className="bg-white rounded-full h-6 w-6 text-[#0075F6] p-1 animate-bounce"
  />
</button>

          </a>
        ))}
      </div>

      {!mobile && (
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-69 left-0 w-full bg-gradient-to-r from-teal-400 via-[#0075F6] to-teal-400 text-white text-lg font-semibold py-4 mb-7 flex items-center justify-center gap-2 hover:opacity-90 transition z-50"
        >
          Try It Free Online <RiCloudLine />
        </a>
      )}
    </div>
  );
}
// function DropdownProducts({ mobile }) {
//   const navigate = useNavigate();
//   const { language } = useLanguage();

//  const cardss =
//   language === "en"
//     ? translations.en.cardss
//     : language === "am"
//     ? translations.am.cardss
//     : language === "om"
//     ? translations.om.cardss
//     : [];

//   return (
//     <div className={`w-full ${mobile ? "bg-gray-50 p-4" : ""}`}>
//       <div
//         className={`grid gap-4 w-full ${
//           mobile
//             ? "grid-cols-1"
//             : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center"
//         }`}
//       >
//         {cardss.map((item, index) => (
//           <Link
//             key={index}
//             to={item.href}
//             className="bg-[#EEF6FF] rounded-2xl p-4 shadow-md flex items-center justify-between gap-3 
//                        hover:shadow-lg transition transform hover:-translate-y-1
//                        w-full max-w-xs mx-auto"
//           >
//             <div className="flex items-center gap-3">
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 className="w-12 h-12 flex-shrink-0"
//               />

//               <div className="flex flex-col">
//                 <h3 className="text-sm font-semibold text-gray-900">
//                   {item.title}
//                 </h3>

//                 <p className="text-xs text-gray-600 mt-1 mb-2">
//                   {item.desc}
//                 </p>

//                 {item.primary ? (
//                   <span className="bg-gradient-to-r from-[#0075F6] to-blue-500 text-white text-xs text-center py-1.5 rounded-full px-5">
//                     Try It Free
//                   </span>
//                 ) : (
//                   <span className="border-2 border-[#0075F6] text-[#0075F6] text-xs text-center py-1.5 rounded-full px-5">
//                     Try It Free
//                   </span>
//                 )}
//               </div>
//             </div>

//             {/* Arrow Button */}
//             <button
//               type="button"
//               onClick={(e) => {
//                 e.preventDefault(); // prevent double navigation
//                 navigate(item.href); // ✅ dynamic route
//               }}
//               className="border p-1 rounded-full border-[#0075F6] focus:ring-2 focus:ring-[#0076F6]"
//             >
//               <BsArrowRightShort className="bg-white rounded-full h-5 w-5 text-[#0075F6] p-1" />
//             </button>
//           </Link>
//         ))}
//       </div>

//       {/* Bottom CTA */}
//       {!mobile && (
//         <div className="fixed bottom-10 left-0 w-full flex justify-center z-50">
//           <button
//             onClick={() => navigate("/famisafe")}
//             className="bg-gradient-to-r from-teal-400 via-[#0075F6] to-teal-400 text-white text-lg font-semibold py-3 px-8 rounded-full flex items-center gap-2 hover:opacity-90 transition"
//           >
//             Try It Free Online <RiCloudLine />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }









// Feature Item component (outside main component)
function FeatureItem({ title, newTag, link }) {
  return (
    <a
      href={link}
      className="flex items-center gap-4 text-gray-800 mb-2 text-[14px] hover:text-[#0075F6] hover:underline underline-offset-2 transition"
    >
      <span>{title}</span>
      {newTag && (
        <span className="text-xs bg-[#0075F6] text-white px-2 py-0.5 rounded-full font-semibold">
          HOT
        </span>
      )}
    </a>
  );
}
// FeaturesDropdown component (desktop + mobile)
// Main Component
export function FeaturesDropdown({ mobile }) {
  const { language } = useLanguage();

  const columns =
    language === "en"
      ? translations.en.columns
      : language === "am"
        ? translations.am.columns
        : language == "om" ? translations.om.columns : "";

  return (
    <div className={`w-full ${mobile ? "bg-gray-50 p-4 rounded-lg" : "flex flex-col items-center gap-6"}`}>
      <div className={`flex flex-col ${mobile ? "" : "md:flex-row justify-center gap-6 w-full p-4"}`}>
        {columns.map((col, i) => (
          <div
            key={i}
            className={`flex-1 ${mobile ? "mb-4" : ""}rounded-3xl p-6 shadow-sm`}
            style={{ backgroundColor: col.bg }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{col.title}</h3>
            {col.features.map((f, idx) => (
              <FeatureItem key={idx} title={f.title} newTag={f.newTag} link={f.link} />
            ))}
          </div>
        ))}
      </div>

      {!mobile && (
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-33 left-0 w-full bg-gradient-to-r from-teal-400 via-[#0075F6] to-teal-400 text-white text-lg font-semibold py-4 mb-4 flex items-center justify-center gap-2 hover:opacity-90 transition z-50"
        >
          Try It Free Online <RiCloudLine />
        </a>
      )}
    </div>
  );
}






// BlogDropdown component (desktop + mobile)
function BlogDropdown({ mobile }) {
  const { language } = useLanguage();

  const blogData =
    language === "en"
      ? translations.en.blogData
      : language === "am"
        ? translations.am.blogData
        : language == "om" ? translations.om.blogData : "";

  // split columns and meta
  const columns = blogData.slice(0, 5);
  const meta = blogData[blogData.length - 1];

  return (
    <div className={`w-full ${mobile ? "bg-gray-50 p-4 rounded-lg" : "bg-white"}`}>

      {/* Columns */}
      <div
        className={`max-w-7xl mx-auto ${mobile
          ? "grid grid-cols-1 gap-6"
          : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 pb-6 pt-4"
          }`}
      >
        {columns.map((col, i) => (
          <div key={i}>
            <a
              href="#"
              className="text-lg font-semibold mb-3 block hover:text-[#0075F6] underline-offset-2 hover:underline "
            >
              {col.title}
            </a>

            <ul className="space-y-2 text-[15px] text-gray-700">
              {col.links.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-[#0075F6] hover:underline active:text-[#0075F6] active:underline transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Read More */}
      <div className={`flex justify-center mt-4 ${mobile ? "" : "mb-4"}`}>
        <button className="px-5 py-2 rounded-full border-2 border-[#0075F6] text-[#0075F6] rounded-full py-3 px-6 hover:bg-[#0075F6] hover:text-white transition">
          {meta.readMore}
        </button>
      </div>

      {/* Bottom CTA */}
      {!mobile && (
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-33 left-0 w-full bg-gradient-to-r from-teal-400 via-[#0075F6] to-teal-400 text-white text-lg font-semibold py-4 mb-4 flex items-center justify-center gap-2 hover:opacity-90 transition z-50"
        >
          Try It Free Online <RiCloudLine />
        </a>
      )}
    </div>
  );
}






// ResourceDropdown component (desktop + mobile)
// Example reusable section components
function Section({ title, items, grid }) {
  return (
    <div className={grid ? "bordergrid-cols-2 gap-2" : ""}>
      <h3 className="text-xl font-semibold mb-4 text-gray-900">{title}</h3>
      <ul className="space-y-2 text-[15px] text-gray-800">
        {items.map((item, idx) => (
          <li key={idx}>
            <a href={item.href} className="text-gray-700 hover:text-[#0075F6] hover:underline underline-offset-2 transition duration-200">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
function Sections({ title, items, grid }) {
  return (
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-4 text-gray-900">{title}</h3>
      <ul className="grid grid-cols-2 gap-2 text-[15px] text-gray-800">
        {items.map((item, idx) => (
          <li key={idx}>
            <a href={item.href} className="text-gray-700 hover:text-[#0075F6] hover:underline underline-offset-2 transition duration-200">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SectionBox({ title, items, bg }) {
  return (
    <div className={`${bg ? "bg-[#EEF6FF] rounded-3xl p-6" : ""}`}>
      <h3 className="text-xl font-semibold mb-4 text-gray-900">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 text-gray-800 text-[15px]">
        {items.map((item, idx) => (
          <a key={idx} href={item.href} className=" hover:text-[#0075F6] hover:underline underline-offset-2 transition duration-200">
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function ResourceDropdown({ mobile }) {
  const { language } = useLanguage();

  const resourceDropdownData =
    language === "en"
      ? translations.en.resourceDropdownData
      : language === "am"
        ? translations.am.resourceDropdownData
        : language == "om" ? translations.om.resourceDropdownData : "";

  return (
    <div className={`w-full ${mobile ? "bg-gray-50 p-4 rounded-lg" : "bg-white"}`}>
      <div
        className={`max-w-7xl mx-auto px-6 py-8 grid ${mobile ? "grid-cols-1 gap-6" : "grid-cols-1 lg:grid-cols-3 gap-10"
          }`}
      >
        {/* FEATURED TOPICS */}
        <SectionBox
          title={resourceDropdownData.featuredTopics.title}
          items={resourceDropdownData.featuredTopics.items}
          bg
        />

        {/* GUIDE */}
        <Section
          title={resourceDropdownData.guide.title}
          items={resourceDropdownData.guide.items}
        />

        {/* EXPLORE + DOWNLOAD */}
        <div className="flex flex-col col-span-1 justify-between mt-6 lg:mt-0">
          <Sections
            title={resourceDropdownData.explore.title}
            items={resourceDropdownData.explore.items}
            grid
          />

          <button className="border mt-6 flex items-center justify-center gap-2 border-2 border-[#0075F6] text-[#0075F6] rounded-full py-3 px-6 hover:bg-[#0075F6] hover:text-white transition font-medium">
            <Download size={18} />
            {resourceDropdownData.actions.downloadText}
          </button>
        </div>
      </div>

      {/* BOTTOM BAR */}
      {!mobile && (
        <a
          href={resourceDropdownData.actions.tryFreeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-34 left-0 w-full bg-gradient-to-r from-teal-400 via-[#0075F6] to-teal-400 text-white text-lg font-semibold py-4 flex items-center justify-center gap-2 z-50 mb-4"
        >
          {resourceDropdownData.actions.tryFreeText}
        </a>
      )}
    </div>
  );
}





{/* mobile responsiveness */ }









