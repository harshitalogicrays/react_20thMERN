import Add from "./features/Add"
import View from "./features/View"

function App() {
  return (
 <>
  <div className="container mt-5 p-3 shadow">
    <div className="row">
      <div className="col">
        <Add/>
      </div>
      <div className="col">
        <View/>
      </div>
    </div>
  </div>
 </>
  )
}

export default App
