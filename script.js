const getnum = () => {
  const num = document.getElementById("number").value;

  let converted = convertToRoman(num);

  document.getElementById("roman").innerHTML = converted;
};

const convertToRoman = (num) => {
  const roman_numbers = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  let total = [];

  while (num != 0) {
    if (num >= 1000) {
      total.push(roman_numbers[1000]);
      num -= 1000;
    } else if (num >= 900) {
      total.push(roman_numbers[900]);
      num -= 900;
    } else if (num >= 500) {
      total.push(roman_numbers[500]);
      num -= 500;
    } else if (num >= 400) {
      total.push(roman_numbers[400]);
      num -= 400;
    } else if (num >= 100) {
      total.push(roman_numbers[100]);
      num -= 100;
    } else if (num >= 90) {
      total.push(roman_numbers[90]);
      num -= 90;
    } else if (num >= 50) {
      total.push(roman_numbers[50]);
      num -= 50;
    } else if (num >= 40) {
      total.push(roman_numbers[40]);
      num -= 40;
    } else if (num >= 10) {
      total.push(roman_numbers[10]);
      num -= 10;
    } else if (num == 9) {
      total.push(roman_numbers[9]);
      num -= 9;
    } else if (num >= 5) {
      total.push(roman_numbers[5]);
      num -= 5;
    } else if (num == 4) {
      total.push(roman_numbers[4]);
      num -= 4;
    } else if (num >= 1) {
      total.push(roman_numbers[1]);
      num -= 1;
    }
  }

  return total.join("");
};
