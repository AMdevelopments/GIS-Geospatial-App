// components/Footer.js
import React from 'react';
import './_footer.scss';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white mt-auto py-4">
      <div className="container">
        <div className="row">
          {/* Column for About Information */}
          <div className="col-md-4">
            <h5>About</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Company</a></li>
              <li><a href="#" className="text-white">Team</a></li>
              <li><a href="#" className="text-white">Careers</a></li>
            </ul>
          </div>

          {/* Column for Contact Information */}
          <div className="col-md-4">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Support</a></li>
              <li><a href="#" className="text-white">Get in Touch</a></li>
              <li><a href="#" className="text-white">FAQ</a></li>
            </ul>
          </div>

          {/* Column for Social Media Links */}
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Twitter</a></li>
              <li><a href="#" className="text-white">Facebook</a></li>
              <li><a href="#" className="text-white">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* CopyRight Text */}
        <div className="text-center mt-3">
          <p className="mb-0">© 2023 GIS & Geospatial Application. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
