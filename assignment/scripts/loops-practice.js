console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
for (let i=0; i<6; i++) {
  console.log('count from 0 to 5', i);
}
//I changed the condition of i<4 to i<6

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
for (let i=3; i<6; i++) {
console.log('count from 3 to 5', i);
}
//I changed i=0 to i=3

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
for (let i=1; i<11; i++) {
  if ([i] % 2 ===0) {
 console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):', i);
  }
 };
 //I changged i=0 to i=1, and i<4 to i<11, added an if statement to get even numbers logged

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0

for (let i=5; i>-1; i--) {
  console.log('STRETCH: countdown from 5 to 0', i);
 };


// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
for (const element of stars) {     // const element represents each star in the array
    console.log('Some stars:', element);  //done this way-with element- to iterate each element seperately
};


// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
let index = 0;
while (index < stars.length) {
console.log('Some stars using while:', stars[index]);
index++;
};

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
let i = 0;
while (i < 6) {
  console.log('count from 0 to 5', i);
  i++;
};


// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
let num = 10;  //had to keep the variable name different for each TODO because I had problems if they were the same
while(num>4) {
  console.log('count backwards from 10 to 5', num);
  num--;
};

