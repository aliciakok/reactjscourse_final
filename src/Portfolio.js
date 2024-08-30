import React , {useState, useEffect} from "react";
import axios from 'axios';

const eventURL = 'https://app.ticketmaster.com/discovery/v2/events.json?page=0&size=11&apikey=Q5KsYDp6eu8cLQclufsDVTuGyAgqQfMp'


const Portfolio = () => {
	const [event, setEvent] = useState([])
	const allEvent = async() => {
		const response = await axios.get(`${eventURL}`)
		console.log(response.data._embedded)
		setEvent(response.data._embedded.events)
	}

	useEffect(() => {
		allEvent()}, []);
		return (
	<div>
		<section id="portfolio" className="portfolio section">
         {/* Section Title */}
         <div className="container section-title">
           <h2>Events</h2>
           <div>
             <span>Check Our</span>{" "}
             <span className="description-title">Event</span>
             </div> 
			 </div> 
		
			<div class="container-fluid">
			<div>
			<div class="row g-0 isotope-container">
					{event.map((eventList) => {
					return (
						
						// <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
						// <div className="portfolio-content h-100">
							<img src={eventList.images[0].url} className="img-fluid" style={{width:"300px"}}/>
						// </div>
						// </div>
				)})}
			</div>
			</div>
			</div>
		
	</section>
	</div>	
		);
	}
    // <div>
    //   <section id="portfolio" className="portfolio section">
    //     {/* Section Title */}
    //     <div className="container section-title">
    //       <h2>Portfolio</h2>
    //       <div>
    //         <span>Check Our</span>{" "}
    //         <span className="description-title">Portfolio</span>
    //       </div>
    //     </div>
    //     {/* End Section Title */}

    //     <div className="container-fluid">
    //       <div
    //         className="isotope-layout"
    //         data-default-filter="*"
    //         data-layout="masonry"
    //         data-sort="original-order"
    //       >
    //         <ul
    //           className="portfolio-filters isotope-filters"
            
    //         >
    //           <li data-filter="*" className="filter-active">
    //             All
    //           </li>
    //           <li data-filter=".filter-app">App</li>
    //           <li data-filter=".filter-product">Product</li>
    //           <li data-filter=".filter-branding">Branding</li>
    //           <li data-filter=".filter-books">Books</li>
    //         </ul>
    //         {/* End Portfolio Filters */}

    //         <div
    //           className="row g-0 isotope-container"
            
    //         >
    //           <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
    //             <div className="portfolio-content h-100">
    //               <img
    //                 src="assets/img/portfolio/app-1.jpg"
    //                 className="img-fluid"
    //                 alt=""
    //               />
    //               <div className="portfolio-info">
    //                 <a
    //                   href="assets/img/portfolio/app-1.jpg"
    //                   data-gallery="portfolio-gallery-app"
    //                   className="glightbox preview-link"
    //                 >
    //                   <i className="bi bi-zoom-in"></i>
    //                 </a>
    //                 <a
    //                   href="portfolio-details.html"
    //                   title="More Details"
    //                   className="details-link"
    //                 >
    //                   <i className="bi bi-link-45deg"></i>
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //           {/* End Portfolio Item */}

    //           <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
    //             <div className="portfolio-content h-100">
    //               <img
    //                 src="assets/img/portfolio/product-1.jpg"
    //                 className="img-fluid"
    //                 alt=""
    //               />
    //               <div className="portfolio-info">
    //                 <a
    //                   href="assets/img/portfolio/product-1.jpg"
    //                   data-gallery="portfolio-gallery-product"
    //                   className="glightbox preview-link"
    //                 >
    //                   <i className="bi bi-zoom-in"></i>
    //                 </a>
    //                 <a
    //                   href="portfolio-details.html"
    //                   title="More Details"
    //                   className="details-link"
    //                 >
    //                   <i className="bi bi-link-45deg"></i>
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //           {/* End Portfolio Item */}

    //           <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
    //             <div className="portfolio-content h-100">
    //               <img
    //                 src="assets/img/portfolio/branding-1.jpg"
    //                 className="img-fluid"
    //                 alt=""
    //               />
    //               <div className="portfolio-info">
    //                 <a
    //                   href="assets/img/portfolio/branding-1.jpg"
    //                   data-gallery="portfolio-gallery-branding"
    //                   className="glightbox preview-link"
    //                 >
    //                   <i className="bi bi-zoom-in"></i>
    //                 </a>
    //                 <a
    //                   href="portfolio-details.html"
    //                   title="More Details"
    //                   className="details-link"
    //                 >
    //                   <i className="bi bi-link-45deg"></i>
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //           {/* End Portfolio Item */}

    //           <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
    //             <div className="portfolio-content h-100">
    //               <img
    //                 src="assets/img/portfolio/books-1.jpg"
    //                 className="img-fluid"
    //                 alt=""
    //               />
    //               <div className="portfolio-info">
    //                 <a
    //                   href="assets/img/portfolio/books-1.jpg"
    //                   data-gallery="portfolio-gallery-book"
    //                   className="glightbox preview-link"
    //                 >
    //                   <i className="bi bi-zoom-in"></i>
    //                 </a>
    //                 <a
    //                   href="portfolio-details.html"
    //                   title="More Details"
    //                   className="details-link"
    //                 >
    //                   <i className="bi bi-link-45deg"></i>
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //           {/* End Portfolio Item */}

    //           <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
    //             <div className="portfolio-content h-100">
    //               <img
    //                 src="assets/img/portfolio/app-2.jpg"
    //                 className="img-fluid"
    //                 alt=""
    //               />
    //               <div className="portfolio-info">
    //                 <a
    //                   href="assets/img/portfolio/app-2.jpg"
    //                   data-gallery="portfolio-gallery-app"
    //                   className="glightbox preview-link"
    //                 >
    //                   <i className="bi bi-zoom-in"></i>
    //                 </a>
    //                 <a
    //                   href="portfolio-details.html"
    //                   title="More Details"
    //                   className="details-link"
    //                 >
    //                   <i className="bi bi-link-45deg"></i>
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //           {/* End Portfolio Item */}

    //           <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
    //             <div className="portfolio-content h-100">
    //               <img
    //                 src="assets/img/portfolio/product-2.jpg"
    //                 className="img-fluid"
    //                 alt=""
    //               />
    //               <div className="portfolio-info">
    //                 <a
    //                   href="assets/img/portfolio/product-2.jpg"
    //                   data-gallery="portfolio-gallery-product"
    //                   className="glightbox preview-link"
    //                 >
    //                   <i className="bi bi-zoom-in"></i>
    //                 </a>
    //                 <a
    //                   href="portfolio-details.html"
    //                   title="More Details"
    //                   className="details-link"
    //                 >
    //                   <i className="bi bi-link-45deg"></i>
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //           {/* End Portfolio Item */}

    //           <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
    //             <div className="portfolio-content h-100">
    //               <img
    //                 src="assets/img/portfolio/branding-2.jpg"
    //                 className="img-fluid"
    //                 alt=""
    //               />
    //               <div className="portfolio-info">
    //                 <a
    //                   href="assets/img/portfolio/branding-2.jpg"
    //                   data-gallery="portfolio-gallery-branding"
    //                   className="glightbox preview-link"
    //                 >
    //                   <i className="bi bi-zoom-in"></i>
    //                 </a>
    //                 <a
    //                   href="portfolio-details.html"
    //                   title="More Details"
    //                   className="details-link"
    //                 >
    //                   <i className="bi bi-link-45deg"></i>
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //           {/* End Portfolio Item */}

    //           <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
    //             <div className="portfolio-content h-100">
    //               <img
    //                 src="assets/img/portfolio/books-2.jpg"
    //                 className="img-fluid"
    //                 alt=""
    //               />
    //               <div className="portfolio-info">
    //                 <a
    //                   href="assets/img/portfolio/books-2.jpg"
    //                   data-gallery="portfolio-gallery-book"
    //                   className="glightbox preview-link"
    //                 >
    //                   <i className="bi bi-zoom-in"></i>
    //                 </a>
    //                 <a
    //                   href="portfolio-details.html"
    //                   title="More Details"
    //                   className="details-link"
    //                 >
    //                   <i className="bi bi-link-45deg"></i>
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //           {/* End Portfolio Item */}

    //           <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
    //             <div className="portfolio-content h-100">
    //               <img
    //                 src="assets/img/portfolio/app-3.jpg"
    //                 className="img-fluid"
    //                 alt=""
    //               />
    //               <div className="portfolio-info">
    //                 <a
    //                   href="assets/img/portfolio/app-3.jpg"
    //                   data-gallery="portfolio-gallery-app"
    //                   className="glightbox preview-link"
    //                 >
    //                   <i className="bi bi-zoom-in"></i>
    //                 </a>
    //                 <a
    //                   href="portfolio-details.html"
    //                   title="More Details"
    //                   className="details-link"
    //                 >
    //                   <i className="bi bi-link-45deg"></i>
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //           {/* End Portfolio Item */}

    //           <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
    //             <div className="portfolio-content h-100">
    //               <img
    //                 src="assets/img/portfolio/product-3.jpg"
    //                 className="img-fluid"
    //                 alt=""
    //               />
    //               <div className="portfolio-info">
    //                 <a
    //                   href="assets/img/portfolio/product-3.jpg"
    //                   data-gallery="portfolio-gallery-product"
    //                   className="glightbox preview-link"
    //                 >
    //                   <i className="bi bi-zoom-in"></i>
    //                 </a>
    //                 <a
    //                   href="portfolio-details.html"
    //                   title="More Details"
    //                   className="details-link"
    //                 >
    //                   <i className="bi bi-link-45deg"></i>
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //           {/* End Portfolio Item */}

    //           <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
    //             <div className="portfolio-content h-100">
    //               <img
    //                 src="assets/img/portfolio/branding-3.jpg"
    //                 className="img-fluid"
    //                 alt=""
    //               />
    //               <div className="portfolio-info">
    //                 <a
    //                   href="assets/img/portfolio/branding-3.jpg"
    //                   data-gallery="portfolio-gallery-branding"
    //                   className="glightbox preview-link"
    //                 >
    //                   <i className="bi bi-zoom-in"></i>
    //                 </a>
    //                 <a
    //                   href="portfolio-details.html"
    //                   title="More Details"
    //                   className="details-link"
    //                 >
    //                   <i className="bi bi-link-45deg"></i>
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //           {/* End Portfolio Item */}

    //           <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
    //             <div className="portfolio-content h-100">
    //               <img
    //                 src="assets/img/portfolio/books-3.jpg"
    //                 className="img-fluid"
    //                 alt=""
    //               />
    //               <div className="portfolio-info">
    //                 <a
    //                   href="assets/img/portfolio/books-3.jpg"
    //                   data-gallery="portfolio-gallery-book"
    //                   className="glightbox preview-link"
    //                 >
    //                   <i className="bi bi-zoom-in"></i>
    //                 </a>
    //                 <a
    //                   href="portfolio-details.html"
    //                   title="More Details"
    //                   className="details-link"
    //                 >
    //                   <i className="bi bi-link-45deg"></i>
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //           {/* End Portfolio Item */}
    //         </div>
    //         {/* End Portfolio Container */}
    //       </div>
    //     </div>
    //   </section>
    // </div>
	
export default Portfolio;
