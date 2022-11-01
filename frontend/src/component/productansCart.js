import React, { useState } from "react";
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux'
import { AddCart, DeleteCart } from "../redux/action";

const ProductAndCart = () =>{
     const products = useSelector((state)=>state.handleCart)
      const dispatch=useDispatch()
     const [order, setOrder] = useState([]);
    const product =[
         {id: 1, name: "Product-1", price:100, quantity: 0},
        {id: 2, name: "Product-2", price:200, quantity: 0},
        {id: 3, name: "product-3", price:300, quantity: 0},
        ];
       
        const decrementHandle = (data) =>{
            dispatch(DeleteCart(data))
          
    }
    console.log(order);
        const incrementHandle = (data) =>{
            dispatch(AddCart(data))
            setOrder(data);
        }
       let amount = 0;
       for(let i=0; i<order.length; i++){
        amount = amount + order[i].quantity* order[i].price;
       }
    return (
        <>
        <div className="container">
             <div className="product">
                <h1>Product</h1>
                    {
                        product.map((data)=>
                        <div className="content" key={data.id}>
                            <p><b>{data.name}</b></p>
                            <p><b>{data.price}</b></p>
                            <div className="count">
                            <button className="btn" onClick={() =>{decrementHandle(data)}}>-</button>
                            <p><b>{data.quantity}</b></p>
                            <button className="btn" onClick={(e) =>{incrementHandle(data)}}>+</button>
                            </div>
                            </div>
                        )
                    }
                    
             </div>
             <div className="cart">
                <h1>CART</h1>
                    {
                        order.map((data, i) =>
                        <div className="cardC">
                            <p><b>{data.name}</b></p>
                            <p><b>{data.quantity} X {data.price}</b></p>
                        </div>
                            )
                    }
                    <div className="Total">
                        <h1>Total</h1>
                        <h1>{amount}</h1>
                    </div>
             </div>
             </div>

        </>
    )
}
export default ProductAndCart;