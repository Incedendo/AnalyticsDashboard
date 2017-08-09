# CARD DISPLAY FOLDER:

## DisplayCards:
Main wrapper component that sets up the initial row display for the 8 card layout
### Props:

### Usage:

## CardContainer:
### Props:
### Usage:
  * set up the functions for the Customization functionality:
    * handleSubmit(): set up the state object according to the data and graph type passed in
    * handleEditClick(): set up the frequency correspondingly to the id passed in.

## CardDisplay:
### Props:
  * Takes in dataList, rightBorder, bottomBorder, store, handleSubmit, handleEditClick, handleFilter, id from CardContainer and render the individual CARD.
### Usage:
* Display 1 of the 3 following options:
    * Graph.
    * Numerical Comparison.
    * List.
  * getTitle():
    * Display a Title Link that displays a detailed view upon being clicked.
    * Display a Pencil Icon that takes the user to the Customization feature of the dashboard.
  * getFilter(): return true if the card displays a Graph or a Numerical Comparison or the title is either "Contribution Change" or "Retirement Income Calc Usage"
  * getFreqFilter(): if getFilter() returns true, display the filter in the card.
  * renderCardContent(): determine if the card will display graph, comparison or a list by checking 3 props: graph, comp, and list
    * renderGraph()
    * renderComp()
    * renderList()
