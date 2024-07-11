import React from 'react';
import dps from './images/dps.png';
import lpu from './images/lpu.png';
import tks from './images/tks.png';
import './Education.css';
export default function Education() {
  return (
    <div className='container educate'>
      <h1 id='head'>Education: </h1>
      <div className='row'>
        <div className='col-lg-4'>
            <div className="card">
                <img src={lpu} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"><i className="fa-solid fa-graduation-cap"></i>&nbsp;Lovely Professional University, Punjab</h5>
                    <h6 className="card-title">B.Tech in Comnputer Science</h6>
                    <p className="card-text"><i className="fa-regular fa-calendar-days"></i>&nbsp; 2022 - 2026</p>
                    <p className="card-text"><i className="fa-solid fa-square-poll-vertical"></i>&nbsp; Aggregate CGPA: <strong>8.91</strong></p>
                </div>
            </div>
        </div>
        <div className='col-lg-4'>
            <div className="card">
                <img src={dps} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"><i className="fa-solid fa-graduation-cap"></i>&nbsp;Delhi Public School</h5>
                    <h6 className="card-title">Senior Secondary Education</h6><br/>
                    <p className="card-text"><i className="fa-regular fa-calendar-days"></i>&nbsp; 2020 - 2022</p>
                    <p className="card-text"><i className="fa-solid fa-square-poll-vertical"></i>&nbsp; Percentage: <strong>89.6 %</strong></p>
                </div>
            </div>
        </div>
        <div className='col-lg-4'>
            <div className="card">
                <img src={tks} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"><i className="fa-solid fa-graduation-cap"></i>&nbsp;Takshila School</h5>
                    <h6 className="card-title">Secondary Education</h6><br/>
                    <p className="card-text"><i className="fa-regular fa-calendar-days"></i>&nbsp; 2018 - 2020</p>
                    <p className="card-text"><i className="fa-solid fa-square-poll-vertical"></i>&nbsp; Percentage: <strong>87.6 %</strong></p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
