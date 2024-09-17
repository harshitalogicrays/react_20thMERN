import React from 'react'
import { Row } from 'react-bootstrap'
import ProductCard from './ProductCard'
const ProductItem = ({products}) => {
  return (
   <>
   {products.length==0 && <h1>No Product Found</h1>}

<Row>
    {products.map((product,i)=><ProductCard key={product.id} product={product}/>)}
</Row>
   </>
  )
}

export default ProductItem
