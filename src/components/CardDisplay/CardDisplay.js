import React from 'react';
import '../../assets/scss/_Card.scss';
import pencilIcon from '../../assets/svg/pencilIcon.svg';
import ChartDisplay from '../Graphs/ChartDisplay';
import ListDisplay from '../Graphs/ListDisplay';
import FreqFilter from '../utils/FreqFilter';
import { Link } from 'react-router-dom';
import Customize from '../ModalScreens/Customize';

const renderGraph = (dataType, id, dataList, graphType, frequency) => {
  let displayedLegend = false;
  let categorical = false;
  switch (dataType[0]) {
    case 'Visits by Device Type':
      categorical = true;
      break;
  }
  if(dataType.length > 1){
    displayedLegend = true;
  }
  return <ChartDisplay listHome={dataList} dataType={dataType}
  graphType={graphType}
  frequency={frequency}
  categorical={categorical}
  chartHeight='170px'
  width='100%'
  yAxisTextSize="18"
  xAxisTextSize="18"
  pointRadius="0"
  legendFontSize="15"
  displayedLegend={displayedLegend}
  marginTop="-80px"
  />
}

const renderComp = (dataList, dataType, frequency, filter) => {
  return <ChartDisplay listHome={dataList} dataType={dataType} frequency={frequency} filter={filter}/>
}

const renderList = (dataList, id, dataType) => {
  return (
    <ListDisplay listHome={dataList} dataType={dataType}/>
  );
}

const getCustomClass = (rightBorder, bottomBorder) => {
  if(rightBorder && bottomBorder) return "card col-md-3 border-right border-bottom";
  if(rightBorder) return "card col-md-3 border-right";
  if(bottomBorder) return "card col-md-3 border-bottom";

  return "card col-md-3";
}

const getTitle = (dataType, modalOpen, handleSubmit, handleEditClick, id, graph, comp, list, graphType) => {
  const link = '/' + dataType[0].replace(/\s/g, '');
  return (
    <div className='cardHeader'>
      <div className='title inline-block'>
      <Link to={{
        pathname: link,
        state: {
          dataType: dataType,
          graph: graph,
          comp: comp,
          list: list,
          graphType: graphType,
        }
      }}
        className="navlink"
      >
        {dataType[0]}
      </Link>
      </div>
      <div className='infoIcon' >
          <img src={pencilIcon} className='info' onClick={handleEditClick}/>
          {modalOpen && <Customize id={id} handleSubmit={handleSubmit} handleCancel={handleEditClick}/>}
      </div>
    </div>
  )
}

const renderCardContent = (graph, comp, list, dataType, id, dataList, graphType, frequency, filter) => (
  <div className='graph'>
    {graph && renderGraph(dataType, id, dataList, graphType, frequency)}
    {comp && renderComp(dataList, dataType, frequency, filter)}
    {list && renderList(dataList, id, dataType)}
  </div>
)

const getFilter = (numGraph, graph, dataType) => {
  return numGraph || graph ||  dataType[0] === 'Contribution Change' || dataType[0] === 'Retirement Income Calc Usage';
}

const getFreqFilter = (graph, handleFilter) => (
  <div className={graph?'filter-graph':'filter'}>
    <FreqFilter handleFilter={handleFilter}/>
  </div>
)

const CardDisplay = ({ graphType, dataType, frequency, filter, modalOpen, graph, comp, list, dataList, rightBorder, bottomBorder, store, handleSubmit, handleEditClick, handleFilter, id}) => {

  if(!dataList.length) return null
  if(!dataType.length) return <div>LOADING</div>

  return (
    <div className={getCustomClass(rightBorder, bottomBorder)} >
      {getTitle(dataType, modalOpen, handleSubmit, handleEditClick, id, graph, comp, list, graphType)}
      {getFilter(comp, graph, dataType) && getFreqFilter(graph, handleFilter)}
      {renderCardContent(graph, comp, list, dataType, id, dataList, graphType, frequency, filter)}
      {store()}
    </div>
  )
}

export default CardDisplay;
