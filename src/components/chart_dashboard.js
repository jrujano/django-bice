import React, { Component } from 'react';


class ChartDashboard extends Component {

  componentDidMount() {
    // console.log(this.props.token);
  }


  render() {
    return (
      <React.Fragment>
        <div id="chart-dashboard">
          <div className="row">
            <div className="col s12 m8 l8">
              <div className="card animate fadeUp">
                <div className="card-move-up waves-effect waves-block waves-light">
                  <div className="move-up cyan darken-1">
                    <div>
                      <span className="chart-title white-text">Revenue</span>
                      <div className="chart-revenue cyan darken-2 white-text">
                        <p className="chart-revenue-total">$4,500.85</p>
                        <p className="chart-revenue-per"><i className="material-icons">arrow_drop_up</i> 21.80 %</p>
                      </div>
                      <div className="switch chart-revenue-switch right">
                        <label className="cyan-text text-lighten-5">
                          Month <input type="checkbox" /> <span className="lever"></span> Year
                           </label>
                      </div>
                    </div>
                    <div className="trending-line-chart-wrapper"><canvas id="revenue-line-chart" height="70"></canvas>
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  <a className="btn-floating btn-move-up waves-effect waves-light red accent-2 z-depth-4 right" href="/#!">
                    <i className="material-icons activator">filter_list</i>
                  </a>
                  <div className="col s12 m3 l3">
                    <div id="doughnut-chart-wrapper">
                      <canvas id="doughnut-chart" height="200"></canvas>
                      <div className="doughnut-chart-status">
                        <p className="center-align font-weight-600 mt-4">4500</p>
                        <p className="ultra-small center-align">Sold</p>
                      </div>
                    </div>
                  </div>
                  <div className="col s12 m2 l2">
                    <ul className="doughnut-chart-legend">
                      <li className="mobile ultra-small"><span className="legend-color"></span>Mobile</li>
                      <li className="kitchen ultra-small"><span className="legend-color"></span> Kitchen</li>
                      <li className="home ultra-small"><span className="legend-color"></span> Home</li>
                    </ul>
                  </div>
                  <div className="col s12 m5 l6">
                    <div className="trending-bar-chart-wrapper"><canvas id="trending-bar-chart" height="90"></canvas></div>
                  </div>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">Revenue by Month <i
                    className="material-icons right">close</i>
                  </span>
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th data-field="id">ID</th>
                        <th data-field="month">Month</th>
                        <th data-field="item-sold">Item Sold</th>
                        <th data-field="item-price">Item Price</th>
                        <th data-field="total-profit">Total Profit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>January</td>
                        <td>122</td>
                        <td>100</td>
                        <td>$122,00.00</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>February</td>
                        <td>122</td>
                        <td>100</td>
                        <td>$122,00.00</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>March</td>
                        <td>122</td>
                        <td>100</td>
                        <td>$122,00.00</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>April</td>
                        <td>122</td>
                        <td>100</td>
                        <td>$122,00.00</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>May</td>
                        <td>122</td>
                        <td>100</td>
                        <td>$122,00.00</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>June</td>
                        <td>122</td>
                        <td>100</td>
                        <td>$122,00.00</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>July</td>
                        <td>122</td>
                        <td>100</td>
                        <td>$122,00.00</td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>August</td>
                        <td>122</td>
                        <td>100</td>
                        <td>$122,00.00</td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>Septmber</td>
                        <td>122</td>
                        <td>100</td>
                        <td>$122,00.00</td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>Octomber</td>
                        <td>122</td>
                        <td>100</td>
                        <td>$122,00.00</td>
                      </tr>
                      <tr>
                        <td>11</td>
                        <td>November</td>
                        <td>122</td>
                        <td>100</td>
                        <td>$122,00.00</td>
                      </tr>
                      <tr>
                        <td>12</td>
                        <td>December</td>
                        <td>122</td>
                        <td>100</td>
                        <td>$122,00.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col s12 m4 l4">
              <div className="card animate fadeUp">
                <div className="card-move-up teal accent-4 waves-effect waves-block waves-light">
                  <div className="move-up">
                    <p className="margin white-text">Browser Stats</p>
                    <canvas id="trending-radar-chart" height="114"></canvas>
                  </div>
                </div>
                <div className="card-content  teal">
                  <a className="btn-floating btn-move-up waves-effect waves-light red accent-2 z-depth-4 right" href="/#!">
                    <i className="material-icons activator">done</i>
                  </a>
                  <div className="line-chart-wrapper">
                    <p className="margin white-text">Revenue by country</p>
                    <canvas id="line-chart" height="114"></canvas>
                  </div>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">Revenue by country <i
                    className="material-icons right">close</i>
                  </span>
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th data-field="country-name">Country Name</th>
                        <th data-field="item-sold">Item Sold</th>
                        <th data-field="total-profit">Total Profit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>USA</td>
                        <td>65</td>
                        <td>$452.55</td>
                      </tr>
                      <tr>
                        <td>UK</td>
                        <td>76</td>
                        <td>$452.55</td>
                      </tr>
                      <tr>
                        <td>Canada</td>
                        <td>65</td>
                        <td>$452.55</td>
                      </tr>
                      <tr>
                        <td>Brazil</td>
                        <td>76</td>
                        <td>$452.55</td>
                      </tr>
                      <tr>
                        <td>India</td>
                        <td>65</td>
                        <td>$452.55</td>
                      </tr>
                      <tr>
                        <td>France</td>
                        <td>76</td>
                        <td>$452.55</td>
                      </tr>
                      <tr>
                        <td>Austrelia</td>
                        <td>65</td>
                        <td>$452.55</td>
                      </tr>
                      <tr>
                        <td>Russia</td>
                        <td>76</td>
                        <td>$452.55</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>

    );

  }
}

export default ChartDashboard;