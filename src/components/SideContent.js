import React from 'react'

const SideContent = props => {
    return (
        <div className="col-lg-4 pl-xl-5">

        <div className="bg-lighter p-4 mb-4">
          <h6 className="small font-weight-bold mb-2">SUBSCRIBE</h6>
          <hr className="blog-separator border-primary" />
          <p className="text-muted">
            Enter your email address to subscribe to this blog and receive notifications of new posts by email.
          </p>
          <div className="form-group">
            <input type="text" className="form-control rounded-0" placeholder="Enter your email address" />
          </div>
          <button type="button" className="btn btn-primary btn-block rounded-0">Subscribe</button>
        </div>

        <div className="ui-bordered p-4 mb-4">
          <h6 className="small font-weight-bold mb-2">POPULAR POSTS</h6>
          <hr className="blog-separator border-primary" />
          <div className="media mb-3">
            <div className="ui-w-40">
              <div className="ui-square ui-bg-cover" style={{backgroundImage: "url('assets/img/bg/9.jpg')"}}></div>
            </div>
            <div className="media-body ml-3">
              <div className="mb-1">
                <a href="#" className="link-animated text-dark">Comment On The Importance Of Human Life</a>
              </div>
              <div className="text-light text-tiny"><a href="#" className="text-light">KENNETH FRAZIER</a> &nbsp;\&nbsp; MAY 21, 2018</div>
            </div>
          </div>
          <div className="media mb-3">
            <div className="ui-w-40">
              <div className="ui-square ui-bg-cover" style={{backgroundImage: "url('assets/img/bg/10.jpg')"}}></div>
            </div>
            <div className="media-body ml-3">
              <div className="mb-1">
                <a href="#" className="link-animated text-dark">Les Houches The Hidden Gem Of The Chamonix Valley</a>
              </div>
              <div className="text-light text-tiny"><a href="#" className="text-light">ALICE HAMPTON</a> &nbsp;\&nbsp; MAY 5, 2018</div>
            </div>
          </div>
          <div className="media mb-3">
            <div className="ui-w-40">
              <div className="ui-square ui-bg-cover" style={{backgroundImage: "url('assets/img/bg/11.jpg')"}}></div>
            </div>
            <div className="media-body ml-3">
              <div className="mb-1">
                <a href="#" className="link-animated text-dark">Cheap Romantic Vacations</a>
              </div>
              <div className="text-light text-tiny"><a href="#" className="text-light">ARTHUR DUNCAN</a> &nbsp;\&nbsp; APRIL 19, 2018</div>
            </div>
          </div>
          <div className="media mb-3">
            <div className="ui-w-40">
              <div className="ui-square ui-bg-cover" style={{backgroundImage: "url('assets/img/bg/12.jpg')"}}></div>
            </div>
            <div className="media-body ml-3">
              <div className="mb-1">
                <a href="#" className="link-animated text-dark">Big Savings On Gas While You Travel</a>
              </div>
              <div className="text-light text-tiny"><a href="#" className="text-light">BELLE ROSS</a> &nbsp;\&nbsp; APRIL 9, 2018</div>
            </div>
          </div>
          <div className="media">
            <div className="ui-w-40">
              <div className="ui-square ui-bg-cover" style={{backgroundImage: "url('assets/img/bg/13.jpg')"}}></div>
            </div>
            <div className="media-body ml-3">
              <div className="mb-1">
                <a href="#" className="link-animated text-dark">Get Around Easily With A New York Limousine Service</a>
              </div>
              <div className="text-light text-tiny"><a href="#" className="text-light">MAY GIBSON</a> &nbsp;\&nbsp; MARCH 28, 2018</div>
            </div>
          </div>
        </div>

        <div className="ui-bordered p-4 mb-4">
          <h6 className="small font-weight-bold mb-2">ARCHIVE</h6>
          <hr className="blog-separator border-primary" />
          <div className="mb-2">
            <a href="#" className="text-dark">2018 <span className="text-muted">(10)</span></a>
          </div>
          <div className="mb-2">
            <a href="#" className="text-dark">2017 <span className="text-muted">(26)</span></a>
          </div>
          <div>
            <a href="#" className="text-dark">2016 <span className="text-muted">(7)</span></a>
          </div>
        </div>

        <div className="ui-bordered p-4 mb-4">
          <h6 className="small font-weight-bold mb-2">STAY CONNECTED</h6>
          <hr className="blog-separator border-primary" />
          <div className="d-flex flex-wrap">
            <a href="#" className="icon-btn d-block bg-twitter text-center text-white mr-1 mb-1"><i className="ion ion-logo-twitter"></i></a>
            <a href="#" className="icon-btn d-block bg-facebook text-center text-white mr-1 mb-1"><i className="ion ion-logo-facebook"></i></a>
            <a href="#" className="icon-btn d-block bg-instagram text-center text-white mr-1 mb-1"><i className="ion ion-logo-instagram"></i></a>
          </div>
        </div>
      </div>

    )
}

export default SideContent