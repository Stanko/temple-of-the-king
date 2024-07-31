export const getItemOnField = (collection, coords) => {
  return collection.filter((item) => {
    return item.position.x === coords.x && item.position.y === coords.y;
  });
};

export const getRange = (min, max, value) => {
  return {
    value,
    min,
    max,
    step: 1,
  };
};
