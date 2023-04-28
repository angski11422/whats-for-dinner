import React from 'react';

function RandomRecipe({randomRecipe}) {

    const ranRecipe = randomRecipe.meals[0]

    function handleViewVideo() {
        window.open(ranRecipe.strYoutube, '_blank');
    }

    return (
        <div className="bg-rose-300 container m-auto grid grid-cols-1 gap-4 border-slate-800 border-4 place-content-center justify-center align-top">
            <img 
                src={ranRecipe.strMealThumb} 
                alt={ranRecipe.strMeal}
                onClick={handleViewVideo}
                className="max-w-xs max-h-xs p-5"
            />
            <h1 className="font-bold p-3">{ranRecipe.strMeal}</h1>
            
            <ul className="marker:text-white text-black list-inside list-disc"><b>Ingredients:</b>
                <li>{ranRecipe.strMeasure1} {ranRecipe.strIngredient1}</li>
                <li>{ranRecipe.strMeasure2} {ranRecipe.strIngredient2}</li>
                <li>{ranRecipe.strMeasure3} {ranRecipe.strIngredient3}</li>
                <li>{ranRecipe.strMeasure4} {ranRecipe.strIngredient4}</li>
                <li>{ranRecipe.strMeasure5} {ranRecipe.strIngredient5}</li>
                <li>{ranRecipe.strMeasure6} {ranRecipe.strIngredient6}</li>
                <li>{ranRecipe.strMeasure7} {ranRecipe.strIngredient7}</li>
                <li>{ranRecipe.strMeasure8} {ranRecipe.strIngredient8}</li>
                <li>{ranRecipe.strMeasure9} {ranRecipe.strIngredient9}</li>
                <li>{ranRecipe.strMeasure10} {ranRecipe.strIngredient10}</li>
                <li>{ranRecipe.strMeasure11} {ranRecipe.strIngredient11}</li>
                <li>{ranRecipe.strMeasure12} {ranRecipe.strIngredient12}</li>
                <li>{ranRecipe.strMeasure13} {ranRecipe.strIngredient13}</li>
                <li>{ranRecipe.strMeasure14} {ranRecipe.strIngredient14}</li>
                <li>{ranRecipe.strMeasure15} {ranRecipe.strIngredient15}</li>
                <li>{ranRecipe.strMeasure16} {ranRecipe.strIngredient16}</li>
                <li>{ranRecipe.strMeasure17} {ranRecipe.strIngredient17}</li>
                <li>{ranRecipe.strMeasure18} {ranRecipe.strIngredient18}</li>
                <li>{ranRecipe.strMeasure19} {ranRecipe.strIngredient19}</li>
                <li>{ranRecipe.strMeasure20} {ranRecipe.strIngredient20}</li>
            </ul>
            <p><b>Directions:</b> {ranRecipe.strInstructions}</p>
            <div>
                <button className="px-4 py-1 text-sm text-indigo-700 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Add to Favorites</button>
            </div>
        </div>
    );
}

export default RandomRecipe;