import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./redux/store";

/**setup axios */
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] = `Bearer ${
  import.meta.env.VITE_ACCESS_TOKEN
}`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

reportWebVitals();
