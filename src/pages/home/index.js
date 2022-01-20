import React, { useState } from "react";
import Footer from "../../component/common/footer";
import Header from "../../component/common/header";
import TabOptions from "../../component/common/tabOptions";
import Vegetarian from "../../component/Vegetarian";
import Nonvegetarian from "../../component/Nonvegetarian";

const HomePage=()=>
{
    const [activetab,setactivetab]=useState("Vegetarian");
    return <div> 
        <Header/>
        <TabOptions activetab={activetab} setactivetab={setactivetab}/>
       {getCorrectScreen(activetab)}
        <Footer/>
     </div>
}
     const getCorrectScreen=(tab)=>{
        switch(tab)
        {
            case "Vegetarian":
                return <div> <Vegetarian/></div>
            case "NonVegetarian":
                return <div><Nonvegetarian/></div>
        }

        
     }

export default HomePage;