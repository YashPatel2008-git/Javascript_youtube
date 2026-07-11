// Array : 

// declaration :  2 type : 
//1 ) 
let names = ["yash" , 'patel' , 'deep' ];
console.log(names);
// 2) 
let fathersname = new Array('Jagdishbhai' , 'naranbhai' , 'rameshbhai');
console.log(fathersname);


//! methods of array.
//length : for find length 
console.log(names.length);

//! add elements
// 1)  push() :  add an element in array 
names.push('Tirth','Neev');
console.log(names);

// 2) unshift() :  add element at starting
names.unshift('Kavya','Rajvi');
console.log(names , names.length);

//! remove elements
// 3) pop() : only remove last element of array.
let removed = names.pop();
console.log(names);
console.log(removed);

// 4) shift() : only remove first element
removed = names.shift();
console.log(names);
console.log(removed);

// 5) indexOf(element) : find the index of an element
// give -1 for element which is not in array
console.log(names.indexOf('Rajvi'));
console.log(names.indexOf('Kavya'));

// 6) includes(element) : give true if element exist in array otherwise false 
names.push(23);
console.log(names.includes('yash'));            // true
console.log(names.includes('Kavya'));           //false
console.log(names.includes('23'));              //false    // match exact value


