import React from 'react';
import Recipe from './Recipe'

function RecipeList({recipe}) {

    return (
        <div>
            {recipe.dishName}
        </div>
    );
}


export default RecipeList;