import { useState } from 'react';
import './App.css';
import Firstclasscomp from './classcomponents/Firstclasscomp';
import Addition from './functionalcomponents/Addition';
import Counter from './functionalcomponents/Counter';
import EventDemoinfun from './functionalcomponents/EventDemoinfun';
import Firstfuncomp from './functionalcomponents/Firstfuncomp';
import Propsdemo from './functionalcomponents/propsdemo';
function App() {
  let [val]=useState("1")
  return (
    <div className="container mt-5">
      {/* <div className="App">
            <h1>Hello React</h1>
            <h2>Welcome to LRA</h2>
      </div>
      <h3>Prahlad Nagar</h3>
      <h4>Ahmedabad, Gujrat</h4> */}
      {/* <Firstfuncomp></Firstfuncomp>
      <Firstfuncomp/><hr/> */}
      {/* <Firstclasscomp></Firstclasscomp><hr/> */}
      {/* <Propsdemo username="dhaval" address="pune" isActive={true}
      mobile={909898}/> */}

      {/* <EventDemoinfun/> */}

        <Addition/><hr/>
        <Counter num={val}/>
    </div>
  );
}
export default App;
