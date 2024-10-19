import React, { useEffect, useState } from 'react'
import { ContextCart } from './CartContext'
import Loader from './Loader'
import ReactPaginate from 'react-paginate'

const ProductItem = ({products}) => {
  const data = ContextCart()
  console.log(data)

    const handleClick=(product)=>{
        data.addtocart(product)
    }

    let itemsPerPage = 4
    const [itemOffset, setItemOffset] = useState(0); //20 => 0 to 19  //0 to 3 
    const [currentItems,setCurrentItems]=useState([])
    const [pageCount,setPageCount]=useState(0)
    const handlePageClick = (event) => {//0,(page 2 - index 1)
      const newOffset = (event.selected * itemsPerPage) % products.length;//1*4%20 => 4%20 => 4index
      setItemOffset(newOffset);
    };
    useEffect(()=>{
      const endOffset = itemOffset + itemsPerPage; //0+4 => 4 ,4+4=8
      setCurrentItems(products.slice(itemOffset, endOffset))//slice(0,4)=> 4 exclude //4 to 7
      setPageCount(Math.ceil(products.length / itemsPerPage)) //20%4 = 4
    },[itemOffset,products])
  return (
    <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight">Products</h2>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 mb-7">
        {products.length==0 && <Loader/>}        
        {currentItems.map((product) => (
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
                <h3 className="text-sm"> {product.title} </h3>
                <p className="mt-1 text-sm">{product.category}</p>
                <button className="mt-1 text-sm bg-gray-600 p-2 rounded-xl"
                onClick={()=>handleClick(product)}>
                    Add to cart</button>
              </div>
              <p className="text-sm font-medium">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
      <ReactPaginate breakLabel="..." nextLabel="next >"
        onPageChange={handlePageClick}  pageRangeDisplayed={5}
        pageCount={pageCount}  previousLabel="< previous" renderOnZeroPageCount={null}
        containerClassName="isolate inline-flex  -space-x-px rounded-md shadow-sm"

        pageClassName="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300  focus:z-20 focus:outline-offset-0"

        activeClassName="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"

        previousClassName="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"

        nextClassName="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        />
    </div></div>
  )
}

export default ProductItem
