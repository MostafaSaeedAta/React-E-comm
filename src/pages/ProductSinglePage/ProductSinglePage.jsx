import React, { useEffect, useState } from 'react'
import "./ProductSinglePage.scss"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncProductSingle, getAllProductsStatus, getProductSingle, getSingleProductStatus } from '../../Store/ProductSlice'
import { STATUS } from '../../utils/status'
import Loader from '../../components/Loader/Loader'
import { formatPrice } from '../../utils/helpers'
import { addToCart } from '../../Store/CartSlice'

const ProductSinglePage = () => {

  const {id} = useParams();
  const dispatch = useDispatch()
  const product = useSelector(getProductSingle)
  const productSingleStatus = useSelector(getSingleProductStatus)
  const [quantity, setQuantity] = useState(1)

  

  // getting single product
  useEffect (() => {
    dispatch(fetchAsyncProductSingle(id))
  }, [])

  let discountedPrice = (product?.price) - (product?.price * (product?.discountPercentage / 100 ))
  if(productSingleStatus === STATUS.LOADING){
    return <Loader/>
  }

  const increaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty + 1 
      if(tempQty > product?.stock){
        tempQty = product?.stock
      } 
      return tempQty
    })
  }

  const decreaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty - 1 
      if( tempQty < 1){
        tempQty = 1
      } 
      return tempQty
    })
  };

  const addToCartHandler = (product) => {
    let discountedPrice = (product?.price) - (product?.price) * (product?.discountPercentage / 100);
    let totalPrice = quantity * discountedPrice;

    dispatch(addToCart({ ... product , quantity : quantity, totalPrice,discountedPrice}))
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
                    <div className='discount bg-orange fs-13 text-white fw-6 font-poppins'>
                      {product?.discountPercentage} % off
                    </div>
                  </div>
                </div>

                <div className='qty flex align-center my-4'>
                  <div className='qty-text'> Quantity : </div>
                  <div className='qty-change flex align-center justify-center'> 
                    <button type='button' onClick={ ()=> decreaseQty()} className='qty-decrease flex align-center justify-center'>
                      <i className='fas fa-minus'></i>
                    </button>

                    <div className='qty-value flex align-center justify-center'>
                      { quantity }
                    </div>

                    <button type='button' onClick={ ()=> increaseQty()} className='qty-increase flex align-center justify-center'>
                      <i className='fas fa-plus'></i>
                    </button>
                  </div>

                  {
                    (product?.stock === 0) ?  <div className='qty-error text-uppercase bg-danger '>out of stock</div> : <div className='mx-2 '> remaining <span className='text-danger'> { product?.stock } </span>  pieces</div> 
                  }

                </div>

                <div className='btns'>
                  <button type='button' className='add-to-cart-btn btn'>
                    <i className='fas fa-shopping-cart'></i>
                    <span className='btn-text mx-2' onClick={() => { addToCartHandler(product) }}> add to cart </span>
                  </button>
                  <button type='button' className='buy-now-btn btn mx-3'>
                    <span className='btn-text'> buy now </span>
                  </button>
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