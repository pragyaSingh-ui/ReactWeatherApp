import './App.css';
import Weather from './components/Weather';
import CityData from './components/apiCall';

function App() {
  const cities = ["Bangalore","Delhi","Mumbai","Chennai"]

  return (
    <div className='container'>
     <div className = 'top'>
     <Weather></Weather>
     </div>
     <div className = 'bottom'>
       <CityData cityName = {cities[0]}></CityData>
       <CityData cityName = {cities[1]}></CityData>
       <CityData cityName = {cities[2]}></CityData>
       <CityData cityName = {cities[3]}></CityData>
     </div>
    </div>
  );
}

export default App;
