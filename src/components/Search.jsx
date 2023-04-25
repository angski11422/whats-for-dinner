import React from 'react';
import RecipeForm from './RecipeForm'

function Search() {

    // `https://www.themealdb.com/api/json/v1/1/search.php?f=${b}`
    
    return (
        <div>
            <div className="container h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8">
                <div className="relative">
                    <input type="text" className="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none" placeholder="Search anything..." />
                    <div className="absolute top-4 right-3">
                        <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
                    </div>
                </div>  
                <div>
                    <RecipeForm />
                </div>     
            </div>
        </div>
    );
}

export default Search;

// outer div className=" bg-gray-200"