import "./BasmaApps.css";

const BasmaApps = () => {
  return (
    <div className="wrapper">
      <div className="image-container">
        <div className="coworkers-image">
          <div className="h1-p-apps">
              <h1>BASMA is available for all devices</h1>
              <p>
                reproduced in their exact original form, 
                versions from the 1914  <br />
                exact original form, accompanied by<br />
                exact original 
              </p>
            <div className="apps">
                <img
                  src="images/google-play.png"
                  alt="google-play"
                  className="apps-icon"
                />

                <img
                  src="images/app-store.png"
                  alt="app-store"
                  className="apps-icon"
                />
            </div>
            <h6 style={{ fontWeight: '10px', marginTop: '20px' }}><i>*Available on iPhone, iPad and all Android devices</i></h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasmaApps;
