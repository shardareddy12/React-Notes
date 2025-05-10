import React,{useState,useEffect} from 'react';

export default function Usestate(){
    
    // Nested Object state
    const [user,setUser] = useState({
        name:'sharda',
        age:'29',
        address:{
            city:'san jose',
            country:'USA'
        }
    })

    //Change address
    const updateCity = ()=>{
        setUser((prevState)=>({
            ...prevState,
            address:{
                ...prevState.address,
                city:'Los Angeles'
            }
        }))
    }

    //Arrays of object in state   
    const [cart,setCart] = useState([
        {id:1, name:'Laptop', quantity:1},
        {id:2, name:'Phone', quantity:2}
    ])
    
    // increasequantity
    const increaseQuantity = (id)=>{
        setCart((prevCart)=> prevCart.map((item)=>
        item.id===id? {...item,quantity: item.quantity+1}:item));
    }

    return (
        <>
        <div>
            <h1>User Profile</h1>
            <p>{user.name}</p>
            <p>{user.age}</p>
            <p>{user.address.city}</p>
            <button onClick={updateCity}>Update City</button>
        </div>
        <div>
            <h1>shopping Cart</h1>
            {cart.map((item)=>(
                <div key={item.id}>
                    <p>{item.name} - Quantity:{item.quantity}</p>
                    <button onClick={()=>increaseQuantity(item.id)}>Increase quantity</button>
                </div>
            ))}
        </div>
        </>
    )
}