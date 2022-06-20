import "./Packages.css";

const Packages = () => {
  return (
    <div>
      <div className="container">
        <h1 style={{ fontWeight: "700" }}>BASMA code Challenge</h1>
        <hr style={{ width: "85px", backgroundColor: "#761DFC", height: "0.5px" }}/>
        <p style={{ paddingBottom: "5%", opacity: "90%" }}>
          reproduced in their exact original form, accompanied by English
          versions from the 1914 <br />
          translation by H. Rackhamtheir exact original form.
        </p>
        <div className="price-row">
          <div className="price-col">
            <div className="motor">
              <img
                src="images/bike.png"
                style={{ width: "18%" }}
                alt="bicycle"
              />
           </div>
            <p
              style={{
                letterSpacing: "3px",
                marginTop: "17px",
                color: "black",
                fontWeight: "bold",
              }}
            >
              BASIC
            </p>
            <h3>
              <span>$</span>49
            </h3>
            <ul>
              <hr
                style={{
                  width: "200px",
                  backgroundColor: "grey",
                  opacity: "12%",
                  height: "0.5px",
                }}
                className="hr-p"
              />
              <li>5GB Linux Web Space</li>
              <hr
                style={{
                  width: "200px",
                  backgroundColor: "grey",
                  opacity: "12%",
                  height: "0.5px",
                }}
                className="hr-p"
              />
              <li>5 MySQL Databases</li>
              <hr
                style={{
                  width: "200px",
                  backgroundColor: "grey",
                  opacity: "12%",
                  height: "0.5px",
                }}
                className="hr-p"
              />
              <li>24/7 Tech Support</li>
              <hr
                style={{
                  width: "200px",
                  backgroundColor: "grey",
                  opacity: "12%",
                  height: "0.5px",
                }}
                className="hr-p"
              />
              <li>Daily Backup</li>
              <hr
                style={{
                  width: "200px",
                  backgroundColor: "grey",
                  opacity: "12%",
                  height: "0.5px",
                }}
                className="hr-p"
              />
            </ul>
            <div className="signup-btn">
              <button type="button" className="btn btn-primary btn-lg">
                Sign Up
              </button>
            </div>
          </div>

          <div className="price-col">
            <div className="motor">
              <img
                src="images/motorbike.png"
                style={{ width: "18%" }}
                alt="bicycle"
              />
            </div>
            <p
              style={{
                letterSpacing: "3px",
                marginTop: "17px",
                color: "black",
                fontWeight: "bold",
              }}
            >
              PRO
            </p>
            <h3>
              <span>$</span>129
            </h3>
            <ul>
              <hr
                style={{
                  width: "200px",
                  backgroundColor: "grey",
                  opacity: "12%",
                  height: "0.5px",
                }}
              />
              <li>10GB Linux Web Space</li>
              <hr
                style={{
                  width: "200px",
                  backgroundColor: "grey",
                  opacity: "12%",
                  height: "0.5px",
                }}
              />
              <li>50 MySQL Databases</li>
              <hr
                style={{
                  width: "200px",
                  backgroundColor: "grey",
                  opacity: "12%",
                  height: "0.5px",
                }}
              />
              <li>Unlimited Emails</li>
              <hr
                style={{
                  width: "200px",
                  backgroundColor: "grey",
                  opacity: "12%",
                  height: "0.5px",
                }}
              />
              <li>Daily Backup</li>
              <hr
                style={{
                  width: "200px",
                  backgroundColor: "grey",
                  opacity: "12%",
                  height: "0.5px",
                }}
              />
            </ul>
            <div className="signup-btn">
              <button type="button" className="btn btn-primary btn-lg">
                Sign Up
              </button>
            </div>
          </div>
          <h6>
            Not sure what to choose? <a href="#contact-us">Contact Us</a>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Packages;
