//Perfume List
import one from "../assets/images/one.jpg";
import two from "../assets/images/two.jpg";
import three from "../assets/images/three.jpg";

function Products() {
    return (
      <div>
        <div className="products">
  
          <div class="box">
            <img src={one} alt="One" />
            <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
          </div>
  
          <div class="box">
            <img src={three} alt="Two" />
            <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
          </div>
  
          <div class="box">
            <img src={two} alt="Three" />
            <p>
              Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium
              Long Lasting Perfume
            </p>
          </div>
  
        </div>
      </div>
    );
}

export default Products;