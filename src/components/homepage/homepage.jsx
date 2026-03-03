
import "./homepage.scss";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";


import Countdown from "./countdown/countdown";
import bannerImage1 from '../../assets/images/banner-bg.jpg';
import bannerImage2 from '../../assets/images/img_bg_3.jpg';
import groomImage from '../../assets/images/gallery-3.jpg';
import brideImage from '../../assets/images/bride.jpg';

// images
import gallery1 from '../../assets/images/gallery-1.jpg';
import gallery2 from '../../assets/images/gallery-2.jpg';
import gallery3 from '../../assets/images/gallery-3.jpg';
import gallery4 from '../../assets/images/gallery-4.jpg';
import gallery5 from '../../assets/images/gallery-5.jpg';
import gallery6 from '../../assets/images/gallery-6.jpg';





export default function Homepage() {



  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//SaveTheDate//Wedding//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:save-the-date-20260405@example",
    "SUMMARY:Wedding - Save the Date",
    "DESCRIPTION:Save the date for our wedding!",
    "DTSTAMP:20260101T000000Z",
    "DTSTART;VALUE=DATE:20260405",
    "DTEND;VALUE=DATE:20260406",
    "END:VEVENT",
    "END:VCALENDAR",
    ""
  ].join("\r\n");

  const handleDownload = () => {
    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "save-the-date.ics";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };
  return (
    <>
      <div className="homepage">
        <section className="main-banner">
          <div className="banner-content">
            <div className="">
              <h1 className="names">Nirmal & Pooja</h1>
              <h6>We Are Getting Married</h6>
              <Countdown />
              <div className="action">
                <button className="button button-outline-primary" onClick={handleDownload}>
                  Save the Date</button>
              </div>
            </div>
          </div>
        </section>
        <section className="hello-section">
          <h2 className="primary-heading">Hello!</h2>
          {/* <h3 className="date">April 20th, 2026 Una (H.P)</h3> */}
          <h3 className="date"><b>Vanue:</b> Vikas Nagar, Ward No. 4, Near D.A.V Sr. Sec School Una (H.P)</h3>
          <h5>We invited you to celebrate our wedding</h5>
          <div className="container">
            <div className="couple-event">


              <div className="groom-section">
                <div className="image">
                  <img src={groomImage} alt="Groom Image" />
                </div>
                <div className="content">
                  <h6>Nirmal</h6>
                  <p>Thank you for loving our daughter with honesty, respect, and warmth. Your values, character, and gentle nature give us peace and happiness. We are proud to welcome you into our family and look forward to many beautiful memories together.</p>
                </div>
                
              </div>
              <div className="heart-icon animate-scale">
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <div className="bride-section">
                <div className="content">
                  <h6>Pooja</h6>
                  <p>Today you step into a new chapter with grace and courage.
                    Your love softens hearts, your smile brings peace, and your presence fills our lives with joy.
                    We appreciate the beautiful soul you are and the partner you are becoming.</p>
                </div>
                <div className="image">
                  <img src={brideImage} alt="Groom Image" />
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className="special-event">
          <div className="bg-image">
            <img className="w-100" src={bannerImage2} alt="bg Image" />
          </div>
          <div className="event-content">
            <h6 className="heading">Our Special Events</h6>
            <h2>Wedding Events</h2>
            <div className="container">
              <div className="row mt-4">
                <div className="col-md-6">
                  <div className="ceremony">
                    <h4>Baraat</h4>
                    <div className="event-date">
                      <div className="left-section">
                        <FontAwesomeIcon icon={faClock} />
                        <p>8:00 PM</p>
                      </div>
                      <div className="right-section">
                        <FontAwesomeIcon icon={faCalendar} />
                        <p>20th April 2026</p>
                      </div>
                    </div>
                    <div className="event-details">
                      <p>Across silent horizons and peaceful valleys of thought, two hearts find their way toward one timeless celebration. In this gentle corner of the world, love begins its journey, glowing like a lantern in the dusk.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="ceremony">
                    <h4>Doli</h4>
                    <div className="event-date">
                      <div className="left-section">
                        <FontAwesomeIcon icon={faClock} />
                        <p>6:00 AM</p>
                      </div>
                      <div className="right-section">
                        <FontAwesomeIcon icon={faCalendar} />
                        <p>21th April 2026</p>
                      </div>
                    </div>
                    <div className="event-details">
                      <p>Beyond the noise of bustling days and far from the hurried footsteps of the world, there lies a quiet corner where love lingers softly. Wrapped in the warmth of gentle colors and tender winds, each moment breathes a promise of new beginnings.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wedding-gellery">
          <span className="min-heading">Our Memories</span>
          <h2 className="primary-heading">Wedding Gallery</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          <div className="container">
            <div className="row">
              <div className="gellery">
                <img src={gallery1} alt="" />
                <img src={gallery2} alt="" />
                <img src={gallery3} alt="" />
                <img src={gallery4} alt="" />
                <img src={gallery5} alt="" />
                <img src={gallery6} alt="" />

              </div>
              <div className="action">
                <a href="/gallery" className="button button-primary">View All images</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}