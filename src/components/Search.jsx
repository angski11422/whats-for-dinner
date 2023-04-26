import React, { useEffect, useState } from 'react';
import SearchRecipe from './SearchRecipe'

function Search() {
    const [searchRecipe, setSearchRecipe] = useState("")
    const [search, setSearch] = useState("")
    // const [showResults, setShowResults] = useState(false)
 
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
        .then((resp) => resp.json())
        .then(data => setSearchRecipe(data))
        }, [])
    
    if (!searchRecipe){
        return <h3>Loading...</h3>
    }

    const displayRecipe = searchRecipe.meals.filter((meal) => {
        return meal.strMeal.toLowerCase().includes(search.toLowerCase())
      }).map((meal) => (
        <SearchRecipe key={meal.idMeal} meal={meal}/>
      ))
    


    return (
        <div className=" bg-gray-200">
            <div className="container h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8">
                <div className="relative">
                    <input 
                        type="text" 
                        className="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none" 
                        placeholder="Search anything..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)} 
                    />
                    <div className="absolute top-4 right-3">
                        <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
                    </div>
                </div>  
                <div>
                    {displayRecipe}
                </div>     
            </div>
        </div>
    );
}

export default Search;


