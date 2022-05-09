import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Cart = () => {
  let cartData = JSON.parse(localStorage.getItem("cartItms")) || [];
  const [cart,setCart] = useState([cartData]);
  console.log(cart)
  let newC;
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cartData.map((itm) => {
      ans += parseInt(itm.price);
      setPrice(ans);
    });
    //   handlePrice();
  };
  const handleRemove = (id) => {
    cartData = cartData.filter((item) => item.id !== id);
    localStorage.setItem("newwCart", JSON.stringify(cartData));
    let newCart = JSON.parse(localStorage.getItem("newwCart") || []);
    localStorage.setItem("updCart", JSON.stringify(newCart));
    setCart(newCart);
    handlePrice();
  };
  useEffect(() => {
    handlePrice();
  });

  return (
    <MainDiv>
      <Left>
        <div className="hd">
          <h3>SHOPPING BAG</h3>
        </div>

        <div className="ipq">
          <div className="itm">
            <p>ITEM</p>
          </div>
          <div className="pq">
            <p className="marg">PRICE</p>
            <p>QTY</p>
          </div>
        </div>
        <div className="cartItms">
          {cartData.map((itm) => (
            <div className="itm-con">
              <div className="left">
                <div className="iimg">
                  <img src={itm.image} alt="" />
                </div>
                <div className="details">
                  <p>{itm.name}</p>
                  <p>Item {itm.item_no}</p>
                  <button onClick={() => handleRemove(itm.id)} className="rmv">
                    Remove
                  </button>
                </div>
              </div>
              <div className="right">
                <p className="pri">INR {itm.price}</p>
                <p className="pqq">1</p>
              </div>
            </div>
          ))}
        </div>
      </Left>
      <Right>
        <div className="upper">
          <div className="ul">
            <p className="bold">Item Subtotal</p>
            <h4>Estimated Total</h4>
            <p className="gr">Shipping calculated in checkout</p>
          </div>
          <div className="ur">
            <p className="bold">INR {price}</p>
            <h4>INR {price}</h4>
          </div>
        </div>
        <div className="mid">
          <Link to="/Address" > <button>CHECK OUT NOW</button></Link>
         
          <p className="disc">
            By clicking 'Check Out Now', you will be redirected to the
            eShopWorld checkout page where payment will be taken and your order
            fulfilled by eShopWorld, J.Crew's preferred partner for
            international sales.
          </p>
        </div>
        <div className="cc">
          <h4>Add a promo</h4>
          <div className="pro">
            <input type="text" placeholder="Promo" />
            <button className="apply">Apply</button>
          </div>
        </div>
      </Right>
    </MainDiv>
  );
};
const MainDiv = styled.div`
  button {
    cursor: pointer;
  }
  width: 100%;
  background-color: #f8f8f8;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  border: 1px solid black;
`;

const Left = styled.div`
  background-color: white;
  /* border: 1px solid red; */
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  width: 40%;
  /* margin: auto; */
  margin-left: 250px;
  margin-top: 40px;
  /* border: 1px solid black; */
  /* padding-top: 5px; */
  & h3 {
    text-align: start;
    /* margin-top: 10px; */
  }

  .ipq {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 2px solid rgba(90, 92, 94, 0.15);
    border-bottom: 2px solid rgba(90, 92, 94, 0.15);
    height: 30px;
    font-size: 13px;
    color: gray;
    font-weight: bold;
  }
  .pq {
    display: flex;
    justify-content: space-between;
    margin-right: 20px;
  }
  .pri {
    margin-right: 18px;
    font-size: 13px;
    color: red;
  }
  .marg {
    margin-right: 40px;
  }
  .hd {
    /* margin-top: 20px; */
    /* border: 1px solid black; */
    font-family: sans-serif;
    font-size: 13px;
    letter-spacing: 1px;
    text-align: center;
    display: flex;
  }
  .hd h3 {
    margin-left: 5px;
  }
  .left {
    display: flex;
    justify-content: space-around;
    text-align: start;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    /* font-weight:bold; */
    /* width: 80%; */
  }
  .right {
    display: flex;
  }
  .pqq {
    /* background-color: gray; */
    height: 25px;
    width: 25px;
    margin-right: 20px;
    border: 1px solid gray;
  }
  .itm p {
    margin-left: 5px;
  }
  .left img {
    width: 100px;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 5px;
  }
  .rmv {
    border: none;
    background: none;
    color: gray;
    font-weight: bold;
  }
  .itm-con {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid rgba(90, 92, 94, 0.15);
  }
  .cartItms {
    /* padding: 10px; */
    margin-top: 10px;
  }
`;
const Right = styled.div`
  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  width: 20%;
  height: 380px;
  /* border: 1px solid red; */
  margin-right: 320px;
  margin-top: 40px;
  background-color: white;
  h4 {
    font-size: 15px;
  }
  .upper {
    display: flex;
    justify-content: space-between;
  }
  .ul {
    text-align: start;
    margin-left: 5px;
  }
  .bold {
    font-weight: bold;
    font-size: 12px;
  }
  .gr {
    color: gray;
    margin-top: -20px;
    font-size: 12px;
    width: 150px;
  }
  .ur {
    margin-right: 5px;
    text-align: end;
  }
  .mid button {
    width: 90%;
    padding: 15px;
    font-weight: bold;
    background: #0161ff;
    border: none;
    color: white;
  }
  .disc {
    color: gray;
    font-size: 12px;
    padding: 10px;
    border-bottom: 2px solid rgba(90, 92, 94, 0.15);
  }
  .cc {
    margin-left: 10px;
    text-align: start;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
  .cc input {
    padding: 10px;
    width: 60%;
    margin-left: 2px;
    border: none;
    outline: none;
    border: 1px solid gray;
    font-size: 15px;
  }
  .pro {
    display: flex;
  }
  .pro button {
    color: white;
    background-color: #0161ff;
    font-weight: bold;
    border: none;
    margin-left: 10px;
    padding: 15px;
  }
`;

export default Cart;
