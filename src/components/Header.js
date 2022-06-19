import "./Header.css";

const Header = () => {
  return (
    <div id="first-section">
     
      
      <div className="col-2-2 text-styling">
        <h1 >
          Creative way to <br />
          Showcase your
          <br /> App
        </h1>
        
          <p>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum".
          </p>
          <button type="button" className="btn ">Get Started</button>
        
      </div>
      
       <div className="col-1-1">
      <img src="images/phone-1.png" alt="p1"  />
      </div>
    </div>
  );
};

export default Header;
