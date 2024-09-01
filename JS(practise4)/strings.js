let userName = `My name is abc`;

console.log(userName.length)
console.log(userName[0])

// console.log(userName.toUpperCase())
// console.log(userName.toLowerCase())
console.log(userName.trim().length)

console.log(userName.includes('na2me'))

console.log(userName.charAt(1));
console.log(userName[1]);

userName.__proto__.reverse = function() {

    let words = this.split('');
    console.log(words)
    // words.reverse();

    return words.join(" ");

}

let o = userName.reverse();
// console.log(o)

let demo = 'This is string';
demo = demo.toLocaleLowerCase();

console.log(demo);