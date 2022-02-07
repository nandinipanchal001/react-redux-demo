import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import React from 'react'
import Assignment1 from './Assignment1';
import Assignment2 from './Assignment2';
import BasicForm from './Assignment3';
import Assignment4 from './Assignment4';
import Assignment5 from './Assignment5';


const App = () => {
  return (
    <Router>
    <Switch>
      <Route path={"/assignment-static"}><Assignment1/></Route>
      <Route path={"/assignment-show-my-name"}><Assignment2/></Route>
      <Route path={"/assignment3"}><BasicForm/></Route>
      <Route path={"/assignment4"}><Assignment4/></Route>
      <Route path={"/assignment5"}><Assignment5/></Route>
    </Switch>
    </Router>
  );
}

export default App;
