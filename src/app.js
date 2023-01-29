 import React from "react";
 import ReactDOM from "react-dom/client";
 import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import Slider from "./components/slider";


 const App = ()=>{
  return(
<>
<Header/>
<Slider/>
<Body/>
<Footer/>
</>
)
 };
const root= ReactDOM.createRoot(document.getElementById("root")); //create a root

 root.render(<App/>);
