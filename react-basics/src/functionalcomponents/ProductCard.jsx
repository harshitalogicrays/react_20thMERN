import React from 'react'
import { Button, Card, Col} from 'react-bootstrap'
const ProductCard = ({product}) => {
  return (
    <Col xs={3}  className='mb-3'>
                <Card>
                    <Card.Img src={product.images[0]}  variant="top" height={200}/>
                    <Card.Body>
                        <h5>{product.title}</h5>
                        <p>{product.category}<br/>{product.brand}</p>
                        <p>${product.price}</p>
                        {/* <p>{product.description}</p> */}
                        <div className="d-grid gap-2">
                        <Button variant='danger'>Add to Cart</Button></div>
                    </Card.Body>
                </Card>
    </Col>
  )
}

export default ProductCard
