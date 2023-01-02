# Reporting Service for Residential Building

## Problem

You've been tasked with creating a reporting service. The reporting service will need to eventually surface many reports, but currently only needs to give a report for the average age of residents in a building.

In order to calculate the report, you will have access to two microservices, one that provides information about buildings and who lives in them, and another endpoint that provides detailed information about those residents.

### Understanding

Reporting Service
- Surface reports

Input
- Building to average
Output
- Average age of residents in a building

Query 'buildings' endpoint to see total buildings
Get residernts for each building
Calculate

2 Microservices
1. Info about buildings
  - And residents
    https://some.endpoint/buildings/20

    https://some.endpoint/buildings

2. Info about residents
  https://some.endpoint/users/c2bf80ed-e6f5-49e3-ab2a-7323ed940aa3

  https://some.endpoint/users

## Examples/Test Cases

Buildings endpoint

```json
[
  {
    "streetAddress": "99450 Jaleel Plaza",
    "country": "Comoros",
    "state": "South Carolina",
    "zipCode": "34433",
    "latitude": "38.7082",
    "longitude": "-156.6366",
    "slug": 20,
    "residents": [
      "c2bf80ed-e6f5-49e3-ab2a-7323ed940aa3",
      "07ba4e8a-777f-4397-8c52-9a9dbf3081ca",
      "7d7923c7-fd52-4477-9e44-1758089ff6bf",
      "efcb6923-1892-4919-99fd-34d8c76aecd5",
      "96c86570-1344-4e10-9e4c-7015222a0f89",
      "0fcef0e6-c49f-4be8-ab17-34aafee1b8d5",
      "7e88e756-8fa5-4be3-b2a9-3e27bc373fa9",
      "0a998072-698e-4583-b1ee-0c4a4a70f08d",
      ...
  }
]
```

Building endpoint

```json
{
  "streetAddress": "99450 Jaleel Plaza",
  "country": "Comoros",
  "state": "South Carolina",
  "zipCode": "34433",
  "latitude": "38.7082",
  "longitude": "-156.6366",
  "slug": 20,
  "residents": [
    "c2bf80ed-e6f5-49e3-ab2a-7323ed940aa3",
    "07ba4e8a-777f-4397-8c52-9a9dbf3081ca",
    "7d7923c7-fd52-4477-9e44-1758089ff6bf",
    "efcb6923-1892-4919-99fd-34d8c76aecd5",
    "96c86570-1344-4e10-9e4c-7015222a0f89",
    "0fcef0e6-c49f-4be8-ab17-34aafee1b8d5",
    "7e88e756-8fa5-4be3-b2a9-3e27bc373fa9",
    "0a998072-698e-4583-b1ee-0c4a4a70f08d",
```

Users endpoint

```js
[
  {
    "firstName": "Alivia",
    "lastName": "Sipes",
    "id": "612f1ff5-479d-4d60-abf3-f6add9d7bf23",
    "age": 52
  },
  {
    "firstName": "Mable",
    "lastName": "DuBuque",
    "id": "af2d50eb-7e20-496d-994b-83a10665dd1e",
    "age": 56
  },
  {
    "firstName": "Mac",
    "lastName": "Bayer",
    "id": "aa6a3951-47ab-454c-825a-d34b38b3c73f",
    "age": 32
  },
  {
    "firstName": "Shanie",
    "lastName": "Rippin",
    "id": "dc9dd960-22e5-4490-974a-9af5a8016750",
    "age": 67
  },
```

```json
{
  "firstName": "Beaulah",
  "lastName": "Moore",
  "id": "c2bf80ed-e6f5-49e3-ab2a-7323ed940aa3",
  "age": 36
}
```

## Data Structures

- Nested Json
- Array
  - buildings
  - Residents

## Algorithm

From an building id input
Retrieve building
Access `residents` attribute of the building
Iterate `residents`
  - Sum age
Divide sum by total residents
