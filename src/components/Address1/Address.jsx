
import { Link } from "react-router-dom"

import {useState} from "react"


export const Address=(()=>{
   const {price}=JSON.parse(localStorage.getItem('cartItms'))
    const [datas,setDatas]=useState([])
    
    console.log("price",price)
    const handlechange=((e)=>{
      const{value,className}=e.target
      setDatas({...datas,
    [className]:value
    })
    })
    const handleClick=((e)=>{
        e.preventDefault(e)
        localStorage.setItem("form",JSON.stringify(datas))
    })
    console.log("add",datas)
    return <div>
        <div id="address-box">
            <h3>Delivery Method</h3>
            <div id="ad-data">
                <input type="radio" /> <span>STANDARD Delivery </span> <br /> <span>Delivered on or before May 31</span> <b>INR {price}</b>
                <br />
                <input type="radio" /> <span>STANDARD Delivery </span> <br /> <span>Delivered on or before May 31</span> <b>INR 2102</b>
            </div>
        </div>
        <div id="address-2"
        >
            <form action=""
            
            >
                <input onChange={handlechange} className="first_name" type="text" placeholder="First Name" /> <input className="last_name" type="text" placeholder="Last Name" />
              <br />
              <input onChange={handlechange}  className="country" id="country" placeholder="Country" value={"India"} type="text" /> <br />
              <input onChange={handlechange}  className="address1" id="country" type="text" placeholder="Address Line 1" /> <br />
              <input onChange={handlechange}  className="address2" id="country" type="text" placeholder="Address Line 2" />
              <input onChange={handlechange}  className="postal" id="add-m2" type="number" placeholder="Postal Code" /> <input type="text" placeholder="City" /> <br />
              <div id="space-add">
              <input onChange={handlechange}  type="checkbox" /> <label htmlFor="">Save this address for my next purchase</label> 
              </div>
              <div id="add-mob">
                <div id="img-ind"> <img height={"100%"} width={"100%"} src="data:image/png;base64,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" alt="" /></div>
                <input onChange={handlechange}  className="mobile" id="ind-inp" type="text" placeholder="Mobile Number" />
              </div>
              <input onChange={handlechange}  className="email" type="email" id="country" placeholder="Email"/>

              <div id="tick-add">
                  <input onChange={handlechange}  type="checkbox" />I have read and consent to eShoWorld processing my information in accordance with the privacy statement and cookie policy
              </div>
           <Link to="/Payment">
           <button  id="add-btn">
                  <p>CONTINUE TO PAYMENT</p>
              </button>
           </Link>
           
              
              

            </form>
        </div>
    </div>
})