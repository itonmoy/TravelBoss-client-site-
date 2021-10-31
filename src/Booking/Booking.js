import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Booking.css'

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] =useState({})
    useEffect(()=>{
        fetch(`https://frightening-skeleton-12540.herokuapp.com/services/${serviceId}`)
        .then(res =>res.json())
        .then(data => setService(data));
    },[])

    return (
        <div classname="travller-info mt-2">
            <img src={service.img} alt="" />
            <h2 className="text-danger">The Traveller is: {service.name} </h2>
            <p>Choosed Place: {service.destination}</p>
            <p>Cost of Travelling : ${service.price}</p>
            {/* <h2>{serviceId} </h2> */}
        </div>
    );
};

export default Booking;