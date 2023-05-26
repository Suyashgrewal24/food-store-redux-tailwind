import React from 'react'
import { FOOD_IMG } from "../../Utils/Constant"

const ResCards = ({ resturantData }) => {
    const { name, avgRating, cloudinaryImageId, costForTwo
    } = resturantData.data
    return (
        <>
            <div className="w-72 p-1 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="p-4 h-60 w-72  rounded-t-lg " src={FOOD_IMG + cloudinaryImageId} />
                </a>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    </a>

                    <div className="flex items-center justify-between">
                        <div className="text-sm font-semibold text-gray-600 dark:text-white">Cost for Two {costForTwo / 100}</div>

                        <div className={`px-2.5 rounded-md text-white  ${avgRating  === `--` ? 'bg-red-600' :avgRating <= 2.5?'bg-red-600' :avgRating <= 4 ? 'bg-yellow-500': 'bg-green-600'}`}>{avgRating}</div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default ResCards