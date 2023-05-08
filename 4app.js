const_  = require('lodash');
let randomNum1 = _.random(10);
let randomNum2 = _.random(1,100);
console.log(randomNum1);
console.log(randomNum2);
let myArr = ['apple','orange','banana','blue berry','grape'];
let randomItem = _.sample(myArr);
console.log(myArr);
console.log(randomItem);
console.log(_.shuffle(myArr));
console.log(_.shuffle(myArr));
let counter = 0;
_.times(5,function(){
    counter++;
    console.log(counter)
})
let arr2 = _.map(myArr,function(item){
    console.log(item);
    return item.toUpperCase();

})
console.log(arr2);