const carsWithoutColors = [
  {
    id: 1,
    name: "Electro",
    model: "gold",
    price: 15,
    mileage: 45000,
    info: {
      comments: "no comments",
      powerSource: "hydrogen",
      consumptionPer100km: 1,
    },
  },
  {
    id: 2,
    name: "Electro",
    model: "GT",
    price: 123,
    mileage: 120000,
    info: {
      comments: "no comments",
      powerSource: "hydrogen",
      consumptionPer100km: 6,
    },
  },
];
const carsWithoutModel = [
  {
    id: 1,
    name: "Electro",
    price: 15,
    mileage: 45000,
    colors: ["white", "black", "yellow"],
    info: {
      comments: "no comments",
      powerSource: "hydrogen",
      consumptionPer100km: 1,
    },
  },
  {
    id: 2,
    name: "Electro",
    price: 123,
    mileage: 120000,
    colors: ["yellow", "green", "blue"],
    info: {
      comments: "no comments",
      powerSource: "hydrogen",
      consumptionPer100km: 6,
    },
  },
];
module.exports = { carsWithoutColors, carsWithoutModel };
