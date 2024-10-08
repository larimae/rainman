# Weather Dashboard

## Description

The Weather Dashboard is a web application that allows users to search for the current and future weather conditions of any city. It fetches weather data using the OpenWeather API and presents a 5-day weather forecast. The app stores search history and allows users to view previously searched cities.

External APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in their context, frequently consuming this data via a server.

## Features
* Search for the current weather conditions in any city.
* View a 5-day weather forecast with temperature, humidity, wind speed, and weather descriptions.
* Save searched cities to history and retrieve them.
* Delete cities from the search history.

## Table of Contents
* Installation
* Usage
* API Reference
* Contributing
* License

## Installation
To get a local copy of the project up and running, follow these steps:

1. Clone the repository:
```
git clone https://github.com/your-username/weather-dashboard.git
```

2. Navigate to the project directory:
```
cd weather-dashboard
```

3. Install the required dependencies:
```
npm install
```

4. Create a .env file in the root directory and add your OpenWeather API key:
```
API_KEY=your_api_key
```
After registering for a new API key, you may need to wait up to 2 hours for that API key to activate.
For more information on how to work with the OpenWeather API, refer to the [Full-Stack Blog on how to use API keys](https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys).

## Usage
To run the application locally, use the following command:
```
npm start
```

__How to Use:__
1. **Search for a City:** Type the name of a city in the search input and click the search button.
2. **View Weather:** The current weather conditions and the 5-day forecast will be displayed.
3. **Search History:** Previously searched cities are saved in the search history and can be clicked to view weather data again.
4. **Delete Search History:** You can remove cities from the search history.

## API Reference
This project uses the OpenWeather API to fetch weather data. You need to sign up for an API key.

## Contributing
Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.

2. Create a new branch:
```
git checkout -b feature-branch-name
```

3. Commit your changes:
```
git commit -m 'Add some feature'
```

4. Push to the branch:
```
git push origin feature-branch-name
```

5. Open a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for more information.