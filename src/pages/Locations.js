import React from 'react';
import './Locations.css';

const Locations = () => {
  return (
    <div className="locations-wrapper py-5">
      <div className="container text-white">
        <h2 className="text-center mb-5">Our Locations</h2>
        <div className="row justify-content-center g-4">
          <div className="col-md-6">
            <h5>Ideal Café – Hampankatta</h5>
            <p>Opp. Milagres Church, Hampankatta, Mangaluru, Karnataka 575001</p>
            <div className="map-small">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.1485441951676!2d74.83937927507598!3d12.872142087432666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba3507e638285cd%3A0xeec6aa73c9f4c7bb!2sIdeal%20Cafe%2C%20Hampankatta%2C%20Mangaluru%2C%20Karnataka%20575001!5e0!3m2!1sen!2sin!4v1713097757121!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Ideal Café Hampankatta"
              ></iframe>
            </div>
          </div>
          <div className="col-md-6">
            <h5>Ideal Café – MG Road</h5>
            <p>Near PVS Circle, MG Road, Mangaluru, Karnataka 575003</p>
            <div className="map-small">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.0637297022736!2d74.83853977507608!3d12.876362387430674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba3507a1296aaf5%3A0x9308b1be48e24e26!2sIdeal%20Cafe%20MG%20Road!5e0!3m2!1sen!2sin!4v1713097862460!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Ideal Café MG Road"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
