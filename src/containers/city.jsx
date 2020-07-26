import React, { Component } from 'react';

class City extends Component {
  handleClick = () => {
  }

  render() {
    const { info } = this.props;
    return (
      <div className="list-group-item">
        {info.name}
      </div>
    );
  }
}

export default City;
