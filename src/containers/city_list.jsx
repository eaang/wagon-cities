import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import setCities from '../actions/index';
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
    // TODO: dispatch an action to load flats!
    this.props.setCities();
  }

  render() {
    const { cities } = this.props;
    return (
      <div className="cities">
        {cities.map((city) => {
          return <City info={city} key={city.name} />;
        })}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
