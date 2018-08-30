var plot = $.plot(placeholder, data, options)

var plot = $("#placeholder").plot(data, options).data("plot");

//data
[ series1, series2, ... ]

[ [x1, y1], [x2, y2], ... ]

[ [1, 3], [2, 14.01], [3.5, 3.14] ]

{
  color: color or number
  data: rawdata
  label: specific lines options
  bars: specific bars options
  points: specific points options
  xaxis: number
  yaxis: number
  clickable: boolean
  hoverable: boolean
  shadowSize: number
  highlightColor: color or number
}

{
  label: "y = 3",
  data: [[0, 3], [10, 3]]
}

[ { label: "Foo", data: [ [10, 1], [17, -14], [30, 5] ] },
  { label: "Bar", data: [ [11, 13], [19, 11], [30, -7] ] }
]

var options = {
  series: {
    lines: { show: true },
    points: { show: true }
  }
};


legend: {
  show: boolean
  labelFormatter: null or (fn: string, series object -> string)
  labelBoxBorderColor: color
  noColumns: number
  position: "ne" or "nw" or "se" or "sw"
  margin: number of pixels or [x margin, y margin]
  backgroundColor: null or color
  backgroundOpacity: number between 0 and 1
  container: null or jQuery object/DOM element/jQuery expression
  sorted: null/false, true, "ascending", "decending", "reverse", or a comparator
}

labelFormatter: function(label, series){
  return '<a herf="#>' + label + '">' + label + '</a>';
}

sorted: function(a,b){
  return a.label == b.label ? 0 : (
    a.label > b.label ? 1 : -1
  )
}

xaxis, yaxis: {
  show: null or true/false
  position: "bottom" or "top" or "left" or "right"
  mode: null or "time" ("time" requires jquery.flot.time.js plugin)
  timezone: null, "browser" or timezone (only makes sense for mode: "time")

  color: null or color spec
  tickColor: null or color spec
  font: null or font spec object

  min: null or number
  max: null or number
  autoscaleMargin: null or number

  transform: null or fn: number -> number
  inverseTransform: null or fn: number -> number

  ticks: null or number or ticks array or (fn: axis -> ticks array)
  tickSize: number or array
  minTickSize: number or array
  tickFormatter: (fn: number, object -> string) or string
  tickdecimals: null or number

  labelWidth: null or number
  labelHeight: null or number
  reserveSpace: null or true

  tickLength: null or number

  alignTicksWidthAxis: null or number
}


<div class='flot-x-axis flot-x1-axis'>
  <div class='flot-tick-label'>January 2018</div>
</div>

{
  size: 11,
  lineHeight: 13,
  style: "italic",
  weight: "bold",
  family: "sans-serif",
  variant: "small-caps",
  color: "#545454"
}

xaxis: {
  transform: function (v) { return Math.log(v); },
  inverseTransform: function (v) { return Math.exp(v); }
}

yaxis: {
  transform: function (v) { return -v; },
  inverseTransform: function (v) { return -v; }
}

ticks: [0, 1.2, 2.4]

ticks: [[0, "zero"], [1.2, "one mark"], [2.4, "twomarks"]]


function piTickGenerator(axis){
  var res = [], i = Math.floor(axis.min / Math.PI);
  do {
    var v = i * Math.PI;
    res.push([v, i + "\u03c0"]);
    ++i;
  } while (v < axis.max);
  return res;
}

function formatter(val, axis){
  return val.toFixed(axis.tickDecimals);
}

function suffixFormatter(val, axis){
  if(val > 1000000)
    return (val / 1000000).toFixed(axis.tickDecimals) + " MB";
  else if (val > 1000)
    return (val / 1000).toFixed(axis.tickDecimals) + " kB";
  else
    return val.toFixed(axis.tickDecimals) + " B";
}

xaxes: []
yaxes: []

{
  xaxes: [ { position: "top" } ],
  yaxes: [ { }, { position: "right", min: 20 } ]
}

alert((new Date()).getTime())

strtotime("2002-02-20 UTC") * 1000


calendar.timegm(datetime_object.timetuple()) * 1000

Time.now.to_i * 1000
DateTime.now.to_i * 1000 
ActiveSupport::TimeZone.new('Asia/Osaka').now.to_i * 1000

minTickSize: array
timeformat: null or format string
monthNames: null or array of size 12 of strings
dayNames: null or array of size 7 of strings
twelveHourClock: boolean

%a: weekday name (customizable)
%b: month name (customizable)
%d: day of month, zero-padded (01-31)
%e: day of month, space-padded ( 1-31)
%H: hours, 24-hour time, zero-padded (00-23)
%I: hours, 12-hour time, zero-padded (01-12)
%m: month, zero-padded (01-12)
%M: minutes, zero-padded(00-59)
%q: quarter (1-4)
%S: seconds, zero-padded(00-59)
%y: year (two digits)
%Y: year (four digits)
%p: am/pm
%P: AM/PM (uppercase version of %p)
%w: weekday as number (0-6, 0 being Sunday)

monthNames: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"]
dayNames: ["dim", "lun", "mar", "mer", "jeu", "ven", "sam"]

tickFormatter: function (val, axis){
  var d = new Date(val);
  return d.getUTCDate() + "/" + (d.getUTCMonth() + 1);
}

minTickSize: [1, "month"]

series: {
  lines, points, bars: {
    show: boolean
    lineWidth: number
    fill: boolean or number
    fillColor: null or color/gradient
  }
  
  lines, bars: {
    zero: boolean
  }

  points: {
    barWidth: number
    align: "left", "right" or "center"
    horizontal: boolean
  }

  lines: {
    steps: boolean
  }

  shadowSize: number
  highlightColor: color or number
}

colors: [ color1, color2, ... ]

var options = {
  series: {
    lines: { show: true, fill: true, fillColor: "rgba(255, 255, 255, 0.8)" },
    points: { show: true, fill: false }
  }
};

function cross(ctx, x, y, radius, shadow){
  var size = radius * Math.sqrt(Math.PI) / 2;
  ctx.moveTo(x - size, y - size);
  ctx.lineTo(x + size, y + size);
  ctx.moveTo(x - size, y + size);
  ctx.lineTo(x + size, y - size);
}

colors: ["#d18b2c", "#dba255", "#919733"]


grid: {
  show: boolean
  aboveData: boolean
  color: color
  backgroundColor: color/gradient or null
  margin: number or margin object
  labelMargin: number
  axisMargin: number
  markings: array of markings or (fn: axes -> array of markings)
  borderWidth: number or object with "top", "right", "bottom" and "left" properties with different widths
  borderColor: color or null or object with "top", "right", "bottom" and "left" properties with different colors
  minBorderMargin: number or null
  clickable: boolean
  hoverable: boolean
  autoHighlight: boolean
  mouseActiveRadius: number
}

interaction: {
  redrawOverlayInterval: number or -1
}


margin: {
  top: top margin in pixels
  left: left margin in pixels
  bottom: bottom margin in pixels
  right: rihgt margin in pixels
}

markings: [ {xaxis: { from: 0, to: 2 }, yaxis: { from: 10, to: 10 }, color: "#bb0000"}, ... ]

markings: [ {yaxis: { from: 1, to: 1 } }, ... ]

markings: function (axes){
  var markings = [];
  for(var x = Math.floor(axes.xaxis.min); x < axes.xaxis.max; x += 2)
    markings.push({ xaxis: { from: x, to: x + 1 } });
  return markings;
}




$.plot($("#placeholder"), [ d ], { grid: { clickable: true } });

$("#placeholder").bind("plotclick", function (event, pos, item)){
  alert("You clicked at " + pos.x + ", " + pos.y);

  if(item){
    highlight(item.series, item.datapoint);
    alert("You clicked a point!");
  }
};


item: {
  datapoint: the point, e.g. [0, 2]
  dataIndex: the index of the point in the data array
  series: the series object
  seriesIndex: the index of the series
  pageX, pageY: the global screen coordinates of the point
}

$.plot($("#placeholder"), [ { label: "Foo", data: [[0, 10], [7, 3]] } ], ...);

{ data: [...], label: "Foo", clickable: false }


{ colors: [ color1, color2, ... ] }

grid: {
  backgroundColor: { colors: ["#000", "#999"] }
}

{ colors; [{ opacity: 0.8 }, { brightness: 0.6, opacity: 0.8 } ] }

bars: {
  show: true,
  lineWidth: 0,
  fill: true,
  fillColor: { colors [ { opacity: 0.8 }, { opacity: 0.1 } ] }
}


o = pointOffset({ x: xpos, y: ypos, xaxis: 2, yaxis: 3 })

var series = plot.getData();
for (var i = 0; i < series.length; ++i)
  alert(series[i].color);


{
  x, y: boolean,
  number: boolean,
  required: boolean,
  defaultValue: value,
  autoscale: boolean
}

[
  { x: true, number: true, required: true },
  { x: true, number: true, required: true }
]


function multiply(plot, series, datapoints){
  var points = datapoints.points, ps = datapoints.pointsize;
  for(var i = 0; i < points.length; i += ps)
    points[i + 1] *= 2;
}

function (plot, eventHolder){
  eventHolder.mousedown(function (e){
    alert("You pressed the mouse at " + e.pageX + " " + e.pageY);
  });
}



