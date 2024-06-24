function math1(arr) {
  return arr.filter((item) => item >= 0);
}

// console.log(math1([1, 2, 3, -6, 0, -4]));

// |---- - - - -

function math2(string) {
  return string.split("").reverse().join("");
}

// console.log(math2("Salom"));

// |---- - - - -

function math3(num) {
  return Number(String(num).split("").reverse().join(""));
}

// console.log(math3(123));

// |---- - - - -

function math4(arr) {
  return arr.filter((boolean) => !boolean);
}
// console.log(math4([true, false, false, true, false]));

// |---- - - - -

function math5(arr) {
  return arr.filter((num) => num % 2 == 0);
}

// console.log(math5([1, 2, 3, 4, 9, 8, 7, 6, 5, 4, 3]));

// |---- - - - -

function math6(arr) {
  return arr.map((num) => num * num);
}

// console.log(math6([1, 2, 3, 4, 5, 6, 7]));

// |---- - - - -

function math7(limit) {
  let result = [];
  for (let i = 0; i <= limit; i++) {
    result[i] = i;
  }
  result.shift();
  return result;
}

// console.log(math7(9));

// |---- - - - -

function math8(a, b) {
  let result = [];
  for (let i = a; i <= b; i++) {
    result.push(i);
  }
  return result.filter((num) => num % 2 == 0);
}

// console.log(math8(4, 12));

// |---- - - - -

function math9(str) {
  let helper = str.split("");
  helper[0] = helper[0].toUpperCase();

  return helper.join("");
}

// console.log(math9("salom"));

// |---- - - - -

function math10(str, limit) {
  let helper = [];
  for (let i = 0; i < limit; i++) helper.push(str);

  return helper.join(" ");
}

// console.log(math10("Salom", 3));

// |---- - - - -

function math11(arr) {
  return arr.reverse();
}

// console.log(math11([1, 2, 3, 9, 7, 6, 5, 4]));

// |---- - - - -

function math12(arr) {
  return arr.sort((a, b) => a - b);
}

// console.log(math12([1, 8, 2, 9, 0]));
