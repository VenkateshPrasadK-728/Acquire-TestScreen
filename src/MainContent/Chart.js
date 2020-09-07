import React, { Component } from 'react';
import {CanvasJSChart} from 'canvasjs-react-charts';



class Chart extends Component {
  render() {
    const options = {
        animationEnabled: true,
        title:{
            text: "Total Transactions"
        },
        data: [{
            type: "spline",
            dataPoints: [
                { x: 10, y: 45 },
                { x: 20, y: 38},
                { x: 30, y: 42 },
                { x: 40, y: 51 },
                { x: 50, y: 45 },
                { x: 60, y: 42 },
                { x: 70, y: 30 },
                { x: 80, y: 34 },
                { x: 90, y: 14}
            ]
        }]
    }
    return (
      <div className="chart">
      <CanvasJSChart options = {options}/>  
    </div>
    );
  }
}
export default Chart;
