//DOCTYPE JavaScript.
// Code is ordered by subheadings to aid understanding and readability.

// MAP 
var map; // Define the Map object.
var myCentreLat = 56.974924; // Starting Latitude position. Majority of markers can be viewed with these specifications. 
var myCentreLng = -4.592285; // Starting Longitude position. 
var initialZoom = 7; // Initial Zoom factor. 
var infowindow; // Global variable.

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawInfoChart);

function addMarker(myPos,myTitle,myInfo) { // Determines the marker icon design and location.
   var marker = new google.maps.Marker({ 
	   position: myPos, // Determines the Marker location on map.
	   map: map, 
	   title: myTitle,
	   icon: 'condominium.png' // Determines icon used for the marker.
});
infowindow = new google.maps.InfoWindow(); // Enables an infowindow to appear. The text is location-specific.  
	google.maps.event.addListener (marker, 'click', function() { // The text is viewed once the marker is clicked.
	infowindow.open(map, this); // When a separate marker is clicked, the previous infowindow disappears.
	drawInfoChart(map, marker);
})
}

function drawInfoChart (map, marker) {	
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Aberdeenshire', 'Angus', 'Argyll and Bute', 'City of Aberdeen', 'City of Dundee', 'City of Edinburgh', 'City of Glasgow', 'Clackmannanshire', 'Western Isles', 'Dumfries and Galloway', 'East Ayrshire', 'East Dunbartonshire', 'East Lothian', 'East Renfrewshire', 'Falkirk', 'Fife', ' Highland', 'Inverclyde', 'Midlothian', 'Moray', 'North Ayrshire', 'North Lanarkshire', 'Orkney Islands', 'Perth and Kinross', 'Renfrewshire', 'Scottish Borders', 'Shetland Islands', 'South Lanarkshire', 'South Ayrshire', 'Stirling', 'West Dunbartonshire', 'West Lothian'],
		  ['2010',  177281,      	132132,		134357,				161901,				111341, 			212508,				109989,				112767,				183001,				130134,					93691,			176528,				182179,				184732,			105523,	113485,		148878,		107758,			145897,		131750,		103802,				95334,				108495,				169295, 		113391, 		141127, 				103691, 		112353,					183148,		160185,			99762,				133804],
		  ['2011',  179816,      	128798,		130227,				161634,				108813, 			204743,				107961,				108308,				181638,				124961,					93148,			170613,				176679,				181013,			102072,	112831,		144896,		105196,			140161,		126928,		99474,				93262,				120442,				168776, 		111324, 		143557, 				117219, 		109636,					181582,		157828,			96812,				129013],
		  ['2012',  174650,      	128259, 	125821,				162144,				108276, 			202346,				102325,				104152,				183639,				117843,					87306,			167405,				175313,				177731,			99704,	108624,		138822,		100461,			139640,		128443,		91962,				88731,				129546,				159687, 		105854, 		135463, 				113574, 		103987,					183573,		155140,			94461,				125253],
		  ['2013',  179152,      	127988, 	125670,				168852,				109066, 			201212,				101593,				102484,				188902,				116996,					82366,			165581,				178479,				178110,			99027,	110199,		138994,		96235,			138559,		128639,		91973,				87545,				118567,				161702, 		102208, 		136035, 				113123, 		101462, 				188741,		152210,			90875,				124246],
		  ['2014',  192831,      	134626, 	125159,				190883,				113140, 			214474,				105745,				105462,				205220,				117771,					85856,			175778,				188496,				187217,			103497,	113963,		146412,		97540,			145600,		131642,		95970,				89359,				120843,				167599, 		106544, 		141830, 				120646, 		104339, 				205233,		157433,			93515,				129314],
		  ['2015',  200141,      	140120, 	134466,				191795,				118142, 			225536,				110944,				110819,				219389,				119385,					89550,			179012,				197545,				189924,			106817,	120457,		150477,		100033,			153195,		136002,		99674,				93940,				122426,				171391, 		110022, 		144662, 				125539, 		110714, 				219464,		161860,			95956,				134730],
		  ['2016',  195597,      	139865, 	131071,				175629,				117806, 			225988,				114289,				112031,				236514,				116971,					91976,			191938,				198238,				207443,			110723,	124287,		152883,		101438,			159991,		141146,		97738,				98996,				124286,				173817, 		112890, 		145056, 				151037, 		115266, 				236027,		169073,			96410,				140986],
		  ['2017',  191615,      	141496,		133055,				165002,				118710, 			235196,				121400,				117140,				247281,				122364,					93798,			201650,				206743,				215246,			114332,	127998,		155868,		100323,			164652,		145088,		99776,				100459,				133237,				180110, 		115810, 		147961,					158707, 		122075,					247108,		173249,			97773,				145122],
		  ['2018',  189133,      	143807,		141317,				158565,				122555, 			256498,				130097,				123683,				253331,				126453,					94433,			208940,				222508,				223538,			120845,	133260,		161434,		101172,			179036,		150250,		103879,				105899,				145384,				183716, 		121149, 		151329, 				163277, 		126321,					253800,		179037,			105068,				157514],
		  ['2019',  184992,      	145957, 	144122,				149162,				124069, 			266458,				134231,				130041,				254185,				128274,					97449,			211913,				228456,				227736,			125315,	133590,		167603,		102708,			186624,		150396,		107329,				108418,				154155,				192856, 		121849, 		149954, 				159493, 		128539,					255314,		190021,			107226,				162304],
		  ['2020',  178911,      	143481, 	146250,				143687,				124082, 			270695,				134956,				130537,				258223,				131590,					95090,			213516,				230695,				218782,			130765,	131698,		167170,		102016,			186465,		148017,		103905,				109131,				148731,				190876, 		124494, 		160518, 				143610, 		197100, 				256970,		197100,			108868,				163238]

        ]);
		
        var options = {
          title: 'Scotland and UK Average House Prices 2010 to 2020 (£)',
          curveType: 'function',
          legend: { position: 'bottom' }
        };
		
	    var myInfo = document.createElement('infograph_div'),
			infoWindow = new google.maps.InfoWindow(),
			chart = new google.visualization.LineChart(myInfo);

		chart.draw(data, options);
		infoWindow.setContent(myInfo);
		infoWindow.open(map, marker);
}
 
function addPolya(polyPatha,myInfo,line_colour,fillvalue) { // Polygon style choices.
	myPolya = new google.maps.Polygon({
		paths: polyPatha,
		strokeColor: line_colour, 
		strokeOpacity: 0.8,
		strokeWeight: 3,
		fillColor: fillvalue,
		fillOpacity: 0.2
	});
	myPolya.setMap(map); // Polygon set to map. Polygon and marker data is located in 'map_data.js' due to the high quantity of data required for accurate coordinates.
}
function addPolyb(polyPathb,myInfo,line_colour,fillvalue) { // Polygon style choices.
	myPolyb = new google.maps.Polygon({
		paths: polyPathb,
		strokeColor: line_colour, 
		strokeOpacity: 0.8,
		strokeWeight: 3,
		fillColor: fillvalue,
		fillOpacity: 0.2
	});
	myPolyb.setMap(map); // Polygon set to map. Polygon and marker data is located in 'map_data.js' due to the high quantity of data required for accurate coordinates.
}

function initialize() { // Loads local variables (e.g. latlng and myOptions). 
   var latlng = new google.maps.LatLng(myCentreLat,myCentreLng); // Map centres at previously specified latitude and longitudes when opened.
   var myOptions = {
      zoom: initialZoom,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.HYBRID // Type of base map used (others include Terrain).
   };
   map = new google.maps.Map(
      document.getElementById("map_canvas"),myOptions);
	  	  
   for (id in os_markers) { // For loop enabling location-specific title and average house price by year in each marker infowindow.
        var info = "<div class=infowindow><h1><u>" +
         os_markers[id].title + "</h1></u><p><b>Average House Prices: </b></p><p>"
         + os_markers[id].infograph + "</p></div>";

      var osPt = new OSRef( // Convert coordinates Easting-Northing to Latitude-Longitude, using OsRef from JScoord library (see '.jscoord-1.1.1.js' for coding).
         os_markers[id].easting,os_markers[id].northing);
      var llPt = osPt.toLatLng(osPt); // 'toLatLng' from JScoord library, converts points to Latitude and Longitude.
      llPt.OSGB36ToWGS84(); // Changing the Datum used (OS National Grid use a different one (OSGB36) to Google Maps). 
							// 11pt acts as the object where the coordinates and datum are being changed.
      addMarker(new google.maps.LatLng(llPt.lat,llPt.lng), os_markers[id].title,os_markers[id].infograph,info); // Adds marker with Latitude and Longitude properties.
   }
      
   for (id in os_polydata1) { // For loop creating the Polygon with specific data points.  
		var polyPatha = []; // Empty array. Points are read through.
		
		var thisBoundary = os_polydata1[id].boundary;
		
		for (pt in thisBoundary) { 
			var osPt = new OSRef(thisBoundary[pt].easting, // Convert coordinates Easting-Northing to Latitude-Longitude, using OsRef from JScoord library.
				thisBoundary[pt].northing);
			var llPt = osPt.toLatLng(osPt); // 'toLatLng' from JScoord library, converts points to Latitude and Longitude.
			llPt.OSGB36ToWGS84(); // Changing the Datum used (OS National Grid use a different one (OSGB36) to Google Maps). 
			var myLatLng = new google.maps.LatLng(llPt.lat,llPt.lng); // 11pt acts as the object where the coordinates and datum are being changed.
			polyPatha.push(myLatLng); // Constructs the Polygon.
		} 
		var fillvalue = os_polydata1[id].value // Colour of each polygon centre is defined in 'value' rows of overlays.js file.
		addPolya(polyPatha, info,"#000000",fillvalue); // Adds Polygon with all coordinate points, and determines line colour and fill colour.
	}  
	
	for (id in os_polydata2) { // For loop creating the Polygon with specific data points.  
		var polyPathb = []; // Empty array. Points are read through.
		
		var thisBoundary = os_polydata2[id].boundary;
		
		for (pt in thisBoundary) { 
			var osPt = new OSRef(thisBoundary[pt].easting, // Convert coordinates Easting-Northing to Latitude-Longitude, using OsRef from JScoord library.
				thisBoundary[pt].northing);
			var llPt = osPt.toLatLng(osPt); // 'toLatLng' from JScoord library, converts points to Latitude and Longitude.
			llPt.OSGB36ToWGS84(); // Changing the Datum used (OS National Grid use a different one (OSGB36) to Google Maps). 
			var myLatLng = new google.maps.LatLng(llPt.lat,llPt.lng); // 11pt acts as the object where the coordinates and datum are being changed.
			polyPathb.push(myLatLng); // Constructs the Polygon.
		} 
		var fillvalue = os_polydata2[id].value // Colour of each polygon centre is defined in 'value' rows of overlays.js file.
		addPolyb(polyPathb, info,"#000000",fillvalue); // Adds Polygon with all coordinate points, and determines line colour and fill colour.
	}  
};

// PAGE
 
$(document).ready(function(){ // Sticky navigation bar.
window.onscroll = function() {myFunction()};

var topnav = document.getElementById("topnav");
var sticky = topnav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) { // Ensures if sticky aspect does not work, navigation bar and associated hyperlinks remain fixed at top of web page.
    topnav.classList.add("sticky")
  } else {
    topnav.classList.remove("sticky");
  }
}
});

function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Scotland', 'United Kingdom'],
		  ['2010',	131902,		170365],
		  ['2011',	129489,		167888],
		  ['2012',  125249,		168556],
		  ['2013',	125755,		172890],
		  ['2014',	131664,		186770],
		  ['2015', 	136887,		197890],
		  ['2016', 	138749,		211725],
		  ['2017',  142836,		221403],
		  ['2018',  149104,		228354],
		  ['2019',	152055,		230839],
		  ['2020',	151779,		231049]
        ]);
		
        var options = {
          title: 'Scotland and UK Average House Prices 2010 to 2020 (£)',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('graph'));

        chart.draw(data, options);
      }
	
// Buttons

function LiveIn() { // If 'LiveIn' button clicked, text appears below the buttons and a value of 1 is added to the counter within the text.
	  if (typeof(Storage) !== "undefined") {
		if (localStorage.LiveIn) {
		  localStorage.LiveIn = Number(localStorage.LiveIn)+1; // 1 added to 'Live In:' underneath the buttons.
		} else {
		  localStorage.LiveIn = 1; // Remains at 1 if the button does not work.
		}
		document.getElementById("longterm").innerHTML = "Live In: " + localStorage.LiveIn;
		} else {
		document.getElementById("longterm").innerHTML = "Sorry, your browser does not support web storage..."; // Error message if web storage does not work.
	  }
	};
	
		function Rent() { // If 'Rent' button clicked, text appears below the buttons and a value of 1 is added to the counter within the text.
	  if (typeof(Storage) !== "undefined") {
		if (localStorage.Rent) {
		  localStorage.Rent = Number(localStorage.Rent)+1; // 1 added to 'Rent:' underneath the buttons.
		} else {
		  localStorage.Rent = 1; // Remains at 1 if the button does not work.
		}
		document.getElementById("shortterm").innerHTML = "Rent: " + localStorage.Rent;
		} else {
		document.getElementById("shortterm").innerHTML = "Sorry, your browser does not support web storage..."; // Error message if web storage does not work.
	  }
	};

			function Resell() { // If 'Resell' button clicked, text appears below the buttons and a value of 1 is added to the counter within the text.
	  if (typeof(Storage) !== "undefined") {
		if (localStorage.Resell) {
		  localStorage.Resell = Number(localStorage.Resell)+1; // 1 added to 'Resell for Profit:' underneath the buttons.
		} else {
		  localStorage.Resell = 1; // Remains at 1 if the button does not work.
		}
		document.getElementById("nonresident").innerHTML = "Resell for Profit: " + localStorage.Resell;
		} else {
		document.getElementById("nonresident").innerHTML = "Sorry, your browser does not support web storage..."; // Error message if web storage does not work.
	  }
	};

	
		function Other() { // If 'Other' button clicked, text appears below the buttons and a value of 1 is added to the counter within the text.
	  if (typeof(Storage) !== "undefined") {
		if (localStorage.Other) {
		  localStorage.Other = Number(localStorage.Other)+1; // 1 added to 'Other:' underneath the buttons.
		} else {
		  localStorage.Other = 1; // Remains at 1 if the button does not work.
		}
		document.getElementById("unknown").innerHTML = "Other: " + localStorage.Other;
		} else {
		document.getElementById("unknown").innerHTML = "Sorry, your browser does not support web storage..."; // Error message if web storage does not work.
	  }
	};

// FOOTER
// Email submission box in Footer.
var isEmpty    = function(x) { return x === ""; } // Function to check if field is empty.

var invalid    = function(x) { x.style.backgroundColor = '#ff7e7e'; error = true; }// If field is invalid it is passed here and box turns pink.

var valid      = function(x) { x.style.backgroundColor = "White"; }// If field is valid, passed here, changes field back to white in case of form resubmit.

function validate()	{ // Ensures whether email is inputted successful or unsuccessfully the user is made aware and alerted.

	error 	 	 = false; 
	var emailbox = document.getElementsByClassName('boxes');
	var emailaddress = document.getElementById('email'); 

	for (var i=0;i<emailbox.length;i++) { // Clear pink highlighting in case form is resubmitted 
		valid(emailbox[i]); 
	}
	
	for (var i=0;i<emailbox.length;i++) { // For loop through all fields to check if Email submission box is empty. 
		if	(isEmpty(emailbox[i].value))	{
			invalid(emailbox[i]); 
		}
	} 
		
	if (error) { // If error, return false and alerts user. User has to select 'ok' on alert to ensure reads alert.
	alert("Please check email address for Errors and Resubmit. Thanks!");
		return false; 
	} 
	
	else 	{ // Submit form if there are no errors. Page refreshes.
		alert("Thanks for signing up to the mailing list!");
		return true; 
		 ;
	} 
}

