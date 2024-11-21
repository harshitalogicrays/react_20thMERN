import React from 'react'

const ProductCard = ({ items }) => {
    return (
        <>
            <div className="row">
                {items.length == 0 && <h1>No Item Found</h1>}
                {items.map((item, i) =>
                    <div className="col-3" key={i}>
                        <div class="card mb-4 shadow-sm">

                                {item.images.length == 0 && <img src="" alt="loading" />}
                                {item.images.map((image, i) =>
                                <div className="image-container">
                                    <div id="carouselExample" class="carousel slide">
                                        <div class="carousel-inner">                       
                                            <div class={`carousel-item ${i==0?'active':''}`}>
                                                <img src={image} className="zoomable-image" style={{ height: '200px', width: '100%' }} alt="loading" />
                                            </div></div>
                                                <button class="carousel-control-prev" type="button" data-bs-target="carouselExample" data-bs-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Previous</span>
                                                </button>
                                                <button class="carousel-control-next" type="button" data-bs-target="carouselExample" data-bs-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Next</span>
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
                                    {item.sizes.map((s, i) => <span class="ms-2" key={i}>{s}</span>)}

                                </p>
                                <p class="card-text">Colors:
                                    {item.colors.map((c, i) => <span class="badge ms-2" key={i} style={{ backgroundColor: c }}>{c}</span>)}
                                </p>
                                <button class="btn btn-primary w-100">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </>
    )
}

export default ProductCard
