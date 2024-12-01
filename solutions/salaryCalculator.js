
function calculateSalary(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits;
    let tax = calculateTax(basicSalary);
    let nhif = calculateNHIF(basicSalary);
    let nssf = calculateNSSF(basicSalary);
    let netSalary = grossSalary - tax - nhif - nssf;
    return netSalary;
  }
  
  console.log(calculateSalary(50000, 10000));  