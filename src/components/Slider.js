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
                        <div className="text-white mb-2">Homelessness</div>
                        <h2 className="blog-slider-caption mb-3">
                          <a href="#" className="link-animated text-white">REASONS PEOPLE BECOME HOMELESS</a>
                        </h2>
                        <div className="text-white text-tiny mb-4">
                          <a href="#" className="text-white">Lina Georg</a> &nbsp;\&nbsp; MAY 21, 2018
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide ui-bg-cover" style={{backgroundImage: "url('assets/img/bg/23.jpg')"}}>
                    <div className="blog-slider-overlay"></div>
                    <div className="blog-slider-slide">
                      <div className="blog-slider-content">
                        <div className="text-white mb-2">Types of Homelessness</div>
                        <h2 className="blog-slider-caption mb-3">
                          <a href="#" className="link-animated text-white">There are three types of homelessness – chronic, transitional, and episodic</a>
                        </h2>
                        <div className="text-white text-tiny mb-4">
                          <a href="#" className="text-white">Vincent Louise</a> &nbsp;\&nbsp; MAY 5, 2018
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide ui-bg-cover" style={{backgroundImage: "url('assets/img/bg/24.jpg')"}}>
                    <div className="blog-slider-overlay"></div>
                    <div className="blog-slider-slide">
                      <div className="blog-slider-content">
                        <div className="text-white mb-2">Housing And Homelessness</div>
                        <h2 className="blog-slider-caption mb-3">
                          <a href="#" className="link-animated text-white">Housing represents the fundamental base-solution to the problem of homelessness.</a>
                        </h2>
                        <div className="text-white text-tiny mb-4">
                          <a href="#" className="text-white">Matia Daniel</a> &nbsp;\&nbsp; APRIL 19, 2018
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide ui-bg-cover" style={{backgroundImage: "url('assets/img/bg/25.jpg')"}}>
                    <div className="blog-slider-overlay"></div>
                    <div className="blog-slider-slide">
                      <div className="blog-slider-content">
                        <div className="text-white mb-2">Taking Action</div>
                        <h2 className="blog-slider-caption mb-3">
                          <a href="#" className="link-animated text-white">Check out 10 ways you can support the work of the National Coalition for the Homeless.</a>
                        </h2>
                        <div className="text-white text-tiny mb-4">
                          <a href="#" className="text-white">Lana Abel</a> &nbsp;\&nbsp; APRIL 9, 2018
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide ui-bg-cover" style={{backgroundImage: "url('assets/img/bg/26.jpg')"}}>
                    <div className="blog-slider-overlay"></div>
                    <div className="blog-slider-slide">
                      <div className="blog-slider-content">
                        <div className="text-white mb-2">Need Help?</div>
                        <h2 className="blog-slider-caption mb-3">
                          <a href="#" className="link-animated text-white">Find preventive or emergency assistance programs in your community</a>
                        </h2>
                        <div className="text-white text-tiny mb-4">
                          <a href="#" className="text-white">Gabriel Regin</a> &nbsp;\&nbsp; MARCH 28, 2018
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