import React, { useState } from 'react';
import './SimpleForm.css';

const SimpleForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">Get in Touch</h2>
        <p className="form-subtitle">We would love to hear from you. Fill out the simple form below.</p>
        
        {isSubmitted ? (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <p>Thank you! Your message has been sent successfully.</p>
          </div>
        ) : (
          <form className="simple-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
                placeholder=" "
              />
              <label htmlFor="name">Full Name</label>
              <div className="input-border"></div>
            </div>
            
            <div className="input-group">
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
                placeholder=" "
              />
              <label htmlFor="email">Email Address</label>
              <div className="input-border"></div>
            </div>
            
            <div className="input-group">
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                required 
                placeholder=" "
                rows="4"
              ></textarea>
              <label htmlFor="message">Your Message</label>
              <div className="input-border"></div>
            </div>
            
            <button type="submit" className="submit-btn">
              <span>Send Message</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SimpleForm;
