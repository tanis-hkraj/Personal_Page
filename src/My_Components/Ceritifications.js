import React from 'react'
import aifoundations from './Certificates/aifoundations.jpg'
import appliedml from './Certificates/appliedml.jpg'
import hack from './Certificates/hack.jpg'
import prompt from './Certificates/prompt.jpg'
import llm from './Certificates/llm.jpg'
import leader from './Certificates/leader.jpg'
import internml from './Certificates/internMl.jpg'
import codeai from './Certificates/codeai.jpg'
import bharat from './Certificates/bharat.png'
import './Ceritifications.css'


export default function Ceritifications() {
  return (
    <div className='container'>
      <h1 id='cert'>Certifications & Experiences: </h1>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 9"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={aifoundations} className="d-block w-75" alt="certificate ai foundations"/>
      
                <h5>Artificial Intelligence Foundations: Thinking Machines</h5>
                <p>Learnt about AI Architecture and its subsets.</p>
            </div>
        
            <div className="carousel-item">
                <img src={appliedml} className="d-block w-75" alt="certificate Applied ML"/>
      
                <h5>Applied Machine Learning: Algorithms</h5>
                <p>Learnt about different classification and regression algorithms.</p>
      
            </div>
            <div className="carousel-item">
                <img src={bharat} className="d-block w-75" alt="Bharat Intern Certificate"/>
      
                <h5>Bharat Intern Certificate</h5>
                <p>Learnt about different algos and developed projects like iris classification and House Price Predictor</p>
      
            </div>
            <div className="carousel-item">
                <img src={prompt} className="d-block w-75" alt="Prompt Engineering Certificate"/>
      
                <h5>Prompt Engineering for ChatGPT</h5>
                    <p>Understood the LLMs concept and how does LLMs behave on diiferent types and structured prompt.</p>
      
            </div>
            <div className="carousel-item">
                <img src={llm} className="d-block w-75" alt="Intro to LLMs Certificate"/>
      
                <h5>Introduction to Large Language Models</h5>
                <p>Understood the technicality behind working of LLMs and their internal structure.</p>
      
            </div>
            <div className="carousel-item">
                <img src={leader} className="d-block w-75" alt="Leadership Communication Certificate"/>
      
                <h5>Leadership Communication through Maximum Impact: Storytelling</h5>
                <p>Understood the technicality behind working of LLMs and their internal structure.</p>
      
            </div>
            <div className="carousel-item">
                <img src={codeai} className="d-block w-75" alt="Code with ai Certificate"/>
      
                <h5>Learn to Code with AI</h5>
                <p>Learnt how to use AI to learn and build your imagination practically.</p>
      
            </div>
            <div className="carousel-item">
                <img src={internml} className="d-block w-75" alt="ML INTERN Certificate"/>
      
                <h5>Machine Learning Intern: Acmegrad</h5>
                <p>My first introduction to educational internships, Machine Learning and AI.</p>
            </div>
            <div className="carousel-item">
                <img src={hack} className="d-block w-75" alt="Ethical Hacking Certificate"/>
      
                <h5>Ethical Hacking: MasterClass</h5>
                <p>My first introduction to Hacking and Cyber Security with some concepts of dark web and onion sites.</p>
            </div>
        </div>
    </div>
    <button id='sidekicks' className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button id='sidekicks' className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}
