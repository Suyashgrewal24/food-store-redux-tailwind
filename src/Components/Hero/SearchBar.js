import React from 'react'

const SearchBar = ({SearchData, setSearchInput, SearchInput, ClearSearch, ClearSearchData}) => {
  return (
    <>
         <div className="search-bar-section">
                <div className="flex items-center lg:pt-5 lg:pl-36 p-5 pl-14">
                    <div className="flex space-x-1">
                        <input
                            type="text"
                            onChange={(e) => setSearchInput(e.target.value)}
                            value={SearchInput}
                            className="block w-full px-4 py-2 bg-white border rounded-full focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="Search..."
                        />
                        <button onClick={SearchData} className="px-4 text-white bg-orange-600 rounded-full ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                        {ClearSearchData && (<button onClick={ClearSearch} className="bg-red-600 text-white rounded-xl p-2">Clear</button>)}
                    </div>
                </div>
            </div>
    </>
  )
}

export default SearchBar