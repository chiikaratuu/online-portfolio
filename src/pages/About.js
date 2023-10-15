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
                <p style={{ color: "#334155", fontSize: "20px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p style={{ color: "#334155", fontSize: "20px" }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default About;
