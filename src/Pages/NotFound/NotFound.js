import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.png'
const NotFound = () => {
    return (
        <div>
            <Link to="/"><button className="btn-primary">Go Back</button>
            </Link>
            <img style={{ width: '100%' }} src={notfound} alt="" />
            
        </div>
    );
};

export default NotFound;