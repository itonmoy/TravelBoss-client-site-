import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'


const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://frightening-skeleton-12540.herokuapp.com/services', data)
        .then(res => {
            if(res.data.insertedId){
                alert('added the data successfully');
                reset();
            }
        })
    }
    return (
        <div className="form">
            <h3>Please add your choices</h3>
           <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name")} placeholder="Name" />
            <input {...register("destination")} placeholder="Destination" />
            <input {...register("img")} placeHolder="Image" />
            <input type="number" {...register("price")} placeholder="Price" />
            <input type="submit"  />
           </form>
        </div>
    );
};

export default AddService;