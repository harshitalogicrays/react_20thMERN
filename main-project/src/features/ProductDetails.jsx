import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ReactImageMagnify from "@blacklab/react-image-magnify";
import { selectItems } from "../redux/itemSlice";
import { addtocart, selectCartItems, updatecartitem } from "../redux/cartSlice";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const dispatch = useDispatch()
  const [selectedImage, setSelectedImage] = useState("");
  const { id } = useParams();
  const allproducts = useSelector(selectItems)
  const product = allproducts.find(product=>product.id==id)
  useEffect(()=>{setSelectedImage(product.images[0]) },[product])

  //
  const cartItems = useSelector(selectCartItems)
  const cartItem  = cartItems.find(item => item.id==id)
  const [selectedOptions,setSelectedOptions] = useState({
    selectedSize:cartItem?.size || null,
    selectedColor:cartItem?.color || null
  })
  const handleSize = (size)=>{
      setSelectedOptions(prev =>({...prev,selectedSize:size}))
      if(cartItem)
      dispatch(updatecartitem({id:product.id,size:size,color:cartItem.color}))
  }
  const handleColor = (color)=>{
      setSelectedOptions(prev =>({...prev,selectedColor:color}))
      if(cartItem)
      dispatch(updatecartitem({id:product.id,size:cartItem.size,color:color}))
  }

  const handlecart =()=>{
    const {selectedSize,selectedColor} = selectedOptions
    if(!selectedSize || !selectedColor){
        toast.error("please select size and color");return
    }
    else {
        dispatch(addtocart({id:product.id,name:product.name,brand:product.brand,category:product.category,price:product.price,stock:product.stock,size:selectedSize,color:selectedColor,images:product.images}))
    }
  }


  return (
   <>
<div className="container mt-5">
      <div className="row">
        <div className="col-md-6 d-flex">
          <div className="me-3">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                className={`img-thumbnail mb-2 ${
                  selectedImage === image ? "border-primary border-2" : ""
                }`}
                style={{ cursor: "pointer", width: "70px", height: "70px" }}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
          <div className="">
            {/* <img
              src={selectedImage}
              alt={product.name}
              className="img-fluid rounded shadow-lg" style={{height:'300px',width:'500px'}}
            /> */}
            <ReactImageMagnify
                imageProps={{
                    alt: product.name, height:300,  width:400, src: selectedImage    }}
                magnifiedImageProps={{
                    src: selectedImage,width: 600, height: 600  }}
                portalProps={{
                  horizontalOffset:10, verticalOffset:10  }}
  
/>
          </div>
        </div>

        <div className="col-md-6">
          <h1 className="mb-4">{product.name}</h1>
          <p className="text-muted">{product.description}</p>
          <p>
            <strong>Price:</strong> <span className="text-success">${product.price}</span>
          </p>
          <p>
            <strong>Brand:</strong> {product.brand}
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p class="card-text">Sizes:
                                    {product.sizes.map((size, index) => <button  key={index}
                                    className={`btn ms-2 ${size==selectedOptions?.selectedSize ? "btn-primary":"btn-outline-primary"}`}
                                    onClick={()=>handleSize(size)}
                                    >{size}</button>
                                    )}
                                </p>
                                <p class="card-text">Colors:
                                    {product.colors.map((color, index) => 
                                    <button  key={index}
                                    className={`btn ms-2 ${color==selectedOptions?.selectedColor ? "border-2 border-dark":""}`}
                                    style={{background:color}}
                                    onClick={()=>handleColor(color)}
                                    >{color}</button>
                                    )}
                                </p>
          <div className="mt-3">
            {cartItem ? 
              <span className="text-success me-3">Already in cart</span>
            :    <button className="btn btn-primary me-3" onClick={handlecart}>Add to Cart</button>}
        
            <Link className="btn btn-secondary" to='/'>Go Back</Link>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default ProductDetails;
