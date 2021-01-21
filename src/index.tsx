import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import store from './redux-og';
import store from "./redux-toolkit"
import {Provider} from 'react-redux'



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
