import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./product.css"  
import { Footer } from "./footer/footer"; 

export const Product = () => {
  const {name} = useParams({})
  const { id } = useParams({});
  const [product, setpro] = useState({});

  useEffect(() => {
    async function getData() {
      const data = await fetch(
        `http://localhost:8060/${name}/${id}`
      ).then((d) => d.json());
      setpro(data);
    }
    getData();
  }, []);
  const getLocalItems = () =>{
    let list = localStorage.getItem("cartItms");
    console.log(list)
    if(list){
      return JSON.parse(list)
    }else{
      return [];
    }
  }
  const [cart, setCart] = useState(getLocalItems());
  const handleClick = (item)=>{
    setCart([...cart,item]);
    // window.localStorage.setItem("cartItms",JSON.stringify(cart));
    console.log(cart);
  }
  useEffect(()=>{
    localStorage.setItem("cartItms",JSON.stringify(cart));
  },[cart])

  

  return (
    <div>
      <div className="container">
        <div className="container-img">
          <img src={product.image}
            className="pro-img"
            alt="some-thing-went-wrong"
          />
        </div>
        <div className="container-detail">
          <h2> {product.name} </h2>
          <h5> {product.item} </h5>
          <h3>Price:{product.price}</h3>
          <br />
          <h4> Size: Select a Size </h4>
          <h3> All sizes are US size </h3>
          <div className="btn">
            <button> X-Small </button>   
            <button> Small</button>  
            <button> Medium </button>   
            <button> Large </button>  
            <button> X-Large </button>  
            <button> XX-Large </button>   
            <button> 2X </button>
          </div>   
          <h4>
            Quantity :
            <select>
              <option value="1">1</option> 
              <option value="2">2</option>
            </select>
          </h4>
        <button className="bag" onClick={(()=>{
          handleClick(product)
        })}> ADD TO BAG </button>  
        <hr className="hr" />
        <h4> Prices include duties and taxes </h4> 
        <div> </div>
        <h2> Product Details </h2> 
        <div className="text"> {product.productdescription} </div>   
        <ul>
          <li> Cotton.</li>
          <li> Short sleeves. </li> 
          <li> Chest pocket. </li>  
          <li> Side vents with tennis tail (slightly longer in back).</li>
          <li> Machine wash. </li>  
          <li> Import. </li>  
          <li> Select stores. </li> 
          <li> Item AV961. </li>  
        </ul> 
        <h3> Our Fabrics, Re-imagined </h3>  
        <h4 className="fab"> This item contains a sustainable material, like organic cotton, recycled polyester, or with certifications like Fair Trade. </h4>  
        <hr className="hr" /> 
        </div>
      </div>
      <br/>
      <Footer/>  
    </div>
  );
};
