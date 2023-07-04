import React from "react";
import { useNavigate } from "react-router-dom";
import { mystore } from "../../../store";
import "./exploreCard.css";

const ExploreCard = ({ restaurant }) => {
  const navigate = useNavigate();
  const { menuName, rate, menuId } = restaurant;

  const addToCart = (e) => {
    if (mystore.getState()?.loggedin) {
      const menuItem = { qty: 1, ...restaurant };
      mystore.dispatch({ type: 'Add_To_Cart', payload: menuItem })
      alert("Added to Cart")
    } else {
      navigate("/login");
    }
  }

  return (
    <div key={menuId}>
      <div className="explore-card cur-po">
        <div className="explore-card-cover">
          <img src={"data:image/jpeg;base64,{image}"} alt={menuName} className="explore-card-img" />
          <div className="res-row">
            <span>{menuName}</span>
            <div className="res-name">
              <div className="res-price">Rs.{rate}</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button onClick={() => addToCart(restaurant)}>Add to Cart</button>
      </div>
    </div>


    //     <div className="explore-card cur-po">
    //         <div className="explore-card-cover">
    //             <img src="images/chickenlolipop.jpg"  className="explore-card-img" />
    //             <div className="res-row">
    //                 <span> chicken lolipop</span>
    //                 <div className="res-name">
    //                     <div className="res-price">Rs.250
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     <div>
    //         <button onClick={() => addToCart(restaurant)}>Add to Cart</button>
    //     </div>

    //     <div className="explore-card cur-po">
    //         <div className="explore-card-cover">
    //             <img src="images/chickenmasala.jpg"  className="explore-card-img" />
    //             <div className="res-row">
    //                 <span> chicken masala</span>
    //                 <div className="res-name">
    //                     <div className="res-price">Rs.300
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     <div>
    //         <button onClick={() => addToCart(restaurant)}>Add to Cart</button>
    //     </div>
    //     <div className="explore-card cur-po">
    //         <div className="explore-card-cover">
    //             <img src="images/dalTadaka.jpg"  className="explore-card-img" />
    //             <div className="res-row">
    //                 <span> Dal Tadaka</span>
    //                 <div className="res-name">
    //                     <div className="res-price">Rs.100
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     <div>
    //         <button onClick={() => addToCart(restaurant)}>Add to Cart</button>
    //     </div>
    // </div>





  )
}

export default React.memo(ExploreCard);