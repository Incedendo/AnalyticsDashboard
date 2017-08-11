import React, { Component } from 'react';
import '../../assets/scss/_FreqFilter.scss'

const FreqFilter = (props) => {

  const handleChange = (event) => {
    props.handleFilter(event.target.value);
  }

  return (
    <div>
      <select onChange={handleChange} >
        <option value="MTD">Month To Date (MTD)</option>
        <option value="QTD">Quarter To Date (QTD)</option>
        <option value="YTD">Year To Date (YTD)</option>
      </select>
    </div>
  )
}

export default FreqFilter;
