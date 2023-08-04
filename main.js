function addNums(nums){
    let sum = 0;

    for (let index = 0; index < nums.length; index++) {
        sum += nums[index];
    }
    return sum;
}

const numbers = [1, 3, 5, 9];
const sumNums = addNums(numbers);
console.log(sumNums);



  
  