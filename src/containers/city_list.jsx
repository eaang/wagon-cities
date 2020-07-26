import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions/index';
import City from './city';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { setCities },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    cities: state.cities
  };
};

class CityList extends Component {
  componentWillMount() {
    // TODO: dispatch an action to load cities!
    this.props.setCities();
  }

  render() {
    const { cities } = this.props;
    return (
      <div className="cities">
        {cities.map((city, index) => {
          return <City city={city} key={city.name} tabIndex={index} />;
        })}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
