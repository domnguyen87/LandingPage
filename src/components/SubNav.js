import React from 'react'

const SubNav = props => {
    return (
        <div id="blog-subnav-wrapper">
            <nav id="blog-subnav" class="navbar navbar-expand-lg bg-white">
                <div class="container px-3">
                  <div class="nav navbar-nav flex-shrink-1 flex-row align-items-center mx-lg-auto">
                    <a class="nav-item nav-link mr-2 ml-lg-2" href="#">
                      Homelessness
                    </a>
                    <a class="nav-item nav-link mx-2" href="#">
                      About ESAC
                    </a>
                    <a class="nav-item nav-link mx-2" href="#">
                      Issues
                    </a>
                    <a class="nav-item nav-link mx-2" href="#">
                      Campaigns
                    </a>
                    <a class="nav-item nav-link mx-2" href="#">
                      Taking Action
                    </a>
                    <a class="nav-item nav-link mx-2" href="#">
                      Resources
                    </a>
                  </div>
                </div>
            </nav>
        </div>
    )

}

export default SubNav