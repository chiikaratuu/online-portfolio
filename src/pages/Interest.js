import React from "react";

class Interest extends React.Component {
  render() {
    return (
      <>
        <main>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-8 mx-auto" style={{ marginTop: "100px" }}>
                <h1
                  style={{
                    color: "#0f172a",
                    fontSize: "38px",
                    marginBottom: "18px",
                  }}
                >
                  I'm Interest finishing the Roadmap Front-End
                </h1>
              </div>
              <div className="col-12 col-md-10 mx-auto mt-5">
                <img className="w-100" src="/images/interest.jpg" alt="interest" />
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default Interest;
