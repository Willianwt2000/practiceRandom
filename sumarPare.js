//? Sumar pares
//Input: [1, 2, 3, 4, 5, 6] 
//output: 12
var nums = [1, 2, 3, 4, 5, 6];
var acumulated = 0;
for (var i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        acumulated += nums[i];
        console.log(acumulated);
    }
}
console.log(acumulated);
