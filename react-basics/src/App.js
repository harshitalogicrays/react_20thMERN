import './App.css';
import Firstclasscomp from './classcomponents/Firstclasscomp';
import Firstfuncomp from './functionalcomponents/Firstfuncomp';
import Propsdemo from './functionalcomponents/propsdemo';
function App() {
  return (
    <div>
      <div className="App">
            <h1>Hello React</h1>
            <h2>Welcome to LRA</h2>
      </div>
      <h3>Prahlad Nagar</h3>
      <h4>Ahmedabad, Gujrat</h4>
      <Firstfuncomp></Firstfuncomp>
      <Firstfuncomp/><hr/>
      <Firstclasscomp></Firstclasscomp><hr/>
      <Propsdemo/>
    </div>
  );
}
export default App;
