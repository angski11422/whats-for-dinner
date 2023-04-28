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
        <div className="bg-neutral-600 justify-center">
            <div className="px-80">
                <input 
                    className="px-20"
                    type="text" 
                    placeholder="Search anything..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} 
                />
            </div>  
            <div>
                {displayRecipe}
            </div>     
        </div>
    );
}

export default Search;


