import React from 'react'

const Navigation = props => {
    return (
    <React.Fragment>
    <nav className="navbar navbar-expand-lg bg-white mt-lg-3">
    <div className="container px-3">

      <a href="#" className="navbar-brand order-lg-2 flex-shrink-0 text-xlarge font-weight line-height-1 py-3 mr-0">Everyone Deserves A Chance</a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".blog-nav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="blog-nav navbar-collapse collapse order-lg-1 w-lg-100">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="#">
            <i className="ion ion-logo-twitter text-twitter text-big align-middle"></i>
            <span className="d-lg-none align-middle">&nbsp; Twitter</span>
          </a>
          <a className="nav-item nav-link ml-lg-2" href="#">
            <i className="ion ion-logo-facebook text-facebook text-big align-middle"></i>
            <span className="d-lg-none align-middle">&nbsp; Facebook</span>
          </a>
          <a className="nav-item nav-link ml-lg-2" href="#">
            <i className="ion ion-logo-instagram text-instagram text-big align-middle"></i>
            <span className="d-lg-none align-middle">&nbsp; Instagram</span>
          </a>
        </div>
      </div>

      <div className="blog-nav navbar-collapse collapse order-lg-3 w-lg-100">
        <div className="nav navbar-nav align-items-lg-center ml-lg-auto">
          {/* <!-- Search --> */}
          <label className="nav-item nav-link navbar-search-box">
            <i className="ion ion-ios-search text-large align-middle"></i>
            <span className="navbar-search-input">
              <input type="text" className="form-control mx-2" placeholder="Search..." style={{width: "140px"}}/>
              <a href="#" className="navbar-search-cancel">×</a>
            </span>
          </label>
        </div>
      </div>

    </div>
  </nav>
  <hr className="mt-0 mt-lg-3 mb-0"></hr>
  </React.Fragment>
  )
}

export default Navigation