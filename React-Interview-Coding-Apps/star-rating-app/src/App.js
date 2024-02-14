import "./App.css";
import StarRating from "./components";


function App() {
  return (
    <div className="App">
      {/* {data.map(({question,answer}) => ( */}
        <StarRating noOfStar={5}/>
      {/* ))} */}
    </div>
  );
}

export default App;
