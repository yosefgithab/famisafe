import { useState } from 'react'
import { translations } from '../../../Data/translations'
import { useLanguage } from '../../../context/LanguageContext';
import { BsAmazon, BsAndroid2, BsFillCloudFill, BsSnapchat } from 'react-icons/bs';
import { FaApple, FaFacebookF, FaInstagram, FaPinterestP, FaTelegramPlane, FaTwitter, FaWindows, FaYoutube } from 'react-icons/fa';
import { SiGooglechrome, SiTiktok } from 'react-icons/si';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { TbBrandDisney, TbBrandNetflix } from 'react-icons/tb';
import { Clock, MessageCircle, RefreshCcw, ShieldCheck, SlidersHorizontal, Zap } from 'lucide-react';

export default function ScreentimeForKids() {

  const { language } = useLanguage();
  const feature54s = language === "en" ? translations.en.feature54s : language === "am" ? translations.am.feature54s : language == "om" ? translations.om.feature54s : "";
  const featuresv = language === "en" ? translations.en.featuresv : language === "am" ? translations.am.featuresv : language == "om" ? translations.om.featuresv : "";
  const featuredLogos = language === "en" ? translations.en.featuredLogos : language === "am" ? translations.am.featuredLogos : language == "om" ? translations.om.featuredLogos : "";
  const screenTimeData = language === "en" ? translations.en.screenTimeData : language === "am" ? translations.am.screenTimeData : language == "om" ? translations.om.screenTimeData : "";
  const screenTimeDatav = language === "en" ? translations.en.screenTimeDatav : language === "am" ? translations.am.screenTimeDatav : language == "om" ? translations.om.screenTimeDatav : "";
  const screenTimeDatad = language === "en" ? translations.en.screenTimeDatad : language === "am" ? translations.am.screenTimeDatad : language == "om" ? translations.om.screenTimeDatad : "";
  const screenTimeDataz = language === "en" ? translations.en.screenTimeDataz : language === "am" ? translations.am.screenTimeDataz : language == "om" ? translations.om.screenTimeDataz : "";
  const tips = language === "en" ? translations.en.tips : language === "am" ? translations.am.tips : language == "om" ? translations.om.tips : "";
  const bloggs = language === "en" ? translations.en.bloggs : language === "am" ? translations.am.bloggs : language == "om" ? translations.om.bloggs : "";
  const faqs = language === "en" ? translations.en.faqs : language === "am" ? translations.am.faqs : language == "om" ? translations.om.faqs : "";
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);


  };



  return (
    <section className="w-full overflow-hidden px-4 sm:px-6 lg:px-0">
      <div className="max-w-full mx-auto rounded-[15px]">

        <div className="relative h-[85vh] w-full bg-center bg-cover bg-no-repeat flex items-center"
          style={{
            backgroundImage:
              "url('https://famisafe.wondershare.com/images/images-2020/screen-time/banner.jpg')",
          }}
        >
          {/* Overlay (optional for better text contrast) */}
          <div className="absolute inset-0 bg-white/0"></div>

          {/* Content */}
          <div className="relative max-w-7xl mx-auto w-full px-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

            {/* LEFT CONTENT */}
            <div className="text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight text-white">
                {language === "en" ? translations.en.ParentsScreenTimeNow : language === "am" ? translations.am.ParentsScreenTimeNow : language === "om" ? translations.om.ParentsScreenTimeNow : ""}
              </h1>

              <p className="mt-4 text-white max-w-xl text-sm sm:text-base mx-auto lg:mx-0">
                {language === "en" ? translations.en.Overtheyearsthetr : language === "am" ? translations.am.Overtheyearsthetr : language === "om" ? translations.om.Overtheyearsthetr : ""}
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
                      : language == "om" ? translations.om.TryItFree : ""}
                </a>
              </div>

              {/* Platforms */}
              <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-white text-sm">
                <span>
                  {language === "en"
                    ? translations.en.Availableon
                    : language === "am"
                      ? translations.am.Availableon
                      : language == "om" ? translations.om.Availableon : ""}
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
          <h3 className="text-xl sm:text-3xl lg:text-4xl  font-bold text-gray-800  text-center break-words leading-snug sm:leading-tight" >
            {language === "en" ? translations.en.Howmuchtimedoyourkid : language === "am" ? translations.am.Howmuchtimedoyourkid : language === "om" ? translations.om.Howmuchtimedoyourkid : ""}
          </h3>
        </div>
        {/* =================== Call to Action Section =================== */}
        <div className=" bg-[#F8F6FF] max-w-7xl mx-auto px-6">

          {/* Title */}
          <h2 className="text-center text-4xl font-bold text-gray-900 mb-16">
            {language === "en" ? translations.en.Amazingscreentim : language === "am" ? translations.am.Amazingscreentim : language === "om" ? translations.om.Amazingscreentim : ""}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* LEFT SIDE */}
            <div className="lg:col-span-5 bg-[white] rounded-2xl shadow-sm p-10">
              <h3 className="text-2xl font-semibold text-center text-[#4b3bbf] leading-relaxed">
                {language === "en" ? translations.en.Comparisonof54children : language === "am" ? translations.am.Comparisonof54children : language === "om" ? translations.om.Comparisonof54children : ""} <br />

              </h3>

              <p className="text-center text-gray-600 mt-6">
                {language === "en" ? translations.en.Averagedaily6665min : language === "am" ? translations.am.Averagedaily6665min : language === "om" ? translations.om.Averagedaily6665min : ""}
              </p>

              {/* Bars */}
              <div className="mt-10 space-y-8">

                {/* Before */}
                <div>
                  <p className="text-gray-700 mb-2"> {language === "en" ? translations.en.Before : language === "am" ? translations.am.Before : language === "om" ? translations.om.Before : ""}</p>
                  <div className="w-full bg-[#eee9ff] rounded-full h-10 relative">
                    <div className="bg-[#8b5cf6] h-10 rounded-full w-[90%] flex items-center justify-end pr-6 text-white font-bold">
                      450
                    </div>
                  </div>
                </div>

                {/* After */}
                <div>
                  <p className="text-gray-700 mb-2"> {language === "en" ? translations.en.After : language === "am" ? translations.am.After : language === "om" ? translations.om.After : ""}</p>
                  <div className="w-full bg-[#fff1d6] rounded-full h-10 relative">
                    <div className="bg-[#fbbf24] h-10 rounded-full w-[30%] flex items-center justify-end pr-6 text-white font-bold">
                      132
                    </div>
                  </div>
                </div>

              </div>

              <div className="bg-[#F7F8FC] mt-10 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-center lg:text-left text-[#EC2532] leading-relaxed">
                  {language === "en" ? translations.en.Beyond6hours : language === "am" ? translations.am.Beyond6hours : language === "om" ? translations.om.Beyond6hours : ""}
                </h3>
                <p className="text-center lg:text-left text-gray-600 mt-4">
                  {language === "en" ? translations.en.Accordingto65CDC : language === "am" ? translations.am.Accordingto65CDC : language === "om" ? translations.om.Accordingto65CDC : ""}
                </p>
              </div>
              <p className="text-center text-gray-700 mt-4">
                {language === "en" ? translations.en.TheKidsscreentimeh : language === "am" ? translations.am.TheKidsscreentimeh : language === "om" ? translations.om.TheKidsscreentimeh : ""}

              </p>

            </div>







            {/* DOTTED DIVIDER */}
            <div className="hidden lg:flex lg:col-span-1 justify-center">
              <div className="border-l-2 border-dashed border-[#8b5cf6] h-[760px]"></div>
            </div>


            {/* RIGHT SIDE */}
            <div className="lg:col-span-6 text-center lg:text-left">

              <h3 className="text-2xl font-semibold text-[#4b3bbf] mb-8">
                {language === "en" ? translations.en.Thingskidsusuallydoi : language === "am" ? translations.am.Thingskidsusuallydoi : language === "om" ? translations.om.Thingskidsusuallydoi : ""}
              </h3>

              <div className="flex flex-col lg:flex-row items-center gap-10">

                {/* Donut Chart */}
                <div className="relative w-52 h-40 rounded-full bg-[conic-gradient(#8b5cf6_0%_41%,#fbbf24_41%_73%,#34d399_73%_89%,#fb7185_89%_100%)]">
                  <div className="absolute inset-10 bg-[#faf8ff] rounded-full"></div>

                  {/* Labels */}
                  <span className="absolute top-2 left-1/2 -translate-x-1/2 text-sm text-gray-600">

                    {language === "en" ? translations.en.Social32 : language === "am" ? translations.am.Social32 : language === "om" ? translations.om.Social32 : ""}
                  </span>
                  <span className="absolute bottom-4 left-6 text-sm text-gray-600">
                    {language === "en" ? translations.en.Game16 : language === "am" ? translations.am.Game16 : language === "om" ? translations.om.Game16 : ""}
                  </span>
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 text-sm text-gray-600">
                    {language === "en" ? translations.en.Video41 : language === "am" ? translations.am.Video41 : language === "om" ? translations.om.Video41 : ""}
                  </span>
                  <span className="absolute top-16 left-4 text-sm text-gray-600">
                    {language === "en" ? translations.en.Music2 : language === "am" ? translations.am.Music2 : language === "om" ? translations.om.Music2 : ""}
                  </span>
                </div>

                {/* Text */}
                <p className="text-lg text-gray-700 leading-relaxed max-w-md">
                  {language === "en" ? translations.en.Morehan : language === "am" ? translations.am.Morehan : language === "om" ? translations.om.Morehan : ""}<span className="font-semibold">50%</span>
                  {language === "en" ? translations.en.ofscreentime : language === "am" ? translations.am.ofscreentime : language === "om" ? translations.om.ofscreentime : ""}
                  <span className="block text-gray-500 mt-2">
                    ( {language === "en" ? translations.en.FamiSafe2020 : language === "am" ? translations.am.FamiSafe2020 : language === "om" ? translations.om.FamiSafe2020 : ""})
                  </span>
                </p>


              </div>

              <h4 className="text-2xl font-semibold text-[#4b3bbf] mt-14">
                {language === "en" ? translations.en.Otherstatisticsab : language === "am" ? translations.am.Otherstatisticsab : language === "om" ? translations.om.Otherstatisticsab : ""}
              </h4>
              <div className="bg-[#F7F8FC] py-16">
                <div className="max-w-4xl mx-auto px-6">
                  <p className="text-lg md:text-lg text-gray-800 leading-relaxed">
                    <span className="text-2xl md:text-2xl font-extrabold text-gray-900">
                      71%
                    </span>{" "}
                    {language === "en" ? translations.en.ofkidshavebeen : language === "am" ? translations.am.ofkidshavebeen : language === "om" ? translations.om.ofkidshavebeen : ""}<br className="hidden sm:block" />
                    {language === "en" ? translations.en.areconcernedthei : language === "am" ? translations.am.areconcernedthei : language === "om" ? translations.om.areconcernedthei : ""}
                  </p>
                  <p className="text-lg md:text-lg text-gray-800 leading-relaxed">
                    <span className="text-2xl md:text-2xl font-extrabold text-yellow-400">
                      73%
                    </span>{" "}
                    {language === "en" ? translations.en.ofkidshavebeen : language === "am" ? translations.am.of8yearoldskids : language === "om" ? translations.om.of8yearoldskids : ""}<br className="hidden sm:block" />
                  </p>
                  <p className="text-lg md:text-lg text-gray-800 leading-relaxed">
                    <span className="text-2xl md:text-2xl font-extrabold text-green-400">
                      74%
                    </span>{" "}{language === "en" ? translations.en.of8yearoldskids : language === "am" ? translations.am.of8yearoldskids : language === "om" ? translations.om.of8yearoldskids : ""} <br className="hidden sm:block" /> {language === "en" ? translations.en.tabletat4home : language === "am" ? translations.am.tabletat4home : language === "om" ? translations.om.tabletat4home : ""}
                  </p>
                  <p className="text-lg md:text-lg text-gray-800 leading-relaxed">
                    <span className="text-2xl md:text-2xl font-extrabold text-red-400">
                      63%
                    </span>{" "}{language === "en" ? translations.en.ofkidshavetheir : language === "am" ? translations.am.ofkidshavetheir : language === "om" ? translations.om.ofkidshavetheir : ""} <br className="hidden sm:block" />
                    {language === "en" ? translations.en.parentzoneorguTh : language === "am" ? translations.am.parentzoneorguTh : language === "om" ? translations.om.parentzoneorguTh : ""}
                  </p>
                  <p className="text-lg md:text-lg text-gray-800 leading-relaxed">
                    <span className="text-2xl md:text-2xl font-extrabold text-black-400">
                      50%
                    </span>{" "}
                    {language === "en" ? translations.en.duringheCoronavirus : language === "am" ? translations.am.duringheCoronavirus : language === "om" ? translations.om.duringheCoronavirus : ""}
                  </p>
                </div>
              </div>

            </div>

          </div>


          {/* Title */}
          <h2 className="text-center text-4xl font-bold text-gray-900 mb-16 
               sm:text-4xl md:text-5xl lg:text-6xl 
               sm:mb-12 md:mb-16">
  {language === "en" 
    ? translations.en.PreventE4656xcessivescr 
    : language === "am" 
      ? translations.am.PreventE4656xcessivescr 
      : language === "om" 
        ? translations.om.PreventE4656xcessivescr 
        : ""}
</h2>


          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* LEFT SIDE */}
            <div className="lg:col-span-5 bg-white rounded-2xl shadow-sm p-10">
              <div className="max-w-5xl mx-auto px-6">

                <div className="max-w-4xl mx-auto px-6">
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                    {language === "en" ? translations.en.Negative345EffectsofExces : language === "am" ? translations.am.Negative345EffectsofExces : language === "om" ? translations.om.Negative345EffectsofExces : ""}
                  </h2>

                  <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg">
                    <li>{language === "en" ? translations.en.Easilya4544ddicted : language === "am" ? translations.am.Easilya4544ddicted : language === "om" ? translations.om.Easilya4544ddicted : ""}</li>
                    <li>{language === "en" ? translations.en.Stayupl55atelack : language === "am" ? translations.am.Stayupl55atelack : language === "om" ? translations.om.Stayupl55atelack : ""}</li>
                    <li>{language === "en" ? translations.en.Visionl555ossweigh : language === "am" ? translations.am.Visionl555ossweigh : language === "om" ? translations.om.Visionl555ossweigh : ""}</li>
                    <li>{language === "en" ? translations.en.Distract444edinstud : language === "am" ? translations.am.Distract444edinstud : language === "om" ? translations.om.Distract444edinstud : ""}</li>
                  </ul>
                </div>

                <div className="bg-[#F7F8FC] mt-10 p-6 rounded-lg">
                  <p className="text-center lg:text-left text-gray-600 mt-4">
                    {language === "en" ? translations.en.Childrendailyscreentim : language === "am" ? translations.am.Childrendailyscreentim : language === "om" ? translations.om.Childrendailyscreentim : ""}
                  </p>
                </div>

              </div>
              <p className="text-center text-gray-700 mt-4">
                {language === "en" ? translations.en.Teensagesto5541 : language === "am" ? translations.am.Teensagesto5541 : language === "om" ? translations.om.Teensagesto5541 : ""}
              </p>

            </div>







            {/* DOTTED DIVIDER */}
            <div className="hidden lg:flex lg:col-span-1 justify-center">
              <div className="border-l-2 border-dashed border-[#8b5cf6] h-[750px]"></div>
            </div>


            {/* RIGHT SIDE */}
            <div className="lg:col-span-6 text-center lg:text-left">
              <div className="flex flex-col lg:flex-row items-center gap-10">

                {/* Donut Chart */}
                <div className="lg:col-span-5 lg:col-start-8 bg-[#F8F6FF] rounded-2xl shadow-sm p-10">
                  <div className="lg:col-span-5 bg-white rounded-2xl shadow-sm p-10 relative">



                    <div className="max-w-5xl mx-auto px-6">

                      <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                          {language === "en" ? translations.en.NegativeEffectsofExc : language === "am" ? translations.am.NegativeEffectsofExc : language === "om" ? translations.om.NegativeEffectsofExc : ""}
                        </h2>
                        {/* Right-side small image */}
                        <div className="lg:col-span-3 bg-white p-10 relative">

                          <img
                            src="https://famisafe.wondershare.com/images/images-2020/screen-time/img1.png"
                            alt="device"
                            className="absolute right-6 top-1/ -translate-y-1/2 w-40 h-auto hidden lg:block"
                          />

                          {/* your content here */}

                        </div>

                      </div>

                    </div>

                    <h3 className="text-center text-gray-700 mt-4 text-lg">
                      {language === "en" ? translations.en.Under2ZEROscreentime : language === "am" ? translations.am.Under2ZEROscreentime : language === "om" ? translations.om.Under2ZEROscreentime : ""}
                    </h3>

                  </div>
                  <br />
                  <br />
                  <h3 className="text-center text-gray-700 mt-4 text-lg">
                    {language === "en" ? translations.en.Onlylessthanaquart : language === "am" ? translations.am.Onlylessthanaquart : language === "om" ? translations.om.Onlylessthanaquart : ""}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="relative max-w-6xl mx-auto bg-white rounded-2xl p-10 shadow-sm">


            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

              {/* LEFT SIDE – Social Apps */}
              <div>
                <h2 className="text-xl font-semibold text-center mb-8">
                  {language === "en" ? translations.en.Averagetimepercentage : language === "am" ? translations.am.Averagetimepercentage : language === "om" ? translations.om.Averagetimepercentage : ""}
                  <br /> {language === "en" ? translations.en.socialapps : language === "am" ? translations.am.socialapps : language === "om" ? translations.om.socialapps : ""}
                </h2>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <FaInstagram className="text-3xl text-pink-500" />
                    <span className="w-28">Instagram</span>
                    <div className="flex-1 bg-purple-100 rounded-full h-4">
                      <div className="bg-purple-500 h-4 rounded-full w-[22%]" />
                    </div>
                    <span className="w-10 text-right font-semibold">22%</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <IoLogoWhatsapp className="text-3xl text-green-500" />
                    <span className="w-28">WhatsApp</span>
                    <div className="flex-1 bg-purple-100 rounded-full h-4">
                      <div className="bg-purple-500 h-4 rounded-full w-[19%]" />
                    </div>
                    <span className="w-10 text-right font-semibold">16%</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <BsSnapchat className="text-3xl text-yellow-400" />
                    <span className="w-28">Snapchat</span>
                    <div className="flex-1 bg-purple-100 rounded-full h-4">
                      <div className="bg-purple-500 h-4 rounded-full w-[17%]" />
                    </div>
                    <span className="w-10 text-right font-semibold">17%</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <FaFacebookF className="text-3xl text-blue-600" />
                    <span className="w-28">Facebook</span>
                    <div className="flex-1 bg-purple-100 rounded-full h-4">
                      <div className="bg-purple-500 h-4 rounded-full w-[16%]" />
                    </div>
                    <span className="w-10 text-right font-semibold">16%</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <FaPinterestP className="text-3xl text-red-500" />
                    <span className="w-28">Pinterest</span>
                    <div className="flex-1 bg-purple-100 rounded-full h-4">
                      <div className="bg-purple-500 h-4 rounded-full w-[7%]" />
                    </div>
                    <span className="w-10 text-right font-semibold">7%</span>
                  </div>


                  <div className="flex items-center gap-4">
                    <img
                      src="https://www.svgrepo.com/show/475656/google-color.svg"
                      alt="Google"
                      className="w-8 h-8"
                    />

                    <span className="w-28">Google</span>
                    <div className="flex-1 bg-purple-100 rounded-full h-4">
                      <div className="bg-purple-500 h-4 rounded-full w-[16%]" />
                    </div>
                    <span className="w-10 text-right font-semibold">16%</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <FaTwitter className="text-3xl text-blue-400" />
                    <span className="w-28">Twitter</span>
                    <div className="flex-1 bg-purple-100 rounded-full h-4">
                      <div className="bg-purple-500 h-4 rounded-full w-[7%]" />
                    </div>
                    <span className="w-10 text-right font-semibold">7%</span>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE – Video Apps */}
              <div>
                <h2 className="text-xl font-semibold text-center mb-8">
                  {language === "en" ? translations.en.Averagetimeperce : language === "am" ? translations.am.Averagetimeperce : language === "om" ? translations.om.Averagetimeperce : ""}


                </h2>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <SiTiktok className="text-3xl text-black" />
                    <span className="w-28">TikTok</span>
                    <div className="flex-1 bg-purple-100 rounded-full h-4">
                      <div className="bg-purple-500 h-4 rounded-full w-[22%]" />
                    </div>
                    <span className="w-10 text-right font-semibold">25%</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <FaYoutube className="text-3xl text-red-600" />
                    <span className="w-28">YouTube</span>
                    <div className="flex-1 bg-purple-100 rounded-full h-4">
                      <div className="bg-purple-500 h-4 rounded-full w-[19%]" />
                    </div>
                    <span className="w-10 text-right font-semibold">19%</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <FaYoutube className="text-3xl text-red-500" />
                    <span className="w-28">YouTube Kids</span>
                    <div className="flex-1 bg-purple-100 rounded-full h-4">
                      <div className="bg-purple-500 h-4 rounded-full w-[17%]" />
                    </div>
                    <span className="w-10 text-right font-semibold">17%</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <TbBrandNetflix className="text-3xl text-red-700" />
                    <span className="w-28">Netflix</span>
                    <div className="flex-1 bg-purple-100 rounded-full h-4">
                      <div className="bg-purple-500 h-4 rounded-full w-[16%]" />
                    </div>
                    <span className="w-10 text-right font-semibold">16%</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <FaTelegramPlane className="text-3xl text-blue-500" />
                    <span className="w-28">Telegram</span>
                    <div className="flex-1 bg-purple-100 rounded-full h-4">
                      <div className="bg-purple-500 h-4 rounded-full w-[9%]" />
                    </div>
                    <span className="w-10 text-right font-semibold">9%</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <TbBrandDisney className="text-3xl text-blue-600" />
                    <span className="w-28">Disney</span>
                    <div className="flex-1 bg-purple-100 rounded-full h-4">
                      <div className="bg-purple-500 h-4 rounded-full w-[7%]" />
                    </div>
                    <span className="w-10 text-right font-semibold">7%</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <BsAmazon className="text-3xl text-blue-600" />
                    <span className="w-28">Amazon</span>
                    <div className="flex-1 bg-purple-100 rounded-full h-4">
                      <div className="bg-purple-500 h-4 rounded-full w-[7%]" />
                    </div>
                    <span className="w-10 text-right font-semibold">7%</span>
                  </div>
                </div>
              </div>

            </div>
            <br />
            <br />
            <h2 className="text-xl md:text-xl  mb-8 text-center">
              {language === "en" ? translations.en.instagramandouTubear : language === "am" ? translations.am.instagramandouTubear : language === "om" ? translations.om.instagramandouTubear : ""}
            </h2>

          </div>
        </div>
        {/* =================== CTA Section =================== */}

        <div className="bg-[white] py-10 sm:py-12 max-w-6xl mx-auto px-4 lg:px-6 flex justify-center">
          <h3 className="text-xl sm:text-3xl lg:text-4xl  font-bold text-gray-800  text-center break-words leading-snug sm:leading-tight" >
            {language === "en" ? translations.en.Managesyourkid : language === "am" ? translations.am.Managesyourkid : language === "om" ? translations.om.Managesyourkid : ""}

          </h3>
        </div>
        <div className=" py-10 sm:py-12 max-w-6xl mx-auto px-4 lg:px-6 flex justify-center">
          <p className="text-xl sm:text-sm lg:text-lg   text-gray-800  text-center break-words leading-snug sm:leading-tight ml-8 mr-8" >
            {language === "en" ? translations.en.Electronicdevices : language === "am" ? translations.am.Electronicdevices : language === "om" ? translations.om.Electronicdevices : ""}

          </p>

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
              {feature54s.map((item, index) => (
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
        {/* End Features grid */}


        {/* =================== How to manage kids' screen time on different devices? =================== */}
        <div className="bg-[white] py-10 sm:py-12 max-w-6xl mx-auto px-4 lg:px-6 flex justify-center">
          <h3 className="text-xl sm:text-3xl lg:text-4xl  font-bold text-gray-800  text-center break-words leading-snug sm:leading-tight" >
            {/* {language === "en" ? translations.en.FamiSafeBestAppto : language === "am" ? translations.am.FamiSafeBestAppto : language === "om" ? translations.om.FamiSafeBestAppto : ""} */}
            How to manage kids' screen time on different devices?
          </h3>
        </div>
        <div className=" py-6 sm:py-6 max-w-5xl mx-auto px-4 lg:px-6 flex justify-center">
          <p className="text-xl sm:text-sm lg:text-lg   text-gray-800  text-center break-words leading-snug sm:leading-tight ml-8 mr-8" >
            Keeping tabs on children's online activities can be challenging. And The electronic devices commonly used by children have
            corresponding screen time management settings. We have summarized the functions of these basic controls for you.
            If you need further parental management and control, please continue reading.

          </p>

        </div>


        {/* CTA BOX */}



        {/* Layout */}
        {/* Main Title */}
        <h2 className="text-3xl font-semibold text-center text-indigo-900 mb-14">
          {screenTimeData.title}
        </h2>

        <div className=" border-1 border-dashed border-purple-500 grid grid-cols-1 lg:grid-cols-5 gap-14 items-start ml-6 mr-6 p-10 rounded-2xl bg-white">

          {/* LEFT – TEXT (60%) */}
          <div className="lg:col-span-3 space-y-10 text-gray-800 leading-relaxed">
            {screenTimeData.sections.map((section, i) => (
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

          {/* RIGHT – IMAGE + TEXT UNDER */}
          <div className="lg:col-span-2 flex flex-col items-center text-center">

            <img
              src={screenTimeData.imageInfo.src}
              alt={screenTimeData.imageInfo.title}
              className="w-full max-w-md object-contain"
            />

            {/* UNDER IMAGE TEXT */}
            <h4 className="mt-6 font-semibold text-lg text-indigo-900">
              {screenTimeData.imageInfo.title}
            </h4>

            <p className="bg-gray-100 mt-2 text-gray-600 text-sm leading-relaxed max-w-sm rounded-lg p-4">
              {screenTimeData.imageInfo.description}
            </p>

          </div>

        </div>
        {/* =================== Final CTA Section =================== */}
        <br />
        <br />

        {/* CTA BOX */}
        {/* Main Title */}
        <h2 className="text-3xl font-semibold text-center text-indigo-900 mb-14">
          {screenTimeDatav.title}
        </h2>
        <div className="border-1 border-dashed border-purple-500 grid grid-cols-1 lg:grid-cols-5 gap-14 items-start ml-6 mr-6 p-10 rounded-2xl bg-white">


          {/* IMAGE – NOW LEFT */}
          <div className="lg:col-span-2 order-1 lg:order-1 flex flex-col items-center text-center">
            <img
              src={screenTimeDatav.imageInfo.src}
              alt={screenTimeDatav.imageInfo.title}
              className="w-full max-w-md object-contain"
            />

            <h4 className="mt-6 font-semibold text-lg text-indigo-900">
              {screenTimeDatav.imageInfo.title}
            </h4>

            <p className="bg-gray-100 mt-2 text-gray-600 text-sm leading-relaxed max-w-sm rounded-lg p-4">
              {screenTimeDatav.imageInfo.description}
            </p>
          </div>

          {/* TEXT – NOW RIGHT */}
          <div className="lg:col-span-3 order-2 lg:order-2 space-y-10 text-gray-800 leading-relaxed">
            {screenTimeDatav.sections.map((section, i) => (
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

        {/* =================== Manage screen time on windows: =================== */}
        {/* Main Title */}
        <h2 className="text-3xl font-semibold text-center text-indigo-900 mb-14">
          {screenTimeDatad.title}
        </h2>

        <div className=" border-1 border-dashed border-purple-500 grid grid-cols-1 lg:grid-cols-5 gap-14 items-start ml-6 mr-6 p-10 rounded-2xl bg-white">

          {/* LEFT – TEXT (60%) */}
          <div className="lg:col-span-3 space-y-10 text-gray-800 leading-relaxed">
            {screenTimeDatad.sections.map((section, i) => (
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

          {/* RIGHT – IMAGE + TEXT UNDER */}
          <div className="lg:col-span-2 flex flex-col items-center text-center">

            <img
              src={screenTimeDatad.imageInfo.src}
              alt={screenTimeDatad.imageInfo.title}
              className="w-full max-w-md object-contain"
            />

            {/* UNDER IMAGE TEXT */}
            <h4 className="mt-6 font-semibold text-lg text-indigo-900">
              {screenTimeDatad.imageInfo.title}
            </h4>

            <p className="bg-gray-100 mt-2 text-gray-600 text-sm leading-relaxed max-w-sm rounded-lg p-4">
              {screenTimeDatad.imageInfo.description}
            </p>

          </div>

        </div>
        {/* =================== End Manage screen time on windows: =================== */}


        <br />
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

        {/* =================== Other parenting tips to limit screen time =================== */}
        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#2E1A72] mb-16">
          Other parenting tips to limit <br /> screen time
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12">
          {tips.map((tip) => (
            <div key={tip.id} className="text-center">
              {/* Number circle */}
              <div className="mx-auto mb-6 w-14 h-14 rounded-full border-2 border-[#2E1A72] flex items-center justify-center relative">
                <span className="text-lg font-semibold text-black z-10">
                  {tip.id}
                </span>
                <div className="absolute bottom-0 left-0 w-full h-1/2 rounded-b-full bg-gradient-to-r from-[#6FE3C1] to-[#B38CFF]" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#2E1A72] mb-4">
                {tip.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>

        {/* =================== END Other parenting tips to limit screen time =================== */}

        {/* =================== FAQS =================== */}
        <br />
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



