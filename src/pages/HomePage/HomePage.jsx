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

  return (
    <main>
      
      <div className='slider-wrapper'>
        <HeaderSlider />
      </div>

      <div className='main-content bg-whitesmoke'>
        <div className='container'>
          <div className='categories py-5'>
            <div className='title-md'>
              <h3> see our products </h3>
            </div>

            { productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={products} /> }

          </div>
        </div>
      </div>

    </main>
  )
}

export default HomePage