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
