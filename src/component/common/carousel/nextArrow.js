import React from "react";

const NextArrow=(props)=>{
    const {className,style,onclick}=props;
   return (
   <div className={className}
   style={{...style,borderRadius:'50%',background:'white',
   display:'flex',
   justifyContent:'center',
   alignItems:'center',
   padding:'4px'}}
   onclick={onclick}
   >


   </div>
   )
}

export default NextArrow;