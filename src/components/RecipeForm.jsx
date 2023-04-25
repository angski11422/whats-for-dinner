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
                <br></br>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}


export default RecipeForm;