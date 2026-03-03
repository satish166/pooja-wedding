import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";


import "./header.scss";
export default function Header() {


  return (
    <>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                  <Link to="/" className="navbar-brand">Wedding.</Link>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">

                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                          Home
                        </NavLink>
                      </li>

                      {/* <li className="nav-item">
                        <NavLink to="/story" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                          Story
                        </NavLink>
                      </li> */}

                      <li className="nav-item">
                        <NavLink to="/gallery" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                          Gallery
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                          Contact
                        </NavLink>
                      </li>
                      
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}