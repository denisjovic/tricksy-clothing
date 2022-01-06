import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import { Route} from "react-router-dom";

function HatsPage () {
    return <h1>Hats page</h1>
}

function App() {
  return (
    <div>
        <Route exact path='/' component={HomePage}/>
        <Route path='/hats' component={HatsPage}/>
    </div>
  );
}

export default App;
