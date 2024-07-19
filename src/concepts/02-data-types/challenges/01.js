export const primitiveDataTypes = () => {
  // declare a variable with a string type
  // display the value in the console
  // display the typeof for the variable in the console
  // declare a variable with a number type
  // display the value in the console
  // display the typeof for the variable in the console
  // declare a variable with a boolean type
  // display the value in the console
  // display the typeof for the variable in the console
  // declare a variable with a big int type
  // display the value in the console
  // display the typeof for the variable in the console
  const myCar = "Tesla";
  console.log(myCar);
  console.log(typeof myCar);

  const myNumer = 80000;
  console.log(myNumer);
  console.log(typeof myNumer);

  const myBoolean = true;
  console.log(myBoolean);
  console.log(typeof myBoolean);

  const myInter = 12345678900000000n;
  console.log(myInter);
  console.log(typeof myInter);
};

export const objectDataTypes = () => {
  // declare a variable with an object type
  // display the value in the console
  // display the typeof for the variable in the console
  // declare a variable with a array type
  // display the value in the console
  // display the typeof for the variable in the console
  // declare a variable with a function type
  // display the typeof for the variable in the console
  // declare a variable with a Date type
  // display the instanceof for the variable in the console
  // declare a variable with a RegExp type
  // display the instanceof for the variable in the console

  const myPc = {
    brand: "Apple",
    device: "MacBook Pro",
    year: 2024,
  };

  console.log(myPc);
  console.log(typeof myPc);

  const myArray = ["Alice Smith", "Bob Smith", "Carol Smith"];
  console.log(myArray);
  console.log(typeof myArray);

  const myFunction = function () {};
  console.log(typeof myFunction);

  const myDate = new Date();
  console.log(myDate instanceof Date);

  const regExp = new RegExp();
  console.log(regExp instanceof RegExp);
};

export const mapDataType = () => {
  // declare a variable with a Map type
  // set the firstName as a key
  // set the lastName as a key
  // display the value of firstName in the console
  // display the value of lastName in the console

  const myMap = new Map();
  myMap.set("firstName", "Bob");
  myMap.set("lastName", "Smith");

  console.log(myMap.get("firstName"));
  console.log(myMap.get("lastName"));
};

export const setDataType = () => {
  // declare a variable with a Set type
  // add one item to the set
  // add one item to the set
  // display the size of the set in the console

  const mySet = new Set();
  mySet.add(1);
  mySet.add(2);
  console.log(mySet.size);
};
