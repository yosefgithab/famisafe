import { BarChart3, Clock, MessageCircle, RefreshCcw, ShieldCheck, SlidersHorizontal, Users, Zap } from "lucide-react";
import { BsClockFill } from "react-icons/bs";
import { FaAndroid, FaApple, FaCar, FaChartBar, FaChrome, FaClock, FaExclamationCircle, FaFilter, FaGlobe, FaHistory, FaImage, FaLock, FaMap, FaMapMarkerAlt, FaSearch, FaTiktok, FaWindows, FaYoutube } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import { TiLocation, TiMessages } from "react-icons/ti";





export const translations = {
    en: {
        // New  home ///
        Wonde443rshareFa: "Wondershare Famisafe V9.0",
        AIPare456ntalControl: "AI Parental Control",
        forSo765cial: "for Social",
        MediaSa86fety: "Media  Safety",
        Keepaney45eon3: "Keep an eye on 30+ social apps and catch risks early.",
        AIpowere645dprotectionfo: "AI-powered protection for your child's digital life—social media monitoring, screen time management, and location tracking in one app.",
        YourProfessional: "Designed for Digital Parenting,",
        MainTitle: "Powered by AI",
        SocialAppsDetection: "Social Apps Detection",
        CatchHiddenRisk: "Catch Hidden Risks from Social Media",
        AIscans30appsli: "AI scans 30+ apps like TikTok & Instagram to spot bullying, predators, and harmful content early.",
        AIDetection: "AI-Detection",
        Support30Apps: "Support 30+ Apps",
        StartFreeTrial: "Start Free Trial",
        LearnMore: "Learn More",
        feature6s: [
            {
                mainTitle: "Screen Time Control",
                subtitle: "Set Limits for Your Kid Without Fights",
                description:
                    "Build healthy digital habits with customizable screen time limits, schedules, and detailed usage reports.",
                button1: "Start Free Trial",
                button2: "Learn More",
                imageSrc:
                    "https://famisafe.wondershare.com/images/images-2025/new-index/screen-time-usage-report-img.png",
                featureIcons: [
                    { icon: BsClockFill, title: "Daily Limits" },
                    { icon: TiMessages, title: "Usage Report" },
                ],
            },
            {
                mainTitle: "Location Tracking",
                subtitle: "Track Your Kid's Location Without Worry",
                description:
                    "Know where your kids are with live GPS tracking, location history, and geofencing alerts.",
                button1: "Start Free Trial",
                button2: "Learn More",
                imageSrc:
                    "https://famisafe.wondershare.com/images/images-2025/new-index/location-tracking-img.png",
                featureIcons: [
                    { icon: TiLocation, title: "Real-time GPS" },
                    { icon: IoShieldCheckmark, title: "Safe Zone" },
                ],
            },
        ],
        ExploreMoreParental: "Explore More Parental",
        ControlFeatures: "Control Features",

        feaxturess: [
            { id: 1, title: "Call & message", desc: "Monitor call logs and text messages to detect potential risks or inappropriate content.", image: "https://famisafe.wondershare.com/images/images-2025/new-index/calls-messages-bg.jpg", url: "https://famisafe.wondershare.com/main/sign-up" }, // ✅ URL for this card },
            { id: 2, title: "Scrren Time control", desc: "Set daily screen time limits and schedules to promote health digital habits..", image: "https://famisafe.wondershare.com/images/images-2025/new-index/screen-time-bg.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },
            { id: 3, title: "Screen Viewer", desc: "View your child's device screen in real-time or scheduled to monitor their activity..", image: "https://famisafe.wondershare.com/images/images-2025/new-index/screen-viewer-bg.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },
            { id: 4, title: "App Rules", desc: "Block or allow specific apps to prevent distractions and ensure appropriate usage..", image: "https://famisafe.wondershare.com/images/images-2025/new-index/app-rules-bg.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },
            { id: 5, title: "One Way Audio", desc: "Listen to the surroundings of your child's device to ensure their safety and privacy..", image: "https://famisafe.wondershare.com/images/images-2025/new-index/one-way-audio-bg.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },
            { id: 6, title: "Active Report", desc: "Receive detailed reports on your child's device usage and app activities..", image: "https://famisafe.wondershare.com/images/images-2025/new-index/activity-report-bg.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },
            { id: 7, title: "You Tube Parental control", desc: "Monitor and manage your child's YouTube watch history and block inappropriate content..", image: "https://famisafe.wondershare.com/images/images-2025/new-index/youtube-parental-control-bg.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },
            { id: 8, title: "Tik Toke History", desc: "Track your child's TikTok viewing history to ensure age-appropriate content and videos..", image: "https://famisafe.wondershare.com/images/images-2025/new-index/tiktok-history-bg.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },
            { id: 9, title: "Inappropriate Pictures", desc: "Detect and alert you to explicit images on your child's iPhone or Android device..", image: "https://famisafe.wondershare.com/images/images-2025/new-index/inappropriate-pictures-bg.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },
            { id: 10, title: "Social App Detection", desc: "Monitor 30+ social platforms and customize the suspicious words at  once..", image: "https://famisafe.wondershare.com/images/images-2025/new-index/social-app-detection-bg.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },
            { id: 11, title: "Web Filters", desc: "One-tap block access to inappropriate websites to ensure safe browsing. .", image: "https://famisafe.wondershare.com/images/images-2025/new-index/web-filter-bg.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },
            { id: 12, title: "Diriving Reports", desc: "Monitor and record your child's driving habits, including speed and driving routes.", image: "https://famisafe.wondershare.com/images/images-2025/new-index/driving-report-bg.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },
            { id: 13, title: "Location Tracking", desc: "Track your child’s location in real time, check history, and get alerts for safe zones.", image: "https://famisafe.wondershare.com/images/images-2025/new-index/location-tracking-bg.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },
            { id: 15, title: "SOS Alert", desc: "Allow your child to send instant emergency alerts with their location. .", image: "https://famisafe.wondershare.com/images/images-2025/new-index/sos-alert-bg.jpg" },
        ],
        Your: "Your",
        Family: "Family",
        plan: "plan ",
        Choose: "Choose",
        Trustedby47GGFmillions: "Trusted by millions, FamiSafe helps parents manage their kids' digital lives. Pick your plan now!",
        Yearly: "Yearly",
        month: "/mo",
        $59billedannually: "ETB 17,999 billed annually",
        Unlockallpremiumeatures: "Unlock all premium features ",
        BestVal988ue: "Best Value",
        Seeallpl232R34ans: "See all plans",
        featureds: [
            "Manage screen time",
            "Sensitive image alerts",
            "Monitor web search history",
            "Monitor live location and view history",
            "Monitor social apps like WhatsApp, YouTube, etc.",
            "Monitor calls, messages & emails",
            "Monitor chat histories and app screenshots",
            "Monitor the ambient sound around kids",
            "Block websites and applications",
            "Create geofences and send SOS alerts",
        ],
        Real: "Real",
        Families: "Familes",
        Reals: "Real",
        Stories: "Stries",
        Explorerealtorie: "Explore 35+ real stories from families worldwide and learn how they use FamiSafe to keep their kids safe online.",
        featuresse: [
            { id: 1, title: "Tracking Every Step Home", desc: "Monitor call logs and text messages to detect potential risks or inappropriate content.", image: "https://famisafe.wondershare.com/images/images-2025/new-index/location-tracking.jpg", url: "https://famisafe.wondershare.com/main/sign-up" }, // ✅ URL for this card },
            { id: 2, title: "Scrren Time control", desc: "Set daily screen time limits and schedules to promote health digital habits..", image: "https://famisafe.wondershare.com/images/images-2025/new-index/social-app-monitoring.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },
            { id: 3, title: "Screen Viewer", desc: "View your child's device screen in real-time or scheduled to monitor their activity..", image: "https://famisafe.wondershare.com/images/images-2025/new-index/app-blocking.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },
            { id: 4, title: "App Rules", desc: "Block or allow specific apps to prevent distractions and ensure appropriate usage..", image: "https://famisafe.wondershare.com/images/images-2025/new-index/social-app-monitoring.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },
            { id: 5, title: "One Way Audio", desc: "Listen to the surroundings of your child's device to ensure their safety and privacy..", image: "https://famisafe.wondershare.com/images/images-2025/new-index/screen-time.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },

        ],
        viewallstries: "View all stories",

        daata: [
            {
                icon: "FaBuilding",
                value: 200,
                suffix: "+",
                label: "Countries",
                bg: "bg-blue-100",
                iconSize: "text-5xl",
            },
            {
                icon: "FaUsers",
                value: 35,
                suffix: "M+",
                label: "Users",
                bg: "bg-teal-100",
                iconSize: "text-5xl",
            },
            {
                icon: "BiSolidHomeHeart",
                value: 18,
                suffix: "K+",
                label: "Families",
                bg: "bg-orange-100",
                iconSize: "text-5xl",
            },
            {
                icon: "CiBookmarkCheck",
                value: 15,
                suffix: "K+",
                label: "Subscribers",
                bg: "bg-blue-100",
                iconSize: "text-5xl",
            },
        ],
        what: "What",
        parenties: "Parentie",
        aresaying: "are sying",
        Realfeedbacksf: "Real feedbacks from parents who use FamiSafe around the world.",
        // 1️⃣ Declare your reviews first
        reviqews: [
            {
                id: 1,
                name: "Emily",
                date: "Dec 06, 2025",
                score: 4.5,
                description: "So glad I found the FamiSafe app. It caught some sketchy messages in my daughter's group chat that I never would have seen. Had a tough conversation, but caught it early. Highly recommend.!",
                image: "https://famisafe.wondershare.com/images/images-2025/new-index/user1.png",
                features: { Chamonitoring: 90, Riskdetection: 80, Realtimealerts: 85, Grouptracking: 70 },
            },
            {
                id: 2,
                name: "David",
                date: "Mar 19, 2025",
                score: 3.8,
                description: "Finally, a parental control that actually works. My 14-year-old is super tech-savvy, but he can't disable Wondershare FamiSafe. Tried other apps before — this one's the real deal.",
                image: "https://famisafe.wondershare.com/images/images-2025/new-index/user2.png",
                features: { Chatmonitoring: 70, Riskdetection: 60, Realtimealerts: 80, Grouptracking: 75 },
            },
            {
                id: 3,
                name: "Jessica",
                date: "Oct 22, 2025",
                score: 4.9,
                description: "Highly Recommended! FamiSafe alerts me the second my kids leave school. I can see their exact route home on the map. As a single mom juggling work, this app is worth every penny.",
                image: "https://famisafe.wondershare.com/images/images-2025/new-index/user3.png",
                features: { Cleanliness: 95, Comfort: 90, Location: 95, Price: 85 },
            },
            {
                id: 4,
                name: "Robert",
                date: "Jul 16, 20250",
                score: 4.2,
                description: "Wish I had Wondershare FamiSafe sooner. I can finally see what my son's actually doing on his phone — apps, YouTube, everything. No more guessing. We set screen rules together now.",
                image: "https://famisafe.wondershare.com/images/images-2025/new-index/user4.png",
                features: { Cleanliness: 85, Comfort: 75, Location: 80, Price: 70 },
            },
        ],

        WorksGreat: "Works Great ",
        withFamiSafe: "with FamiSafe",
        JoinOur: "Join  our",
        Community: "Community",
        StartPro35tecting: "Start Protecting",
        Your32345FamilyToday: "Your Family Today",
        Join35millionfamil: "Join 35 million families who trust FamiSafe to keep their kids safe online. Try it free!",



        //End  New  home ///
        FamiSafe: "FamiSafe",
        NextGen: "AI Parental Control ",
        ParentalControlApp: " for Social Media ,",
        MoreParentalControlFeatures: "More Parental Control Features",
        PoweredbyAI: "Safety.",
        Products: "Products",
        Features: "Features",
        Blog: "Blog",
        Resource: "Resource",
        TryItFree: "Try It Free",
        Pricing: "Pricing",
        download: "download",
        wachdeviceused: "Watch Device Use",
        span: "Parental Control App",
        title: "Next-GenParental Control App,Powered by AI",
        Subtitles: "See, Guide, and Safeguard Your Kids",
        seetittle: "Leave digital parenting challenges behind—enjoy true peace of mind, anytime, anywhere.",
        StartFreeTrial: "Start Free Trial",
        BuyNow: "Buy Now",
        Availableon: "Available on",
        description: " Empower your family with smart parental controls to manage screen time, track locations, and block distracting apps — anytime, anywhere.",
        tabData: [
            {
                title: "Watch Device Use",
                content: 'famisafe.wondershare.com/images/images-2025/index/watch-device-use.png',

                cards: [
                    {
                        // icon: <FaClipboardList />,
                        title: "Check Daily Reports",
                        desc: "How much screen time did they really have? Get the full picture of your child's digital day in one simple report.",
                        position: "top-10 left-24",
                    },
                    {
                        // icon: <FaClipboardList />,
                        title: "Monitor Calls & Chats",
                        desc: "Worried about who your child is talking to? Stay informed about their communications while respecting their privacy.",
                        position: "top-50 left-24",
                    },
                    {
                        // icon: <FaComments />,
                        title: "Capture Live Screen",
                        desc: "Need to see what's happening right now? Get real-time visibility into your child's device activity.",
                        position: "bottom-20 right-20",
                    },
                ],
            },

            {
                title: "Guide Online Content",
                content: 'https://famisafe.wondershare.com/images/images-2025/index/guide-online-content.png',

                cards: [
                    {
                        // icon: <FaClipboardList />,
                        title: "Filter Sites",
                        desc: "Concerned about inappropriate content online? Automatically block harmful websites before they reach your child.",
                        position: "top-10 left-24",
                    },
                    {
                        // icon: <FaComments />,
                        title: "Block Apps",
                        desc: "Gaming taking over homework time? Set healthy boundaries with smart app management that teaches balance.",
                        position: "bottom-60 right-35",
                    }, {
                        // icon: <FaComments />,
                        title: "Detect Risks",
                        desc: "Worried about what videos they're watching? AI-powered detection alerts you to potentially risky content.",
                        position: "bottom-20 right-20",
                    },
                ],
            },

            {
                title: "Protect in Real Life",
                content: 'https://famisafe.wondershare.com/images/images-2025/index/protect-in-real-life.png',
                cards: [
                    {
                        // icon: <FaClipboardList />,
                        title: "Track Live Location",
                        desc: "Running late from soccer practice? Know where your child is and when they'll be home safely.",
                        position: "top-10 left-24",
                    },
                    {
                        // icon: <FaClipboardList />,
                        title: "Receive SOS alerts",
                        desc: "What if they need help and can't call? Emergency alerts ensure you're the first to know when they need you.",
                        position: "top-50 left-24",
                    },
                    {
                        // icon: <FaComments />,
                        title: "Ensure Driving Safety",
                        desc: "New driver in the family? Monitor driving habits and get reports to help them stay safe on the road.",
                        position: "bottom-20 right-20",
                    },
                ],
            },
        ],
        slidess: [
            {
                title: "Screen Time",
                text: "Set daily screen time limits and schedules to promote healthy digital habits.",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/screen-time.png',
            },
            {
                title: "One-way Audio",
                text: "Listen to your child's surroundings in real-time to ensure safety.",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/one-way-audio.png',
            },
            {
                title: "Location Tracking",
                text: "Track your child’s real-time location for peace of mind.",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/location-tracking.png',
            },
            {
                title: "Screen Viewer",
                text: "View what your child sees on their device to protect them online.",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/screen-viewer.png',
            },
            {
                title: "App Rules",
                text: "Set rules for apps and block inappropriate content effectively.",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/app-rules.png',
            },
        ],
        slides: [
            {
                title: "TikTok History",
                desc: "Monitor TikTok usage and history.",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/tiktok-history.png',
            },
            {
                title: "Inappropriate Video",
                desc: "Detect explicit pictures and videos.",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/inappropriate-pictures.png',
            },
            {
                title: "Web Filter",
                desc: "Block harmful websites in real time.",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/web-filter.png',
            },
            {
                title: "SOS Alert",
                desc: "Instant emergency alerts for parents.",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/sos-alert.png',
            },
            {
                title: "Social App Detection",
                desc: "Monitor social apps and YouTube to detect any explicit or offensive words. Set offensive words to get alert when they are detected on your kid's device..",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/social-app-detection.png',
            },
            {
                title: "Calls & Messages",
                desc: "Monitor call and SMS activity.",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/calls-messages.png',
            },
            {
                title: "Activity Report",
                desc: "Daily and weekly activity insights.",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/activity-report.png',
            },
            {
                title: "YouTube Control",
                desc: "Manage YouTube screen time safely.",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/youtube-parental-control.png',
            },
        ],
        sliddes: [
            {
                title: "TikTok History",
                desc: "Monitor TikTok usage and history.",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/tiktok-history.png',
            },
            {
                title: "Inappropriate Video",
                desc: "Detect explicit pictures and videos.",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/inappropriate-pictures.png',
            },
            {
                title: "Web Filter",
                desc: "Block harmful websites in real time.",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/web-filter.png',
            },
            {
                title: "SOS Alert",
                desc: "Instant emergency alerts for parents.",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/sos-alert.png',
            },
            {
                title: "Social App Detection",
                desc: "Monitor social apps and YouTube to detect any explicit or offensive words. Set offensive words to get alert when they are detected on your kid's device..",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/social-app-detection.png',
            },
            {
                title: "Calls & Messages",
                desc: "Monitor call and SMS activity.",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/calls-messages.png',
            },
            {
                title: "Activity Report",
                desc: "Daily and weekly activity insights.",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/activity-report.png',
            },
            {
                title: "YouTube Control",
                desc: "Manage YouTube screen time safely.",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/youtube-parental-control.png',
            },
        ],
        TryFree: "Try Free",
        BuynNow: "Buy Now",
        TryitFrees: "Try it Free",
        StartFreeTrials: "Start Free Trial",
        BuyNoww: "Buy Now",
        SecuredSharing: "Secured Sharing",
        SeeLovedOnesat: "See Loved Ones at",
        Hands: "Hands",
        Geonectionprotects: "Geonection protects your location sharing with end-to-end encryption",
        RealStoriesfromParents: "Real Stories from Parents",
        stories: [
            {
                tid: 1,
                image: 'https://famisafe.wondershare.com/images/images-2025/index/story-1.jpg',
                quote: "Even from 8 000 km away, I auto-lock games during homework hours and unlock them for breaks.",
                name: "Omer -K",
                role: "Dad Working Overseas",
            },
            {
                tid: 2,
                image: 'https://famisafe.wondershare.com/images/images-2025/index/story-2.jpg',
                quote: "FamiSafe flagged ‘hurt myself’ in my son’s chat. I stepped in, and we got him help the same day.",
                name: "Claire B",
                role: "Mom of a 14-year-old",
            },
            {
                tid: 3,
                image: 'https://famisafe.wondershare.com/images/images-2025/index/story-3.jpg',
                quote: "Checking in on my child is effortless and reassuring.",
                name: "Leah G",
                role: "Mom of an ADHD Game",

            },
            {
                tid: 4,
                image: 'https://famisafe.wondershare.com/images/images-2025/index/story-4.jpg',
                quote: "Even as a grandparent, I stay connected and informed.",
                name: "Robert K",
                role: "Dad Working Overseas",

            },
            {
                tid: 4,
                image: 'https://famisafe.wondershare.com/images/images-2025/index/story-5.jpg',
                quote: "“When my granddaughter didn’t answer after school, FamiSafe’s real-time map showed she was still at orchestra practice. One glance spared a panic call and gave me total peace of mind.”",
                name: "David-T",
                role: "Grandpa of 8-year-old",
            },
        ],
        ViewAllStories: "View All Stories",
        // products Driopdown
        cardss: [
            {
                title: "FamiSafe🔥 👑",
                desc: "Parental Control Solution",
                img: 'https://famisafe.wondershare.com/images/images-2025/famisafe/home-icon.svg',
                primary: true,
                href: "/famisafe",
            },
            {
                title: "FamiSafe for School, ",
                desc: "School & Parent Sync",
                img: 'https://famisafe.wondershare.com/images/images-2025/famisafe/school-icon.svg',
                href: "/school", // School link
            },
            {
                title: "Geonection",
                desc: "Realtime Location Sharing",
                img: 'https://famisafe.wondershare.com/images/images-2025/famisafe/geonection-icon.svg',
                href: "/Geonection", // Geonection link
            },
        ],
        //          cardss : [
        //   {
        //     title: "FamiSafe🔥 👑",
        //     desc: "Parental Control Solution",
        //     img: "https://famisafe.wondershare.com/images/images-2025/famisafe/home-icon.svg",
        //     primary: true,
        //     href: "/famisafe",
        //   },
        //   {
        //     title: "FamiSafe for School",
        //     desc: "School & Parent Sync",
        //     img: "https://famisafe.wondershare.com/images/images-2025/famisafe/school-icon.svg",
        //     href: "/school",
        //   },
        //   {
        //     title: "Geonection",
        //     desc: "Realtime Location Sharing",
        //     img: "https://famisafe.wondershare.com/images/images-2025/famisafe/geonection-icon.svg",
        //     href: "/Geonection",
        //   },
        // ],
        // End products Driopdown

        // features Dropdown

        columns: [
            {
                title: "Device Activity",
                bg: "#f5f1ff",
                features: [
                    { title: "Calls & Messages", newTag: true, link: "/Call-meassage" },
                    { title: "Screen Time", newTag: true, link: "/Screen-Time" },
                    { title: "Screen Viewer", link: "/Screen-Viewer" },
                    { title: "App Rules", link: "/AppRole" },
                    { title: "One-way Audio", newTag: true, link: "/One-way-Audio" },
                    { title: "Activity Report", link: "/Activity-Report" },
                ],
            },
            {
                title: "Content Safety",
                bg: "#fff8e9",
                features: [
                    { title: "YouTube Parental Control", link: "/youtube-parental-controls" },
                    { title: "TikTok History", link: "/tiktok-history" },
                    { title: "Inappropriate Pictures", link: "/detect-suspicious-text" },
                    { title: "Social App Detection", link: "/block-websites" },
                    { title: "Web Filter", link: "/Web-Filter" },
                    { title: "Browser History", link: "/Browser-History" },
                ],
            },
            {
                title: "Location Service",
                bg: "#f1ffef",
                features: [
                    { title: "Location Tracking", link: "/Locaton-Tracking" },
                    { title: "Driving Report", link: "/Driving-Report" },
                    { title: "SOS Alert", newTag: true, link: "/Sos-Alart" },
                ],
            },
        ],
        // End features Dropdown

        // Blog Dropdown
        blogData: [
            {
                title: "Location Tracker",
                links: [
                    { label: "Mobile Tracker", href: "/Mobile-Tracking" },
                    { label: "Location Sharing", href: "/Location-Sharing" },
                    { label: "Family Tracker", href: "/Family-Tracking" },
                    { label: "Teen Driving", href: "/Teen-Driving" },
                ],
            },
            {
                title: "Screen Time",
                links: [
                    { label: "Screen Time Control", href: "/Screen-Time-Blogs" },
                    { label: "iOS Parental Control", href: "/Ios-Parental-Controller" },
                    { label: "Android Parental Control", href: "/Andriod-Parental-Controller" },
                    { label: "Desktop Control", href: "/DeskTop-Parental-Controller" },
                    { label: "Chromebook Control", href: "/ChromeBook-Controller" },
                ],
            },
            {
                title: "App Blocker",
                links: [
                    { label: "Block Games", href: "/Block-Game" },
                    { label: "Block YouTube", href: "/Block-Youtube" },
                    { label: "Block Apps", href: "/App-Blocks" },
                    { label: "Block Adult Sites", href: "/Block-Porn" },
                ],
            },
            {
                title: "Activity Monitor",
                links: [
                    { label: "Web Filtering", href: "/Web-filtering" },
                    { label: "Phone Monitoring", href: "/Phone-monitering" },
                    { label: "Teen Sexting", href: "/Teen-Sexing" },
                    { label: "Anti Bullying", href: "/Anti-Billing" },
                ],
            },
            {
                title: "Parenting Knowledge",
                links: [
                    { label: "Parenting Tips", href: "/Parenting-Tips" },
                    { label: "Teen Slang", href: "/Teen-Slang" },
                    { label: "Trending Apps", href: "/Trainding-AppRivew" },
                    { label: "ParentalApp control", href: "/Parental-App-control " },
                ],
            },
            {
                readMore: "Read More >",
                cta: "Try It Free Online ☁️",
            }
        ],
        //RESPURCE DROPDOWN 
        resourceDropdownData: {
            featuredTopics: {
                title: "Featured Topics",
                items: [
                    { label: "Balance Screen Time", href: "/Screentime-For-Kids" },
                    { label: "Digital Child Security", href: "/Internet-Safty" },
                    { label: "Block Porns", href: "/Block-Porn" },
                    { label: "Stop Sextortion", href: "/Compagin-Stops" },
                    { label: "AI Concerns Activity", href: "/Artifical-Intelligence" },
                    { label: "Stop Cyberbullying", href: "/Stop-Cyberbullying" },
                    { label: "Teen Sexting", href: "/Teen-Sexting" },
                ],
            },

            guide: {
                title: "FamiSafe Guide",
                items: [
                    { label: "User Guide", href: "/User-Guide" },
                    { label: "User Guide for School", href: "/User-Guide-For-School" },
                    { label: "Video Guide", href: "/Video-Guide" },
                    { label: "User FAQs", href: "/User-FAQS" },
                ],
            },

            explore: {
                title: "Explore",
                items: [
                    { label: "What is News", href: "/What-is-News" },
                    { label: "Parents Review", href: "/Parental-Review" },
                    { label: "Brand Campaigns", href: "/Campaigns" },
                    { label: "Media Review", href: "/Midea-Reviw" },
                    { label: "Annual Report", href: "/Annual-Report" },
                    { label: "Family Stories", href: "/Family-Stories" },

                ],
            },

            actions: {
                downloadText: "Download App",
                tryFreeText: "Try It Free Online",
                tryFreeLink: "#",
            },
        },
        // End RESPURCE DROPDOWN

        // testimonials
        testimonials: [
            {
                id: "t1",
                name: "Renée Wooldridge",
                image: 'https://i.pravatar.cc/100?img=47',
                text: "My problem was resolved and I love the new features. My grandson found a way around security to open apps. The nightmare is that he can open Google Play Store and download apps that I don't want him to have.",
            },
            {
                id: "t2",
                name: "John Gilman",
                image: 'https://i.pravatar.cc/100?img=12',
                text: "Capable porn blocker app I have experienced in my life. I also used other apps but found this one more comfortable, quick, reliable, and effective in application.",
            },
            {
                id: "t3",
                name: "Uxprjt Lattka",
                image: 'https://i.pravatar.cc/100?img=32',
                text: "Checking out my daughter’s photo gallery is an unbelievable feature. I totally love it.",
            },
            {
                id: "t4",
                name: "Maria Smith",
                image: 'https://i.pravatar.cc/100?img=26',
                text: "Checking out my daughter’s photo gallery is an unbelievable feature that this parental control app offers. I totally love it. I also use the screen time monitoring quite often.",
            },
            {
                id: "t5",
                name: "Kayela Huppman",
                image: 'https://i.pravatar.cc/100?img=28',
                text: "Great app, had it for awhile for both my kids. So glad they added in certain features to keep track of. I loved that I could keep track of where they were supposed to be at given times!",
            },
        ],
        WhatParentsAreSayingAboutFamiSafe: "What Parents Are Saying About FamiSafe",
        Realexperiences: "Real experiences from families who use it to keep their kids safe online.",
        Countries: "Countries",
        Users: "Users",
        Families: "Families",
        Subscribers: "Subscribers",
        GrowTogether: "Grow Together With the FamiSafe Community",
        JoinUsonSocialMedia: "Join Us on Social Media",
        cardses: [
            {
                title: "What's New",
                desc: "Discover smarter tools, improved features, and exciting updates that make digital parenting easier than ever.",
                gradient: "from-pink-100 via-purple-200 to-indigo-300",
                image:
                    'https://famisafe.wondershare.com/images/images-2025/index/what-new-mobile.png',
                link: "/whats-new",
            },
            {
                title: "Tutorials",
                desc: "Step-by-step guides to help parents and kids use FamiSafe effectively with friendly 24-hour online support.",
                gradient: "from-indigo-200 via-blue-200 to-purple-200",
                image:
                    'https://famisafe.wondershare.com/images/images-2025/index/tutorials-mobile.png',
                link: "/tutorials",
            },
            {
                title: "Blogs",
                desc: "Expert parenting tips and advice to help families keep kids safe online with trusted guidance.",
                gradient: "from-blue-100 via-cyan-200 to-teal-200",
                image:
                    'https://famisafe.wondershare.com/images/images-2025/index/blogs-mobile.png',
                link: "/blogs",
            },
            {
                title: "Social Media",
                social: true,
            },
        ],
        TrustedProtection: "Trusted Protection",
        FamiSafeuses: "FamiSafe uses bank-level encryption, ensuring your child's datastays fully secure and accessible only to you.",
        PrivacyPromise: "Privacy Promise",
        Zerodatacollection: "Zero data collection, secure local storage, and strict GDPR &COPPA compliance—your family’s privacy always comes first.",
        StartFamiSafeParentalControls: "Start FamiSafe Parental Controls Today",
        Trustedparents: "Trusted by parents. Built for families. Designed to make digital parenting easier.",
        // footer translations
        footerData: [
            {
                brand: {
                    logo: "https://neveragain.allstatics.com/2019/assets/icon/logo/famisafe-square.svg",
                    name: "famisafe",
                    tagline: "Creativity simplified!"
                },
            },
            {
                socialLinks: [
                    { icon: "FaFacebookF", href: "#" },
                    { icon: "FaInstagram", href: "#" },
                    { icon: "FaTwitter", href: "#" },
                    { icon: "FaYoutube", href: "#" },
                    { icon: "FaEllipsisH", href: "#" },
                ],
            },


            {
                sections: [
                    {
                        title: "Hero Products",
                        links: [
                            { label: "ReelMate AI", href: "#" },
                            { label: "Filmora", href: "#" },
                            { label: "Recoverit", href: "#" },
                            { label: "Dr.Fone", href: "#" },
                            { label: "PDFelement", href: "#" },
                            { label: "FamiSafe", href: "#" },
                            { label: "All Products", href: "#" },
                        ],
                    },
                    {
                        title: "Wondershare",
                        links: [
                            { label: "Creative Center", href: "#" },
                            { label: "About Us", href: "#" },
                            { label: "Newsroom", href: "#" },
                            { label: "Global Presence", href: "#" },
                            { label: "Founder's Speech", href: "#" },
                            { label: "Careers", href: "#" },
                            { label: "Education", href: "#" },
                        ],
                    },
                    {
                        title: "Explore AI",
                        links: [
                            { label: "AI Tools", href: "#" },
                            { label: "AI Newsroom", href: "#" },
                            { label: "Marketing", href: "#" },
                            { label: "Social Media", href: "#" },
                            { label: "Education", href: "#" },
                            { label: "Business", href: "#" },
                        ],
                    },
                    {
                        title: "Help Center",
                        links: [
                            { label: "Contact Us", href: "#" },
                            { label: "Video Community", href: "#" },
                            { label: "Support Center", href: "#" },
                            { label: "Account", href: "#" },
                        ],
                    },
                ],
            },
            {
                bottomLinks: [
                    { label: "Terms and Conditions", href: "#" },
                    { label: "Privacy", href: "#" },
                    { label: "Terms of Use", href: "#" },
                    { label: "Cookie Preferences", href: "#" },
                    { label: "Refund Policy", href: "#" },
                    { label: "Uninstall", href: "#" },
                ],
            },
            {
                language: "English",
                copyright: "© 2025 Wondershare. All rights reserved."
            }
        ],
        // footer translations end

        // {/*For School Page Translations*/}
        FamiSafeKeeps: "FamiSafe Keeps Students Safe in The Digital Age",
        MoniterProtect: "Monitor | Protect | Alert",


        // {/* Card Data */ }
        cards: [
            {
                title: "Distraction",
                desc: "When there are all kinds of temptations of digital devices around, you will find that students may find it difficult to concentrate in class",
                bg: "bg-[#E9F8FD]",
                img: 'https://famisafe.wondershare.com/images/images-2021/website-2021/school-pic-1.png',
            },
            {
                title: "Cyberbullying",
                desc: "Cyberbullying often occurs on campus. If cyberbullying incidents can be monitored in time, the loss can be stopped in time",
                bg: "bg-[#FFF1EB]",
                img: 'https://famisafe.wondershare.com/images/images-2021/website-2021/school-pic-2.png',
            },
            {
                title: "Addiction",
                desc: "Staying up late to watch dramas, watching videos, playing games... Addicted to the internet, this is the life many students now having",
                bg: "bg-[#F4F3FF]",
                img: 'https://famisafe.wondershare.com/images/images-2021/website-2021/school-pic-3.png',
            },
            {
                title: "Cheating",
                desc: "In the convenient digital age, plagiarism has become easier and more frequent, so educators inevitably worry more about the quality of learning and the possibility of cheating",
                bg: "bg-[#EFFFF9]",
                img: 'https://famisafe.wondershare.com/images/images-2021/website-2021/school-pic-4.png',
            },
        ],
        Technologyinschool: "Technology in school is helpful, but also challenging",
        FamiSafeprotectsall: "FamiSafe protects all students in a more efficient way",
        featuress: [
            {
                title: "Web Filter",
                icon: ShieldCheck,
                color: "bg-orange-500",
                cardBg: "bg-[#FFF1EB]",
                points: [
                    "Keep Search Safe With Website Filter",
                    "Block websites by category",
                    "Block or allow websites by adding exceptions",
                ],
                pointColor: "bg-orange-500",
            },
            {
                title: "Multi - User, Multi - Device",
                icon: Users,
                color: "bg-purple-500",
                cardBg: "bg-[#F4F3FF]",
                points: [
                    "Provide a variety of subscription options",
                    "Manage multiple students at the same time",
                    "View and aggregate student app usage data",
                ],
                pointColor: "bg-purple-500",
            },
            {
                title: "Smart Dashboard",
                icon: BarChart3,
                color: "bg-emerald-400",
                cardBg: "bg-[#EFFFF9]",
                points: [
                    "Aggregate all student information",
                    "Unified management of student devices",
                    "Quickly view student today's devices usage",
                ],
                pointColor: "bg-emerald-400",
            },
        ],
        WhyisFamiSafe: "Why is FamiSafe the best choice for your school?",
        ScreenSupervision: "Screen Supervision",
        Asphoneortablet: "As phone or tablet becomes a part of kid's life, Teachers should consider helping students strike a balance, putting a stop to study distraction or sleep deprivation.",
        AppBlocker: "App Blocker",
        Studentsneedtofocus: "Students need to focus on their learning, but some apps that are not related to learning always distract students.",
        OnlineSafety: "Online Safety",
        Theonlineworld: "The online world is exciting and interesting, but there are also hidden security risks such as cyberbullying, pornography, and cyber predators. Students need guidance and help from teachers.",
        TheMostReliable: "The Most Reliable Parental Control App",

        // FQA Section
        faqs: [
            {
                question: "How to monitor text messages on a kid's phone?",
                answer:
                    "Parents can monitor text messages by using parental control apps that provide message tracking features while respecting privacy laws.",
            },
            {
                question: "How can I monitor my child's phone calls?",
                answer:
                    "You can monitor call logs, contacts, and call duration using trusted parental monitoring tools designed for family safety.",
            },
            {
                question:
                    "Is it possible for me to read my child's text messages on my iPhone?",
                answer:
                    "Yes, with proper parental control solutions and permissions, parents can view message activity on their child’s device.",
            },
            {
                question:
                    "Is it legal to view calls and messages from a child's phone?",
                answer:
                    "In most regions, parents or legal guardians are allowed to monitor a minor’s device, but local laws should always be reviewed.",
            },
        ],
        tools: [
            { title: "Screen Time", icon: FaClock },
            { title: "Activity Report", icon: FaChartBar },
            { title: "YouTube App Control", icon: FaYoutube },
            { title: "TikTok History", icon: FaTiktok },
            { title: "Inappropriate Pictures", icon: FaImage },
            { title: "Explicit Content Detection", icon: FaExclamationCircle },
            { title: "App Block", icon: FaLock },
            { title: "Browser History", icon: FaHistory },
            { title: "Safe Search", icon: FaSearch },
            { title: "Web Filter", icon: FaFilter },
            { title: "Live Location", icon: FaMapMarkerAlt },
            { title: "Location History", icon: FaMap },
            { title: "Geofence", icon: FaMapMarkerAlt },
            { title: "Deriving Report", icon: FaCar }
        ],

        platforms: [
            {
                name: "Windows",
                icon: FaWindows,
                color: "text-blue-600",
                href: "#windows",
            },
            {
                name: "macOS",
                icon: FaApple,
                color: "text-gray-800",
                href: "#macos",
            },
            {
                name: "Online",
                icon: FaGlobe,
                color: "text-green-600",
                href: "#online",
            },
            {
                name: "iPhone/iPad",
                icon: FaApple,
                color: "text-black",
                href: "#ios",
            },
            {
                name: "Android",
                icon: FaAndroid,
                color: "text-green-500",
                href: "#android",
            },
            {
                name: "Chrome",
                icon: FaChrome,
                color: "text-yellow-500",
                href: "#chrome",
            },
        ],
        FamiSafeNewFeature: "FamiSafe New Feature",
        CallsMessages: "Calls & Messages",
        WithCallsMessagesparents: "With Calls & Messages, parents can monitor their child's phone usage, track messages and calls, and detect inappropriate content, empowering them to proactively protect children from potential online dangers.",
        FamiSafeBestAppto: "FamiSafe — Best App to Track Calls and Messages for Parents",
        CallHistoryMonitoring: "Call History Monitoring",
        Effortlesslymonitorchildren: "Effortlessly monitor children's phone call activities, with a primary focus on displaying detailed call logs on kids’ devices.",
        Automaticallyrefresh: "Automatically refresh (every hour) or manually refresh to view call logs.",
        Viewcontactname: "View contact name, phone number, call time, and duration.",
        Identifysuspicious: "Identify suspicious calls and messages with our advanced detection system.",
        TextMessageMonitoring: "Text Message Monitoring",
        Easilymonitorthechild: "Easily monitor the child's incoming and outgoing messages in real-time or on a scheduled basis.",
        Automaticallyrefresh: "Automatically refresh (every hour) or manually refresh to view text messages on the child's device.",
        Checkandviewthecontacts: "Check and view the contacts for sending and receiving the messages, contact numbers, and the specific text content of the messages.",
        Detectsensitive: "Detect sensitive content in messages and offer quick actions for the identified keywords.",
        SuspiciousContentDetection: "Suspicious Content Detection",
        Safeguardyourchildren: "Safeguard your children from online threats by monitoring sensitive content in their incoming and outgoing messages.",
        Detectandhighlight: "Detect and highlight suspicious keywords in messages on the child's mobile device.",
        Combinemessage: "Combine message content display with sensitive word detection to enhance parental supervision.",
        Protectyour: "Protect your loved ones from online dangers and cyberbullying.",

        HowtoTrack: "How to Track Calls and Messages on Children's Devices?",
        Step1InstallFamiSafe: "Step 1: Install FamiSafe",
        DownloadFamiSafeApp: "Download FamiSafe App from Google Play Store or App Store on the parent's phone.",
        StepRegisteranAccount: "Step 2: Register an Account",
        Register: " Register a Wondershare ID or log in with Apple, Google, or Facebook ID.",
        StepConnect: "Step 3: Connect Kid's Device",
        Scanthe: "Scan the QR code to pair the kid’s device automatically.",
        ForMoreDetails: "For More Details",
        TryItFreeOnline: "Try It Free Online",

        DownloadFamiSafeon: "FamiSafe ከዚህ በታች ያውርዱ።",
        FindMoreParental: "Find More Parental Control Tools to Safeguard Your Kids Online",
        MoreTipsabout: "More Tips about Parental Control and Children's Growth",
        BestCallBlocker: "Best Call Blocker Apps for Android and iOS",
        TopBest: "Top 8 Best Message and Call Trackers",
        TopWaystoTrack: "Top 3 Ways to Track Messages and Calls for Free ",
        HowToCheck: "How To Check Call History on iPhone",
        OmegleforKids: "Omegle for Kids: Is Omegle Safe?",
        BestTextMessage: "Best 14 Text Message Tracking Apps on Kid’s iPhone",


        /// Screen Time Section
        ScreenTimeControl: "Screen Time Control",
        Stopendlessscreen: "Stop endless screen scrolling, start healthy habits.Track your kid's screen time usage in real time, setsdaily limits & bedtime schedules, and locks any device when it’s time for study or family moments.",

        awardss: [
            {
                title: "The National Parenting Center",
                subtitle: "WINNER",
                image: "https://famisafe.wondershare.com/frontpage/icon-honour-1.png",
            },
            {
                title: "The National Parenting Center",
                subtitle: "WINNER",
                image: "https://famisafe.wondershare.com/frontpage/icon-honour-2.png",
            },
            {
                title: "Made For Mums Awards 2021",
                subtitle: "BRONZE",
                image: "https://famisafe.wondershare.com/frontpage/icon-honour-3.png",
            },
            {
                title: "Mom's Choice Awards",
                subtitle: "HONORING EXCELLENCE",
                image: "https://famisafe.wondershare.com/frontpage/icon-honour-5.png",
            },
            {
                title: "Parents’ Picks Awards 2024",
                subtitle: "WINNER",
                image: "https://famisafe.wondershare.com/frontpage/icon-honour-4.png",
            },
            {
                title: "The National Parenting Center",
                subtitle: "SEAL OF APPROVAL",
                image: "https://famisafe.wondershare.com/frontpage/icon-honour-7.png",
            },
        ],
        features: [
            {
                title: "Auto-Lock for Study Time",
                desc: "Keep kids focused during homework time by auto-locking distracting apps or games. Set up specific hours when devices are locked to support undisturbed study sessions.",
                img: "https://famisafe.wondershare.com/images/images-2025/screen-time/auto-lock-for-study-time.png",
            },
            {
                title: "Wind-Down at Bedtime",
                desc: "Block screen access at night to help kids sleep better and wake up refreshed. Avoid blue light exposure and reduce late-night scrolling with bedtime schedules.",
                img: "https://famisafe.wondershare.com/images/images-2025/screen-time/wind-down-at-bedtime.png",
            },
            {
                title: "Bring Back Family Time",
                desc: "Limit phone use during meals or family activities to promote real-world connection. Encourage meaningful conversations without digital distractions at the dinner table.",
                img: "https://famisafe.wondershare.com/images/images-2025/screen-time/bring-back-family-time.png",
            },
            {
                title: "Time Reward for Healthy Habits",
                desc: "Use screen time extensions as a reward for completing chores or good behavior. Turn digital access into positive reinforcement and motivate daily responsibility.",
                img: "https://famisafe.wondershare.com/images/images-2025/screen-time/time-reward-for-healthy-habits.png",
            },
        ],
        STEPS: [
            {
                step: "Step 1",
                title: "Install FamiSafe",
                description:
                    "Download FamiSafe App from Google Play Store or App Store on the parent's phone.",
                bg: "bg-[#E8FFFA]",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/installation-step1-download.png",
            },
            {
                step: "Step 2",
                title: "Register an Account",
                description:
                    "Register an account for FamiSafe or log in with an Apple, Google, and Facebook ID.",
                bg: "bg-[#FFF4E3]",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/installation-step2-register-duplicate.png",
            },
            {
                step: "Step 3",
                title: "Connect Kid's Device",
                description:
                    "Install the FamiSafe app on your kid's device. Then, input the binding code or scan the QR code to connect both devices.",
                bg: "bg-[#F1ECFF]",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/installation-step3-connect-duplicate.png",
            },
        ],
        TESTIMONIALS: [
            {
                name: "Kayla Huppman",
                text:
                    "Great app for both my kids. I love the added features that help me track their activity and know where they should be at certain times!",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/testimonial-background-2.jpg",
            },
            {
                name: "Amanda Lewis",
                text:
                    "FamiSafe gives me peace of mind knowing my children are safe online. The screen time control and location tracking are extremely helpful.",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/testimonial-background-1.jpg",
            },
            {
                name: "Rachel Moore",
                text:
                    "With FamiSafe, my kids are learning to manage their phone use better. The app helps set limits and encourages them to ask for permission.",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/testimonial-background-3.jpg",
            },
        ],
        CheckScreenTimeUsage: "Check Screen Time Usage",
        LimitScreenTimeonDevices: "Limit Screen Time on Devices",
        SetSmartTimeSchedules: "Set Smart Time Schedules",
        ScreenTimeSolutionsforParentalControl: "Screen Time Solutions for Parental Control",
        HowtoLimitScreenTimeforKids: "How to Limit Screen Time for Kids?",
        WhatParentsAreSaying: "What Parents Are Saying ?",
        Leavedigitalparenting: "Leave digital parenting challenges behind—enjoy true peace of mind, anytime, anywhere.",
        EmpowerYoutoSupervise: "Empower You to Supervise <br /> Kid&apos;s Screen Time",
        ///*================== Screen-Viewer ==================*/}
        KeepTrackofYour: "Keep Track of Your Child's Phone Activity Using Screen Viewer for Monitoring",
        GetRealTimeScreenshots: "Get Real-Time Screenshots",
        FamiSafeScreenViewers: "FamiSafe-Screen Viewer is designed to provide a clear view of your child's online activity by taking snapshots of their screen.",
        Getinstantscreenshots: "Get instant screenshots of your child’s devices",
        Monitorchildrenbehavior: "Monitor children’s behavior and ensure their safety.",
        Seizethemomentsand: "Seize the moments and engage with your children further.",

        TakeScheduleTimedScreenshots: "Take Schedule-Timed Screenshots",
        Shareyourchildscreenconten: "Share your child's screen content on your phone to effortlessly monitor the apps and games they engage with.",
        Thescreenshotscanalsoetaken: "The screenshots can also be taken through automated timed intervals (every 2，5, 10, 15, 20, 25, and 30 minutes).",
        Youcanselecttheintervalfor: "You can select the interval for automated screenshots while your child's device is in use.",
        Analyzeyourchilddigital: "Analyze your child's digital interactions and nurture their growth through capturing screenshots.",

        DetectExplicitandPornographic: "Detect Explicit and Pornographic Content within Images",
        FamiSafeScreenViewerafeguards: "FamiSafe-Screen Viewer safeguards your children from harmful content.",
        Whendetectinginappropriate: "When detecting inappropriate images, parents will be alerted on their end.",
        Byenablingthesuspicious: "By enabling the suspicious filter option, all suspicious images can be displayed in the form of a gallery.",
        Enhanceprotectionandensure: "Enhance protection and ensure your children stay protected from potential risks.",

        HowtoCaptureScreenshots: "How to Capture Screenshots on Children's Devices?",
        Step1InstallFamiSafe: "Step 1: Install FamiSafe",
        DownloadamiSafeApp: "Download FamiSafe App from Google Play Store or App Store on the parent's phone.",
        Step2RegisternAccount: "Step 2: Register an Account",
        RegisteraWondershareIDfor: "Register a Wondershare ID for FamiSafe or log in with an Apple, Google, and Facebook ID.",
        Step3ConnectKidDevice: "Step 3: Connect Kid's Device",
        Useyourkidphone: "Use your kid's phone to scan the QR code on FamiSafe in parent's phone to install Fammy, and the pairing will complete automatically.",
        ForMoreDetails: "For More Details >>",

        MoreTipsabout: "More Tips about Parental Control and Children's Growth",
        BestScreen: "8 Best Screen Viewer Apps for Parents in 2025",
        FreeScreeShare: "Free Scree Share App for Parental Control",
        QuickandEasyWays: "Quick and Easy Ways to Bypass Google Family Link Block",
        EasyStepstoInstall: "Easy Steps to Install and Use YouTube Kids on Amazon Fire",
        Leading5Private: "Leading 5 Private Screenshot Apps for Parents",
        FamilyLinkNotWorking: "Family Link Not Working: Quick & Proven Fix Solutions",
        faqsScreenviwer: [
            {
                question: "How much screen time should kids get?",
                answer:
                    "1. For kids 2 to 4 years old, they should spend screen time less than an hour per day. 2. For children 5-18 years old, parents should try to set consistent screen time limits on the use of kids' any digital devices in two hours or less per day.",

            },
            {
                question: "How can I take screenshots of my child's devices on iPhone?",
                answer:
                    "Here's how to take screenshots of your child's devices on iPhone using FamiSafe 1. Create a FamiSafe account. 2. Install FamiSafe app on parent’s and kid’s phones and tie up two devices. 3. Enter Screen Viewer feature on Parents' end. 4. Then you can get instant and shedule-timed screenshots from children’s devices. 5. If there is inappropriate content in the child's screenshots, it will be flagged. ",
            },
            {
                question:
                    "Should I monitor children's screen?",
                answer:
                    "Consider your child's age and digital behavior when deciding whether to monitor devices. Then, if you choose to monitor, talk to them about it and explain why it's important.",
            },
            {
                question:
                    "How can I take screenshots of my child's devices on Android?",
                answer:
                    "Here's how to take screenshots of your child's devices on Android using FamiSafe 1. Create a FamiSafe account. 2. Install FamiSafe app on parent’s and kid’s phones and tie up two devices. 3. Enter screen Viewer feature on Parents' end. 4. Then you can get instant and shedule-timed screenshots from children’s devices. 5. If there is inappropriate content in the child's screenshots, it will be flagged.",
            },
        ],
        /// Appp Roule
        AppBlocker: "App Blocker",
        Instantlybockdistracting: "Instantly bock distracting apps, games, and social media on kids’ devices, schedule focus times, and help your kids build healthy digital habits.",
        EmpowerYoutoControl: "Empower You to Control Kid's App Usage",
        Leaveappdistractions: "Leave app distractions behind—enjoy true peace of mind, anytime, anywhere.",
        BlockAnyAppInstantly: "Block Any App Instantly",
        Takeinstantcontrolof: "Take instant control of inappropriate apps across all your kids' devices.",
        Onetapblockingfor: "One-tap blocking for games, social media, or entertainment.",
        Blockindividualapps: "Block individual apps or entire categories easily.",
        SetappstoBlocked: "Set apps to Blocked, Limited, or Allowed status.",

        ScheduleAppBlocking: "Schedule App Blocking Times",
        Createautomaticapp: "Create automatic app rules to limit screen time for kids.",
        Autoblocappsduring: "Auto-block apps during homework, bedtime, or meals.",
        Applyifferentrules: "Apply different rules for weekdays and weekends.",
        Customizetheistf: "Customize the list of blocked apps for specific schedules.",

        SetAgeBasedFilters: "Set Age Based Filters",
        Protectkidsautomatically: "Protect kids automatically by filtering apps inappropriate for their age.",
        Filterappsbyageratings: "Filter apps by age ratings (4+, 12+, 17+).",
        Autolocnewlydownloaded: "Auto-block newly downloaded apps for review.",
        Notifyhenkidsrequest: "Notify when kids request access to blocked apps.",

        AppBlockingcenariosParents: "App Blocking Scenarios Parents Love",
        featuresds: [
            {
                title: "Pause Social Apps & Games",
                desc: "Need a tech timeout? Instantly freeze TikTok, Instagram, or even game apps with a single tap—perfect for family talks, chores, or when you just need a little peace and quiet.",
                img: "https://famisafe.wondershare.com/images/images-2025/app-blocker/social-pause.png",
            },
            {
                title: "No more Homework bettle",
                desc: " Block game apps and fun apps during homework time so your kid can really focus and finish faster. Less stress, better grades, and happier evenings for everyone. ",
                img: "https://famisafe.wondershare.com/images/images-2025/app-blocker/homework-block.png",
            },
            {
                title: "Family Dinner P hone pouse",
                desc: " Set app limits so everyone’s present at the table, not lost in their screens. Enjoy real conversation and connection every mealtime.",
                img: "https://famisafe.wondershare.com/images/images-2025/app-blocker/homework-block.png",
            },
            {
                title: "Light out screen  Freeze",
                desc: " Block game apps and fun apps during homework time so your kid can really focus and finish faster. Less stress, better grades, and happier evenings for everyone. ",
                img: "	https://famisafe.wondershare.com/images/images-2025/app-blocker/homework-block.png",
            },
        ],
        HowtoBlockApps: "How to Block Apps for Kids?",
        sliides: [
            {
                title: "Location Tracking",
                desc: "Track your child's real-time location and movement history.",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/location-tracking.png",
            },
            {
                title: "Driving Report",
                desc: "Monitor driving speed, routes, and driving behavior.",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/driving-report.png",
            },
            {
                title: "SOS Alert",
                desc: "Get instant SOS alerts with precise location information.",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/sos-alert.png",
            },
            {
                title: "Screen Time Control",
                desc: "Set daily screen time limits for healthier phone usage.",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/screen-time-control.png",
            },
            {
                title: "App Blocker",
                desc: "Block distracting apps and games during focus time.",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/app-blocker.png",
            },
            {
                title: "Web Filter",
                desc: "Protect kids from harmful or inappropriate websites.",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/web-filter.png",
            },
            {
                title: "YouTube Monitoring",
                desc: "Monitor YouTube watch history and searched content.",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/youtube-monitoring.png",
            },
            {
                title: "Social Media Monitoring",
                desc: "Track social media activities across popular platforms.",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/social-media-monitoring.png",
            },
            {
                title: "App Usage Report",
                desc: "View detailed reports of app usage time.",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/app-usage-report.png",
            },
            {
                title: "Screen Viewer",
                desc: "See your child's phone screen in real time.",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/screen-viewer.png",
            },
            {
                title: "Suspicious Text Detection",
                desc: "Detect risky or suspicious keywords in messages.",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/suspicious-text.png",
            },
            {
                title: "Geofencing",
                desc: "Set safe zones and receive alerts when kids enter or leave.",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/geofencing.png",
            },
            {
                title: "Activity Timeline",
                desc: "Review daily activity timelines for better supervision.",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/activity-timeline.png",
            },
            {
                title: "Content Filtering",
                desc: "Automatically filter age-inappropriate content.",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/content-filtering.png",
            },
            {
                title: "Instant Alerts",
                desc: "Receive instant alerts for risky behavior.",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/instant-alerts.png",
            },
        ],
        tips: [
            { text: "Free Apps to Limit Screen Time on Android & iOS", link: "#" },
            { text: "5 Apps to Control Noble Screen Time", link: "#" },
            { text: "How to Check Screen Time on Samsung?", link: "#" },
            { text: "How to Check Screen Time on iPhone?", link: "#" },
            { text: "How to Check Screen Time on Huawei?", link: "#" },
            { text: "How to Check Screen Time on Xiaomi?", link: "#" },
        ],
        faqds: [
            {
                question: "Are There Free Apps for Blocking Apps?",
                answer:
                    "FamiSafe App Blocker offers a free trial, and other free tools exist, but only premium blockers give parents remote control, schedules, and tamper alerts parents need.",
            },
            {
                question: "What Is the Best App Blocker for Studying?",
                answer:
                    "Reviewers rank FamiSafe alongside AppBlock because its schedules and alert system keep students focused without harsh lockouts.",
            },
            {
                question:
                    "Can You Block Apps on iPhone remotely?",
                answer:
                    "Yes, FamiSafe allows parents to effectively block distracting apps on iPhone. Our solution works with iOS restrictions to provide comprehensive control over which applications your child can access and when.",
            },
            {
                question:
                    "How to Disable App Blocker?",
                answer:
                    "Open FamiSafe parent app, choose child device, tap App Blocker, switch Instant Block off and delete schedules. On iPhone disable Screen-Time limits; on Android remove Digital Wellbeing timers or uninstall any third-party blocker.",
            },
        ],
        ///One-way-Audio
        OneWayAudio: "One-Way Audio",
        Experiencetheultimate: "Experience the ultimate peace of mind with our cutting-edge sound locator app. Effortlessly listen to sounds around your children on their Android devices, ensuring their safety and well-being like never before.",

        KeepTrackofYourChild: "Keep Track of Your Child's Phone Activity Using Screen Viewer for Monitoring",
        GetRealTimeScreenshots: "Get Real-Time Screenshots",
        FamiSafeScreenVieweris: "FamiSafe-Screen Viewer is designed to provide a clear view of your child's online activity by taking snapshots of their screen.",
        Getnstantscreenshots: "Get instant screenshots of your child’s devices.",
        Monitorchildrens: "Monitor children’s behavior and ensure their safety.",
        Seizethemomentsand: "Seize the moments and engage with your children further.",

        PreventPotentially: "Prevent Potentially Dangerous Situations",
        Enhancechildsafetyand: "Enhance child safety and foster stronger parent-child relationships through listening from a distance device",
        Parentscanuicklylisten: "Parent's can quickly listen to their children's surrounding environment by activating the One-Way audio feature when they are unresponsive to calls, unable to speak, or in unknown places.",
        OneWayudiosafeguardschildren: "One-Way audio safeguards children's physical and mental well-being by monitoring sound and around on the child’s end, effectively preventing the risks of bullying and exposure to negative influences.",
        Ournewfeaturtrengthensarent: "Our new feature strengthens parent-child relationships by promoting attentive and caring parenting, fostering feelings of love and care in children, and building trust between parents and children.",

        Howtoistentoid: "How to Listen to Kid's Surrounding Voice?",
        appStores: [
            {
                name: "App Store",
                href: "https://www.apple.com/app-store/",
                icon: "/assets/images/icons/iphone.png",
            },
            {
                name: "Google Play",
                href: "https://play.google.com/store",
                icon: "/assets/images/icons/google.png",
            },
            {
                name: "Amazon Appstore",
                href: "https://www.amazon.com/gp/mas/get/android",
                icon: "/assets/images/icons/aman.png",
            },
            {
                name: "macOS",
                href: "https://www.apple.com/macos/",
                icon: "/assets/images/icons/mac.png",
            },
            {
                name: "Windows",
                href: "https://www.microsoft.com/windows",
                icon: "/assets/images/icons/download.png",
            },
            {
                name: "Chrome Store",
                href: "https://chromewebstore.google.com/",
                icon: "/assets/images/icons/chrome.jpg",
            },
        ],
        MoreTipsabout: "More Tips about Parental Control and Children's Growth",
        WhatIsLive: "What Is Live Listen on iPhone and Android",
        Top6BestAI: "Top 6 Best AI Parental Control Apps Review 2025",
        Best5Android: "5 Best Android Remote Listening Apps",
        WhySomeoneIs: "Why Someone Is Not Answering Phone Calls and How to Handle It",
        GoogleFamilyLink: "Google Family Link App Review: Practical User Testing",
        FamilyLinkNotWorking: "Family Link Not Working: Quick & Proven Fix Solutions",

        faqsq: [
            {
                question: "Is there a remote listening app?",
                answer:
                    "FamiSafe One-Way Audio allows you to hear all the surrounding sounds from your remote device. It is a reliable tool for modern parents to listen to their kid’s surroundings in real-time.",
            },
            {
                question: "How to enable the One Way Audio feature on the parent’s device?",
                answer: "Here's how to enable One Way Audio using FamiSafe 1. Create a FamiSafe account. 2. Install FamiSafe app on parent’s and kid’s phones and tie up two devices. 3. Enter OneWay Audio from Features and Phone Activity of the sidebar on the right where all the functions are listed. 4. Then you could tap to record the sound around the kid. 5. After finishing the recording, you can open, rename, delete, and share all the recorded files.",
            },
            {
                question:
                    "Can you listen through your child's phone?",
                answer:
                    "Yes, you can use your smartphone as a listening device by installing the FamiSafe app. Through using the One-Way Audio feature, you can effortlessly listen to sound around your children.",
            },
            {
                question:
                    "Can the child's end disable the One-Way Audio feature?",
                answer: "One-Way Audio feature can be disabled on a child's Android devices on the 'Account Info' page. After disabling the feature, parents will no longer be able to listen to the surroundings of the child's end.",
            },
        ],

        /// Activity Reports
        ActivityReport: "Activity Report",
        Monitoringkidsphones: "Monitoring kids' phones to know their daily phone activities. Check which apps kids use mostly and the apps they install or uninstall.",
        GetTheDetailof: "Get The Details of Device Online Activity",
        KeepAnEyeonDaily: "Keep An Eye on Daily Online Life",
        MakeYourOwnJudgemen: "Make Your Own Judgement Whether Kids Are Addicted to Phone.",
        Viewyourkids: "View your kids' daily phone activity.",
        Learnwhenandwhich: "Learn when and which apps have been used.",
        Knowwhetheryourkids: "Know whether your kids are addicted to some apps.",

        GetFullDetailsof: "Get Full Details of Kids' Daily Phone Usage",
        Getridofthetrouble: "Get rid of the trouble of confirming phone usage details with your kids.",
        Getthemostreliable: "Get the most reliable phone usage details by using Activity Report.",
        Bestwaytomonitor: "Best way to monitor teenager iPhone.",
        Reviewwhichvideos: "Review which videos or sites your kids visited.",

        GetKidsDeviceApplication: "Get Kids' Device Application Updates",
        Keepuptodatewiththe: "Keep up-to-date with the latest apps that kids love and remind them of potential dangers.",
        Graspthemostrecently: "Grasp the most recently installed/uninstalled apps.",
        Switchdatestoviewkids: "Switch dates to view kids' recent online preferences.",
        Checkyourkidsdevices: "Check if your kids' devices are invaded by malware.",
        HowtoChecktheActivity: "How to Check the Activity Report ?",

        MoreTipsforMonitoring: "More Tips for Monitoring Phone Activity",
        To9BestFree: "[2022] Top 9 Best Free Parental Control App for Android.",
        BestiOSParentalControl: " Best iOS Parental Control Apps for iPad&iPhone in 2022.",
        HowtoUseActivityMonitor: "How to Use Activity Monitor on Your Mac?",
        HowtoSeeWhatMyKidisDoing: "How to See What My Kid is Doing on His/Her Phone?",
        Top10BestFreePhoneMonitoringApps: "Top 10 Best Free Phone Monitoring Apps for Android and iPhone.",

        faqxs: [
            {
                question: "1. How to monitor online activity on kids' smartphones?",
                answer:
                    "Open your Google play store and search the FamiSafe parental control app, you will get it. Install it on all devices you want to monitor ( you will be able to monitor five devices in one purse).Open a membership account with the app.Connect all devices to parents' devices and start monitoring.After the successful setup, you will be able to check kids' activity reports, restrict your kids access to inappropriate websites and apps lock games and other apps during breaks and study time.",
            },
            {
                question: "2. What are the symptoms of cell phone addiction?",
                answer: "Here are some signs that may lead you to think that your kid is addicted to the cell phone. 1) Your kid is angry most of the time 2) Facing depression 3) Looks tensed 4) The kid is mostly irritated and snaps over small things 5) Looks or behaves restless 6) Sleepness is another symptom you must not ignore 7) If your kid is unable to stop using his phone even during important events, eg., a funeral, etc. 8) Sudden lack of communication and aloofness 9) Neglecting dinner time with family or daily chores 10) Sleeping at odd hours.",
            },
            {
                question:
                    "3. What are the most popular apps among kids?",
                answer:
                    "The most popular iPhone and Android phone apps for kids are : 1) YouTube 2) Instagram 3) WhatsApp 4) Spin Safe Browser 5) Snapchat 6) Facebook 7) Android Messages (text) 8) YouTube Kids 9) Chrome 10) Netflix 11) Facebook Messenger.",
            },
            {
                question:
                    "4. How many hours should kids spend on the phone a day?",
                answer:
                    "Every child is different. Even experts could not provide a definite answer about how much time the kids should spend on digital devices. We recommend that 1-2 hours on school days is a reasonable amount. While on weekends or holidays, perhaps 3-4 hours is a reasonable amount. Most important of all, parents should set the kids up for a healthy relationship with technology.",
            },
        ],
        /// you tube control app
        YouTubeParentalControl: "YouTube Parental Control",
        Herearethecompletel: "Here are the completely foolproof ways to set parental controls on kids' YouTube of different devices.",
        TableofContents: "Table of Contents",
        youtubeParentalLinks: [
            {
                title: "What Parents Should Know About YouTube",
                path: "/parents-should-know-youtube",
            },
            {
                title: "YouTube's Restricted Mode",
                path: "/youtube-restricted-mode",
            },
            {
                title: "FamiSafe YouTube Parental Control",
                path: "/famisafe-youtube-parental-control",
            },
            {
                title: "YouTube Parental Controls Tips and Tricks",
                path: "/youtube-parental-control-tips",
            },
            {
                title: "Google Play or iOS Setting for YouTube Parental Control",
                path: "/youtube-parental-control-settings",
            },
            {
                title: "Turn to YouTube Kids",
                path: "/youtube-kids",
            },
            {
                title: "Turn on Google SafeSearch",
                path: "/google-safesearch",
            },
        ],
        WhatParentsShould: "What Parents Should Know About YouTube",
        youtubeParentalCards: [
            {
                title: "Dangerous Challenge & Viral Videos",
                description:
                    "There are lots of dangerous and viral videos on YouTube and most of them are shared quickly. One YouTuber may post a video of themselves doing something unusual like eating very spicy food or jumping in a river before you know it. The video gets many views and likes, more and more people want to join in and share their videos.",
                bgColor: "bg-[#E0F8F6]",
                iconColor: "bg-[#00D1C1]",
            },
            {
                title: "Age-inappropriate Video Content",
                description:
                    "YouTube is the biggest video-sharing website in the world, sometimes content does not violate their policies, but it may not be appropriate for your kids. Even though YouTube has their own team to review the videos or has mechanisms to remove explicit and harmful content, some offensive or disturbing content can still slip through.",
                bgColor: "bg-[#F3EBFF]",
                iconColor: "bg-[#8C5EFF]",
            },
            {
                title: "YouTube Addiction",
                description:
                    "Kids are the most vulnerable to YouTube addiction due to its cool features and an endless supply of content. According to research, 28% of teens spend more than an hour at a time on YouTube. 16% of teens spend between one and two hours on the site and 12.5% of teens watch more than two hours of videos at a time.",
                bgColor: "bg-[#FFF3EE]",
                iconColor: "bg-[#FF6B4C]",
            },
            {
                title: "Inadequate Supervision and Control",
                description:
                    "Cyberbullying on social media can happen to anyone at any time as social media is the most common platform. The Ditch the Label finds that 92% of young people use YouTube and 10% of them have experienced cyberbullying on it.",
                bgColor: "bg-[#FFF9E6]",
                iconColor: "bg-[#FFB822]",
            },
        ],
        PartHowtoseYouTube: "Part 1: How to Use YouTubes ‘Restricted’ Mode to Set YouTube Parental Controls?",
        IncorporatedbyGoogleYouTube: "Incorporated by Google, YouTube Restricted Mode is a brilliant tool that helps users filter out any disturbing content from their accounts. When Restricted Mode is activated, clips containing any inappropriate materials get screened out by the algorithm and blocked. Parents can better control the content children see. Although it is not 100% foolproof, it ensures a cleaner, safer, and controlled YouTube viewing experience for families. Find out how to utilize Restricted Mode to set YouTube Parental control.",
        // restrictedModeContent.js
        restrictedModeContent: {
            browser: {
                title: "1.1 Turn on Restricted Mode on Browser",
                steps: [
                    "Access the YouTube website and sign in to your account.",
                    "Click the account profile at the top right.",
                    "Toggle on Restricted Mode option.",
                ],
            },
            app: {
                title: "1.2 Turn on Restricted Mode on App",
                steps: [
                    "Launch YouTube app and tap on the account profile.",
                    "Find and tap on Settings at the end of the list.",
                    "Click on General then turn on Restricted Mode.",
                ],
            },
            image: {
                src: "https://famisafe.wondershare.com/images/images-2020/new/subject/youtube-parental-controls-restricted-mode.png",
                alt: "Restricted Mode Guide",
            },
        },

        PartHowtoUseYouTubes: "Part 1: How to Use YouTube's ‘Restricted’ Mode to Set YouTube Parental Controls?",
        IncorporatedbyGoogleYouTubeR: "Incorporated by Google, YouTube Restricted Mode is a brilliant tool that helps users filter out any disturbing content from their accounts. When Restricted Mode is activated, clips containing any inappropriate materials get screened out by the algorithm and blocked. Parents can better control the content children see. Although it is not 100% foolproof, it ensures a cleaner, safer, and controlled YouTube viewing experience for families. Find out how to utilize Restricted Mode to set YouTube Parental control.",
        // restrictedModeFamilyContent.js
        restrictedModeFamilyContent: {
            infoCard: {
                title: "Control Restricted Mode for your family",
                description:
                    "Parents can also turn on Restricted Mode in child's account by using Family Link. Once enabled Restricted Mode by this app, kids can't turn off the Restriction setting on any of their signed-in devices. But when they turn 13, they can easily turn off the restriction by creating a normal Google account.",
            },
            pros: {
                title: "Pros:",
                items: [
                    "Help a great deal at protecting kids from YouTube content.",
                    "Protect kids from learning vulgar language and demeaning content.",
                    "Avoid trauma caused by watching violent activities, natural calamities and tragedies.",
                    "Prevent kids from emulating harmful behaviors like substance abuse and sexual activities.",
                ],
            },
            cons: {
                title: "Cons:",
                items: [
                    "Easily bypass by using a proxy website, VPN or adding an NSFW.",
                    "Kid can create another account to bypass.",
                    "Disturbing videos still can slip through on YouTube.",
                ],
            },
        },
        Part2HowtoUseFamiSafeto: "Part 2: How to Use FamiSafe to Set YouTube Parental Controls?",
        FamiSafeisawidelyusedparental: " FamiSafe is a widely used parental control application designed with incredible features that allow parents to monitor kids' phone activity remotely. It is available for use on Android as well as iOS devices. It helps parents to manage screen time, monitor their whereabouts, filter web content, and get notified of malicious content on their kids’ phones. It can also track app usage and allow app blocking if needed.",

        YouTubeParentalControl: " 2.1 YouTube Parental Control on Android",
        FamiSafeAndroidparental: "FamiSafe Android parental control solution provides you with YouTube content detection and app control. For suspicious texts on YouTube, parents can connect their kids' YouTube accounts and detect inappropriate video titles, descriptions and comments from which kids have subscribed, liked, posted or commented. For YouTube app control on Android, parents can view all video history and block some disturbing videos or channels.",
        PartHowtoUseFamiSafe: "Part 2: How to Use FamiSafe to Set YouTube Parental Controls?",
        FamiSafeisawidelyused: "FamiSafe is a widely used parental control application designed with incredible features that allow parents to monitor kids' phone activity remotely. It is available for use on Android as well as iOS devices. It helps parents to manage screen time, monitor their whereabouts, filter web content, and get notified of malicious content on their kids’ phones. It can also track app usage and allow app blocking if needed.",
        RegisteraFamiSafeaccount: "Register a FamiSafe account on the website or app from Google Play",
        InstallFamiSafeappboth: "Install FamiSafe app both on parent's and kid's devices.",
        Connectkiddeviceand: "Connect kid's device and manage from parent's device.",
        YouTube22Parental: "2.2 YouTube Parental Control on iOS Device",
        FamiSafeiPhoneparental: "FamiSafe iPhone parental control solution can help parents track risky keywords from inappropriate video titles, descriptions and comments that kids have subscribed, liked, posted or commented. Parents will get  alerts if there are danger signs on your kids' iPhone or iPad.",
        RegisteraFamiSafeaccount: "Register a FamiSafe account on the website or app from App Store",
        InstallFamiSafeappbothon: "Install FamiSafe app both on parent's and kid's devices.",
        Connectkidsdeviceand: "Connect kids' device and manage from parent's device.",
        How31tosetparental: "3.1 How to set parental control in Google Play store?",
        TaponAppsGamesAnd: "Tap on Apps & Games. And enter a PIN for the first time.",
        Selectyourpreferredrating: "Select your preferred rating by tapping on the check button.",
        Click76onSave: "Click on Save.",
        Repeatthesameprocessfo: "Repeat the same process for Movies, TV, Music, and Books.",
        PartHowtoUseGooglePlay: "Part 3: How to Use GooglePlay or iOS Settingto Set YouTube Parental Control?",
        Inhispartwewilllookat: " In this part, we will look at setting YouTube Parental control on Android and iOS devices. For Android users, there is Google Play parental control that lets parents manage downloaded apps and ensure ads shown are age-appropriate and avoid impulsive and accidental purchases. In the case of iOS parental control, parents can enable Screen Time in the Settings. With the right age and appropriate alterations set, as per your preferences, you can freely let your kid use your iOS gadget.",
        restrictedModeFamilyContentt: {
            infoCard: {
                title: "Control YouTube Screen Time and Block App",
                description:
                    "FamiSafe also provides screen time and app blocker features which parents can use to control how much time that kids can spend on YouTube and if kids are addicted to YouTube, they even can block it.",
            },
            pros: {
                title: "Pros:",
                items: [
                    "A. Check watch history of YouTube content and block malicious videos and channels on Android.",
                    "B. Easy to monitor the kid’s phone activity from the comfort of your seat.",
                    "C. Enable you to manage screen time remotely.",
                    "D. There is a free trial, and its subscription plans are affordable.",
                ],
            },
            cons: {
                title: "Cons:",
                items: [
                    "A. The iPhone version has limited features.",
                    "B. For iOS device, it can only block apps by category.",
                ],
            },
        },
        How32tosetparental: "3.2 How to set parental control in iOS setting",
        GowetoSettingsand: "Go to Settings and scroll down to Screen Time.",
        Clicke43onContent: "Click on Content & Privacy Restrictions.",
        Go3wrrtoiTunes: "Go to iTunes & App Store Purchases.",
        Setto45DontAllow: "Set to Don’t Allow",
        Tap5rdgfonContent: "Tap on Content Restrictions to limit YouTube websites",
        TapkpoAppLimitsandc: "Tap App Limits and choose app categories to set screen time limit.",
        prosConsContent: {
            pros: {
                title: "Pros:",
                items: [
                    "Safety from possible malicious software.",
                    "Don’t have to purchase anything extra.",
                    "Realistic and steady in-built parental control settings.",
                ],
            },
            cons: {
                title: "Cons:",
                items: [
                    "Lack of a cross-platform solution. You cannot restrict kids’ iPhone devices from Android.",
                    "Limited security. Don’t offer an anti-virus or malware solution.",
                    "Easily bypassed using a new account or third-party apps.",
                ],


            },
        },
        prosConsContentt: {
            pros: {
                title: "Pros:",
                items: [
                    "Safety from possible malicious software.",
                    "Don’t have to purchase anything extra.",
                    "Realistic and steady in-built parental control settings.",
                ],
            },
            cons: {
                title: "Cons:",
                items: [
                    "Lack of a cross-platform solution. You cannot restrict kids’ iPhone devices from Android.",
                    "Limited security. Don’t offer an anti-virus or malware solution.",
                    "Easily bypassed using a new account or third-party apps.",
                ],
            },
        },
        Part4TurnpoitoYouTubeKids: " Part 4: Turn to YouTube Kids",
        YouTubeKityudsisdesignated: "YouTube Kids is designated for kids under age 12 to explore their interests and watch videos in a contained experience. According to the age of your kids, you can choose Preschools (age 4 or under), Younger(age 5 to 7), Older(age 8 to 12) to determine the types of videos available on the app. Moreover, you can also set screen limits, block videos, check view history with YouTube Kids.",
        Howtosettyuparental: "How to set parental controls on YouTube Kids",
        Intheapjhptapthe: "In the app, tap the Lock icon at the bottom.",
        Answeraslswimple: "Answer a simple multiplication problem, or enter the number that appear. Or enter the passcode you set.",
        SelectSetting: "Select Setting to edit and change your kid’s profile.",
        SelectTimertoset: "Select Timer to set a screen limit for the app.",
        prosConsContentts: {
            pros: {
                title: "Pros:",
                items: [
                    "A. Filtered videos to keep kids safe.",
                    "B. Provide parental control features like screen limit, video blocker.",
                    "C. Allow parents to check view history.",
                    "D. Easy to use and set up for parents",
                ],
            },
            cons: {
                title: "Cons:",
                items: [
                    "A. Kids can use the YouTube website or simply download a YouTube app on their devices to watch the videos they want.",
                    "B. The parental-control lock is easily bypassed.",
                    "C. Some inappropriate content may still slip in.",
                ],
            },
        },
        Part5eeseGoogl: "Part 5:Use Google SafeSearch for YouTube Parental Control",
        GoogleSafeSearchisf: "Google SafeSearch is a feature that uses algorithms to filter inappropriate images, writings or websites page from search results. It is useful to keep your kids safe from explicit results like pornography, violence when they are browsing alone. The feature can be locked on and only switched off with a password you set.",
        TurnnGoeogle: "5.1 Turn on Google SafeSearch on your browser",
        GotoSearrrchSettings: "Go to Search Settings.",
        FindSafrreSearchfilters: "Find SafeSearch filters",
        Clickthrreboxnextto: "Click the box next to “Turn on SafeSearch” to turn the feature on.",
        Scrolldorrtwnandclick: "Scroll down and click on “Save”",
        TurndronGoogle: " 5.2 Turn on Google SafeSearch on App",
        LaunchtheGoogleapp: "Launch the Google app.",
        Taponthethreedot: "Tap on the three dots at the bottom right corner.",
        TapSettingsGeneral: "Tap Settings → General. Scroll down and find the “SafeSearch” tab and toggle it on.",
        restrictedModeFamilyContenttt: {
            infoCard: {
                title: "Note:",
                description: "SafeSearch only works on Google’s search results. It won’t prevent users on your network from finding explicit content through other search engines or by navigating directly to explicit sites.",
            },
            pros: {
                title: "Pros:",
                items: [
                    "A. Protect kids from explicit content online.",
                    "B. Kids will not be able to turn off the feature if it is locked on unless they have the password.",
                ],
            },
            cons: {
                title: "Cons:",
                items: [
                    "A. Some acceptable sites may be blocked.",
                    "B. Can not block all explicit content.",
                    "C. Kids can simply use a different search engine like Yahoo, Bing."
                ],
            },
        },
        YouTubeParental87Cont: "YouTube Parental Control Tips and Tricks",
        guides: [
            {
                title: "How to Block YouTube Videos?",
                desc: "Introduce effective ways about how to block harmful videos on Kid's device.",
                bg: "bg-[#EAFBF8]",
                path: "/block-youtube-videos",
            },
            {
                title: "How to Enable YouTube Parental Filter?",
                desc: "Learn how to turn on content filtering on your kid’s YouTube and set parental control remotely.",
                bg: "bg-[#F3EEFF]",
                path: "/youtube-parental-filter",
            },
            {
                title: "How to Monitor YouTube Watch History?",
                desc: "Find some practical ways to check your kids' YouTube watch history.",
                bg: "bg-[#FFF1EA]",
                path: "/monitor-youtube-history",
            },
            {
                title: "How to Block YouTube Channels Remotely?",
                desc: "Learn an effective way to block disturbing YouTube Channels distantly on child's Android phone.",
                bg: "bg-[#FFF6E8]",
                path: "/block-youtube-channels",
            },
            {
                title: "How to Block YouTube on Android?",
                desc: "Introduce some methods to block YouTube app on Kid's Android phone.",
                bg: "bg-[#F3EEFF]",
                path: "/block-youtube-android",
            },
            {
                title: "How to Block Adult Content on YouTube",
                desc: "Read on and learn how to block adult content on YouTube in this guide to protect your kids.",
                bg: "bg-[#EAFBF8]",
                path: "/block-youtube-adult-content",
            },
        ],
        /// Tiktok  History
        CheckKjhidsTikTok: "Check Kids' TikTok History",
        Getdetailffsaboutthe: "Get details about the videos your kids are browsing on TikTok. Keep them away from inappropriate videos.",
        TheBestWaytoPffreven: "The Best Way to Prevent Kids from TikTok Addiction",

        UnderstandytrfYourKidBetter: "Understand Your Kid Better",
        NoneedtocoionnectTikTok: "No need to connect TikTok account, free to check TikTok history with FamiSafe on Android.",
        Getnforlljimation: "• Get information of the visited channels for a specific date.",
        ClickViekkgwtoge: "• Click View to get the video’s details, see what your kids have browsed.",
        Checkhowlongy: "• Check how long your kids have spent on TikTok.",
        faqbs: [
            {
                question: "1. How to monitor online activity on kids' smartphones?",
                answer:
                    "1. Open your Google play store and search the FamiSafe parental control app, you will get it. Install it on all devices you want to monitor ( you will be able to monitor five devices in one purse). 1.  Open a membership account with the app. 3. Connect all devices to parents' devices and start monitoring.After the successful setup, you will be able to check kids' activity reports, restrict your kids' access to inappropriate websites and apps, lock games and other apps during breaks and study time.",
            },
            {
                question: "2. What are the symptoms of cell phone addiction?",
                answer:
                    "Here are some signs that may lead you to think that your kid is addicted to the cell phone. 1) Your kid is angry most of the time 2) Facing depression 3) Looks tensed 4) The kid is mostly irritated and snaps over small things 5) Looks or behaves restless 6) Sleepness is another symptom you must not ignore 7) If your kid is unable to stop using his phone even during important events, e.g., a funeral, etc. 8) Sudden lack of communication and aloofness 9) Neglecting dinner time with family or daily chores 10) Sleeping at odd hours.",
            },
            {
                question:
                    "3. What are the most popular apps among kids?",
                answer:
                    "The most popular iPhone and Android phone apps for kids are : 1) YouTube 2) Instagram 3) WhatsApp 4) Spin Safe Browser 5) Snapchat 6) Facebook 7) Android Messages (text) 8) YouTube Kids 9) Chrome 10) Netflix 11) Facebook Messenger.",
            },
            {
                question:
                    "4. How many hours should kids spend on the phone a day?",
                answer:
                    "Every child is different. Even experts could not provide a definite answer about how much time the kids should spend on digital devices. We recommend that 1-2 hours on school days is a reasonable amount. While on weekends or holidays, perhaps 3-4 hours is a reasonable amount. Most important of all, parents should set the kids up for a healthy relationship with technology.",
            },
        ],
        UltimatedeGuidetoWatc: "Ultimate Guide to Watch or Monitor TikTok Without App",
        SimpleWaystRestric: "5 Simple Ways to Restrict Your Kids' TikTok Screen Time",
        BestApphosforTik: "6 Best Apps for TikTok Monitoring and Screen Time Limiting.",
        LeadingTpoikTokProfile: "5 Leading TikTok Profile Viewers to Check Private Profiles",
        HowtoSebuntUpParenta: "How to Set Up Parental Controls on TikTok [2025]",
        HowtoRyiemoteChec: "How to Remote Check My Kids' TikTok History?",
        HowtoViewKidsTik: "How to View Kids' TikTok History?",
        /// Inappropriate Pictures
        DetectSuspicihhyousPhotos: "Detect Suspicious Photos",
        Detectsuspyyticiousimages: "Detect suspicious images like nude selfies, and porn photos on kids' devices and send instant alerts, helping parents easily block porn on phones.",
        Minimize65TheExposurea: "Minimize The Exposure and Harm of Pornography",

        MonitytrorKidAlbum: "Monitor Kid's Album",
        Monitorhfdkidsalbums: "Monitor kids' albums in all directions to see if there are any pornographic pictures.",
        Tracksuspigggciousi: "Track suspicious images in kids' albums.",
        Adjusttheaoiiccuracy: "Adjust the accuracy level to control the detection of explicit photos.",
        Viewsuspiciousyytpictu: "View suspicious picture records.",

        ReceivbveAlerts: "Receive Alerts",
        Whensuspdfgiciouspictures: "When suspicious pictures are detected on kids' devices, timely warnings will be sent to parents.",
        warningdfgoncedetect: " Send warning once detect suspicious pictures.",
        Knowwhidfgchkidsde: "Know which kids' device detected the suspicious picture.",

        DealWithhePhotos: "Deal With The Photos",
        Parentscancheckt: "Parents can check the alert or manage images detected from kids' Android devices, helping them quickly block porn on phone.",
        Viewanddirectlydele: "View and directly delete suspicious pictures on your kids' Android device.",
        Afterdeletionthesus: "After deletion, the suspicious images will no longer be displayed on kids' devices.",
        Contacttheidsi: "Contact the kids in time and help them solve the problem.",
        HowtoDetectnap: "How to Detect Inappropriate Pictures ?",

        MoreTipsforSuspen: "More Tips for Suspending Inappropriate Pictures",
        BestPornBlockin: "Best Porn Blocking Apps for Android & iOS in 2022.",
        HowtoBlockPo: "How to Block Porn on Computer?",
        EffectiveSoluti: "5 Effective Solutions to Block Porn Sites on Android.",
        HowtoGetRidofP: " How to Get Rid of Porn Addiction?",
        HowtoBlockPorno: "How to Block Porn on iPhone Using FamiSafe?",
        HowtoBlockAllPornite: "How to Block All Porn Sites on iPhone & Android?",
        /// FAQs Section
        faqas: [
            {
                question: "1. How to monitor online activity on kids' smartphones?",
                answer:
                    "Open your Google play store and search the FamiSafe parental control app, you will get it. Install it on all devices you want to monitor ( you will be able to monitor five devices in one purse). 2. Open a membership account with the app. 3. Connect all devices to parents' devices and start monitoring.After the successful setup, you will be able to check kids' activity reports, restrict your kids' access to inappropriate websites and apps, lock games and other apps during breaks and study time.",
            },
            {
                question: "2. What are the symptoms of cell phone addiction?",
                answer:
                    "Here are some signs that may lead you to think that your kid is addicted to the cell phone. 1) Your kid is angry most of the time 2) Facing depression 3) Looks tensed 4) The kid is mostly irritated and snaps over small things 5) Looks or behaves restless 6) Sleepness is another symptom you must not ignore 7) If your kid is unable to stop using his phone even during important events, e.g., a funeral, etc. 8) Sudden lack of communication and aloofness 9) Neglecting dinner time with family or daily chores 10) Sleeping at odd hours.",
            },
            {
                question:
                    "3. What are the most popular apps among kids?",
                answer:
                    "The most popular iPhone and Android phone apps for kids are : 1) YouTube 2) Instagram 3) WhatsApp 4) Spin Safe Browser 5) Snapchat 6) Facebook 7) Android Messages (text) 8) YouTube Kids 9) Chrome 10) Netflix 11) Facebook Messenger.",
            },
            {
                question:
                    "4. How many hours should kids spend on the phone a day?",
                answer:
                    "Every child is different. Even experts could not provide a definite answer about how much time the kids should spend on digital devices. We recommend that 1-2 hours on school days is a reasonable amount. While on weekends or holidays, perhaps 3-4 hours is a reasonable amount. Most important of all, parents should set the kids up for a healthy relationship with technology.",
            },
        ],
        /// Genection
        Soluttyyion: "Solution",
        pricioiung: "pricing",
        Guidefg: "Guide",
        Resourcesd: "Resource",
        prierercing: "Buy Now",

        ///Social App Detection

        SocialAppDetection: "Social App Detection",
        Monitorsocialapp: "Monitor social apps and YouTube to detect any explicit or offensive words. Set offensive words to get alert when they are detected on your kid's device.",
        KnowMoreAbou: "Know More About Disturbing Content on Social Media",
        Mysongotupset: "My son got upset after he checked his Facebook messenger. I wonder what he received?",
        HowcanIkeep: "How can I keep an eye on what my 7-year-old son is watching on YouTube?",
        CanIblockspe: " Can I block specific YouTube videos from my kid&apos;s access?",

        KnowMoreAboutDi: "Get Automatic Alerts for Potential Issues",
        MonitorMultipl: "Monitor Multiple Social Media at Once",
        Noneetocheckyo: "No need to check your kids' social accounts anymore; using FamiSafe to monitor 30+ social platforms all at once. (Social Apps Detection on children's iOS devices is temporarily unsupported.)",
        Easytepstoconnec: "Easy steps to connect kid's social accounts.",
        SupportYouTubeConte: "Support YouTube Content Detection on iOS",
        SupporthatsAppMes: "Support WhatsApp, Messenger, Messenger Lite, YouTube, Instagram, Facebook, SMS, Twitter, or Kik Monitoring on Android.",

        MonitorMultiple: "Customize the Suspicious Words",
        Noneedtocheckyo: " Teens' popular slang is evolving. Better keep up with their pace by managing suspicious word settings.",
        Easystepstoconne: "Choose the category of the suspicious word you are concern about monitoring. ",
        SupportWhatsAppMes: "Add suspicious words to our keyword base to better protect our kids",
        SupportWhatsA: "Enable/disable monitoring on different categories of suspicious words easily.",

        AIassistedInapp: "AI-assisted Inappropriate Content Monitor",
        FamiSaferffhas65upg: "FamiSafe has upgraded the content monitoring system to AI-assisted. With access to AIGC, the explicit words have been expanded and optimized.",
        Receivealer87tswhe: "Receive alerts when your kids encounter any cyber-violence, explicit, drug-related content, etc.",
        Detectinappropriateco: "Detect inappropriate content more comprehensively and accurately.",
        Stayv45igilantinyo: "Stay vigilant in your child’s digital world to keep them safe.",

        YouTubeC23ontr: "YouTube Control & Detect",
        Freeyou6yrself: "Free yourself from the trouble of checking your kid's YouTube browser history constantly. Get alerts on things that you are concerned about.",
        Categorizethepot: "Categorize the potential issues of a YouTube video.",
        Listp09u9otent34ialiss: "List potential issues found on your kid's YouTube watch list.",
        BlockouTu7657bevideoo: " Block YouTube video or channel from kid's access.",

        EasytoSta: "Easy to Start with 3 Simple Steps",
        steps: [
            {
                id: 1,
                title: "Register",
                description:
                    "Register a FamiSafe account on the website or app from Google Play and App Store.",
                icon: "register",
            },
            {
                id: 2,
                title: "Install",
                description:
                    "Install FamiSafe app both on parent's and kid's devices.",
                icon: "install",
            },
            {
                id: 3,
                title: "Connect",
                description:
                    "Connect and manage all devices from FamiSafe dashboard app or web portal.",
                icon: "connect",
            },
        ],
        posts: [
            {
                image: "https://famisafe.wondershare.com/images/feature/2021/detect-text/spyic-monitor.png",
                title: "How can I monitor my child's text message.",
                description:
                    "For every parent wondering how can i monitor my child's text messages, the above-mentioned tools are the perfect solution for you to ensure your kid's safety",
            },
            {
                image: "https://famisafe.wondershare.com/images/feature/2021/detect-text/how-to-monitor-text-messages-on-android-1.jpg",
                title: "How to control text message on Andriod ?",
                description:
                    "Keep kids safe from online dangers by text message monitoring apps for Android. Parents can monitor text messages on Android in a safe and reliable manner.",
            },
            {
                image: "https://famisafe.wondershare.com/images/feature/2021/detect-text/best-texting-app-for-kids-2.jpg",
                title: "Parental Guide on safe text Apps for kkind's",
                description:
                    "Are you worried about kids chatting with strangers? Check out these top safe texting apps for kids that will keep them safe and give them the freedom to communicate.",
            },
        ],
        faqams: [
            {
                question: "1. How to monitor online activity on kids' smartphones?",
                answer:
                    "Open your Google play store and search the FamiSafe parental control app, you will get it. Install it on all devices you want to monitor ( you will be able to monitor five devices in one purse).Open a membership account with the app.Connect all devices to parents' devices and start monitoring. After the successful setup, you will be able to check kids' activity reports, restrict your kids' access to inappropriate websites and apps, lock games and other apps during breaks and study time.",
            },
            {
                question: "2. What are the symptoms of cell phone addiction?",
                answer:
                    "Here are some signs that may lead you to think that your kid is addicted to the cell phone. 1) Your kid is angry most of the time 2) Facing depression 3) Looks tensed 4) The kid is mostly irritated and snaps over small things 5) Looks or behaves restless 6) Sleepness is another symptom you must not ignore 7) If your kid is unable to stop using his phone even during important events, eg., a funeral, etc. 8) Sudden lack of communication and aloofness 9) Neglecting dinner time with family or daily chores 10) Sleeping at odd hours.",
            },
            {
                question:
                    "3. What are the most popular apps among kids?",
                answer:
                    "The most popular iPhone and Android phone apps for kids are : 1) YouTube 2) Instagram 3) WhatsApp 4) Spin Safe Browser 5) Snapchat 6) Facebook 7) Android Messages (text) 8) YouTube Kids 9) Chrome 10) Netflix 11) Facebook Messenger.",
            },
            {
                question:
                    "4. How many hours should kids spend on the phone a day?",
                answer:
                    "Every child is different. Even experts could not provide a definite answer about how much time the kids should spend on digital devices. We recommend that 1-2 hours on school days is a reasonable amount. While on weekends or holidays, perhaps 3-4 hours is a reasonable amount. Most important of all, parents should set the kids up for a healthy relationship with technology.",
            },
        ],

        /// web filter 
        KeepKidsSearchSafe: "Keep Kids Search Safe",
        Createasafeandage: "Create a safe and age-appropriate online environment for children by blocking inappropriate websites. View kids' browsing history and check private or incognito internet history remotely.",
        KnowYouorries: "Know Your Worries When Kids Browsing Online",
        Ismysonsearching: "Is my son searching for guns or other weapons on Google?",
        WhatcanIdtostp: "What can I do to stop my kids from accessing pornography online?",
        Isthereawaytoblock: "Is there a way to block age-inappropriate results from my kid's search?",

        GuideKidstoGoo: "Guide Kids to Good Online Content",
        KeepSearchSafe: "Keep Search Safe With Website Filter",
        Filternappropriate: "Filter inappropriate websites to create a safe online environment for our kids.",
        Filterwebsitesby: "Filter websites by categories to avoid any exceptions.",
        Poweredby0inbuilt: "Powered by 10+ inbuilt website categories that cover adult, drug, violence, and more.",
        EnableSafeSearchto: "Enable Safe Search to block search result that contains explicit information.",

        SafeguardKid: "Safeguard Kid's Online Exploration",
        Setahealthyspacema: "Set a healthy space manually to protect your kids while they explore online.",
        Feelfreetoadda: "Feel free to add any websites to be blocked or allowed on kid's devices.",
        Changethewebfilter: "Change the web filter setting remotely without getting your kid's phone.",
        UseSafearchtoen: "Use Safe Search to ensure only censored results show up on Android devices.",
        ForiOSdevicestheaf: "For iOS devices, the Safe Search feature would automatically enable Google & Bing's Safe Search option.",

        KnowWhatidsBrows: "Know What Kids Are Browsing Online",
        Learnwhatkidsarese: "Learn what kids are searching or visiting online, even under incognito mode.",
        Checkbrowserhistory: "Check browser history, even under private/incognito mode.",
        Storeupto3monthsof: "Store up to 3 months of browser history for parent's review.",
        Findoutwhichwordte: "Find out which word/term is searched under Safe Search.",
        postsa: [
            {
                image: "https://famisafe.wondershare.com/images/feature/2021/search-safe/network-monitor-app.png",
                title: "Best 10 Network Monitoring Apps for Android.",
                description:
                    "Do you want to get your move your WhatsApp Account to your new phone? Here's how to do it.",
            },
            {
                image: "https://famisafe.wondershare.com/images/feature/2021/search-safe/unblock-blocked-websites-online-1.jpg",
                title: "5 Best Website Blocker Softwares for Web Protection",
                description:
                    "Are you looking for the best website blocker software to protect your kids from online dangers? These five web blocker apps will help you.",
            },
            {
                image: "https://famisafe.wondershare.com/images/feature/2021/search-safe/android-network-monitoring-apps-0.png",
                title: "How to Unblock Blocked Websites on Android or iOS Devices?",
                description:
                    "Is there any possibility to unblock websites online? How does it work? Parents will get effective guidance about how kids bypass restricted websites.",
            },
        ],
        faqavs: [
            {
                question: "How do I block websites on Android?",
                answer:
                    "To block a website on Android using FamiSafe: 1. Create a FamiSafe account. 2. nstall FamiSafe app on parent’s and kid’s phones. 3. Tap Website Filter and choose dangerous website categories. 4. Tap Exceptions and add an unwanted website. 5. Tap Save to add the website to the Blocked list.",
            },
            {
                question: "How do I view browsing history on Chrome?",
                answer:
                    "To view the browsing history in Google Chrome using FamiSafe: 1. Create a FamiSafe account. 2. Install FamiSafe app on parent’s and kid’s Android devices. 3. Click Browser History and View kid’s Chrome browsing history.",
            },
            {
                question:
                    "How do I block websites from my child's iPhone?",
                answer:
                    "Parents can block websites on iPhone using FamiSafe by following these steps: 1.Create a FamiSafe account. 2.Install FamiSafe app on parent’s and kid’s devices. 3. Click Website Filter and block risky website categories. 4. Click Exceptions and add any link you want to block on Safari. 5. Tap Save to block websites.",
            },
            {
                question:
                    "How do I block pornhub websites?",
                answer:
                    "To block inappropriate websites using FamiSafe: 1. Create a FamiSafe account.2 .Install FamiSafe app on parent's and kid's devices. 3. Tap Website Filer and block porn website categories.",
            },

            {
                question:
                    "What websites should parents block?",
                answer:
                    "1. Explicit websites like Pornhub.com, 8Tube.xxx 2.Dating websites like com, Bongacams.com 3. Poker and casino websites like ag, FreeSpin.com",
            },
        ],
        LatestPost: "Latest Post",

        ///Locaton-Tracking
        LocationTracking: "Location Tracking",
        Trackkidsinrealt: "Track kids in real-time and review their location history. Receive instant alerts when kids enter or leave the Geofences.",
        RestEasywithReal: "Rest Easy with Real-time Location Tracker for Kids",

        ViewKidsRealT: "View Kids' Real-Time Location",
        Trackthecurrentloc: "Track the current location of your kids. Save you from wondering, Where are my kids?  all the time.",
        Graspyourkidsrealti: "Grasp your kids' real-time location at any time.",
        Checkifyourkidsar: "Check if your kids are in school or at home as they should.",
        Involveintimewhe: "Involve in time when kids go to strange or dangerous places.",

        CheckLocatio: " Check Location History",
        Viewlocationhist: "View location history timeline to know kids' past routines. Never yell at your kids: Where have you been? again.",
        Viewyourkids: "View your kids' recent activity area.",
        Knowkids: "Know kids' whereabouts anytime.",
        Learnabout: "Learn about the places your kids go to frequently.",

        SetSafeGeofen: "Set Safe Geofences",
        CreateGeofenceslik: "Create Geofences like school or home around specific locations. Get notified when kids break planned routines.",
        Setthescopeo: "Set the scope of kids' activities.",
        Setupgeofen: "Set up a geofence and set the time range.",
        Receiveanalertwh: "Receive an alert when the kids leave the set place.",

        MoreTipsforLoca: "More Tips for Location Tracking",
        BestFamilyLocat: " Best Location Sharing Apps for Your Loved-ones.",
        HowtoTracka: "Free Online Tools to Track a Phone Number Location",
        FreeAppstoT: "10 Free Apps to Track a Cell Phone Location for Free.",
        HowtoCheckImPhone: "How to Check iPhone Location History Easily?",
        HowtoTrackYourki: "How to Track Your kid's iPhone Quickly?",
        HowtoTrackaPhone: "How to Track a Phone Using IMEI for Free?",

        faqsSscreenviwer: [
            {
                question: "1. How to monitor online activity on kids' smartphones?",
                answer:
                    "Open your Google play store and search the FamiSafe parental control app, you will get it. Install it on all devices you want to monitor ( you will be able to monitor five devices in one purse).Open a membership account with the app. Connect all devices to parents' devices and start monitoring. After the successful setup, you will be able to check kids' activity reports, restrict your kids' access to inappropriate websites and apps, lock games and other apps during breaks and study time.",

            },
            {
                question: "2. What are the symptoms of cell phone addiction?",
                answer:
                    "Here are some signs that may lead you to think that your kid is addicted to the cell phone. 1) Your kid is angry most of the time 2) Facing depression 3) Looks tensed 4) The kid is mostly irritated and snaps over small things 5) Looks or behaves restless 6) Sleepness is another symptom you must not ignore 7) If your kid is unable to stop using his phone even during important events, eg., a funeral, etc. 8) Sudden lack of communication and aloofness 9) Neglecting dinner time with family or daily chores 10) Sleeping at odd hours.",
            },
            {
                question: "3. What are the most popular apps among kids?",
                answer:
                    "The most popular iPhone and Android phone apps for kids are : 1) YouTube 2) Instagram 3) WhatsApp 4) Spin Safe Browser 5) Snapchat 6) Facebook 7) Android Messages (text) 8) YouTube Kids 9) Chrome 10) Netflix 11) Facebook Messenger.",
            },
            {
                question: "4. How many hours should kids spend on the phone a day?",
                answer:
                    "Every child is different. Even experts could not provide a definite answer about how much time the kids should spend on digital devices. We recommend that 1-2 hours on school days is a reasonable amount. While on weekends or holidays, perhaps 3-4 hours is a reasonable amount. Most important of all, parents should set the kids up for a healthy relationship with technology.",
            },
        ],

        /// Driving-history-report

        EncourageGoodD: "Encourage Good Driving Habits",
        Receivedetaileddrivi: "Receive detailed driving history reports about teens every trip. Get to know driving details like top speed, average speed, total driving distance, and more. Help teens form a good driving habits by reviewing their weekly driving reports.",
        DoYouHaveAny: "Do You Have Any of the Below Concerns?",
        Mysonjustothi: "My son just got his learner's permit. How can I check how he drives?",
        CanIcheckifmydaugh: "Can I check if my daughter had over sped last night when she was with her friends?",
        Isthereawaytoge: "Is there a way to get a summary of how my son drives?",

        HowFamiSafeHelpsYo: "How FamiSafe Helps Your Teens Become A Good Driver?",
        EscortTeenEachDrive: "Escort Teen's Each Drive",
        Even43ify: "Even if you are not sitting next to your teens while she/he head out and explore the new world of driving, you can still protect each drive.",
        Enabledrivesafetyto: "Enable drive safety to record driving details.",
        Setuphighspeedt21: "Set up high speed to get over-speed data.",
        Trackdrivingroutine: "Track driving routine.",

        EncourageGoodDriv: "Encourage Good Driving Habits",
        Agooddrivinghabit: "A good driving habit is essential to keep kids safe while driving. Review how teens drive and help them improve.",
        Getadrivinghist: "Get a driving history report for each trip.",
        Highlightdangerousdri: "Highlight dangerous driving behaviour like overspeeding and hard breaks.",
        Checkdrivingdetailsli: "Check driving details like average speed and more.",

        GetBetterWithEachDrive: "Get Better With Each Drive",
        Reviewweeklyrsummary5t: "Review weekly summary to figure out which part of your teen's driving requires further improvement.",
        Viewrsummaryofth: "View summary of the past week.",
        Comparethesummaryof: "Compare the summary of the current week with the previous.",
        Cantracebacktowee: "Can trace back to weekly summaries of three weeks ago.",
        postqs: [
            {
                image: "https://famisafe.wondershare.com/images/feature/2021/driving-report/driving-safety-fact-1.jpg",
                title: "How can I monitor my child's text message.",
                description:
                    "For every parent wondering how can i monitor my child's text messages, the above-mentioned tools are the perfect solution for you to ensure your kid's safety",
            },
            {
                image: "https://famisafe.wondershare.com/images/feature/2021/driving-report/share-google-map-location-3.png",
                title: "How to control text message on Andriod ?",
                description:
                    "Keep kids safe from online dangers by text message monitoring apps for Android. Parents can monitor text messages on Android in a safe and reliable manner.",
            },
            {
                image: "https://famisafe.wondershare.com/images/feature/2021/driving-report/share-location-android-to-iphone-2.png",
                title: "Parental Guide on safe text Apps for kkind's",
                description:
                    "Are you worried about kids chatting with strangers? Check out these top safe texting apps for kids that will keep them safe and give them the freedom to communicate.",
            },
        ],
        faqam5s: [
            {
                question: "1. How to monitor online activity on kids' smartphones?",
                answer:
                    "Open your Google play store and search the FamiSafe parental control app, you will get it. Install it on all devices you want to monitor ( you will be able to monitor five devices in one purse). Open a membership account with the app. Connect all devices to parents' devices and start monitoring. After the successful setup, you will be able to check kids' activity reports, restrict your kids' access to inappropriate websites and apps, lock games and other apps during breaks and study time.",
            },
            {
                question: "2. What are the symptoms of cell phone addiction?",
                answer:
                    "Here are some signs that may lead you to think that your kid is addicted to the cell phone. 1) Your kid is angry most of the time 2) Facing depression 3) Looks tensed 4) The kid is mostly irritated and snaps over small things 5) Looks or behaves restless 6) Sleepness is another symptom you must not ignore 7) If your kid is unable to stop using his phone even during important events, eg., a funeral, etc. 8) Sudden lack of communication and aloofness 9) Neglecting dinner time with family or daily chores 10) Sleeping at odd hours.",
            },
            {
                question:
                    "3. What are the most popular apps among kids?",
                answer:
                    "The most popular iPhone and Android phone apps for kids are : 1) YouTube 2) Instagram 3) WhatsApp 4) Spin Safe Browser 5) Snapchat 6) Facebook 7) Android Messages (text) 8) YouTube Kids 9) Chrome 10) Netflix 11) Facebook Messenger.",
            },
            {
                question:
                    " 4. How many hours should kids spend on the phone a day?",
                answer:
                    "Every child is different. Even experts could not provide a definite answer about how much time the kids should spend on digital devices. We recommend that 1-2 hours on school days is a reasonable amount. While on weekends or holidays, perhaps 3-4 hours is a reasonable amount. Most important of all, parents should set the kids up for a healthy relationship with technology.",
            },
        ],

        // sos alart 
        SOSlert: "SOS Alert",
        EmergencyhelpSOSa: "Emergency help & SOS alert at the touch of a button! With S.O.S. Alert, you can stay connected and informed about your child's safety. Receive real-time alerts on your phone and access their location history to keep a watchful eye on their whereabouts at all times.",

        ProtectourChild: "Protect Your Child - SOS Alert Feature Keeps Them Safe At Your Fingertips",
        ForChildrenSendns: "For Children: Send Instant SOS & Emergency Alert",
        Evenifyourphoneisons: "Even if your phone is on silent mode, your child can still send you a SOS message from their devices during a crisis.",
        ClicktheSOSbuttontos: "Click the SOS button to send the emergency alert within 5 seconds.",
        Cancelthe: "Cancel the SOS message within 5 seconds as well.",
        Addwidgetsoph: "Add widgets on the phone screen to instantly send emergency alarms.",

        FParents: "For Parents: Receive Immediate SOS Alert",
        Allowingyoutoknowth: "Allowing you to know the specific location of your children anytime and anywhere, providing timely assistance, and not missing any emergencies.",
        ReceiveemergencySO: "Receive emergency SOS sent by children, as well as obtain their real-time location.",
        YoucanbtaithSOsig: " You can obtain the SOS signal and your child's real-time location whether the FamiSafe app is open or closed. You can also check the SOS location information in the location history.",
        Topreventmisuseo: " To prevent misuse of the SOS function by children, you can also choose to open or close this feature on your end.",

        AvoidSituations: "Avoid Potentially Dangerous Situations",
        FamiSafeAlert: "FamiSafe-SOS Alert prevents danger through a panic button, ensures the personal safety of children, and strengthens the parent-child relationship.",
        Preventdange: "Prevent dangerous situations (such as kidnapping or being followed) through instant alerts.",
        Improveparentchi: " Improve parent-child bond by enabling parents to show more care and attention, making children feel loved and cared for.",
        Boosttrustbe: "Boost trust between parents and children, encouraging open communication about problems and difficulties.",

        HowtoUseSOSAle: "How to Use SOS Alert Feature?",
        StepInstaFamiSafe: "Step 1: Install FamiSafe",
        DownloaamiSa: "Download FamiSafe App from Google Play Store or App Store onthe parent's phone.",
        StepeaAccount: "Step 2: Register an Account",
        RegisterWonders: "Register a Wondershare ID for FamiSafe or log in with an Apple,Google, and Facebook ID.",
        Step3ConnectKi: "Step 3: Connect Kid's Device",
        Useyourkidphon: "Use your kid's phone to scan the QR code on FamiSafe in parent'sphone to install Fammy, and the pairing will complete automatically",

        MoreTipsaboutParentah: "More Tips about Parental Control and Children's Growth",
        TopGameSitesNotBloc: " Parents Can't-Miss, Reducing Kids' Screen Time Now!",
        ypasGoogleFamilyLin: "Quick and Easy Ways to Bypass Google Family Link Block",
        EasyStepstInstalland: "Easy Steps to Install and Use YouTube Kids on Amazon Fire",
        OmegleforKidsIsOmegle: "Omegle for Kids: Is Omegle Safe?",
        FamilyLinkNotWorki: "Family Link Not Working: Quick & Proven Fix SolutionsShould kids have cell phones for emergency?",


        faqam3fs: [
            {
                question: "Should kids have cell phones for emergency?",
                answer:
                    "In today's world, providing your child with a way to stay in touch with an emergency contact is not just a convenience, but a necessity. Whether it's a mobile phone or a GPS smartwatch, these gadgets serve as a lifeline between parents and their children.",
            },
            {
                question: "How to enable SOS Alert feature on children’s device?",
                answer:
                    "From the Dashboard and Featuressections, children have access to the SOS Alert feature. Upon clicking the SOS button on the child's device, they will be directed to the SOS sending page, which includes a 5-second cooldown period. Within this timeframe, children can choose to either cancel the signal by clicking the Cancel Signal button or allow the message to be sent successfully after 5 seconds if cancellation is not initiated.",
            },
            {
                question:
                    "How to receive SOS alert on parent’s end?",
                answer:
                    "Parents can receive a push notification or a pop-up message when an SOS is triggered. By clicking on View Details they will be redirected to the Live Location or Location History page where they can access specific location information.",
            },
            {
                question:
                    " Can parent disable SOS Alert feature on their device?",
                answer:
                    "Yes, parents can control the “Enable Panic Button” of the SOS function (which is enabled by default, and when turned off, the SOS button will not appear on the child's end).",
            },
        ],

        // LocationSharing
        KnowMorAboutDis: "Location Sharing",
        Leavedigitalparen: "Learn how to share location with family and friends.",
        articles: [
            {
                title: "Snapchat Location Tracker: How to Track and Protect Kid's Location",
                desc:
                    "Explore how the Snapchat location tracker works, its privacy risks, and why FamiSafe is a safer choice for families to share locations securely.",
                img: "https://famisafe.wondershare.com/images/article/2025/03/how-to-share-location-on-android-1.jpg",
            },
            {
                title: "How to Track Instagram Account Location [4 Ways]",
                desc:
                    "Learn 4 safe ways to track an Instagram account location using public tags, free tools, and parental apps like FamiSafe.",
                img: "https://famisafe.wondershare.com/images/article/2025/03/family-location-sharing-1.jpg",
            },
            {
                title: "Top 7 Instagram Location Tracker Apps in 2025",
                desc:
                    "Looking for the best Instagram location tracker? Discover 7 top tools including free options and live tracking features.",
                img: "https://famisafe.wondershare.com/images/article/2025/02/geonection-1.jpg",
            },
        ],
        categories: [
            "Location Tracker",
            "Mobile Tracker",
            "Location Sharing",
            "Family Tracker",
            "Teen Driving",
        ],
        articless: [
            {
                title:
                    "Snapchat Location Tracker: How to Track and Protect Kid's Location",
                desc:
                    "Explore how the Snapchat location tracker works, its privacy risks, and why FamiSafe is a safer choice for families to share locations securely.",
                author: "Thomas Jones",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "How to Track an iPhone Online For Free By Number 2025",
                desc:
                    "How to track an iPhone by number with the iPhone locator to keep your kids safe from online dangers? Check the answer from the full guide!",
                author: "Thomas Jones",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "How to Find My Phone for Free",
                desc:
                    "This article covers 5 easy methods to avail of the find my phone free service. Learn how to use built-in tools, online trackers, and apps to locate your device quickly and securely.",
                author: "Marina Lehmann",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "The Best iPhone 17 Tracking App for Parents",
                desc:
                    "Get to know about the real-time location of your kids with this iPhone tracking app for parents. We list a quick and smart way to keep children safe.",
                author: "Thomas Jones",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "10 Best Location Tracking Apps for Android and iPhone",
                desc:
                    "Maintain the security of your family and friends with the best tracking app for Android and iPhone. Keep in touch and feel reassured about their locations at all times.",
                author: "Thomas Jones|",
                date: "2025-09-02 20:10:50",
            },
            {
                title: "10 Best Phone Apps to Track Location for Free [2025]",
                desc:
                    "How to track a cell phone location for free? Here are 10 mobile trackers to help you track a cell phone for free in Android or iPhone devices.",
                author: "Thomas Jones|",
                date: "2025-09-02 19:56:44",
            },
        ],
        Postedby: "Posted by",
        Prev: "Prev",
        Next: "Next",

        // Family Tracker
        FamilyTracker: "Family Tracker",
        Whatsthebes: "\"What's the best family locating app? Learn it here with FamiSafe!",
        AllFamilyTracker: "All Family Tracker",
        articlDSes: [
            {
                title: "10 Best Location Tracking Apps for Android and iPhone",
                desc:
                    "Explore how the Snapchat location tracker works, its privacy risks, and why FamiSafe is a safer choice for families to share locations securely.",
                img: "https://famisafe.wondershare.com/images/article/2025/03/geofencing-apps-1.jpg",
            },
            {
                title: "Glympse App Review Is It the Best Location Tracker?",
                desc:
                    "Learn 4 safe ways to track an Instagram account location using public tags, free tools, and parental apps like FamiSafe.",
                img: "https://famisafe.wondershare.com/images/article/2025/02/glympse-app-review-1.jpg",
            },
            {
                title: "Effective Ways to Locate Lost iPad with andriod and iphnoe",
                desc:
                    "Looking for the best Instagram location tracker? Discover 7 top tools including free options and live tracking features.",
                img: "https://famisafe.wondershare.com/images/article/2019/11/seffective-ways-to-locate-lost-ipad-1.jpg",
            },
        ],
        categories: [
            "Location Tracker",
            "Mobile Tracker",
            "Location Sharing",
            "Family Tracker",
            "Teen Driving",
        ],
        articleSSss: [
            {
                title:
                    "10 Best Geofencing Apps for iPhone & Android 2025",
                desc:
                    "Explore the best geofencing apps for iPhone & Android in 2025. Compare free & paid options to monitor kids and employees and automate zones with real-time alerts.",
                author: "Thomas Jones",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "Glympse Review: Is It the Best Location Tracker?",
                desc:
                    "What does the Glympse location-tracking app have to offer? Get the answer through this article, which presents the Glympse app review and its perfect alternative.",
                author: "Moly Swift",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "Top 10 Car Trackers You Need To Know",
                desc:
                    "This article will show you the top 10 car GPS trackers that you need to know about. With these car GPS trackers, you can know where are your kids if they are new drivers.",
                author: "Thomas Jones",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "Top 10 Tracking Devices & Apps for Kids",
                desc:
                    "We have picked up the top 10 best tracking devices and apps that you can use to track your children and keep them away from danger",
                author: "Thomas Jones",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "Top 10 Child Tracking Devices For Parents",
                desc:
                    "Whether your kids are out for a play or in school, parents are always worried about them. Read below to know ten tracking devices for children.",
                author: "Thomas Jones|",
                date: "2025-09-02 20:10:50",
            },
            {
                title: "T-Mobile Family Locator",
                desc:
                    "The t Mobile family locator is the ideal application for parents wishing to keep track of the location of your kids.",
                author: "Thomas Jones|",
                date: "2025-09-02 19:56:44",
            },
        ],

        /// Mobile Tracker
        MobileTracker: "Mobile Tracker",
        Readourblogsabo: "Read our blogs about mobile tracker and cell phone tracking. We review the best mobile tracker apps and also make guides about how to use the tracker apps.",
        AllMobileTracker: "All Mobile Tracker",
        articlDdSes: [
            {
                title: "Snapchat Location Tracker: How to Track and Protect Kid's Location",
                desc:
                    "Explore how the Snapchat location tracker works, its privacy risks, and why FamiSafe is a safer choice for families to share locations securely.",
                img: "https://famisafe.wondershare.com/images/article-trans-image/2035/snapchat-location-tracker-1.jpg",
            },
            {
                title: "How to Track Instagram Account Location [4 Ways]",
                desc:
                    "Learn 4 safe ways to track an Instagram account location using public tags, free tools, and parental apps like FamiSafe. Ideal for parents and cautious",
                img: "https://famisafe.wondershare.com/images/article/2025/05/track-instagram-location-banner.jpg",
            },
            {
                title: "Top 7 Instagram Location Tracker Apps in 2025",
                desc:
                    "Looking for the best Instagram location tracker? Discover 7 top tools to monitor Instagram accounts, including free options and live tracking features",
                img: "https://famisafe.wondershare.com/images/article/2025/05/instagram-location-tracker.jpg",
            },
        ],
        categories: [
            "Location Tracker",
            "Mobile Tracker",
            "Location Sharing",
            "Family Tracker",
            "Teen Driving",
        ],
        articleSdSss: [
            {
                title:
                    "Snapchat Location Tracker: How to Track and Protect Kid's Location",
                desc:
                    "Explore how the Snapchat location tracker works, its privacy risks, and why FamiSafe is a safer choice for families to share locations securely.",
                author: "Thomas Jones",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "How to Track an iPhone Online For Free By Number 2025",
                desc:
                    "How to track an iPhone by number with the iPhone locator to keep your kids safe from online dangers? Check the answer from the full guide!",
                author: "Thomas Jones",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "How to Find My Phone for Free",
                desc:
                    "This article covers 5 easy methods to avail of the find my phone free service. Learn how to use built-in tools, online trackers, and apps to locate your device quickly and securely.",
                author: "Marina Lehmann",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "The Best iPhone 17 Tracking App for Parents",
                desc:
                    "Get to know about the real-time location of your kids with this iPhone tracking app for parents. We list a quick and smart way to track kids remotely.",
                author: "Thomas Jones",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "10 Best Location Tracking Apps for Android and iPhone",
                desc:
                    "Maintain the security of your family and friends with the best tracking app for Android and iPhone. Keep in touch and feel reassured about their locations at all times.",
                author: "Thomas Jones|",
                date: "2025-09-02 20:10:50",
            },
        ],
        /// Screen-Time-Control
        ScreenTimeControl: "Screen Time Control",
        Limitscreentimea: "Limit screen time and app usage on your iPhone and Android.",
        AllScreenTimeControl: "All Screen Time Control",
        articlxdSes: [
            {
                title: "How to Limit Xbox Time on a Child's Device? | Details Covered!",
                desc:
                    "Read this guide to manage and limit Xbox time and monitor your kids' gaming habits. In addition, discover an alternative app for detailed monitoring.",
                img: "https://famisafe.wondershare.com/images/article/2025/01/limit-xbox-time-1.jpg",
            },
            {
                title: "Average Screen Time for Teenagers & 7 Tips for Parents",
                desc:
                    "Are you concerned about the average screen time for teenagers as a parent? Read this article to learn about the best 7 tips you can utilize to reduce it.",
                img: "https://famisafe.wondershare.com/images/article/2025/01/average-screen-time-for-teenagers-1.jpg",
            },
            {
                title: "TikTok Monitoring for Brands and Parents: 5 Best Tools & Strategies",
                desc:
                    "Learn the importance of TikTok monitoring and explore 5 tools to track the brand's performance. Explore how businesses can manage their presence",
                img: "https://famisafe.wondershare.com/images/article/2025/01/tiktok-monitoring-1.jpg",
            },
        ],
        articlebdSss: [
            {
                title:
                    "How to Limit Xbox Time on a Child's Device? | Details Covered!",
                desc:
                    "Read this guide to manage and limit Xbox time and monitor your kids' gaming habits. In addition, discover an alternative app for detailed monitoring.",
                author: "Moly Swift",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "Average Screen Time for Teenagers & 7 Tips for Parents",
                desc:
                    "Are you concerned about the average screen time for teenagers as a parent? Read this article to learn about the best 7 tips you can utilize to reduce it.",
                author: "Thomas Jones",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "Explore the Most Advanced and Efficient Screen Time App for PC",
                desc:
                    "Learning how to limit children's screen time with the best and most versatile screen time limiter for PC. Read this guide and find a reliable way.",
                author: "Ankhi Bhattacharya",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "How to Set Up Android Screen Time Limit? [2024]",
                desc:
                    "Learn the top 5 ways to set up app time limits on Android! Manage screen time effectively with these simple and practical methods to boost your kids productivity.",
                author: "Ankhi Bhattacharya",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "Screen Time Not Working on iPhone/iPad | 12 Solutions",
                desc:
                    "Are you struggling with iPhone Screen Time not working? Discover 12 easy solutions to fix the issue quickly and regain control of your screen time settings!",
                author: "Ankhi Bhattacharya|",
                date: "2025-09-02 20:10:50",
            }, {
                title: "Top 5 Apps to Control Screen Time for iPhone and Android",
                desc:
                    "This article covers the top 5 apps to control screen time on iPhone and Android. Learn how to manage digital habits, protect your well-being, and find balance in the digital age.",
                author: "Moly Swift|",
                date: "2025-09-02 20:10:50",
            },
        ],
        //iOS Parental Control
        iOSParentalControl: "iOS Parental Control",
        BestiOSParental: "45.3% of smart phone user in US choose iOS devices. It is important to learn how to set up parental controls on iPhone, iPad, iPod and other Apple devices.",
        AlliOSParentalControl: "All iOS Parental Control",
        AlliOSntalCorol: [
            {
                title: "20+ Best iOS 26 Wallpapers for Stunning Dynamic Customization",
                desc:
                    "Discover the latest iOS 26 wallpapers — dynamic, AI-powered, and kid-friendly. Learn how FamiSafe helps families manage screens smartly.",
                img: "https://famisafe.wondershare.com/images/article/2025/01/limit-xbox-time-1.jpg",
            },
            {
                title: "How to Turn On/Off Safe Search on iPhone – Complete Guide",
                desc:
                    "Learn how to disable or enable Safe Search on iPhone in minutes. Follow step-by-step guides and see how tools can keep your browsing safe and",
                img: "https://famisafe.wondershare.com/images/article/2025/01/average-screen-time-for-teenagers-1.jpg",
            },
            {
                title: "Best iPhone for Kids: Guide to Safety, Setup, and Parental Tools",
                desc:
                    "Discover the best iPhone for kids in 2025 with safety, durability, and affordability. Learn age-based recommendations and compare models today.",
                img: "https://famisafe.wondershare.com/images/article/2025/01/tiktok-monitoring-1.jpg",
            },
        ],
        AlliOSPareontrol: [
            {
                title:
                    "20+ Best iOS 26 Wallpapers for Stunning Dynamic Customization",
                desc:
                    "Discover the latest iOS 26 wallpapers — dynamic, AI-powered, and kid-friendly. Learn how FamiSafe helps families manage screens smartly.",
                author: "Moly Swift",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "Best iPhone for Kids: Guide to Safety, Setup, and Parental Tools",
                desc:
                    "Discover the best iPhone for kids in 2025 with safety, durability, and affordability. Learn age-based recommendations and compare models today.",
                author: "Thomas Jones",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "How to Set Up Parental Controls on Your iPhone X/8/7/6",
                desc:
                    "Here's a guide about how to set restrictions (parental controls) on iPhone X/8/7/6 to block apps, adult content and porn websites.",
                author: "Thomas Jones",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "How to Set up Parental Control on Safari?",
                desc:
                    "Learn the top 5 ways to set up app time limits on Android! Manage screen time effectively with these simple and practical methods to boost your kids productivity.",
                author: "Thomas Jones",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "Screen Time Not Working on iPhone/iPad | 12 Solutions",
                desc:
                    "Are you suspicious about your child's online activities? Do you want to know how to put restrictions on iPhone and screentime safari? Then, read this detailed guide to learn about reliable and effective safari parental controls on iPhone, iPad, and Mac.",
                author: "Thomas Jones",
                date: "2025-09-02 20:10:50",
            },
            {
                title: "Safari Parental Controls: What Is & Best Setting Ways",
                desc:
                    "Discover how to use Safari parental controls on iPhone, iPad, and Mac. Protect your kid’s browsing by blocking unsafe websites to ensure a safer online space.",
                author: "Thomas Jones",
                date: "2025-09-02 20:10:50",
            },

            {
                title: "How to Turn On/Off Safe Search on iPhone – Complete Guide",
                desc:
                    "Learn how to disable or enable Safe Search on iPhone in minutes. Follow step-by-step guides and see how tools can keep your browsing safe and flexible.",
                author: "Thomas Jones",
                date: "2025-09-02 20:10:50",
            },
        ],
        // Android Parental Control
        AndroidParentalControl: "Android Parental Control",
        Inthistopicyouwi: "In this topic, you will learn about how to set up parental controls on all Android Phones and Tablets.",
        AllAnroidaretalControl: "All Android Parental Control",
        AndriodiOSntalCorol: [
            {
                title: "How to Block Unknown Numbers on Android Easily in 2025",
                desc:
                    "If you're tired of receiving unknown calls, learn how to block private numbers on your Android device. This article offers 3 methods, along with number",
                img: "https://famisafe.wondershare.com/images/article-trans-image/2143/how-to-block-private-numbers-on-android-1.jpg",
            },
            {
                title: "Xiaomi Parental Control: A Parent's Guide",
                desc:
                    "Discover how Xiaomi parental control works and why many parents are switching to FamiSafe to monitor their kids' phone activities more reliably and",
                img: "https://famisafe.wondershare.com/images/article-trans-image/99/xiaomi-parental-control-1.jpg",
            },
            {
                title: "How to Cancel Amazon FreeTime Unlimited Subscription",
                desc:
                    "Amazon FreeTime is a low-cost subscription for a world of kid-friendly content. However, you’re not stuck with it for life; it’s easy to cancel. Here's a post on how to cancel Amazon FreeTime.",
                img: "https://famisafe.wondershare.com/images/article/2020/12/how-to-cancel-amazon-freetime-1.jpg",
            },
        ],
        AndriodiOSPareontrol: [
            {
                title:
                    "The Best Family Games You Can't-Miss 2025",
                desc:
                    "The best family games to share the quality time with kids and find famisafe helpful to fix the screen time by locking the unwanted programs.",
                author: "Moly Swift",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "How to Block Unknown Numbers on Android Easily in 2025",
                desc:
                    "If you're tired of receiving unknown calls, learn how to block private numbers on your Android device. This article offers 3 methods, along with number blocking apps.",
                author: "Ankhi Bhattacharya",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "Xiaomi Parental Control: A Parent's Guide",
                desc:
                    "Discover how Xiaomi parental control works and why many parents are switching to FamiSafe to monitor their kids' phone activities more reliably and efficiently.",
                author: "Thomas Jones",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "Full Guide on Setting up Parental Controls on Android Devices",
                desc:
                    "Parental controls are features on mobile devices, PCs, and video games and software, that allow parents to restrict the access of certain content to their children.",
                author: "Thomas Jones",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "Best Android Remote Control Apps for TV, PC or Smart Devices",
                desc:
                    "Here are some of the best remote control apps you can use to transform your phone into a smart TV remote app on android device.",
                author: "Thomas Jones",
                date: "2025-09-02 20:10:50",
            },

            {
                title: "How to Remote Control Android Phone from PC without Rooting?",
                desc:
                    "Technology have changed and you can now remote control an android from PC without rooting. This article will talk about two ways about how to control mobile from PC remotely without rooting?",
                author: "Thomas Jones",
                date: "2025-09-02 20:10:50",
            },
        ],
        /// Desktop Parental Control
        DesktopParentalControl: "Desktop Parental Control",
        Findoutinthistopial: "Find out in this topic, all the solution to limit the use of your kid's computer, laptop and Mac.",
        AllDetopPaental667Control: "All Desktop Parental Control",
        DesktopParentalCo75: [
            {
                title: "Chromebook vs Laptop for Child, Which Is Better?",
                desc:
                    "Are you confused about whether to buy a Chromebook or a Laptop? Here is a detailed guide on Chromebook vs. Laptop to help you find the best",
                img: "https://famisafe.wondershare.com/images/article/2022/09/chromebook-vs-laptop-1.jpg",
            },
            {
                title: "5 Ways to Open Device Manager on Windows 10",
                desc:
                    "Your Windows PC offers multiple features you may not even know of. Find out how you can use the device manager on Windows 10.",
                img: "https://famisafe.wondershare.com/images/article/2020/09/device-manager-windows-10-1.jpg",
            },
            {
                title: "How to Use Activity Monitor on Your Mac ",
                desc:
                    "The Activity monitor for mac is an incredibly powerful tool to help you clean up your mac and restore it to being as snappy as it once was. In just a",
                img: "https://famisafe.wondershare.com/images/article/2020/09/use-activity-report-on-mac-1.jpg",
            },
        ],
        DesktopParentalCon76: [
            {
                title:
                    "How to Check Screen Time on Laptop?",
                desc:
                    "Check screen time activity on your Laptop without hassle using the tutorial guide provided here in this post.",
                author: "Moly Swift",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "Screen Time for Mac: Everything You Need to Know",
                desc:
                    "Most kids are addicted to their mobile devices, and sometimes, we want to know how much time they spend on it. Using Screen Time can help you ease the process; thus, read-through this blog to learn more about Screen Time for Mac.",
                author: "Ankhi Bhattacharya",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "Mac App Blocker Protects Your Apps",
                desc:
                    "Proving a protection through the Mac app blocker is the easiest way. You just need to create a passcode for your app security.",
                author: "Thomas Jones",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "How to Use the Parental Controls in Windows 10?",
                desc:
                    "Want to know Windows 10 parental controls? Read on and set up parental controls on Windows 10 in this step-by-step tutorial.",
                author: "Thomas Jones",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "How to Set up Chromebook Parental Controls",
                desc:
                    "Do you wish to set up Chromebook parental controls for your kids? Read this informative post and learn how to make the most of parental control Chromebook.",
                author: "Thomas Jones",
                date: "2025-09-02 20:10:50",
            },

            {
                title: "10 Best Computer Monitoring Software for Parents [2025]",
                desc:
                    "Computer monitoring can help parents to regulate their children's online safety and behaviors. Here are the 10 best computer monitoring software for parents.",
                author: "Thomas Jones",
                date: "2025-09-02 20:10:50",
            },
        ],
        //Chromebook Guide
        ChromebookGuide: "Chromebook Guide",
        Hereyouanfin76: "Here you can find a lot of information about Chromebooks, including how to use them better and how to set up parental control with it.",
        AllChromebookGuide: "All Chromebook Guide",
        Chromebo65okGuide: [
            {
                title: "How to Turn off Parental Controls on a Chromebook?",
                desc:
                    "Do you have a kid and you activated parental control on your Chromebook which you want to get rid of? Read this article about how to turn off parental",
                img: "https://famisafe.wondershare.com/images/article/2022/11/turn-off-account-parental-control-1.jpg",
            },
            {
                title: "4 Simple Ways to Download Discord on Chromebook",
                desc:
                    "If you want to know how to carry out a Discord Chromebook download, this article is for you. We will show you 4 easy ways to install Discord on",
                img: "https://famisafe.wondershare.com/images/article/2022/04/download-discord-on-chromebook.png",
            },
            {
                title: "How to Play Friday Night Funkin on Chromebook? [Unblocked]",
                desc:
                    "Is it possible to play hot web game Friday Night Funkin on a Chromebook? The answer is YES! Get 3 ways here while preventing FNF addiction.",
                img: "https://famisafe.wondershare.com/images/article/2021/12/screen-time/unblocked-sites-for-fnf.jpg",
            },
        ],
        Chromebo66okGuide: [
            {
                title:
                    "How to Play Friday Night Funkin on Chromebook? [Unblocked]",
                desc:
                    "Is it possible to play hot web game Friday Night Funkin on a Chromebook? The answer is YES! Get 3 ways here while preventing FNF addiction.",
                author: "Moly Swift",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "Can You Set Screen Time on Google?",
                desc:
                    "Are you worried your child is consuming too much Google screen time? This article teaches you how to set screen time on Chromebook, Google App, and Chrome browser.",
                author: "Moly Swift",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "Top 8 Best Chromebooks for Kids",
                desc:
                    "Do you have any idea about the best Chromebook for kids? If you want to know more about the Chromebooks for kids just step into this article.",
                author: "Moly Swift",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "How to Turn off Parental Controls on a Chromebook?",
                desc:
                    "Do you have a kid and you activated parental control on your Chromebook which you want to get rid of? Read this article about how to turn off parental controls.",
                author: "Moly Swift",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "4 Simple Ways to Download Discord on Chromebook",
                desc:
                    "If you want to know how to carry out a Discord Chromebook download, this article is for you. We will show you 4 easy ways to install Discord on Chromebook.",
                author: "Moly Swift",
                date: "2025-09-02 20:10:50",
            },

            {
                title: "Super Easy: How to Set Up Geforce Now on Chromebook",
                desc:
                    "Did you know you could set up Geforce now on Chrome? I bet you thought you needed a Windows or Mac system to do that, right? Well, you don’t; and this blog will show you how you can set up Geforce Now on Chromebook.",
                author: "Ankhi Bhattacharya",
                date: "2025-09-02 20:10:50",
            },
        ],
        /// Block Apps
        BlockApps: "Block Apps",
        Text8755essageCall: "Text Message, Call, Number and Ad Blocker Apps for Android and iPhone",
        AllBlockpps: "All Block Apps",
        Chromebo55okGuide: [
            {
                title: "8 Website Blocker Apps: Which One Keeps You Focused?",
                desc:
                    "Discover 8 top website blocker apps for focus and safety in 2025. Block distractions and stay productive — try FamiSafe for smarter parental",
                img: "https://famisafe.wondershare.com/images/article-trans-image/2151/website-blocker-app-1.jpg",
            },
            {
                title: "How to Block Twitter/X on Browsers & Mobile Devices",
                desc:
                    "Looking for how to block X or Twitter on mobile devices and browsers with ease? Get to know the simple steps needed to limit distractions or manage",
                img: "https://famisafe.wondershare.com/images/article-trans-image/1193/block-x-1.jpg",
            },
            {
                title: "8 Best Facebook Blockers to Protect Your Kids Online",
                desc:
                    "Discover the best Facebook blocker apps to enhance focus and productivity. Set time schedules with given apps to avoid wasting hours on Facebook",
                img: "https://famisafe.wondershare.com/images/article-trans-image/426/facebook-blocker-01.jpg",
            },
        ],
        Chromebo56okGuide: [
            {
                title:
                    "10 Best Phone Number Blocker Apps",
                desc:
                    "Looking for a powerful phone call blocking app for either you or your child’s phone? Here’s a complete guide with everything you need to know!",
                author: "Thomas Jones",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "8 Website Blocker Apps: Which One Keeps You Focused?",
                desc:
                    "Discover 8 top website blocker apps for focus and safety in 2025. Block distractions and stay productive — try FamiSafe for smarter parental control today.",
                author: "Thomas Jones",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "Top 10 Free Spam Call Blocker Apps for Android 2025",
                desc:
                    "Discover 10 best free call blocker apps for your Android phone to stop spam, robocalls, and unknown numbers. Stay protected with smart call filters.",
                author: "Thomas Jones",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "8 Best iPhone App Blockers for Worried Parents in 2025",
                desc:
                    "Worried about your child's iPhone usage? Our guide reviews the 8 best iPhone app blocker apps for parents. Choose the ideal parental control solution for your family's peace of mind.",
                author: "Thomas Jones",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "How to Block Twitter/X on Browsers & Mobile Devices",
                desc:
                    "Looking for how to block X or Twitter on mobile devices and browsers with ease? Get to know the simple steps needed to limit distractions or manage access.",
                author: "Thomas Jones",
                date: "2025-09-02 20:10:50",
            },

            {
                title: "6 Call Blocker Apps for iPhone You Must Know in 2025",
                desc:
                    "Discover the top call blocker app for iPhone to stop spam and robocalls easily. Each app helps you manage unknown callers and protect your iPhone from fraud.",
                author: "Thomas Jones",
                date: "2025-09-02 20:10:50",
            },
        ],
        ///BlockGame
        BlockGame: "Block Games",
        Learnft6howto: "Learn how to block inappropriate games on kid's digital devices, keep them to get away from game porn or game addiction.",
        AllBlockGames: "All Block Games",
        Chromebo5j5okGuide: [
            {
                title: "Is Pokémon Go Safety for Kids? Parent's Guide [2025]",
                desc:
                    "Pokémon Go safety warning alerts remind players about real-world risks. Learn what these warnings mean and find some safety tips to enjoy Pokémon",
                img: "https://famisafe.wondershare.com/images/article-trans-image/2034/pokemon-go-safety-warning-1.jpg",
            },
            {
                title: "How to Set up WoW Parental Controls [2025 Updated]",
                desc:
                    "This guide explains the World of Warcraft parental controls and the steps to access them. You will also discover an advanced controlling app as an",
                img: "https://famisafe.wondershare.com/images/article/2025/02/wow-parental-controls-1.jpg",
            },
            {
                title: "How to Block Inappropriate Roblox Games: Parent's Guide",
                desc:
                    "This guide shares 7 Inappropriate Games on Roblox kids love. Learn how to use FamiSafe to protect your kids from inappropriate Roblox games.",
                img: "https://famisafe.wondershare.com/images/article/2024/04/top-7-inappropriate-games-on-roblox-01.jpg",
            },
        ],
        Chromebo5j6okGuide: [
            {
                title:
                    "How to Block Inappropriate Roblox Games: Parent's Guide",
                desc:
                    "This guide shares 7 Inappropriate Games on Roblox kids love. Learn how to use FamiSafe to protect your kids from inappropriate Roblox games.",
                author: "Ankhi Bhattacharya|",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "Top 12 Games Not Blocked by School That Parents Should Know",
                desc:
                    "Discover 12 popular game sites not blocked by school networks. Learn why kids love them and how parents can guide safe, balanced online gaming habits.",
                author: "Joanne Croft",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "Is Gacha Club Safe for Kids? Parent Guide",
                desc:
                    "Gacha club, just like any other online game, has several kids hooked. This article provides all the information you need about Gacha Club to promote digital well-being.",
                author: "moly Swift",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "Is Pokémon Go Safety for Kids? Parent's Guide [2025]",
                desc:
                    "Pokémon Go safety warning alerts remind players about real-world risks. Learn what these warnings mean and find some safety tips to enjoy Pokémon Go securely.",
                author: "Thomas Jones",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "7 Unblocked Game on Google Sites That Kids Like Play",
                desc:
                    "Are you worried about your kids playing unblocked games on Google Sites always? Here is the guide on how to block unblocked games and prevent game addiction.",
                author: "moly Swift",
                date: "2025-09-02 20:10:50",
            },

            {
                title: "How to Block Hentai Games Sites? What Parents Should Know",
                desc:
                    "How to block Hentai game apps or sites on kids' devices? Try parental control apps like FamiSafe to prevent children from accessing inappropriate content,.",
                author: "moly Swift",
                date: "2025-09-02 20:10:50",
            },
        ],
        // Block Porn
        Blockorn: "Block Porn",
        Accessingporno: "Accessing pornography at an early age has a negative effect on your kids. Check here to learn how to block porn on your kid's devices.",
        AllBlockPorn: "All Block Porn",
        AllBlockPo544ern: [
            {
                title: "How to Block Adult Content on Chrome: Complete Parental Safety",
                desc:
                    "Discover ways to learn how to block adult content on Chrome. Ensure controlled browsing for families and adults while preventing exposure to mature",
                img: "https://famisafe.wondershare.com/images/article-trans-image/2725/how-to-block-adult-content-on-chrome-1.jpg",
            },
            {
                title: "How to Block Pornhub to Keep Your Family Safe",
                desc:
                    "Protect your family from adult content online by learning how to block Pornhub. This guide explains easy ways to create a safe and secure digital",
                img: "https://famisafe.wondershare.com/images/article-trans-image/2713/how-to-block-pornhub-1.jpg",
            },
            {
                title: "What Is & How to Block Spotify Porn Content",
                desc:
                    "Learn how to block porn on Spotify. Discover effective solutions that protect kids from explicit podcasts, audio porn, and inappropriate playlists.",
                img: "https://famisafe.wondershare.com/images/article-trans-image/388/spotify-porn-blocking-parental-guide-banner.jpg",
            },
        ],
        AllBlockPorn567ytg: [
            {
                title:
                    "10 Best Porn Blockers in 2025",
                desc:
                    "Looking for the best porn blocker apps? Discover the top 10 apps for mobile & desktop to block adult content, ensure online safety, and protect your family.",
                author: "Ankhi Bhattacharya|",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "How to Block Porn Websites [2025 Solution]",
                desc:
                    "Want to block porn sites on your kid’s smartphones and computers? Read on and learn how to block adult content on Windows, Mac, Android, and iOS.",
                author: "Joanne Croft",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "How to Block Adult Content on Chrome: Complete Parental Safety Guide",
                desc:
                    "Discover ways to learn how to block adult content on Chrome. Ensure controlled browsing for families and adults while preventing exposure to mature websites.",
                author: "jackson Smith",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "How to Block Pornhub to Keep Your Family Safe",
                desc:
                    "Protect your family from adult content online by learning how to block Pornhub. This guide explains easy ways to create a safe and secure digital environment.",
                author: "moly Swift",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "NSFW Discord Servers: Lists & Safety Tips (Updated!)",
                desc:
                    "Discover top 10 NSFW Discord servers featuring adult content and exclusive 18+ perks. This article explores the best options to explore for bold chats and more.",
                author: "aknhi Bhattacharya",
                date: "2025-09-02 20:10:50",
            },

            {
                title: "Twitter Porn - Everything Parents Need to Know",
                desc:
                    "We discuss what porn on Twitter is, how to protect your kids, and what resources are available to help you deal with this issue.",
                author: "moly Swift",
                date: "2025-09-02 20:10:50",
            },
        ],

        // Block YouTube
        BlockouTube: "Block YouTube",
        Worryingaboutwhatyou: "Worrying about what your kids are watching on YouTube? You will find everything about YouTube parental control here.",
        AllBlockYouTube: "All Block YouTube",
        BlockouTube6543: [
            {
                title: "How to Block Ads on Android YouTube So Your Kids Don’t Click",
                desc:
                    "If you want to protect your kids from harmful Youtube ad content, this guide can help. Learn how to block ads on Youtube on Android to keep your",
                img: "https://famisafe.wondershare.com/images/article/2018/08/a-complete-guide-on-youtube-parental-control-1.jpg",
            },
            {
                title: "Top 8 Blocked YouTube Channels in 2025! Parents Can't-Miss",
                desc:
                    "There are so many YouTube channels out there, but some channels are not suitable for kids. Know those channels and adopt parental control for kids device.",
                img: "https://famisafe.wondershare.com/images/article/2022/04/most-blocked-youtube-channels.png",
            },
            {
                title: "Best 12 YouTube Channels Parents Should Watch with Kids",
                desc:
                    "This post shares 12 excellent YouTube channels for kids to keep them entertained and educated. Learn how to use the YouTube parental control settings to",
                img: "https://famisafe.wondershare.com/images/article/2021/11/family-apps/watch-youtube-with-kids.png",
            },
        ],
        BlockouTube0987: [
            {
                title:
                    "How to Block Ads on Android YouTube So Your Kids Don’t Click on Them",
                desc:
                    "If you want to protect your kids from harmful Youtube ad content, this guide can help. Learn how to block ads on Youtube on Android to keep your kids safe from harm.",
                author: "moly Swift",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "Guide to Install and Use YouTube Kids on Amazon Fire [2025]",
                desc:
                    "Want to know how to install and use YouTube Kids on Amazon Fire? Here you can get 2 methods, including use APK and run a Windows PC-based Script. Explore now!",
                author: "Joanne Croft",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "How Kids Use YouTube Unblocked and Other Tools to View Blocked Content",
                desc:
                    "Worried about your child visiting websites they shouldn’t or accessing YouTube unblocked? We’ll tell you how they’re doing it and what you can do to prevent it.",
                author: "jackson Smith",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "How to Block Videos on YouTube in 2025",
                desc:
                    "Want to block videos on YouTube to keep your kids away from harmful content? Discover the top three methods, including a reliable parental control app.",
                author: "Thomas Jones",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "How to Set Parental Controls on YouTube - 4 Easy Ways",
                desc:
                    "Do you want to know how to put a parental lock on YouTube? Don't worry, there are 4 effective methods to turn on restricted mode on YouTube.",
                author: "Thomas Jones",
                date: "2025-09-02 20:10:50",
            },

            {
                title: "A Complete Guide on YouTube Parental Control with FamiSafe",
                desc:
                    "Read guide to learn how to block YouTube on Android & iPhone. We have also provided a stepwise solution to block someone on YouTube as well.",
                author: "Thom",
                date: "2025-09-02 20:10:50",
            },
        ],

        /// Phone Monitoring
        PhoneMonitoring: "Phone Monitoring",
        Learnhowtosetuppa: "Learn how to set up parental monitoring on different devices, and how to use the most popular parental monitoring apps.",
        AllPhoneMonitoring: "All Phone Monitoring",
        PhoneMonitoringggfgd54: [
            {
                title: "How to Check Internet Browsing History on Android & iPhone - 7",
                desc:
                    "Get 7 simple ways to check internet browsing history on Android or iPhone — including how to view incognito history and monitor kids’ online",
                img: "https://famisafe.wondershare.com/images/article-trans-image/2146/how-to-check-internet-browsing-history-1.jpg",
            },
            {
                title: "How to View my Incognito History on Android Phone (2025 Guide)",
                desc:
                    "Want to protect your kids from explicit and harmful content? This article provides 5 easy methods on how you can view incognito history on an Android",
                img: "https://famisafe.wondershare.com/images/article-trans-image/2092/view-my-incognito-history-on-android-phone-1.jpg",
            },
            {
                title: "How to Check Chat History in WhatsApp? 3 Quick Ways",
                desc:
                    "Discover how to check chat history in WhatsApp using its archive and search feature. You can quickly find hidden messages or view old chats on any",
                img: "https://famisafe.wondershare.com/images/article-trans-image/872/how-to-check-chat-history-whatsapp-1.jpg",
            },
        ],
        PhoneMonitoring423d: [
            {
                title:
                    "How Can I See My TikTok Watch History?",
                desc:
                    "Have you ever refreshed your TikTok For You Page accidentally? Then the video you were watching was just gone. It's easy to find it back if you've liked it, but if you haven't, it would be a little challenging. Read this, we will tell you how to see your TikTok watch history.",
                author: "moly Swift",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "TikTok Monitoring for Brands and Parents: 5 Best Tools & Strategies",
                desc:
                    "Learn the importance of TikTok monitoring and explore 5 tools to track the brand's performance. Explore how businesses can manage their presence on social media.",
                author: "THOmas Jones",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "How to Block a Number on Whatsapp",
                desc:
                    "Blocking WhatsApp number on phones isn’t enough. You can take control of you kids WhatsApp by using parental control app like Famisafe.",
                author: "Ankhi Bhattacharya",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "How to View my Incognito History on Android Phone (2025 Guide)",
                desc:
                    "Want to protect your kids from explicit and harmful content? This article provides 5 easy methods on how you can view incognito history on an Android phone.",
                author: "Thomas Jones",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "How to See What My Kid is Doing on Phone [2025]",
                desc:
                    "Learn how to monitor phone activity of an Android or iPhone. We have come up with a stepwise tutorial for parents to monitor cell phone activity of their kids.",
                author: "Thomas Jones",
                date: "2025-09-02 20:10:50",
            },

            {
                title: "How to See Incognito History on Your Child's Device",
                desc:
                    "Discover the best app to see incognito history on your child’s device. Learn how you can see and save browsing activities from your child’s iOS, Android or desktop.",
                author: "MIly Swift",
                date: "2025-09-02 20:10:50",
            },
        ],
        /// Anti Billying
        AntiBullying: "Anti-Bullying",
        Getautomaticalertso: "Get automatic alerts on the potential risk of cyberbullying words with FamiSafe's detection features.",
        AllAntiBullying: "All Anti Bullying",
        AntiBullyi655rfng: [
            {
                title: "Can Cyberbullies Go to Jail for Cyberbullying?",
                desc:
                    "Cyberbullying can have very negative implications on the physical and mental wellbeing of your children. We find out if cyberbullying if illegal and",
                img: "https://famisafe.wondershare.com/images/article/2019/11/can-cyberbullies-go-to-jail-for-cyberbullying-1.jpg",
            },
            {
                title: "Find Out Effective Solutions to Bullying in School",
                desc:
                    "This article will enlighten you on what cyberbullying entails and ways to prevent cyberbullying. It will also highlight the best parental control app to help",
                img: "https://famisafe.wondershare.com/images/article/2019/11/ways-to-prevent-cyberbullying-2.jpg",
            },
            {
                title: "Find Out Effective Solutions to Bullying in School",
                desc:
                    "While bullying in schools still remains a widespread problem, you can also find some solutions to bullying in schools, and FamiSafe can realize the benefits it",
                img: "https://famisafe.wondershare.com/images/article/2018/09/find-out-effective-solutions-to-bullying-in-school-1.jpg",
            },
        ],
        AntiBullyi76tgbnng: [
            {
                title:
                    "Can Cyberbullies Go to Jail for Cyberbullying?",
                desc:
                    "Cyberbullying can have very negative implications on the physical and mental wellbeing of your children. We find out if cyberbullying if illegal and how we can counter it.",
                author: "moly Swift",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "How Does Cyberbullying Start and How to Deal With Cyberbullying?",
                desc:
                    "This article will enlighten you on what cyberbullying entails and ways to prevent cyberbullying. It will also highlight the best parental control app to help protect your kids from potential cyberbullies.",
                author: "THOmas Jones",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "Effects of Bullying: Why Is Bullying Bad for Kids?",
                desc:
                    "Know the short term and lifelong effects of bullying, why is bullying bad, major statistics related with bullying, whom should bullying be reported to, and how can parents make use of FamiSafe to make sure their kids do not fall prey to cyberbullying.",
                author: "Ankhi Bhattacharya",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "How to Protect your Kids from Text Bullying",
                desc:
                    "Even it is hard to detect some instances of text bullying, but with the help of FamiSafe, you get to keep your kids safe from bullying text messages.",
                author: "Thomas Jones",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "What to Do If Someone is Bullied by Social Media",
                desc:
                    "Bullying on social media is a problem that must be tackled at all costs, so as to foster a safe environment for kids to grow and flourish. Here FamiSafe is the best choice for you.",
                author: "Thomas Jones",
                date: "2025-09-02 20:10:50",
            },

            {
                title: "Top 5 Best Anti-Bullying Programs in Schools",
                desc:
                    "This article a top lists of anti bullying programs in schools which will help in keeping school campuses bully-free. If you are looking for such apps then you can consider FamiSafe as its extensive features will save kids from bullying.",
                author: "MIly Swift",
                date: "2025-09-02 20:10:50",
            },
        ],

        // Teen Sexting
        TeenSexting: "Teen Sexting",
        Sextingisanincreasi: "Sexting is an increasing concern among today's teenagers. To learn more about sexting, you will find this topic useful.",
        AllTeenSexting: "All Teen Sexting",
        TeenSexvftyuting: [
            {
                title: "6 Risky Anonymous Sexting Apps for",
                desc:
                    "Curious about which anonymous sexting apps teens are using? Discover 6 trending apps, how they",
                img: "https://famisafe.wondershare.com/images/article/2019/10/anonymous-sexting-apps-for-teenagers-1.jpg",
            },
            {
                title: "10 Best Sexting Apps: What Parents Must Know",
                desc:
                    "Discover the best sexting apps for private chats in 2025. Compare top options for secure messaging, and",
                img: "https://famisafe.wondershare.com/images/article/2025/05/sexting-app.jpg",
            },
            {
                title: "WhatsApp Sexting in 2025: Risks & Parental..",
                desc:
                    "Understand why WhatsApp sexting is rising among teens in 2025. Learn hidden risks, sexting codes, and how...",
                img: "https://famisafe.wondershare.com/images/article/2025/05/whatsapp-sexting-1.jpg",
            },
        ],
        TeenSeiuhxting: [
            {
                title:
                    "Telegram Sexting: Mechanism, Safety, Risks, & Strategies",
                desc:
                    "Learn how to protect teens from Telegram sexting. Discover its risks, dangers, and parental control tools like FamiSafe to monitor and secure their online safety.",
                author: "Joanne Croft",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "Twitter Sexting: How It Works, What Teens Risk, and How to Stay Safe",
                desc:
                    "Learn how Twitter sexting works, its risks for teens, and how FamiSafe’s parental control tools detect and prevent sextortion, unsafe content, and online grooming.",
                author: "THOmas Jones",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "WhatsApp Sexting in 2025: Risks & Parental Guidance",
                desc:
                    "Understand why WhatsApp sexting is rising among teens in 2025. Learn hidden risks, sexting codes, and how to protect your child safely with FamiSafe.",
                author: "Ankhi Bhattacharya",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "Is Sexting Legal or Illegal? – Things Parents Should Know",
                desc:
                    "Is sexting legal or illegal? Learn the laws, risks, and consequences of teen sexting in this guide to help parents and teens stay safe and informed.",
                author: "Ankhi Bhattacharya",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "Dangerous Sexting Sites That Parents Should Know",
                desc:
                    "Sexting sites can have dangerous effects on your kids. Check here for the 5 common teen sexting sites, how they affect teens, and how you can protect your kids.",
                author: "mily Swift",
                date: "2025-09-02 20:10:50",
            },

            {
                title: "What should parents do for teen sexting?",
                desc:
                    "Worried about your teen sexting? Don’t know what to do? Keep track of their online activities remotely with FamiSafe and get peace of mind. Read on to learn more.",
                author: "jony croft",
                date: "2025-09-02 20:10:50",
            },
        ],
        //web filtering
        WebFiltering: "Web Filtering",
        BestInternetContentFil: "Best Internet Content Filters and Web Filtering that parents should know and 100% works.",
        AllWebFiltering: "All Web Filtering",
        WebFiltering54df: [
            {
                title: "How to Block Websites on iPhone/iPad [3 Tested..",
                desc:
                    "Learn 3 tested ways to block websites on iPhone or iPad — protect kids, stay focused, and take full control of your..",
                img: "https://famisafe.wondershare.com/images/article-trans-image/2145/how-to-block-websites-on-iphone-1.jpg",
            },
            {
                title: "How to Block Websites on Firefox – Step-by-Step..",
                desc:
                    "Want to know how to block websites on Firefox? Discover easy methods for safer browsing on any device and see...",
                img: "https://famisafe.wondershare.com/images/article-trans-image/2144/how-to-block-websites-on-firefox-1.jpg",
            },
            {
                title: "10 Best Internet Filtering Software for Safe..",
                desc:
                    "ULooking for the best internet filtering software in 2025? Discover top 10 tools with key features and expert tips...",
                img: "https://famisafe.wondershare.com/images/article-trans-image/2142/internet-filtering-software-1.jpg",
            },
        ],
        WebFil76gfrtering: [
            {
                title:
                    "6 safe browsing apps for kids",
                desc:
                    "This article will explain what safe browser for kids is and the reason for safe browsing. Likewise, it will tackle how to make browsers kid-friendly using the best tool.",
                author: "Thomas Jones",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "A Complete Guide for Chrome Filter [3 Effective Methods]",
                desc:
                    "Looking for the best way to Google filter on the Chrome web browser to protect yourself or your loved ones from unsuitable content on the internet? This article is a complete guide on how to use Chrome filter to restrict access to certain websites, providing three different methods",
                author: "Jone craft",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "How to Check Your Child's Online Web Browser History",
                desc:
                    "Using browser history tracker parents can watch the online activities of their child and protect them from unexpected impact in their life.",
                author: "Thomas Jones",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "How to Block Websites on Firefox – Step-by-Step Guide",
                desc:
                    "Want to know how to block websites on Firefox? Discover easy methods for safer browsing on any device and see how FamiSafe helps protect your family online.",
                author: "Ankhi Bhattacharya",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "10 Best Internet Filtering Software for Safe Browsing [2025]",
                desc:
                    "Looking for the best internet filtering software in 2025? Discover top 10 tools with key features and expert tips — start protecting your family's online safety today!",
                author: "mily Swift",
                date: "2025-09-02 20:10:50",
            },

            {
                title: "10 Best Internet Filters for Families in 2025",
                desc:
                    "The article lists the top 10 internet filters for safeguarding children online, blocking inappropriate online content with these internet filter software. FamiSafe is recommended as the best internet filter for families across multiple platforms.",
                author: "moly sefty",
                date: "2025-09-02 20:10:50",
            },
        ],

        // Teen Slang
        TeenSlang: "Teen Slang",
        Moreandmoreteen: "More and more teens are using slang to text each other. Parents who want to understand what kids are talking about can learn slangs here.",
        AllTueenSlang: "All Teen Slang",
        TeenSlanghtge: [
            {
                title: "What Is “Big Back”? Meaning, Risks, Trends..",
                desc:
                    "Discover the meaning of \"Big Back\" on social media, its impact on teens, and how it influences body image. Learn.",
                img: "https://famisafe.wondershare.com/images/article/2025/05/big-back-slang-meaning-banner.jpg",
            },
            {
                title: "What Does the Red Heart Mean on Snapchat? What..",
                desc:
                    "Learn what the red heart means on Snapchat, how it impacts relationships, and how to monitor and...",
                img: "https://famisafe.wondershare.com/images/article/2025/05/red-heart-snapchat-banner.jpg",
            },
            {
                title: "ATP Meaning: Decoding the Slang Across Social..",
                desc:
                    "Are you a parent confused by the ATP meaning in slang? Learn how teens use it on social media platforms, like..",
                img: "https://famisafe.wondershare.com/images/article/2025/05/atp-meaning-1.jpg",
            },
        ],
        TeenSlanglkwdes: [
            {
                title:
                    "Sneaky Link: Understanding What It is and Protecting Your Teens",
                desc:
                    "Discover \"Sneaky Link\" meaning, risks, and protection tips. Learn how FamiSafe can help safeguard teens in the digital world.  ",
                author: "moly Swift",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "Seeing ONS, FWB, and NSA on Teen's Phone? Be Cautious!",
                desc:
                    "What's the meaning of ONS? What's the meaning of FWB? And what's the meaning of NSA? Parents may easily overlook such teen slang while they can suggest kids are doing dangerous things!",
                author: "moly Swift",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "Warning: Parents Must Not Overlook These Drug Slangs!",
                desc:
                    "Common drug slangs you should never ignore. Find out the meaning of drug slangs like 420, 420 friendly, etc. teenagers use in their text messages and social media. Learn how to block messages, restrict social media, and filter slang words on your kid's mobile.",
                author: "moly Swift",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "What does BTS Mean? 3 Most Common Explanations!",
                desc:
                    "BTS can mean different things in different texts. For fans of Korean-pop, they are referring to a boy band; for a commonly used abbreviation, BTS means Be There Soon; It can also mean other things, check it out!",
                author: "moly Swift",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "Parents Be Aware: F word Slangs that Teens Use in Chatting",
                desc:
                    "Are you worried about the F-word slangs that your teens use? Does your kid use AF, FML, and true AF frequently? Here is a complete guide on AF meaning, FML meaning, True AF meaning and how you can monitor the use of F-word slangs in your teen's phone.",
                author: "mily Swift",
                date: "2025-09-02 20:10:50",
            },

            {
                title: "The Ultimate Guide to Gen Z Slang: 25 Words You Must Know",
                desc:
                    "Do you feel like your Gen Z family members speak a different language? We are here to teach you their dictionary so you can establish a smooth conversation.",
                author: "joanne croft",
                date: "2025-09-02 20:10:50",
            },
        ],

        // Trending App Review
        TrendingAppReview: "Trending App Review",
        FamiSafehelpspare: "FamiSafe helps parents pick suitable apps for kids like games, study app, or other types of apps.",
        AllTrendingAppReview: "All Trending App Review",
        TrendingAppReview765G: [
            {
                title: "Is Ask.fm Safe for Your Kids? Ultimate App Review..",
                desc:
                    "Worried about your child on the Ask.fm app? Our 2025 review covers cyberbullying, predators, and other dangers. Learn how to protect your family with FamiSafe..",
                img: "https://famisafe.wondershare.com/images/article-trans-image/92/is-askfm-app-safe.jpg",
            },
            {
                title: "Flixtor Alternatives: 11 Safer Sites for Streaming Without Worries..",
                desc:
                    "Explore top 11 Flixtor alternatives offering secure movie streaming for kids and teens. These family-friendly platforms will help you avoid risky pop-ups....",
                img: "https://famisafe.wondershare.com/images/article/2025/05/flixtor-alternatives-1.jpg",
            },
            {
                title: "13 Putlocker Alternatives for HD Movie Streaming [2025]..",
                desc:
                    "Discover the 13 best Putlocker alternatives to enjoy free, safe movie streaming. Compare features and safety tips to enjoy your favorite films online...",
                img: "https://famisafe.wondershare.com/images/article/2025/05/putlocker-alternatives-1.jpg",
            },
        ],
        TrendingAppReviewWSDDE43: [
            {
                title:
                    "Leading 5 Private Screenshot Apps You Must Know",
                desc:
                    "Are you thinking about how you can protect your child from harmful content? This article offers the top private screenshot apps to monitor your kid’s activity.  ",
                author: "moly Swift",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "Is Replika Safe? What You Need To Know Before Using It",
                desc:
                    "Is Replika safe? Yes, Replika is safe for most users, but concerns about privacy and content exist. Learn how to stay secure while using this AI app.",
                author: "moly Swift",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "What Is Minecraft & Is It Safe For Kids?",
                desc:
                    "Minecraft is becoming more popular with kids, and parents are more worried. Is it safe and how to prevent your child from Minecraft Addiction? Explore answers here..",
                author: "moly Swift",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "Is Viber Safe? A Comprehensive Look at Their Security for Users",
                desc:
                    "BTS can mean different things in different texts. For fans of Korean-pop, they are referring to a boy band; for a commonly used abbreviation, BTS means Be There Soon; It can also mean other things, check it out!",
                author: "moly Swift",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "Is Viber Safe? A Comprehensive Look at Their Security for Users",
                desc:
                    "Are you worried about the F-word slangs that your teens use? Does your kid use AF, FML, and true AF frequently? Here is a complete guide on AF meaning, FML meaning, True AF meaning and how you can monitor the use of F-word slangs in your teen's phone.",
                author: "mily Swift",
                date: "2025-09-02 20:10:50",
            },

            {
                title: "Is 4chan Safe? What Parents Need to Know",
                desc:
                    "Is 4chan safe to browse? Learn the risks of 4chan, how to protect yourself, and use parental control apps like FamiSafe to keep kids safe online.",
                author: "joanne croft",
                date: "2025-09-02 20:10:50",
            },
        ],

        /// Parental App Review
        ParentalAppReview: "Parental App Review",
        Therearevariousofpar: "There are various of parental control apps on the market. This topic will help you find the most suitable one for you.",
        AllParentalAppReview: "All Parental App Review",
        ParentalAppReview654f: [
            {
                title: "Bark App Review: Features, Pricing, and Verdict.",
                desc:
                    "This Bark review explores key features, pricing, pros, and cons of the platform. Discover if it’s the right choice for your family to protect kids online..",
                img: "https://famisafe.wondershare.com/images/article/2025/04/bark-review-1.jpg",
            },
            {
                title: "Norton Family Review 2025: What Parents Should Know?",
                desc:
                    "This Norton Family review breaks down its features, pricing, and real-world performance. See if it’s worth it—and explore its alternative for digital parenting...",
                img: "https://famisafe.wondershare.com/images/article/2025/04/norton-family-banner.png",
            },
            {
                title: "Aura Review: Is It Worth the Price for Your Family?.",
                desc:
                    "Looking for a reliable parental control app? This in-depth Aura review explores its features, pricing plans, pros, and cons. Protect family's digital safety now..",
                img: "https://famisafe.wondershare.com/images/article/2025/04/aura-review-1.jpg",
            },
        ],
        ParentalAppReview878h: [
            {
                title:
                    "Top 8 Baby Monitoring Apps [Android & iPhone]",
                desc:
                    "Looking for the best baby monitoring apps? Check out these top 8 picks for Android & iPhone to watch over your baby with live video, audio, and smart alerts.  ",
                author: "moly Swift",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "Google Family Link vs Microsoft Family Safety [2025]",
                desc:
                    "Both Family Link and Family Safety are free parental apps developed by tech giants. Wondering which is the best for your family? Take a look!",
                author: "moly Swift",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "How Do I Use Family Link on Computer or Laptop?",
                desc:
                    "If you are worried about your child spending too much time on computer or laptops, you must want to set up a family link on your child's device. This article will tell you how!.",
                author: "Ankhi Bhattacharya",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "Top Nintendo Switch Games for Family Party! [Free included]",
                desc:
                    "Nintendo Switch is always the best console to play with family and friends together. Wondering what games are the best and free to play? Learn it here!",
                author: "moly Swift",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "What Is Microsoft Family Safety & How to Use It",
                desc:
                    "Discover how Microsoft Family Safety helps parents monitor their child’s phone usage. This guide explains how to use this tool and its reliable alternative.",
                author: "thomas jones",
                date: "2025-09-02 20:10:50",
            },

            {
                title: "Kaspersky Safe Kids review: what should parents really know?",
                desc:
                    "Get an in-depth understanding of Kaspersky safe kids entailing its pros and cons and whether kids can get rid of it easily. Also, learn its best alternative that promises online safety.",
                author: "joanne croft",
                date: "2025-09-02 20:10:50",
            },
        ],

        //ParentalAppRivew
        ParentalAppRivew: "Parenting Tips",
        Parenting65is: "Parenting is not an easy task, and learning from the wisdom of others will always benefit you. Find useful tips here to make parenting easier.",
        // ===== Sidebar Data with URL and target (all open in new page) =====
        sidebarItems: [
            { title: "Screen Time Control", url: "/screen-time", target: "_blank" },
            { title: "Block Games", url: "/block-games", target: "_blank" },
            { title: "Phone Monitoring", url: "/phone-monitoring", target: "_blank" },
            { title: "iOS Parental Control", url: "/ios-parental-control", target: "_blank" },
            { title: "Track Location", url: "/track-location", target: "_blank" },
            { title: "Android Parental Control", url: "/android-parental-control", target: "_blank" },
            { title: "Internet Filter", url: "/internet-filter", target: "_blank" },
            { title: "Location Sharing", url: "/location-sharing", target: "_blank" },
            { title: "Block Apps", url: "/block-apps", target: "_blank" },
            { title: "Chrome Book Guide", url: "/chromebook-guide", target: "_blank" },
            { title: "Parental Control Tips", url: "/parental-tips", target: "_blank" },
            { title: "App Reviews", url: "/app-reviews", target: "_blank" },
            { title: "Parental App Reviews", url: "/parental-app-reviews", target: "_blank" },
            { title: "Social Media App", url: "/social-media-app", target: "_blank" },
            { title: "Anti-bullying", url: "/anti-bullying", target: "_blank" },
        ],
        articles: [
            {
                title: "Internet Safety: An Important Lesson to Kids",
                desc: "The internet is no longer safe for children. The increased number of unrated sites calls for extra safety measures. Internet safety laws can only do so much...",
                author: "Thomas Jones",
                date: "09/10/2021",
                avatar: "https://i.pravatar.cc/24",
            },
            {
                title: "Top 10 Car Trackers You Need To Know",
                desc: "This article will show you the top 10 car GPS trackers that you need to know about. With these car GPS trackers...",
                author: "Thomas Jones",
                date: "09/10/2021",
                avatar: "https://i.pravatar.cc/24",
            },
            {
                title: "10 Things You Should Never Say to Children",
                desc: "Your child's upbringing and safety is your utmost concern. Children are sensitive and can be easily affected...",
                author: "Thomas Jones",
                date: "09/10/2021",
                avatar: "https://i.pravatar.cc/24",
            },
            {
                title: "How to Block People on WhatsApp",
                desc: "Sometimes, we need to block people on WhatsApp for certain reasons to get a high level of protection...",
                author: "Thomas Jones",
                date: "09/10/2021",
                avatar: "https://i.pravatar.cc/24",
            },
            {
                title: "Top 10 Tracking Devices & Apps for Kids",
                desc: "We have picked up the top 10 best tracking devices and apps that you can use to track your children...",
                author: "Thomas Jones",
                date: "09/10/2021",
                avatar: "https://i.pravatar.cc/24",
            },
            {
                title: "Best T-Mobile Kids Smart Watch Phones",
                desc: "These days most mobile smartwatch wearable items come loaded with multiple features that render it all the more useful...",
                author: "Thomas Jones",
                date: "09/10/2021",
                avatar: "https://i.pravatar.cc/24",
            },
        ],

        //{/*============================== Resource===================================*/}

        //Screentime-For-Kids
        ParentsScreenTimeNow: "Parents Can't-Miss, Reducing Kids' Screen Time Now!",
        Overtheyearsthetr: "Over the years, the trend of excessive use of digital devices like smartphones, laptops, and tablets has become popular among little children. Given the negative impacts of bad digital practices on kids' mental and physical health, parents often seem confused about what's is ideal screen time for pediatrics. With the help of FamiSafe, you can easily manage your family screen time. Read on to find more.",
        Howmuchtimedoyourkid: "How much time do your kids spend online every day?",
        Amazingscreentim: "Amazing: screen time of 9 hours a day!",

        //// Amazing: screen time of 9 hours a day!
        Comparisonof54children: " Comparison of children's screen time before and after using FamiSafe",
        Averagedaily6665min: "Average daily minutes kids spent on screen",
        Before: "Before",
        After: "After",
        Beyond6hours: "Beyond 6 hours every day!",
        Accordingto65CDC: "According to CDC's investigation and research, the average child's daily use of mobile phones has reached 6 hours, and some children even spend more than 9 hours in front of electronic devices.",
        TheKidsscreentimeh: "The Kids' screen time has been reduced by nearly 4 hours after using FamiSafe.(FamiSafe 2020, Oct.)",
        Thingskidsusuallydoi: "Things kids usually doing online",
        Social32: "Social 35%",
        Game16: "Game 19%",
        Video41: "Video 43%",
        Music2: "Music 4%",
        Morehan: "More than",
        ofscreentime: " of screen time kids spend on videos and games.",
        FamiSafe2020: "FamiSafe, 2020",
        Otherstatisticsab: "Other statistics about kids' screen time:",
        ofkidshavebeen: "of kids have been online by the age of 2.",
        areconcernedthei: "are concerned their kids have too much screen time.",
        of8yearoldskids: "of 8-11 year-olds kids have access to a ",
        tabletat4home: "tablet at home.",
        ofkidshavetheir: "of kids have their own smartphone before starting secondary school.",
        parentzoneorguTh: "（parentzone.org.uk）The screen time of children aged 6-12 increased by",
        duringheCoronavirus: "during the Coronavirus. （almost all U.S. states ",

        /// Prevent Excessive screen time
        PreventE4656xcessivescr: "Prevent Excessive screen time",
        Negative345EffectsofExces: "Negative Effects of Excessive Screen Time",
        Easilya4544ddicted: "Easily addicted to the electronic world",
        Stayupl55atelack: "Stay up late & lack of sleep",
        Visionl555ossweigh: "Vision loss & weight gain",
        Distract444edinstud: "Distracted in study and decreased grades",
        Childrendailyscreentim: "Children's daily screen time is 8 times that of exercise time, and some children do not even do exercise at all.",
        Teensagesto5541: "Teens ages 13 to 18 get 8 to 10 hours of sleep a night and log at least 1 hour of physical activity every day. stanfordchildrens.org",
        // Negative Effects of Excessive Screen Time
        NegativeEffectsofExc: "Negative Effects of Excessive Screen Time",
        Under2ZEROscreentime: " Under 2 – ZERO screen time 2-5 – No more than 1 hour/day.6-18 – No more than 2 hours/day.",
        Onlylessthanaquart: "Only less than a quarter of children can do it, and parents are their most useful helpers in reducing screen time.",
        Averagetimepercentage: "Average time percentage of Kid's favorite ",
        socialapps: "social apps",

        Averagetimeperce: "Average time percentage of Kid's favorite video apps",
        instagramandouTubear: "instagram and YouTube are the most commonly used social and video software for children. Normally, they spend at least 3 hours a day on this; most children who use FamiSafe spend at least half of their time on this.(FamiSafe 2020, Oct.)",
        Managesyourkid: "Manages your kids' screen time by FamiSafe",
        Electronicdevices: "Electronic devices are too attractive to children. Without the guidance and br management of their parents, children would even be onlineall day long, which is not conducive to the growth and development of children. Children can access the Internet and there are many different devices, and sometimes you are not with them. This is why you need a comprehensive app like FamiSafe to help you manage your kids' screen time.",

        feature54s: [
            {
                title: "Activity Report",
                description:
                    "View the device usage in a timeline form. Check which application or website is used or visited at what time. Get to know what your teens are up to in real-time.",
            },
            {
                title: "Track & Limit Screen Time",
                description:
                    "Track how much time teens spend on their Macs and set up a daily screen time usage limit to restrict their usage. Parents can also block the device remotely.",
            },
            {
                title: "Browser History Checking",
                description:
                    "Know what teens are browsing or searching online to understand them better. Get the browser history simultaneously. You can also track browser records under incognito mode.",
            },
            {
                title: "Block & Filter Web Content",
                description:
                    "Block or allow specific websites. Filter sites by 7+ inbuilt categories including Adults, Drugs, Gambling, Tobacco, Violence, and others.",
            },
            {
                title: "Flexible Schedule Setting",
                description:
                    "Set up different schedules to block or allow certain apps for different occasions. Parents can choose to block games during study time.",
            },
            {
                title: "Overused or Inappropriate Applications Blocking",
                description:
                    "Check which applications are used most or block inappropriate apps completely on Mac.",
            },
            {
                title: "Multiplatform Supported",
                description:
                    "Android, iOS, Fire OS, macOS, and Windows platforms supported. Track children’s online behavior in one app.",
            },
        ],
        featuresv: [
            {
                icon: Clock,
                color: "bg-purple-500",
                title: "24/7 All-Around Protection",
                desc: "FamiSafe runs on kid's devices all day round to protect kids from both real-life and online dangers.",
            },
            {
                icon: Zap,
                color: "bg-orange-500",
                title: "Timely Alerts",
                desc: "Whenever an issue is detected on kid's devices, parents will receive immediate notification on their end.",
            },
            {
                icon: ShieldCheck,
                color: "bg-emerald-400",
                title: "Privacy Protected",
                desc: "FamiSafe uses the RSA cryptosystem for secure data transmission. Your information is only viewable by you.",
            },
            {
                icon: RefreshCcw,
                color: "bg-teal-400",
                title: "Three-day Free Trial",
                desc: "A three-day free trial is provided for new users. Download and test the app first to see if it can meet your needs before you decide to make the purchase.",
            },
            {
                icon: SlidersHorizontal,
                color: "bg-yellow-400",
                title: "Flexible Subscription",
                desc: "With one FamiSafe account, you can protect up to 5 devices with the monthly plan, 10 devices with the quarterly and annual plan.",
            },
            {
                icon: MessageCircle,
                color: "bg-purple-500",
                title: "Live Chat Support",
                desc: "FamiSafe values our customers and makes a great effort to ensure a great customer experience. Our support is available via email, telephone, and live chat.",
            },
        ],
        featuredLogos: [
            "TECH TIMES",
            "XDA",
            "AppAdvice",
            "Pocket-lint",
            "TweakTown",
            "techradar",
            "DIGITAL TRENDS",
        ],

        screenTimeData: {
            title: "Manage screen time on Android devices:",
            sections: [
                {
                    heading: "1. Limit your kids' screen time on their devices",
                    paragraphs: [
                        "By using Digital Wellbeing & parental controls, you can view the total screen time of your child, including unlock time and notification counts.",
                        "You can set daily timers for frequently used apps and specify allowed screen time. Enable sleep mode and focus mode to help children rest and concentrate.",
                    ],
                },
                {
                    heading: "2. Set Samsung Kids Mode",
                    paragraphs: [
                        "Find Digital Wellbeing on your child's device and set timers. Use Wind Down and Focus Mode to manage parental controls.",
                        "Parents can protect Samsung Kids Mode with a PIN and restrict access to harmful content.",
                    ],
                },
                {
                    heading: "3. Huawei Digital Balance",
                    paragraphs: [
                        "Use Digital Balance to monitor phone usage, view screen time duration, and manage app usage limits effectively.",
                    ],
                },
                {
                    heading: "* Want to manage more?",
                    paragraphs: [
                        "For Android devices, the device itself has these time monitoring and management functions, and their principles of action are similar, but this seems not enough. Sometimes you only need to limit the use time of a certain device, such as prohibiting your child from opening a certain game or watching YouTube videos while studying; or sometimes you kids were not around but you want to know what there are doing on their devices; also you want your child put down the electronic equipment to study and exercise at the stipulated time. It only takes a few minutes to learn about FamiSafe, dedicated to helping you overcome these problems.",
                    ],
                },
            ],

            imageInfo: {
                src: "https://famisafe.wondershare.com/images/images-2020/screen-time/img2.png",
                title: "Android Screen Time Management",
                description:
                    "FamiSafe focuses on helping parents protect their children and let parents know more about children's digital world. After you use FamiSafe on your child's Android device, you can view your child's activity report on the device at any time on your own phone, and you can set a Smart Schedule for your child.<br/> The most important thing is that you don't need to constantly question your children, or confiscate your children's mobile phones and check what they are doing. This may often make you quarrelsome. After using FamiSafe, you can set up some parental controls on your phone and help them develop better online habits.",
            },
        },
        screenTimeDatav: {
            title: "Manage screen time on iOS/OS devices:",
            sections: [
                {
                    heading: "1. Limit your kids' screen time on their devices",
                    paragraphs: [
                        "Set Screen Time on your kids' iPhone/iPad/ /Mac.The iPhone Screen Time feature provides a daily/weekly Activity Report. To check the report, you will need to enable Screen Time on your kid's device first.",
                        "You can choose to set the screen time in the settings, then select This is My Child's device and set a special password to ensure that only you can control the child's screen time. Afterward, you can always get reports on how to use the device, application and website.",
                    ],
                },
                {
                    heading: "2. Using Family Sharing to manage a child account",
                    paragraphs: [
                        "In addition, you can also use \"Family Sharing\" to configure your child's device from your own device. After setting up your child's device, you can also use the Family Sharing function to view reports and adjust settings directly on your own device to control your child's Downtime, App Limits, Communication Limits, Always Allowed, Content & Privacy Restrictions.",
                        "After setting the downtime, your child will not be able to use the device with the \"Screen Time\" feature enabled during this time period and will receive a reminder five minutes before the start.",
                        "Set App Limits to set daily limits for app categories, and limit the use of entertainment apps when your child needs to study or do other activities. App Limits refresh every day at midnight, and you can delete them at any time.",
                    ],
                },
                {
                    heading: "* Tips for using Family Sharing:",
                    paragraphs: [
                        "You can subscribe and purchase together with up to six members who use Apple devices. Family sharing supports iPhone/iPad/iPod touch with iOS 8 and above, and Mac devices with OS X Yosemite or above. After you add your child to the Family Sharing member, you can remotely control your child's screen time.",
                    ],
                },
                {
                    heading: "* Want to know more?",
                    paragraphs: [
                        "How old are the parental controls in Apple devices applicable to children?  The official recommended age is 8-12.",
                        "Can I monitor all my children through a mobile phone? Yes, there are many parental monitoring apps on the market, such as FamiSafe. Parents can monitor at least 5 children's devices with their own devices."
                    ],
                },
            ],

            imageInfo: {
                src: "https://famisafe.wondershare.com/images/images-2020/screen-time/img3.png",
                title: "Can I use my Android phone to manage my kids iPhone, iPad or Mac?",
                description:
                    "Yes! FamiSafe can help you realize cross-terminal parental monitoring, no matter if your child is using iOS, OS, Mac, Win or Kindle Fire device; you only need to hold your iPhone or Android mobile phone, you can grasp the child's device dynamics in one hand. And FamiSafe can also help you monitor suspicious content on your child's device, set up a geofence, and protect your child's safety when you are not around.",
            },
        },
        screenTimeDatad: {
            title: "Manage screen time on Android devices:",
            sections: [
                {
                    heading: "Limit your kids' screen time on their computer",
                    paragraphs: [
                        "If your child often uses a Windows system computer, you can actually manage your child's computer screen time. Windows 10 parental control allows you to set an appropriate access plan and limit the total usage for each day of the week. You can set daily total screen time limits and access schedules.",
                        "The time limit can be set from zero to twelve hours, in half-hour increments. By default, the total access time is unlimited. If your child needs to use their device outside of the screen time limit you set, they can choose to request another time. You will receive an email with options to approve or reject their request",
                    ],
                },
                {
                    heading: "* How does it work?",
                    paragraphs: [
                        "First, please go back to the \"Account\" menu under \"Settings\". Under \"Family and others\" you will see your child's account and a new option to manage family settings online.",
                        "Windows 10's your information settings menu with highlighted online management family settings Click \"Manage Family Settings Online\" to open the Microsoft Family Parental Control page in the Web browser.",
                        "If your child's account is successfully set up, your parental control page should look like the following, with an entry for each child under your supervision, then you can:",
                        "Set up a sub-account; Limit screen time & Schedule screen time; Allow/block websites; Limit games; Check which apps and websites your child browses..",
                    ],
                },
                {
                    heading: "*What should parents know?",
                    paragraphs: [
                        "The parental monitoring function of the windows system is very limited. You must set it up on your child's device before using it. In addition, if you have a Microsoft account and use Microsoft Family Safety, you can also bind your child to your device to set screen time limits for apps and games (Windows, Xbox) on your child's device..",
                    ],
                },
            ],

            imageInfo: {
                src: "https://famisafe.wondershare.com/images/images-2020/screen-time/img5.png",
                title: "Can I remotely monitor my child's computer?",
                description:
                    "Yes! After you use the FamiSafe parental control app, you can easily manage your child's computer usage remotely. When you are not with your child, you want to know what they are doing on the computer, and sometimes worry that they may watch videos or play computer games for a long time and forget to study and exercise. You can limit it through FamiSafe's Smart schedule and App Block.",
            },
        },
        screenTimeDataz: {
            title: "Manage screen time on iOS/OS devices:",
            sections: [
                {
                    heading: "1. Limit your kids' screen time on their devices",
                    paragraphs: [
                        "Set Screen Time on your kids' iPhone/iPad/ /Mac.The iPhone Screen Time feature provides a daily/weekly Activity Report. To check the report, you will need to enable Screen Time on your kid's device first.",
                        "You can choose to set the screen time in the settings, then select This is My Child's device and set a special password to ensure that only you can control the child's screen time. Afterward, you can always get reports on how to use the device, application and website.",
                    ],
                },
                {
                    heading: "2. Using Family Sharing to manage a child account",
                    paragraphs: [
                        "In addition, you can also use \"Family Sharing\" to configure your child's device from your own device. After setting up your child's device, you can also use the Family Sharing function to view reports and adjust settings directly on your own device to control your child's Downtime, App Limits, Communication Limits, Always Allowed, Content & Privacy Restrictions.",
                        "After setting the downtime, your child will not be able to use the device with the \"Screen Time\" feature enabled during this time period and will receive a reminder five minutes before the start.",
                        "Set App Limits to set daily limits for app categories, and limit the use of entertainment apps when your child needs to study or do other activities. App Limits refresh every day at midnight, and you can delete them at any time.",
                    ],
                },
                {
                    heading: "* Tips for using Family Sharing:",
                    paragraphs: [
                        "You can subscribe and purchase together with up to six members who use Apple devices. Family sharing supports iPhone/iPad/iPod touch with iOS 8 and above, and Mac devices with OS X Yosemite or above. After you add your child to the Family Sharing member, you can remotely control your child's screen time.",
                    ],
                },
                {
                    heading: "* Want to know more?",
                    paragraphs: [
                        "How old are the parental controls in Apple devices applicable to children?  The official recommended age is 8-12.",
                        "Can I monitor all my children through a mobile phone? Yes, there are many parental monitoring apps on the market, such as FamiSafe. Parents can monitor at least 5 children's devices with their own devices."
                    ],
                },
            ],

            imageInfo: {
                src: "https://famisafe.wondershare.com/images/images-2020/screen-time/img4.png",
                title: "Can I use my Android phone to manage my kids iPhone, iPad or Mac?",
                description:
                    "Yes! FamiSafe can help you realize cross-terminal parental monitoring, no matter if your child is using iOS, OS, Mac, Win or Kindle Fire device; you only need to hold your iPhone or Android mobile phone, you can grasp the child's device dynamics in one hand. And FamiSafe can also help you monitor suspicious content on your child's device, set up a geofence, and protect your child's safety when you are not around.",
            },
        },
        tips: [
            {
                id: 1,
                title: "Lead by example",
                desc:
                    "It is easy for children to imitate the behavior of others. Please believe that self-discipline is more persuasive than anything else.",
            },
            {
                id: 2,
                title: "Encourage other activities",
                desc:
                    "Encourage your child to find and participate in activities that do not require a screen. You can also play board games with your children and take them out to play more.",
            },
            {
                id: 3,
                title: "Explain why to limit the screen time",
                desc:
                    "If you tell your child the dangers of excessive screen time and encourage your child to participate in other activities, your child may be more likely to follow your arrangements.",
            },
            {
                id: 4,
                title: "Keep screen off during activities",
                desc:
                    "Keep children away from electronic devices, they will be interested in other activities, while ensuring their study and sleep.",
            },
            {
                id: 5,
                title: "Earn screen time",
                desc:
                    "Children are required to earn screening time by doing homework, doing housework, listening to music or doing physical exercise, playing outdoors, etc.",
            },
            {
                id: 6,
                title: "Ensure efficient screen time",
                desc:
                    "Children may be exposed to any content on the Internet, including content that is not child-friendly; in addition, the quality of children's online content should also be guaranteed.",
            },
        ],
        bloggs: [
            {
                id: 1,
                title: "Apps to limit screen time on Android and iOS.",
                image:
                    "https://famisafe.wondershare.com/images/article/2018/09/free-apps-to-limit-screen-time-on-android-and-iphone-1.png",
                path: "/apps-to-limit-screen-time",

            },
            {
                id: 2,
                title: "How to Check Screen Time on iPhone?",
                image:
                    "https://famisafe.wondershare.com/images/article/2018/09/how-to-check-screen-time-on-iphone.png",
                path: "/apps-to-limit-screen-time",
            },
            {
                id: 3,
                title: "8 Easy Tips to Reduce Screen time",
                image:
                    "https://famisafe.wondershare.com/images/article/2018/09/Kids-timer-app-best-way-to-control-time-on-iphone-and-ipad-2.png",
                path: "/apps-to-limit-screen-time",
            },
            {
                id: 4,
                title: "AAP Recommended Screen Time",
                image:
                    "https://famisafe.wondershare.com/images/article/2019/11/computer-screen-eye-strain-1.png",
                path: "/apps-to-limit-screen-time",
            },
        ],

        ///BlockPorn
        SeeHowE987asilyYou: "See How Easily You Can Block Porn on Teen's Device",
        Intodaywo98rldporno: "In today’s world, pornography is no longer limited to printed material like magazines only. Teenagers can access pornography online easily using their smart devices like phones, tablets, and PCs. Therefore, teens get exposed to pornography more and get addicted easier.Fortunately, parents can also seek modern technology's assistance like FamiSafe to block porn on teens' devices.",

        // Take a second to help us expand our adult website database
        Takease0987condtohe: "Take a second to help us expand our adult website database",
        Pornog987raphiwebsit: "Pornographic websites are growing at an unprecedented rate. Although we keep updating our adult websites database, it is still challenging to keep updated. We need your help to expand our adult websites database and better protect our kids. Take a second to write down the adult websites you know and make the internet safer for our teens.",
        Pleases9087ubm: "Please submit the adult websites you know here.",
        Bysubmitt9087ingy433: " By submitting, you agree to our EULA & Privacy Policy.",

        // Do you know how your kids get access to porn?
        Doyoukno098whowyo: "Do you know how your kids get access to porn?",
        Pornogr908aphymayex: "Pornography may exist in every aspect of your daily life. When your teens are with their phones, do you know how they get accessed to porn? The below data may shine some light on you.",
        Adultsi09tes: "#1 Adult sites:",
        Pornographicsite: "Pornographic sites or adult sites are the most common source of porn on teen's device. Incognito/private browsing allows teenagers to hide their browser history easily. Yet FamiSafe is still able to record browser history under these modes.",
        Teens9898Mostvisi: "Teen’s Most-visited Adult Websites Recorded by FamiSafe",
        Pornr098elate: " #2 Porn related messages",
        Textin098gisoneo: "Texting is one of the most common communication tools used by today's teens. Thus, it can also be used to share inappropriate information like pornographic  novels, sexual messages, or other explicit descriptions.",
        Filthyw987ordsdete: "Filthy words detected by FamiSafe’s Explicit Content Detection",
        Pornpict987ures: "#3 Porn pictures",
        Picture87sthatconta: "Pictures that contain nudity, porn-related factor, or sex are also found on teens' photo albums.",
        FamiSafe6578hasdetec: "FamiSafe has detected more than 1700 suspicious images in the past 30 days.",
        /// Manages your kids' screen time by FamiSafe
        Managesyour656ki: "Manages your kids' screen time by FamiSafe",
        Electronic67devices: " Electronic devices are too attractive to children. Without the guidance and br management of their parents, children would even be online all day long, which is not conducive to the growth and development of children. Children can access the Internet and there are many different devices, and sometimes you are not with them. This is why you need a comprehensive app like FamiSafe to help you manage your kids' screen time.",

        Howtoblockporn: "How to block porn on your teen's device using Google SafeSearch",
        GoogleSafeSearchaims: "Google SafeSearch aims to protect young kids from age-inappropriate content. It uses algorithms to detect and block suspicious images, writings, or web pages on the search result pages. For keeping kids away from pornographic websites, Google SafeSearch is a good choice, yet it is limited to Google search engine only.",

        TurnonGoogleSafeSearc: " Turn on Google SafeSearch in the Google app",
        Launchthebro: "Launch the browser on your Windows or Mac.",
        Typeinwwwgoogle: "Type in www.google.com on the address bar to open the Google page.",
        ClicktheSetting: "Click the Settings on the bottom right corner.",
        SelectSearcet: "Select Search Settings.",
        Checktheboxin: "Check the box in front of Turn on SafeSearch to enable it.",
        ClickSaveatthebo: "Click Save at the bottom of the page to save the changes.",

        OpenGoogleAppo: "Open Google App on your iPhone or Android phone.",
        Tapyourprofilepic: "Tap your profile picture at the top right and then tap Settings.",
        TapGeneralandthen: "Tap General and then Search Settings.",
        Scrolldowntofind: "Scroll down to find SafeSearch filter.",
        TapHidexplicitres: "Tap Hide explicit results to turn on SafeSearch.",

        Howtobl665ockporn: "How to block porn on your teen's device using DNS Service",
        WhatisNSDNSstandsfo: "What is DNS? DNS stands for Domain Name System. When we search for anything online, DNS translates our words to numbers that computers can read. In summary, DNS links our devices to the rest of the internet. To block porn on your teen's devices, you can change your default DNS IP to the DNS address that will filter adult websites.",
        ChangingDNStore: "Changing DNS to restrict porn access on Android",
        ChangingDNSonAndroidp: "Changing DNS on Android phones is not difficult at all. Here are the general steps you will need to follow.",
        TurnonGoogleSaf: "Turn on Google SafeSearch on Windows and Mac",
        Launchthebrowser: "Launch the browser on your Windows or Mac.",
        Typeinwwwgoogle: "Type in www.google.com on the address bar to open the Google page.",
        ClicktheSetting: "Click the Settings on the bottom right corner.",
        SelectearchSettings: "Select Search Settings.",
        Checktheboxinfront: "Check the box in front of Turn on SafeSearch to enable it.",
        ClickSaveatthebo: "Click Save at the bottom of the page to save the changes.",


        ChangeiPhoneiPad: "Change iPhone/iPad DNS to block porn sites",
        OnyourkidiPhon: "On your kid’s iPhone or iPad, go to Settings > WLAN.",
        ScrolltofindtheWi: "Scroll to find the Wi-Fi network that you would like to change the DNS server IP.",
        TapConfigureDNS: "Tap Configure DNS and choose Manual.",
        Entertheoneyou: "Enter the one you would like to use, and tap Save.",
        NoteIfyourte: "Note: If your teen used more than one internet connection, you need to change the setting separately.",

        Filterpornconte: "Filter porn content on Windows 10 by changing DNS",
        Therearethreewa: "There are three ways to change the DNS on your teen's Windows 10. Parents can make changes to the DNS using Control Panel, Command Prompt, and Settings App. Here we will introduce how to change DNS via Control Panel.",
        OnthetargetWindows: "On the target Windows device, go to Control Panel > Network and Sharing Center > Change adapter settings.",
        Youwillfindalis: "You will find a list of internet connections. Select the connection you would like to change the DNS, right-click it, and select Properties.",
        UnderThisconnec: "Under This connection uses the following items select Internet Protocol Version 4 TCP/IPV4 and then click the Properties button.",
        SelectUsethefollowi: "Select Use the following DNS server addresses option and type in the DNS server IP you would like to use.",

        Change45MacDNStop: "Change Mac DNS to prevent teens' access to porn sites",
        Whenitomesto56han: "When it comes to changing the DNS on Mac, the steps are simpler compared with changing the DNS on Windows.",
        OnyourteenMa888ccli: "On your teen's Mac, click the Apple menu on the top left corner and click System Preference > Network.",
        Alisy65tofnetworks: "A list of networks will appear on the left, select the network connection service you would like to change the DNS, click Advanced.",
        Click55DNSaddthe: "Click DNS, add the + button at the bottom of the DNS Servers list.",
        Entert65rheIPaddress: "Enter the IP address of the DNS server you would like to use.",
        ickOKwh87yhenyoufin: "Click OK when you finish the setting.",

        Howtoblockpor54nony: "How to block porn on your teens' device using a built-in content filter?",
        Contentfil45teringh: "Content filtering has also raised attention among companies like Apple, Google, and Microsoft. Content restriction is included in their latest released system versions to limit adult websites and reduce kids' exposure to age-inappropriate information.",

        TurnonContentRest: "Turn on Content Restriction on iOS device",
        Applehasintroducedt: "Apple has introduced the parental control feature since the release of iOS 12. Parents will be able to set up content restrictions using the Screen Time feature. Here are the steps to apply content restrictions on iOS devices.",
        OnyourteeniOSd: "On your teen's iOS device, go to Screen Time, tap Continue and choose \"This is My Child's [iPhone/iPad]",
        Setupaparentalpas: "Set up a parental passcode to prevent your kids from changing the setting. For devices that run on iOS 13.4 and later versions, you will need to provide your Apple ID and password.",
        TapContentPrivacyR: "Tap Content & Privacy Restrictions, turn on Content & Privacy.",
        Youcanfilterexplicitc: "You can filter explicit content, limit web content, set up age ratings for music, TV shows, books, and apps under this feature.",

        UseMicroso23ftFamilySaf: "Use Microsoft Family Safety to block access to porn",
        MicrosoftF23amilySafe: "Microsoft Family Safety is a built-in feature in the Windows system that allows parents to set up an account for kids and apply screen time restrictions and filter inappropriate content. Follow the below steps to set up a child account on the target Windows PC.",
        OnyourkidW23indows: "On your kid's Windows PC, go to Settings > Account > Family & other users.",
        ClickAddaF23amilyMe: "Click Add a Family Member and choose the type of account.",
        Enteryour23kidsMicro: "Enter your kid’s Microsoft account. If they don’t have one, you can create one for them.",
        Afteryoup23rovideallt: "After you provide all the information, click Manage family settings online to set up restrictions.",
        Underyou43rchildsa: "5Under your child’s account, select Web Browsing.",
        Turnonth34etoggleun: "Turn on the toggle under Block inappropriate websites. Then adult content will be blocked automatically.",

        UseScreen555TimeonM: "Use Screen Time on Mac to restrict teen’s access to porn",
        Ifyourkid87sareusin: "If your kids are using a Mac instead, you can also use Screen Time to restrict their access to improper online content using the Content & Privacy under Screen Time. We will introduce how to set up Content & Privacy using Family Sharing account.",
        Onyourkid000Maclo: "On your kid's Mac, log into your Mac user account and sign into your Apple ID.",
        ChooseApple09menu: "Choose Apple menu > System Preferences > Screen Time.",
        Youwillrec6eiveap: "You will receive a pop-up menu in the sidebar showing the family member in your group. Choose the one you are setting up the restriction for.",
        GotoConte76ntPri: "Go to Content & Privacy to enable the content filter on the Mac.",
        Ifyouwantt456orest: "If you want to restrict website content, click Content and then select options.",

        Setupparentalcontrol: "Set up parental controls on Google Play to Filter Content",
        Teenscanalsoaccesspo: "Teens can also access pornographic content via certain apps or games. Movies and TVs that are of different age-rating may include pornographic factors. Therefore, Google has introduced parental controls on Google Play to help parents set up control of these contents. Once enabled, parents can choose the highest content rating for app downloading, movies, TV, books, and music.",
        OnyourkidsAndroidd: "On your kid’s Android device, open the Play Store app.",
        Tapenuonthetop: "Tap Menu on the top left corner and then tap Settings > Parental Controls.",
        TurnonarentalControl: "Turn on Parental Controls.",
        SetPINtopreve: "Set a PIN to prevent your kids from changing the setting.",
        Youwillbeableto: "You will be able to set content restrictions on Apps & Games, Films, TV, and Books.",
        Taptheoneyouwoul: "Tap the one you would like to restrict and select the age rating. Then tap Save.",
        FAQAboutBlock: "FAQ About Block Porn",
        faq0s: [
            {
                question: "How will pornography affect your teens’ health?",
                answer:
                    "Getting addicted to pornography will affect both the mental and physical health of your teens. If your kids get access to porn at an early age, they will form an unhealthy understanding of sex and are more likely to practice unsafe sexual practices.",
            },
            {
                question: "Should parents talk to their teens about porn?",
                answer:
                    "Yes, parents need to talk about porn with their teens. Talking to teens about porn can help them form a correct understanding of the sexual relationship in advance and reduce the negative effects of porn.",
            },
            {
                question:
                    "What are the signs of porn addiction?",
                answer:
                    "Spending too much time watching porn. Unable to quit watching porn or limit use. Feel guilt, remorse, or depression after watching porn. Watching porn has caused harmful effects on your daily life.",

            },
            {
                question:
                    "What can parents do to help teens deal with porn addiction?",
                answer:
                    "Suppose your teens have become addicted to pornography. Here are a few things you should do. Talk to your teens openly about it, and do not blame them.Be proactive in helping them form plans to counter porn addiction.Seek support from the local commu nity. Look for available treatment centers and resources.",
            },
        ],
        //// User-Guide-For-School
        heroContent: {
            title: "FamiSafe User Guide for School Administrator",
            image: "assets/images/hero/school-banner-pic-2021.png",
        },

        introContent: {
            title: "FamiSafe User Guide",
            description:
                "The administrator needs to register an account, purchase licenses according to the number of student devices, then add students and connect their devices for management.",
            button: "Register",
        },

        guideSections: [
            {
                title: "Add Student Information",
                steps: [
                    'Open "Class" and create class information.',
                    'Click "Add Student" and enter student name and ID.',
                    "Obtain the corresponding pairing code.",
                ],
                image:
                    "https://famisafe.wondershare.com/images/v50/famisafe-add-student.png",
            },
            {
                title: "Connect Student Devices",
                description:
                    "After activating the administrator account, students must install Fammy on their devices and connect using the pairing code.",
                steps: [
                    "Students download Fammy from the official website.",
                    "Open the app and enter the pairing code.",
                    "Activate the app on the student's device.",
                ],
                image:
                    "https://famisafe.wondershare.com/images/v50/connect-the-device.png",
            },
        ],
        /// video guide
        videos: [
            {
                img: "https://famisafe.wondershare.com/images/images2022/video/how-to-videos1.png",
                title:
                    "How to Block a Facebook Page on Mobile with FamiSafe Parental Control App?",
                link: "https://www.youtube.com/watch?v=VIDEO_ID_1",
            },
            {
                img: "https://famisafe.wondershare.com/images/images2022/video/how-to-videos2.png",
                title: "How to Set Up Windows 10 Parental Controls?",
                link: "https://www.youtube.com/watch?v=VIDEO_ID_2",
            },
            {
                img: "https://famisafe.wondershare.com/images/images2022/video/how-to-videos3.png",
                title: "How to Block Inappropriate Videos on YouTube App?",
                link: "https://www.youtube.com/watch?v=VIDEO_ID_3",
            },
        ],
        videoos: [
            {
                img: "https://i3.ytimg.com/vi/caRo0dxfVC0/hqdefault.jpg",
                title:
                    "How to Block a Facebook Page on Mobile with FamiSafe Parental Control App?",
                link: "https://www.youtube.com/watch?v=VIDEO_ID_1",
            },
            {
                img: "https://famisafe.wondershare.com/images/images2022/video/influencers-videos.png",
                title: "How to Block Inappropriate Videos on YouTube App?",
                link: "https://www.youtube.com/watch?v=VIDEO_ID_2",
            },
            {
                img: "https://i3.ytimg.com/vi/4Jstty4hjQg/hqdefault.jpg",
                title: "How to Block Inappropriate Videos on YouTube App?",
                link: "https://www.youtube.com/tch?v=VIDEO_ID_3",
            },
        ],
        videooss: [
            {
                img: "https://famisafe.wondershare.com/images/v50/tiktok-video1.png",
                title:
                    "Teenager Phone Addiction Would Be Like..",
                link: "https://www.youtube.com/watch?v=VIDEO_ID_1",
            },
            {
                img: "https://famisafe.wondershare.com/images/v50/tiktok-video2.png",
                title: "3 Facts about Parenting life",
                link: "https://www.youtube.com/watch?v=VIDEO_ID_2",
            },
            {
                img: "https://famisafe.wondershare.com/images/v50/tiktok-video3.png",
                title: "Use FamiSafe to Protect Your Kids from Online Predators",
                link: "https://www.youtube.com/watch?v=VIDEO_ID_3",
            },
        ],
        // ================= VIDEO CONTENT =================
        videoList: [
            {
                img: "https://famisafe.wondershare.com/images/v50/famisafe-v50-video.png",
                title: "FamiSafe 5.0 Comes With TikTok Monitoring & School Version",
                link: "https://www.youtube.com/watch?v=VIDEO_ID_1",
            },
            {
                img: "https://img.youtube.com/vi/_L9sAGF7Uho/sddefault.jpg",
                title: "How to Check Private Browsing History?",
                link: "https://www.youtube.com/watch?v=_L9sAGF7Uho",
            },
            {
                img: "https://img.youtube.com/vi/5xUaZRsPTt8/sddefault.jpg",
                title: "Is TikTok Safe for Kids? How to Do TikTok Parental Controls?",
                link: "https://www.youtube.com/watch?v=5xUaZRsPTt8",
            },
            {
                img: "https://img.youtube.com/vi/bXK4Fs2FFmA/sddefault.jpg",
                title: "How to Track Kids' Live Location using FamiSafe?",
                link: "https://www.youtube.com/watch?v=bXK4Fs2FFmA",
            },
        ],
        FamiSafeBryuuandVideoChannel: "FamiSafe Brand Video Channel",
        Vis98tHERE: "Visit HERE",
        BestP75arentalCont: " Best Parental Control App for Android & iOS | Monitor Phone Activity Remotely 2021",
        Influ76encerVideos: "Influencer Videos",
        TikTokV345ideos: "TikTok Videos",

        //// video guidde 
        // content: {
        //     heroTitle: "FamiSafe User Guide",
        //     openGuide: "Opens User Guide",
        //     downloadPdf: "Download PDF",

        //     sectionTitle: "1. Install & Register FamiSafe on Parent's Device",

        //     sectionDescription:
        //         "Get started with FamiSafe by installing & registering a FamiSafe account on the parent's end first. You can also take a look at the app by entering with guest mode.",

        //     step1Title: "Step 1: Download FamiSafe",

        //     step1Description:
        //         "Step 1: Download FamiSafe from Google Play or App Store by searching for FamiSafe directly. Or you can download FamiSafe by Taping the below download buttons.",

        //     step2Title: "Step 2: Go through the FamiSafe new features.",

        //     step3Title:
        //         "Step 3: Register a Wondershare ID for FamiSafe or log in with an Apple, Google, and FaceBook ID.",

        //     step4Title:
        //         "Step 4: Continue as a parent and connect kids' phone with the QR code or pairing code. (Learn more in the 2nd part)",

        //     step5Title:
        //         "Step 5: After the pairing and authorization on the kids' end, set up basic parental control with the started wizard and you are good to go.",

        //     menu: [
        //         "1. Install & Register on Parent's End",
        //         "2. Tie up Kid's Device",
        //         "3. Access Management",
        //         "4. Manage Kid's Device on Parent's Phone",
        //         "5. How to uninstall FamiSafe",
        //     ],
        // },

        // ================= APP STORE LINKS =================
        appStores: [
            {
                name: "App Store",
                href: "https://apps.apple.com/us/app/famisafe-parental-control-app/id1385417904",
                icon: "/assets/images/icons/iphone.png",
            },
            {
                name: "Google Play",
                href: "https://play.google.com/store/apps/details?id=com.wondershare.famisafe",
                icon: "/assets/images/icons/google.png",
            },
        ],
        /// user giude 
        contzent: {
            titlle: "FamiSafe User Guide",
            pdfLink: "/assets/images/doc/product-user-guide.pdf",
            sidebar: [
                "1. Install & Register on Parent's End",
                "2. Tie up Kid's Device",
                "3. Access Management",
                "4. Manage Kid's Device on Parent's Phone",
                "5. How to uninstall FamiSafe",
            ],
            steps: [
                {
                    titlle: "Install & Register FamiSafe on Parent's Device",
                    description:
                        "Get started with FamiSafe by installing & registering a FamiSafe account on the parent's end first. You can also take a look at the app by entering with guest mode.",
                    sections: [
                        {
                            stepTitlle: "Step 1: Download FamiSafe",
                            description:
                                "Download FamiSafe from Google Play or App Store by searching for FamiSafe directly. Or you can download FamiSafe by tapping the buttons below.",
                        },
                        {
                            stepTitlle: "Step 2: Go through the FamiSafe new features.",
                            img: "https://famisafe.wondershare.com/images/user-guide/famisafe-install-step-2.jpg",
                        },
                        {
                            stepTitle:
                                "Step 3: Register a Wondershare ID for FamiSafe or log in with an Apple, Google, and FaceBook ID.",
                            img: "https://famisafe.wondershare.com/images/user-guide/famisafe-install-step-3.jpg",
                        },
                        {
                            stepTitlle:
                                "Step 4: Continue as a parent and connect kids' phone with the QR code or pairing code. (Learn more in the 2nd part)",
                            img: "https://famisafe.wondershare.com/images/user-guide/famisafe-install-step-4.jpg",
                        },
                        {
                            stepTitlle:
                                "Step 5: After the pairing and authorization on the kids' end, set up basic parental control with the started wizard and you are good to go.",
                            img: "https://famisafe.wondershare.com/images/user-guide/famisafe-install-step-5.jpg",
                        },
                    ],
                },
            ],
            appStores: [
                {
                    name: "App Store",
                    href: "https://apps.apple.com/us/app/famisafe-parental-control-app/id1385417904",
                    icon: "/assets/images/icons/iphone.png",
                },
                {
                    name: "Google Play",
                    href: "https://play.google.com/store/apps/details?id=com.wondershare.famisafe",
                    icon: "/assets/images/icons/google.png",
                },
            ],
        },
        OpensUserGuide: "Opens User Guide",
        DownloadPDF: "Download PDF",

        ///FASQ
        /// parental review 
        UserReview: "User Review",
        Overtheyears: " Over the years, we have heard so many voices from our users in different places,  like App Store, SNS, TikTok, etc. We want to share some of the users' stories with you.",
        AwardedbyFamo: "Awarded by Famous Organizations",
        AppStoreUserReview: "App Store User Review",
        GooglePlayUserReview: "Google Play User Review",
        k208Ktotal: "20.8K total",
        COMMENTUS: "COMMENT US",
        FacebookCommunity: "Facebook Community",
        p25Kj: "25K+",
        PeopleLikeThis: "People Like This",
        p30K: "30K+",
        Followers: "Followers",
        reviews: [
            {
                id: 1,
                name: "Goff",
                date: "19. May, 2021",
                image: "https://i.pravatar.cc/60?img=1",
                text: "I have always wanted to ensure that my kids don’t end up falling prey to cyber-crime or child pornography and FamiSafe allows me to do that",
            },
            {
                id: 2,
                name: "Bowers",
                date: "22. June, 2021",
                image: "https://i.pravatar.cc/60?img=2",
                text: "It is time I have stopped calling my kids every moment to enquire about their location because I have this app and the location tracker is just fab!",
            },
            {
                id: 3,
                name: "Temitayo",
                date: "19. June, 2021",
                image: "https://i.pravatar.cc/60?img=3",
                text: "I am very impressed with the dedication your group shows to the protection of family members. FamiSafe is a great application to keep sensitive eyes and ears from the dangers that live on the internet.",
            },
        ],
        reviewss: [
            {
                id: 1,
                name: "Slayer",
                date: "7. April, 2021",
                image: "https://i.pravatar.cc/60?img=1",
                text: "While keeping a tab of the screen time, I realized the kind of obsession my child had for playing games, and I was successful in curing it to some extent.",
            },
            {
                id: 2,
                name: "Avona",
                date: "8. june, 2021",
                image: "https://i.pravatar.cc/60?img=2",
                text: "	It is time I have stopped calling my kids every moment to enquire about their location because I have this app and the location tracker is just fab!",
            },
            {
                id: 3,
                name: "Nothasa",
                date: "9. June, 2021",
                image: "https://i.pravatar.cc/60?img=3",
                text: "I am very impressed with the dedication your group shows to the protection of family members. FamiSafe is a great application to keep sensitive eyes and ears from the dangers that live on the internet.",
            },
        ],
        reviewsse: [
            {
                id: 1,
                name: "Eileen",
                date: "19. may, 2021",
                image: "https://i.pravatar.cc/60?img=1",
                text: "We are fairly new users and so far, so good. And I used the free version then upgraded then AFTER I paid full price I got a discount code. I tried to email to apply the code and got no response. That was frustrating, but other than that it's a good app.",
            },
            {
                id: 2,
                name: "Leeann",
                date: "8. may, 2021",
                image: "https://i.pravatar.cc/60?img=2",
                text: "	I think it would be great for grandparents that has dementia and Alzheimer's, too not just the kids cuz you never know when an elderly person that has Alzheimer or dementia would forget on where they're going or forget where they live.",
            },
            {
                id: 3,
                name: "Amanda",
                date: "9. June, 2021",
                image: "https://i.pravatar.cc/60?img=3",
                text: "I love the fact that I can keep a watchful eye over the kids and still not let them know that I am doing it.",
            },
        ],
        Whatouruserssay: "What our users say",

        ///  compagine 
        awards: [
            {
                id: 1,
                image: 'https://famisafe.wondershare.com/images/images-2021/network-security-q1/share.png',
                subtitle: 'Best Parental App 2025',
                description: 'Recognized globally for providing the most reliable parental controls.',
            },
            {
                id: 2,
                image: 'https://famisafe.wondershare.com/images/famisafe/top.png',
                subtitle: 'Top Safety App',
                description: 'Awarded for promoting digital safety and well-being for kids.',
            },
            {
                id: 3,
                image: 'https://famisafe.wondershare.com/images/v50/nocyberbullying-1.png',
                subtitle: 'Innovation Award',
                description: 'Celebrated for innovative features that empower parents worldwide.',
            },
        ],
        OurMarketingCampaigns: "Our Marketing Campaigns",
        Toraiseattentionandaware: "To raise attention and awareness to educational problems like cyberbullying, internet safety",
        AtTheMoment: "At The Moment",
        Checkoutthelatestup: "Check out the latest updates and features we have added for you.",
        LearnMore: " Learn More",
        OurAchievements: " Our Achievements",
        Overtheyearso: " Over the years, our app has received recognition and awards from renowned organizations.",
        //// What's new
        content: {
            titleTop: "Version History",
            title: "What's New in FamiSafe",
            subtitle:
                "Find the latest product updates on new features, fixes, and other improvements.",

            tryBtn: "TRY 9.0 Free",
            buyBtn: "Buy Now",

            tabs: {
                ios: "iOS",
                android: "Android",
            },

            timelines: {
                ios: [
                    {
                        year: 2025,
                        versions: [
                            {
                                version: "V9.0.0",
                                date: "Dec 31, 2025",
                                changes: [
                                    "AI-powered social media monitoring: Supports 30+ platforms for child safety.",
                                    "Child device usage tracking: Monitor growth and usage patterns.",
                                    "Optimized UI for a smoother parental control experience.",
                                ],
                            },
                        ],
                    },
                    {
                        year: 2024,
                        versions: [
                            {
                                version: "V8.2.0",
                                date: "Nov 19, 2024",
                                changes: ["Improved audio monitoring for better child safety."],
                            },
                            {
                                version: "V8.1.1",
                                date: "Nov 10, 2024",
                                changes: [
                                    "Extended device monitoring with enhanced stability.",
                                ],
                            },
                        ],
                    },
                ],

                android: [
                    {
                        year: 2025,
                        versions: [
                            {
                                version: "V9.0.0",
                                date: "Dec 31, 2025",
                                changes: [
                                    "Android-specific performance improvements.",
                                    "Enhanced battery optimization for long-term usage.",
                                    "New parental dashboard layout for better monitoring.",
                                ],
                            },
                        ],
                    },
                    {
                        year: 2024,
                        versions: [
                            {
                                version: "V8.2.0",
                                date: "Nov 19, 2024",
                                changes: [
                                    "Added Android app notifications for safety alerts.",
                                ],
                            },
                            {
                                version: "V8.1.1",
                                date: "Nov 10, 2024",
                                changes: [
                                    "Improved device compatibility with latest Android OS.",
                                ],
                            },
                        ],
                    },
                ],
            },
        },
        /// footer
        /// TEXT CONTENT
        footerContent: {
            brand: {
                name: "famisafe",
                slogan: "Creativity simplified!",
            },

            sections: {
                heroProducts: {
                    title: "Hero Products",
                    links: [
                        { label: "Location Tracking (GPS)", href: "#" },
                        { label: "Screen Time Control", href: "#" },
                        { label: "App Blocking", href: "#" },
                        { label: "Website Filtering", href: "#" },
                        { label: "SOS Alert", href: "#" },
                    ],
                },

                wondershare: {
                    title: "Wondershare",
                    links: [
                        { label: "Creative Center", href: "#" },
                        { label: "About Us", href: "#" },
                        { label: "Newsroom", href: "#" },
                        { label: "Global Presence", href: "#" },
                        { label: "Founder's Speech", href: "#" },
                        { label: "Careers", href: "#" },
                        { label: "Education", href: "#" },
                    ],
                },

                exploreAI: {
                    title: "Explore AI",
                    links: [
                        { label: "AI Tools", href: "#" },
                        { label: "AI Newsroom", href: "#" },
                        { label: "Marketing", href: "#" },
                        { label: "Social Media", href: "#" },
                        { label: "Education", href: "#" },
                        { label: "Business", href: "#" },
                    ],
                },

                helpCenter: {
                    title: "Help Center",
                    links: [
                        { label: "Contact Us", href: "#" },
                        { label: "Video Community", href: "#" },
                        { label: "Support Center", href: "#" },
                        { label: "Account", href: "#" },
                    ],
                },
            },

            bottomLinks: [
                "Terms and Conditions",
                "Privacy",
                "Terms of Use",
                "Cookie Preferences",
                "Refund Policy",
                "Uninstall",
            ],

            language: "English",

            copyright: "© 2025 Wondershare. All rights reserved.",
        },
        /// annual reporet 
        reportData: [
            {
                id: "01",
                title: "Report Highlight",
                description: "Key insights and important highlights from the report."
            },
            {
                id: "02",
                title: "Introduction",
                description: "Overview of the digital parenting landscape."
            },
            {
                id: "03",
                title: "From Birth to Integration",
                items: [
                    "Generative AI in 2024",
                    "Online and Offline Connection",
                    "The First Smartphone and Tech Free",
                    "Apps Use in 2024"
                ]
            },
            {
                id: "04",
                title: "The Digital Dilemma and Freedom",
                items: [
                    "Parents' Common Concerns",
                    "A Click Away: Access to Obscenity",
                    "Close to Home: The Menace of Cyberbullying",
                    "Unmasking the Shadows: Offline Risk"
                ]
            },
            {
                id: "05",
                title: "Annual Real User Report",
                items: [
                    "Device Management",
                    "AI Monitoring",
                    "Social Media",
                    "Location Tracking",
                    "Offline Protection"
                ]
            },
            {
                id: "06",
                title: "Conclusion",
                items: [
                    "A Reliable SafeKeeper",
                    "Three Major Issues",
                    "Listening to More Voices"
                ]
            }
        ],
        content: {
            title: "Social Media",
            description:
                "As of now, the most popular social media among FamiSafe users is TikTok, followed by YouTube. The average daily usage time is 1.3 hour, accounting for 41.4% of total screen time.",
            buttonText: "Learn More",
            image: "https://famisafe.wondershare.com/images/images-2024/semi-annual-report/part5-img.png",
        },
        sections: [
            {
                id: "intro",
                title: "Introduction",
                desc: "This is our first precious meeting with you in the last six years and marks the release of our first report. To achieve this, we have invited over 10,000 FamiSafe users and their children worldwide for in-depth interviews during this summer vacation. This report provides insights into children's current behavior habits and brings together our anxieties, educational thoughts, and valuable suggestions. Finally, we have obtained a helpful guide on how families can use technology to support education in this digital age. Actively using monitoring tools is an efficient way to protect children from potential dangers in the digital world. However, parental care and companionship are the most effective ways to safeguard children's healthy growth. The report is divided into four parts: the first chapter is an introduction to the current digital world and the background of this report. The second chapter summarizes common concerns among parents, including contentious battles over screen time, sexually explicit content, and cyberbullying; the third chapter is an actual usage data report for parents and children, reflecting the wisdom of parents worldwide; and the four chapter is a conclusion, providing our outlook on the future of digital education. the User Profile of FamiSafe's Parental C",
                image: "https://famisafe.wondershare.com/images/images-2024/semi-annual-report/part8-bg-mobile.png",
            },
            {
                id: "birth",
                title: "Birth to Integration",
                desc: "The digital world is constantly evolving and is nothing short of exhilarating. With the ever-growing popularity and advancements in artificial intelligence technology, the era of interconnectivity has finally arrived.In the first half of 2024, artificial intelligence experienced explosive growth in technology, with generative AI technology remaining highly sought after, providing various services to online users. In 2023 alone, the top 50 AI tools globally generated over 24 billion visits, with an average of 2 billion monthly visits. ChatGPT had the highest usage and popularity, contributing 14.6 billion trips, accounting for over 60% of the total. (Source: Writerbuddy) It is ubiquitous in enterprises, education, and personal learning and life. At the same time, more and more AI virtual technology, AI creation, AI image beautification tools, and text-to-image technology are gaining attention. The growth of AI tools is expected to increase by nearly 40% annually from 2023 to 2030. It can be said that those who do not use AI technology will be eliminated by the times. Chatgpt's Traffic Share by Top Five Countries (Source：SimilarWeb)",
                image: "https://famisafe.wondershare.com/images/images-2024/semi-annual-report/part10-chart-mobile2.png",

            },
            {
                id: "digital",
                title: "Digital Dilemma",
                desc: "Today, online and offline connections are inseparable as a gateway to opportunities and an unseen abyss. The millennial generation's children are born into the era of the internet explosion, being the \"natives\" of the mobile internet age. Tablet computers are also commonly found in households, with at least one dedicated for children's use in 75% of European and American families. Stanford Medicine's research reveals that 25% of children own their first smartphone by the average age of 10.7. Consequently, the average screen time for smart devices among global children reaches 4-5 hour per day, a staggering figure. Children's internet use frequency is nearly as high as that of adults, and it is hard to fathom the amount of information they are exposed to daily.",
                image: "https://famisafe.wondershare.com/images/images-2024/semi-annual-report/part11-img6.png",
            },
            {
                id: "report",
                title: "User Report",
                desc: " I think kids deserve to have their own smartphones in today's society, but we can't just leave them to it. Even adults struggle to control themselves, so how can we expect kids to do it? A 45 year-old parent",
                image: "https://famisafe.wondershare.com/images/images-2024/semi-annual-report/part12-chart.png",
            },
            {
                id: "conclusion",
                title: "Conclusion",
                desc: "In 2024, FamiSafe began to donate to UNICEF to contribute its effort. With more parents joining the FamiSafe family, over 790,000 global users were added in the first half of 2024. On average, FamiSafe's parental app is used 8 times a week averagely, focusing on the weekends. FamiSafe is dedicated to helping parents alleviate their anxieties about education and lack of companionship, and safeguarding children's online and offline safety remains its essential mission in the past, present, and future.From a babbling three-year-old to an independent-thinking teenager, children may encounter countless challenges and obstacles along the way. How to lend a helping hand at each stage of their growth and effectively assist both children and parents is a matter of genuine concern.Therefore, focusing on early childhood education for ages 3-8, we concentrate on helping children resist the temptations of the digital world and avoid potential online risks. We have introduced features such as screen time management, app locking, and time scheduling to cultivate healthy device usage habits..",
                image: "https://famisafe.wondershare.com/images/images-2024/semi-annual-report/part29-img-mobile.jpg",
            },
        ],


























    },
    am: {
        // New home ///
        Wonde443rshareFa: "ዋንደርሻር ፋሚሴፍ V9.0",
        AIPare456ntalControl: " የማህበራዊ ሚዲያ ደህንነትን",
        forSo765cial: "ለማረጋገጥ",
        MediaSa86fety: "የAI የወላጅ ቁጥጥር",
        Keepaney45eon3: "ከ30 በላይ የማህበራዊ መተግበሪያዎች ላይ ይከታተሉ እና አደጋዎችን ቀደም ብለው ያግኙ።",
        AIpowere645dprotectionfo: "ለልጅዎ ዲጂታል ሕይወት በAI የሚሰራ ጥበቃ—በአንድ መተግበሪያ ውስጥ የማህበራዊ ሚዲያ ክትትል፣ የማያ ገጽ ጊዜ አስተዳደር እና የአካባቢ ክትትል።።",
        YourProfessional: "ለዲጂታል ወላጅነት የተነደፈ፣",
        MainTitle: "በAI የተጎላበተ",
        SocialAppsDetection: "የማህበራዊ መተግበሪያዎች ማወቂያ",
        CatchHiddenRisk: "ከማህበራዊ ሚዲያ የተደበቁ አደጋዎችን ያግኙ",
        AIscans30appsli: "የአይአይ (AI) ጉልበተኝነትን፣ አዳኞችን እና ጎጂ ይዘቶችን ቀደም ብሎ ለማየት እንደ ቲክቶክ እና ኢንስታግራም ያሉ ከ30 በላይ መተግበሪያዎችን ይቃኛል።",
        AIDetection: "የAI-መለየት",
        Support30Apps: "ከ30+ በላይ መተግበሪያዎችን ይደግፉ",
        StartFreeTrial: "በነጻ ሙከራ ጀምር",
        LearnMore: "ተጨማሪ ይወቁ",
        ExploreMoreParental: "ተጨማሪ የወላጅ ቁጥጥር",
        ControlFeatures: " ባህሪያትን ያስሱ",
        feaxturess: [
            {
                id: 1,
                title: "ጥሪ እና መልእክት",
                desc: "የጥሪ መዝገቦችን እና የመልእክት ይዘቶችን በመከታተል አደጋ ወይም ያልተገባ ይዘት ለመለየት ይረዳል።",
                image: "https://famisafe.wondershare.com/images/images-2025/new-index/calls-messages-bg.jpg",
                url: "https://famisafe.wondershare.com/main/sign-up"
            },
            {
                id: 2,
                title: "የስክሪን ጊዜ መቆጣጠሪያ",
                desc: "ጤናማ ዲጂታል 习惯 እንዲኖር ዕለታዊ የስክሪን ጊዜ ገደቦችን እና ሰሌዳዎችን ያዘጋጁ።",
                image: "https://famisafe.wondershare.com/images/images-2025/new-index/screen-time-bg.jpg",
                url: "https://famisafe.wondershare.com/main/sign-up"
            },
            {
                id: 3,
                title: "የስክሪን እይታ",
                desc: "የልጅዎን ስክሪን በቀጥታ ወይም በተወሰነ ጊዜ ማየት በመቻል እንቅስቃሴውን ይከታተሉ።",
                image: "https://famisafe.wondershare.com/images/images-2025/new-index/screen-viewer-bg.jpg",
                url: "https://famisafe.wondershare.com/main/sign-up"
            },
            {
                id: 4,
                title: "የመተግበሪያ ህጎች",
                desc: "ትኩረት እንዳይበታተን እና ተገቢ አጠቃቀም እንዲኖር አፕሊኬሽኖችን አግድ ወይም ፍቀድ።",
                image: "https://famisafe.wondershare.com/images/images-2025/new-index/app-rules-bg.jpg",
                url: "https://famisafe.wondershare.com/main/sign-up"
            },
            {
                id: 5,
                title: "አንድ-አቅጣጫ ድምጽ",
                desc: "የልጅዎን አካባቢ ድምጽ በመስማት ደህንነቱን ለመከታተል ይረዳል።",
                image: "https://famisafe.wondershare.com/images/images-2025/new-index/one-way-audio-bg.jpg",
                url: "https://famisafe.wondershare.com/main/sign-up"
            },
            {
                id: 6,
                title: "የእንቅስቃሴ ሪፖርት",
                desc: "የልጅዎ የመሣሪያ አጠቃቀም እና የአፕ እንቅስቃሴ ላይ ዝርዝር ሪፖርቶችን ይቀበሉ።",
                image: "https://famisafe.wondershare.com/images/images-2025/new-index/activity-report-bg.jpg",
                url: "https://famisafe.wondershare.com/main/sign-up"
            },
            {
                id: 7,
                title: "የYouTube የወላጅ መቆጣጠሪያ",
                desc: "የልጅዎን የYouTube ታሪክ በመቆጣጠር እና ያልተገባ ይዘት በመከልከል ይቆጣጠሩ።",
                image: "https://famisafe.wondershare.com/images/images-2025/new-index/youtube-parental-control-bg.jpg",
                url: "https://famisafe.wondershare.com/main/sign-up"
            },
            {
                id: 8,
                title: "የTikTok ታሪክ",
                desc: "የልጅዎን የTikTok ቪዲዮ እይታ ታሪክ በመከታተል ተገቢ ይዘት እንዲመለከት ያረጋግጡ።",
                image: "https://famisafe.wondershare.com/images/images-2025/new-index/tiktok-history-bg.jpg",
                url: "https://famisafe.wondershare.com/main/sign-up"
            },
            {
                id: 9,
                title: "ያልተገቡ ፎቶዎች",
                desc: "በልጅዎ መሣሪያ ላይ ያሉ ያልተገቡ ፎቶዎችን በመለየት ማስጠንቀቂያ ይሰጣል።",
                image: "https://famisafe.wondershare.com/images/images-2025/new-index/inappropriate-pictures-bg.jpg",
                url: "https://famisafe.wondershare.com/main/sign-up"
            },
            {
                id: 10,
                title: "ማህበራዊ መተግበሪያ ክትትል",
                desc: "30+ ማህበራዊ መድረኮችን በመከታተል እና አደገኛ ቃላትን ማስተካከል ይችላሉ።",
                image: "https://famisafe.wondershare.com/images/images-2025/new-index/social-app-detection-bg.jpg",
                url: "https://famisafe.wondershare.com/main/sign-up"
            },
            {
                id: 11,
                title: "የድር ማጣሪያ",
                desc: "ያልተገቡ ድር ጣቢያዎችን በአንድ ጠቅ መከልከል ይችላሉ።",
                image: "https://famisafe.wondershare.com/images/images-2025/new-index/web-filter-bg.jpg",
                url: "https://famisafe.wondershare.com/main/sign-up"
            },
            {
                id: 12,
                title: "የመንዳት ሪፖርት",
                desc: "የልጅዎን የመንዳት ልምድ፣ ፍጥነት እና መንገድ በመከታተል ይመዝግቡ።",
                image: "https://famisafe.wondershare.com/images/images-2025/new-index/driving-report-bg.jpg",
                url: "https://famisafe.wondershare.com/main/sign-up"
            },
            {
                id: 13,
                title: "አካባቢ መከታተል",
                desc: "የልጅዎን አካባቢ በቀጥታ ይከታተሉ፣ ታሪክ ይመልከቱ እና የደህንነት አስጠንቀቂያ ይቀበሉ።",
                image: "https://famisafe.wondershare.com/images/images-2025/new-index/location-tracking-bg.jpg",
                url: "https://famisafe.wondershare.com/main/sign-up"
            },
            {
                id: 15,
                title: "SOS ማስጠንቀቂያ",
                desc: "ልጅዎ ከአደጋ ጊዜ ቦታውን ጨምሮ ፈጣን ማስጠንቀቂያ እንዲልክ ያስችላል።",
                image: "https://famisafe.wondershare.com/images/images-2025/new-index/sos-alert-bg.jpg"
            }
        ],
        Your: "የእርስዎ",
        Family: "ቤተሰብ",
        plan: "እቅድ",
        Choose: "ይምረጡ",
        Trustedby47GGFmillions: "በሚሊዮኖች የታመነ፣ FamiSafe ወላጆች የልጆቻቸውን ዲጂታል ህይወት እንዲቆጣጠሩ ይረዳል። አሁን እቅድዎን ይምረጡ!",
        Yearly: "ዓመታዊ",
        moNTH: "/ወር",
        $59billedannually: "ETB 17,999 በዓመት ይከፈላል",
        Unlockallpremiumeatures: "ሁሉንም ፕሪሚየም ባህሪያት ይክፈቱ",
        BestVal988ue: "ምርጥ ዋጋ",
        Seeallpl232R34ans: "ሁሉንም እቅዶች ይመልከቱ",

        featureds: [
            "የስክሪን ጊዜን መቆጣጠር",
            "የሚያስጨንቁ ፎቶዎች ማስጠንቀቂያ",
            "የድር ፍለጋ ታሪክን መከታተል",
            "አካባቢን በቀጥታ መከታተል እና ታሪክን መመልከት",
            "እንደ WhatsApp፣ YouTube ያሉ ማህበራዊ መተግበሪያዎችን መከታተል",
            "ጥሪዎች፣ መልእክቶች እና ኢሜይሎችን መከታተል",
            "የቻት ታሪክ እና የአፕ ስክሪንሾቶችን መከታተል",
            "በልጆች አካባቢ ያለውን ድምጽ መከታተል",
            "ድር ጣቢያዎችን እና መተግበሪያዎችን መከልከል",
            "ጂኦፌንስ (geofence) መፍጠር እና SOS ማስጠንቀቂያ መላክ"
        ],
        awardss: [
            {
                title: "የብሔራዊ የወላጅነት ማዕከል",
                subtitle: "ዕንቁ ውጤት ተሸለመ",
                image: "https://famisafe.wondershare.com/frontpage/icon-honour-1.png",
            },
            {
                title: "የብሔራዊ የወላጅነት ማዕከል",
                subtitle: "ዕንቁ ውጤት ተሸለመ",
                image: "https://famisafe.wondershare.com/frontpage/icon-honour-2.png",
            },
            {
                title: "ለእናቶች የተሰጠ ሽልማት 2021",
                subtitle: "ብሮንዝ",
                image: "https://famisafe.wondershare.com/frontpage/icon-honour-3.png",
            },
            {
                title: "የእናቶች ምርጫ ሽልማት",
                subtitle: "የተሻለ አፈጻጸም ሽልማት",
                image: "https://famisafe.wondershare.com/frontpage/icon-honour-5.png",
            },
            {
                title: "የወላጆች ምርጫ ሽልማት 2024",
                subtitle: "ዕንቁ ውጤት ተሸለመ",
                image: "https://famisafe.wondershare.com/frontpage/icon-honour-4.png",
            },
            {
                title: "የብሔራዊ የወላጅነት ማዕከል",
                subtitle: "የማረጋገጫ ምልክት",
                image: "https://famisafe.wondershare.com/frontpage/icon-honour-7.png",
            },
        ],
        feature6s: [
            {
                mainTitle: "የማያ ገጽ ጊዜ መቆጣጠሪያ",
                subtitle: "ለልጅዎ ያለ ውጊያ ገደቦችን ያዘጋጁ",
                description:
                    "ሊበጁ የሚችሉ የማያ ገጽ ጊዜ ገደቦችን፣ የጊዜ ሰሌዳዎችን እና ዝርዝር የአጠቃቀም ሪፖርቶችን በመጠቀም ጤናማ ዲጂታል ልማዶችን ይገንቡ።",
                button1: "ነፃ ሙከራ ጀምር",
                button2: "ተጨማሪ ይውቁ",
                imageSrc:
                    "https://famisafe.wondershare.com/images/images-2025/new-index/screen-time-usage-report-img.png",
                featureIcons: [
                    { icon: BsClockFill, title: "ዕለታዊ ገደቦች" },
                    { icon: TiMessages, title: "የጥቅም ሪፖርት" },
                ],
            },
            {
                mainTitle: "የአካባቢ ክትትል",
                subtitle: "የልጅዎን ቦታ ያለ ጭንቀት ይከታተሉ",
                description:
                    "ልጆችዎ የት እንዳሉ በቀጥታ የጂፒኤስ ክትትል፣ የአካባቢ ታሪክ እና የጂኦ አጥር ማንቂያዎችን በመጠቀም ይወቁ።",
                button1: "ነፃ ሙከራ ጀምር",
                button2: "ተጨማሪ ይውቁ",
                imageSrc:
                    "https://famisafe.wondershare.com/images/images-2025/new-index/location-tracking-img.png",
                featureIcons: [
                    { icon: TiLocation, title: "በእውነት ጊዜ GPS" },
                    { icon: IoShieldCheckmark, title: "ደህንነታማ አካባቢ" },
                ],
            },
        ],

        Real: "ከእውነተኛ",
        Families: "ቤተሰቦች",
        Reals: "እውነተኛ",
        Stories: "ታሪኮች",
        Explorerealtorie: "ከዓለም አቀፍ ቤተሰቦች 35+ እውነተኛ ታሪኮችን ያስሱ እና FamiSafe ልጆቻቸውን በመስመር ላይ እንዴት እንደሚጠብቁ ይማሩ።",

        featuresse: [
            {
                id: 1,
                title: "እስከ ቤት ድረስ መከታተል",
                desc: "የጥሪ መዝገቦችን እና የመልእክት ይዘቶችን በመከታተል አደጋ ወይም ያልተገባ ይዘት ለመለየት ይረዳል።",
                image: "https://famisafe.wondershare.com/images/images-2025/new-index/location-tracking.jpg",
                url: "https://famisafe.wondershare.com/main/sign-up"
            },
            {
                id: 2,
                title: "የስክሪን ጊዜ መቆጣጠሪያ",
                desc: "ጤናማ ዲጂታል 习惯 እንዲኖር ዕለታዊ የስክሪን ጊዜ ገደቦችን እና ሰሌዳዎችን ያዘጋጁ።",
                image: "https://famisafe.wondershare.com/images/images-2025/new-index/social-app-monitoring.jpg",
                url: "https://famisafe.wondershare.com/main/sign-up"
            },
            {
                id: 3,
                title: "የስክሪን እይታ",
                desc: "የልጅዎን ስክሪን በቀጥታ ወይም በተወሰነ ጊዜ ማየት በመቻል እንቅስቃሴውን ይከታተሉ።",
                image: "https://famisafe.wondershare.com/images/images-2025/new-index/app-blocking.jpg",
                url: "https://famisafe.wondershare.com/main/sign-up"
            },
            {
                id: 4,
                title: "የመተግበሪያ ህጎች",
                desc: "ትኩረት እንዳይበታተን እና ተገቢ አጠቃቀም እንዲኖር አፕሊኬሽኖችን አግድ ወይም ፍቀድ።",
                image: "https://famisafe.wondershare.com/images/images-2025/new-index/social-app-monitoring.jpg",
                url: "https://famisafe.wondershare.com/main/sign-up"
            },
            {
                id: 5,
                title: "አንድ-አቅጣጫ ድምጽ",
                desc: "የልጅዎን አካባቢ ድምጽ በመስማት ደህንነቱን ለመከታተል ይረዳል።",
                image: "https://famisafe.wondershare.com/images/images-2025/new-index/screen-time.jpg",
                url: "https://famisafe.wondershare.com/main/sign-up"
            }
        ],

        viewallstries: "ሁሉንም ታሪኮች ይመልከቱ",

        daata: [
            {
                icon: "FaBuilding",
                value: 200,
                suffix: "+",
                label: "አገሮች",
                bg: "bg-blue-100",
                iconSize: "text-5xl",
            },
            {
                icon: "FaUsers",
                value: 35,
                suffix: "ሚሊዮን+",
                label: "ተጠቃሚዎች",
                bg: "bg-teal-100",
                iconSize: "text-5xl",
            },
            {
                icon: "BiSolidHomeHeart",
                value: 18,
                suffix: "ሺ+",
                label: "ቤተሰቦች",
                bg: "bg-oran,00",
                iconSize: "text-5xl",
            },
            {
                icon: "CiBookmarkCheck",
                value: 15,
                suffix: "ሺ+",
                label: "ተመዝጋቢዎች",
                bg: "bg-blue-100",
                iconSize: "text-5xl",
            },
        ],
        what: "ምንድን",
        parenties: "ወላጆች",
        aresaying: "እያሉ ናቸው",
        Realfeedbacksf: "ከዓለም አቀፍ የ FamiSafe ተጠቃሚ ወላጆች የተሰጠ እውነተኛ እይታ።",

        reviqews: [
            {
                id: 1,
                name: "ኤሚሊ",
                date: "ዲሴምበር 06, 2025",
                score: 4.5,
                description: "በ FamiSafe መተግበሪያ ማግኘት ተደስቻለኝ። በወንድማማቾቼ ቡድን ቻት ውስጥ አልተለየ መልእክቶችን ተያይዞ አግኝቻለሁ። ጭንቀት ነበረ ግን በፊት ተገናኝቻለሁ። እጅግ አስመራማል።",
                image: "https://famisafe.wondershare.com/images/images-2025/new-index/user1.png",
                features: { Chamonitoring: 90, Riskdetection: 80, Realtimealerts: 85, Grouptracking: 70 },
            },
            {
                id: 2,
                name: "ዴቪድ",
                date: "ማርች 19, 2025",
                score: 3.8,
                description: "በእውነት የሚሰራ የወላጅ መቆጣጠሪያ መተግበሪያ ነው። 14 ዓመት ልጄ ከፍተኛ ቴክኖሎጂ ነው፣ ግን Wondershare FamiSafe መዝግብ አልቻለም። ሌሎችን መተግበሪያዎች አስቀድሞ ሞክረዋል — ይህ እውነተኛ ነው።",
                image: "https://famisafe.wondershare.com/images/images-2025/new-index/user2.png",
                features: { Chatmonitoring: 70, Riskdetection: 60, Realtimealerts: 80, Grouptracking: 75 },
            },
            {
                id: 3,
                name: "ጄሲካ",
                date: "ኦክቶበር 22, 2025",
                score: 4.9,
                description: "እጅግ አስመራማል! FamiSafe ልጆቼ ትምህርት ሲወጡ ሁሉን በቅርብ ይጠብቃል። ትክክለኛውን መንገድ በካርታ ላይ ማየት እችላለሁ። እንደ አስተላላፊ እና ስራ ተጋላጭ ወላጅ ይህ መተግበሪያ ዋጋውን ያሳያል።",
                image: "https://famisafe.wondershare.com/images/images-2025/new-index/user3.png",
                features: { Cleanliness: 95, Comfort: 90, Location: 95, Price: 85 },
            },
            {
                id: 4,
                name: "ሮበርት",
                date: "ጁላይ 16, 2025",
                score: 4.2,
                description: "ከቀድሞ በፊት Wondershare FamiSafe ሊኖረው እንዳለ ተስፋ ነበረ። ልጄ በስልኩ ምን እንደሚያደርግ በትክክል ማየት እችላለሁ — መተግበሪያዎች፣ YouTube ሁሉ። ሌላ ገምገማ የለም። አሁን እንደ ተቀጣ ትምህርት ማድረግ ተጀምሯል።",
                image: "https://famisafe.wondershare.com/images/images-2025/new-index/user4.png",
                features: { Cleanliness: 85, Comfort: 75, Location: 80, Price: 70 },
            },
        ],

        WorksGreat: " ከFamiSafe ጋር ",
        withFamiSafe: "በጥሩ ሁኔታ ይሰራል",

        JoinOur: "ማህበረሰባችንን",
        Community: "ይቀላቀሉ",
        StartPro35tecting: "ዛሬውኑ ቤተሰብዎን",
        Your32345FamilyToday: "መጠበቅ ይጀምሩ",
        Join35millionfamil: "ልጆቻቸውን በመስመር ላይ እንዲያስቀመጡ ታመኑ ያሉ 35 ሚሊዮን ቤተሰቦች ጋር ይቀላቀሉ። ነፃ ይሞክሩ!",


        // feaptures: [
        //     {
        //         mainTitle: "የማያ ገጽ ጊዜ መቆጣጠሪያ",
        //         subtitle: "ለልጅዎ ያለ ውጊያ ገደቦችን ያዘጋጁ",
        //         description: "ሊበጁ የሚችሉ የማያ ገጽ ጊዜ ገደቦችን፣ የጊዜ ሰሌዳዎችን እና ዝርዝር የአጠቃቀም ሪፖርቶችን በመጠቀም ጤናማ ዲጂታል ልማዶችን ይገንቡ።",
        //         button1: "ነፃ ሙከራ ጀምር",
        //         button2: "ተጨማሪ መረጃ",
        //         imageSrc: "https://famisafe.wondershare.com/images/images-2025/new-index/screen-time-usage-report-img.png",
        //         featureIcons: [
        //             { icon: "clock", title: "ዕለታዊ ገደቦች" },
        //             { icon: "message", title: "የአጠቃቀም ሪፖርት" },
        //         ]
        //     },
        //     {
        //         mainTitle: "የአካባቢ ክትትል",
        //         subtitle: "የልጅዎን ቦታ ያለ ጭንቀት ይከታተሉ",
        //         description:
        //             "ልጆችዎ የት እንዳሉ በቀጥታ የጂፒኤስ ክትትል፣ የአካባቢ ታሪክ እና የጂኦ አጥር ማንቂያዎችን በመጠቀም ይወቁ።",
        //         button1: "ነፃ ሙከራ ጀምር",
        //         button2: "ተጨማሪ መረጃ",
        //         imageSrc: "https://famisafe.wondershare.com/images/images-2025/new-index/location-tracking-img.png",
        //         featureIcons: [
        //             { icon: <TiLocation className="text-blue-500" />, title: "ቀጥታ GPS" },
        //             { icon: <IoShieldCheckmark className="text-blue-500" />, title: "ደህንነት ዞን" },
        //         ],
        //     },
        // ],
        // End New home ///
        FamiSafe: "ፋሚሴፍ",
        MoreParentalControlFeatures: "ለማህበራዊ ሚዲያ ",
        ParentalControlApp: "ለማህበራዊ ሚድያ ደህንነት,",
        PoweredbyAI: " ",
        NextGen: "AI የወላጆች መቆጣጠሪያ ",
        Products: "ምርቶች",
        Features: "ባህሪያት",
        Blog: "ጦማር",
        Resource: "ግባዓት",
        TryItFree: "በነጻ ይሞኩሩ",
        download: "ይጫኑ",
        Pricing: "የዋጋ አወጣት",
        wachdeviceused: "የቆይታ መሣሪያ አጠቃቀም",
        spen: "የወላጆች መቆጣጠሪያ መተግበሪያ",
        Subtitles: "ልጆችዎን ያተኩሩ፣ መምራት እና መደገፍ ያደረግ",
        title: "በኤአይ የተጎላበተ የቀጣይ ትውልድ ",
        seetittle: "የዲጂታል የወላጆች ችግሮችን በቀላሉ ይፈቱ — የእርስዎን እረፍት በማንኛውም ጊዜ፣ በማንኛውም ቦታ ይቆጣጠሩ።",
        StartFreeTrial: "ነጻ ሙከራ ይጀምሩ",
        BuyNow: "አሁን ይግዙ",
        Availableon: "በነዚህ ላይ ይገኛሉ",
        description: "ቤተሰቦቻችሁን በጥበቃ የሚሰጥ የወላጆች መቆጣጠሪያ መሣሪያ እንዲጠቀሙ ያደርጉ፣ የስክሪን ጊዜን ለመቆጣጠር፣ አካባቢዎችን ለመከታተል፣ እና የሚያስነቃቂ መተግበሪያዎችን ለመከፍት — በማንኛውም ጊዜ፣ በማንኛውም ቦታ።",
        tabData: [
            {
                title: "የመሣሪያ አጠቃቀምን ይመልከቱ",
                content: 'famisafe.wondershare.com/images/images-2025/index/watch-device-use.png',

                cards: [
                    {
                        // icon: <FaClipboardList />,
                        title: "ዕለታዊ ሪፖርቶችን ይመልከቱ",
                        desc: "በእውነቱ ምን ያህል የስክሪን ጊዜ ነበራቸው? በአንድ ቀላል ዘገባ የልጅዎን ዲጂታል ቀን ሙሉ ምስል ያግኙ።",
                        position: "top-10 left-24",
                    },
                    {
                        // icon: <FaClipboardList />,
                        title: "ጥሪዎችን እና ውይይቶችን ተቆጣጠር",
                        desc: "ልጅዎ ከማን ጋር እንደሚነጋገር ተጨንቀዋል? ግላዊነታቸውን በሚያከብሩበት ጊዜ ስለ ግንኙነቶቻቸው ይወቁ።",
                        position: "top-50 left-24",
                    },
                    {
                        // icon: <FaComments />,
                        title: "የቀጥታ ማያ ገጽ ያንሱ",
                        desc: "አሁን ምን እየሆነ እንዳለ ማየት አለብህ? የልጅህ መሳሪያ እንቅስቃሴ ላይ የአሁናዊ ታይነትን አግኝ።",
                        position: "bottom-20 right-20",
                    },
                ],
            },

            {
                title: "መመሪያ የመስመር ላይ ይዘት",
                content: 'https://famisafe.wondershare.com/images/images-2025/index/guide-online-content.png',

                cards: [
                    {
                        // icon: <FaClipboardList />,
                        title: "የማጣሪያ ጣቢያዎች",
                        desc: "በመስመር ላይ ስለ ተገቢ ያልሆነ ይዘት ያሳስበዎታል? ልጅዎን ከመድረሳቸው በፊት ጎጂ ድር ጣቢያዎችን በራስ-ሰር ያግዱ።",
                        position: "top-10 left-24",
                    },
                    {
                        // icon: <FaComments />,
                        title: "መተግበሪያዎችን አግድ",
                        desc: "ጨዋታ የቤት ስራ ጊዜ እየወሰደ ነው? ሚዛን በሚያስተምር ብልጥ መተግበሪያ አስተዳደር ጤናማ ድንበሮችን ያዘጋጁ።",
                        position: "bottom-60 right-35",
                    }, {
                        // icon: <FaComments />,
                        title: "አደጋዎችን ያግኙ",
                        desc: "የትኞቹን ቪዲዮዎች እየተመለከቱ እንደሆኑ ተጨንቀዋል? በ AI የተጎላበተ ማወቂያ አደገኛ ሊሆን የሚችል ይዘትን ያስጠነቅቀዎታል።",
                        position: "bottom-20 right-20",
                    },
                ],
            },

            {
                title: "በእውነተኛ ህይወት ይከላከሉ",
                content: 'https://famisafe.wondershare.com/images/images-2025/index/protect-in-real-life.png',
                cards: [
                    {
                        // icon: <FaClipboardList />,
                        title: "የቀጥታ አካባቢን ይከታተሉ",
                        desc: "ከእግር ኳስ ልምምድ ዘግይተው እየሮጡ ነው? ልጅዎ የት እንዳለ እና መቼ በደህና ቤት እንደሚሆኑ ይወቁ።",
                        position: "top-10 left-24",
                    },
                    {
                        // icon: <FaClipboardList />,
                        title: "የኤስኦኤስ ማንቂያዎችን ተቀበል",
                        desc: "እርዳታ ቢፈልጉ እና መደወል ካልቻሉስ? የአደጋ ጊዜ ማንቂያዎች እርስዎን መቼ እንደሚፈልጉ ለማወቅ የመጀመሪያው መሆንዎን ያረጋግጣሉ።",
                        position: "top-50 left-24",
                    },
                    {
                        // icon: <FaComments />,
                        title: "የማሽከርከር ደህንነትን ያረጋግጡ",
                        desc: "በቤተሰብ ውስጥ አዲስ ሹፌር? የመንዳት ልማዶችን ይቆጣጠሩ እና በመንገድ ላይ ደህንነታቸውን ለመጠበቅ እንዲረዷቸው ሪፖርቶችን ያግኙ።",
                        position: "bottom-20 right-20",
                    },
                ],
            },
        ],
        slidess: [
            {
                title: "የስክሪን ጊዜ",
                text: "ጤናማ ዲጂታል ልምዶችን ለማራመድ ዕለታዊ የስክሪን ጊዜ ገደቦችን እና መርሃ ግብሮችን ያቀናብሩ።",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/screen-time.png',
            },
            {
                title: "ባለአንድ መንገድ ኦዲዮ",
                text: "ደህንነትን ለማረጋገጥ የልጅዎን አካባቢ በቅጽበት ያዳምጡ።",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/one-way-audio.png',
            },
            {
                title: "አካባቢን መከታተል",
                text: "ለአእምሮ ሰላም የልጅዎን ቅጽበታዊ አካባቢ ይከታተሉ።",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/location-tracking.png',
            },
            {
                title: "ስክሪን መመልከቻ",
                text: "በመስመር ላይ እነሱን ለመጠበቅ ልጅዎ በመሣሪያቸው ላይ የሚያዩትን ይመልከቱ።",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/screen-viewer.png',
            },
            {
                title: "የመተግበሪያ ህጎች",
                text: "ለመተግበሪያዎች ደንቦችን ያቀናብሩ እና አግባብ ያልሆነ ይዘትን በብቃት ያግዱ።",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/app-rules.png',
            },
        ],
        slides: [
            {
                title: "የቲክ ቶክ ታሪክ",
                desc: "የቲኪክ አጠቃቀምን እና ታሪክን ተቆጣጠር።",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/tiktok-history.png',
            },
            {
                title: "ተገቢ ያልሆነ ቪዲዮ",
                desc: "ግልጽ ምስሎችን እና ቪዲዮዎችን ያግኙ።",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/inappropriate-pictures.png',
            },
            {
                title: "የድር ማጣሪያ",
                desc: "ጎጂ ድር ጣቢያዎችን በእውነተኛ ጊዜ አግድ።",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/web-filter.png',
            },
            {
                title: "SOS ማስጠንቀቂያ",
                desc: "ለወላጆች ፈጣን የአደጋ ጊዜ ማንቂያዎች።",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/sos-alert.png',
            },
            {
                title: "ማህበራዊ መተግበሪያ ማወቂያ",
                desc: "ማንኛውንም ግልጽ ወይም አፀያፊ ቃላትን ለማግኘት ማህበራዊ መተግበሪያዎችን እና YouTubeን ይቆጣጠሩ። አጸያፊ ቃላትን በልጅዎ መሣሪያ ላይ ሲገኙ ማንቂያ ለማግኘት ያዘጋጁ።",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/social-app-detection.png',
            },
            {
                title: "ጥሪዎች እና መልዕክቶች",
                desc: "የጥሪ እና የኤስኤምኤስ እንቅስቃሴን ተቆጣጠር።",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/calls-messages.png',
            },
            {
                title: "የእንቅስቃሴ ሪፖርት",
                desc: "ዕለታዊ እና ሳምንታዊ እንቅስቃሴ ግንዛቤዎች።",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/activity-report.png',
            },
            {
                title: "የዩቲዩብ ቁጥጥር",
                desc: "የዩቲዩብ ስክሪን ጊዜን በጥንቃቄ ያስተዳድሩ።",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/youtube-parental-control.png',
            },
        ],

        sliddes: [
            {
                title: "የቲክ ቶክ ታሪክ",
                desc: "የቲኪክ አጠቃቀምን እና ታሪክን ተቆጣጠር።",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/tiktok-history.png',
            },
            {
                title: "ተገቢ ያልሆነ ቪዲዮ",
                desc: "ግልጽ ምስሎችን እና ቪዲዮዎችን ያግኙ።",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/inappropriate-pictures.png',
            },
            {
                title: "የድር ማጣሪያ",
                desc: "ጎጂ ድር ጣቢያዎችን በእውነተኛ ጊዜ አግድ።",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/web-filter.png',
            },
            {
                title: "SOS ማስጠንቀቂያ",
                desc: "ለወላጆች ፈጣን የአደጋ ጊዜ ማንቂያዎች።",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/sos-alert.png',
            },
            {
                title: "ማህበራዊ መተግበሪያ ማወቂያ",
                desc: "ማንኛውንም ግልጽ ወይም አፀያፊ ቃላትን ለማግኘት ማህበራዊ መተግበሪያዎችን እና YouTubeን ይቆጣጠሩ። አጸያፊ ቃላትን በልጅዎ መሣሪያ ላይ ሲገኙ ማንቂያ ለማግኘት ያዘጋጁ።",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/social-app-detection.png',
            },
            {
                title: "ጥሪዎች እና መልዕክቶች",
                desc: "የጥሪ እና የኤስኤምኤስ እንቅስቃሴን ተቆጣጠር።",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/calls-messages.png',
            },
            {
                title: "የእንቅስቃሴ ሪፖርት",
                desc: "ዕለታዊ እና ሳምንታዊ እንቅስቃሴ ግንዛቤዎች።",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/activity-report.png',
            },
            {
                title: "የዩቲዩብ ቁጥጥር",
                desc: "የዩቲዩብ ስክሪን ጊዜን በጥንቃቄ ያስተዳድሩ።",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/youtube-parental-control.png',
            },
        ],

        TryFree: "ነጻ ይሞክሩ",
        BuynNow: "አሁኑኑ ይግዙ",
        TryitFrees: "በነጻ ይሞክሩት",
        StartFreeTrials: "ነጻ ሙከራ ጀምር",
        BuyNoww: "አሁን ይግዙ",
        SecuredSharing: "ደህንነቱ የተጠበቀ ማጋራት",
        SeeLovedOnesat: "የሚወዷቸውን በአንድ ላይ",
        Hands: "በእጅዎ",
        Geonectionprotects: "ጂኦኔክሽን ይጠብቃል፡- Geonection የእርስዎን አካባቢ ማጋራት ከጫፍ እስከ ጫፍ ምስጠራን ይከላከላል።",
        RealStoriesfromParents: "እውነተኛ ታሪኮች ከወላጆች",
        // Stories
        stories: [
            {
                tid: 1,
                image: 'https://famisafe.wondershare.com/images/images-2025/index/story-1.jpg',
                quote: "ከ 8 000 ኪ.ሜ ርቀት ላይ እንኳን, በቤት ስራ ሰዓቶች ውስጥ ጨዋታዎችን በራስ-ሰር ቆልፍ እና ለእረፍት እከፍታለሁ",
                name: "Omer -K",
                role: "አባቴ በውጭ አገር በመስራት ላይ",
            },
            {
                tid: 2,
                image: 'https://famisafe.wondershare.com/images/images-2025/index/story-2.jpg',
                quote: "FamiSafe በልጄ ውይይት ላይ 'ራሴን ጎዳ' የሚል ምልክት አቅርቧል። ወደ ውስጥ ገባሁ፣ እና በዚያው ቀን ረድቶታል።",
                name: "Claire B",
                role: "የ 14 ዓመት ልጅ እናት",
            },
            {
                tid: 3,
                image: 'https://famisafe.wondershare.com/images/images-2025/index/story-3.jpg',
                quote: "ልጄን መፈተሽ ልፋት እና የሚያረጋጋ ነው።",
                name: "Leah G",
                role: "የ ADHD ጨዋታ እናት",

            },
            {
                tid: 4,
                image: 'https://famisafe.wondershare.com/images/images-2025/index/story-4.jpg',
                quote: "እንደ አያት እንኳን እኔ እንደተገናኘሁ እና እንዳውቅ እቆያለሁ።",
                name: "Robert K",
                role: "አባቴ በውጭ አገር በመስራት ላይ",

            },
            {
                tid: 4,
                image: 'https://famisafe.wondershare.com/images/images-2025/index/story-5.jpg',
                quote: "“የልጅ ልጄ ከትምህርት ቤት በኋላ መልስ ሳትሰጥ ስትቀር፣የፋሚሴፌ የእውነተኛ ጊዜ ካርታ አሁንም በኦርኬስትራ ልምምድ ላይ እንዳለች አሳይቷል። በጨረፍታ የድንጋጤ ጥሪን አተረፈ እና አጠቃላይ የአእምሮ ሰላም ሰጠኝ።”",
                name: "David-T",
                role: "የ 8 ዓመት ልጅ አያት።",
            },
        ],
        // Stories end

        ViewAllStories: "ሁሉንም ታሪኮች ይመልከቱ",
        // products Driopdown
        cardss: [
            {
                title: "ፋሚሴፍ🔥 👑",
                desc: "የወላጅ መቆጣጠሪያ መፍትሄ",
                img: '/assets/images/icons/home-icon.svg',
                primary: true,
                href: "/famisafe", // Official FamiSafe
            },

            {
                title: "FamiSafe for School, ",
                desc: "School & Parent Sync",
                img: 'https://famisafe.wondershare.com/images/images-2025/famisafe/school-icon.svg',
                href: "/school", // School link
                target: "_blank",
            },
            {
                title: "የቦታ ቀጥታ ማጋራት",
                desc: "የቦታ ቀጥታ መካፈል",
                img: '/assets/images/icons/geonection-icon.svg',
                href: "https://geonection.com/", // Geonection link
                target: "_blank",
            },
        ],
        // products dropdown end

        // features section
        columns: [
            {
                title: "የመሣሪያ እንቅስቃሴ",
                bg: "#f5f1ff",
                features: [
                    { title: "ጥሪዎች እና መልዕክቶች", newTag: true, link: "/Call-meassage" },
                    { title: "የስክሪን ጊዜ", newTag: true, link: "/Screen-Time" },
                    { title: "የስክሪን እይታ", link: "/Screen-Viewer" },
                    { title: "የመተግበሪያ ህጎች", link: "/AppRole" },
                    { title: "አንድ-አቅጣጫ ድምፅ", newTag: true, link: "/One-way-Audio" },
                    { title: "የእንቅስቃሴ ሪፖርት", link: "/Activity-Report" },
                ],
            },
            {
                title: "የይዘት ደህንነት",
                bg: "#fff8e9",
                features: [
                    { title: "የYouTube የወላጅ ቁጥጥር", link: "/youtube-parental-controls" },
                    { title: "የTikTok ታሪክ", link: "/tiktok-history" },
                    { title: "ያልተገቡ ምስሎች", link: "/detect-suspicious-text" },
                    { title: "የማህበራዊ መተግበሪያ መለየት", link: "/block-websites" },
                    { title: "የድህረገጽ ማጣሪያ", link: "/Web-Filter" },
                    { title: "የአሳሽ ታሪክ", link: "/Browser-History" },
                ],
            },
            {
                title: "የአካባቢ አገልግሎት",
                bg: "#f1ffef",
                features: [
                    { title: "የአካባቢ ክትትል", link: "/Locaton-Tracking" },
                    { title: "የመንዳት ሪፖርት", link: "/Driving-Report" },
                    { title: "SOS ማስጠንቀቂያ", newTag: true, link: "/Sos-Alart" },
                ],
            },
        ],
        // Blog Dropdown
        blogData: [
            {
                title: "የአካባቢ መከታተያ",
                links: [
                    { label: "ሞባይል መከታተያ", target: "_blank", href: "/Mobile-Tracking" },
                    { label: "የአካባቢ መጋራት", target: "_blank", href: "/Location-Sharing" },
                    { label: "የቤተሰብ መከታተያ", target: "_blank", href: "/Family-Tracking" },
                    { label: "የታዳጊዎች መንዳት", target: "_blank", href: "/Teen-Driving" },
                ],
            },
            {
                title: "የስክሪን ጊዜ",
                links: [
                    { label: "የስክሪን ጊዜ ቁጥጥር", href: "/Screen-Time-Blogs" },
                    { label: "የiOS የወላጅ ቁጥጥር", href: "/Ios-Parental-Controller" },
                    { label: "የAndroid የወላጅ ቁጥጥር", href: "/Andriod-Parental-Controller" },
                    { label: "የዴስክቶፕ ቁጥጥር", href: "/DeskTop-Parental-Controller" },
                    { label: "የChromebook ቁጥጥር", href: "/ChromeBook-Controller" },
                ],
            },
            {
                title: "አፕ መከላከያ",
                links: [
                    { label: "ጨዋታዎችን አግድ", href: "/Block-Game" },
                    { label: "YouTube አግድ", href: "/Block-Youtube" },
                    { label: "መተግበሪያዎችን አግድ", href: "/App-Blocks" },
                    { label: "የአዋቂ ድረ-ገፆችን አግድ", href: "/Block-Porn" },
                ],
            },
            {
                title: "የእንቅስቃሴ ክትትል",
                links: [
                    { label: "የድህረገጽ ማጣሪያ", href: "/Web-filtering" },
                    { label: "የስልክ ክትትል", href: "/Phone-monitering" },
                    { label: "የታዳጊዎች ሴክስቲንግ", href: "/Teen-Sexting" },
                    { label: "አንቲ-ቡሊንግ", href: "/Anti-Billing" },
                ],
            },
            {
                title: "የወላጅነት እውቀት",
                links: [
                    { label: "የወላጅነት ምክሮች", href: "/Parenting-Tips" },
                    { label: "የታዳጊ ስላንግ", href: "/Teen-Slang" },
                    { label: "ታዋቂ መተግበሪያዎች", href: "/Trainding-AppRivew" },
                    { label: "የወላጅ መተግበሪያ ቁጥጥር", href: "/Parental-App-control " },
                ],
            },
            {
                readMore: "ተጨማሪ ያንብቡ >",
                cta: "ነፃ ኦንላይን ይሞክሩ ☁️",
            }
        ],

        // RESOURCE DROPDOWN
        resourceDropdownData: {
            featuredTopics: {
                title: "ተመራጭ ርዕሶች",
                items: [
                    { label: "የስክሪን ጊዜን ማመጣጠን", href: "/Screentime-For-Kids" },
                    { label: "የዲጂታል ልጆች ደህንነት", href: "/Internet-Safty" },
                    { label: "ፖርን አግድ", href: "/Block-Porn" },
                    { label: "ሴክስቶርሽንን አቁም", href: "/Compagin-Stops" },
                    { label: "የAI አደጋ እንቅስቃሴ", href: "/Artifical-Intelligence" },
                    { label: "ሳይበር ቡሊንግን አቁም", href: "#" },
                    { label: "የታዳጊዎች ሴክስቲንግ", href: "/Teen-Sexting" },
                ],
            },

            guide: {
                title: "የFamiSafe መመሪያ",
                items: [
                    { label: "የተጠቃሚ መመሪያ", href: "/User-Guide" },
                    { label: "የት/ቤት መመሪያ", href: "/User-Guide-For-School" },
                    { label: "የቪዲዮ መመሪያ", href: "/Video-Guide" },
                    { label: "የተጠቃሚ ጥያቄዎች (FAQ)", href: "/User-FAQS" },
                ],
            },

            explore: {
                title: "ያስሱ",
                items: [
                    { label: "አዲስ ዜናዎች", href: "/What-is-News" },
                    { label: "የወላጆች ግምገማ", href: "/Parental-Review" },
                    { label: "የብራንድ ካምፔኖች", href: "/Campaigns" },
                    { label: "የሚዲያ ግምገማ", href: "/Midea-Reviw" },
                    { label: "ዓመታዊ ሪፖርት", href: "/Annual-Report" },
                    { label: "የቤተሰብ ታሪኮች", href: "/Family-Stories" },
                ],
            },

            actions: {
                downloadText: "አፕ አውርድ",
                tryFreeText: "ነፃ ኦንላይን ይሞክሩ",
                tryFreeLink: "#",
            },
        },
        // ማስታወሻዎች
        testimonials: [
            {
                id: "t1",
                name: "Renée Wooldridge",
                image: 'https://i.pravatar.cc/100?img=47',
                text: "ችግረኛዬ ተፈታል እና አዲሱን ባህሪዎች እወዳለሁ። የልጄ ልጅ የደህንነት መንገድ አላት ተግባር ለመክፈት መንገድ ተገናኝቷል። አስፈሪው ነገር እንዲህ ነው፤ እሱ ጉግል ፕሌይ ስቶር መክፈት እና እኔ እፈልጋለሁ ያልሆኑትን መተግበሪያዎች ማውረድ ይችላል።",
            },
            {
                id: "t2",
                name: "John Gilman",
                image: 'https://i.pravatar.cc/100?img=12',
                text: "በሕይወቴ የተሞከርኩት ችሎታ ያለው የፖርን መከላከያ መተግበሪያ ነው። እኔ ከሌሎች መተግበሪያዎች ጋርም ተጠቀምኩ ነበር ነገር ግን ይህ ያለ ምቹነት፣ ፈጣንነት፣ ታማኝነት እና በተግባር ተጠቃሚነት እንደሆነ ማግኘት ተቻለኝ።",
            },
            {
                id: "t3",
                name: "Uxprjt Lattka",
                image: 'https://i.pravatar.cc/100?img=32',
                text: "የልጄን ፎቶ ጋለሪ ማሳየት አስተስማሚ ባህሪ ነው። በሙሉ እወዳለሁ።",
            },
            {
                id: "t4",
                name: "Maria Smith",
                image: 'https://i.pravatar.cc/100?img=26',
                text: "የልጄን ፎቶ ጋለሪ ማሳየት አስተስማሚ ባህሪ ነው ይህ የወላጅ መቆጣጠሪያ መተግበሪያ የሚሰጠው። በሙሉ እወዳለሁ። እንዲሁም የስክሪን ጊዜ መከታተያን ብዙ ጊዜ እጠቀማለሁ።",
            },
            {
                id: "t5",
                name: "Kayela Huppman",
                image: 'https://i.pravatar.cc/100?img=28',
                text: "ጥሩ መተግበሪያ ነው፣ ለልጆቼ ሁለቱም ጊዜ አጠቃላይ ነበር። አንዳንድ ባህሪዎችን ለመከታተል እንደጨመረው በጣም ደስ ብሎኛል። በተወሰኑ ሰዓታት እንደሚገቡበት ቦታ ማን እንደሚኖሩ መከታተል እንደቻልኩ እወዳለሁ።",
            },
        ],
        WhatParentsAreSayingAboutFamiSafe: "ወላጆች የሚናገሩት ስለ ",
        Realexperiences: "ልጆቻቸውን መስመር ላይ ደህና ለማድረግ የሚጠቀሙት ቤተሰቦች እውነተኛ ልምዶች።",
        Countries: "አገሮች",
        Users: "ተጠቃሚዎች",
        Families: "ቤተሰቦች",
        Subscribers: "ደንበኞች",
        GrowTogether: "ከ FamiSafe ማህበር ጋር ተቀላቀሉ እና አብረው ይሂዱ",
        JoinUsonSocialMedia: "በማህበራዊ ሚዲያ ላይ ይቀላቀሉን",
        cardses: [
            {
                title: "አዲስ ነገሮች",
                desc: "ዲጂታል ወላጅነትን ከዚህ በፊት ይልቅ ቀላል የሚያደርጉ ብልህ መሳሪያዎች፣ የተሻሻሉ ባህሪያት እና አስደሳች ዝማኔዎችን ያግኙ።",
                gradient: "from-pink-100 via-purple-200 to-indigo-300",
                image:
                    'https://famisafe.wondershare.com/images/images-2025/index/what-new-mobile.png',
                link: "/whats-new",
            },
            {
                title: "መመሪያዎች",
                desc: "ወላጆችና ልጆች FamiSafeን በቀላሉ እንዲጠቀሙ የሚረዱ ደረጃ በደረጃ መመሪያዎች፣ ከ24 ሰዓት የመስመር ላይ ድጋፍ ጋር።",
                gradient: "from-indigo-200 via-blue-200 to-purple-200",
                image:
                    'https://famisafe.wondershare.com/images/images-2025/index/tutorials-mobile.png',
                link: "/tutorials",
            },
            {
                title: "ብሎጎች",
                desc: "ቤተሰቦች ልጆቻቸውን በመስመር ላይ እንዲጠብቁ የሚረዱ የባለሙያ የወላጅነት ምክሮችና አስተያየቶች።",
                gradient: "from-blue-100 via-cyan-200 to-teal-200",
                image:
                    'https://famisafe.wondershare.com/images/images-2025/index/blogs-mobile.png',
                link: "/blogs",
            },
            {
                title: "ማህበራዊ ሚዲያ",
                social: true,
            },
        ],
        TrustedProtection: "የታመነ ጥበቃ",
        FamiSafeuses: "FamiSafe የባንክ ደረጃ ምስጠራ ይጠቀማል፣ የልጅዎ መረጃ ፈጽሞ ደህንነቱ የተጠበቀ እና ለእርስዎ ብቻ ተደራሽ እንዲሆን ያረጋግጣል።",
        PrivacyPromise: "የግላዊነት ቃል ኪዳን",
        Zerodatacollection: "ምንም ዓይነት የመረጃ ስብስብ የለም፣ ደህንነቱ የተጠበቀ የአካባቢ ማከማቻ እና የGDPR እና COPPA መመሪያዎችን በጥብቅ መከተል — የቤተሰብዎ ግላዊነት ሁልጊዜ ቀዳሚ ነው።",
        StartFamiSafeParentalControls: "ዛሬ FamiSafe የወላጅ ቁጥጥርን ይጀምሩ",
        Trustedparents: "በወላጆች የታመነ፣ ለቤተሰቦች የተገነባ፣ ዲጂታል ወላጅነትን እንዲቀላል የተዘጋጀ።",
        // src/Data/footerData.js
        footerData: [
            {
                brand: {
                    logo: "https://neveragain.allstatics.com/2019/assets/icon/logo/famisafe-square.svg",
                    name: "famisafe",
                    tagline: "ፍጥነት ቀላል አድርገን ፍጠር!"
                },
            },
            {
                socialLinks: [
                    { icon: "FaFacebookF", href: "#" },
                    { icon: "FaInstagram", href: "#" },
                    { icon: "FaTwitter", href: "#" },
                    { icon: "FaYoutube", href: "#" },
                    { icon: "FaEllipsisH", href: "#" },
                ],
            },
            {
                sections: [
                    {
                        title: "ዋና ምርቶች",
                        links: [
                            { label: "ReelMate AI", href: "#" },
                            { label: "Filmora", href: "#" },
                            { label: "Recoverit", href: "#" },
                            { label: "Dr.Fone", href: "#" },
                            { label: "PDFelement", href: "#" },
                            { label: "FamiSafe", href: "#" },
                            { label: "ሁሉም ምርቶች", href: "#" },
                        ],
                    },
                    {
                        title: "Wondershare",
                        links: [
                            { label: "Creative Center", href: "#" },
                            { label: "ስለ እኛ", href: "#" },
                            { label: "የዜና ክፍል", href: "#" },
                            { label: "ዓለም አቀፍ መገኛ", href: "#" },
                            { label: "የመምህሩ ንግግር", href: "#" },
                            { label: "ስራ አስፈፃሚ ክፍል", href: "#" },
                            { label: "ትምህርት", href: "#" },
                        ],
                    },
                    {
                        title: "AIን አስማት",
                        links: [
                            { label: "AI መሣሪያዎች", href: "#" },
                            { label: "AI የዜና ክፍል", href: "#" },
                            { label: "ማስታወቂያ", href: "#" },
                            { label: "ማህበራዊ መረጃ", href: "#" },
                            { label: "ትምህርት", href: "#" },
                            { label: "ቢዝነስ", href: "#" },
                        ],
                    },
                    {
                        title: "የረድት ማዕከል",
                        links: [
                            { label: "አገናኝን ያግኙ", href: "#" },
                            { label: "የቪዲዮ ማህበር", href: "#" },
                            { label: "የድጋፍ ማዕከል", href: "#" },
                            { label: "መለያ", href: "#" },
                        ],
                    },
                ],
            },
            {
                bottomLinks: [
                    { label: "ውሎች እና  şartları", href: "#" },
                    { label: "የግላዊነት ፖሊሲ", href: "#" },
                    { label: "የመጠቀም ውሎች", href: "#" },
                    { label: "የኩኪ ምርጫዎች", href: "#" },
                    { label: "የተመላለሰ ፖሊሲ", href: "#" },
                    { label: "አጥፋ", href: "#" },
                ],
            },
            {
                language: "አማርኛ",
                copyright: "© 2025 Wondershare. መብት ሁሉ የተጠበቀ ነው."
            }
        ],
        // {/*For School Page Translations*/}
        FamiSafeKeeps: "ፋሚሴፍ ተማሪዎችን በዲጂታል ዘመን ደህንነታቸውን ይጠብቃል",
        MoniterProtect: "ክትትል | ጥበቃ | ማስጠንቀቂያ",

        // For School Page Features
        cards: [
            {
                title: "ትኩረት መቀነስ",
                desc: "በዙሪያችን ብዙ ዲጂታል መሳሪያዎች ሲኖሩ፣ ተማሪዎች በክፍል ውስጥ ላይ ትኩረታቸውን ማቆየት አስቸጋሪ ሊሆንባቸው ይችላል።",
                bg: "bg-[#E9F8FD]",
                img: "https://famisafe.wondershare.com/images/images-2021/website-2021/school-pic-1.png",
            },
            {
                title: "የመስመር ላይ ማስፈራራት",
                desc: "የመስመር ላይ ማስፈራራት ብዙ ጊዜ በትምህርት ቤቶች ውስጥ ይከሰታል። እነዚህ ክስተቶች በጊዜያቸው ከተከታተሉ ጉዳታቸውን በጊዜ ማቆም ይቻላል።",
                bg: "bg-[#FFF1EB]",
                img: "https://famisafe.wondershare.com/images/images-2021/website-2021/school-pic-2.png",
            },
            {
                title: "ሱሰኝነት",
                desc: "እስከ ሌሊት ድረስ ድራማ መመልከት፣ ቪዲዮ መመልከት፣ ጨዋታ መጫወት... በኢንተርኔት ሱሰኛ መሆን ዛሬ ብዙ ተማሪዎች የሚኖሩት ሕይወት ሆኗል።",
                bg: "bg-[#F4F3FF]",
                img: "https://famisafe.wondershare.com/images/images-2021/website-2021/school-pic-3.png",
            },
            {
                title: "ማጭበርበር",
                desc: "በቀላሉ ሊጠቀሙበት በሚችሉ ዲጂታል መሣሪያዎች ዘመን፣ የሌሎችን ሥራ መቅዳት ቀላልና ተደጋጋሚ ሆኗል። ስለዚህ መምህራን ስለ ትምህርት ጥራትና የማጭበርበር እድል ይበልጥ ይጨነቃሉ።",
                bg: "bg-[#EFFFF9]",
                img: "https://famisafe.wondershare.com/images/images-2021/website-2021/school-pic-4.png",
            },
        ],
        Technologyinschool: "ቴክኖሎጂ በትምህርት ቤት ጠቃሚ ነው፣ ነገር ግን ተግዳሮቶችም አሉት",
        FamiSafeprotectsall: "FamiSafe ሁሉንም ተማሪዎች በበለጠ ውጤታማ መንገድ ይጠብቃል",
        featuress: [
            {
                title: "ድህረ ገጽ ማጣሪያ",
                icon: ShieldCheck,
                color: "bg-orange-500",
                cardBg: "bg-[#FFF1EB]",
                points: [
                    "የድህረ ገጾችን ማጣሪያ በመጠቀም ፍለጋን ደህንነቱን ያረጋግጡ",
                    "ድህረ ገጾችን በምድብ መሰረት መከልከል",
                    "ድህረ ገጾችን በልዩ መዝገብ በመጨመር መከልከል ወይም መፍቀድ",
                ],
                pointColor: "bg-orange-500",
            },
            {
                title: "ብዙ ተጠቃሚ፣ ብዙ መሣሪያ",
                icon: Users,
                color: "bg-purple-500",
                cardBg: "bg-[#F4F3FF]",
                points: [
                    "የተለያዩ የደንበኝነት አማራጮችን ያቀርባል",
                    "ብዙ ተማሪዎችን በአንድ ጊዜ ማስተዳደር",
                    "የተማሪዎችን የመተግበሪያ አጠቃቀም መረጃ መመልከትና መሰብሰብ",
                ],
                pointColor: "bg-purple-500",
            },
            {
                title: "ብልህ ዳሽቦርድ",
                icon: BarChart3,
                color: "bg-emerald-400",
                cardBg: "bg-[#EFFFF9]",
                points: [
                    "የተማሪዎች መረጃ ሁሉንም በአንድ ቦታ መሰብሰብ",
                    "የተማሪዎች መሣሪያዎችን በአንድነት ማስተዳደር",
                    "የተማሪዎችን የዛሬ የመሣሪያ አጠቃቀም በፍጥነት መመልከት",
                ],
                pointColor: "bg-emerald-400",
            },
        ],
        WhyisFamiSafe: "ለትምህርት ቤትዎ ምክንያቱ ምንድን ነው FamiSafe ምርጥ ምርጫ የሆነው?",
        ScreenSupervision: "የማያ ቁጥጥር",
        Asphoneortablet:
            "ስልክ ወይም ታብሌት የልጆች ሕይወት አካል ሆኖ ሲመጣ፣ መምህራን ተማሪዎች መማርና ዕረፍት መካከል ሚዛን እንዲጠብቁ ሊረዱአቸው ይገባል፣ የትምህርት ትኩረት መቀነስን እና እንቅልፍ እጥረትን በመከላከል።",
        AppBlocker: "መተግበሪያ መከልከያ",
        Studentsneedtofocus:
            "ተማሪዎች በትምህርታቸው ላይ ትኩረት ማድረግ ያስፈልጋቸዋል፤ ነገር ግን ከትምህርት ጋር ያልተያዙ አንዳንድ መተግበሪያዎች ብዙ ጊዜ ያበሳጩአቸዋል።",
        OnlineSafety: "የመስመር ላይ ደህንነት",
        Theonlineworld:
            "የመስመር ላይ ዓለም አስደሳችና ማራኪ ቢሆንም፣ እንደ የመስመር ላይ ማስፈራራት፣ የወሲብ ይዘት እና የመስመር ላይ አደጋ አሳዳጊዎች ያሉ የተደበቁ የደህንነት አደጋዎች አሉ። ተማሪዎች ከመምህራን መመሪያና እገዛ ያስፈልጋቸዋል።",
        TheMostReliable: "በጣም የሚታመን የወላጆች መቆጣጠሪያ መተግበሪ",
        /// FQA Section
        faqs: [
            {
                question: "የልጄን ስልክ ላይ የሚላኩ መልዕክቶችን እንዴት ልቆጣጠር?",
                answer:
                    "ወላጆች የልጆቻቸውን መልዕክቶች ለመቆጣጠር የወላጅ ቁጥጥር መተግበሪያዎችን በመጠቀም ሲሆን፣ ይህንንም በግላዊነት ህጎችን በማክበር መፈጸም ይገባል።",
            },
            {
                question: "የልጄን የስልክ ጥሪዎች እንዴት ልቆጣጠር?",
                answer:
                    "የጥሪ መዝገቦች፣ የእውቂያ ዝርዝሮች እና የጥሪ ቆይታ ጊዜን በመቆጣጠር የተረጋገጡ የወላጅ ቁጥጥር መሣሪያዎችን መጠቀም ይችላሉ።",
            },
            {
                question:
                    "በእኔ የiPhone ስልክ ላይ የልጄን መልዕክቶች ማንበብ ይቻላል?",
                answer:
                    "አዎ፣ ተገቢ የወላጅ ቁጥጥር መፍትሄዎችን እና ፍቃድ በመኖር ወላጆች የልጃቸውን የመልዕክት እንቅስቃሴ ማየት ይችላሉ።",
            },
            {
                question:
                    "የልጄን ጥሪዎችና መልዕክቶች ማየት ህጋዊ ነው?",
                answer:
                    "በአብዛኛው አካባቢዎች፣ ወላጆች ወይም ህጋዊ እንክብካቤ አድራጊዎች የአነስተኛ ዕድሜ ልጆች መሣሪያዎችን መቆጣጠር ይፈቀዳላቸዋል፣ ነገር ግን የአካባቢ ህጎችን መመርመር ያስፈልጋል።",
            },
        ],
        tools: [
            { title: "የስክሪን ጊዜ", icon: FaClock },
            { title: "የእንቅስቃሴ ሪፖርት", icon: FaChartBar },
            { title: "የYouTube መተግበሪያ ቁጥጥር", icon: FaYoutube },
            { title: "የTikTok ታሪክ", icon: FaTiktok },
            { title: "ተገቢ ያልሆኑ ምስሎች", icon: FaImage },
            { title: "ግልፅ ያልሆነ ይዘት መለያየት", icon: FaExclamationCircle },
            { title: "መተግበሪያ መከልከል", icon: FaLock },
            { title: "የአሳሽ ታሪክ", icon: FaHistory },
            { title: "ደህንነታማ ፍለጋ", icon: FaSearch },
            { title: "የድር ማጣሪያ", icon: FaFilter },
            { title: "ቀጥታ አካባቢ", icon: FaMapMarkerAlt },
            { title: "የአካባቢ ታሪክ", icon: FaMap },
            { title: "ጂኦፈንስ (Geofence)", icon: FaMapMarkerAlt },
            { title: "የመንገድ ሪፖርት", icon: FaCar }
        ],
        platforms: [
            {
                name: "ዊንዶውስ",
                icon: FaWindows,
                color: "text-blue-600",
                href: "#windows",
            },
            {
                name: "ማክ",
                icon: FaApple,
                color: "text-gray-800",
                href: "#macos",
            },
            {
                name: "ኽላውድ",
                icon: FaGlobe,
                color: "text-green-600",
                href: "#online",
            },
            {
                name: "አይፎን / አፓድይ",
                icon: FaApple,
                color: "text-black",
                href: "#ios",
            },
            {
                name: "አንድሮይድ",
                icon: FaAndroid,
                color: "text-green-500",
                href: "#android",
            },
            {
                name: "ክሮም",
                icon: FaChrome,
                color: "text-yellow-500",
                href: "#chrome",
            },
        ],
        FamiSafeNewFeature: "የFamiSafe አዲስ ባህሪ",
        CallsMessages: "ጥሪዎች እና መልእክቶች",
        WithCallsMessagesparents: "በጥሪዎች እና መልእክቶች መካከል፣ ወላጆች የልጆቻቸውን ስልክ አጠቃቀም ማስተዳደር፣ መልእክቶችንና ጥሪዎችን መከታተል፣ እና የማይመጣ የይዘት መረጃን ማወቅ በመቻል ልጆችን ከአለም አስቸጋሪ ነገሮች ለመከላከል በቅድሚያ ሊጠቀሙ ይችላሉ።",
        FamiSafeBestAppto: "FamiSafe — ለወላጆች ጥሪዎችን እና መልእክቶችን ለመከታተል የምርጥ መተግበሪያ",
        CallHistoryMonitoring: "የጥሪ ታሪክ መከታተያ",
        Effortlesslymonitorchildren: "ልጆችን በቀላሉ መከታተል፡ የልጆች ስልክ ጥሪ እንቅስቃሴዎችን በቀላሉ መከታተል፣ በተጠናቀቀ ዝርዝር የጥሪ መዝገቦችን በልጆች መሣሪያዎች ላይ ማሳየት ላይ ያለ ዋነኝ ነገር ነው።",
        Identifysuspicious: "በልማት ያለ መለያየት ስርዓታችን አስገራሚ ጥሪዎችን እና መልእክቶችን ማስታወቅ ይቻላል።",
        TextMessageMonitoring: "የጹፍ መልዕክት መከታተያ",
        Easilymonitorthechild: "የልጁን የመጣና የሄደ መልእክቶች በቀጥታ ወይም በታቀደ ጊዜ ማስተዳደር ቀላል ነው።",
        Automaticallyrefresh: "በልጁ መሣሪያ ያሉትን መልእክቶች ለማየት ራስሰር (ከሰዓት አንድ ጊዜ) ወይም በእጅ ማስመሰያ ቀየር።",
        Checkandviewthecontacts: "እውነተኛ ማረጋገጫና እይታ፡ ለመልእክት ማስተላለፍና ለመቀበል ያሉትን እውነተኛ እና የተለየ የመልእክት ይዘት ከሌሎች መገናኛ ቁጥሮች ጋር እንዴት እንደሚነጋገሩ ማረጋገጫ እና መመልከት ይቻላል።",
        Detectsensitive: "በመልእክቶች ውስጥ ስለሚያስቸግር ይዘት ይገነባል እና ለታወቁ ቁልፍ ቃላት ፈጣን እርምጃዎችን ይሰጣል።",
        SuspiciousContentDetection: "የአስገራሚ ይዘት መለያየት",
        Safeguardyourchildren: "በልጆቻችሁ የመጣና የሄደ መልእክቶች ውስጥ ያሉትን ስለሚያስቸግሩ ይዘቶች በመከታተል ከመስመር ላይ አደጋዎች ይጠብቁ።",
        Detectandhighlight: "በልጅ ሞባይል መሣሪያ ውስጥ ያሉትን አስገራሚ ቁልፍ ቃላት ይገነቡና ያሳያሉ።",
        Combinemessage: "የመልእክት ይዘት ማሳየትን ከስለሚያስገርም ቃላት መለያየት ጋር በመዋሰን የወላጆች እንቅስቃሴን ያሻሽላል።",
        SuspiciousContentDetection: "የአስገራሚ ይዘት መለያየት",
        Safeguardyourchildren: "በልጆቻችሁ የመጣና የሄደ መልእክቶች ውስጥ ያሉትን ስለሚያስቸግሩ ይዘቶች በመከታተል ከመስመር ላይ አደጋዎች ይጠብቁ።",
        Detectandhighlight: "በልጅ ሞባይል መሣሪያ ውስጥ ያሉትን አስገራሚ ቁልፍ ቃላት ይገነቡና ያሳያሉ።",
        Combinemessage: "የመልእክት ይዘት ማሳየትን ከስለሚያስገርም ቃላት መለያየት ጋር በመዋሰን የወላጆች እንቅስቃሴን ያሻሽላል።",
        Protectyour: "የምትወዷቸውን ሰዎች ከመስመር ላይ አደጋዎችና ከሳይበር ጥቃት ይጠብቁ።",
        HowtoTrack: "በልጆች መሣሪያዎች ላይ ጥሪዎችን እና መልእክቶችን እንዴት መከታተል ይቻላል?",
        Step1InstallFamiSafe: "ደረጃ 1፡ FamiSafe መተግበሪያን ይጫኑ",
        DownloadFamiSafeApp: "በወላጅ ስልክ ላይ FamiSafe መተግበሪያን ከGoogle Play Store ወይም App Store ያውርዱ።",
        StepRegisteranAccount: "ደረጃ 2፡ መለያ ይመዝገቡ",
        Register: "Wondershare ID ይመዝገቡ ወይም በApple፣ Google፣ ወይም Facebook ID ይግቡ።",
        StepConnect: "ደረጃ 3፡ የልጅ መሣሪያን ያገናኙ",
        Scanthe: "የQR ኮድን በመቃኘት የልጁን መሣሪያ በራስሰር ያጣመሩ።",
        ForMoreDetails: "ለተጨማሪ መረጃ",
        TryItFreeOnline: "በነፃ ይሞክሩ",
        DownloadFamiSafeon: "FamiSafe ከዚህ በታች ያውርዱ።",
        FindMoreParental: "ልጆቻችሁን በመስመር ላይ ለመጠበቅ ተጨማሪ የወላጅ ቁጥጥር መሣሪያዎችን ያግኙ",
        MoreTipsabout: "ስለ ወላጅ ቁጥጥር እና ስለ ልጆች እድገት ተጨማሪ ምክሮች",
        BestCallBlocker: "ለAndroid እና iOS ምርጥ የጥሪ መከላከያ መተግበሪያዎች",
        TopBest: "ከፍተኛ 8 ምርጥ የመልእክት እና የጥሪ መከታተያዎች",
        TopWaystoTrack: "በነፃ መልእክቶችን እና ጥሪዎችን ለመከታተል ከፍተኛ 3 መንገዶች",
        HowToCheck: "በiPhone ላይ የጥሪ ታሪክን እንዴት መመልከት ይቻላል",
        OmegleforKids: "Omegle ለልጆች፡ Omegle ደህንነቱ የተጠበቀ ነው?",
        BestTextMessage: "በልጆች iPhone ላይ ለመከታተል ምርጥ 14 የመልእክት መከታተያ መተግበሪያዎች",

        /// Screen Time Section
        ScreenTimeControl: "የማያ ጊዜ መቆጣጠሪያ",
        Stopendlessscreen: "ማለቂያ የሌለውን ማያ ገጽ ማሸብለል አቁም፣ ጤናማ ልምዶችን ይጀምሩ። የልጅዎን የስክሪን ጊዜ አጠቃቀም በእውነተኛ ጊዜ ይከታተሉ፣ ስብስቦች ዕለታዊ ገደቦች እና የመኝታ ሰዓት መርሃ ግብሮች እና ማንኛውንም መሳሪያ ይቆልፋሉ ለጥናት ወይም ለቤተሰብ ጊዜያት ጊዜው ሲደርስ።",

        features: [
            {
                title: "ለመማሪያ ሰዓት ራስ-ሰር መቆለፊያ",
                desc: "ልጆች በቤት ስራ ጊዜ እንዲተኩሩ የሚያዘንጉ መተግበሪያዎችን ወይም ጨዋታዎችን በራስ-ሰር ይቆልፉ። መሳሪያዎች የሚቆለፉበትን የተወሰነ ሰዓት በመወሰን ያልተቋረጠ የመማር ጊዜን ይደግፉ።",
                img: "https://famisafe.wondershare.com/images/images-2025/screen-time/auto-lock-for-study-time.png",
            },
            {
                title: "ለመኝታ ጊዜ ማረፊያ (Wind-Down)",
                desc: "ልጆች የተሻለ እንቅልፍ እንዲያገኙ በሌሊት የስክሪን መዳረሻን ይከልክሉ። የሰማያዊ ብርሃን ተፅእኖን በመቀነስ የሌሊት ዘግይቶ መጠቀምን በመርሀ ግብር ያቆጣጠሩ።",
                img: "https://famisafe.wondershare.com/images/images-2025/screen-time/wind-down-at-bedtime.png",
            },
            {
                title: "የቤተሰብ ጊዜን መመለስ",
                desc: "በምግብ ጊዜ ወይም በቤተሰብ እንቅስቃሴዎች ጊዜ የስልክ መጠቀምን በመገደብ እውነተኛ ግንኙነትን ያበረታቱ። በምግብ ጠረጴዛ ላይ ያለ ዲጂታል መዘናጋት የሚያስችል ትርጉም ያለው ውይይትን ያበረታቱ።",
                img: "https://famisafe.wondershare.com/images/images-2025/screen-time/bring-back-family-time.png",
            },
            {
                title: "ለጤናማ ልምዶች የጊዜ ሽልማት",
                desc: "ስራዎችን መጨረስ ወይም ጥሩ ባህሪ ማሳየት እንደ ሽልማት የስክሪን ጊዜን ያራዝሙ። ዲጂታል መዳረሻን ወደ አዎንታዊ ኃይል በመቀየር ዕለታዊ ኃላፊነትን ያበረታቱ።",
                img: "https://famisafe.wondershare.com/images/images-2025/screen-time/time-reward-for-healthy-habits.png",
            },
        ],
        STEPS: [
            {
                step: "ደረጃ 1",
                title: "FamiSafe ይጫኑ",
                description:
                    "በወላጅ ስልክ ላይ ከ Google Play Store ወይም App Store የ FamiSafe መተግበሪያን ያውርዱ።",
                bg: "bg-[#E8FFFA]",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/installation-step1-download.png",
            },
            {
                step: "ደረጃ 2",
                title: "መለያ ይመዝገቡ",
                description:
                    "ለ FamiSafe መለያ ይመዝገቡ ወይም በ Apple፣ Google ወይም Facebook መለያ ይግቡ።",
                bg: "bg-[#FFF4E3]",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/installation-step2-register-duplicate.png",
            },
            {
                step: "ደረጃ 3",
                title: "የልጅዎን መሳሪያ ያገናኙ",
                description:
                    "በልጅዎ መሳሪያ ላይ የ FamiSafe መተግበሪያን ይጫኑ። ከዚያም ሁለቱን መሳሪያዎች ለማገናኘት የመገናኛ ኮድ ያስገቡ ወይም QR ኮድ ይስካኑ።",
                bg: "bg-[#F1ECFF]",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/installation-step3-connect-duplicate.png",
            },
        ],
        TESTIMONIALS: [
            {
                name: "Kayla Huppman",
                text:
                    "ለሁለቱም ልጆቼ በጣም ጥሩ መተግበሪያ ነው። እንቅስቃሴያቸውን ለመከታተል እና በተወሰኑ ሰዓታት የት መሆናቸውን ለማወቅ የሚረዱ ተጨማሪ ባህሪያትን በጣም እወዳለሁ።",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/testimonial-background-2.jpg",
            },
            {
                name: "Amanda Lewis",
                text:
                    "FamiSafe ልጆቼ በመስመር ላይ ደህንነታቸው እንደሚጠበቅ እርግጠኝነት ይሰጠኛል። የስክሪን ጊዜ መቆጣጠሪያና የአካባቢ መከታተያ በጣም ጠቃሚ ናቸው።",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/testimonial-background-1.jpg",
            },
            {
                name: "Rachel Moore",
                text:
                    "በ FamiSafe ልጆቼ የስልክ አጠቃቀማቸውን በተሻለ መንገድ መቆጣጠር ጀመሩ። መተግበሪያው ገደቦችን ለማቆም ይረዳል እና ፈቃድ እንዲጠይቁ ያበረታታቸዋል።",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/testimonial-background-3.jpg",
            },
        ],
        CheckScreenTimeUsage: "የስክሪን ጊዜ አጠቃቀምን ያረጋግጡ",
        LimitScreenTimeonDevices: "በመሳሪያዎች ላይ የስክሪን ጊዜን ይገድቡ",
        SetSmartTimeSchedules: "ብልህ የጊዜ መርሀ ግብሮችን ያዘጋጁ",
        SetSmartTimeSchedules: "ብልህ የጊዜ መርሀ ግብሮችን ያዘጋጁ",
        ScreenTimeSolutionsforParentalControl: "ለወላጅ ቁጥጥር የስክሪን ጊዜ መፍትሄዎች",
        HowtoLimitScreenTimeforKids: "ለልጆች የስክሪን ጊዜን እንዴት መገደብ ይቻላል?",
        WhatParentsAreSaying: "ወላጆች ምን እያሉ ነው?",
        Leavedigitalparenting: "የዲጂታል ወላጅነት ችግኝነቶችን ተው—በማንኛውም ጊዜ እና በማንኛውም ቦታ እውነተኛ የአእምሮ ሰላምን ያግኙ።",
        EmpowerYoutoSupervise: "ልጆችዎን የስክሪን ጊዜ ለመቆጣጠር እርስዎን ኃይለኛ ያደርጋል",

        ///*================== Screen-Viewer ==================*/}
        KeepTrackofYour: "የእውነተኛ ጊዜ ቅጽበታዊ ገጽ እይታዎችን ያግኙ",
        GetRealTimeScreenshots: "በእውነተኛ ጊዜ ስክሪንሾቶችን ያግኙ",
        FamiSafeScreenViewers: "FamiSafe ስክሪን ቪውወር የልጅዎን የመስመር ላይ እንቅስቃሴ በግልፅ ለማየት የተነደፈ ሲሆን የስክሪኑን ፎቶ በመነሳት ይረዳል።",
        Getinstantscreenshots: "የልጅዎን መሣሪያዎች ፈጣን ስክሪንሾቶችን ያግኙ",
        Monitorchildrenbehavior: "የልጆችን ባህሪ ይከታተሉ እና ደህንነታቸውን ያረጋግጡ።",
        Seizethemomentsand: "አፍታዎቹን ይያዙ እና ከልጆችዎ ጋር የበለጠ ተሳትፎ ያድርጉ።",
        TakeScheduleTimedScreenshots: "በተወሰነ ጊዜ መርሃ ግብር የተያዙ ስክሪንሾቶችን ይውሰዱ",

        Shareyourchildscreenconten: "ልጅዎ የሚጠቀምባቸውን መተግበሪያዎችና ጨዋታዎች በቀላሉ ለመከታተል የልጅዎን የስክሪን ይዘት በስልክዎ ላይ ያጋሩ።",
        Thescreenshotscanalsoetaken: "እነዚህ ስክሪንሾቶች እንዲሁም በራስ-ሰር የጊዜ ክፍተቶች (2፣ 5፣ 10፣ 15፣ 20፣ 25 እና 30 ደቂቃዎች) መወሰድ ይችላሉ።",
        Youcanselecttheintervalfor: "የልጅዎ መሣሪያ በመጠቀም ላይ ሲሆን ለራስ-ሰር ስክሪንሾቶች የጊዜ ክፍተቱን መምረጥ ይችላሉ።",
        Analyzeyourchilddigital: "ስክሪንሾቶችን በመቅረጽ የልጅዎን ዲጂታል ግንኙነቶች ይተንትኑ እና እድገታቸውን ይደግፉ።",

        DetectExplicitandPornographic: "በምስሎች ውስጥ ያለ ግልጽ እና የፖርኖግራፊ ይዘትን ይለዩ",
        FamiSafeScreenViewerafeguards: "FamiSafe የስክሪን መመልከቻ ልጆቻችሁን ከጎጂ ይዘቶች ይጠብቃል።",
        Whendetectinginappropriate: "ተገቢ ያልሆኑ ምስሎች ሲታወቁ ወላጆች በበኩላቸው ማሳወቂያ ይቀበላሉ።",
        Byenablingthesuspicious: "የተጠራጣሪ ማጣሪያ አማራጩን በማንቃት ሁሉም የተጠራጣሪ ምስሎች በጋለሪ መልክ ሊታዩ ይችላሉ።",
        Enhanceprotectionandensure: "ጥበቃን ያጠናክሩ እና ልጆቻችሁ ከሊታዩ የሚችሉ አደጋዎች እንዲጠበቁ ያረጋግጡ።",

        HowtoCaptureScreenshots: "በልጆች መሣሪያዎች ላይ ስክሪንሾቶችን እንዴት መውሰድ ይቻላል?",
        Step1InstallFamiSafe: "ደረጃ 1፡ FamiSafe መተግበሪያን ይጫኑ",
        DownloadamiSafeApp: "በወላጅ ስልክ ላይ FamiSafe መተግበሪያን ከ Google Play Store ወይም App Store ያውርዱ።",
        Step2RegisternAccount: "ደረጃ 2፡ መለያ ይመዝገቡ",
        RegisteraWondershareIDfor: "ለ FamiSafe የ Wondershare ID ይመዝገቡ ወይም በ Apple፣ Google ወይም Facebook ID ይግቡ።",
        Step3ConnectKidDevice: "ደረጃ 3፡ የልጅዎን መሣሪያ ያገናኙ",
        Useyourkidphone: "በወላጅ ስልክ ላይ ባለው FamiSafe ውስጥ ያለውን QR ኮድ በልጅዎ ስልክ በመስካን መተግበሪያውን ይጫኑ፣ እና ግንኙነቱ በራስ-ሰር ይጠናቀቃል።",
        ForMoreDetails: "ለተጨማሪ መረጃ >>",

        MoreTipsabout: "ስለ የወላጅ ቁጥጥር እና የልጆች እድገት ተጨማሪ ምክሮች",
        BestScreen: "በ2025 ለወላጆች ምርጥ 8 የስክሪን መመልከቻ መተግበሪያዎች",
        FreeScreeShare: "ለወላጅ ቁጥጥር ነፃ የስክሪን ማጋራት መተግበሪያ",
        QuickandEasyWays: "Google Family Link እገዳን በፍጥነትና በቀላሉ ለመተው መንገዶች",
        EasyStepstoInstall: "YouTube Kids በ Amazon Fire ላይ ለመጫንና ለመጠቀም ቀላል እርምጃዎች",
        Leading5Private: "ለወላጆች የሚመሩ 5 የግል ስክሪንሾት መተግበሪያዎች",
        FamilyLinkNotWorking: "Family Link አይሰራም? ፈጣንና የተረጋገጡ መፍትሄዎች",
        faqsScreenviwer: [
            {
                question: "ልጆች ምን ያህል የስክሪን ጊዜ ሊያገኙ ይገባቸዋል?",
                answer:
                    "1. ከ2 እስከ 4 ዓመት ያሉ ልጆች በቀን ከአንድ ሰዓት በታች የስክሪን ጊዜ ሊያገኙ ይገባቸዋል። 2. ከ5 እስከ 18 ዓመት ያሉ ልጆች ደግሞ ወላጆች በቀን ከሁለት ሰዓት ያልበለጠ ቋሚ የስክሪን ጊዜ ገደብ እንዲኖር መሞከር ይገባቸዋል።",
            },
            {
                question: "በ iPhone ላይ የልጄን መሣሪያ ስክሪንሾት እንዴት መውሰድ እችላለሁ?",
                answer:
                    "FamiSafe በመጠቀም በ iPhone ላይ የልጅዎን መሣሪያ ስክሪንሾት ለመውሰድ፡ 1. የ FamiSafe መለያ ይፍጠሩ። 2. በወላጅና በልጅ ስልኮች ላይ FamiSafe መተግበሪያን ይጫኑ እና ሁለቱን መሣሪያዎች ያገናኙ። 3. በወላጅ መሣሪያ ላይ ወደ Screen Viewer ባህሪ ይግቡ። 4. ከዚያ በኋላ ወቅታዊ እና በተወሰነ ጊዜ የሚወሰዱ ስክሪንሾቶችን ማግኘት ይችላሉ። 5. ተገቢ ያልሆነ ይዘት ካለ ስክሪንሾቶቹ ላይ ይለያያል።",
            },
            {
                question: "የልጆችን ስክሪን መከታተል አለብኝ?",
                answer:
                    "መሣሪያዎችን መከታተል እንደሚያስፈልግ ሲወስኑ የልጅዎን ዕድሜ እና ዲጂታል ባህሪያት ያስቡ። ከዚያም መከታተል ከመረጡ ልጅዎን ከነዚህ ጋር ተነጋገሩ እና ለምን አስፈላጊ እንደሆነ ያብራሩላቸው።",
            },
            {
                question: "በ Android ላይ የልጄን መሣሪያ ስክሪንሾት እንዴት መውሰድ እችላለሁ?",
                answer:
                    "FamiSafe በመጠቀም በ Android ላይ የልጅዎን መሣሪያ ስክሪንሾት ለመውሰድ፡ 1. የ FamiSafe መለያ ይፍጠሩ። 2. በወላጅና በልጅ ስልኮች ላይ FamiSafe መተግበሪያን ይጫኑ እና ሁለቱን መሣሪያዎች ያገናኙ። 3. በወላጅ መሣሪያ ላይ ወደ Screen Viewer ባህሪ ይግቡ። 4. ከዚያ በኋላ ወቅታዊ እና በተወሰነ ጊዜ የሚወሰዱ ስክሪንሾቶችን ማግኘት ይችላሉ። 5. ተገቢ ያልሆነ ይዘት ካለ ስክሪንሾቶቹ ላይ ይለያያል።",
            },
        ],
        /// App Rule
        AppBlocker: "መተግበሪያ አግዳ",
        Instantlybockdistracting: "ልጆች በመሣሪያቸው ላይ የሚያስተናግዱ መተግበሪያዎችን፣ ጨዋታዎችን እና ማህበራዊ ሚዲያን በፍጥነት ይከልክሉ፤ የትኩረት ጊዜዎችን ያቅዱ እና ልጆቻችሁ ጤናማ ዲጂታል ልምዶችን እንዲገነቡ ያግዙ።",
        EmpowerYoutoControl: "የልጅዎን የመተግበሪያ አጠቃቀም ለመቆጣጠር ኃይል ይሰጥዎታል",
        Leaveappdistractions: "የመተግበሪያ ማስተናገዶችን ወደኋላ ተዉ—በማንኛውም ጊዜና በማንኛውም ቦታ እውነተኛ የአእምሮ ሰላምን ይዝናኑ።",

        BlockAnyAppInstantly: "ማንኛውንም መተግበሪያ በፍጥነት አከልክሉ",
        Takeinstantcontrolof: "በልጆቻችሁ ሁሉ መሣሪያዎች ላይ ያልተገባ መተግበሪያዎችን በፍጥነት ይቆጣጠሩ።",
        Onetapblockingfor: "ለጨዋታዎች፣ ማህበራዊ ሚዲያ ወይም መዝናኛ አንድ ጫን በአንድ ጫን መከልከል።",
        Blockindividualapps: "በቀላሉ የግል መተግበሪያዎችን ወይም ሙሉ ምድቦችን ይከልክሉ።",
        SetappstoBlocked: "መተግበሪያዎችን ወደ 'ተከልክሏል'፣ 'ተገደብ' ወይም 'ፈቀቅ' ሁኔታ ያደርጉ።",

        ScheduleAppBlocking: "የመተግበሪያ መከልከል ጊዜዎችን ይቀይሩ",
        Createautomaticapp: "ልጆች የስክሪን ጊዜ እንዲወሰን ራስ-ሰር የመተግበሪያ ህጎችን ይፍጠሩ።",
        Autoblocappsduring: "በትምህርት፣ በእንቅልፍ ጊዜ ወይም በምግብ ጊዜ መተግበሪያዎችን ራስ-ሰር ይከልክሉ።",
        Applyifferentrules: "በሳምንት ውስጥ እና በሳምንት መጨረሻ ተለያዩ ህጎች ያተጉ።",
        Customizetheistf: "ለተወሰኑ ጊዜ ሰሌዳዎች የተከልከሉ መተግበሪያዎችን ዝርዝር ያስተካክሉ።",

        SetAgeBasedFilters: "እድሜ ተደጋጋሚ ገደቦችን ያቀናጁ",
        Protectkidsautomatically: "ለልጆች በእድሜ የማይሚገባ መተግበሪያዎችን በመንገድ በራስ-ሰር በማጣሪያ ይጠብቁ።",
        Filterappsbyageratings: "መተግበሪያዎችን በእድሜ ደረጃ (4+፣ 12+፣ 17+) ይጣሩ።",
        Autolocnewlydownloaded: "አዲስ የወሰዱ መተግበሪያዎችን ለግምገማ በራስ-ሰር ይከልክሉ።",
        Notifyhenkidsrequest: "ልጆች የተከለከሉ መተግበሪያዎችን ሲጠይቁ ማሳወቂያ ይሰጡ።",

        AppBlockingcenariosParents: "ወላጆች የሚወዱ የመተግበሪያ መከልከል ሁኔታዎች",
        featuresds: [
            {
                title: "ማህበራዊ መተግበሪያዎችንና ጨዋታዎችን ለጊዜው አቁም",
                desc: "የቴክኖሎጂ እረፍት ይፈልጋሉ? TikTok፣ Instagram ወይም የጨዋታ መተግበሪያዎችን በአንድ ጫን በፍጥነት ያቁሙ—ለቤተሰብ ውይይት፣ ለቤት ስራዎች ወይም ለጸጥ ያለ ጊዜ ተስማሚ።",
                img: "https://famisafe.wondershare.com/images/images-2025/app-blocker/social-pause.png",
            },
            {
                title: "የቤት ስራ ግጭት አይኖርም",
                desc: "በቤት ስራ ጊዜ የጨዋታ እና የመዝናኛ መተግበሪያዎችን ይከልክሉ እና ልጅዎ በእውነት እንዲተኩር ያግዙት። ያነሰ ጫና፣ የተሻለ ውጤት እና ደስተኛ ምሽቶች ለሁሉም።",
                img: "https://famisafe.wondershare.com/images/images-2025/app-blocker/homework-block.png",
            },
            {
                title: "በቤተሰብ እራት ጊዜ ስልክ እረፍት",
                desc: "በእራት ጊዜ ሁሉም በጠረጴዛው ላይ እንዲገኙ የመተግበሪያ ገደቦችን ያቀናጁ። እውነተኛ ውይይትና ግንኙነትን በእያንዳንዱ የምግብ ጊዜ ይደሰቱ።",
                img: "https://famisafe.wondershare.com/images/images-2025/app-blocker/homework-block.png",
            },
            {
                title: "በሌሊት ስክሪን ማቆም",
                desc: "በእንቅልፍ ጊዜ የጨዋታ እና የመዝናኛ መተግበሪያዎችን በመከልከል ልጆች በጊዜያቸው እንዲተኛሉ ያግዙ። የተሻለ እንቅልፍ፣ የተሻለ ነገ ቀን።",
                img: "https://famisafe.wondershare.com/images/images-2025/app-blocker/homework-block.png",
            },
        ],
        HowtoBlockApps: "ለልጆች መተግበሪያዎችን እንዴት መከልከል ይቻላል?",
        sliides: [
            {
                title: "የአካባቢ መከታተያ",
                desc: "የልጅዎን የእውነተኛ ጊዜ አካባቢ እና የእንቅስቃሴ ታሪክ ይከታተሉ።",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/location-tracking.png",
            },
            {
                title: "የመንዳት ሪፖርት",
                desc: "የመንዳት ፍጥነት፣ መንገዶች እና የመንዳት ባህሪ ይቆጣጠሩ።",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/driving-report.png",
            },
            {
                title: "SOS ማሳወቂያ",
                desc: "ትክክለኛ የአካባቢ መረጃ ጋር ወዲያውኑ SOS ማሳወቂያዎችን ይቀበሉ።",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/sos-alert.png",
            },
            {
                title: "የስክሪን ጊዜ ቁጥጥር",
                desc: "ጤናማ የስልክ አጠቃቀም እንዲኖር የቀን የስክሪን ጊዜ ገደብ ያቀናጁ።",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/screen-time-control.png",
            },
            {
                title: "መተግበሪያ አግዳ",
                desc: "በትኩረት ጊዜ የሚያስተናግዱ መተግበሪያዎችንና ጨዋታዎችን ይከልክሉ።",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/app-blocker.png",
            },
            {
                title: "የድር ማጣሪያ",
                desc: "ልጆችን ከጎጂ ወይም ከተገቢ ያልሆኑ ድር ጣቢያዎች ይጠብቁ።",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/web-filter.png",
            },
            {
                title: "YouTube ክትትል",
                desc: "የYouTube የእይታ ታሪክን እና የፍለጋ ይዘትን ይከታተሉ።",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/youtube-monitoring.png",
            },
            {
                title: "የማህበራዊ ሚዲያ ክትትል",
                desc: "በታዋቂ መድረኮች ላይ የማህበራዊ ሚዲያ እንቅስቃሴዎችን ይከታተሉ።",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/social-media-monitoring.png",
            },
            {
                title: "የመተግበሪያ አጠቃቀም ሪፖርት",
                desc: "ዝርዝር የመተግበሪያ አጠቃቀም ጊዜ ሪፖርቶችን ይመልከቱ።",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/app-usage-report.png",
            },
            {
                title: "የስክሪን መመልከቻ",
                desc: "የልጅዎን የስልክ ስክሪን በእውነተኛ ጊዜ ይመልከቱ።",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/screen-viewer.png",
            },
            {
                title: "የተጠራጣሪ ጽሁፍ መለያያ",
                desc: "በመልዕክቶች ውስጥ አደገኛ ወይም ተጠራጣሪ ቃላትን ይለዩ።",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/suspicious-text.png",
            },
            {
                title: "ጂዮፌንሲንግ",
                desc: "ደህንነታቸውን አካባቢዎች ያቀናጁ እና ልጆች ሲገቡ ወይም ሲወጡ ማሳወቂያ ይቀበሉ።",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/geofencing.png",
            },
            {
                title: "የእንቅስቃሴ የጊዜ መዝገብ",
                desc: "ለተሻለ ክትትል የቀን እንቅስቃሴ የጊዜ መዝገቦችን ይመልከቱ።",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/activity-timeline.png",
            },
            {
                title: "የይዘት ማጣሪያ",
                desc: "በእድሜ የማይመጣ ይዘትን በራስ-ሰር ያጣሩ።",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/content-filtering.png",
            },
            {
                title: "ወዲያውኑ ማሳወቂያዎች",
                desc: "አደገኛ ባህሪ ሲኖር ወዲያውኑ ማሳወቂያ ይቀበሉ።",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/instant-alerts.png",
            },
        ],
        tips: [
            { text: "በAndroid እና iOS ላይ የስክሪን ጊዜን ለመገደብ ነፃ መተግበሪያዎች", link: "#" },
            { text: "የልጆች ስክሪን ጊዜን ለመቆጣጠር 5 መተግበሪያዎች", link: "#" },
            { text: "በSamsung ላይ የስክሪን ጊዜን እንዴት መመርመር ይቻላል?", link: "#" },
            { text: "በiPhone ላይ የስክሪን ጊዜን እንዴት መመርመር ይቻላል?", link: "#" },
            { text: "በHuawei ላይ የስክሪን ጊዜን እንዴት መመርመር ይቻላል?", link: "#" },
            { text: "በXiaomi ላይ የስክሪን ጊዜን እንዴት መመርመር ይቻላል?", link: "#" },
        ],
        faqds: [
            {
                question: "መተግበሪያዎችን ለመከልከል ነፃ መተግበሪያዎች አሉ?",
                answer:
                    "FamiSafe App Blocker ነፃ የሙከራ ጊዜ ይሰጣል፣ እንዲሁም ሌሎች ነፃ መሣሪያዎች አሉ። ነገር ግን ወላጆች የሚፈልጉትን የርቀት መቆጣጠሪያ፣ መርሀ ግብሮች (schedules) እና የመታመን ማስጠንቀቂያዎች የሚሰጡት የፕሪሚየም መተግበሪያዎች ብቻ ናቸው።",
            },
            {
                question: "ለመማር በጣም የተሻለው App Blocker የትኛው ነው?",
                answer:
                    "ግምገማ አድራጊዎች FamiSafeን ከ AppBlock ጋር በአንድ ደረጃ ያስቀምጣሉ፣ ምክንያቱም መርሀ ግብሮቹና የማስጠንቀቂያ ስርዓቱ ተማሪዎችን ያለ ጠንካራ መዝጊያ ትኩረታቸውን እንዲጠብቁ ያግዛል።",
            },
            {
                question: "በiPhone ላይ መተግበሪያዎችን ከርቀት መከልከል ይቻላል?",
                answer:
                    "አዎ፣ FamiSafe ወላጆች በiPhone ላይ የሚያስቸግሩ መተግበሪያዎችን በቀላሉ እንዲከልክሉ ያስችላቸዋል። መፍትሄያችን ከ iOS ገደቦች ጋር በመስራት ልጅዎ ምን መተግበሪያ መጠቀም እንደሚችል እና መቼ እንደሚጠቀም ሙሉ መቆጣጠሪያ ይሰጣል።",
            },
            {
                question: "App Blockerን እንዴት ማጥፋት ይቻላል?",
                answer:
                    "የFamiSafe የወላጅ መተግበሪያን ክፈት፣ የልጅ መሣሪያውን ምረጥ፣ App Blockerን ጫን፣ Instant Blockን አጥፋ እና መርሀ ግብሮቹን ሰርዝ። በiPhone ላይ የScreen Time ገደቦችን አጥፋ፤ በAndroid ላይ የDigital Wellbeing ታይመሮችን አስወግድ ወይም ሶስተኛ ወገን App Blocker ካለ አንስተል (uninstall)።",
            },
        ],/// One-way Audio
        OneWayAudio: "አንድ-አቅጣጫ ድምፅ",
        Experiencetheultimate: "በዘመናዊ የድምፅ መለያ መተግበሪያችን ከፍተኛ የልብ ሰላምን ይለማመዱ። በAndroid መሣሪያዎቻቸው ላይ በልጆቻችሁ አካባቢ ያሉ ድምፆችን በቀላሉ በመስማት ደህንነታቸውን እና ደስታቸውን እንደ ማንኛውም ጊዜ ያረጋግጡ።",
        KeepTrackofYourChild: "የልጅዎን የስልክ እንቅስቃሴ በScreen Viewer በመጠቀም በቀጥታ ይከታተሉ",
        GetRealTimeScreenshots: "በቀጥታ የስክሪን ስክሪንሾቶችን ያግኙ",
        FamiSafeScreenVieweris: "FamiSafe Screen Viewer የልጅዎን የመስመር ላይ እንቅስቃሴ በግልጽ ለማሳየት የተነደፈ ሲሆን የስክሪናቸውን ምስሎች በመቀስቀስ ይከታተላል።",
        Getnstantscreenshots: "የልጅዎን መሣሪያዎች በፍጥነት የስክሪን ስክሪንሾቶችን ያግኙ",
        Monitorchildrens: "የልጆችን ባህሪ ይከታተሉ እና ደህንነታቸውን ያረጋግጡ",
        Seizethemomentsand: "አስፈላጊ ጊዜዎችን ይያዙ እና ከልጆቻችሁ ጋር ተጨማሪ ተሳትፎ ያድርጉ",

        PreventPotentially: "ሊያስከትሉ የሚችሉ አደገኛ ሁኔታዎችን ይከላከሉ",
        Enhancechildsafetyand: "ከርቀት በመስማት የሚሰራ መሣሪያ በመጠቀም የልጆችን ደህንነት ያበረታቱ እና ጠንካራ የወላጅ-ልጅ ግንኙነትን ያበቃሉ",
        Parentscanuicklylisten: "ወላጆች ልጆቻቸው ለጥሪ ሳይመልሱ፣ መናገር ሲያልችሉ ወይም በማይታወቁ ቦታዎች ሲገኙ የOne-Way Audio ባህሪን በማብራት ዙሪያቸውን አካባቢ በፍጥነት መስማት ይችላሉ።",
        OneWayudiosafeguardschildren: "የOne-Way Audio ባህሪ በልጆች በኩል ያሉ ድምፆችን እና አካባቢያቸውን በመከታተል የልጆችን አካላዊና ስነ-ልቦናዊ ደህንነት ይጠብቃል፣ የግፍ እና ከአሉታዊ ተፅዕኖዎች የሚመጡ አደጋዎችን በተግባር ይከላከላል።",
        Ournewfeaturtrengthensarent: "አዲሱ ባህሪያችን ተጠንቃቃና አስተዋይ የወላጅነት እንክብካቤን በማበረታት የወላጅ-ልጅ ግንኙነትን ያጠናክራል፣ በልጆች ውስጥ የፍቅርና የእንክብካቤ ስሜትን ያበረከታል እና በወላጆችና በልጆች መካከል እምነትን ይገነባል።",

        Howtoistentoid: "የልጅዎን ዙሪያ ያለውን ድምፅ እንዴት መስማት ይቻላል?",
        appStores: [
            {
                name: "አፕ ስቶር",
                href: "https://www.apple.com/app-store/",
                icon: "/assets/images/icons/iphone.png",
            },
            {
                name: "ጉግል ፕሌይ",
                href: "https://play.google.com/store",
                icon: "/assets/images/icons/google.png",
            },
            {
                name: "አማዞን አፕ ስቶር",
                href: "https://www.amazon.com/gp/mas/get/android",
                icon: "/assets/images/icons/aman.png",
            },
            {
                name: "ማክ ኦኤስ",
                href: "https://www.apple.com/macos/",
                icon: "/assets/images/icons/mac.png",
            },
            {
                name: "ዊንዶውስ",
                href: "https://www.microsoft.com/windows",
                icon: "/assets/images/icons/download.png",
            },
            {
                name: "ክሮም ስቶር",
                href: "https://chromewebstore.google.com/",
                icon: "/assets/images/icons/chrome.jpg",
            },
        ],
        MoreTipsabout: "የወላጅ መቆጣጠሪያ እና የልጆች እድገት ስለሚሰጡ ተጨማሪ ምክሮች",
        WhatIsLive: "በiPhone እና Android ላይ ላይቭ ስማት ምንድነው?",
        Top6BestAI: "2025 ዓ.ም ላይ 6 ከፍተኛ የAI የወላጅ መቆጣጠሪያ መተግበሪያዎች ጥናት",
        Best5Android: "5 በጣም ጥሩ የAndroid ሩቅ ስማት መተግበሪያዎች",
        WhySomeoneIs: "ለምን አንድ ሰው ስልኩን አይመልስም እና እንዴት መከታተል እንደሚገባ",
        GoogleFamilyLink: "Google Family Link መተግበሪያ ጥናት: ተግባራዊ የተጠቃሚ ሙከራ",
        FamilyLinkNotWorking: "Family Link አይሰራም: ፈጣን እና ተፈጻሚ መፍትሄዎች",
        faqsq: [
            {
                question: "የሩቅ ድምጽ መስሚያ መተግበሪያ አለ?",
                answer:
                    "FamiSafe አንደኛ-አገጣጠሚ ድምፅ (One-Way Audio) ከሩቅ መሣሪያዎ ሁሉንም ዙሪያ ያለውን ድምፅ ማዳየት ይፈቅዳል። እርግጠኛ እና የታመነ መሣሪያ ለዘመናዊ ወላጆች ልጆቻቸው ያለውን ዙሪያ በቀጥታ ማሰማር ይሰጣል።",
            },
            {
                question: "በወላጅ መሣሪያ ላይ One-Way Audio እንዴት እንደሚከፈት እንደሚቻል?",
                answer:
                    "እንዴት እንደሚከፈት በFamiSafe በመጠቀም 1. FamiSafe አካውንት ይፍጠሩ። 2. መተግበሪያውን በወላጅና በልጅ ስልኮች ያገጡና መሣሪያዎቹን ይጣሩ። 3. ከFeatures እና Phone Activity በቀኝ ባለው sidebar ውስጥ One-Way Audio ይግቡ። 4. ከዚያ በልጅ ዙሪያ ያለውን ድምፅ ለመቅዳት ይተግበሩ። 5. ማቅደት ከተጨረሰ በኋላ የተቅዱ ፋይሎችን መክፈት፣ መስማር፣ ማስወገድና ማካፈል ይችላሉ።",
            },
            {
                question: "በልጅ ስልክ መስማት ይቻላል?",
                answer:
                    "አዎን፣ በስልክዎ መተግበሪያ አንደኛ-አገጣጠሚ ድምፅ አስተግባሪን በመጫን ቀላል ሁኔታ ያለውን ዙሪያ ድምፅ ማሰማር ይቻላል።",
            },
            {
                question: "በልጅ መሣሪያ One-Way Audio መተግበሪያ መጥፋት ይቻላል?",
                answer:
                    "አንደኛ-አገጣጠሚ ድምፅ (One-Way Audio) በልጅ አንድሮይድ መሣሪያ ላይ 'Account Info' ገጽ ላይ ማቋረጥ ይቻላል። መተግበሪያው ከተቋረጠ በኋላ ወላጆች የልጅ ዙሪያ ድምፅ አይሰሙም።",
            },
        ],/// Activity Reports
        ActivityReport: "የእንቅስቃሴ ሪፖርት",
        Monitoringkidsphones: "የልጆችን ስልኮች በቀጥታ በመከታተል የቀኑን የስልክ እንቅስቃሴ ማወቅ። ልጆች በተለምዶ የሚጠቀሙትን መተግበሪያዎች እና የሚጫኑና የሚያስወግዱትን መተግበሪያዎች ይፈትሹ።",
        GetTheDetailof: "የመሣሪያው የመስመር ላይ እንቅስቃሴ ዝርዝሮችን ያግኙ",
        KeepAnEyeonDaily: "ዕለታዊ የመስመር ላይ ሕይወትን በቀላሉ ይከታተሉ",
        MakeYourOwnJudgemen: "ልጆች በስልክ ተጠምደው እንደሆኑ የራስዎን ግምገማ ያድርጉ",
        Viewyourkids: "የልጆችዎን ዕለታዊ የስልክ እንቅስቃሴ ይመልከቱ",
        Learnwhenandwhich: "መተግበሪያዎች መቼ እና የትኞቹ እንደተጠቀሙ ይወቁ",
        Knowwhetheryourkids: "ልጆችዎ በአንዳንድ መተግበሪያዎች ተጠምደው እንደሆኑ ያውቁ",

        GetFullDetailsof: "የልጆችዎን የቀን ተዕለት ስልክ አጠቃቀም ሙሉ ዝርዝር ያግኙ",
        Getridofthetrouble: "ከልጆችዎ የስልክ አጠቃቀም ዝርዝር ለማረጋገጥ የሚፈጠር ችግርን ያስወግዱ።",
        Getthemostreliable: "Activity Report በመጠቀም እጅግ የታመነ የስልክ አጠቃቀም መረጃ ያግኙ።",
        Bestwaytomonitor: "ወጣት ልጆች የiPhone አጠቃቀምን ለመቆጣጠር የተሻለው መንገድ።",
        Reviewwhichvideos: "ልጆችዎ የጎበኙትን ቪዲዮዎች ወይም ድረ ገጾች ይመልከቱ።",

        GetKidsDeviceApplication: "የልጆችዎን የመሣሪያ መተግበሪያ አዳዲስ ማሻሻያዎችን ያግኙ",
        Keepuptodatewiththe: "ልጆችዎ የሚወዷቸውን አዳዲስ መተግበሪያዎች በቅርብ ይከታተሉ እና ሊኖሩ የሚችሉ አደጋዎችን ያስታውሷቸው።",
        Graspthemostrecently: "በቅርቡ የተጫኑ ወይም የተሰረዙ መተግበሪያዎችን ይመልከቱ።",
        Switchdatestoviewkids: "የልጆችዎን የቅርብ የመስመር ላይ ምርጫዎች ለማየት ቀናትን ይቀይሩ።",
        Checkyourkidsdevices: "የልጆችዎ መሣሪያዎች በማልዌር ተጎድተው እንደሆነ ያረጋግጡ።",
        HowtoChecktheActivity: "የእንቅስቃሴ ሪፖርቱን እንዴት መመርመር ይቻላል?",

        MoreTipsforMonitoring: "የስልክ እንቅስቃሴን ለመቆጣጠር ተጨማሪ ምክሮች",
        To9BestFree: "[2022] ለAndroid የተመረጡ 9 ምርጥ ነፃ የወላጅ መቆጣጠሪያ መተግበሪያዎች",
        BestiOSParentalControl: "[2022] ለiPad እና iPhone ምርጥ የiOS የወላጅ መቆጣጠሪያ መተግበሪያዎች",
        HowtoUseActivityMonitor: "በMac ላይ Activity Monitor እንዴት መጠቀም ይቻላል?",
        HowtoSeeWhatMyKidisDoing: "ልጄ በስልኩ ምን እያደረገ/እያደረገች እንደሆነ እንዴት ማየት እችላለሁ?",
        Top10BestFreePhoneMonitoringApps: "ለAndroid እና iPhone ምርጥ 10 ነፃ የስልክ መቆጣጠሪያ መተግበሪያዎች",

        faqxs: [
            {
                question: "1. በልጆቼ ስማርትፎን ላይ ያለውን የመስመር ላይ እንቅስቃሴ እንዴት መቆጣጠር እችላለሁ?",
                answer:
                    "Google Play Store ይክፈቱ እና FamiSafe የወላጅ መቆጣጠሪያ መተግበሪያን ይፈልጉ። መተግበሪያውን በመቆጣጠር ለሚፈልጉት ሁሉም መሣሪያዎች ይጫኑ (በአንድ መለያ እስከ 5 መሣሪያዎች መቆጣጠር ይችላሉ)። ከዚያ የአባልነት መለያ ይፍጠሩ። ሁሉንም መሣሪያዎች ከወላጅ መሣሪያ ጋር ያገናኙ እና መቆጣጠር ይጀምሩ። ማቀናበሩ ከተሳካ በኋላ የልጆችዎን የእንቅስቃሴ ሪፖርት መመልከት፣ ወደ የማይገባ ድረ-ገጾች እና መተግበሪያዎች መዳረሻን መገደብ፣ በእረፍት እና በትምህርት ጊዜ ጨዋታዎችን እና ሌሎች መተግበሪያዎችን መቆለፍ ይችላሉ።",
            },
            {
                question: "2. የስልክ ሱሰኝነት ምልክቶች ምንድን ናቸው?",
                answer:
                    "ልጅዎ በስልክ ላይ ሱሰኛ መሆኑን ሊያመለክቱ የሚችሉ ምልክቶች እነዚህ ናቸው፦ 1) ብዙ ጊዜ መቆጣት 2) ድብርት መስማት 3) ውጥረት መታየት 4) በቀላል ነገሮች መናደድ 5) እረፍት አለመኖር 6) እንቅልፍ መከልከል 7) አስፈላጊ ክስተቶች ጊዜም እንኳን (ለምሳሌ ቀብር) ስልኩን መተው ካልቻለ 8) ከሰዎች መራቅ እና መግባባት መቀነስ 9) ከቤተሰብ ጋር የእራት ጊዜን መተው ወይም የቤት ሥራዎችን መ neglect 10) በሌሊት ወይም በአልተለመደ ሰዓት መተኛት።",
            },
            {
                question: "3. በልጆች መካከል በጣም የተለመዱ መተግበሪያዎች የትኞቹ ናቸው?",
                answer:
                    "በiPhone እና Android ላይ በልጆች መካከል በጣም የሚወዱ መተግበሪያዎች፦ 1) YouTube 2) Instagram 3) WhatsApp 4) Spin Safe Browser 5) Snapchat 6) Facebook 7) Android Messages (መልዕክት) 8) YouTube Kids 9) Chrome 10) Netflix 11) Facebook Messenger።",
            },
            {
                question: "4. ልጆች በቀን ስንት ሰዓት ስልክ መጠቀም አለባቸው?",
                answer:
                    "እያንዳንዱ ልጅ የተለየ ነው። እንኳን ባለሙያዎችም ልጆች በዲጂታል መሣሪያዎች ላይ ስንት ጊዜ መ spend እንዳለባቸው የተወሰነ መልስ መስጠት አልቻሉም። እኛ የምንመክረው በትምህርት ቀናት 1–2 ሰዓት መጠቀም መመኪያ መጠን ነው። በሳምንት መጨረሻ ወይም በበዓላት ጊዜ 3–4 ሰዓት ሊሆን ይችላል። ከሁሉም በላይ አስፈላጊው ነገር ወላጆች ልጆቻቸውን ከቴክኖሎጂ ጋር ጤናማ ግንኙነት እንዲኖራቸው መመራት ነው።",
            },
        ],
        /// YouTube የወላጅ መቆጣጠሪያ መተግበሪያ
        YouTubeParentalControl: "የYouTube የወላጅ መቆጣጠሪያ",
        Herearethecompletel: "በተለያዩ መሣሪያዎች ላይ የልጆች የYouTube አጠቃቀምን ለመቆጣጠር የሚረዱ ሙሉ እና አስተማማኝ መንገዶች እነዚህ ናቸው።",
        TableofContents: "የይዘት ማውጫ",
        youtubeParentalLinks: [
            {
                title: "ወላጆች ስለ YouTube ማወቅ ያለባቸው ነገሮች",
                path: "/parents-should-know-youtube",
            },
            {
                title: "የYouTube የተገደበ ሁኔታ (Restricted Mode)",
                path: "/youtube-restricted-mode",
            },
            {
                title: "FamiSafe የYouTube የወላጅ መቆጣጠሪያ",
                path: "/famisafe-youtube-parental-control",
            },
            {
                title: "የYouTube የወላጅ መቆጣጠሪያ ምክሮች እና ዘዴዎች",
                path: "/youtube-parental-control-tips",
            },
            {
                title: "ለYouTube የወላጅ መቆጣጠሪያ የGoogle Play ወይም iOS ቅንብሮች",
                path: "/youtube-parental-control-settings",
            },
            {
                title: "ወደ YouTube Kids መመለስ",
                path: "/youtube-kids",
            },
            {
                title: "Google SafeSearch አብራ",
                path: "/google-safesearch",
            },
        ],
        WhatParentsShould: "ወላጆች ስለ YouTube ማወቅ ያለባቸው ነገሮች ፦",
        youtubeParentalCards: [
            {
                title: "አደገኛ ቻሌንጆች እና ቫይራል ቪዲዮዎች",
                description:
                    "በYouTube ላይ ብዙ አደገኛ እና ቫይራል ቪዲዮዎች አሉ፣ እነሱም በፍጥነት ይተላለፋሉ። አንዳንድ ጊዜ የYouTube ተጠቃሚዎች እጅግ በጣም ቅመም ያለ ምግብ መብላት ወይም ወንዝ ውስጥ መዝለል ያሉ ያልተለመዱ ነገሮችን ሲያደርጉ ይታያሉ። እነዚህ ቪዲዮዎች ብዙ እይታዎችና ወደዶች ሲያገኙ ሌሎችም ሰዎች መቀላቀል እና የራሳቸውን ቪዲዮ ማጋራት ይፈልጋሉ።",
                bgColor: "bg-[#E0F8F6]",
                iconColor: "bg-[#00D1C1]",
            },
            {
                title: "ለእድሜ የማይመጥን የቪዲዮ ይዘት",
                description:
                    "YouTube በዓለም ላይ ትልቁ የቪዲዮ መጋራት ድረ-ገጽ ነው። አንዳንድ ጊዜ ይዘቶች የYouTube ፖሊሲን ባይጥሱም ለልጆች ተገቢ ላይሆኑ ይችላሉ። YouTube ቪዲዮዎችን የሚመርመር ቡድን እና ጎጂ ይዘቶችን ለማስወገድ መንገዶች ቢኖሩትም፣ አንዳንድ አስጸያፊ ወይም አስጨናቂ ይዘቶች እንዲሁም ሊያልፉ ይችላሉ።",
                bgColor: "bg-[#F3EBFF]",
                iconColor: "bg-[#8C5EFF]",
            },
            {
                title: "የYouTube ሱሰኝነት",
                description:
                    "ልጆች በYouTube ሱሰኝነት በጣም ቀላል የሚጋለጡ ናቸው፣ ምክንያቱም አስደሳች ባህሪያቱና የማያቋርጥ ይዘት አቅርቦቱ ነው። ጥናቶች እንደሚያመለክቱት 28% ወጣቶች በአንድ ጊዜ ከአንድ ሰዓት በላይ በYouTube ላይ ያሳልፋሉ። 16% ወጣቶች ከ1 እስከ 2 ሰዓት ያህል ይጠቀማሉ፣ 12.5% ደግሞ ከ2 ሰዓት በላይ ቪዲዮ ይመልከታሉ።",
                bgColor: "bg-[#FFF3EE]",
                iconColor: "bg-[#FF6B4C]",
            },
            {
                title: "በቂ ክትትል እና መቆጣጠር አለመኖር",
                description:
                    "በማህበራዊ ሚዲያ ላይ የመስመር ላይ ማስጨናቂያ (Cyberbullying) ማንኛውንም ሰው በማንኛውም ጊዜ ሊያጋጥም ይችላል። ምክንያቱም ማህበራዊ ሚዲያ በጣም የተለመደ መድረክ ነው። Ditch the Label ያደረገው ጥናት 92% ወጣቶች YouTube እንደሚጠቀሙ ያሳያል፣ ከእነሱም 10% በYouTube ላይ የመስመር ላይ ማስጨናቂያ ተጋጥሟቸዋል።",
                bgColor: "bg-[#FFF9E6]",
                iconColor: "bg-[#FFB822]",
            },
        ],
        restrictedModeContent: {
            browser: {
                title: "1.1 በብራውዘር ላይ የተገደበ ሁኔታ (Restricted Mode) አብራ",
                steps: [
                    "ወደ YouTube ድረ-ገጽ ግባ እና በመለያህ ግባ።",
                    "ከላይ በቀኝ በኩል ያለውን የመለያ ፕሮፋይል ጠቅ አድርግ።",
                    "የተገደበ ሁኔታ (Restricted Mode) አማራጭን አብራ።",
                ],
            },
            app: {
                title: "1.2 በመተግበሪያ ላይ የተገደበ ሁኔታ (Restricted Mode) አብራ",
                steps: [
                    "የYouTube መተግበሪያን ክፈት እና የመለያ ፕሮፋይልን ጫን።",
                    "ከዝርዝሩ መጨረሻ ያለውን Settings (ቅንብሮች) ፈልገህ ጠቅ አድርግ።",
                    "General ን ጫን ከዚያም የተገደበ ሁኔታ (Restricted Mode) አብራ።",
                ],
            },
            image: {
                src: "https://famisafe.wondershare.com/images/images-2020/new/subject/youtube-parental-controls-restricted-mode.png",
                alt: "የRestricted Mode መመሪያ",
            },
        },
        PartHowtoUseYouTubes: "ክፍል 1፡ የYouTube የ‘Restricted’ Mode ን በመጠቀም የYouTube የወላጅ መቆጣጠሪያ እንዴት መቀናበር ይቻላል?",

        IncorporatedbyGoogleYouTubeR: "በGoogle የተገነባው የYouTube የRestricted Mode ለተጠቃሚዎች ከመለያቸው ውስጥ አስጨናቂ ይዘቶችን ለመጣራት የሚረዳ እጅግ ጥሩ መሳሪያ ነው። ይህ ሁኔታ ሲነቃ አስፈላጊ ያልሆኑ ወይም ለእድሜ የማይመጡ ይዘቶች በአልጎርይዝሙ ይታገዳሉ እና ይቆረጣሉ። ይህም ወላጆች ልጆቻቸው የሚመለከቱትን ይዘት በተሻለ መልኩ እንዲቆጣጠሩ ያግዛቸዋል። ሙሉ በሙሉ የማይሳካ ቢሆንም፣ ለቤተሰቦች ንፁህ፣ ደህንነታማ እና የተቆጣጠረ የYouTube ማየት ልምድ ይፈጥራል። የYouTube የወላጅ መቆጣጠሪያን ለመቀናበር Restricted Mode እንዴት መጠቀም እንደሚቻል ይወቁ።",

        restrictedModeFamilyContent: {
            infoCard: {
                title: "ለቤተሰብዎ የRestricted Mode መቆጣጠሪያ",
                description:
                    "ወላጆች Family Link በመጠቀም በልጅ መለያ ላይ Restricted Mode ማብራት ይችላሉ። ይህ ሁኔታ ከተነቃ በኋላ ልጆች በሚገቡባቸው ሁሉም መሣሪያዎች ላይ ይህን ቅንብር ማጥፋት አይችሉም። ነገር ግን 13 ዓመት ሲሞላቸው መደበኛ የGoogle መለያ በመፍጠር እገዳውን በቀላሉ ማጥፋት ይችላሉ።",
            },
            pros: {
                title: "ጥቅሞች፡",
                items: [
                    "ልጆችን ከYouTube ውስጥ ያሉ ጎጂ ይዘቶች ለመጠበቅ በጣም ይረዳል።",
                    "ልጆች አስፈላጊ ያልሆነ ቃላትን እና የሚያዋርዱ ይዘቶችን እንዳይማሩ ይከላከላል።",
                    "ከኃይለኛ ድርጊቶች፣ የተፈጥሮ አደጋዎች እና አሳዛኝ ክስተቶች የሚመጣ የስነ-ልቦና ጉዳትን ይቀንሳል።",
                    "ልጆች እንደ ንጥረ ነገር መጠቀም ወይም የጾታ ድርጊቶች ያሉ ጎጂ ባህሪያትን እንዳይተከሉ ይከላከላል።",
                ],
            },
            cons: {
                title: "ጉዳቶች፡",
                items: [
                    "Proxy ድረ-ገጽ፣ VPN ወይም NSFW በመጠቀም በቀላሉ ሊታለፍ ይችላል።",
                    "ልጅ ሌላ መለያ በመፍጠር እገዳውን ሊያልፍ ይችላል።",
                    "አንዳንድ አስጨናቂ ቪዲዮዎች እንዲሁም ሊያልፉ ይችላሉ።",
                ],
            },
        },
        YouTubeParentalControl: "2.1 በAndroid ላይ የYouTube የወላጅ መቆጣጠሪያ",
        FamiSafeAndroidparental: "FamiSafe የAndroid የወላጅ መቆጣጠሪያ መፍትሄ የYouTube ይዘት መለየትና የመተግበሪያ መቆጣጠር ያቀርባል። አስጠራጣሪ ጽሑፎችን ለመከታተል፣ ወላጆች የልጆቻቸውን የYouTube መለያዎች በመገናኘት አግባብ ያልሆኑ የቪዲዮ ርዕሶች፣ መግለጫዎች እና አስተያየቶችን ሊያገኙ ይችላሉ። በAndroid ላይ የYouTube መተግበሪያ መቆጣጠሪያ በመጠቀም የቪዲዮ ታሪክን ማየት እና አደገኛ ቪዲዮዎችን ወይም ቻናሎችን መከልከል ይችላሉ።",
        PartHowtoUseFamiSafe: "ክፍል 2፡ የYouTube የወላጅ መቆጣጠሪያን ለማቀናበር FamiSafeን እንዴት መጠቀም ይቻላል?",
        FamiSafeisawidelyused: "FamiSafe የልጆች ስልክ እንቅስቃሴን ከሩቅ ለመቆጣጠር በብዙ ተግባራት የተሞላ በስፋት የሚጠቀም የወላጅ መቆጣጠሪያ መተግበሪያ ነው። በAndroid እና iOS መሳሪያዎች ላይ ሊጠቀሙበት ይችላሉ። ወላጆች የማያ ጊዜን ማስተዳደር፣ የአካባቢ ክትትል ማድረግ፣ የድር ይዘት ማጣራት እና በልጆቻቸው ስልኮች ላይ አደገኛ ይዘት ሲገኝ ማሳወቂያ መቀበል ይረዳል። በተጨማሪም የመተግበሪያ አጠቃቀምን ሊከታተል እና ካስፈለገ መተግበሪያዎችን መከልከል ይችላል።",
        RegisteraFamiSafeaccount: "በድህረ ገፁ ወይም ከGoogle Play መተግበሪያ የFamiSafe መለያ ይመዝገቡ።",
        InstallFamiSafeappboth: "FamiSafeን በወላጅና በልጅ መሳሪያዎች ላይ ይጫኑ።",
        Connectkiddeviceand: "የልጁን መሳሪያ ያገናኙ እና ከወላጅ መሳሪያ ያስተዳድሩ።",
        YouTube22Parental: "2.2 በiOS መሳሪያ ላይ የYouTube የወላጅ መቆጣጠሪያ",
        FamiSafeiPhoneparental: "FamiSafe የiPhone የወላጅ መቆጣጠሪያ መፍትሄ ከአግባብ ያልሆኑ የቪዲዮ ርዕሶች፣ መግለጫዎች እና አስተያየቶች የሚመጡ አደገኛ ቃላትን ለመከታተል ይረዳል። ልጆች በiPhone ወይም iPad ላይ አደገኛ ምልክቶች ካጋጠሟቸው ወላጆች ማሳወቂያ ይቀበላሉ።",
        RegisteraFamiSafeaccount: "በድህረ ገፁ ወይም ከApp Store መተግበሪያ የFamiSafe መለያ ይመዝገቡ።",
        InstallFamiSafeappbothon: "FamiSafeን በወላጅና በልጅ መሳሪያዎች ላይ ይጫኑ።",
        Connectkidsdeviceand: "የልጆችን መሳሪያ ያገናኙ እና ከወላጅ መሳሪያ ያስተዳድሩ።",
        How31tosetparental: "3.1 በGoogle Play Store ውስጥ የወላጅ መቆጣጠሪያን እንዴት ማቀናበር ይቻላል?",
        TaponAppsGamesAnd: "«Apps & Games» ላይ ይጫኑ እና ለመጀመሪያ ጊዜ PIN ያስገቡ።",
        Selectyourpreferredrating: "የሚፈልጉትን የደረጃ ምደባ በምልክት በመጫን ይምረጡ።",
        Click76onSave: "«Save» ላይ ይጫኑ።",
        Repeatthesameprocessfo: "ለፊልሞች፣ TV፣ ሙዚቃ እና መጽሐፍት ተመሳሳይ ሂደቱን ይድገሙ።",
        PartHowtoUseGooglePlay: "ክፍል 3፡ የYouTube የወላጅ መቆጣጠሪያን ለማቀናበር Google Play ወይም iOS ቅንብሮችን እንዴት መጠቀም ይቻላል?",
        Inhispartwewilllookat: "በዚህ ክፍል፣ በAndroid እና iOS መሳሪያዎች ላይ የYouTube የወላጅ መቆጣጠሪያን እንመልከታለን። ለAndroid ተጠቃሚዎች፣ Google Play የወላጅ መቆጣጠሪያ የተወሰኑ መተግበሪያዎችን መጫን ማስተዳደር፣ የሚታዩ ማስታወቂያዎች ከእድሜ ጋር ተገቢ መሆናቸውን ማረጋገጥ እና ያልተፈለጉ ወይም ድንገተኛ ግዢዎችን መከላከል ያስችላል። በiOS መሳሪያዎች ላይ ደግሞ፣ ወላጆች በቅንብሮች (Settings) ውስጥ Screen Time በማንቃት የወላጅ መቆጣጠሪያን ማቀናበር ይችላሉ። ተገቢ የእድሜ ገደቦችን እና እንደፈለጉት ማሻሻያዎችን በማዘጋጀት፣ ልጅዎ የiOS መሳሪያዎን በነፃነት እንዲጠቀም ማስችል ይችላሉ።",
        restrictedModeFamilyContentt: {
            infoCard: {
                title: "የYouTube የመመልከቻ ጊዜን መቆጣጠር እና መተግበሪያ መከልከል",
                description:
                    "FamiSafe እንዲሁም የመመልከቻ ጊዜ (Screen Time) እና መተግበሪያ መከልከል ባህሪያትን ይሰጣል። ወላጆች ልጆች በYouTube ላይ ምን ያህል ጊዜ እንዲያሳልፉ መቆጣጠር ይችላሉ፣ ልጆች በYouTube ላይ ከመጠን በላይ ከተጠመዱ እንኳን መተግበሪያውን ሙሉ በሙሉ መከልከል ይቻላል።",
            },
            pros: {
                title: "ጥቅሞች፡",
                items: [
                    "A. በAndroid ላይ የYouTube የመመልከቻ ታሪክን መመርመር እና አደገኛ ቪዲዮዎችን እና ቻናሎችን መከልከል ያስችላል።",
                    "B. ከተቀመጡበት ቦታ ሳይነሱ የልጅ ስልክ እንቅስቃሴን በቀላሉ መከታተል ይቻላል።",
                    "C. የመመልከቻ ጊዜን ከሩቅ መቆጣጠር ያስችላል።",
                    "D. ነፃ ሙከራ አለው፣ እና የክፍያ እቅዶቹም ተመጣጣኝ ናቸው።",
                ],
            },
            cons: {
                title: "ጉዳቶች፡",
                items: [
                    "A. የiPhone ስሪቱ ውስን ባህሪያት አሉት።",
                    "B. በiOS መሳሪያ ላይ መተግበሪያዎችን በምድብ ብቻ መከልከል ይቻላል።",
                ],
            },
        },
        How32tosetparental: "3.2 በiOS ቅንብሮች ውስጥ የወላጅ ቁጥጥር እንዴት መቀናበር ይቻላል?",
        GowetoSettingsand: "ወደ Settings ይሂዱ እና ወደ ታች በመሸብለል Screen Time ያግኙ።",
        Clicke43onContent: "Content & Privacy Restrictions ላይ ይጫኑ።",
        Go3wrrtoiTunes: "ወደ iTunes & App Store Purchases ይግቡ።",
        Setto45DontAllow: "ወደ “Don’t Allow” ያቀናብሩ።",
        Tap5rdgfonContent: "YouTube ድረ-ገጾችን ለመገደብ Content Restrictions ላይ ይጫኑ።",
        TapkpoAppLimitsandc: "የመመልከቻ ጊዜን ለመገደብ App Limits ይጫኑ እና የመተግበሪያ ምድቦችን ይምረጡ።",
        prosConsContent: {
            pros: {
                title: "ጥቅሞች፡",
                items: [
                    "ከሊሆኑ አደገኛ ሶፍትዌሮች መጠበቅ ይረዳል።",
                    "ተጨማሪ ነገር ለመግዛት አያስፈልግም።",
                    "ተግባራዊ እና የተረጋገጡ ውስጣዊ የወላጅ ቁጥጥር ቅንብሮች አሉት።",
                ],
            },
            cons: {
                title: "አሉታዊ ጎኖች፡",
                items: [
                    "ተሻጋሪ መድረክ (cross-platform) መፍትሄ የለውም፤ የiPhone መሳሪያዎችን ከAndroid መቆጣጠር አይቻልም።",
                    "የደህንነት መጠኑ ዝቅተኛ ነው፤ የአንቲ-ቫይረስ ወይም የማልዌር መከላከያ አይሰጥም።",
                    "አዲስ መለያ በመፍጠር ወይም የሶስተኛ ወገን መተግበሪያዎችን በመጠቀም በቀላሉ ሊተወ ይችላል።",
                ],
            },
        },
        Part4TurnpoitoYouTubeKids: "ክፍል 4፡ ወደ YouTube Kids መመለስ",
        YouTubeKityudsisdesignated: "YouTube Kids ከ12 ዓመት በታች ያሉ ልጆች ፍላጎታቸውን እንዲያገኙ እና ቪዲዮዎችን በደህንነት የተገደበ አካባቢ ውስጥ እንዲመለከቱ የተነደፈ መተግበሪያ ነው። እንደ ልጅዎ ዕድሜ መሰረት፣ ፕሪስኮል (4 ዓመት ወይም ከዚያ በታች)፣ ታናሽ (5 እስከ 7)፣ እድሜ ያላቸው (8 እስከ 12) በማምረጥ በመተግበሪያው የሚታዩ የቪዲዮ አይነቶችን መወሰን ይችላሉ። በተጨማሪም፣ የስክሪን ጊዜ ገደብ ማዘጋጀት፣ ቪዲዮዎችን መከልከል እና የተመለከቱ ታሪኮችን በYouTube Kids መመርመር ይችላሉ።",
        Howtosettyuparental: "በYouTube Kids ላይ የወላጅ ቁጥጥር እንዴት መቀናበር ይቻላል",
        Intheapjhptapthe: "በመተግበሪያው ውስጥ፣ በታች ያለውን የመቆለፊያ (Lock) ምልክት ይንኩ።",
        Answeraslswimple: "ቀላል የብዛት ሂሳብ ጥያቄ ይመልሱ፣ ወይም የሚታየውን ቁጥር ያስገቡ። ወይም ያቀናበሩትን የይለፍ ቃል (passcode) ያስገቡ።",
        SelectSetting: "የልጅዎን መገለጫ ለማሻሻል እና ለመቀየር ቅንብሮች (Settings) ይምረጡ።",
        SelectTimertoset: "ለመተግበሪያው የስክሪን ጊዜ ገደብ ለማዘጋጀት ታይመር (Timer) ይምረጡ።",
        prosConsContentts: {
            pros: {
                title: "ጥቅሞች፡",
                items: [
                    "A. ልጆችን ደህንነታቸውን ለማረጋገጥ የተጣሩ ቪዲዮዎች።",
                    "B. እንደ የስክሪን ጊዜ ገደብ፣ ቪዲዮ መከልከያ ያሉ የወላጅ ቁጥጥር ባህሪያትን ይሰጣል።",
                    "C. ወላጆች የተመለከቱ ታሪኮችን እንዲመርምሩ ያስችላል።",
                    "D. ለወላጆች ቀላል ለመጠቀም እና ለማቀናበር።",
                ],
            },
            cons: {
                title: "ጉዳቶች፡",
                items: [
                    "A. ልጆች የፈለጉትን ቪዲዮ ለማየት የYouTube ድር ጣቢያን መጠቀም ወይም ቀጥታ የYouTube መተግበሪያን ማውረድ ይችላሉ።",
                    "B. የወላጅ ቁጥጥር መቆለፊያ በቀላሉ ሊተላለፍ ይችላል።",
                    "C. አንዳንድ ያልተገባ ይዘቶች እንኳን ሊያልፉ ይችላሉ።",
                ],
            },
        },
        Part5eeseGoogl: "ክፍል 5፡ ለYouTube የወላጅ ቁጥጥር Google SafeSearch መጠቀም",
        GoogleSafeSearchisf: "Google SafeSearch ያልተገባ ምስሎች፣ ጽሑፎች ወይም ድር ገጾችን ከፍለጋ ውጤቶች ለመጣራት አልጎሪዝም የሚጠቀም ባህሪ ነው። ልጆች ብቻቸውን ሲያሰሱ እንደ ፖርኖግራፊ፣ ግፍ ያሉ ግልጽ ይዘቶች እንዳያጋጥሟቸው ለመጠበቅ ጠቃሚ ነው። ይህ ባህሪ ሊቆለፍ ይችላል እና እርስዎ በሚያቀናብሩት የይለፍ ቃል ብቻ ሊጠፋ ይችላል።",
        TurnnGoeogle: "5.1 በብራውዘር ላይ Google SafeSearch ማብራት",
        GotoSearrrchSettings: "ወደ የፍለጋ ቅንብሮች (Search Settings) ይሂዱ።",
        FindSafrreSearchfilters: "የSafeSearch ማጣሪያዎችን ያግኙ።",
        Clickthrreboxnextto: "ባህሪውን ለማብራት “SafeSearch አብራ” የሚለውን ሳጥን ይንኩ።",
        Scrolldorrtwnandclick: "ወደ ታች ይውረዱ እና “አስቀምጥ (Save)” ይጫኑ።",
        TurndronGoogle: "5.2 በመተግበሪያ ላይ Google SafeSearch ማብራት",
        LaunchtheGoogleapp: "የGoogle መተግበሪያውን ክፈቱ።",
        Taponthethreedot: "በታች ቀኝ ያለውን የሶስት ነጥብ ምልክት ይንኩ።",
        TapSettingsGeneral: "Settings → General ይንኩ። ወደ ታች ተመልከቱ እና “SafeSearch” የሚለውን ክፍል አግኝተው ያብሩት።",
        restrictedModeFamilyContenttt: {
            infoCard: {
                title: "ማስታወሻ፡",
                description:
                    "SafeSearch በGoogle የፍለጋ ውጤቶች ላይ ብቻ ይሰራል። በኔትዎርክዎ ላይ ያሉ ተጠቃሚዎች በሌሎች የፍለጋ ሞተሮች ወይም በቀጥታ ወደ ግልጽ ድር ጣቢያዎች በመግባት ያልተገባ ይዘቶችን እንዳያገኙ አይከለክልም።",
            },
            pros: {
                title: "ጥቅሞች፡",
                items: [
                    "A. ልጆችን ከመስመር ላይ ግልጽ ይዘቶች ይጠብቃል።",
                    "B. ባህሪው ከተቆለፈ በኋላ ይለፍ ቃሉ ካልነበራቸው ልጆች ሊያጥፉት አይችሉም።",
                ],
            },
            cons: {
                title: "ጉዳቶች፡",
                items: [
                    "A. አንዳንድ ተቀባይነት ያላቸው ድር ጣቢያዎች ሊታገዱ ይችላሉ።",
                    "B. ሁሉንም ያልተገባ ይዘት ማገድ አይችልም።",
                    "C. ልጆች እንደ Yahoo ወይም Bing ያሉ ሌሎች የፍለጋ ሞተሮችን በቀላሉ መጠቀም ይችላሉ።",
                ],
            },
        },
        YouTubeParental87Cont: "የYouTube የወላጅ ቁጥጥር ምክሮች እና ዘዴዎች",
        guides: [
            {
                title: "የYouTube ቪዲዮዎችን እንዴት መከልከል ይቻላል?",
                desc: "በልጅዎ መሣሪያ ላይ ጎጂ ቪዲዮዎችን ለመከልከል ውጤታማ መንገዶችን ያቀርባል።",
                bg: "bg-[#EAFBF8]",
                path: "/block-youtube-videos",
            },
            {
                title: "የYouTube የወላጅ ማጣሪያን እንዴት ማብራት ይቻላል?",
                desc: "በልጅዎ የYouTube መለያ ላይ የይዘት ማጣሪያ እንዴት መክፈት እና የወላጅ ቁጥጥርን ከርቀት መቀናበር እንደሚቻል ይማሩ።",
                bg: "bg-[#F3EEFF]",
                path: "/youtube-parental-filter",
            },
            {
                title: "የYouTube የመመልከቻ ታሪክን እንዴት መከታተል ይቻላል?",
                desc: "ልጆችዎ የYouTube የመመልከቻ ታሪክን ለመመርመር ተግባራዊ መንገዶችን ያግኙ።",
                bg: "bg-[#FFF1EA]",
                path: "/monitor-youtube-history",
            },
            {
                title: "የYouTube ቻናሎችን ከርቀት እንዴት መከልከል ይቻላል?",
                desc: "በልጅዎ የAndroid ስልክ ላይ የሚያስጨንቁ የYouTube ቻናሎችን ከርቀት ለመከልከል ውጤታማ መንገድ ይማሩ።",
                bg: "bg-[#FFF6E8]",
                path: "/block-youtube-channels",
            },
            {
                title: "YouTubeን በAndroid ላይ እንዴት መከልከል ይቻላል?",
                desc: "በልጅዎ የAndroid ስልክ ላይ የYouTube መተግበሪያን ለመከልከል ዘዴዎችን ያቀርባል።",
                bg: "bg-[#F3EEFF]",
                path: "/block-youtube-android",
            },
            {
                title: "በYouTube ላይ የአዋቂ ይዘትን እንዴት መከልከል ይቻላል?",
                desc: "ልጆችዎን ለመጠበቅ በYouTube ላይ የአዋቂ ይዘትን እንዴት መከልከል እንደሚቻል በዚህ መመሪያ ይማሩ።",
                bg: "bg-[#EAFBF8]",
                path: "/block-youtube-adult-content",
            },
        ],
        /// Tiktok History
        CheckKjhidsTikTok: "የልጆች የTikTok ታሪክ መመልከት",
        Getdetailffsaboutthe: "ልጆችዎ በTikTok ላይ የሚመልከቱት ቪዲዮዎች ስለሚኖሩ ዝርዝር ያግኙ። ከተገቢ ሳይሆኑ ቪዲዮዎች ይቆሩቸው።",
        TheBestWaytoPffreven: "ልጆችን ከTikTok ጉዳይ እንዴት መከላከል ይቻላል",

        UnderstandytrfYourKidBetter: "ልጆችዎን በጥልቅ ያስረዳቸው",
        NoneedtocoionnectTikTok: "TikTok መለያ መገናኘት ያስፈልጋል ብዬ አይደለም፤ በFamiSafe በAndroid ላይ የTikTok ታሪክን ነፃ መመልከት ይቻላል።",
        Getnforlljimation: "• ለተወሰነ ቀን የተጎበኘውን ቻናሎች መረጃ ያግኙ።",
        ClickViekkgwtoge: "• ለቪዲዮው ዝርዝር ለማግኘት 'View' ይጫኑ፣ ልጆችዎ ምን እንደሚመልከቱ ይዩ።",
        Checkhowlongy: "• ልጆችዎ በTikTok ላይ ምን ያህል ጊዜ እንደ ተቆዩ ይመልከቱ።",
        faqbs: [
            {
                question: "1. እንዴት በልጆች ስልኮች ላይ የመስመር ላይ እንቅስቃሴ መከታተል ይቻላል?",
                answer:
                    "1. የGoogle Play ሱቅ ክፈት እና FamiSafe የወላጅ መቆጣጠሪያ መተግበሪያ ፈልግ። እንዲከታተሉ በሚፈልጉት ሁሉም መሣሪያዎች ያጫኑ (አንድ አካውንት ላይ ከአምስት መሣሪያዎች መከታተል ይቻላል). 2. በመተግበሪያው አካውንት ክፈት። 3. ሁሉንም መሣሪያዎች ከወላጆች መሣሪያ ጋር ያገናኙ እና መከታተል ይጀምሩ። ከስኬታማ ማስተካከል በኋላ የልጆችን እንቅስቃሴ ሪፖርቶች መመልከት፣ የልጆች መዳረሻን ወደ የተሳሳተ ድህረ ገጽና መተግበሪያዎች መከለከል፣ ጨዋታዎችና ሌሎች መተግበሪያዎችን በእረፍት እና በትምህርት ጊዜ መከለከል ይቻላል።",
            },
            {
                question: "2. የስልክ ማንከባከብ ምልክቶች ምንድን ናቸው?",
                answer:
                    "እነዚህ የሚከታተሉት ምልክቶች ልጆችዎ በስልክ ላይ የተሳሳተ የእርስዎ መንገድ ሊኖረው ይችላል። 1) ልጅዎ በብዙ ጊዜ ተቈጣ 2) ድክመትን ማጋጠም 3) ተጨነቀ ይመስላል 4) በአነስተኛ ነገሮች ላይ ቀን ይሰማል 5) እንቅልፍ እንደሌለ ወይም እንቅስቃሴ የሌለው 6) እንቅልፍ በግልጽ ይታያል 7) ከአስፈላጊ ክስተት በስተቀር ልጅዎ ስልኩን አልቆረጠም 8) በድንገት ከእርስዎ ጋር ኮሚኒኬሽን መጠን እንደሌለ ይታያል 9) ከቤተሰብ ጋር የምሳ ጊዜን ወይም ዕለታዊ ሥራዎችን መተው 10) በተለያዩ ሰዓታት መኝታ።",
            },
            {
                question: "3. በልጆች መካከል ትልቁ የሚጠቀሙት መተግበሪያዎች ምንድን ናቸው?",
                answer:
                    "በልጆች መካከል ትልቁ የሚጠቀሙት የiPhone እና Android መተግበሪያዎች እነዚህ ናቸው፡ 1) YouTube 2) Instagram 3) WhatsApp 4) Spin Safe Browser 5) Snapchat 6) Facebook 7) Android Messages (text) 8) YouTube Kids 9) Chrome 10) Netflix 11) Facebook Messenger።",
            },
            {
                question: "4. በአንድ ቀን ልጆች በስልክ ላይ ምን ያህል ሰዓት መቆየት አለባቸው?",
                answer:
                    "ልጅ ሁሉ በተለየ ሁኔታ ይለያል። እንኳን ሙያ ሰማእታዎች እንዴት ተጠቀሙ መጠን አይቀርባቸውም። በትምህርት ቀኖች 1-2 ሰዓት የሚመጣ ነገር ይመከራል። በእሁድ ወይም በበአልጋዎች ጊዜ 3-4 ሰዓት ያህል ይመከራል። ከሁሉም በላይ፣ ወላጆች ልጆቻቸውን ከቴክኖሎጂ ጋር ጤናማ ግንኙነት እንዲኖራቸው መደበኛ መርምር አለባቸው።",
            },
        ],
        UltimatedeGuidetoWatc: "TikTok እንዴት ማየት ወይም መከታተል እንደሚቻል መመሪያ ሙሉ",
        SimpleWaystRestric: " ለልጆችዎ የTikTok ስክሪን ጊዜ መገደብ 5 ቀላል መንገዶች",
        BestApphosforTik: " ለTikTok መከታተል እና ስክሪን ጊዜ መገደብ 6 ምርጥ መተግበሪያዎች",
        LeadingTpoikTokProfile: " 5 ከፍተኛ የTikTok ፕሮፋይል እይታ መተግበሪያዎች ለፕራይቬት ፕሮፋይሎች ማረጋገጥ",
        HowtoSebuntUpParenta: " በTikTok ላይ የወላጅ መቆጣጠሪያ እንዴት መቀመጥ [2025]",
        HowtoRyiemoteChec: " እንዴት ልጆቼ የTikTok ታሪክ ከሩቅ ማረጋገጥ እንደሚቻል?",
        HowtoViewKidsTik: "ልጆችዎ የTikTok ታሪክ እንዴት ማየት እንደሚቻል?",
        /// የማይገባ ምስሎች (Inappropriate Pictures)
        DetectSuspicihhyousPhotos: "አጠራጣሪ ምስሎችን መለየት",
        Detectsuspyyticiousimages: "በልጆች መሳሪያዎች ላይ የሚገኙ እንደ ራስ-እርቃን ፎቶዎችና የወሲብ ምስሎች ያሉ አጠራጣሪ ምስሎችን ይለያል፤ ወላጆችንም በአፋጣኝ ማሳወቂያ ያሳውቃል፣ በስልኮች ላይ ፖርኖግራፊን ቀላል ለመከልከል ይረዳል።",
        Minimize65TheExposurea: "ከፖርኖግራፊ ጋር የሚያጋጥም መጋለጥንና ጉዳቱን መቀነስ",
        MonitytrorKidAlbum: "የልጆች ፎቶ አልበም መከታተል",
        Monitorhfdkidsalbums: "በልጆች ፎቶ አልበሞች ውስጥ የፖርኖግራፊ ምስሎች ካሉ ለማየት በሁሉም አቅጣጫ ይከታተላል።",
        Tracksuspigggciousi: "በልጆች አልበሞች ውስጥ ያሉ አጠራጣሪ ምስሎችን ይከታተላል።",
        Adjusttheaoiiccuracy: "ግልጽ ያልሆኑ ምስሎችን ለመለየት የመለያ ትክክለኛነት ደረጃን ማስተካከል።",
        Viewsuspiciousyytpictu: "የአጠራጣሪ ምስሎች መዝገብን መመልከት።",

        ReceivbveAlerts: "ማስጠንቀቂያ መቀበል",
        Whensuspdfgiciouspictures: "በልጆች መሳሪያዎች ላይ አጠራጣሪ ምስሎች በተገኙ ጊዜ፣ ለወላጆች በጊዜው ማስጠንቀቂያ ይላካል።",
        warningdfgoncedetect: "አጠራጣሪ ምስል በተገኘ ጊዜ ወዲያውኑ ማስጠንቀቂያ መላክ።",
        Knowwhidfgchkidsde: "አጠራጣሪ ምስል የተገኘበትን የልጁን መሳሪያ መለየት።",
        DealWithhePhotos: "ከፎቶዎቹ ጋር መስራት",
        Parentscancheckt: "ወላጆች በልጆች የAndroid መሳሪያዎች ላይ የተገኙ አጠራጣሪ ምስሎችን ማስጠንቀቂያ በመመልከት ወይም በመቆጣጠር ሊያስተዳድሩ ይችላሉ፤ ይህም በስልኮች ላይ ፖርኖግራፊን በፍጥነት ለመከልከል ይረዳል።",
        Viewanddirectlydele: "በልጆች የAndroid መሳሪያ ላይ ያሉ አጠራጣሪ ፎቶዎችን መመልከትና በቀጥታ መሰረዝ።",
        Afterdeletionthesus: "ከተሰረዙ በኋላ፣ አጠራጣሪ ምስሎቹ በልጆች መሳሪያዎች ላይ ከእንግዲኛ አይታዩም።",
        Contacttheidsi: "ልጆቹን በጊዜው ማነጋገርና ችግሩን እንዲፈቱ መርዳት።",
        HowtoDetectnap: "የማይገባ ምስሎችን እንዴት መለየት ይቻላል?",

        MoreTipsforSuspen: "የማይገባ ምስሎችን ለመከልከል ተጨማሪ ምክሮች",
        BestPornBlockin: "ለAndroid እና iOS በጣም ጥሩ የፖርኖግራፊ መከልከያ መተግበሪያዎች (2022)",
        HowtoBlockPo: "በኮምፒዩተር ላይ ፖርኖግራፊን እንዴት መከልከል ይቻላል?",
        EffectiveSoluti: "በAndroid ላይ የፖርኖግራፊ ድረ-ገጾችን ለመከልከል 5 ውጤታማ መፍትሄዎች",
        HowtoGetRidofP: "ከፖርኖግራፊ ሱሰኝነት እንዴት መውጣት ይቻላል?",
        HowtoBlockPorno: "FamiSafeን በመጠቀም በiPhone ላይ ፖርኖግራፊን እንዴት መከልከል ይቻላል?",
        HowtoBlockAllPornite: "በiPhone እና Android ላይ ሁሉንም የፖርኖግራፊ ድረ-ገጾች እንዴት መከልከል ይቻላል?",

        /// የተደጋጋሚ ጥያቄዎች (FAQs)
        faqas: [
            {
                question: "1. በልጆች ስማርትፎኖች ላይ ያለውን የመስመር ላይ እንቅስቃሴ እንዴት መከታተል ይቻላል?",
                answer:
                    "1) Google Play Store ን ክፈትና FamiSafe የወላጅ ቁጥጥር መተግበሪያን ፈልግ። 2) መተግበሪያውን በመከታተል የምትፈልጋቸውን መሳሪያዎች ሁሉ ጫን (በአንድ መለያ እስከ 5 መሳሪያዎች መቆጣጠር ይቻላል)። 3) በመተግበሪያው ውስጥ የአባልነት መለያ ክፈት። 4) የልጆችን መሳሪያዎች ከወላጅ መሳሪያ ጋር አገናኝና መከታተል ጀምር። ከማቀናበሪያው በኋላ፣ የልጆችን የእንቅስቃሴ ሪፖርቶች ማየት፣ የማይገቡ ድረ-ገጾችንና መተግበሪያዎችን መከልከል፣ በእረፍትና በትምህርት ጊዜ ጨዋታዎችን መቆለፍ ይችላሉ።",
            },
            {
                question: "2. የስልክ ሱሰኝነት ምልክቶች ምንድን ናቸው?",
                answer:
                    "ልጅዎ ስልኩን በከመጠን በላይ እየተጠቀመ መሆኑን ሊያመለክቱ የሚችሉ ምልክቶች፦ 1) አብዛኛውን ጊዜ ቁጣ መሆን 2) ድብርት መያዝ 3) የጭንቀት ምልክት ማሳየት 4) በትንሽ ነገሮች መናደድ 5) የእረፍት እጥረት መኖር 6) እንቅልፍ መጣል 7) እንኳን በአስፈላጊ ክስተቶች ውስጥ ስልኩን መተው አለመቻል 8) ከሰዎች መርቀቅ 9) የቤተሰብ ጊዜን መተው 10) በማይመች ሰዓት መተኛት።",
            },
            {
                question: "3. በልጆች መካከል በጣም የተወደዱ መተግበሪያዎች ምንድን ናቸው?",
                answer:
                    "በiPhone እና Android ስልኮች ላይ በልጆች መካከል በጣም የሚወደዱ መተግበሪያዎች፦ 1) YouTube 2) Instagram 3) WhatsApp 4) Spin Safe Browser 5) Snapchat 6) Facebook 7) Android Messages 8) YouTube Kids 9) Chrome 10) Netflix 11) Facebook Messenger።",
            },
            {
                question: "4. ልጆች በቀን ስንት ሰዓት ስልክ መጠቀም አለባቸው?",
                answer:
                    "ሁሉም ልጆች አንድ አይነት አይደሉም። ባለሙያዎችም የተወሰነ መልስ መስጠት አልቻሉም። ነገር ግን በትምህርት ቀናት 1–2 ሰዓት መጠቀም ተመጣጣኝ ነው። በዕረፍት ቀናት ወይም በበዓላት ግን 3–4 ሰዓት ሊሆን ይችላል። ከሁሉ በላይ፣ ወላጆች ልጆቻቸው ከቴክኖሎጂ ጋር ጤናማ ግንኙነት እንዲኖራቸው መመሪያ መስጠት አስፈላጊ ነው።",
            },
        ],
        /// Social App Detection

        SocialAppDetection: "የማህበራዊ መተግበሪያ መለያየት",
        Monitorsocialapp: "በማህበራዊ መተግበሪያዎችና በYouTube ላይ ያሉ አስፈሪ ወይም የማይገባ ቃላትን ለመለየት ይከታተሉ። አስፈሪ ቃላትን በማቀናበር በልጅዎ መሣሪያ ላይ ሲገኙ ማስጠንቀቂያ ያግኙ።",
        KnowMoreAbou: "በማህበራዊ ሚዲያ ላይ ስለ አስከፊ ይዘት የበለጠ ይወቁ",
        Mysongotupset: "ልጄ የFacebook Messenger ካየ በኋላ ተበሳጨ። ምን እንደተቀበለ እጠራጠራለሁ።",
        HowcanIkeep: "7 ዓመት ዕድሜ ያለው ልጄ በYouTube ላይ ምን እየተመለከተ እንደሆነ እንዴት ልከታተል?",
        CanIblockspe: "ልጄ እንዳይደርስባቸው የተወሰኑ የYouTube ቪዲዮዎችን ማገድ እችላለሁ?",

        KnowMoreAboutDi: "ሊኖሩ ስለሚችሉ ችግኝነቶች ራስ-ሰር ማስጠንቀቂያዎችን ያግኙ",
        MonitorMultipl: "ብዙ የማህበራዊ ሚዲያ መድረኮችን በአንድ ጊዜ ይከታተሉ",
        Noneetocheckyo: "ከእንግዲህ የልጆችዎን የማህበራዊ መለያዎች በእጅ መፈተሽ አያስፈልግም፤ FamiSafe በመጠቀም 30+ የማህበራዊ መድረኮችን በአንድ ጊዜ ይከታተሉ። (በiOS መሣሪያዎች ላይ የህፃናት ማህበራዊ መተግበሪያ መለያየት ለጊዜው አይደገፍም።)",
        Easytepstoconnec: "የልጅዎን የማህበራዊ መለያዎች ለማገናኘት ቀላል እርምጃዎች።",
        SupportYouTubeConte: "በiOS ላይ የYouTube ይዘት መለያየትን ይደግፋል",
        SupporthatsAppMes: "በAndroid ላይ WhatsApp, Messenger, Messenger Lite, YouTube, Instagram, Facebook, SMS, Twitter እና Kik ክትትልን ይደግፋል።",

        MonitorMultiple: "የተጠረጠሩ ቃላትን አስተካክል",
        Noneedtocheckyo: "የወጣቶች ታዋቂ ስላንግ በፍጥነት እየተለወጠ ነው። የተጠረጠሩ ቃላት ቅንብሮችን በማስተካከል ከእነሱ ጋር ተመጣጣኝ ይሁኑ።",
        Easystepstoconne: "ለመከታተል የምታስቡትን የተጠረጠሩ ቃላት ምድብ ይምረጡ።",
        SupportWhatsAppMes: "ልጆቻችንን ይበልጥ ለመጠበቅ የተጠረጠሩ ቃላትን ወደ የቁልፍ ቃላት መዝገባችን ያክሉ።",
        SupportWhatsA: "በተለያዩ የተጠረጠሩ ቃላት ምድቦች ላይ ክትትልን በቀላሉ አብራ/አጥፋ።",

        AIassistedInapp: "በAI የታገዘ የማይገባ ይዘት ክትትል",
        FamiSaferffhas65upg: "FamiSafe የይዘት ክትትል ስርዓቱን በAI የታገዘ መልኩ አዘምኗል። የAIGC መዳረሻ በመጠቀም የማይገቡ ቃላት ተስፋፍተው ተሻሽለዋል።",
        Receivealer87tswhe: "ልጆችዎ ሲያጋጥሟቸው የሳይበር ጥቃት፣ የማይገባ ይዘት፣ ከንጥረ ነገር ጋር የተያያዘ ይዘት ወዘተ ሲገኝ ማስጠንቀቂያዎችን ይቀበሉ።",
        Detectinappropriateco: "የማይገባ ይዘትን በበለጠ ሁሉን አቀፍና ትክክለኛ መንገድ ይለያዩ።",
        Stayv45igilantinyo: "ልጅዎን ደህንነቱን ለመጠበቅ በዲጂታል ዓለሙ ውስጥ ንቁ ሆነው ይቆዩ።",

        YouTubeC23ontr: "የYouTube ቁጥጥር እና መለያየት",
        Freeyou6yrself: "የልጅዎን የYouTube መመልከቻ ታሪክ ሁልጊዜ እየፈተሹ መከራ ከእንግዲህ ያቁሙ። ስለሚያስጨንቁዎ ጉዳዮች ማስጠንቀቂያዎችን ያግኙ።",
        Categorizethepot: "የYouTube ቪዲዮ ሊኖሩ የሚችሉ ችግኝነቶችን በምድብ ያድርጉ።",
        Listp09u9otent34ialiss: "በልጅዎ የYouTube የመመልከቻ ዝርዝር ውስጥ የተገኙ ሊኖሩ የሚችሉ ችግኝነቶችን ይዘርዝሩ።",
        BlockouTu7657bevideoo: "ልጅዎ እንዳይደርስባቸው የYouTube ቪዲዮ ወይም ቻናል ይከልክሉ።",

        EasytoSta: "በ3 ቀላል እርምጃዎች መጀመር ቀላል ነው",
        steps: [
            {
                id: 1,
                title: "መመዝገብ",
                description:
                    "በድህረ ገጹ ወይም ከGoogle Play እና App Store መተግበሪያ በመጠቀም የFamiSafe መለያ ይመዝገቡ።",
            },
            {
                id: 2,
                title: "መጫን",
                description:
                    "የFamiSafe መተግበሪያን በወላጅና በልጅ መሣሪያዎች ሁሉ ላይ ይጫኑ።",
            },
            {
                id: 3,
                title: "ማገናኘት",
                description:
                    "ሁሉንም መሣሪያዎች በFamiSafe ዳሽቦርድ መተግበሪያ ወይም በድህረ ገጽ ፖርታል በኩል ያገናኙና ያስተዳድሩ።",
            },
        ],
        posts: [
            {
                image: "https://famisafe.wondershare.com/images/feature/2021/detect-text/spyic-monitor.png",
                title: "የልጄን የጽሑፍ መልዕክቶች እንዴት ልከታተል?",
                description:
                    "የልጅዎን የጽሑፍ መልዕክቶች እንዴት መከታተል እንደሚቻል የሚጠይቁ ወላጆች ሁሉ ለልጆቻቸው ደህንነት ለማረጋገጥ እነዚህ መሳሪያዎች ተመጣጣኝ መፍትሄ ይሆናሉ።",
            },
            {
                image: "https://famisafe.wondershare.com/images/feature/2021/detect-text/how-to-monitor-text-messages-on-android-1.jpg",
                title: "በAndroid ላይ የጽሑፍ መልዕክቶችን እንዴት ልቆጣጠር?",
                description:
                    "የAndroid የጽሑፍ መልዕክት ክትትል መተግበሪያዎችን በመጠቀም ልጆችን ከመስመር ላይ አደጋዎች ይጠብቁ። ወላጆች የጽሑፍ መልዕክቶችን በደህናና በታመነ መንገድ መከታተል ይችላሉ።",
            },
            {
                image: "https://famisafe.wondershare.com/images/feature/2021/detect-text/best-texting-app-for-kids-2.jpg",
                title: "ለልጆች የደህንነት ያላቸው የጽሑፍ መተግበሪያዎች የወላጅ መመሪያ",
                description:
                    "ልጆችዎ ከማይታወቁ ሰዎች ጋር እየተወያዩ መሆናቸው ያስጨንቃችሁዋል? ልጆችን የሚጠብቁ እና እንዲገናኙ ነፃነት የሚሰጡ ምርጥ የጽሑፍ መተግበሪያዎችን ይመልከቱ።",
            },
        ],
        faqams: [
            {
                question: "1. በልጆች ስማርትፎኖች ላይ ያለ የመስመር ላይ እንቅስቃሴን እንዴት ልከታተል?",
                answer:
                    "Google Play Store ይክፈቱ እና FamiSafe የወላጅ መቆጣጠሪያ መተግበሪያን ይፈልጉ። ያገኙትን መተግበሪያ ለመከታተል በሚፈልጉት መሣሪያዎች ሁሉ ላይ ይጫኑ (በአንድ መለያ እስከ 5 መሣሪያዎች መከታተል ይችላሉ)። በመተግበሪያው የአባልነት መለያ ይክፈቱ፣ ሁሉንም መሣሪያዎች ከወላጅ መሣሪያ ጋር ያገናኙ እና ክትትልን ይጀምሩ። ከተሳካ ማቀናበር በኋላ የልጆች የእንቅስቃሴ ሪፖርቶችን መመልከት፣ ወደ የማይገቡ ድረ-ገጾችና መተግበሪያዎች መዳረሻን መገደብ፣ በእረፍትና በትምህርት ጊዜ ጨዋታዎችንና ሌሎች መተግበሪያዎችን መቆለፍ ይችላሉ።",
            },
            {
                question: "2. የስማርትፎን ሱስ ምልክቶች ምንድን ናቸው?",
                answer:
                    "ልጅዎ በስልክ ላይ ሱስ እንዳለበት የሚያመለክቱ አንዳንድ ምልክቶች፡ 1) አብዛኛውን ጊዜ መቆጣት 2) የአእምሮ ድብታ (ዲፕሬሽን) 3) ውጥረት መታየት 4) በትንሽ ነገር መቆጣት 5) እረፍት መጣል ወይም ንቁነት 6) እንቅልፍ እጥረት 7) በአስፈላጊ ክስተቶች (ለምሳሌ፡ ቀብር) ጊዜም እንኳ ስልኩን መተው ካልቻለ 8) ከሰዎች መርቆት እና ግንኙነት መቀነስ 9) የቤተሰብ ምሳ ወይም የዕለት ተዕለት ሥራዎችን መተው 10) በሌሊት ያልተለመዱ ሰዓታት መተኛት።",
            },
            {
                question: "3. በልጆች መካከል በጣም ታዋቂ የሆኑ መተግበሪያዎች የትኞቹ ናቸው?",
                answer:
                    "በiPhone እና Android ላይ ለልጆች በጣም ታዋቂ የሆኑ መተግበሪያዎች፡ 1) YouTube 2) Instagram 3) WhatsApp 4) Spin Safe Browser 5) Snapchat 6) Facebook 7) Android Messages (ጽሑፍ) 8) YouTube Kids 9) Chrome 10) Netflix 11) Facebook Messenger።",
            },
            {
                question: "4. ልጆች በቀን ስንት ሰዓት በስልክ ላይ መቆየት ይገባቸዋል?",
                answer:
                    "ሁሉም ልጅ የተለየ ነው። ባለሙያዎችም ልጆች በዲጂታል መሣሪያዎች ላይ ምን ያህል ጊዜ መቆየት እንደሚገባቸው የተወሰነ መልስ ማቅረብ አልቻሉም። እኛ ግን በትምህርት ቀናት 1–2 ሰዓት መሆኑን እና በሳምንት መጨረሻ ወይም በበዓላት 3–4 ሰዓት መሆኑን እንመክራለን። ከሁሉ አስፈላጊው ግን ወላጆች ልጆቻቸውን ከቴክኖሎጂ ጋር ጤናማ ግንኙነት እንዲኖራቸው ማዘጋጀት ነው።",
            },
        ],

        /// Web Filter

        KeepKidsSearchSafe: "የልጆች የመፈለጊያ ደህንነትን ያስጠብቁ",
        Createasafeandage: "የማይገቡ ድረ-ገጾችን በመከልከል ለልጆች የዕድሜ ተገቢና ደህንነቱ የተጠበቀ የመስመር ላይ አካባቢ ይፍጠሩ። የልጆችን የአሰሳ ታሪክ ይመልከቱ እና የግል/Incognito አሰሳ ታሪክን እንኳን በርቀት ይፈትሹ።",
        KnowYouorries: "ልጆች በመስመር ላይ ሲያሰሱ የሚያስጨንቁዎትን ጉዳዮች ይወቁ",
        Ismysonsearching: "ልጄ በGoogle ላይ መሣሪያዎች ወይም ሌሎች ጦር መሳሪያዎችን እየፈለገ ነው?",
        WhatcanIdtostp: "ልጆቼ በመስመር ላይ ወደ ፖርኖግራፊ እንዳይደርሱ ምን ልሰራ?",
        Isthereawaytoblock: "ለዕድሜ ያልተገቡ የፍለጋ ውጤቶችን ለልጄ መከልከል የሚቻል መንገድ አለ?",

        GuideKidstoGoo: "ልጆችን ወደ መልካም የመስመር ላይ ይዘት መመራት",
        KeepSearchSafe: "በድረ-ገጽ ማጣሪያ ፍለጋን ደህንነቱ ያስጠብቁ",
        Filternappropriate: "ልጆቻችን ደህንነት ያለው የመስመር ላይ አካባቢ እንዲኖራቸው የማይገቡ ድረ-ገጾችን ያጣሩ።",
        Filterwebsitesby: "ምንም እንዳይስተርፍ ድረ-ገጾችን በምድብ ያጣሩ።",
        Poweredby0inbuilt: "አዋቂ ይዘት፣ ንጥረ ነገር፣ ግፍ እና ሌሎችን የሚሸፍኑ 10+ ውስጣዊ የድረ-ገጽ ምድቦች በመደገፍ ይሰራል።",
        EnableSafeSearchto: "ግልጽ መረጃ የያዙ የፍለጋ ውጤቶችን ለመከልከል Safe Search ያብሩ።",

        SafeguardKid: "የልጅ የመስመር ላይ ፍለጋን ያስጠብቁ",
        Setahealthyspacema: "ልጆች በመስመር ላይ ሲያሰሱ ለመጠበቅ ጤናማ አካባቢ በእጅ ያቀናብሩ።",
        Feelfreetoadda: "በልጅ መሣሪያ ላይ የሚፈቀዱ ወይም የሚከለከሉ ማንኛውንም ድረ-ገጾች ያክሉ።",
        Changethewebfilter: "የልጅዎን ስልክ ሳያገኙ የድረ-ገጽ ማጣሪያ ቅንብሮችን በርቀት ይቀይሩ።",
        UseSafearchtoen: "በAndroid መሣሪያዎች ላይ የተገደቡ ውጤቶች ብቻ እንዲታዩ Safe Search ይጠቀሙ።",
        ForiOSdevicestheaf: "በiOS መሣሪያዎች ላይ Safe Search ባህሪው በራሱ ሆኖ Google እና Bing Safe Search አማራጮችን ያብራል።",

        KnowWhatidsBrows: "ልጆች በመስመር ላይ ምን እያሰሱ እንደሆነ ይወቁ",
        Learnwhatkidsarese: "ልጆች በመስመር ላይ ምን እየፈለጉ ወይም እየጎበኙ እንደሆነ፣ Incognito ሁኔታ ላይ እንኳን ይማሩ።",
        Checkbrowserhistory: "የአሰሳ ታሪክን በግል/Incognito ሁኔታ ላይ እንኳን ይመልከቱ።",
        Storeupto3monthsof: "እስከ 3 ወር ድረስ የአሰሳ ታሪክን ለወላጆች ግምገማ ይያዙ።",
        Findoutwhichwordte: "በSafe Search ስር የተፈለጉ ቃላትን/ቃል ጥቅሞችን ያግኙ።",
        postsa: [
            {
                image: "https://famisafe.wondershare.com/images/feature/2021/search-safe/network-monitor-app.png",
                title: "ለAndroid ምርጥ 10 የኔትወርክ ክትትል መተግበሪያዎች",
                description:
                    "የWhatsApp መለያዎን ወደ አዲስ ስልክ ማዛወር ይፈልጋሉ? እንዴት መፈጸም እንደሚቻል እዚህ ይማሩ።",
            },
            {
                image: "https://famisafe.wondershare.com/images/feature/2021/search-safe/unblock-blocked-websites-online-1.jpg",
                title: "ለመስመር ላይ መከላከያ ምርጥ 5 የድረ-ገጽ መከልከያ ሶፍትዌሮች",
                description:
                    "ልጆችዎን ከመስመር ላይ አደጋዎች ለመጠበቅ ምርጥ የድረ-ገጽ መከልከያ ሶፍትዌር እየፈለጉ ነው? እነዚህ 5 መተግበሪያዎች ይረዱዎታል።",
            },
            {
                image: "https://famisafe.wondershare.com/images/feature/2021/search-safe/android-network-monitoring-apps-0.png",
                title: "በAndroid ወይም iOS መሣሪያዎች ላይ የተከለከሉ ድረ-ገጾችን እንዴት ማስከፈት ይቻላል?",
                description:
                    "በመስመር ላይ የተከለከሉ ድረ-ገጾችን ማስከፈት ይቻላል? እንዴት ይሰራል? ወላጆች ልጆች እንዴት የተገደቡ ድረ-ገጾችን እንደሚያልፉ ላይ ጠቃሚ መመሪያ ያገኛሉ።",
            },
        ],
        faqavs: [
            {
                question: "በAndroid ላይ ድረ-ገጾችን እንዴት ልከልክል?",
                answer:
                    "በFamiSafe በመጠቀም በAndroid ድረ-ገጾችን ለመከልከል፡ 1. የFamiSafe መለያ ይፍጠሩ። 2. በወላጅና በልጅ ስልኮች FamiSafe መተግበሪያን ያጫኑ። 3. የWebsite Filter አማራጭን ይጫኑ እና አደጋ ያላቸው ድረ-ገጾችን ይምረጡ። 4. የExceptions አማራጭን ይጫኑ እና እንዳይፈልጉት ድረ-ገጽ ያክሉ። 5. የተከለከሉ ዝርዝር ላይ ድረ-ገጹን ለማክሰን ይፍትሹ።",
            },
            {
                question: "በChrome የአሰሳ ታሪክን እንዴት ልመልከት?",
                answer:
                    "በFamiSafe በመጠቀም በGoogle Chrome የአሰሳ ታሪክ ለማየት፡ 1. የFamiSafe መለያ ይፍጠሩ። 2. በወላጅና በልጅ የAndroid መሣሪያዎች FamiSafe መተግበሪያን ያጫኑ። 3. የBrowser History አማራጭን ይጫኑ እና የልጅ የChrome አሰሳ ታሪክ ይመልከቱ።",
            },
            {
                question: "በልጄ የiPhone ላይ ድረ-ገጾችን እንዴት ልከልክል?",
                answer:
                    "ወላጆች በiPhone ድረ-ገጾችን ለመከልከል በFamiSafe እነዚህን እርምጃዎች ይከተሉ፡ 1. የFamiSafe መለያ ይፍጠሩ። 2. በወላጅና በልጅ መሣሪያዎች FamiSafe መተግበሪያን ያጫኑ። 3. የWebsite Filter አማራጭን ይጫኑ እና አደጋ ያላቸው ድረ-ገጾችን ይከልከሉ። 4. የExceptions አማራጭን ይጫኑ እና Safari ላይ የሚፈለገውን ድረ-ገጽ ያክሉ። 5. የተከለከሉ ድረ-ገጾችን ለማስቀመጥ Save ይጫኑ።",
            },
            {
                question: "Pornhub ድረ-ገጾችን እንዴት ልከልክል?",
                answer:
                    "የማይገቡ ድረ-ገጾችን በFamiSafe ለመከልከል፡ 1. የFamiSafe መለያ ይፍጠሩ። 2. በወላጅና በልጅ መሣሪያዎች FamiSafe መተግበሪያን ያጫኑ። 3. የWebsite Filter አማራጭን ይጫኑ እና የPorn ድረ-ገጾችን ይከልከሉ።",
            },
            {
                question: "ወላጆች ምን ድረ-ገጾች መከልከል አለባቸው?",
                answer:
                    "1. ግልጽ ድረ-ገጾች እንደ Pornhub.com, 8Tube.xxx 2. የማርገት ድረ-ገጾች እንደ Bongacams.com 3. የPoker እና ካሲኖ ድረ-ገጾች እንደ FreeSpin.com",
            },
        ],
        LatestPost: "አዳዲስ ልጥፎች",

        /// Location Tracking
        LocationTracking: "የአካባቢ መከታተያ",
        Trackkidsinrealt: "ልጆችዎን በእውነተኛ ጊዜ ይከታተሉ እና የአካባቢ ታሪካቸውን ይመልከቱ። ልጆችዎ ወደ Geofence ሲገቡ ወይም ሲወጡ ወቅታዊ ማስጠንቀቂያ ይቀበሉ።",
        RestEasywithReal: "ለልጆች በእውነተኛ ጊዜ የሚሰራ የአካባቢ መከታተያ በመጠቀም እርግጠኛ ይሁኑ።",

        ViewKidsRealT: "የልጆች እውነተኛ ጊዜ አካባቢን ይመልከቱ",
        Trackthecurrentloc: "የልጆችዎን አሁን ያለ አካባቢ ይከታተሉ። “ልጆቼ የት ናቸው?” ብሎ መጨነቅን ያስወግዳል።",
        Graspyourkidsrealti: "የልጆችዎን እውነተኛ ጊዜ አካባቢ በማንኛውም ጊዜ ያውቁ።",
        Checkifyourkidsar: "ልጆችዎ በት/ቤት ወይም በቤት መሆናቸውን ያረጋግጡ።",
        Involveintimewhe: "ልጆች ወደ እንግዳ ወይም አደገኛ ቦታዎች ሲሄዱ በጊዜው ይገናኙ።",

        CheckLocatio: "የአካባቢ ታሪክን ይመልከቱ",
        Viewlocationhist: "የአካባቢ ታሪክ ታይምላይን በመመልከት የልጆችዎን ያለፈ መደበኛ እንቅስቃሴ ይወቁ። “የት ነበርክ?” ብለው መጮኽን ያቁሙ።",
        Viewyourkids: "የልጆችዎን የቅርብ ጊዜ የእንቅስቃሴ አካባቢ ይመልከቱ።",
        Knowkids: "የልጆችዎን ያሉበትን ቦታ በማንኛውም ጊዜ ይወቁ።",
        Learnabout: "ልጆችዎ ብዙ ጊዜ የሚጎበኙትን ቦታዎች ይወቁ።",

        SetSafeGeofen: "ደህንነታዊ Geofence ያዘጋጁ",
        CreateGeofenceslik: "እንደ ት/ቤት ወይም ቤት ያሉ ቦታዎችን በአካባቢ ዙሪያ Geofence ይፍጠሩ። ልጆች የተዘጋጀ መደበኛነትን ሲያፈርሱ ማስጠንቀቂያ ያግኙ።",
        Setthescopeo: "የልጆች እንቅስቃሴ ወሰንን ያዘጋጁ።",
        Setupgeofen: "Geofence ያቋቁሙ እና የጊዜ ክልል ያዘጋጁ።",
        Receiveanalertwh: "ልጆች ከተዘጋጀው ቦታ ሲወጡ ማስጠንቀቂያ ይቀበሉ።",

        MoreTipsforLoca: "ስለ አካባቢ መከታተያ ተጨማሪ ምክሮች",
        BestFamilyLocat: "ለቤተሰቦቻችሁ ምርጥ የአካባቢ መጋራት መተግበሪያዎች",
        HowtoTracka: "የስልክ ቁጥር አካባቢን በነፃ የሚከታተሉ የመስመር ላይ መሳሪያዎች",
        FreeAppstoT: "የሞባይል ስልክ አካባቢን በነፃ ለመከታተል 10 ነፃ መተግበሪያዎች",
        HowtoCheckImPhone: "የiPhone የአካባቢ ታሪክን በቀላሉ እንዴት መመርመር ይቻላል?",
        HowtoTrackYourki: "የልጅዎን iPhone በፍጥነት እንዴት መከታተል ይቻላል?",
        HowtoTrackaPhone: "ስልክን በIMEI ቁጥር በነፃ እንዴት መከታተል ይቻላል?",

        faqsSscreenviwer: [
            {
                question: "1. የልጆችን የመስመር ላይ እንቅስቃሴ በስማርትፎን እንዴት መከታተል ይቻላል?",
                answer:
                    "Google Play Store ይክፈቱ እና FamiSafe የወላጅ መቆጣጠሪያ መተግበሪያን ይፈልጉ። መተግበሪያውን ያውርዱና ለመከታተል በሚፈልጉት ሁሉም መሣሪያዎች ላይ ይጫኑ (በአንድ መለያ እስከ 5 መሣሪያዎች መከታተል ይቻላል)። ከዚያ የአባልነት መለያ ይክፈቱ፣ የልጆች መሣሪያዎችን ከወላጅ መሣሪያ ጋር ያገናኙ እና መከታተል ይጀምሩ። ከተሳካ ማዋቀር በኋላ የልጆችን የእንቅስቃሴ ሪፖርቶች መመልከት፣ ወደ የማይገባ ድር ጣቢያዎችና መተግበሪያዎች መግባትን መከልከል፣ በእረፍትና በትምህርት ጊዜ ጨዋታዎችንና ሌሎች መተግበሪያዎችን መቆለፍ ይችላሉ።",
            },
            {
                question: "2. የስልክ ሱሰኝነት ምልክቶች ምንድን ናቸው?",
                answer:
                    "እነዚህ ምልክቶች ልጅዎ በስልክ ሱሰኛ መሆኑን ሊያመለክቱ ይችላሉ፡ 1) አብዛኛውን ጊዜ መቆጣት 2) ድብርት መታየት 3) ጭንቀት መሰማት 4) በቀላሉ መናደድ እና ትንንሽ ነገሮች ላይ መፈንዳት 5) መዝናናት መታጣት 6) እንቅልፍ መጣት 7) በአስፈላጊ ክስተቶች (ለምሳሌ ቀብር) ጊዜ እንኳን ስልኩን መተው ካልቻለ 8) ድንገተኛ መግባባት መቀነስ እና ራስን መለየት 9) ከቤተሰብ ጋር የእራት ጊዜን ወይም ዕለታዊ ሥራዎችን መተው 10) በያልተለመዱ ሰዓታት መተኛት።",
            },
            {
                question: "3. በልጆች መካከል በጣም የተለመዱ መተግበሪያዎች ምንድን ናቸው?",
                answer:
                    "በiPhone እና Android ስልኮች ላይ በልጆች መካከል በጣም የተለመዱ መተግበሪያዎች፡ 1) YouTube 2) Instagram 3) WhatsApp 4) Spin Safe Browser 5) Snapchat 6) Facebook 7) Android Messages (መልዕክት) 8) YouTube Kids 9) Chrome 10) Netflix 11) Facebook Messenger።",
            },
            {
                question: "4. ልጆች በቀን ስንት ሰዓት ስልክ መጠቀም አለባቸው?",
                answer:
                    "እያንዳንዱ ልጅ የተለየ ነው። እንኳን ባለሙያዎች ልጆች በዲጂታል መሣሪያዎች ላይ ስንት ጊዜ መዋል እንዳለባቸው የተወሰነ መልስ መስጠት አልቻሉም። እኛ በትምህርት ቀናት 1–2 ሰዓት መጠቀም ተመጣጣኝ መጠን ነው ብለን እንመክራለን። በዕረፍት ቀናት ወይም በበዓላት ግን 3–4 ሰዓት ተመጣጣኝ ሊሆን ይችላል። ከሁሉ በላይ አስፈላጊው ነገር ወላጆች ልጆቻቸውን ከቴክኖሎጂ ጋር ጤናማ ግንኙነት እንዲኖራቸው መርዳት ነው።",
            },
        ],
        /// Driving-history-report

        EncourageGoodD: "መልካም የመንዳት ልምዶችን አበረታቱ",
        Receivedetaileddrivi: "ለእያንዳንዱ ጉዞ ስለ ወጣቶች ዝርዝር የመንዳት ታሪክ ሪፖርቶችን ይቀበሉ። እንደ ከፍተኛ ፍጥነት፣ አማካይ ፍጥነት፣ ጠቅላላ የመንዳት ርቀት እና ሌሎችን ዝርዝሮች ያውቁ። የሳምንታዊ የመንዳት ሪፖርቶችን በመመልከት ወጣቶች መልካም የመንዳት ልምድ እንዲገነቡ ያግዟቸው።",

        DoYouHaveAny: "ከሚከተሉት ማንኛውም ጉዳዮች አሉዎት?",
        Mysonjustothi: "ልጄ አሁን የመንዳት ፍቃድ ተቀብሏል። እንዴት እንደሚነዳ መመልከት እችላለሁ?",
        CanIcheckifmydaugh: "ልጄ ከጓደኞቿ ጋር ሲሆን ትናንት ሌሊት ከፍተኛ ፍጥነት እንዳትነዳ መመርመር እችላለሁ?",
        Isthereawaytoge: "ልጄ እንዴት እንደሚነዳ አጠቃላይ ማጠቃለያ ማግኘት ይቻላል?",

        HowFamiSafeHelpsYo: "FamiSafe ወጣቶቻችሁ መልካም አሽከርካሪ እንዲሆኑ እንዴት ይረዳል?",
        EscortTeenEachDrive: "የወጣቶችን እያንዳንዱን ጉዞ ይከታተሉ",
        Even43ify: "ወጣቶቻችሁ አዲሱን የመንዳት ዓለም ለመፈተሽ ሲወጡ እናንተ አጠገባቸው ባትቀመጡም እንኳን፣ እያንዳንዱን ጉዞ መጠበቅ ትችላላችሁ።",
        Enabledrivesafetyto: "የመንዳት ደህንነትን በማንቃት ዝርዝር የመንዳት መረጃዎችን ይመዝግቡ።",
        Setuphighspeedt21: "የከፍተኛ ፍጥነት ገደብ በማቀናበር የከፍተኛ ፍጥነት መረጃ ያግኙ።",
        Trackdrivingroutine: "የመንዳት ልምድን ይከታተሉ።",

        EncourageGoodDriv: "መልካም የመንዳት ልምዶችን አበረታቱ",
        Agooddrivinghabit: "መልካም የመንዳት ልምድ ልጆች በመንዳት ጊዜ ደህንነታቸውን ለመጠበቅ አስፈላጊ ነው። ወጣቶች እንዴት እንደሚነዱ በመመልከት እና ለማሻሻል በመርዳት ይደግፏቸው።",
        Getadrivinghist: "ለእያንዳንዱ ጉዞ የመንዳት ታሪክ ሪፖርት ያግኙ።",
        Highlightdangerousdri: "እንደ ከፍተኛ ፍጥነት እና ድንገተኛ መቆም ያሉ አደገኛ የመንዳት ባህሪያትን ያሳዩ።",
        Checkdrivingdetailsli: "እንደ አማካይ ፍጥነት እና ሌሎች ዝርዝሮች የመንዳት መረጃዎችን ይመልከቱ።",

        GetBetterWithEachDrive: "ከእያንዳንዱ ጉዞ ጋር ይሻሻሉ",
        Reviewweeklyrsummary5t: "የሳምንታዊ ማጠቃለያዎችን በመመልከት የወጣቶቻችሁ መንዳት ምን ተጨማሪ ማሻሻያ እንደሚፈልግ ይወቁ።",
        Viewrsummaryofth: "ያለፈውን ሳምንት ማጠቃለያ ይመልከቱ።",
        Comparethesummaryof: "የአሁኑን ሳምንት ማጠቃለያ ከቀድሞው ጋር ያነጻጽሩ።",
        Cantracebacktowee: "እስከ ሶስት ሳምንት በፊት ያሉ ሳምንታዊ ማጠቃለያዎችን መመለስ ይቻላል።",
        postqs: [
            {
                image: "https://famisafe.wondershare.com/images/feature/2021/driving-report/driving-safety-fact-1.jpg",
                title: "የልጄን የጽሑፍ መልእክቶች እንዴት ማቆጣጠር እችላለሁ?",
                description:
                    "ብዙ ወላጆች ‘የልጄን የጽሑፍ መልእክት እንዴት ማቆጣጠር እችላለሁ?’ ብለው ይጠይቃሉ። ከላይ የተጠቀሱት መሣሪያዎች ልጆችዎን ደህንነት ለማረጋገጥ ተስማሚ መፍትሄዎች ናቸው።",
            },
            {
                image: "https://famisafe.wondershare.com/images/feature/2021/driving-report/share-google-map-location-3.png",
                title: "በAndroid ላይ የጽሑፍ መልእክቶችን እንዴት ማቆጣጠር ይቻላል?",
                description:
                    "ልጆችን ከመስመር ላይ አደጋዎች ለመጠበቅ የAndroid የጽሑፍ መልእክት ክትትል መተግበሪያዎችን ይጠቀሙ። ወላጆች በደህናና በታመነ መንገድ የልጆቻቸውን መልእክቶች ማቆጣጠር ይችላሉ።",
            },
            {
                image: "https://famisafe.wondershare.com/images/feature/2021/driving-report/share-location-android-to-iphone-2.png",
                title: "ለልጆች የተሟላ የደህንነት የጽሑፍ መተግበሪያዎች መመሪያ",
                description:
                    "ልጆችዎ ከእንግዶች ጋር እየተወያዩ መሆናቸው ያሳስባዎታል? እነዚህ ምርጥ የልጆች ደህንነት የጽሑፍ መተግበሪያዎች ደህንነታቸውን ይጠብቃሉ እና ነፃነታቸውንም ያከብራሉ።",
            },
        ],
        faqam5s: [
            {
                question: "1. የልጆቼን የመስመር ላይ እንቅስቃሴ በስማርትፎናቸው ላይ እንዴት ማቆጣጠር እችላለሁ?",
                answer:
                    "Google Play Store ይክፈቱ እና FamiSafe የወላጅ መቆጣጠሪያ መተግበሪያን ይፈልጉ። መተግበሪያውን ያውርዱ እና መቆጣጠር በሚፈልጉት መሳሪያዎች ሁሉ ላይ ይጫኑ (በአንድ መለያ እስከ 5 መሳሪያዎች መቆጣጠር ይችላሉ)። በመተግበሪያው ውስጥ የአባልነት መለያ ይክፈቱ። የልጆች መሳሪያዎችን ከወላጆች መሳሪያ ጋር ያገናኙ እና መቆጣጠርን ይጀምሩ። ማቀናበር ከተሳካ በኋላ የልጆችን የእንቅስቃሴ ሪፖርቶች ማየት፣ ያልተገባ ድህረ ገፆችን እና መተግበሪያዎችን መገደብ፣ በእረፍት እና በትምህርት ሰዓት ጨዋታዎችን እና ሌሎች መተግበሪያዎችን መቆለፍ ትችላላችሁ።",
            },
            {
                question: "2. የሞባይል ስልክ ሱሰኝነት (መጠን ያለፈ አጠቃቀም) ምልክቶች ምንድን ናቸው?",
                answer:
                    "ልጅዎ በሞባይል ስልክ ላይ እጅግ ተያይዞ እንዳለ የሚያመለክቱ አንዳንድ ምልክቶች እነዚህ ናቸው፦ 1) ብዙ ጊዜ መቆጣት 2) ድብርት (depression) መታየት 3) የጭንቀት ስሜት 4) በትንሽ ነገሮች ላይ መናደድ 5) ዕረፍት መጣጣም 6) እንቅልፍ መጣስ 7) በአስፈላጊ ዝግጅቶች (ለምሳሌ፦ ሐዘን) ውስጥም እንኳ ስልኩን መተው ካልቻለ 8) ድንገተኛ ዝምታ እና ራቀት 9) ከቤተሰብ ጋር የምግብ ጊዜን እና ዕለታዊ ስራዎችን መተው 10) በያልተለመዱ ሰዓታት መተኛት።",
            },
            {
                question: "3. በልጆች መካከል በጣም የሚታወቁ መተግበሪያዎች የትኞቹ ናቸው?",
                answer:
                    "በiPhone እና Android ስልኮች ላይ በልጆች መካከል በጣም የሚጠቀሙባቸው መተግበሪያዎች፦ 1) YouTube 2) Instagram 3) WhatsApp 4) Spin Safe Browser 5) Snapchat 6) Facebook 7) Android Messages (የጽሑፍ መልእክት) 8) YouTube Kids 9) Chrome 10) Netflix 11) Facebook Messenger።",
            },
            {
                question: "4. ልጆች በቀን ስንት ሰዓት ስልክ መጠቀም ይገባቸዋል?",
                answer:
                    "እያንዳንዱ ልጅ የተለየ ነው፤ እንኳን ባለሙያዎችም ልጆች በዲጂታል መሳሪያዎች ላይ ስንት ጊዜ መቆየት እንደሚገባ የተወሰነ መልስ መስጠት አልቻሉም። ነገር ግን በትምህርት ቀኖች 1–2 ሰዓት መጠቀም ተመጣጣኝ ነው። በሳምንት መጨረሻ ወይም በበዓላት ጊዜ 3–4 ሰዓት መጠቀም ተመጣጣኝ ሊሆን ይችላል። ከሁሉ በላይ ወላጆች ልጆቻቸው ከቴክኖሎጂ ጋር ጤናማ ግንኙነት እንዲኖራቸው መመሪያ መስጠት አስፈላጊ ነው።",
            },
        ],
        // SOS ማስጠንቀቂያ
        SOSlert: "SOS ማስጠንቀቂያ",
        EmergencyhelpSOSa: "በአንድ ጠቅታ የአደጋ እርዳታ እና SOS ማስጠንቀቂያ! በSOS ማስጠንቀቂያ ባህሪ ልጅዎ ደህንነቱን ሁልጊዜ ማወቅ ትችላላችሁ። በስልክዎ ላይ በቀጥታ ማስጠንቀቂያዎችን ይቀበላሉ እና የልጅዎን የአካባቢ ታሪክ በመመልከት የሚገኝበትን ቦታ ሁልጊዜ መከታተል ትችላላችሁ።",

        ProtectourChild: "ልጅዎን ይጠብቁ — የSOS ማስጠንቀቂያ ባህሪ ደህንነታቸውን በእጃችሁ ያቆያል",

        ForChildrenSendns: "ለልጆች፦ ወዲያውኑ SOS እና የአደጋ ማስጠንቀቂያ ላክ",
        Evenifyourphoneisons: "ስልክዎ በዝምታ (Silent Mode) ላይ ቢሆንም እንኳ፣ ልጅዎ በአደጋ ጊዜ ከመሳሪያቸው SOS መልዕክት ላክ ይችላል።",
        ClicktheSOSbuttontos: "የSOS አዝራሩን ጠቅ በማድረግ በ5 ሰከንድ ውስጥ የአደጋ ማስጠንቀቂያ ይላካል።",
        Cancelthe: "የSOS መልዕክቱንም በ5 ሰከንድ ውስጥ መሰረዝ ይቻላል።",
        Addwidgetsoph: "በስልኩ ማያ ገጽ ላይ Widgets በመጨመር ወዲያውኑ የአደጋ ማስጠንቀቂያ መላክ ይችላሉ።",

        FParents: "ለወላጆች፦ ወዲያውኑ SOS ማስጠንቀቂያ ተቀበል",
        Allowingyoutoknowth: "ልጆችዎ የሚገኙበትን ቦታ ማንኛውንም ጊዜ እና ቦታ ማወቅ ያስችላችሁ፣ በጊዜው እርዳታ ለመስጠት እና ማንኛውንም አደጋ እንዳትሳካ ያግዛችሁ።",
        ReceiveemergencySO: "ከልጆች የተላከ SOS የአደጋ ማስጠንቀቂያ እና የቀጥታ አካባቢ መረጃ ታገኛላችሁ።",
        YoucanbtaithSOsig: "የFamiSafe መተግበሪያ ክፍት ወይም ዝግ ቢሆንም እንኳ፣ የSOS ምልክት እና የልጅዎን ቀጥታ አካባቢ መረጃ መቀበል ትችላላችሁ። እንዲሁም የSOS ቦታ መረጃን በአካባቢ ታሪክ ውስጥ ማየት ይችላሉ።",
        Topreventmisuseo: "ልጆች የSOS ባህሪውን እንዳይጠቀሙበት በስህተት፣ ከእርስዎ በኩል ይህን ባህሪ ማንቃት ወይም ማጥፋት መምረጥ ትችላላችሁ።",

        AvoidSituations: "አደገኛ ሁኔታዎችን ከመከሰት ይከላከሉ",
        FamiSafeAlert: "FamiSafe የSOS ማስጠንቀቂያ ባህሪ በPanic Button አደጋን ይከላከላል፣ የልጆችን የግል ደህንነት ያረጋግጣል እና የወላጅ–ልጅ ግንኙነትን ያጠናክራል።",
        Preventdange: "በወዲያውኑ ማስጠንቀቂያዎች እንደ መታፈን ወይም መከታተል ያሉ አደገኛ ሁኔታዎችን ይከላከላል።",
        Improveparentchi: "ወላጆች የበለጠ እንክብካቤ እና ትኩረት በማሳየት የወላጅ–ልጅ ግንኙነትን ያሻሽላሉ፣ ልጆችም የተወደዱ እና የተከበሩ መሆናቸውን ይሰማቸዋል።",
        Boosttrustbe: "በወላጆች እና በልጆች መካከል እምነትን ያጠናክራል፣ ስለ ችግሮች እና አስቸጋሪ ሁኔታዎች ክፍት ውይይት እንዲኖር ያበረታታል።",

        HowtoUseSOSAle: "የSOS ማስጠንቀቂያ ባህሪን እንዴት መጠቀም ይቻላል?",
        StepInstaFamiSafe: "ደረጃ 1፡ FamiSafe መጫን",
        DownloaamiSa: "በወላጅ ስልክ ላይ FamiSafe መተግበሪያውን ከGoogle Play Store ወይም App Store ያውርዱ።",

        StepeaAccount: "ደረጃ 2፡ መለያ መመዝገብ",
        RegisterWonders: "ለFamiSafe የWondershare ID ይመዝገቡ ወይም በApple፣ Google ወይም Facebook መለያ ይግቡ።",

        Step3ConnectKi: "ደረጃ 3፡ የልጅ መሳሪያን አገናኝ",
        Useyourkidphon: "በልጅዎ ስልክ የወላጅ ስልክ ላይ በFamiSafe ውስጥ ያለውን QR ኮድ ይስካን። ይህ ሲደረግ FamiSafe በልጅዎ ስልክ ላይ ይጫናል እና መጣመር (pairing) በራሱ ይጠናቀቃል።",

        MoreTipsaboutParentah: "ስለ የወላጅ መቆጣጠሪያ እና የልጆች እድገት ተጨማሪ ምክሮች",
        TopGameSitesNotBloc: "ወላጆች ማሳለፍ የማይገባቸው፦ የልጆችን የስክሪን ጊዜ መቀነስ የሚረዱ መንገዶች",
        ypasGoogleFamilyLin: "Google Family Link መከላከያን ለመሻር ፈጣንና ቀላል መንገዶች",
        EasyStepstInstalland: "በAmazon Fire ላይ YouTube Kids መጫንና መጠቀም — ቀላል ደረጃዎች",
        OmegleforKidsIsOmegle: "Omegle ለልጆች፦ Omegle ደህንነቱ የተጠበቀ ነው?",
        FamilyLinkNotWorki: "Google Family Link ካልሰራ ፦ ፈጣንና የተረጋገጡ መፍትሄዎች",

        faqam3fs: [
            {
                question: "ልጆች ለአደጋ ጊዜ ስልክ መኖራቸው ያስፈልጋል?",
                answer:
                    "በዘመናችን ልጅዎ ከአደጋ ጊዜ አገናኝ ጋር መገናኘት የሚያስችለው መንገድ መስጠት ብቻ ሳይሆን አስፈላጊ ሆኗል። ሞባይል ስልክ ወይም GPS ስማርት ሰዓት ቢሆንም፣ እነዚህ መሳሪያዎች በወላጆችና በልጆቻቸው መካከል የህይወት መስመር (lifeline) ይሆናሉ።",
            },
            {
                question: "በልጅ መሳሪያ ላይ የSOS ማስጠንቀቂያ ባህሪን እንዴት ማንቃት ይቻላል?",
                answer:
                    "ከDashboard እና Features ክፍሎች ልጆች የSOS ማስጠንቀቂያ ባህሪን ማግኘት ይችላሉ። በልጅ መሳሪያ ላይ ያለውን የSOS አዝራር ሲጫኑ፣ ወደ የSOS መልዕክት መላኪያ ገፅ ይመራሉ። በዚህ ገፅ ውስጥ የ5 ሰከንድ የመጠባበቂያ ጊዜ አለ። በዚህ ጊዜ ውስጥ ልጆች መልዕክቱን በCancel Signal ቁልፍ መሰረዝ ወይም ካልሰረዙት 5 ሰከንድ ከተሞላ በኋላ መልዕክቱ እንዲላክ መፍቀድ ይችላሉ።",
            },
            {
                question: "ወላጆች የSOS ማስጠንቀቂያን እንዴት ይቀበላሉ?",
                answer:
                    "የSOS ማስጠንቀቂያ ሲነሳ ወላጆች የPush Notification ወይም የPop-up መልዕክት ይቀበላሉ። View Details በመጫን ወደ Live Location ወይም Location History ገፅ ይመራሉ እና የተወሰነ የቦታ መረጃ ማየት ይችላሉ።",
            },
            {
                question: "ወላጆች የSOS ማስጠንቀቂያ ባህሪን በራሳቸው መሳሪያ ላይ ማጥፋት ይችላሉ?",
                answer:
                    "አዎ፣ ወላጆች የSOS ባህሪውን “Enable Panic Button” በመቆጣጠር ማንቃት ወይም ማጥፋት ይችላሉ። ይህ ባህሪ በነባሪ የተነቃ ሲሆን፣ ካጠፉት በኋላ በልጅ መሳሪያ ላይ የSOS አዝራር አይታይም።",
            },
        ],
        // LocationSharing
        KnowMorAboutDis: "መኖሪያ አካባቢ መጋራት",
        Leavedigitalparen: "ከቤተሰብና ከጓደኞች ጋር አካባቢዎን እንዴት መጋራት እንደሚቻል ይማሩ።",
        articles: [
            {
                title: "የSnapchat አካባቢ መከታተያ፡ የልጆችን አካባቢ እንዴት መከታተልና መጠበቅ ይቻላል",
                desc:
                    "የSnapchat የአካባቢ መከታተያ እንዴት እንደሚሰራ፣ የግላዊነት አደጋዎችን እና FamiSafe ለቤተሰቦች የተሻለና ደህንነቱ የተጠበቀ የአካባቢ መጋራት ምርጫ ለምን እንደሆነ ይመልከቱ።",
                img: "https://famisafe.wondershare.com/images/article/2025/03/how-to-share-location-on-android-1.jpg",
            },
            {
                title: "የInstagram መለያ አካባቢ መከታተል እንዴት ይቻላል? [4 መንገዶች]",
                desc:
                    "በሕዝብ መለያዎች፣ ነፃ መሳሪያዎች እና FamiSafe ያሉ የወላጅ መቆጣጠሪያ መተግበሪያዎች በመጠቀም የInstagram መለያ አካባቢን በደህንነት ለመከታተል 4 መንገዶችን ይማሩ።",
                img: "https://famisafe.wondershare.com/images/article/2025/03/family-location-sharing-1.jpg",
            },
            {
                title: "በ2025 ዓ.ም. ምርጥ 7 የInstagram አካባቢ መከታተያ መተግበሪያዎች",
                desc:
                    "ምርጥ የInstagram አካባቢ መከታተያ እየፈለጉ ነው? ነፃ አማራጮችን እና ቀጥታ መከታተል ባህሪያት ያካትቱ 7 ምርጥ መሳሪያዎችን ያግኙ።",
                img: "https://famisafe.wondershare.com/images/article/2025/02/geonection-1.jpg",
            },
        ],
        categories: [
            "አካባቢ መከታተያ",
            "የሞባይል መከታተያ",
            "አካባቢ መጋራት",
            "የቤተሰብ መከታተያ",
            "የወጣቶች መንዳት",
        ],

        articless: [
            {
                title:
                    "የSnapchat አካባቢ መከታተያ፡ የልጆችን አካባቢ እንዴት መከታተልና መጠበቅ ይቻላል",
                desc:
                    "የSnapchat የአካባቢ መከታተያ እንዴት እንደሚሰራ፣ የግላዊነት አደጋዎችን እና FamiSafe ለቤተሰቦች ደህንነቱ የተጠበቀ የአካባቢ መጋራት ለምን የተሻለ ምርጫ እንደሆነ ይመልከቱ።",
                author: "Thomas Jones",
                date: "2025-10-17 09:56:49",
            },
            {
                title:
                    "በ2025 በስልክ ቁጥር የiPhone አካባቢ በነፃ መከታተል እንዴት ይቻላል",
                desc:
                    "በiPhone Locator በመጠቀም የልጆችዎን ደህንነት ለመጠበቅ በስልክ ቁጥር iPhone እንዴት መከታተል እንደሚቻል ይማሩ። ሙሉ መመሪያውን ይመልከቱ!",
                author: "Thomas Jones",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "ስልኬን በነፃ እንዴት ማግኘት እችላለሁ?",
                desc:
                    "ይህ ጽሑፍ የ“ስልኬን ፈልግ” አገልግሎትን በነፃ ለመጠቀም 5 ቀላል መንገዶችን ይዟል። የተገነቡ መሳሪያዎችን፣ የመስመር-ላይ መከታተያዎችን እና መተግበሪያዎችን በመጠቀም ስልክዎን በፍጥነትና በደህንነት እንዴት ማግኘት እንደሚቻል ይማሩ።",
                author: "Marina Lehmann",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "ለወላጆች ምርጥ የiPhone 17 መከታተያ መተግበሪያ",
                desc:
                    "በዚህ ለወላጆች የiPhone መከታተያ መተግበሪያ የልጆችዎን አካባቢ በቀጥታ ይከታተሉ። ልጆችን ደህንነታቸው ለመጠበቅ ፈጣንና ብልህ መንገድ እንዴት እንደሆነ እንገልጻለን።",
                author: "Thomas Jones",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "ለAndroid እና iPhone ምርጥ 10 የአካባቢ መከታተያ መተግበሪያዎች",
                desc:
                    "ቤተሰብዎንና ጓደኞችዎን በምርጥ የአካባቢ መከታተያ መተግበሪያዎች ደህንነታቸውን ይጠብቁ። ከእነርሱ ጋር በቀጥታ ይገናኙና ሁልጊዜ ስለ አካባቢያቸው ያረጋግጡ።",
                author: "Thomas Jones",
                date: "2025-09-02 20:10:50",
            },
            {
                title: "በ2025 በነፃ አካባቢ ለመከታተል ምርጥ 10 የስልክ መተግበሪያዎች",
                desc:
                    "የሞባይል ስልክ አካባቢን በነፃ እንዴት መከታተል ይቻላል? እዚህ Android ወይም iPhone ላይ በነፃ ለመከታተል የሚረዱ 10 የሞባይል መከታተያዎችን ያግኙ።",
                author: "Thomas Jones",
                date: "2025-09-02 19:56:44",
            },
        ],
        Postedby: "በ ",
        Prev: "ቀዳሚ",
        Next: "ቀጣይ",
        // Family Tracker
        FamilyTracker: "የቤተሰብ መከታተያ",
        Whatsthebes: "ምርጥ የቤተሰብ አካባቢ መከታተያ መተግበሪያ ምንድነው? እዚህ በFamiSafe ይወቁ!",
        AllFamilyTracker: "ሁሉም የቤተሰብ መከታተያዎች",

        articlDSes: [
            {
                title: "ለAndroid እና iPhone ምርጥ 10 የአካባቢ መከታተያ መተግበሪያዎች",
                desc:
                    "የSnapchat አካባቢ መከታተያ እንዴት እንደሚሰራ፣ የግላዊነት አደጋዎቹ እና FamiSafe ለቤተሰቦች ደህንነት ያለው የተሻለ አማራጭ መሆኑን ያስረዱ።",
                img: "https://famisafe.wondershare.com/images/article/2025/03/geofencing-apps-1.jpg",
            },
            {
                title: "Glympse መተግበሪያ ግምገማ – ምርጥ የአካባቢ መከታተያ ነው?",
                desc:
                    "የInstagram አካባቢ ለመከታተል 4 ደህንነታዊ መንገዶችን፣ የህዝብ መለያዎችን፣ ነፃ መሳሪያዎችን እና FamiSafe ያሉ የወላጅ መተግበሪያዎችን ይማሩ።",
                img: "https://famisafe.wondershare.com/images/article/2025/02/glympse-app-review-1.jpg",
            },
            {
                title: "የጠፋ iPad በAndroid እና iPhone ለማግኘት ውጤታማ መንገዶች",
                desc:
                    "ምርጥ የInstagram አካባቢ መከታተያ እየፈለጉ ነው? ነፃ አማራጮችን እና ቀጥታ መከታተያ ያላቸው 7 ምርጥ መሳሪያዎችን ያግኙ።",
                img: "https://famisafe.wondershare.com/images/article/2019/11/seffective-ways-to-locate-lost-ipad-1.jpg",
            },
        ],

        categories: [
            "የአካባቢ መከታተያ",
            "የሞባይል መከታተያ",
            "አካባቢ ማጋራት",
            "የቤተሰብ መከታተያ",
            "የታዳጊ መንዳት",
        ],

        articleSSss: [
            {
                title: "ለiPhone እና Android 2025 ምርጥ 10 የGeofencing መተግበሪያዎች",
                desc:
                    "በ2025 ለiPhone እና Android ምርጥ የGeofencing መተግበሪያዎችን ይመልከቱ። ልጆችን እና ሰራተኞችን ለመከታተል ነፃ እና የሚከፈሉ አማራጮችን ያነፃፀሩ።",
                author: "ቶማስ ጆንስ",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "Glympse ግምገማ – ምርጥ የአካባቢ መከታተያ ነው?",
                desc:
                    "የGlympse መተግበሪያ ምን ያቀርባል? በዚህ ጽሑፍ ግምገማ እና ምርጥ አማራጩን ያግኙ።",
                author: "ሞሊ ስዊፍት",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "ማወቅ ያለብዎት ምርጥ 10 የመኪና መከታተያዎች",
                desc:
                    "ይህ ጽሑፍ ልጆችዎ አዲስ ነጂዎች ሲሆኑ የሚጠቅሙ ምርጥ 10 የመኪና GPS መከታተያዎችን ያሳያል።",
                author: "ቶማስ ጆንስ",
                date: "2025-09-12 18:05:24",
            },
        ],
        /// Mobile Tracker
        MobileTracker: "የሞባይል መከታተያ",
        Readourblogsabo:
            "ስለ ሞባይል መከታተያ እና የስልክ ክትትል የሚያብራሩ ብሎጎቻችንን ያንብቡ። ምርጥ የሞባይል መከታተያ መተግበሪያዎችን እንገምግማለን እና መከታተያ መተግበሪያዎችን እንዴት መጠቀም እንደሚቻል መመሪያዎችን እናቀርባለን።",
        AllMobileTracker: "ሁሉም የሞባይል መከታተያዎች",

        articlDdSes: [
            {
                title: "Snapchat አካባቢ መከታተያ፡ የልጆችን አካባቢ እንዴት መከታተል እና መጠበቅ ይቻላል",
                desc:
                    "የSnapchat አካባቢ መከታተያ እንዴት እንደሚሰራ፣ የግላዊነት አደጋዎቹ ምን እንደሆኑ እና FamiSafe ለቤተሰቦች የተሻለ እና ደህንነታማ የአካባቢ መጋራት አማራጭ ለምን እንደሆነ ይመልከቱ።",
                img: "https://famisafe.wondershare.com/images/article-trans-image/2035/snapchat-location-tracker-1.jpg",
            },
            {
                title: "የInstagram መለያ አካባቢን እንዴት መከታተል ይቻላል [4 መንገዶች]",
                desc:
                    "የInstagram መለያ አካባቢን ለመከታተል 4 ደህንነታማ መንገዶችን ይማሩ፣ የህዝብ መለያዎች፣ ነፃ መሳሪያዎች እና FamiSafe ያሉ የወላጅ መተግበሪያዎችን በመጠቀም።",
                img: "https://famisafe.wondershare.com/images/article/2025/05/track-instagram-location-banner.jpg",
            },
            {
                title: "በ2025 የሚጠቅሙ 7 ምርጥ የInstagram አካባቢ መከታተያ መተግበሪያዎች",
                desc:
                    "ምርጥ የInstagram አካባቢ መከታተያ እየፈለጉ ነው? ነፃ አማራጮችን እና ቀጥታ መከታተያ ባህሪያትን ጨምሮ 7 ምርጥ መሳሪያዎችን ያግኙ።",
                img: "https://famisafe.wondershare.com/images/article/2025/05/instagram-location-tracker.jpg",
            },
        ],

        categories: [
            "የአካባቢ መከታተያ",
            "የሞባይል መከታተያ",
            "የአካባቢ መጋራት",
            "የቤተሰብ መከታተያ",
            "የወጣቶች መንዳት",
        ],

        articleSdSss: [
            {
                title:
                    "Snapchat አካባቢ መከታተያ፡ የልጆችን አካባቢ እንዴት መከታተል እና መጠበቅ ይቻላል",
                desc:
                    "የSnapchat አካባቢ መከታተያ እንዴት እንደሚሰራ፣ የግላዊነት አደጋዎቹ እና FamiSafe ለቤተሰቦች የተሻለ አማራጭ ለምን እንደሆነ ይመልከቱ።",
                author: "ቶማስ ጆንስ",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "በ2025 ቁጥር በመጠቀም iPhone ነፃ እንዴት መከታተል ይቻላል",
                desc:
                    "ልጆችዎን ከመስመር ላይ አደጋዎች ለመጠበቅ iPhone በቁጥር እንዴት መከታተል እንደሚቻል ይወቁ።",
                author: "ቶማስ ጆንስ",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "ስልኬን ነፃ እንዴት ማግኘት እችላለሁ",
                desc:
                    "ይህ ጽሁፍ ስልክዎን በፍጥነት እና በደህንነት ለማግኘት 5 ቀላል መንገዶችን ይዘው ያቀርባል።",
                author: "ማሪና ሌማን",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "ለወላጆች ምርጥ iPhone 17 መከታተያ መተግበሪያ",
                desc:
                    "የልጆችዎን አካባቢ በቀጥታ ለመከታተል የሚረዳ ምርጥ የiPhone መከታተያ መተግበሪያን ይወቁ።",
                author: "ቶማስ ጆንስ",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "ለAndroid እና iPhone 10 ምርጥ የአካባቢ መከታተያ መተግበሪያዎች",
                desc:
                    "የቤተሰብዎን እና የጓደኞችዎን ደህንነት በምርጥ የአካባቢ መከታተያ መተግበሪያዎች ያረጋግጡ።",
                author: "ቶማስ ጆንስ",
                date: "2025-09-02 20:10:50",
            },
        ],/// Screen-Time-Control
        ScreenTimeControl: "የስክሪን ጊዜ መቆጣጠሪያ",
        Limitscreentimea: "በiPhone እና Android ላይ የስክሪን ጊዜን እና የመተግበሪያ አጠቃቀምን ይገድቡ።",
        AllScreenTimeControl: "ሁሉም የስክሪን ጊዜ መቆጣጠሪያ",

        articlxdSes: [
            {
                title: "በልጅ መሳሪያ ላይ የXbox ጊዜን እንዴት ማገደብ ይቻላል? | ሙሉ መረጃ",
                desc:
                    "ይህን መመሪያ በመከተል የXbox ጊዜን ያስተዳድሩ፣ ያገድቡ እና የልጆችዎን የጨዋታ ልምድ ይቆጣጠሩ። እንዲሁም ለዝርዝር ክትትል ተጨማሪ መተግበሪያ ያግኙ።",
                img: "https://famisafe.wondershare.com/images/article/2025/01/limit-xbox-time-1.jpg",
            },
            {
                title: "ለታዳጊዎች አማካይ የስክሪን ጊዜ እና ለወላጆች 7 ጠቃሚ ምክሮች",
                desc:
                    "እንደ ወላጅ ስለ ታዳጊዎች አማካይ የስክሪን ጊዜ ተጨንቀዋል? ይህን ጽሑፍ በማንበብ እሱን ለመቀነስ ሊጠቀሙባቸው የሚችሉ 7 ምርጥ ምክሮችን ይማሩ።",
                img: "https://famisafe.wondershare.com/images/article/2025/01/average-screen-time-for-teenagers-1.jpg",
            },
            {
                title: "ለብራንዶች እና ወላጆች TikTok ክትትል፡ 5 ምርጥ መሳሪያዎች እና ስትራቴጂዎች",
                desc:
                    "የTikTok ክትትል አስፈላጊነትን ይማሩ እና የብራንድ አፈፃፀምን ለመከታተል 5 ምርጥ መሳሪያዎችን ይመልከቱ። ንግዶች መገኘታቸውን እንዴት ማስተዳደር እንደሚችሉ ያውቁ።",
                img: "https://famisafe.wondershare.com/images/article/2025/01/tiktok-monitoring-1.jpg",
            },
        ],

        articlebdSss: [
            {
                title: "በልጅ መሳሪያ ላይ የXbox ጊዜን እንዴት ማገደብ ይቻላል? | ሙሉ መረጃ",
                desc:
                    "ይህን መመሪያ በማንበብ የXbox ጊዜን ያስተዳድሩ፣ ያገድቡ እና የልጆችዎን የጨዋታ ልምድ ይቆጣጠሩ። እንዲሁም ለዝርዝር ክትትል ተጨማሪ መተግበሪያ ያግኙ።",
                author: "ሞሊ ስዊፍት",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "ለታዳጊዎች አማካይ የስክሪን ጊዜ እና ለወላጆች 7 ጠቃሚ ምክሮች",
                desc:
                    "እንደ ወላጅ ስለ ታዳጊዎች የስክሪን ጊዜ ተጨንቀዋል? ይህ ጽሑፍ እሱን ለመቀነስ የሚረዱ 7 ምርጥ ምክሮችን ያቀርባል።",
                author: "ቶማስ ጆንስ",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "ለPC ምርጥ እና ዘመናዊ የስክሪን ጊዜ መተግበሪያዎችን ያግኙ",
                desc:
                    "ለPC በጣም ውጤታማ የሆነ የስክሪን ጊዜ መገደቢያ በመጠቀም የልጆችን ዲጂታል ልምድ እንዴት መቆጣጠር እንደሚቻል ይማሩ።",
                author: "አንኪ ባታቻርያ",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "በAndroid ላይ የስክሪን ጊዜ ገደብ እንዴት ማዘጋጀት ይቻላል? [2024]",
                desc:
                    "በAndroid ላይ የመተግበሪያ ጊዜ ገደብ ለማዘጋጀት ምርጥ 5 መንገዶችን ይማሩ። የልጆችዎን ምርታማነት ለማሻሻል ቀላል እና ተግባራዊ መንገዶችን ይጠቀሙ።",
                author: "አንኪ ባታቻርያ",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "በiPhone/iPad ላይ Screen Time ካልሰራ  | 12 መፍትሄዎች",
                desc:
                    "በiPhone Screen Time እየሰራ ካልሆነ ተጨንቀዋል? ችግሩን በፍጥነት ለመፍታት 12 ቀላል መፍትሄዎችን ያግኙ።",
                author: "አንኪ ባታቻርያ",
                date: "2025-09-02 20:10:50",
            },
            {
                title: "ለiPhone እና Android ምርጥ 5 የስክሪን ጊዜ መቆጣጠሪያ መተግበሪያዎች",
                desc:
                    "ይህ ጽሑፍ በiPhone እና Android ላይ የስክሪን ጊዜን ለመቆጣጠር ምርጥ 5 መተግበሪያዎችን ያቀርባል። ዲጂታል ልምዶችን ያስተዳድሩ፣ ጤናዎን ይጠብቁ እና ሚዛን ያግኙ።",
                author: "ሞሊ ስዊፍት",
                date: "2025-09-02 20:10:50",
            },
        ],

        // iOS Parental Control
        iOSParentalControl: "የiOS የወላጅ መቆጣጠሪያ",
        BestiOSParental:
            "በአሜሪካ 45.3% የስማርትፎን ተጠቃሚዎች iOS መሳሪያዎችን ይመርጣሉ። ስለዚህ በiPhone፣ iPad፣ iPod እና ሌሎች የApple መሳሪያዎች ላይ የወላጅ መቆጣጠሪያ እንዴት መቀናበር እንደሚቻል መማር አስፈላጊ ነው።",
        AlliOSParentalControl: "ሁሉም የiOS የወላጅ መቆጣጠሪያ",

        AlliOSntalCorol: [
            {
                title: "20+ ምርጥ iOS 26 ዋልፔፐሮች ለውብ እና ተንቀሳቃሽ ማቀናበሪያ",
                desc:
                    "አዳዲስ የiOS 26 ዋልፔፐሮችን ያግኙ — ተንቀሳቃሽ፣ AI-የተመራ እና ለልጆች የሚመች። FamiSafe ቤተሰቦች የስክሪን አጠቃቀምን በብልህነት እንዴት እንደሚቆጣጠሩ ይማሩ።",
                img: "https://famisafe.wondershare.com/images/article/2025/01/limit-xbox-time-1.jpg",
            },
            {
                title: "በiPhone ላይ Safe Search እንዴት መክፈት/መዝጋት ይቻላል – ሙሉ መመሪያ",
                desc:
                    "በiPhone ላይ Safe Searchን በጥቂት ደቂቃዎች ውስጥ እንዴት መክፈት ወይም መዝጋት እንደሚቻል ይማሩ። ደረጃ-በ-ደረጃ መመሪያዎችን ተከትሉ እና መሳሪያዎች አስተሳሰብዎን እንዴት ደህንነቱን እንደሚጠብቁ ይወቁ።",
                img: "https://famisafe.wondershare.com/images/article/2025/01/average-screen-time-for-teenagers-1.jpg",
            },
            {
                title: "ለልጆች ምርጥ iPhone፡ የደህንነት፣ ማቀናበር እና የወላጅ መሳሪያዎች መመሪያ",
                desc:
                    "በ2025 ለልጆች ተስማሚ የሆነ iPhone ያግኙ — ደህንነት፣ ጥንካሬ እና ተመጣጣኝ ዋጋ ያለው። በዕድሜ መሠረት ምክሮችን ይመልከቱ እና ሞዴሎችን ያነጻጽሩ።",
                img: "https://famisafe.wondershare.com/images/article/2025/01/tiktok-monitoring-1.jpg",
            },
        ],

        AlliOSPareontrol: [
            {
                title: "20+ ምርጥ iOS 26 ዋልፔፐሮች ለውብ እና ተንቀሳቃሽ ማቀናበሪያ",
                desc:
                    "አዳዲስ የiOS 26 ዋልፔፐሮችን ያግኙ — ተንቀሳቃሽ፣ AI-የተመራ እና ለልጆች የሚመች። FamiSafe ቤተሰቦች የስክሪን አጠቃቀምን በብልህነት እንዴት እንደሚቆጣጠሩ ይማሩ።",
                author: "ሞሊ ስዊፍት",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "ለልጆች ምርጥ iPhone፡ የደህንነት፣ ማቀናበር እና የወላጅ መሳሪያዎች",
                desc:
                    "በ2025 ለልጆች ተስማሚ የሆነ iPhone ያግኙ — ደህንነት፣ ጥንካሬ እና ተመጣጣኝ ዋጋ ያለው። በዕድሜ መሠረት ምክሮችን ይመልከቱ እና ሞዴሎችን ያነጻጽሩ።",
                author: "ቶማስ ጆንስ",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "በiPhone X/8/7/6 ላይ የወላጅ መቆጣጠሪያ እንዴት መቀናበር ይቻላል",
                desc:
                    "በiPhone X/8/7/6 ላይ መተግበሪያዎችን፣ የአዋቂ ይዘቶችን እና የፖርኖ ድህረ ገጾችን ለመከልከል የወላጅ መቆጣጠሪያ መቀናበር መመሪያ።",
                author: "ቶማስ ጆንስ",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "በSafari ላይ የወላጅ መቆጣጠሪያ እንዴት መቀናበር ይቻላል?",
                desc:
                    "በiPhone፣ iPad እና Mac ላይ የSafari የወላጅ መቆጣጠሪያን እንዴት መጠቀም እንደሚቻል ይማሩ። የልጆችዎን የመመርመሪያ ደህንነት በመጥፎ ድህረ ገጾች መከልከል ይጠብቁ።",
                author: "ቶማስ ጆንስ",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "በiPhone/iPad ላይ Screen Time ካልሰራ | 12 መፍትሄዎች",
                desc:
                    "የልጅዎ የመስመር ላይ እንቅስቃሴ እያሳሰብዎት ነው? በiPhone ላይ ገደቦችን እና Screen Time Safari እንዴት መቀናበር እንደሚቻል በዝርዝር ይማሩ።",
                author: "ቶማስ ጆንስ",
                date: "2025-09-02 20:10:50",
            },
            {
                title: "የSafari የወላጅ መቆጣጠሪያ፡ ምንድን ነው? እና ምርጥ የማቀናበር መንገዶች",
                desc:
                    "በiPhone፣ iPad እና Mac ላይ የSafari የወላጅ መቆጣጠሪያን እንዴት መጠቀም እንደሚቻል ይማሩ። ያልተገባ ድህረ ገጾችን በመከልከል የልጅዎን የመመርመሪያ ደህንነት ያረጋግጡ።",
                author: "ቶማስ ጆንስ",
                date: "2025-09-02 20:10:50",
            },
            {
                title: "በiPhone ላይ Safe Search መክፈት/መዝጋት – ሙሉ መመሪያ",
                desc:
                    "በiPhone ላይ Safe Searchን በጥቂት ደቂቃዎች ውስጥ እንዴት መክፈት ወይም መዝጋት እንደሚቻል ይማሩ። መሳሪያዎች የመመርመሪያዎን ደህንነት እንዴት እንደሚጠብቁ ይወቁ።",
                author: "ቶማስ ጆንስ",
                date: "2025-09-02 20:10:50",
            },
        ],
        // Android Parental Control
        AndroidParentalControl: "የAndroid የወላጅ መቆጣጠሪያ",
        Inthistopicyouwi:
            "በዚህ ርዕስ ውስጥ በሁሉም የAndroid ስልኮችና ታብሌቶች ላይ የወላጅ መቆጣጠሪያን እንዴት መቀናበር እንደሚቻል ይማራሉ።",
        AllAnroidaretalControl: "ሁሉም የAndroid የወላጅ መቆጣጠሪያ",

        AndriodiOSntalCorol: [
            {
                title: "በ2025 በAndroid ላይ ያልታወቁ ቁጥሮችን ቀላል መንገድ መከልከል",
                desc:
                    "ያልታወቁ ጥሪዎችን መቀበል ካስቸገረዎት፣ በAndroid መሳሪያዎ ላይ የግል ቁጥሮችን እንዴት መከልከል እንደሚቻል ይማሩ። ይህ ጽሑፍ 3 መንገዶችን እና የቁጥር መከልከያ መተግበሪያዎችን ያቀርባል።",
                img: "https://famisafe.wondershare.com/images/article-trans-image/2143/how-to-block-private-numbers-on-android-1.jpg",
            },
            {
                title: "የXiaomi የወላጅ መቆጣጠሪያ፡ የወላጆች መመሪያ",
                desc:
                    "የXiaomi የወላጅ መቆጣጠሪያ እንዴት እንደሚሰራ ይወቁ፣ እና ብዙ ወላጆች የልጆቻቸውን የስልክ እንቅስቃሴ በታማኝነት ለመቆጣጠር ለምን FamiSafe እንደሚመርጡ ያስረዱ።",
                img: "https://famisafe.wondershare.com/images/article-trans-image/99/xiaomi-parental-control-1.jpg",
            },
            {
                title: "Amazon FreeTime Unlimited ምዝገባን እንዴት መሰረዝ ይቻላል",
                desc:
                    "Amazon FreeTime ለልጆች የተስማሚ ይዘት የሚያቀርብ ዝቅተኛ ዋጋ ያለው ምዝገባ ነው። ነገር ግን ለሕይወት አይገድብዎትም፤ መሰረዝ ቀላል ነው። ይህ ጽሑፍ Amazon FreeTime እንዴት መሰረዝ እንደሚቻል ያስረዳል።",
                img: "https://famisafe.wondershare.com/images/article/2020/12/how-to-cancel-amazon-freetime-1.jpg",
            },
        ],

        AndriodiOSPareontrol: [
            {
                title: "በ2025 ማያመልጡ ምርጥ የቤተሰብ ጨዋታዎች",
                desc:
                    "ከልጆችዎ ጋር ጥራት ያለው ጊዜ ለማሳለፍ የሚረዱ ምርጥ የቤተሰብ ጨዋታዎች፣ እንዲሁም FamiSafe ያልተፈለጉ ፕሮግራሞችን በመቆለፍ የስክሪን ጊዜን እንዴት እንደሚያስተካክል ይወቁ።",
                author: "ሞሊ ስዊፍት",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "በ2025 በAndroid ላይ ያልታወቁ ቁጥሮችን ቀላል መንገድ መከልከል",
                desc:
                    "ያልታወቁ ጥሪዎች ካስቸገሩዎት፣ በAndroid መሳሪያዎ ላይ የግል ቁጥሮችን መከልከል ይማሩ። ይህ ጽሑፍ 3 መንገዶችን እና የቁጥር መከልከያ መተግበሪያዎችን ያቀርባል።",
                author: "አንኪ ባታቻርያ",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "የXiaomi የወላጅ መቆጣጠሪያ፡ የወላጆች መመሪያ",
                desc:
                    "የXiaomi የወላጅ መቆጣጠሪያ እንዴት እንደሚሰራ ይወቁ፣ እና ብዙ ወላጆች የልጆቻቸውን የስልክ እንቅስቃሴ በተሻለ እና ታማኝ መንገድ ለመቆጣጠር FamiSafe ለምን እንደሚመርጡ ያስረዱ።",
                author: "ቶማስ ጆንስ",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "በAndroid መሳሪያዎች ላይ የወላጅ መቆጣጠሪያ መቀናበር – ሙሉ መመሪያ",
                desc:
                    "የወላጅ መቆጣጠሪያ ባህሪያት በሞባይል፣ PC እና ቪዲዮ ጨዋታዎች ላይ የልጆች ወደ አንዳንድ ይዘቶች መዳረሻን ለመገደብ የሚያስችሉ ናቸው።",
                author: "ቶማስ ጆንስ",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "ለTV፣ PC ወይም Smart መሳሪያዎች ምርጥ የAndroid የርቀት መቆጣጠሪያ መተግበሪያዎች",
                desc:
                    "ስልክዎን ወደ Smart TV መቆጣጠሪያ ለመቀየር ሊጠቀሙባቸው የሚችሉ ምርጥ የርቀት መቆጣጠሪያ መተግበሪያዎች።",
                author: "ቶማስ ጆንስ",
                date: "2025-09-02 20:10:50",
            },
            {
                title: "Android ስልክን ከPC ሩት ሳይደርስ እንዴት መቆጣጠር ይቻላል?",
                desc:
                    "ቴክኖሎጂ ተሻሽሏል፤ አሁን Android ስልክን ከPC ሩት ሳይደርስ መቆጣጠር ይቻላል። ይህ ጽሑፍ ሁለት መንገዶችን ያቀርባል።",
                author: "ቶማስ ጆንስ",
                date: "2025-09-02 20:10:50",
            },
        ],
        /// Desktop Parental Control
        DesktopParentalControl: "የዴስክቶፕ የወላጅ ቁጥጥር",
        Findoutinthistopial: "በዚህ ርዕስ ውስጥ የልጅዎን ኮምፒውተር፣ ላፕቶፕ እና Mac አጠቃቀም ለመገደብ የሚረዱ መፍትሄዎችን ሁሉ ያገኛሉ።",
        AllDetopPaental667Control: "ሁሉም የዴስክቶፕ የወላጅ ቁጥጥር",
        DesktopParentalCo75: [
            {
                title: "Chromebook ወይስ Laptop? ለልጅ የትኛው ይሻላል?",
                desc:
                    "Chromebook ወይም Laptop መግዛት እንደሚገባ ተወላጅ ችግኝ አለዎት? ይህ ዝርዝር መመሪያ Chromebook እና Laptop መካከል ምርጫ ለማድረግ ይረዳዎታል።",
                img: "https://famisafe.wondershare.com/images/article/2022/09/chromebook-vs-laptop-1.jpg",
            },
            {
                title: "በWindows 10 የDevice Manager መክፈቻ 5 መንገዶች",
                desc:
                    "የWindows PCዎ ምናልባት ያላወቁት ብዙ ባህሪያት አሉት። በWindows 10 ውስጥ Device Manager እንዴት መጠቀም እንደሚቻል ያግኙ።",
                img: "https://famisafe.wondershare.com/images/article/2020/09/device-manager-windows-10-1.jpg",
            },
            {
                title: "በMac ላይ Activity Monitor እንዴት መጠቀም ይቻላል?",
                desc:
                    "Activity Monitor በMac ላይ ኮምፒውተርዎን ለማጽዳት እና ወደ ፈጣንነቱ ለመመለስ እጅግ ጠንካራ መሣሪያ ነው።",
                img: "https://famisafe.wondershare.com/images/article/2020/09/use-activity-report-on-mac-1.jpg",
            },
        ],
        DesktopParentalCon76: [
            {
                title: "በLaptop ላይ Screen Time እንዴት መመርመር ይቻላል?",
                desc:
                    "በዚህ መመሪያ በመጠቀም በLaptop ላይ የScreen Time እንቅስቃሴን በቀላሉ ይመርምሩ።",
                author: "Moly Swift",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "ለMac የScreen Time መመሪያ፡ ሁሉም የሚያስፈልገዎት",
                desc:
                    "አብዛኛዎቹ ልጆች በመሳሪያዎቻቸው ላይ ብዙ ጊዜ ያሳልፋሉ። Screen Time ይህንን ሂደት ለመቆጣጠር ይረዳዎታል።",
                author: "Ankhi Bhattacharya",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "Mac App Blocker መተግበሪያዎችን እንዴት ይጠብቃል?",
                desc:
                    "Mac App Blocker መጠቀም መተግበሪያዎችን ለመጠበቅ ቀላሉ መንገድ ነው። የደህንነት ኮድ ብቻ ያቀናብሩ።",
                author: "Thomas Jones",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "በWindows 10 የወላጅ ቁጥጥር እንዴት ማቀናበር ይቻላል?",
                desc:
                    "በWindows 10 ውስጥ የወላጅ ቁጥጥርን በደረጃ የሚያሳይ መመሪያ ያንብቡ።",
                author: "Thomas Jones",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "Chromebook የወላጅ ቁጥጥር እንዴት መቀናበር ይቻላል?",
                desc:
                    "ለልጆችዎ Chromebook የወላጅ ቁጥጥር ማቀናበር እንዴት እንደሚቻል ይማሩ።",
                author: "Thomas Jones",
                date: "2025-09-02 20:10:50",
            },
            {
                title: "ለወላጆች 10 ምርጥ የኮምፒውተር ክትትል ሶፍትዌሮች [2025]",
                desc:
                    "የኮምፒውተር ክትትል ሶፍትዌሮች የልጆችን የመስመር ላይ ደህንነት ለመቆጣጠር ይረዳሉ።",
                author: "Thomas Jones",
                date: "2025-09-02 20:10:50",
            },
        ],
        // Chromebook Guide
        ChromebookGuide: "የChromebook መመሪያ",
        Hereyouanfin76: "እዚህ ስለ Chromebook ብዙ መረጃዎችን ማግኘት ይችላሉ፤ እንዴት በተሻለ መጠቀም እና የወላጅ ቁጥጥር እንዴት መቀናበር እንደሚቻል ጨምሮ።",
        AllChromebookGuide: "ሁሉም የChromebook መመሪያዎች",
        Chromebo65okGuide: [
            {
                title: "በChromebook ላይ የወላጅ ቁጥጥርን እንዴት ማጥፋት ይቻላል?",
                desc:
                    "ልጅ ካለዎት እና በChromebook ላይ የወላጅ ቁጥጥር አብራችሁ ካቀናበራችሁ እና አሁን ማጥፋት ከፈለጋችሁ፣ ይህን ጽሑፍ ያንብቡ።",
                img: "https://famisafe.wondershare.com/images/article/2022/11/turn-off-account-parental-control-1.jpg",
            },
            {
                title: "በChromebook ላይ Discord ለመጫን 4 ቀላል መንገዶች",
                desc:
                    "Discord በChromebook ላይ እንዴት መጫን እንደሚቻል መማር ከፈለጉ፣ ይህ ጽሑፍ 4 ቀላል መንገዶችን ያሳያል።",
                img: "https://famisafe.wondershare.com/images/article/2022/04/download-discord-on-chromebook.png",
            },
            {
                title: "Friday Night Funkin በChromebook ላይ እንዴት መጫወት ይቻላል? [Unblocked]",
                desc:
                    "ታዋቂውን Friday Night Funkin የድር ጨዋታ በChromebook ላይ መጫወት ይቻላል? መልሱ አዎን ነው! እዚህ 3 መንገዶችን ያግኙ፣ በእ同时ም የFNF ልመና ሱስን ይከላከሉ።",
                img: "https://famisafe.wondershare.com/images/article/2021/12/screen-time/unblocked-sites-for-fnf.jpg",
            },
        ],
        Chromebo66okGuide: [
            {
                title: "Friday Night Funkin በChromebook ላይ እንዴት መጫወት ይቻላል? [Unblocked]",
                desc:
                    "ታዋቂውን Friday Night Funkin የድር ጨዋታ በChromebook ላይ መጫወት ይቻላል? መልሱ አዎን ነው! 3 መንገዶችን ያግኙ።",
                author: "Moly Swift",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "በGoogle ላይ Screen Time ማቀናበር ይቻላል?",
                desc:
                    "ልጅዎ በGoogle ላይ ብዙ Screen Time እየወሰደ ነው ብለው ተጨንቀዋል? ይህ ጽሑፍ በChromebook፣ Google App እና Chrome አሳሽ ላይ Screen Time እንዴት ማቀናበር እንደሚቻል ያስተምራል።",
                author: "Moly Swift",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "ለልጆች 8 ምርጥ Chromebooks",
                desc:
                    "ለልጆች የሚሆኑ ምርጥ Chromebooks ምን እንደሆኑ ታውቃለዎት? ተጨማሪ መረጃ ለማግኘት ይህን ጽሑፍ ይመልከቱ።",
                author: "Moly Swift",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "በChromebook ላይ የወላጅ ቁጥጥርን እንዴት ማጥፋት ይቻላል?",
                desc:
                    "በChromebook ላይ የተቀናበረውን የወላጅ ቁጥጥር ማጥፋት ከፈለጉ፣ ይህ መመሪያ ይረዳዎታል።",
                author: "Moly Swift",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "በChromebook ላይ Discord ለመጫን 4 ቀላል መንገዶች",
                desc:
                    "Discord በChromebook ላይ በቀላሉ መጫን እንዴት እንደሚቻል 4 መንገዶችን ይማሩ።",
                author: "Moly Swift",
                date: "2025-09-02 20:10:50",
            },
            {
                title: "በቀላሉ፡ Geforce Now በChromebook ላይ እንዴት መቀናበር ይቻላል?",
                desc:
                    "Geforce Now በChrome ላይ መስራቱ እንደሚቻል ታውቃለዎት? Windows ወይም Mac ያስፈልጋል ብለው ተመስሎዎታል? ይህ ጽሑፍ Geforce Now በChromebook ላይ እንዴት መቀናበር እንደሚቻል ያሳያል።",
                author: "Ankhi Bhattacharya",
                date: "2025-09-02 20:10:50",
            },
        ],
        /// መተግበሪያዎችን መከልከል
        BlockApps: "መተግበሪያዎችን መከልከል",
        Text8755essageCall: "የጽሑፍ መልዕክት፣ ጥሪ፣ ቁጥር እና ማስታወቂያ መከልከያ መተግበሪያዎች ለ Android እና iPhone",
        AllBlockpps: "ሁሉም የመከልከያ መተግበሪያዎች",

        Chromebo55okGuide: [
            {
                title: "8 የድር ጣቢያ መከልከያ መተግበሪያዎች፡ የትኛው ትኩረትዎን ይጠብቃል?",
                desc:
                    "በ2025 ውስጥ ትኩረትና ደህንነትን የሚጠብቁ 8 ምርጥ የድር ጣቢያ መከልከያ መተግበሪያዎችን ያግኙ። መዘናጋትን ይከልክሉ እና ምርታማነትዎን ያሳድጉ — ለብልህ የወላጅ ቁጥጥር FamiSafeን ይሞክሩ።",
                img: "https://famisafe.wondershare.com/images/article-trans-image/2151/website-blocker-app-1.jpg",
            },
            {
                title: "Twitter/Xን በአሳሾችና በሞባይል መሣሪያዎች ላይ እንዴት መከልከል ይቻላል?",
                desc:
                    "Twitter/Xን በሞባይል መሣሪያዎችና በድር አሳሾች ላይ ቀላል በሆነ መንገድ ማገድ ይፈልጋሉ? መዘናጋትን ለመቀነስ ወይም መዳረሻን ለመቆጣጠር የሚያስፈልጉ ቀላል እርምጃዎችን ያግኙ።",
                img: "https://famisafe.wondershare.com/images/article-trans-image/1193/block-x-1.jpg",
            },
            {
                title: "8 ምርጥ የFacebook መከልከያ መተግበሪያዎች ልጆችዎን በመስመር ላይ ለመጠበቅ",
                desc:
                    "ልጆችዎን በመስመር ላይ ለመጠበቅ የሚረዱ ምርጥ የFacebook መከልከያ መተግበሪያዎችን ያግኙ። በFacebook ላይ ሰዓታትን እንዳይወጡ የጊዜ ሰሌዳ ያቀናብሩ።",
                img: "https://famisafe.wondershare.com/images/article-trans-image/426/facebook-blocker-01.jpg",
            },
        ],

        Chromebo56okGuide: [
            {
                title: "10 ምርጥ የስልክ ቁጥር መከልከያ መተግበሪያዎች",
                desc:
                    "ለእርስዎ ወይም ለልጅዎ ስልክ ኃይለኛ የጥሪ መከልከያ መተግበሪያ እየፈለጉ ነው? ሁሉንም የሚያካትት መመሪያ እዚህ ያገኛሉ!",
                author: "Thomas Jones",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "8 የድር ጣቢያ መከልከያ መተግበሪያዎች፡ የትኛው ትኩረትዎን ይጠብቃል?",
                desc:
                    "በ2025 ውስጥ ትኩረትና ደህንነትን የሚጠብቁ 8 ምርጥ የድር ጣቢያ መከልከያ መተግበሪያዎችን ያግኙ። መዘናጋትን ይከልክሉ እና ምርታማነትዎን ያሳድጉ — ዛሬ FamiSafeን ይሞክሩ።",
                author: "Thomas Jones",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "በ2025 ለAndroid 10 ነፃ የስፓም ጥሪ መከልከያ መተግበሪያዎች",
                desc:
                    "ስፓም፣ ሮቦ ጥሪዎችን እና ያልታወቁ ቁጥሮችን ለማቆም ምርጥ 10 ነፃ የጥሪ መከልከያ መተግበሪያዎችን ያግኙ። በብልህ የጥሪ ማጣሪያ ራስዎን ይጠብቁ።",
                author: "Thomas Jones",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "በ2025 ለተጨነቁ ወላጆች 8 ምርጥ የiPhone መተግበሪያ መከልከያዎች",
                desc:
                    "ልጅዎ የiPhone አጠቃቀም ያሳስባዎታል? ይህ መመሪያ ለወላጆች 8 ምርጥ የiPhone መተግበሪያ መከልከያዎችን ይገምግማል። ለቤተሰብዎ ተስማሚ የወላጅ ቁጥጥር መፍትሄ ይምረጡ።",
                author: "Thomas Jones",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "Twitter/Xን በአሳሾችና በሞባይል መሣሪያዎች ላይ እንዴት መከልከል ይቻላል?",
                desc:
                    "Twitter/Xን በሞባይል መሣሪያዎችና በድር አሳሾች ላይ ቀላል በሆነ መንገድ ማገድ ይፈልጋሉ? መዘናጋትን ለመቀነስ ወይም መዳረሻን ለመቆጣጠር የሚያስፈልጉ እርምጃዎችን ያግኙ።",
                author: "Thomas Jones",
                date: "2025-09-02 20:10:50",
            },
            {
                title: "በ2025 ማወቅ ያለብዎት 6 የiPhone ጥሪ መከልከያ መተግበሪያዎች",
                desc:
                    "ስፓምና ሮቦ ጥሪዎችን በቀላሉ ለማቆም ምርጥ የiPhone ጥሪ መከልከያ መተግበሪያዎችን ያግኙ። እያንዳንዱ መተግበሪያ ያልታወቁ ጠሪዎችን ለመቆጣጠር እና ከማጭበርበር ለመጠበቅ ይረዳዎታል።",
                author: "Thomas Jones",
                date: "2025-09-02 20:10:50",
            },
        ],
        /// ጨዋታዎችን መከልከል
        BlockGame: "ጨዋታዎችን መከልከል",
        Learnft6howto: "በልጆች ዲጂታል መሣሪያዎች ላይ ያልተገባ ጨዋታዎችን እንዴት መከልከል እንደሚቻል ይማሩ፤ ልጆችን ከጨዋታ ፖርኖግራፊ እና ከጨዋታ ሱስ ይጠብቁ።",
        AllBlockGames: "ሁሉም የጨዋታ መከልከያዎች",
        Chromebo5j5okGuide: [
            {
                title: "Pokémon Go ለልጆች ደህንነቱ የተጠበቀ ነው? የወላጆች መመሪያ [2025]",
                desc:
                    "የPokémon Go የደህንነት ማስጠንቀቂያዎች ተጫዋቾችን ስለ ዓለም እውነተኛ አደጋዎች ያሳስባሉ። እነዚህ ማስጠንቀቂያዎች ምን እንደሚማሩ ይወቁ እና Pokémon Goን በደህንነት ለመጫወት ጠቃሚ ምክሮችን ያግኙ።",
                img: "https://famisafe.wondershare.com/images/article-trans-image/2034/pokemon-go-safety-warning-1.jpg",
            },
            {
                title: "WoW የወላጅ ቁጥጥር እንዴት መቀናበር ይቻላል? [2025 የተዘመነ]",
                desc:
                    "ይህ መመሪያ የWorld of Warcraft የወላጅ ቁጥጥር አማራጮችን እና እነሱን ለመድረስ የሚያስፈልጉ ደረጃዎችን ይገልጻል። ተጨማሪ የላቀ የቁጥጥር መተግበሪያም ያገኛሉ።",
                img: "https://famisafe.wondershare.com/images/article/2025/02/wow-parental-controls-1.jpg",
            },
            {
                title: "ያልተገባ የRoblox ጨዋታዎችን እንዴት መከልከል ይቻላል? የወላጆች መመሪያ",
                desc:
                    "ይህ መመሪያ ልጆች የሚወዱ 7 ያልተገባ የRoblox ጨዋታዎችን ያጋራል። FamiSafeን በመጠቀም ልጆችዎን ከያልተገባ የRoblox ጨዋታዎች እንዴት መጠበቅ እንደሚቻል ይማሩ።",
                img: "https://famisafe.wondershare.com/images/article/2024/04/top-7-inappropriate-games-on-roblox-01.jpg",
            },
        ],
        Chromebo5j6okGuide: [
            {
                title: "ያልተገባ የRoblox ጨዋታዎችን እንዴት መከልከል ይቻላል? የወላጆች መመሪያ",
                desc:
                    "ይህ መመሪያ ልጆች የሚወዱ 7 ያልተገባ የRoblox ጨዋታዎችን ያጋራል። FamiSafeን በመጠቀም ልጆችዎን ከያልተገባ የRoblox ጨዋታዎች እንዴት መጠበቅ እንደሚቻል ይማሩ።",
                author: "Ankhi Bhattacharya",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "ትምህርት ቤቶች ያልከለከሉት 12 ታዋቂ ጨዋታዎች፡ ወላጆች ማወቅ ያለባቸው",
                desc:
                    "በትምህርት ቤት ኔትወርኮች ያልተከለከሉ 12 ታዋቂ የጨዋታ ድር ጣቢያዎችን ያግኙ። ልጆች ለምን እንደሚወዷቸው ይወቁ እና ወላጆች እንዴት ደህንነታዊ እና ሚዛናዊ የመስመር ላይ ጨዋታ ልምዶችን መመራት እንደሚችሉ ይማሩ።",
                author: "Joanne Croft",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "Gacha Club ለልጆች ደህንነቱ የተጠበቀ ነው? የወላጆች መመሪያ",
                desc:
                    "Gacha Club እንደሌሎች የመስመር ላይ ጨዋታዎች ሁሉ ብዙ ልጆችን ይማርካል። ይህ ጽሑፍ ስለ Gacha Club ማወቅ ያለብዎትን ሁሉ በመስጠት ዲጂታል ደህንነትን ለማበረታታት ይረዳዎታል።",
                author: "Molly Swift",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "Pokémon Go ለልጆች ደህንነቱ የተጠበቀ ነው? የወላጆች መመሪያ [2025]",
                desc:
                    "የPokémon Go የደህንነት ማስጠንቀቂያዎች ተጫዋቾችን ስለ እውነተኛ ዓለም አደጋዎች ያሳስባሉ። እነዚህ ማስጠንቀቂያዎች ምን እንደሚማሩ ይወቁ እና Pokémon Goን በደህንነት ለመጫወት ጠቃሚ ምክሮችን ያግኙ።",
                author: "Thomas Jones",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "በGoogle Sites ላይ ልጆች የሚወዷቸው 7 ያልተከለከሉ ጨዋታዎች",
                desc:
                    "ልጆችዎ በGoogle Sites ላይ ያልተከለከሉ ጨዋታዎችን ሁልጊዜ እየተጫወቱ መሆናቸው ያሳስባዎታል? ይህ መመሪያ እንዴት እነዚህን ጨዋታዎች መከልከል እና የጨዋታ ሱስን መከላከል እንደሚቻል ያሳያል።",
                author: "Molly Swift",
                date: "2025-09-02 20:10:50",
            },
            {
                title: "Hentai የጨዋታ ድር ጣቢያዎችን እንዴት መከልከል ይቻላል? ወላጆች ማወቅ ያለባቸው",
                desc:
                    "በልጆች መሣሪያዎች ላይ የHentai ጨዋታ መተግበሪያዎችን ወይም ድር ጣቢያዎችን እንዴት መከልከል ይቻላል? FamiSafe ያሉ የወላጅ ቁጥጥር መተግበሪያዎችን በመጠቀም ልጆችን ከያልተገባ ይዘት ይጠብቁ።",
                author: "Molly Swift",
                date: "2025-09-02 20:10:50",
            },
        ],
        // ፖርኖግራፊ መከልከል
        Blockorn: "ፖርኖግራፊ መከልከል",
        Accessingporno: "ፖርኖግራፊን በቀ早 ዕድሜ መድረስ በልጆች ላይ አሉታዊ ተፅእኖ ያሳድራል። በልጅዎ መሣሪያዎች ላይ ፖርኖግራፊን እንዴት መከልከል እንደሚቻል ለማወቅ እዚህ ይመልከቱ።",
        AllBlockPorn: "ሁሉም የፖርኖግራፊ መከልከያዎች",

        AllBlockPo544ern: [
            {
                title: "በChrome ላይ የአዋቂ ይዘትን እንዴት መከልከል ይቻላል? ሙሉ የወላጅ ደህንነት",
                desc:
                    "በChrome ላይ የአዋቂ ይዘትን ለመከልከል የሚረዱ መንገዶችን ያግኙ። ቤተሰቦችና አዋቂዎች የተቆጣጠረ የአሳሽ ተግባር እንዲኖራቸው ይረዱ።",
                img: "https://famisafe.wondershare.com/images/article-trans-image/2725/how-to-block-adult-content-on-chrome-1.jpg",
            },
            {
                title: "ቤተሰብዎን ለመጠበቅ Pornhubን እንዴት መከልከል ይቻላል?",
                desc:
                    "ቤተሰብዎን ከመስመር ላይ የአዋቂ ይዘት ለመጠበቅ Pornhubን እንዴት መከልከል እንደሚቻል ይማሩ። ይህ መመሪያ ደህንነታዊ ዲጂታል አካባቢ ለመፍጠር ቀላል መንገዶችን ያቀርባል።",
                img: "https://famisafe.wondershare.com/images/article-trans-image/2713/how-to-block-pornhub-1.jpg",
            },
            {
                title: "Spotify ፖርኖ ምንድን ነው? እና እንዴት መከልከል ይቻላል?",
                desc:
                    "በSpotify ላይ ፖርኖግራፊን እንዴት መከልከል እንደሚቻል ይማሩ። ልጆችን ከግልፅ ፖድካስቶች፣ የድምፅ ፖርኖ እና ያልተገባ የሙዚቃ ዝርዝሮች ለመጠበቅ ውጤታማ መፍትሄዎችን ያግኙ።",
                img: "https://famisafe.wondershare.com/images/article-trans-image/388/spotify-porn-blocking-parental-guide-banner.jpg",
            },
        ],

        AllBlockPorn567ytg: [
            {
                title: "በ2025 10 ምርጥ የፖርኖግራፊ መከልከያዎች",
                desc:
                    "ምርጥ የፖርኖ መከልከያ መተግበሪያዎችን ትፈልጋላችሁ? በሞባይልና በዴስክቶፕ ላይ የአዋቂ ይዘትን ለመከልከል የሚረዱ 10 ምርጥ መተግበሪያዎችን ያግኙ።",
                author: "Ankhi Bhattacharya",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "የፖርኖ ድር ጣቢያዎችን እንዴት መከልከል ይቻላል? [2025 መፍትሄ]",
                desc:
                    "በልጅዎ ስማርትፎንና ኮምፒውተሮች ላይ የፖርኖ ድር ጣቢያዎችን መከልከል ይፈልጋሉ? በWindows፣ Mac፣ Android እና iOS ላይ እንዴት መከልከል እንደሚቻል ይማሩ።",
                author: "Joanne Croft",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "በChrome ላይ የአዋቂ ይዘትን መከልከል፡ ሙሉ የወላጅ ደህንነት መመሪያ",
                desc:
                    "በChrome ላይ የአዋቂ ይዘትን ለመከልከል የሚረዱ መንገዶችን ያግኙ። የተቆጣጠረ አሳሽ እና ከያልተገባ ድር ጣቢያዎች መጠበቅ ያስችላል።",
                author: "Jackson Smith",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "ቤተሰብዎን ለመጠበቅ Pornhubን መከልከል",
                desc:
                    "ፖርኖግራፊ ከመስመር ላይ ለመከልከል Pornhubን እንዴት መከልከል እንደሚቻል ይማሩ። ደህንነታዊ ዲጂታል አካባቢ ለመፍጠር ቀላል መንገዶችን ያቀርባል።",
                author: "Molly Swift",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "NSFW Discord ሰርቨሮች፡ ዝርዝርና የደህንነት ምክሮች",
                desc:
                    "የአዋቂ ይዘት የሚያካትቱ 10 ታዋቂ NSFW Discord ሰርቨሮችን ያግኙ። ይህ ጽሑፍ ልጆችን ከእነዚህ ይዘቶች መጠበቅ እንዴት እንደሚቻል ያብራራል።",
                author: "Ankhi Bhattacharya",
                date: "2025-09-02 20:10:50",
            },
            {
                title: "Twitter ፖርኖ – ወላጆች ማወቅ ያለባቸው ሁሉ",
                desc:
                    "በTwitter ላይ ያለ ፖርኖ ምንድን እንደሆነ፣ ልጆችን እንዴት መጠበቅ እንደሚቻል እና የሚረዱ መርጃዎችን እንመልከታለን።",
                author: "Molly Swift",
                date: "2025-09-02 20:10:50",
            },
        ],
        // YouTube መከልከል
        BlockouTube: "YouTube መከልከል",
        Worryingaboutwhatyou: "ልጆችዎ በYouTube ላይ ምን እየተመለከቱ እንደሆነ ትጨነቃላችሁ? እዚህ ሁሉንም ስለ YouTube የወላጅ ቁጥጥር መረጃ ታገኛላችሁ።",
        AllBlockYouTube: "ሁሉም የYouTube መከልከያዎች",
        BlockouTube6543: [
            {
                title: "ልጆችዎ እንዳይጫኑ በAndroid YouTube ላይ ማስታወቂያዎችን እንዴት መከልከል ይቻላል?",
                desc:
                    "ልጆችዎን ከጎጂ የYouTube ማስታወቂያ ይዘቶች ለመጠበቅ ከፈለጉ፣ ይህ መመሪያ ይረዳዎታል። በAndroid ላይ YouTube ማስታወቂያዎችን እንዴት መከልከል እንደሚቻል ይማሩ።",
                img: "https://famisafe.wondershare.com/images/article/2018/08/a-complete-guide-on-youtube-parental-control-1.jpg",
            },
            {
                title: "በ2025 ብዙ የተከለከሉ 8 የYouTube ቻናሎች፡ ወላጆች ማወቅ ያለባቸው",
                desc:
                    "ብዙ የYouTube ቻናሎች ቢኖሩም አንዳንዶቹ ለልጆች ተገቢ አይደሉም። እነዚህን ቻናሎች ይወቁ እና በልጆች መሣሪያ ላይ የወላጅ ቁጥጥር ይጠቀሙ።",
                img: "https://famisafe.wondershare.com/images/article/2022/04/most-blocked-youtube-channels.png",
            },
            {
                title: "ወላጆች ከልጆቻቸው ጋር ሊመለከቷቸው የሚገቡ 12 ምርጥ የYouTube ቻናሎች",
                desc:
                    "ይህ ጽሑፍ ልጆችን ለመዝናናትና ለመማር የሚረዱ 12 ጥሩ የYouTube ቻናሎችን ያቀርባል። የYouTube የወላጅ ቁጥጥር ቅንብሮችን እንዴት መጠቀም እንደሚቻል ይማሩ።",
                img: "https://famisafe.wondershare.com/images/article/2021/11/family-apps/watch-youtube-with-kids.png",
            },
        ],
        BlockouTube0987: [
            {
                title: "ልጆችዎ እንዳይጫኑ በAndroid YouTube ላይ ማስታወቂያዎችን መከልከል",
                desc:
                    "ልጆችዎን ከጎጂ የYouTube ማስታወቂያ ይዘት ለመጠበቅ ይህ መመሪያ ይረዳዎታል። በAndroid ላይ YouTube ማስታወቂያዎችን በመከልከል ልጆችዎን ደህንነታቸውን ያረጋግጡ።",
                author: "Molly Swift",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "በAmazon Fire ላይ YouTube Kids እንዴት መጫንና መጠቀም ይቻላል? [2025]",
                desc:
                    "በAmazon Fire ላይ YouTube Kids እንዴት መጫንና መጠቀም እንደሚቻል ማወቅ ይፈልጋሉ? APK መጠቀምን እና በWindows PC ስክሪፕት መክፈትን ጨምሮ 2 መንገዶችን ያግኙ።",
                author: "Joanne Croft",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "ልጆች የተከለከለ YouTubeን እና ሌሎች መሣሪያዎችን እንዴት ይጠቀማሉ?",
                desc:
                    "ልጅዎ መግባት ያልተፈቀደላቸውን ድር ጣቢያዎች ወይም የተከለከለ YouTubeን እየተጠቀመ ነው ብለው ትጨነቃላችሁ? እንዴት እንደሚያደርጉት እና እንዴት መከልከል እንደሚቻል ይወቁ።",
                author: "Jackson Smith",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "በ2025 YouTube ላይ ቪዲዮዎችን እንዴት መከልከል ይቻላል?",
                desc:
                    "ልጆችዎን ከጎጂ ይዘት ለመጠበቅ YouTube ላይ ቪዲዮዎችን መከልከል ይፈልጋሉ? ከታመነ የወላጅ ቁጥጥር መተግበሪያ ጋር 3 ምርጥ መንገዶችን ያግኙ።",
                author: "Thomas Jones",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "በYouTube ላይ የወላጅ ቁጥጥር መቀናበር – 4 ቀላል መንገዶች",
                desc:
                    "በYouTube ላይ የወላጅ መቆለፊያ መቀናበር ይፈልጋሉ? አትጨነቁ፤ የተገደበ ሁኔታን (Restricted Mode) ለማብራት 4 ውጤታማ መንገዶች አሉ።",
                author: "Thomas Jones",
                date: "2025-09-02 20:10:50",
            },
            {
                title: "FamiSafeን በመጠቀም ሙሉ የYouTube የወላጅ ቁጥጥር መመሪያ",
                desc:
                    "በAndroid እና iPhone ላይ YouTubeን እንዴት መከልከል እንደሚቻል ይማሩ። እንዲሁም በYouTube ላይ ሰውን እንዴት መከልከል እንደሚቻል ደረጃ በደረጃ መፍትሄ ተቀርቧል።",
                author: "Thom",
                date: "2025-09-02 20:10:50",
            },
        ],
        /// የስልክ ክትትል
        PhoneMonitoring: "የስልክ ክትትል",
        Learnhowtosetuppa: "በተለያዩ መሣሪያዎች ላይ የወላጅ ክትትልን እንዴት መቀናበር እንደሚቻል ይማሩ፣ እንዲሁም በጣም የተጠቀሱ የወላጅ ክትትል መተግበሪያዎችን እንዴት መጠቀም እንደሚቻል ያውቁ።",
        AllPhoneMonitoring: "ሁሉም የስልክ ክትትል",
        PhoneMonitoringggfgd54: [
            {
                title: "በAndroid እና iPhone ላይ የኢንተርኔት መፈለጊያ ታሪክን እንዴት መመልከት ይቻላል? – 7 መንገዶች",
                desc:
                    "በAndroid ወይም iPhone ላይ የኢንተርኔት መፈለጊያ ታሪክን ለመመልከት 7 ቀላል መንገዶችን ያግኙ፤ የIncognito ታሪክን እንዴት ማየት እንደሚቻል እና የልጆች መስመር-ላይ እንቅስቃሴን መከታተል እንደሚቻል ያካትታል።",
                img: "https://famisafe.wondershare.com/images/article-trans-image/2146/how-to-check-internet-browsing-history-1.jpg",
            },
            {
                title: "በAndroid ስልክ ላይ የIncognito ታሪክን እንዴት መመልከት ይቻላል? (2025 መመሪያ)",
                desc:
                    "ልጆችዎን ከግልጽ እና ጎጂ ይዘቶች መጠበቅ ትፈልጋላችሁ? ይህ ጽሑፍ በAndroid ላይ የIncognito ታሪክን ለማየት 5 ቀላል መንገዶችን ያቀርባል።",
                img: "https://famisafe.wondershare.com/images/article-trans-image/2092/view-my-incognito-history-on-android-phone-1.jpg",
            },
            {
                title: "በWhatsApp ውስጥ የቻት ታሪክን እንዴት መመልከት ይቻላል? – 3 ፈጣን መንገዶች",
                desc:
                    "በWhatsApp ውስጥ የቻት ታሪክን በArchive እና Search ባህሪዎች በመጠቀም እንዴት መመልከት እንደሚቻል ይወቁ። የተደበቁ መልዕክቶችን በፍጥነት ማግኘት ወይም አሮጌ ቻቶችን መመልከት ይችላሉ።",
                img: "https://famisafe.wondershare.com/images/article-trans-image/872/how-to-check-chat-history-whatsapp-1.jpg",
            },
        ],
        PhoneMonitoring423d: [
            {
                title: "የTikTok የመመልከቻ ታሪኬን እንዴት ማየት እችላለሁ?",
                desc:
                    "የTikTok For You Page-ን በስህተት አዘምናችሁ የምትመለከቱት ቪዲዮ ጠፍቶ አግኝታችሁታል? ካወደዳችሁት ቀላል ነው፣ ካልሆነ ግን ትንሽ ይከብዳል። ይህን ጽሑፍ ያንብቡ፤ የTikTok የመመልከቻ ታሪክን እንዴት ማየት እንደሚቻል እንነግራችኋለን።",
                author: "Molly Swift",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "ለብራንዶችና ለወላጆች የTikTok ክትትል፡ 5 ምርጥ መሣሪያዎችና ስትራቴጂዎች",
                desc:
                    "የTikTok ክትትል አስፈላጊነቱን ይማሩ እና የብራንድ አፈጻጸምን ለመከታተል 5 መሣሪያዎችን ያግኙ። ንግዶች በማህበራዊ ሚዲያ ላይ መገኘታቸውን እንዴት መቆጣጠር እንደሚችሉ ይወቁ።",
                author: "Thomas Jones",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "በWhatsApp ላይ ቁጥርን እንዴት መከልከል ይቻላል?",
                desc:
                    "በስልክ ላይ የWhatsApp ቁጥርን መከልከል ብቻ አበቃም። FamiSafe ያሉ የወላጅ ቁጥጥር መተግበሪያዎችን በመጠቀም የልጆችዎን WhatsApp ሙሉ ቁጥጥር ማድረግ ይችላሉ።",
                author: "Ankhi Bhattacharya",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "በAndroid ስልክ ላይ የIncognito ታሪክን እንዴት መመልከት ይቻላል? (2025 መመሪያ)",
                desc:
                    "ልጆችዎን ከግልጽ እና ጎጂ ይዘቶች መጠበቅ ትፈልጋላችሁ? ይህ ጽሑፍ በAndroid ስልክ ላይ የIncognito ታሪክን ለማየት 5 ቀላል መንገዶችን ያቀርባል።",
                author: "Thomas Jones",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "በ2025 ልጄ በስልኩ ላይ ምን እያደረገ እንደሆነ እንዴት ማየት እችላለሁ?",
                desc:
                    "በAndroid ወይም iPhone ላይ የልጆችዎን የስልክ እንቅስቃሴ እንዴት መከታተል እንደሚቻል ይማሩ። ወላጆች የልጆቻቸውን የሞባይል እንቅስቃሴ ለመከታተል የደረጃ-በ-ደረጃ መመሪያ አቀርበናል።",
                author: "Thomas Jones",
                date: "2025-09-02 20:10:50",
            },
            {
                title: "በልጅዎ መሣሪያ ላይ የIncognito ታሪክን እንዴት ማየት ይቻላል?",
                desc:
                    "በልጅዎ መሣሪያ ላይ የIncognito ታሪክን ለማየት ምርጥ መተግበሪያን ያግኙ። ከልጅዎ የiOS፣ Android ወይም Desktop መሣሪያ የመፈለጊያ እንቅስቃሴዎችን እንዴት ማየትና ማስቀመጥ እንደሚቻል ይማሩ።",
                author: "Mily Swift",
                date: "2025-09-02 20:10:50",
            },
        ],
        /// ፀረ-ግፍ (Anti-Bullying)
        AntiBullying: "ፀረ-ግፍ",
        Getautomaticalertso: "በFamiSafe የመለያየት ባህሪዎች የሳይበር ግፍ አደጋ ሊያመለክቱ የሚችሉ ቃላት ሲገኙ ራስ-ሰር ማሳወቂያዎችን ያግኙ።",
        AllAntiBullying: "ሁሉም ፀረ-ግፍ",

        AntiBullyi655rfng: [
            {
                title: "የሳይበር ግፍ አድራጊዎች ለሳይበር ግፍ ወደ እስር ሊገቡ ይችላሉ?",
                desc:
                    "ሳይበር ግፍ በልጆችዎ የአካልና የአእምሮ ጤና ላይ እጅግ አሉታዊ ተፅእኖ ሊኖረው ይችላል። ሳይበር ግፍ ሕጋዊ ወንጀል እንደሆነ እና እንዴት መቆጣጠር እንደሚቻል እንመልከታለን።",
                img: "https://famisafe.wondershare.com/images/article/2019/11/can-cyberbullies-go-to-jail-for-cyberbullying-1.jpg",
            },
            {
                title: "በት/ቤት ውስጥ ያለ ግፍን ለመከላከል ውጤታማ መፍትሄዎችን ያግኙ",
                desc:
                    "ይህ ጽሑፍ ሳይበር ግፍ ምን እንደሆነ እና እንዴት መከላከል እንደሚቻል ያብራራል። እንዲሁም ልጆችን ለመጠበቅ የሚረዱ ምርጥ የወላጅ ቁጥጥር መተግበሪያዎችን ያቀርባል።",
                img: "https://famisafe.wondershare.com/images/article/2019/11/ways-to-prevent-cyberbullying-2.jpg",
            },
            {
                title: "በት/ቤት ውስጥ ያለ ግፍን ለመከላከል ውጤታማ መፍትሄዎች",
                desc:
                    "በት/ቤቶች ውስጥ ግፍ እስካሁን ድረስ የተስፋፋ ችግኝ ቢሆንም፣ ውጤታማ መፍትሄዎች አሉ። FamiSafe እነዚህን መፍትሄዎች በተግባር ለማስፈፀም ይረዳል።",
                img: "https://famisafe.wondershare.com/images/article/2018/09/find-out-effective-solutions-to-bullying-in-school-1.jpg",
            },
        ],

        AntiBullyi76tgbnng: [
            {
                title: "የሳይበር ግፍ አድራጊዎች ለሳይበር ግፍ ወደ እስር ሊገቡ ይችላሉ?",
                desc:
                    "ሳይበር ግፍ በልጆችዎ የአካልና የአእምሮ ደህንነት ላይ እጅግ አሉታዊ ተፅእኖ ያሳድራል። ሳይበር ግፍ ሕጋዊ እንደሆነ እና እንዴት መቆጣጠር እንደሚቻል እንመርምራለን።",
                author: "Molly Swift",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "ሳይበር ግፍ እንዴት ይጀምራል እና እንዴት መቆጣጠር ይቻላል?",
                desc:
                    "ይህ ጽሑፍ ሳይበር ግፍ ምን እንደሆነ እና መከላከል ዘዴዎቹን ያብራራል። እንዲሁም ልጆችን ከሚከሰቱ የሳይበር ግፍ አደጋዎች ለመጠበቅ የሚረዱ ምርጥ መተግበሪያዎችን ያቀርባል።",
                author: "Thomas Jones",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "የግፍ ተፅእኖዎች፡ ግፍ ለልጆች ለምን መጥፎ ነው?",
                desc:
                    "የአጭርና የረጅም ጊዜ የግፍ ተፅእኖዎችን፣ ግፍ ለምን መጥፎ እንደሆነ፣ አስፈላጊ ስታቲስቲክስን እና ወላጆች FamiSafe-ን እንዴት መጠቀም እንደሚችሉ ያብራራል።",
                author: "Ankhi Bhattacharya",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "ልጆችዎን ከጽሑፍ ግፍ እንዴት መጠበቅ ይቻላል?",
                desc:
                    "አንዳንድ የጽሑፍ ግፍ ጉዳዮችን መለየት ከባድ ቢሆንም፣ FamiSafe በመጠቀም ልጆችዎን ከጎጂ መልዕክቶች መጠበቅ ይችላሉ።",
                author: "Thomas Jones",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "በማህበራዊ ሚዲያ ላይ ግፍ ሲፈጠር ምን ማድረግ ይገባል?",
                desc:
                    "በማህበራዊ ሚዲያ ላይ ግፍ በማንኛውም መንገድ መቆጣጠር ያለበት ችግኝ ነው። ልጆች በደህንነት እንዲያድጉ FamiSafe ተመራጭ መፍትሄ ነው።",
                author: "Thomas Jones",
                date: "2025-09-02 20:10:50",
            },
            {
                title: "በት/ቤቶች ውስጥ 5 ምርጥ ፀረ-ግፍ ፕሮግራሞች",
                desc:
                    "ይህ ጽሑፍ በት/ቤቶች ውስጥ ግፍን ለመከላከል የሚረዱ 5 ምርጥ ፕሮግራሞችን ያቀርባል። ልጆችን ከግፍ ለመጠበቅ FamiSafe እጅግ የተሟላ መፍትሄ ነው።",
                author: "Mily Swift",
                date: "2025-09-02 20:10:50",
            },
        ],
        /// የወጣቶች የጾታ መልዕክት (Teen Sexting)
        TeenSexting: "የወጣቶች የጾታዊ መልዕክት",
        Sextingisanincreasi: "በዛሬዎቹ ወጣቶች መካከል የጾታ መልዕክት (sexting) እየጨመረ ያለ ችግኝ ነው። ስለ sexting ተጨማሪ መረጃ ለማግኘት ይህ ርዕስ ጠቃሚ ነው።",
        AllTeenSexting: "ሁሉም የወጣቶች የጾታ መልዕክት",

        TeenSexvftyuting: [
            {
                title: "6 አደገኛ ያልታወቁ የጾታ መልዕክት መተግበሪያዎች",
                desc:
                    "ወጣቶች የሚጠቀሙባቸውን ያልታወቁ የጾታ መልዕክት መተግበሪያዎች መርምሩ። 6 ተለመዱ መተግበሪያዎችን እና እንዴት እንደሚሰሩ ይማሩ።",
                img: "https://famisafe.wondershare.com/images/article/2019/10/anonymous-sexting-apps-for-teenagers-1.jpg",
            },
            {
                title: "10 ምርጥ የጾታ መልዕክት መተግበሪያዎች፡ ወላጆች ማወቅ ያለባቸው",
                desc:
                    "በ2025 ለግል መልዕክት የሚጠቅሙ ምርጥ የጾታ መልዕክት መተግበሪያዎችን ያግኙ። ደህንነታቸውን እና አደጋዎቻቸውን ያነጻጽሩ።",
                img: "https://famisafe.wondershare.com/images/article/2025/05/sexting-app.jpg",
            },
            {
                title: "WhatsApp ላይ የጾታ መልዕክት በ2025፡ አደጋዎችና የወላጅ መመሪያ",
                desc:
                    "በ2025 ወጣቶች መካከል WhatsApp sexting ለምን እየጨመረ እንዳለ ይማሩ። የተሰ hidden አደጋዎችን እና መከላከያ መንገዶችን ያውቁ።",
                img: "https://famisafe.wondershare.com/images/article/2025/05/whatsapp-sexting-1.jpg",
            },
        ],

        TeenSeiuhxting: [
            {
                title: "Telegram Sexting፡ መንገዶች፣ ደህንነት፣ አደጋዎችና መከላከያ ስትራቴጂዎች",
                desc:
                    "ወጣቶችን ከTelegram sexting እንዴት መጠበቅ እንደሚቻል ይማሩ። አደጋዎቹን እና FamiSafe ያሉ የወላጅ ቁጥጥር መሣሪያዎችን ያግኙ።",
                author: "Joanne Croft",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "Twitter Sexting፡ እንዴት ይሰራል፣ የወጣቶች አደጋዎች እና መደህንነት",
                desc:
                    "Twitter sexting እንዴት እንደሚሰራ፣ ለወጣቶች ያለው አደጋ እና FamiSafe በመጠቀም እንዴት መከላከል እንደሚቻል ይወቁ።",
                author: "Thomas Jones",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "WhatsApp Sexting በ2025፡ አደጋዎችና የወላጅ መመሪያ",
                desc:
                    "በ2025 ወጣቶች መካከል WhatsApp sexting ለምን እየጨመረ እንዳለ ይማሩ። ልጅዎን በFamiSafe እንዴት መጠበቅ እንደሚቻል ይወቁ።",
                author: "Ankhi Bhattacharya",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "Sexting ሕጋዊ ነው ወይስ ሕገ-ወጥ?",
                desc:
                    "Sexting ሕጋዊ ነው ወይስ ሕገ-ወጥ? ይህ መመሪያ ለወላጆችና ለወጣቶች የሕግ ጉዳዮችን፣ አደጋዎችን እና ውጤቶችን ያብራራል።",
                author: "Ankhi Bhattacharya",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "ወላጆች ማወቅ ያለባቸው አደገኛ የጾታ መልዕክት ድረ-ገፆች",
                desc:
                    "የጾታ መልዕክት ድረ-ገፆች በልጆች ላይ አደገኛ ተፅእኖ ሊያሳድሩ ይችላሉ። 5 የተለመዱ የወጣቶች sexting ድረ-ገፆችን እና መከላከያ መንገዶችን ይወቁ።",
                author: "Mily Swift",
                date: "2025-09-02 20:10:50",
            },
            {
                title: "ወላጆች ለወጣቶች sexting ምን ማድረግ ይገባቸዋል?",
                desc:
                    "ልጅዎ sexting እያደረገ መሆኑ ያሳስብዎታል? FamiSafe በመጠቀም የመስመር ላይ እንቅስቃሴዎቻቸውን ከርቀት ይቆጣጠሩ እና ሰላምን ያግኙ።",
                author: "Jony Croft",
                date: "2025-09-02 20:10:50",
            },
        ],
        // ድር ማጣሪያ (Web Filtering)
        WebFiltering: "ድር ማጣሪያ",
        BestInternetContentFil: "ወላጆች ማወቅ ያለባቸው እና 100% የሚሰሩ ምርጥ የኢንተርኔት ይዘት ማጣሪያዎች እና የድር ማጣሪያ መፍትሄዎች።",
        AllWebFiltering: "ሁሉም የድር ማጣሪያዎች",
        WebFiltering54df: [
            {
                title: "በiPhone/iPad ድር ጣቢያዎችን እንዴት መከልከል ይቻላል [3 የተፈተኑ ዘዴዎች]",
                desc:
                    "በiPhone ወይም iPad ላይ ድር ጣቢያዎችን ለመከልከል 3 የተፈተኑ መንገዶችን ይማሩ — ልጆችን ለመጠበቅ፣ ትኩረት ለማቆየት እና ሙሉ ቁጥጥር ለመያዝ።",
                img: "https://famisafe.wondershare.com/images/article-trans-image/2145/how-to-block-websites-on-iphone-1.jpg",
            },
            {
                title: "በFirefox ድር ጣቢያዎችን እንዴት መከልከል ይቻላል – ደረጃ በደረጃ",
                desc:
                    "በFirefox ላይ ድር ጣቢያዎችን እንዴት መከልከል እንደሚቻል መማር ትፈልጋለህ? ለደህንነቱ የተሻለ አሰሳ ቀላል ዘዴዎችን ይመልከቱ።",
                img: "https://famisafe.wondershare.com/images/article-trans-image/2144/how-to-block-websites-on-firefox-1.jpg",
            },
            {
                title: "2025 የምርጥ የኢንተርኔት ማጣሪያ ሶፍትዌሮች 10",
                desc:
                    "በ2025 የምርጥ የኢንተርኔት ማጣሪያ ሶፍትዌር ትፈልጋለህ? 10 ምርጥ መፍትሄዎችን ከዋና ባህሪያቸው እና የባለሙያ ምክሮች ጋር ያግኙ።",
                img: "https://famisafe.wondershare.com/images/article-trans-image/2142/internet-filtering-software-1.jpg",
            },
        ],
        WebFil76gfrtering: [
            {
                title: "ለልጆች ደህንነታማ የአሰሳ መተግበሪያዎች 6",
                desc:
                    "ይህ ጽሑፍ ለልጆች የተስፋፋ ደህንነታማ አሰሳ ምን እንደሆነ እና ለምን እንደሚያስፈልግ ይገልጻል። እንዲሁም አሰሳ መተግበሪያዎችን ለልጆች ተስማሚ እንዴት ማድረግ እንደሚቻል ያብራራል።",
                author: "Thomas Jones",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "የChrome ማጣሪያ ሙሉ መመሪያ [3 ውጤታማ ዘዴዎች]",
                desc:
                    "በChrome ላይ የGoogle ማጣሪያ ለመጠቀም ምርጥ መንገድ ትፈልጋለህ? ይህ ጽሑፍ የተወሰኑ ድር ጣቢያዎችን ለመገደብ 3 የተለያዩ ዘዴዎችን ያቀርባል።",
                author: "Jone craft",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "የልጅዎን የኢንተርኔት አሰሳ ታሪክ እንዴት መመርመር ይቻላል",
                desc:
                    "የአሰሳ ታሪክ መከታተያ በመጠቀም ወላጆች የልጆቻቸውን የመስመር ላይ እንቅስቃሴ መከታተል እና ከአደገኛ ይዘቶች መጠበቅ ይችላሉ።",
                author: "Thomas Jones",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "በFirefox ድር ጣቢያዎችን መከልከል – ደረጃ በደረጃ መመሪያ",
                desc:
                    "በFirefox ላይ ድር ጣቢያዎችን ቀላል መንገዶችን በመጠቀም እንዴት መከልከል እንደሚቻል ይማሩ። FamiSafe እንዴት ቤተሰብዎን እንደሚጠብቅ ይመልከቱ።",
                author: "Ankhi Bhattacharya",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "2025 የምርጥ የኢንተርኔት ማጣሪያ ሶፍትዌሮች 10",
                desc:
                    "በ2025 የምርጥ የኢንተርኔት ማጣሪያ ሶፍትዌሮችን ያግኙ — ዋና ባህሪያቸውን እና የባለሙያ ምክሮችን ይመልከቱ።",
                author: "mily Swift",
                date: "2025-09-02 20:10:50",
            },
            {
                title: "2025 ለቤተሰቦች የምርጥ የኢንተርኔት ማጣሪያዎች 10",
                desc:
                    "ይህ ጽሑፍ ልጆችን ከማጥፋት ይዘቶች ለመጠበቅ የሚረዱ 10 ምርጥ የኢንተርኔት ማጣሪያዎችን ይዘርዝራል። FamiSafe ለቤተሰቦች ምርጥ መፍትሄ መሆኑን ይጠቁማል።",
                author: "moly sefty",
                date: "2025-09-02 20:10:50",
            },
        ],
        // Teen Slang
        TeenSlang: "የወጣቶች ቃላት",
        Moreandmoreteen:
            "በቀን በቀን ወጣቶች እርስ በርስ ለመጻፍ የተለያዩ ስላንጎችን እየተጠቀሙ ነው። ወላጆች ልጆቻቸው ምን እየተናገሩ እንደሆነ ለመረዳት እዚህ ያሉ ስላንጎችን መማር ይችላሉ።",
        AllTueenSlang: "ሁሉም የወጣቶች ቃላት",
        TeenSlanghtge: [
            {
                title: "“Big Back” ምን ማለት ነው? ትርጉም፣ አደጋዎች እና ትራንዶች..",
                desc:
                    "በሶሻል ሚዲያ “Big Back” ምን ማለት እንደሆነ፣ በወጣቶች ላይ ያለው ተጽእኖ እና በሰውነት ምስል ላይ ያለውን ተፅዕኖ ያግኙ።",
                img: "https://famisafe.wondershare.com/images/article/2025/05/big-back-slang-meaning-banner.jpg",
            },
            {
                title: "በSnapchat ላይ ቀይ ልብ ምን ማለት ነው?",
                desc:
                    "በSnapchat ላይ የቀይ ልብ ምልክት ምን እንደሚያመለክት፣ በግንኙነት ላይ ያለውን ተጽእኖ እና እንዴት መቆጣጠር እንደሚቻል ይማሩ።",
                img: "https://famisafe.wondershare.com/images/article/2025/05/red-heart-snapchat-banner.jpg",
            },
            {
                title: "ATP ማለት ምንድነው? በሶሻል ሚዲያ የሚጠቀሙበት ስላንግ",
                desc:
                    "እንደ ወላጅ ATP ማለት ምን እንደሆነ ግራ ተጋብተዋል? ወጣቶች በሶሻል ሚዲያ መድረኮች ላይ እንዴት እንደሚጠቀሙበት ይወቁ።",
                img: "https://famisafe.wondershare.com/images/article/2025/05/atp-meaning-1.jpg",
            },
        ],
        TeenSlanglkwdes: [
            {
                title:
                    "Sneaky Link ምንድነው? ለወላጆች መረዳት እና ወጣቶችን መጠበቅ",
                desc:
                    "“Sneaky Link” ማለት ምን እንደሆነ፣ የሚኖሩ አደጋዎች እና የመከላከያ ምክሮችን ያግኙ። FamiSafe እንዴት ወጣቶችን በዲጂታል ዓለም ሊጠብቅ እንደሚችል ይወቁ።",
                author: "ሞሊ ስዊፍት",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "በልጅዎ ስልክ ONS, FWB, NSA አይተዋል? ተጠንቀቁ!",
                desc:
                    "ONS ምን ማለት ነው? FWB እና NSA ምን ይሆናሉ? ወላጆች እነዚህን የወጣቶች ስላንጎች ቀላል ሊያልፉ ይችላሉ፣ ነገር ግን አደገኛ ባህሪዎችን ሊያመለክቱ ይችላሉ!",
                author: "ሞሊ ስዊፍት",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "ማስጠንቀቂያ፡ ወላጆች የመድሃኒት ስላንጎችን መተው የለባቸውም!",
                desc:
                    "መተው የማይገቡ የመድሃኒት ስላንጎች። 420፣ 420 friendly ያሉ ቃላት ወጣቶች በመልዕክትና በሶሻል ሚዲያ እንዴት እንደሚጠቀሙባቸው ይወቁ።",
                author: "ሞሊ ስዊፍት",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "BTS ምን ማለት ነው? 3 ዋና ትርጓሜዎች!",
                desc:
                    "BTS በተለያዩ አውዶች የተለያዩ ትርጓሜዎች አሉት። ለK-pop አድናቂዎች የወንድ ሙዚቃ ቡድን ማለት ሲሆን፣ በአጠቃላይ BTS ማለት “በቅርቡ እመጣለሁ” ማለት ይሆናል።",
                author: "ሞሊ ስዊፍት",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "ወላጆች ይጠንቀቁ፡ ወጣቶች የሚጠቀሙባቸው የF-word ስላንጎች",
                desc:
                    "ልጅዎ AF, FML, True AF ይጠቀማል? እነዚህ የF-word ስላንጎች ምን ማለት እንደሆኑ እና እንዴት መቆጣጠር እንደሚቻል ይማሩ።",
                author: "ሚሊ ስዊፍት",
                date: "2025-09-02 20:10:50",
            },
            {
                title: "የGen Z ስላንግ መመሪያ፡ ማወቅ ያለብዎት 25 ቃላት",
                desc:
                    "የGen Z ቤተሰቦችዎ ሌላ ቋንቋ እንደሚናገሩ ይሰማዎታል? እኛ የእነሱን መዝገበ ቃላት እንማራችኋለን እንዲሁም የቀላል ግንኙነት መፍጠር ይችላሉ።",
                author: "ጆያን ክሮፍት",
                date: "2025-09-02 20:10:50",
            },
        ],
        // Trending App Review
        TrendingAppReview: "በአሁኑ ጊዜ የሚታወቁ መተግበሪያዎች ግምገማ",
        FamiSafehelpspare:
            "FamiSafe ወላጆች ለልጆቻቸው ተስማሚ መተግበሪያዎችን እንደ ጨዋታዎች፣ የትምህርት መተግበሪያዎች ወይም ሌሎች አይነቶች መምረጥ እንዲችሉ ይረዳቸዋል።",
        AllTrendingAppReview: "ሁሉም የታወቁ መተግበሪያ ግምገማዎች",
        TrendingAppReview765G: [
            {
                title: "Ask.fm ለልጆችዎ ደህንነቱ የተጠበቀ ነው? የመተግበሪያ ሙሉ ግምገማ..",
                desc:
                    "ልጅዎ Ask.fm መተግበሪያን ሲጠቀም ተጨንቀዋል? የ2025 ግምገማችን የኢንተርኔት ማስጨናቀቂያ፣ አደገኛ ሰዎች እና ሌሎች አደጋዎችን ይመለከታል። FamiSafe ቤተሰብዎን እንዴት መጠበቅ እንደሚችሉ ይማሩ።",
                img: "https://famisafe.wondershare.com/images/article-trans-image/92/is-askfm-app-safe.jpg",
            },
            {
                title: "Flixtor አማራጮች፡ ያለ ስጋት ለመስትሪሚንግ 11 ደህንነቱ የተጠበቁ ድረ-ገጾች..",
                desc:
                    "ለልጆችና ለወጣቶች የደህንነት የተጠበቁ የፊልም ስትሪሚንግ የሚያቀርቡ 11 የFlixtor አማራጮችን ያግኙ። እነዚህ ለቤተሰብ ተስማሚ መድረኮች አደገኛ ፖፕ-አፕ ማስታወቂያዎችን እንዲያስወግዱ ይረዳዎታል።",
                img: "https://famisafe.wondershare.com/images/article/2025/05/flixtor-alternatives-1.jpg",
            },
            {
                title: "13 የPutlocker አማራጮች ለHD ፊልም ስትሪሚንግ [2025]..",
                desc:
                    "ነጻና ደህንነቱ የተጠበቀ የፊልም ስትሪሚንግ ለመደሰት 13 ምርጥ የPutlocker አማራጮችን ያግኙ። ባህሪያቸውን ያነጻጽሩ እና የደህንነት ምክሮችን ይማሩ።",
                img: "https://famisafe.wondershare.com/images/article/2025/05/putlocker-alternatives-1.jpg",
            },
        ],
        TrendingAppReviewWSDDE43: [
            {
                title: "ማወቅ ያለብዎት 5 ምርጥ የግል Screenshot መተግበሪያዎች",
                desc:
                    "ልጅዎን ከአደገኛ ይዘቶች እንዴት መጠበቅ እንደሚችሉ ትንታኔ እያደረጉ ነው? ይህ ጽሑፍ የልጅዎን እንቅስቃሴ ለመቆጣጠር የሚረዱ ምርጥ የግል Screenshot መተግበሪያዎችን ያቀርባል።",
                author: "ሞሊ ስዊፍት",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "Replika ደህንነቱ የተጠበቀ ነው? ከመጠቀምዎ በፊት ማወቅ ያለብዎት",
                desc:
                    "Replika ደህንነቱ የተጠበቀ ነው? አብዛኛዎቹ ተጠቃሚዎች ለReplika ደህንነቱ አለው፣ ነገር ግን የግላዊነትና የይዘት ስጋቶች አሉ። ይህን AI መተግበሪያ ሲጠቀሙ እንዴት ደህንነትዎን መጠበቅ እንደሚችሉ ይወቁ።",
                author: "ሞሊ ስዊፍት",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "Minecraft ምንድነው? ለልጆች ደህንነቱ የተጠበቀ ነው?",
                desc:
                    "Minecraft በልጆች መካከል በጣም ታዋቂ እየሆነ ነው፣ እና ወላጆችም በየቀኑ ይጨነቃሉ። ደህንነቱ ምን ይመስላል? ልጅዎ በMinecraft ሱስ እንዳይገባ እንዴት መከላከል እንደሚቻል እዚህ ይወቁ።",
                author: "ሞሊ ስዊፍት",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "Viber ደህንነቱ የተጠበቀ ነው? ስለ ደህንነቱ የተሟላ ግምገማ",
                desc:
                    "Viber ለተጠቃሚዎች የሚያቀርበውን የደህንነት ስርዓት በጥልቀት ይመልከቱ፣ የሚኖሩ አደጋዎችን እና እንዴት ራስዎንና ልጆችዎን መጠበቅ እንደሚችሉ ይማሩ።",
                author: "ሞሊ ስዊፍት",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "Viber ደህንነቱ የተጠበቀ ነው? ስለ ደህንነቱ የተሟላ ግምገማ",
                desc:
                    "ወጣቶችዎ የF-word ስላንጎችን መጠቀማቸው ያስጨንቃችሁ? AF, FML, True AF ምን ማለት እንደሆኑ እና በልጅዎ ስልክ ላይ እንዴት መቆጣጠር እንደሚቻል ይወቁ።",
                author: "ሚሊ ስዊፍት",
                date: "2025-09-02 20:10:50",
            },
            {
                title: "4chan ደህንነቱ የተጠበቀ ነው? ወላጆች ማወቅ ያለባቸው",
                desc:
                    "4chan መጠቀም ደህንነቱ አለው? የ4chan አደጋዎችን፣ ራስዎን እንዴት መጠበቅ እንደሚችሉ እና FamiSafe ያሉ የወላጅ መቆጣጠሪያ መተግበሪያዎችን በመጠቀም ልጆችን እንዴት መጠበቅ እንደሚቻል ይማሩ።",
                author: "ጆያን ክሮፍት",
                date: "2025-09-02 20:10:50",
            },
        ],
        /// Parental App Review
        ParentalAppReview: "የወላጅ መቆጣጠሪያ መተግበሪያ ግምገማ",
        Therearevariousofpar:
            "በገበያ ላይ ብዙ የወላጅ መቆጣጠሪያ መተግበሪያዎች አሉ። ይህ ርዕስ ለእርስዎ በጣም ተስማሚውን መተግበሪያ ለማግኘት ይረዳዎታል።",
        AllParentalAppReview: "ሁሉም የወላጅ መቆጣጠሪያ መተግበሪያ ግምገማዎች",
        ParentalAppReview654f: [
            {
                title: "Bark መተግበሪያ ግምገማ፡ ባህሪያት፣ ዋጋ እና ውሳኔ",
                desc:
                    "ይህ የBark ግምገማ ዋና ባህሪያቱን፣ ዋጋውን፣ ጥሩና ደካማ ጎኖቹን ይመለከታል። ለቤተሰብዎ ልጆችን በመስመር ላይ ለመጠበቅ ትክክለኛ ምርጫ እንደሆነ ይወቁ።",
                img: "https://famisafe.wondershare.com/images/article/2025/04/bark-review-1.jpg",
            },
            {
                title: "Norton Family ግምገማ 2025፡ ወላጆች ማወቅ ያለባቸው",
                desc:
                    "ይህ የNorton Family ግምገማ ባህሪያቱን፣ ዋጋውን እና በእውነተኛ አጠቃቀም ውስጥ የሚሰጠውን አፈጻጸም ይተነትናል። ዋጋው ይገባልን? እና ለዲጂታል ወላጅነት አማራጮቹን ያስሱ።",
                img: "https://famisafe.wondershare.com/images/article/2025/04/norton-family-banner.png",
            },
            {
                title: "Aura ግምገማ፡ ለቤተሰብዎ ዋጋው ይገባልን?",
                desc:
                    "እምነት የሚሰጥ የወላጅ መቆጣጠሪያ መተግበሪያ እየፈለጉ ነው? ይህ ዝርዝር የAura ግምገማ ባህሪያቱን፣ የዋጋ እቅዶቹን፣ ጥሩና ደካማ ጎኖቹን ይመለከታል። የቤተሰብዎን ዲጂታል ደህንነት አሁን ይጠብቁ።",
                img: "https://famisafe.wondershare.com/images/article/2025/04/aura-review-1.jpg",
            },
        ],
        ParentalAppReview878h: [
            {
                title: "ምርጥ 8 የሕፃናት ክትትል መተግበሪያዎች [Android & iPhone]",
                desc:
                    "ለሕፃንዎ ምርጥ የክትትል መተግበሪያዎችን እየፈለጉ ነው? በAndroid እና iPhone ላይ በቀጥታ ቪዲዮ፣ ድምፅ እና ብልህ ማስጠንቀቂያዎች የሚያቀርቡ እነዚህን 8 ምርጥ ምርጫዎች ይመልከቱ።",
                author: "ሞሊ ስዊፍት",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "Google Family Link ከ Microsoft Family Safety ጋር ንፅፅር [2025]",
                desc:
                    "Family Link እና Family Safety ሁለቱም በታላላቅ ቴክኖሎጂ ኩባንያዎች የተገነቡ ነጻ የወላጅ መቆጣጠሪያ መተግበሪያዎች ናቸው። ለቤተሰብዎ የትኛው ይሻላል? ይመልከቱ!",
                author: "ሞሊ ስዊፍት",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "Family Linkን በኮምፒውተር ወይም ላፕቶፕ እንዴት መጠቀም ይቻላል?",
                desc:
                    "ልጅዎ በኮምፒውተር ወይም ላፕቶፕ ላይ ብዙ ጊዜ እንዳያሳልፍ እየተጨነቁ ነው? በልጅዎ መሣሪያ ላይ Family Link ማቋቋም ይፈልጋሉ። ይህ ጽሑፍ እንዴት እንደሚያደርጉ ያሳያችኋል።",
                author: "አንኪ ባታቻርያ",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "ለቤተሰብ ፓርቲ ምርጥ የNintendo Switch ጨዋታዎች [ነጻ ያካትታል]",
                desc:
                    "Nintendo Switch ከቤተሰብና ከጓደኞች ጋር ለመጫወት ሁልጊዜ ምርጥ ኮንሶል ነው። የትኞቹ ጨዋታዎች ምርጥ እና ነጻ እንደሆኑ ማወቅ ይፈልጋሉ? እዚህ ይማሩ!",
                author: "ሞሊ ስዊፍት",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "Microsoft Family Safety ምንድነው? እና እንዴት መጠቀም ይቻላል",
                desc:
                    "Microsoft Family Safety ወላጆች የልጃቸውን የስልክ አጠቃቀም እንዴት እንደሚከታተሉ ያግዛል። ይህ መመሪያ መሣሪያውን እንዴት መጠቀም እንደሚቻል እና ታመነ አማራጩን ያብራራል።",
                author: "ቶማስ ጆንስ",
                date: "2025-09-02 20:10:50",
            },
            {
                title: "Kaspersky Safe Kids ግምገማ፡ ወላጆች በእውነት ማወቅ ያለባቸው",
                desc:
                    "Kaspersky Safe Kids ጥሩና ደካማ ጎኖቹን ጨምሮ ዝርዝር መረጃ ያግኙ፤ ልጆች ቀላል ሊያስወግዱት እንደሚችሉ እና የመስመር ላይ ደህንነትን የሚያረጋግጥ ምርጥ አማራጩን ይወቁ።",
                author: "ጆያን ክሮፍት",
                date: "2025-09-02 20:10:50",
            },
        ],
        //ParentalAppRivew
        ParentalAppRivew: "የወላጆች ምክር",
        Parenting65is: "የወላጆች ሥራ ቀላል አይደለም፣ እና ከሌሎች ጥበብ መማር ሁልጊዜ ጠቃሚ ነው። እዚህ አስተዋጽኦ የሚሰጥዎትን ምክሮች በመጠቀም የወላጆችን ሥራ ማስቀሰቅ ትችላለህ።",

        // ===== Sidebar Data with URL and target (all open in new page) =====
        sidebarItems: [
            { title: "የሰዓት መጠቆሚያ መቆጣጠሪያ", url: "/screen-time", target: "_blank" },
            { title: "ጨዋታዎችን መከልከል", url: "/block-games", target: "_blank" },
            { title: "ስልክ መከታተያ", url: "/phone-monitoring", target: "_blank" },
            { title: "iOS የወላጆች መቆጣጠሪያ", url: "/ios-parental-control", target: "_blank" },
            { title: "አካባቢ መከታተያ", url: "/track-location", target: "_blank" },
            { title: "Android የወላጆች መቆጣጠሪያ", url: "/android-parental-control", target: "_blank" },
            { title: "የመረብ ገጽታ መጠቆሚያ", url: "/internet-filter", target: "_blank" },
            { title: "አካባቢ ማካፈል", url: "/location-sharing", target: "_blank" },
            { title: "መተግበሪያዎችን መከልከል", url: "/block-apps", target: "_blank" },
            { title: "ክሮም ቡክ መመሪያ", url: "/chromebook-guide", target: "_blank" },
            { title: "የወላጆች መቆጣጠሪያ ምክሮች", url: "/parental-tips", target: "_blank" },
            { title: "መተግበሪያ ግምገማዎች", url: "/app-reviews", target: "_blank" },
            { title: "የወላጆች መተግበሪያ ግምገማዎች", url: "/parental-app-reviews", target: "_blank" },
            { title: "ማህበራዊ ሚዲያ መተግበሪያ", url: "/social-media-app", target: "_blank" },
            { title: "አንቲ-ቡሊያን", url: "/anti-bullying", target: "_blank" },
        ],

        articles: [
            {
                title: "የኢንተርኔት ደህንነት፡ ለሕፃናት አስፈላጊ ትምህርት",
                desc: "ኢንተርኔት ለሕፃናት አንደገና ደህንነቱ አልተረጋገጠም። ያልተገምጋመ ገጾች ብዛት እንደገና ደህንነትን ማስተካከል ያስፈልጋል። የኢንተርኔት ደህንነት ሕጎች እንደገና አይበቃም...",
                author: "ቶማስ ጆንስ",
                date: "09/10/2021",
                avatar: "https://i.pravatar.cc/24",
            },
            {
                title: "ከፍተኛ 10 የመኪና መከታተያ መሳሪያዎች ማወቅ አለብዎት",
                desc: "ይህ ጽሁፍ ከፍተኛ 10 የመኪና GPS መከታተያ መሳሪያዎችን እንዴት መጠቀም እንደሚቻል ይገልጻል...",
                author: "ቶማስ ጆንስ",
                date: "09/10/2021",
                avatar: "https://i.pravatar.cc/24",
            },
            {
                title: "ለሕፃናት በማይገባ የማይናገሩት 10 ነገሮች",
                desc: "የልጅዎ ማስተዋል እና ደህንነት ከፍተኛ ጥቂት ነው። ሕፃናት ስለሚስተዋወቁ ቀላል ሊያጎዱ ይችላሉ...",
                author: "ቶማስ ጆንስ",
                date: "09/10/2021",
                avatar: "https://i.pravatar.cc/24",
            },
            {
                title: "በWhatsApp ላይ ሰዎችን እንዴት መከልከል እንችላለን",
                desc: "አንዳንድ ጊዜ በWhatsApp ላይ ሰዎችን ለከፍተኛ ደህንነት ምክንያት መከልከል ያስፈልጋል...",
                author: "ቶማስ ጆንስ",
                date: "09/10/2021",
                avatar: "https://i.pravatar.cc/24",
            },
            {
                title: "ለሕፃናት በሚጠቀሙ ከፍተኛ 10 የመከታተያ መሳሪያዎች & መተግበሪያዎች",
                desc: "ለልጆችዎ የሚጠቀሙትን ከፍተኛ 10 በጥሩ ደረጃ የተመረጡ መከታተያ መሳሪያዎችን እና መተግበሪያዎችን አንሰጣለን...",
                author: "ቶማስ ጆንስ",
                date: "09/10/2021",
                avatar: "https://i.pravatar.cc/24",
            },
            {
                title: "ምርጥ T-Mobile ሕፃናት ስማርት ዋች ስልኮች",
                desc: "ዛሬ የብዙ ባለትኩል ባለመተግበሪያ የተሞሉ ስማርት ዋች እቃዎች ከፍተኛ ጥቅም እንዲኖራቸው ያደርጋሉ...",
                author: "ቶማስ ጆንስ",
                date: "09/10/2021",
                avatar: "https://i.pravatar.cc/24",
            },
        ],

        //{/*============================== Resource===================================*/}

        //Screentime-For-Kids
        ParentsScreenTimeNow: "ወላጆች ሊያመልጣቸው የማይገባ ፣ የልጆችን የስክሪን ጊዜ አሁን ያሳንሱ!",
        Overtheyearsthetr: "ባለፉት ዓመታት ስማርትፎኖች፣ ላፕቶፖች እና ታብሌቶች ያሉ ዲጂታል መሣሪያዎችን በብዛት መጠቀም በትንሽ ልጆች መካከል ተስፋፍቷል። የመጥፎ ዲጂታል ልምዶች በልጆች የአእምሮ እና የአካል ጤና ላይ ያላቸውን አሉታዊ ተፅዕኖ ስለሚያውቁ ወላጆች ለሕፃናት ተገቢው የስክሪን ጊዜ ምን እንደሆነ ብዙ ጊዜ ይጠራጠራሉ። በFamiSafe እገዛ የቤተሰብዎን የስክሪን ጊዜ በቀላሉ መቆጣጠር ይችላሉ። ተጨማሪ መረጃ ለማግኘት ያንብቡ።",
        Howmuchtimedoyourkid: "ልጆችዎ በየቀኑ ስንት ጊዜ በመስመር ላይ ያሳልፋሉ?",
        Amazingscreentim: "አስደናቂ፡ በቀን 9 ሰዓት የስክሪን ጊዜ!",

        //// Amazing: screen time of 9 hours a day!
        Comparisonof54children: "ልጆች ፋሚሴፍ ከመጠቀም በፊትና በኋላ  ያላቸው የስክሪን ጊዜ ንፅፅር",
        Averagedaily6665min: "ልጆች በቀን በአማካይ በስክሪን ላይ የሚያሳልፉት ደቂቃ",
        Before: "በፊት",
        After: "በኋላ",
        Beyond6hours: "በቀን ከ6 ሰዓት በላይ!",
        Accordingto65CDC: "በCDC ጥናትና ምርምር መሠረት የልጆች በየቀኑ የሞባይል አጠቃቀም 6 ሰዓት ደርሷል፣ አንዳንድ ልጆች እንኳን ከ9 ሰዓት በላይ በኤሌክትሮኒክ መሳሪያዎች ፊት ያሳልፋሉ።",
        TheKidsscreentimeh: "ልጆች ፋሚሴፍን ከመጠቀም በኋላ የስክሪን ጊዜያቸው በአንደኛው 4 ሰዓት ያህል ቀንሷል። (FamiSafe 2020, Oct.)",
        Thingskidsusuallydoi: "ልጆች በመስመር ላይ የሚያደርጉት ተግባር",
        Social32: "ማህበራዊ 35%",
        Game16: "ጨዋታ 19%",
        Video41: "ቪዲዮ 43%",
        Music2: "ሙዚቃ 4%",
        Morehan: "ከ",
        ofscreentime: " የስክሪን ጊዜ ልጆች በቪዲዮና በጨዋታ ላይ ያሳልፋሉ።",
        FamiSafe2020: "ፋሚሴፍ, 2020",
        Otherstatisticsab: "ሌሎች ስለ ልጆች የስክሪን ጊዜ ስታቲስቲክስ:",
        ofkidshavebeen: "ልጆች ከ2 ዓመት እድሜ በፊት ጀምሮ በመስመር ላይ ነበሩ።",
        areconcernedthei: "ወላጆች ልጆቻቸው ብዙ የስክሪን ጊዜ እንዳላቸው ይጨነቃሉ።",
        of8yearoldskids: "ከ8-11 ዓመት ዕድሜ ያሉ ልጆች የ",
        tabletat4home: "ታብሌት በቤት ውስጥ መዳረሻ አላቸው።",
        ofkidshavetheir: "ልጆች ከሁለተኛ ደረጃ ትምህርት በፊት የራሳቸው ስማርትፎን አላቸው።",
        parentzoneorguTh: "（parentzone.org.uk）6-12 ዓመት ዕድሜ ያሉ ልጆች የስክሪን ጊዜ ጨመረ",
        duringheCoronavirus: "በኮሮናቫይረስ ወቅት። （በአሜሪካ አብዛኛው ግዛቶች ）",

        /// Prevent Excessive screen time
        PreventE4656xcessivescr: "ከመጠን በላይ የስክሪን ጊዜን መከላከል",
        Negative345EffectsofExces: "ከመጠን በላይ የስክሪን ጊዜ አሉታዊ ተፅዕኖዎች",
        Easilya4544ddicted: "በኤሌክትሮኒክ ዓለም በቀላሉ መጠመድ",
        Stayupl55atelack: "እስከ ሌሊት ድረስ መቆየት እና የእንቅልፍ እጥረት",
        Visionl555ossweigh: "የዓይን እንክብካቤ ችግኝ እና ክብደት መጨመር",
        Distract444edinstud: "በትምህርት መታለል እና ውጤት መቀነስ",
        Childrendailyscreentim: "የልጆች በየቀኑ የስክሪን ጊዜ ከእንቅስቃሴ ጊዜ 8 እጥፍ ነው፣ አንዳንድ ልጆች ግን ምንም እንቅስቃሴ አያደርጉም።",
        Teensagesto5541: "13 እስከ 18 ዓመት ዕድሜ ያላቸው ታዳጊዎች በየሌሊቱ 8-10 ሰዓት እንቅልፍ ማግኘት እና በየቀኑ ቢያንስ 1 ሰዓት እንቅስቃሴ ማድረግ አለባቸው። stanfordchildrens.org",
        // Negative Effects of Excessive Screen Time
        NegativeEffectsofExc: "ከመጠን በላይ የስክሪን ጊዜ አሉታዊ ተፅዕኖዎች",
        Under2ZEROscreentime: "ከ2 ዓመት በታች – ፈጽሞ የስክሪን ጊዜ አይፈቀድም። 2-5 – በቀን ከ1 ሰዓት አይበልጥ። 6-18 – በቀን ከ2 ሰዓት አይበልጥ።",
        Onlylessthanaquart: "ከልጆች አራት አንዱ ብቻ ይህን መከተል ይችላል፣ እና ወላጆች የስክሪን ጊዜን ለመቀነስ በጣም አስፈላጊ እገዛ ናቸው።",
        Averagetimepercentage: "የልጆች ተወዳጅ",
        socialapps: "ማህበራዊ መተግበሪያዎች",
        Averagetimeperce: "የልጆች ተወዳጅ የቪዲዮ መተግበሪያዎች የአማካይ የጊዜ መጠን",
        instagramandouTubear: "ኢንስታግራም እና ዩቲዩብ በልጆች መካከል በጣም የሚጠቀሙባቸው ማህበራዊ እና የቪዲዮ መተግበሪያዎች ናቸው። በመደበኛነት በቀን ቢያንስ 3 ሰዓት ያሳልፋሉ፤ ፋሚሴፍ የሚጠቀሙ አብዛኛዎቹ ልጆች ጊዜያቸው ቢያንስ እኩል በዚህ ላይ ያሳልፋሉ። (FamiSafe 2020, Oct.)",
        Managesyourkid: "ፋሚሴፍ የልጆችዎን የስክሪን ጊዜ ያስተዳድራል",
        Electronicdevices: "ኤሌክትሮኒክ መሳሪያዎች ለልጆች በጣም የሚስቡ ናቸው። የወላጆች መመሪያና አስተዳደር ካልኖረ ልጆች ቀኑን ሙሉ በመስመር ላይ ሊቆዩ ይችላሉ፣ ይህም ለእድገታቸውና ለልማታቸው አይጠቅምም። ልጆች በተለያዩ መሳሪያዎች በኢንተርኔት መዳረሻ ሊኖራቸው ይችላል፣ አንዳንድ ጊዜም ከእነሱ ጋር አትሆኑም። ስለዚህ እንደ ፋሚሴፍ ያለ ሙሉ በሙሉ መተግበሪያ የልጆችዎን የስክሪን ጊዜ ለመቆጣጠር ያስፈልግዎታል።",


        feature54s: [
            {
                title: "የእንቅስቃሴ ሪፖርት",
                description:
                    "የመሣሪያ አጠቃቀምን በጊዜ መስመር (timeline) ቅርጽ ይመልከቱ። ልጆችዎ በምን ሰዓት ምን መተግበሪያ ወይም ድህረ ገጽ እንደተጠቀሙ ይመልከቱ። ልጆችዎ በእውነተኛ ጊዜ ምን እየሰሩ እንደሆነ ያውቁ።",
            },
            {
                title: "የስክሪን ጊዜን ከታተሉ እና ያስገድቡ",
                description:
                    "ልጆችዎ በMac ላይ ምን ያህል ጊዜ እንደሚያሳልፉ ይከታተሉ። ዕለታዊ የስክሪን ጊዜ ገደብ ያቀናብሩ። ወላጆች መሣሪያውን በርቀት ማግደብ ይችላሉ።",
            },
            {
                title: "የብራውዘር ታሪክ ማረጋገጥ",
                description:
                    "ልጆችዎ በመስመር ላይ ምን እየፈለጉ ወይም እየተመለከቱ እንደሆነ ይመልከቱ። የIncognito ሁኔታ እንኳን ሊከታተሉ ይችላሉ።",
            },
            {
                title: "ድህረ ገጾችን አግድ ወይም አጣራ",
                description:
                    "የተወሰኑ ድህረ ገጾችን ማግደብ ወይም መፍቀድ ይችላሉ። እንደ አዋቂ ይዘት፣ እፅ፣ ቁማር፣ ትንባሆ፣ ግፍ እና ሌሎች 7+ ምድቦች መሠረት ያጣራሉ።",
            },
            {
                title: "ተለዋዋጭ ሰሌዳ ማቀናበር",
                description:
                    "በተለያዩ ጊዜዎች ለተወሰኑ መተግበሪያዎች መከልከል ወይም መፍቀድ የሚችል ሰሌዳ ያቀናብሩ። ለምሳሌ በትምህርት ጊዜ ጨዋታ ማግደብ።",
            },
            {
                title: "ከመጠን በላይ የሚጠቀሙ ወይም አይገባ መተግበሪያዎችን ማግደብ",
                description:
                    "በጣም የሚጠቀሙባቸውን መተግበሪያዎች ይመልከቱ ወይም አልተገባ መተግበሪያዎችን ሙሉ በሙሉ ያግዱ።",
            },
            {
                title: "ብዙ መድረኮችን ይደግፋል",
                description:
                    "Android, iOS, Fire OS, macOS እና Windows ይደገፋሉ። የልጆችን የመስመር ላይ ባህሪ በአንድ መተግበሪያ ይቆጣጠሩ።",
            },
        ],
        featuresv: [
            {
                icon: Clock,
                color: "bg-purple-500",
                title: "24/7 ሙሉ ጥበቃ",
                desc: "FamiSafe በልጆች መሣሪያዎች ላይ ቀንና ሌሊት ይሰራል፣ ልጆችን ከእውነተኛ ሕይወት እና ከመስመር ላይ አደጋዎች ለመጠበቅ።",
            },
            {
                icon: Zap,
                color: "bg-orange-500",
                title: "ፈጣን ማስጠንቀቂያዎች",
                desc: "በልጆች መሣሪያ ላይ ችግኝ ሲገኝ ወላጆች ወዲያውኑ ማስታወቂያ ይቀበላሉ።",
            },
            {
                icon: ShieldCheck,
                color: "bg-emerald-400",
                title: "ግላዊነት የተጠበቀ",
                desc: "FamiSafe ለውሂብ ደህንነት RSA ክሪፕቶሲስተም ይጠቀማል። መረጃዎ በእርስዎ ብቻ ይታያል።",
            },
            {
                icon: RefreshCcw,
                color: "bg-teal-400",
                title: "3 ቀናት ነፃ ሙከራ",
                desc: "ለአዲስ ተጠቃሚዎች 3 ቀናት ነፃ ሙከራ ይሰጣል። መተግበሪያውን ያውርዱ እና ከመግዛት በፊት እንደሚያስፈልግዎ ይፈትሹ።",
            },
            {
                icon: SlidersHorizontal,
                color: "bg-yellow-400",
                title: "ተለዋዋጭ የክፍያ እቅድ",
                desc: "በአንድ FamiSafe መለያ በወርሃዊ እቅድ እስከ 5 መሣሪያዎች፣ በሩብ ዓመት ወይም በዓመታዊ እቅድ እስከ 10 መሣሪያዎች መጠበቅ ይችላሉ።",
            },
            {
                icon: MessageCircle,
                color: "bg-purple-500",
                title: "የቀጥታ ውይይት ድጋፍ",
                desc: "FamiSafe ደንበኞቹን ያከብራል እና ጥሩ የደንበኛ ተሞክሮ ለማቅረብ ብዙ ጥረት ያደርጋል። ድጋፍ በኢሜይል፣ በስልክ እና በቀጥታ ውይይት ይገኛል።",
            },
        ],
        featuredLogos: [
            "ቴክ ታይምስ",
            "ኤክስዲኤ (XDA)",
            "አፕአድቫይስ",
            "ፖኬት-ሊንት",
            "ትዊክታውን",
            "ቴክራዳር",
            "ዲጂታል ትሬንድስ",
        ],
        screenTimeData: {
            title: "በAndroid መሣሪያዎች ላይ የስክሪን ጊዜን አስተዳድር:",

            sections: [
                {
                    heading: "1. በልጆችዎ መሣሪያ ላይ የስክሪን ጊዜን ይገድቡ",
                    paragraphs: [
                        "Digital Wellbeing እና የወላጅ መቆጣጠሪያዎችን በመጠቀም የልጅዎን አጠቃላይ የስክሪን ጊዜ ማየት ይችላሉ፣ ይህም የመክፈቻ ጊዜ (unlock time) እና የማስታወቂያ ብዛትን ያካትታል።",
                        "በብዛት ለሚጠቀሙባቸው መተግበሪያዎች ዕለታዊ ጊዜ ገደብ ማቀናበር ይችላሉ። ልጆች እንዲያርፉ እና እንዲተኩሩ የእንቅልፍ ሁኔታ (Sleep Mode) እና የትኩረት ሁኔታ (Focus Mode) ያብሩ።",
                    ],
                },
                {
                    heading: "2. Samsung Kids Mode አቀናብር",
                    paragraphs: [
                        "በልጅዎ መሣሪያ ላይ Digital Wellbeing ያግኙ እና ጊዜ ገደቦችን ያቀናብሩ። Wind Down እና Focus Mode በመጠቀም የወላጅ መቆጣጠሪያዎችን ያስተዳድሩ።",
                        "ወላጆች Samsung Kids Mode በPIN መጠበቅ እና ከአደገኛ ይዘት መዳረሻ ማገድ ይችላሉ።",
                    ],
                },
                {
                    heading: "3. Huawei Digital Balance",
                    paragraphs: [
                        "Digital Balance በመጠቀም የስልክ አጠቃቀምን ይከታተሉ፣ የስክሪን ጊዜ ቆይታን ይመልከቱ እና የመተግበሪያ ጊዜ ገደቦችን በቀላሉ ያስተዳድሩ።",
                    ],
                },
                {
                    heading: "* ተጨማሪ መቆጣጠር ይፈልጋሉ?",
                    paragraphs: [
                        "በAndroid መሣሪያዎች ላይ የጊዜ ክትትል እና አስተዳደር ተግባሮች አሉ፣ ግን አንዳንድ ጊዜ ይህ በቂ አይሆንም። ልጅዎን ከተወሰነ ጨዋታ ወይም YouTube ቪዲዮ በትምህርት ጊዜ እንዳይጠቀም ማግደብ ሊፈልጉ ይችላሉ። ወይም ልጆችዎ ከእርስዎ ርቀው ሲሆኑ በመሣሪያቸው ላይ ምን እየሰሩ እንደሆነ ማወቅ ትፈልጋላችሁ። እንዲሁም በተወሰነ ጊዜ መሣሪያውን ትተው እንዲያጠኑ ወይም እንዲያንቀሳቅሱ ማድረግ ትፈልጋላችሁ። ለእነዚህ ችግኝ መፍትሄ FamiSafe ስለሆነ ለመማር ጥቂት ደቂቃዎች ብቻ ይወስዳል።",
                    ],
                },
            ],

            imageInfo: {
                src: "https://famisafe.wondershare.com/images/images-2020/screen-time/img2.png",
                title: "የAndroid የስክሪን ጊዜ አስተዳደር",
                description:
                    "FamiSafe ወላጆች ልጆቻቸውን እንዲጠብቁ እና ስለ ልጆቻቸው ዲጂታል ዓለም በበለጠ እንዲያውቁ ይረዳል። በልጅዎ የAndroid መሣሪያ ላይ FamiSafe ካጠቀሙ በኋላ የልጅዎን እንቅስቃሴ ሪፖርት በራስዎ ስልክ ማንኛውም ጊዜ ማየት ይችላሉ፣ እንዲሁም Smart Schedule ማቀናበር ይችላሉ።<br/> ከሁሉ አስፈላጊው ነገር ልጆችዎን በቀጥታ መጠየቅ ወይም ስልካቸውን መውሰድ አያስፈልግም። ይህ ብዙ ጊዜ ክርክር ሊፈጥር ይችላል። FamiSafe በመጠቀም በራስዎ ስልክ ላይ የወላጅ መቆጣጠሪያ ማቀናበር እና ልጆችዎን ጤናማ የመስመር ላይ ልምዶች እንዲያበረታቱ ማገዝ ይችላሉ።",
            },
        },
        screenTimeDatav: {
            title: "በiOS / Mac መሣሪያዎች ላይ የስክሪን ጊዜን አስተዳድር:",

            sections: [
                {
                    heading: "1. በልጆችዎ መሣሪያ ላይ የስክሪን ጊዜን ይገድቡ",
                    paragraphs: [
                        "በልጆችዎ iPhone/iPad/Mac ላይ Screen Time ያብሩ። የiPhone Screen Time ባህሪ ዕለታዊ ወይም ሳምንታዊ የእንቅስቃሴ ሪፖርት ይሰጣል። ሪፖርቱን ለማየት መጀመሪያ በልጅዎ መሣሪያ ላይ Screen Time ማብራት ያስፈልጋል።",
                        "በSettings ውስጥ የስክሪን ጊዜ ማቀናበር ይችላሉ፣ ከዚያም 'This is My Child's Device' ይምረጡ እና ልዩ የይለፍ ቃል ያቀናብሩ እንዲሁም የልጁን ስክሪን ጊዜ ብቻዎ እንዲቆጣጠሩ ያረጋግጡ። ከዚያ በኋላ የመሣሪያ፣ መተግበሪያ እና ድህረ ገጽ አጠቃቀም ሪፖርቶችን ማንኛውም ጊዜ ማየት ይችላሉ።",
                    ],
                },
                {
                    heading: "2. የFamily Sharing በመጠቀም የልጅ መለያ አስተዳድር",
                    paragraphs: [
                        "በተጨማሪም 'Family Sharing' በመጠቀም የልጅዎን መሣሪያ ከራስዎ መሣሪያ ማቀናበር ይችላሉ። ከማቀናበር በኋላ ሪፖርቶችን ማየት እና Downtime, App Limits, Communication Limits, Always Allowed, Content & Privacy Restrictions በቀጥታ ማስተካከል ይችላሉ።",
                        "Downtime ከተዘጋጀ በኋላ በተወሰነው ጊዜ ልጅዎ Screen Time የተባለውን ባህሪ ያለበት መሣሪያ መጠቀም አይችልም፣ እና 5 ደቂቃ በፊት ማስታወሻ ይቀበላል።",
                        "App Limits በመጠቀም ለመተግበሪያ ምድቦች ዕለታዊ ገደብ ማቀናበር ይችላሉ። ልጅዎ ማጥናት ሲኖርበት የመዝናኛ መተግበሪያዎችን መጠቀም መገደብ ይችላሉ። እነዚህ ገደቦች በየቀኑ እኩለ ሌሊት ይዘመናሉ፣ እና በማንኛውም ጊዜ ማጥፋት ይችላሉ።",
                    ],
                },
                {
                    heading: "* Family Sharing ለመጠቀም ምክሮች:",
                    paragraphs: [
                        "እስከ 6 የApple መሣሪያ ተጠቃሚዎች ጋር በአንድ ላይ መመዝገብ እና መግዛት ይችላሉ። Family Sharing iOS 8 እና ከዚያ በላይ ያሉ iPhone/iPad/iPod touch እና OS X Yosemite እና ከዚያ በላይ ያሉ Mac መሣሪያዎችን ይደግፋል። ልጅዎን ከFamily Sharing አባል ካደረጉ በኋላ የልጁን ስክሪን ጊዜ በርቀት መቆጣጠር ይችላሉ።",
                    ],
                },
                {
                    heading: "* ተጨማሪ ማወቅ ይፈልጋሉ?",
                    paragraphs: [
                        "በApple መሣሪያዎች ውስጥ ያሉ የወላጅ መቆጣጠሪያዎች ለምን ዕድሜ ተመካከር ናቸው? የመንግስት ምክር የተመከረው ዕድሜ 8-12 ነው።",
                        "ሁሉንም ልጆቼን በአንድ ሞባይል ማቆጣጠር እችላለሁ? አዎ። FamiSafe ያሉ ብዙ የወላጅ መቆጣጠሪያ መተግበሪያዎች አሉ። ወላጆች ቢያንስ 5 የልጆች መሣሪያዎችን በራሳቸው መሣሪያ መቆጣጠር ይችላሉ።",
                    ],
                },
            ],

            imageInfo: {
                src: "https://famisafe.wondershare.com/images/images-2020/screen-time/img3.png",
                title: "በAndroid ስልክ የልጆቼን iPhone, iPad ወይም Mac ማስተዳደር እችላለሁ?",
                description:
                    "አዎ! FamiSafe በተለያዩ መድረኮች መካከል የወላጅ ክትትል እንዲኖር ይረዳል። ልጅዎ iOS, Mac, Windows ወይም Kindle Fire ቢጠቀምም እርስዎ በiPhone ወይም Android ስልክ ብቻ የልጁን መሣሪያ እንቅስቃሴ ማወቅ ይችላሉ። እንዲሁም አደገኛ ይዘት መከታተል፣ ጂኦፌንስ (geofence) ማቀናበር እና ከእርስዎ ርቀው ሲሆኑ የልጅዎን ደህንነት መጠበቅ ይችላሉ።",
            },
        },
        screenTimeDatad: {
            title: "በWindows ኮምፒውተሮች ላይ የስክሪን ጊዜን ያስተዳድሩ:",
            sections: [
                {
                    heading: "የልጆችዎን የስክሪን ጊዜ በኮምፒውተራቸው ላይ ይገድቡ",
                    paragraphs: [
                        "ልጅዎ ብዙ ጊዜ Windows 10 ኮምፒውተር የሚጠቀም ከሆነ፣ የስክሪን ጊዜውን መቆጣጠር ይችላሉ። Windows 10 የወላጅ መቆጣጠሪያ በሳምንቱ እያንዳንዱ ቀን የሚጠቀሙበትን ጠቅላላ ጊዜ ለመገደብ እና የመግቢያ እቅድ ለመያዝ ያስችላል። የዕለታዊ ጠቅላላ የስክሪን ጊዜ ገደቦችን እና የመግቢያ መርሀ ግብር ማቀናበር ይችላሉ።",
                        "የጊዜ ገደቡ ከ0 እስከ 12 ሰዓት በ30 ደቂቃ እርምጃ ሊቀመጥ ይችላል። በነባሪ ሁኔታ ጠቅላላ የመግቢያ ጊዜ አልተገደበም። ልጅዎ ከተወሰነው ጊዜ ውጭ መጠቀም ከፈለገ፣ ተጨማሪ ጊዜ ለመጠየቅ ይችላል። እርስዎም በኢሜይል መፍቀድ ወይም መከልከል ይችላሉ።",
                    ],
                },
                {
                    heading: "* እንዴት ይሰራል?",
                    paragraphs: [
                        "መጀመሪያ ወደ \"Settings\" ውስጥ ያለውን \"Account\" ምናሌ ይሂዱ። \"Family and others\" በሚለው ክፍል የልጅዎን አካውንት እና የቤተሰብ ቅንብሮችን በመስመር ላይ ለማስተዳደር አማራጭ ያገኛሉ።",
                        "\"Manage Family Settings Online\" በማለት ይጫኑ እና Microsoft Family Parental Control ገጽ በድር አሳሽ ይከፈታል።",
                        "የልጅዎ አካውንት በትክክል ከተዘጋጀ፣ የወላጅ መቆጣጠሪያ ገጹ ለእያንዳንዱ ልጅ የተለየ መግቢያ ያሳያል፣ ከዚያም ይችላሉ:",
                        "ንዑስ አካውንት መፍጠር; የስክሪን ጊዜ መገደብ እና መርሀ ግብር ማቀናበር; ድረ ገጾችን መፍቀድ/መከልከል; ጨዋታዎችን መገደብ; ልጅዎ የሚጎበኛቸውን መተግበሪያዎች እና ድረ ገጾች ማየት።",
                    ],
                },
                {
                    heading: "* ወላጆች ምን ማወቅ አለባቸው?",
                    paragraphs: [
                        "የWindows የወላጅ መቆጣጠሪያ ተግባር ውስን ነው። መጠቀም ከጀመሩ በፊት በልጅዎ መሳሪያ ላይ መዋቀር ያስፈልጋል። እንዲሁም Microsoft አካውንት ካለዎት እና Microsoft Family Safety ከተጠቀሙ፣ ልጅዎን ከመሳሪያዎ ጋር በመገናኘት ለመተግበሪያዎች እና ጨዋታዎች (Windows, Xbox) የስክሪን ጊዜ ገደቦች ማቀናበር ይችላሉ።",
                    ],
                },
            ],

            imageInfo: {
                src: "https://famisafe.wondershare.com/images/images-2020/screen-time/img5.png",
                title: "ልጄን በርቀት ኮምፒውተሩን መቆጣጠር እችላለሁ?",
                description:
                    "አዎ! FamiSafe የወላጅ መቆጣጠሪያ መተግበሪያን ካጠቀሙ በኋላ የልጅዎን የኮምፒውተር አጠቃቀም በቀላሉ በርቀት መቆጣጠር ይችላሉ። ከልጅዎ ጋር ካልነበሩ ጊዜ እና በኮምፒውተሩ ምን እንደሚያደርግ ማወቅ ከፈለጉ፣ እንዲሁም ረጅም ጊዜ ቪዲዮ ሊመለከት ወይም ጨዋታ ሊጫወት እንዳይቀር እና ትምህርትን እንዳይረሳ ብትጨነቁ፣ FamiSafe የSmart Schedule እና App Block ባህሪያትን በመጠቀም መገደብ ይችላሉ።",
            },
        },
        screenTimeDataz: {
            title: "በiOS / Mac መሣሪያዎች ላይ የስክሪን ጊዜን ያስተዳድሩ:",
            sections: [
                {
                    heading: "1. የልጆችዎን የስክሪን ጊዜ በመሣሪያቸው ላይ ይገድቡ",
                    paragraphs: [
                        "በልጆችዎ iPhone/iPad/Mac ላይ Screen Time ያብሩ። የiPhone Screen Time ባህሪ ዕለታዊ ወይም ሳምንታዊ የእንቅስቃሴ ሪፖርት ይሰጣል። ሪፖርቱን ለማየት መጀመሪያ Screen Time በልጅዎ መሣሪያ ላይ ማብራት ያስፈልጋል።",
                        "በSettings ውስጥ የስክሪን ጊዜን ማቀናበር ይችላሉ፤ ከዚያም \"This is My Child's Device\" ይምረጡ እና ልዩ የይለፍ ቃል ያቀናብሩ እርስዎ ብቻ እንዲቆጣጠሩ የሚያረጋግጥ። ከዚያ በኋላ የመሣሪያ አጠቃቀም፣ መተግበሪያዎች እና ድረ ገጾች ሪፖርት ሁልጊዜ ማየት ይችላሉ።",
                    ],
                },
                {
                    heading: "2. የልጅ አካውንትን ለማስተዳደር Family Sharing መጠቀም",
                    paragraphs: [
                        "በተጨማሪም \"Family Sharing\" በመጠቀም ከእርስዎ መሣሪያ ላይ የልጅዎን መሣሪያ ማቀናበር ይችላሉ። ከልጅዎ መሣሪያ ካቀናበሩ በኋላ፣ Downtime, App Limits, Communication Limits, Always Allowed, Content & Privacy Restrictions እንዲቆጣጠሩ ቅንብሮችን እና ሪፖርቶችን በቀጥታ ከእርስዎ መሣሪያ ማስተካከል ይችላሉ።",
                        "Downtime ካቀናበሩ በኋላ፣ በዚያ ጊዜ ውስጥ Screen Time የተብራ መሣሪያ መጠቀም አይችልም፣ እና ከመጀመሪያው 5 ደቂቃ በፊት ማስታወሻ ይቀበላል።",
                        "App Limits በመጠቀም ለመተግበሪያ ምድቦች ዕለታዊ ገደብ ማቀናበር ይችላሉ፤ ልጅዎ ለመማር ወይም ሌሎች እንቅስቃሴዎች ሲፈልግ የመዝናኛ መተግበሪያዎችን መጠቀም ሊገድቡ ይችላሉ። App Limits በየሌሊቱ 12 ሰዓት ይታደሳሉ እና በማንኛውም ጊዜ ሊሰርዙ ይችላሉ።",
                    ],
                },
                {
                    heading: "* Family Sharing ለመጠቀም ጠቃሚ ምክሮች:",
                    paragraphs: [
                        "እስከ 6 የApple መሣሪያ ተጠቃሚዎች ጋር በአንድ ላይ መመዝገብ እና መግዛት ይችላሉ። Family Sharing ከ iOS 8 እና ከዚያ በላይ የሚሰሩ iPhone/iPad/iPod touch እና OS X Yosemite እና ከዚያ በላይ የሚሰሩ Mac መሣሪያዎችን ይደግፋል። ልጅዎን ወደ Family Sharing ካከሉ በኋላ የስክሪን ጊዜውን በርቀት መቆጣጠር ይችላሉ።",
                    ],
                },
                {
                    heading: "* ተጨማሪ መረጃ ትፈልጋለህ?",
                    paragraphs: [
                        "በApple መሣሪያዎች ያለው የወላጅ መቆጣጠሪያ ለልጆች የሚመከረው ዕድሜ ምንድን ነው? ኦፊሴላዊ ምክር 8-12 ዓመት ነው።",
                        "ሁሉንም ልጆቼን በአንድ ሞባይል ማቆጣጠር እችላለሁ? አዎ፣ በገበያ ላይ ብዙ የወላጅ እንቅስቃሴ መቆጣጠሪያ መተግበሪያዎች አሉ፣ እንደ FamiSafe። ወላጆች ቢያንስ 5 የልጆች መሣሪያዎችን በአንድ መሣሪያ መቆጣጠር ይችላሉ።"
                    ],
                },
            ],

            imageInfo: {
                src: "https://famisafe.wondershare.com/images/images-2020/screen-time/img4.png",
                title: "በAndroid ስልኬ የልጆቼን iPhone, iPad ወይም Mac ማስተዳደር እችላለሁ?",
                description:
                    "አዎ! FamiSafe በተለያዩ መሣሪያዎች መካከል የወላጅ መቆጣጠሪያ እንዲፈጽሙ ያግዛል። ልጅዎ iOS, Mac, Windows ወይም Kindle Fire ቢጠቀምም፣ እርስዎ ብቻ የiPhone ወይም Android ስልክ በመያዝ የልጅዎን መሣሪያ እንቅስቃሴ በአንድ እጅ መቆጣጠር ይችላሉ። እንዲሁም አስጠንቀቂ ይዘቶችን መቆጣጠር፣ ጂኦፈንስ ማቀናበር እና ልጅዎን ከሩቅ መጠበቅ ይችላሉ።",
            },
        },
        tips: [
            {
                id: 1,
                title: "በምሳሌ መምራት",
                desc:
                    "ልጆች የሌሎችን ባህሪ መኮረጅ ቀላል ነው። ራስ-ቁጥጥር ከማንኛውም ነገር የበለጠ አሳማኝ መሆኑን እመኑ።",
            },
            {
                id: 2,
                title: "ሌሎች እንቅስቃሴዎችን ማበረታታት",
                desc:
                    "ልጅዎ ስክሪን የማያስፈልጉ እንቅስቃሴዎችን እንዲፈልግ እና እንዲሳተፍ አበረታቱ። ከልጆችዎ ጋር የቦርድ ጨዋታዎች መጫወት ወይም ወደ ውጭ በብዙ ጊዜ መውሰድ ይችላሉ።",
            },
            {
                id: 3,
                title: "ስክሪን ጊዜን ለምን መገደብ እንዳለብን ማብራራት",
                desc:
                    "ከመጠን በላይ የስክሪን ጊዜ አደጋዎችን ለልጅዎ ካብራሩ እና በሌሎች እንቅስቃሴዎች እንዲሳተፍ ካበረታቱት፣ የምትያዙትን ስርዓት ይቀበል ይሆናል።",
            },
            {
                id: 4,
                title: "በእንቅስቃሴ ጊዜ ስክሪን ማጥፋት",
                desc:
                    "ልጆችን ከኤሌክትሮኒክ መሣሪያዎች ራቁ፤ በዚህ ሌሎች እንቅስቃሴዎች ላይ ይፈልጋሉ እና ትምህርታቸውን እና እንቅልፋቸውን ያረጋግጣሉ።",
            },
            {
                id: 5,
                title: "ስክሪን ጊዜን በመሥራት ማግኘት",
                desc:
                    "ልጆች የቤት ስራ በመስራት፣ የቤት ሥራዎችን በማከናወን፣ ሙዚቃ በማዳመጥ፣ አካል እንቅስቃሴ በማድረግ ወይም በውጭ በመጫወት የስክሪን ጊዜ እንዲያገኙ ይጠይቁ።",
            },
            {
                id: 6,
                title: "ጥራት ያለው የስክሪን ጊዜ ማረጋገጥ",
                desc:
                    "ልጆች በኢንተርኔት ላይ ማንኛውንም ይዘት ሊያጋጥማቸው ይችላል፣ ከዚህ ውስጥ ለልጆች ያልተመጣጠነ ይዘት ይካተታል። በተጨማሪም የልጆች የመስመር ላይ ይዘት ጥራት እንዲጠበቅ መረጋገጥ አስፈላጊ ነው።",
            },
        ],

        bloggs: [
            {
                id: 1,
                title: "በAndroid እና iOS ላይ የስክሪን ጊዜን ለመገደብ መተግበሪያዎች",
                image:
                    "https://famisafe.wondershare.com/images/article/2018/09/free-apps-to-limit-screen-time-on-android-and-iphone-1.png",
                path: "/apps-to-limit-screen-time",
            },
            {
                id: 2,
                title: "በiPhone ላይ የስክሪን ጊዜን እንዴት መመርመር ይቻላል?",
                image:
                    "https://famisafe.wondershare.com/images/article/2018/09/how-to-check-screen-time-on-iphone.png",
                path: "/apps-to-limit-screen-time",
            },
            {
                id: 3,
                title: "የስክሪን ጊዜን ለመቀነስ 8 ቀላል ምክሮች",
                image:
                    "https://famisafe.wondershare.com/images/article/2018/09/Kids-timer-app-best-way-to-control-time-on-iphone-and-ipad-2.png",
                path: "/apps-to-limit-screen-time",
            },
            {
                id: 4,
                title: "የAAP የስክሪን ጊዜ ምክር",
                image:
                    "https://famisafe.wondershare.com/images/article/2019/11/computer-screen-eye-strain-1.png",
                path: "/apps-to-limit-screen-time",
            },
        ],

        ///BlockPorn
        SeeHowE987asilyYou: "በወጣቶች መሳሪያ ላይ ፖርኖን በቀላሉ እንዴት መከልከል እንደሚቻል ይመልከቱ",
        Intodaywo98rldporno: "በዛሬው ዓለም ፖርኖግራፊ እንደ መጽሔት ያሉ የታተመ ነገሮች ብቻ አይደለም። ወጣቶች በስማርት መሳሪያዎቻቸው እንደ ስልክ፣ ታብሌት እና ኮምፒውተር በመጠቀም በቀላሉ በመስመር ላይ ፖርኖን ሊያገኙ ይችላሉ። ስለዚህ ወጣቶች በቀላሉ ሊጋለጡ እና ሊያስማማቸው ይችላል። እንደ ፋሚሴፍ ያለ ዘመናዊ ቴክኖሎጂ በመጠቀም ወላጆች በወጣቶቻቸው መሳሪያ ላይ ፖርኖን ማግደል ይችላሉ።",

        // Take a second to help us expand our adult website database
        Takease0987condtohe: "የአዋቂ ድረ-ገጽ ዳታቤዝን ለማስፋት አንድ ጊዜ ይውሰዱ",
        Pornog987raphiwebsit: "የፖርኖግራፊ ድረ-ገጾች በፍጥነት እየበዙ ነው። ቢሆንም የአዋቂ ድረ-ገጽ ዳታቤዝን በቀጥታ ማዘመን አስቸጋሪ ነው። ልጆቻችንን በተሻለ ሁኔታ ለመጠበቅ ድጋፍዎ ያስፈልገናል። የሚያውቁትን የአዋቂ ድረ-ገጾች ይጻፉ እና ኢንተርኔቱን ለወጣቶቻችን ደህንነቱ ያሻሽሉ።",
        Pleases9087ubm: "እባክዎ የሚያውቁትን የአዋቂ ድረ-ገጾች እዚህ ያቅርቡ።",
        Bysubmitt9087ingy433: "በማቅረብዎ የእኛን የተጠቃሚ ስምምነት (EULA) እና የግላዊነት ፖሊሲ እንደሚስማሙ ይገልጻሉ።",

        // Do you know how your kids get access to porn?
        Doyoukno098whowyo: "ልጆችዎ ፖርኖን እንዴት እንደሚያገኙ ታውቃላችሁ?",
        Pornogr908aphymayex: "ፖርኖግራፊ በዕለታዊ ሕይወታችሁ በብዙ መንገዶች ሊኖር ይችላል። ወጣቶቻችሁ ስልኮቻቸውን ሲጠቀሙ ፖርኖን እንዴት እንደሚያገኙ ታውቃላችሁ? ከታች ያለው መረጃ ብርሃን ሊያበራልዎ ይችላል።",
        Adultsi09tes: "#1 የአዋቂ ድረ-ገጾች:",
        Pornographicsite: "የፖርኖግራፊ ድረ-ገጾች በወጣቶች መሳሪያ ላይ ፖርኖ የሚገኝበት በጣም የተለመደ ምንጭ ናቸው። ምስጢራዊ/የግል አሳሽ ሁኔታ የአሳሽ ታሪክን ለመደበቅ ያስችላል። ነገር ግን ፋሚሴፍ በእነዚህ ሁኔታዎችም የአሳሽ ታሪክን ማስመዝገብ ይችላል።",
        Teens9898Mostvisi: "በፋሚሴፍ የተመዘገቡ ወጣቶች ብዙ የሚጎበኙት የአዋቂ ድረ-ገጾች",
        Pornr098elate: "#2 ከፖርኖ ጋር የተያያዙ መልዕክቶች",
        Textin098gisoneo: "መልዕክት መላክ የዛሬ ወጣቶች በብዛት የሚጠቀሙት የግንኙነት መንገድ ነው። ስለዚህ የፖርኖ ታሪኮች፣ የወሲብ መልዕክቶች ወይም ግልጽ ያልሆኑ ግልጽ መግለጫዎችን ለመጋራት ሊጠቀሙበት ይችላሉ።",
        Filthyw987ordsdete: "በፋሚሴፍ የተገኙ ያልተገቡ ቃላት",
        Pornpict987ures: "#3 የፖርኖ ምስሎች",
        Picture87sthatconta: "እርቃንነት ወይም ከፖርኖ ጋር የተያያዙ አካላት ያሉባቸው ምስሎች በወጣቶች ፎቶ አልበሞች ውስጥ ሊገኙ ይችላሉ።",
        FamiSafe6578hasdetec: "ፋሚሴፍ ባለፉት 30 ቀናት ከ1700 በላይ አስጠራጣሪ ምስሎችን አግኝቷል።",

        /// Manages your kids' screen time by FamiSafe
        Managesyour656ki: "ፋሚሴፍ የልጆችዎን የስክሪን ጊዜ ያስተዳድራል",
        Electronic67devices: "ኤሌክትሮኒክ መሳሪያዎች ለልጆች በጣም ማራኪ ናቸው። የወላጆች መመሪያ እና አግባብ ያለ አስተዳደር ካልኖረ ልጆች ቀኑን ሙሉ በመስመር ላይ ሊቆዩ ይችላሉ፣ ይህም ለእድገታቸው እና ለልማታቸው አይጠቅምም። ልጆች በተለያዩ መሳሪያዎች ኢንተርኔትን ሊደርሱበት ይችላሉ፣ አንዳንድ ጊዜም እርስዎ ከእነሱ ጋር አትሆኑም። ስለዚህ እንደ ፋሚሴፍ ያለ አጠቃላይ መተግበሪያ ያስፈልጋችኋል የልጆቻችሁን የስክሪን ጊዜ ለማስተዳደር።",

        Howtoblockporn: "በGoogle SafeSearch በመጠቀም በወጣት ልጅዎ መሳሪያ ላይ ፖርኖን እንዴት መከልከል ይቻላል",
        GoogleSafeSearchaims: "Google SafeSearch ከዕድሜ ጋር የማይስማማ ይዘት ከህጻናት ለመጠበቅ ይረዳል። በፍለጋ ውጤቶች ገፆች ላይ አስጠራጣሪ ምስሎችን፣ ጽሁፎችን ወይም ድረ-ገጾችን ለመለየት እና ለመከልከል አልጎርይዝሞችን ይጠቀማል። ልጆችን ከፖርኖግራፊ ድረ-ገጾች ለማራቅ Google SafeSearch ጥሩ አማራጭ ነው፣ ግን በGoogle ፍለጋ ሞተር ብቻ የተገደበ ነው።",

        TurnonGoogleSafeSearc: "በGoogle መተግበሪያ ውስጥ Google SafeSearchን ያብሩ",
        Launchthebro: "በWindows ወይም Mac ላይ አሳሽን ይክፈቱ።",
        Typeinwwwgoogle: "በአድራሻ መስመር ላይ www.google.com ይጻፉ እና የGoogle ገጽን ይክፈቱ።",
        ClicktheSetting: "በታች ቀኝ ጎን ያለውን Settings ይጫኑ።",
        SelectSearcet: "Search Settings ይምረጡ።",
        Checktheboxin: "Turn on SafeSearch በሚለው ፊት ያለውን ሳጥን ምልክት በማድረግ ያብሩት።",
        ClickSaveatthebo: "በገጹ ታች Save ይጫኑ ለውጦቹን ለማስቀመጥ።",

        OpenGoogleAppo: "በiPhone ወይም Android ስልክዎ ላይ Google መተግበሪያውን ይክፈቱ።",
        Tapyourprofilepic: "በላይ ቀኝ ጎን ያለውን የመገለጫ ፎቶዎን ይጫኑ እና Settings ይምረጡ።",
        TapGeneralandthen: "General ከዚያም Search Settings ይጫኑ።",
        Scrolldowntofind: "ወደ ታች ይውረዱ እና SafeSearch filter ያግኙ።",
        TapHidexplicitres: "Hide explicit results ይጫኑ እና SafeSearchን ያብሩ።",

        Howtobl665ockporn: "በDNS አገልግሎት በመጠቀም በወጣት ልጅዎ መሳሪያ ላይ ፖርኖን እንዴት መከልከል ይቻላል",
        WhatisNSDNSstandsfo: "DNS ምንድነው? DNS ማለት Domain Name System ማለት ነው። በመስመር ላይ ሲፈልጉ ቃላቶቻችንን ኮምፒውተሮች ሊያነቡት የሚችሉ ቁጥሮች ይተርጉማል። በአጠቃላይ DNS መሳሪያዎቻችንን ከኢንተርኔት ጋር ያገናኛል። በወጣት ልጅዎ መሳሪያ ላይ ፖርኖን ለመከልከል ነባሪውን DNS IP ወደ የአዋቂ ድረ-ገጾችን የሚያጣራ የDNS አድራሻ መቀየር ይችላሉ።",
        ChangingDNStore: "በAndroid ላይ የፖርኖ መዳረሻን ለመገደብ DNS መቀየር",
        ChangingDNSonAndroidp: "በAndroid ስልኮች ላይ DNS መቀየር አስቸጋሪ አይደለም። ከታች ያሉትን አጠቃላይ እርምጃዎች ይከተሉ።",

        TurnonGoogleSaf: "በWindows እና Mac ላይ Google SafeSearchን ያብሩ",
        Launchthebrowser: "በWindows ወይም Mac ላይ አሳሽን ይክፈቱ።",
        SelectearchSettings: "Search Settings ይምረጡ።",
        Checktheboxinfront: "Turn on SafeSearch በሚለው ፊት ያለውን ሳጥን ምልክት በማድረግ ያብሩት።",

        Checktheboxinfront: "ለማንቃት በ‘Turn on SafeSearch’ ፊት ያለውን ሳጥን ምልክት ያድርጉ።",
        ClickSaveatthebo: "ለውጦቹን ለማስቀመጥ በገጹ ታች ያለውን Save ጠቅ ያድርጉ።",

        ChangeiPhoneiPad: "የiPhone/iPad DNS ቀይር እና የፖርን ድረ-ገጾችን አግድ",
        OnyourkidiPhon: "በልጅዎ iPhone ወይም iPad ላይ ወደ Settings > WLAN ይሂዱ።",
        ScrolltofindtheWi: "DNS የሚቀይሩትን Wi-Fi ኔትወርክ ለማግኘት ይዝለሉ።",
        TapConfigureDNS: "Configure DNS ን ይንኩ እና Manual ይምረጡ።",
        Entertheoneyou: "መጠቀም የሚፈልጉትን DNS ያስገቡ እና Save ይንኩ።",
        NoteIfyourte: "ማስታወሻ፡ ልጅዎ ከአንድ በላይ የኢንተርኔት ግንኙነት ካለው በእያንዳንዱ ላይ በተለይ ማቀናበር ይኖርብዎታል።",

        Filterpornconte: "DNS በመቀየር በWindows 10 ላይ የፖርን ይዘት ማጣራት",
        Therearethreewa: "በWindows 10 ላይ DNS ለመቀየር ሶስት መንገዶች አሉ። ወላጆች Control Panel, Command Prompt ወይም Settings App በመጠቀም ሊቀይሩ ይችላሉ። እዚህ በControl Panel መቀየር እንዴት እንደሚቻል እንገልጻለን።",
        OnthetargetWindows: "በታላሚው Windows መሣሪያ ላይ ወደ Control Panel > Network and Sharing Center > Change adapter settings ይሂዱ።",
        Youwillfindalis: "የኢንተርኔት ግንኙነቶች ዝርዝር ያገኛሉ። መቀየር የሚፈልጉትን ግንኙነት ይምረጡ፣ ቀኝ ጠቅ ያድርጉ እና Properties ይምረጡ።",
        UnderThisconnec: "‘This connection uses the following items’ ስር Internet Protocol Version 4 (TCP/IPv4) ይምረጡ እና Properties ይጫኑ።",
        SelectUsethefollowi: "‘Use the following DNS server addresses’ ይምረጡ እና መጠቀም የሚፈልጉትን DNS IP ያስገቡ።",

        Change45MacDNStop: "በMac ላይ DNS ቀይር እና የፖርን ድረ-ገጾችን አግድ",
        Whenitomesto56han: "በMac ላይ DNS መቀየር ከWindows የቀለለ ነው።",
        OnyourteenMa888ccli: "በልጅዎ Mac ላይ በላይ ግራ ያለውን Apple ሜኑ ጠቅ ያድርጉ እና System Preferences > Network ይምረጡ።",
        Alisy65tofnetworks: "በግራ የኔትወርኮች ዝርዝር ይታያል። መቀየር የሚፈልጉትን ኔትወርክ ይምረጡ እና Advanced ይጫኑ።",
        Click55DNSaddthe: "DNS ትርን ጠቅ ያድርጉ እና በDNS Servers ዝርዝር ታች ያለውን + ይጫኑ።",
        Entert65rheIPaddress: "መጠቀም የሚፈልጉትን DNS የIP አድራሻ ያስገቡ።",
        ickOKwh87yhenyoufin: "ቅንብሩን ከጨረሱ በኋላ OK ይጫኑ።",

        Howtoblockpor54nony: "በመሣሪያው ውስጥ ያለ የይዘት ማጣሪያ በመጠቀም ፖርን እንዴት እንደሚከለክሉ",
        Contentfil45teringh: "የይዘት ማጣራት በApple፣ Google እና Microsoft ያሉ ኩባንያዎች ትኩረት ተቀብሏል። በአዳዲስ ስርዓት ስሪቶች ውስጥ የአዋቂ ድረ-ገጾችን ለመገደብ የይዘት ገደብ ተካትቷል።",

        TurnonContentRest: "በiOS መሣሪያ ላይ Content Restriction አንቃ",
        Applehasintroducedt: "Apple ከiOS 12 ጀምሮ የወላጅ መቆጣጠሪያ ባህሪ አስተዋወቀ። Screen Time በመጠቀም የይዘት ገደቦችን ማቀናበር ይቻላል።",
        OnyourteeniOSd: "በልጅዎ iOS መሣሪያ ላይ ወደ Screen Time ይሂዱ፣ Continue ይንኩ እና \"This is My Child's iPhone/iPad\" ይምረጡ።",
        Setupaparentalpas: "ልጆችዎ ቅንብሩን እንዳይቀይሩ የወላጅ የይለፍ ቃል ያዘጋጁ። በiOS 13.4 እና ከዚያ በኋላ የApple ID ያስፈልጋል።",
        TapContentPrivacyR: "Content & Privacy Restrictions ይንኩ እና Content & Privacy አንቃ።",
        Youcanfilterexplicitc: "ግልጽ ይዘት ማጣራት፣ የድር ይዘት መገደብ፣ ለሙዚቃ፣ ቲቪ፣ መጽሐፍት እና መተግበሪያዎች የእድሜ ደረጃ ማዘጋጀት ይቻላል።",

        UseMicroso23ftFamilySaf: "Microsoft Family Safety በመጠቀም ፖርን አግድ",
        MicrosoftF23amilySafe: "Microsoft Family Safety በWindows ውስጥ የተካተተ ባህሪ ሲሆን ወላጆች ለልጆቻቸው መለያ ማቋቋም እና የስክሪን ጊዜ እንዲሁም የይዘት ገደብ ማቀናበር ይችላሉ።",
        OnyourkidW23indows: "በልጅዎ Windows PC ላይ ወደ Settings > Account > Family & other users ይሂዱ።",
        ClickAddaF23amilyMe: "Add a Family Member ጠቅ ያድርጉ እና የመለያ አይነት ይምረጡ።",
        Enteryour23kidsMicro: "የልጅዎን Microsoft መለያ ያስገቡ። ካልነበረ አዲስ መፍጠር ይችላሉ።",
        Afteryoup23rovideallt: "መረጃውን ካስገቡ በኋላ Manage family settings online ይጫኑ።",
        Underyou43rchildsa: "በልጅዎ መለያ ስር Web Browsing ይምረጡ።",
        Turnonth34etoggleun: "Block inappropriate websites ቁልፉን አንቃ። ከዚያ በኋላ የአዋቂ ይዘት በራስ-ሰር ይከለከላል።",

        Setupparentalcontrol: "በGoogle Play ላይ የወላጅ መቆጣጠሪያ አቀናብር",
        Teenscanalsoaccesspo: "ወጣቶች በመተግበሪያዎች ወይም ጨዋታዎች የፖርን ይዘት ሊደርሱ ይችላሉ። ስለዚህ Google በGoogle Play ላይ የወላጅ መቆጣጠሪያ አቀረበ።",
        OnyourkidsAndroidd: "በልጅዎ Android መሣሪያ ላይ Play Store ክፈት።",
        Tapenuonthetop: "በላይ ግራ ያለውን Menu ይንኩ እና Settings > Parental Controls ይምረጡ።",
        TurnonarentalControl: "Parental Controls አንቃ።",
        SetPINtopreve: "ቅንብሩን እንዳይቀይሩ PIN ያዘጋጁ።",
        Youwillbeableto: "በApps & Games፣ Films፣ TV እና Books ላይ የይዘት ገደብ ማዘጋጀት ይችላሉ።",
        Taptheoneyouwoul: "መገደብ የሚፈልጉትን ይምረጡ እና የእድሜ ደረጃ ይምረጡ። ከዚያ Save ይንኩ።",

        FAQAboutBlock: "ስለ ፖርን መከልከል ተደጋጋሚ ጥያቄዎች",

        faq0s: [
            {
                question: "ፖርኖግራፊ በወጣቶች ጤና ላይ እንዴት ተፅዕኖ ያሳድራል?",
                answer: "ፖርኖግራፊ ሱስ የአእምሮ እና የአካል ጤና ላይ አሉታዊ ተፅዕኖ ያሳድራል። በትንሽ እድሜ ካጋጠማቸው ስለ ግንኙነት የተሳሳተ ግንዛቤ ይፈጥራል።"
            },
            {
                question: "ወላጆች ከልጆቻቸው ጋር ስለ ፖርን መነጋገር አለባቸው?",
                answer: "አዎ፣ መነጋገር አስፈላጊ ነው። ይህ ትክክለኛ ግንዛቤ እንዲፈጠር እና አሉታዊ ተፅዕኖ እንዲቀንስ ይረዳል።"
            },
            {
                question: "የፖርን ሱስ ምልክቶች ምንድን ናቸው?",
                answer: "ብዙ ጊዜ ፖርን መመልከት፣ መቆም አለመቻል፣ ከተመለከቱ በኋላ የእፍረት ወይም የድብርት ስሜት፣ የዕለታዊ ሕይወት ችግር።"
            },
            {
                question: "ወላጆች ልጆቻቸውን ከፖርን ሱስ ለመርዳት ምን ማድረግ ይችላሉ?",
                answer: "በግልጽ እና በክፍት ሁኔታ ይነጋገሩ፣ አትወቅሱአቸው። ከሱስ ለመውጣት እቅድ አብረው ያዘጋጁ። የማህበረሰብ ድጋፍ ፈልጉ እና የሕክምና ማዕከሎች ያግኙ።"
            }
        ],
        //// User-Guide-For-School
        heroContent: {
            title: "በትምህርት ቤት አስተዳዳሪ ለFamiSafe የተጠቃሚ መምሪያ",
            image: "assets/images/hero/school-banner-pic-2021.png",
        },

        introContent: {
            title: "የFamiSafe የተጠቃሚ መምሪያ",
            description:
                "አስተዳዳሪው አካውንት መመዝገብ እና የተማሪዎች መሳሪያዎች ብዛት መሰረት ፈቃድ ማግኘት አለበት፣ ከዚያም ተማሪዎችን መጨመር እና መሳሪያቸውን ለአስተዳደር ማገናኘት አለበት።",
            button: "መመዝገብ",
        },

        guideSections: [
            {
                title: "የተማሪ መረጃ መጨመር",
                steps: [
                    '"Class" ክፈት እና የክፍል መረጃ ፍጠር።',
                    '"Add Student" ን ጠቅ አድርግ እና የተማሪ ስም እና መታወቂያ አስገባ።',
                    "ተዛማጅ የግንኙነት ኮድ ያግኙ።",
                ],
                image:
                    "https://famisafe.wondershare.com/images/v50/famisafe-add-student.png",
            },
            {
                title: "የተማሪ መሳሪያዎችን ማገናኘት",
                description:
                    "አስተዳዳሪ አካውንት ከተነሳ በኋላ ተማሪዎች በመሳሪያቸው Fammy መጫን እና በግንኙነት ኮድ ማገናኘት አለባቸው።",
                steps: [
                    "ተማሪዎች Fammy ከመነሻ ድር ጣቢያ ያውርዱ።",
                    "መተግበሪያውን ክፈት እና የግንኙነት ኮድ አስገባ።",
                    "ተማሪዎች በመሳሪያ ላይ መተግበሪያውን አገናኝ።",
                ],
                image:
                    "https://famisafe.wondershare.com/images/v50/connect-the-device.png",
            },
        ],

        /// video guide
        videos: [
            {
                img: "https://famisafe.wondershare.com/images/images2022/video/how-to-videos1.png",
                title:
                    "በFamiSafe የወላጅ ቁጥጥር መተግበሪያ በሞባይል Facebook ገጽን እንዴት ማገድ ይቻላል?",
                link: "https://www.youtube.com/watch?v=VIDEO_ID_1",
            },
            {
                img: "https://famisafe.wondershare.com/images/images2022/video/how-to-videos2.png",
                title: "በWindows 10 የወላጅ ቁጥጥር እንዴት ማቀናበር ይቻላል?",
                link: "https://www.youtube.com/watch?v=VIDEO_ID_2",
            },
            {
                img: "https://famisafe.wondershare.com/images/images2022/video/how-to-videos3.png",
                title: "በYouTube መተግበሪያ ውስጥ ያልተገባ ቪዲዮዎችን እንዴት ማገድ ይቻላል?",
                link: "https://www.youtube.com/watch?v=VIDEO_ID_3",
            },
        ],

        videoos: [
            {
                img: "https://i3.ytimg.com/vi/caRo0dxfVC0/hqdefault.jpg",
                title:
                    "በFamiSafe የወላጅ ቁጥጥር መተግበሪያ በሞባይል Facebook ገጽን እንዴት ማገድ ይቻላል?",
                link: "https://www.youtube.com/watch?v=VIDEO_ID_1",
            },
            {
                img: "https://famisafe.wondershare.com/images/images2022/video/influencers-videos.png",
                title: "በYouTube መተግበሪያ ውስጥ ያልተገባ ቪዲዮዎችን እንዴት ማገድ ይቻላል?",
                link: "https://www.youtube.com/watch?v=VIDEO_ID_2",
            },
            {
                img: "https://i3.ytimg.com/vi/4Jstty4hjQg/hqdefault.jpg",
                title: "በYouTube መተግበሪያ ውስጥ ያልተገባ ቪዲዮዎችን እንዴት ማገድ ይቻላል?",
                link: "https://www.youtube.com/watch?v=VIDEO_ID_3",
            },
        ],

        videooss: [
            {
                img: "https://famisafe.wondershare.com/images/v50/tiktok-video1.png",
                title: "የወጣቶች የስልክ ሱስ እንዴት እንደሚመስል...",
                link: "https://www.youtube.com/watch?v=VIDEO_ID_1",
            },
            {
                img: "https://famisafe.wondershare.com/images/v50/tiktok-video2.png",
                title: "ስለ ወላጅነት ሕይወት 3 እውነታዎች",
                link: "https://www.youtube.com/watch?v=VIDEO_ID_2",
            },
            {
                img: "https://famisafe.wondershare.com/images/v50/tiktok-video3.png",
                title: "ልጆችዎን ከመስመር ላይ አደጋዎች ለመጠበቅ FamiSafe ይጠቀሙ",
                link: "https://www.youtube.com/watch?v=VIDEO_ID_3",
            },
        ],

        // ================= VIDEO CONTENT =================
        videoList: [
            {
                img: "https://famisafe.wondershare.com/images/v50/famisafe-v50-video.png",
                title: "FamiSafe 5.0 ከTikTok ክትትል እና የትምህርት ቤት ስሪት ጋር መጥቷል",
                link: "https://www.youtube.com/watch?v=VIDEO_ID_1",
            },
            {
                img: "https://img.youtube.com/vi/_L9sAGF7Uho/sddefault.jpg",
                title: "የPrivate Browsing ታሪክ እንዴት መመርመር ይቻላል?",
                link: "https://www.youtube.com/watch?v=_L9sAGF7Uho",
            },
            {
                img: "https://img.youtube.com/vi/5xUaZRsPTt8/sddefault.jpg",
                title: "TikTok ለልጆች ደህንነቱ አለ? የTikTok የወላጅ ቁጥጥር እንዴት ማድረግ ይቻላል?",
                link: "https://www.youtube.com/watch?v=5xUaZRsPTt8",
            },
            {
                img: "https://img.youtube.com/vi/bXK4Fs2FFmA/sddefault.jpg",
                title: "በFamiSafe የልጆች ቀጥታ አካባቢ እንዴት መከታተል ይቻላል?",
                link: "https://www.youtube.com/watch?v=bXK4Fs2FFmA",
            },
        ],
        FamiSafeBryuuandVideoChannel: "የFamiSafe ብራንድ ቪዲዮ ቻናል",
        Vis98tHERE: "እዚህ ይጎብኙ",
        BestP75arentalCont: "ለAndroid እና iOS ምርጥ የወላጅ ቁጥጥር መተግበሪያ | የስልክ እንቅስቃሴን ከሩቅ መከታተል 2021",
        Influ76encerVideos: "የInfluencer ቪዲዮዎች",
        TikTokV345ideos: "የTikTok ቪዲዮዎች",

        /// video guidde 
        // content: {
        //     heroTitle: "የFamiSafe የተጠቃሚ መመሪያ",
        //     openGuide: "የተጠቃሚ መመሪያን ክፈት",
        //     downloadPdf: "PDF አውርድ",

        //     sectionTitle: "1. በወላጅ መሣሪያ ላይ FamiSafe ጫን እና ተመዝገብ",

        //     sectionDescription:
        //         "FamiSafe ለመጀመር በመጀመሪያ በወላጅ መሣሪያ ላይ መተግበሪያውን በመጫን እና አካውንት በመመዝገብ ይጀምሩ። እንዲሁም በGuest Mode በመግባት መተግበሪያውን ማየት ይችላሉ።",

        //     step1Title: "ደረጃ 1: FamiSafe አውርድ",

        //     step1Description:
        //         "ደረጃ 1: FamiSafe ከGoogle Play ወይም App Store በመፈለግ በቀጥታ ማውረድ ይችላሉ። ወይም ከታች ያሉትን የማውረጃ አዝራሮች በመጫን መተግበሪያውን ማውረድ ይችላሉ።",

        //     step2Title: "ደረጃ 2: የFamiSafe አዲስ ባህሪያትን ይመልከቱ",

        //     step3Title:
        //         "ደረጃ 3: ለFamiSafe የWondershare ID ይመዝገቡ ወይም በApple፣ Google ወይም Facebook መለያ ይግቡ",

        //     step4Title:
        //         "ደረጃ 4: እንደ ወላጅ ይቀጥሉ እና የልጅ ስልኩን በQR Code ወይም Pairing Code ያገናኙ (በ2ኛው ክፍል ተጨማሪ ይማሩ)",

        //     step5Title:
        //         "ደረጃ 5: በልጅ መሣሪያ ላይ pairing እና authorization ከተጠናቀቀ በኋላ በstart wizard መሰረታዊ የወላጅ ቁጥጥር ያቀናብሩ እና ዝግጁ ይሆናሉ",

        //     menu: [
        //         "1. በወላጅ መሣሪያ ላይ መጫን እና መመዝገብ",
        //         "2. የልጅ መሣሪያን ማገናኘት",
        //         "3. የመዳረሻ አስተዳደር",
        //         "4. በወላጅ ስልክ የልጅ መሣሪያን መቆጣጠር",
        //         "5. FamiSafe እንዴት ማጥፋት እንደሚቻል",
        //     ],
        // },
        // ================= APP STORE LINKS =================
        appStores: [
            {
                name: "App Store",
                href: "https://apps.apple.com/us/app/famisafe-parental-control-app/id1385417904",
                icon: "/assets/images/icons/iphone.png",
            },
            {
                name: "Google Play",
                href: "https://play.google.com/store/apps/details?id=com.wondershare.famisafe",
                icon: "/assets/images/icons/google.png",
            },
        ],
        /// user guide 
        contzent: {
            titlle: "የFamiSafe የተጠቃሚ መመሪያ",
            pdfLink: "/assets/images/doc/product-user-guide.pdf",
            sidebar: [
                "1. በወላጅ መሣሪያ ላይ መጫን እና መመዝገብ",
                "2. የልጅ መሣሪያን ማገናኘት",
                "3. የመዳረሻ አስተዳደር",
                "4. በወላጅ ስልክ ላይ የልጅ መሣሪያን መቆጣጠር",
                "5. FamiSafeን እንዴት መሰረዝ እንደሚቻል",
            ],
            steps: [
                {
                    titlle: "በወላጅ መሣሪያ ላይ FamiSafe መጫን እና መመዝገብ",
                    description:
                        "FamiSafeን በመጀመሪያ በወላጅ መሣሪያ ላይ በመጫን እና መለያ በመፍጠር ጀምር። እንዲሁም አፕሊኬሽኑን በGuest Mode በመጠቀም ማየት ትችላለህ።",
                    sections: [
                        {
                            stepTitlle: "ደረጃ 1: FamiSafe አውርድ",
                            description:
                                "FamiSafeን ከGoogle Play ወይም App Store በመፈለግ ያውርዱ። ወይም ከታች ያሉትን አዝራሮች በመጫን ማውረድ ይችላሉ።",
                        },
                        {
                            stepTitlle: "ደረጃ 2: የFamiSafe አዲስ ባህሪያትን ይመልከቱ።",
                            img: "https://famisafe.wondershare.com/images/user-guide/famisafe-install-step-2.jpg",
                        },
                        {
                            stepTitle:
                                "ደረጃ 3: ለFamiSafe Wondershare ID ይመዝገቡ ወይም በApple, Google እና Facebook መለያ ይግቡ",
                            img: "https://famisafe.wondershare.com/images/user-guide/famisafe-install-step-3.jpg",
                        },
                        {
                            stepTitlle:
                                "ደረጃ 4: እንደ ወላጅ ቀጥል እና የልጅ ስልክን በQR code ወይም pairing code አገናኝ (በ2ኛው ክፍል ተጨማሪ መረጃ ይገኛል)",
                            img: "https://famisafe.wondershare.com/images/user-guide/famisafe-install-step-4.jpg",
                        },
                        {
                            stepTitlle:
                                "ደረጃ 5: ከመገናኘት እና ፈቃድ ከሰጠ በኋላ መሰረታዊ የወላጅ ቁጥጥር አቀናብር እና ዝግጁ ነህ",
                            img: "https://famisafe.wondershare.com/images/user-guide/famisafe-install-step-5.jpg",
                        },
                    ],
                },
            ],
            appStores: [
                {
                    name: "App Store",
                    href: "https://apps.apple.com/us/app/famisafe-parental-control-app/id1385417904",
                    icon: "/assets/images/icons/iphone.png",
                },
                {
                    name: "Google Play",
                    href: "https://play.google.com/store/apps/details?id=com.wondershare.famisafe",
                    icon: "/assets/images/icons/google.png",
                },
            ],
        },
        // content: {
        //     title: "የFamiSafe የተጠቃሚ መመሪያ",
        //     pdfLink: "/assets/images/doc/product-user-guide.pdf",
        //     sidebar: [
        //         "1. በወላጅ ስልክ ላይ መጫን እና መመዝገብ",
        //         "2. የልጅ መሣሪያን ማገናኘት",
        //         "3. የመዳረሻ አስተዳደር",
        //         "4. የልጅ መሣሪያን በወላጅ ስልክ መቆጣጠር",
        //         "5. FamiSafe እንዴት እንደሚወገድ",
        //     ],
        //     steps: [
        //         {
        //             title: "FamiSafeን በወላጅ መሣሪያ ላይ መጫን እና መመዝገብ",
        //             description:
        //                 "FamiSafeን ለመጀመር በመጀመሪያ በወላጅ መሣሪያ ላይ መጫን እና መለያ መመዝገብ ያስፈልጋል። እንዲሁም በGuest Mode በመግባት መተግበሪያውን ማየት ይችላሉ።",
        //             sections: [
        //                 {
        //                     stepTitle: "ደረጃ 1: FamiSafe አውርዱ",
        //                     description:
        //                         "FamiSafeን ከGoogle Play ወይም App Store በመፈለግ ማውረድ ይችላሉ። ወይም ከታች ያሉትን የማውረጃ አዝራሮች በመጫን መተግበሪያውን ማውረድ ይችላሉ።",
        //                 },
        //                 {
        //                     stepTitle: "ደረጃ 2: የFamiSafe አዲስ ባህሪያትን ይመልከቱ",
        //                     img: "https://famisafe.wondershare.com/images/user-guide/famisafe-install-step-2.jpg",
        //                 },
        //                 {
        //                     stepTitle:
        //                         "ደረጃ 3: ለFamiSafe የWondershare መለያ ይፍጠሩ ወይም በApple፣ Google ወይም Facebook መለያ ይግቡ",
        //                     img: "https://famisafe.wondershare.com/images/user-guide/famisafe-install-step-3.jpg",
        //                 },
        //                 {
        //                     stepTitle:
        //                         "ደረጃ 4: እንደ ወላጅ ይቀጥሉ እና የQR Code ወይም Pairing Code በመጠቀም የልጅ ስልክን ያገናኙ (በ2ኛ ክፍል ተጨማሪ መረጃ ይገኛል)",
        //                     img: "https://famisafe.wondershare.com/images/user-guide/famisafe-install-step-4.jpg",
        //                 },
        //                 {
        //                     stepTitle:
        //                         "ደረጃ 5: በልጅ መሣሪያ ላይ ግንኙነቱ እና ፍቃዶቹ ከተጠናቀቁ በኋላ በመጀመሪያ የሚመጣውን መመሪያ (wizard) በመከተል መሰረታዊ የወላጅ መቆጣጠሪያን ያዘጋጁ።",
        //                     img: "https://famisafe.wondershare.com/images/user-guide/famisafe-install-step-5.jpg",
        //                 },
        //             ],
        //         },
        //     ],
        //     appStores: [
        //         {
        //             name: "App Store",
        //             href: "https://apps.apple.com/us/app/famisafe-parental-control-app/id1385417904",
        //             icon: "/assets/images/icons/iphone.png",
        //         },
        //         {
        //             name: "Google Play",
        //             href: "https://play.google.com/store/apps/details?id=com.wondershare.famisafe",
        //             icon: "/assets/images/icons/google.png",
        //         },
        //     ],
        // },
        OpensUserGuide: "የተጠቃሚ መመሪያን ክፈት",
        DownloadPDF: "PDF አውርድ",
        /// የወላጅ ግምገማ
        UserReview: "የተጠቃሚ ግምገማ",
        Overtheyears: "በዓመታት ያህል በተለያዩ ቦታዎች ከተጠቃሚዎቻችን ብዙ ድምጽ ሰምተናል፣ ለምሳሌ App Store, SNS, TikTok ወዘተ። ከነዚህ ውስጥ የተጠቃሚዎችን ታሪኮች ከእኛ ጋር ለመካፈል እንፈልጋለን።",
        AwardedbyFamo: "በታዋቂ ድርጅቶች የተሸለመ",
        AppStoreUserReview: "የApp Store የተጠቃሚ ግምገማ",
        GooglePlayUserReview: "የGoogle Play የተጠቃሚ ግምገማ",
        k208Ktotal: "አጠቃላይ 20.8K",
        COMMENTUS: "አስተያየት ያቀርቡ",
        FacebookCommunity: "የFacebook ማህበር",
        p25Kj: "25K+",
        PeopleLikeThis: "የዚህ ዓይነት ሰዎች",
        p30K: "30K+",
        Followers: "ተከታታዮች",
        reviews: [
            {
                id: 1,
                name: "Goff",
                date: "19. ሜይ, 2021",
                image: "https://i.pravatar.cc/60?img=1",
                text: "ልጆቼ በሳይበር ወንጀል ወይም የህጻናት ፖርኖግራፊ እንዳይደርሱ ሁልጊዜ ማረጋገጥ እንደምፈልግ ነበር፣ እና FamiSafe ይህን ለማድረግ ይፈቅዳል።",
            },
            {
                id: 2,
                name: "Bowers",
                date: "22. ጁን, 2021",
                image: "https://i.pravatar.cc/60?img=2",
                text: "ልጆቼን ሁልጊዜ ስለ ቦታ ለመጠየቅ ማለፍ እንደምትፈጽም የምንጠቀምበት መተግበሪያ አለኝ እና ቦታ መከታተያው በጣም ተደላልፏል።",
            },
            {
                id: 3,
                name: "Temitayo",
                date: "19. ጁን, 2021",
                image: "https://i.pravatar.cc/60?img=3",
                text: "ቡድናችሁ ለወላጆች እና ለቤተሰቦች ስለሚያደርጉት አክብሮት በጣም ተገርመኛል። FamiSafe በመረጃ እና በእውቀት ላይ ከሚኖሩ አደጋዎች የህጻናትን ጥይት እና ጆሮ እንዳይደርስ ያጠቃልላል።",
            },
        ],
        reviewss: [
            {
                id: 1,
                name: "Slayer",
                date: "7. ኤፕሪል, 2021",
                image: "https://i.pravatar.cc/60?img=1",
                text: "የስክሪን ጊዜን ሲቆጥር ልጄ ስለ ጨዋታ እንዴት እንደሚወዳድር አወቅሁ እና በአንዳንድ ደረጃ ማስፈንጠር ተሳክቷል።",
            },
            {
                id: 2,
                name: "Avona",
                date: "8. ጁን, 2021",
                image: "https://i.pravatar.cc/60?img=2",
                text: "ልጆቼን ሁልጊዜ ስለ ቦታ ማጠየቅ ማቋረጥ እንደምችል የምንጠቀምበት መተግበሪያ አለኝ እና ቦታ መከታተያው በጣም ተደላልፏል።",
            },
            {
                id: 3,
                name: "Nothasa",
                date: "9. ጁን, 2021",
                image: "https://i.pravatar.cc/60?img=3",
                text: "ቡድናችሁ ለወላጆች እና ለቤተሰቦች ስለሚያደርጉት አክብሮት በጣም ተገርመኛል። FamiSafe በመረጃ እና በእውቀት ላይ ከሚኖሩ አደጋዎች የህጻናትን ጥይት እና ጆሮ እንዳይደርስ ያጠቃልላል።",
            },
        ],
        reviewsse: [
            {
                id: 1,
                name: "Eileen",
                date: "19. ሜይ, 2021",
                image: "https://i.pravatar.cc/60?img=1",
                text: "እኛ በተለይ አዲስ ተጠቃሚዎች ነን እና እስካሁን ጥሩ ነው። ነገር ግን ከፍያዊ ዋጋ በኋላ ቅናሽ ኮድ አግኝቻለሁ፣ ይህን ለመተግበር ኢሜል ላከሁ ነገር ግን ምላሽ አላገኘሁም። ይህ በጣም ተጎዳቢ ነበር፣ ነገር ግን ከዚህ በስተቀር ጥሩ መተግበሪያ ነው።",
            },
            {
                id: 2,
                name: "Leeann",
                date: "8. ሜይ, 2021",
                image: "https://i.pravatar.cc/60?img=2",
                text: "እንደምን ሊሆን እንደሚገባ ለአማች እና ለየትኛውም የእድሜ ሰው ያለውን እንዴት እንደሚያስታውስ ጥሩ ነው።",
            },
            {
                id: 3,
                name: "Amanda",
                date: "9. ጁን, 2021",
                image: "https://i.pravatar.cc/60?img=3",
                text: "ልጆቹን በጥንቃቄ ማየት እንደምችል እወዳለሁ እና እንደምትሆን እንዳይሰማኝ እንዳይታወቅ እደግማለሁ።",
            },
        ],
        Whatouruserssay: "የተጠቃሚዎቻችን ምን ይላሉ",
        /// campaign
        awards: [
            {
                id: 1,
                image: 'https://famisafe.wondershare.com/images/images-2021/network-security-q1/share.png',
                subtitle: '2025 ምርጥ የወላጅ መቆጣጠሪያ መተግበሪያ',
                description: 'በዓለም አቀፍ ደረጃ እጅግ የታመነ የወላጅ መቆጣጠሪያ መፍትሄ ስለሚያቀርብ የተመረጠ።'
            },
            {
                id: 2,
                image: 'https://famisafe.wondershare.com/images/famisafe/top.png',
                subtitle: 'ምርጥ የደህንነት መተግበሪያ',
                description: 'ለህፃናት የዲጂታል ደህንነትና ደኅንነታቸውን ለማጠናከር የተሸለመ።'
            },
            {
                id: 3,
                image: 'https://famisafe.wondershare.com/images/v50/nocyberbullying-1.png',
                subtitle: 'የፈጠራ ሽልማት',
                description: 'በዓለም ዙሪያ ወላጆችን የሚያግዙ ፈጠራዊ ባህሪያት ስለሚያቀርብ የተከበረ።'
            }
        ],

        OurMarketingCampaigns: "የእኛ የማርኬቲንግ ዘመቻዎች",
        Toraiseattentionandaware: "እንደ ሳይበር ጥቃት (Cyberbullying) እና የኢንተርኔት ደህንነት ያሉ የትምህርት ችግኝቶች ላይ ግንዛቤና ማስጠንቀቂያ ለማስፋፋት።",
        AtTheMoment: "አሁን በአሁኑ ጊዜ",
        Checkoutthelatestup: "ለእርስዎ የጨመርናቸውን አዲስ ማሻሻያዎች እና ባህሪያት ይመልከቱ።",
        LearnMore: "ተጨማሪ ይወቁ",
        OurAchievements: "የእኛ ስኬቶች",
        Overtheyearso: "በዓመታት ቆይታ መተግበሪያችን ከታዋቂ ድርጅቶች የተለያዩ እውቅናዎችን እና ሽልማቶችን ተቀብሏል።",

        //// what's new
        //// What's new
        content: {
            titleTop: "የስሪት ታሪክ",

            title: "በFamiSafe ላይ አዲስ ምን አለ",

            subtitle:
                "በአዲስ ባህሪያት፣ ማሻሻያዎች እና ሌሎች ማሻሻያዎች ላይ ያሉ የቅርብ ጊዜ የምርት አዘምኖችን ያግኙ።",

            tryBtn: "9.0 በነፃ ይሞክሩ",

            buyBtn: "አሁን ይግዙ",

            tabs: {
                ios: "iOS",
                android: "Android",
            },

            timelines: {
                ios: [
                    {
                        year: 2025,
                        versions: [
                            {
                                version: "V9.0.0",
                                date: "ዲሴ 31, 2025",
                                changes: [
                                    "በAI የተደገፈ የማህበራዊ ሚዲያ ክትትል፡ ከ30 በላይ መድረኮችን ለልጅ ደህንነት ይደግፋል።",
                                    "የልጅ መሣሪያ አጠቃቀም ክትትል፡ እድገትን እና የአጠቃቀም ሁኔታዎችን ይመልከቱ።",
                                    "ለወላጅ መቆጣጠሪያ ቀላል ተሞክሮ የተሻሻለ UI።",
                                ],
                            },
                        ],
                    },
                    {
                        year: 2024,
                        versions: [
                            {
                                version: "V8.2.0",
                                date: "ኖቬ 19, 2024",
                                changes: [
                                    "ለልጅ ደህንነት የተሻሻለ የድምጽ ክትትል።",
                                ],
                            },
                            {
                                version: "V8.1.1",
                                date: "ኖቬ 10, 2024",
                                changes: [
                                    "የተሻሻለ መሣሪያ ክትትል ከተሻሻለ መረጋጋት ጋር።",
                                ],
                            },
                        ],
                    },
                ],

                android: [
                    {
                        year: 2025,
                        versions: [
                            {
                                version: "V9.0.0",
                                date: "ዲሴ 31, 2025",
                                changes: [
                                    "ለAndroid የተሻሻለ አፈጻጸም።",
                                    "ረጅም ጊዜ አጠቃቀም የሚያግዝ የባትሪ ማሻሻያ።",
                                    "ለተሻለ ክትትል አዲስ የወላጅ ዳሽቦርድ ንድፍ።",
                                ],
                            },
                        ],
                    },
                    {
                        year: 2024,
                        versions: [
                            {
                                version: "V8.2.0",
                                date: "ኖቬ 19, 2024",
                                changes: [
                                    "ለደህንነት ማስጠንቀቂያ የAndroid መተግበሪያ ማሳወቂያዎች ታክለዋል።",
                                ],
                            },
                            {
                                version: "V8.1.1",
                                date: "ኖቬ 10, 2024",
                                changes: [
                                    "ከአዲሱ Android OS ጋር የተሻሻለ መሣሪያ ተስማሚነት።",
                                ],
                            },
                        ],
                    },
                ],
            },
        },
        /// footer
        /// TEXT CONTENT
        footerContent: {
            brand: {
                name: "famisafe",
                slogan: "ፈጠራን ቀላል እናደርጋለን!",
            },

            sections: {
                heroProducts: {
                    title: "ዋና ምርቶች",
                    links: [
                        { label: "የአካባቢ መከታተያ (GPS)", href: "#" },
                        { label: "የማያ ጊዜ ቁጥጥር", href: "#" },
                        { label: "መተግበሪያ መቆለፍ", href: "#" },
                        { label: "የድር ጣቢያ ማጣሪያ", href: "#" },
                        { label: "YouTube እና TikTok እንቅስቃሴ", href: "#" },
                        { label: "SOS ማስጠንቀቂያ", href: "#" },
                    ],
                },

                wondershare: {
                    title: "Wondershare",
                    links: [
                        { label: "የፈጠራ ማዕከል", href: "#" },
                        { label: "ስለ እኛ", href: "#" },
                        { label: "የዜና ማዕከል", href: "#" },
                        { label: "ዓለም አቀፍ መገኘታችን", href: "#" },
                        { label: "የመስራቹ ንግግር", href: "#" },
                        { label: "ስራዎች", href: "#" },
                        { label: "ትምህርት", href: "#" },
                    ],
                },

                exploreAI: {
                    title: "AI ያስሱ",
                    links: [
                        { label: "የስልክ ጥሪ", href: "#" },
                        { label: "የማያ ግዜ", href: "#" },
                        { label: "መተግበሪያ መቆለፍ", href: "#" },
                        { label: "ማህበራዊ ሚዲያ", href: "#" },
                        { label: "ትምህርት", href: "#" },
                        { label: "ንግድ", href: "#" },
                    ],
                },

                helpCenter: {
                    title: "የእገዛ ማዕከል",
                    links: [
                        { label: "አግኙን", href: "#" },
                        { label: "የቪዲዮ ማህበረሰብ", href: "#" },
                        { label: "የድጋፍ ማዕከል", href: "#" },
                        { label: "መለያ", href: "#" },
                    ],
                },
            },

            bottomLinks: [
                "የአጠቃቀም ውሎች",
                "ግላዊነት",
                "የአጠቃቀም መመሪያ",
                "የኩኪ ምርጫዎች",
                "የገንዘብ መመለሻ ፖሊሲ",
                "ማስወገጃ",
            ],

            language: "አማርኛ",

            copyright: "© 2025 Wondershare. መብቶቹ ሁሉ የተጠበቁ ናቸው።",
        },

        //// annuall report
        reportData: [
            {
                id: "01",
                title: "የሪፖርት ዋና ነጥቦች",
                description: "ከሪፖርቱ የተወሰዱ ቁልፍ ግኝቶች እና አስፈላጊ ነጥቦች።"
            },
            {
                id: "02",
                title: "መግቢያ",
                description: "የዲጂታል ወላጅነት አጠቃላይ እይታ።"
            },
            {
                id: "03",
                title: "ከትውልድ እስከ መዋሃድ",
                items: [
                    "ጄኔሬቲቭ AI በ2024",
                    "የመስመር ላይ እና ከመስመር ውጭ ግንኙነት",
                    "የመጀመሪያ ስማርትፎን እና ቴክኖሎጂ ነፃ ጊዜ",
                    "የመተግበሪያ አጠቃቀም በ2024"
                ]
            },
            {
                id: "04",
                title: "የዲጂታል ችግኝ እና ነፃነት",
                items: [
                    "የወላጆች የተለመዱ ጭንቀቶች",
                    "ቀላል መድረሻ: ወደ አስነዋሪ ይዘት መድረስ",
                    "በቅርብ ያለ: የሳይበር ቡሊንግ አደጋ",
                    "የሚያስፈራ እውነታ: ከመስመር ውጭ አደጋ"
                ]
            },
            {
                id: "05",
                title: "የተጠቃሚ ዓመታዊ ሪፖርት",
                items: [
                    "የመሳሪያ አስተዳደር",
                    "AI ክትትል",
                    "ማህበራዊ ሚዲያ",
                    "አካባቢ መከታተያ",
                    "ከመስመር ውጭ መከላከያ"
                ]
            },
            {
                id: "06",
                title: "መደምደሚያ",
                items: [
                    "እምነት ያለው ጥበቃ ሰጪ",
                    "ሶስት ዋና ችግኝ",
                    "ተጨማሪ ድምፆችን መስማት"
                ]
            }
        ],
        content: {
            title: "ማህበራዊ ሚዲያ",
            description:
                "እስካሁን ድረስ በFamiSafe ተጠቃሚዎች መካከል በጣም የታወቀው ማህበራዊ ሚዲያ TikTok ሲሆን ቀጥሎ YouTube ይመጣል። አማካይ የቀን አጠቃቀም ጊዜ 1.3 ሰዓት ሲሆን ይህም ከጠቅላላ የስክሪን ጊዜ 41.4% ይሆናል።",
            buttonText: "ተጨማሪ ይመልከቱ",
            image: "https://famisafe.wondershare.com/images/images-2024/semi-annual-report/part5-img.png",
        },
        sections: [
            {
                id: "intro",
                title: "መግቢያ",
                desc: "ይህ ባለፉት ስድስት ዓመታት ውስጥ ከእርስዎ ጋር ያደረግነው የመጀመሪያ ውድ ስብሰባ ሲሆን የመጀመሪያ ሪፖርታችን መውጣቱን ያሳያል። ይህንን ለማሳካት በዚህ የበጋ የእረፍት ጊዜ በዓለም ዙሪያ ከ10,000 በላይ የፋሚሴፍ ተጠቃሚዎችን እና ልጆቻቸውን ለጥልቀት ቃለ-ምልልስ ጋብዘናል። ይህ ሪፖርት ስለ ልጆች የአሁኑ የባህሪ ልማዶች ግንዛቤዎችን ይሰጣል እንዲሁም ጭንቀቶቻችንን፣ ትምህርታዊ ሀሳቦቻችንን እና ጠቃሚ ጥቆማዎቻችንን አንድ ላይ ያመጣል። በመጨረሻም፣ ቤተሰቦች በዚህ ዲጂታል ዘመን ትምህርትን ለመደገፍ ቴክኖሎጂን እንዴት መጠቀም እንደሚችሉ ጠቃሚ መመሪያ አግኝተናል። የክትትል መሳሪያዎችን በንቃት መጠቀም ልጆችን በዲጂታል ዓለም ውስጥ ሊከሰቱ ከሚችሉ አደጋዎች ለመጠበቅ ውጤታማ መንገድ ነው። ሆኖም፣ የወላጅ እንክብካቤ እና ጓደኝነት የልጆችን ጤናማ እድገት ለመጠበቅ በጣም ውጤታማ መንገዶች ናቸው።ሪፖርቱ በአራት ክፍሎች የተከፈለ ነው፡ የመጀመሪያው ምዕራፍ የአሁኑን ዲጂታል ዓለም እና የዚህ ሪፖርት ዳራ መግቢያ ነው። ሁለተኛው ምዕራፍ በወላጆች መካከል የተለመዱ ስጋቶችን ያጠቃልላል፣ ይህም በስክሪን ጊዜ፣ በጾታዊ ግልጽነት ባለው ይዘት እና በሳይበር ጉልበተኝነት መካከል አወዛጋቢ ግጭቶችን ያካትታል፤ ሦስተኛው ምዕራፍ ለወላጆች እና ለልጆች ትክክለኛ የአጠቃቀም መረጃ ሪፖርት ሲሆን በዓለም ዙሪያ ያሉትን የወላጆችን ጥበብ ያንፀባርቃል፤ አራቱም ምዕራፍ መደምደሚያ ሲሆን ስለ ዲጂታል ትምህርት የወደፊት ሁኔታ ያለንን አመለካከት ያቀርባል።",
                image: "https://famisafe.wondershare.com/images/images-2024/semi-annual-report/part8-bg-mobile.png",
            },
            {
                id: "birth",
                title: "ከትውልድ እስከ መዋሃድ",
                desc: "ዲጂታል ዓለም በየጊዜው እየተሻሻለ ሲሆን እጅግ አስደሳች ነው። በአርቴፊሻል ኢንተለጀንስ ቴክኖሎጂ ውስጥ ከጊዜ ወደ ጊዜ እየጨመረ የመጣው ተወዳጅነት እና እድገት፣ የግንኙነት ዘመን በመጨረሻ ደርሷል። በ2024 የመጀመሪያ አጋማሽ ላይ፣ አርቴፊሻል ኢንተለጀንስ በቴክኖሎጂ ውስጥ ከፍተኛ እድገት አሳይቷል፣ የጄኔሬቲቭ አርቴፊሻል ኢንተለጀንስ ቴክኖሎጂ በጣም ተፈላጊ ሆኖ ቀጥሏል፣ ይህም ለኦንላይን ተጠቃሚዎች የተለያዩ አገልግሎቶችን ይሰጣል። በ2023 ብቻ፣ በዓለም አቀፍ ደረጃ ከፍተኛዎቹ 50 የአይአይ መሳሪያዎች ከ24 ቢሊዮን በላይ ጉብኝቶችን አስገኝተዋል፣ በአማካይ በወር 2 ቢሊዮን ጉብኝቶች። ChatGPT ከፍተኛውን አጠቃቀም እና ተወዳጅነት ነበረው፣ 14.6 ቢሊዮን ጉዞዎችን አበርክቷል፣ ይህም ከጠቅላላው ከ60% በላይ ነው። (ምንጭ፡ Writerbuddy) በድርጅቶች፣ በትምህርት እና በግል ትምህርት እና በህይወት ውስጥ በሁሉም ቦታ ይገኛል። በተመሳሳይ ጊዜ፣ የአይአይ ምናባዊ ቴክኖሎጂ፣ የአይአይ ፈጠራ፣ የአይአይ ምስል ማስዋቢያ መሳሪያዎች እና የጽሑፍ-ወደ-ምስል ቴክኖሎጂ ትኩረትን እያገኙ ነው። የአይአይ መሳሪያዎች እድገት ከ2023 እስከ 2030 በየዓመቱ በ40% እንደሚጨምር ይጠበቃል። የአይአይ ቴክኖሎጂን የማይጠቀሙ ሰዎች በጊዜ ሂደት ይወገዳሉ ማለት ይቻላል። የቻትግፕት የትራፊክ ድርሻ በአምስት ከፍተኛ አገሮች (ምንጭ፡SimilarWeb)",
                image: "https://famisafe.wondershare.com/images/images-2024/semi-annual-report/part10-chart-mobile2.png",
            },
            {
                id: "digital",
                title: "የዲጂታል ችግኝ",
                desc: "ከመስመር ላይ ኔትዎርኮች የሚመጡ አደጋዎች መካከል፣ ለወላጆች በጣም የሚያስጨንቀው ነገር ህፃናት በቀድሞ ዕድሜ ወደ ፖርኖግራፊ መጋለጣቸው ነው። ከዚህ በኋላ የሚመጡት ደግሞ እንደ ሳይበር ቡሊንግ (cyberbullying)፣ የኢንተርኔት ሱስ፣ የዓይን እይታ መዳከም፣ እና የእንቅልፍ እጥረት ያሉ የተጨማሪ አሉታዊ ተፅዕኖዎች ናቸው። ከምርምር ውጤቶች መሠረት፣ 51% የአሜሪካ ታዳጊዎች በመስመር ላይ ሲሆኑ ፖርኖግራፊን ሊያጋጥሟቸው የሚችል እድል ከፍተኛ እንደሆነ ይገልጻሉ። በUnited Kingdom ደግሞ፣ ከ10 ዓመት ልጆች 21.5% ያህል ቢያንስ በየሌሊቱ 1.5 ሰዓት በሶሻል ሚዲያ ላይ ሱስ ያለባቸው ሲሆን፣ ይህም በሳምንት አንድ ሙሉ ሌሊት እንቅልፍ እንደሚያጡ ይመጣል። ከAmerican Journal of Psychiatry የተገኘ ምርምር እንደሚያመለክተው፣ ታዳጊዎች በየቀኑ ከ3 ሰዓት በላይ በሶሻል ሚዲያ መድረኮች ላይ ቢያሳልፉ፣ እንደ ድፍረት (depression)፣ ጭንቀት (anxiety)፣ ጥቃት (aggression) እና ከማህበረሰብ መለያየት (antisocial behavior) ያሉ የአእምሮ ጤና ችግኝ ሊያጋጥሟቸው የሚችል እድል ይጨምራል።",
                image: "https://famisafe.wondershare.com/images/images-2024/semi-annual-report/part11-img6.png",
            },
            {
                id: "report",
                title: "የተጠቃሚ ሪፖርት",
                desc: "እኔ እመናለሁ ዛሬ ልጆች ስማርትፎን መኖር አስፈላጊ ነው—ይህ እያደጉ ያሉበት ዓለም ክፍል ነው። ነገር ግን መሣሪያውን ብቻ መስጠት እና መተው አይበቃም። እኛ አዋቂዎች እንኳን የስክሪን ጊዜን፣ ትኩረትን እና የመስመር ላይ ባህሪያችንን መቆጣጠር እንገራለን። እንግዲህ ልጆች ብቻቸውን እንዴት እንዲቆጣጠሩ እንጠብቃለን? እንደ 45 ዓመት ወላጅ፣ መመሪያ፣ ገደብ እና ክፍት ውይይት እንዴት እንደሚያስፈልጉ አውቃለሁ። ይህ ቴክኖሎጂን መከልከል ሳይሆን፣ ልጆችን በኃላፊነት እንዲጠቀሙበት ማስተማር ነው።",
                image: "https://famisafe.wondershare.com/images/images-2024/semi-annual-report/part12-chart.png",
            },
            {
                id: "conclusion",
                title: "መደምደሚያ",
                desc: "እ.ኤ.አ. በ2024 ፋሚሴፍ ጥረቱን ለማበርከት ለዩኒሴፍ መዋጮ ማድረግ ጀመረ። ተጨማሪ ወላጆች የፋሚሴፍ ቤተሰብን በመቀላቀላቸው፣ በ2024 የመጀመሪያ አጋማሽ ከ790,000 በላይ ዓለም አቀፍ ተጠቃሚዎች ተጨምረዋል። ​​በአማካይ የፋሚሴፍ የወላጅ መተግበሪያ በሳምንት በአማካይ 8 ጊዜ ጥቅም ላይ ይውላል፣ ቅዳሜና እሁድ ላይ ያተኩራል። ፋሚሴፍ ወላጆች ስለ ትምህርት እና ስለ ጓደኝነት እጦት ያላቸውን ጭንቀት ለማስታገስ ቁርጠኛ ነው፣ እና የልጆችን የመስመር ላይ እና የመስመር ውጪ ደህንነት መጠበቅ ባለፉት፣ በአሁኑ እና በወደፊቱ ውስጥ አስፈላጊው ተልዕኮ ሆኖ ይቀጥላል። ከሦስት ዓመት ልጅ ጀምሮ እስከ ገለልተኛ አስተሳሰብ ያለው ታዳጊ ድረስ፣ ልጆች በመንገዳቸው ላይ ስፍር ቁጥር የሌላቸው ፈተናዎችና እንቅፋቶች ሊያጋጥሟቸው ይችላሉ። በእያንዳንዱ የእድገት ደረጃ ላይ እርዳታ እንዴት መስጠት እና ልጆችንም ሆነ ወላጆችን በብቃት መርዳት እንደሚቻል እውነተኛ አሳሳቢ ጉዳይ ነው። ስለዚህ፣ ከ3-8 ዓመት ለሆኑ ሕፃናት በለጋ የልጅነት ትምህርት ላይ በማተኮር፣ ልጆች የዲጂታል ዓለምን ፈተናዎች እንዲቋቋሙ እና ሊከሰቱ የሚችሉ የመስመር ላይ አደጋዎችን እንዲያስወግዱ በመርዳት ላይ እናተኩራለን። እንደ የስክሪን ጊዜ አስተዳደር፣ የመተግበሪያ መቆለፊያ እና የጊዜ ሰሌዳ ያሉ ጤናማ የመሣሪያ አጠቃቀም ልምዶችን ለማዳበር የሚያስችሉ ባህሪያትን አስተዋውቀናል። ከ9-14 ዓመት ለሆኑ ታዳጊዎች፣ በጉርምስና ወቅት የሚከሰቱ ለውጦችን እና ከፍተኛ የማህበራዊ እና የመገናኛ ሚዲያ አጠቃቀምን እንፈታለን። እንደ አጠራጣሪ የምስል መለየት፣ ተገቢ ያልሆኑ ቃላትን መቆጣጠር እና ማገድ፣ ህገወጥ ድር ጣቢያዎችን ማጣራት፣ ሊከታተሉ የሚችሉ የኢንተርኔት አጠቃቀም መዝገቦችን፣ የማህበራዊ ሚዲያ መተግበሪያዎችን መከታተል እና የጽሑፍ መልዕክቶችን እና የስልክ ጥሪዎችን መቆጣጠር ያሉ ባህሪያትን አስተዋውቀናል፣ ይህም ልጆች ገና በለጋ እድሜያቸው የሳይበር ጉልበተኝነትን እንዳያጋጥማቸው እና ለጎጂ የመስመር ላይ ይዘቶች መጋለጥን ለመከላከል ነው። ከ15-18 ዓመት ለሆኑ ታዳጊዎች፣ ነፃነትን እና ስለ ውጫዊው ዓለም ያላቸውን ከፍተኛ የማወቅ ጉጉት ከግምት ውስጥ በማስገባት፣ እንደ የእውነተኛ ጊዜ የአካባቢ ማጋራት፣ ታሪካዊ የአካባቢ ክትትል፣ የጂኦ አጥር፣ የSOS የአደጋ ጊዜ እርዳታ፣ የአንድ አቅጣጫ የአካባቢ የድምጽ ክትትል እና የታዳጊዎች የመንዳት ሪፖርቶች ያሉ ባህሪያትን አስተዋውቀናል። እነዚህ ባህሪያት ወላጆች የልጆቻቸውን ከመስመር ውጭ ደህንነት ሙሉ ቁጥጥር ይሰጣሉ።።",
                image: "https://famisafe.wondershare.com/images/images-2024/semi-annual-report/part29-img-mobile.jpg",
            },
        ],






























    },




    // Oromo - afan-Oromiffa
    om: {
        // New  home ///
        Wonde443rshareFa: "Wondershare Famisafe V9.0 jedhamuun beekama",
        AIPare456ntalControl: "To'annoo Warra AI",
        forSo765cial: "Nageenya ",
        MediaSa86fety: "Miidiyaa  Hawaasaa",
        Keepaney45eon3: "Appii hawaasummaa 30+ hordofaa balaa dafanii qabadhaa.",
        AIpowere645dprotectionfo: "Jireenya dijitaalaa daa’ima keessaniif eegumsa AIn hojjetu-hordoffii miidiyaa hawaasaa, bulchiinsa yeroo iskiriinii, fi hordoffii bakka appii tokko keessatti.",
        YourProfessional: "Digital Parenting'f kan qophaa'e,",
        MainTitle: "AI'n kan hojjetu",
        SocialAppsDetection: "Appilikeeshiniiwwan Hawaasaa Adda baasuu",
        CatchHiddenRisk: "Balaa Dhokataa Miidiyaa Hawaasaa Irraa Qabadhaa",
        AIscans30appsli: "AI apps 30+ kan akka TikTok & Instagram scan godhee bullying, predators, fi qabiyyee miidhaa geessisu dursee adda ba'a.",
        AIDetection: "AI-Adda baasuu",
        Support30Apps: "Appilikeeshinii 30+ deeggaru",
        StartFreeTrial: "Yaali Bilissa Jalqabi",
        LearnMore: "Caalaatti Baruuf",
        feature6s: [
            {
                mainTitle: "To'annoo Yeroo Iskiriinii",
                subtitle: "Lola Malee Mucaa Keessaniif Daangaa Kaa'aa",
                description:
                    "Daangaa yeroo iskiriinii, sagantaa, fi gabaasa itti fayyadama bal’aa ta’een amala dijitaalaa fayya qabeessa ta’e ijaari.",
                button1: "Yaali Bilissa Jalqabi",
                button2: "Caalaatti Baruuf",
                imageSrc:
                    "https://famisafe.wondershare.com/images/images-2025/new-index/screen-time-usage-report-img.png",
                featureIcons: [
                    { icon: BsClockFill, title: "Daily Limits" },
                    { icon: TiMessages, title: "Usage Report" },
                ],
            },
            {
                mainTitle: "Hordoffii Bakka",
                subtitle: "Bakka Mucaa Keessan Yaaddoo Malee Hordofaa",
                description:
                    "Ijoolleen keessan eessa akka jiran hordoffii GPS kallattiin, seenaa bakka, fi akeekkachiisa ji'oofeensiin beekaa.",
                button1: "Yaali Bilissa Jalqabi",
                button2: "Caalaatti Baruuf",
                imageSrc:
                    "https://famisafe.wondershare.com/images/images-2025/new-index/location-tracking-img.png",
                featureIcons: [
                    { icon: TiLocation, title: "Real-time GPS" },
                    { icon: IoShieldCheckmark, title: "Safe Zone" },
                ],
            },
        ],
        ExploreMoreParental: "Amaloota To'annoo ",
        ControlFeatures: "Warraa Dabalataaf Qoradhu",
        feaxturess: [
            { id: 1, title: "Bilbilaa fi Ergaa", desc: "Galmee bilbilaa fi ergaawwan hordofuun balaa ta’uu danda’an yookaan qabiyyee hin malle adda baasuuf.", image: "https://famisafe.wondershare.com/images/images-2025/new-index/calls-messages-bg.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },

            { id: 2, title: "To’annoo Yeroo Screenii", desc: "Yeroo screenii guyyaa guyyaan murteessuun fi sagantaa qopheessuun fayyadama dijitaalaa fayya qabeessa taasisuuf.", image: "https://famisafe.wondershare.com/images/images-2025/new-index/screen-time-bg.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },

            { id: 3, title: "Ilaalcha Screenii", desc: "Screenii bilbilaa ijoollee kee yeroo dhugaa yookaan sagantaadhaan ilaaluun sochii isaanii hordofuuf.", image: "https://famisafe.wondershare.com/images/images-2025/new-index/screen-viewer-bg.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },

            { id: 4, title: "Seerota Appii", desc: "Appoota murtaa’an cufuu yookaan hayyamuu danda’uun jeequmsa ittisuuf fi itti fayyadama sirrii mirkaneessuuf.", image: "https://famisafe.wondershare.com/images/images-2025/new-index/app-rules-bg.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },

            { id: 5, title: "Sagalee Karaa Tokko", desc: "Naannoo bilbilaa ijoollee kee dhaggeeffachuun nageenya isaanii mirkaneessuuf.", image: "https://famisafe.wondershare.com/images/images-2025/new-index/one-way-audio-bg.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },

            { id: 6, title: "Gabaasa Sochii", desc: "Gabaasa bal’aa waa’ee fayyadama bilbilaa fi sochii appii ijoollee kee argachuuf.", image: "https://famisafe.wondershare.com/images/images-2025/new-index/activity-report-bg.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },

            { id: 7, title: "To’annoo Maatii YouTube", desc: "Seenaa daawwannaa YouTube ijoollee kee hordofuun fi qabiyyee hin malle ittisuuf.", image: "https://famisafe.wondershare.com/images/images-2025/new-index/youtube-parental-control-bg.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },

            { id: 8, title: "Seenaa TikTok", desc: "Seenaa daawwannaa TikTok ijoollee kee hordofuun qabiyyee umurii isaanii waliin walsimu mirkaneessuuf.", image: "https://famisafe.wondershare.com/images/images-2025/new-index/tiktok-history-bg.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },

            { id: 9, title: "Suuraalee Hin Malle", desc: "Suuraalee sirrii hin taane adda baasuun si beeksisu (iPhone yookaan Android irratti).", image: "https://famisafe.wondershare.com/images/images-2025/new-index/inappropriate-pictures-bg.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },

            { id: 10, title: "Argannoo Appii Hawaasaa", desc: "Appoota hawaasaa 30 ol hordofuun jechoota shakkisiisoo ofii keetiin qopheessuuf.", image: "https://famisafe.wondershare.com/images/images-2025/new-index/social-app-detection-bg.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },

            { id: 11, title: "Filterii Weebsaayitii", desc: "Weebsaayitii hin malle cuqaasa tokkoon ugguruun daawwannaa nageenya qabu mirkaneessuuf.", image: "https://famisafe.wondershare.com/images/images-2025/new-index/web-filter-bg.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },

            { id: 12, title: "Gabaasa Oofinsa", desc: "Amala oofinsa ijoollee kee akka saffisa fi karaa deemaa hordofuu fi galmeessuuf.", image: "https://famisafe.wondershare.com/images/images-2025/new-index/driving-report-bg.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },

            { id: 13, title: "Hordoffii Iddoo", desc: "Iddoo ijoollee kee yeroo dhugaa hordofuu, seenaa ilaalu fi naannoo nageenyaaf akeekkachiisa argachuuf.", image: "https://famisafe.wondershare.com/images/images-2025/new-index/location-tracking-bg.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },

            { id: 15, title: "Akeekkachiisa SOS", desc: "Ijoolleen kee yeroo hatattamaa iddoo isaanii waliin akeekkachiisa erguu danda’u.", image: "https://famisafe.wondershare.com/images/images-2025/new-index/sos-alert-bg.jpg" },
        ],
        Your: "Maatii",
        plan: "Keessan",
        Family: "Filadhaa ",
        Choose: "Karoora",
        Trustedby47GGFmillions: "FamiSafe miliyoonaan kan amanamu yoo ta'u, warri jireenya dijitaalaa ijoollee isaanii akka bulchan gargaara. Karoora kee amma filadhu!",
        Yearly: "Waggaa waggaan",
        moNTH: "/mo",
        $59billedannually: "Waggaatti ETB 17,999 kaffalama",
        Unlockallpremiumeatures: "Amaloota premium hunda banaa",
        BestVal988ue: "Best Value",
        Seeallpl232R34ans: "Amma Bitadhaa",
        featureds: [
            "Yeroo screenii to’achuu",
            "Akeekkachiisa suuraalee miidhaa qaban",
            "Seenaa barbaacha weebsaayitii hordofuu",
            "Iddoo yeroo dhugaa hordofuu fi seenaa ilaalu",
            "Appoota hawaasaa akka WhatsApp, YouTube fi kkf hordofuu",
            "Bilbilaa, ergaa fi email hordofuu",
            "Seenaa chat fi screenshot appii hordofuu",
            "Sagalee naannoo ijoollee jiru hordofuu",
            "Weebsaayitii fi appoota ugguruu",
            "Geofence uumuu fi akeekkachiisa SOS erguu",
        ],
        Real: "Maatii",
        Families: "Dhugaa ",
        Reals: "Seenaa",
        Stories: "Dhugaa",
        Explorerealtorie: "Seenaa dhugaa 35+ maatii addunyaa mara irraa qoradhuu fi akkaataa isaan FamiSafe fayyadamuun ijoollee isaanii toora interneetii irratti nageenya isaanii eeguuf baradhu.",

        featuresse: [
            { id: 1, title: "Tarkaanfii Hunda Hordofuu Gara Manaatti", desc: "Galmee bilbilaa fi ergaawwan hordofuun balaa ta’uu danda’an yookaan qabiyyee hin malle adda baasuuf.", image: "https://famisafe.wondershare.com/images/images-2025/new-index/location-tracking.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },

            { id: 2, title: "To’annoo Yeroo Screenii", desc: "Yeroo screenii guyyaa guyyaan murteessuun fi sagantaa qopheessuun fayyadama dijitaalaa fayya qabeessa taasisuuf.", image: "https://famisafe.wondershare.com/images/images-2025/new-index/social-app-monitoring.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },

            { id: 3, title: "Ilaalcha Screenii", desc: "Screenii bilbilaa ijoollee kee yeroo dhugaa yookaan sagantaadhaan ilaaluun sochii isaanii hordofuuf.", image: "https://famisafe.wondershare.com/images/images-2025/new-index/app-blocking.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },

            { id: 4, title: "Seerota Appii", desc: "Appoota murtaa’an cufuu yookaan hayyamuu danda’uun jeequmsa ittisuuf fi itti fayyadama sirrii mirkaneessuuf.", image: "https://famisafe.wondershare.com/images/images-2025/new-index/social-app-monitoring.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },

            { id: 5, title: "Sagalee Karaa Tokko", desc: "Naannoo bilbilaa ijoollee kee dhaggeeffachuun nageenya isaanii fi iccitii isaanii eeguu mirkaneessuuf.", image: "https://famisafe.wondershare.com/images/images-2025/new-index/screen-time.jpg", url: "https://famisafe.wondershare.com/main/sign-up" },
        ],
        viewallstries: "Seenaa Hundaa llaali",

        daata: [
            {
                icon: "FaBuilding",
                value: 200,
                suffix: "+",
                label: "Biyyoota",
                bg: "bg-blue-100",
                iconSize: "text-5xl",
            },
            {
                icon: "FaUsers",
                value: 35,
                suffix: "M+",
                label: "Fayyadamtoota",
                bg: "bg-teal-100",
                iconSize: "text-5xl",
            },
            {
                icon: "BiSolidHomeHeart",
                value: 18,
                suffix: "K+",
                label: "Maatiiwwan",
                bg: "bg-orange-100",
                iconSize: "text-5xl",
            },
            {
                icon: "CiBookmarkCheck",
                value: 15,
                suffix: "K+",
                label: "Subscribers",
                bg: "bg-blue-100",
                iconSize: "text-5xl",
            },
        ],
        what: "What",
        parenties: "Parentie",
        aresaying: "are sying",
        Realfeedbacksf: "Real feedbacks from parents who use FamiSafe around the world.",
        // 1️⃣ Declare your reviews first
        reviqews: [
            {
                id: 1,
                name: "Emily",
                date: "Dec 06, 2025",
                score: 4.5,
                description: "Appii FamiSafe argachuu koo irratti baay’ee gammadeera. Ergaawwan shakkisiisoo tokko tokko chaatii garee intala koo keessatti argate — ani hin argine ture. Haasawa cimaa goone, garuu yeroo duraa qabanneerra. Baay’ee nan gorsa!",
                image: "https://famisafe.wondershare.com/images/images-2025/new-index/user1.png",
                features: { Chatmonitoring: 90, Riskdetection: 80, Realtimealerts: 85, Grouptracking: 70 },
            },
            {
                id: 2,
                name: "David",
                date: "Mar 19, 2025",
                score: 3.8,
                description: "Dhugumaan, kun too’annoo maatii hojjetu dha. Ilmi koo waggaa 14 qaba, teeknooloojii baay’ee beeka, garuu Wondershare FamiSafe dhaabsisuu hin danda’u. Appoota biro duraan yaaleera — kun garuu sirriitti hojjetaa dha.",
                image: "https://famisafe.wondershare.com/images/images-2025/new-index/user2.png",
                features: { Chatmonitoring: 70, Riskdetection: 60, Realtimealerts: 80, Grouptracking: 75 },
            },
            {
                id: 3,
                name: "Jessica",
                date: "Oct 22, 2025",
                score: 4.9,
                description: "Baay’ee nan gorsa! FamiSafe yeroo ijoolleen koo mana barumsaa dhiisan battalumatti na beeksisa. Karaa isaan gara manaatti deeman kaarta irratti sirriitti ilaaluun danda’a. Akka haadha kophaa ta’ee hojii fi jireenya walitti qabdu, appiin kun gatii isaa qaba.",
                image: "https://famisafe.wondershare.com/images/images-2025/new-index/user3.png",
                features: { Cleanliness: 95, Comfort: 90, Location: 95, Price: 85 },
            },
            {
                id: 4,
                name: "Robert",
                date: "Jul 16, 2025",
                score: 4.2,
                description: "Wondershare FamiSafe duraan qabaachuun qaba ture jedheen yaada. Amma ilmi koo bilbila isaa irratti maal akka godhu sirriitti argu danda’a — appoota, YouTube, hundumaa. Amma tilmaamuun hin jiru. Amma seera screenii waliin murteessina.",
                image: "https://famisafe.wondershare.com/images/images-2025/new-index/user4.png",
                features: { Cleanliness: 85, Comfort: 75, Location: 80, Price: 70 },
            },
        ],
        WorksGreat: "Works Great ",
        withFamiSafe: "with FamiSafe",
        WorksGreat: "FamiSafe waliin",
        withFamiSafe: "Guddaa hojjeta",
        JoinOur: "Hawaasa ",
        Community: "Keenyattimakamaa",
        StartPro35tecting: "Har'a Maatii",
        Your32345FamilyToday: "Maatii Kee Har’a",
        Join35millionfamil: "Maatii miliyoona 35 kanneen FamiSafe ijoollee isaanii toora interneetii irratti nageenya isaanii eeguuf amananitti makamaa. Bilisaa ta'ee yaalaa!",



        //End  New  home ///
        FamiSafe: "FamiSafee",
        PoweredbyAI: "AI’n kan deeggarame",
        ParentalControlApp: "Appii Too’annoo Warraa",
        NextGen: "Next-Gen",
        Products: "Oomishaalee",
        Products: "Products",
        Features: "Features",
        Blog: "Blog",
        Blog: "Blog",
        spen: "Blogii",
        Resource: "Qabeenya",
        TryItFree: "Bilisaan",
        download: "download",
        Pricing: "Gatiiwwan",
        wachdeviceused: "Fayyadama Yeroo Iskiriinii",
        Subtitles: "Ijoollee Keessan Ilaali, Qajeelchi, fi Eegi",
        title: "App Kontiroolii Maatii Gosa Haaraa, Humna AI’n Deeggare",
        seetittle: "Yaalii bilisaa eegaluu",
        StartFreeTrial: "Yaalii bilisaa eegaluu",
        BuyNow: "Beeta",
        Availableon: "Isaan kana irratti argamu",
        description: "Maatii keessan too'annoo maatii ogummaa qabuun eeguudhaan yeroo skrinii to'achuuf, iddoo hordofuuf, fi appiiwwan jeequmsaa cufuu — yoomiyyuu, eessaayyuu danda'ama.",
        MoreParentalControlFeatures: "Amaloota Too’annoo Warraa Dabalataa",
        tabData: [
            {
                title: "",
                content: 'famisafe.wondershare.com/images/images-2025/index/watch-device-use.png',

                cards: [
                    {
                        // icon: <FaClipboardList />,
                        title: "",
                        desc: "",
                        position: "top-10 left-24",
                    },
                    {
                        // icon: <FaClipboardList />,
                        title: "",
                        desc: "",
                        position: "top-50 left-24",
                    },
                    {
                        // icon: <FaComments />,
                        title: "",
                        desc: "",
                        position: "bottom-20 right-20",
                    },
                ],
            },

            {
                title: "",
                content: 'https://famisafe.wondershare.com/images/images-2025/index/guide-online-content.png',

                cards: [
                    {
                        // icon: <FaClipboardList />,
                        title: "",
                        desc: "",
                        position: "top-10 left-24",
                    },
                    {
                        // icon: <FaComments />,
                        title: "",
                        desc: "",
                        position: "bottom-60 right-35",
                    }, {
                        // icon: <FaComments />,
                        title: "",
                        desc: "",
                        position: "bottom-20 right-20",
                    },
                ],
            },

            {
                title: "",
                content: 'https://famisafe.wondershare.com/images/images-2025/index/protect-in-real-life.png',
                cards: [
                    {
                        // icon: <FaClipboardList />,
                        title: "",
                        desc: "",
                        position: "top-10 left-24",
                    },
                    {
                        // icon: <FaClipboardList />,
                        title: "",
                        desc: "",
                        position: "top-50 left-24",
                    },
                    {
                        // icon: <FaComments />,
                        title: "",
                        desc: "",
                        position: "bottom-20 right-20",
                    },
                ],
            },
        ],
        slidess: [
            {
                title: "Screen Time",
                text: "Set daily screen time limits and schedules to promote healthy digital habits.",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/screen-time.png',
            },
            {
                title: "One-way Audio",
                text: "Listen to your child's surroundings in real-time to ensure safety.",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/one-way-audio.png',
            },
            {
                title: "Location Tracking",
                text: "Track your child’s real-time location for peace of mind.",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/location-tracking.png',
            },
            {
                title: "Screen Viewer",
                text: "View what your child sees on their device to protect them online.",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/screen-viewer.png',
            },
            {
                title: "App Rules",
                text: "Set rules for apps and block inappropriate content effectively.",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/app-rules.png',
            },
        ],
        slides: [
            {
                title: "TikTok History",
                desc: "Monitor TikTok usage and history.",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/tiktok-history.png',
            },
            {
                title: "Inappropriate Video",
                desc: "Detect explicit pictures and videos.",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/inappropriate-pictures.png',
            },
            {
                title: "Web Filter",
                desc: "Block harmful websites in real time.",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/web-filter.png',
            },
            {
                title: "SOS Alert",
                desc: "Instant emergency alerts for parents.",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/sos-alert.png',
            },
            {
                title: "Social App Detection",
                desc: "Monitor social apps and YouTube to detect any explicit or offensive words. Set offensive words to get alert when they are detected on your kid's device..",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/social-app-detection.png',
            },
            {
                title: "Calls & Messages",
                desc: "Monitor call and SMS activity.",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/calls-messages.png',
            },
            {
                title: "Activity Report",
                desc: "Daily and weekly activity insights.",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/activity-report.png',
            },
            {
                title: "YouTube Control",
                desc: "Manage YouTube screen time safely.",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/youtube-parental-control.png',
            },
        ],
        sliddes: [
            {
                title: "TikTok History",
                desc: "Monitor TikTok usage and history.",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/tiktok-history.png',
            },
            {
                title: "Inappropriate Video",
                desc: "Detect explicit pictures and videos.",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/inappropriate-pictures.png',
            },
            {
                title: "Web Filter",
                desc: "Block harmful websites in real time.",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/web-filter.png',
            },
            {
                title: "SOS Alert",
                desc: "Instant emergency alerts for parents.",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/sos-alert.png',
            },
            {
                title: "Social App Detection",
                desc: "Monitor social apps and YouTube to detect any explicit or offensive words. Set offensive words to get alert when they are detected on your kid's device..",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/social-app-detection.png',
            },
            {
                title: "Calls & Messages",
                desc: "Monitor call and SMS activity.",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/calls-messages.png',
            },
            {
                title: "Activity Report",
                desc: "Daily and weekly activity insights.",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/activity-report.png',
            },
            {
                title: "YouTube Control",
                desc: "Manage YouTube screen time safely.",
                image: 'https://famisafe.wondershare.com/images/images-2025/index/youtube-parental-control.png',
            },
        ],
        TryFree: "",
        BuynNow: "",
        TryitFrees: "",
        StartFreeTrials: "Start Free Trial",
        BuyNoww: "Buy Now",
        SecuredSharing: "",
        SeeLovedOnesat: "",
        Hands: "Hands",
        Geonectionprotects: "Geonection protects your location sharing with end-to-end encryption",
        RealStoriesfromParents: "Real Stories from Parents",
        stories: [
            {
                tid: 1,
                image: 'https://famisafe.wondershare.com/images/images-2025/index/story-1.jpg',
                quote: "Even from 8 000 km away, I auto-lock games during homework hours and unlock them for breaks.",
                name: "Omer -K",
                role: "Dad Working Overseas",
            },
            {
                tid: 2,
                image: 'https://famisafe.wondershare.com/images/images-2025/index/story-2.jpg',
                quote: "FamiSafe flagged ‘hurt myself’ in my son’s chat. I stepped in, and we got him help the same day.",
                name: "Claire B",
                role: "Mom of a 14-year-old",
            },
            {
                tid: 3,
                image: 'https://famisafe.wondershare.com/images/images-2025/index/story-3.jpg',
                quote: "Checking in on my child is effortless and reassuring.",
                name: "Leah G",
                role: "Mom of an ADHD Game",

            },
            {
                tid: 4,
                image: 'https://famisafe.wondershare.com/images/images-2025/index/story-4.jpg',
                quote: "Even as a grandparent, I stay connected and informed.",
                name: "Robert K",
                role: "Dad Working Overseas",

            },
            {
                tid: 4,
                image: 'https://famisafe.wondershare.com/images/images-2025/index/story-5.jpg',
                quote: "“When my granddaughter didn’t answer after school, FamiSafe’s real-time map showed she was still at orchestra practice. One glance spared a panic call and gave me total peace of mind.”",
                name: "David-T",
                role: "Grandpa of 8-year-old",
            },
        ],
        ViewAllStories: "View All Stories",
        // products Driopdown
        cardss: [
            {
                title: "FamiSafe🔥 👑",
                desc: "Parental Control Solution",
                img: 'https://famisafe.wondershare.com/images/images-2025/famisafe/home-icon.svg',
                primary: true,
                href: "/famisafe",
            },
            {
                title: "FamiSafe for School, ",
                desc: "School & Parent Sync",
                img: 'https://famisafe.wondershare.com/images/images-2025/famisafe/school-icon.svg',
                href: "/school", // School link
            },
            {
                title: "Geonection",
                desc: "Realtime Location Sharing",
                img: 'https://famisafe.wondershare.com/images/images-2025/famisafe/geonection-icon.svg',
                href: "/Geonection", // Geonection link
            },
        ],
        //          cardss : [
        //   {
        //     title: "FamiSafe🔥 👑",
        //     desc: "Parental Control Solution",
        //     img: "https://famisafe.wondershare.com/images/images-2025/famisafe/home-icon.svg",
        //     primary: true,
        //     href: "/famisafe",
        //   },
        //   {
        //     title: "FamiSafe for School",
        //     desc: "School & Parent Sync",
        //     img: "https://famisafe.wondershare.com/images/images-2025/famisafe/school-icon.svg",
        //     href: "/school",
        //   },
        //   {
        //     title: "Geonection",
        //     desc: "Realtime Location Sharing",
        //     img: "https://famisafe.wondershare.com/images/images-2025/famisafe/geonection-icon.svg",
        //     href: "/Geonection",
        //   },
        // ],
        // End products Driopdown

        // features Dropdown

        columns: [
            {
                title: "Device Activity",
                bg: "#f5f1ff",
                features: [
                    { title: "Calls & Messages", newTag: true, link: "/Call-meassage" },
                    { title: "Screen Time", newTag: true, link: "/Screen-Time" },
                    { title: "Screen Viewer", link: "/Screen-Viewer" },
                    { title: "App Rules", link: "/AppRole" },
                    { title: "One-way Audio", newTag: true, link: "/One-way-Audio" },
                    { title: "Activity Report", link: "/Activity-Report" },
                ],
            },
            {
                title: "Content Safety",
                bg: "#fff8e9",
                features: [
                    { title: "YouTube Parental Control", link: "/youtube-parental-controls" },
                    { title: "TikTok History", link: "/tiktok-history" },
                    { title: "Inappropriate Pictures", link: "/detect-suspicious-text" },
                    { title: "Social App Detection", link: "/block-websites" },
                    { title: "Web Filter", link: "/Web-Filter" },
                    { title: "Browser History", link: "/Browser-History" },
                ],
            },
            {
                title: "Location Service",
                bg: "#f1ffef",
                features: [
                    { title: "Location Tracking", link: "/Locaton-Tracking" },
                    { title: "Driving Report", link: "/Driving-Report" },
                    { title: "SOS Alert", newTag: true, link: "/Sos-Alart" },
                ],
            },
        ],
        // End features Dropdown

        // Blog Dropdown
        blogData: [
            {
                title: "Location Tracker",
                links: [
                    { label: "Mobile Tracker", href: "/Mobile-Tracking" },
                    { label: "Location Sharing", href: "/Location-Sharing" },
                    { label: "Family Tracker", href: "/Family-Tracking" },
                    { label: "Teen Driving", href: "/Teen-Driving" },
                ],
            },
            {
                title: "Screen Time",
                links: [
                    { label: "Screen Time Control", href: "/Screen-Time-Blogs" },
                    { label: "iOS Parental Control", href: "/Ios-Parental-Controller" },
                    { label: "Android Parental Control", href: "/Andriod-Parental-Controller" },
                    { label: "Desktop Control", href: "/DeskTop-Parental-Controller" },
                    { label: "Chromebook Control", href: "/ChromeBook-Controller" },
                ],
            },
            {
                title: "App Blocker",
                links: [
                    { label: "Block Games", href: "/Block-Game" },
                    { label: "Block YouTube", href: "/Block-Youtube" },
                    { label: "Block Apps", href: "/App-Blocks" },
                    { label: "Block Adult Sites", href: "/Block-Porn" },
                ],
            },
            {
                title: "Activity Monitor",
                links: [
                    { label: "Web Filtering", href: "/Web-filtering" },
                    { label: "Phone Monitoring", href: "/Phone-monitering" },
                    { label: "Teen Sexting", href: "/Teen-Sexing" },
                    { label: "Anti Bullying", href: "/Anti-Billing" },
                ],
            },
            {
                title: "Parenting Knowledge",
                links: [
                    { label: "Parenting Tips", href: "/Parenting-Tips" },
                    { label: "Teen Slang", href: "/Teen-Slang" },
                    { label: "Trending Apps", href: "/Trainding-AppRivew" },
                    { label: "ParentalApp control", href: "/Parental-App-control " },
                ],
            },
            {
                readMore: "Read More >",
                cta: "Try It Free Online ☁️",
            }
        ],
        //RESPURCE DROPDOWN 
        resourceDropdownData: {
            featuredTopics: {
                title: "Featured Topics",
                items: [
                    { label: "Balance Screen Time", href: "/Screentime-For-Kids" },
                    { label: "Digital Child Security", href: "/Internet-Safty" },
                    { label: "Block Porns", href: "/Block-Porn" },
                    { label: "Stop Sextortion", href: "/Compagin-Stops" },
                    { label: "AI Concerns Activity", href: "/Artifical-Intelligence" },
                    { label: "Stop Cyberbullying", href: "/Stop-Cyberbullying" },
                    { label: "Teen Sexting", href: "/Teen-Sexting" },
                ],
            },

            guide: {
                title: "FamiSafe Guide",
                items: [
                    { label: "User Guide", href: "/User-Guide" },
                    { label: "User Guide for School", href: "/User-Guide-For-School" },
                    { label: "Video Guide", href: "/Video-Guide" },
                    { label: "User FAQs", href: "/User-FAQS" },
                ],
            },

            explore: {
                title: "Explore",
                items: [
                    { label: "What is News", href: "/What-is-News" },
                    { label: "Parents Review", href: "/Parental-Review" },
                    { label: "Brand Campaigns", href: "/Campaigns" },
                    { label: "Media Review", href: "/Midea-Reviw" },
                    { label: "Annual Report", href: "/Annual-Report" },
                    { label: "Family Stories", href: "/Family-Stories" },

                ],
            },

            actions: {
                downloadText: "Download App",
                tryFreeText: "Try It Free Online",
                tryFreeLink: "#",
            },
        },
        // End RESPURCE DROPDOWN

        // testimonials
        testimonials: [
            {
                id: "t1",
                name: "Renée Wooldridge",
                image: 'https://i.pravatar.cc/100?img=47',
                text: "My problem was resolved and I love the new features. My grandson found a way around security to open apps. The nightmare is that he can open Google Play Store and download apps that I don't want him to have.",
            },
            {
                id: "t2",
                name: "John Gilman",
                image: 'https://i.pravatar.cc/100?img=12',
                text: "Capable porn blocker app I have experienced in my life. I also used other apps but found this one more comfortable, quick, reliable, and effective in application.",
            },
            {
                id: "t3",
                name: "Uxprjt Lattka",
                image: 'https://i.pravatar.cc/100?img=32',
                text: "Checking out my daughter’s photo gallery is an unbelievable feature. I totally love it.",
            },
            {
                id: "t4",
                name: "Maria Smith",
                image: 'https://i.pravatar.cc/100?img=26',
                text: "Checking out my daughter’s photo gallery is an unbelievable feature that this parental control app offers. I totally love it. I also use the screen time monitoring quite often.",
            },
            {
                id: "t5",
                name: "Kayela Huppman",
                image: 'https://i.pravatar.cc/100?img=28',
                text: "Great app, had it for awhile for both my kids. So glad they added in certain features to keep track of. I loved that I could keep track of where they were supposed to be at given times!",
            },
        ],
        WhatParentsAreSayingAboutFamiSafe: "What Parents Are Saying About FamiSafe",
        Realexperiences: "Real experiences from families who use it to keep their kids safe online.",
        Countries: "Countries",
        Users: "Users",
        Families: "Families",
        Subscribers: "Subscribers",
        GrowTogether: "Grow Together With the FamiSafe Community",
        JoinUsonSocialMedia: "Join Us on Social Media",
        cardses: [
            {
                title: "What's New",
                desc: "Discover smarter tools, improved features, and exciting updates that make digital parenting easier than ever.",
                gradient: "from-pink-100 via-purple-200 to-indigo-300",
                image:
                    'https://famisafe.wondershare.com/images/images-2025/index/what-new-mobile.png',
                link: "/whats-new",
            },
            {
                title: "Tutorials",
                desc: "Step-by-step guides to help parents and kids use FamiSafe effectively with friendly 24-hour online support.",
                gradient: "from-indigo-200 via-blue-200 to-purple-200",
                image:
                    'https://famisafe.wondershare.com/images/images-2025/index/tutorials-mobile.png',
                link: "/tutorials",
            },
            {
                title: "Blogs",
                desc: "Expert parenting tips and advice to help families keep kids safe online with trusted guidance.",
                gradient: "from-blue-100 via-cyan-200 to-teal-200",
                image:
                    'https://famisafe.wondershare.com/images/images-2025/index/blogs-mobile.png',
                link: "/blogs",
            },
            {
                title: "Social Media",
                social: true,
            },
        ],
        TrustedProtection: "Trusted Protection",
        FamiSafeuses: "FamiSafe uses bank-level encryption, ensuring your child's datastays fully secure and accessible only to you.",
        PrivacyPromise: "Privacy Promise",
        Zerodatacollection: "Zero data collection, secure local storage, and strict GDPR &COPPA compliance—your family’s privacy always comes first.",
        StartFamiSafeParentalControls: "Start FamiSafe Parental Controls Today",
        Trustedparents: "Trusted by parents. Built for families. Designed to make digital parenting easier.",
        // footer translations
        footerData: [
            {
                brand: {
                    logo: "https://neveragain.allstatics.com/2019/assets/icon/logo/famisafe-square.svg",
                    name: "famisafe",
                    tagline: "Creativity simplified!"
                },
            },
            {
                socialLinks: [
                    { icon: "FaFacebookF", href: "#" },
                    { icon: "FaInstagram", href: "#" },
                    { icon: "FaTwitter", href: "#" },
                    { icon: "FaYoutube", href: "#" },
                    { icon: "FaEllipsisH", href: "#" },
                ],
            },


            {
                sections: [
                    {
                        title: "Hero Products",
                        links: [
                            { label: "ReelMate AI", href: "#" },
                            { label: "Filmora", href: "#" },
                            { label: "Recoverit", href: "#" },
                            { label: "Dr.Fone", href: "#" },
                            { label: "PDFelement", href: "#" },
                            { label: "FamiSafe", href: "#" },
                            { label: "All Products", href: "#" },
                        ],
                    },
                    {
                        title: "Wondershare",
                        links: [
                            { label: "Creative Center", href: "#" },
                            { label: "About Us", href: "#" },
                            { label: "Newsroom", href: "#" },
                            { label: "Global Presence", href: "#" },
                            { label: "Founder's Speech", href: "#" },
                            { label: "Careers", href: "#" },
                            { label: "Education", href: "#" },
                        ],
                    },
                    {
                        title: "Explore AI",
                        links: [
                            { label: "AI Tools", href: "#" },
                            { label: "AI Newsroom", href: "#" },
                            { label: "Marketing", href: "#" },
                            { label: "Social Media", href: "#" },
                            { label: "Education", href: "#" },
                            { label: "Business", href: "#" },
                        ],
                    },
                    {
                        title: "Help Center",
                        links: [
                            { label: "Contact Us", href: "#" },
                            { label: "Video Community", href: "#" },
                            { label: "Support Center", href: "#" },
                            { label: "Account", href: "#" },
                        ],
                    },
                ],
            },
            {
                bottomLinks: [
                    { label: "Terms and Conditions", href: "#" },
                    { label: "Privacy", href: "#" },
                    { label: "Terms of Use", href: "#" },
                    { label: "Cookie Preferences", href: "#" },
                    { label: "Refund Policy", href: "#" },
                    { label: "Uninstall", href: "#" },
                ],
            },
            {
                language: "English",
                copyright: "© 2025 Wondershare. All rights reserved."
            }
        ],
        // footer translations end
        // {/*For School Page Translations*/}
        FamiSafeKeeps: "FamiSafe Keeps Students Safe in The Digital Age",
        MoniterProtect: "Monitor | Protect | Alert",
        // for School
        cards: [
            {
                title: "Distraction",
                desc: "When there are all kinds of temptations of digital devices around, you will find that students may find it difficult to concentrate in class",
                bg: "bg-[#E9F8FD]",
                img: 'https://famisafe.wondershare.com/images/images-2021/website-2021/school-pic-1.png',
            },
            {
                title: "Cyberbullying",
                desc: "Cyberbullying often occurs on campus. If cyberbullying incidents can be monitored in time, the loss can be stopped in time",
                bg: "bg-[#FFF1EB]",
                img: 'https://famisafe.wondershare.com/images/images-2021/website-2021/school-pic-2.png',
            },
            {
                title: "Addiction",
                desc: "Staying up late to watch dramas, watching videos, playing games... Addicted to the internet, this is the life many students now having",
                bg: "bg-[#F4F3FF]",
                img: 'https://famisafe.wondershare.com/images/images-2021/website-2021/school-pic-3.png',
            },
            {
                title: "Cheating",
                desc: "In the convenient digital age, plagiarism has become easier and more frequent, so educators inevitably worry more about the quality of learning and the possibility of cheating",
                bg: "bg-[#EFFFF9]",
                img: 'https://famisafe.wondershare.com/images/images-2021/website-2021/school-pic-4.png',
            },
        ],
        Technologyinschool: "Technology in school is helpful, but also challenging",
        FamiSafeprotectsall: "FamiSafe protects all students in a more efficient way",
        featuress: [
            {
                title: "Web Filter",
                icon: ShieldCheck,
                color: "bg-orange-500",
                cardBg: "bg-[#FFF1EB]",
                points: [
                    "Keep Search Safe With Website Filter",
                    "Block websites by category",
                    "Block or allow websites by adding exceptions",
                ],
                pointColor: "bg-orange-500",
            },
            {
                title: "Multi - User, Multi - Device",
                icon: Users,
                color: "bg-purple-500",
                cardBg: "bg-[#F4F3FF]",
                points: [
                    "Provide a variety of subscription options",
                    "Manage multiple students at the same time",
                    "View and aggregate student app usage data",
                ],
                pointColor: "bg-purple-500",
            },
            {
                title: "Smart Dashboard",
                icon: BarChart3,
                color: "bg-emerald-400",
                cardBg: "bg-[#EFFFF9]",
                points: [
                    "Aggregate all student information",
                    "Unified management of student devices",
                    "Quickly view student today's devices usage",
                ],
                pointColor: "bg-emerald-400",
            },
        ],
        WhyisFamiSafe: "Why is FamiSafe the best choice for your school?",
        ScreenSupervision: "Screen Supervision",
        Asphoneortablet: "As phone or tablet becomes a part of kid's life, Teachers should consider helping students strike a balance, putting a stop to study distraction or sleep deprivation.",
        AppBlocker: "App Blocker",
        Studentsneedtofocus: "Students need to focus on their learning, but some apps that are not related to learning always distract students.",
        OnlineSafety: "Online Safety",
        Theonlineworld: "The online world is exciting and interesting, but there are also hidden security risks such as cyberbullying, pornography, and cyber predators. Students need guidance and help from teachers.",
        TheMostReliable: "The Most Reliable Parental Control App",
        /// FAQs Section
        faqs: [
            {
                question: "How to monitor text messages on a kid's phone?",
                answer:
                    "Parents can monitor text messages by using parental control apps that provide message tracking features while respecting privacy laws.",
            },
            {
                question: "How can I monitor my child's phone calls?",
                answer:
                    "You can monitor call logs, contacts, and call duration using trusted parental monitoring tools designed for family safety.",
            },
            {
                question:
                    "Is it possible for me to read my child's text messages on my iPhone?",
                answer:
                    "Yes, with proper parental control solutions and permissions, parents can view message activity on their child’s device.",
            },
            {
                question:
                    "Is it legal to view calls and messages from a child's phone?",
                answer:
                    "In most regions, parents or legal guardians are allowed to monitor a minor’s device, but local laws should always be reviewed.",
            },
        ],
        tools: [
            { title: "Screen Time", icon: FaClock },
            { title: "Activity Report", icon: FaChartBar },
            { title: "YouTube App Control", icon: FaYoutube },
            { title: "TikTok History", icon: FaTiktok },
            { title: "Inappropriate Pictures", icon: FaImage },
            { title: "Explicit Content Detection", icon: FaExclamationCircle },
            { title: "App Block", icon: FaLock },
            { title: "Browser History", icon: FaHistory },
            { title: "Safe Search", icon: FaSearch },
            { title: "Web Filter", icon: FaFilter },
            { title: "Live Location", icon: FaMapMarkerAlt },
            { title: "Location History", icon: FaMap },
            { title: "Geofence", icon: FaMapMarkerAlt },
            { title: "Deriving Report", icon: FaCar }
        ],
        platforms: [
            {
                name: "Windows",
                icon: FaWindows,
                color: "text-blue-600",
                href: "#windows",
            },
            {
                name: "macOS",
                icon: FaApple,
                color: "text-gray-800",
                href: "#macos",
            },
            {
                name: "Online",
                icon: FaGlobe,
                color: "text-green-600",
                href: "#online",
            },
            {
                name: "iPhone/iPad",
                icon: FaApple,
                color: "text-black",
                href: "#ios",
            },
            {
                name: "Android",
                icon: FaAndroid,
                color: "text-green-500",
                href: "#android",
            },
            {
                name: "Chrome",
                icon: FaChrome,
                color: "text-yellow-500",
                href: "#chrome",
            },
        ],

        FamiSafeNewFeature: "FamiSafe New Feature",
        CallsMessages: "Calls & Messages",
        WithCallsMessagesparents: "With Calls & Messages, parents can monitor their child's phone usage, track messages and calls, and detect inappropriate content, empowering them to proactively protect children from potential online dangers.",
        FamiSafeBestAppto: "FamiSafe — Best App to Track Calls and Messages for Parents",
        CallHistoryMonitoring: "Call History Monitoring",
        Effortlesslymonitorchildren: "Effortlessly monitor children's phone call activities, with a primary focus on displaying detailed call logs on kids’ devices.",
        Identifysuspicious: "Identify suspicious calls and messages with our advanced detection system.",
        TextMessageMonitoring: "Text Message Monitoring",
        Easilymonitorthechild: "Easily monitor the child's incoming and outgoing messages in real-time or on a scheduled basis.",
        Automaticallyrefresh: "Automatically refresh (every hour) or manually refresh to view text messages on the child's device.",
        Checkandviewthecontacts: "Check and view the contacts for sending and receiving the messages, contact numbers, and the specific text content of the messages.",
        Detectsensitive: "Detect sensitive content in messages and offer quick actions for the identified keywords.",
        SuspiciousContentDetection: "Suspicious Content Detection",
        Safeguardyourchildren: "Safeguard your children from online threats by monitoring sensitive content in their incoming and outgoing messages.",
        Detectandhighlight: "Detect and highlight suspicious keywords in messages on the child's mobile device.",
        Combinemessage: "Combine message content display with sensitive word detection to enhance parental supervision.",
        Protectyour: "Protect your loved ones from online dangers and cyberbullying.",
        HowtoTrack: "How to Track Calls and Messages on Children's Devices?",
        Step1InstallFamiSafe: "Step 1: Install FamiSafe",
        DownloadFamiSafeApp: "Download FamiSafe App from Google Play Store or App Store on the parent's phone.",
        StepRegisteranAccount: "Step 2: Register an Account",
        Register: " Register a Wondershare ID or log in with Apple, Google, or Facebook ID.",
        StepConnect: "Step 3: Connect Kid's Device",
        Scanthe: "Scan the QR code to pair the kid’s device automatically.",
        ForMoreDetails: "For More Details",
        TryItFreeOnline: "Try It Free Online",
        DownloadFamiSafeon: "FamiSafe ከዚህ በታች ያውርዱ።",
        FindMoreParental: "Find More Parental Control Tools to Safeguard Your Kids Online",
        MoreTipsabout: "More Tips about Parental Control and Children's Growth",
        BestCallBlocker: "Best Call Blocker Apps for Android and iOS",
        TopBest: "Top 8 Best Message and Call Trackers",
        TopWaystoTrack: "Top 3 Ways to Track Messages and Calls for Free ",
        HowToCheck: "How To Check Call History on iPhone",
        OmegleforKids: "Omegle for Kids: Is Omegle Safe?",
        BestTextMessage: "Best 14 Text Message Tracking Apps on Kid’s iPhone",


        /// Screen Time Section
        ScreenTimeControl: "Screen Time Control",
        Stopendlessscreen: "Stop endless screen scrolling, start healthy habits.Track your kid's screen time usage in real time, setsdaily limits & bedtime schedules, and locks any device when it’s time for study or family moments.",

        awards: [
            {
                title: "The National Parenting Center",
                subtitle: "WINNER",
                image: "https://famisafe.wondershare.com/frontpage/icon-honour-1.png",
            },
            {
                title: "The National Parenting Center",
                subtitle: "WINNER",
                image: "https://famisafe.wondershare.com/frontpage/icon-honour-2.png",
            },
            {
                title: "Made For Mums Awards 2021",
                subtitle: "BRONZE",
                image: "https://famisafe.wondershare.com/frontpage/icon-honour-3.png",
            },
            {
                title: "Mom's Choice Awards",
                subtitle: "HONORING EXCELLENCE",
                image: "https://famisafe.wondershare.com/frontpage/icon-honour-5.png",
            },
            {
                title: "Parents’ Picks Awards 2024",
                subtitle: "WINNER",
                image: "https://famisafe.wondershare.com/frontpage/icon-honour-4.png",
            },
            {
                title: "The National Parenting Center",
                subtitle: "SEAL OF APPROVAL",
                image: "https://famisafe.wondershare.com/frontpage/icon-honour-7.png",
            },
        ],
        awardss: [
            {
                title: "The National Parenting Center",
                subtitle: "WINNER",
                image: "https://famisafe.wondershare.com/frontpage/icon-honour-1.png",
            },
            {
                title: "The National Parenting Center",
                subtitle: "WINNER",
                image: "https://famisafe.wondershare.com/frontpage/icon-honour-2.png",
            },
            {
                title: "Made For Mums Awards 2021",
                subtitle: "BRONZE",
                image: "https://famisafe.wondershare.com/frontpage/icon-honour-3.png",
            },
            {
                title: "Mom's Choice Awards",
                subtitle: "HONORING EXCELLENCE",
                image: "https://famisafe.wondershare.com/frontpage/icon-honour-5.png",
            },
            {
                title: "Parents’ Picks Awards 2024",
                subtitle: "WINNER",
                image: "https://famisafe.wondershare.com/frontpage/icon-honour-4.png",
            },
            {
                title: "The National Parenting Center",
                subtitle: "SEAL OF APPROVAL",
                image: "https://famisafe.wondershare.com/frontpage/icon-honour-7.png",
            },
        ],
        features: [
            {
                title: "Auto-Lock for Study Time",
                desc: "Keep kids focused during homework time by auto-locking distracting apps or games. Set up specific hours when devices are locked to support undisturbed study sessions.",
                img: "https://famisafe.wondershare.com/images/images-2025/screen-time/auto-lock-for-study-time.png",
            },
            {
                title: "Wind-Down at Bedtime",
                desc: "Block screen access at night to help kids sleep better and wake up refreshed. Avoid blue light exposure and reduce late-night scrolling with bedtime schedules.",
                img: "https://famisafe.wondershare.com/images/images-2025/screen-time/wind-down-at-bedtime.png",
            },
            {
                title: "Bring Back Family Time",
                desc: "Limit phone use during meals or family activities to promote real-world connection. Encourage meaningful conversations without digital distractions at the dinner table.",
                img: "https://famisafe.wondershare.com/images/images-2025/screen-time/bring-back-family-time.png",
            },
            {
                title: "Time Reward for Healthy Habits",
                desc: "Use screen time extensions as a reward for completing chores or good behavior. Turn digital access into positive reinforcement and motivate daily responsibility.",
                img: "https://famisafe.wondershare.com/images/images-2025/screen-time/time-reward-for-healthy-habits.png",
            },
        ],

        STEPS: [
            {
                step: "Step 1",
                title: "Install FamiSafe",
                description:
                    "Download FamiSafe App from Google Play Store or App Store on the parent's phone.",
                bg: "bg-[#E8FFFA]",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/installation-step1-download.png",
            },
            {
                step: "Step 2",
                title: "Register an Account",
                description:
                    "Register an account for FamiSafe or log in with an Apple, Google, and Facebook ID.",
                bg: "bg-[#FFF4E3]",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/installation-step2-register-duplicate.png",
            },
            {
                step: "Step 3",
                title: "Connect Kid's Device",
                description:
                    "Install the FamiSafe app on your kid's device. Then, input the binding code or scan the QR code to connect both devices.",
                bg: "bg-[#F1ECFF]",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/installation-step3-connect-duplicate.png",
            },
        ],
        TESTIMONIALS: [
            {
                name: "Kayla Huppman",
                text:
                    "Great app for both my kids. I love the added features that help me track their activity and know where they should be at certain times!",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/testimonial-background-2.jpg",
            },
            {
                name: "Amanda Lewis",
                text:
                    "FamiSafe gives me peace of mind knowing my children are safe online. The screen time control and location tracking are extremely helpful.",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/testimonial-background-1.jpg",
            },
            {
                name: "Rachel Moore",
                text:
                    "With FamiSafe, my kids are learning to manage their phone use better. The app helps set limits and encourages them to ask for permission.",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/testimonial-background-3.jpg",
            },
        ],
        CheckScreenTimeUsage: "Check Screen Time Usage",
        LimitScreenTimeonDevices: "Limit Screen Time on Devices",
        SetSmartTimeSchedules: "Set Smart Time Schedules",
        SetSmartTimeSchedules: "Set Smart Time Schedules",
        ScreenTimeSolutionsforParentalControl: "Screen Time Solutions for Parental Control",
        HowtoLimitScreenTimeforKids: "How to Limit Screen Time for Kids?",
        WhatParentsAreSaying: "What Parents Are Saying ?",
        Leavedigitalparenting: "Leave digital parenting challenges behind—enjoy true peace of mind, anytime, anywhere.",
        EmpowerYoutoSupervise: "Empower You to Supervise <br /> Kid&apos;s Screen Time",
        ///*================== Screen-Viewer ==================*/}
        KeepTrackofYour: "Keep Track of Your Child's Phone Activity Using Screen Viewer for Monitoring",
        GetRealTimeScreenshots: "Get Real-Time Screenshots",
        FamiSafeScreenViewers: "FamiSafe-Screen Viewer is designed to provide a clear view of your child's online activity by taking snapshots of their screen.",
        Getinstantscreenshots: "Get instant screenshots of your child’s devices",
        Monitorchildrenbehavior: "Monitor children’s behavior and ensure their safety.",
        Seizethemomentsand: "Seize the moments and engage with your children further.",
        TakeScheduleTimedScreenshots: "Take Schedule-Timed Screenshots",
        Shareyourchildscreenconten: "Share your child's screen content on your phone to effortlessly monitor the apps and games they engage with.",
        Thescreenshotscanalsoetaken: "The screenshots can also be taken through automated timed intervals (every 2，5, 10, 15, 20, 25, and 30 minutes).",
        Youcanselecttheintervalfor: "You can select the interval for automated screenshots while your child's device is in use.",
        Analyzeyourchilddigital: "Analyze your child's digital interactions and nurture their growth through capturing screenshots.",

        DetectExplicitandPornographic: "Detect Explicit and Pornographic Content within Images",
        FamiSafeScreenViewerafeguards: "FamiSafe-Screen Viewer safeguards your children from harmful content.",
        Whendetectinginappropriate: "When detecting inappropriate images, parents will be alerted on their end.",
        Byenablingthesuspicious: "By enabling the suspicious filter option, all suspicious images can be displayed in the form of a gallery.",
        Enhanceprotectionandensure: "Enhance protection and ensure your children stay protected from potential risks.",

        HowtoCaptureScreenshots: "How to Capture Screenshots on Children's Devices?",
        Step1InstallFamiSafe: "Step 1: Install FamiSafe",
        DownloadamiSafeApp: "Download FamiSafe App from Google Play Store or App Store on the parent's phone.",
        Step2RegisternAccount: "Step 2: Register an Account",
        RegisteraWondershareIDfor: "Register a Wondershare ID for FamiSafe or log in with an Apple, Google, and Facebook ID.",
        Step3ConnectKidDevice: "Step 3: Connect Kid's Device",
        Useyourkidphone: "Use your kid's phone to scan the QR code on FamiSafe in parent's phone to install Fammy, and the pairing will complete automatically.",
        ForMoreDetails: "For More Details >>",

        MoreTipsabout: "More Tips about Parental Control and Children's Growth",
        BestScreen: "8 Best Screen Viewer Apps for Parents in 2025",
        FreeScreeShare: "Free Scree Share App for Parental Control",
        QuickandEasyWays: "Quick and Easy Ways to Bypass Google Family Link Block",
        EasyStepstoInstall: "Easy Steps to Install and Use YouTube Kids on Amazon Fire",
        Leading5Private: "Leading 5 Private Screenshot Apps for Parents",
        FamilyLinkNotWorking: "Family Link Not Working: Quick & Proven Fix Solutions",
        faqsScreenviwer: [
            {
                question: "How much screen time should kids get?",
                answer:
                    "1. For kids 2 to 4 years old, they should spend screen time less than an hour per day. 2. For children 5-18 years old, parents should try to set consistent screen time limits on the use of kids' any digital devices in two hours or less per day.",

            },
            {
                question: "How can I take screenshots of my child's devices on iPhone?",
                answer:
                    "Here's how to take screenshots of your child's devices on iPhone using FamiSafe 1. Create a FamiSafe account. 2. Install FamiSafe app on parent’s and kid’s phones and tie up two devices. 3. Enter Screen Viewer feature on Parents' end. 4. Then you can get instant and shedule-timed screenshots from children’s devices. 5. If there is inappropriate content in the child's screenshots, it will be flagged. ",
            },
            {
                question:
                    "Should I monitor children's screen?",
                answer:
                    "Consider your child's age and digital behavior when deciding whether to monitor devices. Then, if you choose to monitor, talk to them about it and explain why it's important.",
            },
            {
                question:
                    "How can I take screenshots of my child's devices on Android?",
                answer:
                    "Here's how to take screenshots of your child's devices on Android using FamiSafe 1. Create a FamiSafe account. 2. Install FamiSafe app on parent’s and kid’s phones and tie up two devices. 3. Enter screen Viewer feature on Parents' end. 4. Then you can get instant and shedule-timed screenshots from children’s devices. 5. If there is inappropriate content in the child's screenshots, it will be flagged.",
            },
        ],

        /// Appp Roule
        AppBlocker: "App Blocker",
        Instantlybockdistracting: "Instantly bock distracting apps, games, and social media on kids’ devices, schedule focus times, and help your kids build healthy digital habits.",
        EmpowerYoutoControl: "Empower You to Control Kid's App Usage",
        Leaveappdistractions: "Leave app distractions behind—enjoy true peace of mind, anytime, anywhere.",

        BlockAnyAppInstantly: "Block Any App Instantly",
        Takeinstantcontrolof: "Take instant control of inappropriate apps across all your kids' devices.",
        Onetapblockingfor: "One-tap blocking for games, social media, or entertainment.",
        Blockindividualapps: "Block individual apps or entire categories easily.",
        SetappstoBlocked: "Set apps to Blocked, Limited, or Allowed status.",

        ScheduleAppBlocking: "Schedule App Blocking Times",
        Createautomaticapp: "Create automatic app rules to limit screen time for kids.",
        Autoblocappsduring: "Auto-block apps during homework, bedtime, or meals.",
        Applyifferentrules: "Apply different rules for weekdays and weekends.",
        Customizetheistf: "Customize the list of blocked apps for specific schedules.",

        SetAgeBasedFilters: "Set Age Based Filters",
        Protectkidsautomatically: "Protect kids automatically by filtering apps inappropriate for their age.",
        Filterappsbyageratings: "Filter apps by age ratings (4+, 12+, 17+).",
        Autolocnewlydownloaded: "Auto-block newly downloaded apps for review.",
        Notifyhenkidsrequest: "Notify when kids request access to blocked apps.",

        AppBlockingcenariosParents: "App Blocking Scenarios Parents Love",
        featuresds: [
            {
                title: "Pause Social Apps & Games",
                desc: "Need a tech timeout? Instantly freeze TikTok, Instagram, or even game apps with a single tap—perfect for family talks, chores, or when you just need a little peace and quiet.",
                img: "https://famisafe.wondershare.com/images/images-2025/app-blocker/social-pause.png",
            },
            {
                title: "No more Homework bettle",
                desc: " Block game apps and fun apps during homework time so your kid can really focus and finish faster. Less stress, better grades, and happier evenings for everyone. ",
                img: "https://famisafe.wondershare.com/images/images-2025/app-blocker/homework-block.png",
            },
            {
                title: "Family Dinner P hone pouse",
                desc: " Set app limits so everyone’s present at the table, not lost in their screens. Enjoy real conversation and connection every mealtime.",
                img: "https://famisafe.wondershare.com/images/images-2025/app-blocker/homework-block.png",
            },
            {
                title: "Light out screen  Freeze",
                desc: " Block game apps and fun apps during homework time so your kid can really focus and finish faster. Less stress, better grades, and happier evenings for everyone. ",
                img: "	https://famisafe.wondershare.com/images/images-2025/app-blocker/homework-block.png",
            },
        ],
        HowtoBlockApps: "How to Block Apps for Kids?",
        sliides: [
            {
                title: "Location Tracking",
                desc: "Track your child's real-time location and movement history.",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/location-tracking.png",
            },
            {
                title: "Driving Report",
                desc: "Monitor driving speed, routes, and driving behavior.",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/driving-report.png",
            },
            {
                title: "SOS Alert",
                desc: "Get instant SOS alerts with precise location information.",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/sos-alert.png",
            },
            {
                title: "Screen Time Control",
                desc: "Set daily screen time limits for healthier phone usage.",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/screen-time-control.png",
            },
            {
                title: "App Blocker",
                desc: "Block distracting apps and games during focus time.",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/app-blocker.png",
            },
            {
                title: "Web Filter",
                desc: "Protect kids from harmful or inappropriate websites.",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/web-filter.png",
            },
            {
                title: "YouTube Monitoring",
                desc: "Monitor YouTube watch history and searched content.",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/youtube-monitoring.png",
            },
            {
                title: "Social Media Monitoring",
                desc: "Track social media activities across popular platforms.",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/social-media-monitoring.png",
            },
            {
                title: "App Usage Report",
                desc: "View detailed reports of app usage time.",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/app-usage-report.png",
            },
            {
                title: "Screen Viewer",
                desc: "See your child's phone screen in real time.",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/screen-viewer.png",
            },
            {
                title: "Suspicious Text Detection",
                desc: "Detect risky or suspicious keywords in messages.",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/suspicious-text.png",
            },
            {
                title: "Geofencing",
                desc: "Set safe zones and receive alerts when kids enter or leave.",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/geofencing.png",
            },
            {
                title: "Activity Timeline",
                desc: "Review daily activity timelines for better supervision.",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/activity-timeline.png",
            },
            {
                title: "Content Filtering",
                desc: "Automatically filter age-inappropriate content.",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/content-filtering.png",
            },
            {
                title: "Instant Alerts",
                desc: "Receive instant alerts for risky behavior.",
                image: "https://famisafe.wondershare.com/images/images-2025/screen-time/instant-alerts.png",
            },
        ],
        tips: [
            { text: "Free Apps to Limit Screen Time on Android & iOS", link: "#" },
            { text: "5 Apps to Control Noble Screen Time", link: "#" },
            { text: "How to Check Screen Time on Samsung?", link: "#" },
            { text: "How to Check Screen Time on iPhone?", link: "#" },
            { text: "How to Check Screen Time on Huawei?", link: "#" },
            { text: "How to Check Screen Time on Xiaomi?", link: "#" },
        ],
        faqds: [
            {
                question: "Are There Free Apps for Blocking Apps?",
                answer:
                    "FamiSafe App Blocker offers a free trial, and other free tools exist, but only premium blockers give parents remote control, schedules, and tamper alerts parents need.",
            },
            {
                question: "What Is the Best App Blocker for Studying?",
                answer:
                    "Reviewers rank FamiSafe alongside AppBlock because its schedules and alert system keep students focused without harsh lockouts.",
            },
            {
                question:
                    "Can You Block Apps on iPhone remotely?",
                answer:
                    "Yes, FamiSafe allows parents to effectively block distracting apps on iPhone. Our solution works with iOS restrictions to provide comprehensive control over which applications your child can access and when.",
            },
            {
                question:
                    "How to Disable App Blocker?",
                answer:
                    "Open FamiSafe parent app, choose child device, tap App Blocker, switch Instant Block off and delete schedules. On iPhone disable Screen-Time limits; on Android remove Digital Wellbeing timers or uninstall any third-party blocker.",
            },
        ],
        ///One-way-Audio
        OneWayAudio: "One-Way Audio",
        Experiencetheultimate: "Experience the ultimate peace of mind with our cutting-edge sound locator app. Effortlessly listen to sounds around your children on their Android devices, ensuring their safety and well-being like never before.",

        KeepTrackofYourChild: "Keep Track of Your Child's Phone Activity Using Screen Viewer for Monitoring",
        GetRealTimeScreenshots: "Get Real-Time Screenshots",
        FamiSafeScreenVieweris: "FamiSafe-Screen Viewer is designed to provide a clear view of your child's online activity by taking snapshots of their screen.",
        Getnstantscreenshots: "Get instant screenshots of your child’s devices.",
        Monitorchildrens: "Monitor children’s behavior and ensure their safety.",
        Seizethemomentsand: "Seize the moments and engage with your children further.",

        PreventPotentially: "Prevent Potentially Dangerous Situations",
        Enhancechildsafetyand: "Enhance child safety and foster stronger parent-child relationships through listening from a distance device",
        Parentscanuicklylisten: "Parent's can quickly listen to their children's surrounding environment by activating the One-Way audio feature when they are unresponsive to calls, unable to speak, or in unknown places.",
        OneWayudiosafeguardschildren: "One-Way audio safeguards children's physical and mental well-being by monitoring sound and around on the child’s end, effectively preventing the risks of bullying and exposure to negative influences.",
        Ournewfeaturtrengthensarent: "Our new feature strengthens parent-child relationships by promoting attentive and caring parenting, fostering feelings of love and care in children, and building trust between parents and children.",

        Howtoistentoid: "How to Listen to Kid's Surrounding Voice?",
        appStores: [
            {
                name: "App Store",
                href: "https://www.apple.com/app-store/",
                icon: "/assets/images/icons/iphone.png",
            },
            {
                name: "Google Play",
                href: "https://play.google.com/store",
                icon: "/assets/images/icons/google.png",
            },
            {
                name: "Amazon Appstore",
                href: "https://www.amazon.com/gp/mas/get/android",
                icon: "/assets/images/icons/aman.png",
            },
            {
                name: "macOS",
                href: "https://www.apple.com/macos/",
                icon: "/assets/images/icons/mac.png",
            },
            {
                name: "Windows",
                href: "https://www.microsoft.com/windows",
                icon: "/assets/images/icons/download.png",
            },
            {
                name: "Chrome Store",
                href: "https://chromewebstore.google.com/",
                icon: "/assets/images/icons/chrome.jpg",
            },
        ],
        MoreTipsabout: "More Tips about Parental Control and Children's Growth",
        WhatIsLive: "What Is Live Listen on iPhone and Android",
        Top6BestAI: "Top 6 Best AI Parental Control Apps Review 2025",
        Best5Android: "5 Best Android Remote Listening Apps",
        WhySomeoneIs: "Why Someone Is Not Answering Phone Calls and How to Handle It",
        GoogleFamilyLink: "Google Family Link App Review: Practical User Testing",
        FamilyLinkNotWorking: "Family Link Not Working: Quick & Proven Fix Solutions",
        faqsq: [
            {
                question: "Is there a remote listening app?",
                answer:
                    "FamiSafe One-Way Audio allows you to hear all the surrounding sounds from your remote device. It is a reliable tool for modern parents to listen to their kid’s surroundings in real-time.",
            },
            {
                question: "How to enable the One Way Audio feature on the parent’s device?",
                answer: "Here's how to enable One Way Audio using FamiSafe 1. Create a FamiSafe account. 2. Install FamiSafe app on parent’s and kid’s phones and tie up two devices. 3. Enter OneWay Audio from Features and Phone Activity of the sidebar on the right where all the functions are listed. 4. Then you could tap to record the sound around the kid. 5. After finishing the recording, you can open, rename, delete, and share all the recorded files.",
            },
            {
                question:
                    "Can you listen through your child's phone?",
                answer:
                    "Yes, you can use your smartphone as a listening device by installing the FamiSafe app. Through using the One-Way Audio feature, you can effortlessly listen to sound around your children.",
            },
            {
                question:
                    "Can the child's end disable the One-Way Audio feature?",
                answer: "One-Way Audio feature can be disabled on a child's Android devices on the 'Account Info' page. After disabling the feature, parents will no longer be able to listen to the surroundings of the child's end.",
            },
        ],

        /// Activity Reports
        ActivityReport: "Activity Report",
        Monitoringkidsphones: "Monitoring kids' phones to know their daily phone activities. Check which apps kids use mostly and the apps they install or uninstall.",
        GetTheDetailof: "Get The Details of Device Online Activity",
        KeepAnEyeonDaily: "Keep An Eye on Daily Online Life",
        MakeYourOwnJudgemen: "Make Your Own Judgement Whether Kids Are Addicted to Phone.",
        Viewyourkids: "View your kids' daily phone activity.",
        Learnwhenandwhich: "Learn when and which apps have been used.",
        Knowwhetheryourkids: "Know whether your kids are addicted to some apps.",

        GetFullDetailsof: "Get Full Details of Kids' Daily Phone Usage",
        Getridofthetrouble: "Get rid of the trouble of confirming phone usage details with your kids.",
        Getthemostreliable: "Get the most reliable phone usage details by using Activity Report.",
        Bestwaytomonitor: "Best way to monitor teenager iPhone.",
        Reviewwhichvideos: "Review which videos or sites your kids visited.",


        GetKidsDeviceApplication: "Get Kids' Device Application Updates",
        Keepuptodatewiththe: "Keep up-to-date with the latest apps that kids love and remind them of potential dangers.",
        Graspthemostrecently: "Grasp the most recently installed/uninstalled apps.",
        Switchdatestoviewkids: "Switch dates to view kids' recent online preferences.",
        Checkyourkidsdevices: "Check if your kids' devices are invaded by malware.",
        HowtoChecktheActivity: "How to Check the Activity Report ?",

        MoreTipsforMonitoring: "More Tips for Monitoring Phone Activity",
        To9BestFree: "[2022] Top 9 Best Free Parental Control App for Android.",
        BestiOSParentalControl: " Best iOS Parental Control Apps for iPad&iPhone in 2022.",
        HowtoUseActivityMonitor: "How to Use Activity Monitor on Your Mac?",
        HowtoSeeWhatMyKidisDoing: "How to See What My Kid is Doing on His/Her Phone?",
        Top10BestFreePhoneMonitoringApps: "Top 10 Best Free Phone Monitoring Apps for Android and iPhone.",

        faqxs: [
            {
                question: "1. How to monitor online activity on kids' smartphones?",
                answer:
                    "Open your Google play store and search the FamiSafe parental control app, you will get it. Install it on all devices you want to monitor ( you will be able to monitor five devices in one purse).Open a membership account with the app.Connect all devices to parents' devices and start monitoring.After the successful setup, you will be able to check kids' activity reports, restrict your kids access to inappropriate websites and apps lock games and other apps during breaks and study time.",
            },
            {
                question: "2. What are the symptoms of cell phone addiction?",
                answer: "Here are some signs that may lead you to think that your kid is addicted to the cell phone. 1) Your kid is angry most of the time 2) Facing depression 3) Looks tensed 4) The kid is mostly irritated and snaps over small things 5) Looks or behaves restless 6) Sleepness is another symptom you must not ignore 7) If your kid is unable to stop using his phone even during important events, eg., a funeral, etc. 8) Sudden lack of communication and aloofness 9) Neglecting dinner time with family or daily chores 10) Sleeping at odd hours.",
            },
            {
                question:
                    "3. What are the most popular apps among kids?",
                answer:
                    "The most popular iPhone and Android phone apps for kids are : 1) YouTube 2) Instagram 3) WhatsApp 4) Spin Safe Browser 5) Snapchat 6) Facebook 7) Android Messages (text) 8) YouTube Kids 9) Chrome 10) Netflix 11) Facebook Messenger.",
            },
            {
                question:
                    "4. How many hours should kids spend on the phone a day?",
                answer:
                    "Every child is different. Even experts could not provide a definite answer about how much time the kids should spend on digital devices. We recommend that 1-2 hours on school days is a reasonable amount. While on weekends or holidays, perhaps 3-4 hours is a reasonable amount. Most important of all, parents should set the kids up for a healthy relationship with technology.",
            },
        ],
        /// you tube control app
        YouTubeParentalControl: "YouTube Parental Control",
        Herearethecompletel: "Here are the completely foolproof ways to set parental controls on kids' YouTube of different devices.",
        TableofContents: "Table of Contents",
        youtubeParentalLinks: [
            {
                title: "What Parents Should Know About YouTube",
                path: "/parents-should-know-youtube",
            },
            {
                title: "YouTube's Restricted Mode",
                path: "/youtube-restricted-mode",
            },
            {
                title: "FamiSafe YouTube Parental Control",
                path: "/famisafe-youtube-parental-control",
            },
            {
                title: "YouTube Parental Controls Tips and Tricks",
                path: "/youtube-parental-control-tips",
            },
            {
                title: "Google Play or iOS Setting for YouTube Parental Control",
                path: "/youtube-parental-control-settings",
            },
            {
                title: "Turn to YouTube Kids",
                path: "/youtube-kids",
            },
            {
                title: "Turn on Google SafeSearch",
                path: "/google-safesearch",
            },
        ],
        WhatParentsShould: "What Parents Should Know About YouTube",
        youtubeParentalCards: [
            {
                title: "Dangerous Challenge & Viral Videos",
                description:
                    "There are lots of dangerous and viral videos on YouTube and most of them are shared quickly. One YouTuber may post a video of themselves doing something unusual like eating very spicy food or jumping in a river before you know it. The video gets many views and likes, more and more people want to join in and share their videos.",
                bgColor: "bg-[#E0F8F6]",
                iconColor: "bg-[#00D1C1]",
            },
            {
                title: "Age-inappropriate Video Content",
                description:
                    "YouTube is the biggest video-sharing website in the world, sometimes content does not violate their policies, but it may not be appropriate for your kids. Even though YouTube has their own team to review the videos or has mechanisms to remove explicit and harmful content, some offensive or disturbing content can still slip through.",
                bgColor: "bg-[#F3EBFF]",
                iconColor: "bg-[#8C5EFF]",
            },
            {
                title: "YouTube Addiction",
                description:
                    "Kids are the most vulnerable to YouTube addiction due to its cool features and an endless supply of content. According to research, 28% of teens spend more than an hour at a time on YouTube. 16% of teens spend between one and two hours on the site and 12.5% of teens watch more than two hours of videos at a time.",
                bgColor: "bg-[#FFF3EE]",
                iconColor: "bg-[#FF6B4C]",
            },
            {
                title: "Inadequate Supervision and Control",
                description:
                    "Cyberbullying on social media can happen to anyone at any time as social media is the most common platform. The Ditch the Label finds that 92% of young people use YouTube and 10% of them have experienced cyberbullying on it.",
                bgColor: "bg-[#FFF9E6]",
                iconColor: "bg-[#FFB822]",
            },
        ],
        restrictedModeContent: {
            browser: {
                title: "1.1 Turn on Restricted Mode on Browser",
                steps: [
                    "Access the YouTube website and sign in to your account.",
                    "Click the account profile at the top right.",
                    "Toggle on Restricted Mode option.",
                ],
            },
            app: {
                title: "1.2 Turn on Restricted Mode on App",
                steps: [
                    "Launch YouTube app and tap on the account profile.",
                    "Find and tap on Settings at the end of the list.",
                    "Click on General then turn on Restricted Mode.",
                ],
            },
            image: {
                src: "https://famisafe.wondershare.com/images/images-2020/new/subject/youtube-parental-controls-restricted-mode.png",
                alt: "Restricted Mode Guide",
            },
        },
        PartHowtoUseYouTubes: "Part 1: How to Use YouTube's ‘Restricted’ Mode to Set YouTube Parental Controls?",
        IncorporatedbyGoogleYouTubeR: "Incorporated by Google, YouTube Restricted Mode is a brilliant tool that helps users filter out any disturbing content from their accounts. When Restricted Mode is activated, clips containing any inappropriate materials get screened out by the algorithm and blocked. Parents can better control the content children see. Although it is not 100% foolproof, it ensures a cleaner, safer, and controlled YouTube viewing experience for families. Find out how to utilize Restricted Mode to set YouTube Parental control.",
        restrictedModeFamilyContent: {
            infoCard: {
                title: "ለቤተሰብዎ የRestricted Mode መቆጣጠሪያ",
                description:
                    "ወላጆች Family Link በመጠቀም በልጅ መለያ ላይ Restricted Mode ማብራት ይችላሉ። ይህ ሁኔታ ከተነቃ በኋላ ልጆች በሚገቡባቸው ሁሉም መሣሪያዎች ላይ ይህን ቅንብር ማጥፋት አይችሉም። ነገር ግን 13 ዓመት ሲሞላቸው መደበኛ የGoogle መለያ በመፍጠር እገዳውን በቀላሉ ማጥፋት ይችላሉ።",
            },
            pros: {
                title: "ጥቅሞች፡",
                items: [
                    "ልጆችን ከYouTube ውስጥ ያሉ ጎጂ ይዘቶች ለመጠበቅ በጣም ይረዳል።",
                    "ልጆች አስፈላጊ ያልሆነ ቃላትን እና የሚያዋርዱ ይዘቶችን እንዳይማሩ ይከላከላል።",
                    "ከኃይለኛ ድርጊቶች፣ የተፈጥሮ አደጋዎች እና አሳዛኝ ክስተቶች የሚመጣ የስነ-ልቦና ጉዳትን ይቀንሳል።",
                    "ልጆች እንደ ንጥረ ነገር መጠቀም ወይም የጾታ ድርጊቶች ያሉ ጎጂ ባህሪያትን እንዳይተከሉ ይከላከላል።",
                ],
            },
            cons: {
                title: "ጉዳቶች፡",
                items: [
                    "Proxy ድረ-ገጽ፣ VPN ወይም NSFW በመጠቀም በቀላሉ ሊታለፍ ይችላል።",
                    "ልጅ ሌላ መለያ በመፍጠር እገዳውን ሊያልፍ ይችላል።",
                    "አንዳንድ አስጨናቂ ቪዲዮዎች እንዲሁም ሊያልፉ ይችላሉ።",
                ],
            },
        },
        PartHowtoUseFamiSafe: "Part 2: How to Use FamiSafe to Set YouTube Parental Controls?",
        FamiSafeisawidelyused: "FamiSafe is a widely used parental control application designed with incredible features that allow parents to monitor kids' phone activity remotely. It is available for use on Android as well as iOS devices. It helps parents to manage screen time, monitor their whereabouts, filter web content, and get notified of malicious content on their kids’ phones. It can also track app usage and allow app blocking if needed.",
        YouTubeParentalControl: " 2.1 YouTube Parental Control on Android",
        FamiSafeAndroidparental: "FamiSafe Android parental control solution provides you with YouTube content detection and app control. For suspicious texts on YouTube, parents can connect their kids' YouTube accounts and detect inappropriate video titles, descriptions and comments from which kids have subscribed, liked, posted or commented. For YouTube app control on Android, parents can view all video history and block some disturbing videos or channels.",
        RegisteraFamiSafeaccount: "Register a FamiSafe account on the website or app from Google Play",
        InstallFamiSafeappboth: "Install FamiSafe app both on parent's and kid's devices.",
        Connectkiddeviceand: "Connect kid's device and manage from parent's device.",
        YouTube22Parental: "2.2 YouTube Parental Control on iOS Device",
        FamiSafeiPhoneparental: "FamiSafe iPhone parental control solution can help parents track risky keywords from inappropriate video titles, descriptions and comments that kids have subscribed, liked, posted or commented. Parents will get  alerts if there are danger signs on your kids' iPhone or iPad.",
        RegisteraFamiSafeaccount: "Register a FamiSafe account on the website or app from App Store",
        InstallFamiSafeappbothon: "Install FamiSafe app both on parent's and kid's devices.",
        Connectkidsdeviceand: "Connect kids' device and manage from parent's device.",
        How31tosetparental: "3.1 How to set parental control in Google Play store?",
        TaponAppsGamesAnd: "Tap on Apps & Games. And enter a PIN for the first time.",
        Selectyourpreferredrating: "Select your preferred rating by tapping on the check button.",
        Click76onSave: "Click on Save.",
        Repeatthesameprocessfo: "Repeat the same process for Movies, TV, Music, and Books.",
        PartHowtoUseGooglePlay: "Part 3: How to Use GooglePlay or iOS Settingto Set YouTube Parental Control?",
        Inhispartwewilllookat: " In this part, we will look at setting YouTube Parental control on Android and iOS devices. For Android users, there is Google Play parental control that lets parents manage downloaded apps and ensure ads shown are age-appropriate and avoid impulsive and accidental purchases. In the case of iOS parental control, parents can enable Screen Time in the Settings. With the right age and appropriate alterations set, as per your preferences, you can freely let your kid use your iOS gadget.",
        restrictedModeFamilyContentt: {
            infoCard: {
                title: "Control YouTube Screen Time and Block App",
                description:
                    "FamiSafe also provides screen time and app blocker features which parents can use to control how much time that kids can spend on YouTube and if kids are addicted to YouTube, they even can block it.",
            },
            pros: {
                title: "Pros:",
                items: [
                    "A. Check watch history of YouTube content and block malicious videos and channels on Android.",
                    "B. Easy to monitor the kid’s phone activity from the comfort of your seat.",
                    "C. Enable you to manage screen time remotely.",
                    "D. There is a free trial, and its subscription plans are affordable.",
                ],
            },
            cons: {
                title: "Cons:",
                items: [
                    "A. The iPhone version has limited features.",
                    "B. For iOS device, it can only block apps by category.",
                ],
            },
        },
        How32tosetparental: "3.2 How to set parental control in iOS setting",
        GowetoSettingsand: "Go to Settings and scroll down to Screen Time.",
        Clicke43onContent: "Click on Content & Privacy Restrictions.",
        Go3wrrtoiTunes: "Go to iTunes & App Store Purchases.",
        Setto45DontAllow: "Set to Don’t Allow",
        Tap5rdgfonContent: "Tap on Content Restrictions to limit YouTube websites",
        TapkpoAppLimitsandc: "Tap App Limits and choose app categories to set screen time limit.",
        prosConsContent: {
            pros: {
                title: "Pros:",
                items: [
                    "Safety from possible malicious software.",
                    "Don’t have to purchase anything extra.",
                    "Realistic and steady in-built parental control settings.",
                ],
            },
            cons: {
                title: "Cons:",
                items: [
                    "Lack of a cross-platform solution. You cannot restrict kids’ iPhone devices from Android.",
                    "Limited security. Don’t offer an anti-virus or malware solution.",
                    "Easily bypassed using a new account or third-party apps.",
                ],


            },
        },
        Part4TurnpoitoYouTubeKids: " Part 4: Turn to YouTube Kids",
        YouTubeKityudsisdesignated: "YouTube Kids is designated for kids under age 12 to explore their interests and watch videos in a contained experience. According to the age of your kids, you can choose Preschools (age 4 or under), Younger(age 5 to 7), Older(age 8 to 12) to determine the types of videos available on the app. Moreover, you can also set screen limits, block videos, check view history with YouTube Kids.",
        Howtosettyuparental: "How to set parental controls on YouTube Kids",
        Intheapjhptapthe: "In the app, tap the Lock icon at the bottom.",
        Answeraslswimple: "Answer a simple multiplication problem, or enter the number that appear. Or enter the passcode you set.",
        SelectSetting: "Select Setting to edit and change your kid’s profile.",
        SelectTimertoset: "Select Timer to set a screen limit for the app.",
        prosConsContentts: {
            pros: {
                title: "Pros:",
                items: [
                    "A. Filtered videos to keep kids safe.",
                    "B. Provide parental control features like screen limit, video blocker.",
                    "C. Allow parents to check view history.",
                    "D. Easy to use and set up for parents",
                ],
            },
            cons: {
                title: "Cons:",
                items: [
                    "A. Kids can use the YouTube website or simply download a YouTube app on their devices to watch the videos they want.",
                    "B. The parental-control lock is easily bypassed.",
                    "C. Some inappropriate content may still slip in.",
                ],
            },
        },
        Part5eeseGoogl: "Part 5:Use Google SafeSearch for YouTube Parental Control",
        GoogleSafeSearchisf: "Google SafeSearch is a feature that uses algorithms to filter inappropriate images, writings or websites page from search results. It is useful to keep your kids safe from explicit results like pornography, violence when they are browsing alone. The feature can be locked on and only switched off with a password you set.",
        TurnnGoeogle: "5.1 Turn on Google SafeSearch on your browser",
        GotoSearrrchSettings: "Go to Search Settings.",
        FindSafrreSearchfilters: "Find SafeSearch filters",
        Clickthrreboxnextto: "Click the box next to “Turn on SafeSearch” to turn the feature on.",
        Scrolldorrtwnandclick: "Scroll down and click on “Save”",
        TurndronGoogle: " 5.2 Turn on Google SafeSearch on App",
        LaunchtheGoogleapp: "Launch the Google app.",
        Taponthethreedot: "Tap on the three dots at the bottom right corner.",
        TapSettingsGeneral: "Tap Settings → General. Scroll down and find the “SafeSearch” tab and toggle it on.",
        restrictedModeFamilyContenttt: {
            infoCard: {
                title: "Note:",
                description: "SafeSearch only works on Google’s search results. It won’t prevent users on your network from finding explicit content through other search engines or by navigating directly to explicit sites.",
            },
            pros: {
                title: "Pros:",
                items: [
                    "A. Protect kids from explicit content online.",
                    "B. Kids will not be able to turn off the feature if it is locked on unless they have the password.",
                ],
            },
            cons: {
                title: "Cons:",
                items: [
                    "A. Some acceptable sites may be blocked.",
                    "B. Can not block all explicit content.",
                    "C. Kids can simply use a different search engine like Yahoo, Bing."
                ],
            },
        },
        YouTubeParental87Cont: "YouTube Parental Control Tips and Tricks",
        guides: [
            {
                title: "How to Block YouTube Videos?",
                desc: "Introduce effective ways about how to block harmful videos on Kid's device.",
                bg: "bg-[#EAFBF8]",
                path: "/block-youtube-videos",
            },
            {
                title: "How to Enable YouTube Parental Filter?",
                desc: "Learn how to turn on content filtering on your kid’s YouTube and set parental control remotely.",
                bg: "bg-[#F3EEFF]",
                path: "/youtube-parental-filter",
            },
            {
                title: "How to Monitor YouTube Watch History?",
                desc: "Find some practical ways to check your kids' YouTube watch history.",
                bg: "bg-[#FFF1EA]",
                path: "/monitor-youtube-history",
            },
            {
                title: "How to Block YouTube Channels Remotely?",
                desc: "Learn an effective way to block disturbing YouTube Channels distantly on child's Android phone.",
                bg: "bg-[#FFF6E8]",
                path: "/block-youtube-channels",
            },
            {
                title: "How to Block YouTube on Android?",
                desc: "Introduce some methods to block YouTube app on Kid's Android phone.",
                bg: "bg-[#F3EEFF]",
                path: "/block-youtube-android",
            },
            {
                title: "How to Block Adult Content on YouTube",
                desc: "Read on and learn how to block adult content on YouTube in this guide to protect your kids.",
                bg: "bg-[#EAFBF8]",
                path: "/block-youtube-adult-content",
            },
        ],
        /// Tiktok  History
        CheckKjhidsTikTok: "Check Kids' TikTok History",
        Getdetailffsaboutthe: "Get details about the videos your kids are browsing on TikTok. Keep them away from inappropriate videos.",
        TheBestWaytoPffreven: "The Best Way to Prevent Kids from TikTok Addiction",

        UnderstandytrfYourKidBetter: "Understand Your Kid Better",
        NoneedtocoionnectTikTok: "No need to connect TikTok account, free to check TikTok history with FamiSafe on Android.",
        Getnforlljimation: "• Get information of the visited channels for a specific date.",
        ClickViekkgwtoge: "• Click View to get the video’s details, see what your kids have browsed.",
        Checkhowlongy: "• Check how long your kids have spent on TikTok.",
        faqbs: [
            {
                question: "1. How to monitor online activity on kids' smartphones?",
                answer:
                    "1. Open your Google play store and search the FamiSafe parental control app, you will get it. Install it on all devices you want to monitor ( you will be able to monitor five devices in one purse). 1.  Open a membership account with the app. 3. Connect all devices to parents' devices and start monitoring.After the successful setup, you will be able to check kids' activity reports, restrict your kids' access to inappropriate websites and apps, lock games and other apps during breaks and study time.",
            },
            {
                question: "2. What are the symptoms of cell phone addiction?",
                answer:
                    "Here are some signs that may lead you to think that your kid is addicted to the cell phone. 1) Your kid is angry most of the time 2) Facing depression 3) Looks tensed 4) The kid is mostly irritated and snaps over small things 5) Looks or behaves restless 6) Sleepness is another symptom you must not ignore 7) If your kid is unable to stop using his phone even during important events, e.g., a funeral, etc. 8) Sudden lack of communication and aloofness 9) Neglecting dinner time with family or daily chores 10) Sleeping at odd hours.",
            },
            {
                question:
                    "3. What are the most popular apps among kids?",
                answer:
                    "The most popular iPhone and Android phone apps for kids are : 1) YouTube 2) Instagram 3) WhatsApp 4) Spin Safe Browser 5) Snapchat 6) Facebook 7) Android Messages (text) 8) YouTube Kids 9) Chrome 10) Netflix 11) Facebook Messenger.",
            },
            {
                question:
                    "4. How many hours should kids spend on the phone a day?",
                answer:
                    "Every child is different. Even experts could not provide a definite answer about how much time the kids should spend on digital devices. We recommend that 1-2 hours on school days is a reasonable amount. While on weekends or holidays, perhaps 3-4 hours is a reasonable amount. Most important of all, parents should set the kids up for a healthy relationship with technology.",
            },
        ],
        UltimatedeGuidetoWatc: "Ultimate Guide to Watch or Monitor TikTok Without App",
        SimpleWaystRestric: " 5 Simple Ways to Restrict Your Kids' TikTok Screen Time",
        BestApphosforTik: " 6 Best Apps for TikTok Monitoring and Screen Time Limiting.",
        LeadingTpoikTokProfile: " 5 Leading TikTok Profile Viewers to Check Private Profiles",
        HowtoSebuntUpParenta: " How to Set Up Parental Controls on TikTok [2025]",
        HowtoRyiemoteChec: " How to Remote Check My Kids' TikTok History?",
        HowtoViewKidsTik: "How to View Kids' TikTok History?",
        /// Inappropriate Pictures
        DetectSuspicihhyousPhotos: "Detect Suspicious Photos",
        Detectsuspyyticiousimages: "Detect suspicious images like nude selfies, and porn photos on kids' devices and send instant alerts, helping parents easily block porn on phones.",
        Minimize65TheExposurea: "Minimize The Exposure and Harm of Pornography",

        MonitytrorKidAlbum: "Monitor Kid's Album",
        Monitorhfdkidsalbums: "Monitor kids' albums in all directions to see if there are any pornographic pictures.",
        Tracksuspigggciousi: "Track suspicious images in kids' albums.",
        Adjusttheaoiiccuracy: "Adjust the accuracy level to control the detection of explicit photos.",
        Viewsuspiciousyytpictu: "View suspicious picture records.",

        ReceivbveAlerts: "Receive Alerts",
        Whensuspdfgiciouspictures: "When suspicious pictures are detected on kids' devices, timely warnings will be sent to parents.",
        warningdfgoncedetect: " Send warning once detect suspicious pictures.",
        Knowwhidfgchkidsde: "Know which kids' device detected the suspicious picture.",

        DealWithhePhotos: "Deal With The Photos",
        Parentscancheckt: "Parents can check the alert or manage images detected from kids' Android devices, helping them quickly block porn on phone.",
        Viewanddirectlydele: "View and directly delete suspicious pictures on your kids' Android device.",
        Afterdeletionthesus: "After deletion, the suspicious images will no longer be displayed on kids' devices.",
        Contacttheidsi: "Contact the kids in time and help them solve the problem.",
        HowtoDetectnap: "How to Detect Inappropriate Pictures ?",

        MoreTipsforSuspen: "More Tips for Suspending Inappropriate Pictures",
        BestPornBlockin: "Best Porn Blocking Apps for Android & iOS in 2022.",
        HowtoBlockPo: "How to Block Porn on Computer?",
        EffectiveSoluti: "5 Effective Solutions to Block Porn Sites on Android.",
        HowtoGetRidofP: " How to Get Rid of Porn Addiction?",
        HowtoBlockPorno: "How to Block Porn on iPhone Using FamiSafe?",
        HowtoBlockAllPornite: "How to Block All Porn Sites on iPhone & Android?",
        /// FAQs Section
        faqas: [
            {
                question: "1. How to monitor online activity on kids' smartphones?",
                answer:
                    "Open your Google play store and search the FamiSafe parental control app, you will get it. Install it on all devices you want to monitor ( you will be able to monitor five devices in one purse). 2. Open a membership account with the app. 3. Connect all devices to parents' devices and start monitoring.After the successful setup, you will be able to check kids' activity reports, restrict your kids' access to inappropriate websites and apps, lock games and other apps during breaks and study time.",
            },
            {
                question: "2. What are the symptoms of cell phone addiction?",
                answer:
                    "Here are some signs that may lead you to think that your kid is addicted to the cell phone. 1) Your kid is angry most of the time 2) Facing depression 3) Looks tensed 4) The kid is mostly irritated and snaps over small things 5) Looks or behaves restless 6) Sleepness is another symptom you must not ignore 7) If your kid is unable to stop using his phone even during important events, e.g., a funeral, etc. 8) Sudden lack of communication and aloofness 9) Neglecting dinner time with family or daily chores 10) Sleeping at odd hours.",
            },
            {
                question:
                    "3. What are the most popular apps among kids?",
                answer:
                    "The most popular iPhone and Android phone apps for kids are : 1) YouTube 2) Instagram 3) WhatsApp 4) Spin Safe Browser 5) Snapchat 6) Facebook 7) Android Messages (text) 8) YouTube Kids 9) Chrome 10) Netflix 11) Facebook Messenger.",
            },
            {
                question:
                    "4. How many hours should kids spend on the phone a day?",
                answer:
                    "Every child is different. Even experts could not provide a definite answer about how much time the kids should spend on digital devices. We recommend that 1-2 hours on school days is a reasonable amount. While on weekends or holidays, perhaps 3-4 hours is a reasonable amount. Most important of all, parents should set the kids up for a healthy relationship with technology.",
            },
        ],
        toolls: [
            { title: "Screen Time", icon: FaClock, color: "#6366F1" },
            { title: "Activity Report", icon: FaChartBar, color: "#0EA5E9" },
            { title: "YouTube App Control", icon: FaYoutube, color: "#FF0000" },
            { title: "TikTok History", icon: FaTiktok, color: "#000000" },
            { title: "Inappropriate Pictures", icon: FaImage, color: "#EC4899" },
            { title: "Explicit Content Detection", icon: FaExclamationCircle, color: "#F97316" },
            { title: "App Block", icon: FaLock, color: "#7C3AED" },
            { title: "Browser History", icon: FaHistory, color: "#64748B" },
            { title: "Safe Search", icon: FaSearch, color: "#22C55E" },
            { title: "Web Filter", icon: FaFilter, color: "#0D9488" },
            { title: "Live Location", icon: FaMapMarkerAlt, color: "#EF4444" },
            { title: "Location History", icon: FaMap, color: "#3B82F6" },
            { title: "Geofence", icon: FaMapMarkerAlt, color: "#F43F5E" },
            { title: "Driving Report", icon: FaCar, color: "#111827" }
        ],
        ///Social App Detection

        SocialAppDetection: "Social App Detection",
        Monitorsocialapp: "Monitor social apps and YouTube to detect any explicit or offensive words. Set offensive words to get alert when they are detected on your kid's device.",
        KnowMoreAbou: "Know More About Disturbing Content on Social Media",
        Mysongotupset: "My son got upset after he checked his Facebook messenger. I wonder what he received?",
        HowcanIkeep: "How can I keep an eye on what my 7-year-old son is watching on YouTube?",
        CanIblockspe: " Can I block specific YouTube videos from my kid&apos;s access?",

        KnowMoreAboutDi: "Get Automatic Alerts for Potential Issues",
        MonitorMultipl: "Monitor Multiple Social Media at Once",
        Noneetocheckyo: "No need to check your kids' social accounts anymore; using FamiSafe to monitor 30+ social platforms all at once. (Social Apps Detection on children's iOS devices is temporarily unsupported.)",
        Easytepstoconnec: "Easy steps to connect kid's social accounts.",
        SupportYouTubeConte: "Support YouTube Content Detection on iOS",
        SupporthatsAppMes: "Support WhatsApp, Messenger, Messenger Lite, YouTube, Instagram, Facebook, SMS, Twitter, or Kik Monitoring on Android.",

        MonitorMultiple: "Customize the Suspicious Words",
        Noneedtocheckyo: " Teens' popular slang is evolving. Better keep up with their pace by managing suspicious word settings.",
        Easystepstoconne: "Choose the category of the suspicious word you are concern about monitoring. ",
        SupportWhatsAppMes: "Add suspicious words to our keyword base to better protect our kids",
        SupportWhatsA: "Enable/disable monitoring on different categories of suspicious words easily.",

        AIassistedInapp: "AI-assisted Inappropriate Content Monitor",
        FamiSaferffhas65upg: "FamiSafe has upgraded the content monitoring system to AI-assisted. With access to AIGC, the explicit words have been expanded and optimized.",
        Receivealer87tswhe: "Receive alerts when your kids encounter any cyber-violence, explicit, drug-related content, etc.",
        Detectinappropriateco: "Detect inappropriate content more comprehensively and accurately.",
        Stayv45igilantinyo: "Stay vigilant in your child’s digital world to keep them safe.",

        YouTubeC23ontr: "YouTube Control & Detect",
        Freeyou6yrself: "Free yourself from the trouble of checking your kid's YouTube browser history constantly. Get alerts on things that you are concerned about.",
        Categorizethepot: "Categorize the potential issues of a YouTube video.",
        Listp09u9otent34ialiss: "List potential issues found on your kid's YouTube watch list.",
        BlockouTu7657bevideoo: " Block YouTube video or channel from kid's access.",

        EasytoSta: "Easy to Start with 3 Simple Steps",
        steps: [
            {
                id: 1,
                title: "Register",
                description:
                    "Register a FamiSafe account on the website or app from Google Play and App Store.",
                icon: "register",
            },
            {
                id: 2,
                title: "Install",
                description:
                    "Install FamiSafe app both on parent's and kid's devices.",
                icon: "install",
            },
            {
                id: 3,
                title: "Connect",
                description:
                    "Connect and manage all devices from FamiSafe dashboard app or web portal.",
                icon: "connect",
            },
        ],
        posts: [
            {
                image: "https://famisafe.wondershare.com/images/feature/2021/detect-text/spyic-monitor.png",
                title: "How can I monitor my child's text message.",
                description:
                    "For every parent wondering how can i monitor my child's text messages, the above-mentioned tools are the perfect solution for you to ensure your kid's safety",
            },
            {
                image: "https://famisafe.wondershare.com/images/feature/2021/detect-text/how-to-monitor-text-messages-on-android-1.jpg",
                title: "How to control text message on Andriod ?",
                description:
                    "Keep kids safe from online dangers by text message monitoring apps for Android. Parents can monitor text messages on Android in a safe and reliable manner.",
            },
            {
                image: "https://famisafe.wondershare.com/images/feature/2021/detect-text/best-texting-app-for-kids-2.jpg",
                title: "Parental Guide on safe text Apps for kkind's",
                description:
                    "Are you worried about kids chatting with strangers? Check out these top safe texting apps for kids that will keep them safe and give them the freedom to communicate.",
            },
        ],
        faqams: [
            {
                question: "1. How to monitor online activity on kids' smartphones?",
                answer:
                    "Open your Google play store and search the FamiSafe parental control app, you will get it. Install it on all devices you want to monitor ( you will be able to monitor five devices in one purse).Open a membership account with the app.Connect all devices to parents' devices and start monitoring. After the successful setup, you will be able to check kids' activity reports, restrict your kids' access to inappropriate websites and apps, lock games and other apps during breaks and study time.",
            },
            {
                question: "2. What are the symptoms of cell phone addiction?",
                answer:
                    "Here are some signs that may lead you to think that your kid is addicted to the cell phone. 1) Your kid is angry most of the time 2) Facing depression 3) Looks tensed 4) The kid is mostly irritated and snaps over small things 5) Looks or behaves restless 6) Sleepness is another symptom you must not ignore 7) If your kid is unable to stop using his phone even during important events, eg., a funeral, etc. 8) Sudden lack of communication and aloofness 9) Neglecting dinner time with family or daily chores 10) Sleeping at odd hours.",
            },
            {
                question:
                    "3. What are the most popular apps among kids?",
                answer:
                    "The most popular iPhone and Android phone apps for kids are : 1) YouTube 2) Instagram 3) WhatsApp 4) Spin Safe Browser 5) Snapchat 6) Facebook 7) Android Messages (text) 8) YouTube Kids 9) Chrome 10) Netflix 11) Facebook Messenger.",
            },
            {
                question:
                    "4. How many hours should kids spend on the phone a day?",
                answer:
                    "Every child is different. Even experts could not provide a definite answer about how much time the kids should spend on digital devices. We recommend that 1-2 hours on school days is a reasonable amount. While on weekends or holidays, perhaps 3-4 hours is a reasonable amount. Most important of all, parents should set the kids up for a healthy relationship with technology.",
            },
        ],

        /// web filter 
        KeepKidsSearchSafe: "Keep Kids Search Safe",
        Createasafeandage: "Create a safe and age-appropriate online environment for children by blocking inappropriate websites. View kids' browsing history and check private or incognito internet history remotely.",
        KnowYouorries: "Know Your Worries When Kids Browsing Online",
        Ismysonsearching: "Is my son searching for guns or other weapons on Google?",
        WhatcanIdtostp: "What can I do to stop my kids from accessing pornography online?",
        Isthereawaytoblock: "Is there a way to block age-inappropriate results from my kid's search?",

        GuideKidstoGoo: "Guide Kids to Good Online Content",
        KeepSearchSafe: "Keep Search Safe With Website Filter",
        Filternappropriate: "Filter inappropriate websites to create a safe online environment for our kids.",
        Filterwebsitesby: "Filter websites by categories to avoid any exceptions.",
        Poweredby0inbuilt: "Powered by 10+ inbuilt website categories that cover adult, drug, violence, and more.",
        EnableSafeSearchto: "Enable Safe Search to block search result that contains explicit information.",

        SafeguardKid: "Safeguard Kid's Online Exploration",
        Setahealthyspacema: "Set a healthy space manually to protect your kids while they explore online.",
        Feelfreetoadda: "Feel free to add any websites to be blocked or allowed on kid's devices.",
        Changethewebfilter: "Change the web filter setting remotely without getting your kid's phone.",
        UseSafearchtoen: "Use Safe Search to ensure only censored results show up on Android devices.",
        ForiOSdevicestheaf: "For iOS devices, the Safe Search feature would automatically enable Google & Bing's Safe Search option.",

        KnowWhatidsBrows: "Know What Kids Are Browsing Online",
        Learnwhatkidsarese: "Learn what kids are searching or visiting online, even under incognito mode.",
        Checkbrowserhistory: "Check browser history, even under private/incognito mode.",
        Storeupto3monthsof: "Store up to 3 months of browser history for parent's review.",
        Findoutwhichwordte: "Find out which word/term is searched under Safe Search.",
        postsa: [
            {
                image: "https://famisafe.wondershare.com/images/feature/2021/search-safe/network-monitor-app.png",
                title: "Best 10 Network Monitoring Apps for Android.",
                description:
                    "Do you want to get your move your WhatsApp Account to your new phone? Here's how to do it.",
            },
            {
                image: "https://famisafe.wondershare.com/images/feature/2021/search-safe/unblock-blocked-websites-online-1.jpg",
                title: "5 Best Website Blocker Softwares for Web Protection",
                description:
                    "Are you looking for the best website blocker software to protect your kids from online dangers? These five web blocker apps will help you.",
            },
            {
                image: "https://famisafe.wondershare.com/images/feature/2021/search-safe/android-network-monitoring-apps-0.png",
                title: "How to Unblock Blocked Websites on Android or iOS Devices?",
                description:
                    "Is there any possibility to unblock websites online? How does it work? Parents will get effective guidance about how kids bypass restricted websites.",
            },
        ],
        faqavs: [
            {
                question: "How do I block websites on Android?",
                answer:
                    "To block a website on Android using FamiSafe: 1. Create a FamiSafe account. 2. nstall FamiSafe app on parent’s and kid’s phones. 3. Tap Website Filter and choose dangerous website categories. 4. Tap Exceptions and add an unwanted website. 5. Tap Save to add the website to the Blocked list.",
            },
            {
                question: "How do I view browsing history on Chrome?",
                answer:
                    "To view the browsing history in Google Chrome using FamiSafe: 1. Create a FamiSafe account. 2. Install FamiSafe app on parent’s and kid’s Android devices. 3. Click Browser History and View kid’s Chrome browsing history.",
            },
            {
                question:
                    "How do I block websites from my child's iPhone?",
                answer:
                    "Parents can block websites on iPhone using FamiSafe by following these steps: 1.Create a FamiSafe account. 2.Install FamiSafe app on parent’s and kid’s devices. 3. Click Website Filter and block risky website categories. 4. Click Exceptions and add any link you want to block on Safari. 5. Tap Save to block websites.",
            },
            {
                question:
                    "How do I block pornhub websites?",
                answer:
                    "To block inappropriate websites using FamiSafe: 1. Create a FamiSafe account.2 .Install FamiSafe app on parent's and kid's devices. 3. Tap Website Filer and block porn website categories.",
            },

            {
                question:
                    "What websites should parents block?",
                answer:
                    "1. Explicit websites like Pornhub.com, 8Tube.xxx 2.Dating websites like com, Bongacams.com 3. Poker and casino websites like ag, FreeSpin.com",
            },
        ],
        LatestPost: "Latest Post",
        ///Locaton-Tracking
        LocationTracking: "Location Tracking",
        Trackkidsinrealt: "Track kids in real-time and review their location history. Receive instant alerts when kids enter or leave the Geofences.",
        RestEasywithReal: "Rest Easy with Real-time Location Tracker for Kids",

        ViewKidsRealT: "View Kids' Real-Time Location",
        Trackthecurrentloc: "Track the current location of your kids. Save you from wondering, Where are my kids?  all the time.",
        Graspyourkidsrealti: "Grasp your kids' real-time location at any time.",
        Checkifyourkidsar: "Check if your kids are in school or at home as they should.",
        Involveintimewhe: "Involve in time when kids go to strange or dangerous places.",

        CheckLocatio: " Check Location History",
        Viewlocationhist: "View location history timeline to know kids' past routines. Never yell at your kids: Where have you been? again.",
        Viewyourkids: "View your kids' recent activity area.",
        Knowkids: "Know kids' whereabouts anytime.",
        Learnabout: "Learn about the places your kids go to frequently.",

        SetSafeGeofen: "Set Safe Geofences",
        CreateGeofenceslik: "Create Geofences like school or home around specific locations. Get notified when kids break planned routines.",
        Setthescopeo: "Set the scope of kids' activities.",
        Setupgeofen: "Set up a geofence and set the time range.",
        Receiveanalertwh: "Receive an alert when the kids leave the set place.",

        MoreTipsforLoca: "More Tips for Location Tracking",
        BestFamilyLocat: " Best Location Sharing Apps for Your Loved-ones.",
        HowtoTracka: "Free Online Tools to Track a Phone Number Location",
        FreeAppstoT: "10 Free Apps to Track a Cell Phone Location for Free.",
        HowtoCheckImPhone: "How to Check iPhone Location History Easily?",
        HowtoTrackYourki: "How to Track Your kid's iPhone Quickly?",
        HowtoTrackaPhone: "How to Track a Phone Using IMEI for Free?",

        faqsSscreenviwer: [
            {
                question: "1. How to monitor online activity on kids' smartphones?",
                answer:
                    "Open your Google play store and search the FamiSafe parental control app, you will get it. Install it on all devices you want to monitor ( you will be able to monitor five devices in one purse).Open a membership account with the app. Connect all devices to parents' devices and start monitoring. After the successful setup, you will be able to check kids' activity reports, restrict your kids' access to inappropriate websites and apps, lock games and other apps during breaks and study time.",

            },
            {
                question: "2. What are the symptoms of cell phone addiction?",
                answer:
                    "Here are some signs that may lead you to think that your kid is addicted to the cell phone. 1) Your kid is angry most of the time 2) Facing depression 3) Looks tensed 4) The kid is mostly irritated and snaps over small things 5) Looks or behaves restless 6) Sleepness is another symptom you must not ignore 7) If your kid is unable to stop using his phone even during important events, eg., a funeral, etc. 8) Sudden lack of communication and aloofness 9) Neglecting dinner time with family or daily chores 10) Sleeping at odd hours.",
            },
            {
                question: "3. What are the most popular apps among kids?",
                answer:
                    "The most popular iPhone and Android phone apps for kids are : 1) YouTube 2) Instagram 3) WhatsApp 4) Spin Safe Browser 5) Snapchat 6) Facebook 7) Android Messages (text) 8) YouTube Kids 9) Chrome 10) Netflix 11) Facebook Messenger.",
            },
            {
                question: "4. How many hours should kids spend on the phone a day?",
                answer:
                    "Every child is different. Even experts could not provide a definite answer about how much time the kids should spend on digital devices. We recommend that 1-2 hours on school days is a reasonable amount. While on weekends or holidays, perhaps 3-4 hours is a reasonable amount. Most important of all, parents should set the kids up for a healthy relationship with technology.",
            },
        ],

        /// Driving-history-report

        EncourageGoodD: "Encourage Good Driving Habits",
        Receivedetaileddrivi: "Receive detailed driving history reports about teens every trip. Get to know driving details like top speed, average speed, total driving distance, and more. Help teens form a good driving habits by reviewing their weekly driving reports.",
        DoYouHaveAny: "Do You Have Any of the Below Concerns?",
        Mysonjustothi: "My son just got his learner's permit. How can I check how he drives?",
        CanIcheckifmydaugh: "Can I check if my daughter had over sped last night when she was with her friends?",
        Isthereawaytoge: "Is there a way to get a summary of how my son drives?",

        HowFamiSafeHelpsYo: "How FamiSafe Helps Your Teens Become A Good Driver?",
        EscortTeenEachDrive: "Escort Teen's Each Drive",
        Even43ify: "Even if you are not sitting next to your teens while she/he head out and explore the new world of driving, you can still protect each drive.",
        Enabledrivesafetyto: "Enable drive safety to record driving details.",
        Setuphighspeedt21: "Set up high speed to get over-speed data.",
        Trackdrivingroutine: "Track driving routine.",

        EncourageGoodDriv: "Encourage Good Driving Habits",
        Agooddrivinghabit: "A good driving habit is essential to keep kids safe while driving. Review how teens drive and help them improve.",
        Getadrivinghist: "Get a driving history report for each trip.",
        Highlightdangerousdri: "Highlight dangerous driving behaviour like overspeeding and hard breaks.",
        Checkdrivingdetailsli: "Check driving details like average speed and more.",

        GetBetterWithEachDrive: "Get Better With Each Drive",
        Reviewweeklyrsummary5t: "Review weekly summary to figure out which part of your teen's driving requires further improvement.",
        Viewrsummaryofth: "View summary of the past week.",
        Comparethesummaryof: "Compare the summary of the current week with the previous.",
        Cantracebacktowee: "Can trace back to weekly summaries of three weeks ago.",
        postqs: [
            {
                image: "https://famisafe.wondershare.com/images/feature/2021/driving-report/driving-safety-fact-1.jpg",
                title: "How can I monitor my child's text message.",
                description:
                    "For every parent wondering how can i monitor my child's text messages, the above-mentioned tools are the perfect solution for you to ensure your kid's safety",
            },
            {
                image: "https://famisafe.wondershare.com/images/feature/2021/driving-report/share-google-map-location-3.png",
                title: "How to control text message on Andriod ?",
                description:
                    "Keep kids safe from online dangers by text message monitoring apps for Android. Parents can monitor text messages on Android in a safe and reliable manner.",
            },
            {
                image: "https://famisafe.wondershare.com/images/feature/2021/driving-report/share-location-android-to-iphone-2.png",
                title: "Parental Guide on safe text Apps for kkind's",
                description:
                    "Are you worried about kids chatting with strangers? Check out these top safe texting apps for kids that will keep them safe and give them the freedom to communicate.",
            },
        ],
        faqam5s: [
            {
                question: "1. How to monitor online activity on kids' smartphones?",
                answer:
                    "Open your Google play store and search the FamiSafe parental control app, you will get it. Install it on all devices you want to monitor ( you will be able to monitor five devices in one purse). Open a membership account with the app. Connect all devices to parents' devices and start monitoring. After the successful setup, you will be able to check kids' activity reports, restrict your kids' access to inappropriate websites and apps, lock games and other apps during breaks and study time.",
            },
            {
                question: "2. What are the symptoms of cell phone addiction?",
                answer:
                    "Here are some signs that may lead you to think that your kid is addicted to the cell phone. 1) Your kid is angry most of the time 2) Facing depression 3) Looks tensed 4) The kid is mostly irritated and snaps over small things 5) Looks or behaves restless 6) Sleepness is another symptom you must not ignore 7) If your kid is unable to stop using his phone even during important events, eg., a funeral, etc. 8) Sudden lack of communication and aloofness 9) Neglecting dinner time with family or daily chores 10) Sleeping at odd hours.",
            },
            {
                question:
                    "3. What are the most popular apps among kids?",
                answer:
                    "The most popular iPhone and Android phone apps for kids are : 1) YouTube 2) Instagram 3) WhatsApp 4) Spin Safe Browser 5) Snapchat 6) Facebook 7) Android Messages (text) 8) YouTube Kids 9) Chrome 10) Netflix 11) Facebook Messenger.",
            },
            {
                question:
                    " 4. How many hours should kids spend on the phone a day?",
                answer:
                    "Every child is different. Even experts could not provide a definite answer about how much time the kids should spend on digital devices. We recommend that 1-2 hours on school days is a reasonable amount. While on weekends or holidays, perhaps 3-4 hours is a reasonable amount. Most important of all, parents should set the kids up for a healthy relationship with technology.",
            },
        ],

        // sos alart 
        SOSlert: "SOS Alert",
        EmergencyhelpSOSa: "Emergency help & SOS alert at the touch of a button! With S.O.S. Alert, you can stay connected and informed about your child's safety. Receive real-time alerts on your phone and access their location history to keep a watchful eye on their whereabouts at all times.",

        ProtectourChild: "Protect Your Child - SOS Alert Feature Keeps Them Safe At Your Fingertips",
        ForChildrenSendns: "For Children: Send Instant SOS & Emergency Alert",
        Evenifyourphoneisons: "Even if your phone is on silent mode, your child can still send you a SOS message from their devices during a crisis.",
        ClicktheSOSbuttontos: "Click the SOS button to send the emergency alert within 5 seconds.",
        Cancelthe: "Cancel the SOS message within 5 seconds as well.",
        Addwidgetsoph: "Add widgets on the phone screen to instantly send emergency alarms.",

        FParents: "For Parents: Receive Immediate SOS Alert",
        Allowingyoutoknowth: "Allowing you to know the specific location of your children anytime and anywhere, providing timely assistance, and not missing any emergencies.",
        ReceiveemergencySO: "Receive emergency SOS sent by children, as well as obtain their real-time location.",
        YoucanbtaithSOsig: " You can obtain the SOS signal and your child's real-time location whether the FamiSafe app is open or closed. You can also check the SOS location information in the location history.",
        Topreventmisuseo: " To prevent misuse of the SOS function by children, you can also choose to open or close this feature on your end.",

        AvoidSituations: "Avoid Potentially Dangerous Situations",
        FamiSafeAlert: "FamiSafe-SOS Alert prevents danger through a panic button, ensures the personal safety of children, and strengthens the parent-child relationship.",
        Preventdange: "Prevent dangerous situations (such as kidnapping or being followed) through instant alerts.",
        Improveparentchi: " Improve parent-child bond by enabling parents to show more care and attention, making children feel loved and cared for.",
        Boosttrustbe: "Boost trust between parents and children, encouraging open communication about problems and difficulties.",

        HowtoUseSOSAle: "How to Use SOS Alert Feature?",
        StepInstaFamiSafe: "Step 1: Install FamiSafe",
        DownloaamiSa: "Download FamiSafe App from Google Play Store or App Store onthe parent's phone.",
        StepeaAccount: "Step 2: Register an Account",
        RegisterWonders: "Register a Wondershare ID for FamiSafe or log in with an Apple,Google, and Facebook ID.",
        Step3ConnectKi: "Step 3: Connect Kid's Device",
        Useyourkidphon: "Use your kid's phone to scan the QR code on FamiSafe in parent'sphone to install Fammy, and the pairing will complete automatically",

        MoreTipsaboutParentah: "More Tips about Parental Control and Children's Growth",
        TopGameSitesNotBloc: " Parents Can't-Miss, Reducing Kids' Screen Time Now!",
        ypasGoogleFamilyLin: "Quick and Easy Ways to Bypass Google Family Link Block",
        EasyStepstInstalland: "Easy Steps to Install and Use YouTube Kids on Amazon Fire",
        OmegleforKidsIsOmegle: "Omegle for Kids: Is Omegle Safe?",
        FamilyLinkNotWorki: "Family Link Not Working: Quick & Proven Fix Solutions",

        faqam3fs: [
            {
                question: "Should kids have cell phones for emergency?",
                answer:
                    "In today's world, providing your child with a way to stay in touch with an emergency contact is not just a convenience, but a necessity. Whether it's a mobile phone or a GPS smartwatch, these gadgets serve as a lifeline between parents and their children.",
            },
            {
                question: "How to enable SOS Alert feature on children’s device?",
                answer:
                    "From the Dashboard and Featuressections, children have access to the SOS Alert feature. Upon clicking the SOS button on the child's device, they will be directed to the SOS sending page, which includes a 5-second cooldown period. Within this timeframe, children can choose to either cancel the signal by clicking the Cancel Signal button or allow the message to be sent successfully after 5 seconds if cancellation is not initiated.",
            },
            {
                question:
                    "How to receive SOS alert on parent’s end?",
                answer:
                    "Parents can receive a push notification or a pop-up message when an SOS is triggered. By clicking on View Details they will be redirected to the Live Location or Location History page where they can access specific location information.",
            },
            {
                question:
                    " Can parent disable SOS Alert feature on their device?",
                answer:
                    "Yes, parents can control the “Enable Panic Button” of the SOS function (which is enabled by default, and when turned off, the SOS button will not appear on the child's end).",
            },
        ],


        // LocationSharing
        KnowMorAboutDis: "Location Sharing",
        Leavedigitalparen: "Learn how to share location with family and friends.",
        articles: [
            {
                title: "Snapchat Location Tracker: How to Track and Protect Kid's Location",
                desc:
                    "Explore how the Snapchat location tracker works, its privacy risks, and why FamiSafe is a safer choice for families to share locations securely.",
                img: "https://famisafe.wondershare.com/images/article/2025/03/how-to-share-location-on-android-1.jpg",
            },
            {
                title: "How to Track Instagram Account Location [4 Ways]",
                desc:
                    "Learn 4 safe ways to track an Instagram account location using public tags, free tools, and parental apps like FamiSafe.",
                img: "https://famisafe.wondershare.com/images/article/2025/03/family-location-sharing-1.jpg",
            },
            {
                title: "Top 7 Instagram Location Tracker Apps in 2025",
                desc:
                    "Looking for the best Instagram location tracker? Discover 7 top tools including free options and live tracking features.",
                img: "https://famisafe.wondershare.com/images/article/2025/02/geonection-1.jpg",
            },
        ],

        categories: [
            "Location Tracker",
            "Mobile Tracker",
            "Location Sharing",
            "Family Tracker",
            "Teen Driving",
        ],

        articless: [
            {
                title:
                    "Snapchat Location Tracker: How to Track and Protect Kid's Location",
                desc:
                    "Explore how the Snapchat location tracker works, its privacy risks, and why FamiSafe is a safer choice for families to share locations securely.",
                author: "Thomas Jones",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "How to Track an iPhone Online For Free By Number 2025",
                desc:
                    "How to track an iPhone by number with the iPhone locator to keep your kids safe from online dangers? Check the answer from the full guide!",
                author: "Thomas Jones",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "How to Find My Phone for Free",
                desc:
                    "This article covers 5 easy methods to avail of the find my phone free service. Learn how to use built-in tools, online trackers, and apps to locate your device quickly and securely.",
                author: "Marina Lehmann",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "The Best iPhone 17 Tracking App for Parents",
                desc:
                    "Get to know about the real-time location of your kids with this iPhone tracking app for parents. We list a quick and smart way to keep children safe.",
                author: "Thomas Jones",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "10 Best Location Tracking Apps for Android and iPhone",
                desc:
                    "Maintain the security of your family and friends with the best tracking app for Android and iPhone. Keep in touch and feel reassured about their locations at all times.",
                author: "Thomas Jones|",
                date: "2025-09-02 20:10:50",
            },
            {
                title: "10 Best Phone Apps to Track Location for Free [2025]",
                desc:
                    "How to track a cell phone location for free? Here are 10 mobile trackers to help you track a cell phone for free in Android or iPhone devices.",
                author: "Thomas Jones|",
                date: "2025-09-02 19:56:44",
            },
        ],

        Postedby: "Posted by",
        Prev: "Prev",
        Next: "Next",
        // Family Tracker
        FamilyTracker: "Family Tracker",
        Whatsthebes: "\"What's the best family locating app? Learn it here with FamiSafe!",
        AllFamilyTracker: "All Family Tracker",
        articlDSes: [
            {
                title: "10 Best Location Tracking Apps for Android and iPhone",
                desc:
                    "Explore how the Snapchat location tracker works, its privacy risks, and why FamiSafe is a safer choice for families to share locations securely.",
                img: "https://famisafe.wondershare.com/images/article/2025/03/geofencing-apps-1.jpg",
            },
            {
                title: "Glympse App Review Is It the Best Location Tracker?",
                desc:
                    "Learn 4 safe ways to track an Instagram account location using public tags, free tools, and parental apps like FamiSafe.",
                img: "https://famisafe.wondershare.com/images/article/2025/02/glympse-app-review-1.jpg",
            },
            {
                title: "Effective Ways to Locate Lost iPad with andriod and iphnoe",
                desc:
                    "Looking for the best Instagram location tracker? Discover 7 top tools including free options and live tracking features.",
                img: "https://famisafe.wondershare.com/images/article/2019/11/seffective-ways-to-locate-lost-ipad-1.jpg",
            },
        ],
        categories: [
            "Location Tracker",
            "Mobile Tracker",
            "Location Sharing",
            "Family Tracker",
            "Teen Driving",
        ],
        articleSSss: [
            {
                title:
                    "10 Best Geofencing Apps for iPhone & Android 2025",
                desc:
                    "Explore the best geofencing apps for iPhone & Android in 2025. Compare free & paid options to monitor kids and employees and automate zones with real-time alerts.",
                author: "Thomas Jones",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "Glympse Review: Is It the Best Location Tracker?",
                desc:
                    "What does the Glympse location-tracking app have to offer? Get the answer through this article, which presents the Glympse app review and its perfect alternative.",
                author: "Moly Swift",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "Top 10 Car Trackers You Need To Know",
                desc:
                    "This article will show you the top 10 car GPS trackers that you need to know about. With these car GPS trackers, you can know where are your kids if they are new drivers.",
                author: "Thomas Jones",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "Top 10 Tracking Devices & Apps for Kids",
                desc:
                    "We have picked up the top 10 best tracking devices and apps that you can use to track your children and keep them away from danger",
                author: "Thomas Jones",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "Top 10 Child Tracking Devices For Parents",
                desc:
                    "Whether your kids are out for a play or in school, parents are always worried about them. Read below to know ten tracking devices for children.",
                author: "Thomas Jones|",
                date: "2025-09-02 20:10:50",
            },
            {
                title: "T-Mobile Family Locator",
                desc:
                    "The t Mobile family locator is the ideal application for parents wishing to keep track of the location of your kids.",
                author: "Thomas Jones|",
                date: "2025-09-02 19:56:44",
            },
        ],

        /// Mobile Tracker
        MobileTracker: "Mobile Tracker",
        Readourblogsabo: "Read our blogs about mobile tracker and cell phone tracking. We review the best mobile tracker apps and also make guides about how to use the tracker apps.",
        AllMobileTracker: "All Mobile Tracker",
        articlDdSes: [
            {
                title: "Snapchat Location Tracker: How to Track and Protect Kid's Location",
                desc:
                    "Explore how the Snapchat location tracker works, its privacy risks, and why FamiSafe is a safer choice for families to share locations securely.",
                img: "https://famisafe.wondershare.com/images/article-trans-image/2035/snapchat-location-tracker-1.jpg",
            },
            {
                title: "How to Track Instagram Account Location [4 Ways]",
                desc:
                    "Learn 4 safe ways to track an Instagram account location using public tags, free tools, and parental apps like FamiSafe. Ideal for parents and cautious",
                img: "https://famisafe.wondershare.com/images/article/2025/05/track-instagram-location-banner.jpg",
            },
            {
                title: "Top 7 Instagram Location Tracker Apps in 2025",
                desc:
                    "Looking for the best Instagram location tracker? Discover 7 top tools to monitor Instagram accounts, including free options and live tracking features",
                img: "https://famisafe.wondershare.com/images/article/2025/05/instagram-location-tracker.jpg",
            },
        ],
        categories: [
            "Location Tracker",
            "Mobile Tracker",
            "Location Sharing",
            "Family Tracker",
            "Teen Driving",
        ],
        articleSdSss: [
            {
                title:
                    "Snapchat Location Tracker: How to Track and Protect Kid's Location",
                desc:
                    "Explore how the Snapchat location tracker works, its privacy risks, and why FamiSafe is a safer choice for families to share locations securely.",
                author: "Thomas Jones",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "How to Track an iPhone Online For Free By Number 2025",
                desc:
                    "How to track an iPhone by number with the iPhone locator to keep your kids safe from online dangers? Check the answer from the full guide!",
                author: "Thomas Jones",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "How to Find My Phone for Free",
                desc:
                    "This article covers 5 easy methods to avail of the find my phone free service. Learn how to use built-in tools, online trackers, and apps to locate your device quickly and securely.",
                author: "Marina Lehmann",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "The Best iPhone 17 Tracking App for Parents",
                desc:
                    "Get to know about the real-time location of your kids with this iPhone tracking app for parents. We list a quick and smart way to track kids remotely.",
                author: "Thomas Jones",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "10 Best Location Tracking Apps for Android and iPhone",
                desc:
                    "Maintain the security of your family and friends with the best tracking app for Android and iPhone. Keep in touch and feel reassured about their locations at all times.",
                author: "Thomas Jones|",
                date: "2025-09-02 20:10:50",
            },
        ],
        /// Screen-Time-Control
        ScreenTimeControl: "Screen Time Control",
        Limitscreentimea: "Limit screen time and app usage on your iPhone and Android.",
        AllScreenTimeControl: "All Screen Time Control",
        articlxdSes: [
            {
                title: "How to Limit Xbox Time on a Child's Device? | Details Covered!",
                desc:
                    "Read this guide to manage and limit Xbox time and monitor your kids' gaming habits. In addition, discover an alternative app for detailed monitoring.",
                img: "https://famisafe.wondershare.com/images/article/2025/01/limit-xbox-time-1.jpg",
            },
            {
                title: "Average Screen Time for Teenagers & 7 Tips for Parents",
                desc:
                    "Are you concerned about the average screen time for teenagers as a parent? Read this article to learn about the best 7 tips you can utilize to reduce it.",
                img: "https://famisafe.wondershare.com/images/article/2025/01/average-screen-time-for-teenagers-1.jpg",
            },
            {
                title: "TikTok Monitoring for Brands and Parents: 5 Best Tools & Strategies",
                desc:
                    "Learn the importance of TikTok monitoring and explore 5 tools to track the brand's performance. Explore how businesses can manage their presence",
                img: "https://famisafe.wondershare.com/images/article/2025/01/tiktok-monitoring-1.jpg",
            },
        ],
        articlebdSss: [
            {
                title:
                    "How to Limit Xbox Time on a Child's Device? | Details Covered!",
                desc:
                    "Read this guide to manage and limit Xbox time and monitor your kids' gaming habits. In addition, discover an alternative app for detailed monitoring.",
                author: "Moly Swift",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "Average Screen Time for Teenagers & 7 Tips for Parents",
                desc:
                    "Are you concerned about the average screen time for teenagers as a parent? Read this article to learn about the best 7 tips you can utilize to reduce it.",
                author: "Thomas Jones",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "Explore the Most Advanced and Efficient Screen Time App for PC",
                desc:
                    "Learning how to limit children's screen time with the best and most versatile screen time limiter for PC. Read this guide and find a reliable way.",
                author: "Ankhi Bhattacharya",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "How to Set Up Android Screen Time Limit? [2024]",
                desc:
                    "Learn the top 5 ways to set up app time limits on Android! Manage screen time effectively with these simple and practical methods to boost your kids productivity.",
                author: "Ankhi Bhattacharya",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "Screen Time Not Working on iPhone/iPad | 12 Solutions",
                desc:
                    "Are you struggling with iPhone Screen Time not working? Discover 12 easy solutions to fix the issue quickly and regain control of your screen time settings!",
                author: "Ankhi Bhattacharya|",
                date: "2025-09-02 20:10:50",
            }, {
                title: "Top 5 Apps to Control Screen Time for iPhone and Android",
                desc:
                    "This article covers the top 5 apps to control screen time on iPhone and Android. Learn how to manage digital habits, protect your well-being, and find balance in the digital age.",
                author: "Moly Swift|",
                date: "2025-09-02 20:10:50",
            },
        ],


        //iOS Parental Control
        iOSParentalControl: "iOS Parental Control",
        BestiOSParental: "45.3% of smart phone user in US choose iOS devices. It is important to learn how to set up parental controls on iPhone, iPad, iPod and other Apple devices.",
        AlliOSParentalControl: "All iOS Parental Control",
        AlliOSntalCorol: [
            {
                title: "20+ Best iOS 26 Wallpapers for Stunning Dynamic Customization",
                desc:
                    "Discover the latest iOS 26 wallpapers — dynamic, AI-powered, and kid-friendly. Learn how FamiSafe helps families manage screens smartly.",
                img: "https://famisafe.wondershare.com/images/article/2025/01/limit-xbox-time-1.jpg",
            },
            {
                title: "How to Turn On/Off Safe Search on iPhone – Complete Guide",
                desc:
                    "Learn how to disable or enable Safe Search on iPhone in minutes. Follow step-by-step guides and see how tools can keep your browsing safe and",
                img: "https://famisafe.wondershare.com/images/article/2025/01/average-screen-time-for-teenagers-1.jpg",
            },
            {
                title: "Best iPhone for Kids: Guide to Safety, Setup, and Parental Tools",
                desc:
                    "Discover the best iPhone for kids in 2025 with safety, durability, and affordability. Learn age-based recommendations and compare models today.",
                img: "https://famisafe.wondershare.com/images/article/2025/01/tiktok-monitoring-1.jpg",
            },
        ],
        AlliOSPareontrol: [
            {
                title:
                    "20+ Best iOS 26 Wallpapers for Stunning Dynamic Customization",
                desc:
                    "Discover the latest iOS 26 wallpapers — dynamic, AI-powered, and kid-friendly. Learn how FamiSafe helps families manage screens smartly.",
                author: "Moly Swift",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "Best iPhone for Kids: Guide to Safety, Setup, and Parental Tools",
                desc:
                    "Discover the best iPhone for kids in 2025 with safety, durability, and affordability. Learn age-based recommendations and compare models today.",
                author: "Thomas Jones",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "How to Set Up Parental Controls on Your iPhone X/8/7/6",
                desc:
                    "Here's a guide about how to set restrictions (parental controls) on iPhone X/8/7/6 to block apps, adult content and porn websites.",
                author: "Thomas Jones",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "How to Set up Parental Control on Safari?",
                desc:
                    "Learn the top 5 ways to set up app time limits on Android! Manage screen time effectively with these simple and practical methods to boost your kids productivity.",
                author: "Thomas Jones",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "Screen Time Not Working on iPhone/iPad | 12 Solutions",
                desc:
                    "Are you suspicious about your child's online activities? Do you want to know how to put restrictions on iPhone and screentime safari? Then, read this detailed guide to learn about reliable and effective safari parental controls on iPhone, iPad, and Mac.",
                author: "Thomas Jones",
                date: "2025-09-02 20:10:50",
            },
            {
                title: "Safari Parental Controls: What Is & Best Setting Ways",
                desc:
                    "Discover how to use Safari parental controls on iPhone, iPad, and Mac. Protect your kid’s browsing by blocking unsafe websites to ensure a safer online space.",
                author: "Thomas Jones",
                date: "2025-09-02 20:10:50",
            },

            {
                title: "How to Turn On/Off Safe Search on iPhone – Complete Guide",
                desc:
                    "Learn how to disable or enable Safe Search on iPhone in minutes. Follow step-by-step guides and see how tools can keep your browsing safe and flexible.",
                author: "Thomas Jones",
                date: "2025-09-02 20:10:50",
            },
        ],
        // Android Parental Control
        AndroidParentalControl: "Android Parental Control",
        Inthistopicyouwi: "In this topic, you will learn about how to set up parental controls on all Android Phones and Tablets.",
        AllAnroidaretalControl: "All Android Parental Control",
        AndriodiOSntalCorol: [
            {
                title: "How to Block Unknown Numbers on Android Easily in 2025",
                desc:
                    "If you're tired of receiving unknown calls, learn how to block private numbers on your Android device. This article offers 3 methods, along with number",
                img: "https://famisafe.wondershare.com/images/article-trans-image/2143/how-to-block-private-numbers-on-android-1.jpg",
            },
            {
                title: "Xiaomi Parental Control: A Parent's Guide",
                desc:
                    "Discover how Xiaomi parental control works and why many parents are switching to FamiSafe to monitor their kids' phone activities more reliably and",
                img: "https://famisafe.wondershare.com/images/article-trans-image/99/xiaomi-parental-control-1.jpg",
            },
            {
                title: "How to Cancel Amazon FreeTime Unlimited Subscription",
                desc:
                    "Amazon FreeTime is a low-cost subscription for a world of kid-friendly content. However, you’re not stuck with it for life; it’s easy to cancel. Here's a post on how to cancel Amazon FreeTime.",
                img: "https://famisafe.wondershare.com/images/article/2020/12/how-to-cancel-amazon-freetime-1.jpg",
            },
        ],
        AndriodiOSPareontrol: [
            {
                title:
                    "The Best Family Games You Can't-Miss 2025",
                desc:
                    "The best family games to share the quality time with kids and find famisafe helpful to fix the screen time by locking the unwanted programs.",
                author: "Moly Swift",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "How to Block Unknown Numbers on Android Easily in 2025",
                desc:
                    "If you're tired of receiving unknown calls, learn how to block private numbers on your Android device. This article offers 3 methods, along with number blocking apps.",
                author: "Ankhi Bhattacharya",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "Xiaomi Parental Control: A Parent's Guide",
                desc:
                    "Discover how Xiaomi parental control works and why many parents are switching to FamiSafe to monitor their kids' phone activities more reliably and efficiently.",
                author: "Thomas Jones",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "Full Guide on Setting up Parental Controls on Android Devices",
                desc:
                    "Parental controls are features on mobile devices, PCs, and video games and software, that allow parents to restrict the access of certain content to their children.",
                author: "Thomas Jones",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "Best Android Remote Control Apps for TV, PC or Smart Devices",
                desc:
                    "Here are some of the best remote control apps you can use to transform your phone into a smart TV remote app on android device.",
                author: "Thomas Jones",
                date: "2025-09-02 20:10:50",
            },

            {
                title: "How to Remote Control Android Phone from PC without Rooting?",
                desc:
                    "Technology have changed and you can now remote control an android from PC without rooting. This article will talk about two ways about how to control mobile from PC remotely without rooting?",
                author: "Thomas Jones",
                date: "2025-09-02 20:10:50",
            },
        ],
        /// Desktop Parental Control
        DesktopParentalControl: "Desktop Parental Control",
        Findoutinthistopial: "Find out in this topic, all the solution to limit the use of your kid's computer, laptop and Mac.",
        AllDetopPaental667Control: "All Desktop Parental Control",
        DesktopParentalCo75: [
            {
                title: "Chromebook vs Laptop for Child, Which Is Better?",
                desc:
                    "Are you confused about whether to buy a Chromebook or a Laptop? Here is a detailed guide on Chromebook vs. Laptop to help you find the best",
                img: "https://famisafe.wondershare.com/images/article/2022/09/chromebook-vs-laptop-1.jpg",
            },
            {
                title: "5 Ways to Open Device Manager on Windows 10",
                desc:
                    "Your Windows PC offers multiple features you may not even know of. Find out how you can use the device manager on Windows 10.",
                img: "https://famisafe.wondershare.com/images/article/2020/09/device-manager-windows-10-1.jpg",
            },
            {
                title: "How to Use Activity Monitor on Your Mac ",
                desc:
                    "The Activity monitor for mac is an incredibly powerful tool to help you clean up your mac and restore it to being as snappy as it once was. In just a",
                img: "https://famisafe.wondershare.com/images/article/2020/09/use-activity-report-on-mac-1.jpg",
            },
        ],
        DesktopParentalCon76: [
            {
                title:
                    "How to Check Screen Time on Laptop?",
                desc:
                    "Check screen time activity on your Laptop without hassle using the tutorial guide provided here in this post.",
                author: "Moly Swift",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "Screen Time for Mac: Everything You Need to Know",
                desc:
                    "Most kids are addicted to their mobile devices, and sometimes, we want to know how much time they spend on it. Using Screen Time can help you ease the process; thus, read-through this blog to learn more about Screen Time for Mac.",
                author: "Ankhi Bhattacharya",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "Mac App Blocker Protects Your Apps",
                desc:
                    "Proving a protection through the Mac app blocker is the easiest way. You just need to create a passcode for your app security.",
                author: "Thomas Jones",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "How to Use the Parental Controls in Windows 10?",
                desc:
                    "Want to know Windows 10 parental controls? Read on and set up parental controls on Windows 10 in this step-by-step tutorial.",
                author: "Thomas Jones",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "How to Set up Chromebook Parental Controls",
                desc:
                    "Do you wish to set up Chromebook parental controls for your kids? Read this informative post and learn how to make the most of parental control Chromebook.",
                author: "Thomas Jones",
                date: "2025-09-02 20:10:50",
            },

            {
                title: "10 Best Computer Monitoring Software for Parents [2025]",
                desc:
                    "Computer monitoring can help parents to regulate their children's online safety and behaviors. Here are the 10 best computer monitoring software for parents.",
                author: "Thomas Jones",
                date: "2025-09-02 20:10:50",
            },
        ],
        //Chromebook Guide
        ChromebookGuide: "Chromebook Guide",
        Hereyouanfin76: "Here you can find a lot of information about Chromebooks, including how to use them better and how to set up parental control with it.",
        AllChromebookGuide: "All Chromebook Guide",
        Chromebo65okGuide: [
            {
                title: "How to Turn off Parental Controls on a Chromebook?",
                desc:
                    "Do you have a kid and you activated parental control on your Chromebook which you want to get rid of? Read this article about how to turn off parental",
                img: "https://famisafe.wondershare.com/images/article/2022/11/turn-off-account-parental-control-1.jpg",
            },
            {
                title: "4 Simple Ways to Download Discord on Chromebook",
                desc:
                    "If you want to know how to carry out a Discord Chromebook download, this article is for you. We will show you 4 easy ways to install Discord on",
                img: "https://famisafe.wondershare.com/images/article/2022/04/download-discord-on-chromebook.png",
            },
            {
                title: "How to Play Friday Night Funkin on Chromebook? [Unblocked]",
                desc:
                    "Is it possible to play hot web game Friday Night Funkin on a Chromebook? The answer is YES! Get 3 ways here while preventing FNF addiction.",
                img: "https://famisafe.wondershare.com/images/article/2021/12/screen-time/unblocked-sites-for-fnf.jpg",
            },
        ],
        Chromebo66okGuide: [
            {
                title:
                    "How to Play Friday Night Funkin on Chromebook? [Unblocked]",
                desc:
                    "Is it possible to play hot web game Friday Night Funkin on a Chromebook? The answer is YES! Get 3 ways here while preventing FNF addiction.",
                author: "Moly Swift",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "Can You Set Screen Time on Google?",
                desc:
                    "Are you worried your child is consuming too much Google screen time? This article teaches you how to set screen time on Chromebook, Google App, and Chrome browser.",
                author: "Moly Swift",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "Top 8 Best Chromebooks for Kids",
                desc:
                    "Do you have any idea about the best Chromebook for kids? If you want to know more about the Chromebooks for kids just step into this article.",
                author: "Moly Swift",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "How to Turn off Parental Controls on a Chromebook?",
                desc:
                    "Do you have a kid and you activated parental control on your Chromebook which you want to get rid of? Read this article about how to turn off parental controls.",
                author: "Moly Swift",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "4 Simple Ways to Download Discord on Chromebook",
                desc:
                    "If you want to know how to carry out a Discord Chromebook download, this article is for you. We will show you 4 easy ways to install Discord on Chromebook.",
                author: "Moly Swift",
                date: "2025-09-02 20:10:50",
            },

            {
                title: "Super Easy: How to Set Up Geforce Now on Chromebook",
                desc:
                    "Did you know you could set up Geforce now on Chrome? I bet you thought you needed a Windows or Mac system to do that, right? Well, you don’t; and this blog will show you how you can set up Geforce Now on Chromebook.",
                author: "Ankhi Bhattacharya",
                date: "2025-09-02 20:10:50",
            },
        ],
        /// Block Apps
        BlockApps: "Block Apps",
        Text8755essageCall: "Text Message, Call, Number and Ad Blocker Apps for Android and iPhone",
        AllBlockpps: "All Block Apps",
        Chromebo55okGuide: [
            {
                title: "8 Website Blocker Apps: Which One Keeps You Focused?",
                desc:
                    "Discover 8 top website blocker apps for focus and safety in 2025. Block distractions and stay productive — try FamiSafe for smarter parental",
                img: "https://famisafe.wondershare.com/images/article-trans-image/2151/website-blocker-app-1.jpg",
            },
            {
                title: "How to Block Twitter/X on Browsers & Mobile Devices",
                desc:
                    "Looking for how to block X or Twitter on mobile devices and browsers with ease? Get to know the simple steps needed to limit distractions or manage",
                img: "https://famisafe.wondershare.com/images/article-trans-image/1193/block-x-1.jpg",
            },
            {
                title: "8 Best Facebook Blockers to Protect Your Kids Online",
                desc:
                    "Discover the best Facebook blocker apps to enhance focus and productivity. Set time schedules with given apps to avoid wasting hours on Facebook",
                img: "https://famisafe.wondershare.com/images/article-trans-image/426/facebook-blocker-01.jpg",
            },
        ],
        Chromebo56okGuide: [
            {
                title:
                    "10 Best Phone Number Blocker Apps",
                desc:
                    "Looking for a powerful phone call blocking app for either you or your child’s phone? Here’s a complete guide with everything you need to know!",
                author: "Thomas Jones",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "8 Website Blocker Apps: Which One Keeps You Focused?",
                desc:
                    "Discover 8 top website blocker apps for focus and safety in 2025. Block distractions and stay productive — try FamiSafe for smarter parental control today.",
                author: "Thomas Jones",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "Top 10 Free Spam Call Blocker Apps for Android 2025",
                desc:
                    "Discover 10 best free call blocker apps for your Android phone to stop spam, robocalls, and unknown numbers. Stay protected with smart call filters.",
                author: "Thomas Jones",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "8 Best iPhone App Blockers for Worried Parents in 2025",
                desc:
                    "Worried about your child's iPhone usage? Our guide reviews the 8 best iPhone app blocker apps for parents. Choose the ideal parental control solution for your family's peace of mind.",
                author: "Thomas Jones",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "How to Block Twitter/X on Browsers & Mobile Devices",
                desc:
                    "Looking for how to block X or Twitter on mobile devices and browsers with ease? Get to know the simple steps needed to limit distractions or manage access.",
                author: "Thomas Jones",
                date: "2025-09-02 20:10:50",
            },

            {
                title: "6 Call Blocker Apps for iPhone You Must Know in 2025",
                desc:
                    "Discover the top call blocker app for iPhone to stop spam and robocalls easily. Each app helps you manage unknown callers and protect your iPhone from fraud.",
                author: "Thomas Jones",
                date: "2025-09-02 20:10:50",
            },
        ],

        ///BlockGame
        BlockGame: "Block Games",
        Learnft6howto: "Learn how to block inappropriate games on kid's digital devices, keep them to get away from game porn or game addiction.",
        AllBlockGames: "All Block Games",
        Chromebo5j5okGuide: [
            {
                title: "Is Pokémon Go Safety for Kids? Parent's Guide [2025]",
                desc:
                    "Pokémon Go safety warning alerts remind players about real-world risks. Learn what these warnings mean and find some safety tips to enjoy Pokémon",
                img: "https://famisafe.wondershare.com/images/article-trans-image/2034/pokemon-go-safety-warning-1.jpg",
            },
            {
                title: "How to Set up WoW Parental Controls [2025 Updated]",
                desc:
                    "This guide explains the World of Warcraft parental controls and the steps to access them. You will also discover an advanced controlling app as an",
                img: "https://famisafe.wondershare.com/images/article/2025/02/wow-parental-controls-1.jpg",
            },
            {
                title: "How to Block Inappropriate Roblox Games: Parent's Guide",
                desc:
                    "This guide shares 7 Inappropriate Games on Roblox kids love. Learn how to use FamiSafe to protect your kids from inappropriate Roblox games.",
                img: "https://famisafe.wondershare.com/images/article/2024/04/top-7-inappropriate-games-on-roblox-01.jpg",
            },
        ],
        Chromebo5j6okGuide: [
            {
                title:
                    "How to Block Inappropriate Roblox Games: Parent's Guide",
                desc:
                    "This guide shares 7 Inappropriate Games on Roblox kids love. Learn how to use FamiSafe to protect your kids from inappropriate Roblox games.",
                author: "Ankhi Bhattacharya|",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "Top 12 Games Not Blocked by School That Parents Should Know",
                desc:
                    "Discover 12 popular game sites not blocked by school networks. Learn why kids love them and how parents can guide safe, balanced online gaming habits.",
                author: "Joanne Croft",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "Is Gacha Club Safe for Kids? Parent Guide",
                desc:
                    "Gacha club, just like any other online game, has several kids hooked. This article provides all the information you need about Gacha Club to promote digital well-being.",
                author: "moly Swift",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "Is Pokémon Go Safety for Kids? Parent's Guide [2025]",
                desc:
                    "Pokémon Go safety warning alerts remind players about real-world risks. Learn what these warnings mean and find some safety tips to enjoy Pokémon Go securely.",
                author: "Thomas Jones",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "7 Unblocked Game on Google Sites That Kids Like Play",
                desc:
                    "Are you worried about your kids playing unblocked games on Google Sites always? Here is the guide on how to block unblocked games and prevent game addiction.",
                author: "moly Swift",
                date: "2025-09-02 20:10:50",
            },

            {
                title: "How to Block Hentai Games Sites? What Parents Should Know",
                desc:
                    "How to block Hentai game apps or sites on kids' devices? Try parental control apps like FamiSafe to prevent children from accessing inappropriate content,.",
                author: "moly Swift",
                date: "2025-09-02 20:10:50",
            },
        ],


        // Block Porn
        Blockorn: "Block Porn",
        Accessingporno: "Accessing pornography at an early age has a negative effect on your kids. Check here to learn how to block porn on your kid's devices.",
        AllBlockPorn: "All Block Porn",
        AllBlockPo544ern: [
            {
                title: "How to Block Adult Content on Chrome: Complete Parental Safety",
                desc:
                    "Discover ways to learn how to block adult content on Chrome. Ensure controlled browsing for families and adults while preventing exposure to mature",
                img: "https://famisafe.wondershare.com/images/article-trans-image/2725/how-to-block-adult-content-on-chrome-1.jpg",
            },
            {
                title: "How to Block Pornhub to Keep Your Family Safe",
                desc:
                    "Protect your family from adult content online by learning how to block Pornhub. This guide explains easy ways to create a safe and secure digital",
                img: "https://famisafe.wondershare.com/images/article-trans-image/2713/how-to-block-pornhub-1.jpg",
            },
            {
                title: "What Is & How to Block Spotify Porn Content",
                desc:
                    "Learn how to block porn on Spotify. Discover effective solutions that protect kids from explicit podcasts, audio porn, and inappropriate playlists.",
                img: "https://famisafe.wondershare.com/images/article-trans-image/388/spotify-porn-blocking-parental-guide-banner.jpg",
            },
        ],
        AllBlockPorn567ytg: [
            {
                title:
                    "10 Best Porn Blockers in 2025",
                desc:
                    "Looking for the best porn blocker apps? Discover the top 10 apps for mobile & desktop to block adult content, ensure online safety, and protect your family.",
                author: "Ankhi Bhattacharya|",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "How to Block Porn Websites [2025 Solution]",
                desc:
                    "Want to block porn sites on your kid’s smartphones and computers? Read on and learn how to block adult content on Windows, Mac, Android, and iOS.",
                author: "Joanne Croft",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "How to Block Adult Content on Chrome: Complete Parental Safety Guide",
                desc:
                    "Discover ways to learn how to block adult content on Chrome. Ensure controlled browsing for families and adults while preventing exposure to mature websites.",
                author: "jackson Smith",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "How to Block Pornhub to Keep Your Family Safe",
                desc:
                    "Protect your family from adult content online by learning how to block Pornhub. This guide explains easy ways to create a safe and secure digital environment.",
                author: "moly Swift",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "NSFW Discord Servers: Lists & Safety Tips (Updated!)",
                desc:
                    "Discover top 10 NSFW Discord servers featuring adult content and exclusive 18+ perks. This article explores the best options to explore for bold chats and more.",
                author: "aknhi Bhattacharya",
                date: "2025-09-02 20:10:50",
            },

            {
                title: "Twitter Porn - Everything Parents Need to Know",
                desc:
                    "We discuss what porn on Twitter is, how to protect your kids, and what resources are available to help you deal with this issue.",
                author: "moly Swift",
                date: "2025-09-02 20:10:50",
            },
        ],

        // Block YouTube
        BlockouTube: "Block YouTube",
        Worryingaboutwhatyou: "Worrying about what your kids are watching on YouTube? You will find everything about YouTube parental control here.",
        AllBlockYouTube: "All Block YouTube",
        BlockouTube6543: [
            {
                title: "How to Block Ads on Android YouTube So Your Kids Don’t Click",
                desc:
                    "If you want to protect your kids from harmful Youtube ad content, this guide can help. Learn how to block ads on Youtube on Android to keep your",
                img: "https://famisafe.wondershare.com/images/article/2018/08/a-complete-guide-on-youtube-parental-control-1.jpg",
            },
            {
                title: "Top 8 Blocked YouTube Channels in 2025! Parents Can't-Miss",
                desc:
                    "There are so many YouTube channels out there, but some channels are not suitable for kids. Know those channels and adopt parental control for kids device.",
                img: "https://famisafe.wondershare.com/images/article/2022/04/most-blocked-youtube-channels.png",
            },
            {
                title: "Best 12 YouTube Channels Parents Should Watch with Kids",
                desc:
                    "This post shares 12 excellent YouTube channels for kids to keep them entertained and educated. Learn how to use the YouTube parental control settings to",
                img: "https://famisafe.wondershare.com/images/article/2021/11/family-apps/watch-youtube-with-kids.png",
            },
        ],
        BlockouTube0987: [
            {
                title:
                    "How to Block Ads on Android YouTube So Your Kids Don’t Click on Them",
                desc:
                    "If you want to protect your kids from harmful Youtube ad content, this guide can help. Learn how to block ads on Youtube on Android to keep your kids safe from harm.",
                author: "moly Swift",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "Guide to Install and Use YouTube Kids on Amazon Fire [2025]",
                desc:
                    "Want to know how to install and use YouTube Kids on Amazon Fire? Here you can get 2 methods, including use APK and run a Windows PC-based Script. Explore now!",
                author: "Joanne Croft",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "How Kids Use YouTube Unblocked and Other Tools to View Blocked Content",
                desc:
                    "Worried about your child visiting websites they shouldn’t or accessing YouTube unblocked? We’ll tell you how they’re doing it and what you can do to prevent it.",
                author: "jackson Smith",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "How to Block Videos on YouTube in 2025",
                desc:
                    "Want to block videos on YouTube to keep your kids away from harmful content? Discover the top three methods, including a reliable parental control app.",
                author: "Thomas Jones",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "How to Set Parental Controls on YouTube - 4 Easy Ways",
                desc:
                    "Do you want to know how to put a parental lock on YouTube? Don't worry, there are 4 effective methods to turn on restricted mode on YouTube.",
                author: "Thomas Jones",
                date: "2025-09-02 20:10:50",
            },

            {
                title: "A Complete Guide on YouTube Parental Control with FamiSafe",
                desc:
                    "Read guide to learn how to block YouTube on Android & iPhone. We have also provided a stepwise solution to block someone on YouTube as well.",
                author: "Thom",
                date: "2025-09-02 20:10:50",
            },
        ],
        /// Phone Monitoring
        PhoneMonitoring: "Phone Monitoring",
        Learnhowtosetuppa: "Learn how to set up parental monitoring on different devices, and how to use the most popular parental monitoring apps.",
        AllPhoneMonitoring: "All Phone Monitoring",
        PhoneMonitoringggfgd54: [
            {
                title: "How to Check Internet Browsing History on Android & iPhone - 7",
                desc:
                    "Get 7 simple ways to check internet browsing history on Android or iPhone — including how to view incognito history and monitor kids’ online",
                img: "https://famisafe.wondershare.com/images/article-trans-image/2146/how-to-check-internet-browsing-history-1.jpg",
            },
            {
                title: "How to View my Incognito History on Android Phone (2025 Guide)",
                desc:
                    "Want to protect your kids from explicit and harmful content? This article provides 5 easy methods on how you can view incognito history on an Android",
                img: "https://famisafe.wondershare.com/images/article-trans-image/2092/view-my-incognito-history-on-android-phone-1.jpg",
            },
            {
                title: "How to Check Chat History in WhatsApp? 3 Quick Ways",
                desc:
                    "Discover how to check chat history in WhatsApp using its archive and search feature. You can quickly find hidden messages or view old chats on any",
                img: "https://famisafe.wondershare.com/images/article-trans-image/872/how-to-check-chat-history-whatsapp-1.jpg",
            },
        ],
        PhoneMonitoring423d: [
            {
                title:
                    "How Can I See My TikTok Watch History?",
                desc:
                    "Have you ever refreshed your TikTok For You Page accidentally? Then the video you were watching was just gone. It's easy to find it back if you've liked it, but if you haven't, it would be a little challenging. Read this, we will tell you how to see your TikTok watch history.",
                author: "moly Swift",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "TikTok Monitoring for Brands and Parents: 5 Best Tools & Strategies",
                desc:
                    "Learn the importance of TikTok monitoring and explore 5 tools to track the brand's performance. Explore how businesses can manage their presence on social media.",
                author: "THOmas Jones",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "How to Block a Number on Whatsapp",
                desc:
                    "Blocking WhatsApp number on phones isn’t enough. You can take control of you kids WhatsApp by using parental control app like Famisafe.",
                author: "Ankhi Bhattacharya",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "How to View my Incognito History on Android Phone (2025 Guide)",
                desc:
                    "Want to protect your kids from explicit and harmful content? This article provides 5 easy methods on how you can view incognito history on an Android phone.",
                author: "Thomas Jones",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "How to See What My Kid is Doing on Phone [2025]",
                desc:
                    "Learn how to monitor phone activity of an Android or iPhone. We have come up with a stepwise tutorial for parents to monitor cell phone activity of their kids.",
                author: "Thomas Jones",
                date: "2025-09-02 20:10:50",
            },

            {
                title: "How to See Incognito History on Your Child's Device",
                desc:
                    "Discover the best app to see incognito history on your child’s device. Learn how you can see and save browsing activities from your child’s iOS, Android or desktop.",
                author: "MIly Swift",
                date: "2025-09-02 20:10:50",
            },
        ],
        /// Anti Billying
        AntiBullying: "Anti-Bullying",
        Getautomaticalertso: "Get automatic alerts on the potential risk of cyberbullying words with FamiSafe's detection features.",
        AllAntiBullying: "All Anti Bullying",
        AntiBullyi655rfng: [
            {
                title: "Can Cyberbullies Go to Jail for Cyberbullying?",
                desc:
                    "Cyberbullying can have very negative implications on the physical and mental wellbeing of your children. We find out if cyberbullying if illegal and",
                img: "https://famisafe.wondershare.com/images/article/2019/11/can-cyberbullies-go-to-jail-for-cyberbullying-1.jpg",
            },
            {
                title: "Find Out Effective Solutions to Bullying in School",
                desc:
                    "This article will enlighten you on what cyberbullying entails and ways to prevent cyberbullying. It will also highlight the best parental control app to help",
                img: "https://famisafe.wondershare.com/images/article/2019/11/ways-to-prevent-cyberbullying-2.jpg",
            },
            {
                title: "Find Out Effective Solutions to Bullying in School",
                desc:
                    "While bullying in schools still remains a widespread problem, you can also find some solutions to bullying in schools, and FamiSafe can realize the benefits it",
                img: "https://famisafe.wondershare.com/images/article/2018/09/find-out-effective-solutions-to-bullying-in-school-1.jpg",
            },
        ],
        AntiBullyi76tgbnng: [
            {
                title:
                    "Can Cyberbullies Go to Jail for Cyberbullying?",
                desc:
                    "Cyberbullying can have very negative implications on the physical and mental wellbeing of your children. We find out if cyberbullying if illegal and how we can counter it.",
                author: "moly Swift",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "How Does Cyberbullying Start and How to Deal With Cyberbullying?",
                desc:
                    "This article will enlighten you on what cyberbullying entails and ways to prevent cyberbullying. It will also highlight the best parental control app to help protect your kids from potential cyberbullies.",
                author: "THOmas Jones",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "Effects of Bullying: Why Is Bullying Bad for Kids?",
                desc:
                    "Know the short term and lifelong effects of bullying, why is bullying bad, major statistics related with bullying, whom should bullying be reported to, and how can parents make use of FamiSafe to make sure their kids do not fall prey to cyberbullying.",
                author: "Ankhi Bhattacharya",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "How to Protect your Kids from Text Bullying",
                desc:
                    "Even it is hard to detect some instances of text bullying, but with the help of FamiSafe, you get to keep your kids safe from bullying text messages.",
                author: "Thomas Jones",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "What to Do If Someone is Bullied by Social Media",
                desc:
                    "Bullying on social media is a problem that must be tackled at all costs, so as to foster a safe environment for kids to grow and flourish. Here FamiSafe is the best choice for you.",
                author: "Thomas Jones",
                date: "2025-09-02 20:10:50",
            },

            {
                title: "Top 5 Best Anti-Bullying Programs in Schools",
                desc:
                    "This article a top lists of anti bullying programs in schools which will help in keeping school campuses bully-free. If you are looking for such apps then you can consider FamiSafe as its extensive features will save kids from bullying.",
                author: "MIly Swift",
                date: "2025-09-02 20:10:50",
            },
        ],



        // Teen Sexting
        TeenSexting: "Teen Sexting",
        Sextingisanincreasi: "Sexting is an increasing concern among today's teenagers. To learn more about sexting, you will find this topic useful.",
        AllTeenSexting: "All Teen Sexting",
        TeenSexvftyuting: [
            {
                title: "6 Risky Anonymous Sexting Apps for",
                desc:
                    "Curious about which anonymous sexting apps teens are using? Discover 6 trending apps, how they",
                img: "https://famisafe.wondershare.com/images/article/2019/10/anonymous-sexting-apps-for-teenagers-1.jpg",
            },
            {
                title: "10 Best Sexting Apps: What Parents Must Know",
                desc:
                    "Discover the best sexting apps for private chats in 2025. Compare top options for secure messaging, and",
                img: "https://famisafe.wondershare.com/images/article/2025/05/sexting-app.jpg",
            },
            {
                title: "WhatsApp Sexting in 2025: Risks & Parental..",
                desc:
                    "Understand why WhatsApp sexting is rising among teens in 2025. Learn hidden risks, sexting codes, and how...",
                img: "https://famisafe.wondershare.com/images/article/2025/05/whatsapp-sexting-1.jpg",
            },
        ],
        TeenSeiuhxting: [
            {
                title:
                    "Telegram Sexting: Mechanism, Safety, Risks, & Strategies",
                desc:
                    "Learn how to protect teens from Telegram sexting. Discover its risks, dangers, and parental control tools like FamiSafe to monitor and secure their online safety.",
                author: "Joanne Croft",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "Twitter Sexting: How It Works, What Teens Risk, and How to Stay Safe",
                desc:
                    "Learn how Twitter sexting works, its risks for teens, and how FamiSafe’s parental control tools detect and prevent sextortion, unsafe content, and online grooming.",
                author: "THOmas Jones",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "WhatsApp Sexting in 2025: Risks & Parental Guidance",
                desc:
                    "Understand why WhatsApp sexting is rising among teens in 2025. Learn hidden risks, sexting codes, and how to protect your child safely with FamiSafe.",
                author: "Ankhi Bhattacharya",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "Is Sexting Legal or Illegal? – Things Parents Should Know",
                desc:
                    "Is sexting legal or illegal? Learn the laws, risks, and consequences of teen sexting in this guide to help parents and teens stay safe and informed.",
                author: "Ankhi Bhattacharya",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "Dangerous Sexting Sites That Parents Should Know",
                desc:
                    "Sexting sites can have dangerous effects on your kids. Check here for the 5 common teen sexting sites, how they affect teens, and how you can protect your kids.",
                author: "mily Swift",
                date: "2025-09-02 20:10:50",
            },

            {
                title: "What should parents do for teen sexting?",
                desc:
                    "Worried about your teen sexting? Don’t know what to do? Keep track of their online activities remotely with FamiSafe and get peace of mind. Read on to learn more.",
                author: "jony croft",
                date: "2025-09-02 20:10:50",
            },
        ],
        //web filtering
        WebFiltering: "Web Filtering",
        BestInternetContentFil: "Best Internet Content Filters and Web Filtering that parents should know and 100% works.",
        AllWebFiltering: "All Web Filtering",
        WebFiltering54df: [
            {
                title: "How to Block Websites on iPhone/iPad [3 Tested..",
                desc:
                    "Learn 3 tested ways to block websites on iPhone or iPad — protect kids, stay focused, and take full control of your..",
                img: "https://famisafe.wondershare.com/images/article-trans-image/2145/how-to-block-websites-on-iphone-1.jpg",
            },
            {
                title: "How to Block Websites on Firefox – Step-by-Step..",
                desc:
                    "Want to know how to block websites on Firefox? Discover easy methods for safer browsing on any device and see...",
                img: "https://famisafe.wondershare.com/images/article-trans-image/2144/how-to-block-websites-on-firefox-1.jpg",
            },
            {
                title: "10 Best Internet Filtering Software for Safe..",
                desc:
                    "ULooking for the best internet filtering software in 2025? Discover top 10 tools with key features and expert tips...",
                img: "https://famisafe.wondershare.com/images/article-trans-image/2142/internet-filtering-software-1.jpg",
            },
        ],
        WebFil76gfrtering: [
            {
                title:
                    "6 safe browsing apps for kids",
                desc:
                    "This article will explain what safe browser for kids is and the reason for safe browsing. Likewise, it will tackle how to make browsers kid-friendly using the best tool.",
                author: "Thomas Jones",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "A Complete Guide for Chrome Filter [3 Effective Methods]",
                desc:
                    "Looking for the best way to Google filter on the Chrome web browser to protect yourself or your loved ones from unsuitable content on the internet? This article is a complete guide on how to use Chrome filter to restrict access to certain websites, providing three different methods",
                author: "Jone craft",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "How to Check Your Child's Online Web Browser History",
                desc:
                    "Using browser history tracker parents can watch the online activities of their child and protect them from unexpected impact in their life.",
                author: "Thomas Jones",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "How to Block Websites on Firefox – Step-by-Step Guide",
                desc:
                    "Want to know how to block websites on Firefox? Discover easy methods for safer browsing on any device and see how FamiSafe helps protect your family online.",
                author: "Ankhi Bhattacharya",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "10 Best Internet Filtering Software for Safe Browsing [2025]",
                desc:
                    "Looking for the best internet filtering software in 2025? Discover top 10 tools with key features and expert tips — start protecting your family's online safety today!",
                author: "mily Swift",
                date: "2025-09-02 20:10:50",
            },

            {
                title: "10 Best Internet Filters for Families in 2025",
                desc:
                    "The article lists the top 10 internet filters for safeguarding children online, blocking inappropriate online content with these internet filter software. FamiSafe is recommended as the best internet filter for families across multiple platforms.",
                author: "moly sefty",
                date: "2025-09-02 20:10:50",
            },
        ],

        // Teen Slang
        TeenSlang: "Teen Slang",
        Moreandmoreteen: "More and more teens are using slang to text each other. Parents who want to understand what kids are talking about can learn slangs here.",
        AllTueenSlang: "All Teen Slang",
        TeenSlanghtge: [
            {
                title: "What Is “Big Back”? Meaning, Risks, Trends..",
                desc:
                    "Discover the meaning of \"Big Back\" on social media, its impact on teens, and how it influences body image. Learn.",
                img: "https://famisafe.wondershare.com/images/article/2025/05/big-back-slang-meaning-banner.jpg",
            },
            {
                title: "What Does the Red Heart Mean on Snapchat? What..",
                desc:
                    "Learn what the red heart means on Snapchat, how it impacts relationships, and how to monitor and...",
                img: "https://famisafe.wondershare.com/images/article/2025/05/red-heart-snapchat-banner.jpg",
            },
            {
                title: "ATP Meaning: Decoding the Slang Across Social..",
                desc:
                    "Are you a parent confused by the ATP meaning in slang? Learn how teens use it on social media platforms, like..",
                img: "https://famisafe.wondershare.com/images/article/2025/05/atp-meaning-1.jpg",
            },
        ],
        TeenSlanglkwdes: [
            {
                title:
                    "Sneaky Link: Understanding What It is and Protecting Your Teens",
                desc:
                    "Discover \"Sneaky Link\" meaning, risks, and protection tips. Learn how FamiSafe can help safeguard teens in the digital world.  ",
                author: "moly Swift",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "Seeing ONS, FWB, and NSA on Teen's Phone? Be Cautious!",
                desc:
                    "What's the meaning of ONS? What's the meaning of FWB? And what's the meaning of NSA? Parents may easily overlook such teen slang while they can suggest kids are doing dangerous things!",
                author: "moly Swift",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "Warning: Parents Must Not Overlook These Drug Slangs!",
                desc:
                    "Common drug slangs you should never ignore. Find out the meaning of drug slangs like 420, 420 friendly, etc. teenagers use in their text messages and social media. Learn how to block messages, restrict social media, and filter slang words on your kid's mobile.",
                author: "moly Swift",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "What does BTS Mean? 3 Most Common Explanations!",
                desc:
                    "BTS can mean different things in different texts. For fans of Korean-pop, they are referring to a boy band; for a commonly used abbreviation, BTS means Be There Soon; It can also mean other things, check it out!",
                author: "moly Swift",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "Parents Be Aware: F word Slangs that Teens Use in Chatting",
                desc:
                    "Are you worried about the F-word slangs that your teens use? Does your kid use AF, FML, and true AF frequently? Here is a complete guide on AF meaning, FML meaning, True AF meaning and how you can monitor the use of F-word slangs in your teen's phone.",
                author: "mily Swift",
                date: "2025-09-02 20:10:50",
            },

            {
                title: "The Ultimate Guide to Gen Z Slang: 25 Words You Must Know",
                desc:
                    "Do you feel like your Gen Z family members speak a different language? We are here to teach you their dictionary so you can establish a smooth conversation.",
                author: "joanne croft",
                date: "2025-09-02 20:10:50",
            },
        ],


        // Trending App Review
        TrendingAppReview: "Trending App Review",
        FamiSafehelpspare: "FamiSafe helps parents pick suitable apps for kids like games, study app, or other types of apps.",
        AllTrendingAppReview: "All Trending App Review",
        TrendingAppReview765G: [
            {
                title: "Is Ask.fm Safe for Your Kids? Ultimate App Review..",
                desc:
                    "Worried about your child on the Ask.fm app? Our 2025 review covers cyberbullying, predators, and other dangers. Learn how to protect your family with FamiSafe..",
                img: "https://famisafe.wondershare.com/images/article-trans-image/92/is-askfm-app-safe.jpg",
            },
            {
                title: "Flixtor Alternatives: 11 Safer Sites for Streaming Without Worries..",
                desc:
                    "Explore top 11 Flixtor alternatives offering secure movie streaming for kids and teens. These family-friendly platforms will help you avoid risky pop-ups....",
                img: "https://famisafe.wondershare.com/images/article/2025/05/flixtor-alternatives-1.jpg",
            },
            {
                title: "13 Putlocker Alternatives for HD Movie Streaming [2025]..",
                desc:
                    "Discover the 13 best Putlocker alternatives to enjoy free, safe movie streaming. Compare features and safety tips to enjoy your favorite films online...",
                img: "https://famisafe.wondershare.com/images/article/2025/05/putlocker-alternatives-1.jpg",
            },
        ],
        TrendingAppReviewWSDDE43: [
            {
                title:
                    "Leading 5 Private Screenshot Apps You Must Know",
                desc:
                    "Are you thinking about how you can protect your child from harmful content? This article offers the top private screenshot apps to monitor your kid’s activity.  ",
                author: "moly Swift",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "Is Replika Safe? What You Need To Know Before Using It",
                desc:
                    "Is Replika safe? Yes, Replika is safe for most users, but concerns about privacy and content exist. Learn how to stay secure while using this AI app.",
                author: "moly Swift",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "What Is Minecraft & Is It Safe For Kids?",
                desc:
                    "Minecraft is becoming more popular with kids, and parents are more worried. Is it safe and how to prevent your child from Minecraft Addiction? Explore answers here..",
                author: "moly Swift",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "Is Viber Safe? A Comprehensive Look at Their Security for Users",
                desc:
                    "BTS can mean different things in different texts. For fans of Korean-pop, they are referring to a boy band; for a commonly used abbreviation, BTS means Be There Soon; It can also mean other things, check it out!",
                author: "moly Swift",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "Is Viber Safe? A Comprehensive Look at Their Security for Users",
                desc:
                    "Are you worried about the F-word slangs that your teens use? Does your kid use AF, FML, and true AF frequently? Here is a complete guide on AF meaning, FML meaning, True AF meaning and how you can monitor the use of F-word slangs in your teen's phone.",
                author: "mily Swift",
                date: "2025-09-02 20:10:50",
            },

            {
                title: "Is 4chan Safe? What Parents Need to Know",
                desc:
                    "Is 4chan safe to browse? Learn the risks of 4chan, how to protect yourself, and use parental control apps like FamiSafe to keep kids safe online.",
                author: "joanne croft",
                date: "2025-09-02 20:10:50",
            },
        ],


        /// Parental App Review
        ParentalAppReview: "Parental App Review",
        Therearevariousofpar: "There are various of parental control apps on the market. This topic will help you find the most suitable one for you.",
        AllParentalAppReview: "All Parental App Review",
        ParentalAppReview654f: [
            {
                title: "Bark App Review: Features, Pricing, and Verdict.",
                desc:
                    "This Bark review explores key features, pricing, pros, and cons of the platform. Discover if it’s the right choice for your family to protect kids online..",
                img: "https://famisafe.wondershare.com/images/article/2025/04/bark-review-1.jpg",
            },
            {
                title: "Norton Family Review 2025: What Parents Should Know?",
                desc:
                    "This Norton Family review breaks down its features, pricing, and real-world performance. See if it’s worth it—and explore its alternative for digital parenting...",
                img: "https://famisafe.wondershare.com/images/article/2025/04/norton-family-banner.png",
            },
            {
                title: "Aura Review: Is It Worth the Price for Your Family?.",
                desc:
                    "Looking for a reliable parental control app? This in-depth Aura review explores its features, pricing plans, pros, and cons. Protect family's digital safety now..",
                img: "https://famisafe.wondershare.com/images/article/2025/04/aura-review-1.jpg",
            },
        ],
        ParentalAppReview878h: [
            {
                title:
                    "Top 8 Baby Monitoring Apps [Android & iPhone]",
                desc:
                    "Looking for the best baby monitoring apps? Check out these top 8 picks for Android & iPhone to watch over your baby with live video, audio, and smart alerts.  ",
                author: "moly Swift",
                date: "2025-10-17 09:56:49",
            },
            {
                title: "Google Family Link vs Microsoft Family Safety [2025]",
                desc:
                    "Both Family Link and Family Safety are free parental apps developed by tech giants. Wondering which is the best for your family? Take a look!",
                author: "moly Swift",
                date: "2025-09-12 18:18:58",
            },
            {
                title: "How Do I Use Family Link on Computer or Laptop?",
                desc:
                    "If you are worried about your child spending too much time on computer or laptops, you must want to set up a family link on your child's device. This article will tell you how!.",
                author: "Ankhi Bhattacharya",
                date: "2025-09-12 18:05:24",
            },
            {
                title: "Top Nintendo Switch Games for Family Party! [Free included]",
                desc:
                    "Nintendo Switch is always the best console to play with family and friends together. Wondering what games are the best and free to play? Learn it here!",
                author: "moly Swift",
                date: "2025-09-10 11:42:12",
            },
            {
                title: "What Is Microsoft Family Safety & How to Use It",
                desc:
                    "Discover how Microsoft Family Safety helps parents monitor their child’s phone usage. This guide explains how to use this tool and its reliable alternative.",
                author: "thomas jones",
                date: "2025-09-02 20:10:50",
            },

            {
                title: "Kaspersky Safe Kids review: what should parents really know?",
                desc:
                    "Get an in-depth understanding of Kaspersky safe kids entailing its pros and cons and whether kids can get rid of it easily. Also, learn its best alternative that promises online safety.",
                author: "joanne croft",
                date: "2025-09-02 20:10:50",
            },
        ],
        //ParentalAppRivew
        ParentalAppRivew: "Parenting Tips",
        Parenting65is: "Parenting is not an easy task, and learning from the wisdom of others will always benefit you. Find useful tips here to make parenting easier.",
        // ===== Sidebar Data with URL and target (all open in new page) =====
        sidebarItems: [
            { title: "Screen Time Control", url: "/screen-time", target: "_blank" },
            { title: "Block Games", url: "/block-games", target: "_blank" },
            { title: "Phone Monitoring", url: "/phone-monitoring", target: "_blank" },
            { title: "iOS Parental Control", url: "/ios-parental-control", target: "_blank" },
            { title: "Track Location", url: "/track-location", target: "_blank" },
            { title: "Android Parental Control", url: "/android-parental-control", target: "_blank" },
            { title: "Internet Filter", url: "/internet-filter", target: "_blank" },
            { title: "Location Sharing", url: "/location-sharing", target: "_blank" },
            { title: "Block Apps", url: "/block-apps", target: "_blank" },
            { title: "Chrome Book Guide", url: "/chromebook-guide", target: "_blank" },
            { title: "Parental Control Tips", url: "/parental-tips", target: "_blank" },
            { title: "App Reviews", url: "/app-reviews", target: "_blank" },
            { title: "Parental App Reviews", url: "/parental-app-reviews", target: "_blank" },
            { title: "Social Media App", url: "/social-media-app", target: "_blank" },
            { title: "Anti-bullying", url: "/anti-bullying", target: "_blank" },
        ],
        articles: [
            {
                title: "Internet Safety: An Important Lesson to Kids",
                desc: "The internet is no longer safe for children. The increased number of unrated sites calls for extra safety measures. Internet safety laws can only do so much...",
                author: "Thomas Jones",
                date: "09/10/2021",
                avatar: "https://i.pravatar.cc/24",
            },
            {
                title: "Top 10 Car Trackers You Need To Know",
                desc: "This article will show you the top 10 car GPS trackers that you need to know about. With these car GPS trackers...",
                author: "Thomas Jones",
                date: "09/10/2021",
                avatar: "https://i.pravatar.cc/24",
            },
            {
                title: "10 Things You Should Never Say to Children",
                desc: "Your child's upbringing and safety is your utmost concern. Children are sensitive and can be easily affected...",
                author: "Thomas Jones",
                date: "09/10/2021",
                avatar: "https://i.pravatar.cc/24",
            },
            {
                title: "How to Block People on WhatsApp",
                desc: "Sometimes, we need to block people on WhatsApp for certain reasons to get a high level of protection...",
                author: "Thomas Jones",
                date: "09/10/2021",
                avatar: "https://i.pravatar.cc/24",
            },
            {
                title: "Top 10 Tracking Devices & Apps for Kids",
                desc: "We have picked up the top 10 best tracking devices and apps that you can use to track your children...",
                author: "Thomas Jones",
                date: "09/10/2021",
                avatar: "https://i.pravatar.cc/24",
            },
            {
                title: "Best T-Mobile Kids Smart Watch Phones",
                desc: "These days most mobile smartwatch wearable items come loaded with multiple features that render it all the more useful...",
                author: "Thomas Jones",
                date: "09/10/2021",
                avatar: "https://i.pravatar.cc/24",
            },
        ],

        //{/*============================== Resource===================================*/}

        //Screentime-For-Kids
        ParentsScreenTimeNow: "Parents Can't-Miss, Reducing Kids' Screen Time Now!",
        Overtheyearsthetr: "Over the years, the trend of excessive use of digital devices like smartphones, laptops, and tablets has become popular among little children. Given the negative impacts of bad digital practices on kids' mental and physical health, parents often seem confused about what's is ideal screen time for pediatrics. With the help of FamiSafe, you can easily manage your family screen time. Read on to find more.",
        Howmuchtimedoyourkid: "How much time do your kids spend online every day?",
        Amazingscreentim: "Amazing: screen time of 9 hours a day!",

        //// Amazing: screen time of 9 hours a day!
        Comparisonof54children: " Comparison of children's screen time before and after  using FamiSafe",
        Averagedaily6665min: "Average daily minutes kids spent on screen",
        Before: "Before",
        After: "After",
        Beyond6hours: "Beyond 6 hours every day!",
        Accordingto65CDC: "According to CDC's investigation and research, the average child's daily use of mobile phones has reached 6 hours, and some children even spend more than 9 hours in front of electronic devices.",
        TheKidsscreentimeh: "The Kids' screen time has been reduced by nearly 4 hours after using FamiSafe.(FamiSafe 2020, Oct.)",
        Thingskidsusuallydoi: "Things kids usually doing online",
        Social32: "Social 32%",
        Game16: "Game 16%",
        Video41: "Video 41%",
        Music2: "Music 2%",
        Morehan: "More than",
        ofscreentime: " of screen time kids spend on videos and games.",
        FamiSafe2020: "FamiSafe, 2020",
        Otherstatisticsab: "Other statistics about kids' screen time:",
        ofkidshavebeen: "of kids have been online by the age of 2.",
        areconcernedthei: "are concerned their kids have too much screen time.",
        of8yearoldskids: "of 8-11 year-olds kids have access to a ",
        tabletat4home: "tablet at home.",
        ofkidshavetheir: "of kids have their own smartphone before starting secondary school.",
        parentzoneorguTh: "（parentzone.org.uk）The screen time of children aged 6-12 increased by",
        duringheCoronavirus: "during the Coronavirus. （almost all U.S. states ",

        /// Prevent Excessive screen time
        PreventE4656xcessivescr: "Prevent Excessive screen time",
        Negative345EffectsofExces: "Negative Effects of Excessive Screen Time",
        Easilya4544ddicted: "Easily addicted to the electronic world",
        Stayupl55atelack: "Stay up late & lack of sleep",
        Visionl555ossweigh: "Vision loss & weight gain",
        Distract444edinstud: "Distracted in study and decreased grades",
        Childrendailyscreentim: "Children's daily screen time is 8 times that of exercise time, and some children do not even do exercise at all.",
        Teensagesto5541: "Teens ages 13 to 18 get 8 to 10 hours of sleep a night and log at least 1 hour of physical activity every day. stanfordchildrens.org",

        // Negative Effects of Excessive Screen Time
        NegativeEffectsofExc: "Negative Effects of Excessive Screen Time",
        Under2ZEROscreentime: " Under 2 – ZERO screen time 2-5 – No more than 1 hour/day.6-18 – No more than 2 hours/day.",
        Onlylessthanaquart: "Only less than a quarter of children can do it, and parents are their most useful helpers in reducing screen time.",
        Averagetimepercentage: "Average time percentage of Kid's favorite ",
        socialapps: "social apps",

        Averagetimeperce: "Average time percentage of Kid's favorite video apps",
        instagramandouTubear: "instagram and YouTube are the most commonly used social and video software for children. Normally, they spend at least 3 hours a day on this; most children who use FamiSafe spend at least half of their time on this.(FamiSafe 2020, Oct.)",
        Managesyourkid: "Manages your kids' screen time by FamiSafe",
        Electronicdevices: "Electronic devices are too attractive to children. Without the guidance and br management of their parents, children would even be onlineall day long, which is not conducive to the growth and development of children. Children can access the Internet and there are many different devices, and sometimes you are not with them. This is why you need a comprehensive app like FamiSafe to help you manage your kids' screen time.",

        feature54s: [
            {
                title: "Activity Report",
                description:
                    "View the device usage in a timeline form. Check which application or website is used or visited at what time. Get to know what your teens are up to in real-time.",
            },
            {
                title: "Track & Limit Screen Time",
                description:
                    "Track how much time teens spend on their Macs and set up a daily screen time usage limit to restrict their usage. Parents can also block the device remotely.",
            },
            {
                title: "Browser History Checking",
                description:
                    "Know what teens are browsing or searching online to understand them better. Get the browser history simultaneously. You can also track browser records under incognito mode.",
            },
            {
                title: "Block & Filter Web Content",
                description:
                    "Block or allow specific websites. Filter sites by 7+ inbuilt categories including Adults, Drugs, Gambling, Tobacco, Violence, and others.",
            },
            {
                title: "Flexible Schedule Setting",
                description:
                    "Set up different schedules to block or allow certain apps for different occasions. Parents can choose to block games during study time.",
            },
            {
                title: "Overused or Inappropriate Applications Blocking",
                description:
                    "Check which applications are used most or block inappropriate apps completely on Mac.",
            },
            {
                title: "Multiplatform Supported",
                description:
                    "Android, iOS, Fire OS, macOS, and Windows platforms supported. Track children’s online behavior in one app.",
            },
        ],
        featuresv: [
            {
                icon: Clock,
                color: "bg-purple-500",
                title: "24/7 All-Around Protection",
                desc: "FamiSafe runs on kid's devices all day round to protect kids from both real-life and online dangers.",
            },
            {
                icon: Zap,
                color: "bg-orange-500",
                title: "Timely Alerts",
                desc: "Whenever an issue is detected on kid's devices, parents will receive immediate notification on their end.",
            },
            {
                icon: ShieldCheck,
                color: "bg-emerald-400",
                title: "Privacy Protected",
                desc: "FamiSafe uses the RSA cryptosystem for secure data transmission. Your information is only viewable by you.",
            },
            {
                icon: RefreshCcw,
                color: "bg-teal-400",
                title: "Three-day Free Trial",
                desc: "A three-day free trial is provided for new users. Download and test the app first to see if it can meet your needs before you decide to make the purchase.",
            },
            {
                icon: SlidersHorizontal,
                color: "bg-yellow-400",
                title: "Flexible Subscription",
                desc: "With one FamiSafe account, you can protect up to 5 devices with the monthly plan, 10 devices with the quarterly and annual plan.",
            },
            {
                icon: MessageCircle,
                color: "bg-purple-500",
                title: "Live Chat Support",
                desc: "FamiSafe values our customers and makes a great effort to ensure a great customer experience. Our support is available via email, telephone, and live chat.",
            },
        ],
        featuredLogos: [
            "TECH TIMES",
            "XDA",
            "AppAdvice",
            "Pocket-lint",
            "TweakTown",
            "techradar",
            "DIGITAL TRENDS",
        ],

        screenTimeData: {
            title: "Manage screen time on Android devices:",
            sections: [
                {
                    heading: "1. Limit your kids' screen time on their devices",
                    paragraphs: [
                        "By using Digital Wellbeing & parental controls, you can view the total screen time of your child, including unlock time and notification counts.",
                        "You can set daily timers for frequently used apps and specify allowed screen time. Enable sleep mode and focus mode to help children rest and concentrate.",
                    ],
                },
                {
                    heading: "2. Set Samsung Kids Mode",
                    paragraphs: [
                        "Find Digital Wellbeing on your child's device and set timers. Use Wind Down and Focus Mode to manage parental controls.",
                        "Parents can protect Samsung Kids Mode with a PIN and restrict access to harmful content.",
                    ],
                },
                {
                    heading: "3. Huawei Digital Balance",
                    paragraphs: [
                        "Use Digital Balance to monitor phone usage, view screen time duration, and manage app usage limits effectively.",
                    ],
                },
                {
                    heading: "* Want to manage more?",
                    paragraphs: [
                        "For Android devices, the device itself has these time monitoring and management functions, and their principles of action are similar, but this seems not enough. Sometimes you only need to limit the use time of a certain device, such as prohibiting your child from opening a certain game or watching YouTube videos while studying; or sometimes you kids were not around but you want to know what there are doing on their devices; also you want your child put down the electronic equipment to study and exercise at the stipulated time. It only takes a few minutes to learn about FamiSafe, dedicated to helping you overcome these problems.",
                    ],
                },
            ],

            imageInfo: {
                src: "https://famisafe.wondershare.com/images/images-2020/screen-time/img2.png",
                title: "Android Screen Time Management",
                description:
                    "FamiSafe focuses on helping parents protect their children and let parents know more about children's digital world. After you use FamiSafe on your child's Android device, you can view your child's activity report on the device at any time on your own phone, and you can set a Smart Schedule for your child.<br/> The most important thing is that you don't need to constantly question your children, or confiscate your children's mobile phones and check what they are doing. This may often make you quarrelsome. After using FamiSafe, you can set up some parental controls on your phone and help them develop better online habits.",
            },
        },
        screenTimeDatav: {
            title: "Manage screen time on iOS/OS devices:",
            sections: [
                {
                    heading: "1. Limit your kids' screen time on their devices",
                    paragraphs: [
                        "Set Screen Time on your kids' iPhone/iPad/ /Mac.The iPhone Screen Time feature provides a daily/weekly Activity Report. To check the report, you will need to enable Screen Time on your kid's device first.",
                        "You can choose to set the screen time in the settings, then select This is My Child's device and set a special password to ensure that only you can control the child's screen time. Afterward, you can always get reports on how to use the device, application and website.",
                    ],
                },
                {
                    heading: "2. Using Family Sharing to manage a child account",
                    paragraphs: [
                        "In addition, you can also use \"Family Sharing\" to configure your child's device from your own device. After setting up your child's device, you can also use the Family Sharing function to view reports and adjust settings directly on your own device to control your child's Downtime, App Limits, Communication Limits, Always Allowed, Content & Privacy Restrictions.",
                        "After setting the downtime, your child will not be able to use the device with the \"Screen Time\" feature enabled during this time period and will receive a reminder five minutes before the start.",
                        "Set App Limits to set daily limits for app categories, and limit the use of entertainment apps when your child needs to study or do other activities. App Limits refresh every day at midnight, and you can delete them at any time.",
                    ],
                },
                {
                    heading: "* Tips for using Family Sharing:",
                    paragraphs: [
                        "You can subscribe and purchase together with up to six members who use Apple devices. Family sharing supports iPhone/iPad/iPod touch with iOS 8 and above, and Mac devices with OS X Yosemite or above. After you add your child to the Family Sharing member, you can remotely control your child's screen time.",
                    ],
                },
                {
                    heading: "* Want to know more?",
                    paragraphs: [
                        "How old are the parental controls in Apple devices applicable to children?  The official recommended age is 8-12.",
                        "Can I monitor all my children through a mobile phone? Yes, there are many parental monitoring apps on the market, such as FamiSafe. Parents can monitor at least 5 children's devices with their own devices."
                    ],
                },
            ],

            imageInfo: {
                src: "https://famisafe.wondershare.com/images/images-2020/screen-time/img3.png",
                title: "Can I use my Android phone to manage my kids iPhone, iPad or Mac?",
                description:
                    "Yes! FamiSafe can help you realize cross-terminal parental monitoring, no matter if your child is using iOS, OS, Mac, Win or Kindle Fire device; you only need to hold your iPhone or Android mobile phone, you can grasp the child's device dynamics in one hand. And FamiSafe can also help you monitor suspicious content on your child's device, set up a geofence, and protect your child's safety when you are not around.",
            },
        },
        screenTimeDatad: {
            title: "Manage screen time on Android devices:",
            sections: [
                {
                    heading: "Limit your kids' screen time on their computer",
                    paragraphs: [
                        "If your child often uses a Windows system computer, you can actually manage your child's computer screen time. Windows 10 parental control allows you to set an appropriate access plan and limit the total usage for each day of the week. You can set daily total screen time limits and access schedules.",
                        "The time limit can be set from zero to twelve hours, in half-hour increments. By default, the total access time is unlimited. If your child needs to use their device outside of the screen time limit you set, they can choose to request another time. You will receive an email with options to approve or reject their request",
                    ],
                },
                {
                    heading: "* How does it work?",
                    paragraphs: [
                        "First, please go back to the \"Account\" menu under \"Settings\". Under \"Family and others\" you will see your child's account and a new option to manage family settings online.",
                        "Windows 10's your information settings menu with highlighted online management family settings Click \"Manage Family Settings Online\" to open the Microsoft Family Parental Control page in the Web browser.",
                        "If your child's account is successfully set up, your parental control page should look like the following, with an entry for each child under your supervision, then you can:",
                        "Set up a sub-account; Limit screen time & Schedule screen time; Allow/block websites; Limit games; Check which apps and websites your child browses..",
                    ],
                },
                {
                    heading: "*What should parents know?",
                    paragraphs: [
                        "The parental monitoring function of the windows system is very limited. You must set it up on your child's device before using it. In addition, if you have a Microsoft account and use Microsoft Family Safety, you can also bind your child to your device to set screen time limits for apps and games (Windows, Xbox) on your child's device..",
                    ],
                },
            ],

            imageInfo: {
                src: "https://famisafe.wondershare.com/images/images-2020/screen-time/img5.png",
                title: "Can I remotely monitor my child's computer?",
                description:
                    "Yes! After you use the FamiSafe parental control app, you can easily manage your child's computer usage remotely. When you are not with your child, you want to know what they are doing on the computer, and sometimes worry that they may watch videos or play computer games for a long time and forget to study and exercise. You can limit it through FamiSafe's Smart schedule and App Block.",
            },
        },
        screenTimeDataz: {
            title: "Manage screen time on iOS/OS devices:",
            sections: [
                {
                    heading: "1. Limit your kids' screen time on their devices",
                    paragraphs: [
                        "Set Screen Time on your kids' iPhone/iPad/ /Mac.The iPhone Screen Time feature provides a daily/weekly Activity Report. To check the report, you will need to enable Screen Time on your kid's device first.",
                        "You can choose to set the screen time in the settings, then select This is My Child's device and set a special password to ensure that only you can control the child's screen time. Afterward, you can always get reports on how to use the device, application and website.",
                    ],
                },
                {
                    heading: "2. Using Family Sharing to manage a child account",
                    paragraphs: [
                        "In addition, you can also use \"Family Sharing\" to configure your child's device from your own device. After setting up your child's device, you can also use the Family Sharing function to view reports and adjust settings directly on your own device to control your child's Downtime, App Limits, Communication Limits, Always Allowed, Content & Privacy Restrictions.",
                        "After setting the downtime, your child will not be able to use the device with the \"Screen Time\" feature enabled during this time period and will receive a reminder five minutes before the start.",
                        "Set App Limits to set daily limits for app categories, and limit the use of entertainment apps when your child needs to study or do other activities. App Limits refresh every day at midnight, and you can delete them at any time.",
                    ],
                },
                {
                    heading: "* Tips for using Family Sharing:",
                    paragraphs: [
                        "You can subscribe and purchase together with up to six members who use Apple devices. Family sharing supports iPhone/iPad/iPod touch with iOS 8 and above, and Mac devices with OS X Yosemite or above. After you add your child to the Family Sharing member, you can remotely control your child's screen time.",
                    ],
                },
                {
                    heading: "* Want to know more?",
                    paragraphs: [
                        "How old are the parental controls in Apple devices applicable to children?  The official recommended age is 8-12.",
                        "Can I monitor all my children through a mobile phone? Yes, there are many parental monitoring apps on the market, such as FamiSafe. Parents can monitor at least 5 children's devices with their own devices."
                    ],
                },
            ],

            imageInfo: {
                src: "https://famisafe.wondershare.com/images/images-2020/screen-time/img4.png",
                title: "Can I use my Android phone to manage my kids iPhone, iPad or Mac?",
                description:
                    "Yes! FamiSafe can help you realize cross-terminal parental monitoring, no matter if your child is using iOS, OS, Mac, Win or Kindle Fire device; you only need to hold your iPhone or Android mobile phone, you can grasp the child's device dynamics in one hand. And FamiSafe can also help you monitor suspicious content on your child's device, set up a geofence, and protect your child's safety when you are not around.",
            },
        },
        tips: [
            {
                id: 1,
                title: "Lead by example",
                desc:
                    "It is easy for children to imitate the behavior of others. Please believe that self-discipline is more persuasive than anything else.",
            },
            {
                id: 2,
                title: "Encourage other activities",
                desc:
                    "Encourage your child to find and participate in activities that do not require a screen. You can also play board games with your children and take them out to play more.",
            },
            {
                id: 3,
                title: "Explain why to limit the screen time",
                desc:
                    "If you tell your child the dangers of excessive screen time and encourage your child to participate in other activities, your child may be more likely to follow your arrangements.",
            },
            {
                id: 4,
                title: "Keep screen off during activities",
                desc:
                    "Keep children away from electronic devices, they will be interested in other activities, while ensuring their study and sleep.",
            },
            {
                id: 5,
                title: "Earn screen time",
                desc:
                    "Children are required to earn screening time by doing homework, doing housework, listening to music or doing physical exercise, playing outdoors, etc.",
            },
            {
                id: 6,
                title: "Ensure efficient screen time",
                desc:
                    "Children may be exposed to any content on the Internet, including content that is not child-friendly; in addition, the quality of children's online content should also be guaranteed.",
            },
        ],
        bloggs: [
            {
                id: 1,
                title: "Apps to limit screen time on Android and iOS.",
                image:
                    "https://famisafe.wondershare.com/images/article/2018/09/free-apps-to-limit-screen-time-on-android-and-iphone-1.png",
                path: "/apps-to-limit-screen-time",

            },
            {
                id: 2,
                title: "How to Check Screen Time on iPhone?",
                image:
                    "https://famisafe.wondershare.com/images/article/2018/09/how-to-check-screen-time-on-iphone.png",
                path: "/apps-to-limit-screen-time",
            },
            {
                id: 3,
                title: "8 Easy Tips to Reduce Screen time",
                image:
                    "https://famisafe.wondershare.com/images/article/2018/09/Kids-timer-app-best-way-to-control-time-on-iphone-and-ipad-2.png",
                path: "/apps-to-limit-screen-time",
            },
            {
                id: 4,
                title: "AAP Recommended Screen Time",
                image:
                    "https://famisafe.wondershare.com/images/article/2019/11/computer-screen-eye-strain-1.png",
                path: "/apps-to-limit-screen-time",
            },
        ],


        ///BlockPorn
        SeeHowE987asilyYou: "See How Easily You Can Block Porn on Teen's Device",
        Intodaywo98rldporno: "In today’s world, pornography is no longer limited to printed material like magazines only. Teenagers can access pornography online easily using their smart devices like phones, tablets, and PCs. Therefore, teens get exposed to pornography more and get addicted easier.Fortunately, parents can also seek modern technology's assistance like FamiSafe to block porn on teens' devices.",

        // Take a second to help us expand our adult website database
        Takease0987condtohe: "Take a second to help us expand our adult website database",
        Pornog987raphiwebsit: "Pornographic websites are growing at an unprecedented rate. Although we keep updating our adult websites database, it is still challenging to keep updated. We need your help to expand our adult websites database and better protect our kids. Take a second to write down the adult websites you know and make the internet safer for our teens.",
        Pleases9087ubm: "Please submit the adult websites you know here.",
        Bysubmitt9087ingy433: " By submitting, you agree to our EULA & Privacy Policy.",

        // Do you know how your kids get access to porn?
        Doyoukno098whowyo: "Do you know how your kids get access to porn?",
        Pornogr908aphymayex: "Pornography may exist in every aspect of your daily life. When your teens are with their phones, do you know how they get accessed to porn? The below data may shine some light on you.",
        Adultsi09tes: "#1 Adult sites:",
        Pornographicsite: "Pornographic sites or adult sites are the most common source of porn on teen's device. Incognito/private browsing allows teenagers to hide their browser history easily. Yet FamiSafe is still able to record browser history under these modes.",
        Teens9898Mostvisi: "Teen’s Most-visited Adult Websites Recorded by FamiSafe",
        Pornr098elate: " #2 Porn related messages",
        Textin098gisoneo: "Texting is one of the most common communication tools used by today's teens. Thus, it can also be used to share inappropriate information like pornographic  novels, sexual messages, or other explicit descriptions.",
        Filthyw987ordsdete: "Filthy words detected by FamiSafe’s Explicit Content Detection",
        Pornpict987ures: "#3 Porn pictures",
        Picture87sthatconta: "Pictures that contain nudity, porn-related factor, or sex are also found on teens' photo albums.",
        FamiSafe6578hasdetec: "FamiSafe has detected more than 1700 suspicious images in the past 30 days.",
        /// Manages your kids' screen time by FamiSafe
        Managesyour656ki: "Manages your kids' screen time by FamiSafe",
        Electronic67devices: " Electronic devices are too attractive to children. Without the guidance and br management of their parents, children would even be online all day long, which is not conducive to the growth and development of children. Children can access the Internet and there are many different devices, and sometimes you are not with them. This is why you need a comprehensive app like FamiSafe to help you manage your kids' screen time.",


        Howtoblockporn: "How to block porn on your teen's device using Google SafeSearch",
        GoogleSafeSearchaims: "Google SafeSearch aims to protect young kids from age-inappropriate content. It uses algorithms to detect and block suspicious images, writings, or web pages on the search result pages. For keeping kids away from pornographic websites, Google SafeSearch is a good choice, yet it is limited to Google search engine only.",

        TurnonGoogleSafeSearc: " Turn on Google SafeSearch in the Google app",
        Launchthebro: "Launch the browser on your Windows or Mac.",
        Typeinwwwgoogle: "Type in www.google.com on the address bar to open the Google page.",
        ClicktheSetting: "Click the Settings on the bottom right corner.",
        SelectSearcet: "Select Search Settings.",
        Checktheboxin: "Check the box in front of Turn on SafeSearch to enable it.",
        ClickSaveatthebo: "Click Save at the bottom of the page to save the changes.",

        OpenGoogleAppo: "Open Google App on your iPhone or Android phone.",
        Tapyourprofilepic: "Tap your profile picture at the top right and then tap Settings.",
        TapGeneralandthen: "Tap General and then Search Settings.",
        Scrolldowntofind: "Scroll down to find SafeSearch filter.",
        TapHidexplicitres: "Tap Hide explicit results to turn on SafeSearch.",

        Howtobl665ockporn: "How to block porn on your teen's device using DNS Service",
        WhatisNSDNSstandsfo: "What is DNS? DNS stands for Domain Name System. When we search for anything online, DNS translates our words to numbers that computers can read. In summary, DNS links our devices to the rest of the internet. To block porn on your teen's devices, you can change your default DNS IP to the DNS address that will filter adult websites.",
        ChangingDNStore: "Changing DNS to restrict porn access on Android",
        ChangingDNSonAndroidp: "Changing DNS on Android phones is not difficult at all. Here are the general steps you will need to follow.",
        TurnonGoogleSaf: "Turn on Google SafeSearch on Windows and Mac",
        Launchthebrowser: "Launch the browser on your Windows or Mac.",
        Typeinwwwgoogle: "Type in www.google.com on the address bar to open the Google page.",
        ClicktheSetting: "Click the Settings on the bottom right corner.",
        SelectearchSettings: "Select Search Settings.",
        Checktheboxinfront: "Check the box in front of Turn on SafeSearch to enable it.",
        ClickSaveatthebo: "Click Save at the bottom of the page to save the changes.",
        ClickSaveatthebo: "Click Save at the bottom of the page to save the changes.",


        ChangeiPhoneiPad: "Change iPhone/iPad DNS to block porn sites",
        OnyourkidiPhon: "On your kid’s iPhone or iPad, go to Settings > WLAN.",
        ScrolltofindtheWi: "Scroll to find the Wi-Fi network that you would like to change the DNS server IP.",
        TapConfigureDNS: "Tap Configure DNS and choose Manual.",
        Entertheoneyou: "Enter the one you would like to use, and tap Save.",
        NoteIfyourte: "Note: If your teen used more than one internet connection, you need to change the setting separately.",

        Filterpornconte: "Filter porn content on Windows 10 by changing DNS",
        Therearethreewa: "There are three ways to change the DNS on your teen's Windows 10. Parents can make changes to the DNS using Control Panel, Command Prompt, and Settings App. Here we will introduce how to change DNS via Control Panel.",
        OnthetargetWindows: "On the target Windows device, go to Control Panel > Network and Sharing Center > Change adapter settings.",
        Youwillfindalis: "You will find a list of internet connections. Select the connection you would like to change the DNS, right-click it, and select Properties.",
        UnderThisconnec: "Under This connection uses the following items select Internet Protocol Version 4 TCP/IPV4 and then click the Properties button.",
        SelectUsethefollowi: "Select Use the following DNS server addresses option and type in the DNS server IP you would like to use.",

        Change45MacDNStop: "Change Mac DNS to prevent teens' access to porn sites",
        Whenitomesto56han: "When it comes to changing the DNS on Mac, the steps are simpler compared with changing the DNS on Windows.",
        OnyourteenMa888ccli: "On your teen's Mac, click the Apple menu on the top left corner and click System Preference > Network.",
        Alisy65tofnetworks: "A list of networks will appear on the left, select the network connection service you would like to change the DNS, click Advanced.",
        Click55DNSaddthe: "Click DNS, add the + button at the bottom of the DNS Servers list.",
        Entert65rheIPaddress: "Enter the IP address of the DNS server you would like to use.",
        ickOKwh87yhenyoufin: "Click OK when you finish the setting.",

        Howtoblockpor54nony: "How to block porn on your teens' device using a built-in content filter?",
        Contentfil45teringh: "Content filtering has also raised attention among companies like Apple, Google, and Microsoft. Content restriction is included in their latest released system versions to limit adult websites and reduce kids' exposure to age-inappropriate information.",

        TurnonContentRest: "Turn on Content Restriction on iOS device",
        Applehasintroducedt: "Apple has introduced the parental control feature since the release of iOS 12. Parents will be able to set up content restrictions using the Screen Time feature. Here are the steps to apply content restrictions on iOS devices.",
        OnyourteeniOSd: "On your teen's iOS device, go to Screen Time, tap Continue and choose \"This is My Child's [iPhone/iPad]",
        Setupaparentalpas: "Set up a parental passcode to prevent your kids from changing the setting. For devices that run on iOS 13.4 and later versions, you will need to provide your Apple ID and password.",
        TapContentPrivacyR: "Tap Content & Privacy Restrictions, turn on Content & Privacy.",
        Youcanfilterexplicitc: "You can filter explicit content, limit web content, set up age ratings for music, TV shows, books, and apps under this feature.",

        UseMicroso23ftFamilySaf: "Use Microsoft Family Safety to block access to porn",
        MicrosoftF23amilySafe: "Microsoft Family Safety is a built-in feature in the Windows system that allows parents to set up an account for kids and apply screen time restrictions and filter inappropriate content. Follow the below steps to set up a child account on the target Windows PC.",
        OnyourkidW23indows: "On your kid's Windows PC, go to Settings > Account > Family & other users.",
        ClickAddaF23amilyMe: "Click Add a Family Member and choose the type of account.",
        Enteryour23kidsMicro: "Enter your kid’s Microsoft account. If they don’t have one, you can create one for them.",
        Afteryoup23rovideallt: "After you provide all the information, click Manage family settings online to set up restrictions.",
        Underyou43rchildsa: "5Under your child’s account, select Web Browsing.",
        Turnonth34etoggleun: "Turn on the toggle under Block inappropriate websites. Then adult content will be blocked automatically.",

        UseScreen555TimeonM: "Use Screen Time on Mac to restrict teen’s access to porn",
        Ifyourkid87sareusin: "If your kids are using a Mac instead, you can also use Screen Time to restrict their access to improper online content using the Content & Privacy under Screen Time. We will introduce how to set up Content & Privacy using Family Sharing account.",
        Onyourkid000Maclo: "On your kid's Mac, log into your Mac user account and sign into your Apple ID.",
        ChooseApple09menu: "Choose Apple menu > System Preferences > Screen Time.",
        Youwillrec6eiveap: "You will receive a pop-up menu in the sidebar showing the family member in your group. Choose the one you are setting up the restriction for.",
        GotoConte76ntPri: "Go to Content & Privacy to enable the content filter on the Mac.",
        Ifyouwantt456orest: "If you want to restrict website content, click Content and then select options.",

        Setupparentalcontrol: "Set up parental controls on Google Play to Filter Content",
        Teenscanalsoaccesspo: "Teens can also access pornographic content via certain apps or games. Movies and TVs that are of different age-rating may include pornographic factors. Therefore, Google has introduced parental controls on Google Play to help parents set up control of these contents. Once enabled, parents can choose the highest content rating for app downloading, movies, TV, books, and music.",
        OnyourkidsAndroidd: "On your kid’s Android device, open the Play Store app.",
        Tapenuonthetop: "Tap Menu on the top left corner and then tap Settings > Parental Controls.",
        TurnonarentalControl: "Turn on Parental Controls.",
        SetPINtopreve: "Set a PIN to prevent your kids from changing the setting.",
        Youwillbeableto: "You will be able to set content restrictions on Apps & Games, Films, TV, and Books.",
        Taptheoneyouwoul: "Tap the one you would like to restrict and select the age rating. Then tap Save.",
        FAQAboutBlock: "FAQ About Block Porn",
        faq0s: [
            {
                question: "How will pornography affect your teens’ health?",
                answer:
                    "Getting addicted to pornography will affect both the mental and physical health of your teens. If your kids get access to porn at an early age, they will form an unhealthy understanding of sex and are more likely to practice unsafe sexual practices.",
            },
            {
                question: "Should parents talk to their teens about porn?",
                answer:
                    "Yes, parents need to talk about porn with their teens. Talking to teens about porn can help them form a correct understanding of the sexual relationship in advance and reduce the negative effects of porn.",
            },
            {
                question:
                    "What are the signs of porn addiction?",
                answer:
                    "Spending too much time watching porn. Unable to quit watching porn or limit use. Feel guilt, remorse, or depression after watching porn. Watching porn has caused harmful effects on your daily life.",

            },
            {
                question:
                    "What can parents do to help teens deal with porn addiction?",
                answer:
                    "Suppose your teens have become addicted to pornography. Here are a few things you should do. Talk to your teens openly about it, and do not blame them.Be proactive in helping them form plans to counter porn addiction.Seek support from the local commu nity. Look for available treatment centers and resources.",
            },
        ],
        //// User-Guide-For-School
        heroContent: {
            title: "FamiSafe User Guide for School Administrator",
            image: "assets/images/hero/school-banner-pic-2021.png",
        },

        introContent: {
            title: "FamiSafe User Guide",
            description:
                "The administrator needs to register an account, purchase licenses according to the number of student devices, then add students and connect their devices for management.",
            button: "Register",
        },

        guideSections: [
            {
                title: "Add Student Information",
                steps: [
                    'Open "Class" and create class information.',
                    'Click "Add Student" and enter student name and ID.',
                    "Obtain the corresponding pairing code.",
                ],
                image:
                    "https://famisafe.wondershare.com/images/v50/famisafe-add-student.png",
            },
            {
                title: "Connect Student Devices",
                description:
                    "After activating the administrator account, students must install Fammy on their devices and connect using the pairing code.",
                steps: [
                    "Students download Fammy from the official website.",
                    "Open the app and enter the pairing code.",
                    "Activate the app on the student's device.",
                ],
                image:
                    "https://famisafe.wondershare.com/images/v50/connect-the-device.png",
            },
        ],
        /// video guide
        videos: [
            {
                img: "https://famisafe.wondershare.com/images/images2022/video/how-to-videos1.png",
                title:
                    "How to Block a Facebook Page on Mobile with FamiSafe Parental Control App?",
                link: "https://www.youtube.com/watch?v=VIDEO_ID_1",
            },
            {
                img: "https://famisafe.wondershare.com/images/images2022/video/how-to-videos2.png",
                title: "How to Set Up Windows 10 Parental Controls?",
                link: "https://www.youtube.com/watch?v=VIDEO_ID_2",
            },
            {
                img: "https://famisafe.wondershare.com/images/images2022/video/how-to-videos3.png",
                title: "How to Block Inappropriate Videos on YouTube App?",
                link: "https://www.youtube.com/watch?v=VIDEO_ID_3",
            },
        ],
        videoos: [
            {
                img: "https://i3.ytimg.com/vi/caRo0dxfVC0/hqdefault.jpg",
                title:
                    "How to Block a Facebook Page on Mobile with FamiSafe Parental Control App?",
                link: "https://www.youtube.com/watch?v=VIDEO_ID_1",
            },
            {
                img: "https://famisafe.wondershare.com/images/images2022/video/influencers-videos.png",
                title: "How to Block Inappropriate Videos on YouTube App?",
                link: "https://www.youtube.com/watch?v=VIDEO_ID_2",
            },
            {
                img: "https://i3.ytimg.com/vi/4Jstty4hjQg/hqdefault.jpg",
                title: "How to Block Inappropriate Videos on YouTube App?",
                link: "https://www.youtube.com/tch?v=VIDEO_ID_3",
            },
        ],
        videooss: [
            {
                img: "https://famisafe.wondershare.com/images/v50/tiktok-video1.png",
                title:
                    "Teenager Phone Addiction Would Be Like..",
                link: "https://www.youtube.com/watch?v=VIDEO_ID_1",
            },
            {
                img: "https://famisafe.wondershare.com/images/v50/tiktok-video2.png",
                title: "3 Facts about Parenting life",
                link: "https://www.youtube.com/watch?v=VIDEO_ID_2",
            },
            {
                img: "https://famisafe.wondershare.com/images/v50/tiktok-video3.png",
                title: "Use FamiSafe to Protect Your Kids from Online Predators",
                link: "https://www.youtube.com/watch?v=VIDEO_ID_3",
            },
        ],
        // ================= VIDEO CONTENT =================
        videoList: [
            {
                img: "https://famisafe.wondershare.com/images/v50/famisafe-v50-video.png",
                title: "FamiSafe 5.0 Comes With TikTok Monitoring & School Version",
                link: "https://www.youtube.com/watch?v=VIDEO_ID_1",
            },
            {
                img: "https://img.youtube.com/vi/_L9sAGF7Uho/sddefault.jpg",
                title: "How to Check Private Browsing History?",
                link: "https://www.youtube.com/watch?v=_L9sAGF7Uho",
            },
            {
                img: "https://img.youtube.com/vi/5xUaZRsPTt8/sddefault.jpg",
                title: "Is TikTok Safe for Kids? How to Do TikTok Parental Controls?",
                link: "https://www.youtube.com/watch?v=5xUaZRsPTt8",
            },
            {
                img: "https://img.youtube.com/vi/bXK4Fs2FFmA/sddefault.jpg",
                title: "How to Track Kids' Live Location using FamiSafe?",
                link: "https://www.youtube.com/watch?v=bXK4Fs2FFmA",
            },
        ],
        FamiSafeBryuuandVideoChannel: "FamiSafe Brand Video Channel",
        Vis98tHERE: "Visit HERE",
        BestP75arentalCont: " Best Parental Control App for Android & iOS | Monitor Phone Activity Remotely 2021",
        Influ76encerVideos: "Influencer Videos",
        TikTokV345ideos: "TikTok Videos",

        //// video guidde 
        // content: {
        //     heroTitle: "FamiSafe User Guide",
        //     openGuide: "Opens User Guide",
        //     downloadPdf: "Download PDF",

        //     sectionTitle: "1. Install & Register FamiSafe on Parent's Device",

        //     sectionDescription:
        //         "Get started with FamiSafe by installing & registering a FamiSafe account on the parent's end first. You can also take a look at the app by entering with guest mode.",

        //     step1Title: "Step 1: Download FamiSafe",

        //     step1Description:
        //         "Step 1: Download FamiSafe from Google Play or App Store by searching for FamiSafe directly. Or you can download FamiSafe by Taping the below download buttons.",

        //     step2Title: "Step 2: Go through the FamiSafe new features.",

        //     step3Title:
        //         "Step 3: Register a Wondershare ID for FamiSafe or log in with an Apple, Google, and FaceBook ID.",

        //     step4Title:
        //         "Step 4: Continue as a parent and connect kids' phone with the QR code or pairing code. (Learn more in the 2nd part)",

        //     step5Title:
        //         "Step 5: After the pairing and authorization on the kids' end, set up basic parental control with the started wizard and you are good to go.",

        //     menu: [
        //         "1. Install & Register on Parent's End",
        //         "2. Tie up Kid's Device",
        //         "3. Access Management",
        //         "4. Manage Kid's Device on Parent's Phone",
        //         "5. How to uninstall FamiSafe",
        //     ],
        // },

        // ================= APP STORE LINKS =================
        appStores: [
            {
                name: "App Store",
                href: "https://apps.apple.com/us/app/famisafe-parental-control-app/id1385417904",
                icon: "/assets/images/icons/iphone.png",
            },
            {
                name: "Google Play",
                href: "https://play.google.com/store/apps/details?id=com.wondershare.famisafe",
                icon: "/assets/images/icons/google.png",
            },
        ],
        /// user giude 
        contzent: {
            titlle: "FamiSafe User Guide",
            pdfLink: "/assets/images/doc/product-user-guide.pdf",
            sidebar: [
                "1. Install & Register on Parent's End",
                "2. Tie up Kid's Device",
                "3. Access Management",
                "4. Manage Kid's Device on Parent's Phone",
                "5. How to uninstall FamiSafe",
            ],
            steps: [
                {
                    titlle: "Install & Register FamiSafe on Parent's Device",
                    description:
                        "Get started with FamiSafe by installing & registering a FamiSafe account on the parent's end first. You can also take a look at the app by entering with guest mode.",
                    sections: [
                        {
                            stepTitlle: "Step 1: Download FamiSafe",
                            description:
                                "Download FamiSafe from Google Play or App Store by searching for FamiSafe directly. Or you can download FamiSafe by tapping the buttons below.",
                        },
                        {
                            stepTitlle: "Step 2: Go through the FamiSafe new features.",
                            img: "https://famisafe.wondershare.com/images/user-guide/famisafe-install-step-2.jpg",
                        },
                        {
                            stepTitle:
                                "Step 3: Register a Wondershare ID for FamiSafe or log in with an Apple, Google, and FaceBook ID.",
                            img: "https://famisafe.wondershare.com/images/user-guide/famisafe-install-step-3.jpg",
                        },
                        {
                            stepTitlle:
                                "Step 4: Continue as a parent and connect kids' phone with the QR code or pairing code. (Learn more in the 2nd part)",
                            img: "https://famisafe.wondershare.com/images/user-guide/famisafe-install-step-4.jpg",
                        },
                        {
                            stepTitlle:
                                "Step 5: After the pairing and authorization on the kids' end, set up basic parental control with the started wizard and you are good to go.",
                            img: "https://famisafe.wondershare.com/images/user-guide/famisafe-install-step-5.jpg",
                        },
                    ],
                },
            ],
            appStores: [
                {
                    name: "App Store",
                    href: "https://apps.apple.com/us/app/famisafe-parental-control-app/id1385417904",
                    icon: "/assets/images/icons/iphone.png",
                },
                {
                    name: "Google Play",
                    href: "https://play.google.com/store/apps/details?id=com.wondershare.famisafe",
                    icon: "/assets/images/icons/google.png",
                },
            ],
        },
        OpensUserGuide: "Opens User Guide",
        DownloadPDF: "Download PDF",
        /// FAQ

        /// parental review 
        UserReview: "User Review",
        Overtheyears: " Over the years, we have heard so many voices from our users in different places,  like App Store, SNS, TikTok, etc. We want to share some of the users' stories with you.",
        AwardedbyFamo: "Awarded by Famous Organizations",
        AppStoreUserReview: "App Store User Review",
        GooglePlayUserReview: "Google Play User Review",
        k208Ktotal: "20.8K total",
        COMMENTUS: "COMMENT US",
        FacebookCommunity: "Facebook Community",
        p25Kj: "25K+",
        PeopleLikeThis: "People Like This",
        p30K: "30K+",
        Followers: "Followers",
        reviews: [
            {
                id: 1,
                name: "Goff",
                date: "19. May, 2021",
                image: "https://i.pravatar.cc/60?img=1",
                text: "I have always wanted to ensure that my kids don’t end up falling prey to cyber-crime or child pornography and FamiSafe allows me to do that",
            },
            {
                id: 2,
                name: "Bowers",
                date: "22. June, 2021",
                image: "https://i.pravatar.cc/60?img=2",
                text: "It is time I have stopped calling my kids every moment to enquire about their location because I have this app and the location tracker is just fab!",
            },
            {
                id: 3,
                name: "Temitayo",
                date: "19. June, 2021",
                image: "https://i.pravatar.cc/60?img=3",
                text: "I am very impressed with the dedication your group shows to the protection of family members. FamiSafe is a great application to keep sensitive eyes and ears from the dangers that live on the internet.",
            },
        ],
        reviewss: [
            {
                id: 1,
                name: "Slayer",
                date: "7. April, 2021",
                image: "https://i.pravatar.cc/60?img=1",
                text: "While keeping a tab of the screen time, I realized the kind of obsession my child had for playing games, and I was successful in curing it to some extent.",
            },
            {
                id: 2,
                name: "Avona",
                date: "8. june, 2021",
                image: "https://i.pravatar.cc/60?img=2",
                text: "	It is time I have stopped calling my kids every moment to enquire about their location because I have this app and the location tracker is just fab!",
            },
            {
                id: 3,
                name: "Nothasa",
                date: "9. June, 2021",
                image: "https://i.pravatar.cc/60?img=3",
                text: "I am very impressed with the dedication your group shows to the protection of family members. FamiSafe is a great application to keep sensitive eyes and ears from the dangers that live on the internet.",
            },
        ],
        reviewsse: [
            {
                id: 1,
                name: "Eileen",
                date: "19. may, 2021",
                image: "https://i.pravatar.cc/60?img=1",
                text: "We are fairly new users and so far, so good. And I used the free version then upgraded then AFTER I paid full price I got a discount code. I tried to email to apply the code and got no response. That was frustrating, but other than that it's a good app.",
            },
            {
                id: 2,
                name: "Leeann",
                date: "8. may, 2021",
                image: "https://i.pravatar.cc/60?img=2",
                text: "	I think it would be great for grandparents that has dementia and Alzheimer's, too not just the kids cuz you never know when an elderly person that has Alzheimer or dementia would forget on where they're going or forget where they live.",
            },
            {
                id: 3,
                name: "Amanda",
                date: "9. June, 2021",
                image: "https://i.pravatar.cc/60?img=3",
                text: "I love the fact that I can keep a watchful eye over the kids and still not let them know that I am doing it.",
            },
        ],
        Whatouruserssay: "What our users say",
        ///  compagine 
        awards: [
            {
                id: 1,
                image: 'https://famisafe.wondershare.com/images/images-2021/network-security-q1/share.png',
                subtitle: 'Best Parental App 2025',
                description: 'Recognized globally for providing the most reliable parental controls.',
            },
            {
                id: 2,
                image: 'https://famisafe.wondershare.com/images/famisafe/top.png',
                subtitle: 'Top Safety App',
                description: 'Awarded for promoting digital safety and well-being for kids.',
            },
            {
                id: 3,
                image: 'https://famisafe.wondershare.com/images/v50/nocyberbullying-1.png',
                subtitle: 'Innovation Award',
                description: 'Celebrated for innovative features that empower parents worldwide.',
            },
        ],
        OurMarketingCampaigns: "Our Marketing Campaigns",
        Toraiseattentionandaware: "To raise attention and awareness to educational problems like cyberbullying, internet safety",
        AtTheMoment: "At The Moment",
        Checkoutthelatestup: "Check out the latest updates and features we have added for you.",
        LearnMore: " Learn More",
        OurAchievements: " Our Achievements",
        Overtheyearso: " Over the years, our app has received recognition and awards from renowned organizations.",

        //// What's new
        content: {
            titleTop: "Version History",
            title: "What's New in FamiSafe",
            subtitle:
                "Find the latest product updates on new features, fixes, and other improvements.",

            tryBtn: "TRY 9.0 Free",
            buyBtn: "Buy Now",

            tabs: {
                ios: "iOS",
                android: "Android",
            },

            timelines: {
                ios: [
                    {
                        year: 2025,
                        versions: [
                            {
                                version: "V9.0.0",
                                date: "Dec 31, 2025",
                                changes: [
                                    "AI-powered social media monitoring: Supports 30+ platforms for child safety.",
                                    "Child device usage tracking: Monitor growth and usage patterns.",
                                    "Optimized UI for a smoother parental control experience.",
                                ],
                            },
                        ],
                    },
                    {
                        year: 2024,
                        versions: [
                            {
                                version: "V8.2.0",
                                date: "Nov 19, 2024",
                                changes: ["Improved audio monitoring for better child safety."],
                            },
                            {
                                version: "V8.1.1",
                                date: "Nov 10, 2024",
                                changes: [
                                    "Extended device monitoring with enhanced stability.",
                                ],
                            },
                        ],
                    },
                ],

                android: [
                    {
                        year: 2025,
                        versions: [
                            {
                                version: "V9.0.0",
                                date: "Dec 31, 2025",
                                changes: [
                                    "Android-specific performance improvements.",
                                    "Enhanced battery optimization for long-term usage.",
                                    "New parental dashboard layout for better monitoring.",
                                ],
                            },
                        ],
                    },
                    {
                        year: 2024,
                        versions: [
                            {
                                version: "V8.2.0",
                                date: "Nov 19, 2024",
                                changes: [
                                    "Added Android app notifications for safety alerts.",
                                ],
                            },
                            {
                                version: "V8.1.1",
                                date: "Nov 10, 2024",
                                changes: [
                                    "Improved device compatibility with latest Android OS.",
                                ],
                            },
                        ],
                    },
                ],
            },
        },

        /// footer
        /// TEXT CONTENT
        footerContent: {
            brand: {
                name: "famisafe",
                slogan: "Creativity simplified!",
            },

            sections: {
                heroProducts: {
                    title: "Hero Products",
                    links: [
                        { label: "Location Tracking (GPS)", href: "#" },
                        { label: "Screen Time Control", href: "#" },
                        { label: "App Blocking", href: "#" },
                        { label: "Website Filtering", href: "#" },
                        { label: "SOS Alert", href: "#" },
                    ],
                },

                wondershare: {
                    title: "Wondershare",
                    links: [
                        { label: "Creative Center", href: "#" },
                        { label: "About Us", href: "#" },
                        { label: "Newsroom", href: "#" },
                        { label: "Global Presence", href: "#" },
                        { label: "Founder's Speech", href: "#" },
                        { label: "Careers", href: "#" },
                        { label: "Education", href: "#" },
                    ],
                },

                exploreAI: {
                    title: "Explore AI",
                    links: [
                        { label: "AI Tools", href: "#" },
                        { label: "AI Newsroom", href: "#" },
                        { label: "Marketing", href: "#" },
                        { label: "Social Media", href: "#" },
                        { label: "Education", href: "#" },
                        { label: "Business", href: "#" },
                    ],
                },

                helpCenter: {
                    title: "Help Center",
                    links: [
                        { label: "Contact Us", href: "#" },
                        { label: "Video Community", href: "#" },
                        { label: "Support Center", href: "#" },
                        { label: "Account", href: "#" },
                    ],
                },
            },

            bottomLinks: [
                "Terms and Conditions",
                "Privacy",
                "Terms of Use",
                "Cookie Preferences",
                "Refund Policy",
                "Uninstall",
            ],

            language: "English",

            copyright: "© 2025 Wondershare. All rights reserved.",
        },
        /// annual reporet 
        reportData: [
            {
                id: "01",
                title: "Report Highlight",
                description: "Key insights and important highlights from the report."
            },
            {
                id: "02",
                title: "Introduction",
                description: "Overview of the digital parenting landscape."
            },
            {
                id: "03",
                title: "From Birth to Integration",
                items: [
                    "Generative AI in 2024",
                    "Online and Offline Connection",
                    "The First Smartphone and Tech Free",
                    "Apps Use in 2024"
                ]
            },
            {
                id: "04",
                title: "The Digital Dilemma and Freedom",
                items: [
                    "Parents' Common Concerns",
                    "A Click Away: Access to Obscenity",
                    "Close to Home: The Menace of Cyberbullying",
                    "Unmasking the Shadows: Offline Risk"
                ]
            },
            {
                id: "05",
                title: "Annual Real User Report",
                items: [
                    "Device Management",
                    "AI Monitoring",
                    "Social Media",
                    "Location Tracking",
                    "Offline Protection"
                ]
            },
            {
                id: "06",
                title: "Conclusion",
                items: [
                    "A Reliable SafeKeeper",
                    "Three Major Issues",
                    "Listening to More Voices"
                ]
            }
        ],
        content: {
            title: "Social Media",
            description:
                "As of now, the most popular social media among FamiSafe users is TikTok, followed by YouTube. The average daily usage time is 1.3 hour, accounting for 41.4% of total screen time.",
            buttonText: "Learn More",
            image: "https://famisafe.wondershare.com/images/images-2024/semi-annual-report/part5-img.png",
        },
        sections: [
            {
                id: "intro",
                title: "Introduction",
                desc: "This is our first precious meeting with you in the last six years and marks the release of our first report. To achieve this, we have invited over 10,000 FamiSafe users and their children worldwide for in-depth interviews during this summer vacation. This report provides insights into children's current behavior habits and brings together our anxieties, educational thoughts, and valuable suggestions. Finally, we have obtained a helpful guide on how families can use technology to support education in this digital age. Actively using monitoring tools is an efficient way to protect children from potential dangers in the digital world. However, parental care and companionship are the most effective ways to safeguard children's healthy growth. The report is divided into four parts: the first chapter is an introduction to the current digital world and the background of this report. The second chapter summarizes common concerns among parents, including contentious battles over screen time, sexually explicit content, and cyberbullying; the third chapter is an actual usage data report for parents and children, reflecting the wisdom of parents worldwide; and the four chapter is a conclusion, providing our outlook on the future of digital education. the User Profile of FamiSafe's Parental C",
                image: "https://famisafe.wondershare.com/images/images-2024/semi-annual-report/part8-bg-mobile.png",
            },
            {
                id: "birth",
                title: "Birth to Integration",
                desc: "The digital world is constantly evolving and is nothing short of exhilarating. With the ever-growing popularity and advancements in artificial intelligence technology, the era of interconnectivity has finally arrived.In the first half of 2024, artificial intelligence experienced explosive growth in technology, with generative AI technology remaining highly sought after, providing various services to online users. In 2023 alone, the top 50 AI tools globally generated over 24 billion visits, with an average of 2 billion monthly visits. ChatGPT had the highest usage and popularity, contributing 14.6 billion trips, accounting for over 60% of the total. (Source: Writerbuddy) It is ubiquitous in enterprises, education, and personal learning and life. At the same time, more and more AI virtual technology, AI creation, AI image beautification tools, and text-to-image technology are gaining attention. The growth of AI tools is expected to increase by nearly 40% annually from 2023 to 2030. It can be said that those who do not use AI technology will be eliminated by the times. Chatgpt's Traffic Share by Top Five Countries (Source：SimilarWeb)",
                image: "https://famisafe.wondershare.com/images/images-2024/semi-annual-report/part10-chart-mobile2.png",

            },
            {
                id: "digital",
                title: "Digital Dilemma",
                desc: "Today, online and offline connections are inseparable as a gateway to opportunities and an unseen abyss. The millennial generation's children are born into the era of the internet explosion, being the \"natives\" of the mobile internet age. Tablet computers are also commonly found in households, with at least one dedicated for children's use in 75% of European and American families. Stanford Medicine's research reveals that 25% of children own their first smartphone by the average age of 10.7. Consequently, the average screen time for smart devices among global children reaches 4-5 hour per day, a staggering figure. Children's internet use frequency is nearly as high as that of adults, and it is hard to fathom the amount of information they are exposed to daily.",
                image: "https://famisafe.wondershare.com/images/images-2024/semi-annual-report/part11-img6.png",
            },
            {
                id: "report",
                title: "User Report",
                desc: " I think kids deserve to have their own smartphones in today's society, but we can't just leave them to it. Even adults struggle to control themselves, so how can we expect kids to do it? A 45 year-old parent",
                image: "https://famisafe.wondershare.com/images/images-2024/semi-annual-report/part12-chart.png",
            },
            {
                id: "conclusion",
                title: "Conclusion",
                desc: "In 2024, FamiSafe began to donate to UNICEF to contribute its effort. With more parents joining the FamiSafe family, over 790,000 global users were added in the first half of 2024. On average, FamiSafe's parental app is used 8 times a week averagely, focusing on the weekends. FamiSafe is dedicated to helping parents alleviate their anxieties about education and lack of companionship, and safeguarding children's online and offline safety remains its essential mission in the past, present, and future.From a babbling three-year-old to an independent-thinking teenager, children may encounter countless challenges and obstacles along the way. How to lend a helping hand at each stage of their growth and effectively assist both children and parents is a matter of genuine concern.Therefore, focusing on early childhood education for ages 3-8, we concentrate on helping children resist the temptations of the digital world and avoid potential online risks. We have introduced features such as screen time management, app locking, and time scheduling to cultivate healthy device usage habits..",
                image: "https://famisafe.wondershare.com/images/images-2024/semi-annual-report/part29-img-mobile.jpg",
            },
        ],
        SecuredSharing: "Qooddii Nageenya Qabeessa",
        SeeLovedOnesat: "Namoota Jaallattan Argadhu",
        Hands: "Harka",
        Geonectionprotects: "Geonection bakka itti qooddatan icciitiidhaan (end-to-end encryption) eegda",

        TryitFrees: "Bilisa Yaali",
















    },


};


