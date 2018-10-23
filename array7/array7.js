//Q1

// const older = people.some(function(person){
//   let thisYear = new Date().getFullYear();
//     return thisYear - person.year >= 19;
// })
// console.log({older});

const older = people.some(person => {
    let thisYear = new Date().getFullYear();
    return thisYear - person.year >= 19;
})
console.log(older)

//*************************************** */
//Q2

// const olderEvery = people.every(function(person){
//     let thisYear = new Date().getFullYear();
//     return thisYear - person.year >= 19;
// })
// console.log({olderEvery});

const olderEvery = people.every(person => ((new Date().getFullYear() - person.year) >= 19));
console.log({olderEvery});

//******************************************
//Q3

// const findComment = comments.find(function(comment){
//     return comment.id == '823423'
// })
// console.log(findComment);

const findComment = comments.find(comment => comment.id == 823423)
console.log(findComment);
//**************************************** */
//Q4

// const findIndex = comments.findIndex(function(comment){
//     return comment.id === 823423 ;
// })

const findIndex = comments.find(comment => comment.id === 823423)

comments.splice(findIndex, 1)
console.log(findIndex)
console.table(comments)