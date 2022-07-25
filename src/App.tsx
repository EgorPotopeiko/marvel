import React, {FC} from 'react';
import './App.scss';
import PageCharacters from "./pages/page_characters/page_characters";
import PageComics from "./pages/page_comics/page_comics";

const App: FC = () => {
  return (
    <div className="App">
        {/*<PageCharacters />*/}
        <PageComics />
    </div>
  );
}

export default App;
