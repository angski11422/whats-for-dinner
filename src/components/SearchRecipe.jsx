import React from 'react';

function SearchRecipe({meal}) {

    return (
        <div className="bg-orange-500">
            <h1>{meal.strMeal}</h1>
            <img src={meal.strMealThumb} />
            <ul>
                <li>{meal.strMeasure1} {meal.strIngredient1}</li>
                <li>{meal.strMeasure2} {meal.strIngredient2}</li>
                <li>{meal.strMeasure3} {meal.strIngredient3}</li>
                <li>{meal.strMeasure4} {meal.strIngredient4}</li>
                <li>{meal.strMeasure5} {meal.strIngredient5}</li>
                <li>{meal.strMeasure6} {meal.strIngredient6}</li>
                <li>{meal.strMeasure7} {meal.strIngredient7}</li>
                <li>{meal.strMeasure8} {meal.strIngredient8}</li>
                <li>{meal.strMeasure9} {meal.strIngredient9}</li>
                <li>{meal.strMeasure10} {meal.strIngredient10}</li>
                <li>{meal.strMeasure11} {meal.strIngredient11}</li>
                <li>{meal.strMeasure12} {meal.strIngredient12}</li>
                <li>{meal.strMeasure13} {meal.strIngredient13}</li>
                <li>{meal.strMeasure14} {meal.strIngredient14}</li>
                <li>{meal.strMeasure15} {meal.strIngredient15}</li>
                <li>{meal.strMeasure16} {meal.strIngredient16}</li>
                <li>{meal.strMeasure17} {meal.strIngredient17}</li>
                <li>{meal.strMeasure18} {meal.strIngredient18}</li>
                <li>{meal.strMeasure19} {meal.strIngredient19}</li>
                <li>{meal.strMeasure20} {meal.strIngredient20}</li>
            </ul>
            <p>{meal.strInstructions}</p>

            <div>
                <button className="px-4 py-1 text-sm text-indigo-700 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Add to Favorites</button>
            </div>
        </div>
    );
}


export default SearchRecipe;