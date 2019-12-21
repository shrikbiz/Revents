import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/layout/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./app/store/configureStore";
import ScrollToTop from "./app/common/utils/ScrollToTop";

// const store = configureStore();

// const rootEl = document.getElementById("root");

// let render = () => {
//   ReactDOM.render(
//     <Provider store={store}>
//       <BrowserRouter>
//         <ScrollToTop />
//           <App />
//       </BrowserRouter>
//     </Provider>,
//     rootEl
//   );
// };

// if (module.hot) {
//   module.hot.accept("./app/layout/App", () => {
//     setTimeout(render);
//   });
// }

// render();

// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

const store = configureStore();

const rootEl = document.getElementById("root");

let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </BrowserRouter>
    </Provider>,
    rootEl
  );
};

if (module.hot) {
  module.hot.accept("./app/layout/App", () => {
    setTimeout(render);
  });
}

render();

serviceWorker.unregister();
