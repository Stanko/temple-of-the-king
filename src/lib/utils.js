export const getItemOnField = (collection, coords) => {
  return collection.find((item) => {
    return item.position.x === coords.x && item.position.y === coords.y;
  });
};
