import "./PowerfulTools.css";

const PowerfulTools = () => {
  return (
    <div className="phone-tools">
      <div className="phone">
        <img src="images/phone-2.png" alt="phone2" />      
      </div>
      <div className="tools">
      <h1>Work faster with<br/>powerful tools</h1>
        <p className="powerful-p">
        <span><img src="images/check.svg" className="tick" style={{ width: '15px', marginLeft: '-2%', marginTop: '1%', position: 'absolute'  }} alt="check-bullet" /></span>
            Aliquam convallis urna sit amet lorem semper accumsan. Class aptent
            taciti sociosqu ad litora torquent.
        </p>
        <p className="powerful-p">
        <span><img src="images/check.svg" className="tick" style={{ width: '15px', marginLeft: '-2%', marginTop: '1%', position: 'absolute'  }} alt="check-bullet" /></span>
            Aliquam convallis urna sit amet lorem semper accumsan. Class aptent
            taciti sociosqu ad litora torquent.
        </p>
        <p className="powerful-p">
        <span><img src="images/check.svg" className="tick" style={{ width: '15px', marginLeft: '-2%', marginTop: '1%', position: 'absolute'  }} alt="check-bullet" /></span>
            Aliquam convallis urna sit amet lorem semper accumsan. Class aptent
            taciti sociosqu ad litora torquent.
        </p>
        <p className="powerful-p">
        <span><img src="images/check.svg" className="tick" style={{ width: '15px', marginLeft: '-2%', marginTop: '1%', position: 'absolute' }} alt="check-bullet" /></span>
            Aliquam convallis urna sit amet lorem semper accumsan. Class aptent
            taciti sociosqu ad litora torquent.
        </p>
        <p className="powerful-p">
        <span><img src="images/check.svg" className="tick" style={{ width: '15px', marginLeft: '-2%', marginTop: '1%', position: 'absolute'  }} alt="check-bullet" /></span>
            Aliquam convallis urna sit amet lorem semper accumsan. Class aptent
            taciti sociosqu ad litora torquent.
        </p>
        <div className="cam-bell-mail">
          <div><img src="images/icons8-bell-24.png" style={{ width: '25px', marginRight: '25px' }} alt="bell" /></div>
          <div><img src="images/form-mail.svg" style={{ width: '25px', marginRight: '25px', color: 'red' }} alt="bell" /></div>
          <div><img src="images/icons8-documentary-24.png" style={{ width: '25px', marginRight: '25px' }} alt="bell" /></div>
        </div>
      </div>
    </div>
  );
};

export default PowerfulTools;
