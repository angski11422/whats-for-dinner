import React, {useState} from 'react';

function RecipeForm({onAddRecipe}) {
    const [formData, setFormData] = useState({
        strMeal: "",
        strMealThumb: "",
        strInstructions: "",
        strArea: "",
        strCategory: "",
        strIngredient1: ""
    })

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value,
        })
    }

    function handleSubmit() {
        const newRecipe = {
            strMeal: formData.strMeal,
            strMealThumb: formData.strMealThumb,
            strInstructions: formData.strInstructions,
            strArea: formData.strArea,
            strCategory: formData.strCategory,
            strIngredient1: formData.strIngredient1
        }
        fetch("http://localhost:3000/recipes", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(newRecipe)
        })
        .then((res) => res.json())
        .then((data) => onAddRecipe(data))
      }
   
    return (
        <div className="bg-rose-300">
            <h3 className="font-bold text-2xl">Add a Recipe</h3>
            <form onSubmit={handleSubmit} className='rounded px-8 pt-6 pb-8 mb-4'>
                <label className="px-4 py-10">
                    Dish:
                    <br></br>
                    <input 
                        className="px-10"
                        type="text"
                        name="strMeal"
                        value={formData.strMeal}
                        onChange={handleChange}
                    />
                </label>
                <br></br>
                <label className="px-4 py-10">
                    Image:
                    <input 
                        className="px-10 "
                        type="text"
                        name="strMealThumb"
                        value={formData.strMealThumb}
                        onChange={handleChange} 
                    />
                    {/* <input 
                        type="file"
                        name="strMealThumb"
                        value={formData.strMealThumb}
                        onChange={handleChange} 
                    /> */}
                </label>
                <br></br>
                <label className="px-4 py-10">
                    Directions:
                    <textarea
                        className="px-10 py-10"
                        rows={10}
                        name="strInstructions"
                        value={formData.strInstructions}
                        onChange={handleChange}
                    />
                </label>
                <br></br>
                <label className="px-4 py-10">
                    Cuisine:
                    <br></br>
                    <select 
                        className="px-10"
                        onChange={handleChange} 
                        name="strArea"
                        value={formData.strArea}
                    >
                        <option value="">Choose One</option>
                        <option value="italian">Italian</option>
                        <option value="indian">Indian</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="other">Other</option>
                    </select>
                </label>
                <br></br>
                <label className="px-4 py-10">
                    Type:
                    <br></br>
                    <select 
                        className="px-10"
                        onChange={handleChange} 
                        name="strCategory"
                        value={formData.strCategory}
                    >
                        <option value="">Choose One</option>
                        <option value="breakfast">Breakfast</option>
                        <option value="pasta">Dinner</option>
                        <option value="appetizer">Appetizer</option>
                        <option value="other">Other</option>
                    </select>
                </label>
                <br></br>
                <label className="px-4 py-10">
                    Ingredients:
                    <textarea
                        className="px-10 py-10"
                        rows={10}
                        name="strIngredient1"
                        value={formData.strIngredient1}
                        onChange={handleChange}
                        
                    />
                </label>
                <br></br>
                <button type="submit" className="px-4 py-1 text-sm text-indigo-700 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" >Add</button>
            </form>
        </div>
    );
}


export default RecipeForm;