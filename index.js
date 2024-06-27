/*
const message = "Ahmed";
const result = new RegExp("Ahmed").test(message);
console.log(result);

const regex = /^hi/;
console.log(regex.test("hi, how are you?"))
console.log(regex.test("how high is this building?"))

const regex1 = /good bye$/;
console.log(regex.test("Thank you and good bye")); // true)
console.log(regex.test("🎤 good bye my lover")); // false)

const regex2 = /good bye/i; // case-insensitive
console.log(regex2.test("Good bye!")); // true

const orders = new Map();
orders.set("table_14", "processed");
orders.set("terrace_5", "delivered");
orders.set("terrace_10", "paid");
console.log(orders);
console.log(orders.size);
orders.delete("terrace_10");
console.log(orders.size);
console.log(orders);

orders.forEach((value, key) => {
  console.log(value, key);
})

for (const order of orders){
  console.log(order)
}
for (const [value, key] of orders) {
  console.log(value, key);
}

const set = new Set();
set.add(10);
set.add(30);
set.add(15);
set.add(90);
console.log(set.size)
console.log(set)

const tags = new Set();
tags.add("JavaScript");
tags.add("How to");
tags.add("Tutorial");
tags.add("How to"); // Duplicate, ignored
tags.add("JavaScript"); // Duplicate, ignored
console.log(tags);



const numbers = [1, 2, 3, 1, 3, 41, 2, 3, 1, 3, 41, 2, 3, 1, 3, 41, 2, 3, 1, 3, 4];
const set1 = new Set(numbers);
console.log(set1); 

function input_type(value) {
  // write your code here
 if(/^\d+$/.test(value)) {
  return "integer"
 } else if (typeof value === "string"){
  return "string"
 }
 return "double"
}
console.log(input_type(12))

*/
function delete_element_in_array(arr, index) {
  // write your code here
   return arr.filter(x => arr.indexOf(x) === index);
}
console.log(delete_element_in_array([3, 2, 4, 88], 2))