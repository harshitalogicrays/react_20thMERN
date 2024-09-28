import { useState } from 'react';
import './App.css';
import Firstclasscomp from './classcomponents/Firstclasscomp';
import Addition from './functionalcomponents/Addition';
import Counter from './functionalcomponents/Counter';
import EventDemoinfun from './functionalcomponents/EventDemoinfun';
import Firstfuncomp from './functionalcomponents/Firstfuncomp';
import Propsdemo from './functionalcomponents/propsdemo';
import Form1 from './functionalcomponents/Form1';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import { Toast } from 'react-bootstrap';
import FetchPosts from './classcomponents/FetchPosts';
function App() {
  let [val]=useState("1")
  // const [showA, setShowA] = useState(true);

  // const toggleShowA = () => setShowA(!showA);
  return (
    <>
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

        {/* <Addition/><hr/> */}
        {/* <Counter num={val}/> */}
  
      {/* <Form1></Form1> */}
      
      <Header/>
      {/* <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <strong className="me-auto">Error </strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast> */}
         <Outlet/>
    </>
  );
}
export default App;
