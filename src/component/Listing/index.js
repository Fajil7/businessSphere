import React from "react";

import './index.css'

function Listing() {
    return(
        <section id="home">
            <div>
                <img
                    src="https://img.freepik.com/premium-photo/close-up-woman-s-hand-is-writing-paper_85574-4460.jpg?w=840"
                    className="listing-form-img"
                    alt="FormImage"
                />
            </div>
            <div className="form-content-container">
                <div className="heading-text-container">
                    <h1 className="listing-heading">Listing Form</h1>
                    <p className="text">Please Fill the Form Carefully.Informations shared by you is important for your Credential & Directory listing.</p>
                </div>
                <form className="listing-form-container">
                    <div className="two-list-input-container">
                        <div className="label-input-container">
                            <label className="list-label">Name*</label>
                            <br/>
                            <input type="text" placeholder="Name" required className="list-input"/>
                        </div>
                        <div className="label-input-container">
                            <label className="list-label">Gender*</label>
                            <br/>
                            <select className="list-input">
                                <option className="option-element">Select Your Gender</option>
                                <option className="option-element">Male</option>
                                <option className="option-element">Female</option>
                                <option className="option-element">other</option>
                            </select>
                        </div>
                    </div>
                    <div className="two-list-input-container">
                        <div className="label-input-container">
                            <label className="list-label">WhatsApp No.*</label>
                            <br/>
                            <input type="text" placeholder="Name" required className="list-input"/>
                        </div>
                        <div className="label-input-container">
                                <label className="unrequired-label">Alternate Contact No.</label>
                            <br/>
                            <input type="text" required className="list-input"/>
                        </div>
                    </div>
                    <div className="single-frame-input-container">
                        <div className="single-input-container">
                            <label className="unrequired-label">Email ID</label>
                            <br/>
                            <input type="text" required className="single-list-input"/>
                        </div>
                    </div>
                    <div className="two-list-input-container">
                        <div className="label-input-container">
                            <label className="list-label">Date of Birth*</label>
                            <br/>
                            <input type="date" placeholder="Name" required className="list-input"/>
                        </div>
                        <div className="label-input-container">
                                <label className="unrequired-label">Date of Marriage Anniversary</label>
                            <br/>
                            <input type="date" required className="list-input"/>
                        </div>
                    </div>
                    <div className="two-list-input-container">
                        <div className="blood-input-container">
                            <label className="list-label">Blood Group*</label>
                            <br/>
                            <select className="blood-input">
                            <option></option>
                                <option className="option-element">A+</option>
                                <option className="option-element">A-</option>
                                <option className="option-element">B+</option>
                                <option className="option-element">B-</option>
                                <option className="option-element">AB+</option>
                                <option className="option-element">AB-</option>
                                <option className="option-element">O+</option>
                                <option className="option-element">O-</option>
                            </select>
                        </div>
                        <div className="area-input-container">
                            <label className="unrequired-label">Interest Area</label>
                            <br/>
                            <select className="area-input">
                                <option></option>
                                <option className="option-element">Business Only</option>
                                <option className="option-element">Charity and Other National/Social Cause</option>
                                <option className="option-element">Parties, get-togethers & such informal meets</option>
                                <option className="option-element">Business, Charity and Other National/Social Cause</option>
                                <option className="option-element">Business and Parties, get-togethers & such informal meets</option>
                                <option className="option-element">Charity, National/Social Cause & Parties, Get-togethers, informal meets</option>
                                <option className="option-element">Business, Charity and Get-togethers, Parties or informal meets</option>
                                
                            </select>
                        </div>
                    </div>
                    <div className="two-list-input-container">
                        <div className="label-input-container">
                            <label className="unrequired-label">Business Entity Name</label>
                            <br/>
                            <input type="text"   className="list-input"/>
                        </div>
                        <div className="label-input-container">
                            <label className="list-label">Business Category*</label>
                            <br/>
                            <select className="list-input">
                                <option className="option-element"></option>
                                <option className="option-element">Accounting Services</option>
                                <option className="option-element">Accupuncture & Accupressure</option>
                                <option className="option-element">Administrative Services</option>
                                <option className="option-element">Advertising & Marketing (Other)</option>
                                <option className="option-element">Agriculturists & Agronomist</option>
                                <option className="option-element">Alternative Wellness (Products)</option>
                                <option className="option-element">Aluminium Profiles</option>
                                <option className="option-element">Animals (Other)</option>
                                <option className="option-element">Aquarium/Fish</option>
                                <option className="option-element">Architectural & Engineering Services</option>
                                <option className="option-element">Art & Entertainment (Other)</option>
                                <option className="option-element">Art Dealer/Gallery Owner</option>
                                <option className="option-element">Artist</option>
                                <option className="option-element">Asset Finance</option>
                                <option className="option-element">Astrologer/ Astrologist/ Numerologists/ Palmist</option>
                                <option className="option-element">Auditor (Chartered Accountants)</option>
                                <option className="option-element">Auto Glass</option>
                                <option className="option-element">Auto/Car Body Shop/ Repair</option>
                                <option className="option-element">Auto/Car Parts & Accessories</option>
                                <option className="option-element">Auto/Car Rental/Leasing</option>
                                <option className="option-element">Auto/Car Sales</option>
                                <option className="option-element">Bakeries</option>
                                <option className="option-element">Books & Publication Reseller</option>
                                <option className="option-element">Bricklayer/Stonemason</option>
                                <option className="option-element">Builder/General Contractor</option>
                                <option className="option-element">Building Materials Reseller</option>
                                <option className="option-element">Bulk SMS, WhatsApp & Email Reseller</option>
                                <option className="option-element">Business Advisor/ Consultant</option>
                                <option className="option-element">Business Financing</option>
                                <option className="option-element">Business License Consultancy</option>
                                <option className="option-element">Business Loan</option>
                                <option className="option-element">Buying Agent</option>
                                <option className="option-element">Car & Motorcycle (Other)</option>
                                <option className="option-element">Carpenter</option>
                                <option className="option-element">Carpet- Upholstery Cleaner</option>
                                <option className="option-element">Caterer</option>
                                <option className="option-element">CCTV & Other Security Survillance</option>
                                <option className="option-element">Cement/Concrete Reseller</option>
                                <option className="option-element">Chemical Products</option>
                                <option className="option-element">Child Specialists/ Paediatrics</option>
                                <option className="option-element">Chiropractor</option>
                                <option className="option-element">Chocolatier</option>
                                <option className="option-element">Cleaning Products</option>
                                <option className="option-element">Cleaning Service</option>
                                <option className="option-element">Clothing Accessories Retailer</option>
                                <option className="option-element">Cloud Kitchen</option>
                                <option className="option-element">Cloud Services (Data & Digital)</option>
                                <option className="option-element">Commercial Vehicle Dealers</option>
                                <option className="option-element">Company Secretary</option>
                                <option className="option-element">Computer Repairs & Accessories</option>
                                <option className="option-element">Computer Training</option>
                                <option className="option-element">Consumer Loan</option>
                                <option className="option-element">Copywriter/ Content Writer</option>
                                <option className="option-element">Corporate Events</option>
                                <option className="option-element">Corporate Gifting</option>
                                <option className="option-element">Corrugated Boxes</option>
                                <option className="option-element">Cosmetics/Skin Care</option>
                                <option className="option-element">Counselor/Psychotherapist</option>
                                <option className="option-element">Courier</option>
                                <option className="option-element">Dance School/ Classes/ Trainer/ Professional Dancer</option>
                                <option className="option-element">Data Security & Recovery</option>
                                <option className="option-element">Demolition Contractor</option>
                                <option className="option-element">Dentist/ Orthodontist/ Dental Clinic</option>
                                <option className="option-element">Diamonds- Gold Jewellers</option>
                                <option className="option-element">Digital Coach/ Trainer</option>
                                <option className="option-element">Disc Jockey (DJ)</option>
                                <option className="option-element">Doctor/Physician</option>
                                <option className="option-element">Dog Trainer</option>
                                <option className="option-element">Dry Cleaning/Laundry (Personal)</option>
                                <option className="option-element">Dry Fruits & Exotic Fruits Seller</option>
                                <option className="option-element">Eating Joints including Shakes & Juice Parlour</option>
                                <option className="option-element">Education Counselling/ Admission Consultant</option>
                                <option className="option-element">Education Services/ Classes</option>
                                <option className="option-element">Electrical Accessories & Hardware</option>
                                <option className="option-element">Electrical Contractor</option>
                                <option className="option-element">Electrical Equipment Manufacture</option>
                                <option className="option-element">Electrical Products Dealers (Switches- Boards- Sockets)</option>
                                <option className="option-element">Electrical Tools & Equipments</option>
                                <option className="option-element">Electrician - Commercial</option>
                                <option className="option-element">Electricity & Gas Dealers</option>
                                <option className="option-element">Electronics Retailer</option>
                                <option className="option-element">Elevators</option>
                                <option className="option-element">Embroidery</option>
                                <option className="option-element">Employment/Labor Law Compliance</option>
                                <option className="option-element">Energy Consulting</option>
                                <option className="option-element">ENT Practitioner/ Doctor</option>
                                <option className="option-element">Environmental Products/ Services</option>
                                <option className="option-element">ERP Software (Reseller)</option>
                                <option className="option-element">Event Rentals</option>
                                <option className="option-element">Event Venue/Room Rental</option>
                                <option className="option-element">Factory License Consultancy</option>
                                <option className="option-element">Fences & Area Security (Civil)</option>
                                <option className="option-element">Feng Shui- Tarot card</option>
                                <option className="option-element">Fine/ Fashion/ Imitation Jewelry</option>
                                <option className="option-element">Fire Protection</option>
                                <option className="option-element">Fireplace & Oven Builder</option>
                                <option className="option-element">Flooring Manufacture & Retail</option>
                                <option className="option-element">Flooring Services (Tile & Marble Mistri)</option>
                                <option className="option-element">Florist</option>
                                <option className="option-element">Food & Beverage (Other)</option>
                                <option className="option-element">Food Products (Reseller)</option>
                                <option className="option-element">Foreign Currency Exchange</option>
                                <option className="option-element">Funeral Planning/Services</option>
                                <option className="option-element">Furniture Manufacturer & Retailer</option>
                                <option className="option-element">Furniture Repair/Upholstery</option>
                                <option className="option-element">Garage Doors</option>
                                <option className="option-element">Garments Store (Retail & Wholesale)</option>
                                <option className="option-element">General Insurance</option>
                                <option className="option-element">Glass</option>
                                <option className="option-element">Graphic Designer & Digital Marketing</option>
                                <option className="option-element">Grooming (Look Enhancement)</option>
                                <option className="option-element">Hair Color & Style Consultant</option>
                                <option className="option-element">Handmade Giftings including Paintings</option>
                                <option className="option-element">Hardware & Architectural Fittings</option>
                                <option className="option-element">Health & Wellness Products</option>
                                <option className="option-element">Health & Wellness Services</option>
                                <option className="option-element">Health Coach (Personalised Home Service)</option>
                                <option className="option-element">Health Facility/Gym/Club</option>
                                <option className="option-element">Health Insurance</option>
                                <option className="option-element">Hearing/Audiology</option>
                                <option className="option-element">Home Appliance Sales & Service</option>
                                <option className="option-element">Home Furnishings</option>
                                <option className="option-element">Hotel- Resort & Lodge</option>
                                <option className="option-element">Housing Loan & Education Loan</option>
                                <option className="option-element">HVAC - Heating & Air</option>
                                <option className="option-element">Hypnotherapist</option>
                                <option className="option-element">Immigration Law</option>
                                <option className="option-element">In-Home Care</option>
                                <option className="option-element">Individual Leadership Coach</option>
                                <option className="option-element">Insolvency Practitioner</option>
                                <option className="option-element">Intellectual Property Law</option>
                                <option className="option-element">Interior Designer</option>
                                <option className="option-element">Investigative Services/Detective</option>
                                <option className="option-element">IT & Networks</option>
                                <option className="option-element">Jute Bags and Jute Products</option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                                <option className="option-element"></option>
                            </select>
                        </div>
                    </div>
                    <div className="two-list-input-container">
                    <div className="label-input-container">
                            <label className="list-label">Nature of Business*</label>
                            <br/>
                            <select className="list-input">
                                <option className="option-element"></option>
                                <option className="option-element">Manufacturer </option>
                                <option className="option-element">Retail  </option>
                                <option className="option-element">Services</option>
                                <option className="option-element">Professional</option>
                                <option className="option-element">Other</option>
                            </select>
                        </div>
                        <div className="label-input-container">
                            <label className="list-label">Business Segment*</label>
                            <br/>
                            <select className="list-input">
                                <option className="option-element"></option>
                                <option className="option-element">Advertising & Marketing </option>
                                <option className="option-element">Agriculture</option>
                                <option className="option-element">Animals </option>
                                <option className="option-element">Architecture & Engineering </option>
                                <option className="option-element">Art & Entertainment </option>
                                <option className="option-element">Car & Motorcycle </option>
                                <option className="option-element">Computer & Programming </option>
                                <option className="option-element">Construction </option>
                                <option className="option-element">Consulting </option>
                                <option className="option-element">Employment Activities</option>
                                <option className="option-element">Event & Business Service</option>
                                <option className="option-element">Finance & Insurance</option>
                                <option className="option-element">Food & Beverage </option>
                                <option className="option-element">Health & Wellness</option>
                                <option className="option-element">Legal & Accounting </option>
                                <option className="option-element">Manufacturing</option>
                                <option className="option-element">Organizations & Others</option>
                                <option className="option-element">Personal Services</option>
                                <option className="option-element">Real Estate Services</option>
                                <option className="option-element">Repair</option>
                                <option className="option-element">Retail </option>
                                <option className="option-element">Security & Investigation</option>
                                <option className="option-element">Sports & Leisure</option>
                                <option className="option-element">Telecommunications</option>
                                <option className="option-element">Training & Coaching </option>
                                <option className="option-element">Transport & Shipping </option>
                                <option className="option-element">Travel </option>
                                <option className="option-element">Others</option>
                                
                            </select>
                        </div>
                    </div>
                    <div className="single-frame-input-container">
                        <div className="single-input-container">
                            <label className="list-label">Business Address*</label>
                            <br/>
                            <input type="text" required className="single-list-input"/>
                        </div>
                    </div>
                    <div className="two-list-input-container">
                        <div className="blood-input-container">
                            <label className="list-label">PIN Code*</label>
                            <br/>
                            <input type="text" className="blood-input"/>
                        </div>
                        <div className="area-input-container">
                            <label className="list-label">Locality*</label>
                            <br/>
                            <select className="area-input">
                                <option></option>
                                <option className="option-element">Central Kolkata (MG Metro-Netaji Bhawan-Howrah-Sealdah) </option>
                                <option className="option-element">South Kolkata Metro Area (Hazra to New Garia) </option>
                                <option className="option-element">South Kolkata (Non Metro route Science City to Sonarpur Station)</option>
                                <option className="option-element">New Metro South Kolkata (Taratala to Joka) </option>
                                <option className="option-element">Industrial Area South Kolkata (Hyde Road, Behala) </option>
                                <option className="option-element">North Kolkata Metro Area (Girish Park to Dakshineswar)  </option>
                                <option className="option-element">North Kolkata E M Byepass VIP (Phool Bagan, Chingrihata Airport)</option>
                                <option className="option-element">Extended North Kolkata (New town-Rajarhat-Salt Lake)</option>
                                <option className="option-element">Howrah Area</option>
                                <option className="option-element">Sodepur & Barasat </option>
                                <option className="option-element">Others</option>
                            </select>
                        </div>
                    </div>
                    <div className="two-list-input-container">
                    <div className="label-input-container">
                            <label className="list-label">City*</label>
                            <br/>
                            <select className="list-input">
                                <option className="option-element"></option>
                                <option className="option-element">Kolkata</option>
                                <option className="option-element">Near Kolkata(within WB)</option>
                                <option className="option-element">Outside West Begal</option>
                                <option className="option-element">other</option>
                            </select>
                        </div>
                        <div className="label-input-container">
                            <label className="unrequired-label">Website Link</label>
                            <br/>
                            <input type="text" required className="list-input"/>
                        </div>
                    </div>
                    <div className="single-frame-input-container">
                        <div className="single-input-container">
                            <label className="unrequired-label">Business Description (Maximum 300 characters including spaces & special characters)</label>
                            <br/>
                            <textarea rows="6" className="text-area" placeholder="Max. characters with space" cols="50"></textarea>
                        </div>
                    </div>
                    <div className="two-list-input-container">
                        <div className="label-input-container">
                            <label className="list-label">Upload Your Photo*<span className="required-element">(Upload JPEG, JPG or PNG file and Image size less than 2 MB. Direct Mobile camera photos size may exceed the size)</span></label>
                            <br/>
                            <input type="file" accept="image/jpg, image/png, image/jpeg" required className="list-input"/>
                        </div>
                        <div className="label-input-container">
                                <label className="unrequired-label">Logo Upload<span className="required-element">(Upload a JPEG, JPG or PNG file)</span></label>
                            <br/>
                            <input type="file" accept="image/jpg, image/png, image/jpeg"  className="list-input"/>
                        </div>
                    </div>
                    <div className="captcha-container">
                        <div>
                            <div className="captcha-input">
                                <p>Captcha</p>
                            </div>
                            <div className="captcha-input">
                                <p>Captcha</p>
                            </div>
                        </div>
                        <div>
                            <div className="captcha-input">
                                <p>Captcha</p>
                            </div>
                            <div className="captcha-input">
                                <input type="text" className="captcha-input-2" placeholder="Enter Captch Code"/>
                            </div>
                        </div>
                        <div className="qr-img-container">
                        <img className="gpay-qr" 
                            src="https://businesssphere.info/images/GpayQR.jpeg"                        
                        />
                        <p className="gpay-text">Gpay, Paytm and Phonepay is at +91-9331177595</p>
                        </div>
                    </div>
                    <div className="checkbox-and-condition-container">
                        <div className="checkbox-input-container">
                            <input type="checkbox" className="checkbox-input" required/>
                            <p>
                                I accept all the Terms & Conditions framed to manage the Forum & any changes therein.I have Paid/ Ready to pay Rs. 150 as Annual Website Listing Fees for Directory Listing and maintenance of Website.Form once filled will not be editable. Backend and support team to be requested for any changes, I accept it to be nominally charged.
                            </p>
                        </div>
                    </div>
                    <div className="btn-container">
                        <button className="button">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default Listing