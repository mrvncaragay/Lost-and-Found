const urlSanitizer = urlStr => {
  if (typeof urlStr !== "string") throw new Error("Must be string");
  const tempStr = urlStr;

  return tempStr.trim().replace(/ /gi, "-");
};

export default urlSanitizer;
