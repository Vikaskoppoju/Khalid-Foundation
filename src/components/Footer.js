import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Footer Links */}
          <div className="col-md-6">
            <ul className="list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/research">Research</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/foundation">Foundation</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="col-md-6 d-flex justify-content-md-end align-items-start">
            <div>
              <h5>Follow Me</h5>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="https://twitter.com" target="_blank" className="text-decoration-none" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" width="24" height="24" />
                    Twitter
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com" target="_blank" className="text-decoration-none" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width="24" height="24" />
                    LinkedIn
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.facebook.com" target="_blank" className="text-decoration-none" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="24" height="24" />
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-3">
          <p>&copy; 2024 Khalid ul Rehman Hakeem. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
