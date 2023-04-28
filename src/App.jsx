import React from 'react'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import MyRecipes from './components/MyRecipes';
import Search from './components/Search';
import Recipe from './components/Recipe';
import RecipeForm from './components/RecipeForm';



function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/myrecipes" element={<MyRecipes />} />
        <Route path="/myrecipes/:recipeId"  element={<Recipe />} />
        <Route path="/search" element={<Search />} />
        <Route path="/myrecipes/recipeform" element={<RecipeForm />} />
      </Routes>
    </div>
  )
}

export default App
