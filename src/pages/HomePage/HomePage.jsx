import React, { useEffect } from 'react'
import "./HomePage.scss"
import HeaderSlider from '../../components/Slider/HeaderSlider'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategories } from '../../Store/CategorySlice'
import ProductList from '../../components/ProductList/ProductList'
import { fetchAsyncProducts ,getAllProducts, getAllProductsStatus  } from '../../Store/ProductSlice'
import Loader  from '../../components/Loader/Loader'
import { STATUS } from '../../utils/status'

const HomePage = () => {

  const dispatch = useDispatch()
  const categories = useSelector(getAllCategories)

  useEffect(() => {
    dispatch(fetchAsyncProducts(50))
  }, [])

  const products = useSelector(getAllProducts)
   const productStatus = useSelector(getAllProductsStatus)

  // randomize the products in the list
  const tempProducts = []
  if(products.length > 0) {
    for(let i in products){
      let randomIndex = Math.floor(Math.random() * products.length );
      while (tempProducts.includes(products[randomIndex])) {
         randomIndex = Math.floor(Math.random() * products.length );
      };
      tempProducts[i] = products[randomIndex];
    }; 
    
  };

  let catProductOne = products.filter( product => product.category === categories[0])
  let catProductTwo = products.filter( product => product.category === categories[1])
  let catProductThree = products.filter( product => product.category === categories[2])


  return (
    <main>
      
      <div className='slider-wrapper'>
        <HeaderSlider />
      </div>

      <div className='main-content bg-whitesmoke'>
        <div className='container'>
          <div className='categories py-5'>

            <div className='categories-item'>
              <div className='title-md'>
                <h3> see our products </h3>
              </div>
              { productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={tempProducts} /> }
            </div>

            <div className='categories-item'>
              <div className='title-md'>
                <h3> {categories[0]} </h3>
              </div>
              { productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={catProductOne} /> }
              <div className='title-md'>
                <h3> {categories[1]} </h3>
              </div>
              { productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={catProductTwo} /> }
              <div className='title-md'>
                <h3> {categories[2]} </h3>
              </div>
              { productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={catProductThree} /> }
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}

export default HomePage