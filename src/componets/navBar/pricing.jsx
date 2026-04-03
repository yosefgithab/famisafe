import { Check } from "lucide-react";
import { useState } from "react";
import { BsAndroid2 } from "react-icons/bs";
import { FaUsers, FaGraduationCap, FaWindows, FaApple, FaChrome, FaShieldAlt, FaHeadset, FaUndoAlt, FaSyncAlt } from "react-icons/fa";
import { MdOutlineWifiProtectedSetup } from "react-icons/md";
import { SiIos, SiAmazon } from "react-icons/si";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../Data/translations";

export default function Pricing() {
    const { language } = useLanguage();
    const faqs = language === "en" ? translations.en.faqs : language === "am" ? translations.am.faqs : language == "om" ? translations.om.faqs : "";
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);


    };

    const [activeTab, setActiveTab] = useState("family");

    const familyPlans = [
        {
            title: "Yearly Plan",
            price: "ETB 1499 ",
            old: "ETB 1999/mo",
            note: "ETB 17,999/yr with Auto-Renew, cancel any time.",
            devices: "Protect up to 10 devices with all features",
            best: true,
        },
        {
            title: "Quarterly Plan",
            price: "ETB 1999",
            old: "ETB 2399/mo",
            note: "ETB 23,999/qtr with Auto-Renew, cancel any time.",
            devices: "Protect up to 8 devices with all features",
        },
        {
            title: "Monthly Plan",
            price: "ETB 2399",
            old: "ETB 2399",
            note: "Auto-Renew, cancel any time.",
            devices: "Protect up to 5 devices with all features",
        },
    ];

    const features = [
        {
            icon: <FaShieldAlt size={32} />,
            title: "Secure",
            description:
                "We value your privacy and protect your financial/personal info with advanced encryption and advanced fraud protection.",
        },
        {
            icon: <FaHeadset size={32} />,
            title: "Support service",
            description:
                "Knowledgeable representatives available to assist you through instant live chat and email response within 24 hours.",
        },
        {
            icon: <FaUndoAlt size={32} />,
            title: "Money-back guarantee",
            description:
                "All of our products come with a 7-day money-back guarantee, based on our refund policy.",
        },
        {
            icon: <MdOutlineWifiProtectedSetup size={32} />,
            title: "Updates",
            description:
                "Free software updates within the valid period of the software.",
        },
    ];


    return (
        <section className=" py-12 md:py-16 bg-gradient-to-r from-purple-100 via-blue-100 to-green-100 ">
            <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">

                {/* TITLE */}
                <h2 className="text-center text-3xl font-semibold mb-10">
                    The Most Reliable Parental Control App
                </h2>

                {/* TABS */}
                <div className="flex justify-center gap-6 md:gap-10 mb-10 md:mb-12 flex-wrap">

                    <button
                        onClick={() => setActiveTab("family")}
                        className={`flex items-center gap-2 pb-2 border-b-2 text-sm md:text-base ${activeTab === "family"
                            ? "border-black font-semibold"
                            : "border-transparent text-gray-500"
                            }`}
                    >
                        <FaUsers /> For Family
                    </button>

                    <button
                        onClick={() => setActiveTab("school")}
                        className={`flex items-center gap-2 pb-2 border-b-2 text-sm md:text-base ${activeTab === "school"
                            ? "border-black font-semibold"
                            : "border-transparent text-gray-500"
                            }`}
                    >
                        <FaGraduationCap /> For School
                    </button>

                </div>
                {/* ================= FAMILY TAB ================= */}
                {/* {activeTab === "family" && (

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

                        {familyPlans.map((plan, index) => (

                            <div
                                key={index}
                                className={`bg-white rounded-xl shadow-md p-6 md:p-8 relative ${plan.best ? "border-4 border-purple-500" : ""
                                    }`}
                            >

                                {plan.best && (
                                    <div className="absolute top-0 left-0 right-0 text-center bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-t-lg font-semibold">
                                        Best Value
                                    </div>
                                )}

                                <h3 className="text-xl font-semibold mt-6 mb-6">{plan.title}</h3>

                                <div className="flex items-end gap-2 mb-4">
                                    <span className="text-3xl md:text-4xl font-bold">{plan.price}</span>
                                    <span className="text-lg">/mo</span>
                                    <span className="line-through text-gray-400">{plan.old}</span>
                                </div>

                                <div className="flex items-center gap-3 text-gray-600 mb-6">
                                    <span>Available:</span>

                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        <FaWindows className="hover:text-blue-600 cursor-pointer" />
                                    </a>

                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        <FaApple className="hover:text-black cursor-pointer" />
                                    </a>

                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        <SiIos className="hover:text-gray-700 cursor-pointer" />
                                    </a>

                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        <SiAmazon className="hover:text-orange-500 cursor-pointer" />
                                    </a>

                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        <BsAndroid2 className="hover:text-green-600 cursor-pointer" />
                                    </a>

                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        <FaChrome className="hover:text-yellow-500 cursor-pointer" />
                                    </a>
                                </div>

                                <p className="text-sm text-gray-500 mb-8">{plan.note}</p>

                                <button className="w-full border-2 border-blue-500 text-blue-600 py-3 rounded-lg font-semibold mb-4">
                                    Buy Now
                                </button>

                                <button className="w-full bg-yellow-400 py-3 rounded-lg font-bold text-blue-800 mb-6">
                                    PayPal
                                </button>

                                <ul className="text-sm">
                                    <li>• {plan.devices}</li>
                                </ul>

                            </div>


                        ))}

                    </div>


                )} */}
                {/* ================= FAMILY TAB ================= */}
                {activeTab === "family" && (
                    <>
                        {/* FAMILY PLAN CARDS */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {familyPlans.map((plan, index) => (
                                <div
                                    key={index}
                                    className={`bg-white rounded-xl shadow-md p-6 md:p-8 relative ${plan.best ? "border-4 border-purple-500" : ""
                                        }`}
                                >
                                    {plan.best && (
                                        <div className="absolute top-0 left-0 right-0 text-center bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-t-lg font-semibold">
                                            Best Value
                                        </div>
                                    )}

                                    <h3 className="text-xl font-semibold mt-6 mb-6">{plan.title}</h3>

                                    <div className="flex items-end gap-2 mb-4">
                                        <span className="text-3xl md:text-4xl font-bold">{plan.price}</span>
                                        <span className="text-lg">/mo</span>
                                        <span className="line-through text-gray-400">{plan.old}</span>
                                    </div>

                                    <div className="flex items-center gap-3 text-gray-600 mb-6">
                                        <span>Available:</span>
                                        <FaWindows className="hover:text-blue-600 cursor-pointer" />
                                        <FaApple className="hover:text-black cursor-pointer" />
                                        <SiIos className="hover:text-gray-700 cursor-pointer" />
                                        <SiAmazon className="hover:text-orange-500 cursor-pointer" />
                                        <BsAndroid2 className="hover:text-green-600 cursor-pointer" />
                                        <FaChrome className="hover:text-yellow-500 cursor-pointer" />
                                    </div>

                                    <p className="text-sm text-gray-500 mb-8">{plan.note}</p>

                                    <button
                                        onClick={() => window.open("/PaymentPage", "_blank")}
                                        className="w-full border-2 border-blue-500 text-blue-600 py-3 rounded-lg font-semibold mb-4"
                                    >
                                        tele Birr
                                    </button>

                                    <button
                                        onClick={() => window.open("https://your-cbe-link.com", "_blank")}
                                        className="w-full bg-yellow-400 py-3 rounded-lg font-bold text-blue-800 mb-6"
                                    >
                                        CBE
                                    </button>

                                    <ul className="text-sm">
                                        <li>• {plan.devices}</li>
                                    </ul>
                                </div>
                            ))}
                        </div>



                        <br />
                        <br />
                        <div className="rounded-[10px] w-full bg-white py-16 px-4 sticky top-0 bg-white z-50">
                            <div className="max-w-7xl mx-auto">
                                {/* ... include your comparison table grids here ... */}
                                <div className="max-w-6xl mx-auto text-center py-6">

                                    {/* Title */}
                                    <h2 className="font-bold text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
                                        FamiSafe's Awards
                                    </h2>

                                    {/* Description */}
                                    <p className="mt-4 text-gray-600 mx-auto  max-w-xl text-sm sm:text-base md:text-lg">
                                        FamiSafe has won Seal of Approval, National Parenting Product Awards, Parents’ Picks Awards Winner in 2024, and National Parenting Product Awards Winner in 2024.
                                    </p>

                                    {/* Image */}
                                    <div className="mt-8 sm:mt-10 md:mt-12">
                                        <img
                                            src="https://famisafe.wondershare.com/images/images2023/awards.png"
                                            alt="section"
                                            className="w-full h-auto rounded-xl"
                                        />
                                    </div>

                                </div>
                                <div className="max-w-full mx-auto text-center py-6">
                                    <h2 className="font-bold text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                                        Compare All plans
                                    </h2>

                                </div>
                                {/* ================= COMPARISON TABLE ================= */}
                                <div className="w-full bg-white py-16 px-4 sticky top-0 bg-white z-50">
                                    <div className="max-w-7xl mx-auto  ">

                                        {/* Plans Header */}
                                        <div className="grid grid-cols-2 md:grid-cols-4 text-center items-center sticky top-0 bg-white z-50">

                                            {/* Free Trial */}
                                            <div>
                                                <h3 className="text-lg font-semibold">Free Trial</h3>
                                                <p className="text-3xl font-bold mt-2">Free</p>
                                            </div>

                                            {/* Yearly Plan */}
                                            <div className="relative border-2 border-purple-500 rounded-lg overflow-hidden">

                                                {/* Best Value Header */}
                                                <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm py-2 text-center font-semibold">
                                                    Best Value
                                                </div>

                                                <div className="p-6 text-center">
                                                    <h3 className="text-lg font-semibold">Yearly Plan</h3>

                                                    <p className="text-3xl font-bold mt-2">
                                                        US$ 4.99 <span className="text-base">/mo</span>
                                                    </p>

                                                    <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                                                        Buy Now
                                                    </button>
                                                </div>

                                            </div>

                                            {/* Quarterly Plan */}
                                            <div>
                                                <h3 className="text-lg font-semibold">Quarterly Plan</h3>
                                                <p className="text-3xl font-bold mt-2">
                                                    US$ 6.67 <span className="text-base">/mo</span>
                                                </p>
                                                <button className="mt-4 border border-blue-500 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50">
                                                    Buy Now
                                                </button>
                                            </div>

                                            {/* Monthly Plan */}
                                            <div>
                                                <h3 className="text-lg font-semibold">Monthly Plan</h3>
                                                <p className="text-3xl font-bold mt-2">
                                                    US$ 9.99 <span className="text-base">/mo</span>
                                                </p>
                                                <button className="mt-4 border border-blue-500 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50">
                                                    Buy Now
                                                </button>
                                            </div>

                                        </div>

                                        {/* Feature Section */}

                                        {/* Supporting Device */}
                                        <div className="bg-gray-100 mt-10 py-4 px-6 font-semibold">
                                            Supporting Device
                                        </div>

                                        <div className="grid grid-cols-2 md:grid-cols-4 py-4 px-6 text-center">
                                            <div className="text-left font-medium">Available</div>
                                            <div>1 Device</div>
                                            <div>10 Devices</div>
                                            <div>8 Devices</div>
                                            <div>5 Devices</div>
                                        </div>

                                        {/* Device Activity */}
                                        <div className="bg-gray-100 py-4 px-6 font-semibold">
                                            Device Activity
                                        </div>

                                        <div className="grid grid-cols-2 md:grid-cols-4 py-4 px-6 text-center">
                                            <div className="text-left font-medium">Screen Time</div>
                                            <Check className="mx-auto text-blue-500" />
                                            <Check className="mx-auto text-blue-500" />
                                            <Check className="mx-auto text-blue-500" />
                                            <Check className="mx-auto text-blue-500" />
                                        </div>

                                        <div className="grid grid-cols-2 md:grid-cols-4 py-4 px-6 text-center">
                                            <div className="text-left font-medium">Screen Viewer</div>
                                            <Check className="mx-auto text-blue-500" />
                                            <Check className="mx-auto text-blue-500" />
                                            <Check className="mx-auto text-blue-500" />
                                            <Check className="mx-auto text-blue-500" />
                                        </div>

                                        <div className="grid grid-cols-2 md:grid-cols-4 py-4 px-6 text-center">
                                            <div className="text-left font-medium">App Rules</div>
                                            <Check className="mx-auto text-blue-500" />
                                            <Check className="mx-auto text-blue-500" />
                                            <Check className="mx-auto text-blue-500" />
                                            <Check className="mx-auto text-blue-500" />
                                        </div>

                                        <div className="grid grid-cols-2 md:grid-cols-4 py-4 px-6 text-center">
                                            <div className="text-left font-medium">Activity Report</div>
                                            <span className="mx-auto text-gray-700">View data for the <br /> current day only</span>
                                            <Check className="mx-auto text-blue-500" />
                                            <Check className="mx-auto text-blue-500" />
                                            <Check className="mx-auto text-blue-500" />
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-4 py-4 px-6 text-center">
                                            <div className="text-left font-medium">One-way Audio</div>
                                            <Check className="mx-auto text-blue-500" />
                                            <Check className="mx-auto text-blue-500" />
                                            <Check className="mx-auto text-blue-500" />
                                            <Check className="mx-auto text-blue-500" />
                                        </div>
                                        <div className="bg-gray-100 py-4 px-6 font-semibold">
                                            Device Activity
                                        </div>

                                        <div className="grid grid-cols-2 md:grid-cols-4 py-4 px-6 text-center">
                                            <div className="text-left font-medium">Inappropriate Pictures</div>
                                            <Check className="mx-auto text-blue-500" />
                                            <Check className="mx-auto text-blue-500" />
                                            <Check className="mx-auto text-blue-500" />
                                            <Check className="mx-auto text-blue-500" />
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-4 py-4 px-6 text-center">
                                            <div className="text-left font-medium">Toxic Content Detectiono</div>
                                            <span className="mx-auto text-gray-700">View data for the <br /> current day only</span>
                                            <Check className="mx-auto text-blue-500" />
                                            <Check className="mx-auto text-blue-500" />
                                            <Check className="mx-auto text-blue-500" />
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-4 py-4 px-6 text-center">
                                            <div className="text-left font-medium">YouTube Content Detection</div>
                                            <span className="mx-auto text-gray-700">View data for the <br /> current day only</span>
                                            <Check className="mx-auto text-blue-500" />
                                            <Check className="mx-auto text-blue-500" />
                                            <Check className="mx-auto text-blue-500" />
                                        </div>

                                        <div className="grid grid-cols-2 md:grid-cols-4 py-4 px-6 text-center">
                                            <div className="text-left font-medium">TikTok Historyn</div>
                                            <span className="mx-auto text-gray-700">View data for the <br /> current day only</span>
                                            <Check className="mx-auto text-blue-500" />
                                            <Check className="mx-auto text-blue-500" />
                                            <Check className="mx-auto text-blue-500" />
                                        </div>


                                        <div className="bg-gray-100 py-4 px-6 font-semibold">
                                            Location Service
                                        </div>
                                        <div className="bg-gray-100 py-4 px-6 font-semibold">
                                            Web sefty
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-4 py-4 px-6 text-center">
                                            <div className="text-left font-medium">Browser History</div>
                                            <span className="mx-auto text-gray-700">View data for the <br /> current day only</span>
                                            <Check className="mx-auto text-blue-500" />
                                            <Check className="mx-auto text-blue-500" />
                                            <Check className="mx-auto text-blue-500" />
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-4 py-4 px-6 text-center">
                                            <div className="text-left font-medium">Safe Search</div>
                                            <Check className="mx-auto text-blue-500" />
                                            <Check className="mx-auto text-blue-500" />
                                            <Check className="mx-auto text-blue-500" />
                                            <Check className="mx-auto text-blue-500" />
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-4 py-4 px-6 text-center">
                                            <div className="text-left font-medium">Web Filter</div>
                                            <Check className="mx-auto text-blue-500" />
                                            <Check className="mx-auto text-blue-500" />
                                            <Check className="mx-auto text-blue-500" />
                                            <Check className="mx-auto text-blue-500" />
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <br />
                            <br />
                            {/* TESTIMONIAL SECTION */}
                            <div className="border border-[#006DFF] py-16 px-4 rounded-[32px] mt-10">

                                <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                                    {/* Left Side - Stats */}
                                    <div className="flex flex-col lg:justify-center space-y-6">
                                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                                            Real-life FamiSafe families
                                        </h2>
                                        <p className="text-lg text-gray-700">
                                            Loved by <span className="font-bold">9M</span> Customers and <span className="font-bold">190</span> Countries.
                                        </p>

                                        {/* Stats Row */}
                                        <div className="flex flex-wrap gap-6 mt-4">
                                            <div className="flex flex-col items-center">
                                                <span className="text-4xl font-bold">9M</span>
                                                <span className="text-gray-700 font-medium">Customers</span>
                                            </div>

                                            <div className="flex flex-col items-center">
                                                <span className="text-4xl font-bold">#1</span>
                                                <span className="text-gray-700 text-center text-sm font-medium">
                                                    Mom's Choice Awards <br /> Honoring Excellence
                                                </span>
                                            </div>

                                            <div className="flex flex-col items-center">
                                                <span className="text-4xl font-bold">190</span>
                                                <span className="text-gray-700 font-medium">Countries</span>
                                            </div>
                                        </div>

                                        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
                                            Start at US$60.99/yr
                                        </button>
                                    </div>

                                    {/* Right Side - Testimonial Card */}
                                    <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 flex items-center gap-6">
                                        <img
                                            src="https://famisafe.wondershare.com/images/images2023/family.png"
                                            alt="Tana Rucker"
                                            className="w-20 h-20 rounded-full object-cover"
                                        />
                                        <div>
                                            <p className="text-gray-900 font-semibold text-lg sm:text-xl mb-2">
                                                I can now spend quality time and support him in developing good digital habits.
                                            </p>
                                            <p className="text-gray-600 text-sm sm:text-base mb-4">
                                                I felt it challenging to monitor my son's screen time! I set restrictions and oversee my son's gadget use with the help of Famisafe's screen time feature.
                                            </p>
                                            <p className="font-semibold text-gray-900">Tana Rucker</p>
                                            <p className="text-gray-600 text-sm">A mother with her 13-year-old boy.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <br />
                            <br />
                            <div className="border border-gray-300 rounded-lg max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex flex-col items-center text-left md:text-center">
                                        <div className="mb-4 text-black">{feature.icon}</div>
                                        <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                                        <p className="text-gray-700 text-sm">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                            {/* ================= COMPARISON TABLE ================= */}
                            {/*FRAQUENTLY ASKED QUESTIONS ================= */}
                            <br />
                            <br />

                            <div className="bg-gray-100 rounded-lg mx-auto max-w-4xl">

                                {/* Title */}
                                <h2 className="mb-14 text-center text-3xl font-semibold text-black">
                                    Related FAQ
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
                        </div>
                    </>
                )}







                {/* ================= SCHOOL TAB ================= */}
                {activeTab === "school" && (

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">

                        {/* LEFT */}
                        <div className="bg-white rounded-xl shadow p-6 md:p-8">

                            <h2 className="text-2xl font-semibold mb-4">For School</h2>

                            <p className="text-gray-600 mb-6">
                                FamiSafe provides you with a convenient online solution to monitor students' devices.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                <select className="border rounded-lg px-4 py-3 w-full">
                                    <option>Monthly Plan</option>
                                    <option>Quarterly Plan</option>
                                    <option>Yearly Plan</option>
                                </select>

                                <select className="border rounded-lg px-4 py-3 w-full">
                                    <option>11–20 devices</option>
                                    <option>21–50 devices</option>
                                    <option>50+ devices</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <span className="text-3xl md:text-4xl font-bold">US$39.98</span>
                                <span className="text-xl"> /mo</span>
                            </div>

                            <p className="text-gray-500 mb-6">
                                Automatically renew, cancel any time.
                            </p>

                            <button className="w-full bg-blue-600 text-white py-3 rounded-lg mb-4 font-semibold">
                                Buy Now
                            </button>

                            <button className="w-full bg-yellow-400 py-3 rounded-lg font-bold text-blue-900 mb-6">
                                PayPal
                            </button>

                            <hr className="my-6" />

                            <ul className="space-y-3 text-gray-700">
                                <li>• Manage multiple student devices at the same time</li>
                                <li>• Filter sites that are not suitable for students</li>
                                <li>• Set up a smart schedule plan for students</li>
                                <li>• Block apps that distract students</li>
                            </ul>

                        </div>


                        {/* RIGHT FORM */}
                        <div className="bg-white rounded-xl shadow p-6 md:p-8">

                            <h2 className="text-2xl font-semibold mb-2">Contact Sales</h2>

                            <p className="text-gray-600 mb-6">
                                Please fill out this form if you need a custom plan.
                            </p>

                            <div className="grid grid-cols-2 gap-4">

                                <input className="border rounded-lg px-4 py-3" placeholder="Full Name *" />
                                <input className="border rounded-lg px-4 py-3" placeholder="Education Email *" />
                                <input className="border rounded-lg px-4 py-3" placeholder="Country / Region *" />
                                <input className="border rounded-lg px-4 py-3" placeholder="School *" />
                                <input className="border rounded-lg px-4 py-3" placeholder="Telephone *" />
                                <input className="border rounded-lg px-4 py-3" placeholder="Number of Users *" />

                            </div>

                            <textarea
                                className="border rounded-lg px-4 py-3 w-full mt-4 h-40"
                                placeholder="How can we help?"
                            />

                            <div className="flex items-start gap-2 mt-4 text-sm text-gray-600">
                                <input type="checkbox" />
                                <p>
                                    By clicking the button, I agree to the
                                    <span className="text-blue-600"> Privacy Policy</span>
                                </p>
                            </div>

                            <button className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 font-semibold">
                                Contact Our Sales Team
                            </button>

                        </div>

                    </div>

                )}


            </div>

        </section>
    );
}




