const column = ['Name', 'Email', 'Property Code', 'Admin Type', 'Status'];
const options = {
  selectInput: [
    {
      column: 'Admin Type',
      optionValue: ['security', 'propAdmin', 'orgAdmin', 'swAdmin']
    },
    {
      column: 'Status',
      optionValue: ['active', 'inactive']
    }
  ]
};

const saveArr = [0, 1];

const isSelectInput = (col, obj) => {
  // Check if object
  if (typeof obj !== 'object') return false;

  // is obj has selectable key?
  if (!obj.hasOwnProperty('selectInput')) return false;

  // is selectable length > 0
  if (!obj.selectInput.length > 0) return false;

  // find index
  const index = obj.selectInput.findIndex(obj => {
    return obj.column === col;
  });

  // column not found
  if (index === -1) return false;

  // is selectInput has optionValue key?
  if (!obj.selectInput[index].hasOwnProperty('optionValue')) return false;

  // is optionValue has options greater than 1?
  if (!obj.selectInput[index].optionValue.length > 1) return false;

  return { result: true, index: index };
};

const result = isSelectInput('Admin Type', options);

result.result ? console.log(true) : console.log(false);

console.log(result.index);
