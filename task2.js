// Реализуйте функцию sum
function sum(){
    let res = 0;
    
    for (let i = 0; i < this.length; i++){
        res += this[i];
    }
    return res;
}


console.log(sum.call([5, 5, 5, 5, 5, 5, 5, 5, 5]));
