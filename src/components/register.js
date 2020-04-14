import React, { Component } from 'react';
import axios from 'axios';
import { Input } from '@progress/kendo-react-inputs';

class RegisterUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            success: false,
        };
    }

    handleChangeUsername = event => {
        this.setState(
            { username: event.target.value }
        );
    }

    handleChangeEmail = event => {
        this.setState(
            { email: event.target.value }
        );
    }

    handleChangePass = event => {
        this.setState(
            { password: event.target.value }
        );

    }

    handleLogin = event => {
        console.log('sssss');
        this.props.updateRegister();

    }

    handleSubmit = async event => {
        // event.preventDefault();
        var payload = {
            "username": this.state.username,
            "password": this.state.password,
            "email": this.state.email
        }
        console.log(payload);
        const resp = await axios.post(
            // 'http://127.0.0.1:8000/account/user/create/', payload
             'https://django-bice.herokuapp.com/account/user/create/', payload
        );

        console.log(resp);



        this.handleLogin();

    }
    render() {
        const usernameValidationMessage = "Your username should contain only letters!";
        const passwordValidationMessage = "Please enter password between 6 and 16 characters!";

        if (this.props.register) {
            return (
                <React.Fragment>
                    <div className="row">
                        <div className="col s12">
                            <div className="container"><div id="register-page" className="row">
                                <div className="col s12 m6 l4 z-depth-4 card-panel border-radius-6 register-card bg-opacity-8">
                                    <form className="login-form">
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <h5 className="ml-4">Registrarse</h5>

                                            </div>
                                        </div>
                                        <div className="row margin">
                                            <div className="input-field col s12">
                                                <i className="material-icons prefix pt-2">person_outline</i>
                                                {/* <input id="username" type="text" onChange={this.handleChangeUsername} /> */}
                                                <label for="username" className="center-align" >Nombre de usuario</label>
                                                <br /><br />
                                                <Input
                                                    onChange={this.handleChangeUsername}
                                                    name="username"

                                                    label="Nombre de usuario"
                                                    pattern={"[A-Za-z]+"}
                                                    minLength={5}
                                                    required={true}
                                                    validationMessage={usernameValidationMessage}
                                                />
                                            </div>
                                        </div>
                                        <div className="row margin">
                                            <div className="input-field col s12">
                                                <i className="material-icons prefix pt-2">mail_outline</i>
                                                {/* <input id="email" type="email" onChange={this.handleChangeEmail} /> */}
                                                <label for="email"  >Email</label>
                                                <br /><br />
                                                <Input
                                                    onChange={this.handleChangeEmail} 
                                                    name="email"
                                                    type="email"
                                                    style={{ width: '100%' }}
                                                    label="Email"
                                                    required={true}
                                                />
                                            </div>
                                        </div>
                                        <div className="row margin">
                                            <div className="input-field col s12">
                                                <i className="material-icons prefix pt-2">lock_outline</i>
                                                {/* <input id="password" type="password" onChange={this.handleChangePass}
                                                    required={true}
                                                    minLength={6}
                                                    maxLength={18}
                                                /> */}
                                                <label for="password">Password</label>
                                                <br /><br />
                                                <Input
                                                    onChange={this.handleChangePass}
                                                    name="password"
                                                    type="password"
                                                    style={{ width: '100%' }}
                                                    label="¡Ingrese la contraseña entre 8 y 16 caracteres!"
                                                    required={true}
                                                    minLength={8}
                                                    maxLength={10}
                                                    validationMessage={passwordValidationMessage}
                                                />
                                            </div>
                                        </div>
                                        {/* <div className="row margin">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix pt-2">lock_outline</i>
                                        <input id="password-again" type="password" />
                                        <label for="password-again">Password again</label>
                                    </div>
                                </div> */}
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <a href="/#!" onClick={this.handleSubmit} className="btn waves-effect waves-light border-round gradient-45deg-purple-deep-orange col s12">Registrarse</a>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12" />
                                            <p className="margin medium-small">
                                                <a href="/#!" onClick={this.handleLogin}>¿Ya tienes una cuenta? Iniciar sesión</a>

                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            </div>
                        </div>
                        {this.state.success && (
                    <div
                        className="alert alert-success"
                        style={{ position: 'absolute' }}
                    >
                        Form submitted!
                </div>)}
                    </div>
                </React.Fragment>
            );
        } else {
            return null;
        }
    }
}
export default RegisterUser;


