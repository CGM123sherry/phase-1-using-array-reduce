const batteryBatches = [4, 5, 3, 10, 8];

// Using reduce method
const totalBatteries = batteryBatches.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 1); // Initial value of accumulator is 1

console.log(totalBatteries); 
