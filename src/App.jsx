import React from 'react'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import MyRecipes from './components/MyRecipes';
import Search from './components/Search';



function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/myrecipes" element={<MyRecipes />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  )
}

export default App
