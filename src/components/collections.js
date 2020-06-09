import React, { Component } from 'react';


class Collections extends Component {


  render() {
    return (
      <React.Fragment>

        <div id="work-collections">
          <div className="row">
            <div className="col s12 m12 l6">
              <ul id="projects-collection" className="collection z-depth-1 animate fadeLeft">
                <li className="collection-item avatar">
                  <i className="material-icons cyan circle">card_travel</i>
                  <h6 className="collection-header m-0">Projects</h6>
                  <p>Your Favorites</p>
                </li>
                <li className="collection-item">
                  <div className="row">
                    <div className="col s6">
                      <p className="collections-title">Web App</p>
                      <p className="collections-content">AEC Company</p>
                    </div>
                    <div className="col s3"><span className="task-cat cyan">Development</span></div>
                    <div className="col s3">
                      <div id="project-line-1"></div>
                    </div>
                  </div>
                </li>
                <li className="collection-item">
                  <div className="row">
                    <div className="col s6">
                      <p className="collections-title">Mobile App for Social</p>
                      <p className="collections-content">iSocial App</p>
                    </div>
                    <div className="col s3"><span className="task-cat red accent-2">UI/UX</span></div>
                    <div className="col s3">
                      <div id="project-line-2"></div>
                    </div>
                  </div>
                </li>
                <li className="collection-item">
                  <div className="row">
                    <div className="col s6">
                      <p className="collections-title">Website</p>
                      <p className="collections-content">MediTab</p>
                    </div>
                    <div className="col s3"><span className="task-cat teal accent-4">Marketing</span></div>
                    <div className="col s3">
                      <div id="project-line-3"></div>
                    </div>
                  </div>
                </li>
                <li className="collection-item">
                  <div className="row">
                    <div className="col s6">
                      <p className="collections-title">AdWord campaign</p>
                      <p className="collections-content">True Line</p>
                    </div>
                    <div className="col s3"><span className="task-cat deep-orange accent-2">SEO</span></div>
                    <div className="col s3">
                      <div id="project-line-4"></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col s12 m12 l6">
              <ul id="issues-collection" className="collection z-depth-1 animate fadeRight">
                <li className="collection-item avatar">
                  <i className="material-icons red accent-2 circle">bug_report</i>
                  <h6 className="collection-header m-0">Issues</h6>
                  <p>Assigned to you</p>
                </li>
                <li className="collection-item">
                  <div className="row">
                    <div className="col s7">
                      <p className="collections-title"><strong>#102</strong> Home Page</p>
                      <p className="collections-content">Web Project</p>
                    </div>
                    <div className="col s2"><span className="task-cat deep-orange accent-2">P1</span></div>
                    <div className="col s3">
                      <div className="progress">
                        <div className="determinate" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="collection-item">
                  <div className="row">
                    <div className="col s7">
                      <p className="collections-title"><strong>#108</strong> API Fix</p>
                      <p className="collections-content">API Project</p>
                    </div>
                    <div className="col s2"><span className="task-cat cyan">P2</span></div>
                    <div className="col s3">
                      <div className="progress">
                        <div className="determinate" style={{ width: '40%' }}></div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="collection-item">
                  <div className="row">
                    <div className="col s7">
                      <p className="collections-title"><strong>#205</strong> Profile page css</p>
                      <p className="collections-content">New Project</p>
                    </div>
                    <div className="col s2"><span className="task-cat red accent-2">P3</span></div>
                    <div className="col s3">
                      <div className="progress">
                        <div className="determinate" style={{ width: '95%' }}></div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="collection-item">
                  <div className="row">
                    <div className="col s7">
                      <p className="collections-title"><strong>#188</strong> SAP Changes</p>
                      <p className="collections-content">SAP Project</p>
                    </div>
                    <div className="col s2"><span className="task-cat teal accent-4">P1</span></div>
                    <div className="col s3">
                      <div className="progress">
                        <div className="determinate" style={{ width: '10%' }}></div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );

  }
}

export default Collections;