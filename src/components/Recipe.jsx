import React from 'react';


function Recipe({recipe}) {
    

    return (
        <main className="bg-rose-300">
            <img src={recipe.strMealThumb} alt="Error Loading..."/>
            <p>{recipe.strArea}</p>  
            <ul>
                <li>{recipe.strMeasure1} {recipe.strIngredient1}</li>
            </ul>
            <p>{recipe.strInstructions}</p>
        </main>
    );
}


export default Recipe;