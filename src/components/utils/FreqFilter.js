import React, { Component } from 'react';
import '../../assets/scss/_FreqFilter.scss'

class FreqFilter extends Component {

  handleChange = (event) => {
    this.props.handleFilter(event.target.value);
  }

  render () {
    return (
      <div>
        <select onChange={this.handleChange} >
          <option value="MTD">Month To Date (MTD)</option>
          <option value="QTD">Quarter To Date (QTD)</option>
          <option value="YTD">Year To Date (YTD)</option>
        </select>
      </div>
    )
  }
}

export default FreqFilter;

// This could be a functional component, no reason for this to be a class
