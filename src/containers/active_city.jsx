import React from 'react';
import { connect } from "react-redux";

const ActiveCity = (props) => {
  let content = (
    <p>Choose a city...</p>
  );

  if (props.activeCity) {
    const { activeCity } = props;
    const url = `https://kitt.lewagon.com/placeholder/cities/${activeCity.slug}`;
    content = (
      <div>
        <h1>{activeCity.name}</h1>
        <p>{activeCity.address}</p>
        <img src={url} width="100%" alt={`${activeCity.name}`} />
      </div>
    );
  }
  return (
    <div className="active-city">
      {content}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
