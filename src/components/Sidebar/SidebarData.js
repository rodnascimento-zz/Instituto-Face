import React from "react";

import * as AiIcons from "react-icons/ai";
import * as TiIcons from "react-icons/ti";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
  {
    title: "home",
    icon: <AiIcons.AiFillHome />,
    link: "/principal/home"
  },
  {
    title: "calendario",
    icon: <BsIcons.BsFillCalendarFill />,
    link: "/principal/calendario"
  },
  {
    title: "turma",
    icon: <TiIcons.TiGroup />,
    link: "/principal/turma"
  }
];
