// Q1

// let inventorsBornInFifteen = [];
// inventors.filter(function(inventor){
//     if (inventor.year >= 1500 && inventor.year <= 1599){
//         inventorsBornInFifteen.push(inventor)
//     } 
//     return inventorsBornInFifteen;
// })
// console.table(inventorsBornInFifteen);

//***************************************************** */
//Q2

//  const inventorsFandL = inventors.map(function(inventor){
//     return `${inventor.first} ${inventor.last}`
// })
// console.log(inventorsFandL)

//****************************************************** */
//Q3

// const ordered = inventors.sort(function(person1, person2){
//     if (person1.year > person2.year) {
//         return 1;
//     }else {
//         return -1;
//     }
// })
// console.table(ordered)

//******************************************************** */
//Q4

// const totalYear = inventors.reduce(function(total,inventor){
//    return total + (inventor.passed - inventor.year) 
// }, 0)
//  console.log(totalYear)

 //******************************************************** */
 //Q5

// const livedOrder = inventors.sort(function(a,b){
//     if ((a.passed - a.year) > (b.passed - b.year)){
//         return -1;
//     }else {
//         return 1;
//     }
// })
// console.table(livedOrder)

//******************************************************** */
//Q6

let category = document.querySelector('.mw-category')
let links = Array.from(category.querySelectorAll('a'));

let de = links
            .map(link => link.textContent)
            .filter(streetName => streetName.includes('de'));


