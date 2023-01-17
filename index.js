
// 1 -- - -
let foods = [
    'apple',
    'apricot',
    'avocado',
    'banana',
    'kiwi',
    'lemon',
    'fig'
]
console.log(foods)


// 2 ----
foods[1] = 'pear'.toUpperCase()
foods[3] = 'grapes'.toUpperCase()
foods[4] = 'plum'.toUpperCase()

console.log(foods)

// 3----
console.log(foods.lastIndexOf('fig'))

foods[6] = 'melon'.toUpperCase()

console.log(foods)


// 4 ----
for(let value of foods){
    console.log(foods.length)

}
