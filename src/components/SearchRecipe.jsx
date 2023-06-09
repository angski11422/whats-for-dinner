import React from 'react';

function SearchRecipe({meal}) {

    return (
        <div className=" bg-rose-300 container m-auto grid grid-cols-3 gap-4 border-slate-800 border-4 place-content-center justify-center align-top p-4">
            <h1 className="font-bold text-xl">{meal.strMeal}</h1>
            <img src={meal.strMealThumb} />
            <div>
                <button className="px-4 py-1 text-sm text-indigo-700 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Add to Favorites</button>
            </div>
            <ul className="marker:text-white text-black list-inside list-disc">
                <li>{meal.strMeasure1} {meal.strIngredient1}</li>
                <li>{meal.strMeasure2} {meal.strIngredient2}</li>
                <li>{meal.strMeasure3} {meal.strIngredient3}</li>
                <li>{meal.strMeasure4} {meal.strIngredient4}</li>
                <li>{meal.strMeasure5} {meal.strIngredient5}</li>
                <li>{meal.strMeasure6} {meal.strIngredient6}</li>
                <li>{meal.strMeasure7} {meal.strIngredient7}</li>
                <li>{meal.strMeasure8} {meal.strIngredient8}</li>
                <li>{meal.strMeasure9} {meal.strIngredient9}</li>
            </ul>
            <p>{meal.strInstructions}</p>

            
        </div>
    );
}


export default SearchRecipe;