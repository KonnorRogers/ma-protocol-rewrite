import 'src/styles/global.css'

import React from "react";
import ReactDOM from 'react-dom'
import Title from "./src/components/title.js"

export const onRouteUpdate = ({ location, prevLocation }) => {
  const mainContainer = document.querySelector(`[data-testid="main-container"]`);
  const titleDiv = document.createElement('div');
  const titleComponent = <Title />


  mainContainer.insertAdjacentElement('afterbegin', titleDiv);
  ReactDOM.render(titleComponent, titleDiv);
}
