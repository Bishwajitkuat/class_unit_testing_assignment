# Test Cases for **get_a_car_matching_id(searchKey)**

## **get_a_car_matching_id(searchKey)**

Method searches the datastorage for an object with given searchKey. Key is unique.

> Parameters:
>
> > searchKey is the primary key id of the car

> Returns:
>
> > returns the car object matching the id or null if there is no match

> Throws:
>
> > if parameter searchKey is missing, throws an exception `'missing parameter'`

### Test 1. get_a_car_matching_id() will throws an exception `missing parameter`

car object with default values

```js
const car = new CarRegister(cars):
car.get_a_car_matching_id();
```

throw exception

```js
missing parameter
```

### Test 2. get_a_car_matching_id(searchKey) will return `null` if there is no match

### Test 3. get_a_car_matching_id(searchKey) will return the car object

car object with default values

```js
const car = new CarRegister(cars):
car.get_a_car_matching_id(searchKey);
```

Test no., parameter for get_a_car_matching_id() and expected values

```js
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
```
