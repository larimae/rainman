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
interface Weather {
  temperature: number;
  humidity: number;
  windSpeed: number;
  description: string;
  icon: string;
}

// TODO: Define a class for the Weather object
class Weather {
  temperature: number;
  humidity: number;
  windSpeed: number;
  description: string;
  icon: string;

  constructor(
    temperature: number,
    humidity: number,
    windSpeed: number,
    description: string,
    icon: string
  ) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.windSpeed = windSpeed;
    this.description = description;
    this.icon = icon;
  }}

// TODO: Complete the WeatherService class
class WeatherService {
  // TODO: Define the baseURL, API key, and city name properties
  private baseURL: string;
  private apiKey: string;
  private cityName: string;

  constructor() {
    this.baseURL = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}'
    this.apiKey = process.env.API_KEY || ''; 
    this.cityName = ''; 
  }
  
  // TODO: Create fetchLocationData method
  // private async fetchLocationData(query: string) {}
  private async fetchLocationData(query: string): Promise<any> {
    const geocodeURL = `${this.baseURL}geo/1.0/direct?q=${query}&appid=${this.apiKey}`;
    const response = await fetch(geocodeURL);
    const data = await response.json();
    return data[0]; 
  }

  // TODO: Create destructureLocationData method
  // private destructureLocationData(locationData: Coordinates): Coordinates {}
  private destructureLocationData(locationData: any): Coordinates {
    return {
      name: locationData.name,
      latitude: locationData.lat,
      longitude: locationData.lon,
      state: locationData.state,
      country: locationData.country,
    };
  }
  
  // TODO: Create buildGeocodeQuery method
  // private buildGeocodeQuery(): string {}
  private buildGeocodeQuery(): string {
    return `${this.baseURL}geo/1.0/direct?q=${this.cityName}&appid=${this.apiKey}`;
  }
// TODO: Create buildWeatherQuery method
// private buildWeatherQuery(coordinates: Coordinates): string {}
  private buildWeatherQuery(coordinates: Coordinates): string {
    return `${this.baseURL}forecast?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${this.apiKey}`;
  }

  // TODO: Create fetchAndDestructureLocationData method
  // private async fetchAndDestructureLocationData() {}
  private async fetchAndDestructureLocationData(): Promise<Coordinates> {
    const locationData = await this.fetchLocationData(this.cityName);
    return this.destructureLocationData(locationData);
  }

  // TODO: Create fetchWeatherData method
  // private async fetchWeatherData(coordinates: Coordinates) {}
  private async fetchWeatherData(coordinates: Coordinates): Promise<any> {
    const weatherURL = this.buildWeatherQuery(coordinates);
    const response = await fetch(weatherURL);
    const data = await response.json();
    return data;
  }

  // TODO: Build parseCurrentWeather method
  // private parseCurrentWeather(response: any) {}
  private parseCurrentWeather(response: any): Weather {
    const current = response.list[0]; // Current weather data
    return {
      temperature: current.main.temp,
      humidity: current.main.humidity,
      windSpeed: current.wind.speed,
      description: current.weather[0].description,
      icon: current.weather[0].icon,
    };
  }


  // TODO: Complete buildForecastArray method
  // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
  private buildForecastArray(currentWeather: Weather, weatherData: any[]): Weather[] {
    const forecastArray: Weather[] = weatherData.slice(1, 6).map((forecast: any) => ({
      temperature: forecast.main.temp,
      humidity: forecast.main.humidity,
      windSpeed: forecast.wind.speed,
      description: forecast.weather[0].description,
      icon: forecast.weather[0].icon,
    }));
    return forecastArray;
  }

  // TODO: Complete getWeatherForCity method
  // async getWeatherForCity(city: string) {}
  async getWeatherForCity(city: string): Promise<{ current: Weather, forecast: Weather[] }> {
    this.cityName = city;
    const coordinates = await this.fetchAndDestructureLocationData();
    const weatherData = await this.fetchWeatherData(coordinates);

    const currentWeather = this.parseCurrentWeather(weatherData);
    const forecast = this.buildForecastArray(currentWeather, weatherData.list);

    return { current: currentWeather, forecast };
  }
}


export default new WeatherService();
