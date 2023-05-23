import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Pricing() {
    return(
        <div className="lg:mx-72 pb-8">
            <p className="text-center font-sans text-2xl">Pricing & Plans</p>
            <p className="text-center font-normal">Special offer if you sign up before Sep-20,2022</p>
            <div className="grid grid-cols-2 gap-16 pt-8">
                <div className="p-2 border-2 rounded-sm">
                    <ul>
                        <li className="text-center bg-[#ffe7ce] pt-6 pb-4 text-2xl"><b>VIRTUAL LITE</b></li>
                        <li className="text-center bg-[#fffaf2] py-2">1 User</li>
                        <li class="text-left bg-[#ffe7ce] py-2 pl-20"><FontAwesomeIcon className='text-[#ff9900] pr-2' icon={faStar} />Free Import of Hotel Data/Rates</li>
                        <li class="text-left bg-[#fffaf2] py-2 pl-20"><FontAwesomeIcon className='text-[#ff9900] pr-2' icon={faStar} />Automatic Price Costing (Child policy supported)</li>
                        <li class="text-left bg-[#ffe7ce] py-2 pl-20"><FontAwesomeIcon className='text-[#ff9900] pr-2' icon={faStar} />Cost breakup</li>
                        <li class="text-left bg-[#fffaf2] py-2 pl-20"><FontAwesomeIcon className='text-[#ff9900] pr-2' icon={faStar} />Itinerary Builder</li>
                        <li class="text-left bg-[#ffe7ce] py-2 pl-20"><FontAwesomeIcon className='text-[#ff9900] pr-2' icon={faStar} />Itinerary PDF Builder</li>
                        <li class="text-left bg-[#fffaf2] py-2 pl-20"><FontAwesomeIcon className='text-[#ff9900] pr-2' icon={faStar} />Itinerary Paper Output</li>
                        <li class="text-left bg-[#ffe7ce] py-2 pl-20"><FontAwesomeIcon className='text-[#ff9900] pr-2' icon={faStar} />Dynamic Map based on itinerary</li>
                        <li class="text-left bg-[#fffaf2] py-2 pl-20"><FontAwesomeIcon className='text-[#ff9900] pr-2' icon={faStar} />All type of seasons supported</li>
                        <li class="text-left bg-[#ffe7ce] py-2 pl-20"><FontAwesomeIcon className='text-[#ff9900] pr-2' icon={faStar} />Itinerary comparisons with cost </li>
                        <li class="text-left bg-[#fffaf2] py-2 pl-20"><FontAwesomeIcon className='text-[#ff9900] pr-2' icon={faStar} />Share option via whatsapp & email</li>						
                        <li class="text-left bg-[#ffe7ce] py-2 pl-20"><FontAwesomeIcon className='text-[#ff9900] pr-2' icon={faStar} />Automatic booking voucher</li>
                        <li class="text-left bg-[#fffaf2] py-2 pl-20"><FontAwesomeIcon className='text-[#ff9900] pr-2' icon={faStar} />Multip Language itinerary support</li>
                        <li class="text-left bg-[#ffe7ce] py-2 pl-20"><FontAwesomeIcon className='text-[#ff9900] pr-2' icon={faStar} />Mobile Version</li>
                        <li className="bg-[#fffaf2] px-6 text-center font-semibold">Start your 60 days free trial. No cancellation fees. No credit card required!</li>
                        <li className="bg-[#ffe7ce] text-center py-4"><a href="#/" className='bg-[#ff9900] text-white py-3 px-3 rounded-md'>Signup For Free!</a></li>
                    </ul>
                </div>
                <div className="p-2 border-2 rounded-sm">
                    <ul>
                        <li className="text-center bg-[#a5d4a4] pt-6 pb-4 text-2xl"><b>VIRTUAL ENTERPRISE</b></li>
                        <li className="text-center bg-[#e1f0e0] py-2">5 Users</li>
                        <li class="text-left bg-[#a5d4a4] py-2 pl-20"><FontAwesomeIcon className='text-[#ff9900] pr-2' icon={faStar} />Free Import of Hotel Data/Rates</li>
                        <li class="text-left bg-[#e1f0e0] py-2 pl-20"><FontAwesomeIcon className='text-[#ff9900] pr-2' icon={faStar} />Automatic Price Costing (Child policy supported)</li>
                        <li class="text-left bg-[#a5d4a4] py-2 pl-20"><FontAwesomeIcon className='text-[#ff9900] pr-2' icon={faStar} />Cost breakup</li>
                        <li class="text-left bg-[#e1f0e0] py-2 pl-20"><FontAwesomeIcon className='text-[#ff9900] pr-2' icon={faStar} />Itinerary Builder</li>
                        <li class="text-left bg-[#a5d4a4] py-2 pl-20"><FontAwesomeIcon className='text-[#ff9900] pr-2' icon={faStar} />Itinerary PDF Builder</li>
                        <li class="text-left bg-[#e1f0e0] py-2 pl-20"><FontAwesomeIcon className='text-[#ff9900] pr-2' icon={faStar} />Itinerary Paper Output</li>
                        <li class="text-left bg-[#a5d4a4] py-2 pl-20"><FontAwesomeIcon className='text-[#ff9900] pr-2' icon={faStar} />Dynamic Map based on itinerary</li>
                        <li class="text-left bg-[#e1f0e0] py-2 pl-20"><FontAwesomeIcon className='text-[#ff9900] pr-2' icon={faStar} />All type of seasons supported</li>
                        <li class="text-left bg-[#a5d4a4] py-2 pl-20"><FontAwesomeIcon className='text-[#ff9900] pr-2' icon={faStar} />Itinerary comparisons with cost </li>
                        <li class="text-left bg-[#e1f0e0] py-2 pl-20"><FontAwesomeIcon className='text-[#ff9900] pr-2' icon={faStar} />Share option via whatsapp & email</li>						
                        <li class="text-left bg-[#a5d4a4] py-2 pl-20"><FontAwesomeIcon className='text-[#ff9900] pr-2' icon={faStar} />Automatic booking voucher</li>
                        <li class="text-left bg-[#e1f0e0] py-2 pl-20"><FontAwesomeIcon className='text-[#ff9900] pr-2' icon={faStar} />Multip Language itinerary support</li>
                        <li class="text-left bg-[#a5d4a4] py-2 pl-20"><FontAwesomeIcon className='text-[#ff9900] pr-2' icon={faStar} />Mobile Version</li>
                        <li className="bg-[#e1f0e0] px-6 text-center font-semibold">Start your 60 days free trial. No cancellation fees. No credit card required!</li>
                        <li className="bg-[#a5d4a4] text-center py-4"><a href="#/" className='bg-[#ff9900] text-white py-3 px-3 rounded-md'>Signup For Free!</a></li>
                    </ul>
                </div>
                
            
            </div>
        </div>
    );
}

export default Pricing;