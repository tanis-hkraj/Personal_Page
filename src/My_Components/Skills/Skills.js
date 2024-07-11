import React, { useState } from 'react';
import './Skills.css';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import cpp from '../images/cpp.jpg';
import java from '../images/java.jpg';
import pythonML from '../images/pythonML.png';
import htmlcss from '../images/htmlcss.jpeg';
import ec2 from '../images/ec2.jpeg';
import s3 from '../images/s3.jpeg';
import react1 from '../images/react1.png';
import bootstrap from '../images/bootstrap.png';
import javascript from '../images/javascript.png';
import lambda from '../images/lambda.png';
import cloudfront from '../images/cloudfront.png';

const skillsData = [
  {
    title: 'C / C++ Programming',
    imgSrc: cpp,
    description: 'C++ and C programming languages are general-purpose, compiled, and procedural languages that can be used to develop a wide range of applications, from operating systems to web browsers.'
  },
  {
    title: 'Java Programming',
    imgSrc: java,
    description: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.'
  },
  {
    title: 'ML with Python',
    imgSrc: pythonML,
    description: 'Machine Learning with Python involves using Python programming language to develop algorithms that allow computers to learn from data and make predictions.'
  },
  {
    title: 'HTML CSS',
    imgSrc: htmlcss,
    description: 'HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets) are the foundational technologies for building web pages and web applications.'
  },
  {
    title: 'React.js',
    imgSrc: react1,
    description: 'React.js is a JavaScript library for building user interfaces, maintained by Facebook and a community of individual developers and companies.'
  },
  {
    title: 'JavaScript',
    imgSrc: javascript,
    description: 'JavaScript is a versatile programming language that allows you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.'
  },
  {
    title: 'Bootstrap',
    imgSrc: bootstrap,
    description: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.'
  },
  {
    title: 'Elastic Compute Cloud (EC2)',
    imgSrc: ec2,
    description: 'Amazon EC2 provides scalable computing capacity in the AWS cloud. Using Amazon EC2 eliminates the need to invest in hardware upfront.'
  },
  {
    title: 'Simple Storage Service (S3)',
    imgSrc: s3,
    description: 'Amazon S3 is an object storage service that offers industry-leading scalability, data availability, security, and performance.'
  },
  {
    title: 'Amazon CloudFront Service',
    imgSrc: cloudfront,
    description: 'Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally.'
  },
  {
    title: 'Amazon Lambda Service',
    imgSrc: lambda,
    description: 'AWS Lambda is a serverless compute service that lets you run code without provisioning or managing servers, creating workload-aware cluster scaling logic, maintaining event integrations, or managing runtimes.'
  }
];

export default function BasicPopover() {
  const [anchorEls, setAnchorEls] = useState({});

  const handleClick = (event, index) => {
    setAnchorEls((prev) => ({ ...prev, [index]: event.currentTarget }));
  };

  const handleClose = (index) => {
    setAnchorEls((prev) => ({ ...prev, [index]: null }));
  };

  return (
    <div className='container'>
      <div className='row skills'>
        <h1>Programming Languages: </h1>
        {skillsData.slice(0, 3).map((skill, index) => (
          <div className='col-lg-4' key={index}>
            <div className="card">
              <img src={skill.imgSrc} className="card-img-top" alt={skill.title} />
              <div className="card-body">
                <Button
                  aria-describedby={`simple-popover-${index}`}
                  variant="contained"
                  onClick={(event) => handleClick(event, index)}
                >
                  {skill.title}
                </Button>
                <Popover
                  id={`simple-popover-${index}`}
                  open={Boolean(anchorEls[index])}
                  anchorEl={anchorEls[index]}
                  onClose={() => handleClose(index)}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  <Typography sx={{ p: 2 }}>{skill.description}</Typography>
                </Popover>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='row skills'>
        <h1>Web Technologies and Scripting: </h1>
        {skillsData.slice(3, 7).map((skill, index) => (
          <div className='col-lg-3' key={index + 3}>
            <div className="card">
              <img src={skill.imgSrc} className="card-img-top" alt={skill.title} />
              <div className="card-body">
                <Button
                  aria-describedby={`simple-popover-${index + 3}`}
                  variant="contained"
                  onClick={(event) => handleClick(event, index + 3)}
                >
                  {skill.title}
                </Button>
                <Popover
                  id={`simple-popover-${index + 3}`}
                  open={Boolean(anchorEls[index + 3])}
                  anchorEl={anchorEls[index + 3]}
                  onClose={() => handleClose(index + 3)}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  <Typography sx={{ p: 2 }}>{skill.description}</Typography>
                </Popover>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='row skills'>
        <h1>Cloud Computing with AWS: </h1>
        {skillsData.slice(7).map((skill, index) => (
          <div className='col-lg-3' key={index + 7}>
            <div className="card">
              <img src={skill.imgSrc} className="card-img-top" alt={skill.title} />
              <div className="card-body">
                <Button
                  aria-describedby={`simple-popover-${index + 7}`}
                  variant="contained"
                  onClick={(event) => handleClick(event, index + 7)}
                >
                  {skill.title}
                </Button>
                <Popover
                  id={`simple-popover-${index + 7}`}
                  open={Boolean(anchorEls[index + 7])}
                  anchorEl={anchorEls[index + 7]}
                  onClose={() => handleClose(index + 7)}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  <Typography sx={{ p: 2 }}>{skill.description}</Typography>
                </Popover>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
