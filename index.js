/** Strings
 string literals *
 link *
 endsWith *
 includes *
 repeat *
 startsWith *
 String.raw


 es7 - padEnd, padStart
 */

var myVar = `me`

var str = `Are you ${myVar} ?` // Are you me ?

var diffStr = `What's 3 + 4 ? ${ 3 + 4 }` // What's 3 + 4 ? 7

str.endsWith(`me ?`) // true
str.endsWith(`you`) // false

str.startsWith(`Are`) // true
str.startsWith(`are`) // false

str.includes('you') // true
str.includes('everyone') // false
str.includes('you', 5) // false

var URL = `https://google.com`
str.link(URL)

str.repeat(1) // Are you me ?
str.repeat(2) // Are you me ?Are you me ?

let name = 'Max';
String.raw`Hi\n${name}!`; // Hi\nMax!


/**** OBJECTS ****/
var firstObj = {myName: 'max', myEmail: 'max@codekoalas.com'}

var secObj = {where: 'codekoalas'}

// Object destructuring
var { myName, myEmail } = firstObj // myEmail -> max@codekoalas.com

// Computed property names
var key = "z";
var { [key]: foo } = { z: "bar" };

(function coolFunc(firstObj) {
  return (
    {
      myName
    }
  )
})() // returns {myName: "max"}

function betterFunc({ myName }) {
  return (
    myName
  )
}
betterFunc(firstObj) // returns "max"


// Merges Objects into a New object
var copyObj = Object.assign({}, firstObj, secObj) // {myName: 'max', myEmail: 'max@codekoalas.com', myName: "max"}

var bsObj = {you: "Name"}

// Merges objects and Overwrites the bsObj
var newBsObj = Object.assign(bsObj, {me: 'max'})
// bsObj -> {you: "Name", me: "max"}
// newBsObj -> {you: "Name", me: "max"}

// Compare Objects, returns boolean
Object.is(newBsObj, newBsObj) // true
Object.is(newBsObj, secObj) // false


// spread syntax
var lastObj = {};
[first, ...lastObj.prop] = ['a', 'b', 'c'];
// lastObj -> {prop: ["b", "c"]}
