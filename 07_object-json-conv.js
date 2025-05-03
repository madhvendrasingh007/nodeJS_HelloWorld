// JSON to obejct conversion
// JSON.parse() method is used to convert JSON string to object

const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject); // { name: 'John', age: 30, city: 'New York' }
console.log(jsonObject.name); // John

// Object to JSON conversion
// JSON.stringify() method is used to convert object to JSON string

const object = { name: "John", age: 30, city: "New York" };
const json = JSON.stringify(object);
console.log(json); // {"name":"John","age":30,"city":"New York"}
console.log(typeof json); // string