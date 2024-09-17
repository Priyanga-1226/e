import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../Style/contact.css';

const Contact = () => {
  // Add state to manage form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to send email
  const sendMail = (e) => {
    e.preventDefault(); // Prevent form from submitting the default way

    const serviceID = 'service_d82mmdf'; // Replace with your actual service ID
    const templateID = 'template_av6wq39'; // Replace with your actual template ID
    const publicKey = 'ylrh2g5tGnsD5vJYK'; // Replace with your actual public key

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then((res) => {
        console.log(res.text);
        alert("Your message has been sent successfully!");
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form after submission
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
        alert('There was an error sending your message. Please try again.');
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h1>CONTACT US FOR MORE COLLECTIONS</h1>
        </div>
        <div className="contact-form">
          <form className="form" onSubmit={sendMail}>
            <div className="form-row">
              <div className="form-group">
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <input
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter your subject"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <div className="form-group">
              <button type="submit" id="btn" className="btn-submit">
                Contact me
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
