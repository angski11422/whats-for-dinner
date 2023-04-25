import React, { useEffect } from 'react';
import Recipe from './Recipe'
import RecipeForm from './RecipeForm'

function MyRecipes() {

    useEffect(() => {
        fetch('http://localhost:3000/meals')
        .then((resp) => resp.json())
        .then((data) => console.log(data))
    }, [])
    
    return (
        <div>
            <h1>My Recipes List</h1>  
            <div>
                <Recipe />  
                <div>
                    <RecipeForm />
                </div>
            </div>
        </div>
    );
}

export default MyRecipes;