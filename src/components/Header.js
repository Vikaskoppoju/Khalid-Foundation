import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary headerd">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="./images/Khalid Hakeem1.png" alt="Logo" style={{ height: '40px' }} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/research">Research</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            {/* <li className="nav-item"><Link className="nav-link" to="/hearttalk">Heart Talk</Link></li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/foundation">Foundation</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
