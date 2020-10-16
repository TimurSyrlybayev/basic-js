const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let teamName = '';
    let membersNames = members.filter(element => typeof (element) === 'string');
    membersNames = membersNames.map(function (name) {
      return name.toUpperCase().trim();
    });
    membersNames.sort().forEach(function (memberName) {
      return teamName += memberName[0];
    });
    return teamName;
  }
  return false;
};
