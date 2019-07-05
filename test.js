const column = ['Name', 'Email', 'Property Code', 'Admin Type', 'Status'];
const options = {
  selecInput: [
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

// Name, 0 // Yes, column: "Admin Type", 0
// Email, 1 // Yes, column: "Status", 1
// Property Code, 2 // No

const saveArr = [0, 1];

const isSelectable = (col, obj) => {
  // Check if object
  if (typeof obj !== 'object') return false;

  // is obj has selectable key?
  if (!obj.hasOwnProperty('selectable')) return false;

  // is selectable length > 0
  if (!obj.selectable.length > 0) return false;

  // find index

  // // is index Number?
  // if (typeof index !== 'number') return false;

  // // is index in selectable?
  // if (!obj.selectable[index]) return false;

  // // is selectable has column key?
  // if (!obj.selectable[index].hasOwnProperty('column')) return false;

  // // is selectable has optionValue key?
  // if (!obj.selectable[index].hasOwnProperty('optionValue')) return false;

  // // is optionValue has options?
  // if (!obj.selectable[index].optionValue.length > 0) return false;

  return obj.selectable[1].column === col ? true : false;
};

console.log(isSelectable('Status', options));
