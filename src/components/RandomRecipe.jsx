import React from 'react';

function RandomRecipe({randomRecipe}) {

    return (
        <div>
            <h1>{randomRecipe.meals[0].strMeal}</h1>
            <p>{randomRecipe.meals[0].strInstructions}</p>
        </div>
    );
}

export default RandomRecipe;