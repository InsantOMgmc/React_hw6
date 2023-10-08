import React from 'react'

const Info = (props) => {
    return (
        <div className='App'>
            <h1 className='title'>City name - {props.name}</h1>
            <h3>Population: {props.pop}</h3>
            <h3>Country: {props.country}</h3>
            <h3>Date: {props.date}</h3>
        </div>

    )
}

export default function CityInfo() {
  return (
    <Info name='Astana' pop={1000000} country='Kazakhstan' date='16 декабря 1991 г.'/>
  )
}
