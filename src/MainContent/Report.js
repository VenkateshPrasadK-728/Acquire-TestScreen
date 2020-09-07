import React, { Component } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

class Report extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h2 className="reportlabel">Report</h2>
          <div>
            <label className="sublabel">Last Week Profit:</label>
            <br /> <br />
            <Typography component="p" variant="h4">
              +29.7%
            </Typography>
            <progress id="progresspositive" value="32" max="100">
              {" "}
              32%{" "}
            </progress>
          </div> <br /> <br /> 
          <div>
            <label className="sublabel">This week loses:</label>
            <br /> <br />
            <Typography component="p" variant="h4">
              -53.4%
            </Typography>
            <progress id="progressnegative" value="53" max="100">
              {" "}
              53.4%{" "}
            </progress>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Report;
