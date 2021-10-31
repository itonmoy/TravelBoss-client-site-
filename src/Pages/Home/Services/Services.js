import React, { useEffect, useState } from 'react';

import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://frightening-skeleton-12540.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data.slice(0,6)));
    }, [])
    return (
        <div>
            <h3 className="text-success">Choose Your Favorite Destination</h3>
            <div className="service-container">
                {services.map((service) => (
                <Service key={service.id} service={service}></Service>
                ))}
             </div>
            
        </div>
    );
};

export default Services;