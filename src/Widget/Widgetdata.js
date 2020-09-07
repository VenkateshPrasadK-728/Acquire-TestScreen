import React, { Component } from "react";
import Mask from "./Mask.png";
import Calendar from 'react-calendar';

class Widgetdata extends Component {
  render() {
    return (
      <div className="widget">

        <div class="profile">
          <img src={Mask} alt="Avatar" />
          <br />
          <label>Issac Williams </label>
          <label>25'oct 1986</label>
        </div>

        <div style={{ width: "100%", marginTop: "15px" }}>
        <div style={{ width: "33%", marginLeft: "0px", float: "left" }}>
            <div>Blood</div> <label>O+</label>
          </div>
          <div style={{ width: "33%", marginLeft: "0px", float: "left" }}>
            <div>Height</div> <label>6'ft</label>
          </div>
          <div style={{ width: "33%", marginLeft: "0px", float: "left" }}>
            <div>Weight</div> <label>75kg</label>
          </div>
        </div><br /> <br /> <hr />
           
        <div class="calender" >
        <Calendar /> <hr />
        </div> 

        <div class="schedule"style={{ width: "100%", marginTop: "100px",borderRadius:"20px",textAlign:"center", backgroundColor:"blue"}} >
        <label>Match Against Team B </label><br />
          <label>9:00 AM to 11:30PM </label> <br />
          <label>Coach : Nelson</label><br />
          <hr />
          <img src={Mask} alt="Avatar" />
        </div>
        <hr />
       
        <div class="oppintment"style={{ width: "100%", marginTop: "40px",borderRadius:"20px",textAlign:"center" ,backgroundColor:"grey"}} >
        <label>Health Appointment </label><br />
          <label>9:00 AM to 11:30PM </label> <br />
          <label>Dr : Dough</label><br />
          <hr />
          <button style={{ width: "100px",marginLeft: "0px",height:"32px",backgroundColor:"#008CBA"}}>Follow Up</button>
        </div>
        <hr />

        <div class="workout" style={{ width: "100%", marginTop: "10px",borderRadius:"20px",textAlign:"center"}}>
        <h3>Post Workout Session </h3><br />
        <div class="oppintment"style={{ width: "100%", marginTop: "-30px",backgroundColor:"grey",borderRadius:"20px"}} >
        <label>Meditation </label><br />
          <label>9:00 AM to 11:30PM </label> <br />
          <label>Dr : Dough</label><br />
        </div>
        </div>

      </div>
    );
  }
}
export default Widgetdata;
