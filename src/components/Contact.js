import React, { useContext } from "react";
import { AppContext } from "../context";
import email from '../img/email.png'

export default function Contact() {
  const { currentPage, setCurrentPage, darkMode } = useContext(AppContext);

  return (
    <div className="contact-box">
      <div className='contact-header-box'>
          <div className='contact-header-icon'>
             <img src={email} alt='email icon' /> 
          </div>
          
      </div>
      <div className='contact-section'>
            <label>Name</label>
            <input ></input>
      </div>
      <div className='contact-section'>
            <label>Contact Email</label>
            <input></input>
      </div>
      <div className='contact-section'>
            <label>Message Body</label>
            <textarea></textarea>
      </div>
      <div className='contact-button-box'>
          <button className='contact-button'>
            Send
          </button>
      </div>
    </div>
  );
}