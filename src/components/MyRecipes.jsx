import React, { useEffect, useState } from 'react';
import RecipeList from './RecipeList'
import RecipeForm from './RecipeForm';

function MyRecipes() {
    const [recipes, setRecipes] = useState([])
    const [showForm, setShowForm] = useState(false)

    useEffect(() => {
        fetch('http://localhost:3000/recipes')
        .then((resp) => resp.json())
        .then((data) => setRecipes(data))
    }, [])

    const recipeList = recipes.map((recipe) =>
        <RecipeList key={recipe.id} recipe={recipe} /> 
    )

    function addNewRecipe(newRecipe) {
        const updatedRecipes = [recipes, newRecipe]
        setRecipes(updatedRecipes)
    }

    function showRecipeForm() {
        setShowForm(!showForm)
    }

    return (
        <div className="bg-neutral-600 container m-auto grid grid-cols-3 gap-4">
            <aside>
                <h1 className="text-xl font-bold">My Recipes List</h1>  
                {recipeList}
                <button className="px-4 py-1 text-sm text-indigo-700 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick={showRecipeForm}>Add New Recipe</button> 
            </aside>
            <main>
                {showForm ? (
                    <div>
                        <RecipeForm onAddRecipe={addNewRecipe}/>
                    </div>
                ) : null}
                
            </main>
        </div>
    );
}

export default MyRecipes;