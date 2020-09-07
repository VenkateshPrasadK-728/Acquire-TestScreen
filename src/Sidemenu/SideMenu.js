import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import BusinessCenterOutlinedIcon from "@material-ui/icons/BusinessCenterOutlined";
import Typography from "@material-ui/core/typography";
import AvTimerOutlinedIcon from "@material-ui/icons/AvTimerOutlined";
import FolderOpenOutlinedIcon from "@material-ui/icons/FolderOpenOutlined";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import AccountBalanceOutlinedIcon from "@material-ui/icons/AccountBalanceOutlined";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

class SideMenu extends Component {
  render() {
    const mystyle = {
      backgroundColor: "#FFFFFF",
      fontFamily: "Arial",
      height: "1008px",
      width: "250px",
      opacity: "100%",
      borderRadius: "0 10px 10px 0",
    };
    return (
      <div style={mystyle}>
        <div className="sidemenu">
        <br />
          <h2 className="label">Management</h2>
          <ListItem button>
            <ListItemIcon>
              <HomeOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography type="body2" style={{ color: "#3B76EF" }}>
                  Dashboard
                </Typography>
              }
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PersonOutlineOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography type="body2" style={{ color: "#54718B" }}>
                  Employees
                </Typography>
              }
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BusinessCenterOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography type="body2" style={{ color: "#54718B" }}>
                  Clients
                </Typography>
              }
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <StarBorderOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography type="body2" style={{ color: "#54718B" }}>
                  Projects
                </Typography>
              }
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AvTimerOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography type="body2" style={{ color: "#54718B" }}>
                  Policies
                </Typography>
              }
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <FolderOpenOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography type="body2" style={{ color: "#54718B" }}>
                  Accounts
                </Typography>
              }
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AccountBalanceOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography type="body2" style={{ color: "#54718B" }}>
                  Payrolls
                </Typography>
              }
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <EqualizerOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography type="body2" style={{ color: "#54718B" }}>
                  Reports
                </Typography>
              }
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SettingsOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography type="body2" style={{ color: "#54718B" }}>
                  Settings
                </Typography>
              }
            />
          </ListItem>
        </div>
      </div>
    );
  }
}
export default SideMenu;
