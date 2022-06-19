import "./Contacts";

const Contacts = () => {
  return (
    <div>
      <div className="stay-tuned">
        <h1 style={{ fontWeight: "700" }}>Stay Tunes</h1>
        <hr
          style={{ width: "85px", backgroundColor: "#761DFC", height: "0.5px" }}
        />
        <p style={{ paddingBottom: "5%", opacity: "90%" }}>
          reproduced in their exact original form, accompanied by English
          versions from the 1914 <br />
          translation by H. Rackhamtheir exact original form.
        </p>
      </div>

      <div className="contacts-form-container">
        <div className="contacts">
          <div className="home-phone-mail">
            <p className="home-icon">
                 <p>
               <span>
                <img
                  src="images/form-house.svg"
                  style={{
                    width: "20px",
                    marginLeft: "-3%",
                    marginTop: "0.5%",
                    position: "absolute",
                    color: 'white',
                    backgroundColor: '#761DFC'
                  }}
                  alt="house"
                />
              </span>
            reproduced in their exact original form, accompanied by English
            <br />
            reproduced in their exact original form, accompanied by English
            <br />
            reproduced in their exact original form, accompanied by English
          </p>
            </p>

            <p className="phone-icon">
              <span>
                <img
                  src="images/form-phone.svg"
                  style={{
                    width: "20px",
                    marginLeft: "-3%",
                    marginTop: "0.5%",
                    position: "absolute",
                    backgroundColor: '#761DFC',
                  }}
                  alt="phone"
                />
              </span>
              +1 230 456 789-012 345 6789
            </p>

            <p className="mail-icon">
              <span>
                <img
                  src="images/form-mail.svg"
                  style={{
                    width: "20px",
                    marginLeft: "-3%",
                    marginTop: "0.5%",
                    position: "absolute",
                    backgroundColor: '#761DFC',
                  }}
                  alt="mail"
                />
              </span>
              exampledomain@domain.com
            </p>
          </div>
        </div>
        
        
        
        <div className="form">
            <form class="form-horizontal">
            {/* col-md-4 */}
        <div className="form-group">
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" />
        </div>
        <div className="form-group">
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Subject" />
        </div>
    
        <div className="form-group">
          <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Message" rows={3} defaultValue={""} />
        </div>
        
        <div className="form-group">
            <button type="button" className="btn btn-primary btn-md btn-block" 
                style={{ backgroundColor: '#761DFC' }}><span></span>Send Message
            </button>
        </div>
           </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
