google.charts.load('current', {'packages':['table', 'corechart']});

google.charts.setOnLoadCallback(draw_chart);
google.charts.setOnLoadCallback(drawTable);

var chart_data = [

	['individuals', 'km²'],
	[2, 10],
	[3, 15],
	[8, 13],
	[10, 20],
	[12, 17]

];

function draw_chart() {
	
	
	
	var data_obj = new google.visualization.arrayToDataTable(chart_data);
	
	var options = {
		
		title: 'Population density',
		legend: {position: 'top'},
		hAxis: {title: 'km²'},
		vAxis: {title: 'individuals'},
		colors: ['#ff0066', '#ff66a3', '#ff99c2', '#ffb3d1', '#ffcce0'],
		crosshair: { trigger: 'both' },
		
		
	};
	
	var chart_el = document.getElementById('chart');
	
	var chart_obj = new google.visualization.AreaChart(chart_el);
	
	chart_obj.draw(data_obj, options);
	
}

function add_point() {
	
	window.x_val = Number(document.getElementById('x').value);
	window.y_val = Number(document.getElementById('y').value);
	var new_arr = [x_val, y_val];
	 var new_index = chart_data.length;
	

	
	if (x_val == 0 || y_val == 0 || isNaN(x_val) || isNaN(y_val)) {
		
		return alert('Valorile introduse trebuie sa fie de tip numeric !');
		
	}
	
	for (let i = 1; i < chart_data.length; i++) {
		
		let c_arr = chart_data[i];
		
		if (c_arr[0] > new_arr[0]) {
			
			new_index = i;
			
			break;
			
		}
		
	}

	
	chart_data.splice(new_index, 0, new_arr);
	
	draw_chart();
	
	
	
}

	
	    

function drawTable() {
 if (typeof window.data == 'undefined') { 
     
        window.data = new google.visualization.DataTable(); 
     
     
        data.addColumn('number', 'Km²'); 
        data.addColumn('number', 'No. of individuals'); 
        data.addColumn('boolean', 'Added'); 
     
    } 
     
    if (typeof window.x_val != 'undefined' && typeof window.y_val != 'undefined') { 
     
        data.addRows([ 
          [window.x_val,  window.y_val, true] 
              
        ]); 
     
    } 
		
		
	
        var table = new google.visualization.Table(document.getElementById('istoric'));

        table.draw(data, {showRowNumber: false, width: '50%', height: '50%' });
		
					}
		
	
					

document.getElementById('adaugare').onclick = function(event) {
	
	event.preventDefault();
	
	add_point();
	drawTable();

	
}; 


	



