 import { useState } from 'react'
import './App.css'
import Avengers from './components/avengers/Avengers'
import Buy from './components/buy/Buy'
 
import Heder from './components/heder/Heder'
 

function App() {
   const [addAvenger,setAddAvenger]=useState([]);
   const [totalCost,setTotalCost] =useState(0);
   const [totalReaming,setReaming] = useState(20000);
  const handleClick =(avenger)=>{
  const isExsit = addAvenger.find(actor=> actor.id === avenger.id);
  console.log(isExsit);
     let count = avenger.salary;
   if(isExsit){
    return alert('Alread Added')
   }
   else{
    addAvenger.forEach(salary=>{
        count = count + salary.salary
         console.log(count);
    });
    const totalReamaings = 20000 -count;
    if(count>20000){
      return alert('balence low')
    }
    else{
      setTotalCost(count);
      setReaming(totalReamaings)
      const newData = [...addAvenger,avenger];
      setAddAvenger(newData);
    }
    
   }
    
    
    
}

  return (
    <>
       
       <Heder></Heder>
       <div className='flex flex-col md:flex-row lg:flex-row'>
       <Avengers handleClick={handleClick}></Avengers>
          <Buy addAvenger={addAvenger} totalCost={totalCost} totalReaming={totalReaming} ></Buy>
           
       </div>
    </>
  )
}

export default App
