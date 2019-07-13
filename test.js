const payload = {
  age: 21
};

const found = null;

const found2 = [{ age: 99 }];

const a = [payload, ...(true ? found2 : [])];

console.log(a);
