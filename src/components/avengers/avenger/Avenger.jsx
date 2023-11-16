 

 

const Avenger = ({avenger,handleClick}) => {
    const{name,image,role,age,salary,country} = avenger;
    return (
         
        <div className=" border-2 text-center p-4 space-y-4 bg-gray-200 rounded-lg">
            <img className=" rounded-full ml-16 md:ml-36 lg:ml-24" src={image} alt="" />
            <p className="text-2xl font-bold">Name : {name}</p>
            <p className="font-semibold">Title : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, porro ab temporibus recusandae aut ea, fugiat nisi   .</p>
                <div className="flex  font-bold justify-between">
                    <div >
                       <p>Role : {role}</p>
                       <p>Age : {age}</p>
                    </div>
                    <div>
                        <p>Salary : {salary}$</p>
                        <p>Country : {country}</p>
                    </div>
                </div>
                <button onClick={()=>handleClick(avenger,salary)} className="bg-sky-600 pl-4 pr-4 pt-2 pb-2 text-white font-bold rounded-lg">Buy</button>
        </div>
         
        
    );
};

export default Avenger;