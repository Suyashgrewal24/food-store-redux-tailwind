import React from 'react'
import { FOOD_IMG } from '../Utils/Constant'
const RestrauntMenuHead = ({ResMenuHead}) => {
    const { name, costForTwo, avgRating, id, cloudinaryImageId, cuisines } = ResMenuHead
    return (
        <>
            <div className="resHead w-full bg-gray-700 h-56  lg:h-[40vh] flex justify-between lg:py-10  lg:px-36  py-2 px-2 ">

                <div className="Res-head-detail text-white w-[68%] flex flex-col justify-around">
                    <h1 className=" lg:text-4xl text-2xl  font-semibold ">{name} </h1>
                    <p className='text-xl' >{cuisines?.join(", ")}</p>
                    <p className='text-xl'> Cost For Two ₹{costForTwo / 100} </p>


                    <p className={`${avgRating <= 4 ? 'bg-yellow-500' : 'bg-green-500'} w-8 rounded-sm p-0.5 text-center } `}> {avgRating} </p>
                </div>

                <div className="resImage-section"> <img className="w-32 h-32 pt-4 rounded-lg lg:w-64 lg:h-52" src={FOOD_IMG + cloudinaryImageId} alt="" /></div>


            </div>
        </>
    )
}

export default RestrauntMenuHead