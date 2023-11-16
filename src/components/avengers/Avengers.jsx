import { useEffect } from "react";
import { useState } from "react";
import Avenger from "./avenger/Avenger";

 const Avengers = ({handleClick}) => {

    const [avengers , setAvengers]=useState([]);
      
    
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setAvengers(data))
    },[])
     
    
     
    return (
        <main className=" ">
            <h1 className="text-center text-3xl font-bold mt-5"> Collect Avenger Member!</h1>
              <h2 className=" text-center text-xl font-bold ">Avenger Member : {avengers.length}</h2>
                <div className=" ">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mx-10 ">
                {
                    avengers.map(avengers => <Avenger key={avengers.id} avenger={avengers} handleClick={handleClick} ></Avenger>)
                }
               </div>
               
                </div>
        </main>
    );
};

export default Avengers;