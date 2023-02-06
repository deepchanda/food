import React  from 'react';
// import Productimg from "../assets/images/p1.png";
import {Restrodata} from '../components/carddata';
import {IMG_CDN_URL} from '../components/carddata';
// import { useContext } from "react";

 const RestroCard =()=>{
    return(
    <>
    {Restrodata.map((restrodeals)=>{
                return (
                    <div className="basis-1/4 max-sm:w-full px-2 mb-2 bg-white mb-4" id={restrodeals.data.id} key={restrodeals.data.id}>
            <div className="w-full mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl hover:shadow-xl">
                <div className="md:shrink-0 relative overflow-hidden">
                    <img className=" w-full object-contain max-sm:aspect-square" src={IMG_CDN_URL + restrodeals.data.cloudinaryImageId} alt=""/>
                   
                </div>
    <div className="p-2 w-full">
      <h2 className="uppercase tracking-wide text-lg text-charcoal font-bold">{restrodeals.data.name}</h2>
      <p className='text-sm text-ellipsis overflow-hidden' title={restrodeals.data.cuisines}>
        {restrodeals.data.cuisines.join(', ')}
        
        </p>
      <div className='w-full flex flex-row justify-between mt-3 border-b pb-3'>
                         <div className=" bg-orange-700 text-xs rounded-md py-1 px-2 text-white">
                         <i className='fa-solid fa-star mr-1'></i>{restrodeals.data.avgRating}
                    </div>
                    <p className='text-xs py-1 px-2'>{restrodeals.data.costForTwoString} </p>
                    <div className="text-xs bg-orange-500 rounded-md py-1 px-2 text-white">
                         <i className='fa-regular fa-clock mr-1'></i>{restrodeals.data.slaString}
                    </div>
                    </div>
      <span className="block text-center mt-2 text-sm leading-tight bg-orange-200 p-2 rounded-md text-orange-800">
     <i className='fa-solid fa-tag'></i> {restrodeals.data.aggregatedDiscountInfo.shortDescriptionList }
      </span>
         {/* <a href="#" className="inline-block mt-2 text-sm leading-tight bg-green-600 p-2 rounded-md font-bold text-white ">{offer} </a> */}
      
      {/* <a href="#" className="inline-block mt-2 text-sm leading-tight bg-orange-200 p-2 rounded-md font-bold text-orange-800 ">{offer} Days Remaining</a> */}
    </div>
</div>

</div>
                )
               }
         )
     }

</>
)
}
export default RestroCard;