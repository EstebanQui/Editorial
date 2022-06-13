window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title:{
            text: ""
        },
        axisY :{
            includeZero: true,
            title:"UAM (%)",
            prefix: "%"
        },
        axisX :{
            title: "Âge"
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
            legendMarkerColor: "#3B4189",
            color: "#3B4189",
            yValueFormatString: "#######.00",
            xValueFormatString: "Utilisateurs actifs mensuels",
            dataPoints: [
                { x: new Number(17), y: 9 },
                { x: new Number(24), y: 30 },
                { x: new Number(34), y: 32 },
                { x: new Number(44), y: 16 },
                { x: new Number(54), y: 8 },
                { x: new Number(65), y: 4 },
                { x: new Number(70), y: 2.00 }
            ]
         },
        {
            type: "splineArea", 
            showInLegend: true,
            name: "Facebook",
            legendMarkerColor: "#C4C8EE",
            color: "#C4C8EE",
            yValueFormatString: "#######.00",
            xValueFormatString: "Utilisateurs actifs mensuels",
            dataPoints: [
                { x: new Number(17), y: 6 },
                { x: new Number(24), y: 27 },
                { x: new Number(34), y: 32 },
                { x: new Number(44), y: 16 },
                { x: new Number(54), y: 10 },
                { x: new Number(65), y: 9 }
            ]
         },
        {
            type: "splineArea", 
            showInLegend: true,
            name: "Twitter",
            legendMarkerColor: "#9A91EA",
            color: "#9A91EA",
            yValueFormatString: "#######.00",
            xValueFormatString: "Utilisateurs actifs mensuels",     
            dataPoints: [
                { x: new Number(17), y: 7 },
                { x: new Number(24), y: 17 },
                { x: new Number(34), y: 38 },
                { x: new Number(44), y: 21 },
                { x: new Number(55), y: 17 }
            ]
         },
        {
            type: "splineArea", 
            showInLegend: true,
            yValueFormatString: "#######.00",
            xValueFormatString: "Utilisateurs actifs mensuels",      
            name: "Tik Tok",
            legendMarkerColor: "#4B55D7",
            color: "#4B55D7",
            dataPoints: [
                { x: new Number(17), y: 28 },
                { x: new Number(24), y: 35 },
                { x: new Number(34), y: 18 },
                { x: new Number(44), y: 19 }
            ]
        }]
    });
    chart.render();
    
    }