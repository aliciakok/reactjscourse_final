import React from 'react'

const Contact = () => {
  return (
	<div>
	  <section id="contact" className="contact section">

{/* Section Title */}
<div className="container section-title" >
  <h2>Contact</h2>
  <div><span>Need Help?</span> <span className="description-title">Contact Us</span></div>
</div>{/* End Section Title */}

<div className="container">

  <div className="row gy-4">

	<div className="col-lg-6">

	  <div className="row gy-4">
		<div className="col-md-6">
		  <div className="info-item">
			<i className="bi bi-geo-alt"></i>
			<h3>Address</h3>
			<p>Street 10</p>
			<p>Singapore 535022</p>
		  </div>
		</div>{/* End Info Item */}

		<div className="col-md-6">
		  <div className="info-item" >
			<i className="bi bi-telephone"></i>
			<h3>Call Us</h3>
			<p>+65 12345678</p>
			<p>+65 98765432</p>
		  </div>
		</div>{/* End Info Item */}

		<div className="col-md-6">
		  <div className="info-item">
			<i className="bi bi-envelope"></i>
			<h3>Email Us</h3>
			<p>info@hidayah.sg</p>
			<p>contact@hidayah.sg</p>
		  </div>
		</div>{/* End Info Item */}

		<div className="col-md-6">
		  <div className="info-item">
			<i className="bi bi-clock"></i>
			<h3>Open Hours</h3>
			<p>Monday - Friday</p>
			<p>9:00AM - 05:00PM</p>
		  </div>
		</div>{/* End Info Item */}

	  </div>

	</div>

	<div className="col-lg-6">
	  <form action="forms/contact.php" method="post" className="php-email-form">
		<div className="row gy-4">

		  <div className="col-md-6">
			<input type="text" name="name" className="form-control" placeholder="Your Name" required=""/>
		  </div>

		  <div className="col-md-6 ">
			<input type="email" className="form-control" name="email" placeholder="Your Email" required=""/>
		  </div>

		  <div className="col-12">
			<input type="text" className="form-control" name="subject" placeholder="Subject" required=""/>
		  </div>

		  <div className="col-12">
			<textarea className="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
		  </div>

		  <div className="col-12 text-center">
			<div className="loading">Loading</div>
			<div className="error-message"></div>
			<div className="sent-message">Your message has been sent. Thank you!</div>

			<button type="submit">Send Message</button>
		  </div>

		</div>
	  </form>
	</div>{/* End Contact Form */}

  </div>

</div>

</section>{/* /Contact Section */}

	</div>
  )
}

export default Contact
