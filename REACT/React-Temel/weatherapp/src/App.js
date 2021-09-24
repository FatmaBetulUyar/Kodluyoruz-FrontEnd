import './App.css';
import {WeatherProvider} from './context/WeatherContext';
import CityForm from './components/CityForm';
import Card from './components/Card';


function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <CityForm/>
        <Card/>

      </WeatherProvider>
    </div>
  );
}

export default App;
 