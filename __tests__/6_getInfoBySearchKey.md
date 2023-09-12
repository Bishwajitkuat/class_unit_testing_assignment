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
