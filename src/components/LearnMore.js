import "./LearnMore.css";

const LearnMore = () => {
  return (
  <>
    <div className="phone-learn-flex">
    <div className="phone-p">
        <h1>Share your photos<br />with friends easily</h1>
        
        <p className="learn-p">
          <span>
            <img
              src="images/icons8-health-data-30.png"
              style={{ width: "20px", marginLeft: '-3%', marginTop: '0.5%', position: 'absolute' }}
              alt="health"
              className="easily-icons"
            />
          </span>
          Aliquam convallis urna sit amet lorem semper accumsan. Class aptent
          taciti sociosqu ad litora torquent sociosqu amet lorem semper ad litora torquent.
        </p>
        <p className="learn-p">
          <span>
            <img
              src="images/icons8-brush-64.png"
              style={{ width: "20px", marginLeft: '-3%', marginTop: '0.5%', position: 'absolute' }}
              alt="brush"
              className="easily-icons"
            />
          </span>
          Aliquam convallis urna sit amet lorem semper accumsan. Class aptent
          taciti sociosqu ad litora torquent sociosqu amet lorem semper ad litora torquent.
        </p>
        <p className="learn-p">
          <span>
            <img
              src="images/icons8-water-24.png"
              style={{ width: "20px", marginLeft: '-3%', marginTop: '0.5%', position: 'absolute' }}
              alt="water-drop"
              className="easily-icons"
            />
          </span>
          Aliquam convallis urna sit amet lorem semper accumsan. Class aptent
          taciti sociosqu ad litora torquent sociosqu amet lorem semper ad litora torquent..
        </p>
        <p className="learn-p">
          <span>
            <img
              src="images/icons8-shopping-trolley-66.png"
              style={{ width: "20px", marginLeft: '-3%', marginTop: '0.5%', position: 'absolute' }}
              alt="shopping-trolley"
              className="easily-icons"
            />
          </span>
          Aliquam convallis urna sit amet lorem semper accumsan. Class aptent
          taciti sociosqu ad litora torquent sociosqu amet lorem semper ad litora torquent.
        </p>
      </div>
    
      <div className="learn-more-img">
        <img src="images/phone-3.png" alt="phone2" />
      </div>
    </div>
    
    <div className="learn-btn">
        <button type="button" className="btn btn-primary btn-lg">Learn More</button>
    </div>
    </>
  );
};

export default LearnMore;
