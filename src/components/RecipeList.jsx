import React, { useState } from 'react';
import Recipe from './Recipe'

function RecipeList({recipe}) {
    const [isClicked, setIsClicked] = useState(false) 
    
    function handleShowDetails() {
        setIsClicked(!isClicked)
    }

    return (
        <div onClick={handleShowDetails}>
            <h6 className="font-semibold">{recipe.strMeal}</h6>
            {isClicked ? (
            <div>
                <Recipe recipe={recipe}/>
            </div>
            ) : null}
        </div>
    );
}


export default RecipeList;