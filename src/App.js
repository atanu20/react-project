import React from 'react';
import Filter from './filter_data/Filter';
import { Switch , Route} from 'react-router-dom';
const App =()=>{
 
  return (<>
  
      {/* <Filter /> */}
      <Switch>
<Route exact path="/" component={Filter} />

<Route component={Error} />
  </Switch>
 
  </>);
}

export default App;