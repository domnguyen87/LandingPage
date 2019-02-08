import React from 'react'

const Slider = props => {
    return (
        <div className="blog-slider-wrapper">
            <div className="blog-slider-inner">
              <div className="swiper-container" id="blog-slider">
                <div className="swiper-wrapper">

                  <div className="swiper-slide ui-bg-cover" style={{backgroundImage: "url('assets/img/bg/22.jpg')"}}>
                    <div className="blog-slider-overlay"></div>
                    <div className="blog-slider-slide">
                      <div className="blog-slider-content">
                        <div className="text-white mb-2">Travel</div>
                        <h2 className="blog-slider-caption mb-3">
                          <a href="#" className="link-animated text-white">The Luxury Of Traveling With Yacht Charter Companies</a>
                        </h2>
                        <div className="text-white text-tiny mb-4">
                          <a href="#" className="text-white">KENNETH FRAZIER</a> &nbsp;\&nbsp; MAY 21, 2018
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide ui-bg-cover" style={{backgroundImage: "url('assets/img/bg/23.jpg')"}}>
                    <div className="blog-slider-overlay"></div>
                    <div className="blog-slider-slide">
                      <div className="blog-slider-content">
                        <div className="text-white mb-2">Lifestyle</div>
                        <h2 className="blog-slider-caption mb-3">
                          <a href="#" className="link-animated text-white">Travel Health Useful Medical Information For Good Health Be</a>
                        </h2>
                        <div className="text-white text-tiny mb-4">
                          <a href="#" className="text-white">ALICE HAMPTON</a> &nbsp;\&nbsp; MAY 5, 2018
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide ui-bg-cover" style={{backgroundImage: "url('assets/img/bg/24.jpg')"}}>
                    <div className="blog-slider-overlay"></div>
                    <div className="blog-slider-slide">
                      <div className="blog-slider-content">
                        <div className="text-white mb-2">Tips & Tricks</div>
                        <h2 className="blog-slider-caption mb-3">
                          <a href="#" className="link-animated text-white">What Makes A Hotel Boutique</a>
                        </h2>
                        <div className="text-white text-tiny mb-4">
                          <a href="#" className="text-white">ARTHUR DUNCAN</a> &nbsp;\&nbsp; APRIL 19, 2018
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide ui-bg-cover" style={{backgroundImage: "url('assets/img/bg/25.jpg')"}}>
                    <div className="blog-slider-overlay"></div>
                    <div className="blog-slider-slide">
                      <div className="blog-slider-content">
                        <div className="text-white mb-2">Traveling</div>
                        <h2 className="blog-slider-caption mb-3">
                          <a href="#" className="link-animated text-white">Getting Cheap Airfare For Last Minute Travel</a>
                        </h2>
                        <div className="text-white text-tiny mb-4">
                          <a href="#" className="text-white">BELLE ROSS</a> &nbsp;\&nbsp; APRIL 9, 2018
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide ui-bg-cover" style={{backgroundImage: "url('assets/img/bg/26.jpg')"}}>
                    <div className="blog-slider-overlay"></div>
                    <div className="blog-slider-slide">
                      <div className="blog-slider-content">
                        <div className="text-white mb-2">Lifestyle</div>
                        <h2 className="blog-slider-caption mb-3">
                          <a href="#" className="link-animated text-white">Get Around Easily With A New York Limousine Service</a>
                        </h2>
                        <div className="text-white text-tiny mb-4">
                          <a href="#" className="text-white">MAY GIBSON</a> &nbsp;\&nbsp; MARCH 28, 2018
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="swiper-pagination swiper-pagination-white"></div>
              </div>
            </div>
            <div id="blog-slider-prev" className="display-1"><i className="lnr lnr-chevron-left scaleX--1-rtl"></i></div>
            <div id="blog-slider-next" className="display-1"><i className="lnr lnr-chevron-right scaleX--1-rtl"></i></div>
        </div>
    )
}

export default Slider