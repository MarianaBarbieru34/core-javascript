export const takeHomeSalary = (annualIncome, taxYear) => {
  const validTaxYears = ["2021/2022", "2022/2023"];

  if (!validTaxYears.includes(taxYear)) {
    return "Please enter a valid tax year!";
  }

  if (annualIncome <= 0) {
    return "Please enter a valid salary!";
  }
};
