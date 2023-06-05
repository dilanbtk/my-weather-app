import logo from './logo.svg';
import './App.css';
import Cards from './Components/Card';
import WeatherContext, { WeatherProvider } from "./Context/WeatherContext";

function App() {
  return (
    <div className="App">
        <WeatherProvider>
        <Cards />
      </WeatherProvider>
    </div>
  );
}

export default App;
