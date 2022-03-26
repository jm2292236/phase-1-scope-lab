// Write your solution in this file!
var customerName = 'Ivan';
const leastFavoriteCustomer = 'unknown';

function upperCaseCustomerName() {
    return customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not Bob';
}

function overwriteBestCustomer() {
    // This variable was declared in another function in a global scope and can be changed here too!
    bestCustomer = "Yes, it's Bob";
}

function changeLeastFavoriteCustomer() {
    // We get a TypeError because this identifier was declared with const
    leastFavoriteCustomer = 'some dude';
}

console.log(upperCaseCustomerName());
setBestCustomer();
overwriteBestCustomer();
changeLeastFavoriteCustomer();
console.log(bestCustomer);
