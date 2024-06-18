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
                    </div>
                    <div className="two-list-input-container">
                        <div className="label-input-container">
                            <label className="unrequired-label">Business Entity Name</label>
                            <br/>
                            <input type="text" placeholder="Name"  className="list-input"/>
                        </div>
                        <div className="label-input-container">
                            <label className="list-label">Business Category*</label>
                            <br/>
                            <select className="list-input">
                                <option className="option-element"></option>
                                <option className="option-element">Male</option>
                                <option className="option-element">Female</option>
                                <option className="option-element">other</option>
                            </select>
                        </div>
                    </div>
                    <div className="two-list-input-container">
                    <div className="label-input-container">
                            <label className="list-label">Nature of Business*</label>
                            <br/>
                            <select className="list-input">
                                <option className="option-element"></option>
                                <option className="option-element">Male</option>
                                <option className="option-element">Female</option>
                                <option className="option-element">other</option>
                            </select>
                        </div>
                        <div className="label-input-container">
                            <label className="list-label">Business Segment*</label>
                            <br/>
                            <select className="list-input">
                                <option className="option-element"></option>
                                <option className="option-element">Male</option>
                                <option className="option-element">Female</option>
                                <option className="option-element">other</option>
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
                                <input type="text" className="list-input" placeholder="Enter Captch Code"/>
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