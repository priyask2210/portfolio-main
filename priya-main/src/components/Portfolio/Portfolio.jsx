import React, { useState } from 'react';
import './Portfolio.css';


import icdect from "../../assets/projectspic/icdect.png"
import botnet from "../../assets/projectspic/botnet.png"
import patent from "../../assets/projectspic/patent.png"
import iotsmart from "../../assets/projectspic/iotsmart.png"
import crypto from "../../assets/projectspic/crypto.png"
import ipl from "../../assets/projectspic/IPL.png"
import gest from "../../assets/projectspic/gest.jpeg"
import med from "../../assets/projectspic/med.png"

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('project');

  return (
    <section className="work section" id="projects">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most Recent Work</span>

      <div className="work__filters">
        <span
          className={`work__item ${activeTab === 'project' ? 'active-work' : ''}`}
          onClick={() => setActiveTab('project')}
        >
          Project
        </span>
       
      </div>

      <div className="work__container container grid">
        {/* === Project Cards === */}
        {activeTab === 'project' && (
          <>
            <div className="work__card">
              <a href="https://github.com/Jesvanth/Voice-Style-Transfer-Deep-Learning-Project" target="_blank" rel="noreferrer">
              <img src={gest} alt='AI' className='cert__img' />
                <h3 className="work__title">Gesture Vocalizer Device</h3>
                <p className='cert__platform'>Arduino and flexsensors</p>
              </a>
            </div>

            <div className="work__card">
              <a href="https://github.com/Jesvanth/IoT-Project-Smart-Home-Energy-Management-System-Using-Occupancy-Based-Appliance-Control" target="_blank" rel="noreferrer">
                <img src={iotsmart} alt='AI' className='cert__img' />
                <h3 className="work__title">Smart Street Light System</h3>
                <p className='cert__platform'>Arduino and Sensors</p>
               
              </a>
            </div>

            <div className="work__card">
              <a href="https://github.com/Jesvanth/Dynamic-Traffic-Signal-Prediction-AI-Project" target="_blank" rel="noreferrer">
              <img src={crypto} alt='AI' className='cert__img' />
                <h3 className="work__title">Influencer Recommendation System</h3>
                <p className='cert__platform'>Machine Learning, Object Detection, Sentiment Analysis</p>
              </a>
            </div>

            <div className="work__card">
              <a href="https://github.com/Jesvanth/Network-Security-Cryptography-Project" target="_blank" rel="noreferrer">
                <img src={med} alt='AI' className='cert__img' />
                <h3 className="work__title">Alternative Medicine Recommendation System</h3>
                <p className='cert__platform'>Python, Machine Learning, Artificial Intelligence</p>
              </a>
            </div>

            <div className="work__card">
              <a href="https://github.com/Jesvanth/IPL-Score-Prediction-Visualization-EDA-Project" target="_blank" rel="noreferrer">
                < img src={ipl} alt='AI' className='cert__img' />
                <h3 className="work__title">Music Genre Classification</h3>
                <p className='cert__platform'>Python, Machine Learning, EDA, Visualization, Prediction, Streamlit</p>
              </a>
            </div>

<div className="work__card view-more__card">
  <a href="https://github.com/priyask2210" target="_blank" rel="noreferrer">
    <div className="view-more__content">
      <span className="view-more__plus">+</span>
      <h3 className="view-more__text">View More</h3>
    </div>
  </a>
</div>


          </>
        )}

        {/* === Paper Cards === */}
        {activeTab === 'paper' && (
          <>
            <div className="work__card">
              <a href="hhttps://ieeexplore.ieee.org/Xplore/home.jsp" target="_blank" rel="noreferrer">
                <img src={icdect} alt='AI' className='cert__img' />
                <h3 className="work__title">Dynamic Traffic Signal Timing and Predictive Traffic Management Using 
                    R-CNN</h3>
                <p className='cert__platform'>ICDECT - APU Kuala Lumpur, Malaysia (Springer)
 </p>

              </a>
            </div>

            <div className="work__card">
                <img src={botnet} alt='AI' className='cert__img' />
                <h3 className="work__title">Detecting Botnet Attacks in IoT-5G Networks using Machine Learning</h3>
                <p className='cert__platform'> IEEE Springer Journel
 </p>
            </div>

            <div className="work__card">
                <img src={patent} alt='AI' className='cert__img' />
                <h3 className="work__title">Smart Glass to reduce Eye Stress & Strain</h3>
                <p className='cert__platform'> Patent – Intellectual Property India
</p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
