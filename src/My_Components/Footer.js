import React,{useRef} from 'react';
import emailjs from '@emailjs/browser';
import './Footer.css';
import { Link } from 'react-router-dom';
export default function Footer() {
    const form=useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_fnfbfl5', 'template_yibu1vo', form.current, {
            publicKey: 'Wk_ZMkLXSmFgJg2NN',
          })
          .then(
            () => {
              alert("Message sent Successfully");
            },
            (error) => {
                alert("ERROR! Retry");
            },
          );
          e.target.reset();
      };
  return (
    <footer className='bg-dark text-light footer'>
        <div className='container '>
            <div className='row elements'>
                <div className='col-lg-6 butlink'>
                    <h3>Social Links:</h3>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <Link to='https://github.com/tanis-hkraj'><button className='btn btn-light'>GitHub &nbsp;&nbsp;<i className="fa-brands fa-github"></i></button></Link>
                        </div>
                        <div className='col-lg-6'>
                            <Link to='https://www.linkedin.com/in/tr07/'><button className='btn btn-light'>LinkedIn &nbsp;&nbsp;<i className="fa-brands fa-linkedin"></i></button></Link>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <Link to='https://leetcode.com/u/tanishkraj70/'><button className='btn btn-light'>LeetCode &nbsp;&nbsp;<i className="fa-solid fa-code"></i></button></Link>
                        </div>
                        <div className='col-lg-6'>
                            <Link to='https://www.hackerrank.com/profile/tanishkraj70'><button className='btn btn-light'>HackerRank &nbsp;&nbsp;<i className="fa-brands fa-hackerrank"></i></button></Link>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <Link to="https://stackoverflow.com/users/20593168/tanishk-raj"><button className='btn btn-light'>StackOverflow &nbsp;&nbsp;<i className="fa-brands fa-stack-overflow"></i></button></Link>
                        </div>
                        <div className='col-lg-6'>
                            <Link to='https://www.instagram.com/tanis.hkraj/'><button className='btn btn-light'>Instagram &nbsp;&nbsp;<i className="fa-brands fa-instagram"></i></button></Link>
                        </div>
                    </div>
                </div>
                </div>
                <div className='col-lg-6'>
                <h3>Contact Form: </h3>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="Nametext">First Name</label>
                            <input type="text" className="form-control" placeholder="Enter First name" name='user_first_name' required/>
                        </div>
                        <div className="col">
                            <label htmlFor="Name2text">Last Name</label>
                            <input type="text" className="form-control" placeholder="Enter Last name" name='user_last_name' required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='user_email' required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='message' required></textarea>
                    </div>
                    <button type="submit" className="btn btn-light send">Send</button>
                </form>
                </div>
                <p className="web">Tanishk Raj. @ Lovely Professional University</p>
            </div>
        </div>
    </footer>
  )
}

