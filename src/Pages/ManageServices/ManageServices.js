import React, { useEffect, useState } from 'react';
import './ManageService.css'

const ManageServices = () => {
    const [services, setServices] =useState([]);
    useEffect(()=>{
        fetch('https://frightening-skeleton-12540.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);
    const handleDelete = id =>{
        const url =`https://frightening-skeleton-12540.herokuapp.com/services/${id}`;
        fetch(url,{
            method:'DELETE'
        } )
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            if(data.deletedCount){
                alert('deleted')
                const remaining =services.filter(service => service._id)
                setServices(remaining)
            }
            
        })
    }
    return (
        <div>
            <h2>Manage services</h2>
            {
                services.map(service => <div key={service._id}>
                    <div className="manage-service">
                      <h3 className="text-danger"> Location: {service.destination} </h3>
                      <p className="text-success">Traveller: {service.name} </p>
                      <button   onClick={()=> handleDelete(service._id)} >Delete</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageServices;