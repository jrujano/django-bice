import React, { Component } from 'react';
// import { Redirect } from 'react-router'
import axios from 'axios';
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isSignedUp: false
            
          };
    }
   
    handleChangeUsername = event => {
        this.setState(
            { username: event.target.value }
        );
    }

    handleChangePass = event => {
        this.setState(
            { password: event.target.value }
        );

    }

    handleUpdateParent =   event => {
        this.props.updateParent();
    }

    

    handleSubmit= event =>{
        event.preventDefault();
    
        var payload={
            "username":this.state.username,
            "password":this.state.password
        }
        console.log(payload);
        // axios.post('https://api.deeplegal.cl/account/login/',payload)
        // .then(
        //   resp =>{
        //     console.log(resp);
        //     console.log(resp.data);
            
        //     localStorage.setItem('token', resp.data.token);
        //     localStorage.setItem('logged_in', true);
        //     this.handleUpdateParent();
        //     this.setState({ isSignedUp: true });
            
            
        //   }
        // )
        axios.post('https://django-bice.herokuapp.com/account/token/obtain/',payload)
        .then(
          resp =>{
            console.log(resp);
            console.log(resp.data);
            
            localStorage.setItem('token', resp.data.access);
            localStorage.setItem('logged_in', true);
            localStorage.setItem('token_refresh', resp.data.refresh);
            this.handleUpdateParent();
            this.setState({ isSignedUp: true });
            
            
          }
        )
      }

    render() {

        
        

        return (
            <React.Fragment>
            <div className="row">
                <div className="col s12">
                    <div className="container">
                        <div id="login-page" className="row">
                            <div className="col s12 m6 l4 z-depth-4 card-panel border-radius-6 login-card bg-opacity-8">
                                <form className="login-form">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <h5 className="ml-4">Sign in</h5>
                                        </div>
                                    </div>
                                    <div className="row margin">
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix pt-2">person_outline</i>
                                            <input id="username" type="text" onChange={this.handleChangeUsername} />
                                            <label htmlFor="username" className="center-align">Username</label>
                                        </div>
                                    </div>
                                    <div className="row margin">
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix pt-2">lock_outline</i>
                                            <input id="password" type="password" onChange={this.handleChangePass} />
                                            <label htmlFor="password">Password</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col s12 m12 l12 ml-2 mt-1">
                                            <p>
                                                <label>
                                                    <input type="checkbox" />
                                                    <span>Remember Me</span>
                                                </label>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <a href="/#"
                                                className="btn waves-effect waves-light border-round gradient-45deg-purple-deep-orange col s12" onClick={this.handleSubmit}>Login</a>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s6 m6 l6">
                                            <p className="margin medium-small" onClick={this.createAlert}><a href="user-register.html">Register Now!</a></p>
                                        </div>
                                        <div className="input-field col s6 m6 l6">
                                            <p className="margin right-align medium-small"><a href="user-forgot-password.html">Forgot password ?</a>
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="content-overlay"></div>
                </div>
            </div>
            </React.Fragment>
        );

    }
}

export default Login;