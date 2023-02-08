//call the initialize function when the document has loaded
document.addEventListener('DOMContentLoaded', initialize)
//initialize function called when the script loads
function initialize() {
	cities();
};
//how does this work because the variable is written before it is declared and it doesnt work when I take it away
function cities() {
	var cityPop = [
		{
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
		//creates array that contains city and population data
	];
	//create a table element
	var table = document.createElement("table");

	//create a header row element and append it to the table
	var headerRow = document.createElement("tr");
	table.appendChild(headerRow);

	//create the "City" and "Population" column headers//I dont know what line 34 is doing
	headerRow.insertAdjacentHTML("beforeend", "<th>City</th><th>Population</th>")

	//loop to add a new row for each city
	cityPop.forEach(function (cityObject) {
		//assign longer html strings to a variable
		var rowHtml = "<tr><td>" + cityObject.city + "</td><td>" + cityObject.population + "</td></tr>";
		//add the row's html string to the table
		table.insertAdjacentHTML('beforeend', rowHtml);
	})

	//append the table element to the div
	document.querySelector("#myDiv").appendChild(table);

	addColumns(cityPop);
	addEvents();

};

//function to add a new column to the table
function addColumns(cityPop) {
	//this function is adding columns and rows to the array 

	//select all column rows
	var rows = document.querySelectorAll("tr")
	//loop to add a new column to each row

	document.querySelectorAll("tr").forEach(function (row, i) {

		if (i == 0) {
			//this conditional statement tells the computer when to create a new row

			row.insertAdjacentHTML('beforeend', '<th>City Size</th>'); //this function says what row or column the variable goes and what should go there, city sizes go in this column

		} else {

			var citySize;

			if (cityPop[i - 1].population < 100000) {
				citySize = 'Small';

			} else if (cityPop[i - 1].population < 500000) {
				citySize = 'Medium';

			} else {
				citySize = 'Large';
			};

			row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>')
		};
	});
};

function addEvents() {
	//this function makes the text change to a random color when the mouse hoovers over --> function is called whenever a specialized event occurs

	//select the table element
	table = document.querySelector("table");

	//add mouse over the event
	document.querySelector("table").addEventListener("mouseover", function (){

		var color = "rgb(";
		//generate random color
		for (var i = 0; i < 3; i++) {

			var random = Math.round(Math.random() * 255);
	
			//rounds number to the closets whole number and then multiples 255 which is max amount of color for rgb color scheme

			color += random;
			// adds the value of the right operand to a variable and assigns the result to the variable. 

			if (i < 2) {
				color += ",";

			} else {
				color += ")";
			};
		}
		//style table with the random style 
		table.style.color = color;


	});

	function clickme() {

		alert('Hey, you clicked me!');
	};

	//event listener for the click
	table.addEventListener("click", clickme)
};

//window.onload = initialize();
