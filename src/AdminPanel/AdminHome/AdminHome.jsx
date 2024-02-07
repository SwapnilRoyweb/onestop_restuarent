import React from 'react';
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2';

const img_hosting_key = import.meta.env.VITE_Image_Upload;

const AdminHome = () => {
    const { register, handleSubmit, reset } = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

    const onSubmit = data => {
        console.log(data.Image[0]);

        const formData = new FormData();
        formData.append('image', data.Image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            console.log(imgResponse);
            if(imgResponse.success){
                const imgUrl = imgResponse.data.display_url;
                // console.log(data, imgUrl);
                const { Name, Place, Price, Ratings, Type } = data;

                const newFood = { Name, Place, Price: parseFloat(Price), Ratings, Type, Image: imgUrl }
                // console.log(newFood);

                fetch('https://restusrent-data-server.vercel.app/foods', {
                    method: 'POST',
                    headers: { 'content-type' : 'application/json' },
                    body: JSON.stringify(newFood)
                })
                .then((res) => res.json())
                .then(result => {
                    // console.log(result);
                    if(result.insertedId){
                        reset();
                        Swal.fire("New Food Included");
                    }
                })
            }
        })
    }

    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center gap-3 mt-10'>
                <div className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-black">What is your food name?</span>
                    </div>
                    <input type="text" placeholder="Type here" {...register('Name')} className="input input-bordered w-full max-w-xs text-white" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-black">What is your food price?</span>
                    </div>
                    <input type="text" placeholder="Type here" {...register('Price')} className="input input-bordered w-full max-w-xs text-white" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-black">What is your food type?</span>
                    </div>
                    <input type="text" placeholder="Type here" {...register('Type')} className="input input-bordered w-full max-w-xs text-white" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-black">Where is your location?</span>
                    </div>
                    <input type="text" placeholder="Type here" {...register('Place')} className="input input-bordered w-full max-w-xs text-white" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-black">Your food ratings?</span>
                    </div>
                    <input type="text" placeholder="Type here" {...register('Ratings')} className="input input-bordered w-full max-w-xs text-white" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-black">Your food image?</span>
                    </div>
                    <input type="file" name='image'  {...register("Image", { required: true })}  className="file-input file-input-bordered w-full max-w-xs text-white" />
                </div>

                <button className='btn btn-primary mt-10 text-white'>Add Food</button>

            </form>

        </div>
    );
};

export default AdminHome;