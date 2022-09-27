////const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
////
////// Promise Pending
////const dataPromise = d3.json(url);
////console.log("Data Promise: ", dataPromise);
////
////// Fetch the JSON data and console log it
////d3.json(url).then(function(data) {
////  console.log(data);
////});
//

let data = [
{"id": "940",
"otu_ids": ["OTU1167", "OTU2859", "OTU482", "OTU2264", "OTU41", "OTU1189", "OTU352", "OTU189", "OTU2318" , "OTU1977", "OTU3450", "OTU874", "OTU1959", "OTU2191", "OTU1950", "OTU2077", "OTU2275", "OTU944", "OTU2184", "OTU2244", "OTU2024", "OTU2419", "OTU2811", "OTU165", "OTU2782", "OTU2247", "OTU2011", "OTU2396", "OTU830", "OTU2964", "OTU1795", "OTU2722", "OTU307", "OTU2178", "OTU2908", "OTU1193", "OTU2167", "OTU1208", "OTU2039", "OTU1274", "OTU2739", "OTU2737", "OTU1314", "OTU1962", "OTU2186", "OTU2335", "OTU2936", "OTU907", "OTU833", "OTU2483", "OTU2475", "OTU2491", "OTU2291", "OTU159", "OTU2571", "OTU2350", "OTU2342", "OTU2546", "OTU725", "OTU170", "OTU1505", "OTU513", "OTU259", "OTU1169", "OTU258", "OTU1232", "OTU1497", "OTU1498", "OTU1503", "OTU412", "OTU2235", "OTU1960", "OTU1968", "OTU121", "OTU2065", "OTU340", "OTU2110", "OTU2188", "OTU357", "OTU342"],
"sample_values": [163, 126, 113, 78, 71, 51, 50, 47, 40, 40, 37, 36, 30, 28, 25, 23, 22, 19, 19, 14, 13, 13, 13, 12, 12, 11, 11, 11, 10, 10, 10, 8, 7, 7, 7, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
"otu_labels": ["Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Proteobacteria;Epsilonproteobacteria;Campylobacterales;Campylobacteraceae;Campylobacter", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Actinomycetaceae;Varibaculum", "Bacteria;Firmicutes;Clostridia", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales", "Bacteria;Firmicutes;Clostridia;Clostridiales;Veillonellaceae", "Bacteria;Firmicutes;Bacilli;Bacillales;Staphylococcaceae;Staphylococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Finegoldia", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;Peptococcaceae;Peptococcus", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Prevotellaceae", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Gallicola", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Gallicola", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Prevotellaceae;Prevotella", "Bacteria;Firmicutes;Clostridia", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;Ruminococcaceae", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Actinomycetaceae", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales", "Bacteria", "Bacteria;Firmicutes", "Bacteria", "Bacteria", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes", "Bacteria;Firmicutes", "Bacteria;Firmicutes", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia", "Bacteria;Firmicutes;Clostridia", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria", "Bacteria"]},

{"id": "941",
"otu_ids": ["OTU2722", "OTU944", "OTU2419", "OTU2539", "OTU3450", "OTU1795", "OTU2389", "OTU1314", "OTU922", "OTU1167", "OTU2859", "OTU963", "OTU2964", "OTU2651", "OTU2308", "OTU482", "OTU874", "OTU2908", "OTU1870", "OTU2264", "OTU41", "OTU728", "OTU1188", "OTU352", "OTU2782", "OTU1926", "OTU1959", "OTU1200", "OTU1977", "OTU3312", "OTU261", "OTU296", "OTU2890", "OTU1929", "OTU555", "OTU2704", "OTU2688", "OTU710", "OTU189", "OTU2500", "OTU2461", "OTU854", "OTU939", "OTU1310"],
"sample_values": [194, 178, 162, 92, 84, 40, 37, 28, 27, 24, 21, 21, 13, 10, 10, 8, 8, 5, 5, 4, 4, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
"otu_labels": ["Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Finegoldia", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Proteobacteria;Epsilonproteobacteria;Campylobacterales;Campylobacteraceae;Campylobacter", "Bacteria;Firmicutes;Bacilli;Bacillales;Staphylococcaceae;Staphylococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Prevotellaceae;Prevotella", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Dermabacteraceae;Dermabacter", "Bacteria;Firmicutes;Clostridia;Clostridiales;Veillonellaceae", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Actinomycetaceae;Varibaculum", "Bacteria;Firmicutes;Clostridia;Clostridiales;Peptococcaceae;Peptococcus", "Bacteria;Firmicutes;Bacilli;Lactobacillales;Aerococcaceae", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus", "Bacteria;Firmicutes;Bacilli;Lactobacillales;Streptococcaceae;Streptococcus", "Bacteria;Firmicutes;Clostridia", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Proteobacteria;Betaproteobacteria;Burkholderiales", "Bacteria", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;Lachnospiraceae", "Bacteria;Firmicutes;Bacilli;Lactobacillales;Streptococcaceae;Streptococcus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Finegoldia", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Finegoldia", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Actinomycetaceae;Mobiluncus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Prevotellaceae;Prevotella"]}

];

// SAMPLES
let samples = data[0].sample_values;
let samples_ten= samples.slice(0,10);

let samples941 = data[1].sample_values;
let samples941_ten= samples941.slice(0,10);

//IDS
let id = data[0].otu_ids;
let id_ten = id.slice(0,10);

let id941 = data[1].otu_ids;
let id941_ten = id941.slice(0,10);

//LABELS
let labels = data[0].otu_labels;
let labels_ten = labels.slice(0,10);

let labels941 = data[1].otu_labels;
let labels941_ten = labels941.slice(0,10);

//COLORS
let colors = ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)','rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)','rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)','rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)','rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)','rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)','rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)','rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)','rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'];


//// BAR CHART

// Initializes the page with a default plot
function init2() {
 trace1 = [{
  type: 'bar',
  x: samples_ten,
  y: id_ten,
  text: labels_ten,
  orientation: 'h'
}];


Plotly.newPlot("bar", trace1);
}



d3.selectAll("#selDataset").on("change", updatePlotly);

//DROPDOWNMENU
function updatePlotly() {
  let dropdownMenu = d3.select("#selDataset");
  let dataset = dropdownMenu.property("value");

  // Initialize x and y arrays
  let x = [];
  let y = [];
  let text = [];

  if (dataset === '940') {
    x = samples_ten;
    y = id_ten;
    text = labels_ten
  }

  else if (dataset === '941') {
    x = samples941_ten;
    y = id941_ten;
    text = labels941_ten
  }

  Plotly.restyle("bar", "x", [x]);
  Plotly.restyle("bar", "y", [y]);
  Plotly.restyle("bar","text",[text]);
}






//BUBBLE CHART

function init() {
trace2 = [{
  x: id,
  y: samples,
  text:labels,
  mode: 'markers',
  marker: {
    size: samples,
    color: colors }
  }];

Plotly.newPlot('bubble', trace2);

}

d3.selectAll("#selDataset").on("change", updatePlotly);

//DROPDOWN MENU
function updatePlotly() {
  let dropdownMenu = d3.select("#selDataset");
  let dataset = dropdownMenu.property("value");

  let x = [];
  let y = [];
  let text = [];

  if (dataset === '940') {
    x = id;
    y = samples;
    text = labels
  }

  else if (dataset === '941') {
    x = id941;
    y = samples941;
    text = labels941;
    d3.select("#sample-metadata").text("id: 941,   ethnicity: Caucasian/Midleastern, gender: F, age: 34.0, location: Chicago/IL, bbtype: I, wfreq: 1.0")
  }

  Plotly.restyle("bubble", "x", [x]);
  Plotly.restyle("bubble", "y", [y]);
  Plotly.restyle("bubble","text",[text]);

}


function optionChanged() {
  init2();
  init();
}

optionChanged();