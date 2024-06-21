// 853. Car Fleet



// There are n cars at given miles away from the starting mile 0, traveling to reach the mile target.
// You are given two integer array position and speed, both of length n, where position[i] is the starting mile of the ith car and speed[i] is the speed of the ith car in miles per hour.
// A car cannot pass another car, but it can catch up and then travel next to it at the speed of the slower car.
// A car fleet is a car or cars driving next to each other. The speed of the car fleet is the minimum speed of any car in the fleet.
// If a car catches up to a car fleet at the mile target, it will still be considered as part of the car fleet.
// Return the number of car fleets that will arrive at the destination.




/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    // Create an array of cars with their position and time to reach the target
    let cars = position.map((pos, i) => [pos, (target - pos) / speed[i]]);
    
    // Sort the cars based on their starting positions in descending order
    cars.sort((a, b) => b[0] - a[0]);
    
    let stack = [];
    
    for (let [pos, time] of cars) {
        // If the stack is empty or the time of the current car is greater than the
        // time at the top of the stack, it means this car starts a new fleet
        if (stack.length === 0 || time > stack[stack.length - 1]) {
            stack.push(time);
        }
    }
    
    // The number of fleets is the size of the stack
    return stack.length;
};



// Attempted





var carFleet = function(target, position, speed) {

    let stack = new Map()

    for(let i = 0; i < position.length; i++){

        if(stack.has(position[i])){
            let count = stack.get(position[i])
            stack.set(position[i], count + 1)
        }
        else{
            let sum = position[i] + speed[i]

            if(stack.has(sum)){
                let count = stack.get(sum)
                stack.set(sum, count + 1)
            }else{
                stack.set(sum, 1)
            }
        }
        
    }
    return stack.size
};