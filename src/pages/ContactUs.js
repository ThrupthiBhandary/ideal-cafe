import React from 'react';
import { Envelope, Telephone, GeoAlt, Clock } from 'react-bootstrap-icons';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-wrapper py-5">
      <div className="container text-white">
        <h2 className="text-center mb-4">Get in Touch</h2>
        <p className="text-center mb-5">We'd love to hear from you! Reach out for feedback, queries, or just to say hi.</p>

        <div className="row g-4 justify-content-center">
          <div className="col-md-4">
            <div className="contact-card">
              <Envelope size={28} className="me-2" />
              <div>
                <h5>Email</h5>
                <p>support@idealcafe.in</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-card">
              <Telephone size={28} className="me-2" />
              <div>
                <h5>Phone</h5>
                <p>+91 9876543210</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-card">
              <GeoAlt size={28} className="me-2" />
              <div>
                <h5>Head Office</h5>
                <p>Hampankatta, Mangalore, Karnataka</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-card">
              <Clock size={28} className="me-2" />
              <div>
                <h5>Working Hours</h5>
                <p>Everyday: 10 AM – 10 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <p>Follow us on</p>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
