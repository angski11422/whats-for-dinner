import React, { useEffect, useState } from 'react';
import RandomRecipe from './RandomRecipe';

function Home() {
    const [randomRecipe, setRandomRecipe] = useState([])

    useEffect(() => {
        fetch("http://www.themealdb.com/api/json/v1/1/random.php")
        .then((resp) => resp.json())
        .then(data => setRandomRecipe(data))
    }, [])

    return (
        <div>
            <RandomRecipe randomRecipe={randomRecipe}/>
        </div>
    );
}

export default Home;