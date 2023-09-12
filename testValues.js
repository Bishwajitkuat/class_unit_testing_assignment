const testValues_get_car_colors = [
  ["Test 4", 1, ["white", "black", "yellow"]],
  ["Test 4", 2, ["yellow", "green", "blue"]],
  ["Test 4", 5, ["orange", "white", "red"]],
];

const testValues_get_All_cars_By_model = [
  [
    "Test 3",
    "gold",
    [
      {
        id: 1,
        name: "Electro",
        model: "gold",
        price: 15,
        mileage: 45000,
        colors: ["white", "black", "yellow"],
        info: {
          comments: "no comments",
          powerSource: "hydrogen",
          consumptionPer100km: 1,
        },
      },
    ],
  ],
  [
    "Test 3",
    "GT",
    [
      {
        id: 2,
        name: "Electro",
        model: "GT",
        price: 123,
        mileage: 120000,
        colors: ["yellow", "green", "blue"],
        info: {
          comments: "no comments",
          powerSource: "hydrogen",
          consumptionPer100km: 6,
        },
      },
      {
        id: 4,
        name: "Ovlov",
        model: "GT",
        price: 200,
        mileage: 120000,
        colors: ["blue", "white", "red"],
        info: {
          comments: "low emission",
          powerSource: "pushing",
          consumptionPer100km: 6,
        },
      },
    ],
  ],
  [
    "Test 3",
    "XXL",
    [
      {
        id: 3,
        name: "Racer",
        model: "XXL",
        price: 10,
        mileage: 10000,
        colors: ["white", "red", "orange"],
        info: {
          comments: "no comments",
          powerSource: "pushing",
          consumptionPer100km: 4,
        },
      },
    ],
  ],
];

const testValues_get_Price = [
  ["Test 1", "unavailableId", "nothing found with given id"],
  ["Test 1", 9999, "nothing found with given id"],
  ["Test 2", 1, 15],
  ["Test 2", 2, 123],
  ["Test 2", 4, 200],
];

const testValues_get_a_car_matching_id = [
  ["Test 2", "unavailableId", null],
  ["Test 2", 9999, null],
  [
    "Test 3",
    1,
    {
      id: 1,
      name: "Electro",
      model: "gold",
      price: 15,
      mileage: 45000,
      colors: ["white", "black", "yellow"],
      info: {
        comments: "no comments",
        powerSource: "hydrogen",
        consumptionPer100km: 1,
      },
    },
  ],
  [
    "Test 3",
    3,
    {
      id: 3,
      name: "Racer",
      model: "XXL",
      price: 10,
      mileage: 10000,
      colors: ["white", "red", "orange"],
      info: {
        comments: "no comments",
        powerSource: "pushing",
        consumptionPer100km: 4,
      },
    },
  ],
];

const testValues_get_info = [
  ["Test2", "unavailableId", null],
  ["Test2", 9999, null],
  [
    "Test3",
    1,
    {
      comments: "no comments",
      powerSource: "hydrogen",
      consumptionPer100km: 1,
    },
  ],
  [
    "Test3",
    3,
    {
      comments: "no comments",
      powerSource: "pushing",
      consumptionPer100km: 4,
    },
  ],
  ["Test4", 5, null],
];
module.exports = {
  testValues_get_car_colors,
  testValues_get_All_cars_By_model,
  testValues_get_Price,
  testValues_get_a_car_matching_id,
  testValues_get_info,
};
