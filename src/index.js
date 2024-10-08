import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/reset.css";
import App from "./components/App/App";
import { BrowserRouter, HashRouter } from "react-router-dom";
import store, { persistor} from "./store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <HashRouter>
     <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
         <App />
       </PersistGate>
     </Provider>
   </HashRouter>
 );