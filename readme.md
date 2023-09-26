## Task: Create and test CarRegister class

Create a class `CarRegister` for car data. Data storage is passed to the constractor as a parameter. Data is in a json array. Use the following json array as default storage. You may need to modify the data or add more versions for testing.

### datastorage.json

```json
[
  {
    "id": 1,
    "name": "Electro",
    "model": "gold",
    "price": 15,
    "mileage": 45000,
    "colors": ["white", "black", "yellow"],
    "info": {
      "comments": "no comments",
      "powerSource": "hydrogen",
      "consumptionPer100km": 1
    }
  },
  {
    "id": 2,
    "name": "Electro",
    "model": "GT",
    "price": 123,
    "mileage": 120000,
    "colors": ["yellow", "green", "blue"],
    "info": {
      "comments": "no comments",
      "powerSource": "hydrogen",
      "consumptionPer100km": 6
    }
  },
  {
    "id": 3,
    "name": "Racer",
    "model": "XXL",
    "price": 10,
    "mileage": 10000,
    "colors": ["white", "red", "orange"],
    "info": {
      "comments": "no comments",
      "powerSource": "pushing",
      "consumptionPer100km": 4
    }
  },
  {
    "id": 4,
    "name": "Ovlov",
    "model": "GT",
    "price": 200,
    "mileage": 120000,
    "colors": ["blue", "white", "red"],
    "info": {
      "comments": "low emission",
      "powerSource": "pushing",
      "consumptionPer100km": 6
    }
  },
  {
    "id": 5,
    "name": "Min IEco",
    "model": "silver",
    "price": 123,
    "mileage": 90000,
    "colors": ["orange", "white", "red"]
  }
]
```

# Test cases for constructor

## **constructor(jsondata)**

Initializes CarRegister object

> Parameters:
>
> > The data storage json object is passed as a parameter to the constructor.

> Returns:
>
> >

> Throws:
>
> > If the parameter is missing, constructor throws an error `'data storage missing'`

### Test 1: Missing parameter to constructor throws an exception

```js
new CarRegister();
```

return

```js
data storage missing
```

# Test Cases for **get_car_colors(searchKey)** method

## **get_car_colors(searchKey)**

Returns an array of car colors. If none found, returns an empty array.

> Parameters:
>
> > searchKey is the id of the car

> Returns:
>
> > colors of the car as an array or if none is found or it is empty or parameter searchKey is missing, returns an empty array.

> Throws:
>
> >

### Test 1 : get_car_colors(unavailableId) will return an empty array when car id not found

```js
const car = new CarRegister(cars):
car.get_car_colors("unavailableId")
```

return

```js
[];
```

```js
car.get_car_colors(9999);
```

return

```js
[];
```

### Test 2 : get_car_colors() will return empty an array when parameter is missing

```js
const car = new CarRegister(cars):
car.get_car_colors()
```

return

```js
[];
```

### Test 3: get_car_colors(searchKey) will return empty array when car that car does not have `colors` property

car database without colors property

```js
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
const carWithoutColors = new CarRegister(carsWithoutColors):
carWithoutColors.get_car_colors(1)
```

return

```js
[];
```

### Test 4. get_car_colors(searchKey) will return colors of the car as an array

car object with default values

```js
const car = new CarRegister(cars):
car.get_car_colors(searchKey)
```

Test no., parameter for get_car_colors() and expected values

```js
const testValues_get_car_colors = [
  ["Test 4", 1, ["white", "black", "yellow"]],
  ["Test 4", 2, ["yellow", "green", "blue"]],
  ["Test 4", 5, ["orange", "white", "red"]],
];
```

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

# Test Cases for **get_Price(id)** method

## **get_Price(id)**

get the price of the car

> Parameters:
>
> > id of the car which price is to be returned

> Returns:
>
> > returns the price of a car matching the given id

> Throws:
>
> > if no car with the given id is found throws an exeption `'nothing found with given'`

### Test 1. get_Price(id) will throws an exception `nothing found with given id`

### Test 2. get_Price(id) will return the price

car object with default values

```js
const car = new CarRegister(cars):
car.get_Price(id);
```

test no., parameter for get_Price() and expected values

```js
const testValues_get_Price = [
  ["Test 1", "unavailableId", "nothing found with given id"],
  ["Test 1", 9999, "nothing found with given id"],
  ["Test 2", 1, 15],
  ["Test 2", 2, 123],
  ["Test 2", 4, 200],
];
```

### Test 3. get_Price() will throws an exception `id parameter is missing`

car object with default values

```js
const car = new CarRegister(cars):
car.get_Price();
```

throw exception

```js
id parameter is missing
```

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

# Test Cases for **get_info(searchKey)**

## **get_info(searchKey)**

searches the car matching the searchKey and if match is found returns the info object otherwise null is returned

> Parameters:
>
> > searchKey is the id of the car

> Returns:
>
> > returns the info object of the car matching the searchKey. If no car matching the given searchKey is found or searchKey is missing, null will be returned

> Throws:
>
> >

### Test 1. get_info() will return `null` if searchKey is missing

```js
const car = new CarRegister(cars):
car.get_info();
```

return

```js
null;
```

### Test 2. get_info(searchKey) will return `null` if there is no match

### Test 3. get_info(searchKey) will return `info` object of the found car

### Test 4. get_info(searchKey) will return `null` if the object does not have `info` property

car object with default values

```js
const car = new CarRegister(cars):
car.get_info(searchKey);
```

Test no., parameter for get_info(), expected values

```js
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
```
