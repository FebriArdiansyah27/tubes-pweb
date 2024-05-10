import React from 'react'
import {Carsoul, NewCollections, NewsLetter, Offers, Popular} from "../components"
import Protected from '../protected/Protected'
const Home = () => {
  return (
    <>
    <Carsoul/>
    <Popular/>
    <Offers/>
    <NewCollections/>
    <NewsLetter/>
    <Protected/>
    </>
  )
}

export default Home