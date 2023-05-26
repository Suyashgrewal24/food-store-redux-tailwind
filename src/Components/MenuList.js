import React from 'react'
import { FOOD_IMG } from '../Utils/Constant'

const MenuList = ({Item}) => {
    const{name, imageId, price, category  } = Item
  return (
    <div>
          <div className="menu-item-list mt-5 px-2 lg:px-0 flex items-center justify-between  w-full  ">
            <div className="menu-list-left ">
              <p className="text-xl lg:text-2xl py-2 font-semibold">{name}</p>
              <p className='text-sm lg:text-base'>Rs. {price / 100 } </p>
              <p className="py-2 text-xs lg:text-base">{category}</p>
            </div>
            <div className="menu-list-right">
              <img className="w-24 h-24 rounded-lg" src={FOOD_IMG + imageId } alt="" />
              <button className='bg-orange-600 p-0.5 w-full font-bold rounded-lg text-white'>ADD</button>

            </div>
          </div>
          <hr className="mx-36 text-slate-900" />
    </div>
  )
}

export default MenuList