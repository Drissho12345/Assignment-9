
const UpdateProfile = () => {
    return (
        <div  className="lg:pl-[300px] mb-10">
            <div className="rounded-2xl  lg:w-[600px] p-5 bg-gray-300">
                <div>
                <h3 className="font-bold">Name:</h3>
                    <label className="input  input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Username" />
                    </label>
                </div>
                <div>
                <h3 className="font-bold">Photo URL:</h3>
                <label className="input input-bordered flex items-center gap-2 mb-4">
                    <input type="text" className="grow" placeholder="Input Photo URL" />
                </label>
                </div>
                <button className="btn bg-emerald-400 w-full">Update</button>
            </div>
        </div>
    );
};

export default UpdateProfile;