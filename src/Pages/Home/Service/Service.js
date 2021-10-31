import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id,name,img,price} =service;
    return (
        <div>
       
                
                <div className="m-2">
                    <Card className="mx-auto pb-2" style={{ width: "21rem",backgroundColor:"lightcyan" }}>
                    <Card.Img variant="top" className="img-flui p-2 imgHeight" src={img} />
                    <Card.Body className="my-1 py-1">
                        <Card.Title>{name}</Card.Title>
                    </Card.Body>
                    <Card.Body className="my-1 py-1">
                    
                    </Card.Body>
                    <p>Price: ${price}</p>
                    <Link to={`/booking/${id}`}>
                        <button className="btn btn-info">ADD TO CART</button>
                    </Link>
                
                    </Card>
                </div>
                
            
        </div>
    );
};

export default Service;