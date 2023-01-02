const axios = require('axios');

class Resident {
  constructor(residentID) {
    this.retrieveResident(residentID);
  }

  retrieveResident = async(residentID) => {
    const residentEndpoint = // resident endpoint

    try {
      const response = await axios.get(residentEndpoint);
      if (response.status == 200) {
        this.resident = response.data;
      } else {
        throw new Error(`HTTP error: ${response.status}`);
      }
    } catch(e) {
      // ...
    }
  }
}

class ResidentialBuilding {
  constructor(buildingID) {
    this.retrieveBuildingAndResidents(buildingID);
  }

  retrieveBuildingAndResidents = async(buildingID) => {
    try {
      await this.retrieveBuilding(buildingID);
      await this.retrieveResidents();
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
    try {
      this.residents = this.building.residents.map( async residentID => {
        const resident = new Resident(this.building.residents[residentID]);
        return resident;
      })
    } catch(e) {
      console.log(e);
    }

    console.log(`${this.residents.length} residents retrieved`);
  }
}

residentialBuilding = new ResidentialBuilding(20);
