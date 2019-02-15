function monitorCount(rows, columns) {
  return rows * columns;
}
function costOfMonitors (rows, columns){
  return monitorCount(rows, columns) * 200
}
const totalCost = costOfMonitors(5, 4);
console.log(totalCost);


// Helper functions are nested functions inside of other functions. What is returned inside this helper function is then used in the parent function
