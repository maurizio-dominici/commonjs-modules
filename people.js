const { getName } = require("./names.js");
const { getHobbies } = require("./hobbies.js");

const init = () => {
  const people = {
    fullName: getName("Maurizio", "dominici"),
    hobbies: getHobbies("fishing", "running", "sleeping"),
  };
  return people;
};

console.log(init());
