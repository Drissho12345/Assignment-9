// import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import Banner from './../Banner/Banner';
import Cards from '../Cards/Cards';
const Card = () => {
    // const biodata = useLoaderData();
    // const {id} = useParams();
    // const idInt = parseInt(id);
    // const details = biodata.find((item) => item.id === idInt) 
    // console.log(details)

    const [books,setBooks] = useState([]);

    useEffect(()=>{
        fetch('industrial.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[]);
    return (
        <div>
            <Banner></Banner>
            
            <div>
                <div className='text-center text-4xl font-bold p-5'>
                    <h1>Estate Section</h1>
                </div>
                <div className='text-center text-[17px] mb-12'>
                    <p>An industrial estate is a place where the required facilities and factory accommodation are provided by the  <br /> government to the entrepreneurs to establish their industries there.</p>
                </div>
            </div>
            <div className='grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8'>
                {
                    books.map(data => <Cards key={data.id} data={data}></Cards>)
                }
            </div>
            
        </div>
    );
};

export default Card;