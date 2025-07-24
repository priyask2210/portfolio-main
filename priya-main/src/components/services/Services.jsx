import React, { useState } from 'react'
import "./services.css"

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <section className='services section'>
            <h2 className='section__title'>Services</h2>
            <span className='section__subtitle'>What I offer</span> 
            
            <div className='services__container container grid'>
                
                <div className='services__content'>
                    <div>
                        <i class="uil-brackets-curly services__icon"></i>
                        <h3 className='services__title'>Frontend<br />Developer</h3>
                    </div>

                    <span className='services__button' onClick={() => toggleTab(1)}>View More
                    <i className='uil uil-arrow-right services-button-icon'></i>
                    </span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className='services__modal-content'>
                            <i className='uil uil-times services__modal-close' onClick={() => toggleTab(0)}></i>
                            <h3 className='services__modal-title'>Frontend Developer</h3>
                            <p className='services__modal-description'>I am a final-year Computer Science student with 2 years of frontend development experience through academic projects, internships, and freelance work. 
                                I specialize in building responsive and scalable web applications tailored for performance and user experience.</p>
                            
                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                    Built responsive websites optimized for all device types and screen sizes
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Proficient in HTML, CSS, JavaScript, and modern frameworks like React.js                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Delivered clean, modular, and maintainable code using best frontend practices                                    </p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
Designed and deployed modern, minimal, and user-focused UI components
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>


                <div className='services__content'>
                    <div>
                        <i className='class=uil uil-robot services__icon'></i>
                        <h3 className='services__title'>AI/MLL<br />Engineer</h3>
                    </div>

                    <span className='services__button' onClick={() => toggleTab(3)}>View More
                    <i className='uil uil-arrow-right services-button-icon'></i>
                    </span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className='services__modal-content'>
                            <i className='uil uil-times services__modal-close' onClick={() => toggleTab(0)}></i>
                            <h3 className='services__modal-title'>ML/DL Engineer</h3>
                            <p className='services__modal-description'>I am actively working on Machine Learning and Deep Learning projects that involve data preprocessing, model training, and deployment. 
                                My focus is on building intelligent systems that extract insights or automate tasks using Python and AI frameworks.</p>
                            
                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
Experienced in using Python, scikit-learn, TensorFlow, Keras, and PyTorch                                         
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Worked on real-world datasets for classification, regression, and NLP tasks
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Built and evaluated deep learning models like CNNs and LSTMs for domain-specific problems
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Strong understanding of data pipelines, model tuning, and performance metrics  
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>
      </section>
    
  )
}

export default Services