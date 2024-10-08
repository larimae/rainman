import { Router, type Request, type Response } from 'express';
const router = Router();

import HistoryService from '../../service/historyService.js';
import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather data
router.post('/', async (req: Request, res: Response) => {
  // TODO: GET weather data from city name
  const { city } = req.body;

  try {
    const weatherData = await WeatherService.getWeatherForCity(city);

  // TODO: save city to search history
  await HistoryService.saveCityToHistory(city, weatherData);
  res.json(weatherData);
} catch (error) {
  res.status(500).json({ error: 'Unable to retrieve weather data' });
}
});

// TODO: GET search history
router.get('/history', async (req: Request, res: Response) => {
  try {
    const history = await HistoryService.getSearchHistory();
    res.json(history);
  } catch (error) {
    res.status(500).json({ error: 'Unable to retrieve search history' });
  }
});

// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  
  try {
    await HistoryService.removeCity(id);
    res.json({ message: 'City deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete city' });
  }
});

export default router;
