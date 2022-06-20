import "./Features.css";

const Features = () => {
  return (
    <div>
      <div className="code-challenge">
        <h2>Code Challenge</h2>
        <div id="hr-feature"></div>
        <p>
          reproduced in their exact original form, accompanied by English
          versions 1914 <br />
          translation by H. Rackham.
        </p>
      </div>
      <div className="row-features">
        <div className="column">
        <img src="images/pointer-top.png" alt="pointer" style={{opacity: '50%'}} />
          <h3>Fully Functional</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
            facilisis libero. Vestibulum ultrices eros.
          </p>
        </div>
        <div className="column">
         <img src="images/icons8-fingerprint-50.png" alt="fingerprint" style={{opacity: '50%', width: '70px'}} />
          <h3>Fully Functional</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
            facilisis libero. Vestibulum ultrices eros.
          </p>
        </div>
        <div className="column">
        <img src="images/icons8-unchecked-checkbox-50.png" alt="checkbox" style={{opacity: '50%', width: '70px', color: 'grey'}} />
          <h3>Fully Functional</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
            facilisis libero. Vestibulum ultrices eros.
          </p>
        </div>
        <div className="column">
        <img src="images/icons8-location-100.png" alt="location" style={{opacity: '70%', width: '70px', color: 'grey'}} />
          <h3>Location Tracking</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
            facilisis libero. Vestibulum ultrices eros.
          </p>
        </div>
        <div className="column">
         <img src="images/icons8-gears-50.png" alt="gear" style={{ opacity: '50%', width: '70px', color: 'grey'}}/>
          <h3>Powerful Setting</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
            facilisis libero. Vestibulum ultrices eros.
          </p>
        </div>
        <div className="column">
         <img src="images/world.svg" alt="world" style={{opacity: '50%', width: '70px'}}/>
          <h3>Multiple Language</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
            facilisis libero. Vestibulum ultrices eros.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
