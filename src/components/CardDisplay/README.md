# CARD DISPLAY FOLDER: 
Set up state and props for each of the individual card component to display its corresponding customizable content.

## DisplayCards:
Main wrapper component that sets up the initial row display for the 8 card layout
### Props:
 | Props         | Types         | Description       |
 | ------------- |:-------------:| -----------------:|
 | ...card       | object        | one of the 8 original card object in defaultEightCards imported from CardData.js|
 | list          | string        | The entire JSON data array imported from main.js |

## CardContainer:
### Props:
 | Props         | Types         | Description       |
 | ------------- |:-------------:| -----------------:|
 | ...card       | object        | one of the 8 original card object in defaultEightCards imported from CardData.js|
 | list          | string        | The entire JSON data array imported from main.js |
### Usage:
  * set up the functions for the Customization functionality:
    * handleSubmit(): set up the state object according to the data and graph type passed in
    * handleEditClick(): set up the frequency correspondingly to the id passed in.
  * Set up local storage in the store() function.
  * render the CardDisplay Component

## CardDisplay:
renders the individual CARD
### Props:
 | Props         | Types         | Description       |
 | ------------- |:-------------:| -----------------:|
 | graphType     | string        | "bar", "line" or "pie" |
 | dataType      | array         | one or more KPI values |
 | frequency     | string        | "annually", "quarterly", "monthly", "daily" |
 | filter        | string        |             |
 | modalOpen     | boolean       | if true, show the modal | 
 | graph         | boolean       | if true, add a right border for the card |
 | comp          | boolean       | if true, add a right border for the card |
 | list          | boolean       | if true, add a right border for the card |
 | dataList      |  object       | The entire JSON data array imported from main.js |
 | dataTypeArr   | array         | contain 1 or more KPI values |
 | rightBorder   | boolean       | if true, add a right border for the card |
 | bottomBorder  | boolean       | if true, add a bottom border for the card |
 | store |    |
 | handleSubmit |  function  |
 | handleEditClick |  function  | 
 | handleFilter |  function  | display the Filter Component |
 | id  |  number  | the ID of the card starting from 0 |
 
### Usage:
* getTitle():
  * Display a Title Link that renders CardModal upon being clicked.
  * Display a Pencil Icon that takes the user to the Customization feature of the dashboard.
* Display 1 of the 3 following options:
  * Graph.
  * Numerical Comparison.
  * List.
* getFilter(): return true if the card displays a Graph or a Numerical Comparison or the title is either "Contribution Change" or "Retirement Income Calc Usage"
* getFreqFilter(): if getFilter() returns true, display the filter in the card.
* renderCardContent(): determine if the card will display graph, comparison or a list by checking 3 props: graph, comp, and list
  * renderGraph(): call ChartDisplay component
  * renderComp(): call CompDisplay component
  * renderList(): call ListDisplay Component
