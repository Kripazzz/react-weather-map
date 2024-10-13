import React, { useState } from "react";
import './App.css'; // Import the CSS file for styles

const App = () => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState("");

    const getWeather = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const response = await fetch(`http://localhost:5000/api/weather/${city}`);
            if (!response.ok) throw new Error("City not found");
            const data = await response.json();
            setWeatherData(data);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="App ">
            <h1 className="title">Weather App</h1>
            <form className="weather-form" onSubmit={getWeather}>
                <input
                    type="text"
                    className="city-input"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                />
                <button type="submit" className="submit-button">Get Weather</button>
            </form>

            {error && <p className="error-message">{error}</p>}

            {weatherData && (
                <div className="weather-info">
                    <h2 className="city-name">{weatherData.name}</h2>
                    <p className="temperature">Temperature: {weatherData.main.temp} °C</p>
                    <p className="weather-description">Weather: {weatherData.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default App;





















// frontend/src/App.js
// import React, { useState } from "react";

// const App = () => {
//     const [city, setCity] = useState("");
//     const [weatherData, setWeatherData] = useState(null);
//     const [error, setError] = useState("");

//     const getWeather = async (e) => {
//         e.preventDefault();
//         setError("");
//         try {
//             const response = await fetch(`http://localhost:5000/api/weather/${city}`);
//             if (!response.ok) throw new Error("City not found");
//             const data = await response.json();
//             setWeatherData(data);
//         } catch (err) {
//             setError(err.message);
//         }
//     };

//     return (
//         <div className="App">
//             <h1>Weather App</h1>
//             <form onSubmit={getWeather}>
//                 <input
//                     type="text"
//                     placeholder="Enter city"
//                     value={city}
//                     onChange={(e) => setCity(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Get Weather</button>
//             </form>

//             {error && <p>{error}</p>}

//             {weatherData && (
//                 <div>
//                     <h2>{weatherData.name}</h2>
//                     <p>Temperature: {weatherData.main.temp} °C</p>
//                     <p>Weather: {weatherData.weather[0].description}</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default App;
