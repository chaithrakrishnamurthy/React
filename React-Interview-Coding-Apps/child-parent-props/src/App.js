import "./App.css";
import Parent from "./components/parent";

function App() {
  return (
    <div className="App">
    {/* Send Props from child to parent  */}
     <Parent/>
    </div>
  );
}

export default App;
