import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { addtocart } from '../redux/cartSlice'

const ProductCard = ({ items }) => {
    const dispatch  =useDispatch()
    const [selectedOptions,setSelectedOptions] = useState({})
    const handleSize = (size,id)=>{
        setSelectedOptions(prev =>({...prev,[id]:{...prev[id],selectedSize:size}}))
    }
    const handleColor = (color,id)=>{
        setSelectedOptions(prev =>({...prev,[id]:{...prev[id],selectedColor:color}}))
    }
    const handleCart=(item)=>{
        const s = selectedOptions[item.id]?.selectedSize
        const c  =selectedOptions[item.id]?.selectedColor
        if(!s || !c){
            toast.error("please select size and color");return
        }
        else {
            // console.log({item,size:s,color:c})
            dispatch(addtocart({item,size:s,color:c}))
        }
    }
    return (
        <>
            <div className="row">
            {items.length === 0 && <h1>No Item Found</h1>}
                {items.map((item, i) => 
                    <div className="col-3" key={i}>
                        <div className="card mb-4 shadow-sm">
                            {item.images.length === 0 && <img src="" alt="No images available" />}
                            {item.images.length > 0 && (
                                <div className="image-container">
                                    <div id={`carouselExample-${i}`} className="carousel slide">
                                        <div className="carousel-inner">
                                            {item.images.map((image, j) => (
                                                <div
                                                    key={j}
                                                    className={`carousel-item ${j === 0 ? 'active' : ''}`}
                                                >
                                                    <img
                                                        src={image}
                                                        className="zoomable-image"
                                                        style={{ height: '200px', width: '100%' }}
                                                        alt="loading"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                        <button
                                            className="carousel-control-prev"
                                            type="button"
                                            data-bs-target={`#carouselExample-${i}`}
                                            data-bs-slide="prev"
                                        >
                                            <span
                                                className="carousel-control-prev-icon"
                                                aria-hidden="true"
                                            ></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button
                                            className="carousel-control-next"
                                            type="button"
                                            data-bs-target={`#carouselExample-${i}`}
                                            data-bs-slide="next"
                                        >
                                            <span
                                                className="carousel-control-next-icon"
                                                aria-hidden="true"
                                            ></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                            )}
                            <div class="card-body">
                                <h5 class="card-title">{item.name}</h5>
                                <p class="card-text">Brand: <strong>{item.brand}</strong>
                                    <span class="card-text float-end">Category: <strong>{item.category}</strong></span></p>
                                <p class="card-text">Price: <span class="badge bg-success">${item.price}</span></p>
                                <p class="card-text">Sizes:
                                    {item.sizes.map((size, index) => <button  key={index}
                                    className={`btn ms-2 ${size==selectedOptions[item.id]?.selectedSize ? "btn-primary":"btn-outline-primary"}`}
                                    onClick={()=>handleSize(size,item.id)}
                                    >{size}</button>
                                    )}
                                </p>
                                <p class="card-text">Colors:
                                    {item.colors.map((color, index) => 
                                    <button  key={index}
                                    className={`btn ms-2 ${color==selectedOptions[item.id]?.selectedColor ? "border-2 border-dark":""}`}
                                    style={{background:color}}
                                    onClick={()=>handleColor(color,item.id)}
                                    >{color}</button>
                                    )}
                                </p>
                                <button class="btn btn-primary w-100" onClick={()=>handleCart(item)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </>
    )
}

export default ProductCard


