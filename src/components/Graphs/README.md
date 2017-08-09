# ChartDisplay

ChartDisplay is a container class that translates data into readable data for the Chart.js npm package. To use ChartDisplay, pass down entire data list, and frequency, graph, and type of data desired.

### Props

`*` denotes required prop
`^` denotes prop used in RenderChart only
`'` denotes prop used in RenderComp only

| Prop      | Type  | Default   | Description   |
|:----------|-------|-----------|---------------|
|listHome*  |{ [ { label: string, value(s): number } ] }| |Entire dataset separated initially by frequency and then by categorical data|
|dataType*  | string | |specific dataset that you choose|
|frequency* | string | |specific frequency that you choose|
|graphType*^ | string | |specific graph type that you choose|
|categorical| bool   | |determines whether use the frequency portions of listHome or categorical portions|
|chartHeight^| number | |height of chart|
|width^| number | |width of chart|
|margin^| number | |margin of chart|
|marginTop^| number | |top margin of chart|
|yAxisTextSize^| number | |text size of y-axis of chart|
|xAxisTextSize^| number | |text size of x-axis of chart|
|pointRadius^| number | |radius of data point of chart|
|legendFontSize^| number | |font size of legend of chart|
|displayedLegend^| bool | true | displays legend of chart|
|filter*'| string | |determined by the frequency|

___

# RenderChart

RenderChart is a stateless component only used to display the visual graphs of the Chart.js package.

### Props

`*` denotes required prop

| Prop      | Type  | Default   | Description   |
|:----------|-------|-----------|---------------|
|list |[ { label: string, value(s): number } ]| |Specific portion of the entire dataset|
|dataType*  | string | |specific dataset that you choose|
|dataArr* | [ number ] | |array of data of the specified dataType|
|graphType* | string | |specific graph type that you choose|
|height| number | |height of chart|
|width| number | |width of chart|
|margin| number | |margin of chart|
|marginTop| number | |top margin of chart|
|yAxisTextSize| number | |text size of y-axis of chart|
|xAxisTextSize| number | |text size of x-axis of chart|
|pointRadius| number | |radius of data point of chart|
|legendFontSize| number | |font size of legend of chart|
|displayedLegend| bool | true | displays legend of chart|

___

# RenderComp

RenderChart is a stateless component only used to display the visual graphs of the Chart.js package.

### Props

`*` denotes required prop

| Prop      | Type  | Default   | Description   |
|:----------|-------|-----------|---------------|
|dataType*  | string | |specific dataset that you choose|
|dataArr*   | [ number ] | |array of data of the specified dataType|
|filter*    | string | |determined by the frequency|

___

# ListDisplay

ListDisplay is a component solely for the purpose of displaying the List representation of your selected dataset

### Props

`*` denotes required prop

| Prop      | Type  | Default   | Description   |
|:----------|-------|-----------|---------------|
|listHome*  |{ [ { label: string, value(s): number } ] }| |Entire dataset separated initially by frequency and then by categorical data|
|dataType*  | string | |specific dataset that you choose|

# DetailedListDisplay

DetailedListDisplay displays the List representation of data within a large modal screen.

### Props

`*` denotes required prop

| Prop      | Type  | Default   | Description   |
|:----------|-------|-----------|---------------|
|listHome*  |{ [ { label: string, value(s): number } ] }| |Entire dataset separated initially by frequency and then by categorical data|
|dataType*  | string | |specific dataset that you choose|
