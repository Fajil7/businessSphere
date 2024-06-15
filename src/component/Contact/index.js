import React  from "react";
import './index.css'

function Contact () {
    return(
        <section id="home" className='content'>
            <div>
                <img
                    src="https://img.freepik.com/premium-photo/close-up-contact-us-word_352439-2440.jpg?w=900"
                    alt="about"
                    className="contact-img"
                />
            </div>
            <div className="contact-main-container">
            <h1 className="contact-heading">Contact</h1>
            <div className="contact-container">
                <p className="contact-way">+91-85 82 84 84 34</p>
                <p className="contact-way">sskjha2016@gmail.com</p>
                <p className="contact-way">Kolkata 700001</p>
            </div>
            </div>
            <div className="img-and-form-container">
                <div className="img-container">
                <img
                    src="https://img.freepik.com/premium-vector/flat-design-customer-support-concept-illustration-websites-landing-pages-mobile-applications-posters-banners_108061-823.jpg?w=740"
                    alt="about"
                    className="cont-img"
                />
                </div>
                <form>
                    <div className="two-input-container">
                        <div className="input-container">
                            <laberl className="label required">Name*</laberl>
                            <br/>
                            <input type="text" className="input" placeholder="Name" name="name" required/>
                        </div>
                        <div className="input-container">
                            <laberl className="label required">Phone*</laberl>
                            <br/>
                            <input type="text" className="input" placeholder="Name" name="name" required/>
                        </div>
                    </div>
                    <div className="two-input-container">
                        <div className="input-container">
                            <laberl className="label">Email</laberl>
                            <br/>
                            <input type="text" className="input" placeholder="Name" name="name"/>
                        </div>
                        <div className="input-container">
                            <laberl className="label required">Subject*</laberl>
                            <br/>
                            <input type="text" className="input" placeholder="Name" name="name" required/>
                        </div>
                    </div>
                    <div class="align">
                        <div class="input-two">
                            <laberl class="label ">Message</laberl>
                        <br/>
                            <textarea class="textarea" rows="4" cols="50" placeholder="Max 350 characters"></textarea>
                        </div>
                    </div>
                    <div className="btn-container"><button type='button' className='button'>Submit</button></div>
                </form>
            </div>
        </section>
    )
}

export default Contact