import React from 'react'

const info = () => {
  return (
      <div className='about__info grid'>
          <div className='about__box'>
            <i className='bx bx-award about__icon'></i>
            <h3 className='about__title'>4th Year Student</h3>
            <span className='about__subtitle'>Computer Science Engineering</span>
          </div>

          <div className='about__box'>
            <i className='bx bx-briefcase-alt about__icon'></i>
            <h3 className='about__title'>Completed</h3>
            <span className='about__subtitle'>5+ Projects</span>
          </div>

          <div className='about__box'>
            <i className='bx bx-support about__icon'></i>
            <h3 className='about__title'>Experience</h3>
            <span className='about__subtitle'>2 Internships</span>
          </div>
      </div>
      
        
  )
}

export default info