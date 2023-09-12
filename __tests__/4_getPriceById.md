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
