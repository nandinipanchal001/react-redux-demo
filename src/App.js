import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import react from 'react'
import Assignment1 from './Assignment1';
import Assignment2 from './Assignment2';
import BasicForm from './Assignment3';


const App = () => {
  return (
    <Router>
    <Switch>
      <Route path={"/assignment-static"}><Assignment1/></Route>
      <Route path={"/assignment-show-my-name"}><Assignment2/></Route>
      <Route path={"/assignment3"}><BasicForm/></Route>
    </Switch>
    </Router>
  );
}

export default App;
