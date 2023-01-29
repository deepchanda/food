const Sitefeatures = [
{   id: '1',
    icon: 'fa-location-dot',
    heading: 'Select location',
    smallText:'Choose the location where your food will be delivered.'
},
{
    id: '2',
    icon: '<i class="fa-solid fa-plate-utensils"></i>',
    heading: 'Choose order',
    smallText:'Check over hundreds of menus to pick your favorite food'
},
{
    id: '3',
    icon: '<i class="fa-solid fa-indian-rupee-sign"></i>',
    heading: 'Pay advanced',
    smallText:`It's quick, safe, and simple. Select several methods of payment`
},
{
    id: '4',
    icon: '<i class="fa-solid fa-pot-food"></i>',
    heading: 'Enjoy meals',
    smallText:'Food is made and delivered directly to your home.'
}

]
const Features = ()=>{
    return(
        <>
        <div className="w-full bg-white-smoke h-full">
            <div className="max-w-screen-3xl px-4 py-10 mx-auto text-center">
                <h2 className="text-4xl text-orange-600 font-bold">How does it work</h2>
                <div className="w-full flex flex-row mt-14">
                         {Sitefeatures.map((workdata)=>(
                            <div className="w-3/12 px-2" id={workdata.id} key={workdata.id}>
                              <i class="fa-solid fa-location-dot text-3xl text-orange-700"></i>
                              <h3 className="text-lg text-gray-600 font-semibold">{workdata.heading}</h3>
                             <p className="text-base text-gray-900">{workdata.smallText}</p>
                            </div>
                    )
                )
                }
                    
                </div>
            </div>
        </div>
        </>

    );
};
export default Features;