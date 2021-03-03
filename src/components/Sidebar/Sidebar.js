import React from "react";

import "./sidebar.css";
import { SidebarData } from "./SidebarData";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li
              className="row"
              key={key}
              id={window.location.pathname == val.link ? "active" : " "}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              {" "}
              <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
