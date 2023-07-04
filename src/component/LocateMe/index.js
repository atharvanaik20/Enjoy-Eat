import React from "react";

const LocateMe=()=>{
    const [latitude,setLatitude]=React.useState('');
    const[longitude,setLogitute]=React.useState('');

React.useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
        setLatitude(position.coords.latitude);
        setLogitute(position.coords.longitude);

    })

    
})
return (
    <div className="container">
      <h1>My Current Location:</h1>
      <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p>
    </div>
  );
}

export default LocateMe;