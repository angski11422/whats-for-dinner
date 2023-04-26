import React from 'react'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import MyRecipes from './components/MyRecipes';
import Search from './components/Search';
import Recipe from './components/Recipe';



function App() {
  return (
    <div className="bg-gray-400">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/myrecipes" element={<MyRecipes />} />
        <Route path="/myrecipes/:recipeId"  element={<Recipe />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  )
}

export default App
