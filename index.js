const { DATABASE, createDbEntry } = require("./database");
const { searchByQuery } = require("./search");

const actions = {
  add: "ADD",
  search: "SEARCH",
};

// assumptions:
// first arg = action (add or search)
// second arg = text (add) or query string (search)
// TODO: loop actions to allow user to submit more than one
function main() {
  const args = process.argv.slice(2);

  const [action, text] = args;
  if (!action || !text || !hasValidArguments(args)) {
    return console.log("Invalid arguments.");
  }

  switch (actions[action]) {
    case "ADD":
      const newEntry = createDbEntry(text);
      console.log(`Success! You added: ${newEntry.text}`);
      break;
    case "SEARCH":
      const records = searchByQuery(text);
      const msg =
        records.length > 0
          ? `We found the following records: [${records}]`
          : "No entries found.";
      console.log(msg);
      break;
    default:
      console.log("Something went wrong...");
  }
}

// Can be extended to meet more strict validation requirements
function hasValidArguments(args) {
  const [action, text] = args;
  // we have an action in our map and text is not null or undefined.
  return actions[action] && text != null;
}

main();
