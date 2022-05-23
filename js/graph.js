window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title:{
            text: "Les réseaux sociaux"
        },
        axisY :{
            includeZero: false,
            prefix: "$"
        },
        toolTip: {
            shared: true
        },
        legend: {
            fontSize: 13
        },
        data: [{
            type: "splineArea",
            showInLegend: true,
            name: "Instagram",
            yValueFormatString: "$#,##0",
            xValueFormatString: "MMM YYYY",
            dataPoints: [
                { x: new Date(2016, 2), y: 30000 },
                { x: new Date(2016, 3), y: 35000 },
                { x: new Date(2016, 4), y: 30000 },
                { x: new Date(2016, 5), y: 30400 },
                { x: new Date(2016, 6), y: 20900 },
                { x: new Date(2016, 7), y: 31000 },
                { x: new Date(2016, 8), y: 30200 },
                { x: new Date(2016, 9), y: 30000 },
                { x: new Date(2016, 10), y: 33000 },
                { x: new Date(2016, 11), y: 38000 },
                { x: new Date(2017, 0),  y: 38900 },
                { x: new Date(2017, 1),  y: 39000 }
            ]
         },
        {
            type: "splineArea", 
            showInLegend: true,
            name: "Facebook",
            yValueFormatString: "$#,##0",
            dataPoints: [
                { x: new Date(2016, 2), y: 20100 },
                { x: new Date(2016, 3), y: 16000 },
                { x: new Date(2016, 4), y: 14000 },
                { x: new Date(2016, 5), y: 18000 },
                { x: new Date(2016, 6), y: 18000 },
                { x: new Date(2016, 7), y: 21000 },
                { x: new Date(2016, 8), y: 22000 },
                { x: new Date(2016, 9), y: 25000 },
                { x: new Date(2016, 10), y: 23000 },
                { x: new Date(2016, 11), y: 25000 },
                { x: new Date(2017, 0), y: 26000 },
                { x: new Date(2017, 1), y: 25000 }
            ]
         },
        {
            type: "splineArea", 
            showInLegend: true,
            name: "Twitter",
            yValueFormatString: "$#,##0",     
            dataPoints: [
                { x: new Date(2016, 2), y: 10100 },
                { x: new Date(2016, 3), y: 6000 },
                { x: new Date(2016, 4), y: 3400 },
                { x: new Date(2016, 5), y: 4000 },
                { x: new Date(2016, 6), y: 9000 },
                { x: new Date(2016, 7), y: 3900 },
                { x: new Date(2016, 8), y: 4200 },
                { x: new Date(2016, 9), y: 5000 },
                { x: new Date(2016, 10), y: 14300 },
                { x: new Date(2016, 11), y: 12300 },
                { x: new Date(2017, 0), y: 8300 },
                { x: new Date(2017, 1), y: 6300 }
            ]
         },
        {
            type: "splineArea", 
            showInLegend: true,
            yValueFormatString: "$#,##0",      
            name: "Tik Tok",
            dataPoints: [
                { x: new Date(2016, 2), y: 1700 },
                { x: new Date(2016, 3), y: 2600 },
                { x: new Date(2016, 4), y: 1000 },
                { x: new Date(2016, 5), y: 1400 },
                { x: new Date(2016, 6), y: 900 },
                { x: new Date(2016, 7), y: 1000 },
                { x: new Date(2016, 8), y: 1200 },
                { x: new Date(2016, 9), y: 5000 },
                { x: new Date(2016, 10), y: 1300 },
                { x: new Date(2016, 11), y: 2300 },
                { x: new Date(2017, 0), y: 2800 },
                { x: new Date(2017, 1), y: 1300 }
            ]
        }]
    });
    chart.render();
    
    }