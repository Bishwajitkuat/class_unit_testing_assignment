"use strict";

const CarRegister = require("../CarRegister");
// default database for car
const cars = require("../cars.json");
// modified database for car
const { carsWithoutColors, carsWithoutModel } = require("../testCarsStorage");
// test values
const {
  testValues_get_car_colors,
  testValues_get_All_cars_By_model,
  testValues_get_Price,
  testValues_get_a_car_matching_id,
  testValues_get_info,
} = require("../testValues");
// Global variable
const car = new CarRegister(cars);
// Testing constructor
describe("Testing constructor", () => {
  test("Test 1, Missing parameter to constructor throws an exception", () => {
    expect(() => new CarRegister()).toThrow("data storage missing");
  });
});

// Testing get_car_colors(searchKey) method
describe("Testing get_car_colors(searchKey) method", () => {
  const carWithoutColor = new CarRegister(carsWithoutColors);
  // Test 1
  test("Test 1, get_car_colors('unavailableId') will return an empty array when car id not found", () => {
    expect(car.get_car_colors("unavailableId")).toEqual([]);
  });
  test("Test 1, get_car_colors(9999) will return empty an array when car id not found", () => {
    expect(car.get_car_colors(9999)).toEqual([]);
  });
  // Test 2
  test("Test 2, get_car_colors() will return an empty array when parameter is missing", () => {
    expect(car.get_car_colors()).toEqual([]);
  });

  // Test 3
  test("Test 3, get_car_colors(searchKey) will return an empty array when the car does not have `colors` property", () => {
    expect(carWithoutColor.get_car_colors(1)).toEqual([]);
  });
  // Test 4
  test.each(testValues_get_car_colors)(
    "%s, searchKey: %s, expected: %s",
    (_, searchKey, expected) => {
      expect(car.get_car_colors(searchKey)).toEqual(expected);
    }
  );
});

// Testing get_All_cars_By_model(searchValue) method
describe("Testing get_All_cars_By_model(searchValue) method", () => {
  // Test 1
  test("Test 1, get_All_cars_By_model() will throw exception `missing parameter` whe parameter is not given", () => {
    expect(() => car.get_All_cars_By_model()).toThrow("missing parameter");
  });
  // Test 2
  test("Test 2, get_All_cars_By_model('unavilableModel') will return an empty array when no car is found with given model", () => {
    expect(car.get_All_cars_By_model("unavilableModel")).toEqual([]);
  });
  // Test 3
  test.each(testValues_get_All_cars_By_model)(
    "%s, searchValue: %s, expected: %s",
    (_, searchValue, expected) => {
      expect(car.get_All_cars_By_model(searchValue)).toEqual(expected);
    }
  );
  // Test 4
  const carWithoutModel = new CarRegister(carsWithoutModel);
  test("Test 4, get_All_cars_By_model(searchValue) will return an empty array if car objects does not have `model` property", () => {
    expect(carWithoutModel.get_All_cars_By_model("GT")).toEqual([]);
  });
});

// Testing get_Price(id) method
describe("Testing get_Price(id) method", () => {
  // Test 1 to 2
  test.each(testValues_get_Price)(
    "%s, id: %s, expected: %s",
    (_, id, expected) => {
      expect(car.get_Price(id)).toEqual(expected);
    }
  );
  // Test 3
  test("Test 3, get_Price() will throws an exception `id parameter is missing`", () => {
    expect(() => car.get_Price()).toThrow("id parameter is missing");
  });
});

// Testing get_a_car_matching_id(searchKey) method

describe("Testing get_a_car_matching_id(searchKey) method", () => {
  // Test 1
  test("Test 1, get_a_car_matching_id() will throws an exception `missing parameter`", () => {
    expect(() => car.get_a_car_matching_id()).toThrow("missing parameter");
  });
  // Test 2 to 3
  test.each(testValues_get_a_car_matching_id)(
    "%s, searchKey: %s, expected: %s",
    (_, searchKey, expected) => {
      expect(car.get_a_car_matching_id(searchKey)).toEqual(expected);
    }
  );
});

// Testing get_info(searchKey) method

describe("Testing get_info(searchKey) method", () => {
  // Test 1
  test("Test 1, get_info() will return `null` if searchKey is missing", () => {
    expect(car.get_info()).toBe(null);
  });
  // Test 2 to 4
  test.each(testValues_get_info)(
    "%s, searchKey: %s, expected: %s",
    (_, searchKey, expected) => {
      expect(car.get_info(searchKey)).toEqual(expected);
    }
  );
});
