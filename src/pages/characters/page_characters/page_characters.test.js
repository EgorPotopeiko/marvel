import {fireEvent, render, screen} from "@testing-library/react";
import {Provider, useSelector} from "react-redux";
import axios from "axios";
import PageCharacters from "./page_characters";
import {stateCharacters} from "./store/characters/selectors";
import {BrowserRouter} from "react-router-dom";
import {store} from "../../../configureStore";
import App from "../../../App";

jest.mock('axios')

describe('render page_characters' , () => {
    const characters = useSelector(stateCharacters)
    test('render page', () => {
        axios.get.mockReturnValue(characters)
        render (
            <BrowserRouter>
                <Provider store={store}>
                    <PageCharacters />
                </Provider>
            </BrowserRouter>
        )
        // render(
        //     <BrowserRouter>
        //         <Provider store={store}>
        //             <App />
        //         </Provider>
        //     </BrowserRouter>
        // )
    })
})