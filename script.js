// 18. Your function will be passed two functions,
// f and g, that don't take any parameters.
// Your function has to call them
// , and return a string which indicates which function returned the larger number.
// If f returns the larger number, return the string f.
// If g returns the larger number, return the string g.
// If the functions return the same number, return the string neither.

function whichIsLarger(f, g) {
      const resultF = f();
      const resultG = g();
      if (resultF > resultG) {
        return "f";
      } else if (resultG > resultF) {
        return "g";
      } else {
        return "neither";
      }
};

console.log(whichIsLarger(() => 25, () => 15)); // f
console.log(whichIsLarger(() => 25, () => 25)); // neither
console.log(whichIsLarger(() => 25,  () => 50)); // g

// 22. function that takes two parameters and repeats the string n number of times.

function repetition(txt, n){
    let result = "";
    for (let i = 0; i < n; i++) {
        result += txt;
    }
    return result;
};


console.log(repetition('zim', 5)); //zimzimzimzimzim
console.log(repetition('zoy', 2)); //zoyzoy
console.log(repetition('akib', 7)); //akibakibakibakibakibakibakib

// 23. function that takes an array of non-negative integers and strings and return a new array without the strings.

function filterArray(arr){
    return arr.filter(element => typeof element === 'number');
};


console.log(filterArray([1, 'z', 4, 5, 'i', 9, 'm'])); //[ 1, 4, 5, 9 ]
console.log(filterArray([8, 'z', 1, '8', 'i', 9, 'm'])); //[ 8, 1, 9 ]
console.log(filterArray([7, '1', 'z', 0, 'i', 9, 'm'])); //[ 7, 0, 9 ]