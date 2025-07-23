import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
          <h1 className='footer__title'>Lakshmi Priya S K</h1>
          <ul className='footer__list'>
              <li>
                  <a href='#about' className='footer__link'>About</a>
              </li>

              <li>
                  <a href='#projects' className='footer__link'>Projects</a>
              </li>

              <li>
                  <a href='#certificates' className='footer__link'>Certificates</a>
              </li>
          </ul>

          <div className='footer__social'>

            <a href='www.linkedin.com/in/sk-lakshmi-priya26' className='footer__social-link' target='_blank'>
                <i className='bx bxl-linkedin'></i>
            </a>

            <a href='https://api.whatsapp.com/send?phone=917358805261&text=Hello!' className='footer__social-link' target='_blank'>
                <i className='bx bxl-whatsapp'></i>
            </a>
            
            <a href='https://www.instagram.com/jesvanthhh/' className='footer__social-link' target='_blank'>
                <i className='bx bxl-instagram'></i>
            </a>
            
          </div>

          <span className='footer__copy'>&#169; Lakshmi Priya S K. All Rights Reserved</span>
          </div>
    </footer>
  )
}

export default Footer