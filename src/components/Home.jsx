import React, { useEffect, useState } from 'react';
import RandomRecipe from './RandomRecipe';

function Home() {
    const [randomRecipe, setRandomRecipe] = useState(null)

    useEffect(() => {
        fetch("http://www.themealdb.com/api/json/v1/1/random.php")
        .then((resp) => resp.json())
        .then(data => setRandomRecipe(data))
    }, [])

    if (!randomRecipe){
        return <h3>Loading...</h3>
    }

    return (
        <div className="bg-sky-500">
            <RandomRecipe randomRecipe={randomRecipe}/>
        </div>
    );
}

export default Home;