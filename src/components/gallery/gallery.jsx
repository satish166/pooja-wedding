

import "./gallery.scss";

// images
import boypic from '../../assets/images/boy-pic.jpg';
import bride from '../../assets/images/bride.jpg';
import gallery1 from '../../assets/images/gallery-1.jpg';
import gallery2 from '../../assets/images/gallery-2.jpg';
import gallery3 from '../../assets/images/gallery-3.jpg';
import gallery4 from '../../assets/images/gallery-4.jpg';
import gallery5 from '../../assets/images/gallery-5.jpg';
import gallery6 from '../../assets/images/gallery-6.jpg';
export default function Gallery() {


  return (
    <>
      <div className="gallery">
        <section className="main-banner">
          <div className="banner-content">
            <div className="">
              <h1 className="names">Gallery</h1>
              <h6>Made by Satish Sandhu</h6>
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
                <img src={boypic} alt="" />
                <img src={bride} alt="" />
                <img src={gallery1} alt="" />
                <img src={gallery2} alt="" />
                <img src={gallery3} alt="" />
                <img src={gallery4} alt="" />
                <img src={gallery5} alt="" />
                <img src={gallery6} alt="" />
               

              </div>
              {/* <div className="action">
                <a href="/gallery" className="button button-primary">View All images</a>
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}