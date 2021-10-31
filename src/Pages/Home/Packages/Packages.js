import React from 'react';
import './Packages.css'

const Packages = () => {
    return (
        <div id="packages">
            <h2>Packages you can Choose </h2>
            <div className="choose-plan">
            <div className="single-plan">
                <h4> GO SOLO </h4>
                <p>price is limited <br /> Unlimited Food <br /> Specific Destinations <br /> single bed hotel room </p>
                
            </div>
            <div className="single-plan">
                <h4>GROUP</h4>
                <p>price will be split ion members <br /> Unlimited Food <br /> Specific Destinations <br />hotel room will be shared with members</p>
            </div>
            <div className="single-plan">
                <h4>COUPLE PLAN</h4>
                <p>price is fixed <br /> Unlimited Food <br /> Specific Destinations <br /> Double bed hotel room </p>
            </div>
            </div>
        </div>
    );
};

export default Packages;