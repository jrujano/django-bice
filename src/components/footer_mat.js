import React, { Component } from 'react';

// import { CtxConsumer } from '../index';

class FooterMat extends Component {


  render() {
    return (
      <footer className="page-footer footer footer-static footer-dark gradient-45deg-indigo-purple gradient-shadow navbar-border navbar-shadow">
  <div className="footer-copyright">
    <div className="container"><span>&copy; 2020-Abril</span>
      <span className="right hide-on-small-only"> Developed by <a href="https://www.linkedin.com/in/johan-rujano-28446241/">{ this.props.info }</a></span></div>
  </div>
</footer>

    );

  }
}

export default FooterMat;