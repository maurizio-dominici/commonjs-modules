const getName = (firstName, lastName) => {
  const name = {
    firstName: firstName,
    lastName: lastName,
  };
  return name;
};

module.exports = {
  getName: getName,
};
