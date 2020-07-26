import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import selectCity from '../actions/index';

class City extends Component {
  handleClick = () => {
    this.props.selectCity(this.props.city);
  }

  render() {
    const { city } = this.props;
    return (
      <div
        className="list-group-item"
        onClick={this.handleClick}
        role="presentation"
      >
        {city.name}
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCity }, dispatch
  );
}

export default connect(null, mapDispatchToProps)(City);
