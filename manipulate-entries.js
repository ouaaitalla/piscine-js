
const filterEntries = (obj, predicate) =>
  Object.fromEntries(
    Object.entries(obj).filter(([k, v]) => predicate([k, v]))
  );

const mapEntries = (obj, mapper) =>
  Object.fromEntries(
    Object.entries(obj).map(([k, v]) => mapper([k, v]))
  );

const reduceEntries = (obj, reducer, initialValue) =>
  Object.entries(obj).reduce(
    (acc, [k, v]) => reducer(acc, [k, v]),
    initialValue
  );

const totalCalories = (cart) =>
  reduceEntries(
    cart,
    (total, [item, grams]) => total + (nutritionDB[item].calories * grams) / 100,
    0
  );

const lowCarbs = (cart) =>
  filterEntries(
    cart,
    ([item, grams]) => (nutritionDB[item].carbs * grams) / 100 < 50
  );

const cartTotal = (cart) =>
  mapEntries(cart, ([item, grams]) => [
    item,
    mapEntries(nutritionDB[item], ([nutrient, per100g]) => [
      nutrient,
      Math.round((per100g * grams) / 100 * 10) / 10,
    ]),
  ]);