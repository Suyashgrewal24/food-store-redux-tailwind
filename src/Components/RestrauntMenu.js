import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import RestrauntMenuHead from './RestrauntMenuHead'

import { FOOD_IMG } from '../Utils/Constant'
import MenuListHeading from './MenuListHeading'
import MenuList from './MenuList'
import Shimmer from './Shimmer'

const ResMenu = () => {

  const params = useParams()
  console.log(params.id)
  const { id } = params
  const [ResMenuHead, setResMenuHead] = useState("")
  const [ResMenuData, setResMenuData] = useState([])

  useEffect(() => {
    GetRestaurantData()
  }, [])

  const GetRestaurantData = async () => {

    const res = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId=${id}`)
    const json = await res.json()
    // console.log(json.data.cards[0].card.card.info)
    setResMenuHead(json?.data?.cards[0]?.card?.card?.info)
    setResMenuData(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map((list) => list.card.info))


    console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map((list) => list.card.info))


  }
  console.log(ResMenuData)

  return (
    ResMenuData.length === 0 ? <Shimmer /> 
  
  :
      <>
        <div className="resturant-menu-container container">
          {/* Header  */}
          <RestrauntMenuHead ResMenuHead={ResMenuHead} />

          {/* Restraunt menu  */}
          <div className="resMenuContainer px-0 py-4 lg:py-5 lg:px-36 ">
            {/* menu head  */}
            <MenuListHeading />

            {/* menu items  */}
            {
              ResMenuData.map((Item) => {
                return (

                  <MenuList Item={Item} />
                )
              })
            }


          </div>

        </div>

      </>
  )
}

export default ResMenu