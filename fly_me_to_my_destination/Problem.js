function flyMe(arr) {
    const n = arr.length;
  
    // Check if possible to reach the last airport
    if (arr[0] === 0) {
      return -1;
    }
  
    let plane = 1; // Number of planes required
    let maxFuel = arr[0]; // Maximum fuel available
  
    for (let i = 1; i < n; i++) {
      // If cannot reach the current airport with the available fuel, hire a new plane
      if (maxFuel === 0) {
        if (arr[i] === 0) {
          return -1;
        }
        plane++;
        maxFuel = arr[i] - 1; // subtract 1 as we need 1 unit of fuel to fly to the next airport
      } else {
        maxFuel--;
      }
  
      // Update the maximum fuel if the current airport has more fuel
      if (arr[i] > maxFuel) {
        maxFuel = arr[i];
      }
    }
  
    return plane;
  }
  
  
  console.log(flyMe([2, 1, 2, 3, 1])); // --> 2
  console.log(flyMe([1, 6, 3, 4, 5, 0, 0, 0, 6])); // --> 3
  console.log(flyMe([0, 1, 2])); // --> -1 (Not possible to reach the last airport)
  