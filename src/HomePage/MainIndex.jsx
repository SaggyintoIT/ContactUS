import React from 'react'
import HeroBanner from './HeroBanner/Hero'
import LogoSlider from './LogoSlider/LogoSlider'
import ServicesSection from './Services/Services'
import IndustriesSection from './Industries/Industries'
import OurWorkSection from './OurWork/OurWork'
import Insights from './Insights/Insights'
import FAQSection from './FaQ/Faq'
import TestimonialSection from './Testimonial/Testimonials'

const MainIndex = () => {
  return (
    <>
    <HeroBanner/>
    <LogoSlider/>
    <ServicesSection/>
    <IndustriesSection/>
    <OurWorkSection/>
    <Insights/>
    <FAQSection/>
    <TestimonialSection/>
    </>
  )
}

export default MainIndex