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
