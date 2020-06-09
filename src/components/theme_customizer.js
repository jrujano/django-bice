import React, { Component } from 'react';


class ThemeCustom extends Component {


    render() {
        return (
            <React.Fragment>
                <a data-target="theme-cutomizer-out" href="/#"
                    className="btn btn-customizer pink accent-2 white-text sidenav-trigger theme-cutomizer-trigger">
                    <i className="material-icons">settings</i>
                </a>

                <div id="theme-cutomizer-out" className="theme-cutomizer sidenav row">
                    <div className="col s12">
                        <a className="sidenav-close" href="#!"><i className="material-icons">close</i></a>
                        <h5 className="theme-cutomizer-title">Theme Customizer</h5>
                        <p className="medium-small">Customize & Preview in Real Time</p>
                        <div className="menu-options">
                            <h6 className="mt-6">Menu Options</h6>
                            <hr className="customize-devider" />
                            <div className="menu-options-form row">
                                <div className="input-field col s12 menu-color mb-0">
                                    <p className="mt-0">Menu Color</p>
                                    <div className="gradient-color center-align">
                                        <span className="menu-color-option gradient-45deg-indigo-blue" data-color="gradient-45deg-indigo-blue"></span>
                                        <span
                                            className="menu-color-option gradient-45deg-purple-deep-orange"
                                            data-color="gradient-45deg-purple-deep-orange"
                                        ></span>
                                        <span
                                            className="menu-color-option gradient-45deg-light-blue-cyan"
                                            data-color="gradient-45deg-light-blue-cyan"
                                        ></span>
                                        <span
                                            className="menu-color-option gradient-45deg-purple-amber"
                                            data-color="gradient-45deg-purple-amber"
                                        ></span>
                                        <span
                                            className="menu-color-option gradient-45deg-purple-deep-purple"
                                            data-color="gradient-45deg-purple-deep-purple"
                                        ></span>
                                        <span
                                            className="menu-color-option gradient-45deg-deep-orange-orange"
                                            data-color="gradient-45deg-deep-orange-orange"
                                        ></span>
                                        <span className="menu-color-option gradient-45deg-green-teal" data-color="gradient-45deg-green-teal"></span>
                                        <span
                                            className="menu-color-option gradient-45deg-indigo-light-blue"
                                            data-color="gradient-45deg-indigo-light-blue"
                                        ></span>
                                        <span className="menu-color-option gradient-45deg-red-pink" data-color="gradient-45deg-red-pink"></span>
                                    </div>
                                    <div className="solid-color center-align">
                                        <span className="menu-color-option red" data-color="red"></span>
                                        <span className="menu-color-option purple" data-color="purple"></span>
                                        <span className="menu-color-option pink" data-color="pink"></span>
                                        <span className="menu-color-option deep-purple" data-color="deep-purple"></span>
                                        <span className="menu-color-option cyan" data-color="cyan"></span>
                                        <span className="menu-color-option teal" data-color="teal"></span>
                                        <span className="menu-color-option light-blue" data-color="light-blue"></span>
                                        <span className="menu-color-option amber darken-3" data-color="amber darken-3"></span>
                                        <span className="menu-color-option brown darken-2" data-color="brown darken-2"></span>
                                    </div>
                                </div>
                                <div className="input-field col s12 menu-bg-color mb-0">
                                    <p className="mt-0">Menu Background Color</p>
                                    <div className="gradient-color center-align">
                                        <span
                                            className="menu-bg-color-option gradient-45deg-indigo-blue"
                                            data-color="gradient-45deg-indigo-blue"
                                        ></span>
                                        <span
                                            className="menu-bg-color-option gradient-45deg-purple-deep-orange"
                                            data-color="gradient-45deg-purple-deep-orange"
                                        ></span>
                                        <span
                                            className="menu-bg-color-option gradient-45deg-light-blue-cyan"
                                            data-color="gradient-45deg-light-blue-cyan"
                                        ></span>
                                        <span
                                            className="menu-bg-color-option gradient-45deg-purple-amber"
                                            data-color="gradient-45deg-purple-amber"
                                        ></span>
                                        <span
                                            className="menu-bg-color-option gradient-45deg-purple-deep-purple"
                                            data-color="gradient-45deg-purple-deep-purple"
                                        ></span>
                                        <span
                                            className="menu-bg-color-option gradient-45deg-deep-orange-orange"
                                            data-color="gradient-45deg-deep-orange-orange"
                                        ></span>
                                        <span className="menu-bg-color-option gradient-45deg-green-teal" data-color="gradient-45deg-green-teal"></span>
                                        <span
                                            className="menu-bg-color-option gradient-45deg-indigo-light-blue"
                                            data-color="gradient-45deg-indigo-light-blue"
                                        ></span>
                                        <span className="menu-bg-color-option gradient-45deg-red-pink" data-color="gradient-45deg-red-pink"></span>
                                    </div>
                                    <div className="solid-color center-align">
                                        <span className="menu-bg-color-option red" data-color="red"></span>
                                        <span className="menu-bg-color-option purple" data-color="purple"></span>
                                        <span className="menu-bg-color-option pink" data-color="pink"></span>
                                        <span className="menu-bg-color-option deep-purple" data-color="deep-purple"></span>
                                        <span className="menu-bg-color-option cyan" data-color="cyan"></span>
                                        <span className="menu-bg-color-option teal" data-color="teal"></span>
                                        <span className="menu-bg-color-option light-blue" data-color="light-blue"></span>
                                        <span className="menu-bg-color-option amber darken-3" data-color="amber darken-3"></span>
                                        <span className="menu-bg-color-option brown darken-2" data-color="brown darken-2"></span>
                                    </div>
                                </div>
                                <div className="input-field col s12">
                                    <div className="switch">
                                        Menu Dark
                  <label className="float-right"
                                        ><input className="menu-dark-checkbox" type="checkbox" /> <span className="lever ml-0"></span
                                        ></label>
                                    </div>
                                </div>
                                <div className="input-field col s12">
                                    <div className="switch">
                                        Menu Collapsed
                  <label className="float-right"
                                        ><input className="menu-collapsed-checkbox" type="checkbox" /> <span className="lever ml-0"></span
                                        ></label>
                                    </div>
                                </div>
                                <div className="input-field col s12">
                                    <div className="switch">
                                        <p className="mt-0">Menu Selection</p>
                                        <label>
                                            <input
                                                className="menu-selection-radio with-gap"
                                                value="sidenav-active-square"
                                                name="menu-selection"
                                                type="radio"
                                            />
                                            <span>Square</span>
                                        </label>
                                        <label>
                                            <input
                                                className="menu-selection-radio with-gap"
                                                value="sidenav-active-rounded"
                                                name="menu-selection"
                                                type="radio"
                                            />
                                            <span>Rounded</span>
                                        </label>
                                        <label>
                                            <input className="menu-selection-radio with-gap" value="" name="menu-selection" type="radio" />
                                            <span>Normal</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h6 className="mt-6">Navbar Options</h6>
                        <hr className="customize-devider" />
                        <div className="navbar-options row">
                            <div className="input-field col s12 navbar-color mb-0">
                                <p className="mt-0">Navbar Color</p>
                                <div className="gradient-color center-align">
                                    <span className="navbar-color-option gradient-45deg-indigo-blue" data-color="gradient-45deg-indigo-blue"></span>
                                    <span
                                        className="navbar-color-option gradient-45deg-purple-deep-orange"
                                        data-color="gradient-45deg-purple-deep-orange"
                                    ></span>
                                    <span
                                        className="navbar-color-option gradient-45deg-light-blue-cyan"
                                        data-color="gradient-45deg-light-blue-cyan"
                                    ></span>
                                    <span className="navbar-color-option gradient-45deg-purple-amber" data-color="gradient-45deg-purple-amber"></span>
                                    <span
                                        className="navbar-color-option gradient-45deg-purple-deep-purple"
                                        data-color="gradient-45deg-purple-deep-purple"
                                    ></span>
                                    <span
                                        className="navbar-color-option gradient-45deg-deep-orange-orange"
                                        data-color="gradient-45deg-deep-orange-orange"
                                    ></span>
                                    <span className="navbar-color-option gradient-45deg-green-teal" data-color="gradient-45deg-green-teal"></span>
                                    <span
                                        className="navbar-color-option gradient-45deg-indigo-light-blue"
                                        data-color="gradient-45deg-indigo-light-blue"
                                    ></span>
                                    <span className="navbar-color-option gradient-45deg-red-pink" data-color="gradient-45deg-red-pink"></span>
                                </div>
                                <div className="solid-color center-align">
                                    <span className="navbar-color-option red" data-color="red"></span>
                                    <span className="navbar-color-option purple" data-color="purple"></span>
                                    <span className="navbar-color-option pink" data-color="pink"></span>
                                    <span className="navbar-color-option deep-purple" data-color="deep-purple"></span>
                                    <span className="navbar-color-option cyan" data-color="cyan"></span>
                                    <span className="navbar-color-option teal" data-color="teal"></span>
                                    <span className="navbar-color-option light-blue" data-color="light-blue"></span>
                                    <span className="navbar-color-option amber darken-3" data-color="amber darken-3"></span>
                                    <span className="navbar-color-option brown darken-2" data-color="brown darken-2"></span>
                                </div>
                            </div>
                            <div className="input-field col s12">
                                <div className="switch">
                                    Navbar Dark
               <label className="float-right"
                                    ><input className="navbar-dark-checkbox" type="checkbox" /> <span className="lever ml-0"></span
                                    ></label>
                                </div>
                            </div>
                            <div className="input-field col s12">
                                <div className="switch">
                                    Navbar Fixed
               <label className="float-right"
                                    ><input className="navbar-fixed-checkbox" type="checkbox" checked /> <span className="lever ml-0"></span
                                    ></label>
                                </div>
                            </div>
                        </div>
                        <h6 className="mt-6">Footer Options</h6>
                        <hr className="customize-devider" />
                        <div className="navbar-options row">
                            <div className="input-field col s12">
                                <div className="switch">
                                    Footer Dark
               <label className="float-right"
                                    ><input className="footer-dark-checkbox" type="checkbox" /> <span className="lever ml-0"></span
                                    ></label>
                                </div>
                            </div>
                            <div className="input-field col s12">
                                <div className="switch">
                                    Footer Fixed
               <label className="float-right"
                                    ><input className="footer-fixed-checkbox" type="checkbox" /> <span className="lever ml-0"></span
                                    ></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );

    }
}

export default ThemeCustom;