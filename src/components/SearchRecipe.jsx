import React from 'react';

function SearchRecipe({meal}) {

    return (
        <div>
            <h1>{meal.strMeal}</h1>
            <img src={meal.strMealThumb} />
            {/* <ul>
                <li>{seaRecipe.strMeasure1} {seaRecipe.strIngredient1}</li>
                <li>{seaRecipe.strMeasure2} {seaRecipe.strIngredient2}</li>
                <li>{seaRecipe.strMeasure3} {seaRecipe.strIngredient3}</li>
                <li>{seaRecipe.strMeasure4} {seaRecipe.strIngredient4}</li>
                <li>{seaRecipe.strMeasure5} {seaRecipe.strIngredient5}</li>
                <li>{seaRecipe.strMeasure6} {seaRecipe.strIngredient6}</li>
                <li>{seaRecipe.strMeasure7} {seaRecipe.strIngredient7}</li>
                <li>{seaRecipe.strMeasure8} {seaRecipe.strIngredient8}</li>
                <li>{seaRecipe.strMeasure9} {seaRecipe.strIngredient9}</li>
                <li>{seaRecipe.strMeasure10} {seaRecipe.strIngredient10}</li>
                <li>{seaRecipe.strMeasure11} {seaRecipe.strIngredient11}</li>
                <li>{seaRecipe.strMeasure12} {seaRecipe.strIngredient12}</li>
                <li>{seaRecipe.strMeasure13} {seaRecipe.strIngredient13}</li>
                <li>{seaRecipe.strMeasure14} {seaRecipe.strIngredient14}</li>
                <li>{seaRecipe.strMeasure15} {seaRecipe.strIngredient15}</li>
                <li>{seaRecipe.strMeasure16} {seaRecipe.strIngredient16}</li>
                <li>{seaRecipe.strMeasure17} {seaRecipe.strIngredient17}</li>
                <li>{seaRecipe.strMeasure18} {seaRecipe.strIngredient18}</li>
                <li>{seaRecipe.strMeasure19} {seaRecipe.strIngredient19}</li>
                <li>{seaRecipe.strMeasure20} {seaRecipe.strIngredient20}</li>
            </ul> */}
            <p>{meal.strInstructions}</p>

            <div>
                <button>Add to Favorites</button>
            </div>
        </div>
    );
}


export default SearchRecipe;