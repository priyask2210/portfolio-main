import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contacts.css';

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_5sgsunq', // Replace with your service ID
        'template_jtjexog', // Replace with your template ID
        form.current,
        'y4gQyygfQ7scNbPaM' // Replace with your user/public key
      )
      .then(
        (result) => {
          console.log('Email sent:', result.text);
        },
        (error) => {
          console.log('Email error:', error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className='contact section' id='contact'>
      <h2 className='section__title'>Get in Touch</h2>
      <span className='section__subtitle'>Contact Me</span>

      <div className='contact__container container grid'>
        {/* Left Column - Contact Cards */}
        <div className='contact__content'>
          <h3 className='contact__title'>Talk to me</h3>

          <div className='contact__info'>
            <div className='contact__card'>
              <i className='bx bx-mail-send contact__card-icon'></i>
              <h3 className='contact__card-title'>Email</h3>
              <span className='contact__card-data'>priyasklakshmi@gmail.com</span>
              <a
                href='mailto:priyasklakshmi@gmail.com'
                className='contact__button'
              >
                Write me
                <i className='bx bx-right-arrow-alt contact__button-icon'></i>
              </a>
            </div>

            <div className='contact__card'>
              <i className='bx bxl-whatsapp contact__card-icon'></i>
              <h3 className='contact__card-title'>Whatsapp</h3>
              <span className='contact__card-data'>+91 9*******98</span>
              <a
                href='https://wa.me/9*******98'
                className='contact__button'
              >
                Write me
                <i className='bx bx-right-arrow-alt contact__button-icon'></i>
              </a>
            </div>

            <div className='contact__card'>
              <i className='bx bxl-linkedin contact__card-icon'></i>
              <h3 className='contact__card-title'>LinkedIn</h3>
              <span className='contact__card-data'>Lakshmi Priya S K</span>
              <a
                href='https://www.linkedin.com/in/sk-lakshmi-priya26/'
                className='contact__button'
              >
                Write me
                <i className='bx bx-right-arrow-alt contact__button-icon'></i>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className='contact__content'>
          <h3 className='contact__title'>Write me your thoughts</h3>

      <form ref={form} onSubmit={sendEmail} className='contact__form'>
            <div className='contact__form-div'>
              <label className='contact__form-tag'>Name</label>
              <input
                type='text'
                name='name'
                className='contact__form-input'
                placeholder='Enter your name'
                required
              />
            </div>

            <div className='contact__form-div'>
              <label className='contact__form-tag'>Email</label>
              <input
                type='email'
                name='email'
                className='contact__form-input'
                placeholder='Enter your email'
                required
              />
            </div>

            <div className='contact__form-div contact__form-area'>
              <label className='contact__form-tag'>Message</label>
              <textarea
                name='project'
                className='contact__form-input'
                placeholder='Write your message...'
                cols='30'
                rows='10'
                required
              ></textarea>
            </div>

            <button className='button button--flex'>
              Send Message
              <i className='bx bx-send contact__button-icon' style={{ marginLeft: '0.5rem' }}></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
