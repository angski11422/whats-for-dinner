import React  from 'react';
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav className="flex px-4 border-b md:shadow-lg items-center relative">
            <div className="text-lg font-bold md:py-0 py-4">
                What's for Dinner Tonight?
            </div>
            <ul className="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0">
                <Link className="flex md:inline-flex p-4 items-center hover:bg-gray-50" to='./'>Home </Link>
                <Link className="flex md:inline-flex p-4 items-center hover:bg-gray-50" to='./myrecipes'>My Recipes </Link>
                <Link className="flex md:inline-flex p-4 items-center hover:bg-gray-50" to='./search'>Search </Link>
            </ul>
        </nav>
    );
}

export default NavBar;