"use strict";

// Define the restaurant object with starterMenu and mainMenu properties
const restaurant = {
    starterMenu: ['Salad', 'Soup', 'Breadsticks'],
    mainMenu: ['Pizza', 'Pasta', 'Burger']
};

// The for-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
    console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);
