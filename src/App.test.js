import {fireEvent, render, screen} from "@testing-library/react";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./configureStore";

jest.mock('axios')

describe('render app' , () => {
    test('render', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        )
    })
})