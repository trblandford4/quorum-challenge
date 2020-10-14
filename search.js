const { DATABASE } = require("./database");

// Search for documents that include a search query
// Step 1: One word, case insensitive
function searchByQuery(query) {
  if (query == null) {
    return [];
  }
  const records = DATABASE.filter((document) => {
    const { id, text } = document;
    if (isQueryInString(query, text)) {
      return document;
    }
  }).map((document) => document.id);

  return records;
}

function isQueryInString(query, text) {
  if (!query || !text) {
    return false;
  }
  // Clean inputs
  const normalizedQuery = query.toLowerCase().trim();
  const normalizedText = text.toLowerCase();

  // Match using regualar expression.
  const regex = new RegExp("\\b" + normalizedQuery + "\\b");
  return normalizedText.match(regex);
}

module.exports = { searchByQuery };
