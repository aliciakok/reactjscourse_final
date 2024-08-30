import React from "react";

const About = () => {
  return (
    <div>
      <section id="about" className="about section">
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
                Dolor iure expedita id fuga asperiores qui sunt consequatur
                minima. Quidem voluptas deleniti. Sit quia molestiae quia quas
                qui magnam itaque veritatis dolores. Corrupti totam ut eius
                incidunt reiciendis veritatis asperiores placeat.
              </p>
              <ul>
                <li>
                  <i className="bi bi-diagram-3"></i>
                  <div>
                    <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                    <p>
                      Magni facilis facilis repellendus cum excepturi quaerat
                      praesentium libre trade
                    </p>
                  </div>
                </li>
                <li>
                  <i className="bi bi-fullscreen-exit"></i>
                  <div>
                    <h5>Magnam soluta odio exercitationem reprehenderi</h5>
                    <p>
                      Quo totam dolorum at pariatur aut distinctio dolorum
                      laudantium illo direna pasata redi
                    </p>
                  </div>
                </li>
                <li>
                  <i className="bi bi-broadcast"></i>
                  <div>
                    <h5>Voluptatem et qui exercitationem</h5>
                    <p>
                      Et velit et eos maiores est tempora et quos dolorem autem
                      tempora incidunt maxime veniam
                    </p>
                  </div>
                </li>
              </ul>
              <p>
                Dolor iure expedita id fuga asperiores qui sunt consequatur
                minima. Quidem voluptas deleniti. Sit quia molestiae quia quas
                qui magnam itaque veritatis dolores. Corrupti totam ut eius
                incidunt reiciendis veritatis asperiores placeat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
