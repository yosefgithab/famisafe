import { useLanguage } from "../../../context/LanguageContext";
import { translations } from "../../../Data/translations";


export default function SecuritySection() {
  
    const { language } = useLanguage();
  return (
    <section className="w-full px-4 sm:px-6 lg:px-12 py-16">
      <div className="relative mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-r from-[#D8D0FF] to-[#E8E3FF] p-6 sm:p-10 flex flex-col lg:flex-row items-center gap-10">

        {/* LEFT CONTENT */}
        <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-2/3">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 flex-1 text-center">
            <div className="flex justify-center mb-4 text-purple-300">
              <span className="text-2xl">🌿</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              {language === "en"
                ? translations.en.TrustedProtection
                : language === "am"
                  ? translations.am.TrustedProtection
                  : language== "om" ?  translations.om.TrustedProtection: ""}
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {language === "en"
                ? translations.en.FamiSafeuses
                : language === "am"
                  ? translations.am.FamiSafeuses
                  : language== "om" ?  translations.om.FamiSafeuses: ""}
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 flex-1 text-center">
            <div className="flex justify-center mb-4 text-purple-300">
              <span className="text-2xl">🌿</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              {language === "en"
                ? translations.en.PrivacyPromise
                : language === "am"
                  ? translations.am.PrivacyPromise
                  : language== "om" ?  translations.om.PrivacyPromise: ""}
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {language === "en"
                ? translations.en.Zerodatacollection
                : language === "am"
                  ? translations.am.Zerodatacollection
                  : language== "om" ? translations.om.Zerodatacollection: ""}
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
          <img
            src="https://famisafe.wondershare.com/images/images-2025/index/purple-lock-mobile.png"
            alt="Security Lock"
            className="w-40 sm:w-56 lg:w-72 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
