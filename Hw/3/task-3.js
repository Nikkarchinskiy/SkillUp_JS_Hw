const findBestEmployee = employees => Math.max(...Object.values(employees));

     const result = findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
      });
      console.log(result);