import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./HomePage/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/construction/jquery.localizationTool.css'
import './App.css'
import './assets/css/style.css'
// import './assets/css/style2.css'
import './assets/css/swiper-bundle.min.css'
import './assets/css/slick.css'
import './assets/css/responsive.css'
import './assets/css/intlTelInput.css'
import './assets/css/sScrollBar.css'
import './assets/css/slick-theme.css'
import Footer from "./HomePage/Footer/Footer";

import Footer2 from "./Subpages/AboutUs/Footer2";
import ContactUS from "./Subpages/ContactUS/ContactUS";
import AboutUs from "./Subpages/AboutUs/AboutUs";
import OurTeam from "./Subpages/OurTeam/OurTeam";
import MainIndex from "./HomePage/MainIndex";
import CareerHero from "./Subpages/Career/CareerHero";
import CareerTestimonial from "./Subpages/Career/CareerTesti";
import CareerOpening from "./Subpages/Career/CareerOpening";
import JobOpenings from "./Subpages/Career/CareerOpening";
import ClientBanner from "./Subpages/Clients/ClientBanner";
import TrustedBrands from "./Subpages/Clients/TrustedBrands";
import ClientsMain from "./Subpages/Clients/ClientsMain";
import PressMedia from "./Subpages/PressMedia/PressMedia";
import BannerLifeAtInd from "./Subpages/LifeAtIndTech/LifeAtIndBannerLifeArInd";
import CustomSlider from "./Subpages/LifeAtIndTech/LifeAtIndBannerLifeArInd";
import EventsFestivals from "./Subpages/LifeAtIndTech/EventsAtInd";
import BannerFreeCons from "./Subpages/GetFreeCons/BannerFreeCons";


function App() {
  return (
    <Router>
      <Navbar />
        {/* <MainIndex/>
       */}
      <AboutUs/>
      <Footer/>
      {/* <Footer2/> */}
        {/* <OurTeam/>
      <ContactUS/>
      <CareerHero/>
      <CareerTestimonial/>
      <JobOpenings/>
      <ClientsMain/>
      <PressMedia/>
     <BannerLifeAtInd/>
     <EventsFestivals/>
     <BannerFreeCons/> */}

    </Router>
  );
}

export default App;
