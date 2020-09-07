import React from "react";
import SideMenu from "./Sidemenu/SideMenu";
import Main from "./MainContent/Main";
import Widgetdata from "./Widget/Widgetdata";
import "./App.css";

export default function App() {
  return (
    <div class="container">
      <div class="leftpane">
        <div className="layout">
          <SideMenu />
        </div>
      </div>
      <div class="middlepane">
        <Main />
      </div>
      <div class="rightpane">
        <Widgetdata />
      </div>
    </div>
  );
}
