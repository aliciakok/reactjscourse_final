import React from "react";

const Hero = () => {
  return (
    <div>
      <section id="hero" className="hero section dark-background">
        <div
          id="hero-carousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <div className="carousel-item active">
            <img src="assets/img/hero-carousel/hero-carousel-1.jpg" alt="" />
            <div className="carousel-container">
              <h2>
                Welcome to Hidayah
                <br />
              </h2>
              <p>
              We're thrilled to have you here at Haidayah, where unforgettable events come to life. 
              Whether you're planning an intimate gathering or a grand celebration, our team is dedicated to turning your vision into a spectacular reality. 
              Explore our site to discover our range of services, from elegant weddings to dynamic corporate events.
              <br/>
              <br/>
              Thank you for visiting, and we look forward to creating something extraordinary with you!
              </p>
              <a href="#about" className="btn-get-started">
                Read More
              </a>
            </div>
          </div>
          {/* End Carousel Item */}

          <div className="carousel-item">
            <img src="assets/img/hero-carousel/hero-carousel-2.jpg" alt="" />
            <div className="carousel-container">
              <h2>At Hidayah</h2>
              <p>
              We believe in turning dreams into reality. 
              Our commitment to excellence, creativity, and personalized service sets us apart. 
              We work closely with you to understand your vision, offering innovative solutions and seamless execution every step of the way.
              Thank you for considering us to be a part of your special occasion. We look forward to the opportunity to make your event truly unforgettable.
              </p>
              <a href="#about" className="btn-get-started">
                Read More
              </a>
            </div>
          </div>
          {/* End Carousel Item */}

          <div className="carousel-item">
            <img src="assets/img/hero-carousel/hero-carousel-3.jpg" alt="" />
            <div className="carousel-container">
              <h2>Excellence, Creativity, Personalized Services</h2>
              <p>
              From intimate gatherings to grand celebrations, we focus on delivering a bespoke experience that makes your event truly special. 
              With our commitment to attentive and individualized care, we transform your ideas into unforgettable moments.
              </p>
              <a href="#about" className="btn-get-started">
                Read More
              </a>
            </div>
          </div>
          {/* End Carousel Item */}

          <a
            className="carousel-control-prev"
            href="#hero-carousel"
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bi bi-chevron-left"
              aria-hidden="true"
            ></span>
          </a>

          <a
            className="carousel-control-next"
            href="#hero-carousel"
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bi bi-chevron-right"
              aria-hidden="true"
            ></span>
          </a>

          <ol className="carousel-indicators"></ol>
        </div>
      </section>
    </div>
  );
};

export default Hero;
