import React from 'react'
import './home.css';
import Cards from '../../components/Cards/Cards';
import Carousel from '../../components/Carousel/Carousel';
import Products from '../Products/Products';
import Categories from '../../components/Categories/Categories';
import Footer from '../../components/Footer/Footer';

const Home = ( {handleAddProduct, handleWishList, data, setData}) => {
  return (
    <div>
    <Cards/>
    <Carousel/>
    <Products  handleAddProduct={handleAddProduct}
              handleWishList={handleWishList} data={data} setData={setData}/>
              
    <Categories/>
    <Footer/>
    </div>
  )
}

export default Home
