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
        console.log(`Retrieved resident with name: ${this.resident.firstName}`);
      } else {
        throw new Error(`HTTP error: ${response.status}`);
      }
    } catch(e) {
      console.log(e)
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
    console.log('Retrieving first resident');
    const resident = new Resident(this.building.residents[0]);
  }
}

residentialBuilding = new ResidentialBuilding(20);
