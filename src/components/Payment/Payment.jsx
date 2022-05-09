import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const Payment = () => {
  return (
    
    <Con>
    <div className="card-con">
        <div className="upper">
            <h4>Payment</h4>
            <div className="input">
                <input type="checkbox" />
                <p>Billing address same as delivery address</p>
            </div>
            <button className='cbtn'> <span className='csym'>💳 </span>Card</button>
        </div>
        <div className="mid">
            <div className="mid-con">
                <div><input className='num' type="text" placeholder='Card number*'/></div>
                <div className='c-mid'>
                    <input className='mm' type="text" placeholder='MM/YY' />
                    <input className='cvv' type="text" placeholder='CVV*' />
                </div>
                <div><input className='name' type="text" placeholder='Name on card*' /></div>
                <div className="symb">
                    <img src="https://www.lizadecor.com/upload/obrazky/BANKY%20LOGO1.jpg" alt="" />
                </div>
            </div>
        </div>
        <div className="bottom">
            <p className='dc'>By clicking Pay Now, you agree to eShopWorld's <br /> Terms and Conditions.</p>
            <Link to={"/"} >
            <button onClick={(()=>{
                alert(`Payment is succesful`)
            })}>PAY NOW</button></Link>
           
        </div>
    </div>
    </Con>
  )
}

const Con = styled.div`
    width:600px;
    /* border: 1px solid red; */
    margin: auto;
    margin-top: 150px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 5px;

.card-con{
    width : 80%;
    margin: auto;
    padding: 20px 0 20px 0;
}
.input{
    display: flex;
    align-items: center;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.upper button{
   background: none;
   width: 200px;
   text-align: center;
   padding: 5px;
   border-radius: 10px;
   border: none;
   border: 1px solid gray;
   font-size: 20px;
}
.mid{
    margin-top: 30px;
    background-color: #f4f4f4;
    padding: 20px;
    border: 1px solid gray;
    width: 70%;
}
.num{
    width: 80%;
    padding:10px;
}
.c-mid input{
    padding:10px;
    margin-top: 5px;
}
.cvv{
    width: 100px;
    margin-left: 10px;
}
.name{
    padding:10px;
    margin-top: 5px;
    width: 80%;
}
.symb img{
    width: 100%;
    margin-top: 20px;
}
.dc{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 13px;
}
.bottom button {
    width: 80%;
    padding:10px;
    background-color: black;
    color: white;
    font-weight: bold;
    font-size:15px;
    margin-bottom: 10px;
}




`

export default Payment