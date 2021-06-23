import React from 'react';
 import Home from './navbar/Home';
 import Navbar from './navbar/Navbar';
 import About from './navbar/About';
//  import Home from './firebasecrud/Home';
// import About from './firebasecrud/About';
// import Edit from './firebasecrud/Edit';
// import Add from './firebasecrud/Add';
// import Navbar from './firebasecrud/Navbar';
// import Error from './firebasecrud/Error';
import { Switch , Route} from 'react-router-dom';
// import './App.css';
const App =()=>{
 
  return (<>
  <Navbar/>
  <Switch>
<Route exact path="/" component={Home} />
<Route exact path="/about" component={About} />
{/* <Route exact path="/about" component={About} />
<Route exact path="/edit/:id" component={Edit} />
<Route exact path="/add" component={Add} />
<Route component={Error} /> */}
  </Switch>


 
  </>);
}

export default App;