import fs from 'node:fs/promises';
import { v4 as uuidv4 } from 'uuid';

// TODO: Define a City class with name and id properties
class City {
  name: string;
  id: string;

  constructor(name: string, id: string) {
    this.name = name;
    this.id = id;
  }
}
// TODO: Complete the HistoryService class
class HistoryService {

  // TODO: Define a read method that reads from the searchHistory.json file
  // private async read() {}
  private async read() {
    return await fs.readFile('db/db.json', {
      flag: 'a+',
      encoding: 'utf8',
    });
  }
  
  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  // private async write(cities: City[]) {}
  private async write(states: City[]) {
    return await fs.writeFile('db/db.json', JSON.stringify(states, null, '\t'));
  }

  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  // async getCities() {}
  async getStates() {
    return await this.read().then((states) => {
      let parsedStates: City[];

      try {
        parsedStates = [].concat(JSON.parse(states));
      } catch (err) {
        parsedStates = [];
      }

      return parsedStates;
    });
  }

  // TODO Define an addCity method that adds a city to the searchHistory.json file
  // async addCity(city: string) {}
  async addState(state: string) {
    if (!state) {
      throw new Error('state cannot be blank');
    }

    const newState: City = { name: state, id: uuidv4() };

    return await this.getStates()
      .then((states) => {
        if (states.find((index) => index.name === state)) {
          return states;
        }
        return [...states, newState];
      })
      .then((updatedStates) => this.write(updatedStates))
      .then(() => newState);
  }

  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  // async removeCity(id: string) {}
  async removeState(id: string) {
    return await this.getStates()
      .then((states) => states.filter((state) => state.id !== id))
      .then((filteredStates) => this.write(filteredStates));
  }
}

export default new HistoryService();
