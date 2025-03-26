import React from 'react'
import coFounder1 from "../../assets/images/cofoundersnew_1.png"
import coFounder2 from "../../assets/images/cofoundersnew_2.png"
import pandit from "../../assets/images/dhirendra_pandit.png"
import Mukesh from "../../assets/images/mukeshsharma.png"
import Avinish from "../../assets/images/cofounders_3.jpg"
const TalentTeam = () => {
  return (
    <section className="bodypx ourworksection bg-white py-80" data-aos="fade-up">
    <div className="container px-md-0">
    <div className="row">
    <div className="col-md-12 text-center">
    <h2 className="">Meet our Talented Team</h2>      
  </div>
   
    <div className="pt-md-5 pt-3 px-0">
    <div className="wrapper">
    <div className="talentedteam-slider flex flex-wrap justify-center gap-6">

    <div className="text-center">
      <img className="rounded100 ph-w" src={pandit}/>
      <span className="d-block fn-24 fw-bold mt-3"> Dhirendra Pandit</span>
      <p className="opc text-dgray">Sr.UI/UX Designer</p>  
    </div>

    <div className="text-center">
      <img className="rounded100 ph-w" src={Mukesh}/>
      <span className="d-block fn-24 fw-bold mt-3"> Mukesh Sharma</span>
      <p className="opc text-dgray">Sr.Web Developer </p>  
    </div>
    <div className="text-center">
      <img className="rounded100 ph-w" src={coFounder2}/>
      <span className="d-block fn-24 fw-bold mt-3"> Avinish Kalura</span>
      <p className="opc text-dgray">UI/UX Designer</p>  
    </div>
    <div className="text-center">
      <img className="rounded100 ph-w" src={Avinish}/>
      <span className="d-block fn-24 fw-bold mt-3"> Avinish Kalura</span>
      <p className="opc text-dgray">Content Writer</p>  
    </div>
    </div>

    </div>
    </div>
    </div> 
    </div>  
</section>
  )
}

export default TalentTeam