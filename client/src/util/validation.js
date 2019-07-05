export const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

export const isColumnLink = (col, obj) => {
  // Check if object
  if (typeof obj !== "object") return false;

  // is obj has colLink key?
  if (!obj.hasOwnProperty("colLink")) return false;

  // is colLink has a key name?
  if (!obj.colLink.hasOwnProperty("name")) return false;

  // Compare if Column === value
  return obj.colLink.name === col ? true : false;
};

export const isSelectable = (col, obj, index) => {
  console.log(col, obj, index);
  // Check if object
  if (typeof obj !== "object") return false;

  // is obj has selectable key?
  if (!obj.hasOwnProperty("selectInput")) return false;

  // is selectable length > 0
  if (!obj.selectInput.length > 0) return false;

  // find index
  // const index = obj.selectInput.findIndex()

  // is index Number?
  if (typeof index !== "number") return false;

  // is index in selectInput?
  if (!obj.selectInput[index]) return false;

  // is selectInput has column key?
  if (!obj.selectInput[index].hasOwnProperty("column")) return false;

  // is selectInput has optionValue key?
  if (!obj.selectInput[index].hasOwnProperty("optionValue")) return false;

  // is optionValue has options?
  if (!obj.selectInput[index].optionValue.length > 0) return false;

  return obj.selectInput[index].column === col ? true : false;
};
