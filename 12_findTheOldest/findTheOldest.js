const findTheOldest = function (arr) {
  const thisYear = new Date().getFullYear();
  return arr.reduce((oldest, person) => {
    const oldestDeath = "yearOfDeath" in oldest ? oldest.yearOfDeath : thisYear;
    const personDeath = "yearOfDeath" in person ? person.yearOfDeath : thisYear;
    const oldestAge = oldestDeath - oldest.yearOfBirth;
    const personAge = personDeath - person.yearOfBirth;
    if (personAge > oldestAge) {
      return person;
    }
    return oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
