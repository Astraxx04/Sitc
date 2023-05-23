import background from "../assets/background.jpg";

function Search() {
    return(
        <div className="bg-no-repeat bg-cover pb-8" style={{ backgroundImage: `url(${background})` }}>x
            <div className="mx-72 mt-48 bg-black bg-opacity-60 text-white pb-2">
                <p className="text-center pt-8 pb-2 text-lg">Book your Jungle Experiences along with Safaris & Local Activities</p>
                <div className="mx-8 border border-dashed border-slate-500">
					<label className="p-2 text-[#ff9900]">
						<input type="radio" name="stype" id="type_1" value="1" checked></input>Fixed Tours
					</label>
					<label className="p-2 text-[#ff9900]">
						<input type="radio" id="type_2" name="stype" value="2"></input> Customized Tours
					</label>
				</div>
                <form className="mx-8 pb-8" action="" method="get">
                    <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                        <div className="text-xl pt-3 pb-2">
                            <label className="" htmlFor="">Select Region</label>
                        </div>
                        <div className="text-black text-lg">
                            <select className="py-3 px-2 w-full" name="place" id="place">
                                <option value="">Please select region from the list</option>
                                <option value="">Region 1</option>
                                <option value="">Region 2</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className="text-xl pt-3 pb-2">
                            <label className="" htmlFor="">Start City</label>
                        </div>
                        <div className="text-black text-lg">
                            <select className="py-3 px-2 w-full" name="city" id="city">
                                <option value="">Select City</option>
                                <option value="">City 1</option>
                                <option value="">City 2</option>
                            </select>
                        </div>
                    </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1">
                        <div className="text-xl pt-3 pb-2">
                            <label className="" htmlFor="">Checkin</label>
                        </div>
                        <div className="text-black text-lg">
                            <input className="py-2 px-2 w-full" type="date" name="checkin" id="checkin"></input>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className="text-xl pt-3 pb-2">
                            <label className="" htmlFor="">Number of Nights</label>
                        </div>
                        <div className="text-black text-lg">
                            <select className="py-3 px-2 w-full" name="nights" id="nights">
                                <option value="">1 Night</option>
                                <option value="">2 Nights</option>
                                <option value="">3 Nights</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className="text-xl pt-3 pb-2">
                            <label className="" htmlFor="">Travellers</label>
                        </div>
                        <div className="text-black text-lg">
                            <select className="py-3 px-2 w-full" name="traveller" id="traveller"></select>
                        </div>
                    </div>
                    </div>
                    <div className="pt-8">
                        <a href="#/" className='bg-[#ff9900] text-white text-xl py-3 px-3 rounded-md'>Search Packages</a>
                    </div>
                </form>
            </div>

            



        </div>
    );
}

export default Search;