import React  from 'react';
import { Link } from 'react-router-dom'


function NavBar() {
    return (
        <div>
            <h1>What's for Dinner?</h1>
            <Link to='./'>Home </Link>
            <Link to='./myrecipes'>My Recipes </Link>
            <Link to='./search'>Search </Link>
        </div>
    );
}

export default NavBar;