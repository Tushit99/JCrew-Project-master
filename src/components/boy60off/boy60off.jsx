import { useEffect, useState } from "react";  
import { Link } from "react-router-dom";
import { Footer } from "../footer/footer";

export const Boy60off = () => {
  const [boyof, setof] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await fetch("http://localhost:8060/boy60off?_limit=12").then((d) =>
        d.json()
      );
      setof(data);
    }
    getData();    
  }, []);    

  return (
    <div className="for">
      <div id="top1">
        <div id="top-cont1">Have a question? We can help.</div>
      </div>
      <div id="top2">
        <h1 id="top-text2">Boy's 60% Off</h1>
      </div>
      <div id="top3">
        <select name="" id="">
          <option value="">Show Filters</option>
        </select>
        <select name="" id="">
          <option value="">Features</option>
          <option value="">Price:High to Low</option>
          <option value="">Price:Low to High</option>
          <option value="">Top Rated </option>
          <option value="">New Arrivals</option>
        </select>
        <div className="second">
          <select name="" id="">
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
        {boyof.map((e) => {
          return (
            <Link to={`/Boy60off/${e.id}/boy60off`} id="card-1">
              <div id="img-1">
                <img id="img-i-1" src={e.image} alt="" />
                <button id="button-1">QUICK SHOP</button>
              </div>
              <div id="demo-1">
                <span id="name-1">{e.name}</span>
                <br />
                <span id="name-2">
                  INR <span>{e.price}</span>{" "}
                </span>
              </div>
            </Link>
          );
        })}
      </div>   
      <Footer/>
    </div>
  );
};

// {boyof.map(e =>
// <Link to={`/Boy60off/${e.id}/boy60off`} className="mybox">
//     <img src={e.image} alt="image" />
//     <h3> New </h3>
//     <h2> {e.name} </h2>
//     <h3> {e.price} </h3>
//     <button className="button"> Add to Cart </button>
// </Link>)}
