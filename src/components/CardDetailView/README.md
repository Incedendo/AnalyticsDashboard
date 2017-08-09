# CARD DETAIL VIEW FOLDER:
  ### CardModal: 
  * A modal that displays the detailed view of each card component in the main dashboard. Get called when the user clicks on the Title link of each card in the main display. This component is set up in the routes.js file.
  * PROPS: passed in from the state object in the Link Component inside the CardDisplay Component:
        location.state.dataType: the KPI that the modal is displaying (can be an array of multiple KPIs.
        location.state.graph: a boolean to show whether the card displays a graph or not.
        location.state.comp: a boolean to show whether the card displays a numerical comparison or not.
        location.state.list: a boolean to show whether the card displays a list or not.
        location.state.graphType: is "bar", "line", or "pie" for when graph is true.
  * renderMainDetail(): Render a full-screen Modal that calls either:
    * renderNotList(): displays 2x2 grid system showing 4 charts/comp of whatever data the original card shows
    * renderList(): display a longer list of the original list.

  ### CardModalDisplay: 
  * A simplified version of CardDisplay that only renders fixed data based on the props passed in.
  * PROPS:

 | Props         | Types         | Description       |
 | ------------- |:-------------:| -----------------:|
 | title         | string        | The |
 | graph         | boolean       | |
 | comp          | boolean       | |
 | listCard      | boolean       | |
 | graphType     | string        | |
 | list          |        | |
 | dataType      | array | contain 1 or multiple KPI values |
 | frequency     | string | has 1 of the following 4 values: "annually", "quarterly", "monthly", or "daily" |
 | rightBorder   | boolean       | |
 | bottomBorder  | boolean       | |     

  * Main render() calls renderCardContent() which is an over-arching function determines whether to display graph or numerical comparison by checking the comp and graph parameters, hence calling the corresponding 2 following functions:
    * renderGraph():
    * renderComp():

### CardData:
* A Javascript file containing 5 const objects:
  * cardTitle: an array of all the possible Card Titles.
  * CardFrequencies: an array of 4 frequencies together with the boolean rightBorder and bottomBorder
  * topMenuOverlay: the style obecjt of the normal detail view modal
  * errorModal: the style object to display the error modal
  * defaultEightCards: an array of 8 original objects that display 8 default cards for the main view
                                                                           
  
