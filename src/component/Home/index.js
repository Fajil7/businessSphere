import React from 'react';
import './index.css'


function Home() {
  return (
    <section id="home" class='content'>
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://businesssphere.info/uploads/banner/2054857676704355.jpg" class="single-slider d-block w-100" alt="img1"/>
          </div>
          <div class="carousel-item">
            <img src="https://businesssphere.info/uploads/banner/6095754063000588.png" class="d-block w-100" alt="img2"/>
          </div>
          <div class="carousel-item">
            <img src="https://businesssphere.info/uploads/banner/1474091916307897.jpeg" class="d-block w-100" alt="img3"/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
        </div>
        <h1 className="buss-heading">Business Directory</h1>
        <div className="directory-card">
							<div className="cus-profile-container">
								<img src="https://img.freepik.com/premium-photo/user-icon-glossy-blue_335552-1305.jpg?w=740" 
									alt="profile"
									className="profile"
								/>
								<p className="name">Name</p>
								<p className="possition">Possition</p>
							</div>
							<div className="cus-profile-container">
								<img src="https://img.freepik.com/premium-photo/user-icon-glossy-blue_335552-1305.jpg?w=740" 
									alt="profile"
									className="profile"
								/>
								<p className="name">Name</p>
								<p className="possition">Possition</p>
							</div>
							<div className="cus-profile-container">
								<img src="https://img.freepik.com/premium-photo/user-icon-glossy-blue_335552-1305.jpg?w=740" 
									alt="profile"
									className="profile"
								/>
								<p className="name">Name</p>
								<p className="possition">Possition</p>
							</div>
							<div className="cus-profile-container">
								<img src="https://img.freepik.com/premium-photo/user-icon-glossy-blue_335552-1305.jpg?w=740" 
									alt="profile"
									className="profile"
								/>
								<p className="name">Name</p>
								<p className="possition">Possition</p>
							</div>
							<div className="cus-profile-container">
								<img src="https://img.freepik.com/premium-photo/user-icon-glossy-blue_335552-1305.jpg?w=740" 
									alt="profile"
									className="profile"
								/>
								<p className="name">Name</p>
								<p className="possition">Possition</p>
							</div>
							<div className="cus-profile-container">
								<img src="https://img.freepik.com/premium-photo/user-icon-glossy-blue_335552-1305.jpg?w=740" 
									alt="profile"
									className="profile"
								/>
								<p className="name">Name</p>
								<p className="possition">Possition</p>
							</div>
							<div className="cus-profile-container">
								<img src="https://img.freepik.com/premium-photo/user-icon-glossy-blue_335552-1305.jpg?w=740" 
									alt="profile"
									className="profile"
								/>
								<p className="name">Name</p>
								<p className="possition">Possition</p>
							</div>
							<div className="cus-profile-container">
								<img src="https://img.freepik.com/premium-photo/user-icon-glossy-blue_335552-1305.jpg?w=740" 
									alt="profile"
									className="profile"
								/>
								<p className="name">Name</p>
								<p className="possition">Possition</p>
							</div>
		</div>
        <h1 className="buss-heading">About Business Sphere</h1>
		<div className="directory-card">
							<div className="about-detail-card">
								<div className="detail-card">
									<h1 className="abou-heading">About Us</h1>
									<p className="description">
										Gratitude for the welcome to Business Sphere! a thriving networking 
										community for seasoned business professionals in the vibrant city of Kolkata.
									</p>
								</div>
								<div className="detail-card">
									<h1 className="abou-heading">Our Mission</h1>
									<p className="description">
										At Business Sphere, our mission is clear and compelling. We aim to 
										empower and connect the experienced and dynamic business minds of Kolkata.
									</p>
								</div>
								<div className="detail-card">
									<h1 className="abou-heading">Why Choose Us</h1>
									<p className="list-item">1.<span> </span> Networking</p>
									<p className="list-item">2.<span> </span>Guidance from Leaders</p>
									<p className="list-item">3.<span> </span>Recognition and Awards</p>
									<p className="list-item">4.<span> </span>Recognition and Awards</p>
									<p className="list-item">5.<span> </span>Social Responsibility</p>
									<p className="list-item">6.<span> </span>Strengthen Bonds</p>
								</div>
							</div>
		</div>
			<h1 className='heading-pocess'>Our Pocess</h1>
			<div className='process-align-container'>
				<div className='one-process'>
					<div className="process-detail-card">
						<img
							src="https://businesssphere.info/images/img-1.png"
							className="profile"
						/>
						<p className="apply-heading">Apply for Listing on Website</p>
					</div>
					<div className="process-detail-card">
						<img
							src="https://businesssphere.info/images/img-2.png"
							className="profile"
						/>
						<p className="possition">Review</p>
					</div>
				</div>
				<div className='one-process'>
				<div className="process-detail-card">
					<img
						src="https://businesssphere.info/images/img-3.png"
						className="profile"
					/>
					<p className="possition">Approval</p>
				</div>
				<div className="process-detail-card collaborate">
				<img
					src="https://businesssphere.info/images/img-4.png"
					className="profile"
				/>
				<p className="possition">Collaborate</p>
				</div>
				</div>
			</div>
				<div className="testimonial-contianer">
					<div>
					<h1 className="testi-heading">Testimonials</h1>
					</div>
					<div className="testimonials-card">
						<img 
							src="https://businesssphere.info/uploads/testimonial/8367771856983015.png"
							className="img"
						/>
						<div className="testi-detail-card">
									<p className="tesi-into">
										My name is Sanjay Kumar Jha, founder of MSME DOST and SIMPLIFIED. We are into Website, 
										Software and Technology aspect of compliances. We have got a few clients from this contact 
										sphere and also a few solutions and
										services I am availing from members of Business Sphere. This is really useful and helpful. 
									</p>
									<h6 className="testi-name"> Sanjay Kumar Jha</h6>
									<span className="testi-possition"> MSMEDOST and Simplified Management Solutions</span>
						</div>
					</div>
				</div>
					<div className="our-supporting-brd-contianer">
							<h1 className="buss-heading">Supporting Brands</h1>
							<div >
								<marquee direction="left" scrollamount="20">
									<img src="https://businesssphere.info/images/24.png"
									className="com-logo"
									/>
									<img src="https://businesssphere.info/images/logo.png"
									className="com-logo"
									/>
									<img src="https://businesssphere.info/images/20.png"
									className="com-logo"
									/>
									<img src="https://businesssphere.info/images/19.png"
									className="com-logo"
									/>
									<img src="https://businesssphere.info/images/25.jpeg"
									className="com-logo"
									/>
									<img src="https://businesssphere.info/images/26.jpeg"
									className="com-logo"
									/>
								</marquee>
							</div>
					</div>
            		<div className='data-main-container'>
					<div className="business-contianer">
							<h1 className="heading">Nature of Business</h1>
							<div className="directory-data-container">
								<div className="directory-data">
									<p className="text">11+</p>
									<p className="text-manufacture">Manufacture</p>
								</div>
								<div className="directory-data">
									<p className="text">10+</p>
									<p className="text-manufacture">services</p>
								</div>
								<div className="directory-data">
									<p className="text">13+</p>
									<p className="text-manufacture">Retail</p>
								</div>
								<div className="directory-data">
									<p className="text">9+</p>
									<p className="text-manufacture">Professional</p>
								</div>
								<div className="directory-data">
									<p className="text">2+</p>
									<p className="text-manufacture">Others</p>
								</div>
							</div>
					</div>
					</div>
					<div className='data-main-container'>
					<div className="business-contianer">
							<h1 className="heading">Blood Group</h1>
							<div className="directory-data-container">
								<div className="directory-data">
									<p className="text">10+</p>
									<p className="text-manufacture">A+</p>
								</div>
								<div className="directory-data">
									<p className="text">10+</p>
									<p className="text-manufacture">A-</p>
								</div>
								<div className="directory-data">
									<p className="text">10+</p>
									<p className="text-manufacture">B+</p>
								</div>
								<div className="directory-data">
									<p className="text">10+</p>
									<p className="text-manufacture">B-</p>
								</div>
							</div>
					</div>
					</div>
					<div className='data-main-container'>
							<div className="business-contianer">
								<h1 className="heading">Localoty</h1>
								<div className="directory-data-container">
									<div className="directory-data">
										<p className="text">10+</p>
										<p className="text-manufacture">Manufacture</p>
									</div>
									<div className="directory-data">
										<p className="text">10+</p>
										<p className="text-manufacture">Manufacture</p>
									</div>
									<div className="directory-data">
										<p className="text">10+</p>
										<p className="text-manufacture">Manufacture</p>
									</div>
								</div>
							</div>
					</div>
	
    </section>
  );
}

export default Home;
