//? Sumar pares

//Input: [1, 2, 3, 4, 5, 6] 
//output: 12



let nums:number[] = [1, 2, 3, 4, 5, 6] 
let acumulated :number= 0
for (let i = 0; i < nums.length; i++) {
  if(nums[i] % 2 === 0) {
    acumulated+=nums[i]
  }
}

console.log(acumulated)