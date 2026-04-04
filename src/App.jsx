
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componets/Header.jsx";
import Famisafe from "./Pages/Products/Famisafe/Famisafe.jsx";
import ForScholl from "./Pages/Products/ForScholl/ForScholl.jsx";
import CallsAndMessages from "./Pages/Features/Calls&Messages.jsx";
import ScreenTime from "./Pages/Features/ScreenTime.jsx";
import ScreenViwer from "./Pages/Features/ScreenViwer.jsx";
import AppRole from "./Pages/Features/AppRole.jsx";
import OneWayAudio from "./Pages/Features/OneWayAudio.jsx";
import ActivityReport from "./Pages/Features/ActivityReport.jsx";
import YoutubeParentalControl from "./Pages/Features/ContentSefty/YoutubeParentalControl.jsx";
import TiktokHistory from "./Pages/Features/ContentSefty/TiktokHistory.jsx";
import DetectSuspiciousphotos from "./Pages/Features/ContentSefty/DetectSuspiciousphotos.jsx";
import BlockWebsites from "./Pages/Features/ContentSefty/BlockWebsites.jsx";
import BrowserHistory from "./Pages/Features/ContentSefty/BrowserHistory.jsx";
import LocationTraking from "./Pages/Features/LocationService/LocationTraking.jsx";
import SOSAlart from "./Pages/Features/LocationService/SOSAlart.jsx";
import FamilyTracking from "./Pages/Blogs/LocationTracker/FamilyTracking.jsx";
import LocationSharing from "./Pages/Blogs/LocationTracker/LocationSharing.jsx";
import MobileTracker from "./Pages/Blogs/LocationTracker/MobileTracker.jsx";
import TeenDriving from "./Pages/Blogs/LocationTracker/TeenDriving.jsx";
import BlockApps from "./Pages/Blogs/AppBlocker/BlockApps.jsx";
import BlockGame from "./Pages/Blogs/AppBlocker/BlockGame.jsx";
import BlockPorn from "./Pages/Blogs/AppBlocker/BlockPorn.jsx";
import BlockYoutube from "./Pages/Blogs/AppBlocker/BlockYoutube.jsx";
import PhoneMonitering from "./Pages/Blogs/ActivityMonitering/PhoneMonitering.jsx";
import AntiBillying from "./Pages/Blogs/ActivityMonitering/AntiBillying.jsx";
import TeenSexing from "./Pages/Blogs/ActivityMonitering/TeenSexing.jsx";
import WebFiltering from "./Pages/Blogs/ActivityMonitering/WebFiltering.jsx";
import ParentalAppRivew from "./Pages/Blogs/ParentingKnowledge/ParentalAppRivew.jsx";
import ParentingTips from "./Pages/Blogs/ParentingKnowledge/ParentingTips.jsx";
import TrindingAppRivew from "./Pages/Blogs/ParentingKnowledge/TrindingAppRivew.jsx";
import TeenSlang from "./Pages/Blogs/ParentingKnowledge/TeenSlang.jsx";

import DrivingReport from "./Pages/Features/LocationService/DrivingReport.jsx";
import Header1 from "./componets/NavBar1/Header1.jsx";
import Geonection from "./Pages/Products/Genection/Geonection.jsx";
import DownloadModal from "./Pages/Products/Genection/DownloadModal.jsx";
import ScreenTimeControl from "./Pages/Blogs/ScreenTime/ScreenTimeControl.jsx";
import AndroidParentalControl from "./Pages/Blogs/ScreenTime/AndroidParentalControl.jsx";
import IOSParentalControl from "./Pages/Blogs/ScreenTime/IOSParentalControl.jsx";
import DesktopParentalControl from "./Pages/Blogs/ScreenTime/DesktopParentalControl.jsx";
import ChromebookParentalControl from "./Pages/Blogs/ScreenTime/ChromebookParentalControl.jsx";
import WhatIsNews from "./Pages/Resource/Explore/WhatIsNews.jsx";
import MideaREviw from "./Pages/Resource/Explore/MideaREviw.jsx";
import Campaigns from "./Pages/Resource/Explore/Campaigns.jsx";
import AnnualReport from "./Pages/Resource/Explore/AnnualReport.jsx";
import UserGuideForSchool from "./Pages/Resource/FamisafeGuide/UserGuideForSchool.jsx";
import UserFAQS from "./Pages/Resource/FamisafeGuide/UserFAQS.jsx";
import UserGuide from "./Pages/Resource/FamisafeGuide/UserGuide.jsx";
import VideoGuide from "./Pages/Resource/FamisafeGuide/VideoGuide.jsx";
import ScreentimeForKids from "./Pages/Resource/FeaturedTopic/ScreentimeForKids.jsx";
import FamilyStories from "./Pages/Resource/Explore/FamilyStories.jsx";
import ArtificialIntelligent from "./Pages/Resource/FeaturedTopic/ArtificialIntelligent.jsx";
import NoCyberbullying from "./Pages/Resource/FeaturedTopic/NoCyberbullying.jsx";
import TeenSexting from "./Pages/Resource/FeaturedTopic/TeenSexting.jsx";
import InternetSafetyForkids from "./Pages/Resource/FeaturedTopic/InternetSafetyForkids.jsx";
import CampaignsStopSextortion from "./Pages/Resource/FeaturedTopic/CampaignsStopSextortion.jsx";
import ParentalReview from "./Pages/Resource/Explore/ParentalReviw.jsx";
import Search from "./componets/navBar/search.jsx";
import Pricing from "./componets/navBar/pricing.jsx";
import Homes from "./Pages/Products/Famisafe/Homes.jsx";
import PaymentPage from "./componets/navBar/PaymentPage.jsx";


const app = () => {
  return (<div>

    {/* Language Icon Overlay */}
    <BrowserRouter>
      <Routes>
        <Route element={<Header />} >
        <Route path="/" element={<Homes />} />
          <Route index path="/famisafe" element={<Famisafe />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Price" element={<Pricing />} />
          <Route path="/school" element={<ForScholl />} />
          <Route path="/Call-meassage" element={<CallsAndMessages />} />
          <Route path="/Screen-Time" element={<ScreenTime />} />
          <Route path="/Screen-Viewer" element={<ScreenViwer />} />
          <Route path="/AppRole" element={<AppRole />} />
          <Route path="/One-way-Audio" element={<OneWayAudio />} />
          <Route path="/Activity-Report" element={<ActivityReport />} />
          {/* content Sefity */}
          <Route path="/youtube-parental-controls" element={<YoutubeParentalControl />} />
          <Route path="/tiktok-history" element={<TiktokHistory />} />
          <Route path="/detect-suspicious-text" element={<DetectSuspiciousphotos />} />
          <Route path="/block-websites" element={<BlockWebsites />} />
          <Route path="/Browser-History" element={<BrowserHistory />} />
          <Route path="/kids-location-tracking" element={<LocationTraking />} />
          {/* location sevice */}
          <Route path="/Driving-Report" element={<DrivingReport />} />
          <Route path="/Locaton-Tracking" element={<LocationTraking />} />
          <Route path="/Sos-Alart" element={<SOSAlart />} />
          {/* ========== Blogs ========= */}
          {/* location  Tracker*/}
          <Route path="/Location-Sharing" element={<LocationSharing />} />
          <Route path="/Mobile-Tracking" element={<MobileTracker />} />
          <Route path="/Teen-Driving" element={<TeenDriving />} />
          <Route path="/Family-Tracking" element={<FamilyTracking />} />

          {/* Screen Time */}
          <Route path="/Screen-Time-Blogs" element={<ScreenTimeControl />} />
          <Route path="/Ios-Parental-Controller" element={<IOSParentalControl />} />
          <Route path="/Andriod-Parental-Controller" element={<AndroidParentalControl />} />
          <Route path="/DeskTop-Parental-Controller" element={<DesktopParentalControl />} />
          <Route path="/ChromeBook-Controller" element={<ChromebookParentalControl />} />
          {/* App Blocker */}
          <Route path="/App-Blocks" element={<BlockApps />} />
          <Route path="/Block-Game" element={<BlockGame />} />
          <Route path="/Block-Porn" element={<BlockPorn />} />
          <Route path="/Block-Youtube" element={<BlockYoutube />} />
          {/* Activity monitering */}
          <Route path="/Phone-monitering" element={<PhoneMonitering />} />
          <Route path="/Anti-Billing" element={<AntiBillying />} />
          <Route path="/Teen-Sexing" element={<TeenSexing />} />
          <Route path="/Web-filtering" element={<WebFiltering />} />
          {/* Parenting-Knowledge */}
          <Route path="/Parenting-Tips" element={< ParentingTips />} />
          <Route path="/Parental-App-control" element={< ParentalAppRivew />} />
          <Route path="/Trainding-AppRivew" element={<TrindingAppRivew />} />
          <Route path="/Teen-Slang" element={<TeenSlang />} />

          {/* Resource Pages */}
          {/* Featured Topic */}
          <Route path="/Screentime-For-Kids" element={<ScreentimeForKids />} />
          <Route path="/Artifical-Intelligence" element={<ArtificialIntelligent />} />
          <Route path="/No-Cyber-Bulling" element={<NoCyberbullying />} />
          <Route path="/Teen-Sexting" element={<TeenSexting />} />
          <Route path="/Block-Porn" element={<BlockPorn />} />
          <Route path="/Internet-Safty" element={<InternetSafetyForkids />} />
          <Route path="/Compagin-Stops" element={<CampaignsStopSextortion />} />
          {/* Famisafe Guide */}
          <Route path="/User-Guide-For-School" element={<UserGuideForSchool />} />
          <Route path="/User-FAQS" element={<UserFAQS />} />
          <Route path="/User-Guide" element={<UserGuide />} />
          <Route path="/Video-Guide" element={<VideoGuide />} />
          {/* Explore */}
          <Route path="/What-is-News" element={<WhatIsNews />} />
          <Route path="/Parental-Review" element={<ParentalReview />} />
          <Route path="/Midea-Reviw" element={<MideaREviw />} />
          <Route path="/Campaigns" element={<Campaigns />} />
          <Route path="/Annual-Report" element={<AnnualReport />} />
          <Route path="/Family-Stories" element={<FamilyStories />} />
          <Route path = "/PaymentPage" element= {<PaymentPage />} />

        </Route>
        <Route element={<Header1 />}>
          <Route index path="Geonection" element={<Geonection />} />
          <Route path="/QR-Code" element={<DownloadModal />} />

        </Route>
      </Routes>
    </BrowserRouter>

  </div>)
}


export default app;
