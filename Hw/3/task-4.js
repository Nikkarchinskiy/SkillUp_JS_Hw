const countTotalSalary = function (employees) {
    let salaries = Object.values(employees);
    let totalSalary = 0;
    for (let salary of salaries) {
        totalSalary += salary;
    }
    return totalSalary;
};

console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    }),
  );