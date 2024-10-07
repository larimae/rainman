import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates {
  name: string,
  latitude: number,
  longitude: number,
  state: string,
  country: string,
}
// TODO: Define an interface for the Weather obje

// TODO: Define a class for the Weather object


// TODO: Complete the WeatherService class
class WeatherService {
  private baseUrl: string;

}
  // TODO: Define the baseURL, API key, and city name properties
  // TODO: Create fetchLocationData method
  // private async fetchLocationData(query: string) {}
  // TODO: Create destructureLocationData method
  // private destructureLocationData(locationData: Coordinates): Coordinates {}
  // TODO: Create buildGeocodeQuery method
  // private buildGeocodeQuery(): string {}
  // TODO: Create buildWeatherQuery method
  // private buildWeatherQuery(coordinates: Coordinates): string {}
  // TODO: Create fetchAndDestructureLocationData method
  // private async fetchAndDestructureLocationData() {}
  // TODO: Create fetchWeatherData method
  // private async fetchWeatherData(coordinates: Coordinates) {}
  // TODO: Build parseCurrentWeather method
  private parseCurrentWeather(response: any): Weather {
    const weather = response.list[0];

    const id = weather[0].weather.id;
    const main = weather[0].weather.main;
    const description = weather[0].weather.description;
    const icon = weather[0].weather.icon;
    const city = response.city.name;
  }
  // private parseCurrentWeather(response: any) {}
  // TODO: Complete buildForecastArray method
  private buildForecastArray(currentWeather: Weather, weatherData: any[]) {
    const forecastArray: weather[] = [];

    for (const data of weatherData) {
      const id = data.id;
      const main = data.main;
      const description = data.description;
      const icon = data.icon;
      const city = data.name;
    }
  }
  // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
  // TODO: Complete getWeatherForCity method
  // async getWeatherForCity(city: string) {}


export default new WeatherService();
