import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <>
        <main style={{ marginBottom: "180px" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12" style={{ paddingTop: "120px" }}>
                <h2 className="fw-bolder fs-3">Hi People,</h2>
                <h1 className="fw-bold fs-1">
                  I'm{" "}
                  <span style={{ color: "#facc15" }}>Chika Ratu Mentari</span>
                </h1>
                <p className="fs-5 mb-5" style={{ width: "300px" }}>
                  <u>
                    I am React Developer, and also Student at Amikom University
                  </u>
                </p>
                <div className="my-4">
                  <Link to="/about" class="btn btn-primary py-2 px-4">
                    About Chika!
                  </Link>
                </div>
                <div className="d-flex align-items-center mt-5">
                  <a
                    href="https://www.linkedin.com/in/chika-ratu-mentari-322b42280/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-social-media"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/chkaarm/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-social-media"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-instagram"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/chiikaratuu"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-social-media"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-github"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-12">
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
            </div>
          </div>
        </main>
        {/* EXPERIENCE */}
        <div id="experience" style={{ marginBottom: "120px" }}>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-10 mx-auto">
                <div className="mb-5">
                  <h2
                    className="text-center"
                    style={{
                      color: "#0f172a",
                      fontSize: "38px",
                      marginBottom: "18px",
                    }}
                  >
                    Experience
                  </h2>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6 p-3">
                    <div
                      className="bg-primary px-5 rounded-3 d-flex align-items-center"
                      style={{ height: "130px" }}
                    >
                      <div className="d-flex align-items-center text-white">
                        <div className="text-white" style={{ marginRight: "12px"}}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            fill="currentColor"
                            class="bi bi-award"
                            viewBox="0 0 16 16"
                          >
                            <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                            <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                          </svg>
                        </div>
                        <p className="fs-4 font-bolder text-white mb-0">
                          Asistem Praktikum at Amikom University
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 p-3">
                    <div
                      className="bg-primary px-5 rounded-3 d-flex align-items-center"
                      style={{ height: "130px" }}
                    >
                      <div className="d-flex align-items-center text-white">
                        <div className="text-white" style={{ marginRight: "12px"}}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            fill="currentColor"
                            class="bi bi-award"
                            viewBox="0 0 16 16"
                          >
                            <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                            <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                          </svg>
                        </div>
                        <p className="fs-4 font-bolder text-white mb-0">
                          Volunteer at Bussiness Park
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Skills */}
        <div id="Skills" style={{ marginBottom: "120px" }}>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-10 mx-auto">
                <div className="mb-5">
                  <h2
                    className="text-center"
                    style={{
                      color: "#0f172a",
                      fontSize: "38px",
                      marginBottom: "18px",
                    }}
                  >
                    Skills
                  </h2>
                </div>
                <div className="row">
                  <div className="col-6 col-md-4 p-3">
                    <div
                      className="bg-primary px-5 rounded-3 d-flex align-items-center"
                      style={{ height: "130px" }}
                    >
                      <div className="w-100 d-flex align-items-center justify-content-center text-white">
                        <p className="fs-4 font-bolder text-white mb-0">
                          HTML
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 p-3">
                    <div
                      className="bg-primary px-5 rounded-3 d-flex align-items-center"
                      style={{ height: "130px" }}
                    >
                      <div className="w-100 d-flex align-items-center justify-content-center text-white">
                        <p className="fs-4 font-bolder text-white mb-0">
                          CSS
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 p-3">
                    <div
                      className="bg-primary px-5 rounded-3 d-flex align-items-center"
                      style={{ height: "130px" }}
                    >
                      <div className="w-100 d-flex align-items-center justify-content-center text-white">
                        <p className="fs-4 font-bolder text-white mb-0">
                          JavaScript
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 p-3">
                    <div
                      className="bg-primary px-5 rounded-3 d-flex align-items-center"
                      style={{ height: "130px" }}
                    >
                      <div className="w-100 d-flex align-items-center justify-content-center text-white">
                        <p className="fs-4 font-bolder text-white mb-0">
                          Bootstrap
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 p-3">
                    <div
                      className="bg-primary px-5 rounded-3 d-flex align-items-center"
                      style={{ height: "130px" }}
                    >
                      <div className="w-100 d-flex align-items-center justify-content-center text-white">
                        <p className="fs-4 font-bolder text-white mb-0">
                          React
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Awards */}
        <div id="awars">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-10 mx-auto">
                <div>
                  <h2
                    className="text-center"
                    style={{
                      color: "#0f172a",
                      fontSize: "38px",
                      marginBottom: "18px",
                    }}
                  >
                    Awards
                  </h2>
                </div>
                <div>
                  <p className="text-center fs-2 font-bolderr">"Saat ini saya belum memiliki Awards, tapi saya akan berusaha untuk Mendapatkan itu!"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
