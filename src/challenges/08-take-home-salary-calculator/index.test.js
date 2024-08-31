import { takeHomeSalary } from ".";

describe("takeHomeSalary", () => {
  describe("for tax year 2021/2022", () => {
    it("should return expected result for 30000", () => {
      const expected = {
        annualIncome: 30000,
        taxYear: "2021/2022",
        taxableIncome: 17500,
        taxPercentage: 20,
        taxAmount: 3500,
        takeHomeSalary: 26500,
      };

      const actual = takeHomeSalary(30000, "2021/2022");

      expect(actual).toEqual(expected);
    });

    it("should return expected result for 50000", () => {
      const expected = {
        annualIncome: 50000,
        taxYear: "2021/2022",
        taxableIncome: 37500,
        taxPercentage: 40,
        taxAmount: 15000,
        takeHomeSalary: 35000,
      };

      const actual = takeHomeSalary(50000, "2021/2022");

      expect(actual).toEqual(expected);
    });

    it("should return expected result for 150000", () => {
      const expected = {
        annualIncome: 150000,
        taxYear: "2021/2022",
        taxableIncome: 137500,
        taxPercentage: 45,
        taxAmount: 61875,
        takeHomeSalary: 88125,
      };

      const actual = takeHomeSalary(150000, "2021/2022");

      expect(actual).toEqual(expected);
    });

    it("should return expected result for 10000", () => {
      const expected = {
        annualIncome: 10000,
        taxYear: "2021/2022",
        taxableIncome: 0,
        taxPercentage: 0,
        taxAmount: 0,
        takeHomeSalary: 10000,
      };
      const actual = takeHomeSalary(10000, "2021/2022");

      expect(actual).toEqual(expected);
    });
  });

  describe("for tax year 2022/2023", () => {
    it("should return expected result for 30000", () => {
      const expected = {
        annualIncome: 30000,
        taxYear: "2022/2023",
        taxableIncome: 17500,
        taxPercentage: 18,
        taxAmount: 3150,
        takeHomeSalary: 26850,
      };

      const actual = takeHomeSalary(30000, "2022/2023");

      expect(actual).toEqual(expected);
    });

    it("should return expected result for 50000", () => {
      const expected = {
        annualIncome: 50000,
        taxYear: "2022/2023",
        taxableIncome: 37500,
        taxPercentage: 35,
        taxAmount: 13125,
        takeHomeSalary: 36875,
      };
      const actual = takeHomeSalary(50000, "2022/2023");

      expect(actual).toEqual(expected);
    });

    it("should return expected result for 150000", () => {
      const expected = {
        annualIncome: 150000,
        taxYear: "2022/2023",
        taxableIncome: 137500,
        taxPercentage: 40,
        taxAmount: 55000,
        takeHomeSalary: 95000,
      };

      const actual = takeHomeSalary(150000, "2022/2023");

      expect(actual).toEqual(expected);
    });

    it("should return expected result for 10000", () => {
      const expected = {
        annualIncome: 10000,
        taxYear: "2022/2023",
        taxableIncome: 0,
        taxPercentage: 0,
        taxAmount: 0,
        takeHomeSalary: 10000,
      };
      const actual = takeHomeSalary(10000, "2022/2023");

      expect(actual).toEqual(expected);
    });
  });

  describe("error handling", () => {
    it("should return error message for invalid year", () => {
      const expected = "Please enter a valid tax year!";
      const actual = takeHomeSalary(30000, "2020/2021");
      expect(actual).toEqual(expected);
    });

    it("should return error message for annual income  year 0", () => {
      const expected = "Please enter a valid salary!";
      const actual = takeHomeSalary(0, "2021/2022");
      expect(actual).toEqual(expected);
    });

    it("should return error message for negative  annual income  ", () => {
      const expected = "Please enter a valid salary!";
      const actual = takeHomeSalary(-30000, "2021/2022");
      expect(actual).toEqual(expected);
    });
  });
});
