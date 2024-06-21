import React, { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart } from "../Redux/slices/cartSlice";

function Cart() {
    const cardPRoducts = useSelector((state) => state.cart);
    console.log(cardPRoducts.lenght);
    const dispatch = useDispatch();
    const total = cardPRoducts.reduce((acc , product) => {
        acc += product.price * product.quntity
        return acc
    } , 0)
    return (
        <Container className="pt-5">
            <div className="mt-5">
                {cardPRoducts.length == 0 ? (
                    <h1 className="pt-5 text-center">No items yet</h1>
                ) : ( 
                    <Table striped>
                        <Button onClick={()=> dispatch(clear())} className="m-2" variant="primary"> Clear Cart </Button>
                        <h5 className="m-2"> Totale price : {total.toFixed(2)} $</h5>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title Product</th>
                                <th>IMG</th>
                                <th>category</th>
                                <th>price</th>
                                <th>Quntity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {cardPRoducts.map((product) => {
                            return (
                                <tbody>
                                    <tr>
                                        <td style={{alignContent: 'center'}}>{product.id}</td>
                                        <td  style={{alignContent: 'center'}}>{product.title}</td>
                                        <td  style={{alignContent: 'center'}}><img style={{width: '100px' , height: '100px'}} src={product.image}/></td>
                                        <td  style={{alignContent: 'center'}}>{product.category}</td>
                                        <td  style={{alignContent: 'center'}}>{product.price} $</td>
                                        <td  style={{alignContent: 'center'}}>{product.quntity} </td>
                                        <td  style={{alignContent: 'center'}}><Button onClick={(e)=> dispatch(deleteFromCart(product))} variant="danger">Delete</Button></td>

                                    </tr>
                                </tbody>
                            );
                        })}
                    </Table>
                    
                )}
            </div>
        </Container>
    );
}

export default Cart;
