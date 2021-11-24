function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");
  
    // Use the list of sample names to populate the select options
    d3.json("resources/samples.json").then((data) => {
      var sampleNames = data.names;
  
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  
      // Use the first sample from the list to build the initial plots
      var firstSample = sampleNames[0];
      buildCharts(firstSample);
      buildMetadata(firstSample);
    });
  }
  
  // Initialize the dashboard
  init();
  
  function optionChanged(newSample) {
    // Fetch new data each time a new sample is selected
    buildMetadata(newSample);
    buildCharts(newSample);
    
  }
  
  // Demographics Panel 
  function buildMetadata(sample) {
    d3.json("resources/samples.json").then((data) => {
      var metadata = data.metadata;
      // Filter the data for the object with the desired sample number
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      // Use d3 to select the panel with id of `#sample-metadata`
      var PANEL = d3.select("#sample-metadata");
  
      // Use `.html("") to clear any existing metadata
      PANEL.html("");
  
      // Use `Object.entries` to add each key and value pair to the panel
      // Hint: Inside the loop, you will need to use d3 to append new
      // tags for each key-value in the metadata.
      Object.entries(result).forEach(([key, value]) => {
        PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
      });
  
    });
  }
  
  // Challenge Deliverable #1 - Create Horizontal Chart
  // Challenge Deliverable #2 - add Bubble Chart
  // Challenge Deliverable #3 - add Guage Chart
  // Challenge Deliverable #4 - add 3 new features
  // Image to Jumbotron
  // Add some background colors
  // Add fonts

  // 1. Create the buildCharts function.
  function buildCharts(sample) {
    // 2. Use d3.json to load and retrieve the samples.json file 
    d3.json("resources/samples.json").then((data) => {
      // 3. Create a variable that holds the samples array. 
      var samples = data.samples;
      // 4. Create a variable that filters the samples for the object with the desired sample number.
      var resultArray = samples.filter(sampleObj => sampleObj.id == sample);
      //  5. Create a variable that holds the first sample in the array.
      var result = resultArray[0];
      // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
      var otuIds = result.otu_ids;
      var otuLabels = result.otu_labels.slice(0,10).reverse();
      var otuValues = result.sample_values.slice(0,10).reverse();

      // Create variables for Bubble Chart
      var bubbleLabels = result.otu_labels;
      var bubbleValues = result.sample_values;

      // Create a variable that holds the washing frequency.
      var metadata = data.metadata;
      var gaugeArray = metadata.filter(metaObj => metaObj.id == sample);

      // Create a variable for the first sample for the guageArray
      var gaugeResult = gaugeArray[0];
      var wfreq = parseFloat(gaugeResult.wfreq);
      console.log(wfreq);

      // 7. Create the yticks for the bar chart.
      // Hint: Get the the top 10 otu_ids and map them in descending order  
      //  so the otu_ids with the most bacteria are last. 
  
      var yticks = otuIds.map(sampleObj => "OTU " + sampleObj).slice(0,10).reverse();
      console.log(yticks);
  
      // Deliverable 1 - Horizontal Bar Chart
      // 8. Create the trace for the bar chart. 
      var barData = [{
          x: otuValues,
          y: yticks,
          type: "bar",
          orientation: "h",
          text: otuLabels
      }];

      // 9. Create the layout for the bar chart. 
      var barLayout = {
          title: { text: "<b>Top 10 Bacteria Cultures Found</b>", font: { size: 24 }},
          paper_bgcolor: "lavender",
          font: { color: "darkblue", family: "Arial" }
      };

      // Deliverable 2 - Create Bubble Chart
      // 10. Create the trace for the bubble chart.
      var bubbleData = [{
          x: otuIds,
          y: bubbleValues,
          text: bubbleLabels,
          mode: "markers",
          marker: {
            size: bubbleValues,
            color: bubbleValues,
            colorscale: "Portland"
          }
      }];
      
      // 11. Create the layout for the bubble chart.
      var bubbleLayout = {
          title: { text: "<b>Bacteria Cultures Per Sample</b>", font: { size: 24 }},
          xaxis: {title: "OTU ID"},
          automargin: true,
          hovermode: "closest",
          paper_bgcolor: "lavender",
          font: { color: "darkblue", family: "Arial" }
      };

      // Deliverable 3 - Create Guage Chart
      // 12. Create the trace for the gauge chart.
      var gaugeData = [{
          value: wfreq,
          type: "indicator",
          mode: "gauge+number",
          title: { text: "<b>Belly Button Washing Frequency</b> <br> Scrubes per week", font: { size: 24 }},
          gauge: {
            axis: { range: [null,10], tickwidth: 2, tickcolor: "darkblue"},
            bar: {color: "darkblue"},
            bgcolor: "white",
            borderwidth: 2,
            bordercolor: "gray",
            steps: [
              {range: [0, 2], color: "red"},
              {range: [2, 4], color: "orange"},
              {range: [4, 6], color: "yellow"},
              {range: [6, 8], color: "lightgreen"},
              {range: [8, 10], color: "green"}
            ],
            threshold: {
              line: { color: "blue", width: 4 },
              thickness: 0.75,
              value: wfreq
            }
          }
      }];
    
      // 13. Create the layout for the gauge chart.
      var gaugeLayout = { 
          paper_bgcolor: "lavender",
          font: { color: "darkblue", family: "Arial" }
     
      };
      // Plot all 3 charts for Challenge
      // 13. Use Plotly to plot the data with the layout. 
      Plotly.newPlot("bar", barData, barLayout);

      Plotly.newPlot("bubble", bubbleData, bubbleLayout); 

      Plotly.newPlot("gauge", gaugeData, gaugeLayout);

      });
  }
  