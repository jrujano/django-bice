import React, { Component } from 'react';


class CardWidget extends Component {

  constructor(props) {
    super(props);
    this.state = {
      task1: true,
      task2: true,
      task3: true
    }
  }

  onWebApiClick() {
    console.log(this.state.task1);
    this.setState({
      task1: !this.state.task1
    });
    console.log(this.state.task1);
    
  }


  render() {
    return (
      <React.Fragment>

        <div id="card-widgets">
          <div className="row">
            <div className="col s12 m6 l4">
              <ul id="task-card" className="collection with-header animate fadeLeft">
                <li className="collection-header cyan">
                  <h5 className="task-card-title mb-3">My Task</h5>
                  <p className="task-card-date">Sept 16, 2019</p>
                </li>
                <li className="collection-item dismissable">
                  <label htmlFor="task1">
                    <input type="checkbox" id="task1" /> <span className="width-100">Create Mobile App UI. </span>
                    <a href="/#!" className="secondary-content"><span className="ultra-small">Today</span></a>
                    <span className="task-cat cyan">Mobile App</span>
                  </label>
                </li>
                <li className="collection-item dismissable">
                  <label htmlFor="task2">
                    <input type="checkbox" id="task2" 
                    onClick={() => this.onWebApiClick()}
                    checked={this.state.task1} />
                    <span className="width-100">Check the new API standerds. </span>
                    <a href="/#!" className="secondary-content"> <span className="ultra-small">Monday</span> </a>
                    <span className="task-cat red accent-2">Web API</span>
                  </label>
                </li>
                <li className="collection-item dismissable">
                  <label htmlFor="task3">
                    <input type="checkbox" id="task3" checked="checked" 
                    onClick={() => this.onWebApiClick()}
                    
                     />
                    <span className="width-100"> Check the new Mockup of ABC.</span>
                    <a href="/#!" className="secondary-content"> <span className="ultra-small">Wednesday</span> </a>
                    <span className="task-cat teal accent-4">Mockup</span>
                  </label>
                </li>
                <li className="collection-item dismissable">
                  <label htmlFor="task4">
                    <input type="checkbox" id="task4" checked="checked" disabled="disabled" 
                    onClick={() => this.onWebApiClick()}
                     />
                    <span className="width-100">I did it ! </span>
                    <a href="/#!" className="secondary-content"> <span className="ultra-small">Sunday</span> </a>
                    <span className="task-cat deep-orange accent-2">Mobile App</span>
                  </label>
                </li>
              </ul>
            </div>
            <div className="col s12 m6 l4">
              <div id="flight-card" className="card animate fadeUp">
                <div className="card-header deep-orange accent-2">
                  <div className="card-title">
                    <h5 className="task-card-title mb-3 mt-0 white-text">Flight</h5>
                    <p className="flight-card-date">June 18, Thu 04:50</p>
                  </div>
                </div>
                <div className="card-content-bg white-text">
                  <div className="card-content">
                    <div className="row flight-state-wrapper">
                      <div className="col s5 m5 l5 center-align">
                        <div className="flight-state">
                          <h4 className="margin white-text">LDN</h4>
                          <p className="ultra-small">London</p>
                        </div>
                      </div>
                      <div className="col s2 m2 l2 center-align"><i className="material-icons flight-icon">local_airport</i>
                      </div>
                      <div className="col s5 m5 l5 center-align">
                        <div className="flight-state">
                          <h4 className="margin white-text">SFO</h4>
                          <p className="ultra-small">San Francisco</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s6 m6 l6 center-align">
                        <div className="flight-info">
                          <p className="small"><span className="grey-text text-lighten-4">Depart:</span> 04.50</p>
                          <p className="small"><span className="grey-text text-lighten-4">Flight:</span> IB 5786</p>
                          <p className="small"><span className="grey-text text-lighten-4">Terminal:</span> B</p>
                        </div>
                      </div>
                      <div className="col s6 m6 l6 center-align flight-state-two">
                        <div className="flight-info">
                          <p className="small"><span className="grey-text text-lighten-4">Arrive:</span> 08.50</p>
                          <p className="small"><span className="grey-text text-lighten-4">Flight:</span> IB 5786</p>
                          <p className="small"><span className="grey-text text-lighten-4">Terminal:</span> C</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 m12 l4">
              <div id="profile-card" className="card animate fadeRight">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src="https://pixinvent.com/materialize-material-design-admin-template//app-assets/images/gallery/3.png" alt="user bg" />
                </div>
                <div className="card-content">
                  <img src="https://pixinvent.com/materialize-material-design-admin-template//app-assets/images/avatar/avatar-7.png" alt=""
                    className="circle responsive-img activator card-profile-image cyan lighten-1 padding-2" />
                  <a className="btn-floating activator btn-move-up waves-effect waves-light red accent-2 z-depth-4 right" href="/#!">
                    <i className="material-icons">edit</i>
                  </a>
                  <h5 className="card-title activator grey-text text-darken-4">Roger Waters</h5>
                  <p><i className="material-icons profile-card-i">perm_identity</i> Project Manager</p>
                  <p><i className="material-icons profile-card-i">perm_phone_msg</i> +1 (612) 222 8989</p>
                  <p><i className="material-icons profile-card-i">email</i> yourmail@domain.com</p>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">Roger Waters <i
                    className="material-icons right">close</i>
                  </span>
                  <p>Here is some more information about this card.</p>
                  <p><i className="material-icons">perm_identity</i> Project Manager</p>
                  <p><i className="material-icons">perm_phone_msg</i> +1 (612) 222 8989</p>
                  <p><i className="material-icons">email</i> yourmail@domain.com</p>
                  <p><i className="material-icons">cake</i> 18th June 1990</p>
                  <p></p>
                  <p><i className="material-icons">airplanemode_active</i> BAR - AUS</p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>

    );

  }
}

export default CardWidget;