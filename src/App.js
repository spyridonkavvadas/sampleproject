import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Project from './Project';
import Content from './Content'



function App() {
  
  return (
    <Router>
    <div className="App">
      <switch>
        <Route exact path="/">
          <Project />
        </Route>
        <Route path="/content/:id">
          <Content />
        </Route>
      </switch>
    </div>
  </Router> 
  );
}
export default App;
