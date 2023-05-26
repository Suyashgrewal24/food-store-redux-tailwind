// import React from 'react'
// import { useEffect, useState } from "react"
// import { FOOD_API } from "../Utils/API"

// export const useFoodData = () => {
//     const [FoodItem, setFoodItem] = useState([])
//     useEffect(() => {
//         GetFood()
//     }, [])

//     const GetFood = async () => {
//         const res = await fetch(FOOD_API)
//         const json = await res.json()
//         const cards = json?.data.cards[2]?.data?.data?.cards
//         console.log(cards)
//         setFoodItem(cards)
//         setFilteredData(cards)
//     }

//     return FoodItem

 
// }
