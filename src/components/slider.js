import food from "../assets/images/food.png";

const Slider = ()=>{
    return(
        <>
       <div className="w-full max-w-screen-3xl shadow-slider slider mx-auto flex ">
<div className="w-8/12 py-32 pl-4 box-border">
    <h1 className="text-5xl font-bold text-white">
        Are you starving?
        </h1>
        <p className="text-xs leading-10">
            Within a few clicks, find meals that are accessible near you
        </p>
        <div className="w-3/4 rounded-md bg-white p-3 shadow-header">
           <div className="w-full border-b-2 border-slate-200 border-dotted pb-2">
                <button className="bg-white hover:bg-orange-200 px-6 py-2 rounded-md font-bold hover:text-orange-800 focus:bg-orange-200 focus:text-orange-800 focus:font-bold mr-4">
             <i class="fa-solid fa-motorcycle mr-2"></i> Delivery
                </button>
                  <button className="bg-white hover:bg-orange-200 px-6 py-2 rounded-md font-bold hover:text-orange-800 focus:bg-orange-200 focus:text-orange-800 focus:font-bold">
             <i class="fa-solid fa-bag-shopping mr-2"></i> Pickup
                </button>
           </div>
           <div className="w-full pt-3">
            <form className="flex text-base">
                <input type="text" placeholder="Enter Your Address" className="bg-white-smoke drop-shadow-md p-3 w-8/12 mr-2 rounded-md border border-slate-300 hover:border-slate-400 focus:border-slate-400 focus-visible:border-slate-400"></input>
                <button className="bg-amber-600 text-white font-bold hover:bg-amber-700 rounded-md py-3 px-4 w-4/12 "><i class="fa-solid fa-magnifying-glass mr-2"></i> Find Food</button>
            </form>
        </div>
        </div>
        

</div>
<div className="w-4/12 box-border flex content-end justify-end pr-4 pt-11 ">
    <img src={food} className="object-contain object-right-bottom justify-self-end"></img>
</div>
       </div>
        </>
    );
};
export default Slider; 