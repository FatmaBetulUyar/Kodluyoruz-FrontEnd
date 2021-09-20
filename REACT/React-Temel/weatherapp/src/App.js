import './App.css';
import {WeatherProvider} from './context/WeatherContext';
import Input from './components/Input';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <Input/>
        <Card/>

      </WeatherProvider>
    </div>
  );
}

export default App;
 