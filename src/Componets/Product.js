import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../Redux/slices/productSlice';
import { addToCart } from '../Redux/slices/cartSlice';

function Product() {
    const products = useSelector((state) => state.product)
    console.log(products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProduct())
    }, [])
    return (

        <>
            <Container>
                
                <div className='row mt-5'>
                
                    {products.map((prod) => {
                        return (
                            <div className='col-3 mt-5 mb-2' key={prod.id}>
                                
                                <Card style={{ width: '18rem' , height: "500px"}}>
                                    <Card.Img style={{height: "300px" , padding: "20px"}} variant="top" src={prod.image} />
                                    <Card.Body>
                                        <Card.Title>{prod.title.substring(0 , 28)}</Card.Title>
                                        <Card.Text>
                                            {prod.category}
                                        </Card.Text>
                                        <Card.Text>
                                            {prod.price} $
                                        </Card.Text>
                                        <Button variant="danger" onClick={()=> dispatch(addToCart(prod))}>Add To Card</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })}

                </div>
            </Container>
        </>
    )
}

export default Product
