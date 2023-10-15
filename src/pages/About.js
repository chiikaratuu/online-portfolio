import React from "react";

class About extends React.Component {
  render() {
    return (
      <>
        <main>
          <div className="container">
            <div className="row">
              <div className="col-8 mx-auto">
                <div
                  className="position-relative"
                  style={{ marginTop: "100px" }}
                >
                  <img
                    src="/images/photo.jpg"
                    className="home-photo"
                    alt="photo"
                  />
                  <div className="home-photo__line"></div>
                </div>
              </div>
              <div className="col-8 mx-auto" style={{ marginTop: "100px" }}>
                <h1 style={{ color: "#0f172a", fontSize: "38px", marginBottom: "18px" }}>Hi, I'm Chika Ratu Mentari</h1>
                <p style={{ color: "#334155", fontSize: "20px" }}>I am a student at Amikom University, Yogyakarta, class of 2021, undergraduate program in informatics. Now I am developing my skills as a front end developer by joining the hacktive partner independent campus program.</p>
                <p style={{ color: "#334155", fontSize: "20px" }}>Apart from that, I'm also a teaching assistant in Amikom Yogyakarta University courses programming, data communication, and hardware/software. I also join the community on campus, namely the AMCC Front End Developer division.</p>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default About;
