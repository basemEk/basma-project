import './Subscribe.css';

const Subscribe = () => {
    return ( 
        <div>
            <div className="container-subscribe">
                <div className="image-container-map">
                    <div className='h2-input-btn'>
                        <h2>Subscribe to get updates</h2>
                        <p>By subscribing you will get newsleter, promotion adipisicing elit <br />
                           promotion adipisicing elit promotion adipisicing elit promotion adipisicing</p>
                        <input type="email" placeholder="Enter your email here.."></input><br/>
                        <button type="button" className="btn btn-primary btn-md btn-block">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Subscribe;