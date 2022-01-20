import React from "react";
import "./exploreCard.css";

const ExploreCard=({restaurant})=>{
    const name=restaurant?.info?.name?? "";
    const coverImg=restaurant?.info?.image?.url;
    const deliverytime=restaurant?.order?.deliveryTime;
    const rating=restaurant?.info?.rating?.rating_text;
    const costprice=restaurant?.info?.cfo?.text;
    const offers=restaurant?.bulkOffers??[];
    const discount=
    offers.length>1
    ?offers[1].text
    :offers.length===1
    ?offers[0].text
    :null;


    return (
    <div>
        <div className="explore-card cur-po">
            <div className="explore-card-cover">
                <img src={coverImg} alt={name} className="explore-card-img"/>
                <div className="delivery-time absolute-center">{deliverytime}</div>
                {discount && <div className="discount absolute-center">{discount}</div>}
                 <div className="res-row">
                    <div className="res-name">
                    {costprice && <div className="res-price">{costprice}</div>}   
                        {rating && <div className="res-rating absolute-center"> 
                            {rating} <i className="fi fi-rr-star absolute-center"></i>
                            </div>}
                         
                    </div>
                 </div>
                    
                </div>

            </div>


        </div>
    
    )

}

export default ExploreCard;