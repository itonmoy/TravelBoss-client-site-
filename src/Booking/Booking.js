import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();


const [serviceDetails,setServiceDetails]=useState([])

useEffect(()=>{
    fetch('/services.json')
    .then(res=>res.json())
    .then(data=>setServiceDetails(data))
},[])

const foundDetails= serviceDetails.find(singleService=>singleService.id===Number(serviceId))
 console.log(foundDetails);


    return (
        <div>
            <img src={foundDetails?.img} alt="" />
            <p> {foundDetails?.name} </p>
            <p> {foundDetails?.price} </p>
            
        </div>
    );
};

export default Booking;