import React from 'react';
import { Link } from 'react-router-dom';
import Recipe from './Recipe'

function RecipeList({recipe}) {

    return (
        <div>
            <Link to={`/myrecipes/${recipe.idMeal}`}>
                {recipe.strMeal}
            </Link> 
        </div>
    );
}


export default RecipeList;