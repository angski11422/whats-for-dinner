import React from 'react';
import { useParams } from 'react-router-dom';

function Recipe() {
    const {recipeId} = useParams();


    return (
        <div>
            <h3>Recipe Details</h3>
            <h4>{recipeId.strMeal}</h4>
        </div>
    );
}


export default Recipe;