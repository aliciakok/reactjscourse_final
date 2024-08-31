import React from "react";

const About = () => {
  return (
    <div>
      <section id="about" className="about section">
      <div className="container section-title">
           <h2>About</h2>
           </div>
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-5 position-relative"
              >
              <img src="assets/img/about.jpg" className="img-fluid" alt="" />
              <a
                href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                className="glightbox pulsating-play-btn"
              ></a>
            </div>

            <div
              className="col-lg-7 content ps-lg-4"
              
            >
              <h3>About Us</h3>
              <p>
              We are a dedicated team of event planners and coordinators passionate about crafting unique experiences that leave lasting impressions.
              With years of experience in the industry, we specialize in creating tailored events that reflect your personal style and preferences. 
              From intimate gatherings and milestone celebrations to large-scale corporate functions, our expertise ensures every detail is meticulously managed.

              </p>
              <ul>
                <li>
                  <i className="bi bi-bullseye"></i>
                  <div>
                    <h5>Excellence</h5>
                    <p>
                    Ensure that each event is executed flawlessly, reflecting your unique style and preferences.<br/> 
                    Trust us to elevate your occasions with unparalleled creativity and professionalism.
                    </p>
                  </div>
                </li>
                <li>
                  <i className="bi bi-fullscreen-exit"></i>
                  <div>
                    <h5>Creativity</h5>
                    <p>
                    Embracing creativity as our core value, we approach every project with fresh perspectives and imaginative solutions. <br/>
                    We work closely with you to bring your vision to life, ensuring each detail reflects your personality and stands out in memorable ways
                    </p>
                  </div>
                </li>
                <li>
                  <i className="bi bi-broadcast"></i>
                  <div>
                    <h5>Personalized Service</h5>
                    <p>
                    From intimate gatherings to grand celebrations, we are committed to providing a level of service that is as individual as you are. <br/>
                    Trust us to deliver an unforgettable experience through attentive, personalized care and meticulous planning.
                    </p>
                  </div>
                </li>
              </ul>
              <p>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
