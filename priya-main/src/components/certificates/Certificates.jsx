import React from 'react'
import "./certificates.css"


import azu from "../../assets/certificates/azu.jpg"
import sql from  "../../assets/certificates/sql.jpg"
import ana from "../../assets/certificates/ana.jpg"


const Certificates = () => {
  return (

    <section id="certificates" className='certificates section'>
        <h2 className='section__title'>Certifications</h2>
        <span className='section__subtitle'>What I've done</span> 

          <div className='cert__content'>
              <div className='cert__box'>
                  <img src={azu} alt='AI' className='cert__img' />
                  <h3 className='cert__name'>Career Edge - Knockdown the Lockdown</h3>
                  <p className='cert__platform'>TCS iON </p>
              </div>

              <div className='cert__box'>
                  <img src={sql} alt='Azure' className='cert__img' />
                  <h3 className='cert__name'>Computer Networks</h3>
                  <p className='cert__platform'>TCS iON</p>
              </div>

                    <div className='cert__box'>
                  <img src={ana} alt='Azure' className='cert__img' />
                  <h3 className='cert__name'>Master Data Management for Beginners</h3>
                  <p className='cert__platform'>TCS iON</p>
              </div>

                 

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