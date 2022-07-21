import React, {useEffect, useLayoutEffect, useState} from 'react';
import './App.scss';
import Header from "./components/header/header";
import Characters from "./services/characters";

const {getAllCharacters} = Characters;

const App: React.FC = () => {
    const [charact, setCharact] = useState(null);
    useEffect(() => {
       getAllCharacters()
               .then((result) => result.data)
               .then((data) => data.data)
               .then((details) => details.results)
               .then((characters) => {
                   if (characters.length !== 0) {
                       setCharact(characters)
                   }
               })
    }, [])
    console.log(charact)
  return (
    <div className="App">
        <Header />
    </div>
  );
}

export default App;
