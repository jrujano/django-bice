import React, { Component } from 'react';


class RigthSidebar extends Component {


    render() {
        return (
            <React.Fragment>

                <aside id="right-sidebar-nav">
                    <div id="slide-out-right" className="slide-out-right-sidenav sidenav rightside-navigation">
                        <div className="row">
                            <div className="slide-out-right-title">
                                <div className="col s12 border-bottom-1 pb-0 pt-1">
                                    <div className="row">
                                        <div className="col s2 pr-0 center">
                                            <i className="material-icons vertical-text-middle"><a href="/#" className="sidenav-close">clear</a></i>
                                        </div>
                                        <div className="col s10 pl-0">
                                            <ul className="tabs">
                                                <li className="tab col s4 p-0">
                                                    <a href="#messages" className="active">
                                                        <span>Messages</span>
                                                    </a>
                                                </li>
                                                <li className="tab col s4 p-0">
                                                    <a href="#settings">
                                                        <span>Settings</span>
                                                    </a>
                                                </li>
                                                <li className="tab col s4 p-0">
                                                    <a href="#activity">
                                                        <span>Activity</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slide-out-right-body row pl-3">
                                <div id="messages" className="col s12 pb-0">
                                    <div className="collection border-none mb-0">
                                        <input className="header-search-input mt-4 mb-2" type="text" name="Search" placeholder="Search Messages" />
                                        <ul className="collection right-sidebar-chat p-0 mb-0">
                                            <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                data-target="slide-out-chat">
                                                <span className="avatar-status avatar-online avatar-50"><img
                                                    src="https://pixinvent.com/materialize-material-design-admin-template//app-assets/images/avatar/avatar-7.png" alt="avatar" />
                                                    <i></i>
                                                </span>
                                                <div className="user-content">
                                                    <h6 className="line-height-0">Elizabeth Elliott</h6>
                                                    <p className="medium-small blue-grey-text text-lighten-3 pt-3">Thank you</p>
                                                </div>
                                                <span className="secondary-content medium-small">5.00 AM</span>
                                            </li>
                                            <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                data-target="slide-out-chat">
                                                <span className="avatar-status avatar-online avatar-50"><img
                                                    src="https://pixinvent.com/materialize-material-design-admin-template//app-assets/images/avatar/avatar-1.png" alt="avatar" />
                                                    <i></i>
                                                </span>
                                                <div className="user-content">
                                                    <h6 className="line-height-0">Mary Adams</h6>
                                                    <p className="medium-small blue-grey-text text-lighten-3 pt-3">Hello Boo</p>
                                                </div>
                                                <span className="secondary-content medium-small">4.14 AM</span>
                                            </li>
                                            <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                data-target="slide-out-chat">
                                                <span className="avatar-status avatar-off avatar-50"><img
                                                    src="https://pixinvent.com/materialize-material-design-admin-template//app-assets/images/avatar/avatar-2.png" alt="avatar" />
                                                    <i></i>
                                                </span>
                                                <div className="user-content">
                                                    <h6 className="line-height-0">Caleb Richards</h6>
                                                    <p className="medium-small blue-grey-text text-lighten-3 pt-3">Hello Boo</p>
                                                </div>
                                                <span className="secondary-content medium-small">4.14 AM</span>
                                            </li>
                                            <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                data-target="slide-out-chat">
                                                <span className="avatar-status avatar-online avatar-50"><img
                                                    src="https://pixinvent.com/materialize-material-design-admin-template//app-assets/images/avatar/avatar-3.png" alt="avatar" />
                                                    <i></i>
                                                </span>
                                                <div className="user-content">
                                                    <h6 className="line-height-0">Caleb Richards</h6>
                                                    <p className="medium-small blue-grey-text text-lighten-3 pt-3">Keny !</p>
                                                </div>
                                                <span className="secondary-content medium-small">9.00 PM</span>
                                            </li>
                                            <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                data-target="slide-out-chat">
                                                <span className="avatar-status avatar-online avatar-50"><img
                                                    src="https://pixinvent.com/materialize-material-design-admin-template//app-assets/images/avatar/avatar-4.png" alt="avatar" />
                                                    <i></i>
                                                </span>
                                                <div className="user-content">
                                                    <h6 className="line-height-0">June Lane</h6>
                                                    <p className="medium-small blue-grey-text text-lighten-3 pt-3">Ohh God</p>
                                                </div>
                                                <span className="secondary-content medium-small">4.14 AM</span>
                                            </li>
                                            <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                data-target="slide-out-chat">
                                                <span className="avatar-status avatar-off avatar-50"><img
                                                    src="https://pixinvent.com/materialize-material-design-admin-template//app-assets/images/avatar/avatar-5.png" alt="avatar" />
                                                    <i></i>
                                                </span>
                                                <div className="user-content">
                                                    <h6 className="line-height-0">Edward Fletcher</h6>
                                                    <p className="medium-small blue-grey-text text-lighten-3 pt-3">Love you</p>
                                                </div>
                                                <span className="secondary-content medium-small">5.15 PM</span>
                                            </li>
                                            <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                data-target="slide-out-chat">
                                                <span className="avatar-status avatar-online avatar-50"><img
                                                    src="https://pixinvent.com/materialize-material-design-admin-template//app-assets/images/avatar/avatar-6.png" alt="avatar" />
                                                    <i></i>
                                                </span>
                                                <div className="user-content">
                                                    <h6 className="line-height-0">Crystal Bates</h6>
                                                    <p className="medium-small blue-grey-text text-lighten-3 pt-3">Can we</p>
                                                </div>
                                                <span className="secondary-content medium-small">8.00 AM</span>
                                            </li>
                                            <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                data-target="slide-out-chat">
                                                <span className="avatar-status avatar-off avatar-50"><img
                                                    src="https://pixinvent.com/materialize-material-design-admin-template//app-assets/images/avatar/avatar-7.png" alt="avatar" />
                                                    <i></i>
                                                </span>
                                                <div className="user-content">
                                                    <h6 className="line-height-0">Nathan Watts</h6>
                                                    <p className="medium-small blue-grey-text text-lighten-3 pt-3">Great!</p>
                                                </div>
                                                <span className="secondary-content medium-small">9.53 PM</span>
                                            </li>
                                            <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                data-target="slide-out-chat">
                                                <span className="avatar-status avatar-off avatar-50"><img
                                                    src="https://pixinvent.com/materialize-material-design-admin-template//app-assets/images/avatar/avatar-8.png" alt="avatar" />
                                                    <i></i>
                                                </span>
                                                <div className="user-content">
                                                    <h6 className="line-height-0">Willard Wood</h6>
                                                    <p className="medium-small blue-grey-text text-lighten-3 pt-3">Do it</p>
                                                </div>
                                                <span className="secondary-content medium-small">4.20 AM</span>
                                            </li>
                                            <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                data-target="slide-out-chat">
                                                <span className="avatar-status avatar-online avatar-50"><img
                                                    src="https://pixinvent.com/materialize-material-design-admin-template//app-assets/images/avatar/avatar-1.png" alt="avatar" />
                                                    <i></i>
                                                </span>
                                                <div className="user-content">
                                                    <h6 className="line-height-0">Ronnie Ellis</h6>
                                                    <p className="medium-small blue-grey-text text-lighten-3 pt-3">Got that</p>
                                                </div>
                                                <span className="secondary-content medium-small">5.20 AM</span>
                                            </li>
                                            <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                data-target="slide-out-chat">
                                                <span className="avatar-status avatar-online avatar-50"><img
                                                    src="https://pixinvent.com/materialize-material-design-admin-template//app-assets/images/avatar/avatar-9.png" alt="avatar" />
                                                    <i></i>
                                                </span>
                                                <div className="user-content">
                                                    <h6 className="line-height-0">Daniel Russell</h6>
                                                    <p className="medium-small blue-grey-text text-lighten-3 pt-3">Thank you</p>
                                                </div>
                                                <span className="secondary-content medium-small">12.00 AM</span>
                                            </li>
                                            <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                data-target="slide-out-chat">
                                                <span className="avatar-status avatar-off avatar-50"><img
                                                    src="https://pixinvent.com/materialize-material-design-admin-template//app-assets/images/avatar/avatar-10.png" alt="avatar" />
                                                    <i></i>
                                                </span>
                                                <div className="user-content">
                                                    <h6 className="line-height-0">Sarah Graves</h6>
                                                    <p className="medium-small blue-grey-text text-lighten-3 pt-3">Okay you</p>
                                                </div>
                                                <span className="secondary-content medium-small">11.14 PM</span>
                                            </li>
                                            <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                data-target="slide-out-chat">
                                                <span className="avatar-status avatar-off avatar-50"><img
                                                    src="https://pixinvent.com/materialize-material-design-admin-template//app-assets/images/avatar/avatar-11.png" alt="avatar" />
                                                    <i></i>
                                                </span>
                                                <div className="user-content">
                                                    <h6 className="line-height-0">Andrew Hoffman</h6>
                                                    <p className="medium-small blue-grey-text text-lighten-3 pt-3">Can do</p>
                                                </div>
                                                <span className="secondary-content medium-small">7.30 PM</span>
                                            </li>
                                            <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                                                data-target="slide-out-chat">
                                                <span className="avatar-status avatar-online avatar-50"><img
                                                    src="https://pixinvent.com/materialize-material-design-admin-template//app-assets/images/avatar/avatar-12.png" alt="avatar" />
                                                    <i></i>
                                                </span>
                                                <div className="user-content">
                                                    <h6 className="line-height-0">Camila Lynch</h6>
                                                    <p className="medium-small blue-grey-text text-lighten-3 pt-3">Leave it</p>
                                                </div>
                                                <span className="secondary-content medium-small">2.00 PM</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="settings" className="col s12">
                                    <p className="setting-header mt-8 mb-3 ml-5 font-weight-900">GENERAL SETTINGS</p>
                                    <ul className="collection border-none">
                                        <li className="collection-item border-none">
                                            <div className="m-0">
                                                <span>Notifications</span>
                                                <div className="switch right">
                                                    <label>
                                                        <input checked type="checkbox" />
                                                        <span className="lever"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="collection-item border-none">
                                            <div className="m-0">
                                                <span>Show recent activity</span>
                                                <div className="switch right">
                                                    <label>
                                                        <input type="checkbox" />
                                                        <span className="lever"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="collection-item border-none">
                                            <div className="m-0">
                                                <span>Show recent activity</span>
                                                <div className="switch right">
                                                    <label>
                                                        <input type="checkbox" />
                                                        <span className="lever"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="collection-item border-none">
                                            <div className="m-0">
                                                <span>Show Task statistics</span>
                                                <div className="switch right">
                                                    <label>
                                                        <input type="checkbox" />
                                                        <span className="lever"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="collection-item border-none">
                                            <div className="m-0">
                                                <span>Show your emails</span>
                                                <div className="switch right">
                                                    <label>
                                                        <input type="checkbox" />
                                                        <span className="lever"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="collection-item border-none">
                                            <div className="m-0">
                                                <span>Email Notifications</span>
                                                <div className="switch right">
                                                    <label>
                                                        <input checked type="checkbox" />
                                                        <span className="lever"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <p className="setting-header mt-7 mb-3 ml-5 font-weight-900">SYSTEM SETTINGS</p>
                                    <ul className="collection border-none">
                                        <li className="collection-item border-none">
                                            <div className="m-0">
                                                <span>System Logs</span>
                                                <div className="switch right">
                                                    <label>
                                                        <input type="checkbox" />
                                                        <span className="lever"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="collection-item border-none">
                                            <div className="m-0">
                                                <span>Error Reporting</span>
                                                <div className="switch right">
                                                    <label>
                                                        <input type="checkbox" />
                                                        <span className="lever"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="collection-item border-none">
                                            <div className="m-0">
                                                <span>Applications Logs</span>
                                                <div className="switch right">
                                                    <label>
                                                        <input checked type="checkbox" />
                                                        <span className="lever"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="collection-item border-none">
                                            <div className="m-0">
                                                <span>Backup Servers</span>
                                                <div className="switch right">
                                                    <label>
                                                        <input type="checkbox" />
                                                        <span className="lever"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="collection-item border-none">
                                            <div className="m-0">
                                                <span>Audit Logs</span>
                                                <div className="switch right">
                                                    <label>
                                                        <input type="checkbox" />
                                                        <span className="lever"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div id="activity" className="col s12">
                                    <div className="activity">
                                        <p className="mt-5 mb-0 ml-5 font-weight-900">SYSTEM LOGS</p>
                                        <ul className="widget-timeline mb-0">
                                            <li className="timeline-items timeline-icon-green active">
                                                <div className="timeline-time">Today</div>
                                                <h6 className="timeline-title">Homepage mockup design</h6>
                                                <p className="timeline-text">Melissa liked your activity.</p>
                                                <div className="timeline-content orange-text">Important</div>
                                            </li>
                                            <li className="timeline-items timeline-icon-cyan active">
                                                <div className="timeline-time">10 min</div>
                                                <h6 className="timeline-title">Melissa liked your activity Drinks.</h6>
                                                <p className="timeline-text">Here are some news feed interactions concepts.</p>
                                                <div className="timeline-content green-text">Resolved</div>
                                            </li>
                                            <li className="timeline-items timeline-icon-red active">
                                                <div className="timeline-time">30 mins</div>
                                                <h6 className="timeline-title">12 new users registered</h6>
                                                <p className="timeline-text">Here are some news feed interactions concepts.</p>
                                                <div className="timeline-content">
                                                    <img src="https://pixinvent.com/materialize-material-design-admin-template//app-assets/images/icon/pdf.png" alt="document" height="30" width="25"
                                                        className="mr-1" />Registration.doc
                </div>
                                            </li>
                                            <li className="timeline-items timeline-icon-indigo active">
                                                <div className="timeline-time">2 Hrs</div>
                                                <h6 className="timeline-title">Tina is attending your activity</h6>
                                                <p className="timeline-text">Here are some news feed interactions concepts.</p>
                                                <div className="timeline-content">
                                                    <img src="https://pixinvent.com/materialize-material-design-admin-template//app-assets/images/icon/pdf.png" alt="document" height="30" width="25"
                                                        className="mr-1" />Activity.doc
                </div>
                                            </li>
                                            <li className="timeline-items timeline-icon-orange">
                                                <div className="timeline-time">5 hrs</div>
                                                <h6 className="timeline-title">Josh is now following you</h6>
                                                <p className="timeline-text">Here are some news feed interactions concepts.</p>
                                                <div className="timeline-content red-text">Pending</div>
                                            </li>
                                        </ul>
                                        <p className="mt-5 mb-0 ml-5 font-weight-900">APPLICATIONS LOGS</p>
                                        <ul className="widget-timeline mb-0">
                                            <li className="timeline-items timeline-icon-green active">
                                                <div className="timeline-time">Just now</div>
                                                <h6 className="timeline-title">New order received urgent</h6>
                                                <p className="timeline-text">Melissa liked your activity.</p>
                                                <div className="timeline-content orange-text">Important</div>
                                            </li>
                                            <li className="timeline-items timeline-icon-cyan active">
                                                <div className="timeline-time">05 min</div>
                                                <h6 className="timeline-title">System shutdown.</h6>
                                                <p className="timeline-text">Here are some news feed interactions concepts.</p>
                                                <div className="timeline-content blue-text">Urgent</div>
                                            </li>
                                            <li className="timeline-items timeline-icon-red">
                                                <div className="timeline-time">20 mins</div>
                                                <h6 className="timeline-title">Database overloaded 89%</h6>
                                                <p className="timeline-text">Here are some news feed interactions concepts.</p>
                                                <div className="timeline-content">
                                                    <img src="https://pixinvent.com/materialize-material-design-admin-template//app-assets/images/icon/pdf.png" alt="document" height="30" width="25"
                                                        className="mr-1" />Database-log.doc
                </div>
                                            </li>
                                        </ul>
                                        <p className="mt-5 mb-0 ml-5 font-weight-900">SERVER LOGS</p>
                                        <ul className="widget-timeline mb-0">
                                            <li className="timeline-items timeline-icon-green active">
                                                <div className="timeline-time">10 min</div>
                                                <h6 className="timeline-title">System error</h6>
                                                <p className="timeline-text">Melissa liked your activity.</p>
                                                <div className="timeline-content red-text">Error</div>
                                            </li>
                                            <li className="timeline-items timeline-icon-cyan">
                                                <div className="timeline-time">1 min</div>
                                                <h6 className="timeline-title">Production server down.</h6>
                                                <p className="timeline-text">Here are some news feed interactions concepts.</p>
                                                <div className="timeline-content blue-text">Urgent</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slide Out Chat */}
                    <ul id="slide-out-chat" className="sidenav slide-out-right-sidenav-chat">
                        <li className="center-align pt-2 pb-2 sidenav-close chat-head">
                            <a href="#!"><i className="material-icons mr-0">chevron_left</i>Elizabeth Elliott</a>
                        </li>
                        <li className="chat-body">
                            <ul className="collection">
                                <li className="collection-item display-flex avatar pl-5 pb-0" data-target="slide-out-chat">
                                    <span className="avatar-status avatar-online avatar-50"><img src="https://pixinvent.com/materialize-material-design-admin-template//app-assets/images/avatar/avatar-7.png"
                                        alt="avatar" />
                                    </span>
                                    <div className="user-content speech-bubble">
                                        <p className="medium-small">hello!</p>
                                    </div>
                                </li>
                                <li className="collection-item display-flex avatar justify-content-end pl-5 pb-0" data-target="slide-out-chat">
                                    <div className="user-content speech-bubble-right">
                                        <p className="medium-small">How can we help? We're here for you!</p>
                                    </div>
                                </li>
                                <li className="collection-item display-flex avatar pl-5 pb-0" data-target="slide-out-chat">
                                    <span className="avatar-status avatar-online avatar-50"><img src="https://pixinvent.com/materialize-material-design-admin-template//app-assets/images/avatar/avatar-7.png"
                                        alt="avatar" />
                                    </span>
                                    <div className="user-content speech-bubble">
                                        <p className="medium-small">I am looking for the best admin template.?</p>
                                    </div>
                                </li>
                                <li className="collection-item display-flex avatar justify-content-end pl-5 pb-0" data-target="slide-out-chat">
                                    <div className="user-content speech-bubble-right">
                                        <p className="medium-small">Materialize admin is the responsive materializecss admin template.</p>
                                    </div>
                                </li>

                                <li className="collection-item display-grid width-100 center-align">
                                    <p>8:20 a.m.</p>
                                </li>

                                <li className="collection-item display-flex avatar pl-5 pb-0" data-target="slide-out-chat">
                                    <span className="avatar-status avatar-online avatar-50"><img src="https://pixinvent.com/materialize-material-design-admin-template//app-assets/images/avatar/avatar-7.png"
                                        alt="avatar" />
                                    </span>
                                    <div className="user-content speech-bubble">
                                        <p className="medium-small">Ohh! very nice</p>
                                    </div>
                                </li>
                                <li className="collection-item display-flex avatar justify-content-end pl-5 pb-0" data-target="slide-out-chat">
                                    <div className="user-content speech-bubble-right">
                                        <p className="medium-small">Thank you.</p>
                                    </div>
                                </li>
                                <li className="collection-item display-flex avatar pl-5 pb-0" data-target="slide-out-chat">
                                    <span className="avatar-status avatar-online avatar-50"><img src="https://pixinvent.com/materialize-material-design-admin-template//app-assets/images/avatar/avatar-7.png"
                                        alt="avatar" />
                                    </span>
                                    <div className="user-content speech-bubble">
                                        <p className="medium-small">How can I purchase it?</p>
                                    </div>
                                </li>

                                <li className="collection-item display-grid width-100 center-align">
                                    <p>9:00 a.m.</p>
                                </li>

                                <li className="collection-item display-flex avatar justify-content-end pl-5 pb-0" data-target="slide-out-chat">
                                    <div className="user-content speech-bubble-right">
                                        <p className="medium-small">From ThemeForest.</p>
                                    </div>
                                </li>
                                <li className="collection-item display-flex avatar justify-content-end pl-5 pb-0" data-target="slide-out-chat">
                                    <div className="user-content speech-bubble-right">
                                        <p className="medium-small">Only $24</p>
                                    </div>
                                </li>
                                <li className="collection-item display-flex avatar pl-5 pb-0" data-target="slide-out-chat">
                                    <span className="avatar-status avatar-online avatar-50"><img src="https://pixinvent.com/materialize-material-design-admin-template//app-assets/images/avatar/avatar-7.png"
                                        alt="avatar" />
                                    </span>
                                    <div className="user-content speech-bubble">
                                        <p className="medium-small">Ohh! Thank you.</p>
                                    </div>
                                </li>
                                <li className="collection-item display-flex avatar pl-5 pb-0" data-target="slide-out-chat">
                                    <span className="avatar-status avatar-online avatar-50"><img src="https://pixinvent.com/materialize-material-design-admin-template//app-assets/images/avatar/avatar-7.png"
                                        alt="avatar" />
                                    </span>
                                    <div className="user-content speech-bubble">
                                        <p className="medium-small">I will purchase it for sure.</p>
                                    </div>
                                </li>
                                <li className="collection-item display-flex avatar justify-content-end pl-5 pb-0" data-target="slide-out-chat">
                                    <div className="user-content speech-bubble-right">
                                        <p className="medium-small">Great, Feel free to get in touch on</p>
                                    </div>
                                </li>
                                <li className="collection-item display-flex avatar justify-content-end pl-5 pb-0" data-target="slide-out-chat">
                                    <div className="user-content speech-bubble-right">
                                        <p className="medium-small">https://pixinvent.ticksy.com/</p>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li className="center-align chat-footer">
                            <form className="col s12" onsubmit="slideOutChat()" >
                                <div className="input-field">
                                    <input id="icon_prefix" type="text" className="search" />
                                    <label htmlFor="icon_prefix">Type here..</label>
                                    <a onclick="slideOutChat()" ><i className="material-icons prefix">send</i></a>
                                </div>
                            </form>
                        </li>
                    </ul>
                </aside>
            </React.Fragment>




        );

    }
}

export default RigthSidebar;