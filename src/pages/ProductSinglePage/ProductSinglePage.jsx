import React, { useEffect, useState } from 'react'
import "./ProductSinglePage.scss"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncProductSingle, getAllProductsStatus, getProductSingle, getSingleProductStatus } from '../../Store/ProductSlice'
import { STATUS } from '../../utils/status'
import Loader from '../../components/Loader/Loader'
import { formatPrice } from '../../utils/helpers'

const ProductSinglePage = () => {

  const {id} = useParams();
  const dispatch = useDispatch()
  const product = useSelector(getProductSingle)
  const productSingleStatus = useSelector(getSingleProductStatus)
  

  // getting single product
  useEffect (() => {
    dispatch(fetchAsyncProductSingle(id))
  }, [])

  let discountedPrice = (product?.price) - (product?.price * (product?.discountPercentage / 100 ))
  if(productSingleStatus === STATUS.LOADING){
    return <Loader/>
  }

  return (
    <main className='py-5 bg-whitesmoke'>
      <div className='product-single'>
        <div className='container'>
          <div className='product-single-content bg-white grid'>
            <div className='product-single-l'>

              <div className='product-img'>
                <div className='product-img-zoom'>
                  <img src={product?(product.images?product.images[0]: '') : ''} className='img-cover' />
                </div>

                <div className='product-img-thumbs flex align-center my-2'>
                    <div className='thumb-item'>
                      <img src={product?(product.images?product.images[1]: '') : ''} alt='' className='img-cover' />
                    </div>
                    <div className='thumb-item'>
                      <img src={product?(product.images?product.images[2]: '') : ''} alt='' className='img-cover' />
                    </div>
                    <div className='thumb-item'>
                      <img src={product?(product.images?product.images[3]: '') : ''} alt='' className='img-cover' />
                    </div>
                    <div className='thumb-item'>
                      <img src={product?(product.images?product.images[4]: '') : ''} alt='' className='img-cover' />
                    </div>
                </div>
              </div>

            </div>

            <div className='product-single-r'>
              <div className='product-details font-manrope'>
                <div className='title fs-20 fw-5'>{product?.title}</div>
                <div className=''>
                  <p className='para fs-15 fw-3'>{product?.description}</p>
                </div>
                <div className='info flex align-center flex-wrap fs-14'>
                  <div className='rating'>
                    <span className='text-orange fw-5'>Rating : </span>
                    <span> {product?.rating} </span>
                  </div>
                  <div className='vert-line'></div>
                  <div className='brand'>
                    <span className='text-orange fw-5'>Brand : </span>
                    <span className=''> {product?.brand} </span>
                  </div>
                  <div className='vert-line'></div>
                  <div className='brand'>
                    <span className='text-orange fw-5'>category : </span>
                    <span className='mx-1 text-capitalize'> {product?.category?product.category.replace("-" , " ") : ""} </span>
                  </div>
                </div>

                <div className='price'>
                  <div className='flex align-center'>
                    <div className='old-price text-gray'>
                      {formatPrice(product?.price)}
                    </div>
                    <span className='fs-14 mx-2 text-dark'>
                      Inclusive of all taxes
                    </span>
                  </div>
                  <div className='flex align-center my-2'>
                    <div className='new-price fw-5 font-poppins fs-24 text-orange'>
                      {formatPrice(discountedPrice)}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductSinglePage