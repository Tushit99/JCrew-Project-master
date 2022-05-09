import { Bedding } from "./components/bedding/bedding&dining";
import { Boy60off } from "./components/boy60off/boy60off";
import { Boyshopall } from "./components/boyshop_all/boyshop_all";
import { Decor } from "./components/decor&hometec/decor&hometec";
import { Forboy } from "./components/forboys/for.boy";
import { Forgirls } from "./components/forgirls/forgirls";
import { Forkids } from "./components/forkids/forkids";
import { Formen } from "./components/formen/for.men";
import { Forwomen } from "./components/forwomen/for.women";
import { Girl60off } from "./components/girl60off/girl60off";
import { Menoff } from "./components/menoff/menoff";
import { Menshowall } from "./components/menshow_all/menshow_all";
import { Saleboy } from "./components/sale_boy/saleboy";
import { Salegirl } from "./components/sale_girl/sale_girl";
import { Salemen } from "./components/sale_men/sale_men";
import { Salewomen } from "./components/sale_women/sale_women";
import { Women60off } from "./components/women60off/women60off";
import { Womenshopall } from "./components/womenshop_all/womenshop_all";
import { Boyshirts } from "./components/boyShirt/boyShirt";
import { Boysshorts } from "./components/boyShorts22/boyShorts22";
import { Boyshort } from "./components/boysShorts/boysShorts";
import { Getoutside } from "./components/getoutSide/getoutSide";
import { Girlsgraphicsshop } from "./components/girls&Graphics/girlsgraphics";
import { GirlsSkirt } from "./components/girls&Skirts/girlsskirts";
import { Girljumpsuite } from "./components/girlsDress&JumpSuite/girlsDress&JumpSuite";
import { Girlshorts } from "./components/girlshorts/girlshorts";  
import { Girlshopall } from "./components/GirlShowAll/GirlShowAll";
import { GirlLeginsPant } from "./components/girlsLeggings&pants/girlsLeggings&pants";
import { GirlsPJ } from "./components/girlsPajamas/girlsPajamas";
import { GirlsSweatShirt } from "./components/girlsSwetShirt/girlsSwetShirt";
import { GirlsSwimandRashguards } from "./components/girlsSwimand&Rashguards/girlsSwimand&Rashguards";
import { GirlstopsTees } from "./components/girltop&tees/girltop&tees";
import { Graphicsshop } from "./components/graphicshop/graphicshop";
import { TeesPolos } from "./components/Tea&polos/Tea&polos";
import { Routes, Route } from "react-router-dom";
import { Product } from "./components/Productdetail";
import { Home } from "./components/index/Home";
import { Navber } from "./components/navbar";   
import { Active } from "./components/Active/Active";  
import { Bag } from "./components/Bag/Bags";  
import { BestSeller } from "./components/BestSellers/BestSellers";   
import { BestSellersMen } from "./components/BestSellersMen/BestSellersMen";    
import { Blazers } from "./components/BlaZers/BlaZers";  
import { BrandWelove } from "./components/Brand-Welove/BrandWelove";   
import { Denim } from "./components/Denim/Denim";   
import { DressJumpsuites } from "./components/DressesJumpSuits/DressesJumpSuits";   
import { Espandrils } from "./components/EspanDrils/EspanDrils";  
import { Flats } from "./components/Flats/Flats";  
import { Hats } from "./components/Hats/Hats";   
import { Heels } from "./components/Heels/Heels";  
import { Jackets } from "./components/Jackets/Jackets";   
import { Jewelry } from "./components/Jewelry/Jewelry";   
import { Matching } from "./components/Matching/Matching"; 
import { MensBrandsWeLove } from "./components/MenBrandsWeLove/MenBrandsWeLove";  
import { MensNewArrival } from "./components/MensNewArrival/MensNewArrival";   
import { MenTopRated } from "./components/MenTopRated/MenTopRated";   
import { Maternity } from "./components/Meternity/Meternity";  
import { NewArrivals } from "./components/NewArrivals/NewArrivals";   
import { Pajamas } from "./components/Pajama-S/Pajamas";   
import { Pants } from "./components/Pants/Pants";   
import { ReImagined } from "./components/Re-Imagined/ReImagined";  
import { Sale } from "./components/Sale/Sale";  
import { Sandals } from "./components/Sandals/Sandals";   
import { Scarfs } from "./components/Scarfs/Scarfs";   
import { ShirtsTops } from "./components/ShirtsTops/ShirtsTops";   
import { Shoes } from "./components/Shoes/Shoes";   
import { ShopAll } from "./components/Shop-All/ShopAll";   
import { Shorts } from "./components/ShortS/ShortS";   
import { Skirts } from "./components/Skirts/SkirtS";  
import { Sneakers } from "./components/Sneakers/Sneakers"; 
import { Sweaters } from "./components/Sweaters/Sweaters";   
import { SweaterPants } from "./components/SweatersPants/SweatersPants";   
import { Swimwear } from "./components/SwimWear/SwimWear";   
import { TheTeesShop } from "./components/TheTeesShop/TheTeesShop";  
import { TopRated } from "./components/TopRated/TopRated";    
import { Footer } from "./components/footer/footer";   
// import { Signin } from "./components/signin/signin";
import "./App.css";   
import Cart from "./components/cart/Cart";
import { Address } from "./components/Address1/Address";
import Payment from "./components/Payment/Payment";
import { Signin } from "./components/signin/signin";
import { Signup } from "./components/Signup/signup";

function App() {
  return (
    <div className="App">     
      <Navber />    
      <Routes >    
        <Route path="/" element={<Home />}></Route>
        <Route path="/Womenshopall" element={<Womenshopall />}></Route>
        <Route path="/Bedding" element={<Bedding />}></Route>
        <Route path="/Boy60off" element={<Boy60off />}></Route>
        <Route path="/Boyshopall" element={<Boyshopall />}></Route>
        <Route path="/Decor" element={<Decor />}></Route>
        <Route path="/Forboy" element={<Forboy />}></Route>
        <Route path="/Forgirls" element={<Forgirls />}></Route>
        <Route path="/Forkids" element={<Forkids />}></Route>
        <Route path="/Formen" element={<Formen />}></Route>
        <Route path="/Forwomen" element={<Forwomen />}></Route>
        <Route path="/Girl60off" element={<Girl60off />}></Route>
        <Route path="/Menoff" element={<Menoff />}></Route>
        <Route path="/Menshowall" element={<Menshowall />}></Route>
        <Route path="/Saleboy" element={<Saleboy />}></Route>
        <Route path="/Salegirl" element={<Salegirl />}></Route>
        <Route path="/Salemen" element={<Salemen />}></Route>
        <Route path="/Salewomen" element={<Salewomen />}></Route>
        <Route path="/Women60off" element={<Women60off />}></Route>
        <Route path="/Boyshirts" element={<Boyshirts />}></Route>
        <Route path="/Boysshorts" element={<Boysshorts />}></Route>
        <Route path="/Boyshort" element={<Boyshort />}></Route>
        <Route path="/Getoutside" element={<Getoutside />}></Route>
        <Route path="/Girlsgraphicsshop" element={<Girlsgraphicsshop />}></Route>
        <Route path="/GirlsSkirt" element={<GirlsSkirt />}></Route>
        <Route path="/Girljumpsuite" element={<Girljumpsuite />}></Route>
        <Route path="/Girlshorts" element={<Girlshorts />}></Route>
        <Route path="/GirlLeginsPant" element={<GirlLeginsPant />}></Route>
        <Route path="/GirlsPJ" element={<GirlsPJ />}></Route>
        <Route path="/GirlsSweatShirt" element={<GirlsSweatShirt />}></Route>
        <Route path="/GirlsSwimandRashguards" element={<GirlsSwimandRashguards />}></Route>
        <Route path="/GirlstopsTees" element={<GirlstopsTees />}></Route>
        <Route path="/Graphicsshop" element={<Graphicsshop />}></Route>
        <Route path="/TeesPolos" element={<TeesPolos />}></Route> 
        <Route path="/Girlshopall" element={<Girlshopall/>}></Route> 
        {/* =========== */} 
        <Route path="/Active" element={<Active/>} ></Route>
        <Route path="/Bag" element={<Bag/>} ></Route>
        <Route path="/BestSeller" element={<BestSeller/>} ></Route>
        <Route path="/BestSellersMen" element={<BestSellersMen/>} ></Route>
        <Route path="/Blazers" element={<Blazers/>} ></Route>
        <Route path="/BrandWelove" element={<BrandWelove/>} ></Route>
        <Route path="/Denim" element={<Denim/>} ></Route>
        <Route path="/DressJumpsuites" element={<DressJumpsuites/>} ></Route>
        <Route path="/Espandrils" element={<Espandrils/>} ></Route>
        <Route path="/Flats" element={<Flats/>} ></Route>
        <Route path="/Hats" element={<Hats/>} ></Route>
        <Route path="/Heels" element={<Heels/>} ></Route>
        <Route path="/Jackets" element={<Jackets/>} ></Route>
        <Route path="/Jewelry" element={<Jewelry/>} ></Route>
        <Route path="/Matching" element={<Matching/>} ></Route>
        <Route path="/MensBrandsWeLove" element={<MensBrandsWeLove/>} ></Route>
        <Route path="/MensNewArrival" element={<MensNewArrival/>} ></Route>
        <Route path="/MenTopRated" element={<MenTopRated/>} ></Route>
        <Route path="/Maternity" element={<Maternity/>} ></Route>
        <Route path="/NewArrivals" element={<NewArrivals/>} ></Route>
        <Route path="/Pajamas" element={<Pajamas/>} ></Route>
        <Route path="/Pants" element={<Pants/>} ></Route>
        <Route path="/ReImagined" element={<ReImagined/>} ></Route>
        <Route path="/Sale" element={<Sale/>} ></Route>
        <Route path="/Sandals" element={<Sandals/>} ></Route>
        <Route path="/Scarfs" element={<Scarfs/>} ></Route>
        <Route path="/ShirtsTops" element={<ShirtsTops/>} ></Route>
        <Route path="/Shoes" element={<Shoes/>} ></Route>
        <Route path="/ShopAll" element={<ShopAll/>} ></Route>
        <Route path="/Shorts" element={<Shorts/>} ></Route>
        <Route path="/Skirts" element={<Skirts/>} ></Route>
        <Route path="/Sneakers" element={<Sneakers/>} ></Route>
        <Route path="/Sweaters" element={<Sweaters/>} ></Route>
        <Route path="/SweaterPants" element={<SweaterPants/>} ></Route>
        <Route path="/Swimwear" element={<Swimwear/>} ></Route>
        <Route path="/TheTeesShop" element={<TheTeesShop/>} ></Route>
        <Route path="/TopRated" element={<TopRated/>} ></Route>  


        {/* other routs */}

        <Route path="/Womenshopall/:id/:name" element={<Product />}></Route>
        <Route path="/Bedding/:id/:name" element={<Product />}></Route>
        <Route path="/Boy60off/:id/:name" element={<Product />}></Route>
        <Route path="/Boyshopall/:id/:name" element={<Product />}></Route>
        <Route path="/Decor/:id/:name" element={<Product />}></Route>
        <Route path="/Forboy/:id/:name" element={<Product />}></Route>
        <Route path="/Forgirls/:id/:name" element={<Product />}></Route>
        <Route path="/Forkids/:id/:name" element={<Product />}></Route>
        <Route path="/Formen/:id/:name" element={<Product />}></Route>
        <Route path="/Forwomen/:id/:name" element={<Product />}></Route>
        <Route path="/Girl60off/:id/:name" element={<Product />}></Route>
        <Route path="/Menoff/:id/:name" element={<Product />}></Route>
        <Route path="/Menshowall/:id/:name" element={<Product />}></Route>
        <Route path="/Saleboy/:id/:name" element={<Product />}></Route>
        <Route path="/Salegirl/:id/:name" element={<Product />}></Route>
        <Route path="/Salemen/:id/:name" element={<Product />}></Route>
        <Route path="/Salewomen/:id/:name" element={<Product />}></Route>
        <Route path="/Women60off/:id/:name" element={<Product />}></Route>
        <Route path="/Boyshirts/:id/:name" element={<Product />}></Route>
        <Route path="/Boysshorts/:id/:name" element={<Product />}></Route>
        <Route path="/Boyshort/:id/:name" element={<Product />}></Route>
        <Route path="/Getoutside/:id/:name" element={<Product />}></Route>
        <Route path="/Girlsgraphicsshop/:id/:name" element={<Product />}></Route>
        <Route path="/GirlsSkirt/:id/:name" element={<Product />}></Route>
        <Route path="/Girljumpsuite/:id/:name" element={<Product />}></Route>
        <Route path="/Girlshorts/:id/:name" element={<Product />}></Route>
        <Route path="/GirlLeginsPant/:id/:name" element={<Product />}></Route>
        <Route path="/GirlsPJ/:id/:name" element={<Product />}></Route>
        <Route path="/GirlsSweatShirt/:id/:name" element={<Product />}></Route>
        <Route path="/GirlsSwimandRashguards/:id/:name" element={<Product />}></Route>
        <Route path="/GirlstopsTees/:id/:name" element={<Product />}></Route>
        <Route path="/Graphicsshop/:id/:name" element={<Product />}></Route> 
        <Route path="/Girlshopall/:id/:name" element={<Girlshopall/>}></Route>
        <Route path="/TeesPolos/:id/:name" element={<Product />}></Route>   
        <Route path="/Girlshopall/:id/:name" element={<Product/>} ></Route>
        <Route path="/Active/:id/:name" element={<Product/>} ></Route>
        <Route path="/Bag/:id/:name" element={<Product/>} ></Route>
        <Route path="/BestSeller/:id/:name" element={<Product/>} ></Route>
        <Route path="/BestSellersMen/:id/:name" element={<Product/>} ></Route>
        <Route path="/Blazers/:id/:name" element={<Product/>} ></Route>
        <Route path="/BrandWelove/:id/:name" element={<Product/>} ></Route>
        <Route path="/Denim/:id/:name" element={<Product/>} ></Route>
        <Route path="/DressJumpsuites/:id/:name" element={<Product/>} ></Route>
        <Route path="/Espandrils/:id/:name" element={<Product/>} ></Route>
        <Route path="/Flats/:id/:name" element={<Product/>} ></Route>
        <Route path="/Hats/:id/:name" element={<Product/>} ></Route>
        <Route path="/Heels/:id/:name" element={<Product/>} ></Route>
        <Route path="/Jackets/:id/:name" element={<Product/>} ></Route>
        <Route path="/Jewelry/:id/:name" element={<Product/>} ></Route>
        <Route path="/Matching/:id/:name" element={<Product/>} ></Route>
        <Route path="/MensBrandsWeLove/:id/:name" element={<Product/>} ></Route>
        <Route path="/MensNewArrival/:id/:name" element={<Product/>} ></Route>
        <Route path="/MenTopRated/:id/:name" element={<Product/>} ></Route>
        <Route path="/Maternity/:id/:name" element={<Product/>} ></Route>
        <Route path="/NewArrivals/:id/:name" element={<Product/>} ></Route>
        <Route path="/Pajamas/:id/:name" element={<Product/>} ></Route>
        <Route path="/Pants/:id/:name" element={<Product/>} ></Route>
        <Route path="/ReImagined/:id/:name" element={<Product/>} ></Route>
        <Route path="/Sale/:id/:name" element={<Product/>} ></Route>
        <Route path="/Sandals/:id/:name" element={<Product/>} ></Route>
        <Route path="/Scarfs/:id/:name" element={<Product/>} ></Route>
        <Route path="/ShirtsTops/:id/:name" element={<Product/>} ></Route>
        <Route path="/Shoes/:id/:name" element={<Product/>} ></Route>
        <Route path="/ShopAll/:id/:name" element={<Product/>} ></Route>
        <Route path="/Shorts/:id/:name" element={<Product/>} ></Route>
        <Route path="/Skirts/:id/:name" element={<Product/>} ></Route>
        <Route path="/Sneakers/:id/:name" element={<Product/>} ></Route>
        <Route path="/Sweaters/:id/:name" element={<Product/>} ></Route>
        <Route path="/SweaterPants/:id/:name" element={<Product/>} ></Route>
        <Route path="/Swimwear/:id/:name" element={<Product/>} ></Route>
        <Route path="/TheTeesShop/:id/:name" element={<Product/>} ></Route>
        <Route path="/TopRated/:id/:name" element={<Product/>} ></Route>   
        <Route path="/Cart" element={<Cart/>} ></Route>
        <Route path="/Address" element={<Address/>}></Route>
        <Route path="/Payment" element={<Payment/>}></Route>
        <Route path="/Signin" element={<Signin/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
      </Routes>    
      <Footer/>    
    </div>
  );
}

export default App;
