import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
             <div className='text-success bg-dark footer container-fluid'>
            <div >
                <h3 className="pt-3">Location</h3>
                <p> Dhaka
                  <br />
                Bnagladesh
                 </p>
            </div>
            <div>
                <h3>About</h3>
                <p>Travel with us anywhere in the world </p>
                <p>Ⓒ copyrights preserves at TravelBOSS</p>
            </div>

            <div className="pt-3">
                <h3>Contact us</h3>
                Call us : 01315531000 <br />
                Email : travellBoss@gmail.com
            </div>
            </div>
        </div>
    );
};

export default Footer;