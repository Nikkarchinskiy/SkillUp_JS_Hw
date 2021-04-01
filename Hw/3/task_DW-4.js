// const countTotalSalary = function(employees) {
//   return Object.values(employees).reduce((total, current) => {
//       return total + Number(current);
//   }, 0)
// };


// const countTotalSalary = employees => Object.values(employees).reduce((total, current) => total + current, 0);

const countTotalSalary = function(employees) {
    total = 0;
    for (let arrNumber in Object.values(employees)) {
        total += arrNumber;
    }
};

 let user = {
       mango: 100,
       poly: 150,
       alfred: 80,
};

  console.log( countTotalSalary(user) );


