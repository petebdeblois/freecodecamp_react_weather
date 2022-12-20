import './App.css';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }
  

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="container">
        <Search onSearchChange={handleOnSearchChange} />
      </div>
      <div>
        <CurrentWeather />
      </div>
    </div>
  );
}

export default App;
