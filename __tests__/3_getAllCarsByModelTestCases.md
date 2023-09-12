# Test Cases for **get_All_cars_By_model(searchValue)** method

## **get_All_cars_By_model(searchValue)**

searches cars with given model

> Parameters:
>
> > searchValue is the model of the car to be searched

> Returns:
>
> > Returns an array of car objects of given model. If no car of given model is found, returns an empty array.

> Throws:
>
> > If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

### Test 1. get_All_cars_By_model() will throw exception `missing parameter` whe parameter is not given

```js
const car = new CarRegister(cars):
car.get_All_cars_By_model()
```

return

```js
missing parameter
```

### Test 2. get_All_cars_By_model(unavilableModel) will return an empty array when no car is found with given model

```js
const car = new CarRegister(cars):
car.get_All_cars_By_model("unavilableModel")
```

return

```js
[];
```

### Test 3. get_All_cars_By_model(searchValue) will return an array of car objects of given model

```js
const car = new CarRegister(cars):
car.get_All_cars_By_model(searchValue)
```

Test no., parameters for get_All_cars_By_model(searchValue) and expected values

```js
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
```

### Test 4. get_All_cars_By_model(searchValue) will return an empty array if car objects does not have `model` property

car database without `model` property

```js
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
```

```js
const carWithoutModel = new CarRegister(carsWithoutModel):
carWithoutModel.get_All_cars_By_model("GT")
```

return

```js
[];
```
