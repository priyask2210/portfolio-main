import React from 'react'
import "./certificates.css"


import Bigdata from "../../assets/certificates/Bigdata.png"
import computernetwork from "../../assets/certificates/computernetwork.png"
import softskills from "../../assets/certificates/softskill.png"
import introai from "../../assets/certificates/introai.png"
import masterds from "../../assets/certificates/masterds.png"
import supplychain from "../../assets/certificates/supplychain.png"
import scplan from "../../assets/certificates/scplan.png"
import collatralmgmt from "../../assets/certificates/collatralmgmt.png"
import corporateaction from "../../assets/certificates/corporateaction.png"
import swiftmsg from "../../assets/certificates/swiftmsg.png"
import deeplearning from "../../assets/certificates/Deeplearning.png"
import datasciencepython from "../../assets/certificates/datasciencepython.png"
import mlandaiproj from "../../assets/certificates/Mlandaiproj.png"
import dsm from "../../assets/certificates/fundamentalofdsm.png"
import iot from "../../assets/certificates/iot.png"
import googlewebdesign from "../../assets/certificates/googlewebdesign.png"
import agilects from "../../assets/certificates/agilects.png"
import cybersec from "../../assets/certificates/introcybersec.png"
import accentureai from "../../assets/certificates/accentureai.png"
import griffthuniv from "../../assets/certificates/griffthuniv.png"
import ualai from "../../assets/certificates/ualai.png"
import leedsuniv from "../../assets/certificates/leedsuniv.png"
import tcscarrearedge from "../../assets/certificates/tcscarrearedge.png"





const Certificates = () => {
  return (

    <section id="certificates" className='certificates section'>
        <h2 className='section__title'>Certifications</h2>
        <span className='section__subtitle'>What I've done</span> 

          <div className='cert__content'>
              <div className='cert__box'>
                  <img src={tcscarrearedge} alt='AI' className='cert__img' />
                  <h3 className='cert__name'>Career Edge - Knockdown the Lockdown</h3>
                  <p className='cert__platform'>TCS iON </p>
              </div>

              <div className='cert__box'>
                  <img src={softskills} alt='Azure' className='cert__img' />
                  <h3 className='cert__name'>Computer Networks</h3>
                  <p className='cert__platform'>TCS iON</p>
              </div>

                    <div className='cert__box'>
                  <img src={masterds} alt='Azure' className='cert__img' />
                  <h3 className='cert__name'>Master Data Management for Beginners</h3>
                  <p className='cert__platform'>TCS iON</p>
              </div>

                                  <div className='cert__box'>
                  <img src={supplychain} alt='Azure' className='cert__img' />
                  <h3 className='cert__name'>Basics of Operational Procurement in Supply Chain Management</h3>
                  <p className='cert__platform'>TCS iON</p>
              </div>

                                  <div className='cert__box'>
                  <img src={scplan} alt='Azure' className='cert__img' />
                  <h3 className='cert__name'>Supply Chain Planning and Scheduling</h3>
                  <p className='cert__platform'>TCS iON</p>
              </div>

                                                <div className='cert__box'>
                  <img src={collatralmgmt} alt='Azure' className='cert__img' />
                  <h3 className='cert__name'>Understanding Collateral Management</h3>
                  <p className='cert__platform'>TCS iON</p>
              </div>

                                                              <div className='cert__box'>
                  <img src={corporateaction} alt='Azure' className='cert__img' />
                  <h3 className='cert__name'>Corporate Actions</h3>
                  <p className='cert__platform'>TCS iON</p>
              </div>

                                                                            <div className='cert__box'>
                  <img src={swiftmsg} alt='Azure' className='cert__img' />
                  <h3 className='cert__name'> Basics of SWIFT Messaging</h3>
                  <p className='cert__platform'>TCS iON</p>
              </div>

              <div className='cert__box'>
                  <img src={computernetwork} alt='ML' className='cert__img' />
                  <h3 className='cert__name'>Computer Networks</h3>
                  <p className='cert__platform'>TCS iON</p>
              </div>

              <div className='cert__box'>
                  <img src={introai} alt='DeepLearning' className='cert__img' />
                  <h3 className='cert__name'>Introduction to AI</h3>
                  <p className='cert__platform'>TCS iON</p>
              </div>
              
              <div className='cert__box'>
                  <img src={deeplearning} alt='WebDev' className='cert__img' />
                  <h3 className='cert__name'>Deep Learning Foundation</h3>
                  <p className='cert__platform'>Udemy</p>
              </div>

              <div className='cert__box'>
                  <img src={datasciencepython} alt='WebDesign' className='cert__img' />
                  <h3 className='cert__name'>Data Science with Python Certification Training with Project</h3>
                  <p className='cert__platform'>Udemy</p>
              </div>

              <div className='cert__box'>
                  <img src={mlandaiproj} alt='EthicalHacking' className='cert__img' />
                  <h3 className='cert__name'>Machine Learning & AI Hands on Project </h3>
                  <p className='cert__platform'>Udemy</p>
              </div>

              <div className='cert__box'>
                  <img src={dsm} alt='DSA' className='cert__img' />
                  <h3 className='cert__name'>Fundamentals of Digital Marketing</h3>
                  <p className='cert__platform'>Google Digital Garage</p>
              </div>

              <div className='cert__box'>
                  <img src={googlewebdesign} alt='GuviPython' className='cert__img' />
                  <h3 className='cert__name guvi'>Google Web Designer Basics</h3>
                  <p className='cert__platform'>Google Skillshop</p>
              </div>


              <div className='cert__box'>
                  <img src={iot} alt='GuviPython' className='cert__img' />
                  <h3 className='cert__name guvi'>Introduction to IoT</h3>
                  <p className='cert__platform'>Cisco Networking Academy</p>
              </div>

              {<div className='cert__box'>
                  <img src={agilects} alt='Python' className='cert__img' />
                  <h3 className='cert__name'>Agile Methodology</h3>
                  <p className='cert__platform'>Cognizant</p>
              </div>}

                            {<div className='cert__box'>
                  <img src={cybersec} alt='Python' className='cert__img' />
                  <h3 className='cert__name'>Introduction to Cybersecurity</h3>
                  <p className='cert__platform'>Cisco Networking Academy</p>
              </div>}

                {<div className='cert__box'>
                  <img src={accentureai} alt='Python' className='cert__img' />
                  <h3 className='cert__name'>Digital Skills: Artifical Intelligence</h3>
                  <p className='cert__platform'>Accenture</p>
              </div>}

                {<div className='cert__box'>
                  <img src={griffthuniv} alt='Python' className='cert__img' />
                  <h3 className='cert__name'>Big Data Analytics</h3>
                  <p className='cert__platform'>Griffith University</p>
              </div>}
              
                {<div className='cert__box'>
                  <img src={ualai} alt='Python' className='cert__img' />
                  <h3 className='cert__name'>Introduction to Creative AI</h3>
                  <p className='cert__platform'>University of Arts London</p>
              </div>}

                {<div className='cert__box'>
                  <img src={leedsuniv} alt='Python' className='cert__img' />
                  <h3 className='cert__name'>Collaborative Working</h3>
                  <p className='cert__platform'>University of Leeds</p>
              </div>}

              {/* <div className='cert__box'>
                  <img src={PythonBasic} alt='PythonBasic' className='cert__img' />
                  <h3 className='cert__name'>Python Basic</h3>
                  <p className='cert__platform'>HackerRank</p>
              </div>

              <div className='cert__box'>
                  <img src={CSS} alt='CSS' className='cert__img' />
                  <h3 className='cert__name'>CSS</h3>
                  <p className='cert__platform'>HackerRank</p>
              </div> */}

              {/* <div className='cert__box'>
                  <img src={Business} alt='Business' className='cert__img' />
                  <h3 className='cert__name'>Global Business Trends and Oppurtunities - Webinar</h3>
                  <p className='cert__platform'>VITFAM - VIT Chennai</p>
              </div>

              <div className='cert__box'>
                  <img src={Network} alt='Network' className='cert__img' />
                  <h3 className='cert__name'>Your Network is Your Net-worth - Webinar</h3>
                  <p className='cert__platform'>VITFAM - VIT Chennai</p>
              </div> */}


              {/* <div className='cert__box'>
                  <img src={PythonFundamentals} alt='PythonFundamentals' className='cert__img' />
                  <h3 className='cert__name'>Python Fundamentals</h3>
                  <p className='cert__platform'>Great Learning</p>
              </div>

              <div className='cert__box'>
                  <img src={C} alt='C' className='cert__img' />
                  <h3 className='cert__name'>C for Beginners</h3>
                  <p className='cert__platform'>Great Learning</p>
              </div> */}

              {/* <div className='cert__box'>
                  <img src={Blockchain} alt='Blockchain' className='cert__img' />
                  <h3 className='cert__name'>Blockchain Developer Guide - Webinar</h3>
                  <p className='cert__platform'>CodeDamn</p>
              </div> */}

              {/* <div className='cert__box'>
                  <img src={Devtools} alt='Devtools' className='cert__img' />
                  <h3 className='cert__name'>Chrome DevTools Course</h3>
                  <p className='cert__platform'>CodeDamn</p>
              </div> */}

              {/* <div className='cert__box'>
                  <img src={Git} alt='Git' className='cert__img' />
                  <h3 className='cert__name'>Git Masterclass</h3>
                  <p className='cert__platform'>CodeDamn</p>
              </div> */}

              {/* <div className='cert__box'>
                  <img src={Internet} alt='Internet' className='cert__img' />
                  <h3 className='cert__name'>Learn the basics of Web - Internet Fundamentals</h3>
                  <p className='cert__platform'>CodeDamn</p>
              </div> */}

              {/* <div className='cert__box'>
                  <img src={NPM} alt='NPM' className='cert__img' />
                  <h3 className='cert__name'>Learn NPM - Node Package Manager Complete Course</h3>
                  <p className='cert__platform'>CodeDamn</p>
              </div> */}

        </div>  

    </section>
  )
}

export default Certificates