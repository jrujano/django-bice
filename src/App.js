import React, { Component } from 'react';

import './App.css';
// import './Data-tables.min.css'

import Login from './components/login';
import HeaderMat from './components/header_mat';
import Sidenav from './components/sidenav';
import CardStats from './components/card_stats';
// import ChartDashboard from './components/chart_dashboard';
// import TableCobre from './components/data_table';
import FooterMat from './components/footer_mat';

import DataMovies from './components/datamovies';
import RegisterUser from './components/register';
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      displayed_form: '',
      token: localStorage.getItem('token'),
      login: localStorage.getItem('logged_in') ? true : false,
      username: '',
      shown: false,
      register: false,
      reload:false
    };
  }

  updateState() {

    this.setState(
      {
        login: localStorage.getItem('logged_in'),
        token: localStorage.getItem('token')
      });
    window.location.reload(false);

  }
  updateStateRegister() {

    this.setState(
      {
        register: !this.state.register,
       
      });
    
      

  }

  render() {
    if (this.state.login) {
      return (
        <div className="App">
          <HeaderMat updateParent={this.updateState.bind(this)}></HeaderMat>
          <Sidenav></Sidenav>
          <div id="main">
            <div className="row">
              <div className="col s12">
                <div className="container">
                  <div className="section">
                    <CardStats shown={this.state.shown} />
                    {/* <ChartDashboard></ChartDashboard> */}
                    {/* <TableCobre></TableCobre> */}
                    <DataMovies></DataMovies>
                  </div>
                  <div className="content-overlay"></div>
                </div>
              </div>
            </div>

          </div>
          <FooterMat info='Johan Rujano'></FooterMat>
        </div>
          
      );
    }else{
        
        return (
          <div>
          <RegisterUser updateParent={ this.updateStateRegister.bind(this) } register={ this.state.register} updateRegister= {this.updateStateRegister.bind(this)}/>
          <Login        updateParent={ this.updateState.bind(this) }         register={ this.state.register} updateRegister= {this.updateStateRegister.bind(this)}/>
          </div>
          );
      }
    }
    
}

export default App;