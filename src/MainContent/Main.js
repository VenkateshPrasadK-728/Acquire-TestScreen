import React, { Component } from "react";
import Chart from "./Chart";
import TableData from "./TableData";
import Report from "./Report";
import SearchBar from "material-ui-search-bar";

class Main extends Component {
  render() {
    return (
      <div className="chart">
          <div>
          <SearchBar />        
          </div>
        <div className="canvas">
          <div className="canvaschart">
            {" "}
            <Chart />
          </div>
          <div className="canvasreport">
            {" "}
            <Report />
          </div>
        </div>
        <div>
        
          <TableData />
         
        </div>
      </div>
    );
  }
}
export default Main;
