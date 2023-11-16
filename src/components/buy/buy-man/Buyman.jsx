

const Buyman = ({avenger}) => {
    const {image,name}=avenger;
    return (
        <div className="flex justify-between items-center border-4  rounded-lg p-2 bg-orange-500">
             <div>
                 <img className="w-20 rounded-full" src={image} alt="" />
             </div>
             <div>
                 <h2 className="text-2xl font-bold">{name}</h2>
             </div>
        </div>
    );
};

export default Buyman;