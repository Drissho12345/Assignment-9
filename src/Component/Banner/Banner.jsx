
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full rounded-2xl">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://static7.depositphotos.com/1010683/702/i/450/depositphotos_7025209-stock-photo-cement-factory-at-night.jpg" className="w-full lg:h-[500px]" />

                    <div className="text-rose-200 lg:pt-36 lg:pl-72 md:pt-36 md:pl-24 pl-[80px] pt-12 absolute">
                            <div className="font-bold text-[18px] md:text-6xl lg:text-7xl ">
                               <h1>Welcome To My <br /> <span className="text-red-400">Industrial</span> Project</h1>
                            </div>
                            <div className="pt-5">
                               <button className="btn bg-lime-500 ">Visite Now</button>
                            </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full lg:h-[500px]" />
                    <div className="text-rose-200 lg:pt-36 lg:pl-72 md:pt-36 md:pl-24 pl-[80px] pt-12 absolute">
                            <div className="font-bold text-[18px] md:text-6xl lg:text-7xl ">
                               <h1>Welcome To My <br /> <span className="text-red-400">Industrial</span> Project</h1>
                            </div>
                            <div className="pt-5">
                               <button className="btn bg-lime-500 ">Visite Now</button>
                            </div>
                        </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://media.istockphoto.com/id/488158158/photo/oil-refinery.jpg?s=612x612&w=0&k=20&c=8MfXbFZ_3rgUhW-QQMMvHpK2YAy7TLmTKvVqHoTr1_o=" className="w-full lg:h-[500px]" />
                    <div className="text-rose-200 lg:pt-36 lg:pl-72 md:pt-36 md:pl-24 pl-[80px] pt-12 absolute">
                            <div className="font-bold text-[18px] md:text-6xl lg:text-7xl ">
                               <h1>Welcome To My <br /> <span className="text-red-400">Industrial</span> Project</h1>
                            </div>
                            <div className="pt-5">
                               <button className="btn bg-lime-500 ">Visite Now</button>
                            </div>
                        </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://st2.depositphotos.com/1035449/11979/i/450/depositphotos_119791608-stock-photo-old-lighthouse-in-port-of.jpg" className="w-full lg:h-[500px]" />
                     
                    <div className="text-rose-200 lg:pt-36 lg:pl-72 md:pt-36 md:pl-24 pl-[80px] pt-12 absolute">
                            <div className="font-bold text-[18px] md:text-6xl lg:text-7xl ">
                               <h1>Welcome To My <br /> <span className="text-red-400">Industrial</span> Project</h1>
                            </div>
                            <div className="pt-5">
                               <button className="btn bg-lime-500 ">Visite Now</button>
                            </div>
                        </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Banner;






