import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ReactImageMagnify from "@blacklab/react-image-magnify";
import { selectItems } from "../redux/itemSlice";
import { addtocart } from "../redux/cartSlice";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const dispatch = useDispatch()
    const [selectedImage, setSelectedImage] = useState("");
  const { id } = useParams();
  const allproducts = useSelector(selectItems)
  const product = allproducts.find(product=>product.id==id)
  useEffect(()=>{
    setSelectedImage(product.images[0])
  },[product])

  const [selectedOptions,setSelectedOptions] = useState({})
  const handleSize = (size,id)=>{
      setSelectedOptions(prev =>({...prev,[id]:{...prev[id],selectedSize:size}}))
  }
  const handleColor = (color,id)=>{
      setSelectedOptions(prev =>({...prev,[id]:{...prev[id],selectedColor:color}}))
  }

  const handlecart =()=>{
    const s = selectedOptions[item.id]?.selectedSize
    const c  =selectedOptions[item.id]?.selectedColor
    if(!s || !c){
        toast.error("please select size and color");return
    }
    else {
        // console.log({item,size:s,color:c})
        dispatch(addtocart({product,size:s,color:c}))
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
                                    className={`btn ms-2 ${size==selectedOptions[product.id]?.selectedSize ? "btn-primary":"btn-outline-primary"}`}
                                    onClick={()=>handleSize(size,product.id)}
                                    >{size}</button>
                                    )}
                                </p>
                                <p class="card-text">Colors:
                                    {product.colors.map((color, index) => 
                                    <button  key={index}
                                    className={`btn ms-2 ${color==selectedOptions[product.id]?.selectedColor ? "border-2 border-dark":""}`}
                                    style={{background:color}}
                                    onClick={()=>handleColor(color,product.id)}
                                    >{color}</button>
                                    )}
                                </p>
          <div className="mt-3">
            <button className="btn btn-primary me-3" onClick={handlecart}>Add to Cart</button>
            <Link className="btn btn-secondary" to='/'>Go Back</Link>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default ProductDetails;
