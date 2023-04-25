import React from 'react';
import Recipe from './Recipe'

function MyRecipes() {

    // http://localhost:3000 - post to db.json
    
    return (
        <div>
            <h1>My Recipes List</h1>  
            <Recipe />  
        </div>
    );
}

export default MyRecipes;