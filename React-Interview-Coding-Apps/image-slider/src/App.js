import './App.css';
import Home from './Components/Home';
function App() {
  return (
    <div className="App">
      {/* Image Slider */}
      <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"}/> 
    </div>
  );
}

export default App;
