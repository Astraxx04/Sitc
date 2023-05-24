import background from "../assets/background.jpg";

function Search() {
    return(
        <div className="bg-no-repeat bg-center bg-cover pb-8" style={{ backgroundImage: `url(${background})` }}>x
            <div className="lg:mx-72 lg:mt-48 bg-black bg-opacity-60 text-white lg:pb-2 md:mx-24 mx-5 mt-20">
                <p className="text-center lg:pt-8 lg:pb-2 lg:text-lg md:pt-6 md:pb-4 md:text-lg pt-3 pb-4 text-md">Book your Jungle Experiences along with Safaris & Local Activities</p>
                <div className="lg:mx-8 md:mx-6 mx-4 border border-dashed border-slate-500">
					<label className="p-2 text-[#ff9900]">
						<input type="radio" name="stype" id="type_1" value="1" checked></input>Fixed Tours
					</label>
					<label className="p-2 text-[#ff9900]">
						<input type="radio" id="type_2" name="stype" value="2"></input> Customized Tours
					</label>
				</div>
                <form className="lg:mx-8 md:mx-6 mx-4 lg:pb-8 md:pb-6 pb-8" action="" method="get">
                    <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 lg:gap-4 md:gap-4 gap-6">
                    <div className="lg:col-span-2 md:col-span-2 col-span-1">
                        <div className="lg:text-xl lg:pt-3 lg:pb-2 md:text-xl md:pt-3 md:pb-2 text-sm py-3">
                            <label className="" htmlFor="">Select Region</label>
                        </div>
                        <div className="text-black lg:text-lg md:text-lg text-sm">
                            <select className="lg:py-3 lg:px-2 w-full md:py-3 md:px-2 py-2 px-2 rounded-sm" name="place" id="place">
                                <option value="">Please select region from the list</option>
                                <option value="">Region 1</option>
                                <option value="">Region 2</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className="lg:text-xl lg:pt-3 lg:pb-2 md:text-xl md:pt-3 md:pb-2 text-sm py-3">
                            <label className="" htmlFor="">Start City</label>
                        </div>
                        <div className="text-black lg:text-lg md:text-lg text-sm">
                            <select className="lg:py-3 lg:px-2 w-full md:py-3 md:px-2 py-2 px-2 rounded-sm" name="city" id="city">
                                <option value="">Select City</option>
                                <option value="">City 1</option>
                                <option value="">City 2</option>
                            </select>
                        </div>
                    </div>
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 lg:gap-4 md:gap-4 gap-6">
                    <div className="col-span-1">
                        <div className="lg:text-xl lg:pt-3 lg:pb-2 md:text-xl md:pt-3 md:pb-2 text-sm py-3">
                            <label className="" htmlFor="">Checkin</label>
                        </div>
                        <div className="text-black lg:text-lg md:text-lg text-sm">
                            <input className="lg:py-2.5 lg:px-2 w-full md:py-2.5 md:px-2 py-1.5 px-2 rounded-sm" type="date" name="checkin" id="checkin"></input>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className="lg:text-xl lg:pt-3 lg:pb-2 md:text-xl md:pt-3 md:pb-2 text-sm py-3">
                            <label className="" htmlFor="">Number of Nights</label>
                        </div>
                        <div className="text-black lg:text-lg md:text-lg text-sm">
                            <select className="lg:py-3 lg:px-2 w-full md:py-3 md:px-2 py-2 px-2 rounded-sm" name="nights" id="nights">
                                <option value="">1 Night</option>
                                <option value="">2 Nights</option>
                                <option value="">3 Nights</option>
                            </select>
                        </div>
                    </div>

                    <div className="lg:col-span-1 md:col-span-1 col-span-2">
                        <div className="lg:text-xl lg:pt-3 lg:pb-2 md:text-xl md:pt-3 md:pb-2 text-sm pt-0 pb-3">
                            <label className="" htmlFor="">Travellers</label>
                        </div>
                        <div className="text-black lg:text-lg md:text-lg text-sm">
                            <select className="lg:py-3 lg:px-2 md:py-3 md:px-2 py-2 px-2 rounded-sm w-full" name="traveller" id="traveller">
                                <option value="">2 Adults, 1 Room</option>
                                <option value="">2 Adults, 2 Rooms</option>
                                <option value="">2 Adults, 1 Child, 1 Room</option>
                            </select>
                        </div>
                    </div>
                    </div>
                    <div className="lg:pt-8 md:pt-6 pt-4">
                        <a href="#/" className='bg-[#ff9900] text-white lg:text-xl lg:py-3 lg:px-3 md:text-lg md:py-2 md:px-2 text-md py-2 px-2 rounded-md'>Search Packages</a>
                    </div>
                </form>
            </div>

            



        </div>
    );
}

export default Search;