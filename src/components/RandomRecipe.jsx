import React from 'react';

function RandomRecipe({randomRecipe}) {

    const ranRecipe = randomRecipe.meals[0]

    function handleViewVideo() {
        window.open(ranRecipe.strYoutube, '_blank');
    }

    return (
        <div>
            <img 
                src={ranRecipe.strMealThumb} 
                alt={ranRecipe.strMeal}
                onClick={handleViewVideo}
            />
            <h1>{ranRecipe.strMeal}</h1>
            
            <ul>
                {/*for loop instead of each list*/}
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
            <p>{ranRecipe.strInstructions}</p>
            <div>
                <button>Add to Favorites</button>
            </div>
        </div>
    );
}

export default RandomRecipe;