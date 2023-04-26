import React, { useEffect, useState } from 'react';
import RecipeForm from './RecipeForm'
import RecipeList from './RecipeList'

function MyRecipes() {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/recipes')
        .then((resp) => resp.json())
        .then((data) => setRecipes(data))
    }, [])

    const recipeList = recipes.map((recipe) =>
        <RecipeList key={recipe.idMeal} recipe={recipe} /> 
    )

    return (
        <div>
            <h1>My Recipes List</h1>  
            <div>
                {recipeList}
                <div>
                    <RecipeForm />
                </div>
            </div>
        </div>
    );
}

export default MyRecipes;