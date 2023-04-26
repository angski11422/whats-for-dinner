import React from 'react';

function RecipeForm() {
    return (
        <div>
            <h3>Add a Recipe</h3>
            <form>
                <label>
                    Dish:
                    <input type="text"/>
                </label>
                <br></br>
                <label>
                    Image:
                    <input type="file" />
                </label>
                <br></br>
                <label>
                    Directions:
                    <textarea />
                </label>
                <br></br>
                <label>
                    Cuisine:
                    <select>
                        <option value="other">Other</option>
                    </select>
                </label>
                <p>Ingredients: input here</p>
                <button type="submit" className="px-4 py-1 text-sm text-indigo-700 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" >Add</button>
            </form>
        </div>
    );
}


export default RecipeForm;