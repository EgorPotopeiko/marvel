import { render } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import history from "./history";

jest.mock("axios");

const { store } = configureStore({}, history);

describe("render app", () => {
  test("render", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
  });
});
