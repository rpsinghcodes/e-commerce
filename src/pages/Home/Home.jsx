import React from 'react'

import Cards from '../../components/Cards/Cards';
import Carousel from '../../components/Carousel/Carousel';
import Products from '../Products/Products';
import Categories from '../../components/Categories/Categories';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div>
    {/* <Cards/> */}
    <Carousel/>

    <Products/>
              
    <Categories/>
    <Footer/>
    </div>
  )
}

export default Home
