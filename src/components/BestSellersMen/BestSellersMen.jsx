
import axios from "axios"
import { useEffect, useState } from "react"

import { Link } from "react-router-dom"

export const BestSellersMen=(()=>{
    
    const[next,setNext]=useState(1);
    const handlenext=(()=>{
        setNext(next+1);
        console.log(next)
    })
    const handleprev=(()=>{
        setNext(next-1)     
    })
    const[first,setFirst]=useState([]);
    
    useEffect(()=>{
    axios.get(`http://localhost:8060/best_sellers_men?_page=${next}&_limit=21`).then((res)=>{
        setFirst(res.data)
    })
    },[next])

    const handlesort=((e)=>{
      console.log(e.target.value);
      const value=e.target.value
      if(value=="Low"){
     axios.get(`http://localhost:8060/best_sellers_men?_page=${next}&_limit=21&&_sort=price`).then((res)=>{
         setFirst(res.data)
     })
      }
       if(value=="High"){
          axios.get(`http://localhost:8060/best_sellers_men?_page=${next}&_limit=21&&_sort=price&_order=desc`).then((res)=>{
              setFirst(res.data)
          })
      }
  })
   
    console.log("all data",first)
   
 
   
    return <div>
        <div id="top1">
            <div id="top-cont1">Have a question? We can help.</div>
        </div>
        <div id="top2">
            <h1 id="top-text2">MEN'S BEST SELLERS</h1>
        </div>
        <div  id="top3"> 
                <select name="" id="">
                    <option value="">Show Filters</option>
                </select>
                <select onChange={handlesort} name="" id="">
                    <option value="">Features</option>
                    <option  value="High">Price:High to Low</option>
                    <option value="Low">Price:Low to High</option>
                    <option value="">Top Rated </option>
                    <option value="">New Arrivals</option>
                </select>
               <div className="second">   
                <select  name="" id="">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                    <option value="">6</option>
                    <option value="">7</option>
                    <option value="">8</option>
                    <option value="">9</option>
                    <option value="">10</option>
                </select>
                <span>Of 10</span>
                </div>
               
         
         
        </div>
      
        <div id="div-6">
        {first.map((e)=>{
            return <div>
                <Link  to={`/BestSellersMen/${e.id}/best_sellers_men`}    id="card-1">
             
             <div id="img-1" >
                 <img id="img-i-1" src={e.image} alt="" />
                 <button id="button-1">QUICK SHOP</button>
             </div>
             <div id="demo-1">
             <span id="name-1">{e.name}</span>
             <br />
             <span id="name-2">INR  <span>{e.price}</span> </span>
             </div>
         
            </Link>
          
            </div>
          
        })}
       
           
        </div>
        <div id="page-div">
            <button id="prev" onClick={handleprev} >    Previous </button>
            <button id="next" onClick={handlenext} >Next </button>
        </div>

    </div>
})