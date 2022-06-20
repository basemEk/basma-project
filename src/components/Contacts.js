import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="contacts-wrapper">
      <div className="stay-tuned">
        <h1 style={{ fontWeight: "700" }}>Stay Tuned</h1>
        <hr
          style={{ width: "85px", backgroundColor: "#761DFC", height: "0.5px" }}
        />
        <p style={{ paddingBottom: "5%", opacity: "90%" }}>
          reproduced in their exact original form, accompanied by English
          versions from the <br />
          translation by H. Rackhamtheir exact original form exact original.
        </p>
      </div>
      
       <div className="cont-row">
        <div className="cont-column one">
          <p id="lorem-contact-p">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
             facilisis libero. Vestibulum ultrices eros dolor consectetur d.
             facilisis libero. Vestibulum ultrices eros dolor consectetur d.
             facilisis.
          </p>
          
          <div className="contacts-icons-p">
             <img
              src="images/form-house.svg"
              style={{
                width: "20px",
                marginLeft: "-3%",
                marginTop: "0.5%",
                position: "absolute",
                color: "white",
                backgroundColor: "#761DFC",
              }}
                alt="house"
              /> 
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
                facilisis libero. Vestibulum ultrices.
              </p>
          </div>
          
          <div className="contacts-icons-p">
             <img
              src="images/form-phone.svg"
              style={{
                width: "20px",
                marginLeft: "-3%",
                marginTop: "0.5%",
                position: "absolute",
                color: "white",
                backgroundColor: "#761DFC",
              }}
                alt="house"
              /> 
              <p>
                +1 230 456 789-012 345 6789
              </p>
          </div>
          <div className="contacts-icons-p">
             <img
              src="images/form-mail.svg"
              style={{
                width: "20px",
                marginLeft: "-3%",
                marginTop: "0.5%",
                position: "absolute",
                color: "white",
                backgroundColor: "#761DFC",
              }}
                alt="house"
              /> 
              <p>
                exampledomain@domain.com
              </p>
          </div>
        </div>
        
        <div className="cont-column">
           <form>
              <div className="form-group">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" />
              </div>
              
              <div className="form-group">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
              </div>
              
              <div className="form-group">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Subject" />
              </div>
              
              <div className="form-group">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Message"></textarea>
              </div>
        
          <button type="submit" className="btn btn-primary btn-lg btn-block">Send Message</button>
      </form>

        </div>
      </div>
      
      </div>    
  );
};

export default Contacts;
