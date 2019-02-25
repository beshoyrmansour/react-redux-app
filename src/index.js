import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import thunk from 'redux-thunk'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducers from "./store/reducers/rootReducers";

const store = createStore(rootReducers, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));

serviceWorker.unregister();
