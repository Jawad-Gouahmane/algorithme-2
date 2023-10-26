
function findDistinctSum(set1, set2) {
    let sum = 0;
  
   // Iterate through elements in set1
    for (let element of set1) {
      if (!set2.includes(element)) {
        sum += element;
      }
    }
  
  //  Iterate through elements in set2
    for (let element of set2) {
      if (!set1.includes(element)) {
        sum += element;
      }
    }
  
    return sum;
  }
  
  const set1 = [3, 1, 7, 9];
  const set2 = [2, 4, 1, 9, 3];
  
  const result = findDistinctSum(set1, set2);
  console.log("Output:", result); // Output: 13 (distinct elements 4, 7, 2) 

