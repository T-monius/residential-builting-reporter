const axios = require('axios');

class ResidentialBuilding {
  constructor(buildingID) {
    this.retrieveBuildingAndResidentData(buildingID);
  }

  retrieveBuildingAndResidentData = async(buildingID) => {
    try {
      await this.retrieveBuilding(buildingID);
      await this.retrieveResidents();
      this.averageResidentAge = this.calculateAvgResidentAge();
    } catch(e) {
      console.log(e);
    }
  }

  retrieveBuilding = async (id) => {
    const buildingEndpoint = // building endpoint

    try {
      const response = await axios.get(buildingEndpoint);
      if (response.status == 200) {
        this.building = response.data;
        console.log(`Retrieved building with address: ${this.building.streetAddress}`);
      } else {
        throw new Error(`HTTP error: ${response.status}`);
      }
    } catch(e) {
      console.log(e)
    }
  }

  retrieveResidents = async () => {
    const residentPromises = this.building.residents.map( async residentID => {
      const residentEndpoint = // resident endpoint

      const response = axios.get(residentEndpoint);
      return response;
    })

    try {
      this.residents = await Promise.all(residentPromises);
    } catch(e) {
      console.log(e);
    }

    console.log(`${this.residents.length} residents retrieved`);
  }

  calculateAvgResidentAge = () => {
    let count = 0;

    const sum = this.residents.reduce( (memo, resident, idx) => {
      if (resident.data) {
        if (resident.data.age) {
          count += 1;
          return memo + resident.data.age;
        }
      } else {
        return memo;
      }
    }, 0);

    const avg = Math.round(sum / count);
    console.log(`Average resident age: ${avg}`);

    this.averageResidentAge = avg;
  }
}

residentialBuilding = new ResidentialBuilding(20);
