function reduce(nums, fn, init) {
    let val = init;

    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }

    return val;
}

const nums = [1, 2, 3, 4];
const sumFunction = (acc, curr) => acc + curr;
const initialValue = 0;

console.log(reduce(nums, sumFunction, initialValue)); 