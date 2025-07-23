import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }


  return (
    <section id="qualification" className="qualification section">
          <h2 className='section__title'>Qualification</h2>
          <span className='section__subtitle'>My Personal Journey</span>

          <div className='qualification__container container'>
              <div className='qualification__tabs'>
                  <div className={toggleState === 1 ? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex'} onClick={() => toggleTab(1)}>
                      <i className='uil uil-graduation-cap qualification__icon'></i>
                      Education
                  </div>

                  <div className={toggleState === 2 ? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex'} onClick={() => toggleTab(2)}>
                      <i className='uil uil-briefcase qualification__icon'></i>
                      Experience
                  </div>
              </div>

              <div className='qualification__sections'>
                  <div className={toggleState === 1 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
                      
                      <div className='qualification__data'>
                          <div>
                              <h3 className='qualification__title'>B.Tech Computer Science Engineering</h3>
                              <span className='qualification__subtitle'>Vellore Institute of Technology - Chennai</span>
                              <div className='qualification__calender'>
                                  <i className='uil uil-calendar-alt'> </i>
                                  2022 - 2026
                              </div>
                          </div>

                          <div>
                              <span className='qualification__rounder'></span>
                              <span className='qualification__line'></span>
                          </div>
                      </div>

                      <div className='qualification__data'>
                          <div></div>
                          <div>
                              <span className='qualification__rounder'></span>
                              <span className='qualification__line'></span>
                          </div>

                          <div>
                              <h3 className='qualification__title'>High School</h3>
                              <span className='qualification__subtitle'>Velammal Mat. Hr. Sec. School</span>
                              <div className='qualification__calender'>
                                  <i className='uil uil-calendar-alt'> </i>
                                  2020 - 2022
                              </div>
                          </div>

                          
                      </div>


                  </div>

                  <div className={toggleState === 2 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
                      {/* AIC */}
                      <div className='qualification__data'>
                          <div>
                              <h3 className='qualification__title'>Management Lead</h3>
                              <span className='qualification__subtitle'>Youth Red Cross - VIT Chennai</span>
                              <div className='qualification__calender'>
                                  <i className='uil uil-calendar-alt'> </i>
                                  Sep 2023 - Oct 2024 
                              </div>
                          </div>

                          <div>
                              <span className='qualification__rounder'></span>
                              <span className='qualification__line'></span>
                          </div>
                      </div>

                      {/* AI Agentic */}

                      <div className='qualification__data data qualification_data-right'>
                          <div></div>
                          <div>
                              <span className='qualification__rounder'></span>
                              <span className='qualification__line'></span>
                          </div>

                          <div>
                              <h3 className='qualification__title'> Research Intern</h3>
                              <span className='qualification__subtitle'>Pillar Rocks Partners, Chennai</span>
                              <div className='qualification__calender'>
                                  <i className='uil uil-calendar-alt'> </i>
                                  June 2025 - July 2025 
                              </div>
                          </div>

                          
                      </div>

                      {/* Huzzler */}

                      <div className='qualification__data'>
                          <div>
                              <h3 className='qualification__title'>Web Developers Intern</h3>
                              <span className='qualification__subtitle'>Abhayaa Cyber Solutions</span>
                              <div className='qualification__calender'>
                                  <i className='uil uil-calendar-alt'> </i>
                                  May 2025 - June 2025
                              </div>
                          </div>

                          <div>
                              <span className='qualification__rounder'></span>
                              <span className='qualification__line'></span>
                          </div>
                      </div>

                       {/* BA */}

                      <div className='qualification__data data qualification_data-right'>
                          <div></div>
                          <div>
                              <span className='qualification__rounder'></span>
                              <span className='qualification__line'></span>
                          </div>

                          <div>
                              <h3 className='qualification__title'>Marketing Member</h3>
                              <span className='qualification__subtitle'>Robotics, Chennai</span>
                              <div className='qualification__calender'>
                                  <i className='uil uil-calendar-alt'> </i>
                                  Aug 2023 - Feb 2024
                              </div>
                          </div>
                      </div>

                     

                        



                     {/* ML Coreizi */}
                      <div className='qualification__data'>
                          <div>
                              <h3 className='qualification__title'>Management Member</h3>
                              <span className='qualification__subtitle'>FYI VIT Chennai</span>
                              <div className='qualification__calender'>
                                  <i className='uil uil-calendar-alt'> </i>
                                  March 2023 - Aug 2023
                              </div>
                          </div>

                          <div>
                              <span className='qualification__rounder'></span>
                              <span className='qualification__line'></span>
                          </div>
                      </div>

                       



                  </div>
              </div>
          </div>
    </section>
    
  )
}

export default Qualification