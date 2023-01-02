const axios = require('axios');

class Resident {
  constructor(residentID) {
    this.retrieveResident(residentID);
  }

  retrieveResident = async(residentID) => {
    // ...
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
    console.log('Retrieving residents');
  }
}

residentialBuilding = new ResidentialBuilding(20);
