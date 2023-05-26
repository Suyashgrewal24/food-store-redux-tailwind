import { useEffect, useState } from "react"
import { FOOD_API } from "../../Utils/API"
import { Link } from "react-router-dom"

import ResCards from "./ResCards"
import SearchBar from "./SearchBar"
import Shimmer from "../Shimmer"

const Hero = () => {
    const [FoodItem, setFoodItem] = useState([])
    const [SearchInput, setSearchInput] = useState("")
    const [FilteredData, setFilteredData] = useState([])
    const [ClearSearchData, setClearSearchData] = useState(false)


    useEffect(() => {
        GetFood()
    }, [])

    const SearchData = () => {
        const result = FoodItem.filter((search) => {
            return search.data.name.includes(SearchInput); // Add 'return' statement
        });
        setFilteredData(result);
        setClearSearchData(true)
        console.log(result);
    };

    const ClearSearch = () => {
        setFilteredData(FoodItem)
        setClearSearchData(false)
    }

    const GetFood = async () => {
        const res = await fetch(FOOD_API)
        const json = await res.json()
        const cards = json?.data.cards[2]?.data?.data?.cards
        console.log(cards)
        setFoodItem(cards)
        setFilteredData(cards)
    }
    return (
        FoodItem.length === 0? <Shimmer/>
        :
    
        <>


            {/* search bar  */}
            <SearchBar
                setSearchInput={setSearchInput}
                SearchInput={SearchInput}
                SearchData={SearchData}
                ClearSearchData={ClearSearchData}
                ClearSearch={ClearSearch}
            />

            {/* card section  */}
            <div className="resturant-cards-section flex flex-wrap lg:pt-2 gap-8 lg:pl-36 pl-12">
                {FilteredData.map((resturantData) =>
                    <Link key={resturantData.data.id} to={'/resmenu/' + resturantData.data.id}>
                        <ResCards resturantData={resturantData} />
                    </Link>

                )}
            </div>
        </>
    )
}

export default Hero