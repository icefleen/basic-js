const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let teamName = [];

  for (let member of members) {
    if (typeof member !== "string") continue;

    for (let letter of member) {
      if (letter == " ") continue;
      teamName.push(letter.toUpperCase());
      break;
    }
  }

  return teamName.sort().join("");
};
