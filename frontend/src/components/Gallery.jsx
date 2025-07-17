import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

function Gallery() {
  useEffect(() => {
    GLightbox({ selector: '.glightbox' });
  }, []);

  const images = Array.from({ length: 8 }, (_, i) => i + 1); // [1..8]

  return (
    <section id="gallery" className="gallery section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Gallery</h2>
        <p>
          Glimpses of Our Annual Tech Fest – Capturing Innovation in Every Frame
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <Swiper
          modules={[Pagination]}
          spaceBetween={10}
          slidesPerView={3}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {images.map((num) => (
            <SwiperSlide key={num}>
              <a
                className="glightbox"
                data-gallery="images-gallery"
                href={`/assets/img/event-gallery/event-gallery-${num}.jpg`}
              >
                <img
                  src={`/assets/img/event-gallery/event-gallery-${num}.jpg`}
                  className="img-fluid"
                  alt={`Event Gallery ${num}`}
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Gallery;
















// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination'; // or other modules as needed

// import { Pagination } from 'swiper/modules';

// import GLightbox from 'glightbox';
// import 'glightbox/dist/css/glightbox.css';

// useEffect(() => {
//   GLightbox({ selector: '.glightbox' });
// }, []);

// function Gallery() {
//   return (
//     <>
//     <section id="gallery" className="gallery section">
//   {/* Section Title */}
//   <div className="container section-title" data-aos="fade-up">
//     <h2>Gallery</h2>
//     <p>
//       Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
//       consectetur velit
//     </p>
//   </div>
//   {/* End Section Title */}
//   <div className="container" data-aos="fade-up" data-aos-delay={100}>
//     <div className="swiper init-swiper">
//       <div className="swiper-wrapper align-items-center">
//         <div className="swiper-slide">
//           <a
//             className="glightbox"
//             data-gallery="images-gallery"
//             href="/assets/img/event-gallery/event-gallery-1.jpg"
//           >
//             <img
//               src="/assets/img/event-gallery/event-gallery-1.jpg"
//               className="img-fluid"
//               alt=""
//             />
//           </a>
//         </div>
//         <div className="swiper-slide">
//           <a
//             className="glightbox"
//             data-gallery="images-gallery"
//             href="/assets/img/event-gallery/event-gallery-2.jpg"
//           >
//             <img
//               src="/assets/img/event-gallery/event-gallery-2.jpg"
//               className="img-fluid"
//               alt=""
//             />
//           </a>
//         </div>
//         <div className="swiper-slide">
//           <a
//             className="glightbox"
//             data-gallery="images-gallery"
//             href="/assets/img/event-gallery/event-gallery-3.jpg"
//           >
//             <img
//               src="/assets/img/event-gallery/event-gallery-3.jpg"
//               className="img-fluid"
//               alt=""
//             />
//           </a>
//         </div>
//         <div className="swiper-slide">
//           <a
//             className="glightbox"
//             data-gallery="images-gallery"
//             href="/assets/img/event-gallery/event-gallery-4.jpg"
//           >
//             <img
//               src="/assets/img/event-gallery/event-gallery-4.jpg"
//               className="img-fluid"
//               alt=""
//             />
//           </a>
//         </div>
//         <div className="swiper-slide">
//           <a
//             className="glightbox"
//             data-gallery="images-gallery"
//             href="/assets/img/event-gallery/event-gallery-5.jpg"
//           >
//             <img
//               src="/assets/img/event-gallery/event-gallery-5.jpg"
//               className="img-fluid"
//               alt=""
//             />
//           </a>
//         </div>
//         <div className="swiper-slide">
//           <a
//             className="glightbox"
//             data-gallery="images-gallery"
//             href="/assets/img/event-gallery/event-gallery-6.jpg"
//           >
//             <img
//               src="/assets/img/event-gallery/event-gallery-6.jpg"
//               className="img-fluid"
//               alt=""
//             />
//           </a>
//         </div>
//         <div className="swiper-slide">
//           <a
//             className="glightbox"
//             data-gallery="images-gallery"
//             href="/assets/img/event-gallery/event-gallery-7.jpg"
//           >
//             <img
//               src="/assets/img/event-gallery/event-gallery-7.jpg"
//               className="img-fluid"
//               alt=""
//             />
//           </a>
//         </div>
//         <div className="swiper-slide">
//           <a
//             className="glightbox"
//             data-gallery="images-gallery"
//             href="/assets/img/event-gallery/event-gallery-8.jpg"
//           >
//             <img
//               src="/assets/img/event-gallery/event-gallery-8.jpg"
//               className="img-fluid"
//               alt=""
//             />
//           </a>
//         </div>
//       </div>
//       <div className="swiper-pagination" />
//     </div>
//   </div>
// </section>

//     </>
//   )
// }

// export default Gallery




