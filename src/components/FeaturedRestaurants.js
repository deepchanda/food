import React  from 'react';
// import RestroCard from '../components/restroCard';
import RestroCard from '../components/restroCard';

const FeaturedRestro= ()=>{
return(
    <>
      <div className="max-w-screen-3xl px-4 py-10 max-sm:px-1 mx-auto ">
                <h2 className="text-4xl text-orange-600 font-bold text-center">Featured Restaurants</h2>
                <div className="w-full flex flex-row max-sm:flex-col mt-6 flex-wrap justify-start">
                    <RestroCard/>
               
            </div>
            </div>
    </>
)

}
export default FeaturedRestro;