import React, { useEffect, useState } from 'react';
import RandomRecipe from './RandomRecipe';

function Home() {
    const [randomRecipe, setRandomRecipe] = useState(null)

    useEffect(() => {
        fetch("http://www.themealdb.com/api/json/v1/1/random.php/https://cors-anywhere.herokuapp.com/corsdemo")
        .then((resp) => resp.json())
        .then(data => setRandomRecipe(data))
    }, [])

    if (!randomRecipe){
        return <h3>Loading...</h3>
    }

    return (
        <div className="bg-neutral-600 container m-auto grid grid-cols-1 gap-4">
            <RandomRecipe randomRecipe={randomRecipe}/>
        </div>
    );
}

export default Home;