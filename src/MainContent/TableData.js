import React, { Component } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

function createData(id, projectName, team, projectcost, projectstatus, payment) {
  return { id, projectName, team, projectcost, projectstatus, payment };
}
class TableData extends Component {
  constructor() {
    super();
  }
  render() {
    const rows = [
      createData(
        1,
        "Paytm Bank App",
        "",
        "$34,220",
        "Completed",
        "Done",
      ),
      createData(
        2,
        "Amazon Website",
        "",
        "$5000",
        "In-Progress",
        "Pending",
      ),createData(
        3,
        "Cytrus Dashboard",
        "",
        "$38,000",
        "In-Progress",
        "Done",
      ),createData(
        4,
        "Paytm Bank App",
        "",
        "$9000",
        "Completed",
        "Pending",
      ),
    ];
    return (
      <React.Fragment>
        <div className="tabledata">
        <h2 className="gridheader">Project Summary</h2>
          <Table size="small">
            <TableHead>
              <TableRow>
              <TableCell>ID</TableCell>
                <TableCell>Project Name</TableCell>
                <TableCell>Team</TableCell>
                <TableCell align="left">Project Cost</TableCell>
                <TableCell>Project Status</TableCell>
                <TableCell >Payment</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.projectName}</TableCell>
                  <TableCell>{row.team}</TableCell>
                  <TableCell>{row.projectcost}</TableCell>
                  <TableCell>{row.projectstatus}</TableCell>
                  <TableCell >{row.payment}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </React.Fragment>
    );
  }
}
export default TableData;
