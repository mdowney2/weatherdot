// import logo from './logo.svg';
import './App.css';
import { CityCard } from './CityCard';
import { TimeComponent } from './TimeComponent';


function App() {
  const cities = [
    {
      key: 0,
      englishName: "Neponset",
      primaryPostalCode: "02122",
      country: {
        id: "USA",
        englishName: "United States",
      },
      administrativeArea: {
        id: "MA",
        englishName: "Massachusetts",
        englishType: "state",
      },
    },
    {
      key: 1,
      englishName: "North Quincy",
      primaryPostalCode: "02171",
      country: {
        id: "USA",
        englishName: "United States",
      },
      administrativeArea: {
        id: "MA",
        englishName: "Massachusetts",
        englishType: "state",
      },
    },
    {
      key: 2,
      englishName: "Southie",
      primaryPostalCode: "02127",
      country: {
        id: "USA",
        englishName: "United States",
      },
      administrativeArea: {
        id: "MA",
        englishName: "Massachusetts",
        englishType: "state",
      },
    },
    {
      key: 3,
      englishName: "The Seaport",
      primaryPostalCode: "02210",
      country: {
        id: "USA",
        englishName: "United States",
      },
      administrativeArea: {
        id: "MA",
        englishName: "Massachusetts",
        englishType: "state",
      },
    },
  ];
  const handleChange = (event) => {
    console.group();
    console.log(event.target.value);
  };
  return (
    <div className="App">
      <p className="message">greetings from boston.</p>
     <h1>weatherdot</h1>
     <h2>it's gonna snow!</h2>
     <label htmlFor="zipInput" >your zip code please: </label>
     <input type="text" id="zipInput" onChange={handleChange} />
     <hr />
     <div className="flexContainer">
     <CityCard cities={cities} />
     </div>
     <TimeComponent />
    </div>
  );
}

export default App;
