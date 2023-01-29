import React  from 'react';
import Productimg from "../assets/images/p1.png";

const deals=[
{
    id:'1',
    Image:Productimg,
    rating:'4',
    restroName:'Kebab e Kolkata',
    mode:'6',
    time:'10 min.',
    off:'10',
    cuisine:'Indian, Chinese, Tandoor, South Indian, Arabian',
    price:'340'
},
{
    id:'2',
    Image:Productimg,
    rating:'5',
    restroName:'The Bridge',
    mode:'open',
    time:'35 min.',
    off:'14',
    cuisine:'Pizzas, Fast Food',
    price:'200'
},
{
    id:'3',
    Image:Productimg,
    rating:'5',
    restroName:'Alfresco',
    mode:'Open Now',
    time:'Fast',
    off:'20',
    cuisine:'Chinese, Indian',
    price:'140'
},
{
    id:'4',
    Image:Productimg,
    rating:'4',
    restroName:'Zafran Biryani',
    mode:'Closed',
    time:'40 min.',
    off:'60',
    cuisine:'Biryani, Mughlai, North Indian, Indian, Kebabs, Tandoor',
    price:'100'
},
{
    id:'5',
    Image:Productimg,
    rating:'3',
    restroName:`Hatari Restaurant (P) Ltd`,
    mode:'Open',
    time:'Fast',
    off:'19',
    cuisine:'Chinese, Indian',
    price:'800'
},
{
    id:'6',
    Image:Productimg,
    rating:'3.6',
    restroName:'Swade Ahlade',
    mode:'Open',
    time:'30 min.',
    off:'10',
    cuisine:'Chinese, Continental, North Indian',
    price:'300'
},
{
    id:'7',
    Image:Productimg,
    rating:'4.7',
    restroName:'BHOJAN RASIK',
    mode:'closed',
    time:'Fast',
    off:'40',
    cuisine:'Indian, Desserts',
    price:'840'
},
{
    id:'8',
    Image:Productimg,
    rating:'5',
    restroName:'Owl Bowl',
    mode:'Open',
    time:'Fast',
    off:'10',
    cuisine:'Burgers, Snacks, Fast Food',
    price:'650'
},

]


const FeaturedRestro= ()=>{
return(
    <>
      <div className="max-w-screen-3xl px-4 py-10 mx-auto ">
                <h2 className="text-4xl text-orange-600 font-bold text-center">Featured Restaurants</h2>
                <div className="w-full flex flex-row mt-6 flex-wrap justify-between">
               {deals.map((restrodeals)=>(
<div className="basis-1/4 md:basis-1/4 px-2 mb-2 bg-white mb-4" id={restrodeals.id} key={restrodeals.id}>
            <div className="w-full mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl hover:shadow-xl">
                <div className="md:shrink-0 relative overflow-hidden">
                    <img className=" w-full object-contain" src={restrodeals.Image} alt=""/>
                   
                </div>
    <div className="p-2 w-full">
      <h2 className="uppercase tracking-wide text-lg text-charcoal font-bold">{restrodeals.restroName}</h2>
      <p className='text-sm text-ellipsis overflow-hidden' title={restrodeals.cuisine}>{restrodeals.cuisine}</p>
      <div className='w-full flex flex-row justify-between mt-3 border-b pb-3'>
                         <div className=" bg-orange-700 text-xs rounded-md py-1 px-2 text-white">
                         <i class="fa-solid fa-star mr-1"></i>{restrodeals.rating}
                    </div>
                    <p className='text-xs py-1 px-2'><i class="fa-solid fa-indian-rupee-sign mr-1"></i> {restrodeals.price} FOR TWO </p>
                    <div className="text-xs bg-orange-500 rounded-md py-1 px-2 text-white">
                         <i class="fa-regular fa-clock mr-1"></i>{restrodeals.time}
                    </div>
                    </div>
      <span className="block text-center mt-2 text-sm leading-tight bg-orange-200 p-2 rounded-md text-orange-800">
     <i class="fa-solid fa-tag"></i> {restrodeals.off}% off | Use TRYNEW
      </span>
         {/* <a href="#" className="inline-block mt-2 text-sm leading-tight bg-green-600 p-2 rounded-md font-bold text-white ">{restrodeals.offer} </a> */}
      
      {/* <a href="#" className="inline-block mt-2 text-sm leading-tight bg-orange-200 p-2 rounded-md font-bold text-orange-800 ">{restrodeals.offer} Days Remaining</a> */}
    </div>
</div>

</div>

))}
            </div>
            </div>
    </>
)

}
export default FeaturedRestro;