import React, { useState } from 'react'
import { useLanguage } from '../../../context/LanguageContext';
import { translations } from '../../../Data/translations';

export default function UserFAQS() {

  const { language } = useLanguage();

  const [activeTab, setActiveTab] = useState("general");

  const tabs = [
    { id: "general", label: "General Question" },
    { id: "account", label: "Account & App" },
    { id: "product", label: "Product Use" },
    { id: "payment", label: "Payment & Refund & Renewal" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "general":
        return (
          <>
            {/* 1 */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. What is FamiSafe?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              FamiSafe is the most reliable parental control app. It is a flexible and smart solution for parents to manage their kid's Android, iOS, Fire OS, Windows, Mac, or Chromebook devices.
            </p>
            <hr className="border-gray-200 mb-8" />

            {/* 2 */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. What devices does FamiSafe support?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              For mobile devices: Android (4.4+), iOS (11+), Kindle Fire OS.
              For desktop devices: Windows, Mac, and Chromebook.
            </p>
            <hr className="border-gray-200 mb-8" />

            {/* 3 */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. Can I use FamiSafe to control game consoles?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              No. FamiSafe does not support Xbox, PlayStation, Nintendo Switch, or other gaming consoles.
            </p>
            <hr className="border-gray-200 mb-8" />

            {/* 4 */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. Can I use FamiSafe on PC, Laptop, or Mac?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes. FamiSafe supports Windows, Mac, and Chromebook devices.
            </p>
            <hr className="border-gray-200 mb-8" />

            {/* 5 */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. How many devices can be monitored?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Monthly plan: up to 5 devices. Quarterly and Annual plans: up to 10 devices.
            </p>
            <hr className="border-gray-200 mb-8" />

            {/* 6 */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. Do I need physical access?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes. Initial installation and permission setup require access to the child’s device.
            </p>
            <hr className="border-gray-200 mb-8" />

            {/* 7 */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              7. Can FamiSafe block ads?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              No. Ad blocking is not supported.
            </p>
            <hr className="border-gray-200 mb-8" />

            {/* 8 */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              8. Can it block iOS system apps?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              No. Apple policy does not allow blocking system apps like Camera, Phone, or Maps.
            </p>
            <hr className="border-gray-200 mb-8" />

            {/* 9 */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              9. Does it support Apple Watch?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              No, Apple Watch is not supported.
            </p>
            <hr className="border-gray-200 mb-8" />

            {/* 10 */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              10. What is inappropriate picture detection?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              FamiSafe supports remote screenshots and image scanning. Results appear in the parent app but do not notify the child device directly.
            </p>
            <hr className="border-gray-200 mb-8" />

            {/* 11 */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              11. Can FamiSafe block VPN use or disable Wi-Fi, mobile data, or hotspots?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Currently not supported. You cannot change the network connection settings on the target device through FamiSafe.
            </p>
            <hr className="border-gray-200 mb-8" />

            {/* 12 */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              12. Can FamiSafe detect suspicious content in WhatsApp on a child’s iOS device?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Currently not supported. Due to iOS’s strict privacy protections, FamiSafe cannot capture information inside WhatsApp on iOS devices.
            </p>
            <hr className="border-gray-200 mb-8" />

            {/* 13 */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              13. What languages are currently supported by FamiSafe?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              FamiSafe supports 9 languages: English, French, German, Spanish, Portuguese, Japanese, Korean, Italian, and Arabic.
            </p>
            <hr className="border-gray-200 mb-8" />

            {/* 14 */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              14. What languages does the Suspicious Words feature support?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              It supports 6 languages: English, French, German, Spanish, Portuguese, and Japanese. Detection across multiple languages is supported.
            </p>
            <hr className="border-gray-200 mb-8" />

            {/* 15 */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              15. Can FamiSafe control contact additions or removals?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Currently not supported. However, unwanted contacts can be blocked through Calls & Messages settings.
            </p>
            <hr className="border-gray-200 mb-8" />

            {/* 16 */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              16. Can I create rules using voice commands?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Currently not supported. FamiSafe is working to improve Famibot capabilities.
            </p>
            <hr className="border-gray-200 mb-8" />

            {/* 17 */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              17. Can FamiSafe block proxy websites?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Currently not supported.
            </p>
            <hr className="border-gray-200 mb-8" />

            {/* 18 */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              18. Can FamiSafe block app downloads?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              On iOS devices, restrictions can be set under iOS Restrictions. On Android, settings can be configured under App Rules. Blocking downloads on Windows or Mac is not supported.
            </p>
            <hr className="border-gray-200 mb-8" />

            {/* 19 */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              19. Can FamiSafe manage Windows devices with multiple monitors?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Currently not supported. It is recommended to avoid multiple monitor setups.
            </p>
            <hr className="border-gray-200 mb-8" />

            {/* 20 */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              20. Can FamiSafe override silent mode?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Currently not supported.
            </p>
            <hr className="border-gray-200 mb-8" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              21. Can FamiSafe detect suspicious photos?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, FamiSafe can detect suspicious photos in your child’s gallery and notify parents immediately.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              22. Does FamiSafe support Chromebook devices?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, FamiSafe supports Chromebook devices with compatible Chrome OS versions.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              23. Can I monitor YouTube activity?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, FamiSafe allows parents to monitor YouTube watch history and detect inappropriate content.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              24. Does FamiSafe offer a web dashboard?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, you can manage and monitor devices through the FamiSafe web dashboard.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              25. Can I receive instant alerts?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, FamiSafe sends real-time alerts for suspicious activities and location changes.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              26. Is FamiSafe easy to install?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, FamiSafe is simple to install and set up with step-by-step guidance provided in the app.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              27. Does FamiSafe work on Mac computers?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, FamiSafe supports Mac computers with compatible macOS versions.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              28. Can I set screen time schedules?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, parents can create customized screen time schedules for weekdays and weekends.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              29. Does FamiSafe support multiple children?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, you can add and monitor multiple children under one FamiSafe account.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              30. Can I pause internet access remotely?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, FamiSafe allows you to pause internet access remotely from your parent device.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              31. Does FamiSafe provide driving reports?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, FamiSafe offers driving reports including speed monitoring and trip history.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              32. Can I track deleted messages?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              FamiSafe can detect and notify parents about suspicious or deleted text messages on supported devices.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              33. Does FamiSafe block inappropriate content?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, FamiSafe blocks inappropriate websites and content based on filtering categories.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              34. Can I monitor app usage?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, parents can see detailed reports of app usage time and frequency.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              35. Is FamiSafe safe to use?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, FamiSafe uses advanced encryption and privacy protection to keep user data secure.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              36. Does FamiSafe work internationally?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, FamiSafe works globally as long as the device has internet access.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              37. Can I customize content filters?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, parents can customize website categories and keywords for content filtering.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              38. Does FamiSafe support Windows PCs?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, FamiSafe is compatible with Windows PCs for monitoring and control features.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              39. Can I get activity reports?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, FamiSafe provides detailed daily and weekly activity reports.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              40. Does FamiSafe require a subscription?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Yes, FamiSafe requires a paid subscription after the free trial period ends.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              41. Can I cancel my subscription anytime?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, you can cancel your FamiSafe subscription at any time through your account settings.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              42. Does FamiSafe offer a free trial?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, FamiSafe offers a free trial period so users can explore its features before purchasing.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              43. Can I manage devices remotely?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, parents can manage and control their child’s devices remotely using the parent app or web dashboard.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              44. Does FamiSafe notify when a device is offline?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, FamiSafe can notify parents when a monitored device goes offline.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              45. Can I block specific apps?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, FamiSafe allows parents to block specific apps instantly.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              46. Does FamiSafe track real-time location?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, FamiSafe provides real-time GPS location tracking for connected devices.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              47. Can I review browsing history?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, parents can view browsing history reports to monitor online activities.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              48. Does FamiSafe support multiple languages?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, FamiSafe supports multiple languages to serve users worldwide.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              49. Can I set safe zones?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, you can create geofenced safe zones and receive alerts when your child enters or leaves them.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              50. Does FamiSafe require internet access?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, internet access is required for real-time monitoring and updates.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              51. Can I monitor social media apps?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, FamiSafe monitors activity on supported social media platforms.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              52. Does FamiSafe slow down devices?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              No, FamiSafe is optimized to run smoothly without affecting device performance.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              53. Can I limit app installation?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, parents can restrict or monitor new app installations.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              54. Does FamiSafe work with tablets?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, FamiSafe supports tablets running compatible operating systems.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              55. Can I reset my password?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, you can reset your password through the account recovery option.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              56. Does FamiSafe protect privacy?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, FamiSafe follows strict privacy policies and data protection standards.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              57. Can I upgrade my subscription plan?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, users can upgrade their subscription plan at any time.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              58. Does FamiSafe provide customer support?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, FamiSafe provides customer support through email and online help resources.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              59. Can I uninstall FamiSafe easily?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, FamiSafe can be uninstalled following the proper removal instructions in the app.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              60. Does FamiSafe work without the parent app?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              No, the parent app or web dashboard is required to manage and monitor devices.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              61. Can I monitor text messages?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, FamiSafe can monitor text messages on supported devices.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              62. Does FamiSafe require device rooting or jailbreaking?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              No, FamiSafe does not require rooting or jailbreaking to function properly.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              63. Can I see call logs?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, FamiSafe allows parents to review call history on supported devices.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              64. Does FamiSafe offer activity timelines?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, FamiSafe provides detailed timelines of device activity.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              65. Can I control device usage during school hours?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, you can set specific schedules to limit device usage during school hours.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              66. How do I contact FamiSafe support?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              You can contact FamiSafe support through the official website, email support, or the in-app help center.
            </p>
          </>
        );

      case "account":
        return (
          <>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Do I need to create an account before using your product?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, FamiSafe is account-based. You need to get a membership first.
              You can create an account within the app after installation.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. How to install FamiSafe app?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              You can easily install the app on both your phone and your kid's
              device from App Store, Google Play, or Amazon App Store.
              Desktop versions can be downloaded by visiting famisafe.com.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. How should I set up everything on my kid's device?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Once FamiSafe is installed on your kid's device, log into your
              FamiSafe account and select the identity as Kid. Then follow the
              in-app guide step by step to complete the necessary settings.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. What should I do when I need tech support?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              You may submit feedback in the app or send an email to
              customer_service@wondershare.com. Usually, you will receive a reply
              within 24 business hours.
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. How to uninstall FamiSafe from the parent's device?
            </h2>
            <div className="text-gray-600 leading-relaxed mb-8 space-y-4">
              <p><strong>For Android Device:</strong></p>
              <p>
                Open Settings → Apps or Application Manager → Tap FamiSafe →
                Tap Uninstall.
              </p>

              <p><strong>For iOS Device:</strong></p>
              <p>
                Tap and hold the FamiSafe icon until it wiggles → Click the “x”
                icon → Delete FamiSafe.
              </p>
            </div>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. How to uninstall FamiSafe from a kid's device?
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p><strong>For Android Device:</strong></p>
              <p>
                Open FamiSafe → Tap Uninstall → Enter your FamiSafe account
                password → Tap OK to confirm.
              </p>

              <p><strong>For iOS Device:</strong></p>
              <p>
                Delete the app first → Go to Settings → General → Device
                Management → FamiSafe → Remove Management (MDM).
              </p>

              <p><strong>For Windows Device:</strong></p>
              <p>
                Quit FamiSafe from the taskbar → Go to Control Panel →
                Uninstall Programs → Select Wondershare FamiSafe → Click Uninstall.
              </p>

              <p><strong>For Mac Device:</strong></p>
              <p>
                Go to Library → Application Support → FamiSafe → bin →
                Launch FamisafeUninstall.app → Enter passwords to confirm removal.
              </p>

              <p><strong>For Chromebook Device:</strong></p>
              <p>
                Open FamiSafe → Tap Uninstall → Enter your account password →
                Tap OK to confirm.
              </p>
            </div>
          </>
        );
      case "product":
        return (
          <>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. What is the difference between managing and controlling an iOS device and an Android device with FamiSafe?
            </h2>
            <div className="text-gray-600 leading-relaxed mb-8 space-y-4">
              <p>
                In most cases, FamiSafe works the same on both devices, though there are several differences:
              </p>
              <p>
                • FamiSafe provides device activity reports, browser history reports,
                and app usage reports when the kid's device is an Android phone or tablet.
                These reports are currently not available on iOS devices due to strict
                system restrictions.
              </p>
              <p>
                • When blocking apps on Android, the blocked app icon is still displayed,
                but a FamiSafe cover appears when your kid tries to open it.
                On iOS devices, the blocked app icon will be hidden.
              </p>
            </div>

            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. Can I check the current location of my kid's device and the places the device has been taken to?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes, you can use FamiSafe to track both the real-time location and
              location history of your kid's device.
            </p>

            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. Will I be notified when my kid goes to school?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes. You can set the school area as a geo-fence. When your kid arrives
              at or leaves school, you will receive instant notifications.
            </p>

            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. Can I block my kid's phone at bedtime?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes. You can use the Smart Schedule feature to set device blocking
              schedules at specific times such as bedtime or during school hours.
            </p>

            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. When my kid's device is blocked, how can I contact him/her?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              FamiSafe does not block essential communication. Your kid can still
              make phone calls or send text messages even when the blocking
              function is enabled.
            </p>

            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. Can I block porn on my kid's device?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Yes. You can use the Web Filter and App Block features to block
              pornographic websites and restrict inappropriate apps.
            </p>

            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              7. What should I ensure for FamiSafe to work properly?
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                • Always allow Location access when installing FamiSafe so real-time
                tracking and location history can function properly.
              </p>
              <p>
                • On Android devices, grant all required permissions. The app will
                not work correctly if permissions are denied.
              </p>
              <p>
                • FamiSafe cannot track the device if it is powered off.
              </p>
              <p>
                • The app usually runs in the background, but in rare cases it may
                stop. It is recommended to occasionally open the app on your kid's
                device to ensure it remains active.
              </p>
            </div>
          </>
        );
      case "payment":
        return (
          <>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. How much does FamiSafe cost?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              FamiSafe offers subscription-based pricing with three options:
              <br />• Monthly: US $9.99
              <br />• Quarterly: US $19.99
              <br />• Yearly: US $59.99
            </p>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. How to claim a refund for my order?
            </h2>
            <div className="text-gray-600 leading-relaxed mb-8 space-y-4">
              <p>
                Please note that FamiSafe will return your order if it meets our
                refund requirements. Refund policy details:
                <a href="https://famisafe.wondershare.com/refund-policy.html" className="text-blue-600 underline" target="_blank">Refund Policy</a>
              </p>

              <p><strong>For orders purchased via Website:</strong></p>
              <p>
                Submit a refund request to our support team:
                <a href="https://support.wondershare.com/en/contact" className="text-blue-600 underline" target="_blank">Support Contact</a>.
                You can also use the Feedback section in the app.
              </p>

              <p><strong>For orders purchased via Google Play:</strong></p>
              <p>1. Refund within 48 hours:</p>
              <ol className="list-decimal ml-6 space-y-1">
                <li>Go to <a href="https://play.google.com/store/account/" className="text-blue-600 underline" target="_blank">Google Play Account</a></li>
                <li>Click Order History and find the order.</li>
                <li>Click More → Request a refund or Report a problem → choose your situation.</li>
                <li>Complete the form and submit.</li>
                <li>You’ll get an email with the refund decision within 15 minutes to 4 working days.</li>
              </ol>
              <p>2. Refund after 48 hours: Contact our support team via:
                <a href="https://support.wondershare.com/en/contact" className="text-blue-600 underline" target="_blank">Support Contact</a>.
              </p>

              <p><strong>For orders purchased via App Store:</strong></p>
              <ol className="list-decimal ml-6 space-y-1">
                <li>Go to <a href="http://reportaproblem.apple.com" className="text-blue-600 underline" target="_blank">reportaproblem.apple.com</a></li>
                <li>Sign in with your Apple ID.</li>
                <li>Click "Report a Problem" next to the item → Follow instructions → Submit request.</li>
              </ol>
            </div>
            <hr className="border-gray-200 mb-8" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. How to cancel my renewal subscription?
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p><strong>For orders purchased via Website:</strong></p>
              <p>
                Log into your account → Settings → My Subscription → Disable Auto Renew.
                If you cannot cancel, contact support:
                <a href="https://support.wondershare.com/en/contact" className="text-blue-600 underline" target="_blank">Support</a>.
              </p>

              <p><strong>For orders purchased via Google Play:</strong></p>
              <p>
                Open Google Play Store → Menu → Subscriptions → Select your subscription → Cancel subscription → Follow instructions.
              </p>

              <p><strong>For orders purchased via App Store:</strong></p>
              <p>
                Open Settings → Tap your name → Subscriptions → Select the subscription → Cancel Subscription.
                If you don’t see Cancel Subscription, it’s already canceled. For other methods:
                <a href="https://support.apple.com/en-us/HT202039" className="text-blue-600 underline" target="_blank">Apple Support</a>.
              </p>
            </div>
          </>
        );
      default:
        return null;
    }
  };
  return (
    <section className="w-full bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className=" max-w-7xl mx-auto ">
        <div className=" bg-[#FFF2EE] rounded-[45px]">
          <div className=" rounded-[60px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 flex flex-col-reverse lg:flex-row items-center gap-12 rounded-[60px]">

            {/* LEFT */}
            <div className=" w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold leading-tight text-gray-900">
                Frequently Asked Questions
              </h1>

              <p className="mt-5 text-gray-600 max-w-xl mx-auto lg:mx-0">
                {/* {language === "en"
                  ? translations.en.MoniterProtect
                  : language === "am"
                    ? translations.am.MoniterProtect
                    : translations.or.MoniterProtect} */}
                    Know the detailed answers about product use, account setup, app install, payment and refund, etc. You can find some other frequently asked questions about parental control app.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src="https://famisafe.wondershare.com/images/images-2020/new/other/hero_faq.png"
                alt="App Preview"
                className="w-full max-w-md lg:max-w-lg drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="max-w-6xl mx-auto">

          {/* Tabs */}
          <div className="sticky top-12 z-50  flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 bg-white">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300
          ${activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-400 text-white shadow-md'
                    : 'border border-purple-500 text-purple-600 hover:bg-purple-50'}
        `}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="bg-white shadow rounded-lg p-6 sm:p-8 md:p-10 max-w-full sm:max-w-3xl md:max-w-4xl mx-auto">
            {renderContent()}
          </div>

        </div>
        <br />
        <div className=" bg-[#322163] mx-auto max-w-6xl rounded-3xl bg-gradient-to-r px-6 py-16 md:px-12 md:py-20">

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

                <span className="text-lg font-semibold text-white">
                  {language === "en"
                    ? translations.en.FamiSafe
                    : language === "am"
                      ? translations.am.FamiSafe
                      : language === "om"
                        ? translations.om.FamiSafe
                        : ""}
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl font-semibold text-white md:text-4xl max-w-xl">
                {language === "en"
                  ? translations.en.TheMostReliable
                  : language === "am"
                    ? translations.am.TheMostReliable
                    : language === "om"
                      ? translations.om.TheMostReliable
                      : ""}
              </h2>

            </div>

            {/* RIGHT SIDE (Buttons) */}
            <div className="flex flex-col sm:flex-row gap-4">

              <button
                className="rounded-full bg-[#8B5CF6] px-8 py-3 text-base font-semibold text-white transition hover:bg-[#7C3AED]"
              >
                {language === "en"
                  ? translations.en.TryitFrees
                  : language === "am"
                    ? translations.am.TryitFrees
                    : language === "om"
                      ? translations.om.TryitFrees
                      : ""}
              </button>

              <button
                className="rounded-full border-2 border-[#8B5CF6] px-8 py-3 text-base font-semibold text-[#8B5CF6] transition hover:bg-[#8B5CF6] hover:text-white"
              >
                {language === "en"
                  ? translations.en.BuyNow
                  : language === "am"
                    ? translations.am.BuyNow
                    : language === "om"
                      ? translations.om.BuyNow
                      : ""}
              </button>

            </div>

          </div>

        </div>
      </div>

    </section>
  )
}






