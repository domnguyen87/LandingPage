import React from 'react'

const SubNav = props => {
    return (
        <div id="blog-subnav-wrapper">
            <nav id="blog-subnav" class="navbar navbar-expand-lg bg-white">
                <div class="container px-3">
                  <div class="nav navbar-nav flex-shrink-1 flex-row align-items-center mx-lg-auto">
                    <a class="nav-item nav-link mr-2 ml-lg-2" href="#">
                      Lifestyle
                    </a>
                    <a class="nav-item nav-link mx-2" href="#">
                      Travel
                    </a>
                    <a class="nav-item nav-link mx-2" href="#">
                      Social
                    </a>
                    <a class="nav-item nav-link mx-2" href="#">
                      Culture
                    </a>
                    <a class="nav-item nav-link mx-2" href="#">
                      About
                    </a>
                    <a class="nav-item nav-link mx-2" href="#">
                      Contact Me
                    </a>
                  </div>
                </div>
            </nav>
        </div>
    )

}

export default SubNav