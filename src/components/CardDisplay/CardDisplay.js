import React from 'react';
import '../../assets/scss/_Card.scss';
import pencilIcon from '../../assets/svg/pencilIcon.svg';
import ChartDisplay from '../Graphs/ChartDisplay';
import ListDisplay from '../Graphs/ListDisplay';
import FreqFilter from '../utils/FreqFilter';
import { Link } from 'react-router-dom';
import Customize from '../ModalScreens/Customize';
import classNames from 'classnames';

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
  return <ChartDisplay
    listHome={dataList}
    dataType={dataType}
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


// I tried this but it didnt work:

// const renderComp = (dataList, ...rest) => (
//   <ChartDisplay
//     listHome={dataList}
//     {...rest}
//   />
// )

const renderComp = (dataList, dataType, frequency, filter) => (
  <ChartDisplay
    listHome={dataList}
    dataType={dataType}
    frequency={frequency}
    filter={filter}/>
)

/*
I tried this but it didnt work:

const renderList = (...rest) => (
  <ListDisplay {...rest}/>
)
*/
const renderList = (dataList, dataType) => (
  <ListDisplay listHome={dataList} dataType={dataType}/>
)

// classnames
const getCustomClass = (rightBorder, bottomBorder) => {
  return classNames(
    "card col-md-3",
    {
      "border-right": rightBorder,
      "border-bottom": bottomBorder
    }
  )
}

const getTitle = (dataType, modalOpen, handleSubmit, handleEditClick, id, graph, comp, list, graphType, dataTypeArr) => {
  //console.log(dataTypeArr);
  const link = '/' + dataType[0].replace(/\s/g, '');
  return (
    <div className='cardHeader'>
      <div className='title inline-block'>
      <Link to={{
        pathname: link,
        state: {
          dataType: dataTypeArr,  //should be an array
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
        {modalOpen && <Customize id={id} handleSubmit={handleSubmit} handleCancel={handleEditClick} dataType={dataType} graphType={graphType}/>}
      </div>
    </div>
  )
}

const renderItem = (graph, comp, list, dataType, id, dataList, graphType, frequency, filter) =>{
  if(graph)
    return renderGraph(dataType, id, dataList, graphType, frequency)
  if(comp)
    return renderComp(dataList, dataType, frequency, filter)
  if(list)
    return renderList(dataList, dataType)
}

const renderCardContent = (...rest) => (
  <div className='graph'>
    {renderItem(...rest)}
  </div>
)

const shouldDisplayFilter = (numGraph, graph, dataType) => {
  return (numGraph || graph ||  dataType[0] === 'Contribution Change' || dataType[0] === 'Retirement Income Calc Usage') && dataType[0] !== 'Visits by Device Type';
}

const getFreqFilter = (graph, handleFilter) => (
  <div className={graph?'filter-graph':'filter'}>
    <FreqFilter handleFilter={handleFilter}/>
  </div>
)

const CardDisplay = ({ graph, comp, list, graphType, dataType, frequency, filter, modalOpen, dataList, dataTypeArr, rightBorder, bottomBorder, store, handleSubmit, handleEditClick, handleFilter, id}) => {

  if(!dataList.length) return null
  if(!dataType.length) return <div>LOADING</div>

  return (
    <div className={getCustomClass(rightBorder, bottomBorder)} >
      {getTitle(dataType, modalOpen, handleSubmit, handleEditClick, id, graph, comp, list, graphType, dataTypeArr)}
      {shouldDisplayFilter(comp, graph, dataType) && getFreqFilter(graph, handleFilter)}
      {renderCardContent(graph, comp, list, dataType, id, dataList, graphType, frequency, filter)}
      {store()}
    </div>
  )
}

export default CardDisplay;

// line 13 should just be an if statement

// line 38 renderComp() could be renderComp = (dataList, ...rest) => then spread
// rest into the component being rendered
//
// line 42 is being passed id but it's not being used
//
// line 48 customClass logic should be replaced with classnames package/function
//
// line 87-89 same as other components, unless all theree { && } statments can
// be true, they should probably be extracted into another function that returns
// one thing
//
// getFilter() should probably isFilterAvailable or some other boolean
// indicating function name, right now it with that name it sounds like it
// actually gets the filter
