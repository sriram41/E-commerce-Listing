import React from 'react';
import './ProductCard.css'



// id: 3, name: 'Monsterra', subtitle: 'Indoor Plant, Low maintenance', price: '₹ 299',

//  nonscale_price : "₹ 359", ratingno: '4.9', productimage: '/assets/product3.png', starimage: '/assets/star.png' ,

//   whishimage: "/assets/wishicon.png"


const ProductCard = ({ product, onView, onAddToCart }) => (
  <div className="product-card">
    <div className='border-lines'>
    <img src={product.productimage} alt={product.name} />
    <img className='whishimagesbar' src={product.whishimage} alt={product.name} /></div>
    <button className='viewproduct-1' onClick={() => onView(product.name)}>View Product</button>
    
    <h3>{product.name}</h3>
    <p className='subtitles'>{product.subtitle}</p>
    <p><img src={product.starimage} alt={product.name} /> <span>{product.ratingno}</span></p>
    <p><span className='non-scale-1101'>{product.nonscale_price}</span>{product.price}</p>
    <div className='lastbuttons'> 
    <button className='addtocart' onClick={() => onAddToCart(product)}><span className='minus11'>-</span> Add to Cart <span className='plus11'>+</span></button>
  <button className='rent'>Buy on Rent</button>

    </div>
  </div>

);

export default ProductCard;
