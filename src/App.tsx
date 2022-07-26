import React, {FC} from 'react';
import './App.scss';
import {Navigate, Route, Routes} from "react-router";
import {userRoutes} from "./routing/routes";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";

const App: FC = () => {
  return (
    <div className="App">
        <Header />
        <Menu />
        <Routes>
            {userRoutes.map(({
                 path,
                 Component}) => (
                <Route
                    key={path}
                    path={path}
                    element={<Component />}/>
            ))}
            <Route
                path="*"
                element={<Navigate to="/characters" replace />}
            />
        </Routes>
    </div>
  );
}

export default App;
