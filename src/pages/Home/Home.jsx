import React from 'react'

import Carousel from '../../components/Carousel/Carousel';
import Products from '../Products/Products';
import Categories from '../../components/Categories/Categories';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div>
    <Carousel/>

    <Products/>
              
    <Categories/>
    <Footer/>
    </div>
  )
}

export default Home
