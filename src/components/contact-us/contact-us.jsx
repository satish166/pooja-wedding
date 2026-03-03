

import "./contact-us.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


export default function ContactUs() {


  return (
    <>
      <div className="contact-us">
        <section className="main-banner">
          <div className="banner-content">
            <div className="">
              <h1 className="names">Contact Us</h1>
              <h6>Made by Satish Sandhu</h6>
            </div>
          </div>
        </section>
        <div className="contact-details">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="address">
                  <h5>Contact Information</h5>
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faLocationDot} />
                      <p>V.P.O Chattara Distt & Teh Una (H.P)</p>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faPhone} />
                      <p><a href="tel:8278860269">+91 8278860269</a></p>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faEnvelope} />
                      <p><a href="mailto:sandhusatish166@gmail.com">sandhusatish166@gmail.com</a></p>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faInstagram} />
                      <p>devil_hp72</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 mt-5 mt-md-0">
                <form action="" className="contact-form">
                  <h3 className="mb-3">Get In Touch</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="inputs">
                        <label htmlFor="First Name" className="label">First Name</label>
                        <input type="text" className="w-100" placeholder="First Name" />
                      </div>
                    </div>
                    <div className="col-md-6 mt-3 mt-md-0">
                      <div className="inputs">
                        <label htmlFor="Last Name" className="label">Last Name</label>
                        <input id="name" type="text" className="w-100" placeholder="Last Name" />
                      </div>
                    </div>
                    <div className="col-12 mt-3">
                      <div className="inputs">
                        <label htmlFor="Email" className="label">Email</label>
                        <input id="name" type="email" className="w-100" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-12 mt-3">
                      <div className="inputs">
                        <label htmlFor="Email" className="label">Email</label>
                        <textarea name="Message" id="message" placeholder="Write Message"></textarea>
                      </div>
                    </div>
                    <div className="col-12 mt-3">
                      <a href="mailto:sandhusatish166@gmail.com" className="button button-primary">Send Message</a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}