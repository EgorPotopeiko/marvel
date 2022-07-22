import React, {FC} from 'react';
import './App.scss';
import PageCharacters from "./pages/page_characters/page_characters";
import {useDispatch} from "react-redux";

const App: FC = () => {
  return (
    <div className="App">
        <PageCharacters />
    </div>
  );
}

export default App;
