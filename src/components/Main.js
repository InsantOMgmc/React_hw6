import React from 'react'
import { Link } from "react-router-dom"
export default function () {
    return (
        <div className='App'>
            <Link to='/city'>
                <button className='btn'>CityInfo</button>
            </Link>

            <Link to='/landmarks'>
                <button className='btn'>Landmarks</button>
            </Link>

            <Link to='/photos'>
                <button className='btn'>Photos</button>
            </Link>
        </div>
    )
}
