import React, { Component } from 'react';
import dropdown from './dropdown.svg';
import '../../assets/scss/_FreqFilter.scss'

class FreqFilter extends Component {

  handleChange = (event) => {
    this.props.handleFilter(event.target.value);
  }

  render () {
    return (
      <div class="col-md-5">
        <select class="custom-select" onChange={this.handleChange}>
          <option value="QTD">Quarter To Date(QTD)</option>
          <option value="WTD">Weekly To Date(QTD)</option>
          <option value="MTD">Month To Date(MTD)</option>
          <option value="YTD">Year To Date(YTD)</option>
        </select>
      </div>
    )
  }
}

export default FreqFilter;
