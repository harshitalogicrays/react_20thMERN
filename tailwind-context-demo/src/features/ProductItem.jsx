import React from 'react'
import { ContextCart } from './CartContext'

const ProductItem = ({products}) => {
  const data = ContextCart()
  console.log(data)

    const handleClick=(product)=>{
        data.addtocart(product)
    }
  return (
    <div>
    <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-55 lg:h-80">
              <img
                alt={product.title}
                src={product.images[0]}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700"> {product.title} </h3>
                <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                <button className="mt-1 text-sm text-white bg-gray-600 p-2 rounded-xl"
                onClick={()=>handleClick(product)}>
                    Add to cart</button>
              </div>
              <p className="text-sm font-medium text-gray-900">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
   </div>
  )
}

export default ProductItem
