/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            // if index #s aren't the same and nums[j] == nums[i] -> array contains duplicate (true)
            if(i != j && nums[j] == nums[i]){
                return true;
            }
        }
    }
    return false;
};
console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3]));
console.log(containsDuplicate([1,2,3,5,6,8,9]));
console.log(containsDuplicate([1,2,3,4,2,4,2]));