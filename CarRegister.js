"use strict";

module.exports = class {
  #dataStorage;
  constructor(data) {
    if (!data) throw new Error("data storage missing");
    this.#dataStorage = data;
  }

  get_car_colors(searchKey) {
    return this.#dataStorage.reduce((acc, item) => {
      if (item.id == searchKey && item.colors) return item.colors;
      return acc;
    }, []);
  }
  get_All_cars_By_model(searchValue) {
    if (!searchValue) throw new Error("missing parameter");
    return this.#dataStorage.reduce((acc, item) => {
      if (item?.model === searchValue) return [...acc, item];
      return acc;
    }, []);
  }

  get_Price(id) {
    if (!id) throw new Error("id parameter is missing");
    const searchResult = this.#dataStorage.filter((item) => item.id === id);
    return searchResult.length
      ? searchResult[0]?.price
      : "nothing found with given id";
  }
  get_a_car_matching_id(searchKey) {
    if (!searchKey) throw new Error("missing parameter");
    const searchResult = this.#dataStorage.filter(
      (item) => item.id === searchKey
    );
    return searchResult.length ? searchResult[0] : null;
  }
  get_info(searchKey) {
    if (!searchKey) return null;
    const searchResult = this.#dataStorage.filter(
      (item) => item.id === searchKey
    );
    return searchResult.length && searchResult[0]?.info
      ? searchResult[0]?.info
      : null;
  }
};
