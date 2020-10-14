// 1) Create our "database"
const { v4: uuidv4 } = require("uuid");
const testId = uuidv4();

const DATABASE = [
  {
    id: testId,
    text:
      "Mary had a little lamb, little lamb, little lamb. Mary had a little lamb whose fleece was white as snow.",
  },
  {
    id: uuidv4(),
    text:
      "Mary had a little lamb, little lamb, little lamb. Mary had a little lamb whose fleece was white as snow.",
  },
];

function createDbEntry(text) {
  if (!text) {
    return;
  }
  const record = {
    id: uuidv4,
    text: text,
  };
  DATABASE.push(record);
  // return newest record
  return DATABASE[DATABASE.length - 1];
}

module.exports = { DATABASE, createDbEntry };

// Normalized DB
// const DATABASE = {
//   documents: {
//     byId: {
//       testId: {
//         id: testId,
//         text:
//           "Mary had a little lamb, little lamb, little lamb. Mary had a little lamb whose fleece was white as snow.",
//       },
//     },
//   },
//   allIds: [testId],
// };
