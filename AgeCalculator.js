function ageCalculator(name,yearofBirth,currentYear) {
  const age = currentYear - yearofBirth;
  const message = name + " is " + age + " years old.";
  return message;
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));