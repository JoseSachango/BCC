function logAndLog(n) {
  count = 0; //n.length => n
  for (var i = 1; i < n; i = i * 2) { 
      count++;
  }
  
  return count
}

console.log(logAndLog(3));
console.log("----------");
console.log(logAndLog(10));
console.log("----------");
console.log(logAndLog(100));