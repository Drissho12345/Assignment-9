import { Link, useLoaderData, useParams } from "react-router-dom";
const CardDetails = () => {
    const allCards = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const user = allCards.find((item) => item.id == idInt);
    const {image,description,price,status,area,location,facilities,segment_name, estate_title} = user;
    return (
        <div className="grid border mb-10 mt-5 rounded-2xl shadow lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2">
            <div>
               <img className="p-4 md:w-full h-96" src={image} alt="" />
            </div>
            <div className="p-5">
                <h1 className="text-2xl font-bold">{estate_title}</h1>
                <p className="pb-2 pt-2">{description}</p>
                <hr />
                <div className="flex gap-14 pb-2 pt-2">
                    <p><span># </span>{segment_name}</p>
                    <p><span># </span>{status}</p>
                </div>
                <p className="pb-2 pt-2"><span className="font-bold">Location: </span>{location}</p>
                <p className="pb-2 pt-2"><span className="font-bold">Facilities: </span>{facilities}</p>
                <div className="flex gap-16 pb-2 pt-2">
                   <p><span className="font-bold">Price: </span>{price}</p>
                   <p><span className="font-bold">Area: </span>{area}</p>
                </div>
                
                <div className="pt-5">
                <Link to={"/"}>
                  <button className="btn bg-lime-500 ">Go Back</button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;