import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
             <div className='text-success bg-dark footer container-fluid'>
            <div >
                <h3 className="pt-3">Location</h3>
                <p>House No. 245/C, 
                  <br />
                 Green Road, Dhaka.
                 </p>
            </div>
            <div>
                <h3>About</h3>
                <p>You can get any kind of medical care from us. <br /> We have special treatment facilities in this pandemic</p>
            </div>

            <div className="pt-3">
                <h3>Contact us</h3>
                Call us : 01315531000 <br />
                Email : tonmoy'smedic@gmail.com
            </div>
            </div>
        </div>
    );
};

export default Footer;