import React, { useEffect, useState } from 'react';
import RecipeList from './RecipeList'
import { Link } from 'react-router-dom'

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

    function addNewRecipe(newRecipe) {
        const updatedRecipes = [recipes, newRecipe]
        setRecipes(updatedRecipes)
    }

    return (
        <div className="bg-amber-300">
            <aside>
                <h1>My Recipes List</h1>  
                {recipeList}
                <Link className="px-4 py-1 text-sm text-indigo-700 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" to={{pathname: './recipeform', data: {onAddRecipe: {addNewRecipe}}}}>Add New Recipe</Link> 
            </aside>
        </div>
    );
}

export default MyRecipes;