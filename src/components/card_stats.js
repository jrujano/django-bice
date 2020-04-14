import React, { Component } from 'react';
import axios from 'axios';
import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesReferenceLine } from 'react-sparklines';
class CardStats extends Component {

  state = {
    login: localStorage.getItem('logged_in'),
    cobres: [],
    data_cobre:[70, 80, 65, 78, 58, 80, 78, 80, 70, 50, 75, 65, 80, 70, 65, 90, 65, 80, 70, 65, 90]
  }

  componentDidMount() {
    axios.get('https://www.indecon.online/last',
     {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
      },
      
      }
      )
      .then(resp => {
        console.log(resp);
        this.setState({cobres: resp.data});
        console.clear();
        console.log(resp);
      })
  }



  render() {

    if (this.state.login === 'true') {
      return (
        <div id="card-stats" className="pt-0">
          <div className="row">
            <div className="col s12 m6 l3">
              <div className="card animate fadeLeft">
                <div className="card-content cyan white-text">
                  <p className="card-stats-title"><i className="material-icons">person_outline</i> Cobre</p>
                  <h4 className="card-stats-number white-text">566</h4>
                  <p className="card-stats-compare">
                    <i className="material-icons">keyboard_arrow_up</i> 15%
  <span className="cyan text text-lighten-5">from yesterday</span>
                  </p>
                </div>
                <div className="card-action cyan darken-1">
                  
                  <Sparklines data={this.state.data_cobre} limit={20}>
                  <SparklinesLine style={{ strokeWidth: 3, stroke: "#336aff", fill: "none" }} />
                    <SparklinesSpots size={4} style={{ stroke: "#336aff", strokeWidth: 3, fill: "white" }} />
                    <SparklinesReferenceLine type="avg" />
                  </Sparklines>
                </div>
              </div>
            </div>
            <div className="col s12 m6 l3">
              <div className="card animate fadeLeft">
                <div className="card-content red accent-2 white-text">
                  <p className="card-stats-title"><i className="material-icons">attach_money</i>Total Sales</p>
                  <h4 className="card-stats-number white-text">$8990.63</h4>
                  <p className="card-stats-compare">
                    <i className="material-icons">keyboard_arrow_up</i> 70% <span className="red-text text-lighten-5">last
  month</span>
                  </p>
                </div>
                <div className="card-action red">
                  <div id="sales-compositebar" className="center-align"></div>
                </div>
              </div>
            </div>
            <div className="col s12 m6 l3">
              <div className="card animate fadeRight">
                <div className="card-content orange lighten-1 white-text">
                  <p className="card-stats-title"><i className="material-icons">trending_up</i> Today Profit</p>
                  <h4 className="card-stats-number white-text">$806.52</h4>
                  <p className="card-stats-compare">
                    <i className="material-icons">keyboard_arrow_up</i> 80%
  <span className="orange-text text-lighten-5">from yesterday</span>
                  </p>
                </div>
                <div className="card-action orange">
                  <div id="profit-tristate" className="center-align"></div>
                </div>
              </div>
            </div>
            <div className="col s12 m6 l3">
              <div className="card animate fadeRight">
                <div className="card-content green lighten-1 white-text">
                  <p className="card-stats-title"><i className="material-icons">content_copy</i> New Invoice</p>
                  <h4 className="card-stats-number white-text">1806</h4>
                  <p className="card-stats-compare">
                    <i className="material-icons">keyboard_arrow_down</i> 3%
  <span className="green-text text-lighten-5">from last month</span>
                  </p>
                </div>
                <div className="card-action green">
                  <div id="invoice-line" className="center-align"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    } else {
      return null;
    }


  }
}

export default CardStats;