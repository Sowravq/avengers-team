import Buyman from "./buy-man/Buyman";

 const Buy = ({addAvenger,totalCost,totalReaming}) => {
    return (
        <div className=" w-full md:w-2/4 lg:w-2/4 bg-lime-100 text-center">
            <h2 className="text-2xl font-bold bg-red-500 p-2">Buy Avenger  Member..</h2>
            <p className="text-xl font-semibold ">Remaning : {totalReaming}$</p>
            <p className="text-xl font-semibold">Total Const : {totalCost}$ </p>
            <p className="text-2xl font-bold">Count : {addAvenger.length}</p>
            <div>
                {
                    addAvenger.map((avenger ,idx)=><Buyman key={idx} avenger={avenger}></Buyman>)
                }
            </div>
        </div>
    );
};

export default Buy;