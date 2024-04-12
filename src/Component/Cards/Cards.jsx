// import PropTyps from 'prop-types'
import { Link } from 'react-router-dom';
const Cards = ({data}) => {
    const {price, image, id, estate_title , description} = data;
    // console.log(data)
    return (
        <div>
            <div className='rounded-3xl  shadow border'>
                <img className='w-full rounded-3xl h-80 p-3' src={image} alt="" />
                <div className='pl-8 pr-8 pb-8'>
                    <p className='text-2xl font-bold'>{estate_title}</p>
                    <p className='pt-1 pb-1'>{description}</p>
                    <p className='pt-1 pb-1'><span className='font-bold'>Price:</span> {price}</p>
                    <Link to ={`/CardDetails/${id}`}>
                        <button className='btn bg-lime-500'>View Property</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Cards;