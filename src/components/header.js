import Logo from "../assets/images/logo.png";

const Head = () =>{
    return(
        <>
      <div className="w-full max-w-screen-3xl flex px-2 py-2 shadow-header bg-white mx-auto">
        <div className="w-1/6">
          <img src={Logo}></img>
        </div>
         <div className="w-4/6 text-center flex justify-center items-center">
            <p>
            <strong>
                Deliver to:
            </strong>
            <i className="fa-sharp fa-solid fa-location-dot mx-2 text-moon_yellow"></i>
            Current Location &nbsp;
             <strong>Mohammadpur Bus Stand, Dhaka</strong>
            </p>
        </div>
        <div className="w-1/6 flex justify-center items-center">
            <a href="#"><i className="fa-solid fa-magnifying-glass mr-1 text-amber-700"></i> <strong>Search Food</strong></a>
            <button className="bg-white shadow-md border-white-smoke border-solid text-black font-bold hover:text-white hover:bg-amber-700 rounded-md py-1 px-2 ml-4"><i className="fa-solid fa-right-to-bracket mr-1 align-middle"></i> Login</button>
        </div>
      </div>



        </>
   )
};
export default Head;