const getName = (firstName, lastName) => {
  const name = {
    firstName,
    lastName,
  };
  return name;
};

// const getFullName = (firstName, lastName) => {
//   return `${firstName} ${lastName}`;
// };

module.exports = {
  getName,
  // getFullName,
};
