import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import rootReducer from "./store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk, logger)));
const persistor = persistStore(store);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
