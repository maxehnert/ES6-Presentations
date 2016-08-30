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
