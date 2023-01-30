import Quickdelivery from '../assets/images/quickdelivery.png';
import Tracing from '../assets/images/tracing.png';
import Discounts from '../assets/images/discounts.png';
import Mobapp from '../assets/images/Mobapp.png';
import Appstore from '../assets/images/App_Store.png';
import Googleplay from '../assets/images/Google_Play.png';
const Sitefeatures = [
{   id: '1',
    icon: Discounts ,
    heading: 'Daily Discounts'
},
{
    id: '2',
    icon: Tracing,
    heading: 'Live Tracing'
},
{
    id: '3',
    icon: Quickdelivery,
    heading: 'Quick Delivery',
}

]
const Features = ()=>{
    return(
        <>
        <div className="w-full bg-light_grayish_orange h-full py-5 pb-0">
            <div className="max-w-screen-3xl px-4 py-10 mx-auto">
                {/* <h2 className="text-4xl text-orange-600 font-bold">How does it work</h2> */}
                <div className="w-3/4 flex flex-row justify-between  bg-white rounded-xl p-9 shadow-xl mx-auto max-sm:w-full max-sm:flex-col">
                         {Sitefeatures.map((workdata)=>(
                            <div className="w-4/12 px-4 flex flex-row text-left justify-items-center border-r-2 divide-solid border-r-white-smoke last:border-r-0 max-sm:w-full max-sm:flex-col max-sm:text-center first:pl-0 last:pr-0" id={workdata.id} key={workdata.id}>
                             <img src= {workdata.icon} className='mr-4 w-20 object-contain max-sm:mr-0 max-sm:mb-4'/>
                              <h3 className="text-3xl text-orange-600 font-bold self-center max-sm:mb-4 max-sm:last-child:mb-0 max-xl:text-4xl max-[1920px]:text-4xl">{workdata.heading}</h3>
                            </div>
                    )
                )
                }
                </div>
            </div>
             <div className="max-w-screen-3xl px-4  mx-auto flex flex-row">
                  <div className="w-6/12">
                 <img src= {Mobapp} className='w-full object-contain object-right-bottom'/>
                  </div>
                   <div className="w-6/12 pt-16">
                    <h4 className='text-4xl text-orange-700 font-bold'>
                        Install the app
                    </h4>
                    <p className='text-gray-700 text-lg mt-9'>
                        It's never been easier to order food. Look for the finest discounts and <br/>you'll be lost in a world of delectable food.
                    </p>
                    <a href='#' className='inline-block mr-3 shadow-lg rounded-md mt-6 '>
                        <img src={Appstore}></img>
                    </a>
                    <a href='#' className='inline-block shadow-lg rounded-md mt-6'>
                        <img src={Googleplay}></img>
                    </a>
                  </div>
             </div>
        </div>
        </>

    );
};
export default Features;