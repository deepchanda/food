import React from "react";
import ReactDOM from "react-dom/client";
import FlashDeals from "../components/flashdeals";
import Work from "../components/Work";
import FeaturedRestro from "../components/FeaturedRestaurants";
import Features from "../components/features";

const Body= ()=>{
return(
<>
 <div className="w-full mx-auto">
<FlashDeals/>
<Work/>
<FeaturedRestro/>
<Features/>
</div>
</>
);
};
export default Body;