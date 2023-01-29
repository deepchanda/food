import Productimg from "../assets/images/p1.png";

const deals=[
{
    id:'1',
    Image:Productimg,
    off:'15',
    restroName:'Kebab e Kolkata',
    offer:'6'
},
{
    id:'2',
    Image:Productimg,
    off:'20',
    restroName:'The Bridge',
    offer:'4'
},
{
    id:'3',
    Image:Productimg,
    off:'10',
    restroName:'Alfresco',
    offer:'10'
},
{
    id:'4',
    Image:Productimg,
    off:'60',
    restroName:'Zafran Biryani',
    offer:'20'
},

]
const FlashDeals =()=>{
    return (
        <>
        <div className="w-full max-w-screen-3xl mx-auto py-10 flex flex-row px-4">

{deals.map((restrodeals)=>(

<div className="basis-1/3 md:basis-1/3 mr-2 last:mr-0" id={restrodeals.id} key={restrodeals.id}>
            <div className="w-full mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl">
                <div className="md:shrink-0 relative overflow-hidden">
                    <div className="absolute z-40 bg-darkTangerine bottom-0 left-0 rounded-r-md rounded-br-none rounded-bl-md p-2 font-bold text-white">
                        <span className="text-5xl inline-block drop-shadow-sm">{restrodeals.off}</span>% off
                    </div>
                    <img className=" w-full object-contain" src={restrodeals.Image} alt=""/>
                </div>
    <div className="p-2 w-full">
      <div className="uppercase tracking-wide text-lg text-charcoal font-bold">{restrodeals.restroName}</div>
      <a href="#" class="inline-block mt-2 text-sm leading-tight bg-orange-200 p-2 rounded-md font-bold text-orange-800 ">{restrodeals.offer} Days Remaining</a>
    </div>
</div>

            </div>

))}
            


{/* 
            <div className="basis-1/3 md:basis-1/3">
            <div className="w-full mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl">
                <div className="md:shrink-0 relative overflow-hidden">
                    <div className="absolute z-40 bg-darkTangerine bottom-0 left-0 rounded-r-md rounded-br-none rounded-bl-md p-2 font-bold text-white">
                        <span className="text-5xl inline-block drop-shadow-sm">20</span>% off
                    </div>
                    <img className=" w-full object-contain" src={Productimg} alt=""/>
                    

                </div>
    <div className="p-2 w-full">
      <div className="uppercase tracking-wide text-lg text-charcoal font-bold">Greys Vage</div>
      <a href="#" class="inline-block mt-2 text-sm leading-tight bg-orange-200 p-2 rounded-md font-bold text-orange-800 ">6 Days Remaining</a>
    </div>
</div>

            </div> */}

            </div>
        
        </>





    );
};
export default FlashDeals;